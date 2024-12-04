<script lang="ts">
	import Item from './Item.svelte';
	import Folder from './Folder.svelte';
	// import File from '$lib/components/filetree/File.svelte'
	import File from './File.svelte';
	import type { IFile as IFile, IItem as IItem, IFolder } from './types';
	import folder_closed from '$lib/icons/folder.svg';
	import folder_open from '$lib/icons/folder-open.svg';
	import * as context from './context.js';

	interface Props {
		folder: IFolder;
		prefix: string;
		depth?: number;
	}

	let { folder, prefix, depth = 0 }: Props = $props();

	const { collapsed } = context.get();
</script>

<Item
	onclick={() => {
		$collapsed[folder.name] = !$collapsed[folder.name];
	}}
	icon={$collapsed[folder.name] ? folder_closed : folder_open}
	name={folder.name}
/>
{#if folder.contents && !$collapsed[folder.name]}
	{#each folder.contents as item}
		{#if item.type === 'file'}
			<File depth={depth + 1} file={item} />
		{:else if item.type === 'folder'}
			<Folder depth={depth + 1} folder={item} {prefix} />
		{/if}
	{/each}
{/if}
