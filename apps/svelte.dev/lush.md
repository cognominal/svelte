# Lush : Proof of concept

Lush is the editor to edit LASTS (lushed asts) using susies (susy for surface
syntax), rich surface representations of program.

## companion docs

- [plan](./lush.plans.md)
- [branches](./branches.md) feature branches
- [susyr](./lush.susyr.md) rules based language to unparse LAST to susies
- [lush.svelte.dev](./lush.svelte.dev.md) doc about the layout/implementation of
  `svelte.dev`, specific or not to the lush project
- [LAST](./lush.LAST.dev) documentation of existing LAST node types.

## blurb

LASTs are enriched [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) are
the new reference representation of programs. Lush will also denote the
ecosystem based on LASTs.

We distinguish vanilla, poor, rich and posh susies. Vanilla susies are the
susies that comes with the defintion of traditional complangs (computer
languages). They are usual poor, leading to verbose programs. But raku is a rich
susie. But poor and rich susies are based on unicode strings.

Posh susies are not poor. They use various
[typefaces](https://en.wikipedia.org/wiki/Typeface) of possibly many
[fonts](https://en.wikipedia.org/wiki/Font). In LASTs, symbols have unique ids,
so the change of a symbol name appear in one place of the AST even it may affect
the susies in many places. Or for a given symbol, a user can choose his own name
in his susies, for the purpose of
[localisation](https://fr.wikipedia.org/wiki/Internationalisation_et_localisation).

rich and posh susies takes a while to learn because many expression are huffed.
Huffed is the huffmanisation of huffmanisation. It use a computer analogy
[huffman coding](https://en.wikipedia.org/wiki/Huffman_coding) to describe
common expressions that are short by design like pronouns, article, common
verbs. In raku many common pairs are huffed. For sake of learning the editor
should provide a way to unhuff an expression and access the doc about that
expression

In raku `:a`is huffed :a(True)

LAST nodes have unique ids (luis), that are stable hooks for literate
programming. As the AST codes evolves and moves around, the literate is capable
to still refer to it. Structural edition preserve the luis. So traditional
edition is not allowed beyond expression so as not to use the luis at
granularity coarser than expression

## blurb

Computer languages programs reference representation are constrained by the
surface syntax which assumes source code is an unicode string to be parsed into
an [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree)s.

For natural languages, This duality
[Deep/surface structure](https://en.wikipedia.org/wiki/Deep_structure_and_surface_structure)
has has been known at least since the 1965 Chomsky's book, "Aspects of the
Theory of Syntax".

Code expressed in surface structure is easier to read and write than code
expressed as the equivalent deep structure tree. so, historically, code being
written using the surface structure conventions of a programming language, is
the reference representation of a program. We call a Susy, for Surface Syntax
such a convention. By metonymy code we also call a susie written using such a
convention. We call vanilla susie, the susie used to define a language.

## From poor susy to posh susy

Current language vanilla susies are
[unicode](https://en.wikipedia.org/wiki/Unicode) strings. We call them poor
susies.

Most complangs (computer languages) except
[raku](https://en.wikipedia.org/wiki/Raku_(programming_language)) have poor
representation of literals. They poor susies And complangs did not borrow the
susiesfrom shell languages like pipe and redirection. Perl did some attempts at
it thwarted by yacc rigidity and the constraint of backward compatibility
combined by the habit of considering the vanilly susy as the reference
representation. Raku have a rich susy still based on unicode strings.

posh susies are susies involving typefaces and font weights, provides a rich
primary notation enabling slang fine grained meshing. Slang being specialised
susies.

Tools dealing with code better operate on the deep structure even if they refer
to the surface structure it was parsed from to report errors.

## Turning things around

We create structural editor to edit ASTs and unparse it to a posh susie. LAST
(for Lushy) AST is the reference representation of a program. It is an enriched
The idea is borrowed from svelte ast

Version control systems like git, still operates on the surface structure and
deal with [diffs](https://en.wikipedia.org/wiki/Diff) of lines of code.

[literate programming](https://en.wikipedia.org/wiki/Literate_programming) (LP)
was introduced in 1984 by Donald Knuth when CRT terminals were the norm. The
weaving of the documentation written in the TeX typesetting language with
program code produced output typesetted on a laser printer.

Now high resolution desktop and laptop are used to program and sometimes
smartphones to read programs and docs.

Lush is a take on are the reference representation of programs/modules. This
will allow better version control than line based
[diffs](https://en.wikipedia.org/wiki/Diff).

The [secondary notation](https://en.wikipedia.org/wiki/Secondary_notation),
[syntax highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting), is
[orthogonal](https://medium.com/aimonks/orthogonality-in-programming-and-software-engineering-4991366f8a91)
to the primary one and is still supported. Editing is mostly done in a
structural way à la
[synthesizer](https://cacm.acm.org/research/the-cornell-program-synthesizer/)
using stunts, a redesign of
[textmate snippets](https://macromates.com/textmate/manual/snippets) As a result
we could do away with parsing. To not be too disruptive to users, we should
eventually support it at least at granular enough level, the expression level.

A purely textual susy is called a vanilla susy. The original susy of a given
language is called its legacy susy. An input susy is a vanilla susy not designed
for legibility but as a reminder of how to use stunts.

AST as a reference representation (a2r2) will allow to track modifications at a
fine granularity by tracking an AST node over time. Such a fine tracking is
impossible with line based diff. Grit, a new tool, based on
[git](https://en.wikipedia.org/wiki/Git) will support a2r2 with line based diff
when a2r2 is not available or as a backup when a2r2 is buggy.

As a consequence of a2r2, a vscode extension adapted from
[codetour](https://github.com/microsoft/codetour) will stay in sync as the code
change.

## Leste as a show case

As a show case, leste is a rich susy for
[svelte](https://svelte.dev/docs/svelte/overview) legacy susy that do away with
cumbersome mustache notations.

### Prototyping leste

#### Read only leste

We prototype leste by unparsing AST generated from svelte code. We create a
modified [svelte.dev](https://svelte.dev/) site to show case leste. The unparser
is written in ts but a special slang will be designed for that task.

#### Read write leste

We edit leste code using structural editing. Stuctural editing is based on stunt
which is a redesign of snippets popularized by
[textMate](https://en.wikipedia.org/wiki/TextMate)

#### Short term consequences

Using `svelte.dev` to develop leste means the editor will initially be
[codemirror](https://en.wikipedia.org/wiki/CodeMirror) based. We will probably
adapt and extend `svelte.dev` to be leste based and support extension like
vscode does. `FileTree.svelte` wouls be the base for an explorer panel in a
sidebar. A git extension would allow a source control with grit. We may even
partially integrate, the leste editor, the leste based explorer and grit source
control panel into vscode as webviews. But we don't want to go further. It
should be a stepping stone toward real vscode support.

To support vscode we will eventuall need to use a modified
[monaco](https://microsoft.github.io/monaco-editor/) editor component. The
vanilla editor supports only
[monospace font](https://en.wikipedia.org/wiki/Monospaced_font)

## promo blurb

Lush is pithy, literate and practical programming practice for

It is embodied by : leste : svelte 5 without mustaches lish : literate shell,
interactive or not. It will deserve a rethinking of what is a terminal, with
full editing support like in warp.

It supports and encourages:

- fine messhed slangs,
- typeface and font weight use to provide a richer primary notation orthogonal
  with the usual syntax highlighting secondary notation.
- structural editing

We call slush this rich slang notation.

Lush just encourage superficial representation by appropriate tooling. It builds
on svelte.dev docs and playground.

## Going forward

lish and leste are susies, they are incarnations of deeper concepts.

## susies, r2, a3r2

A program reference representation (r2) is not based on the surface syntax
(susy, pronounced Susie, plural susies) but is based on a give AST convention.
Unparsing is the operation of going to an AST from a given susie. With pure
syntatic editors, we don't even need parsers. Dumb susies are susie that don't
use motifs like typefaces and font weight. With dumb susies we can use
traditional tools.

We can compare unparser to beautifiers. Beaufiers allow different formatting
conventions for a given susy. Different unparser, or unparser configuration

Susies are not hindered by consideration of backward compatibility because they
are not r2s. There are no consequence on getting susies wrong, you can fall back
to legacy susy unparser.

ASTs convention can evolve over times, with new better ASTs as a superset of
existing ASTs to express richer languages. A ts AST is richer than a js AST.
With

As an intended result there can be a lot of creativity in susy.

### Where were beautifiers become uparsers.

### the linguistic approach

Without a specially tailored ecosystem, slangs create idioms which can
degenerate in
[private Language](https://plato.stanford.edu/entries/private-language/). This
has plagued the Perl ecosystem. Perl is infamously known as a language adverse
to peer or team programming. See [the community](#the-community)

Once having the well deserved status of duct tape of internet, it has lost it to
Python, and maybe typescript. That does not mean that its inspiration from
natural language was wrong to begin with.

Perl shined best as a language of system administration so a script had to run
decades after beeing written, so backward compatibility was mandatory which
means that sane evolution is almost impossible.

Yacc, generating lean and fast parsers was ideal in the 80s when computers had
about one megabyte of RAM.

### linguistic creativity

Linguistic creativity is best represented by tailwindcss which comes with some
tooling like.

### the ecosystem

A language cannot be thought outside the ecosystem it lives in. Perl, an early
web player with its CGI library has failed to embrass the web client side.
tooling

### the community

herding cats anomy p5p individualism guru syndrom.

[Parkinson's law](https://en.wikipedia.org/wiki/Parkinson%27s_law)

### last but not least, AST as a reference representation of programs

I anticipate lushed to become an external representation and ASTs to become the
reference representation of language. This comes with its own set of problem
because language specification useual

As a result diffs between versions of a program will not be plagued by artifacts
of superficial representation, like change of indentation or renaming of
symbols. A new git tool, tentativelt named grit, needs to be designed, first
with git as a fallbakck option.

## diffing AST

## grit

grit will initially a wrapper to git. You can go wild with experimental posh
susies because, grit can include git diffs using the vanilla susie of the used
language as long there is an unparser for that vanilla susy.

### parsing and unparsing

Beautifiers are very much a thing. They format source according to configurable
conventions. They can be used over and over during the development circle. More
importantly, a beautifier is called before commiting to enforce compliance to
team shared norms.

With A3R2 there are no beautifier but unparser.

While a beautifier is here to enforce agreed upon convention, unparsers

Grit is not implemented in this Proof of Concept release.

## complementary views of programming.

One with a mathemacal bent would want to formally specify a program and prove
its correctness. But, if possible, that would way be orders of magnitude more
dificult than to write a well behaved program. Nevertheless, functional
practice.

There is the logistic view that deals with organizing and managing the
developmenent and production of software environments, and team of programmers
writing and documenting source code. Git, vite, container like docker

Larry Wall has championned the linguistic view.

Lush deals with syntax more than semantics so is mostly agnostic about the
