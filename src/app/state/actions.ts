import { Action } from "@ngrx/store";

import { FileSource } from "../file-commander/model/file-source";
import { FilePanelMeta } from "../file-commander/model/file-panel-meta";
import { FileItem } from "../file-commander/model/file-item";

export const LOAD_SOURCE_ITEMS = 'LOAD_SOURCE_ITEMS';
export const SELECT_FOLDER = 'SELECT_FOLDER';

export const ADD_FOLDER = 'ADD_FOLDER';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_CURRENT_ITEMS = 'UPDATE_CURRENT_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const COPY_TO_OTHER_PANEL = 'COPY_TO_OTHER_PANEL';

export class LoadSourceItems implements Action {
  readonly type = LOAD_SOURCE_ITEMS;
  constructor(public panelId: string,
              public source: FileSource) { }
} 

export class SelectFolder implements Action {
  readonly type = SELECT_FOLDER;
  constructor(public panel: FilePanelMeta) { }
}

export class UpdateCurrentItems implements Action {
  readonly type = UPDATE_CURRENT_ITEMS;
  constructor(public panelId: string,
              public currentItems: FileItem[],
              public folders: FileItem[]) { }
} 

export class AddFolder implements Action {
  readonly type = ADD_FOLDER;
  constructor(public panelId: string,
              public item: FileItem) { }
} 

export class CopyToOtherPanel implements Action {
  readonly type = COPY_TO_OTHER_PANEL;
  constructor(public otherPanelId: string,
              public items: FileItem[],
              public rootItemId: string) { }
} 

export class UpdateItem implements Action {
  readonly type = UPDATE_ITEM;
  constructor(public panelId: string,
              public item: Partial<FileItem>) { }
} 

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;
  constructor(public panelId: string,
              public id: string) { }
} 
