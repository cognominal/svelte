
export interface IFile {
	type: 'file';
	name: string;
	folderName: string;
	contents?: string;
	// text: boolean;
}

export interface IFolder {
	type: 'folder';
	name: string;
	folderName: string;
    contents?: IItem[];
}

export type IItem = IFile | IFolder;
