webpackJsonp([1,4],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, ".main{\r\n  width: 50%;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  border: 2px solid black;\r\n  font-family: sans-serif;\r\n}\r\nh1{\r\n  text-align: center;\r\n  background-color: #5c8297;\r\n  padding: 3% 0%;\r\n  margin-top: 0%;\r\n  color: white;\r\n}\r\n.addItem{\r\n  position: relative;\r\n  padding-bottom: 0%;\r\n}\r\n.addItem button{\r\n  padding: 2%;\r\n}\r\n\r\n.addText{\r\n  width: 70%;\r\n  weight: 80%;\r\n  padding: 2%;\r\n  font-size: 100%;\r\n}\r\n\r\nul{\r\n  padding: 0;\r\n  list-style: none;\r\n  font-size: 100%;\r\n  text-align: center;\r\n  background-color: #eee;\r\n  color: #688668;\r\n}\r\nli{\r\n  padding: 2%;\r\n  border-bottom: 3px solid white;\r\n}\r\nspan{\r\n  cursor: pointer;\r\n  float: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1>Items list</h1>\n  <div class=\"addItem\">\n    <input [(ngModel)]=\"newItem\" type=\"text\" placeholder=\"Add item\" class=\"addText\" />\n    <button (click)=\"pushItem()\">Add</button>\n  </div>\n  <ul>\n    <li *ngFor=\"let item of items; let ind=index\">\n      {{item| uppercase}}\n      <span (click)=\"popItem(index)\" >x</span>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 69;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(79);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.items = [
            'Angular',
            'React',
            'Vue'
        ];
        this.newItem = "";
        this.pushItem = function () {
            if (this.newItem != "") {
                this.items.push(this.newItem);
                this.newItem = "";
            }
        };
        this.popItem = function (index) {
            this.items.splice(index, 1);
        };
        // title = 'app works!';
        //
        // buttonStatus1=true;
        // buttonStatus2=false;
        //
        // myEvent(event){
        //   console.log(event);
        // };
        //
        // angularLogo="https://angular.io/resources/images/logos/angularjs/AngularJS-Shield.svg";
        //
        // myObj={
        //   gender: 'male',
        //   age: 19,
        //   location: 'India'
        // };
        // //myArr=['ho', 'ds', 'sd'];
        // myArr=false;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        //template: 'sai',
        //backtick for multiline template
        // template:
        //   `
        //   <img src="{{angularLogo}}">
        //   <img [src]="angularLogo">
        //   <img bind-src="angularLogo">
        //   <br />
        //   abv
        //   <p>sai</p>
        //   <h1>{{title}}</h1>
        //   {{myObj.location}}
        //   <button [disabled]="buttonStatus1">My button</button>
        //   <button [disabled]="buttonStatus2">My button</button>
        //
        //   <button (mouseenter)="myEvent($event)">My button</button>
        //   <ul>
        //     <li *ngFor="let arr of myArr">{{arr}}</li>
        //   </ul>
        //   <div *ngIf="myArr;then otherTmpl1 else otherTmpl2"></div>
        //   <h1>yo</h1>
        //   sda
        //   <ng-template #otherTmpl1>I exist</ng-template>
        //   <ng-template #otherTmpl2>No I dont exist</ng-template>
        //
        //   `,
        template: __webpack_require__(134),
        //styles: ['img{ width: 80px; }'],
        styles: [__webpack_require__(133)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[159]);
//# sourceMappingURL=main.bundle.js.map