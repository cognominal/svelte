import type { PageServerLoad } from './$types';
import { FileTree } from '$lib/filetree'
import type { IFolder, IFile, IItem } from '$lib/components/filetree/types';


const rootDir = '/Users/cog/b'



const ignoreArray = [ 'node_modules', '.git', '.svelte-kit', '.vercel']
const ignoreMap = new Map<string, boolean>()
ignoreArray.forEach(key => { ignoreMap.set(key, true)});
// not yet used

function filterPath(item: IItem ) : boolean {
    return item.type == 'folder'|| item.name.startsWith("+page")
}


const filePath = process.cwd()
const fileMapper = new FileTree(filePath, ignoreMap, filterPath);


const json = fileMapper.toJSON()

export const load = (async () => {
    return {
        fmap: json
    };
}) satisfies PageServerLoad;