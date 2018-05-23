import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { State, Store } from '@ngrx/store';


import { FileItem } from '../model/file-item';
import { FileSource } from '../model/file-source';
import { FilePanelMeta } from '../model/file-panel-meta';
import { AppState, LEFT_PANEL_ID, RIGHT_PANEL_ID } from '../../state/reducers';
import { LoadSourceItems, SelectFolder, AddFolder, RemoveItem, UpdateItem, UpdateCurrentItems, CopyToOtherPanel } from '../../state/actions';
import { selectLeftPanel, selectRightPanel, selectPanels } from '../../state/selectors';
import { FileMock } from './file-mock';
import { clone, convertArrayToMap } from '../../shared/utils';


@Injectable({
  providedIn: 'root'
})
export class FileService {
  private panels = new Map<String, FilePanelMeta>();

  constructor(private store: Store<AppState>) {
    this.initMockData();
    let isInit = true;
    this.store.select(selectPanels).pipe(filter(p => !!p)).subscribe(p => {
      this.panels.set(LEFT_PANEL_ID, p.panels[LEFT_PANEL_ID]);
      this.panels.set(RIGHT_PANEL_ID, p.panels[RIGHT_PANEL_ID]);

      if (isInit) {
        isInit = false;
        this.queryInFolder(this.panels.get(LEFT_PANEL_ID), 'root');
        this.selectFolderUp(this.panels.get(LEFT_PANEL_ID));
        this.queryInFolder(this.panels.get(RIGHT_PANEL_ID), 'root');
        this.selectFolderUp(this.panels.get(RIGHT_PANEL_ID));
      }
    });
  }

  add(panelId: string, fileItem: FileItem) {
    this.store.dispatch(new AddFolder(panelId, fileItem));
  }

  delete(panelId: string, item: FileItem) {
    const childrenMap = convertArrayToMap(this.getItems(this.panels.get(panelId)), 'parentItem', true);
    const children = this.findChildren(item, childrenMap);
    children.forEach(i => this.store.dispatch(new RemoveItem(panelId, i.id)));
  }

  update(panelId: string, id: string, update: Partial<FileItem>) {
    update.id = id;
    this.store.dispatch(new UpdateItem(panelId, update));
  }

  moveToOtherPanel(panelId: string, item: FileItem) {
    this.copyToOtherPanel(panelId, item);
    this.delete(panelId, item);
  }

  copyToOtherPanel(panelId: string, item: FileItem) {
    const otherPanelId = panelId === LEFT_PANEL_ID ? RIGHT_PANEL_ID : LEFT_PANEL_ID;
    const childrenMap = convertArrayToMap(this.getItems(this.panels.get(panelId)), 'parentItem', true);
    const children = this.findChildren(item, childrenMap);
    this.store.dispatch(new CopyToOtherPanel(otherPanelId, children, item.id));
  }

  private findChildren(root: FileItem, childrenMap: any): any[] {
    const children = childrenMap[root.id] || [];
    return children.reduce((c, i) => c.concat(this.findChildren(i, childrenMap)), [root]);
  }

  queryInFolder(panel: FilePanelMeta, folderId: string) {
    const fileItems = this.queryNodeItems(panel, folderId);
    const folders = this.queryAllFolders(panel);
    this.store.dispatch(new UpdateCurrentItems(panel.id, fileItems, folders));
  }

  queryNodeItems(panel: FilePanelMeta, folderId: string) {
    return this.getItems(panel).filter(item => item.parentItem === folderId);
  }

  queryAllFolders(panel: FilePanelMeta) {
    const result = this.getItems(panel).filter(item => item.isFolder);
    result.unshift(new FileItem('root', true, '[Root Folder]', null));
    return result;
  }

  getItems(panel: FilePanelMeta): FileItem[] {
    return Array.from(panel.source.items.values());
  }

  get(panel: FilePanelMeta, id: string) {
    return panel.source.items.get(id);
  }

  selectFolderUp(originalPanel: FilePanelMeta) {
    const panel = { ...originalPanel };
    if ((!panel.currentRoot) || (panel.currentRoot && panel.currentRoot.parentItem === 'root')) {
      panel.currentRoot = null;
      panel.canNavigateUp = false;
    } else {
      panel.currentRoot = this.get(panel, panel.currentRoot.parentItem);
    }
    panel.currentPath = this.popFromPath(panel.currentPath, panel.source.name);
    this.store.dispatch(new SelectFolder(panel));
  }
  
  private popFromPath(path: string, sourceName: string) {
    let p = path || `${sourceName}//`;
    let split = p.split('/');
    split.splice(split.length - 2, 1);
    p = split.join('/');
    return p;
  }

  selectFolderDown(originalPanel: FilePanelMeta, item: FileItem) {
    const panel = { ...originalPanel };
    panel.currentRoot = item;
    panel.canNavigateUp = true;
    panel.currentPath = this.pushToPath(panel.currentPath, item.name, panel.source.name);
    this.store.dispatch(new SelectFolder(panel));
  }

  private pushToPath(path: string, folderName: string, sourceName: string) {
    let p = path || `${sourceName}/`;
    p += `${folderName}/`;
    return p;
  }

  private initMockData() {
    const mockGenerator = new FileMock();
    const mockData = mockGenerator.initMockData();

    this.store.dispatch(new LoadSourceItems(LEFT_PANEL_ID, mockData.left));
    this.store.dispatch(new LoadSourceItems(RIGHT_PANEL_ID, mockData.right));
  }

}