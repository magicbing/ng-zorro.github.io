exports.ids = ["collapse-index-module"];
exports.modules = {

/***/ "0oz9":
/*!***********************************************!*\
  !*** ./site/doc/app/collapse/index.module.ts ***!
  \***********************************************/
/*! exports provided: NzDemoCollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCollapseModule", function() { return NzDemoCollapseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ "WGB2");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module */ "FGUO");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion */ "5CEW");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic */ "pS9B");
/* harmony import */ var _borderless__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./borderless */ "uQTA");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom */ "L/uF");
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extra */ "iOhP");
/* harmony import */ var _ghost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ghost */ "BjEY");
/* harmony import */ var _mix__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mix */ "I4N/");
/* harmony import */ var _noarrow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./noarrow */ "EimB");
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./zh.component */ "snCS");
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./en.component */ "MKXN");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "UY1E");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");


















class NzDemoCollapseModule {
}
/** @nocollapse */ NzDemoCollapseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzDemoCollapseModule });
/** @nocollapse */ NzDemoCollapseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzDemoCollapseModule_Factory(t) { return new (t || NzDemoCollapseModule)(); }, imports: [[
            _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
            ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_13__["NzDemoCollapseEnComponent"] },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_12__["NzDemoCollapseZhComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzDemoCollapseModule, { declarations: [_accordion__WEBPACK_IMPORTED_MODULE_4__["NzDemoCollapseAccordionComponent"],
        _basic__WEBPACK_IMPORTED_MODULE_5__["NzDemoCollapseBasicComponent"],
        _borderless__WEBPACK_IMPORTED_MODULE_6__["NzDemoCollapseBorderlessComponent"],
        _custom__WEBPACK_IMPORTED_MODULE_7__["NzDemoCollapseCustomComponent"],
        _extra__WEBPACK_IMPORTED_MODULE_8__["NzDemoCollapseExtraComponent"],
        _ghost__WEBPACK_IMPORTED_MODULE_9__["NzDemoCollapseGhostComponent"],
        _mix__WEBPACK_IMPORTED_MODULE_10__["NzDemoCollapseMixComponent"],
        _noarrow__WEBPACK_IMPORTED_MODULE_11__["NzDemoCollapseNoarrowComponent"],
        _zh_component__WEBPACK_IMPORTED_MODULE_12__["NzDemoCollapseZhComponent"],
        _en_component__WEBPACK_IMPORTED_MODULE_13__["NzDemoCollapseEnComponent"]], imports: [_share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_14__["NzCollapseModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCollapseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                    ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_13__["NzDemoCollapseEnComponent"] },
                        { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_12__["NzDemoCollapseZhComponent"] }
                    ])
                ],
                declarations: [
                    _accordion__WEBPACK_IMPORTED_MODULE_4__["NzDemoCollapseAccordionComponent"],
                    _basic__WEBPACK_IMPORTED_MODULE_5__["NzDemoCollapseBasicComponent"],
                    _borderless__WEBPACK_IMPORTED_MODULE_6__["NzDemoCollapseBorderlessComponent"],
                    _custom__WEBPACK_IMPORTED_MODULE_7__["NzDemoCollapseCustomComponent"],
                    _extra__WEBPACK_IMPORTED_MODULE_8__["NzDemoCollapseExtraComponent"],
                    _ghost__WEBPACK_IMPORTED_MODULE_9__["NzDemoCollapseGhostComponent"],
                    _mix__WEBPACK_IMPORTED_MODULE_10__["NzDemoCollapseMixComponent"],
                    _noarrow__WEBPACK_IMPORTED_MODULE_11__["NzDemoCollapseNoarrowComponent"],
                    _zh_component__WEBPACK_IMPORTED_MODULE_12__["NzDemoCollapseZhComponent"],
                    _en_component__WEBPACK_IMPORTED_MODULE_13__["NzDemoCollapseEnComponent"],
                ],
                entryComponents: []
            }]
    }], null, null); })();


/***/ }),

/***/ "5CEW":
/*!********************************************!*\
  !*** ./site/doc/app/collapse/accordion.ts ***!
  \********************************************/
