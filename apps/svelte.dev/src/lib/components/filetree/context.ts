import { setContext, getContext } from 'svelte';
import type { Writable } from 'svelte/store';


type FileTreeContext = {
    collapsed: Writable<Record<string,boolean>>
	stickyHeights: Writable<number[]>
	// filters: Writable<string[]>
	filter: Writable<string>
}

const key = {};


export function set(context : FileTreeContext) {
	setContext(key, context);
}

export function get() : FileTreeContext {
	return  (getContext(key));
}
