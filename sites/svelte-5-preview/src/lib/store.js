import { writable } from 'svelte/store';

/**
 * Represents a writable store for the view.
 * @type {import('svelte/store').Writable<'result' | 'js' | 'css' | 'ast' | 'bingo'>}
 */
export const view = writable('result');

/**
 * Represents a writable store for showing messages.
 * @type {import('svelte/store').Writable<boolean>}
 */
export const showMessage = writable(true);
