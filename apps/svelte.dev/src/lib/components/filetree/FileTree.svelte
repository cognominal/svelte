<script lang="ts">
    import Item from '$lib/components/filetree/Item.svelte'
    import type { IFile , IItem, IFolder } from './types';
    import Folder from './Folder.svelte'


    interface Props {
        folder: IFolder ;
    }

    let { folder }: Props = $props();

</script>

<Folder prefix='' {folder}/>
