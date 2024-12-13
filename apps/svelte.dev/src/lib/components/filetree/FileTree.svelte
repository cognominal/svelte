<script lang="ts">
	import { writable } from 'svelte/store';
	import Item from '$lib/components/filetree/Item.svelte';
	import type { IFile, IItem, IFolder } from './types';
	import Folder from './Folder.svelte';
	import File from './File.svelte';
	import * as context from './context.js';
	import { afterNavigate } from '$app/navigation';

	interface Props {
		fileOrFolder: IFile | IFolder;
		mobile?: boolean;
	}

	let headerHeights = $state([]); // Array to store dynamic heights

	let { fileOrFolder, mobile = false }: Props = $props();

	const collapsed = writable({} as Record<string, boolean>);
	const stickyHeights = writable([]);
	const filter = writable<string>('');
	// const filters = writable<string[]>([]);

	afterNavigate(() => {
		collapsed.set({});
	});

	context.set({
		collapsed,
		stickyHeights,
		filter
	});
</script>

<input type="text" placeholder="filter" />
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<ul class="border border-red-500 font-[var(--sk-font-ui-small)] flex-1 overflow-y-auto overflow-x-hidden py-4 bg-[var(--sk-bg-3)] list-none m-0
	class:mobile
	onkeydown={(e : KeyboardEvent) => {
		if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
			e.preventDefault();
			const el = e.currentTarget as HTMLElement
			const lis = Array.from(el.querySelectorAll('li'));
			const focused = lis.findIndex((li) => li.contains( (e.target as HTMLElement)));

			const d = e.key === 'ArrowUp' ? -1 : +1;

			lis[focused + d]?.querySelector('button')?.focus();
		}
	}}"
>
	{#if fileOrFolder.type === 'folder'}
		<Folder prefix="" folder={fileOrFolder} />
	{:else}
		<File file={fileOrFolder} />
	{/if}
</ul>

<style>

	.filetree.mobile {
		height: 100%;
	}

	.modal-contents p {
		white-space: pre-line;
	}
</style>
