<script lang="ts">
        import Item from './Item.svelte'
		import file_icon from '$lib/icons/file.svg';

    	// import type { File } from 'editor';
    	import type { IFile } from './types';

        interface Props {
	    	file: IFile;
			depth?: number;
    	}

        let { file, depth = 0 }: Props = $props();
</script>

<Item 	{depth} icon={file_icon}
basename={file.basename}></Item>