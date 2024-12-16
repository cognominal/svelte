# branches

We are working on the apps/svelte.dev site and the packages/ they used.
Extending playground is the best way to bootstrap what I want to do.

The long term goals of the project will be described in [lush](./lush.md)

Lush has branched is many sub projects that are git branches. New branches names
are prefixed by `lush-`. Also they should have a distinctive aspect as an app so
we can distinguish them in the browser.

## branch list

I am loosing the context when moving from branch to branch. So I track here the
focus for each branch at any given time. This avoids to go thru an issue
system. Too much overhead at this point. This is not an history document. If a
given branch does not ever to be a thing. It organizes my thought.

### lush is the main branch for all stuff lush related

Every sucessful lush branch will eventually merge there.

### better-ast view streamlines the view in the AST view of the playground

needs to support [astexplorer](https://astexplorer.net/) features. Updating
one panel from the other. Like setting the selection on the source panel
when cliking on the ast tree. Or opening the a related subtree when clicking on the
source pane. This will make the development on the lush-unparse branch easier.

### lush-unparse will use a new pane in the playground to unparse the AST as a posh
  susy. We will first focus on a pure DOM susy. Also the unparser will initially
  be regular ts code. It will eventually use its own susie.

### lush-filetree not really a lush subproject but useful for the branch lush-view
  components. It should eventually be the equivalent of the vscode explorer. For
  the time being I will forget about sticky headers. They work on the tw
  playgound but I failed to get them to work on thwe lushed svelte.dev
### lush-route-explorer is not really a lush subproject but useful on its own. It
  will show the hierarchy of components/layout for a given route. The filetree
  will display the available route and to select one. I started lush-filetree subproject
  of route-explorer in the main branch. So there is a `route explorer` in the main bar menu.
  Let us clean that.

### lush-doc

Probably where literate doc will be experimented.
Leads me to understand the marked module heavily used in the doc parts of `svelte.dev`.

## worktrees

This will not appear on the repo but I am using git worktrees
[\[1\]](https://git-scm.com/docs/git-worktree)
[\[2\]](https://www.youtube.com/watch?v=s4BTvj1ZVLM) from the confort of the
vscode gitlen extension. The command "gitlens: show worktrees view" is the
starting point here.

Worktrees a good way to avoid the mess of
[stashes](https://git-scm.com/docs/git-stash)

I can now switch from branches to branches, so the flurry of new branches. Until
now my project was not organized and I bundled everything in the main lush
branch.

## grit

Also eventually, the lush project will support grit, a git that support LASTs so I need to have an up to date
knowledge of git.
