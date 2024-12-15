We are working on the apps/svelte.dev site and the packages/ they used.
Extending playground is the best way to bootstrap what I want to do.

The long term goals of the project will be described in [lush](./lush.md)

Lush has branched is many sub projects that are git branches. New branches names
are prefixed by `lush-`. Also they should have a distinctive aspect as an app so
we can distinguish them in the browser.

- lush is the main branch for all stuff lush related
- better-ast view streamlines the view in the AST view of the playground
- lush-unparse use a new pane in the playground to unparse the AST as a posh
  susy. We will first focus on a pure DOM susy. Also the unparser will initially
  be regular ts code. It will eventually use its own susie.

- lush-filetree not really a lush subproject but useful for the branch lush-view
  components. It should eventually be the equivalent of the vscode explorer. For
  the time being I will forget about sticky headers. They work on the tw
  playgound but I failed to get them to work on thwe lushed svelte.dev
- lush-view-components not really a lush subprojects but useful on its own. It
  will show the hierarchy of components/layout for a given route. The filetree
  will display the available rout and to select one.
