<script lang="ts">
	import FileTree from '$lib/components/filetree/FileTree.svelte';
	// import File from '../tutorial/[...slug]/filetree/File.svelte';
	import type { IFile, IFolder, IItem } from '$lib/components/filetree/types';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let folder: IFolder = {
		type: 'directory',
		name: '/',
		basename: '',
		contents: [
			{ type: 'file', name: 'index.svelte', basename: 'index.svelte' },
			{ type: 'directory', name: 'subdir', basename: '/' }
		]
	};
</script>

<FileTree {folder} />
