import { setContext, getContext } from 'svelte';


type FileTreeContext = {
    collapsed: import('svelte/store').Writable<Record<string,boolean>> 
}

const key = {};


export function set(context : FileTreeContext) {
	setContext(key, context);
}

export function get() : FileTreeContext {
	return  (getContext(key));
}
