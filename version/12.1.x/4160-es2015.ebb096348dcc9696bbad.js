"use strict";(self.webpackChunkng_zorro_antd=self.webpackChunkng_zorro_antd||[]).push([[4160],{71019:function(e,t,n){n.d(t,{i:function(){return T},m:function(){return x}});var i=n(64762),s=n(70946),l=n(36461),a=n(37716),r=n(3679),o=n(79765),c=n(22759),h=n(46782),d=n(27520),u=n(14176),f=n(38583),g=n(79874),p=n(57669),z=n(48095),C=n(19238);const S=["switchElement"];function m(e,t){1&e&&a._UZ(0,"i",8)}function k(e,t){if(1&e&&(a.ynx(0),a._uU(1),a.BQk()),2&e){const e=a.oxw(2);a.xp6(1),a.Oqu(e.nzCheckedChildren)}}function b(e,t){if(1&e&&(a.ynx(0),a.YNc(1,k,2,1,"ng-container",9),a.BQk()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("nzStringTemplateOutlet",e.nzCheckedChildren)}}function v(e,t){if(1&e&&(a.ynx(0),a._uU(1),a.BQk()),2&e){const e=a.oxw(2);a.xp6(1),a.Oqu(e.nzUnCheckedChildren)}}function w(e,t){if(1&e&&a.YNc(0,v,2,1,"ng-container",9),2&e){const e=a.oxw();a.Q6J("nzStringTemplateOutlet",e.nzUnCheckedChildren)}}let T=(()=>{class e{constructor(e,t,n,i,s,l){this.nzConfigService=e,this.host=t,this.ngZone=n,this.cdr=i,this.focusMonitor=s,this.directionality=l,this._nzModuleName="switch",this.isChecked=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzLoading=!1,this.nzDisabled=!1,this.nzControl=!1,this.nzCheckedChildren=null,this.nzUnCheckedChildren=null,this.nzSize="default",this.dir="ltr",this.destroy$=new o.xQ}updateValue(e){this.isChecked!==e&&(this.isChecked=e,this.onChange(this.isChecked))}focus(){this.focusMonitor.focusVia(this.switchElement.nativeElement,"keyboard")}blur(){this.switchElement.nativeElement.blur()}ngOnInit(){this.directionality.change.pipe((0,h.R)(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,c.R)(this.host.nativeElement,"click").pipe((0,h.R)(this.destroy$)).subscribe(e=>{e.preventDefault(),!(this.nzControl||this.nzDisabled||this.nzLoading)&&this.ngZone.run(()=>{this.updateValue(!this.isChecked),this.cdr.markForCheck()})}),(0,c.R)(this.switchElement.nativeElement,"keydown").pipe((0,h.R)(this.destroy$)).subscribe(e=>{if(this.nzControl||this.nzDisabled||this.nzLoading)return;const{keyCode:t}=e;t!==l.oh&&t!==l.SV&&t!==l.L_&&t!==l.K5||(e.preventDefault(),this.ngZone.run(()=>{t===l.oh?this.updateValue(!1):t===l.SV?this.updateValue(!0):(t===l.L_||t===l.K5)&&this.updateValue(!this.isChecked),this.cdr.markForCheck()}))})})}ngAfterViewInit(){this.focusMonitor.monitor(this.switchElement.nativeElement,!0).pipe((0,h.R)(this.destroy$)).subscribe(e=>{e||Promise.resolve().then(()=>this.onTouched())})}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.switchElement.nativeElement),this.destroy$.next(),this.destroy$.complete()}writeValue(e){this.isChecked=e,this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=e,this.cdr.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(d.jY),a.Y36(a.SBq),a.Y36(a.R0b),a.Y36(a.sBO),a.Y36(C.tE),a.Y36(s.Is,8))},e.\u0275cmp=a.Xpm({type:e,selectors:[["nz-switch"]],viewQuery:function(e,t){if(1&e&&a.Gf(S,7),2&e){let e;a.iGM(e=a.CRH())&&(t.switchElement=e.first)}},inputs:{nzLoading:"nzLoading",nzDisabled:"nzDisabled",nzControl:"nzControl",nzCheckedChildren:"nzCheckedChildren",nzUnCheckedChildren:"nzUnCheckedChildren",nzSize:"nzSize"},exportAs:["nzSwitch"],features:[a._Bn([{provide:r.JU,useExisting:(0,a.Gpc)(()=>e),multi:!0}])],decls:9,vars:15,consts:[["nz-wave","","type","button",1,"ant-switch",3,"disabled","nzWaveExtraNode"],["switchElement",""],[1,"ant-switch-handle"],["nz-icon","","nzType","loading","class","ant-switch-loading-icon",4,"ngIf"],[1,"ant-switch-inner"],[4,"ngIf","ngIfElse"],["uncheckTemplate",""],[1,"ant-click-animating-node"],["nz-icon","","nzType","loading",1,"ant-switch-loading-icon"],[4,"nzStringTemplateOutlet"]],template:function(e,t){if(1&e&&(a.TgZ(0,"button",0,1),a.TgZ(2,"span",2),a.YNc(3,m,1,0,"i",3),a.qZA(),a.TgZ(4,"span",4),a.YNc(5,b,2,1,"ng-container",5),a.YNc(6,w,1,1,"ng-template",null,6,a.W1O),a.qZA(),a._UZ(8,"div",7),a.qZA()),2&e){const e=a.MAs(7);a.ekj("ant-switch-checked",t.isChecked)("ant-switch-loading",t.nzLoading)("ant-switch-disabled",t.nzDisabled)("ant-switch-small","small"===t.nzSize)("ant-switch-rtl","rtl"===t.dir),a.Q6J("disabled",t.nzDisabled)("nzWaveExtraNode",!0),a.xp6(3),a.Q6J("ngIf",t.nzLoading),a.xp6(2),a.Q6J("ngIf",t.isChecked)("ngIfElse",e)}},directives:[p.dQ,f.O5,z.Ls,g.f],encapsulation:2,changeDetection:0}),(0,i.gn)([(0,u.yF)()],e.prototype,"nzLoading",void 0),(0,i.gn)([(0,u.yF)()],e.prototype,"nzDisabled",void 0),(0,i.gn)([(0,u.yF)()],e.prototype,"nzControl",void 0),(0,i.gn)([(0,d.oS)()],e.prototype,"nzSize",void 0),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[s.vT,f.ez,p.vG,z.PV,g.T]]}),e})()},64184:function(e,t,n){n.d(t,{BC:function(){return H},st:function(){return j}});var i=n(37716),s=n(64762),l=n(70946),a=n(79765),r=n(25917),o=n(46782),c=n(14176),h=n(27266),d=n(38583),u=n(3679),f=n(11959),g=n(47930),p=n(46032),z=n(48095),C=n(31262),S=n(16905),m=n(57669);function k(e,t){if(1&e&&(i.ynx(0),i._uU(1),i.BQk()),2&e){const e=i.oxw().$implicit;i.xp6(1),i.Oqu(e.title)}}function b(e,t){}const v=function(e){return{"ant-transfer-list-content-item-disabled":e}},w=function(e){return{$implicit:e}};function T(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"li",13),i.NdJ("click",function(){const t=i.CHM(e).$implicit;return i.oxw(3).onItemSelect(t)}),i.TgZ(1,"label",14),i.NdJ("nzCheckedChange",function(){const t=i.CHM(e).$implicit;return i.oxw(3).onItemSelect(t)})("click",function(e){return e.stopPropagation()}),i.YNc(2,k,2,1,"ng-container",7),i.YNc(3,b,0,0,"ng-template",15,16,i.W1O),i.qZA(),i.qZA()}if(2&e){const e=t.$implicit,n=i.MAs(4),s=i.oxw(3);i.Q6J("ngClass",i.VKq(7,v,s.disabled||e.disabled)),i.xp6(1),i.Q6J("nzChecked",e.checked)("nzDisabled",s.disabled||e.disabled),i.xp6(1),i.Q6J("ngIf",!s.render)("ngIfElse",n),i.xp6(1),i.Q6J("ngTemplateOutlet",s.render)("ngTemplateOutletContext",i.VKq(9,w,e))}}function x(e,t){if(1&e&&(i.TgZ(0,"ul",11),i.YNc(1,T,5,11,"li",12),i.qZA()),2&e){const e=i.oxw(2);i.xp6(1),i.Q6J("ngForOf",e.validData)}}function y(e,t){if(1&e&&(i.TgZ(0,"div",17),i._UZ(1,"nz-embed-empty",18),i.qZA()),2&e){const e=i.oxw(2);i.xp6(1),i.Q6J("nzComponentName","transfer")("specificContent",e.notFoundContent)}}function A(e,t){if(1&e&&(i.YNc(0,x,2,1,"ul",9),i.YNc(1,y,2,2,"div",10)),2&e){const e=i.oxw();i.Q6J("ngIf",e.stat.shownCount>0),i.xp6(1),i.Q6J("ngIf",0===e.stat.shownCount)}}function O(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"label",19),i.NdJ("nzCheckedChange",function(t){return i.CHM(e),i.oxw().onItemSelectAll(t)}),i.qZA()}if(2&e){const e=i.oxw();i.Q6J("nzChecked",e.stat.checkAll)("nzIndeterminate",e.stat.checkHalf)("nzDisabled",0===e.stat.shownCount||e.disabled)}}function Z(e,t){if(1&e&&(i.TgZ(0,"span",20),i._uU(1),i.qZA()),2&e){const e=i.oxw();i.xp6(1),i.Oqu(e.titleText)}}function D(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"div",21),i.TgZ(1,"div",22),i.NdJ("valueChanged",function(t){return i.CHM(e),i.oxw().handleFilter(t)})("valueClear",function(){return i.CHM(e),i.oxw().handleClear()}),i.qZA(),i.qZA()}if(2&e){const e=i.oxw();i.xp6(1),i.Q6J("placeholder",e.searchPlaceholder)("disabled",e.disabled)("value",e.filter)}}function I(e,t){1&e&&i.GkF(0)}const F=function(e,t,n,i,s,l){return{$implicit:e,direction:t,disabled:n,onItemSelectAll:i,onItemSelect:s,stat:l}};function J(e,t){if(1&e&&(i.ynx(0),i.TgZ(1,"div",23),i.YNc(2,I,1,0,"ng-container",24),i.qZA(),i.BQk()),2&e){const e=i.oxw();i.xp6(2),i.Q6J("ngTemplateOutlet",e.renderList)("ngTemplateOutletContext",i.HTZ(2,F,e.validData,e.direction,e.disabled,e.onItemSelectAll,e.onItemSelect,e.stat))}}function L(e,t){}function U(e,t){if(1&e&&(i.TgZ(0,"div",25),i.YNc(1,L,0,0,"ng-template",15),i.qZA()),2&e){const e=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",e.footer)("ngTemplateOutletContext",i.VKq(2,w,e.direction))}}const N=function(e){return{"ant-transfer__nodata":e}},q=["nz-transfer-search",""];function Q(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"a",3),i.NdJ("click",function(){return i.CHM(e),i.oxw()._clear()}),i._UZ(1,"i",4),i.qZA()}}function E(e,t){1&e&&(i.TgZ(0,"span",5),i._UZ(1,"i",6),i.qZA())}const Y=function(e){return{"ant-input-disabled":e}};function R(e,t){if(1&e&&(i.TgZ(0,"span"),i._uU(1),i.qZA()),2&e){const e=i.oxw(2);i.xp6(1),i.Oqu(e.nzOperations[1])}}function M(e,t){if(1&e&&(i.TgZ(0,"span"),i._uU(1),i.qZA()),2&e){const e=i.oxw(2);i.xp6(1),i.Oqu(e.nzOperations[0])}}function _(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"div",3),i.TgZ(1,"button",4),i.NdJ("click",function(){return i.CHM(e),i.oxw().moveToLeft()}),i._UZ(2,"i",5),i.YNc(3,R,2,1,"span",6),i.qZA(),i.TgZ(4,"button",4),i.NdJ("click",function(){return i.CHM(e),i.oxw().moveToRight()}),i._UZ(5,"i",7),i.YNc(6,M,2,1,"span",6),i.qZA(),i.qZA()}if(2&e){const e=i.oxw();i.xp6(1),i.Q6J("disabled",e.nzDisabled||!e.leftActive)("nzType","primary")("nzSize","small"),i.xp6(2),i.Q6J("ngIf",e.nzOperations[1]),i.xp6(1),i.Q6J("disabled",e.nzDisabled||!e.rightActive)("nzType","primary")("nzSize","small"),i.xp6(2),i.Q6J("ngIf",e.nzOperations[0])}}function K(e,t){if(1&e&&(i.TgZ(0,"span"),i._uU(1),i.qZA()),2&e){const e=i.oxw(2);i.xp6(1),i.Oqu(e.nzOperations[0])}}function P(e,t){if(1&e&&(i.TgZ(0,"span"),i._uU(1),i.qZA()),2&e){const e=i.oxw(2);i.xp6(1),i.Oqu(e.nzOperations[1])}}function B(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"div",3),i.TgZ(1,"button",4),i.NdJ("click",function(){return i.CHM(e),i.oxw().moveToRight()}),i._UZ(2,"i",5),i.YNc(3,K,2,1,"span",6),i.qZA(),i.TgZ(4,"button",4),i.NdJ("click",function(){return i.CHM(e),i.oxw().moveToLeft()}),i._UZ(5,"i",7),i.YNc(6,P,2,1,"span",6),i.qZA(),i.qZA()}if(2&e){const e=i.oxw();i.xp6(1),i.Q6J("disabled",e.nzDisabled||!e.rightActive)("nzType","primary")("nzSize","small"),i.xp6(2),i.Q6J("ngIf",e.nzOperations[0]),i.xp6(1),i.Q6J("disabled",e.nzDisabled||!e.leftActive)("nzType","primary")("nzSize","small"),i.xp6(2),i.Q6J("ngIf",e.nzOperations[1])}}let V=(()=>{class e{constructor(e,t){this.cdr=e,this.elementRef=t,this.direction="left",this.titleText="",this.showSelectAll=!0,this.dataSource=[],this.itemUnit="",this.itemsUnit="",this.filter="",this.disabled=!1,this.renderList=null,this.render=null,this.footer=null,this.handleSelectAll=new i.vpe,this.handleSelect=new i.vpe,this.filterChange=new i.vpe,this.stat={checkAll:!1,checkHalf:!1,checkCount:0,shownCount:0},this.onItemSelect=e=>{this.disabled||e.disabled||(e.checked=!e.checked,this.updateCheckStatus(),this.handleSelect.emit(e))},this.onItemSelectAll=e=>{this.dataSource.forEach(t=>{!t.disabled&&!t.hide&&(t.checked=e)}),this.updateCheckStatus(),this.handleSelectAll.emit(e)},this.elementRef.nativeElement.classList.add("ant-transfer-list")}get validData(){return this.dataSource.filter(e=>!e.hide)}updateCheckStatus(){const e=this.dataSource.filter(e=>!e.disabled).length;this.stat.checkCount=this.dataSource.filter(e=>e.checked&&!e.disabled).length,this.stat.shownCount=this.validData.length,this.stat.checkAll=e>0&&e===this.stat.checkCount,this.stat.checkHalf=this.stat.checkCount>0&&!this.stat.checkAll}handleFilter(e){this.filter=e,this.dataSource.forEach(t=>{t.hide=e.length>0&&!this.matchFilter(e,t)}),this.stat.shownCount=this.validData.length,this.filterChange.emit({direction:this.direction,value:e})}handleClear(){this.handleFilter("")}matchFilter(e,t){return this.filterOption?this.filterOption(e,t):t.title.includes(e)}markForCheck(){this.updateCheckStatus(),this.cdr.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.sBO),i.Y36(i.SBq))},e.\u0275cmp=i.Xpm({type:e,selectors:[["nz-transfer-list"]],hostVars:2,hostBindings:function(e,t){2&e&&i.ekj("ant-transfer-list-with-footer",!!t.footer)},inputs:{direction:"direction",titleText:"titleText",showSelectAll:"showSelectAll",dataSource:"dataSource",itemUnit:"itemUnit",itemsUnit:"itemsUnit",filter:"filter",disabled:"disabled",renderList:"renderList",render:"render",footer:"footer",showSearch:"showSearch",searchPlaceholder:"searchPlaceholder",notFoundContent:"notFoundContent",filterOption:"filterOption"},outputs:{handleSelectAll:"handleSelectAll",handleSelect:"handleSelect",filterChange:"filterChange"},exportAs:["nzTransferList"],decls:12,vars:14,consts:[["defaultRenderList",""],[1,"ant-transfer-list-header"],["nz-checkbox","",3,"nzChecked","nzIndeterminate","nzDisabled","nzCheckedChange",4,"ngIf"],[1,"ant-transfer-list-header-selected"],["class","ant-transfer-list-header-title",4,"ngIf"],[3,"ngClass"],["class","ant-transfer-list-body-search-wrapper",4,"ngIf"],[4,"ngIf","ngIfElse"],["class","ant-transfer-list-footer",4,"ngIf"],["class","ant-transfer-list-content",4,"ngIf"],["class","ant-transfer-list-body-not-found",4,"ngIf"],[1,"ant-transfer-list-content"],["class","ant-transfer-list-content-item",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"ant-transfer-list-content-item",3,"ngClass","click"],["nz-checkbox","",3,"nzChecked","nzDisabled","nzCheckedChange","click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["renderContainer",""],[1,"ant-transfer-list-body-not-found"],[3,"nzComponentName","specificContent"],["nz-checkbox","",3,"nzChecked","nzIndeterminate","nzDisabled","nzCheckedChange"],[1,"ant-transfer-list-header-title"],[1,"ant-transfer-list-body-search-wrapper"],["nz-transfer-search","",3,"placeholder","disabled","value","valueChanged","valueClear"],[1,"ant-transfer-list-body-customize-wrapper"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-transfer-list-footer"]],template:function(e,t){if(1&e&&(i.YNc(0,A,2,2,"ng-template",null,0,i.W1O),i.TgZ(2,"div",1),i.YNc(3,O,1,3,"label",2),i.TgZ(4,"span",3),i.TgZ(5,"span"),i._uU(6),i.qZA(),i.YNc(7,Z,2,1,"span",4),i.qZA(),i.qZA(),i.TgZ(8,"div",5),i.YNc(9,D,2,3,"div",6),i.YNc(10,J,3,9,"ng-container",7),i.qZA(),i.YNc(11,U,2,4,"div",8)),2&e){const e=i.MAs(1);i.xp6(3),i.Q6J("ngIf",t.showSelectAll),i.xp6(3),i.AsE(" ",(t.stat.checkCount>0?t.stat.checkCount+"/":"")+t.stat.shownCount," ",t.validData.length>1?t.itemsUnit:t.itemUnit," "),i.xp6(1),i.Q6J("ngIf",t.titleText),i.xp6(1),i.Tol(t.showSearch?"ant-transfer-list-body ant-transfer-list-body-with-search":"ant-transfer-list-body"),i.Q6J("ngClass",i.VKq(12,N,0===t.stat.shownCount)),i.xp6(1),i.Q6J("ngIf",t.showSearch),i.xp6(1),i.Q6J("ngIf",t.renderList)("ngIfElse",e),i.xp6(1),i.Q6J("ngIf",t.footer)}},directives:function(){return[d.O5,d.mk,d.sg,g.Ie,d.tP,p.gB,$]},encapsulation:2,changeDetection:0}),e})(),$=(()=>{class e{constructor(e){this.cdr=e,this.disabled=!1,this.valueChanged=new i.vpe,this.valueClear=new i.vpe}_handle(){this.valueChanged.emit(this.value)}_clear(){this.disabled||(this.value="",this.valueClear.emit())}ngOnChanges(){this.cdr.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.sBO))},e.\u0275cmp=i.Xpm({type:e,selectors:[["","nz-transfer-search",""]],inputs:{disabled:"disabled",value:"value",placeholder:"placeholder"},outputs:{valueChanged:"valueChanged",valueClear:"valueClear"},exportAs:["nzTransferSearch"],features:[i.TTD],attrs:q,decls:4,vars:8,consts:[[1,"ant-input","ant-transfer-list-search",3,"ngModel","disabled","placeholder","ngClass","ngModelChange"],["class","ant-transfer-list-search-action",3,"click",4,"ngIf","ngIfElse"],["def",""],[1,"ant-transfer-list-search-action",3,"click"],["nz-icon","","nzType","close-circle"],[1,"ant-transfer-list-search-action"],["nz-icon","","nzType","search"]],template:function(e,t){if(1&e&&(i.TgZ(0,"input",0),i.NdJ("ngModelChange",function(e){return t.value=e})("ngModelChange",function(){return t._handle()}),i.qZA(),i.YNc(1,Q,2,0,"a",1),i.YNc(2,E,2,0,"ng-template",null,2,i.W1O)),2&e){const e=i.MAs(3);i.Q6J("ngModel",t.value)("disabled",t.disabled)("placeholder",t.placeholder)("ngClass",i.VKq(6,Y,t.disabled)),i.xp6(1),i.Q6J("ngIf",t.value&&t.value.length>0)("ngIfElse",e)}},directives:[u.Fj,u.JJ,u.On,d.mk,d.O5,S.w,z.Ls],encapsulation:2,changeDetection:0}),e})(),H=(()=>{class e{constructor(e,t,n,s){this.cdr=e,this.i18n=t,this.elementRef=n,this.directionality=s,this.unsubscribe$=new a.xQ,this.leftFilter="",this.rightFilter="",this.dir="ltr",this.nzDisabled=!1,this.nzDataSource=[],this.nzTitles=["",""],this.nzOperations=[],this.nzListStyle={},this.nzShowSelectAll=!0,this.nzCanMove=e=>(0,r.of)(e.list),this.nzRenderList=null,this.nzRender=null,this.nzFooter=null,this.nzShowSearch=!1,this.nzTargetKeys=[],this.nzSelectedKeys=[],this.nzChange=new i.vpe,this.nzSearchChange=new i.vpe,this.nzSelectChange=new i.vpe,this.leftDataSource=[],this.rightDataSource=[],this.handleLeftSelectAll=e=>this.handleSelect("left",e),this.handleRightSelectAll=e=>this.handleSelect("right",e),this.handleLeftSelect=e=>this.handleSelect("left",!!e.checked,e),this.handleRightSelect=e=>this.handleSelect("right",!!e.checked,e),this.leftActive=!1,this.rightActive=!1,this.moveToLeft=()=>this.moveTo("left"),this.moveToRight=()=>this.moveTo("right"),this.elementRef.nativeElement.classList.add("ant-transfer")}splitDataSource(){this.leftDataSource=[],this.rightDataSource=[],this.nzDataSource.forEach(e=>{"right"===e.direction?(e.direction="right",this.rightDataSource.push(e)):(e.direction="left",this.leftDataSource.push(e))})}getCheckedData(e){return this["left"===e?"leftDataSource":"rightDataSource"].filter(e=>e.checked)}handleSelect(e,t,n){const i=this.getCheckedData(e);this.updateOperationStatus(e,i.length),this.nzSelectChange.emit({direction:e,checked:t,list:i,item:n})}handleFilterChange(e){this.nzSearchChange.emit(e)}updateOperationStatus(e,t){this["right"===e?"leftActive":"rightActive"]=(void 0===t?this.getCheckedData(e).filter(e=>!e.disabled).length:t)>0}moveTo(e){this.updateOperationStatus("left"===e?"right":"left",0);const t=("left"===e?this.rightDataSource:this.leftDataSource).filter(e=>!0===e.checked&&!e.disabled);this.nzCanMove({direction:e,list:t}).subscribe(t=>this.truthMoveTo(e,t.filter(e=>!!e)),()=>t.forEach(e=>e.checked=!1))}truthMoveTo(e,t){const n="left"===e?"right":"left",i="left"===e?this.rightDataSource:this.leftDataSource,s="left"===e?this.leftDataSource:this.rightDataSource;for(const l of t)l.checked=!1,l.hide=!1,l.direction=e,i.splice(i.indexOf(l),1);s.splice(0,0,...t),this.updateOperationStatus(n),this.nzChange.emit({from:n,to:e,list:t}),this.markForCheckAllList()}markForCheckAllList(){!this.lists||this.lists.forEach(e=>e.markForCheck())}handleNzTargetKeys(){const e=(0,c.qo)(this.nzTargetKeys);this.leftDataSource.forEach(t=>{(e=>e.hasOwnProperty("key"))(t)&&-1!==e.indexOf(t.key)&&!t.disabled&&(t.checked=!0)}),this.moveToRight()}handleNzSelectedKeys(){const e=(0,c.qo)(this.nzSelectedKeys);this.nzDataSource.forEach(t=>{-1!==e.indexOf(t.key)&&(t.checked=!0)});const t=e=>!1===e.disabled&&!0===e.checked;this.rightActive=this.leftDataSource.some(t),this.leftActive=this.rightDataSource.some(t)}ngOnInit(){var e;this.i18n.localeChange.pipe((0,o.R)(this.unsubscribe$)).subscribe(()=>{this.locale=this.i18n.getLocaleData("Transfer"),this.markForCheckAllList()}),this.dir=this.directionality.value,null===(e=this.directionality.change)||void 0===e||e.pipe((0,o.R)(this.unsubscribe$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()})}ngOnChanges(e){e.nzDataSource&&(this.splitDataSource(),this.updateOperationStatus("left"),this.updateOperationStatus("right"),this.cdr.detectChanges(),this.markForCheckAllList()),e.nzTargetKeys&&this.handleNzTargetKeys(),e.nzSelectedKeys&&this.handleNzSelectedKeys()}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.sBO),i.Y36(h.wi),i.Y36(i.SBq),i.Y36(l.Is,8))},e.\u0275cmp=i.Xpm({type:e,selectors:[["nz-transfer"]],viewQuery:function(e,t){if(1&e&&i.Gf(V,5),2&e){let e;i.iGM(e=i.CRH())&&(t.lists=e)}},hostVars:6,hostBindings:function(e,t){2&e&&i.ekj("ant-transfer-rtl","rtl"===t.dir)("ant-transfer-disabled",t.nzDisabled)("ant-transfer-customize-list",t.nzRenderList)},inputs:{nzDisabled:"nzDisabled",nzDataSource:"nzDataSource",nzTitles:"nzTitles",nzOperations:"nzOperations",nzListStyle:"nzListStyle",nzShowSelectAll:"nzShowSelectAll",nzCanMove:"nzCanMove",nzRenderList:"nzRenderList",nzRender:"nzRender",nzFooter:"nzFooter",nzShowSearch:"nzShowSearch",nzTargetKeys:"nzTargetKeys",nzSelectedKeys:"nzSelectedKeys",nzItemUnit:"nzItemUnit",nzItemsUnit:"nzItemsUnit",nzFilterOption:"nzFilterOption",nzSearchPlaceholder:"nzSearchPlaceholder",nzNotFoundContent:"nzNotFoundContent"},outputs:{nzChange:"nzChange",nzSearchChange:"nzSearchChange",nzSelectChange:"nzSelectChange"},exportAs:["nzTransfer"],features:[i.TTD],decls:4,vars:32,consts:[["data-direction","left","direction","left",1,"ant-transfer-list",3,"ngStyle","titleText","showSelectAll","dataSource","filter","filterOption","renderList","render","disabled","showSearch","searchPlaceholder","notFoundContent","itemUnit","itemsUnit","footer","filterChange","handleSelect","handleSelectAll"],["class","ant-transfer-operation",4,"ngIf"],["data-direction","right","direction","right",1,"ant-transfer-list",3,"ngStyle","titleText","showSelectAll","dataSource","filter","filterOption","renderList","render","disabled","showSearch","searchPlaceholder","notFoundContent","itemUnit","itemsUnit","footer","filterChange","handleSelect","handleSelectAll"],[1,"ant-transfer-operation"],["nz-button","",3,"disabled","nzType","nzSize","click"],["nz-icon","","nzType","left"],[4,"ngIf"],["nz-icon","","nzType","right"]],template:function(e,t){1&e&&(i.TgZ(0,"nz-transfer-list",0),i.NdJ("filterChange",function(e){return t.handleFilterChange(e)})("handleSelect",function(e){return t.handleLeftSelect(e)})("handleSelectAll",function(e){return t.handleLeftSelectAll(e)}),i.qZA(),i.YNc(1,_,7,8,"div",1),i.YNc(2,B,7,8,"div",1),i.TgZ(3,"nz-transfer-list",2),i.NdJ("filterChange",function(e){return t.handleFilterChange(e)})("handleSelect",function(e){return t.handleRightSelect(e)})("handleSelectAll",function(e){return t.handleRightSelectAll(e)}),i.qZA()),2&e&&(i.Q6J("ngStyle",t.nzListStyle)("titleText",t.nzTitles[0])("showSelectAll",t.nzShowSelectAll)("dataSource",t.leftDataSource)("filter",t.leftFilter)("filterOption",t.nzFilterOption)("renderList",t.nzRenderList&&t.nzRenderList[0])("render",t.nzRender)("disabled",t.nzDisabled)("showSearch",t.nzShowSearch)("searchPlaceholder",t.nzSearchPlaceholder||(null==t.locale?null:t.locale.searchPlaceholder))("notFoundContent",t.nzNotFoundContent)("itemUnit",t.nzItemUnit||(null==t.locale?null:t.locale.itemUnit))("itemsUnit",t.nzItemsUnit||(null==t.locale?null:t.locale.itemsUnit))("footer",t.nzFooter),i.xp6(1),i.Q6J("ngIf","rtl"!==t.dir),i.xp6(1),i.Q6J("ngIf","rtl"===t.dir),i.xp6(1),i.Q6J("ngStyle",t.nzListStyle)("titleText",t.nzTitles[1])("showSelectAll",t.nzShowSelectAll)("dataSource",t.rightDataSource)("filter",t.rightFilter)("filterOption",t.nzFilterOption)("renderList",t.nzRenderList&&t.nzRenderList[1])("render",t.nzRender)("disabled",t.nzDisabled)("showSearch",t.nzShowSearch)("searchPlaceholder",t.nzSearchPlaceholder||(null==t.locale?null:t.locale.searchPlaceholder))("notFoundContent",t.nzNotFoundContent)("itemUnit",t.nzItemUnit||(null==t.locale?null:t.locale.itemUnit))("itemsUnit",t.nzItemsUnit||(null==t.locale?null:t.locale.itemsUnit))("footer",t.nzFooter))},directives:[V,d.PC,d.O5,f.ix,m.dQ,S.w,z.Ls],encapsulation:2,changeDetection:0}),(0,s.gn)([(0,c.yF)()],e.prototype,"nzDisabled",void 0),(0,s.gn)([(0,c.yF)()],e.prototype,"nzShowSelectAll",void 0),(0,s.gn)([(0,c.yF)()],e.prototype,"nzShowSearch",void 0),e})(),j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[l.vT,d.ez,u.u5,g.Wr,f.sL,C.o7,h.YI,z.PV,p.Xo]]}),e})()}}]);