/*! exports provided: NzDemoCollapseAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCollapseAccordionComponent", function() { return NzDemoCollapseAccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "UY1E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoCollapseAccordionComponent_nz_collapse_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", panel_r1.name, " content");
} }
class NzDemoCollapseAccordionComponent {
    constructor() {
        this.panels = [
            {
                active: true,
                name: 'This is panel header 1',
                childPanel: [
                    {
                        active: false,
                        name: 'This is panel header 1-1'
                    }
                ]
            },
            {
                active: false,
                name: 'This is panel header 2'
            },
            {
                active: false,
                name: 'This is panel header 3'
            }
        ];
    }
}
/** @nocollapse */ NzDemoCollapseAccordionComponent.ɵfac = function NzDemoCollapseAccordionComponent_Factory(t) { return new (t || NzDemoCollapseAccordionComponent)(); };
/** @nocollapse */ NzDemoCollapseAccordionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseAccordionComponent, selectors: [["nz-demo-collapse-accordion"]], decls: 2, vars: 1, consts: [["nzAccordion", ""], [3, "nzHeader", "nzActive", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive"]], template: function NzDemoCollapseAccordionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseAccordionComponent_nz_collapse_panel_1_Template, 3, 3, "nz-collapse-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__["NzCollapseComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__["NzCollapsePanelComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCollapseAccordionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-collapse-accordion',
                template: `
    <nz-collapse nzAccordion>
      <nz-collapse-panel *ngFor="let panel of panels" [nzHeader]="panel.name" [nzActive]="panel.active">
        <p>{{ panel.name }} content</p>
      </nz-collapse-panel>
    </nz-collapse>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "BjEY":
/*!****************************************!*\
  !*** ./site/doc/app/collapse/ghost.ts ***!
  \****************************************/
/*! exports provided: NzDemoCollapseGhostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCollapseGhostComponent", function() { return NzDemoCollapseGhostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "UY1E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoCollapseGhostComponent_nz_collapse_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active)("nzDisabled", panel_r1.disabled);
} }
class NzDemoCollapseGhostComponent {
    constructor() {
        this.panels = [
            {
                active: true,
                name: 'This is panel header 1',
                disabled: false
            },
            {
                active: false,
                disabled: false,
                name: 'This is panel header 2'
            },
            {
                active: false,
                disabled: true,
                name: 'This is panel header 3'
            }
        ];
    }
}
/** @nocollapse */ NzDemoCollapseGhostComponent.ɵfac = function NzDemoCollapseGhostComponent_Factory(t) { return new (t || NzDemoCollapseGhostComponent)(); };
/** @nocollapse */ NzDemoCollapseGhostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseGhostComponent, selectors: [["nz-demo-collapse-ghost"]], decls: 2, vars: 1, consts: [["nzGhost", ""], [3, "nzHeader", "nzActive", "nzDisabled", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive", "nzDisabled"], [2, "margin", "0"]], template: function NzDemoCollapseGhostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseGhostComponent_nz_collapse_panel_1_Template, 3, 3, "nz-collapse-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__["NzCollapseComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__["NzCollapsePanelComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCollapseGhostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-collapse-ghost',
                template: `
    <nz-collapse nzGhost>
      <nz-collapse-panel *ngFor="let panel of panels" [nzHeader]="panel.name" [nzActive]="panel.active" [nzDisabled]="panel.disabled">
        <p style="margin:0;">
          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many
          households across the world.
        </p>
      </nz-collapse-panel>
    </nz-collapse>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "EimB":
/*!******************************************!*\
  !*** ./site/doc/app/collapse/noarrow.ts ***!
  \******************************************/
/*! exports provided: NzDemoCollapseNoarrowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCollapseNoarrowComponent", function() { return NzDemoCollapseNoarrowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "UY1E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoCollapseNoarrowComponent_nz_collapse_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active)("nzShowArrow", panel_r1.arrow);
} }
class NzDemoCollapseNoarrowComponent {
    constructor() {
        this.panels = [
            {
                active: true,
                name: 'This is panel header 1',
                arrow: true
            },
            {
                active: false,
                arrow: false,
                name: 'This is panel header 2'
            }
        ];
    }
}
/** @nocollapse */ NzDemoCollapseNoarrowComponent.ɵfac = function NzDemoCollapseNoarrowComponent_Factory(t) { return new (t || NzDemoCollapseNoarrowComponent)(); };
/** @nocollapse */ NzDemoCollapseNoarrowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseNoarrowComponent, selectors: [["nz-demo-collapse-noarrow"]], decls: 2, vars: 1, consts: [[3, "nzHeader", "nzActive", "nzShowArrow", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive", "nzShowArrow"], [2, "margin", "0"]], template: function NzDemoCollapseNoarrowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseNoarrowComponent_nz_collapse_panel_1_Template, 3, 3, "nz-collapse-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__["NzCollapseComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__["NzCollapsePanelComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCollapseNoarrowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-collapse-noarrow',
                template: `
    <nz-collapse>
      <nz-collapse-panel *ngFor="let panel of panels" [nzHeader]="panel.name" [nzActive]="panel.active" [nzShowArrow]="panel.arrow">
        <p style="margin:0;">
          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many
          households across the world.
        </p>
      </nz-collapse-panel>
    </nz-collapse>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "FGUO":
/*!*****************************************!*\
  !*** ./site/doc/app/collapse/module.ts ***!
  \*****************************************/
/*! exports provided: moduleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleList", function() { return moduleList; });
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "UY1E");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");


const moduleList = [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_0__["NzCollapseModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]];


/***/ }),

/***/ "I4N/":
/*!**************************************!*\
  !*** ./site/doc/app/collapse/mix.ts ***!
  \**************************************/
/*! exports provided: NzDemoCollapseMixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCollapseMixComponent", function() { return NzDemoCollapseMixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "UY1E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoCollapseMixComponent_nz_collapse_panel_1_div_3_nz_collapse_panel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childPanel_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", childPanel_r4.name)("nzActive", childPanel_r4.active);
} }
function NzDemoCollapseMixComponent_nz_collapse_panel_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-collapse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoCollapseMixComponent_nz_collapse_panel_1_div_3_nz_collapse_panel_2_Template, 3, 2, "nz-collapse-panel", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const panel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", panel_r1.childPanel);
} }
function NzDemoCollapseMixComponent_nz_collapse_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoCollapseMixComponent_nz_collapse_panel_1_div_3_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](panel_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", panel_r1.childPanel && panel_r1.childPanel.length > 0);
} }
class NzDemoCollapseMixComponent {
    constructor() {
        this.panels = [
            {
                active: true,
                disabled: false,
                name: 'This is panel header 1',
                childPanel: [
                    {
                        active: true,
                        name: 'This is panel header 1-1'
                    },
                    {
                        active: false,
                        name: 'This is panel header 1-2'
                    }
                ]
            },
            {
                active: false,
                disabled: true,
                name: 'This is panel header 2'
            },
            {
                active: false,
                disabled: false,
                name: 'This is panel header 3'
            }
        ];
    }
}
/** @nocollapse */ NzDemoCollapseMixComponent.ɵfac = function NzDemoCollapseMixComponent_Factory(t) { return new (t || NzDemoCollapseMixComponent)(); };
/** @nocollapse */ NzDemoCollapseMixComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseMixComponent, selectors: [["nz-demo-collapse-mix"]], decls: 2, vars: 1, consts: [[3, "nzHeader", "nzActive", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive"], [4, "ngIf"]], template: function NzDemoCollapseMixComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseMixComponent_nz_collapse_panel_1_Template, 4, 4, "nz-collapse-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__["NzCollapseComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__["NzCollapsePanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCollapseMixComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-collapse-mix',
                template: `
    <nz-collapse>
      <nz-collapse-panel *ngFor="let panel of panels" [nzHeader]="panel.name" [nzActive]="panel.active">
        <p>{{ panel.name }}</p>
        <div *ngIf="panel.childPanel && panel.childPanel.length > 0">
          <nz-collapse>
            <nz-collapse-panel *ngFor="let childPanel of panel.childPanel" [nzHeader]="childPanel.name" [nzActive]="childPanel.active">
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many
                households across the world.
              </p>
            </nz-collapse-panel>
          </nz-collapse>
        </div>
      </nz-collapse-panel>
    </nz-collapse>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "L/uF":
/*!*****************************************!*\
  !*** ./site/doc/app/collapse/custom.ts ***!
  \*****************************************/
/*! exports provided: NzDemoCollapseCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCollapseCustomComponent", function() { return NzDemoCollapseCustomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "UY1E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");





function NzDemoCollapseCustomComponent_nz_collapse_panel_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 5);
} if (rf & 2) {
    const active_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", active_r6, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzRotate", _r3.nzActive ? 90 : -90);
} }
function NzDemoCollapseCustomComponent_nz_collapse_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoCollapseCustomComponent_nz_collapse_panel_1_ng_template_4_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    const isFirst_r2 = ctx.first;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active)("ngStyle", panel_r1.customStyle)("nzExpandedIcon", !isFirst_r2 ? panel_r1.icon || _r4 : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", panel_r1.name, " content");
} }
class NzDemoCollapseCustomComponent {
    constructor() {
        this.panels = [
            {
                active: true,
                disabled: false,
                name: 'This is panel header 1',
                customStyle: {
                    background: '#f7f7f7',
                    'border-radius': '4px',
                    'margin-bottom': '24px',
                    border: '0px'
                }
            },
            {
                active: false,
                disabled: true,
                name: 'This is panel header 2',
                icon: 'double-right',
                customStyle: {
                    background: '#f7f7f7',
                    'border-radius': '4px',
                    'margin-bottom': '24px',
                    border: '0px'
                }
            },
            {
                active: false,
                disabled: false,
                name: 'This is panel header 3',
                customStyle: {
                    background: '#f7f7f7',
                    'border-radius': '4px',
                    'margin-bottom': '24px',
                    border: '0px'
                }
            }
        ];
    }
}
/** @nocollapse */ NzDemoCollapseCustomComponent.ɵfac = function NzDemoCollapseCustomComponent_Factory(t) { return new (t || NzDemoCollapseCustomComponent)(); };
/** @nocollapse */ NzDemoCollapseCustomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseCustomComponent, selectors: [["nz-demo-collapse-custom"]], decls: 2, vars: 2, consts: [[3, "nzBordered"], [3, "nzHeader", "nzActive", "ngStyle", "nzExpandedIcon", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive", "ngStyle", "nzExpandedIcon"], ["p", ""], ["expandedIcon", ""], ["nz-icon", "", "nzType", "caret-right", 1, "ant-collapse-arrow", 3, "nzRotate"]], template: function NzDemoCollapseCustomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseCustomComponent_nz_collapse_panel_1_Template, 6, 5, "nz-collapse-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBordered", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__["NzCollapseComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__["NzCollapsePanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCollapseCustomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-collapse-custom',
                template: `
    <nz-collapse [nzBordered]="false">
      <nz-collapse-panel
        #p
        *ngFor="let panel of panels; let isFirst = first"
        [nzHeader]="panel.name"
        [nzActive]="panel.active"
        [ngStyle]="panel.customStyle"
        [nzExpandedIcon]="!isFirst ? panel.icon || expandedIcon : undefined"
      >
        <p>{{ panel.name }} content</p>
        <ng-template #expandedIcon let-active>
          {{ active }}
          <i nz-icon nzType="caret-right" class="ant-collapse-arrow" [nzRotate]="p.nzActive ? 90 : -90"></i>
        </ng-template>
      </nz-collapse-panel>
    </nz-collapse>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "MKXN":
/*!***********************************************!*\
  !*** ./site/doc/app/collapse/en.component.ts ***!
  \***********************************************/
/*! exports provided: NzDemoCollapseEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCollapseEnComponent", function() { return NzDemoCollapseEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "rKiv");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "utH8");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "l83q");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "pk25");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "T+9E");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic */ "pS9B");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accordion */ "5CEW");
/* harmony import */ var _mix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mix */ "I4N/");
/* harmony import */ var _borderless__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./borderless */ "uQTA");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom */ "L/uF");
/* harmony import */ var _noarrow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./noarrow */ "EimB");
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./extra */ "iOhP");
/* harmony import */ var _ghost__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ghost */ "BjEY");

















class NzDemoCollapseEnComponent {
    constructor() {
        this.expanded = false;
    }
    goLink(link) {
        if (window) {
            window.location.hash = link;
        }
    }
    expandAllCode() {
        this.expanded = !this.expanded;
        this.codeBoxes.forEach(code => {
            code.nzExpanded = this.expanded;
            code.expandCode(this.expanded);
            code.check();
        });
    }
}
/** @nocollapse */ NzDemoCollapseEnComponent.ɵfac = function NzDemoCollapseEnComponent_Factory(t) { return new (t || NzDemoCollapseEnComponent)(); };
/** @nocollapse */ NzDemoCollapseEnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseEnComponent, selectors: [["nz-demo-collapse"]], viewQuery: function NzDemoCollapseEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 308, vars: 36, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-collapse-demo-basic", "nzTitle", "Collapse"], ["nzHref", "#components-collapse-demo-accordion", "nzTitle", "Accordion"], ["nzHref", "#components-collapse-demo-mix", "nzTitle", "Nested panel"], ["nzHref", "#components-collapse-demo-borderless", "nzTitle", "Borderless"], ["nzHref", "#components-collapse-demo-custom", "nzTitle", "Custom Panel"], ["nzHref", "#components-collapse-demo-noarrow", "nzTitle", "No arrow"], ["nzHref", "#components-collapse-demo-extra", "nzTitle", "Extra Node"], ["nzHref", "#components-collapse-demo-ghost", "nzTitle", "Ghost Collapse"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["aria-label", "Edit this page on Github", "href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Collapse", "nzSelector", "nz-demo-collapse-basic", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-basic <name>", "nzComponentName", "NzDemoCollapseBasicComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Accordion", "nzSelector", "nz-demo-collapse-accordion", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-accordion <name>", "nzComponentName", "NzDemoCollapseAccordionComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Nested panel", "nzSelector", "nz-demo-collapse-mix", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-mix <name>", "nzComponentName", "NzDemoCollapseMixComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Borderless", "nzSelector", "nz-demo-collapse-borderless", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-borderless <name>", "nzComponentName", "NzDemoCollapseBorderlessComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Custom Panel", "nzSelector", "nz-demo-collapse-custom", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-custom <name>", "nzComponentName", "NzDemoCollapseCustomComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "No arrow", "nzSelector", "nz-demo-collapse-noarrow", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-noarrow <name>", "nzComponentName", "NzDemoCollapseNoarrowComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Extra Node", "nzSelector", "nz-demo-collapse-extra", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-extra <name>", "nzComponentName", "NzDemoCollapseExtraComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Ghost Collapse", "nzSelector", "nz-demo-collapse-ghost", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-ghost <name>", "nzComponentName", "NzDemoCollapseGhostComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-collapse"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-collapse'", 1, "anchor"], ["id", "nz-collapse-panel"], ["onclick", "window.location.hash = 'nz-collapse-panel'", 1, "anchor"]], template: function NzDemoCollapseEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoCollapseEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-link", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "A content area which can be collapsed and expanded.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Can be used to group or hide complex regions to keep the page clean.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " is a special kind of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ", which allows only one panel to be expanded at a time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " NzCollapseModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "'ng-zorro-antd/collapse'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCollapseEnComponent_Template_i_click_58_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nz-demo-collapse-basic", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "More than one panel can be expanded at a time, the first panel is initialized to be active in this case.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nz-demo-collapse-accordion", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Accordion mode, only one panel can be expanded at a time. The first panel will be expanded by default.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "nz-demo-collapse-mix", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " is nested inside the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "nz-demo-collapse-borderless", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "A borderless style of Collapse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "nz-demo-collapse-custom", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Customize the background, border, margin and icon styles for each panel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "nz-demo-collapse-noarrow", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "You can disable showing arrow icon by passing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "[nzShowArrow]=\"false\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "nz-collapse-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " component.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "nz-demo-collapse-extra", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "You can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "nzExtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " to put extra elements in the top right corner.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "nz-demo-collapse-ghost", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Making collapse's background to transparent.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "section", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "nz-collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "[nzAccordion]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Accordion mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "[nzBordered]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Set border style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "[nzGhost]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Make the collapse borderless and its background transparent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "[nzExpandIconPosition]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Set expand icon position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "'left' | 'right'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "nz-collapse-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "If ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, ", panel cannot be opened or closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "[nzHeader]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Title of the panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "[nzExpandedIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Customize an icon for toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "[nzExtra]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Extra element in the corner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "[nzShowArrow]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Display arrow or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "[nzActive]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Active status of panel, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "(nzActiveChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Callback function of the active status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-collapse-demo-basic")("nzLink", "components-collapse-demo-basic")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-collapse-demo-accordion")("nzLink", "components-collapse-demo-accordion")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/accordion.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-collapse-demo-mix")("nzLink", "components-collapse-demo-mix")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/mix.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-collapse-demo-borderless")("nzLink", "components-collapse-demo-borderless")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/borderless.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-collapse-demo-custom")("nzLink", "components-collapse-demo-custom")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/custom.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-collapse-demo-noarrow")("nzLink", "components-collapse-demo-noarrow")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/noarrow.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-collapse-demo-extra")("nzLink", "components-collapse-demo-extra")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/extra.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-collapse-demo-ghost")("nzLink", "components-collapse-demo-ghost")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/ghost.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _basic__WEBPACK_IMPORTED_MODULE_7__["NzDemoCollapseBasicComponent"], _accordion__WEBPACK_IMPORTED_MODULE_8__["NzDemoCollapseAccordionComponent"], _mix__WEBPACK_IMPORTED_MODULE_9__["NzDemoCollapseMixComponent"], _borderless__WEBPACK_IMPORTED_MODULE_10__["NzDemoCollapseBorderlessComponent"], _custom__WEBPACK_IMPORTED_MODULE_11__["NzDemoCollapseCustomComponent"], _noarrow__WEBPACK_IMPORTED_MODULE_12__["NzDemoCollapseNoarrowComponent"], _extra__WEBPACK_IMPORTED_MODULE_13__["NzDemoCollapseExtraComponent"], _ghost__WEBPACK_IMPORTED_MODULE_14__["NzDemoCollapseGhostComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCollapseEnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-collapse',
                preserveWhitespaces: false,
                templateUrl: './en.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ }),

/***/ "UY1E":
/*!*****************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-collapse.js ***!
  \*****************************************************************/
/*! exports provided: NzCollapseComponent, NzCollapseModule, NzCollapsePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCollapseComponent", function() { return NzCollapseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCollapseModule", function() { return NzCollapseModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCollapsePanelComponent", function() { return NzCollapsePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "eczo");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "8IHs");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "d1+9");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "fwD0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");











/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */






const _c0 = ["*"];
function NzCollapsePanelComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const expandedIcon_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", expandedIcon_r4 || "right")("nzRotate", ctx_r3.nzActive ? 90 : 0);
} }
function NzCollapsePanelComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCollapsePanelComponent_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzExpandedIcon);
} }
function NzCollapsePanelComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.nzHeader);
} }
function NzCollapsePanelComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.nzExtra);
} }
function NzCollapsePanelComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCollapsePanelComponent_div_3_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r2.nzExtra);
} }
const NZ_CONFIG_MODULE_NAME = 'collapse';
class NzCollapseComponent {
    constructor(nzConfigService, cdr) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzAccordion = false;
        this.nzBordered = true;
        this.nzGhost = false;
        this.nzExpandIconPosition = 'left';
        this.listOfNzCollapsePanelComponent = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    addPanel(value) {
        this.listOfNzCollapsePanelComponent.push(value);
    }
    removePanel(value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    }
    click(collapse) {
        if (this.nzAccordion && !collapse.nzActive) {
            this.listOfNzCollapsePanelComponent
                .filter(item => item !== collapse)
                .forEach(item => {
                if (item.nzActive) {
                    item.nzActive = false;
                    item.nzActiveChange.emit(item.nzActive);
                    item.markForCheck();
                }
            });
        }
        collapse.nzActive = !collapse.nzActive;
        collapse.nzActiveChange.emit(collapse.nzActive);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */
NzCollapseComponent.ɵfac = function NzCollapseComponent_Factory(t) { return new (t || NzCollapseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
/** @nocollapse */
NzCollapseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzCollapseComponent, selectors: [["nz-collapse"]], hostVars: 10, hostBindings: function NzCollapseComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-collapse", true)("ant-collapse-icon-position-left", ctx.nzExpandIconPosition === "left")("ant-collapse-icon-position-right", ctx.nzExpandIconPosition === "right")("ant-collapse-ghost", ctx.nzGhost)("ant-collapse-borderless", !ctx.nzBordered);
    } }, inputs: { nzAccordion: "nzAccordion", nzBordered: "nzBordered", nzGhost: "nzGhost", nzExpandIconPosition: "nzExpandIconPosition" }, exportAs: ["nzCollapse"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCollapseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzCollapseComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
NzCollapseComponent.propDecorators = {
    nzAccordion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzBordered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzGhost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzExpandIconPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzCollapseComponent.prototype, "nzAccordion", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzCollapseComponent.prototype, "nzBordered", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzCollapseComponent.prototype, "nzGhost", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME$1 = 'collapsePanel';
class NzCollapsePanelComponent {
    constructor(nzConfigService, cdr, nzCollapseComponent) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzCollapseComponent = nzCollapseComponent;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME$1;
        this.nzActive = false;
        this.nzDisabled = false;
        this.nzShowArrow = true;
        this.nzActiveChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME$1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    clickHeader() {
        if (!this.nzDisabled) {
            this.nzCollapseComponent.click(this);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnInit() {
        this.nzCollapseComponent.addPanel(this);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.nzCollapseComponent.removePanel(this);
    }
}
/** @nocollapse */
NzCollapsePanelComponent.ɵfac = function NzCollapsePanelComponent_Factory(t) { return new (t || NzCollapsePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NzCollapseComponent, 1)); };
/** @nocollapse */
NzCollapsePanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzCollapsePanelComponent, selectors: [["nz-collapse-panel"]], hostVars: 8, hostBindings: function NzCollapsePanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-collapse-item", true)("ant-collapse-no-arrow", !ctx.nzShowArrow)("ant-collapse-item-active", ctx.nzActive)("ant-collapse-item-disabled", ctx.nzDisabled);
    } }, inputs: { nzActive: "nzActive", nzDisabled: "nzDisabled", nzShowArrow: "nzShowArrow", nzExtra: "nzExtra", nzHeader: "nzHeader", nzExpandedIcon: "nzExpandedIcon" }, outputs: { nzActiveChange: "nzActiveChange" }, exportAs: ["nzCollapsePanel"], ngContentSelectors: _c0, decls: 7, vars: 7, consts: [["role", "tab", 1, "ant-collapse-header", 3, "click"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-collapse-extra", 4, "ngIf"], [1, "ant-collapse-content"], [1, "ant-collapse-content-box"], ["nz-icon", "", 1, "ant-collapse-arrow", 3, "nzType", "nzRotate"], [1, "ant-collapse-extra"]], template: function NzCollapsePanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzCollapsePanelComponent_Template_div_click_0_listener() { return ctx.clickHeader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCollapsePanelComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzCollapsePanelComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzCollapsePanelComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.nzActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzShowArrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzExtra);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-collapse-content-active", ctx.nzActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@collapseMotion", ctx.nzActive ? "expanded" : "hidden");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__["collapseMotion"]] }, changeDetection: 0 });
NzCollapsePanelComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: NzCollapseComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] }
];
NzCollapsePanelComponent.propDecorators = {
    nzActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzShowArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzExtra: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzExpandedIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzActiveChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCollapsePanelComponent.prototype, "nzActive", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCollapsePanelComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzCollapsePanelComponent.prototype, "nzShowArrow", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCollapseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-collapse',
                exportAs: 'nzCollapse',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                template: `
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-collapse]': 'true',
                    '[class.ant-collapse-icon-position-left]': `nzExpandIconPosition === 'left'`,
                    '[class.ant-collapse-icon-position-right]': `nzExpandIconPosition === 'right'`,
                    '[class.ant-collapse-ghost]': `nzGhost`,
                    '[class.ant-collapse-borderless]': '!nzBordered'
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { nzAccordion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzBordered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzGhost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzExpandIconPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCollapsePanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-collapse-panel',
                exportAs: 'nzCollapsePanel',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__["collapseMotion"]],
                template: `
    <div role="tab" [attr.aria-expanded]="nzActive" class="ant-collapse-header" (click)="clickHeader()">
      <ng-container *ngIf="nzShowArrow">
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; let expandedIcon">
          <i nz-icon [nzType]="expandedIcon || 'right'" class="ant-collapse-arrow" [nzRotate]="nzActive ? 90 : 0"></i>
        </ng-container>
      </ng-container>
      <ng-container *nzStringTemplateOutlet="nzHeader">{{ nzHeader }}</ng-container>
      <div class="ant-collapse-extra" *ngIf="nzExtra">
        <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
      </div>
    </div>
    <div class="ant-collapse-content" [class.ant-collapse-content-active]="nzActive" [@collapseMotion]="nzActive ? 'expanded' : 'hidden'">
      <div class="ant-collapse-content-box">
        <ng-content></ng-content>
      </div>
    </div>
  `,
                host: {
                    '[class.ant-collapse-item]': 'true',
                    '[class.ant-collapse-no-arrow]': '!nzShowArrow',
                    '[class.ant-collapse-item-active]': 'nzActive',
                    '[class.ant-collapse-item-disabled]': 'nzDisabled'
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: NzCollapseComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
            }] }]; }, { nzActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzShowArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzActiveChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzExtra: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzExpandedIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCollapseModule {
}
/** @nocollapse */
NzCollapseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzCollapseModule });
/** @nocollapse */
NzCollapseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzCollapseModule_Factory(t) { return new (t || NzCollapseModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzCollapseModule, { declarations: function () { return [NzCollapsePanelComponent, NzCollapseComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"]]; }, exports: function () { return [NzCollapsePanelComponent, NzCollapseComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCollapseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [NzCollapsePanelComponent, NzCollapseComponent],
                exports: [NzCollapsePanelComponent, NzCollapseComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"]]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-collapse.js.map

/***/ }),

/***/ "iOhP":
/*!****************************************!*\
  !*** ./site/doc/app/collapse/extra.ts ***!
  \****************************************/
/*! exports provided: NzDemoCollapseExtraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCollapseExtraComponent", function() { return NzDemoCollapseExtraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "UY1E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");





function NzDemoCollapseExtraComponent_nz_collapse_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const panel_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r3.name)("nzActive", panel_r3.active)("nzExtra", _r1)("nzDisabled", panel_r3.disabled);
} }
function NzDemoCollapseExtraComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCollapseExtraComponent_ng_template_2_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NzDemoCollapseExtraComponent {
    constructor() {
        this.panels = [
            {
                active: true,
                name: 'This is panel header 1',
                disabled: false
            },
            {
                active: false,
                disabled: false,
                name: 'This is panel header 2'
            },
            {
                active: false,
                disabled: true,
                name: 'This is panel header 3'
            }
        ];
    }
}
/** @nocollapse */ NzDemoCollapseExtraComponent.ɵfac = function NzDemoCollapseExtraComponent_Factory(t) { return new (t || NzDemoCollapseExtraComponent)(); };
/** @nocollapse */ NzDemoCollapseExtraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseExtraComponent, selectors: [["nz-demo-collapse-extra"]], decls: 4, vars: 1, consts: [[3, "nzHeader", "nzActive", "nzExtra", "nzDisabled", 4, "ngFor", "ngForOf"], ["extraTpl", ""], [3, "nzHeader", "nzActive", "nzExtra", "nzDisabled"], [2, "margin", "0"], ["nz-icon", "", "nzType", "setting", 3, "click"]], template: function NzDemoCollapseExtraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseExtraComponent_nz_collapse_panel_1_Template, 3, 4, "nz-collapse-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoCollapseExtraComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__["NzCollapseComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__["NzCollapsePanelComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCollapseExtraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-collapse-extra',
                template: `
    <nz-collapse>
      <nz-collapse-panel
        *ngFor="let panel of panels"
        [nzHeader]="panel.name"
        [nzActive]="panel.active"
        [nzExtra]="extraTpl"
        [nzDisabled]="panel.disabled"
      >
        <p style="margin:0;">
          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many
          households across the world.
        </p>
      </nz-collapse-panel>
    </nz-collapse>
    <ng-template #extraTpl>
      <!-- You can use stopPropagation if you don't want the panel to toggle -->
      <i nz-icon nzType="setting" (click)="$event.stopPropagation()"></i>
    </ng-template>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "pS9B":
/*!****************************************!*\
  !*** ./site/doc/app/collapse/basic.ts ***!
  \****************************************/
/*! exports provided: NzDemoCollapseBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCollapseBasicComponent", function() { return NzDemoCollapseBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "UY1E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoCollapseBasicComponent_nz_collapse_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active)("nzDisabled", panel_r1.disabled);
} }
class NzDemoCollapseBasicComponent {
    constructor() {
        this.panels = [
            {
                active: true,
                name: 'This is panel header 1',
                disabled: false
            },
            {
                active: false,
                disabled: false,
                name: 'This is panel header 2'
            },
            {
                active: false,
                disabled: true,
                name: 'This is panel header 3'
            }
        ];
    }
}
/** @nocollapse */ NzDemoCollapseBasicComponent.ɵfac = function NzDemoCollapseBasicComponent_Factory(t) { return new (t || NzDemoCollapseBasicComponent)(); };
/** @nocollapse */ NzDemoCollapseBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseBasicComponent, selectors: [["nz-demo-collapse-basic"]], decls: 2, vars: 1, consts: [[3, "nzHeader", "nzActive", "nzDisabled", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive", "nzDisabled"], [2, "margin", "0"]], template: function NzDemoCollapseBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseBasicComponent_nz_collapse_panel_1_Template, 3, 3, "nz-collapse-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__["NzCollapseComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__["NzCollapsePanelComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCollapseBasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-collapse-basic',
                template: `
    <nz-collapse>
      <nz-collapse-panel *ngFor="let panel of panels" [nzHeader]="panel.name" [nzActive]="panel.active" [nzDisabled]="panel.disabled">
        <p style="margin:0;">
          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many
          households across the world.
        </p>
      </nz-collapse-panel>
    </nz-collapse>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "snCS":
/*!***********************************************!*\
  !*** ./site/doc/app/collapse/zh.component.ts ***!
  \***********************************************/
/*! exports provided: NzDemoCollapseZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCollapseZhComponent", function() { return NzDemoCollapseZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "rKiv");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "utH8");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "l83q");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "pk25");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "T+9E");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic */ "pS9B");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accordion */ "5CEW");
/* harmony import */ var _mix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mix */ "I4N/");
/* harmony import */ var _borderless__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./borderless */ "uQTA");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom */ "L/uF");
/* harmony import */ var _noarrow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./noarrow */ "EimB");
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./extra */ "iOhP");
/* harmony import */ var _ghost__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ghost */ "BjEY");

















