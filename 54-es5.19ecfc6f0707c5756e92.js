!function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{WqIj:function(n,o,c){"use strict";c.d(o,"a",function(){return W}),c.d(o,"b",function(){return P}),c.d(o,"c",function(){return g}),c.d(o,"d",function(){return k});var i=c("fXoL"),a=c("mrSG"),b=c("cH1L"),s=c("3Pt+"),r=c("d1+9"),d=c("jtHE"),p=c("XNiG"),z=c("1G5W"),l=c("ofXK"),u=c("u47x"),m=["*"],h=["inputElement"],f=["nz-radio",""],W=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.Lb({type:n,selectors:[["","nz-radio-button",""]]}),n}(),X=function(){var n=function(){function n(){t(this,n),this.selected$=new d.a(1),this.touched$=new p.a,this.disabled$=new d.a(1),this.name$=new d.a(1)}return e(n,[{key:"touch",value:function(){this.touched$.next()}},{key:"select",value:function(n){this.selected$.next(n)}},{key:"setDisabled",value:function(n){this.disabled$.next(n)}},{key:"setName",value:function(n){this.name$.next(n)}}]),n}();return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=i.Mb({token:n,factory:n.\u0275fac}),n}(),g=function(){var n=function(){function n(e,o,c,i){t(this,n),this.cdr=e,this.nzRadioService=o,this.elementRef=c,this.directionality=i,this.value=null,this.destroy$=new p.a,this.onChange=function(){},this.onTouched=function(){},this.nzDisabled=!1,this.nzButtonStyle="outline",this.nzSize="default",this.nzName=null,this.dir="ltr",this.elementRef.nativeElement.classList.add("ant-radio-group")}return e(n,[{key:"ngOnInit",value:function(){var n,e=this;this.nzRadioService.selected$.pipe(Object(z.a)(this.destroy$)).subscribe(function(n){e.value!==n&&(e.value=n,e.onChange(e.value))}),this.nzRadioService.touched$.pipe(Object(z.a)(this.destroy$)).subscribe(function(){Promise.resolve().then(function(){return e.onTouched()})}),null===(n=this.directionality.change)||void 0===n||n.pipe(Object(z.a)(this.destroy$)).subscribe(function(n){e.dir=n,e.cdr.detectChanges()}),this.dir=this.directionality.value}},{key:"ngOnChanges",value:function(n){var e=n.nzDisabled,t=n.nzName;e&&this.nzRadioService.setDisabled(this.nzDisabled),t&&this.nzRadioService.setName(this.nzName)}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}},{key:"writeValue",value:function(n){this.value=n,this.nzRadioService.select(n),this.cdr.markForCheck()}},{key:"registerOnChange",value:function(n){this.onChange=n}},{key:"registerOnTouched",value:function(n){this.onTouched=n}},{key:"setDisabledState",value:function(n){this.nzDisabled=n,this.nzRadioService.setDisabled(n),this.cdr.markForCheck()}}]),n}();return n.\u0275fac=function(e){return new(e||n)(i.Qb(i.h),i.Qb(X),i.Qb(i.l),i.Qb(b.c,8))},n.\u0275cmp=i.Kb({type:n,selectors:[["nz-radio-group"]],hostVars:8,hostBindings:function(n,e){2&n&&i.Ib("ant-radio-group-large","large"===e.nzSize)("ant-radio-group-small","small"===e.nzSize)("ant-radio-group-solid","solid"===e.nzButtonStyle)("ant-radio-group-rtl","rtl"===e.dir)},inputs:{nzDisabled:"nzDisabled",nzButtonStyle:"nzButtonStyle",nzSize:"nzSize",nzName:"nzName"},exportAs:["nzRadioGroup"],features:[i.Bb([X,{provide:s.n,useExisting:Object(i.V)(function(){return n}),multi:!0}]),i.Ab],ngContentSelectors:m,decls:1,vars:0,template:function(n,e){1&n&&(i.qc(),i.pc(0))},encapsulation:2,changeDetection:0}),Object(a.b)([Object(r.a)(),Object(a.c)("design:type",Object)],n.prototype,"nzDisabled",void 0),n}(),P=function(){var n=function(){function n(e,o,c,i,a,b){t(this,n),this.elementRef=e,this.cdr=o,this.focusMonitor=c,this.directionality=i,this.nzRadioService=a,this.nzRadioButtonDirective=b,this.isNgModel=!1,this.destroy$=new p.a,this.isChecked=!1,this.name=null,this.isRadioButton=!!this.nzRadioButtonDirective,this.onChange=function(){},this.onTouched=function(){},this.nzValue=null,this.nzDisabled=!1,this.nzAutoFocus=!1,this.dir="ltr"}return e(n,[{key:"onHostClick",value:function(n){n.stopPropagation(),n.preventDefault(),this.nzDisabled||this.isChecked||(this.nzRadioService&&this.nzRadioService.select(this.nzValue),this.isNgModel&&(this.isChecked=!0,this.onChange(!0)))}},{key:"focus",value:function(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}},{key:"blur",value:function(){this.inputElement.nativeElement.blur()}},{key:"setDisabledState",value:function(n){this.nzDisabled=n,this.cdr.markForCheck()}},{key:"writeValue",value:function(n){this.isChecked=n,this.cdr.markForCheck()}},{key:"registerOnChange",value:function(n){this.isNgModel=!0,this.onChange=n}},{key:"registerOnTouched",value:function(n){this.onTouched=n}},{key:"ngOnInit",value:function(){var n,e=this;this.nzRadioService&&(this.nzRadioService.name$.pipe(Object(z.a)(this.destroy$)).subscribe(function(n){e.name=n,e.cdr.markForCheck()}),this.nzRadioService.disabled$.pipe(Object(z.a)(this.destroy$)).subscribe(function(n){e.nzDisabled=n,e.cdr.markForCheck()}),this.nzRadioService.selected$.pipe(Object(z.a)(this.destroy$)).subscribe(function(n){e.isChecked=e.nzValue===n,e.cdr.markForCheck()})),this.focusMonitor.monitor(this.elementRef,!0).subscribe(function(n){n||(Promise.resolve().then(function(){return e.onTouched()}),e.nzRadioService&&e.nzRadioService.touch())}),null===(n=this.directionality.change)||void 0===n||n.pipe(Object(z.a)(this.destroy$)).subscribe(function(n){e.dir=n,e.cdr.detectChanges()}),this.dir=this.directionality.value}},{key:"ngAfterViewInit",value:function(){this.nzAutoFocus&&this.focus()}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete(),this.focusMonitor.stopMonitoring(this.elementRef)}}]),n}();return n.\u0275fac=function(e){return new(e||n)(i.Qb(i.l),i.Qb(i.h),i.Qb(u.d),i.Qb(b.c,8),i.Qb(X,8),i.Qb(W,8))},n.\u0275cmp=i.Kb({type:n,selectors:[["","nz-radio",""],["","nz-radio-button",""]],viewQuery:function(n,e){var t;(1&n&&i.Uc(h,1),2&n)&&(i.Ac(t=i.gc())&&(e.inputElement=t.first))},hostVars:16,hostBindings:function(n,e){1&n&&i.fc("click",function(n){return e.onHostClick(n)}),2&n&&i.Ib("ant-radio-wrapper",!e.isRadioButton)("ant-radio-button-wrapper",e.isRadioButton)("ant-radio-wrapper-checked",e.isChecked&&!e.isRadioButton)("ant-radio-button-wrapper-checked",e.isChecked&&e.isRadioButton)("ant-radio-wrapper-disabled",e.nzDisabled&&!e.isRadioButton)("ant-radio-button-wrapper-disabled",e.nzDisabled&&e.isRadioButton)("ant-radio-wrapper-rtl",!e.isRadioButton&&"rtl"===e.dir)("ant-radio-button-wrapper-rtl",e.isRadioButton&&"rtl"===e.dir)},inputs:{nzValue:"nzValue",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus"},exportAs:["nzRadio"],features:[i.Bb([{provide:s.n,useExisting:Object(i.V)(function(){return n}),multi:!0}])],attrs:f,ngContentSelectors:m,decls:6,vars:24,consts:[["type","radio",3,"disabled","checked"],["inputElement",""]],template:function(n,e){1&n&&(i.qc(),i.Xb(0,"span"),i.Sb(1,"input",0,1),i.Sb(3,"span"),i.Wb(),i.Xb(4,"span"),i.pc(5),i.Wb()),2&n&&(i.Ib("ant-radio",!e.isRadioButton)("ant-radio-checked",e.isChecked&&!e.isRadioButton)("ant-radio-disabled",e.nzDisabled&&!e.isRadioButton)("ant-radio-button",e.isRadioButton)("ant-radio-button-checked",e.isChecked&&e.isRadioButton)("ant-radio-button-disabled",e.nzDisabled&&e.isRadioButton),i.Cb(1),i.Ib("ant-radio-input",!e.isRadioButton)("ant-radio-button-input",e.isRadioButton),i.rc("disabled",e.nzDisabled)("checked",e.isChecked),i.Db("autofocus",e.nzAutoFocus?"autofocus":null)("name",e.name),i.Cb(2),i.Ib("ant-radio-inner",!e.isRadioButton)("ant-radio-button-inner",e.isRadioButton))},encapsulation:2,changeDetection:0}),Object(a.b)([Object(r.a)(),Object(a.c)("design:type",Object)],n.prototype,"nzDisabled",void 0),Object(a.b)([Object(r.a)(),Object(a.c)("design:type",Object)],n.prototype,"nzAutoFocus",void 0),n}(),k=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.Ob({type:n}),n.\u0275inj=i.Nb({imports:[[b.a,l.c,s.k]]}),n}()},e5hh:function(n,o,c){"use strict";c.r(o),c.d(o,"NzDemoSpaceModule",function(){return gn});var i=c("tyNb"),a=c("WGB2"),b=c("TZWX"),s=c("A/CH"),r=c("658v"),d=c("MOHP"),p=c("sgt3"),z=c("WqIj"),l=c("Dkbx"),u=c("vhAX"),m=c("Zmph"),h=c("4PsB"),f=[z.d,l.b,h.b,b.c,u.d,d.b,p.b,s.d,r.b,m.b],W=c("rKiv"),X=c("fXoL"),g=c("utH8"),P=c("l83q"),k=c("uLhK"),S=c("pk25"),v=c("T+9E"),y=c("vdzw");function C(n,e){1&n&&(X.Xb(0,"button",3),X.Pc(1,"Button"),X.Wb())}function I(n,e){1&n&&(X.Xb(0,"nz-upload",4),X.Xb(1,"button",5),X.Sb(2,"i",6),X.Pc(3," Click to Upload "),X.Wb(),X.Wb())}function w(n,e){1&n&&(X.Xb(0,"button",7),X.Pc(1," Confirm "),X.Wb())}var R,N=((R=function n(){t(this,n)}).\u0275fac=function(n){return new(n||R)},R.\u0275cmp=X.Kb({type:R,selectors:[["nz-demo-space-basic"]],decls:4,vars:0,consts:[["nz-button","","nzType","primary",4,"nzSpaceItem"],["nzAction","https://www.mocky.io/v2/5cc8019d300000980a055e76",4,"nzSpaceItem"],["nz-button","","nz-popconfirm","","nzOkText","Yes","nzCancelText","No","nzPopconfirmTitle","Are you sure delete this task?",4,"nzSpaceItem"],["nz-button","","nzType","primary"],["nzAction","https://www.mocky.io/v2/5cc8019d300000980a055e76"],["nz-button",""],["nz-icon","","nzType","upload"],["nz-button","","nz-popconfirm","","nzOkText","Yes","nzCancelText","No","nzPopconfirmTitle","Are you sure delete this task?"]],template:function(n,e){1&n&&(X.Xb(0,"nz-space"),X.Nc(1,C,2,0,"button",0),X.Nc(2,I,4,0,"nz-upload",1),X.Nc(3,w,2,0,"button",2),X.Wb())},directives:[u.a,u.b,b.a,y.a,k.a,h.a,d.a,p.a],encapsulation:2}),R);function T(n,e){1&n&&(X.Xb(0,"nz-card",2),X.Xb(1,"p"),X.Pc(2,"Card content"),X.Wb(),X.Xb(3,"p"),X.Pc(4,"Card content"),X.Wb(),X.Wb())}function x(n,e){1&n&&(X.Xb(0,"nz-card",2),X.Xb(1,"p"),X.Pc(2,"Card content"),X.Wb(),X.Xb(3,"p"),X.Pc(4,"Card content"),X.Wb(),X.Wb())}var O,H=((O=function n(){t(this,n)}).\u0275fac=function(n){return new(n||O)},O.\u0275cmp=X.Kb({type:O,selectors:[["nz-demo-space-vertical"]],decls:3,vars:0,consts:[["nzDirection","vertical"],["nzTitle","Card","style","width: 300px",4,"nzSpaceItem"],["nzTitle","Card",2,"width","300px"]],template:function(n,e){1&n&&(X.Xb(0,"nz-space",0),X.Nc(1,T,5,0,"nz-card",1),X.Nc(2,x,5,0,"nz-card",1),X.Wb())},directives:[u.a,u.b,s.a],encapsulation:2}),O),D=c("3Pt+");function B(n,e){1&n&&(X.Xb(0,"button",9),X.Pc(1,"Button"),X.Wb())}function A(n,e){1&n&&(X.Xb(0,"button",10),X.Pc(1,"Default"),X.Wb())}function L(n,e){1&n&&(X.Xb(0,"button",11),X.Pc(1,"Dashed"),X.Wb())}function G(n,e){1&n&&(X.Xb(0,"a",12),X.Pc(1,"Link"),X.Wb())}var j,M=((j=function n(){t(this,n),this.size="small"}).\u0275fac=function(n){return new(n||j)},j.\u0275cmp=X.Kb({type:j,selectors:[["nz-demo-space-size"]],decls:12,vars:2,consts:[[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","small"],["nz-radio","","nzValue","middle"],["nz-radio","","nzValue","large"],[3,"nzSize"],["nz-button","","nzType","primary",4,"nzSpaceItem"],["nz-button","","nzType","default",4,"nzSpaceItem"],["nz-button","","nzType","dashed",4,"nzSpaceItem"],["nz-button","","nzType","link",4,"nzSpaceItem"],["nz-button","","nzType","primary"],["nz-button","","nzType","default"],["nz-button","","nzType","dashed"],["nz-button","","nzType","link"]],template:function(n,e){1&n&&(X.Xb(0,"nz-radio-group",0),X.fc("ngModelChange",function(n){return e.size=n}),X.Xb(1,"label",1),X.Pc(2,"Small"),X.Wb(),X.Xb(3,"label",2),X.Pc(4,"Middle"),X.Wb(),X.Xb(5,"label",3),X.Pc(6,"Large"),X.Wb(),X.Wb(),X.Xb(7,"nz-space",4),X.Nc(8,B,2,0,"button",5),X.Nc(9,A,2,0,"button",6),X.Nc(10,L,2,0,"button",7),X.Nc(11,G,2,0,"a",8),X.Wb()),2&n&&(X.rc("ngModel",e.size),X.Cb(7),X.rc("nzSize",e.size))},directives:[z.c,D.p,D.s,z.b,u.a,u.b,b.a,y.a,k.a],encapsulation:2}),j);function $(n,e){1&n&&(X.Vb(0),X.Pc(1,"center"),X.Ub())}function V(n,e){1&n&&(X.Xb(0,"button",8),X.Pc(1,"Button"),X.Wb())}function E(n,e){1&n&&(X.Xb(0,"span",9),X.Pc(1,"Block"),X.Wb())}function Y(n,e){1&n&&(X.Vb(0),X.Pc(1,"start"),X.Ub())}function Z(n,e){1&n&&(X.Xb(0,"button",8),X.Pc(1,"Button"),X.Wb())}function F(n,e){1&n&&(X.Xb(0,"span",9),X.Pc(1,"Block"),X.Wb())}function K(n,e){1&n&&(X.Vb(0),X.Pc(1,"end"),X.Ub())}function Q(n,e){1&n&&(X.Xb(0,"button",8),X.Pc(1,"Button"),X.Wb())}function U(n,e){1&n&&(X.Xb(0,"span",9),X.Pc(1,"Block"),X.Wb())}function _(n,e){1&n&&(X.Vb(0),X.Pc(1,"baseline"),X.Ub())}function q(n,e){1&n&&(X.Xb(0,"button",8),X.Pc(1,"Button"),X.Wb())}function J(n,e){1&n&&(X.Xb(0,"span",9),X.Pc(1,"Block"),X.Wb())}var nn,en=((nn=function n(){t(this,n)}).\u0275fac=function(n){return new(n||nn)},nn.\u0275cmp=X.Kb({type:nn,selectors:[["nz-demo-space-align"]],decls:17,vars:0,consts:[[1,"space-align-container"],["nz-space","","nzAlign","center",1,"space-align-block"],[4,"nzSpaceItem"],["nz-button","","nzType","primary",4,"nzSpaceItem"],["class","mock-block",4,"nzSpaceItem"],["nz-space","","nzAlign","start",1,"space-align-block"],["nz-space","","nzAlign","end",1,"space-align-block"],["nz-space","","nzAlign","baseline",1,"space-align-block"],["nz-button","","nzType","primary"],[1,"mock-block"]],template:function(n,e){1&n&&(X.Xb(0,"div",0),X.Xb(1,"div",1),X.Nc(2,$,2,0,"ng-container",2),X.Nc(3,V,2,0,"button",3),X.Nc(4,E,2,0,"span",4),X.Wb(),X.Xb(5,"div",5),X.Nc(6,Y,2,0,"ng-container",2),X.Nc(7,Z,2,0,"button",3),X.Nc(8,F,2,0,"span",4),X.Wb(),X.Xb(9,"div",6),X.Nc(10,K,2,0,"ng-container",2),X.Nc(11,Q,2,0,"button",3),X.Nc(12,U,2,0,"span",4),X.Wb(),X.Xb(13,"div",7),X.Nc(14,_,2,0,"ng-container",2),X.Nc(15,q,2,0,"button",3),X.Nc(16,J,2,0,"span",4),X.Wb(),X.Wb())},directives:[u.a,u.b,b.a,y.a,k.a],styles:[".space-align-container[_ngcontent-%COMP%] {\n        display: flex;\n        align-item: flex-start;\n        flex-wrap: wrap;\n      }\n      .space-align-block[_ngcontent-%COMP%] {\n        margin: 8px 4px;\n        border: 1px solid #40a9ff;\n        padding: 4px;\n        flex: none;\n      }\n      .space-align-block[_ngcontent-%COMP%]   .mock-block[_ngcontent-%COMP%] {\n        display: inline-block;\n        padding: 32px 8px 16px;\n        background: rgba(150, 150, 150, 0.2);\n      }"]}),nn);function tn(n,e){1&n&&(X.Xb(0,"button",6),X.Pc(1,"Button"),X.Wb())}function on(n,e){1&n&&(X.Xb(0,"button",7),X.Pc(1,"Default"),X.Wb())}function cn(n,e){1&n&&(X.Xb(0,"button",8),X.Pc(1,"Dashed"),X.Wb())}function an(n,e){1&n&&(X.Xb(0,"a",9),X.Pc(1,"Link"),X.Wb())}var bn,sn=((bn=function n(){t(this,n),this.size=8}).\u0275fac=function(n){return new(n||bn)},bn.\u0275cmp=X.Kb({type:bn,selectors:[["nz-demo-space-customize"]],decls:6,vars:2,consts:[[3,"ngModel","ngModelChange"],[3,"nzSize"],["nz-button","","nzType","primary",4,"nzSpaceItem"],["nz-button","","nzType","default",4,"nzSpaceItem"],["nz-button","","nzType","dashed",4,"nzSpaceItem"],["nz-button","","nzType","link",4,"nzSpaceItem"],["nz-button","","nzType","primary"],["nz-button","","nzType","default"],["nz-button","","nzType","dashed"],["nz-button","","nzType","link"]],template:function(n,e){1&n&&(X.Xb(0,"nz-slider",0),X.fc("ngModelChange",function(n){return e.size=n}),X.Wb(),X.Xb(1,"nz-space",1),X.Nc(2,tn,2,0,"button",2),X.Nc(3,on,2,0,"button",3),X.Nc(4,cn,2,0,"button",4),X.Nc(5,an,2,0,"a",5),X.Wb()),2&n&&(X.rc("ngModel",e.size),X.Cb(1),X.rc("nzSize",e.size))},directives:[l.a,D.p,D.s,u.a,u.b,b.a,y.a,k.a],encapsulation:2}),bn);function rn(n,e){1&n&&X.Sb(0,"nz-divider",3)}function dn(n,e){1&n&&(X.Xb(0,"a",4),X.Pc(1,"Link"),X.Wb())}function pn(n,e){1&n&&(X.Xb(0,"a",4),X.Pc(1,"Link"),X.Wb())}function zn(n,e){1&n&&(X.Xb(0,"a",4),X.Pc(1,"Link"),X.Wb())}var ln,un,mn,hn,fn=((hn=function n(){t(this,n),this.size=8}).\u0275fac=function(n){return new(n||hn)},hn.\u0275cmp=X.Kb({type:hn,selectors:[["nz-demo-space-split"]],decls:6,vars:1,consts:[[3,"nzSplit"],["spaceSplit",""],["nz-typography","",4,"nzSpaceItem"],["nzType","vertical"],["nz-typography",""]],template:function(n,e){if(1&n&&(X.Xb(0,"nz-space",0),X.Nc(1,rn,1,0,"ng-template",null,1,X.Oc),X.Nc(3,dn,2,0,"a",2),X.Nc(4,pn,2,0,"a",2),X.Nc(5,zn,2,0,"a",2),X.Wb()),2&n){var t=X.Bc(2);X.rc("nzSplit",t)}},directives:[u.a,u.b,r.a,m.a],encapsulation:2}),hn),Wn=((mn=function(){function n(){t(this,n),this.expanded=!1}return e(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach(function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()})}}]),n}()).\u0275fac=function(n){return new(n||mn)},mn.\u0275cmp=X.Kb({type:mn,selectors:[["nz-demo-space"]],viewQuery:function(n,e){var t;1&n&&X.Uc(W.a,1),2&n&&X.Ac(t=X.gc())&&(e.codeBoxes=t)},decls:199,vars:28,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-space-demo-basic","nzTitle","\u57fa\u672c\u7528\u6cd5"],["nzHref","#components-space-demo-vertical","nzTitle","\u5782\u76f4\u95f4\u8ddd"],["nzHref","#components-space-demo-size","nzTitle","\u95f4\u8ddd\u5927\u5c0f"],["nzHref","#components-space-demo-align","nzTitle","\u5bf9\u9f50"],["nzHref","#components-space-demo-customize","nzTitle","\u81ea\u5b9a\u4e49\u5c3a\u5bf8"],["nzHref","#components-space-demo-split","nzTitle","\u5206\u9694\u7b26"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","\u57fa\u672c\u7528\u6cd5","nzSelector","nz-demo-space-basic","nzGenerateCommand","ng g ng-zorro-antd:space-basic <name>","nzComponentName","NzDemoSpaceBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u5782\u76f4\u95f4\u8ddd","nzSelector","nz-demo-space-vertical","nzGenerateCommand","ng g ng-zorro-antd:space-vertical <name>","nzComponentName","NzDemoSpaceVerticalComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u95f4\u8ddd\u5927\u5c0f","nzSelector","nz-demo-space-size","nzGenerateCommand","ng g ng-zorro-antd:space-size <name>","nzComponentName","NzDemoSpaceSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u5bf9\u9f50","nzSelector","nz-demo-space-align","nzGenerateCommand","ng g ng-zorro-antd:space-align <name>","nzComponentName","NzDemoSpaceAlignComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u81ea\u5b9a\u4e49\u5c3a\u5bf8","nzSelector","nz-demo-space-customize","nzGenerateCommand","ng g ng-zorro-antd:space-customize <name>","nzComponentName","NzDemoSpaceCustomizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u5206\u9694\u7b26","nzSelector","nz-demo-space-split","nzGenerateCommand","ng g ng-zorro-antd:space-split <name>","nzComponentName","NzDemoSpaceSplitComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-space"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-space'",1,"anchor"]],template:function(n,e){1&n&&(X.Xb(0,"article"),X.Xb(1,"nz-affix",0),X.Xb(2,"nz-anchor",1),X.fc("nzClick",function(n){return e.goLink(n)}),X.Sb(3,"nz-link",2),X.Sb(4,"nz-link",3),X.Sb(5,"nz-link",4),X.Sb(6,"nz-link",5),X.Sb(7,"nz-link",6),X.Sb(8,"nz-link",7),X.Sb(9,"nz-link",8),X.Wb(),X.Wb(),X.Xb(10,"section",9),X.Xb(11,"h1"),X.Pc(12,"Space"),X.Xb(13,"span",10),X.Pc(14,"\u95f4\u8ddd"),X.Wb(),X.Sb(15,"span",11),X.Xb(16,"a",12),X.Sb(17,"i",13),X.Wb(),X.Wb(),X.Xb(18,"section",9),X.Rb(),X.Xb(19,"p"),X.Pc(20,"\u8bbe\u7f6e\u7ec4\u4ef6\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002"),X.Wb(),X.Xb(21,"h2",14),X.Xb(22,"span"),X.Pc(23,"\u4f55\u65f6\u4f7f\u7528"),X.Wb(),X.Xb(24,"a",15),X.Pc(25,"#"),X.Wb(),X.Wb(),X.Xb(26,"p"),X.Pc(27,"\u907f\u514d\u7ec4\u4ef6\u7d27\u8d34\u5728\u4e00\u8d77\uff0c\u62c9\u5f00\u7edf\u4e00\u7684\u7a7a\u95f4\u3002"),X.Wb(),X.Xb(28,"ul"),X.Xb(29,"li"),X.Pc(30," \u9002\u5408\u884c\u5185\u5143\u7d20\u7684\u6c34\u5e73\u95f4\u8ddd\u3002"),X.Wb(),X.Xb(31,"li"),X.Pc(32," \u53ef\u4ee5\u8bbe\u7f6e\u5404\u79cd\u6c34\u5e73\u5bf9\u9f50\u65b9\u5f0f\u3002"),X.Wb(),X.Wb(),X.Xb(33,"pre",16),X.Xb(34,"code"),X.Xb(35,"span",17),X.Pc(36,"import"),X.Wb(),X.Pc(37," "),X.Xb(38,"span",18),X.Pc(39,"{"),X.Wb(),X.Pc(40," NzSpaceModule "),X.Xb(41,"span",18),X.Pc(42,"}"),X.Wb(),X.Pc(43," "),X.Xb(44,"span",17),X.Pc(45,"from"),X.Wb(),X.Pc(46," "),X.Xb(47,"span",19),X.Pc(48,"'ng-zorro-antd/space'"),X.Wb(),X.Xb(49,"span",18),X.Pc(50,";"),X.Wb(),X.Wb(),X.Wb(),X.Yb(),X.Wb(),X.Xb(51,"h2"),X.Xb(52,"span"),X.Pc(53,"\u4ee3\u7801\u6f14\u793a"),X.Wb(),X.Xb(54,"i",20),X.fc("click",function(){return e.expandAllCode()}),X.Wb(),X.Wb(),X.Wb(),X.Xb(55,"div",21),X.Xb(56,"div",22),X.Xb(57,"nz-code-box",23),X.Sb(58,"nz-demo-space-basic",24),X.Xb(59,"div",25),X.Rb(),X.Xb(60,"p"),X.Pc(61,"\u76f8\u90bb\u7ec4\u4ef6\u6c34\u5e73\u95f4\u8ddd\u3002"),X.Wb(),X.Yb(),X.Wb(),X.Wb(),X.Xb(62,"nz-code-box",26),X.Sb(63,"nz-demo-space-vertical",24),X.Xb(64,"div",25),X.Rb(),X.Xb(65,"p"),X.Pc(66,"\u76f8\u90bb\u7ec4\u4ef6\u5782\u76f4\u95f4\u8ddd\u3002"),X.Wb(),X.Xb(67,"p"),X.Pc(68,"\u53ef\u4ee5\u8bbe\u7f6e "),X.Xb(69,"code"),X.Pc(70,"width: 100%"),X.Wb(),X.Pc(71," \u72ec\u5360\u4e00\u884c\u3002"),X.Wb(),X.Yb(),X.Wb(),X.Wb(),X.Xb(72,"nz-code-box",27),X.Sb(73,"nz-demo-space-size",24),X.Xb(74,"div",25),X.Rb(),X.Xb(75,"p"),X.Pc(76,"\u95f4\u8ddd\u9884\u8bbe\u5927\u3001\u4e2d\u3001\u5c0f\u4e09\u79cd\u5927\u5c0f\u3002"),X.Wb(),X.Xb(77,"p"),X.Pc(78,"\u901a\u8fc7\u8bbe\u7f6e "),X.Xb(79,"code"),X.Pc(80,"nzSize"),X.Wb(),X.Pc(81," \u4e3a "),X.Xb(82,"code"),X.Pc(83,"large"),X.Wb(),X.Xb(84,"code"),X.Pc(85,"middle"),X.Wb(),X.Pc(86," \u5206\u522b\u628a\u95f4\u8ddd\u8bbe\u4e3a\u5927\u3001\u4e2d\u95f4\u8ddd\u3002\u82e5\u4e0d\u8bbe\u7f6e "),X.Xb(87,"code"),X.Pc(88,"nzSize"),X.Wb(),X.Pc(89,"\uff0c\u5219\u95f4\u8ddd\u4e3a\u5c0f\u3002"),X.Wb(),X.Yb(),X.Wb(),X.Wb(),X.Xb(90,"nz-code-box",28),X.Sb(91,"nz-demo-space-align",24),X.Xb(92,"div",25),X.Rb(),X.Xb(93,"p"),X.Pc(94,"\u8bbe\u7f6e\u5bf9\u9f50\u6a21\u5f0f\u3002"),X.Wb(),X.Yb(),X.Wb(),X.Wb(),X.Xb(95,"nz-code-box",29),X.Sb(96,"nz-demo-space-customize",24),X.Xb(97,"div",25),X.Rb(),X.Xb(98,"p"),X.Pc(99,"\u81ea\u5b9a\u4e49\u95f4\u8ddd\u5927\u5c0f\u3002"),X.Wb(),X.Yb(),X.Wb(),X.Wb(),X.Xb(100,"nz-code-box",30),X.Sb(101,"nz-demo-space-split",24),X.Xb(102,"div",25),X.Rb(),X.Xb(103,"p"),X.Pc(104,"\u76f8\u90bb\u7ec4\u4ef6\u5206\u9694\u7b26\u3002"),X.Wb(),X.Yb(),X.Wb(),X.Wb(),X.Wb(),X.Wb(),X.Xb(105,"section",31),X.Rb(),X.Xb(106,"h2",32),X.Xb(107,"span"),X.Pc(108,"API"),X.Wb(),X.Xb(109,"a",33),X.Pc(110,"#"),X.Wb(),X.Wb(),X.Xb(111,"h3",34),X.Xb(112,"span"),X.Pc(113,"nz-space"),X.Wb(),X.Xb(114,"label",35),X.Pc(115,"component"),X.Wb(),X.Xb(116,"a",36),X.Pc(117,"#"),X.Wb(),X.Wb(),X.Xb(118,"table"),X.Xb(119,"thead"),X.Xb(120,"tr"),X.Xb(121,"th"),X.Pc(122,"\u53c2\u6570"),X.Wb(),X.Xb(123,"th"),X.Pc(124,"\u8bf4\u660e"),X.Wb(),X.Xb(125,"th"),X.Pc(126,"\u7c7b\u578b"),X.Wb(),X.Xb(127,"th"),X.Pc(128,"\u9ed8\u8ba4\u503c"),X.Wb(),X.Xb(129,"th"),X.Pc(130,"\u652f\u6301\u5168\u5c40\u914d\u7f6e"),X.Wb(),X.Wb(),X.Wb(),X.Xb(131,"tbody"),X.Xb(132,"tr"),X.Xb(133,"td"),X.Xb(134,"code"),X.Pc(135,"[nzSize]"),X.Wb(),X.Wb(),X.Xb(136,"td"),X.Pc(137,"\u95f4\u8ddd\u5927\u5c0f"),X.Wb(),X.Xb(138,"td"),X.Xb(139,"code"),X.Pc(140,"'small' | 'middle' | 'large' | number"),X.Wb(),X.Wb(),X.Xb(141,"td"),X.Xb(142,"code"),X.Pc(143,"'small'"),X.Wb(),X.Wb(),X.Xb(144,"td"),X.Pc(145,"\u2705"),X.Wb(),X.Wb(),X.Xb(146,"tr"),X.Xb(147,"td"),X.Xb(148,"code"),X.Pc(149,"[nzDirection]"),X.Wb(),X.Wb(),X.Xb(150,"td"),X.Pc(151,"\u95f4\u8ddd\u65b9\u5411"),X.Wb(),X.Xb(152,"td"),X.Xb(153,"code"),X.Pc(154,"'vertical' | 'horizontal'"),X.Wb(),X.Wb(),X.Xb(155,"td"),X.Xb(156,"code"),X.Pc(157,"horizontal"),X.Wb(),X.Wb(),X.Sb(158,"td"),X.Wb(),X.Xb(159,"tr"),X.Xb(160,"td"),X.Xb(161,"code"),X.Pc(162,"[nzAlign]"),X.Wb(),X.Wb(),X.Xb(163,"td"),X.Pc(164,"\u5bf9\u9f50\u65b9\u5f0f"),X.Wb(),X.Xb(165,"td"),X.Xb(166,"code"),X.Pc(167,"'start' | 'end' | 'baseline' | 'center'"),X.Wb(),X.Wb(),X.Xb(168,"td"),X.Pc(169,"-"),X.Wb(),X.Sb(170,"td"),X.Wb(),X.Xb(171,"tr"),X.Xb(172,"td"),X.Xb(173,"code"),X.Pc(174,"[nzWrap]"),X.Wb(),X.Wb(),X.Xb(175,"td"),X.Pc(176,"\u662f\u5426\u81ea\u52a8\u6362\u884c\uff0c\u4ec5\u5728 "),X.Xb(177,"code"),X.Pc(178,"horizontal"),X.Wb(),X.Pc(179," \u65f6\u6709\u6548"),X.Wb(),X.Xb(180,"td"),X.Xb(181,"code"),X.Pc(182,"boolean"),X.Wb(),X.Wb(),X.Xb(183,"td"),X.Xb(184,"code"),X.Pc(185,"false"),X.Wb(),X.Wb(),X.Sb(186,"td"),X.Wb(),X.Xb(187,"tr"),X.Xb(188,"td"),X.Xb(189,"code"),X.Pc(190,"[nzSplit]"),X.Wb(),X.Wb(),X.Xb(191,"td"),X.Pc(192,"\u8bbe\u7f6e\u5206\u9694\u7b26"),X.Wb(),X.Xb(193,"td"),X.Xb(194,"code"),X.Pc(195,"TemplateRef"),X.Wb(),X.Wb(),X.Xb(196,"td"),X.Pc(197,"-"),X.Wb(),X.Sb(198,"td"),X.Wb(),X.Wb(),X.Wb(),X.Yb(),X.Wb(),X.Wb()),2&n&&(X.Cb(1),X.rc("nzOffsetTop",16),X.Cb(1),X.rc("nzAffix",!1),X.Cb(53),X.rc("nzGutter",8),X.Cb(1),X.rc("nzSpan",24),X.Cb(1),X.rc("nzId","components-space-demo-basic")("nzLink","components-space-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/basic.md"),X.Cb(5),X.rc("nzId","components-space-demo-vertical")("nzLink","components-space-demo-vertical")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/vertical.md"),X.Cb(10),X.rc("nzId","components-space-demo-size")("nzLink","components-space-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/size.md"),X.Cb(18),X.rc("nzId","components-space-demo-align")("nzLink","components-space-demo-align")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/align.md"),X.Cb(5),X.rc("nzId","components-space-demo-customize")("nzLink","components-space-demo-customize")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/customize.md"),X.Cb(5),X.rc("nzId","components-space-demo-split")("nzLink","components-space-demo-split")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/split.md"))},directives:[g.a,P.a,P.b,d.a,k.a,S.d,v.c,v.a,W.a,N,H,M,en,sn,fn],encapsulation:2}),mn),Xn=((un=function(){function n(){t(this,n),this.expanded=!1}return e(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach(function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()})}}]),n}()).\u0275fac=function(n){return new(n||un)},un.\u0275cmp=X.Kb({type:un,selectors:[["nz-demo-space"]],viewQuery:function(n,e){var t;1&n&&X.Uc(W.a,1),2&n&&X.Ac(t=X.gc())&&(e.codeBoxes=t)},decls:200,vars:28,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-space-demo-basic","nzTitle","Basic Usage"],["nzHref","#components-space-demo-vertical","nzTitle","Vertical Space"],["nzHref","#components-space-demo-size","nzTitle","Space Size"],["nzHref","#components-space-demo-align","nzTitle","Align"],["nzHref","#components-space-demo-customize","nzTitle","Customize Size"],["nzHref","#components-space-demo-split","nzTitle","Split"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","Basic Usage","nzSelector","nz-demo-space-basic","nzGenerateCommand","ng g ng-zorro-antd:space-basic <name>","nzComponentName","NzDemoSpaceBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Vertical Space","nzSelector","nz-demo-space-vertical","nzGenerateCommand","ng g ng-zorro-antd:space-vertical <name>","nzComponentName","NzDemoSpaceVerticalComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Space Size","nzSelector","nz-demo-space-size","nzGenerateCommand","ng g ng-zorro-antd:space-size <name>","nzComponentName","NzDemoSpaceSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Align","nzSelector","nz-demo-space-align","nzGenerateCommand","ng g ng-zorro-antd:space-align <name>","nzComponentName","NzDemoSpaceAlignComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Customize Size","nzSelector","nz-demo-space-customize","nzGenerateCommand","ng g ng-zorro-antd:space-customize <name>","nzComponentName","NzDemoSpaceCustomizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Split","nzSelector","nz-demo-space-split","nzGenerateCommand","ng g ng-zorro-antd:space-split <name>","nzComponentName","NzDemoSpaceSplitComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-space"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-space'",1,"anchor"]],template:function(n,e){1&n&&(X.Xb(0,"article"),X.Xb(1,"nz-affix",0),X.Xb(2,"nz-anchor",1),X.fc("nzClick",function(n){return e.goLink(n)}),X.Sb(3,"nz-link",2),X.Sb(4,"nz-link",3),X.Sb(5,"nz-link",4),X.Sb(6,"nz-link",5),X.Sb(7,"nz-link",6),X.Sb(8,"nz-link",7),X.Sb(9,"nz-link",8),X.Wb(),X.Wb(),X.Xb(10,"section",9),X.Xb(11,"h1"),X.Pc(12,"Space"),X.Sb(13,"span",10),X.Sb(14,"span",11),X.Xb(15,"a",12),X.Sb(16,"i",13),X.Wb(),X.Wb(),X.Xb(17,"section",9),X.Rb(),X.Xb(18,"p"),X.Pc(19,"Set components spacing."),X.Wb(),X.Xb(20,"h2",14),X.Xb(21,"span"),X.Pc(22,"When To Use"),X.Wb(),X.Xb(23,"a",15),X.Pc(24,"#"),X.Wb(),X.Wb(),X.Xb(25,"p"),X.Pc(26,"Avoid components clinging together and set a unified space."),X.Wb(),X.Xb(27,"pre",16),X.Xb(28,"code"),X.Xb(29,"span",17),X.Pc(30,"import"),X.Wb(),X.Pc(31," "),X.Xb(32,"span",18),X.Pc(33,"{"),X.Wb(),X.Pc(34," NzSpaceModule "),X.Xb(35,"span",18),X.Pc(36,"}"),X.Wb(),X.Pc(37," "),X.Xb(38,"span",17),X.Pc(39,"from"),X.Wb(),X.Pc(40," "),X.Xb(41,"span",19),X.Pc(42,"'ng-zorro-antd/space'"),X.Wb(),X.Xb(43,"span",18),X.Pc(44,";"),X.Wb(),X.Wb(),X.Wb(),X.Yb(),X.Wb(),X.Xb(45,"h2"),X.Xb(46,"span"),X.Pc(47,"Examples"),X.Wb(),X.Xb(48,"i",20),X.fc("click",function(){return e.expandAllCode()}),X.Wb(),X.Wb(),X.Wb(),X.Xb(49,"div",21),X.Xb(50,"div",22),X.Xb(51,"nz-code-box",23),X.Sb(52,"nz-demo-space-basic",24),X.Xb(53,"div",25),X.Rb(),X.Xb(54,"p"),X.Pc(55,"Crowded components horizontal spacing."),X.Wb(),X.Yb(),X.Wb(),X.Wb(),X.Xb(56,"nz-code-box",26),X.Sb(57,"nz-demo-space-vertical",24),X.Xb(58,"div",25),X.Rb(),X.Xb(59,"p"),X.Pc(60,"Crowded components vertical spacing."),X.Wb(),X.Yb(),X.Wb(),X.Wb(),X.Xb(61,"nz-code-box",27),X.Sb(62,"nz-demo-space-size",24),X.Xb(63,"div",25),X.Rb(),X.Xb(64,"p"),X.Xb(65,"code"),X.Pc(66,"large"),X.Wb(),X.Pc(67,", "),X.Xb(68,"code"),X.Pc(69,"middle"),X.Wb(),X.Pc(70," and "),X.Xb(71,"code"),X.Pc(72,"small"),X.Wb(),X.Pc(73," preset sizes."),X.Wb(),X.Xb(74,"p"),X.Pc(75,"Set the "),X.Xb(76,"code"),X.Pc(77,"nzSize"),X.Wb(),X.Pc(78," to "),X.Xb(79,"code"),X.Pc(80,"large"),X.Wb(),X.Pc(81," and "),X.Xb(82,"code"),X.Pc(83,"middle"),X.Wb(),X.Pc(84," by setting size to large and middle respectively. If "),X.Xb(85,"code"),X.Pc(86,"size"),X.Wb(),X.Pc(87," is not set, the spacing is "),X.Xb(88,"code"),X.Pc(89,"small"),X.Wb(),X.Pc(90,"."),X.Wb(),X.Yb(),X.Wb(),X.Wb(),X.Xb(91,"nz-code-box",28),X.Sb(92,"nz-demo-space-align",24),X.Xb(93,"div",25),X.Rb(),X.Xb(94,"p"),X.Pc(95,"Config item align."),X.Wb(),X.Yb(),X.Wb(),X.Wb(),X.Xb(96,"nz-code-box",29),X.Sb(97,"nz-demo-space-customize",24),X.Xb(98,"div",25),X.Rb(),X.Xb(99,"p"),X.Pc(100,"Custom spacing size."),X.Wb(),X.Yb(),X.Wb(),X.Wb(),X.Xb(101,"nz-code-box",30),X.Sb(102,"nz-demo-space-split",24),X.Xb(103,"div",25),X.Rb(),X.Xb(104,"p"),X.Pc(105,"Crowded components split."),X.Wb(),X.Yb(),X.Wb(),X.Wb(),X.Wb(),X.Wb(),X.Xb(106,"section",31),X.Rb(),X.Xb(107,"h2",32),X.Xb(108,"span"),X.Pc(109,"API"),X.Wb(),X.Xb(110,"a",33),X.Pc(111,"#"),X.Wb(),X.Wb(),X.Xb(112,"h3",34),X.Xb(113,"span"),X.Pc(114,"nz-space"),X.Wb(),X.Xb(115,"label",35),X.Pc(116,"component"),X.Wb(),X.Xb(117,"a",36),X.Pc(118,"#"),X.Wb(),X.Wb(),X.Xb(119,"table"),X.Xb(120,"thead"),X.Xb(121,"tr"),X.Xb(122,"th"),X.Pc(123,"Property"),X.Wb(),X.Xb(124,"th"),X.Pc(125,"Description"),X.Wb(),X.Xb(126,"th"),X.Pc(127,"Type"),X.Wb(),X.Xb(128,"th"),X.Pc(129,"Default"),X.Wb(),X.Xb(130,"th"),X.Pc(131,"Global Config"),X.Wb(),X.Wb(),X.Wb(),X.Xb(132,"tbody"),X.Xb(133,"tr"),X.Xb(134,"td"),X.Xb(135,"code"),X.Pc(136,"[nzSize]"),X.Wb(),X.Wb(),X.Xb(137,"td"),X.Pc(138,"The space size"),X.Wb(),X.Xb(139,"td"),X.Xb(140,"code"),X.Pc(141,"'small' | 'middle' | 'large' | number"),X.Wb(),X.Wb(),X.Xb(142,"td"),X.Xb(143,"code"),X.Pc(144,"small"),X.Wb(),X.Wb(),X.Xb(145,"td"),X.Pc(146,"\u2705"),X.Wb(),X.Wb(),X.Xb(147,"tr"),X.Xb(148,"td"),X.Xb(149,"code"),X.Pc(150,"[nzDirection]"),X.Wb(),X.Wb(),X.Xb(151,"td"),X.Pc(152,"The space direction"),X.Wb(),X.Xb(153,"td"),X.Xb(154,"code"),X.Pc(155,"'vertical' | 'horizontal'"),X.Wb(),X.Wb(),X.Xb(156,"td"),X.Xb(157,"code"),X.Pc(158,"horizontal"),X.Wb(),X.Wb(),X.Sb(159,"td"),X.Wb(),X.Xb(160,"tr"),X.Xb(161,"td"),X.Xb(162,"code"),X.Pc(163,"[nzAlign]"),X.Wb(),X.Wb(),X.Xb(164,"td"),X.Pc(165,"Align items"),X.Wb(),X.Xb(166,"td"),X.Xb(167,"code"),X.Pc(168,"'start' | 'end' | 'baseline' | 'center'"),X.Wb(),X.Wb(),X.Xb(169,"td"),X.Pc(170,"-"),X.Wb(),X.Sb(171,"td"),X.Wb(),X.Xb(172,"tr"),X.Xb(173,"td"),X.Xb(174,"code"),X.Pc(175,"[nzWrap]"),X.Wb(),X.Wb(),X.Xb(176,"td"),X.Pc(177,"Auto wrap line, when "),X.Xb(178,"code"),X.Pc(179,"horizontal"),X.Wb(),X.Pc(180," effective"),X.Wb(),X.Xb(181,"td"),X.Xb(182,"code"),X.Pc(183,"boolean"),X.Wb(),X.Wb(),X.Xb(184,"td"),X.Xb(185,"code"),X.Pc(186,"false"),X.Wb(),X.Wb(),X.Sb(187,"td"),X.Wb(),X.Xb(188,"tr"),X.Xb(189,"td"),X.Xb(190,"code"),X.Pc(191,"[nzSplit]"),X.Wb(),X.Wb(),X.Xb(192,"td"),X.Pc(193,"Set split"),X.Wb(),X.Xb(194,"td"),X.Xb(195,"code"),X.Pc(196,"TemplateRef"),X.Wb(),X.Wb(),X.Xb(197,"td"),X.Pc(198,"-"),X.Wb(),X.Sb(199,"td"),X.Wb(),X.Wb(),X.Wb(),X.Yb(),X.Wb(),X.Wb()),2&n&&(X.Cb(1),X.rc("nzOffsetTop",16),X.Cb(1),X.rc("nzAffix",!1),X.Cb(47),X.rc("nzGutter",8),X.Cb(1),X.rc("nzSpan",24),X.Cb(1),X.rc("nzId","components-space-demo-basic")("nzLink","components-space-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/basic.md"),X.Cb(5),X.rc("nzId","components-space-demo-vertical")("nzLink","components-space-demo-vertical")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/vertical.md"),X.Cb(5),X.rc("nzId","components-space-demo-size")("nzLink","components-space-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/size.md"),X.Cb(30),X.rc("nzId","components-space-demo-align")("nzLink","components-space-demo-align")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/align.md"),X.Cb(5),X.rc("nzId","components-space-demo-customize")("nzLink","components-space-demo-customize")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/customize.md"),X.Cb(5),X.rc("nzId","components-space-demo-split")("nzLink","components-space-demo-split")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/space/demo/split.md"))},directives:[g.a,P.a,P.b,d.a,k.a,S.d,v.c,v.a,W.a,N,H,M,en,sn,fn],encapsulation:2}),un),gn=((ln=function n(){t(this,n)}).\u0275fac=function(n){return new(n||ln)},ln.\u0275mod=X.Ob({type:ln}),ln.\u0275inj=X.Nb({imports:[[a.a].concat(f,[i.h.forChild([{path:"en",component:Xn},{path:"zh",component:Wn}])])]}),ln)}}])}();