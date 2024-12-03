
export interface IFile {
	type: 'file';
	name: string;
	basename: string;
	contents?: string;
	// text: boolean;
}

export interface IFolder {
	type: 'directory';
	name: string;
	basename: string;
    contents?: IItem[];
}

export type IItem = IFile | IFolder;
