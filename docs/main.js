(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  text-align:center;\n  padding: 40px;\n  height: 100%;\n  box-sizing: border-box;\n  display: block;\n}\n\n:host .app {\n  height: 100%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <h1>\n    Welcome to File Commander !\n  </h1>\n    <ds-file-commander>\n    </ds-file-commander>\n  <br />\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ds-app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _file_commander_file_commander_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-commander/file-commander.module */ "./src/app/file-commander/file-commander.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/reducers */ "./src/app/state/reducers.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _file_commander_file_commander_module__WEBPACK_IMPORTED_MODULE_4__["FileCommanderModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({ panels: _state_reducers__WEBPACK_IMPORTED_MODULE_6__["fileCommanderReducer"] })
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["APP_BASE_HREF"], useValue: '/file-commander' }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/file-commander/file-commander.component.css":
/*!*************************************************************!*\
  !*** ./src/app/file-commander/file-commander.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n}\n\n:host .container {\n  height: calc(100% - 60px);\n}\n\n.file-commander {\n  min-width: 200px;\n  min-height: 200px;\n  padding: 0;\n  margin-bottom: 24px;\n}"

/***/ }),

/***/ "./src/app/file-commander/file-commander.component.html":
/*!**************************************************************!*\
  !*** ./src/app/file-commander/file-commander.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutAlign=\"center\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\"\n     class=\"container\">\n  <mat-card class=\"file-commander\"\n            fxFlex=\"50%\">\n    <ds-file-panel  *ngIf=\"panelLeftMeta\"\n                    [fileItems]=\"panelLeftMeta?.currentItems\"\n                    [folderItems]=\"panelLeftMeta?.allFolders\"\n                    [path]=\"panelLeftMeta?.currentPath\" \n                    [canNavigateUp]=\"panelLeftMeta?.canNavigateUp\"\n\n                    (folderAdded)=\"onAddFolder(panelLeftMeta.id, $event)\"\n                    (itemRemoved)=\"onRemoveItem(panelLeftMeta.id, $event)\" \n                    (goDown)=\"onGoToFolder(panelLeftMeta.id, $event)\" \n                    (goUp)=\"onGoUp(panelLeftMeta.id)\" \n                    (itemRenamed)=\"onRenameItem(panelLeftMeta.id, $event)\"\n                    (itemMoved)=\"onMoveItem(panelLeftMeta.id, $event)\"\n                    (itemRenamed)=\"onRenameItem(panelLeftMeta.id, $event)\"\n                    (itemMoved)=\"onMoveItem(panelLeftMeta.id, $event)\"\n                    (itemCopiedToOtherSide)=\"onCopyToOtherSide(panelLeftMeta.id, $event)\"\n                    (itemMovedToOtherSide)=\"onMoveToOtherSide(panelLeftMeta.id, $event)\">\n    </ds-file-panel>\n  </mat-card>\n  <mat-card class=\"file-commander\"\n            fxFlex=\"50%\">\n    <ds-file-panel  *ngIf=\"panelRightMeta\"\n                    [fileItems]=\"panelRightMeta?.currentItems\"\n                    [folderItems]=\"panelRightMeta?.allFolders\"\n                    [path]=\"panelRightMeta?.currentPath\" \n                    [canNavigateUp]=\"panelRightMeta?.canNavigateUp\"\n\n                    (folderAdded)=\"onAddFolder(panelRightMeta.id, $event)\"\n                    (itemRemoved)=\"onRemoveItem(panelRightMeta.id, $event)\" \n                    (goDown)=\"onGoToFolder(panelRightMeta.id, $event)\" \n                    (goUp)=\"onGoUp(panelRightMeta.id)\" \n                    (itemRenamed)=\"onRenameItem(panelRightMeta.id, $event)\"\n                    (itemMoved)=\"onMoveItem(panelRightMeta.id, $event)\"\n                    (itemCopiedToOtherSide)=\"onCopyToOtherSide(panelRightMeta.id, $event)\"\n                    (itemMovedToOtherSide)=\"onMoveToOtherSide(panelRightMeta.id, $event)\">\n    </ds-file-panel>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/file-commander/file-commander.component.ts":
/*!************************************************************!*\
  !*** ./src/app/file-commander/file-commander.component.ts ***!
  \************************************************************/
