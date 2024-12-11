import type { PageServerLoad } from './$types';
import { FileTree } from '$lib/filetree'
import type { IFolder, IFile, IItem } from '$lib/components/filetree/types';


const rootDir = '/Users/cog/b'

const ignoreArray = [ 'node_modules', '.git']
const ignoreMap = new Map<string, boolean>()
ignoreArray.forEach(key => { ignoreMap.set(key, true)});
// not yet used
function filterPath(item: IItem ) : boolean {
    return item.type == 'folder'|| item.name.startsWith("+page")
}

// const filePath = '/Users/cog/README.txt'
const filePath = process.cwd()
// const filePath = '/Users/cog/b'
// const fileMapper = new FileMapper(rootDir, ignoreMap, filterPath);
const fileMapper = new FileTree(filePath, ignoreMap, filterPath);


const json = fileMapper.toJSON()
console.log('json', json)

export const load = (async () => {
    return {
        fmap: json
    };
}) satisfies PageServerLoad;