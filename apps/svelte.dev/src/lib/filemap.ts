// this is a rewriting of a previous attempt using chokidar 
// in filemap.old.ts. 
// It failed because it used to much filehandles.
// Also I fall back to the types using in editor.

// probably chokidar should be applied to dirs/files visible in
// the tree widget.

// The filemap is good for searching using 

import { readdirSync, statSync, readFileSync } from 'fs';
import { join } from 'path';
// import type { File, Directory, Item } from 'editor'
import type { IFile, IFolder, IItem } from '$lib/components/filetree/types';

export type Path = string
// export class FileMap extends Map<Path, Item> {}
export  type FileMap = { [key:string]: IItem}


export class FileMapper {
    private rootDir: string;
    #map: FileMap = {}
    get map() : FileMap {
        return this.#map 

    } 

    constructor(rootDir: string, ignoreMap: Map<string, boolean>, filter : (item: IItem) => boolean) {
        this.rootDir = rootDir;
        this.buildInitialMap(ignoreMap);
    }

    private async buildInitialMap(ignoreMap: Map<string, boolean>) {

        const traverse = (relativeDir: string, dir: string) => {
            readdirSync(dir).forEach((name) => {
                if (ignoreMap.has(name)) return; 
                const fullPath = join(dir, name);
                const stats = statSync(fullPath);
                // console.log('reldir', relativeDir, 'name', name, 'dir', dir)
                if (stats.isDirectory()) {
                    this.#map.relativeDir = { type: 'folder', name, folderName: relativeDir };
                    relativeDir =  join(relativeDir, name)
                    traverse(relativeDir, fullPath);
                } else if (stats.isFile()) {
                    // const contents = readFileSync(fullPath, 'utf-8');
                    // const text = isTextFile(fullPath); // Implement a function to check if the file is a text file

                    // we force contents and text
                    this.#map.relativeDir = { type: 'file',  name, folderName: relativeDir, contents: ''};
                }
            });
        };

        let relativeDir = ''
        traverse(relativeDir, this.rootDir);
    }

    // Add a method to make the FileMapper serializable
    toJSON() {
        return {
            rootDir: this.rootDir,
            map: this.#map
        };
    }

}