/*! exports provided: FileCommanderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileCommanderComponent", function() { return FileCommanderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _service_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/file.service */ "./src/app/file-commander/service/file.service.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/reducers */ "./src/app/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/selectors */ "./src/app/state/selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileCommanderComponent = /** @class */ (function () {
    function FileCommanderComponent(fileService, store) {
        this.fileService = fileService;
        this.store = store;
    }
    FileCommanderComponent.prototype.ngOnInit = function () {
        this.subscribeUpdates();
    };
    FileCommanderComponent.prototype.onAddFolder = function (panelId, folder) {
        var panel = this.getPanel(panelId);
        this.fileService.add(panelId, { isFolder: true, name: folder.name, parentItem: panel.currentRoot ? panel.currentRoot.id : 'root' });
        this.updateFileItemQuery(panelId);
    };
    FileCommanderComponent.prototype.onRemoveItem = function (panelId, item) {
        this.fileService.delete(panelId, item);
        this.updateFileItemQuery(panelId);
    };
    FileCommanderComponent.prototype.onMoveItem = function (panelId, event) {
        this.fileService.update(panelId, event.item.id, { parentItem: event.moveTo.id });
        this.updateFileItemQuery(panelId);
    };
    FileCommanderComponent.prototype.onRenameItem = function (panelId, item) {
        this.fileService.update(panelId, item.id, { name: item.name });
        this.updateFileItemQuery(panelId);
    };
    FileCommanderComponent.prototype.onMoveToOtherSide = function (panelId, item) {
        this.fileService.moveToOtherPanel(panelId, item);
        this.updateFileItemQuery(panelId);
        var otherPanelId = panelId === _state_reducers__WEBPACK_IMPORTED_MODULE_3__["LEFT_PANEL_ID"] ? _state_reducers__WEBPACK_IMPORTED_MODULE_3__["RIGHT_PANEL_ID"] : _state_reducers__WEBPACK_IMPORTED_MODULE_3__["LEFT_PANEL_ID"];
        this.updateFileItemQuery(otherPanelId);
    };
    FileCommanderComponent.prototype.onCopyToOtherSide = function (panelId, item) {
        this.fileService.copyToOtherPanel(panelId, item);
        var otherPanelId = panelId === _state_reducers__WEBPACK_IMPORTED_MODULE_3__["LEFT_PANEL_ID"] ? _state_reducers__WEBPACK_IMPORTED_MODULE_3__["RIGHT_PANEL_ID"] : _state_reducers__WEBPACK_IMPORTED_MODULE_3__["LEFT_PANEL_ID"];
        this.updateFileItemQuery(otherPanelId);
    };
    FileCommanderComponent.prototype.onGoUp = function (panelId) {
        this.fileService.selectFolderUp(this.getPanel(panelId));
        this.updateFileItemQuery(panelId);
    };
    FileCommanderComponent.prototype.onGoToFolder = function (panelId, item) {
        this.fileService.selectFolderDown(this.getPanel(panelId), item);
        this.updateFileItemQuery(panelId);
    };
    FileCommanderComponent.prototype.subscribeUpdates = function () {
        var _this = this;
        this.store.select(_state_selectors__WEBPACK_IMPORTED_MODULE_4__["selectLeftPanel"]).subscribe(function (p) { return _this.panelLeftMeta = p; });
        this.store.select(_state_selectors__WEBPACK_IMPORTED_MODULE_4__["selectRightPanel"]).subscribe(function (p) { return _this.panelRightMeta = p; });
    };
    FileCommanderComponent.prototype.updateFileItemQuery = function (panelId) {
        var panel = this.getPanel(panelId);
        this.fileService.queryInFolder(panel, panel.currentRoot ? panel.currentRoot.id : 'root');
    };
    FileCommanderComponent.prototype.getPanel = function (panelId) {
        return this.panelLeftMeta.id === panelId ? this.panelLeftMeta : this.panelRightMeta;
    };
    FileCommanderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ds-file-commander',
            template: __webpack_require__(/*! ./file-commander.component.html */ "./src/app/file-commander/file-commander.component.html"),
            styles: [__webpack_require__(/*! ./file-commander.component.css */ "./src/app/file-commander/file-commander.component.css")]
        }),
        __metadata("design:paramtypes", [_service_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], FileCommanderComponent);
    return FileCommanderComponent;
}());



/***/ }),

/***/ "./src/app/file-commander/file-commander.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/file-commander/file-commander.module.ts ***!
  \*********************************************************/
/*! exports provided: FileCommanderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileCommanderModule", function() { return FileCommanderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _new_folder_dialog_new_folder_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./new-folder-dialog/new-folder-dialog.component */ "./src/app/file-commander/new-folder-dialog/new-folder-dialog.component.ts");
/* harmony import */ var _rename_dialog_rename_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rename-dialog/rename-dialog.component */ "./src/app/file-commander/rename-dialog/rename-dialog.component.ts");
/* harmony import */ var _file_panel_file_panel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./file-panel/file-panel.component */ "./src/app/file-commander/file-panel/file-panel.component.ts");
/* harmony import */ var _file_commander_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./file-commander.component */ "./src/app/file-commander/file-commander.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var FileCommanderModule = /** @class */ (function () {
    function FileCommanderModule() {
    }
    FileCommanderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"]
            ],
            declarations: [
                _file_commander_component__WEBPACK_IMPORTED_MODULE_16__["FileCommanderComponent"],
                _new_folder_dialog_new_folder_dialog_component__WEBPACK_IMPORTED_MODULE_13__["NewFolderDialogComponent"],
                _rename_dialog_rename_dialog_component__WEBPACK_IMPORTED_MODULE_14__["RenameDialogComponent"],
                _file_panel_file_panel_component__WEBPACK_IMPORTED_MODULE_15__["FilePanelComponent"]
            ],
            entryComponents: [
                _new_folder_dialog_new_folder_dialog_component__WEBPACK_IMPORTED_MODULE_13__["NewFolderDialogComponent"],
                _rename_dialog_rename_dialog_component__WEBPACK_IMPORTED_MODULE_14__["RenameDialogComponent"]
            ],
            exports: [
                _file_commander_component__WEBPACK_IMPORTED_MODULE_16__["FileCommanderComponent"]
            ]
        })
    ], FileCommanderModule);
    return FileCommanderModule;
}());



/***/ }),

