<div class="outer">
	<p class="definition">
		<!-- <enhanced:img
			class="pronunciation"
			alt="Svelte pronunciation guide"
			src="./svelte-pronunciation.svg"
		/> -->
		<span class ="prononciation">lʌʃ</span>
		<span class="description">
			<span class="adjective"></span>   growing luxuriantly
		</span>
	</p>
	<p class="definition">
		<span class ="prononciation">lɛste</span>
		<span class="description">
			<span class="adjective"></span>French for  agile, nimble;

		</span>
	</p>
	<p class="definition">
		<span class ="prononciation">liʃ</span>
		<span class="description">
			<span class="noun"></span>for literate shell;

		</span>
	</p>


	<div class="blurb">

			Lush is pithy, literate and practical. 

			It is embodied by : 
			<ul>
				<li>leste : <a href="https://svelte.dev">svelte 5</a> without mustaches</li>
				<li>lish : literate shell, interactive or not.</li>
			</ul>

			It supports and encourages: 
			<ul>
				<li> fine meshed slangs, </li>
				<li> typeface and font weight use to provide a richer primary notation
					 orthogonal with the usual sy
					ntax highlighting secondary notation.</li>
				<li> structural editing</li>
			<ul>
			We call slush this rich slang notation.
			


	</div>

</div>

<style>
	.outer {
		position: relative;
		max-width: 120rem;
		margin: 4rem auto;
		padding: 0 var(--sk-page-padding-side);
		display: grid;
		row-gap: 4rem;
		grid-template-areas:
			'definition'
			'blurb'
			'screenshots';
	}

	/* .definition {
		grid-area: definition;
	} */

	.pronunciation {
		position: relative;
		aspect-ratio: 457.4 / 138.8;
		height: var(--sk-font-size-h1);
		bottom: -0.3em;
	}

	.blurb {
		grid-area: blurb;
	}


	.prononciation {
		color: #D33104;
		font-size: 4rem
	}

	.definition {
		position: relative;
		display: flex;
		align-items: start;
		justify-content: center;
		margin: 0 auto;
		gap: 1rem;

		width: 100%;

		.description {
			position: relative;
			font: var(--sk-font-ui-medium);
			bottom: 0.2em;
			text-wrap: balance;
			width: 16rem;
		}

		.adjective {
			position: relative;
			padding: 0.25em 0.5em;
			line-height: 1;
			text-transform: uppercase;
			background: var(--sk-fg-2);
			border-radius: var(--sk-border-radius);
			font: var(--sk-font-ui-small);
			color: var(--sk-bg-2);

			&::after {
				content: 'adj.';
			}
		}
		.noun {
			position: relative;
			padding: 0.25em 0.5em;
			line-height: 1;
			text-transform: uppercase;
			background: var(--sk-fg-2);
			border-radius: var(--sk-border-radius);
			font: var(--sk-font-ui-small);
			color: var(--sk-bg-2);

			&::after {
				content: 'noun';
			}
		}

		.adjective1 {
			position: relative;
			padding: 0.25em 0.5em;
			line-height: 1;
			text-transform: uppercase;
			background: var(--sk-fg-2);
			border-radius: var(--sk-border-radius);
			font: var(--sk-font-ui-small);
			color: var(--sk-bg-2);

			&::after {
				content: 'adj.';
			}
		}

	}

	@media (min-width: 800px) {
		.definition {
			align-items: baseline;
			justify-content: start;

			.description {
				flex-direction: row;
				gap: 1rem;
				width: auto;
			}

			.adjective {
				margin-right: 0.5rem;

				&::after {
					content: 'adjective';
				}
			}
		}
	}

	@media (min-width: 960px) {
		.outer {
			display: grid;
			margin: 4em auto;
			grid-template-columns: 1fr 1fr;
			column-gap: 4rem;
			grid-template-areas:
				'definition definition'
				'blurb      screenshots';

			.blurb {
				text-wrap: balance;
			}
		}
	}

	@media (min-width: 1140px) {
		.screenshots {
			top: -7em;
		}
	}
</style>
