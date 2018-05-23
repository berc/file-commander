import { FileItem } from "./file-item";

export class FileSource {
  public items: Map<string, FileItem> = new Map<string, FileItem>();

  constructor(public id?: string,
              public name?: string) { }
}
