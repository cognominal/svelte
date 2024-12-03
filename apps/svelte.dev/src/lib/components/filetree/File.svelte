<script lang="ts">
        import Item from './Item.svelte'
		import file_icon from '$lib/icons/file.svg';

    	// import type { File } from 'editor';
    	import type { IFile } from './types';

        interface Props {
	    	file: IFile;
    	}

        let { file }: Props = $props();
</script>

<Item 	icon={file_icon}
basename={file.basename}></Item>