<script lang="ts">
import FileTree from '$lib/components/filetree/FileTree.svelte'
	import File from '../tutorial/[...slug]/filetree/File.svelte';
import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<FileTree/>