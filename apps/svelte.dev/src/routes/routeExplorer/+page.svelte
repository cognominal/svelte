<script lang="ts">
	import FileTree from '$lib/components/filetree/FileTree.svelte';
	// import File from '../tutorial/[...slug]/filetree/File.svelte';
	import type { IFile, IFolder, IItem } from '$lib/components/filetree/types';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let folder: IFolder = {
		type: 'folder',
		name: '/',
		basename: '',
		contents: [
			{ type: 'file', name: 'index.svelte', basename: '/' },
			{ type: 'folder', name: 'subfolder', basename: '/', contents: [
                { type: 'file', name: 'README.md', basename: '/subfolder' },
                
            ] },
		]
	};
</script>

<FileTree {folder} />
