<script lang="ts">
    import Item from '$lib/components/filetree/Item.svelte'
    import type { IFile , IItem, IFolder } from './types';
    import Folder from './Folder.svelte'


    interface Props {
        folder: IFolder ;
        mobile?: boolean;

    }

    let { folder, mobile = false }: Props = $props();

</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->

<ul
	class="filetree"
	class:mobile
	onkeydown={(e) => {
		if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
			e.preventDefault();
			const lis = Array.from(e.currentTarget.querySelectorAll('li'));
			const focused = lis.findIndex((li) => li.contains( (e.target as HTMLElement)));

			const d = e.key === 'ArrowUp' ? -1 : +1;

			lis[focused + d]?.querySelector('button')?.focus();
		}
	}}
>
<Folder prefix='' {folder}/>
</ul>

<style>
	.filetree {
		font: var(--sk-font-ui-small);
		flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 1rem 0rem;
		margin: 0;
		background: var(--sk-bg-3);
		list-style: none;
	}

	.filetree.mobile {
		height: 100%;
	}

	.modal-contents p {
		white-space: pre-line;
	}
</style>
