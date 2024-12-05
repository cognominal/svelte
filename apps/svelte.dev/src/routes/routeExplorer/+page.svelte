<script lang="ts">
	import FileTree from '$lib/components/filetree/FileTree.svelte';
	// import File from '../tutorial/[...slug]/filetree/File.svelte';
	import type { IFile, IFolder, IItem } from '$lib/components/filetree/types';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let folder: IFolder = {
		type: 'folder',
		name: '/',
		folderName: '',
		contents: [
			{ type: 'file', name: 'index.svelte', folderName: '/' },
			{ type: 'folder', name: 'subfolder', folderName: '/', contents: [
                { type: 'file', name: 'README.md', folderName: '/subfolder' },
                
            ] },
		]
	};
</script>

<FileTree {folder} />