/***/ "./src/app/file-commander/file-panel/file-panel.component.css":
/*!********************************************************************!*\
  !*** ./src/app/file-commander/file-panel/file-panel.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n:host .container {\n  min-height: 100px;\n  overflow-y: scroll;\n  padding: 10px;\n}\n\n:host .container__list-tiles-flex {\n  width: 100%;\n}\n\n:host .panel-path {\n  margin-left: 8px;\n}\n\n.file-or-folder {\n  padding: 10px;\n  overflow: hidden;\n}\n\n.file-or-folder:hover {\n  background-color: #eee;\n}\n\n.file-or-folder .side-menu-container {\n  display: none;\n}\n\n.file-or-folder:hover .side-menu-container {\n  display: block;\n  width: 150px;\n}\n\n:host .side-menu:hover {\n  color: #777;\n}\n\n.file-or-folder:hover .side-menu-container--list {\n  text-align: right;\n  position: absolute;\n  right: 10px;\n}\n\n.file-or-folder.text-align-left {\n  text-align: left;\n}\n\n.file-or-folder.max-item-height {\n  max-height: 140px;\n}\n\n.file-or-folder-icon-tile {\n  width: 50px;\n  height: 50px;\n  font-size: 50px;\n}\n\n.file-or-folder-icon-list {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  font-size: 24px;\n}\n\n.pointer {\n  cursor: pointer;\n  margin-right: 10px;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n.text-ellipsis {\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n"

/***/ }),

/***/ "./src/app/file-commander/file-panel/file-panel.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/file-commander/file-panel/file-panel.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <mat-icon *ngIf=\"canNavigateUp\" class=\"pointer\" (click)=\"navigateUp()\">\n    arrow_back\n  </mat-icon>\n  <span class=\"panel-path\">\n    {{path || 'Files'}}\n  </span>\n  <span class=\"spacer\"></span>\n  <mat-icon class=\"side-menu pointer\" title=\"List View\" (click)=\"selectListView()\">\n    list\n  </mat-icon>\n  <mat-icon class=\"side-menu pointer\" title=\"Tiles View\" (click)=\"selectTilesView()\">\n    view_module\n  </mat-icon>\n  <mat-icon class=\"side-menu pointer\" title=\"Create Folder\" (click)=\"openNewFolderDialog()\">\n    create_new_folder\n  </mat-icon>\n</mat-toolbar>\n\n<div class=\"container\"\n      fxFlex fxLayout=\"row\"\n      fxLayoutAlign=\"space-between stretch\">\n\n  <div fxLayout=\"{{viewType === ViewTypeEnum.LIST ? 'column nowrap' : 'row wrap'}}\"\n        fxLayout.xs=\"column\"\n        fxLayoutAlign=\"{{viewType === ViewTypeEnum.LIST ? '' : 'center'}}\"\n        fxLayoutGap=\"{{viewType === ViewTypeEnum.LIST ? '' : '10px'}}\"\n        class=\"container__list-tiles-flex\">\n\n    <div fxFlex=\"{{viewType === ViewTypeEnum.LIST ? '40px' : '140px'}}\" \n          *ngFor=\"let item of fileItems\"\n          class=file-or-folder\n          [ngClass]=\"{'text-align-left': viewType === ViewTypeEnum.LIST,\n            'max-item-height': viewType !== ViewTypeEnum.LIST,\n            'pointer': item.isFolder}\">\n      <span [matMenuTriggerFor]=\"rootMenu\" \n            [matMenuTriggerData]=\"{item: item}\" \n            #menuTrigger=\"matMenuTrigger\">\n      </span>\n      <div  fxLayout=\"{{viewType === ViewTypeEnum.LIST ? 'row nowrap' : 'column wrap'}}\" \n            fxLayoutAlign=\"space-between center\" \n            (click)=\"navigateDown(item)\" \n            (contextmenu)=\"openMenu($event, menuTrigger)\">\n\n        <mat-icon color=\"primary\" \n                  class=\"pointer\"\n                  [ngClass]=\"{'file-or-folder-icon-tile': viewType === ViewTypeEnum.TILES,\n                    'file-or-folder-icon-list': viewType === ViewTypeEnum.LIST}\">\n          {{item.isFolder ? 'folder' : 'insert_drive_file'}}\n        </mat-icon>\n        <span class=\"text-ellipsis\">{{item.name}}</span>\n        <span class=\"text-ellipsis\">{{item.isFolder ? '[folder]' : '[file]'}}</span>\n        \n        <span class=\"side-menu-container\" [ngClass]=\"{'side-menu-container--list': viewType === ViewTypeEnum.LIST}\">\n          <span class=\"spacer\"></span>\n          <mat-icon title=\"Move To Other Side\" class=\"side-menu pointer\" (click)=\"moveToOtherSide(item, $event)\">reply</mat-icon>\n          <mat-icon title=\"Copy To Other Side\" class=\"side-menu pointer\" (click)=\"copyToOtherSide(item, $event)\">file_copy</mat-icon>\n          <mat-icon title=\"Rename\" class=\"side-menu pointer\" (click)=\"openRenameDialog(item, $event)\">edit</mat-icon>\n          <mat-icon title=\"Delete\" class=\"side-menu pointer\" (click)=\"deleteItem(item, $event)\">delete</mat-icon>\n        </span>\n\n        <mat-menu #rootMenu=\"matMenu\" [overlapTrigger]=\"false\">\n          <ng-template matMenuContent let-item=\"item\">\n            <button mat-menu-item [matMenuTriggerFor]=\"moveToMenu\" [matMenuTriggerData]=\"{self: item}\">\n              <mat-icon>open_with</mat-icon>\n              <span>Move To</span>\n            </button>\n            <button mat-menu-item (click)=\"moveToOtherSide(item, $event)\">\n              <mat-icon>add_box</mat-icon>\n              <span>Move To Other Side</span>\n            </button>\n            <button mat-menu-item (click)=\"copyToOtherSide(item, $event)\">\n              <mat-icon>reply</mat-icon>\n              <span>Copy To Other Side</span>\n            </button>\n            <button mat-menu-item (click)=\"openRenameDialog(item, $event)\">\n              <mat-icon>edit</mat-icon>\n              <span>Rename</span>\n            </button>\n            <button mat-menu-item (click)=\"deleteItem(item, $event)\">\n              <mat-icon>delete</mat-icon>\n              <span>Delete</span>\n            </button>\n          </ng-template>\n        </mat-menu>\n        \n        <mat-menu #moveToMenu=\"matMenu\">\n          <ng-template matMenuContent let-self=\"self\">\n            <ng-container *ngFor=\"let item of clearFolderItems(self)\">\n              <button *ngIf=\"item.id !== self.id\" mat-menu-item (click)=\"moveItem(self, item)\">{{item.name}}</button>\n            </ng-container>\n          </ng-template>\n        </mat-menu>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/file-commander/file-panel/file-panel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/file-commander/file-panel/file-panel.component.ts ***!
  \*******************************************************************/
