import type { PageServerLoad } from './$types';
import { FileMapper } from '$lib/filemap'
import type { File, Directory, Item } from 'editor'


const rootDir = '/Users/cog/b'

const ignoreArray = [ 'node_modules', '.git']
const ignoreMap = new Map<string, boolean>()
ignoreArray.forEach(key => { ignoreMap.set(key, true)});
// not yet used
function filterPath(item: Item ) : boolean {
    return item.type == 'directory'|| item.name.startsWith("+page")
}


const fileMapper = new FileMapper(rootDir, ignoreMap, filterPath);



export const load = (async () => {
    return {
        toto: 'tata'
    };
}) satisfies PageServerLoad;