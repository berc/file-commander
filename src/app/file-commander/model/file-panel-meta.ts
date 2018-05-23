import { FileItem } from "./file-item";
import { FileSource } from "./file-source";

export class FilePanelMeta {
  constructor(public id?: string,
              public source?: FileSource,
              public allFolders?: FileItem[],
              public currentItems?: FileItem[],
              public currentRoot?: FileItem,
              public currentPath?: string,
              public canNavigateUp?: boolean) {}
}