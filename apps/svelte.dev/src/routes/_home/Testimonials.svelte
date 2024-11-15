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

	.screenshots {
		grid-area: screenshots;
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 10;

		a {
			position: absolute;
			display: block;
			width: 100%;
			top: 0;
			overflow: hidden;
			filter: drop-shadow(0.2rem 0.4rem 1.6rem rgb(0 0 0 / 0.2));
			transform: translate3d(0, 0, 0);
			transition-property: filter, scale;
			transition-duration: 0.2s;
			user-select: none;
			will-change: filter, transform;

			&:nth-child(1) {
				top: 0%;
				left: -2%;
				rotate: -1deg;
			}

			&:nth-child(2) {
				width: 80%;
				left: 22%;
				top: 32%;
				rotate: -0.7deg;
			}

			&:nth-child(3) {
				top: 51%;
				left: 5%;
				width: 50%;
				rotate: 1.5deg;
			}

			@media all and not (hover: none) {
				&:hover {
					scale: 1.05;
					filter: drop-shadow(0.2rem 0.4rem 2.4rem rgb(0 0 0 / 0.2));
				}
			}
		}

		.screenshot {
			width: 100%;
			height: auto;
			object-fit: contain;
			border-radius: var(--sk-border-radius);
			transition: filter 0.2s;
			-webkit-transform: var(--safari-fix);

			@media all and not (hover: none) {
				/* the additional `contrast(1)` is necessary for safari 18 to not behave stupidly */
				filter: grayscale(1) contrast(1);

				a:hover & {
					filter: grayscale(0) contrast(1);
				}
			}
		}
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
