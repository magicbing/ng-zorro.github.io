(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{WqIj:function(e,n,t){"use strict";t.d(n,"a",function(){return h}),t.d(n,"b",function(){return g}),t.d(n,"c",function(){return U}),t.d(n,"d",function(){return f});var o=t("fXoL"),c=t("mrSG"),i=t("cH1L"),a=t("3Pt+"),b=t("d1+9"),s=t("jtHE"),d=t("XNiG"),r=t("1G5W"),p=t("ofXK"),z=t("u47x");const l=["*"],m=["inputElement"],u=["nz-radio",""];let h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=o.Jb({type:e,selectors:[["","nz-radio-button",""]]}),e})(),V=(()=>{class e{constructor(){this.selected$=new s.a(1),this.touched$=new d.a,this.disabled$=new s.a(1),this.name$=new s.a(1)}touch(){this.touched$.next()}select(e){this.selected$.next(e)}setDisabled(e){this.disabled$.next(e)}setName(e){this.name$.next(e)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=o.Kb({token:e,factory:e.\u0275fac}),e})(),U=(()=>{class e{constructor(e,n,t,o){this.cdr=e,this.nzRadioService=n,this.elementRef=t,this.directionality=o,this.value=null,this.destroy$=new d.a,this.onChange=()=>{},this.onTouched=()=>{},this.nzDisabled=!1,this.nzButtonStyle="outline",this.nzSize="default",this.nzName=null,this.dir="ltr",this.elementRef.nativeElement.classList.add("ant-radio-group")}ngOnInit(){var e;this.nzRadioService.selected$.subscribe(e=>{this.value!==e&&(this.value=e,this.onChange(this.value))}),this.nzRadioService.touched$.subscribe(()=>{Promise.resolve().then(()=>this.onTouched())}),null===(e=this.directionality.change)||void 0===e||e.pipe(Object(r.a)(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(e){const{nzDisabled:n,nzName:t}=e;n&&this.nzRadioService.setDisabled(this.nzDisabled),t&&this.nzRadioService.setName(this.nzName)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}writeValue(e){this.value=e,this.nzRadioService.select(e),this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=e,this.nzRadioService.setDisabled(e),this.cdr.markForCheck()}}return e.\u0275fac=function(n){return new(n||e)(o.Ob(o.h),o.Ob(V),o.Ob(o.l),o.Ob(i.c,8))},e.\u0275cmp=o.Ib({type:e,selectors:[["nz-radio-group"]],hostVars:8,hostBindings:function(e,n){2&e&&o.Gb("ant-radio-group-large","large"===n.nzSize)("ant-radio-group-small","small"===n.nzSize)("ant-radio-group-solid","solid"===n.nzButtonStyle)("ant-radio-group-rtl","rtl"===n.dir)},inputs:{nzDisabled:"nzDisabled",nzButtonStyle:"nzButtonStyle",nzSize:"nzSize",nzName:"nzName"},exportAs:["nzRadioGroup"],features:[o.zb([V,{provide:a.n,useExisting:Object(o.U)(()=>e),multi:!0}]),o.yb],ngContentSelectors:l,decls:1,vars:0,template:function(e,n){1&e&&(o.oc(),o.nc(0))},encapsulation:2,changeDetection:0}),Object(c.b)([Object(b.a)(),Object(c.c)("design:type",Object)],e.prototype,"nzDisabled",void 0),e})(),g=(()=>{class e{constructor(e,n,t,o,c,i){this.elementRef=e,this.cdr=n,this.focusMonitor=t,this.directionality=o,this.nzRadioService=c,this.nzRadioButtonDirective=i,this.isNgModel=!1,this.destroy$=new d.a,this.isChecked=!1,this.name=null,this.isRadioButton=!!this.nzRadioButtonDirective,this.onChange=()=>{},this.onTouched=()=>{},this.nzValue=null,this.nzDisabled=!1,this.nzAutoFocus=!1,this.dir="ltr"}onHostClick(e){e.stopPropagation(),e.preventDefault(),this.nzDisabled||this.isChecked||(this.nzRadioService&&this.nzRadioService.select(this.nzValue),this.isNgModel&&(this.isChecked=!0,this.onChange(!0)))}focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}setDisabledState(e){this.nzDisabled=e,this.cdr.markForCheck()}writeValue(e){this.isChecked=e,this.cdr.markForCheck()}registerOnChange(e){this.isNgModel=!0,this.onChange=e}registerOnTouched(e){this.onTouched=e}ngOnInit(){var e;this.nzRadioService&&(this.nzRadioService.name$.pipe(Object(r.a)(this.destroy$)).subscribe(e=>{this.name=e,this.cdr.markForCheck()}),this.nzRadioService.disabled$.pipe(Object(r.a)(this.destroy$)).subscribe(e=>{this.nzDisabled=e,this.cdr.markForCheck()}),this.nzRadioService.selected$.pipe(Object(r.a)(this.destroy$)).subscribe(e=>{this.isChecked=this.nzValue===e,this.cdr.markForCheck()})),this.focusMonitor.monitor(this.elementRef,!0).subscribe(e=>{e||(Promise.resolve().then(()=>this.onTouched()),this.nzRadioService&&this.nzRadioService.touch())}),null===(e=this.directionality.change)||void 0===e||e.pipe(Object(r.a)(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.focusMonitor.stopMonitoring(this.elementRef)}}return e.\u0275fac=function(n){return new(n||e)(o.Ob(o.l),o.Ob(o.h),o.Ob(z.d),o.Ob(i.c,8),o.Ob(V,8),o.Ob(h,8))},e.\u0275cmp=o.Ib({type:e,selectors:[["","nz-radio",""],["","nz-radio-button",""]],viewQuery:function(e,n){if(1&e&&o.Uc(m,!0),2&e){let e;o.yc(e=o.ec())&&(n.inputElement=e.first)}},hostVars:16,hostBindings:function(e,n){1&e&&o.dc("click",function(e){return n.onHostClick(e)}),2&e&&o.Gb("ant-radio-wrapper",!n.isRadioButton)("ant-radio-button-wrapper",n.isRadioButton)("ant-radio-wrapper-checked",n.isChecked&&!n.isRadioButton)("ant-radio-button-wrapper-checked",n.isChecked&&n.isRadioButton)("ant-radio-wrapper-disabled",n.nzDisabled&&!n.isRadioButton)("ant-radio-button-wrapper-disabled",n.nzDisabled&&n.isRadioButton)("ant-radio-wrapper-rtl",!n.isRadioButton&&"rtl"===n.dir)("ant-radio-button-wrapper-rtl",n.isRadioButton&&"rtl"===n.dir)},inputs:{nzValue:"nzValue",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus"},exportAs:["nzRadio"],features:[o.zb([{provide:a.n,useExisting:Object(o.U)(()=>e),multi:!0}])],attrs:u,ngContentSelectors:l,decls:6,vars:24,consts:[["type","radio",3,"disabled","checked"],["inputElement",""]],template:function(e,n){1&e&&(o.oc(),o.Vb(0,"span"),o.Qb(1,"input",0,1),o.Qb(3,"span"),o.Ub(),o.Vb(4,"span"),o.nc(5),o.Ub()),2&e&&(o.Gb("ant-radio",!n.isRadioButton)("ant-radio-checked",n.isChecked&&!n.isRadioButton)("ant-radio-disabled",n.nzDisabled&&!n.isRadioButton)("ant-radio-button",n.isRadioButton)("ant-radio-button-checked",n.isChecked&&n.isRadioButton)("ant-radio-button-disabled",n.nzDisabled&&n.isRadioButton),o.Ab(1),o.Gb("ant-radio-input",!n.isRadioButton)("ant-radio-button-input",n.isRadioButton),o.pc("disabled",n.nzDisabled)("checked",n.isChecked),o.Bb("autofocus",n.nzAutoFocus?"autofocus":null)("name",n.name),o.Ab(2),o.Gb("ant-radio-inner",!n.isRadioButton)("ant-radio-button-inner",n.isRadioButton))},encapsulation:2,changeDetection:0}),Object(c.b)([Object(b.a)(),Object(c.c)("design:type",Object)],e.prototype,"nzDisabled",void 0),Object(c.b)([Object(b.a)(),Object(c.c)("design:type",Object)],e.prototype,"nzAutoFocus",void 0),e})(),f=(()=>{class e{}return e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({factory:function(n){return new(n||e)},imports:[[i.a,p.c,a.k]]}),e})()},e5hh:function(e,n,t){"use strict";t.r(n),t.d(n,"NzDemoSpaceModule",function(){return O});var o=t("tyNb"),c=t("WGB2"),i=t("TZWX"),a=t("A/CH"),b=t("4PsB"),s=t("sgt3"),d=t("MOHP"),r=t("Dkbx"),p=t("WqIj"),z=t("vhAX");const l=[p.d,r.b,b.b,i.c,z.c,d.b,s.b,a.d];var m=t("rKiv"),u=t("fXoL"),h=t("utH8"),V=t("l83q"),U=t("uLhK"),g=t("pk25"),f=t("T+9E"),P=t("vdzw");let k=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u.Ib({type:e,selectors:[["nz-demo-space-basic"]],decls:12,vars:0,consts:[["nz-button","","nzType","primary"],["nzAction","https://www.mocky.io/v2/5cc8019d300000980a055e76"],["nz-button",""],["nz-icon","","nzType","upload"],["nz-button","","nz-popconfirm","","nzOkText","Yes","nzCancelText","No","nzPopconfirmTitle","Are you sure delete this task?"]],template:function(e,n){1&e&&(u.Vb(0,"nz-space"),u.Vb(1,"nz-space-item"),u.Vb(2,"button",0),u.Pc(3,"Button"),u.Ub(),u.Ub(),u.Vb(4,"nz-space-item"),u.Vb(5,"nz-upload",1),u.Vb(6,"button",2),u.Qb(7,"i",3),u.Pc(8,"Click to Upload"),u.Ub(),u.Ub(),u.Ub(),u.Vb(9,"nz-space-item"),u.Vb(10,"button",4),u.Pc(11,"Confirm"),u.Ub(),u.Ub(),u.Ub())},directives:[z.a,z.b,i.a,P.a,U.a,b.a,d.a,s.a],encapsulation:2}),e})(),v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u.Ib({type:e,selectors:[["nz-demo-space-vertical"]],decls:13,vars:0,consts:[["nzDirection","vertical"],["nzTitle","Card",2,"width","300px"]],template:function(e,n){1&e&&(u.Vb(0,"nz-space",0),u.Vb(1,"nz-space-item"),u.Vb(2,"nz-card",1),u.Vb(3,"p"),u.Pc(4,"Card content"),u.Ub(),u.Vb(5,"p"),u.Pc(6,"Card content"),u.Ub(),u.Ub(),u.Ub(),u.Vb(7,"nz-space-item"),u.Vb(8,"nz-card",1),u.Vb(9,"p"),u.Pc(10,"Card content"),u.Ub(),u.Vb(11,"p"),u.Pc(12,"Card content"),u.Ub(),u.Ub(),u.Ub(),u.Ub())},directives:[z.a,z.b,a.a],encapsulation:2}),e})();var C=t("3Pt+");let S=(()=>{class e{constructor(){this.size="small"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u.Ib({type:e,selectors:[["nz-demo-space-size"]],decls:20,vars:2,consts:[[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","small"],["nz-radio","","nzValue","middle"],["nz-radio","","nzValue","large"],[3,"nzSize"],["nz-button","","nzType","primary"],["nz-button","","nzType","default"],["nz-button","","nzType","dashed"],["nz-button","","nzType","link"]],template:function(e,n){1&e&&(u.Vb(0,"nz-radio-group",0),u.dc("ngModelChange",function(e){return n.size=e}),u.Vb(1,"label",1),u.Pc(2,"Small"),u.Ub(),u.Vb(3,"label",2),u.Pc(4,"Middle"),u.Ub(),u.Vb(5,"label",3),u.Pc(6,"Large"),u.Ub(),u.Ub(),u.Vb(7,"nz-space",4),u.Vb(8,"nz-space-item"),u.Vb(9,"button",5),u.Pc(10,"Button"),u.Ub(),u.Ub(),u.Vb(11,"nz-space-item"),u.Vb(12,"button",6),u.Pc(13,"Default"),u.Ub(),u.Ub(),u.Vb(14,"nz-space-item"),u.Vb(15,"button",7),u.Pc(16,"Dashed"),u.Ub(),u.Ub(),u.Vb(17,"nz-space-item"),u.Vb(18,"a",8),u.Pc(19,"Link"),u.Ub(),u.Ub(),u.Ub()),2&e&&(u.pc("ngModel",n.size),u.Ab(7),u.pc("nzSize",n.size))},directives:[p.c,C.p,C.s,p.b,z.a,z.b,i.a,P.a,U.a],encapsulation:2}),e})(),y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u.Ib({type:e,selectors:[["nz-demo-space-align"]],decls:33,vars:0,consts:[[1,"space-align-container"],["nz-space","","nzAlign","center",1,"space-align-block"],["nz-button","","nzType","primary"],["nz-space-item","",1,"mock-block"],["nz-space","","nzAlign","start",1,"space-align-block"],["nz-space","","nzAlign","end",1,"space-align-block"],["nz-space","","nzAlign","baseline",1,"space-align-block"]],template:function(e,n){1&e&&(u.Vb(0,"div",0),u.Vb(1,"div",1),u.Vb(2,"nz-space-item"),u.Pc(3,"center"),u.Ub(),u.Vb(4,"nz-space-item"),u.Vb(5,"button",2),u.Pc(6,"Button"),u.Ub(),u.Ub(),u.Vb(7,"span",3),u.Pc(8,"Block"),u.Ub(),u.Ub(),u.Vb(9,"div",4),u.Vb(10,"nz-space-item"),u.Pc(11,"start"),u.Ub(),u.Vb(12,"nz-space-item"),u.Vb(13,"button",2),u.Pc(14,"Button"),u.Ub(),u.Ub(),u.Vb(15,"span",3),u.Pc(16,"Block"),u.Ub(),u.Ub(),u.Vb(17,"div",5),u.Vb(18,"nz-space-item"),u.Pc(19,"end"),u.Ub(),u.Vb(20,"nz-space-item"),u.Vb(21,"button",2),u.Pc(22,"Button"),u.Ub(),u.Ub(),u.Vb(23,"span",3),u.Pc(24,"Block"),u.Ub(),u.Ub(),u.Vb(25,"div",6),u.Vb(26,"nz-space-item"),u.Pc(27,"baseline"),u.Ub(),u.Vb(28,"nz-space-item"),u.Vb(29,"button",2),u.Pc(30,"Button"),u.Ub(),u.Ub(),u.Vb(31,"span",3),u.Pc(32,"Block"),u.Ub(),u.Ub(),u.Ub())},directives:[z.a,z.b,i.a,P.a,U.a],styles:[".space-align-container[_ngcontent-%COMP%] {\n        display: flex;\n        align-item: flex-start;\n        flex-wrap: wrap;\n      }\n      .space-align-block[_ngcontent-%COMP%] {\n        margin: 8px 4px;\n        border: 1px solid #40a9ff;\n        padding: 4px;\n        flex: none;\n      }\n      .space-align-block[_ngcontent-%COMP%]   .mock-block[_ngcontent-%COMP%] {\n        display: inline-block;\n        padding: 32px 8px 16px;\n        background: rgba(150, 150, 150, 0.2);\n      }"]}),e})(),w=(()=>{class e{constructor(){this.size=8}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u.Ib({type:e,selectors:[["nz-demo-space-customize"]],decls:14,vars:2,consts:[[3,"ngModel","ngModelChange"],[3,"nzSize"],["nz-button","","nzType","primary"],["nz-button","","nzType","default"],["nz-button","","nzType","dashed"],["nz-button","","nzType","link"]],template:function(e,n){1&e&&(u.Vb(0,"nz-slider",0),u.dc("ngModelChange",function(e){return n.size=e}),u.Ub(),u.Vb(1,"nz-space",1),u.Vb(2,"nz-space-item"),u.Vb(3,"button",2),u.Pc(4,"Button"),u.Ub(),u.Ub(),u.Vb(5,"nz-space-item"),u.Vb(6,"button",3),u.Pc(7,"Default"),u.Ub(),u.Ub(),u.Vb(8,"nz-space-item"),u.Vb(9,"button",4),u.Pc(10,"Dashed"),u.Ub(),u.Ub(),u.Vb(11,"nz-space-item"),u.Vb(12,"a",5),u.Pc(13,"Link"),u.Ub(),u.Ub(),u.Ub()),2&e&&(u.pc("ngModel",n.size),u.Ab(1),u.pc("nzSize",n.size))},directives:[r.a,C.p,C.s,z.a,z.b,i.a,P.a,U.a],encapsulation:2}),e})(),x=(()=>{class e{constructor(){this.expanded=!1}goLink(e){window&&(window.location.hash=e)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(e=>{e.nzExpanded=this.expanded,e.expandCode(this.expanded),e.check()})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u.Ib({type:e,selectors:[["nz-demo-space"]],viewQuery:function(e,n){if(1&e&&u.Uc(m.a,!0),2&e){let e;u.yc(e=u.ec())&&(n.codeBoxes=e)}},decls:171,vars:24,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-space-demo-basic","nzTitle","\u57fa\u672c\u7528\u6cd5"],["nzHref","#components-space-demo-vertical","nzTitle","\u5782\u76f4\u95f4\u8ddd"],["nzHref","#components-space-demo-size","nzTitle","\u95f4\u8ddd\u5927\u5c0f"],["nzHref","#components-space-demo-align","nzTitle","\u5bf9\u9f50"],["nzHref","#components-space-demo-customize","nzTitle","\u81ea\u5b9a\u4e49\u5c3a\u5bf8"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","\u57fa\u672c\u7528\u6cd5","nzSelector","nz-demo-space-basic","nzGenerateCommand","ng g ng-zorro-antd:space-basic <name>","nzComponentName","NzDemoSpaceBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u5782\u76f4\u95f4\u8ddd","nzSelector","nz-demo-space-vertical","nzGenerateCommand","ng g ng-zorro-antd:space-vertical <name>","nzComponentName","NzDemoSpaceVerticalComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u95f4\u8ddd\u5927\u5c0f","nzSelector","nz-demo-space-size","nzGenerateCommand","ng g ng-zorro-antd:space-size <name>","nzComponentName","NzDemoSpaceSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u5bf9\u9f50","nzSelector","nz-demo-space-align","nzGenerateCommand","ng g ng-zorro-antd:space-align <name>","nzComponentName","NzDemoSpaceAlignComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u81ea\u5b9a\u4e49\u5c3a\u5bf8","nzSelector","nz-demo-space-customize","nzGenerateCommand","ng g ng-zorro-antd:space-customize <name>","nzComponentName","NzDemoSpaceCustomizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-space"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-space'",1,"anchor"]],template:function(e,n){1&e&&(u.Vb(0,"article"),u.Vb(1,"nz-affix",0),u.Vb(2,"nz-anchor",1),u.dc("nzClick",function(e){return n.goLink(e)}),u.Qb(3,"nz-link",2),u.Qb(4,"nz-link",3),u.Qb(5,"nz-link",4),u.Qb(6,"nz-link",5),u.Qb(7,"nz-link",6),u.Qb(8,"nz-link",7),u.Ub(),u.Ub(),u.Vb(9,"section",8),u.Vb(10,"h1"),u.Pc(11,"Space"),u.Vb(12,"span",9),u.Pc(13,"\u95f4\u8ddd"),u.Ub(),u.Qb(14,"span",10),u.Vb(15,"a",11),u.Qb(16,"i",12),u.Ub(),u.Ub(),u.Vb(17,"section",8),u.Pb(),u.Vb(18,"p"),u.Pc(19,"\u8bbe\u7f6e\u7ec4\u4ef6\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002"),u.Ub(),u.Vb(20,"h2",13),u.Vb(21,"span"),u.Pc(22,"\u4f55\u65f6\u4f7f\u7528"),u.Ub(),u.Vb(23,"a",14),u.Pc(24,"#"),u.Ub(),u.Ub(),u.Vb(25,"p"),u.Pc(26,"\u907f\u514d\u7ec4\u4ef6\u7d27\u8d34\u5728\u4e00\u8d77\uff0c\u62c9\u5f00\u7edf\u4e00\u7684\u7a7a\u95f4\u3002"),u.Ub(),u.Vb(27,"ul"),u.Vb(28,"li"),u.Pc(29," \u9002\u5408\u884c\u5185\u5143\u7d20\u7684\u6c34\u5e73\u95f4\u8ddd\u3002"),u.Ub(),u.Vb(30,"li"),u.Pc(31," \u53ef\u4ee5\u8bbe\u7f6e\u5404\u79cd\u6c34\u5e73\u5bf9\u9f50\u65b9\u5f0f\u3002"),u.Ub(),u.Ub(),u.Vb(32,"pre",15),u.Vb(33,"code"),u.Vb(34,"span",16),u.Pc(35,"import"),u.Ub(),u.Pc(36," "),u.Vb(37,"span",17),u.Pc(38,"{"),u.Ub(),u.Pc(39," NzSpaceModule "),u.Vb(40,"span",17),u.Pc(41,"}"),u.Ub(),u.Pc(42," "),u.Vb(43,"span",16),u.Pc(44,"from"),u.Ub(),u.Pc(45," "),u.Vb(46,"span",18),u.Pc(47,"'ng-zorro-antd/space'"),u.Ub(),u.Vb(48,"span",17),u.Pc(49,";"),u.Ub(),u.Ub(),u.Ub(),u.Wb(),u.Ub(),u.Vb(50,"h2"),u.Vb(51,"span"),u.Pc(52,"\u4ee3\u7801\u6f14\u793a"),u.Ub(),u.Vb(53,"i",19),u.dc("click",function(){return n.expandAllCode()}),u.Ub(),u.Ub(),u.Ub(),u.Vb(54,"div",20),u.Vb(55,"div",21),u.Vb(56,"nz-code-box",22),u.Qb(57,"nz-demo-space-basic",23),u.Vb(58,"div",24),u.Pb(),u.Vb(59,"p"),u.Pc(60,"\u76f8\u90bb\u7ec4\u4ef6\u6c34\u5e73\u95f4\u8ddd\u3002"),u.Ub(),u.Wb(),u.Ub(),u.Ub(),u.Vb(61,"nz-code-box",25),u.Qb(62,"nz-demo-space-vertical",23),u.Vb(63,"div",24),u.Pb(),u.Vb(64,"p"),u.Pc(65,"\u76f8\u90bb\u7ec4\u4ef6\u5782\u76f4\u95f4\u8ddd\u3002"),u.Ub(),u.Vb(66,"p"),u.Pc(67,"\u53ef\u4ee5\u8bbe\u7f6e "),u.Vb(68,"code"),u.Pc(69,"width: 100%"),u.Ub(),u.Pc(70," \u72ec\u5360\u4e00\u884c\u3002"),u.Ub(),u.Wb(),u.Ub(),u.Ub(),u.Vb(71,"nz-code-box",26),u.Qb(72,"nz-demo-space-size",23),u.Vb(73,"div",24),u.Pb(),u.Vb(74,"p"),u.Pc(75,"\u95f4\u8ddd\u9884\u8bbe\u5927\u3001\u4e2d\u3001\u5c0f\u4e09\u79cd\u5927\u5c0f\u3002"),u.Ub(),u.Vb(76,"p"),u.Pc(77,"\u901a\u8fc7\u8bbe\u7f6e "),u.Vb(78,"code"),u.Pc(79,"nzSize"),u.Ub(),u.Pc(80," \u4e3a "),u.Vb(81,"code"),u.Pc(82,"large"),u.Ub(),u.Vb(83,"code"),u.Pc(84,"middle"),u.Ub(),u.Pc(85," \u5206\u522b\u628a\u95f4\u8ddd\u8bbe\u4e3a\u5927\u3001\u4e2d\u95f4\u8ddd\u3002\u82e5\u4e0d\u8bbe\u7f6e "),u.Vb(86,"code"),u.Pc(87,"nzSize"),u.Ub(),u.Pc(88,"\uff0c\u5219\u95f4\u8ddd\u4e3a\u5c0f\u3002"),u.Ub(),u.Wb(),u.Ub(),u.Ub(),u.Vb(89,"nz-code-box",27),u.Qb(90,"nz-demo-space-align",23),u.Vb(91,"div",24),u.Pb(),u.Vb(92,"p"),u.Pc(93,"\u8bbe\u7f6e\u5bf9\u9f50\u6a21\u5f0f\u3002"),u.Ub(),u.Wb(),u.Ub(),u.Ub(),u.Vb(94,"nz-code-box",28),u.Qb(95,"nz-demo-space-customize",23),u.Vb(96,"div",24),u.Pb(),u.Vb(97,"p"),u.Pc(98,"\u81ea\u5b9a\u4e49\u95f4\u8ddd\u5927\u5c0f\u3002"),u.Ub(),u.Wb(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(99,"section",29),u.Pb(),u.Vb(100,"h2",30),u.Vb(101,"span"),u.Pc(102,"API"),u.Ub(),u.Vb(103,"a",31),u.Pc(104,"#"),u.Ub(),u.Ub(),u.Vb(105,"h3",32),u.Vb(106,"span"),u.Pc(107,"nz-space"),u.Ub(),u.Vb(108,"label",33),u.Pc(109,"component"),u.Ub(),u.Vb(110,"a",34),u.Pc(111,"#"),u.Ub(),u.Ub(),u.Vb(112,"table"),u.Vb(113,"thead"),u.Vb(114,"tr"),u.Vb(115,"th"),u.Pc(116,"\u53c2\u6570"),u.Ub(),u.Vb(117,"th"),u.Pc(118,"\u8bf4\u660e"),u.Ub(),u.Vb(119,"th"),u.Pc(120,"\u7c7b\u578b"),u.Ub(),u.Vb(121,"th"),u.Pc(122,"\u9ed8\u8ba4\u503c"),u.Ub(),u.Vb(123,"th"),u.Pc(124,"\u652f\u6301\u5168\u5c40\u914d\u7f6e"),u.Ub(),u.Ub(),u.Ub(),u.Vb(125,"tbody"),u.Vb(126,"tr"),u.Vb(127,"td"),u.Vb(128,"code"),u.Pc(129,"[nzSize]"),u.Ub(),u.Ub(),u.Vb(130,"td"),u.Pc(131,"\u95f4\u8ddd\u5927\u5c0f"),u.Ub(),u.Vb(132,"td"),u.Vb(133,"code"),u.Pc(134,"small"),u.Ub(),u.Ub(),u.Vb(135,"td"),u.Vb(136,"code"),u.Pc(137,"middle"),u.Ub(),u.Ub(),u.Vb(138,"td"),u.Vb(139,"code"),u.Pc(140,"large"),u.Ub(),u.Ub(),u.Ub(),u.Vb(141,"tr"),u.Vb(142,"td"),u.Vb(143,"code"),u.Pc(144,"[nzDirection]"),u.Ub(),u.Ub(),u.Vb(145,"td"),u.Pc(146,"\u95f4\u8ddd\u65b9\u5411"),u.Ub(),u.Vb(147,"td"),u.Vb(148,"code"),u.Pc(149,"vertical"),u.Ub(),u.Ub(),u.Vb(150,"td"),u.Vb(151,"code"),u.Pc(152,"horizontal"),u.Ub(),u.Ub(),u.Vb(153,"td"),u.Vb(154,"code"),u.Pc(155,"horizontal"),u.Ub(),u.Ub(),u.Ub(),u.Vb(156,"tr"),u.Vb(157,"td"),u.Vb(158,"code"),u.Pc(159,"[nzAlign]"),u.Ub(),u.Ub(),u.Vb(160,"td"),u.Pc(161,"\u5bf9\u9f50\u65b9\u5f0f"),u.Ub(),u.Vb(162,"td"),u.Vb(163,"code"),u.Pc(164,"start"),u.Ub(),u.Ub(),u.Vb(165,"td"),u.Vb(166,"code"),u.Pc(167,"end"),u.Ub(),u.Ub(),u.Vb(168,"td"),u.Vb(169,"code"),u.Pc(170,"baseline"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Wb(),u.Ub(),u.Ub()),2&e&&(u.Ab(1),u.pc("nzOffsetTop",16),u.Ab(1),u.pc("nzAffix",!1),u.Ab(52),u.pc("nzGutter",8),u.Ab(1),u.pc("nzSpan",24),u.Ab(1),u.pc("nzId","components-space-demo-basic")("nzLink","components-space-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/basic.md"),u.Ab(5),u.pc("nzId","components-space-demo-vertical")("nzLink","components-space-demo-vertical")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/vertical.md"),u.Ab(10),u.pc("nzId","components-space-demo-size")("nzLink","components-space-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/size.md"),u.Ab(18),u.pc("nzId","components-space-demo-align")("nzLink","components-space-demo-align")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/align.md"),u.Ab(5),u.pc("nzId","components-space-demo-customize")("nzLink","components-space-demo-customize")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/customize.md"))},directives:[h.a,V.a,V.b,d.a,U.a,g.d,f.c,f.a,m.a,k,v,S,y,w],encapsulation:2}),e})(),I=(()=>{class e{constructor(){this.expanded=!1}goLink(e){window&&(window.location.hash=e)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(e=>{e.nzExpanded=this.expanded,e.expandCode(this.expanded),e.check()})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u.Ib({type:e,selectors:[["nz-demo-space"]],viewQuery:function(e,n){if(1&e&&u.Uc(m.a,!0),2&e){let e;u.yc(e=u.ec())&&(n.codeBoxes=e)}},decls:172,vars:24,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-space-demo-basic","nzTitle","Basic Usage"],["nzHref","#components-space-demo-vertical","nzTitle","Vertical Space"],["nzHref","#components-space-demo-size","nzTitle","Space Size"],["nzHref","#components-space-demo-align","nzTitle","Align"],["nzHref","#components-space-demo-customize","nzTitle","Customize Size"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","Basic Usage","nzSelector","nz-demo-space-basic","nzGenerateCommand","ng g ng-zorro-antd:space-basic <name>","nzComponentName","NzDemoSpaceBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Vertical Space","nzSelector","nz-demo-space-vertical","nzGenerateCommand","ng g ng-zorro-antd:space-vertical <name>","nzComponentName","NzDemoSpaceVerticalComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Space Size","nzSelector","nz-demo-space-size","nzGenerateCommand","ng g ng-zorro-antd:space-size <name>","nzComponentName","NzDemoSpaceSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Align","nzSelector","nz-demo-space-align","nzGenerateCommand","ng g ng-zorro-antd:space-align <name>","nzComponentName","NzDemoSpaceAlignComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Customize Size","nzSelector","nz-demo-space-customize","nzGenerateCommand","ng g ng-zorro-antd:space-customize <name>","nzComponentName","NzDemoSpaceCustomizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-space"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-space'",1,"anchor"]],template:function(e,n){1&e&&(u.Vb(0,"article"),u.Vb(1,"nz-affix",0),u.Vb(2,"nz-anchor",1),u.dc("nzClick",function(e){return n.goLink(e)}),u.Qb(3,"nz-link",2),u.Qb(4,"nz-link",3),u.Qb(5,"nz-link",4),u.Qb(6,"nz-link",5),u.Qb(7,"nz-link",6),u.Qb(8,"nz-link",7),u.Ub(),u.Ub(),u.Vb(9,"section",8),u.Vb(10,"h1"),u.Pc(11,"Space"),u.Qb(12,"span",9),u.Qb(13,"span",10),u.Vb(14,"a",11),u.Qb(15,"i",12),u.Ub(),u.Ub(),u.Vb(16,"section",8),u.Pb(),u.Vb(17,"p"),u.Pc(18,"Set components spacing."),u.Ub(),u.Vb(19,"h2",13),u.Vb(20,"span"),u.Pc(21,"When To Use"),u.Ub(),u.Vb(22,"a",14),u.Pc(23,"#"),u.Ub(),u.Ub(),u.Vb(24,"p"),u.Pc(25,"Avoid components clinging together and set a unified space."),u.Ub(),u.Vb(26,"pre",15),u.Vb(27,"code"),u.Vb(28,"span",16),u.Pc(29,"import"),u.Ub(),u.Pc(30," "),u.Vb(31,"span",17),u.Pc(32,"{"),u.Ub(),u.Pc(33," NzSpaceModule "),u.Vb(34,"span",17),u.Pc(35,"}"),u.Ub(),u.Pc(36," "),u.Vb(37,"span",16),u.Pc(38,"from"),u.Ub(),u.Pc(39," "),u.Vb(40,"span",18),u.Pc(41,"'ng-zorro-antd/space'"),u.Ub(),u.Vb(42,"span",17),u.Pc(43,";"),u.Ub(),u.Ub(),u.Ub(),u.Wb(),u.Ub(),u.Vb(44,"h2"),u.Vb(45,"span"),u.Pc(46,"Examples"),u.Ub(),u.Vb(47,"i",19),u.dc("click",function(){return n.expandAllCode()}),u.Ub(),u.Ub(),u.Ub(),u.Vb(48,"div",20),u.Vb(49,"div",21),u.Vb(50,"nz-code-box",22),u.Qb(51,"nz-demo-space-basic",23),u.Vb(52,"div",24),u.Pb(),u.Vb(53,"p"),u.Pc(54,"Crowded components horizontal spacing."),u.Ub(),u.Wb(),u.Ub(),u.Ub(),u.Vb(55,"nz-code-box",25),u.Qb(56,"nz-demo-space-vertical",23),u.Vb(57,"div",24),u.Pb(),u.Vb(58,"p"),u.Pc(59,"Crowded components vertical spacing."),u.Ub(),u.Wb(),u.Ub(),u.Ub(),u.Vb(60,"nz-code-box",26),u.Qb(61,"nz-demo-space-size",23),u.Vb(62,"div",24),u.Pb(),u.Vb(63,"p"),u.Vb(64,"code"),u.Pc(65,"large"),u.Ub(),u.Pc(66,", "),u.Vb(67,"code"),u.Pc(68,"middle"),u.Ub(),u.Pc(69," and "),u.Vb(70,"code"),u.Pc(71,"small"),u.Ub(),u.Pc(72," preset sizes."),u.Ub(),u.Vb(73,"p"),u.Pc(74,"Set the "),u.Vb(75,"code"),u.Pc(76,"nzSize"),u.Ub(),u.Pc(77," to "),u.Vb(78,"code"),u.Pc(79,"large"),u.Ub(),u.Pc(80," and "),u.Vb(81,"code"),u.Pc(82,"middle"),u.Ub(),u.Pc(83," by setting size to large and middle respectively. If "),u.Vb(84,"code"),u.Pc(85,"size"),u.Ub(),u.Pc(86," is not set, the spacing is "),u.Vb(87,"code"),u.Pc(88,"small"),u.Ub(),u.Pc(89,"."),u.Ub(),u.Wb(),u.Ub(),u.Ub(),u.Vb(90,"nz-code-box",27),u.Qb(91,"nz-demo-space-align",23),u.Vb(92,"div",24),u.Pb(),u.Vb(93,"p"),u.Pc(94,"Config item align."),u.Ub(),u.Wb(),u.Ub(),u.Ub(),u.Vb(95,"nz-code-box",28),u.Qb(96,"nz-demo-space-customize",23),u.Vb(97,"div",24),u.Pb(),u.Vb(98,"p"),u.Pc(99,"Custom spacing size."),u.Ub(),u.Wb(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(100,"section",29),u.Pb(),u.Vb(101,"h2",30),u.Vb(102,"span"),u.Pc(103,"API"),u.Ub(),u.Vb(104,"a",31),u.Pc(105,"#"),u.Ub(),u.Ub(),u.Vb(106,"h3",32),u.Vb(107,"span"),u.Pc(108,"nz-space"),u.Ub(),u.Vb(109,"label",33),u.Pc(110,"component"),u.Ub(),u.Vb(111,"a",34),u.Pc(112,"#"),u.Ub(),u.Ub(),u.Vb(113,"table"),u.Vb(114,"thead"),u.Vb(115,"tr"),u.Vb(116,"th"),u.Pc(117,"Property"),u.Ub(),u.Vb(118,"th"),u.Pc(119,"Description"),u.Ub(),u.Vb(120,"th"),u.Pc(121,"Type"),u.Ub(),u.Vb(122,"th"),u.Pc(123,"Default"),u.Ub(),u.Vb(124,"th"),u.Pc(125,"Global Config"),u.Ub(),u.Ub(),u.Ub(),u.Vb(126,"tbody"),u.Vb(127,"tr"),u.Vb(128,"td"),u.Vb(129,"code"),u.Pc(130,"[nzSize]"),u.Ub(),u.Ub(),u.Vb(131,"td"),u.Pc(132,"space size"),u.Ub(),u.Vb(133,"td"),u.Vb(134,"code"),u.Pc(135,"small"),u.Ub(),u.Ub(),u.Vb(136,"td"),u.Vb(137,"code"),u.Pc(138,"middle"),u.Ub(),u.Ub(),u.Vb(139,"td"),u.Vb(140,"code"),u.Pc(141,"large"),u.Ub(),u.Ub(),u.Ub(),u.Vb(142,"tr"),u.Vb(143,"td"),u.Vb(144,"code"),u.Pc(145,"[nzDirection]"),u.Ub(),u.Ub(),u.Vb(146,"td"),u.Pc(147,"space direction"),u.Ub(),u.Vb(148,"td"),u.Vb(149,"code"),u.Pc(150,"vertical"),u.Ub(),u.Ub(),u.Vb(151,"td"),u.Vb(152,"code"),u.Pc(153,"horizontal"),u.Ub(),u.Ub(),u.Vb(154,"td"),u.Vb(155,"code"),u.Pc(156,"horizontal"),u.Ub(),u.Ub(),u.Ub(),u.Vb(157,"tr"),u.Vb(158,"td"),u.Vb(159,"code"),u.Pc(160,"[nzAlign]"),u.Ub(),u.Ub(),u.Vb(161,"td"),u.Pc(162,"align items"),u.Ub(),u.Vb(163,"td"),u.Vb(164,"code"),u.Pc(165,"start"),u.Ub(),u.Ub(),u.Vb(166,"td"),u.Vb(167,"code"),u.Pc(168,"end"),u.Ub(),u.Ub(),u.Vb(169,"td"),u.Vb(170,"code"),u.Pc(171,"baseline"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Wb(),u.Ub(),u.Ub()),2&e&&(u.Ab(1),u.pc("nzOffsetTop",16),u.Ab(1),u.pc("nzAffix",!1),u.Ab(46),u.pc("nzGutter",8),u.Ab(1),u.pc("nzSpan",24),u.Ab(1),u.pc("nzId","components-space-demo-basic")("nzLink","components-space-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/basic.md"),u.Ab(5),u.pc("nzId","components-space-demo-vertical")("nzLink","components-space-demo-vertical")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/vertical.md"),u.Ab(5),u.pc("nzId","components-space-demo-size")("nzLink","components-space-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/size.md"),u.Ab(30),u.pc("nzId","components-space-demo-align")("nzLink","components-space-demo-align")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/align.md"),u.Ab(5),u.pc("nzId","components-space-demo-customize")("nzLink","components-space-demo-customize")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/customize.md"))},directives:[h.a,V.a,V.b,d.a,U.a,g.d,f.c,f.a,m.a,k,v,S,y,w],encapsulation:2}),e})(),O=(()=>{class e{}return e.\u0275mod=u.Mb({type:e}),e.\u0275inj=u.Lb({factory:function(n){return new(n||e)},imports:[[c.a,...l,o.h.forChild([{path:"en",component:I},{path:"zh",component:x}])]]}),e})()}}]);