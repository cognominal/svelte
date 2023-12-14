/**
 * @param {number} min
 * @param {number} max
 * @param {number} value
 */
export const clamp = (min, max, value) => Math.max(min, Math.min(max, value));

/**
 * @param {number} ms
 */
export const sleep = (ms) => new Promise((f) => setTimeout(f, ms));

/** @param {import('./types').File} file */
export function get_full_filename(file) {
	return `${file.name}.${file.type}`;
}

/**
 *
 * @param {...*} args
 * @returns {boolean}
 */
export function areObj(...args) {
	return args.every(o => typeof o === 'object' && o !== null && o !== undefined && !Array.isArray(o));
}

/**
 * getting the start position of an AST node.
 *
 * @param {Object}obj
 * @returns {number}
 */
export function getStart(obj) {
	if ('start' in obj) {
		// @ts-ignore
		return obj.start;
	}
	let kids = ASTNodekids(obj);
	if (kids === undefined) {
		throw new Error("AST node with no kids found.  AST node: " + JSON.stringify(obj))
	}
	// @ts-ignore
		const min = Math.min(...kids.map(n => getStart(n)));
		return min;
}

/**
 * @param {Object} node
 * @returns {Array<[string, any]> | undefined}
 */
export function ASTNodekids(node) {
	const firstArrayEntry = Object.entries(node).find(([_, value]) => Array.isArray(value));
	return firstArrayEntry ? firstArrayEntry[1] : undefined;
}

/**
 *
 * @param {Object} obj
 * @return {Array<[string, any]>}
*/
export function sortedEntries(obj) {
	const entries = Object.entries(obj)
	if (Array.isArray(obj)) {
		return entries
	}
	let sorted = entries.sort(([aKey, aVal], [bKey, bVal]) => {
		if (areObj(aVal, bVal)) {
			let aStart = getStart(aVal);
			let bStart = getStart(bVal);
			return aStart - bStart;

		} else if (areObj(aVal)) {
			return 1
		} else if (areObj(bVal)) {
			return -1
		}
		if (aKey < bKey) return -1;
		if (aKey > bKey) return 1;
		return 0;
	})
	return sorted
}
/**
 * @param {string} k
 * @reutrn {boolean}
 */
export function filtered_out_key(k) {
	return k === 'start' || k === 'end' || k === 'loc' || k === 'type';
}

/**
 * @param {Object} obj
 * @returns {string}
 */

export function filtered_object(obj) {
	const result = [];

	for (const [k, v] of Object.entries(obj)) {
		if (filtered_out_key(k)) continue;
		result.push(k);
	}

	return result.join(', ');
}
