# Lush a modern take on literate programming

## blurb

Lush intends to be a modern take on [literate programming](https://en.wikipedia.org/wiki/Literate_programming). [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree)s
are the reference representation of programs/modules. Rich `su`rface `sy`ntax
(susy), involving typefaces and font weights, provides a rich primary notation.
The [secondary notation](https://en.wikipedia.org/wiki/Secondary_notation),
[syntax highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting), is
[orthogonal](https://medium.com/aimonks/orthogonality-in-programming-and-software-engineering-4991366f8a91) to the primary one and is still supported. Editing is mostly done in
a structural way à la [synthesizer](https://cacm.acm.org/research/the-cornell-program-synthesizer/) using stunts, a redesign of [textmate
snippets](https://macromates.com/textmate/manual/snippets) As a result we could
do away with parsing. To not be too disruptive to users, we should eventually support it at least at granular enough
level, the expression level.

A purely textual susy is called a vanilla susy.
The original susy of a given language is called its legacy susy.
An input susy is a vanilla susy not designed for legibility but as a reminder of how to use
stunts.

AST as a reference representation (a2r2) will allow to track modifications at a
fine granularity by tracking an AST node over time. Such a fine tracking is
impossible with line based diff. Grit, a new tool, based on
[git](https://en.wikipedia.org/wiki/Git) will support a2r2 with line based diff
when a2r2 is not available or as a backup when a2r2 is buggy.

As a consequence of a2r2, avscode extension adapted from
[codetour](https://github.com/microsoft/codetour) will stay in sync as the code
change.


## leste as a show case

As a show case, leste is a rich susy for
[svelte](https://svelte.dev/docs/svelte/overview) legacy susy that do away with
cumbersome mustache notations which have become the norm in reactive template
languages.

### Prototyping leste


#### Read only leste

We prototype leste by unparsing AST generated from svelte code. We create a
modified [svelte.dev](https://svelte.dev/) site to show case leste. 
The unparser is written in ts but a special slang will be designed for that task.



#### Read write leste

We edit leste code using structural editing.
Stuctural editing is based on stunt which is a redesign of
snippets popularized by [textMate](https://en.wikipedia.org/wiki/TextMate)

#### Short term consequences


Using `svelte.dev` to develop leste means the editor will
initially be [codemirror](https://en.wikipedia.org/wiki/CodeMirror) based.
We will probably adapt and extend `svelte.dev` to be leste based and support
extension like vscode does. `FileTree.svelte` wouls be the base for an explorer
panel in a sidebar. A git extension would allow a source control with grit.
We may even partially integrate, the leste editor, the leste based explorer and grit source control panel into vscode as webviews. But we don't want to go further. It should be a stepping stone toward real vscode support.

To
support vscode we will eventuall need to use a modified
[monaco](https://microsoft.github.io/monaco-editor/) editor component. The
vanilla editor supports only [monospace
font](https://en.wikipedia.org/wiki/Monospaced_font)

