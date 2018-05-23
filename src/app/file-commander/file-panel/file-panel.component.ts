import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';

import { FileItem } from '../model/file-item';

import { convertArrayToMap } from '../../shared/utils';

import { NewFolderDialogComponent } from '../new-folder-dialog/new-folder-dialog.component';
import { RenameDialogComponent } from '../rename-dialog/rename-dialog.component';

enum ViewTypeEnum {
  LIST, TALES
}

@Component({
  selector: 'ds-file-panel',
  templateUrl: './file-panel.component.html',
  styleUrls: ['./file-panel.component.css']
})
export class FilePanelComponent {
  private foldersMap: any;
  private viewType: ViewTypeEnum = ViewTypeEnum.LIST;
  private ViewTypeEnum = ViewTypeEnum;

  @Input() fileItems: FileItem[];
  @Input() folderItems: FileItem[];
  @Input() canNavigateUp: string;
  @Input() path: string;

  @Output() folderAdded = new EventEmitter<{ name: string }>();
  @Output() itemRemoved = new EventEmitter<FileItem>();
  @Output() itemRenamed = new EventEmitter<FileItem>();
  @Output() itemMoved = new EventEmitter<{ item: FileItem; moveTo: FileItem }>();

  @Output() itemMovedToOtherSide = new EventEmitter<FileItem>();
  @Output() itemCopiedToOtherSide = new EventEmitter<FileItem>();

  @Output() goUp = new EventEmitter();
  @Output() goDown = new EventEmitter<FileItem>();

  constructor(public dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.folderItems) {
      this.foldersMap = convertArrayToMap(changes.folderItems.currentValue, 'id');
    }
  }

  deleteItem(item: FileItem, event: any) {
    event.stopPropagation();
    this.itemRemoved.emit(item);
  }

  moveItem(item: FileItem, moveTo: FileItem) {
    this.itemMoved.emit({ item: item, moveTo: moveTo });
  }

  moveToOtherSide(item: FileItem, event: any) {
    event.stopPropagation();
    this.itemMovedToOtherSide.emit(item);
  }

  copyToOtherSide(item: FileItem, event: any) {
    event.stopPropagation();
    this.itemCopiedToOtherSide.emit(item);
  }

  navigateDown(item: FileItem) {
    if (item.isFolder) {
      this.goDown.emit(item);
    }
  }

  navigateUp() {
    this.goUp.emit();
  }

  openNewFolderDialog() {
    let dialogRef = this.dialog.open(NewFolderDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.folderAdded.emit({ name: res });
      }
    });
  }
  
  openRenameDialog(item: FileItem, event: any) {
    event.stopPropagation();
    let dialogRef = this.dialog.open(RenameDialogComponent, {
      data: { itemName: item.name }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        item.name = res;
        this.itemRenamed.emit(item);
      }
    });
  }

  openMenu(event: MouseEvent, viewChild: MatMenuTrigger) {
    event.preventDefault();
    viewChild.openMenu();
  }

  clearFolderItems(item: FileItem): FileItem[] {
    let filtered = this.folderItems;
    if (!this.canNavigateUp) {
      filtered = this.folderItems.filter(i => i.id !== 'root');
    }
    filtered = filtered.filter(i => !this.isChildFolder(item, i));
    return filtered;
  }

  isChildFolder(item: FileItem, folder: FileItem): boolean {
    while (folder.id !== 'root') {
      if (folder.parentItem === item.id) { return true; }
      folder = this.foldersMap[folder.parentItem];
    }
    return false;
  }

  selectListView() {
    this.viewType = ViewTypeEnum.LIST;
  }

  selectTalesView() {
    this.viewType = ViewTypeEnum.TALES;
  }

}
