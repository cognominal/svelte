<script lang="ts">
	import { tick } from 'svelte';
	import { onMount } from 'svelte';

	// import { open } from './ContextMenu.svelte';
	import type { MenuItem } from '$lib/tutorial';
	import { forcefocus } from '@sveltejs/site-kit/actions';
	import * as context from './context.js';

	interface Props {
		name: string;
		icon?: string;
		depth?: number;
		onclick?: (e: MouseEvent) => void;
		sticky?: boolean;
	}

	let { name, icon = '', depth = 0, onclick, sticky = false }: Props = $props();

	const { stickyHeights } = context.get();

	let li: HTMLElement | undefined;

	onMount(() => {
		if (li) {
			// Dynamically measure the height of the header
			const height = li.getBoundingClientRect().height;
			$stickyHeights[depth] = height; // Store height in the shared array
		}
	});

	// Calculate the cumulative offset for the current depth
	let topOffset = $derived(
		$stickyHeights
			.slice(0, depth) // Sum up heights of previous headers
			.reduce((sum, height) => sum + (height || 0), 0)
	);

</script>

<!-- style="padding: 0 1rem 0 calc(1rem + var(--inset));"  -->
<!-- class="pt-0 pr-4 pb-0 pl-dynamic  -->

<li bind:this={li} class=" " style:--depth={depth} style:--icon="url(&quot;{icon}&quot;)">
	<button {onclick} 
	class="pt-0 pr-4 pb-0 pl-dynamic block relative m-0  text-inherit flex-1 h-full text-left border-2 border-transparent whitespace-nowrap overflow-hidden leading-none top-[{topOffset}] z-[{100 - depth}] {sticky ? 'sticky' : ''}"
		>{name} 
	</button>
</li>

<style>
  .pl-dynamic {
    padding-left: calc(1rem + var(--inset));
  }

	li {
		--bg: var(--sk-bg-3);
		--inset: calc((var(--depth) * 1.2rem) + 1.5rem);
		display: flex;
		position: relative;
		width: calc(100% - 1px);
		height: 2.4rem;
		z-index: 1;
		background: var(--bg) var(--icon) no-repeat;
		background-position: calc(var(--inset) - 0.5rem) 50%;
		background-size: 1.2rem;
	}

	button,
	input {
		background-size: 1.2rem 1.2rem;
		background-position: 0 45%;
		background-repeat: no-repeat;
	}


	.sticky {
		/* background-color: var(--bg-color); */
		/* opacity: 1; */
		/* background-color: black; */
		position: sticky;
		/* padding: 8px; */
		/* border-bottom: 1px solid #ddd; */
	}

	/*
	:focus-visible {
		outline-offset: -2px;
	}

	input {
		background: var(--sk-bg-3);
		margin: 0 0.5rem 0 calc(0.5rem + var(--inset));
		border: 2px solid transparent;
		padding: 0 0.5rem;
		font: inherit;
	}


	input {
		width: 100%;
		height: 100%;
	}

	.actions {
		display: flex;
		right: 0;
		top: 0;
		height: 100%;
		padding-right: 1rem;
		background-color: var(--bg);
		white-space: pre;
	}

	.icon {
		height: 100%;
		width: 1.5rem;
	}

	.icon.rename {
		background-image: url($lib/icons/rename.svg);
	}

	.icon.delete {
		background-image: url($lib/icons/delete.svg);
	}

	.icon.file-new {
		background-image: url($lib/icons/file-new.svg);
	}

	.icon.folder-new {
		background-image: url($lib/icons/folder-new.svg);
	}

	[aria-current='true'] {
		color: var(--sk-fg-accent);
	}

	[aria-current='true']:has(:focus-visible)::after,
	:global(.mobile-filetree) [aria-current='true']::after {
		display: none;
	} */
</style>