/*! exports provided: FilePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePanelComponent", function() { return FilePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils */ "./src/app/shared/utils.ts");
/* harmony import */ var _new_folder_dialog_new_folder_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../new-folder-dialog/new-folder-dialog.component */ "./src/app/file-commander/new-folder-dialog/new-folder-dialog.component.ts");
/* harmony import */ var _rename_dialog_rename_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rename-dialog/rename-dialog.component */ "./src/app/file-commander/rename-dialog/rename-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewTypeEnum;
(function (ViewTypeEnum) {
    ViewTypeEnum[ViewTypeEnum["LIST"] = 0] = "LIST";
    ViewTypeEnum[ViewTypeEnum["TILES"] = 1] = "TILES";
})(ViewTypeEnum || (ViewTypeEnum = {}));
var FilePanelComponent = /** @class */ (function () {
    function FilePanelComponent(dialog) {
        this.dialog = dialog;
        this.viewType = ViewTypeEnum.LIST;
        this.ViewTypeEnum = ViewTypeEnum;
        this.folderAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemRenamed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemMovedToOtherSide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemCopiedToOtherSide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.goUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.goDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FilePanelComponent.prototype.ngOnChanges = function (changes) {
        if (changes.folderItems) {
            this.foldersMap = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["convertArrayToMap"])(changes.folderItems.currentValue, 'id');
        }
    };
    FilePanelComponent.prototype.deleteItem = function (item, event) {
        event.stopPropagation();
        this.itemRemoved.emit(item);
    };
    FilePanelComponent.prototype.moveItem = function (item, moveTo) {
        this.itemMoved.emit({ item: item, moveTo: moveTo });
    };
    FilePanelComponent.prototype.moveToOtherSide = function (item, event) {
        event.stopPropagation();
        this.itemMovedToOtherSide.emit(item);
    };
    FilePanelComponent.prototype.copyToOtherSide = function (item, event) {
        event.stopPropagation();
        this.itemCopiedToOtherSide.emit(item);
    };
    FilePanelComponent.prototype.navigateDown = function (item) {
        if (item.isFolder) {
            this.goDown.emit(item);
        }
    };
    FilePanelComponent.prototype.navigateUp = function () {
        this.goUp.emit();
    };
    FilePanelComponent.prototype.openNewFolderDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_new_folder_dialog_new_folder_dialog_component__WEBPACK_IMPORTED_MODULE_3__["NewFolderDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                _this.folderAdded.emit({ name: res });
            }
        });
    };
    FilePanelComponent.prototype.openRenameDialog = function (item, event) {
        var _this = this;
        event.stopPropagation();
        var dialogRef = this.dialog.open(_rename_dialog_rename_dialog_component__WEBPACK_IMPORTED_MODULE_4__["RenameDialogComponent"], {
            data: { itemName: item.name }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                item.name = res;
                _this.itemRenamed.emit(item);
            }
        });
    };
    FilePanelComponent.prototype.openMenu = function (event, viewChild) {
        event.preventDefault();
        viewChild.openMenu();
    };
    FilePanelComponent.prototype.clearFolderItems = function (item) {
        var _this = this;
        var filtered = this.folderItems;
        if (!this.canNavigateUp) {
            filtered = this.folderItems.filter(function (i) { return i.id !== 'root'; });
        }
        filtered = filtered.filter(function (i) { return !_this.isChildFolder(item, i); });
        return filtered;
    };
    FilePanelComponent.prototype.isChildFolder = function (item, folder) {
        while (folder.id !== 'root') {
            if (folder.parentItem === item.id) {
                return true;
            }
            folder = this.foldersMap[folder.parentItem];
        }
        return false;
    };
    FilePanelComponent.prototype.selectListView = function () {
        this.viewType = ViewTypeEnum.LIST;
    };
    FilePanelComponent.prototype.selectTilesView = function () {
        this.viewType = ViewTypeEnum.TILES;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilePanelComponent.prototype, "fileItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilePanelComponent.prototype, "folderItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FilePanelComponent.prototype, "canNavigateUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FilePanelComponent.prototype, "path", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FilePanelComponent.prototype, "folderAdded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FilePanelComponent.prototype, "itemRemoved", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FilePanelComponent.prototype, "itemRenamed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FilePanelComponent.prototype, "itemMoved", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FilePanelComponent.prototype, "itemMovedToOtherSide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FilePanelComponent.prototype, "itemCopiedToOtherSide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FilePanelComponent.prototype, "goUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FilePanelComponent.prototype, "goDown", void 0);
    FilePanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ds-file-panel',
            template: __webpack_require__(/*! ./file-panel.component.html */ "./src/app/file-commander/file-panel/file-panel.component.html"),
            styles: [__webpack_require__(/*! ./file-panel.component.css */ "./src/app/file-commander/file-panel/file-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], FilePanelComponent);
    return FilePanelComponent;
}());



/***/ }),