class NzDemoCollapseZhComponent {
    constructor() {
        this.expanded = false;
    }
    goLink(link) {
        if (window) {
            window.location.hash = link;
        }
    }
    expandAllCode() {
        this.expanded = !this.expanded;
        this.codeBoxes.forEach(code => {
            code.nzExpanded = this.expanded;
            code.expandCode(this.expanded);
            code.check();
        });
    }
}
/** @nocollapse */ NzDemoCollapseZhComponent.ɵfac = function NzDemoCollapseZhComponent_Factory(t) { return new (t || NzDemoCollapseZhComponent)(); };
/** @nocollapse */ NzDemoCollapseZhComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseZhComponent, selectors: [["nz-demo-collapse"]], viewQuery: function NzDemoCollapseZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 298, vars: 36, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-collapse-demo-basic", "nzTitle", "\u6298\u53E0\u9762\u677F"], ["nzHref", "#components-collapse-demo-accordion", "nzTitle", "\u624B\u98CE\u7434"], ["nzHref", "#components-collapse-demo-mix", "nzTitle", "\u9762\u677F\u5D4C\u5957"], ["nzHref", "#components-collapse-demo-borderless", "nzTitle", "\u7B80\u6D01\u98CE\u683C"], ["nzHref", "#components-collapse-demo-custom", "nzTitle", "\u81EA\u5B9A\u4E49\u9762\u677F"], ["nzHref", "#components-collapse-demo-noarrow", "nzTitle", "\u9690\u85CF\u7BAD\u5934"], ["nzHref", "#components-collapse-demo-extra", "nzTitle", "\u989D\u5916\u8282\u70B9"], ["nzHref", "#components-collapse-demo-ghost", "nzTitle", "\u5E7D\u7075\u6298\u53E0\u9762\u677F"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["aria-label", "Edit this page on Github", "href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "\u6298\u53E0\u9762\u677F", "nzSelector", "nz-demo-collapse-basic", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-basic <name>", "nzComponentName", "NzDemoCollapseBasicComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u624B\u98CE\u7434", "nzSelector", "nz-demo-collapse-accordion", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-accordion <name>", "nzComponentName", "NzDemoCollapseAccordionComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u9762\u677F\u5D4C\u5957", "nzSelector", "nz-demo-collapse-mix", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-mix <name>", "nzComponentName", "NzDemoCollapseMixComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u7B80\u6D01\u98CE\u683C", "nzSelector", "nz-demo-collapse-borderless", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-borderless <name>", "nzComponentName", "NzDemoCollapseBorderlessComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u9762\u677F", "nzSelector", "nz-demo-collapse-custom", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-custom <name>", "nzComponentName", "NzDemoCollapseCustomComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u9690\u85CF\u7BAD\u5934", "nzSelector", "nz-demo-collapse-noarrow", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-noarrow <name>", "nzComponentName", "NzDemoCollapseNoarrowComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u989D\u5916\u8282\u70B9", "nzSelector", "nz-demo-collapse-extra", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-extra <name>", "nzComponentName", "NzDemoCollapseExtraComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u5E7D\u7075\u6298\u53E0\u9762\u677F", "nzSelector", "nz-demo-collapse-ghost", "nzGenerateCommand", "ng g ng-zorro-antd:collapse-ghost <name>", "nzComponentName", "NzDemoCollapseGhostComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-collapse"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-collapse'", 1, "anchor"], ["id", "nz-collapse-panel"], ["onclick", "window.location.hash = 'nz-collapse-panel'", 1, "anchor"]], template: function NzDemoCollapseZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoCollapseZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-link", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u6298\u53E0\u9762\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u53EF\u4EE5\u6298\u53E0/\u5C55\u5F00\u7684\u5185\u5BB9\u533A\u57DF\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u5BF9\u590D\u6742\u533A\u57DF\u8FDB\u884C\u5206\u7EC4\u548C\u9690\u85CF\uFF0C\u4FDD\u6301\u9875\u9762\u7684\u6574\u6D01\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u624B\u98CE\u7434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u662F\u4E00\u79CD\u7279\u6B8A\u7684\u6298\u53E0\u9762\u677F\uFF0C\u53EA\u5141\u8BB8\u5355\u4E2A\u5185\u5BB9\u533A\u57DF\u5C55\u5F00\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " NzCollapseModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "'ng-zorro-antd/collapse'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCollapseZhComponent_Template_i_click_56_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "nz-demo-collapse-basic", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u53EF\u4EE5\u540C\u65F6\u5C55\u5F00\u591A\u4E2A\u9762\u677F\uFF0C\u8FD9\u4E2A\u4F8B\u5B50\u9ED8\u8BA4\u5C55\u5F00\u4E86\u7B2C\u4E00\u4E2A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "nz-demo-collapse-accordion", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u624B\u98CE\u7434\uFF0C\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2Atab\u3002\u9ED8\u8BA4\u6253\u5F00\u7B2C\u4E00\u4E2A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "nz-demo-collapse-mix", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u5D4C\u5957\u6298\u53E0\u9762\u677F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "nz-demo-collapse-borderless", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u4E00\u5957\u6CA1\u6709\u8FB9\u6846\u7684\u7B80\u6D01\u6837\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "nz-demo-collapse-custom", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u81EA\u5B9A\u4E49\u5404\u4E2A\u9762\u677F\u7684\u80CC\u666F\u8272\u3001\u5706\u89D2\u3001\u8FB9\u8DDD\u548C\u56FE\u6807\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "nz-demo-collapse-noarrow", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u4F60\u53EF\u4EE5\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "[nzShowArrow]=\"false\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " \u9690\u85CF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "nz-collapse-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " \u7EC4\u4EF6\u7684\u7BAD\u5934\u56FE\u6807\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "nz-demo-collapse-extra", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u4F60\u53EF\u4EE5\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "nzExtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " \u6765\u6307\u5B9A\u9762\u677F\u53F3\u4E0A\u89D2\u7684\u989D\u5916\u5185\u5BB9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "nz-demo-collapse-ghost", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u5C06\u6298\u53E0\u9762\u677F\u7684\u80CC\u666F\u53D8\u6210\u900F\u660E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "section", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "nz-collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "[nzAccordion]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2Atab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "[nzBordered]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "\u662F\u5426\u6709\u8FB9\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "[nzGhost]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\u4F7F\u6298\u53E0\u9762\u677F\u900F\u660E\u4E14\u65E0\u8FB9\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "[nzExpandIconPosition]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\u8BBE\u7F6E\u56FE\u6807\u4F4D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "'left' | 'right'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "nz-collapse-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "\u7981\u7528\u540E\u7684\u9762\u677F\u5C55\u5F00\u4E0E\u5426\u5C06\u65E0\u6CD5\u901A\u8FC7\u7528\u6237\u4EA4\u4E92\u6539\u53D8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "[nzHeader]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "\u9762\u677F\u5934\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "[nzExpandedIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "\u81EA\u5B9A\u4E49\u5207\u6362\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "[nzExtra]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "\u81EA\u5B9A\u4E49\u6E32\u67D3\u6BCF\u4E2A\u9762\u677F\u53F3\u4E0A\u89D2\u7684\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "[nzShowArrow]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "\u662F\u5426\u5C55\u793A\u7BAD\u5934");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "[nzActive]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "\u9762\u677F\u662F\u5426\u5C55\u5F00\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "(nzActiveChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "\u9762\u677F\u5C55\u5F00\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-collapse-demo-basic")("nzLink", "components-collapse-demo-basic")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-collapse-demo-accordion")("nzLink", "components-collapse-demo-accordion")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/accordion.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-collapse-demo-mix")("nzLink", "components-collapse-demo-mix")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/mix.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-collapse-demo-borderless")("nzLink", "components-collapse-demo-borderless")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/borderless.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-collapse-demo-custom")("nzLink", "components-collapse-demo-custom")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/custom.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-collapse-demo-noarrow")("nzLink", "components-collapse-demo-noarrow")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/noarrow.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-collapse-demo-extra")("nzLink", "components-collapse-demo-extra")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/extra.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-collapse-demo-ghost")("nzLink", "components-collapse-demo-ghost")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/collapse/demo/ghost.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _basic__WEBPACK_IMPORTED_MODULE_7__["NzDemoCollapseBasicComponent"], _accordion__WEBPACK_IMPORTED_MODULE_8__["NzDemoCollapseAccordionComponent"], _mix__WEBPACK_IMPORTED_MODULE_9__["NzDemoCollapseMixComponent"], _borderless__WEBPACK_IMPORTED_MODULE_10__["NzDemoCollapseBorderlessComponent"], _custom__WEBPACK_IMPORTED_MODULE_11__["NzDemoCollapseCustomComponent"], _noarrow__WEBPACK_IMPORTED_MODULE_12__["NzDemoCollapseNoarrowComponent"], _extra__WEBPACK_IMPORTED_MODULE_13__["NzDemoCollapseExtraComponent"], _ghost__WEBPACK_IMPORTED_MODULE_14__["NzDemoCollapseGhostComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCollapseZhComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-collapse',
                preserveWhitespaces: false,
                templateUrl: './zh.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ }),

