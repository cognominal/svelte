<script lang="ts">
  	import { SplitPane } from '@rich_harris/svelte-split-pane';
    let mobile: boolean

</script>

<div class="container" class:mobile>
    wtf
    <div class="top">
    <SplitPane type="horizontal" min="100px" max="-4.1rem" pos="50%">
        <section slot="a">
            <div class="editor">stuff</div></section>
        <section slot="b">hello</section>
        </SplitPane>
    </div>
</div>

toto

<style>
    .editor {
        background-color: red
    }
	.container {
		display: flex;
		flex-direction: column;
		height: calc(100dvh - var(--sk-nav-height) - var(--sk-banner-height));
		/** necessary for innerWidth to be correct, so we can determine `mobile` */
		width: 100vw;
		overflow: hidden;
	}
	.top {
		width: 200vw;
		margin-left: -100vw;
		height: 0;
		flex: 1;
		transition: transform 0.2s;
		/* we transform the default state, rather than the editor state, because otherwise
		   the positioning of tooltips is wrong (doesn't take into account transforms) */
		transform: translate(50%, 0);
		border-top: 1px solid var(--sk-border);
	}

</style>