/***/ "./src/app/file-commander/model/file-item.ts":
/*!***************************************************!*\
  !*** ./src/app/file-commander/model/file-item.ts ***!
  \***************************************************/
/*! exports provided: FileItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
var FileItem = /** @class */ (function () {
    function FileItem(id, isFolder, name, parentItem) {
        this.id = id;
        this.isFolder = isFolder;
        this.name = name;
        this.parentItem = parentItem;
    }
    return FileItem;
}());



/***/ }),

/***/ "./src/app/file-commander/model/file-panel-meta.ts":
/*!*********************************************************!*\
  !*** ./src/app/file-commander/model/file-panel-meta.ts ***!
  \*********************************************************/
/*! exports provided: FilePanelMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePanelMeta", function() { return FilePanelMeta; });
var FilePanelMeta = /** @class */ (function () {
    function FilePanelMeta(id, source, allFolders, currentItems, currentRoot, currentPath, canNavigateUp) {
        this.id = id;
        this.source = source;
        this.allFolders = allFolders;
        this.currentItems = currentItems;
        this.currentRoot = currentRoot;
        this.currentPath = currentPath;
        this.canNavigateUp = canNavigateUp;
    }
    return FilePanelMeta;
}());



/***/ }),

/***/ "./src/app/file-commander/model/file-source.ts":
/*!*****************************************************!*\
  !*** ./src/app/file-commander/model/file-source.ts ***!
  \*****************************************************/
/*! exports provided: FileSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSource", function() { return FileSource; });
var FileSource = /** @class */ (function () {
    function FileSource(id, name) {
        this.id = id;
        this.name = name;
        this.items = new Map();
    }
    return FileSource;
}());



/***/ }),

/***/ "./src/app/file-commander/new-folder-dialog/new-folder-dialog.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/file-commander/new-folder-dialog/new-folder-dialog.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/file-commander/new-folder-dialog/new-folder-dialog.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/file-commander/new-folder-dialog/new-folder-dialog.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create a new folder</h1>\n\n<mat-dialog-content>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Folder Name\" [(ngModel)]=\"folderName\">\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button mat-dialog-close>Cancel</button>\n  <button mat-raised-button [mat-dialog-close]=\"folderName\" color=\"primary\">OK</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/file-commander/new-folder-dialog/new-folder-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/file-commander/new-folder-dialog/new-folder-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NewFolderDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFolderDialogComponent", function() { return NewFolderDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewFolderDialogComponent = /** @class */ (function () {
    function NewFolderDialogComponent() {
    }
    NewFolderDialogComponent.prototype.ngOnInit = function () {
    };
    NewFolderDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-folder-dialog',
            template: __webpack_require__(/*! ./new-folder-dialog.component.html */ "./src/app/file-commander/new-folder-dialog/new-folder-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-folder-dialog.component.css */ "./src/app/file-commander/new-folder-dialog/new-folder-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewFolderDialogComponent);
    return NewFolderDialogComponent;
}());



/***/ }),

/***/ "./src/app/file-commander/rename-dialog/rename-dialog.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/file-commander/rename-dialog/rename-dialog.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/file-commander/rename-dialog/rename-dialog.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/file-commander/rename-dialog/rename-dialog.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Rename Item</h1>\n\n<mat-dialog-content>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Item Name\" [(ngModel)]=\"folderName\">\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button mat-dialog-close>Cancel</button>\n  <button mat-raised-button [mat-dialog-close]=\"folderName\" color=\"primary\">OK</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/file-commander/rename-dialog/rename-dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/file-commander/rename-dialog/rename-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: RenameDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameDialogComponent", function() { return RenameDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var RenameDialogComponent = /** @class */ (function () {
    function RenameDialogComponent(data) {
        this.data = data;
    }
    RenameDialogComponent.prototype.ngOnInit = function () {
        this.folderName = this.data.itemName;
    };
    RenameDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rename-dialog',
            template: __webpack_require__(/*! ./rename-dialog.component.html */ "./src/app/file-commander/rename-dialog/rename-dialog.component.html"),
            styles: [__webpack_require__(/*! ./rename-dialog.component.css */ "./src/app/file-commander/rename-dialog/rename-dialog.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], RenameDialogComponent);
    return RenameDialogComponent;
}());



/***/ }),

/***/ "./src/app/file-commander/service/file-mock.ts":
/*!*****************************************************!*\
  !*** ./src/app/file-commander/service/file-mock.ts ***!
  \*****************************************************/
/*! exports provided: FileMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileMock", function() { return FileMock; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_file_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/file-source */ "./src/app/file-commander/model/file-source.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils */ "./src/app/shared/utils.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/reducers */ "./src/app/state/reducers.ts");




var FileMock = /** @class */ (function () {
    function FileMock() {
    }
    FileMock.prototype.initMockData = function () {
        return { left: this.initMockSource(_state_reducers__WEBPACK_IMPORTED_MODULE_3__["LEFT_PANEL_ID"], 'C:'), right: this.initMockSource(_state_reducers__WEBPACK_IMPORTED_MODULE_3__["RIGHT_PANEL_ID"], 'D:') };
    };
    FileMock.prototype.initMockSource = function (panelId, name) {
        var source = this.connectSource(panelId, name);
        var folderA = this.addMockItem(source, { name: 'Documents', isFolder: true, parentItem: 'root' });
        this.addMockItem(source, { name: 'Pictures', isFolder: true, parentItem: 'root' });
        var folderB = this.addMockItem(source, { name: 'PDFs', isFolder: true, parentItem: folderA.id });
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
    };
    FileMock.prototype.connectSource = function (id, name) {
        var sourceId = id;
        var source = new _model_file_source__WEBPACK_IMPORTED_MODULE_1__["FileSource"](sourceId, name);
        return source;
    };
    FileMock.prototype.addMockItem = function (source, fileItem) {
        fileItem.id = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
        source.items.set(fileItem.id, Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["clone"])(fileItem));
        return fileItem;
    };
    return FileMock;
}());



