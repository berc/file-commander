import { v4 } from 'uuid';

import { FileSource } from "../model/file-source";
import { FileItem } from "../model/file-item";
import { clone } from "../../shared/utils";

import { LEFT_PANEL_ID, RIGHT_PANEL_ID } from "../../state/reducers";
import { LoadSourceItems } from "../../state/actions";

export class FileMock {

  initMockData() {
    return { left: this.initMockSource(LEFT_PANEL_ID, 'C:'), right: this.initMockSource(RIGHT_PANEL_ID, 'D:') }
  }

  private initMockSource(panelId: string, name: string) {
    const source = this.connectSource(panelId, name);
    const folderA = this.addMockItem(source, { name: 'Documents', isFolder: true, parentItem: 'root' });
    this.addMockItem(source, { name: 'Pictures', isFolder: true, parentItem: 'root' });
    const folderB = this.addMockItem(source, { name: 'PDFs', isFolder: true, parentItem: folderA.id });
    this.addMockItem(source, { name: 'cv', isFolder: false, parentItem: 'root' });
    this.addMockItem(source, { name: 'rootFile', isFolder: false, parentItem: 'root' });
    this.addMockItem(source, { name: 'picture1', isFolder: false, parentItem: folderA.id });
    this.addMockItem(source, { name: 'picture2', isFolder: false, parentItem: folderA.id });
    this.addMockItem(source, { name: 'picture3', isFolder: false, parentItem: folderA.id });
    this.addMockItem(source, { name: 'picture4', isFolder: false, parentItem: folderA.id });
    this.addMockItem(source, { name: 'pdf_100.pdf', isFolder: false, parentItem: folderB.id });
    this.addMockItem(source, { name: 'pdf_200.pdf', isFolder: false, parentItem: folderB.id });
    this.addMockItem(source, { name: 'pdf_300.pdf', isFolder: false, parentItem: folderB.id });
    this.addMockItem(source, { name: 'pdf_400.pdf', isFolder: false, parentItem: folderB.id });
    return source;
  }

  private connectSource(id: string, name: string): FileSource {
    const sourceId = id;
    const source = new FileSource(sourceId, name);
    return source;
  }

  private addMockItem(source: FileSource, fileItem: FileItem) {
    fileItem.id = v4();
    source.items.set(fileItem.id, clone(fileItem));
    return fileItem;
  }

}
