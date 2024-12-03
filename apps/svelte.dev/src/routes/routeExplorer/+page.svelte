<script lang="ts">
    import Item from '$lib/components/filetree/Item.svelte'
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<ul>
    <Item path="fakepath"/>
    <Item path="antoherfakepath"/>
</ul>