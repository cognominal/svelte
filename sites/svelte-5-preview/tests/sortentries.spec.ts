import { describe, test, expect } from 'vitest'
import { beforeEach } from 'vitest'
import { sortedEntries, getStart, ASTNodekids } from '../src/lib/utils'

let obj : Object
let sorted: Object
let nodeWithKids1: Object
let sortedWithKids1: Object
let kids1: Object[]
let nodeWithKids2: Object
let sortedWithKids2: Object
let kids2 : Object[]

beforeEach(() => {
	obj = { w: { nodes: [ {start: 100}, {start: 50}, {start: 54}]  } , c: 1, b: { start: 4 }, a: 1 }
	sorted = [ ['a', 1], ['c', 1], ['b', { start: 4 }], ['w', {nodes : [{start: 100}, {start: 50}, {start: 54}]}]]

	nodeWithKids1 = { whatevever: [ {start: 42}, {start: 666}, {start: 41}] }
	kids1 = [ {start: 42}, {start: 666}, {start: 41}]
	sortedWithKids1 = [ ['whatevever', [ {start: 41}, {start: 42}, {start: 666}]] ]

	nodeWithKids2 = { whatevever: [ { nodes: [  {start:43} , {start: 666}, {start: 42} ] }] }
	kids2 = [ { nodes: [ {start:43} , {start: 666}, {start: 42} ] } ]
	sortedWithKids2 = { whatevever: [ { nodes: [  {start: 42}, {start:43} , {start: 666} ] }] }
})

describe('ASTNodekids', () => {
	test('sanity', () => {
		expect(Object.entries({whatever: []})).toEqual([[ 'whatever', [] ]])
	})
	test('kids1', () => {
		expect(ASTNodekids({whatever: []})).toEqual([])
	});
	test('kids2', () => {
		expect(ASTNodekids(nodeWithKids1)).toEqual(kids1)
	});
	test('kids3', () => {
		expect(ASTNodekids(nodeWithKids2)).toEqual(kids2)
	});
});

describe('start position of a node', () => {
	test('first level start entry', () => {
		expect(getStart({start: 42})).toBe(42)
	});
	test('second level start entry', () => {
		expect(getStart(nodeWithKids1)).toBe(41)
	});
	test('third level start entry', () => {
		expect(getStart(nodeWithKids2)).toBe(42)
	});
});

describe('sorted entries', () => {
	test('sorted1', ({ expect }) => {
		expect(sortedEntries(obj)).toEqual(sorted)
	})
	test.skip('sorted2', ({ expect }) => {
		expect(sortedEntries(nodeWithKids1)).toEqual(sortedWithKids1)
	})
	test.skip('sorted3', ({ expect }) => {
		expect(sortedEntries(nodeWithKids2)).toEqual(sortedWithKids2)
	})

})
