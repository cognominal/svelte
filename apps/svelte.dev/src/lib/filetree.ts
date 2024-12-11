// this is a rewriting of a previous attempt using chokidar 
// in filemap.old.ts. 
// It failed because it used to much filehandles.
// probably chokidar should be applied to dirs/files visible in
// the tree widget.


import { readdirSync, statSync, readFileSync } from 'fs';
import { join, basename, dirname } from 'path';
import type { IFile, IFolder, IItem } from '$lib/components/filetree/types';

export type Path = string
export  type FileMap = { [key:string]: IItem}

// FileMapper returns a a tree of IITem


export class FileTree {
    private root: string;
    #tree: IItem
    get tree() : IItem | undefined {
        return this.#tree 

    } 


    constructor(root: string, ignoreMap: Map<string, boolean>, filter : (item: IItem) => boolean) {
        this.root = root;
        const stats = statSync(root);

        if (stats.isFile()) {
            // console.log('basename', basename(root))
            const iFile: IFile = { type: 'file',  name: basename(root), folderName: '.' };
            this.#tree = iFile
            return this
        } else {
            this.#tree = { type: 'folder', name: basename(root), folderName: '.' };
            this.buildInitialMap(this.#tree, ignoreMap);
        }

    }

    private async buildInitialMap(folder: IFolder, ignoreMap: Map<string, boolean>) {

        const traverse = (folder: IFolder, relativeDir: string, dir: string) => {
            folder.contents = []
            readdirSync(dir).forEach((name) => {
                if (ignoreMap.has(name)) return; 
                const fullPath = join(dir, name);
                const stats = statSync(fullPath);
                // console.log('reldir', relativeDir, 'name', name, 'dir', dir)
                if (stats.isDirectory()) {
                    const subfolder : IFolder = { type: 'folder', name, folderName: relativeDir };
                    folder.contents!.push(subfolder)
                    relativeDir =  join(relativeDir, name)
                    traverse(subfolder, relativeDir,  fullPath);
                } else if (stats.isFile()) {

                    folder.contents!.push({ type: 'file',  name, folderName: relativeDir });
                }
            });
        };

        let relativeDir = ''
        traverse(folder, relativeDir, this.root);
    }

    toJSON() {
        return {
            root: this.root,
            tree: this.#tree 

        };
    }

}