/***/ }),

/***/ "./src/app/file-commander/service/file.service.ts":
/*!********************************************************!*\
  !*** ./src/app/file-commander/service/file.service.ts ***!
  \********************************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _model_file_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/file-item */ "./src/app/file-commander/model/file-item.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/reducers */ "./src/app/state/reducers.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/actions */ "./src/app/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state/selectors */ "./src/app/state/selectors.ts");
/* harmony import */ var _file_mock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-mock */ "./src/app/file-commander/service/file-mock.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/utils */ "./src/app/shared/utils.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FileService = /** @class */ (function () {
    function FileService(store) {
        var _this = this;
        this.store = store;
        this.panels = new Map();
        this.initMockData();
        var isInit = true;
        this.store.select(_state_selectors__WEBPACK_IMPORTED_MODULE_6__["selectPanels"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (p) { return !!p; })).subscribe(function (p) {
            _this.panels.set(_state_reducers__WEBPACK_IMPORTED_MODULE_4__["LEFT_PANEL_ID"], p.panels[_state_reducers__WEBPACK_IMPORTED_MODULE_4__["LEFT_PANEL_ID"]]);
            _this.panels.set(_state_reducers__WEBPACK_IMPORTED_MODULE_4__["RIGHT_PANEL_ID"], p.panels[_state_reducers__WEBPACK_IMPORTED_MODULE_4__["RIGHT_PANEL_ID"]]);
            if (isInit) {
                isInit = false;
                _this.queryInFolder(_this.panels.get(_state_reducers__WEBPACK_IMPORTED_MODULE_4__["LEFT_PANEL_ID"]), 'root');
                _this.selectFolderUp(_this.panels.get(_state_reducers__WEBPACK_IMPORTED_MODULE_4__["LEFT_PANEL_ID"]));
                _this.queryInFolder(_this.panels.get(_state_reducers__WEBPACK_IMPORTED_MODULE_4__["RIGHT_PANEL_ID"]), 'root');
                _this.selectFolderUp(_this.panels.get(_state_reducers__WEBPACK_IMPORTED_MODULE_4__["RIGHT_PANEL_ID"]));
            }
        });
    }
    FileService.prototype.add = function (panelId, fileItem) {
        this.store.dispatch(new _state_actions__WEBPACK_IMPORTED_MODULE_5__["AddFolder"](panelId, fileItem));
    };
    FileService.prototype.delete = function (panelId, item) {
        var _this = this;
        var childrenMap = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_8__["convertArrayToMap"])(this.getItems(this.panels.get(panelId)), 'parentItem', true);
        var children = this.findChildren(item, childrenMap);
        children.forEach(function (i) { return _this.store.dispatch(new _state_actions__WEBPACK_IMPORTED_MODULE_5__["RemoveItem"](panelId, i.id)); });
    };
    FileService.prototype.update = function (panelId, id, update) {
        update.id = id;
        this.store.dispatch(new _state_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateItem"](panelId, update));
    };
    FileService.prototype.moveToOtherPanel = function (panelId, item) {
        this.copyToOtherPanel(panelId, item);
        this.delete(panelId, item);
    };
    FileService.prototype.copyToOtherPanel = function (panelId, item) {
        var otherPanelId = panelId === _state_reducers__WEBPACK_IMPORTED_MODULE_4__["LEFT_PANEL_ID"] ? _state_reducers__WEBPACK_IMPORTED_MODULE_4__["RIGHT_PANEL_ID"] : _state_reducers__WEBPACK_IMPORTED_MODULE_4__["LEFT_PANEL_ID"];
        var childrenMap = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_8__["convertArrayToMap"])(this.getItems(this.panels.get(panelId)), 'parentItem', true);
        var children = this.findChildren(item, childrenMap);
        this.store.dispatch(new _state_actions__WEBPACK_IMPORTED_MODULE_5__["CopyToOtherPanel"](otherPanelId, children, item.id));
    };
    FileService.prototype.findChildren = function (root, childrenMap) {
        var _this = this;
        var children = childrenMap[root.id] || [];
        return children.reduce(function (c, i) { return c.concat(_this.findChildren(i, childrenMap)); }, [root]);
    };
    FileService.prototype.queryInFolder = function (panel, folderId) {
        var fileItems = this.queryNodeItems(panel, folderId);
        var folders = this.queryAllFolders(panel);
        this.store.dispatch(new _state_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateCurrentItems"](panel.id, fileItems, folders));
    };
    FileService.prototype.queryNodeItems = function (panel, folderId) {
        return this.getItems(panel).filter(function (item) { return item.parentItem === folderId; });
    };
    FileService.prototype.queryAllFolders = function (panel) {
        var result = this.getItems(panel).filter(function (item) { return item.isFolder; });
        result.unshift(new _model_file_item__WEBPACK_IMPORTED_MODULE_3__["FileItem"]('root', true, '[Root Folder]', null));
        return result;
    };
    FileService.prototype.getItems = function (panel) {
        return Array.from(panel.source.items.values());
    };
    FileService.prototype.get = function (panel, id) {
        return panel.source.items.get(id);
    };
    FileService.prototype.selectFolderUp = function (originalPanel) {
        var panel = __assign({}, originalPanel);
        if ((!panel.currentRoot) || (panel.currentRoot && panel.currentRoot.parentItem === 'root')) {
            panel.currentRoot = null;
            panel.canNavigateUp = false;
        }
        else {
            panel.currentRoot = this.get(panel, panel.currentRoot.parentItem);
        }
        panel.currentPath = this.popFromPath(panel.currentPath, panel.source.name);
        this.store.dispatch(new _state_actions__WEBPACK_IMPORTED_MODULE_5__["SelectFolder"](panel));
    };
    FileService.prototype.popFromPath = function (path, sourceName) {
        var p = path || sourceName + "//";
        var split = p.split('/');
        split.splice(split.length - 2, 1);
        p = split.join('/');
        return p;
    };
    FileService.prototype.selectFolderDown = function (originalPanel, item) {
        var panel = __assign({}, originalPanel);
        panel.currentRoot = item;
        panel.canNavigateUp = true;
        panel.currentPath = this.pushToPath(panel.currentPath, item.name, panel.source.name);
        this.store.dispatch(new _state_actions__WEBPACK_IMPORTED_MODULE_5__["SelectFolder"](panel));
    };
    FileService.prototype.pushToPath = function (path, folderName, sourceName) {
        var p = path || sourceName + "/";
        p += folderName + "/";
        return p;
    };
    FileService.prototype.initMockData = function () {
        var mockGenerator = new _file_mock__WEBPACK_IMPORTED_MODULE_7__["FileMock"]();
        var mockData = mockGenerator.initMockData();
        this.store.dispatch(new _state_actions__WEBPACK_IMPORTED_MODULE_5__["LoadSourceItems"](_state_reducers__WEBPACK_IMPORTED_MODULE_4__["LEFT_PANEL_ID"], mockData.left));
        this.store.dispatch(new _state_actions__WEBPACK_IMPORTED_MODULE_5__["LoadSourceItems"](_state_reducers__WEBPACK_IMPORTED_MODULE_4__["RIGHT_PANEL_ID"], mockData.right));
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/shared/utils.ts":
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/*! exports provided: clone, convertArrayToMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertArrayToMap", function() { return convertArrayToMap; });
function clone(item) {
    return JSON.parse(JSON.stringify(item));
}
function convertArrayToMap(arrayInput, keyName, valuesAsArray) {
    if (valuesAsArray === void 0) { valuesAsArray = false; }
    return arrayInput.reduce(function (map, obj) {
        var items = [];
        if (valuesAsArray) {
            if (map[obj[keyName]]) {
                map[obj[keyName]].push(obj);
            }
            else {
                map[obj[keyName]] = [obj];
            }
        }
        else {
            map[obj[keyName]] = obj;
        }
        return map;
    }, {});
}


/***/ }),

/***/ "./src/app/state/actions.ts":
/*!**********************************!*\
  !*** ./src/app/state/actions.ts ***!
  \**********************************/
/*! exports provided: LOAD_SOURCE_ITEMS, SELECT_FOLDER, ADD_FOLDER, REMOVE_ITEM, UPDATE_CURRENT_ITEMS, UPDATE_ITEM, COPY_TO_OTHER_PANEL, LoadSourceItems, SelectFolder, UpdateCurrentItems, AddFolder, CopyToOtherPanel, UpdateItem, RemoveItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SOURCE_ITEMS", function() { return LOAD_SOURCE_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_FOLDER", function() { return SELECT_FOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FOLDER", function() { return ADD_FOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CURRENT_ITEMS", function() { return UPDATE_CURRENT_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ITEM", function() { return UPDATE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COPY_TO_OTHER_PANEL", function() { return COPY_TO_OTHER_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSourceItems", function() { return LoadSourceItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFolder", function() { return SelectFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCurrentItems", function() { return UpdateCurrentItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFolder", function() { return AddFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyToOtherPanel", function() { return CopyToOtherPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateItem", function() { return UpdateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveItem", function() { return RemoveItem; });
var LOAD_SOURCE_ITEMS = 'LOAD_SOURCE_ITEMS';
var SELECT_FOLDER = 'SELECT_FOLDER';
var ADD_FOLDER = 'ADD_FOLDER';
var REMOVE_ITEM = 'REMOVE_ITEM';
var UPDATE_CURRENT_ITEMS = 'UPDATE_CURRENT_ITEMS';
var UPDATE_ITEM = 'UPDATE_ITEM';
var COPY_TO_OTHER_PANEL = 'COPY_TO_OTHER_PANEL';
var LoadSourceItems = /** @class */ (function () {
    function LoadSourceItems(panelId, source) {
        this.panelId = panelId;
        this.source = source;
        this.type = LOAD_SOURCE_ITEMS;
    }
    return LoadSourceItems;
}());

var SelectFolder = /** @class */ (function () {
    function SelectFolder(panel) {
        this.panel = panel;
        this.type = SELECT_FOLDER;
    }
    return SelectFolder;
}());

var UpdateCurrentItems = /** @class */ (function () {
    function UpdateCurrentItems(panelId, currentItems, folders) {
        this.panelId = panelId;
        this.currentItems = currentItems;
        this.folders = folders;
        this.type = UPDATE_CURRENT_ITEMS;
    }
    return UpdateCurrentItems;
}());

var AddFolder = /** @class */ (function () {
    function AddFolder(panelId, item) {
        this.panelId = panelId;
        this.item = item;
        this.type = ADD_FOLDER;
    }
    return AddFolder;
}());

var CopyToOtherPanel = /** @class */ (function () {
    function CopyToOtherPanel(otherPanelId, items, rootItemId) {
        this.otherPanelId = otherPanelId;
        this.items = items;
        this.rootItemId = rootItemId;
        this.type = COPY_TO_OTHER_PANEL;
    }
    return CopyToOtherPanel;
}());

var UpdateItem = /** @class */ (function () {
    function UpdateItem(panelId, item) {
        this.panelId = panelId;
        this.item = item;
        this.type = UPDATE_ITEM;
    }
    return UpdateItem;
}());

var RemoveItem = /** @class */ (function () {
    function RemoveItem(panelId, id) {
        this.panelId = panelId;
        this.id = id;
        this.type = REMOVE_ITEM;
    }
    return RemoveItem;
}());



/***/ }),

