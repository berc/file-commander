import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StoreModule } from '@ngrx/store';

import { FileCommanderModule } from './file-commander/file-commander.module';
import { AppComponent } from './app.component';

import { fileCommanderReducer } from './state/reducers';
import { APP_BASE_HREF } from '@angular/common';

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
    {provide: APP_BASE_HREF, useValue: '/file-commander'}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
