export class FileItem {
  constructor(public id?: string,
              public isFolder?: boolean,
              public name?: string,
              public parentItem?: string) { }
}
