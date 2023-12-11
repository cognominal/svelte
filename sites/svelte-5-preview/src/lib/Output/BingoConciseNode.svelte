<script>
	import { get_repl_context } from '$lib/context.js';
	import { tick } from 'svelte';

	export let key = '';
	/** @type {import('svelte/types/compiler/interfaces').Ast} */
	export let value;
	export let collapsed = true;
	/** @type {import('svelte/types/compiler/interfaces').Ast[]} */
	export let path_nodes = [];
	export let autoscroll = true;

	const { module_editor, toggleable } = get_repl_context();

	/** @type {HTMLLIElement} */
	let list_item_el;

	$: is_root = path_nodes[0] === value;
	$: is_leaf = path_nodes[path_nodes.length - 1] === value;
	$: is_ast_array = Array.isArray(value);
	$: is_collapsable = value && typeof value === 'object';
	$: is_markable =
		is_collapsable &&
		'start' in value &&
		'end' in value &&
		typeof value.start === 'number' &&
		typeof value.end === 'number';
	let key_text = '';

	$: {
		  const k = key ? `${key}: ` : '';
			let annotation = ''
			if (value && areObj(value)) {
				if ('type' in value) {
					annotation += `${value.type} `;
				}
				if ('operator' in value) {
					annotation += `${value.operator} `;
				}
				if ('value' in value) {
					// @ts-ignore
					// value.value is a string or number
					annotation += `${sprintValue(value.value)} `;
				}
				if ('name' in value) {
					annotation += `${value.name} `;
				}
				// I thought js had `kind` and svelte `type`
				// } else if ('kind' in value) {
				// 	annotation = `k:${value.kind}`;

			}
			key_text = `${k}${annotation}`;
		// console.log('text:', key_text, 'key:', key, 'value:', value)
	}

	let preview_text = '';
	$: {
		if (!is_collapsable || !collapsed) break $;

		if (is_ast_array) {
			if (!('length' in value)) break $;

			preview_text = `[ ${value.length} element${value.length === 1 ? '' : 's'} ]`;
		} else {
			preview_text = ''
			// preview_text = `{ ${filtered_object(value)} }`;
		}
	}

	$: collapsed = !path_nodes.includes(value);

	$: if (autoscroll && is_leaf && !$toggleable) {
		// wait for all nodes to render before scroll
		tick().then(() => {
			if (list_item_el) {
				list_item_el.scrollIntoView();
			}
		});
	}

	/**
	 *
	 * @param {number|string} v
	 * @returns {string}
	 */
	function sprintValue(v) {
		if (typeof v === 'string') {
			if (v.length > 20) {
				return `"${v.slice(0, 20)}"...`
			}
			return `"${v}"`

		}
		return `$v`

	}

	/**
	 * @param {string} k
	 * @reutrn {boolean}
	 */
	function filtered_out_key(k) {
		return k === 'start' || k === 'end' || k === 'loc' || k === 'type';
	}

/**
 *
 * @param {...*} args
 * @returns {boolean}
 */
function areObj(...args) {
	return args.every(o => typeof o === 'object' && o !== null && o !== undefined && !Array.isArray(o));
}

/**
 *
 * @param {Object} obj
 * @return {Array<[string, any]>}
 */
function sortedEntries(obj) {
	const entries = Object.entries(obj)
	if (is_ast_array) {
		return entries
	}
	return entries.sort(([aKey, aVal], [bKey, bVal]) => {
		if (areObj(aVal, bVal)) {
			if (aVal.start && bVal.start) {
				return bVal.start - aVal.start
			}

		} else if (areObj(aVal)) {
			return 1
		} else if (areObj(bVal)) {
			return -1
		}
		if (aKey < bKey) return -1;
		if (aKey > bKey) return 1;
		return 0;
	})
}

	/**
	 * @param {Object} obj
	 * @returns {string}
	 */

	function filtered_object(obj) {
		const result = [];

		for (const [k, v] of Object.entries(obj)) {
			if (filtered_out_key(k)) continue;
			result.push(k);
		}

		return result.join(', ');
	}
	/** @param {MouseEvent | FocusEvent} e */
	function handle_mark_text(e) {
		if (is_markable) {
			e.stopPropagation();

			if (
				'start' in value &&
				'end' in value &&
				typeof value.start === 'number' &&
				typeof value.end === 'number'
			) {
				$module_editor?.markText({ from: value.start ?? 0, to: value.end ?? 0 });
			}
		}
	}

	/** @param {MouseEvent} e */
	function handle_unmark_text(e) {
		if (is_markable) {
			e.stopPropagation();
			$module_editor?.unmarkText();
		}
	}
</script>

<li
	bind:this={list_item_el}
	class:marked={!is_root && is_leaf}
	on:mouseover={handle_mark_text}
	on:focus={handle_mark_text}
	on:mouseleave={handle_unmark_text}
>
	{#if !is_root && is_collapsable && filtered_object(value) !== ''}
		<button class="ast-toggle" class:open={!collapsed} on:click={() => (collapsed = !collapsed)}>
			{key_text}
		</button>
	{:else if key_text}
		<span>{key_text}</span>
	{/if}
	{#if is_collapsable}
		{#if collapsed && !is_root}
			<button class="preview" on:click={() => (collapsed = !collapsed)}>
				{preview_text}
			</button>
		{:else}
			<ul>
				{#each sortedEntries(value) as [k, v]}
					{#if !filtered_out_key(k) &&  typeof v === 'object' && v !== null }
						<svelte:self key={is_ast_array ? '' : k} value={v} {path_nodes} {autoscroll} />
					{/if}
				{/each}
			</ul>
		{/if}
	{:else}
		<span class="token {typeof value}">
			{JSON.stringify(value)}
		</span>
	{/if}
</li>

<style>
	ul {
		padding: 0 0 0 2ch;
		margin: 0;
		list-style-type: none;
	}

	.marked {
		background-color: var(--sk-highlight-color);
	}

	.preview {
		opacity: 0.8;
		font-style: italic;
	}

	button:hover {
		text-decoration: underline;
	}

	.ast-toggle {
		position: relative;
	}

	.ast-toggle::before {
		content: '\25B6';
		position: absolute;
		bottom: 0;
		left: -1.3rem;
		opacity: 0.7;
	}

	.ast-toggle.open::before {
		content: '\25BC';
	}

	.token {
		color: var(--sk-code-base);
	}

	.token.string {
		color: var(--sk-code-string);
	}

	.token.number {
		color: var(--sk-code-number);
	}
</style>