/***/ "uQTA":
/*!*********************************************!*\
  !*** ./site/doc/app/collapse/borderless.ts ***!
  \*********************************************/
/*! exports provided: NzDemoCollapseBorderlessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCollapseBorderlessComponent", function() { return NzDemoCollapseBorderlessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "UY1E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoCollapseBorderlessComponent_nz_collapse_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", panel_r1.name, " content");
} }
class NzDemoCollapseBorderlessComponent {
    constructor() {
        this.panels = [
            {
                active: true,
                disabled: false,
                name: 'This is panel header 1',
                childPannel: [
                    {
                        active: false,
                        disabled: true,
                        name: 'This is panel header 1-1'
                    }
                ]
            },
            {
                active: false,
                disabled: true,
                name: 'This is panel header 2'
            },
            {
                active: false,
                disabled: false,
                name: 'This is panel header 3'
            }
        ];
    }
}
/** @nocollapse */ NzDemoCollapseBorderlessComponent.ɵfac = function NzDemoCollapseBorderlessComponent_Factory(t) { return new (t || NzDemoCollapseBorderlessComponent)(); };
/** @nocollapse */ NzDemoCollapseBorderlessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCollapseBorderlessComponent, selectors: [["nz-demo-collapse-borderless"]], decls: 2, vars: 2, consts: [[3, "nzBordered"], [3, "nzHeader", "nzActive", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive"]], template: function NzDemoCollapseBorderlessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseBorderlessComponent_nz_collapse_panel_1_Template, 3, 3, "nz-collapse-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBordered", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__["NzCollapseComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_1__["NzCollapsePanelComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCollapseBorderlessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-collapse-borderless',
                template: `
    <nz-collapse [nzBordered]="false">
      <nz-collapse-panel *ngFor="let panel of panels" [nzHeader]="panel.name" [nzActive]="panel.active">
        <p>{{ panel.name }} content</p>
      </nz-collapse-panel>
    </nz-collapse>
  `
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=collapse-index-module.js.map