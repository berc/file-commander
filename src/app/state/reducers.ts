import { Action } from '@ngrx/store';
import { v4 } from 'uuid';

import { LOAD_SOURCE_ITEMS, SELECT_FOLDER, ADD_FOLDER, REMOVE_ITEM, UPDATE_ITEM, UPDATE_CURRENT_ITEMS, COPY_TO_OTHER_PANEL } from './actions';
import { clone } from '../shared/utils';

import { FilePanelMeta } from '../file-commander/model/file-panel-meta';
import { FileSource } from '../file-commander/model/file-source';
import { FileItem } from '../file-commander/model/file-item';

export const LEFT_PANEL_ID = 'left';
export const RIGHT_PANEL_ID = 'right';

export interface AppState {
  panels: {
    [LEFT_PANEL_ID]: FilePanelMeta,
    [RIGHT_PANEL_ID]: FilePanelMeta
  }
};

const initialAppState: AppState = {
  panels: {
    [LEFT_PANEL_ID]: new FilePanelMeta(LEFT_PANEL_ID, new FileSource(LEFT_PANEL_ID, 'C:')),
    [RIGHT_PANEL_ID]: new FilePanelMeta(RIGHT_PANEL_ID, new FileSource(RIGHT_PANEL_ID, 'D:'))
  }
};

export function fileCommanderReducer(state: AppState = initialAppState, action: any) {
  switch (action.type) {
    case LOAD_SOURCE_ITEMS: {
      return { ...state, panels: { ...state.panels, [action.panelId]: { ...state.panels[action.panelId], source: action.source }}};
    }
    case SELECT_FOLDER: {
      return { ...state, panels: { ...state.panels, [action.panel.id]: action.panel }};
    }
    case UPDATE_CURRENT_ITEMS: {
      return { ...state, panels: { ...state.panels, [action.panelId]: {
        ...state.panels[action.panelId], currentItems: action.currentItems, allFolders: action.folders
      }}};
    }
    case ADD_FOLDER: {
      const id = v4();
      action.item.id = id;
      const newItemsMap = new Map(state.panels[action.panelId].source.items);
      newItemsMap.set(id, clone(action.item));
      return { ...state, panels: { ...state.panels, [action.panelId]: {
        ...state.panels[action.panelId], source: { ...state.panels[action.panelId].source,
          items: newItemsMap }
        }
      }};
    }
    case COPY_TO_OTHER_PANEL: {
      const panel = state.panels[action.otherPanelId];
      const newItemsMap = new Map(panel.source.items);
      action.items.forEach( e => newItemsMap.set(e.id, clone(e)) );
      const rootItem: FileItem = newItemsMap.get(action.rootItemId);
      rootItem.parentItem = panel.currentRoot ? panel.currentRoot.id : 'root';
      return { ...state, panels: { ...state.panels, [action.otherPanelId]: {
        ...panel, source: { ...panel.source,
          items: newItemsMap }
        }
      }};
    }
    case UPDATE_ITEM: {
      const newItemsMap = new Map(state.panels[action.panelId].source.items);
      newItemsMap.set(action.item.id, Object.assign(newItemsMap.get(action.item.id), action.item));
      return { ...state, panels: { ...state.panels, [action.panelId]: {
        ...state.panels[action.panelId], source: { ...state.panels[action.panelId].source,
          items: newItemsMap }
        }
      }};
    }
    case REMOVE_ITEM: {
      const newItemsMap = new Map(state.panels[action.panelId].source.items);
      newItemsMap.delete(action.id);
      return { ...state, panels: { ...state.panels, [action.panelId]: {
        ...state.panels[action.panelId], source: { ...state.panels[action.panelId].source,
          items: newItemsMap }
      }}};
    }
    default:
      return state;
  }
}