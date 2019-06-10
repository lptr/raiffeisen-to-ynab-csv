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
		var e = new Error("Cannot find module '" + req + "'");
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

module.exports = ".dropzone {\n  align-items: center;\n  background: lightgrey;\n  border: dashed 1px grey;\n  display: flex;\n  justify-content: center;\n  width: 300px;\n  height: 100px;\n}\n\n.hover {\n  background: grey;\n  border: dashed 1px darkgrey;\n}\n\ntable {\n  width: 100%;\n  padding: 20px;\n}\n\ntd.mat-column-amount {\n  text-align: right;\n}\n\ntd.mat-cell {\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <h1>Raiffeisen YNAB Importer</h1>\n</mat-toolbar>\n\n<div class=\"basic-container\">\n  <div\n    class=\"dropzone\"\n    [ngxFileDropzone]=\"readMode\"\n    accept='text/csv; charset=\"iso-8859-1\"'\n    (fileDrop)=\"onFileLoad($event)\">\n    Drop a CSV file in this zone.\n  </div>\n  <button mat-flat-button color=\"primary\" [disabled]=\"!transactions\" (click)=\"download()\">Download YNAB CSV</button>\n\n  <table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"type\">\n      <th mat-header-cell *matHeaderCellDef> Típus </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.type}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"recordDate\">\n      <th mat-header-cell *matHeaderCellDef> Könyvelés dátuma </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.recordDate | date : shortDate }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"valueDate\">\n      <th mat-header-cell *matHeaderCellDef> Értéknap </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.valueDate | date : shortDate }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef> Azonosító </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.id}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"amount\">\n      <th mat-header-cell *matHeaderCellDef> Összeg </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.amount | number}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"payee\">\n      <th mat-header-cell *matHeaderCellDef> Partner </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.payee}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"note1\">\n      <th mat-header-cell *matHeaderCellDef> Közlemény/1 </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.note1}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"note2\">\n      <th mat-header-cell *matHeaderCellDef> Közlemény/2 </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.note2}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"note3\">\n      <th mat-header-cell *matHeaderCellDef> Közlemény/3 </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.note3}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n"

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
/* harmony import */ var ngx_file_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-file-helpers */ "./node_modules/ngx-file-helpers/esm5/ngx-file-helpers.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'raiffeisen-ynab-importer';
        this.readMode = ngx_file_helpers__WEBPACK_IMPORTED_MODULE_1__["ReadMode"].arrayBuffer;
        this.displayedColumns = [
            "type",
            "recordDate",
            "valueDate",
            "id",
            "amount",
            "payee",
            "note1",
            "note2",
            "note3",
        ];
    }
    AppComponent.prototype.onFileLoad = function (file) {
        var _this = this;
        var text = new TextDecoder('windows-1250').decode(file.content);
        papaparse__WEBPACK_IMPORTED_MODULE_2__["parse"](text, {
            delimiter: ";",
            complete: function (data) {
                console.log("Parsed data", data);
                var csvRows = data.data;
                // Ignore "Könyvelésre váró tételek"
                while (csvRows.length) {
                    var header = csvRows.shift();
                    if (header[0] === "Könyvelt tételek") {
                        // Ignore table header
                        csvRows.shift();
                        break;
                    }
                }
                var transactions = [];
                for (var _i = 0, csvRows_1 = csvRows; _i < csvRows_1.length; _i++) {
                    var csvRow = csvRows_1[_i];
                    if (csvRow[0] === "") {
                        break;
                    }
                    var transaction = new Transaction(csvRow);
                    console.log(transaction);
                    transactions.push(transaction);
                }
                _this.transactions = transactions;
            }
        });
    };
    AppComponent.prototype.download = function () {
        var ynabTransactions = this.transactions.map(function (transaction) { return transaction.toYnab(); });
        ynabTransactions.unshift(["Date", "Payee", "Category", "Memo", "Outflow", "Inflow"]);
        var csvText = papaparse__WEBPACK_IMPORTED_MODULE_2__["unparse"](ynabTransactions, {
            delimiter: ",",
        });
        var blob = new Blob([csvText], { type: "text/csv;charset=utf-8" });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, 'ynab-import.csv');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

// Típus;Könyvelés dátuma;Értéknap;Azonosító;Összeg;Közlemény/1;Közlemény/2;Közlemény/3;Közlemény/4;;
var Transaction = /** @class */ (function () {
    function Transaction(row) {
        this.type = row[0];
        this.recordDate = parseDate(row[1]);
        this.valueDate = parseDate(row[2]);
        this.id = row[3];
        this.amount = parseAmount(row[4]);
        this.note1 = row[5];
        this.payee = row[6];
        this.note2 = row[7];
        this.note3 = row[8];
    }
    Transaction.prototype.toYnab = function () {
        // Date,Payee,Category,Memo,Outflow,Inflow
        return [
            this.valueDate.toLocaleString("en-US").split(",")[0],
            this.payee,
            "",
            this.mergeNotes(),
            this.amount < 0 ? -this.amount : "",
            this.amount >= 0 ? this.amount : "",
        ];
    };
    Transaction.prototype.mergeNotes = function () {
        if (!this.note2 && !this.note3) {
            return this.note1;
        }
        else if (!this.note3) {
            return this.note2;
        }
        else {
            return this.note2 + " / " + this.note3;
        }
    };
    return Transaction;
}());
function parseDate(date) {
    var matcher = /(\d{4})\.(\d{2})\.(\d{2})\., \w+/.exec(date);
    return new Date(+matcher[1], +matcher[2] - 1, +matcher[3]);
}
function parseAmount(amount) {
    var matcher = /(-?[\d\s]+)(?:,(\d+))? (\w+)/.exec(amount);
    var result = +(matcher[1].replace(/\s+/g, ""));
    if (matcher[2]) {
        result += +matcher[2] / 100 * Math.sign(result + 0.5);
    }
    return result;
}


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var ngx_file_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-file-helpers */ "./node_modules/ngx-file-helpers/esm5/ngx-file-helpers.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ngx_file_helpers__WEBPACK_IMPORTED_MODULE_7__["FileHelpersModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            ],
            exports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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

module.exports = __webpack_require__(/*! /Users/lptr/Workspace/modling/raiffeisen-ynab-importer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map