# svelte.dev

this is a fork of svelte.dev to bootstrap my [lush](./Lush.md) project.
I will create one new route. `src/route/svelte.dev` as a way to navigate the source files of `svelte.dev`. 
I would like to create a view that gives the component arborescence for a given route.
So I am factoring out the FileTree component to make it
independant of the tutorial.

I will change the behavior of the `playground` route so as
to add a lush panel, where the AST is unparsed into lush susy.

## original README

This is the repository behind [svelte.dev](https://svelte.dev), the official Svelte site, and the related packages that it relies on.

### Documentation PRs

If you're creating a documentation PR, make sure you're targeting the right repository. More specifically, changes to content within `apps/svelte.dev/content/docs` are synced from other repositories, and documentation changes within those folder should therefore be made in those repositories:

- `docs/svelte` -> https://github.com/sveltejs/svelte
- `docs/kit` -> https://github.com/sveltejs/kit
- `docs/cli` -> https://github.com/sveltejs/cli

The tutorial, blog and examples are maintained within this repository.

### Setup

```
pnpm install
cd apps/svelte.dev
USE_GIT=true pnpm sync-docs
pnpm run dev
```
