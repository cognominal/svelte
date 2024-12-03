<script lang="ts">
	import Item from './Item.svelte';
	import Folder from './Folder.svelte';
	// import File from '$lib/components/filetree/File.svelte' 
	import File from './File.svelte' 
	import type { IFile as IFile, IItem as IItem, IFolder } from './types';
	import folder_closed from '$lib/icons/folder.svg';
	import folder_open from '$lib/icons/folder-open.svg';

	interface Props {
		folder: IFolder;
		prefix: string;
		depth?: number
	}

	let { folder, prefix, depth = 0 }: Props = $props();
</script>

<Item icon={folder_open} basename={folder.name} />
{#if folder.contents}
	{#each folder.contents as item}
		{#if item.type === 'file'}
			<File depth={depth+1} file={item} />
		{:else if item.type === 'directory'}
			<Folder depth={depth+1} folder={item} {prefix} />
		{/if}
	{/each}
{/if}
