<style>
	li {
		--bg: var(--sk-bg-3);
		--inset: calc((var(--depth) * 1.2rem) + 1.5rem);
		display: flex;
		position: relative;
		width: calc(100% - 1px);
		height: 2.4rem;
		z-index: 1;
		background: var(--bg) var(--icon) no-repeat;
		background-position: calc(var(--inset) - 0.5rem) 50%;
		background-size: 1.2rem;
	}

	button,
	input {
		background-size: 1.2rem 1.2rem;
		background-position: 0 45%;
		background-repeat: no-repeat;
	}

	:focus-visible {
		outline-offset: -2px;
	}

	input {
		background: var(--sk-bg-3);
		margin: 0 0.5rem 0 calc(0.5rem + var(--inset));
		border: 2px solid transparent;
		padding: 0 0.5rem;
		font: inherit;
	}

	.basename {
		display: block;
		position: relative;
		margin: 0;
		padding: 0 1rem 0 calc(1rem + var(--inset));
		color: inherit;
		flex: 1;
		height: 100%;
		text-align: left;
		border: 2px solid transparent;
		white-space: nowrap;
		overflow: hidden;
		line-height: 1;
	}

	input {
		width: 100%;
		height: 100%;
	}

	.actions {
		display: flex;
		right: 0;
		top: 0;
		height: 100%;
		padding-right: 1rem;
		background-color: var(--bg);
		white-space: pre;
	}

	.icon {
		height: 100%;
		width: 1.5rem;
	}

	.icon.rename {
		background-image: url($lib/icons/rename.svg);
	}

	.icon.delete {
		background-image: url($lib/icons/delete.svg);
	}

	.icon.file-new {
		background-image: url($lib/icons/file-new.svg);
	}

	.icon.folder-new {
		background-image: url($lib/icons/folder-new.svg);
	}

	[aria-current='true'] {
		color: var(--sk-fg-accent);
	}

	[aria-current='true']:has(:focus-visible)::after,
	:global(.mobile-filetree) [aria-current='true']::after {
		display: none;
	}
</style>
