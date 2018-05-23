import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { v4 } from 'uuid';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FileItem } from './model/file-item';
import { FileSource } from './model/file-source';
import { FilePanelMeta } from './model/file-panel-meta';

import { FileService } from './service/file.service';
import { clone } from '../shared/utils';
import { AppState, LEFT_PANEL_ID, RIGHT_PANEL_ID } from '../state/reducers';
import { selectLeftPanel, selectRightPanel, selectPanels } from '../state/selectors';
import { SelectFolder } from '../state/actions';

@Component({
  selector: 'ds-file-commander',
  templateUrl: './file-commander.component.html',
  styleUrls: ['./file-commander.component.css']
})
export class FileCommanderComponent implements OnInit {
  panelLeftMeta: FilePanelMeta;
  panelRightMeta: FilePanelMeta;

  constructor(private fileService: FileService,
              private store: Store<AppState>) {}

  ngOnInit() {
    this.subscribeUpdates();
  }

  onAddFolder(panelId: string, folder: { name: string }) {
    const panel = this.getPanel(panelId);
    this.fileService.add(panelId, { isFolder: true, name: folder.name, parentItem: panel.currentRoot ? panel.currentRoot.id : 'root' });
    this.updateFileItemQuery(panelId);
  }
  
  onRemoveItem(panelId: string, item: FileItem) {
    this.fileService.delete(panelId, item);
    this.updateFileItemQuery(panelId);
  }
  
  onMoveItem(panelId: string, event: { item: FileItem; moveTo: FileItem }) {
    this.fileService.update(panelId, event.item.id, { parentItem: event.moveTo.id });
    this.updateFileItemQuery(panelId);
  }
  
  onRenameItem(panelId: string, item: FileItem) {
    this.fileService.update(panelId, item.id, { name: item.name });
    this.updateFileItemQuery(panelId);
  }

  onMoveToOtherSide(panelId: string, item: FileItem) {
    this.fileService.moveToOtherPanel(panelId, item);
    this.updateFileItemQuery(panelId);
    const otherPanelId = panelId === LEFT_PANEL_ID ? RIGHT_PANEL_ID : LEFT_PANEL_ID;
    this.updateFileItemQuery(otherPanelId);
  }

  onCopyToOtherSide(panelId: string, item: FileItem) {
    this.fileService.copyToOtherPanel(panelId, item);
    const otherPanelId = panelId === LEFT_PANEL_ID ? RIGHT_PANEL_ID : LEFT_PANEL_ID;
    this.updateFileItemQuery(otherPanelId);
  }

  onGoUp(panelId: string) {
    this.fileService.selectFolderUp(this.getPanel(panelId));
    this.updateFileItemQuery(panelId);
  }
  
  onGoToFolder(panelId: string, item: FileItem) {
    this.fileService.selectFolderDown(this.getPanel(panelId), item);
    this.updateFileItemQuery(panelId);
  }

  private subscribeUpdates() {
    this.store.select(selectLeftPanel).subscribe(p => this.panelLeftMeta = p);
    this.store.select(selectRightPanel).subscribe(p => this.panelRightMeta = p);
  }

  private updateFileItemQuery(panelId: string) {
    const panel = this.getPanel(panelId);
    this.fileService.queryInFolder(panel, panel.currentRoot ? panel.currentRoot.id : 'root');
  }

  private getPanel(panelId: string) {
    return this.panelLeftMeta.id === panelId ? this.panelLeftMeta : this.panelRightMeta;
  }

}
