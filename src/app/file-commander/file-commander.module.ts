import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Observable } from 'rxjs';

import { FileSource } from './model/file-source';
import { FileItem } from './model/file-item';

import { FileService } from './service/file.service';

import { NewFolderDialogComponent } from './new-folder-dialog/new-folder-dialog.component';
import { RenameDialogComponent } from './rename-dialog/rename-dialog.component';
import { FilePanelComponent } from './file-panel/file-panel.component';
import { FileCommanderComponent } from './file-commander.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    FileCommanderComponent,
    NewFolderDialogComponent,
    RenameDialogComponent,
    FilePanelComponent
  ],
  entryComponents: [
    NewFolderDialogComponent,
    RenameDialogComponent
  ],
  exports: [
    FileCommanderComponent
  ]
})

export class FileCommanderModule {}