/***/ "./src/app/state/reducers.ts":
/*!***********************************!*\
  !*** ./src/app/state/reducers.ts ***!
  \***********************************/
/*! exports provided: LEFT_PANEL_ID, RIGHT_PANEL_ID, fileCommanderReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT_PANEL_ID", function() { return LEFT_PANEL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT_PANEL_ID", function() { return RIGHT_PANEL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileCommanderReducer", function() { return fileCommanderReducer; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/state/actions.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils */ "./src/app/shared/utils.ts");
/* harmony import */ var _file_commander_model_file_panel_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../file-commander/model/file-panel-meta */ "./src/app/file-commander/model/file-panel-meta.ts");
/* harmony import */ var _file_commander_model_file_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../file-commander/model/file-source */ "./src/app/file-commander/model/file-source.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





var LEFT_PANEL_ID = 'left';
var RIGHT_PANEL_ID = 'right';
;
var initialAppState = {
    panels: (_a = {},
        _a[LEFT_PANEL_ID] = new _file_commander_model_file_panel_meta__WEBPACK_IMPORTED_MODULE_3__["FilePanelMeta"](LEFT_PANEL_ID, new _file_commander_model_file_source__WEBPACK_IMPORTED_MODULE_4__["FileSource"](LEFT_PANEL_ID, 'C:')),
        _a[RIGHT_PANEL_ID] = new _file_commander_model_file_panel_meta__WEBPACK_IMPORTED_MODULE_3__["FilePanelMeta"](RIGHT_PANEL_ID, new _file_commander_model_file_source__WEBPACK_IMPORTED_MODULE_4__["FileSource"](RIGHT_PANEL_ID, 'D:')),
        _a)
};
function fileCommanderReducer(state, action) {
    if (state === void 0) { state = initialAppState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_SOURCE_ITEMS"]: {
            return __assign({}, state, { panels: __assign({}, state.panels, (_a = {}, _a[action.panelId] = __assign({}, state.panels[action.panelId], { source: action.source }), _a)) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["SELECT_FOLDER"]: {
            return __assign({}, state, { panels: __assign({}, state.panels, (_b = {}, _b[action.panel.id] = action.panel, _b)) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_CURRENT_ITEMS"]: {
            return __assign({}, state, { panels: __assign({}, state.panels, (_c = {}, _c[action.panelId] = __assign({}, state.panels[action.panelId], { currentItems: action.currentItems, allFolders: action.folders }), _c)) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ADD_FOLDER"]: {
            var id = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
            action.item.id = id;
            var newItemsMap = new Map(state.panels[action.panelId].source.items);
            newItemsMap.set(id, Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["clone"])(action.item));
            return __assign({}, state, { panels: __assign({}, state.panels, (_d = {}, _d[action.panelId] = __assign({}, state.panels[action.panelId], { source: __assign({}, state.panels[action.panelId].source, { items: newItemsMap }) }), _d)) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["COPY_TO_OTHER_PANEL"]: {
            var panel = state.panels[action.otherPanelId];
            var newItemsMap_1 = new Map(panel.source.items);
            action.items.forEach(function (e) { return newItemsMap_1.set(e.id, Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["clone"])(e)); });
            var rootItem = newItemsMap_1.get(action.rootItemId);
            rootItem.parentItem = panel.currentRoot ? panel.currentRoot.id : 'root';
            return __assign({}, state, { panels: __assign({}, state.panels, (_e = {}, _e[action.otherPanelId] = __assign({}, panel, { source: __assign({}, panel.source, { items: newItemsMap_1 }) }), _e)) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_ITEM"]: {
            var newItemsMap = new Map(state.panels[action.panelId].source.items);
            newItemsMap.set(action.item.id, Object.assign(newItemsMap.get(action.item.id), action.item));
            return __assign({}, state, { panels: __assign({}, state.panels, (_f = {}, _f[action.panelId] = __assign({}, state.panels[action.panelId], { source: __assign({}, state.panels[action.panelId].source, { items: newItemsMap }) }), _f)) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["REMOVE_ITEM"]: {
            var newItemsMap = new Map(state.panels[action.panelId].source.items);
            newItemsMap.delete(action.id);
            return __assign({}, state, { panels: __assign({}, state.panels, (_g = {}, _g[action.panelId] = __assign({}, state.panels[action.panelId], { source: __assign({}, state.panels[action.panelId].source, { items: newItemsMap }) }), _g)) });
        }
        default:
            return state;
    }
    var _a, _b, _c, _d, _e, _f, _g;
}
var _a;


/***/ }),

/***/ "./src/app/state/selectors.ts":
/*!************************************!*\
  !*** ./src/app/state/selectors.ts ***!
  \************************************/
/*! exports provided: selectPanels, selectLeftPanel, selectRightPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPanels", function() { return selectPanels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLeftPanel", function() { return selectLeftPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRightPanel", function() { return selectRightPanel; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectPanels = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('panels');
var selectLeftPanel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPanels, function (state) { return state.panels.left; });
var selectRightPanel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPanels, function (state) { return state.panels.right; });


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rb/projects/dswiss/file-commander/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map