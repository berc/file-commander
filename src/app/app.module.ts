import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StoreModule } from '@ngrx/store';

import { FileCommanderModule } from './file-commander/file-commander.module';
import { AppComponent } from './app.component';

import { fileCommanderReducer } from './state/reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FileCommanderModule,
    StoreModule.forRoot({panels: fileCommanderReducer})
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
