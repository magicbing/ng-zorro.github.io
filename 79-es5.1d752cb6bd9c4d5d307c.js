!function(){function e(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{NwVf:function(t,a,b){"use strict";b.r(a),b.d(a,"NzDemoRateModule",function(){return oe});var c=b("tyNb"),r=b("WGB2"),i=b("MOHP"),l=b("mrSG"),d=b("cH1L"),s=b("FtGj"),z=b("fXoL"),u=b("3Pt+"),m=b("8IHs"),h=b("XNiG"),X=b("1G5W"),p=b("d1+9"),W=b("ofXK"),f=b("pk25"),g=["ulElement"];function P(e,n){if(1&e){var t=z.Zb();z.Xb(0,"li",3),z.Xb(1,"div",4),z.fc("itemHover",function(e){z.Ec(t);var o=n.index;return z.jc().onItemHover(o,e)})("itemClick",function(e){z.Ec(t);var o=n.index;return z.jc().onItemClick(o,e)}),z.Wb(),z.Wb()}if(2&e){var o=n.index,a=z.jc();z.rc("ngClass",a.starStyleArray[o]||"")("nzTooltipTitle",a.nzTooltips[o]),z.Cb(1),z.rc("allowHalf",a.nzAllowHalf)("character",a.nzCharacter)}}var v=["nz-rate-item",""];function C(e,n){}function k(e,n){}function w(e,n){1&e&&z.Sb(0,"i",4)}var y,S,H,O,x=((S=function(){function t(e,o,a,b){n(this,t),this.nzConfigService=e,this.renderer=o,this.cdr=a,this.directionality=b,this._nzModuleName="rate",this.nzAllowClear=!0,this.nzAllowHalf=!1,this.nzDisabled=!1,this.nzAutoFocus=!1,this.nzCount=5,this.nzTooltips=[],this.nzOnBlur=new z.n,this.nzOnFocus=new z.n,this.nzOnHoverChange=new z.n,this.nzOnKeyDown=new z.n,this.classMap={},this.starArray=[],this.starStyleArray=[],this.dir="ltr",this.destroy$=new h.a,this.hasHalf=!1,this.hoverValue=0,this.isFocused=!1,this._value=0,this.onChange=function(){return null},this.onTouched=function(){return null}}return o(t,[{key:"nzValue",get:function(){return this._value},set:function(e){this._value!==e&&(this._value=e,this.hasHalf=!Number.isInteger(e),this.hoverValue=Math.ceil(e))}},{key:"ngOnChanges",value:function(e){var n=e.nzAutoFocus,t=e.nzCount,o=e.nzValue;if(n&&!n.isFirstChange()){var a=this.ulElement.nativeElement;this.nzAutoFocus&&!this.nzDisabled?this.renderer.setAttribute(a,"autofocus","autofocus"):this.renderer.removeAttribute(a,"autofocus")}t&&this.updateStarArray(),o&&this.updateStarStyle()}},{key:"ngOnInit",value:function(){var e,n=this;this.nzConfigService.getConfigChangeEventForComponent("rate").pipe(Object(X.a)(this.destroy$)).subscribe(function(){return n.cdr.markForCheck()}),null===(e=this.directionality.change)||void 0===e||e.pipe(Object(X.a)(this.destroy$)).subscribe(function(e){n.dir=e,n.cdr.detectChanges()}),this.dir=this.directionality.value}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}},{key:"onItemClick",value:function(e,n){if(!this.nzDisabled){this.hoverValue=e+1;var t=n?e+.5:e+1;this.nzValue===t?this.nzAllowClear&&(this.nzValue=0,this.onChange(this.nzValue)):(this.nzValue=t,this.onChange(this.nzValue)),this.updateStarStyle()}}},{key:"onItemHover",value:function(e,n){this.nzDisabled||this.hoverValue===e+1&&n===this.hasHalf||(this.hoverValue=e+1,this.hasHalf=n,this.nzOnHoverChange.emit(this.hoverValue),this.updateStarStyle())}},{key:"onRateLeave",value:function(){this.hasHalf=!Number.isInteger(this.nzValue),this.hoverValue=Math.ceil(this.nzValue),this.updateStarStyle()}},{key:"onFocus",value:function(e){this.isFocused=!0,this.nzOnFocus.emit(e)}},{key:"onBlur",value:function(e){this.isFocused=!1,this.nzOnBlur.emit(e)}},{key:"focus",value:function(){this.ulElement.nativeElement.focus()}},{key:"blur",value:function(){this.ulElement.nativeElement.blur()}},{key:"onKeyDown",value:function(e){var n=this.nzValue;e.keyCode===s.j&&this.nzValue<this.nzCount?this.nzValue+=this.nzAllowHalf?.5:1:e.keyCode===s.h&&this.nzValue>0&&(this.nzValue-=this.nzAllowHalf?.5:1),n!==this.nzValue&&(this.onChange(this.nzValue),this.nzOnKeyDown.emit(e),this.updateStarStyle(),this.cdr.markForCheck())}},{key:"updateStarArray",value:function(){this.starArray=Array(this.nzCount).fill(0).map(function(e,n){return n}),this.updateStarStyle()}},{key:"updateStarStyle",value:function(){var n=this;this.starStyleArray=this.starArray.map(function(t){var o,a="ant-rate-star",b=t+1;return e(o={},"".concat(a,"-full"),b<n.hoverValue||!n.hasHalf&&b===n.hoverValue),e(o,"".concat(a,"-half"),n.hasHalf&&b===n.hoverValue),e(o,"".concat(a,"-active"),n.hasHalf&&b===n.hoverValue),e(o,"".concat(a,"-zero"),b>n.hoverValue),e(o,"".concat(a,"-focused"),n.hasHalf&&b===n.hoverValue&&n.isFocused),o})}},{key:"writeValue",value:function(e){this.nzValue=e||0,this.updateStarArray(),this.cdr.markForCheck()}},{key:"setDisabledState",value:function(e){this.nzDisabled=e}},{key:"registerOnChange",value:function(e){this.onChange=e}},{key:"registerOnTouched",value:function(e){this.onTouched=e}}]),t}()).\u0275fac=function(e){return new(e||S)(z.Qb(m.b),z.Qb(z.F),z.Qb(z.h),z.Qb(d.c,8))},S.\u0275cmp=z.Kb({type:S,selectors:[["nz-rate"]],viewQuery:function(e,n){var t;1&e&&z.Uc(g,1),2&e&&z.Ac(t=z.gc())&&(n.ulElement=t.first)},inputs:{nzAllowClear:"nzAllowClear",nzAllowHalf:"nzAllowHalf",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus",nzCount:"nzCount",nzTooltips:"nzTooltips",nzCharacter:"nzCharacter"},outputs:{nzOnBlur:"nzOnBlur",nzOnFocus:"nzOnFocus",nzOnHoverChange:"nzOnHoverChange",nzOnKeyDown:"nzOnKeyDown"},exportAs:["nzRate"],features:[z.Bb([{provide:u.n,useExisting:Object(z.V)(function(){return S}),multi:!0}]),z.Ab],decls:3,vars:7,consts:[[1,"ant-rate",3,"ngClass","tabindex","blur","focus","keydown","mouseleave"],["ulElement",""],["class","ant-rate-star","nz-tooltip","",3,"ngClass","nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",1,"ant-rate-star",3,"ngClass","nzTooltipTitle"],["nz-rate-item","",3,"allowHalf","character","itemHover","itemClick"]],template:function(e,n){1&e&&(z.Xb(0,"ul",0,1),z.fc("blur",function(e){return n.onBlur(e)})("focus",function(e){return n.onFocus(e)})("keydown",function(e){return n.onKeyDown(e),e.preventDefault()})("mouseleave",function(e){return n.onRateLeave(),e.stopPropagation()}),z.Nc(2,P,2,4,"li",2),z.Wb()),2&e&&(z.Ib("ant-rate-disabled",n.nzDisabled)("ant-rate-rtl","rtl"===n.dir),z.rc("ngClass",n.classMap)("tabindex",n.nzDisabled?-1:1),z.Cb(2),z.rc("ngForOf",n.starArray))},directives:function(){return[W.m,W.n,f.d,I]},encapsulation:2,changeDetection:0}),Object(l.b)([Object(m.c)(),Object(p.a)(),Object(l.c)("design:type",Boolean)],S.prototype,"nzAllowClear",void 0),Object(l.b)([Object(m.c)(),Object(p.a)(),Object(l.c)("design:type",Boolean)],S.prototype,"nzAllowHalf",void 0),Object(l.b)([Object(p.a)(),Object(l.c)("design:type",Boolean)],S.prototype,"nzDisabled",void 0),Object(l.b)([Object(p.a)(),Object(l.c)("design:type",Boolean)],S.prototype,"nzAutoFocus",void 0),Object(l.b)([Object(p.b)(),Object(l.c)("design:type",Number)],S.prototype,"nzCount",void 0),S),I=((y=function(){function e(){n(this,e),this.allowHalf=!1,this.itemHover=new z.n,this.itemClick=new z.n}return o(e,[{key:"hoverRate",value:function(e){this.itemHover.next(e&&this.allowHalf)}},{key:"clickRate",value:function(e){this.itemClick.next(e&&this.allowHalf)}}]),e}()).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=z.Kb({type:y,selectors:[["","nz-rate-item",""]],inputs:{allowHalf:"allowHalf",character:"character"},outputs:{itemHover:"itemHover",itemClick:"itemClick"},exportAs:["nzRateItem"],attrs:v,decls:6,vars:2,consts:[[1,"ant-rate-star-second",3,"mouseover","click"],[3,"ngTemplateOutlet"],[1,"ant-rate-star-first",3,"mouseover","click"],["defaultCharacter",""],["nz-icon","","nzType","star","nzTheme","fill"]],template:function(e,n){if(1&e&&(z.Xb(0,"div",0),z.fc("mouseover",function(e){return n.hoverRate(!1),e.stopPropagation()})("click",function(){return n.clickRate(!1)}),z.Nc(1,C,0,0,"ng-template",1),z.Wb(),z.Xb(2,"div",2),z.fc("mouseover",function(e){return n.hoverRate(!0),e.stopPropagation()})("click",function(){return n.clickRate(!0)}),z.Nc(3,k,0,0,"ng-template",1),z.Wb(),z.Nc(4,w,1,0,"ng-template",null,3,z.Oc)),2&e){var t=z.Bc(5);z.Cb(1),z.rc("ngTemplateOutlet",n.character||t),z.Cb(2),z.rc("ngTemplateOutlet",n.character||t)}},directives:[W.t,i.a],encapsulation:2,changeDetection:0}),Object(l.b)([Object(p.a)(),Object(l.c)("design:type",Boolean)],y.prototype,"allowHalf",void 0),y),R=[i.b,(H=function e(){n(this,e)},H.\u0275fac=function(e){return new(e||H)},H.\u0275mod=z.Ob({type:H}),H.\u0275inj=z.Nb({imports:[[d.a,W.c,i.b,f.b]]}),H)],T=b("rKiv"),A=b("utH8"),N=b("l83q"),E=b("T+9E"),D=((O=function e(){n(this,e)}).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=z.Kb({type:O,selectors:[["nz-demo-rate-basic"]],decls:1,vars:1,consts:[[3,"ngModel"]],template:function(e,n){1&e&&z.Sb(0,"nz-rate",0),2&e&&z.rc("ngModel",0)},directives:[x,u.p,u.s],encapsulation:2}),O);function G(e,n){if(1&e&&(z.Xb(0,"span",2),z.Pc(1),z.Wb()),2&e){var t=z.jc();z.Cb(1),z.Qc(t.value?t.tooltips[t.value-1]:"")}}var M,F,L,j,V=((j=function e(){n(this,e),this.tooltips=["terrible","bad","normal","good","wonderful"],this.value=3}).\u0275fac=function(e){return new(e||j)},j.\u0275cmp=z.Kb({type:j,selectors:[["nz-demo-rate-text"]],decls:2,vars:3,consts:[[3,"ngModel","nzTooltips","ngModelChange"],["class","ant-rate-text",4,"ngIf"],[1,"ant-rate-text"]],template:function(e,n){1&e&&(z.Xb(0,"nz-rate",0),z.fc("ngModelChange",function(e){return n.value=e}),z.Wb(),z.Nc(1,G,2,1,"span",1)),2&e&&(z.rc("ngModel",n.value)("nzTooltips",n.tooltips),z.Cb(1),z.rc("ngIf",n.value))},directives:[x,u.p,u.s,W.o],encapsulation:2}),j),B=((L=function e(){n(this,e),this.value=0}).\u0275fac=function(e){return new(e||L)},L.\u0275cmp=z.Kb({type:L,selectors:[["nz-demo-rate-clear"]],decls:7,vars:3,consts:[["nzAllowHalf","",3,"ngModel","ngModelChange"],[1,"ant-rate-text"],["nzAllowHalf","",3,"ngModel","nzAllowClear","ngModelChange"]],template:function(e,n){1&e&&(z.Xb(0,"nz-rate",0),z.fc("ngModelChange",function(e){return n.value=e}),z.Wb(),z.Xb(1,"span",1),z.Pc(2,"allowClear: true"),z.Wb(),z.Sb(3,"br"),z.Xb(4,"nz-rate",2),z.fc("ngModelChange",function(e){return n.value=e}),z.Wb(),z.Xb(5,"span",1),z.Pc(6,"allowClear: false"),z.Wb()),2&e&&(z.rc("ngModel",n.value),z.Cb(4),z.rc("ngModel",n.value)("nzAllowClear",!1))},directives:[x,u.p,u.s],encapsulation:2}),L),K=((F=function e(){n(this,e)}).\u0275fac=function(e){return new(e||F)},F.\u0275cmp=z.Kb({type:F,selectors:[["nz-demo-rate-half"]],decls:1,vars:1,consts:[["nzAllowHalf","",3,"ngModel"]],template:function(e,n){1&e&&z.Sb(0,"nz-rate",0),2&e&&z.rc("ngModel",2.5)},directives:[x,u.p,u.s],encapsulation:2}),F),Y=((M=function e(){n(this,e)}).\u0275fac=function(e){return new(e||M)},M.\u0275cmp=z.Kb({type:M,selectors:[["nz-demo-rate-disabled"]],decls:1,vars:1,consts:[["nzDisabled","",3,"ngModel"]],template:function(e,n){1&e&&z.Sb(0,"nz-rate",0),2&e&&z.rc("ngModel",2)},directives:[x,u.p,u.s],encapsulation:2}),M);function Z(e,n){1&e&&z.Sb(0,"i",5)}function Q(e,n){1&e&&z.Pc(0,"\u597d")}function _(e,n){1&e&&z.Pc(0,"A")}var U,$,q,J,ee=((J=function e(){n(this,e)}).\u0275fac=function(e){return new(e||J)},J.\u0275cmp=z.Kb({type:J,selectors:[["nz-demo-rate-character"]],decls:11,vars:6,consts:[["nzAllowHalf","",3,"ngModel","nzCharacter"],["nzAllowHalf","",1,"large",3,"ngModel","nzCharacter"],["characterIcon",""],["characterZhLetter",""],["characterEnLetter",""],["nz-icon","","nzType","heart"]],template:function(e,n){if(1&e&&(z.Sb(0,"nz-rate",0),z.Sb(1,"br"),z.Sb(2,"nz-rate",1),z.Sb(3,"br"),z.Sb(4,"nz-rate",0),z.Nc(5,Z,1,0,"ng-template",null,2,z.Oc),z.Nc(7,Q,1,0,"ng-template",null,3,z.Oc),z.Nc(9,_,1,0,"ng-template",null,4,z.Oc)),2&e){var t=z.Bc(6),o=z.Bc(8),a=z.Bc(10);z.rc("ngModel",0)("nzCharacter",t),z.Cb(2),z.rc("ngModel",0)("nzCharacter",a),z.Cb(2),z.rc("ngModel",0)("nzCharacter",o)}},directives:[x,u.p,u.s,i.a],styles:[".large[_ngcontent-%COMP%]     .ant-rate-star {\n        font-size: 36px;\n      }"]}),J),ne=((q=function(){function e(){n(this,e),this.expanded=!1}return o(e,[{key:"goLink",value:function(e){window&&(window.location.hash=e)}},{key:"expandAllCode",value:function(){var e=this;this.expanded=!this.expanded,this.codeBoxes.forEach(function(n){n.nzExpanded=e.expanded,n.expandCode(e.expanded),n.check()})}}]),e}()).\u0275fac=function(e){return new(e||q)},q.\u0275cmp=z.Kb({type:q,selectors:[["nz-demo-rate"]],viewQuery:function(e,n){var t;1&e&&z.Uc(T.a,1),2&e&&z.Ac(t=z.gc())&&(n.codeBoxes=t)},decls:302,vars:31,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-rate-demo-basic","nzTitle","\u57fa\u672c"],["nzHref","#components-rate-demo-half","nzTitle","\u534a\u661f"],["nzHref","#components-rate-demo-text","nzTitle","\u6587\u6848\u5c55\u73b0"],["nzHref","#components-rate-demo-disabled","nzTitle","\u53ea\u8bfb"],["nzHref","#components-rate-demo-clear","nzTitle","\u6e05\u9664"],["nzHref","#components-rate-demo-character","nzTitle","\u5176\u4ed6\u5b57\u7b26"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c","nzSelector","nz-demo-rate-basic","nzGenerateCommand","ng g ng-zorro-antd:rate-basic <name>","nzComponentName","NzDemoRateBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u6587\u6848\u5c55\u73b0","nzSelector","nz-demo-rate-text","nzGenerateCommand","ng g ng-zorro-antd:rate-text <name>","nzComponentName","NzDemoRateTextComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u6e05\u9664","nzSelector","nz-demo-rate-clear","nzGenerateCommand","ng g ng-zorro-antd:rate-clear <name>","nzComponentName","NzDemoRateClearComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u534a\u661f","nzSelector","nz-demo-rate-half","nzGenerateCommand","ng g ng-zorro-antd:rate-half <name>","nzComponentName","NzDemoRateHalfComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u53ea\u8bfb","nzSelector","nz-demo-rate-disabled","nzGenerateCommand","ng g ng-zorro-antd:rate-disabled <name>","nzComponentName","NzDemoRateDisabledComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u5176\u4ed6\u5b57\u7b26","nzSelector","nz-demo-rate-character","nzGenerateCommand","ng g ng-zorro-antd:rate-character <name>","nzComponentName","NzDemoRateCharacterComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-rate"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-rate'",1,"anchor"],["id","\u65b9\u6cd5"],["onclick","window.location.hash = '\u65b9\u6cd5'",1,"anchor"]],template:function(e,n){1&e&&(z.Xb(0,"article"),z.Xb(1,"nz-affix",0),z.Xb(2,"nz-anchor",1),z.fc("nzClick",function(e){return n.goLink(e)}),z.Sb(3,"nz-link",2),z.Sb(4,"nz-link",3),z.Sb(5,"nz-link",4),z.Sb(6,"nz-link",5),z.Sb(7,"nz-link",6),z.Sb(8,"nz-link",7),z.Sb(9,"nz-link",8),z.Wb(),z.Wb(),z.Xb(10,"section",9),z.Xb(11,"h1"),z.Pc(12,"Rate"),z.Xb(13,"span",10),z.Pc(14,"\u8bc4\u5206"),z.Wb(),z.Sb(15,"span",11),z.Xb(16,"a",12),z.Sb(17,"i",13),z.Wb(),z.Wb(),z.Xb(18,"section",9),z.Rb(),z.Xb(19,"p"),z.Pc(20,"\u8bc4\u5206\u7ec4\u4ef6\u3002"),z.Wb(),z.Xb(21,"h2",14),z.Xb(22,"span"),z.Pc(23,"\u4f55\u65f6\u4f7f\u7528"),z.Wb(),z.Xb(24,"a",15),z.Pc(25,"#"),z.Wb(),z.Wb(),z.Xb(26,"ul"),z.Xb(27,"li"),z.Pc(28," \u5bf9\u8bc4\u4ef7\u8fdb\u884c\u5c55\u793a\u3002"),z.Wb(),z.Xb(29,"li"),z.Pc(30," \u5bf9\u4e8b\u7269\u8fdb\u884c\u5feb\u901f\u7684\u8bc4\u7ea7\u64cd\u4f5c\u3002"),z.Wb(),z.Wb(),z.Xb(31,"pre",16),z.Xb(32,"code"),z.Xb(33,"span",17),z.Pc(34,"import"),z.Wb(),z.Pc(35," "),z.Xb(36,"span",18),z.Pc(37,"{"),z.Wb(),z.Pc(38," NzRateModule "),z.Xb(39,"span",18),z.Pc(40,"}"),z.Wb(),z.Pc(41," "),z.Xb(42,"span",17),z.Pc(43,"from"),z.Wb(),z.Pc(44," "),z.Xb(45,"span",19),z.Pc(46,"'ng-zorro-antd/rate'"),z.Wb(),z.Xb(47,"span",18),z.Pc(48,";"),z.Wb(),z.Wb(),z.Wb(),z.Yb(),z.Wb(),z.Xb(49,"h2"),z.Xb(50,"span"),z.Pc(51,"\u4ee3\u7801\u6f14\u793a"),z.Wb(),z.Xb(52,"i",20),z.fc("click",function(){return n.expandAllCode()}),z.Wb(),z.Wb(),z.Wb(),z.Xb(53,"div",21),z.Xb(54,"div",22),z.Xb(55,"nz-code-box",23),z.Sb(56,"nz-demo-rate-basic",24),z.Xb(57,"div",25),z.Rb(),z.Xb(58,"p"),z.Pc(59,"\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"),z.Wb(),z.Yb(),z.Wb(),z.Wb(),z.Xb(60,"nz-code-box",26),z.Sb(61,"nz-demo-rate-text",24),z.Xb(62,"div",25),z.Rb(),z.Xb(63,"p"),z.Pc(64,"\u7ed9\u8bc4\u5206\u7ec4\u4ef6\u52a0\u4e0a\u6587\u6848\u5c55\u793a\u3002"),z.Wb(),z.Yb(),z.Wb(),z.Wb(),z.Xb(65,"nz-code-box",27),z.Sb(66,"nz-demo-rate-clear",24),z.Xb(67,"div",25),z.Rb(),z.Xb(68,"p"),z.Pc(69,"\u652f\u6301\u5141\u8bb8\u6216\u8005\u7981\u7528\u6e05\u9664\u3002"),z.Wb(),z.Yb(),z.Wb(),z.Wb(),z.Wb(),z.Xb(70,"div",22),z.Xb(71,"nz-code-box",28),z.Sb(72,"nz-demo-rate-half",24),z.Xb(73,"div",25),z.Rb(),z.Xb(74,"p"),z.Pc(75,"\u652f\u6301\u9009\u4e2d\u534a\u661f\u3002"),z.Wb(),z.Yb(),z.Wb(),z.Wb(),z.Xb(76,"nz-code-box",29),z.Sb(77,"nz-demo-rate-disabled",24),z.Xb(78,"div",25),z.Rb(),z.Xb(79,"p"),z.Pc(80,"\u53ea\u8bfb\uff0c\u65e0\u6cd5\u8fdb\u884c\u9f20\u6807\u4ea4\u4e92\u3002"),z.Wb(),z.Yb(),z.Wb(),z.Wb(),z.Xb(81,"nz-code-box",30),z.Sb(82,"nz-demo-rate-character",24),z.Xb(83,"div",25),z.Rb(),z.Xb(84,"p"),z.Pc(85,"\u53ef\u4ee5\u5c06\u661f\u661f\u66ff\u6362\u4e3a\u5176\u4ed6\u5b57\u7b26\uff0c\u6bd4\u5982\u5b57\u6bcd\uff0c\u6570\u5b57\uff0c\u5b57\u4f53\u56fe\u6807\u751a\u81f3\u4e2d\u6587\u3002"),z.Wb(),z.Yb(),z.Wb(),z.Wb(),z.Wb(),z.Wb(),z.Xb(86,"section",31),z.Rb(),z.Xb(87,"h2",32),z.Xb(88,"span"),z.Pc(89,"API"),z.Wb(),z.Xb(90,"a",33),z.Pc(91,"#"),z.Wb(),z.Wb(),z.Xb(92,"h3",34),z.Xb(93,"span"),z.Pc(94,"nz-rate"),z.Wb(),z.Xb(95,"label",35),z.Pc(96,"component"),z.Wb(),z.Xb(97,"a",36),z.Pc(98,"#"),z.Wb(),z.Wb(),z.Xb(99,"table"),z.Xb(100,"thead"),z.Xb(101,"tr"),z.Xb(102,"th"),z.Pc(103,"\u5c5e\u6027"),z.Wb(),z.Xb(104,"th"),z.Pc(105,"\u8bf4\u660e"),z.Wb(),z.Xb(106,"th"),z.Pc(107,"\u7c7b\u578b"),z.Wb(),z.Xb(108,"th"),z.Pc(109,"\u9ed8\u8ba4\u503c"),z.Wb(),z.Xb(110,"th"),z.Pc(111,"\u652f\u6301\u5168\u5c40\u914d\u7f6e"),z.Wb(),z.Wb(),z.Wb(),z.Xb(112,"tbody"),z.Xb(113,"tr"),z.Xb(114,"td"),z.Xb(115,"code"),z.Pc(116,"[nzAllowClear]"),z.Wb(),z.Wb(),z.Xb(117,"td"),z.Pc(118,"\u662f\u5426\u5141\u8bb8\u518d\u6b21\u70b9\u51fb\u540e\u6e05\u9664"),z.Wb(),z.Xb(119,"td"),z.Xb(120,"code"),z.Pc(121,"boolean"),z.Wb(),z.Wb(),z.Xb(122,"td"),z.Xb(123,"code"),z.Pc(124,"true"),z.Wb(),z.Wb(),z.Xb(125,"td"),z.Pc(126,"\u2705"),z.Wb(),z.Wb(),z.Xb(127,"tr"),z.Xb(128,"td"),z.Xb(129,"code"),z.Pc(130,"[nzAllowHalf]"),z.Wb(),z.Wb(),z.Xb(131,"td"),z.Pc(132,"\u662f\u5426\u5141\u8bb8\u534a\u9009"),z.Wb(),z.Xb(133,"td"),z.Xb(134,"code"),z.Pc(135,"boolean"),z.Wb(),z.Wb(),z.Xb(136,"td"),z.Xb(137,"code"),z.Pc(138,"false"),z.Wb(),z.Wb(),z.Xb(139,"td"),z.Pc(140,"\u2705"),z.Wb(),z.Wb(),z.Xb(141,"tr"),z.Xb(142,"td"),z.Xb(143,"code"),z.Pc(144,"[nzAutoFocus]"),z.Wb(),z.Wb(),z.Xb(145,"td"),z.Pc(146,"\u81ea\u52a8\u83b7\u53d6\u7126\u70b9"),z.Wb(),z.Xb(147,"td"),z.Xb(148,"code"),z.Pc(149,"boolean"),z.Wb(),z.Wb(),z.Xb(150,"td"),z.Xb(151,"code"),z.Pc(152,"false"),z.Wb(),z.Wb(),z.Sb(153,"td"),z.Wb(),z.Xb(154,"tr"),z.Xb(155,"td"),z.Xb(156,"code"),z.Pc(157,"[nzCharacter]"),z.Wb(),z.Wb(),z.Xb(158,"td"),z.Pc(159,"\u81ea\u5b9a\u4e49\u5b57\u7b26"),z.Wb(),z.Xb(160,"td"),z.Xb(161,"code"),z.Pc(162,"TemplateRef<void>"),z.Wb(),z.Wb(),z.Xb(163,"td"),z.Xb(164,"code"),z.Pc(165,'<i nz-icon nzType="star"></i>'),z.Wb(),z.Wb(),z.Sb(166,"td"),z.Wb(),z.Xb(167,"tr"),z.Xb(168,"td"),z.Xb(169,"code"),z.Pc(170,"[nzCount]"),z.Wb(),z.Wb(),z.Xb(171,"td"),z.Pc(172,"star \u603b\u6570"),z.Wb(),z.Xb(173,"td"),z.Xb(174,"code"),z.Pc(175,"number"),z.Wb(),z.Wb(),z.Xb(176,"td"),z.Xb(177,"code"),z.Pc(178,"5"),z.Wb(),z.Wb(),z.Sb(179,"td"),z.Wb(),z.Xb(180,"tr"),z.Xb(181,"td"),z.Xb(182,"code"),z.Pc(183,"[nzDisabled]"),z.Wb(),z.Wb(),z.Xb(184,"td"),z.Pc(185,"\u53ea\u8bfb\uff0c\u65e0\u6cd5\u8fdb\u884c\u4ea4\u4e92"),z.Wb(),z.Xb(186,"td"),z.Xb(187,"code"),z.Pc(188,"boolean"),z.Wb(),z.Wb(),z.Xb(189,"td"),z.Xb(190,"code"),z.Pc(191,"false"),z.Wb(),z.Wb(),z.Sb(192,"td"),z.Wb(),z.Xb(193,"tr"),z.Xb(194,"td"),z.Xb(195,"code"),z.Pc(196,"[nzTooltips]"),z.Wb(),z.Wb(),z.Xb(197,"td"),z.Pc(198,"\u81ea\u5b9a\u4e49\u6bcf\u9879\u7684\u63d0\u793a\u4fe1\u606f"),z.Wb(),z.Xb(199,"td"),z.Xb(200,"code"),z.Pc(201,"string[]"),z.Wb(),z.Wb(),z.Xb(202,"td"),z.Xb(203,"code"),z.Pc(204,"[]"),z.Wb(),z.Wb(),z.Sb(205,"td"),z.Wb(),z.Xb(206,"tr"),z.Xb(207,"td"),z.Xb(208,"code"),z.Pc(209,"[ngModel]"),z.Wb(),z.Wb(),z.Xb(210,"td"),z.Pc(211,"\u5f53\u524d\u6570\uff0c\u53ef\u4ee5\u53cc\u5411\u7ed1\u5b9a"),z.Wb(),z.Xb(212,"td"),z.Xb(213,"code"),z.Pc(214,"number"),z.Wb(),z.Wb(),z.Xb(215,"td"),z.Xb(216,"code"),z.Pc(217,"0"),z.Wb(),z.Wb(),z.Sb(218,"td"),z.Wb(),z.Xb(219,"tr"),z.Xb(220,"td"),z.Xb(221,"code"),z.Pc(222,"(ngModelChange)"),z.Wb(),z.Wb(),z.Xb(223,"td"),z.Pc(224,"\u5f53\u524d\u6570\u6539\u53d8\u65f6\u7684\u56de\u8c03"),z.Wb(),z.Xb(225,"td"),z.Xb(226,"code"),z.Pc(227,"EventEmitter<number>"),z.Wb(),z.Wb(),z.Xb(228,"td"),z.Pc(229,"-"),z.Wb(),z.Sb(230,"td"),z.Wb(),z.Xb(231,"tr"),z.Xb(232,"td"),z.Xb(233,"code"),z.Pc(234,"(nzOnBlur)"),z.Wb(),z.Wb(),z.Xb(235,"td"),z.Pc(236,"\u5931\u53bb\u7126\u70b9\u65f6\u7684\u56de\u8c03"),z.Wb(),z.Xb(237,"td"),z.Xb(238,"code"),z.Pc(239,"EventEmitter<FocusEvent>"),z.Wb(),z.Wb(),z.Xb(240,"td"),z.Pc(241,"-"),z.Wb(),z.Sb(242,"td"),z.Wb(),z.Xb(243,"tr"),z.Xb(244,"td"),z.Xb(245,"code"),z.Pc(246,"(nzOnFocus)"),z.Wb(),z.Wb(),z.Xb(247,"td"),z.Pc(248,"\u83b7\u53d6\u7126\u70b9\u65f6\u7684\u56de\u8c03"),z.Wb(),z.Xb(249,"td"),z.Xb(250,"code"),z.Pc(251,"EventEmitter<FocusEvent>"),z.Wb(),z.Wb(),z.Xb(252,"td"),z.Pc(253,"-"),z.Wb(),z.Sb(254,"td"),z.Wb(),z.Xb(255,"tr"),z.Xb(256,"td"),z.Xb(257,"code"),z.Pc(258,"(nzOnHoverChange)"),z.Wb(),z.Wb(),z.Xb(259,"td"),z.Pc(260,"\u9f20\u6807\u7ecf\u8fc7\u65f6\u6570\u503c\u53d8\u5316\u7684\u56de\u8c03"),z.Wb(),z.Xb(261,"td"),z.Xb(262,"code"),z.Pc(263,"EventEmitter<number>"),z.Wb(),z.Wb(),z.Xb(264,"td"),z.Pc(265,"-"),z.Wb(),z.Sb(266,"td"),z.Wb(),z.Xb(267,"tr"),z.Xb(268,"td"),z.Xb(269,"code"),z.Pc(270,"(nzOnKeyDown)"),z.Wb(),z.Wb(),z.Xb(271,"td"),z.Pc(272,"\u6309\u952e\u56de\u8c03"),z.Wb(),z.Xb(273,"td"),z.Xb(274,"code"),z.Pc(275,"EventEmitter<KeyboardEvent>"),z.Wb(),z.Wb(),z.Xb(276,"td"),z.Pc(277,"-"),z.Wb(),z.Sb(278,"td"),z.Wb(),z.Wb(),z.Wb(),z.Xb(279,"h4",37),z.Xb(280,"span"),z.Pc(281,"\u65b9\u6cd5"),z.Wb(),z.Xb(282,"a",38),z.Pc(283,"#"),z.Wb(),z.Wb(),z.Xb(284,"table"),z.Xb(285,"thead"),z.Xb(286,"tr"),z.Xb(287,"th"),z.Pc(288,"\u540d\u79f0"),z.Wb(),z.Xb(289,"th"),z.Pc(290,"\u63cf\u8ff0"),z.Wb(),z.Wb(),z.Wb(),z.Xb(291,"tbody"),z.Xb(292,"tr"),z.Xb(293,"td"),z.Pc(294,"blur()"),z.Wb(),z.Xb(295,"td"),z.Pc(296,"\u79fb\u9664\u7126\u70b9"),z.Wb(),z.Wb(),z.Xb(297,"tr"),z.Xb(298,"td"),z.Pc(299,"focus()"),z.Wb(),z.Xb(300,"td"),z.Pc(301,"\u83b7\u53d6\u7126\u70b9"),z.Wb(),z.Wb(),z.Wb(),z.Wb(),z.Yb(),z.Wb(),z.Wb()),2&e&&(z.Cb(1),z.rc("nzOffsetTop",16),z.Cb(1),z.rc("nzAffix",!1),z.Cb(51),z.rc("nzGutter",16),z.Cb(1),z.rc("nzXl",12)("nzSpan",24),z.Cb(1),z.rc("nzId","components-rate-demo-basic")("nzLink","components-rate-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/basic.md"),z.Cb(5),z.rc("nzId","components-rate-demo-text")("nzLink","components-rate-demo-text")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/text.md"),z.Cb(5),z.rc("nzId","components-rate-demo-clear")("nzLink","components-rate-demo-clear")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/clear.md"),z.Cb(5),z.rc("nzXl",12)("nzSpan",24),z.Cb(1),z.rc("nzId","components-rate-demo-half")("nzLink","components-rate-demo-half")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/half.md"),z.Cb(5),z.rc("nzId","components-rate-demo-disabled")("nzLink","components-rate-demo-disabled")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/disabled.md"),z.Cb(5),z.rc("nzId","components-rate-demo-character")("nzLink","components-rate-demo-character")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/character.md"))},directives:[A.a,N.a,N.b,i.a,f.d,E.c,E.a,T.a,D,V,B,K,Y,ee],encapsulation:2}),q),te=(($=function(){function e(){n(this,e),this.expanded=!1}return o(e,[{key:"goLink",value:function(e){window&&(window.location.hash=e)}},{key:"expandAllCode",value:function(){var e=this;this.expanded=!this.expanded,this.codeBoxes.forEach(function(n){n.nzExpanded=e.expanded,n.expandCode(e.expanded),n.check()})}}]),e}()).\u0275fac=function(e){return new(e||$)},$.\u0275cmp=z.Kb({type:$,selectors:[["nz-demo-rate"]],viewQuery:function(e,n){var t;1&e&&z.Uc(T.a,1),2&e&&z.Ac(t=z.gc())&&(n.codeBoxes=t)},decls:300,vars:31,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-rate-demo-basic","nzTitle","Basic"],["nzHref","#components-rate-demo-half","nzTitle","Half star"],["nzHref","#components-rate-demo-text","nzTitle","Show copywriting"],["nzHref","#components-rate-demo-disabled","nzTitle","Read only"],["nzHref","#components-rate-demo-clear","nzTitle","Clear star"],["nzHref","#components-rate-demo-character","nzTitle","Other Character"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-rate-basic","nzGenerateCommand","ng g ng-zorro-antd:rate-basic <name>","nzComponentName","NzDemoRateBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Show copywriting","nzSelector","nz-demo-rate-text","nzGenerateCommand","ng g ng-zorro-antd:rate-text <name>","nzComponentName","NzDemoRateTextComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Clear star","nzSelector","nz-demo-rate-clear","nzGenerateCommand","ng g ng-zorro-antd:rate-clear <name>","nzComponentName","NzDemoRateClearComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Half star","nzSelector","nz-demo-rate-half","nzGenerateCommand","ng g ng-zorro-antd:rate-half <name>","nzComponentName","NzDemoRateHalfComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Read only","nzSelector","nz-demo-rate-disabled","nzGenerateCommand","ng g ng-zorro-antd:rate-disabled <name>","nzComponentName","NzDemoRateDisabledComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Other Character","nzSelector","nz-demo-rate-character","nzGenerateCommand","ng g ng-zorro-antd:rate-character <name>","nzComponentName","NzDemoRateCharacterComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-rate"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-rate'",1,"anchor"],["id","methods"],["onclick","window.location.hash = 'methods'",1,"anchor"]],template:function(e,n){1&e&&(z.Xb(0,"article"),z.Xb(1,"nz-affix",0),z.Xb(2,"nz-anchor",1),z.fc("nzClick",function(e){return n.goLink(e)}),z.Sb(3,"nz-link",2),z.Sb(4,"nz-link",3),z.Sb(5,"nz-link",4),z.Sb(6,"nz-link",5),z.Sb(7,"nz-link",6),z.Sb(8,"nz-link",7),z.Sb(9,"nz-link",8),z.Wb(),z.Wb(),z.Xb(10,"section",9),z.Xb(11,"h1"),z.Pc(12,"Rate"),z.Sb(13,"span",10),z.Sb(14,"span",11),z.Xb(15,"a",12),z.Sb(16,"i",13),z.Wb(),z.Wb(),z.Xb(17,"section",9),z.Rb(),z.Xb(18,"p"),z.Pc(19,"Rate component."),z.Wb(),z.Xb(20,"h2",14),z.Xb(21,"span"),z.Pc(22,"When To Use"),z.Wb(),z.Xb(23,"a",15),z.Pc(24,"#"),z.Wb(),z.Wb(),z.Xb(25,"ul"),z.Xb(26,"li"),z.Pc(27," Show evaluation."),z.Wb(),z.Xb(28,"li"),z.Pc(29," A quick rating operation on something."),z.Wb(),z.Wb(),z.Xb(30,"pre",16),z.Xb(31,"code"),z.Xb(32,"span",17),z.Pc(33,"import"),z.Wb(),z.Pc(34," "),z.Xb(35,"span",18),z.Pc(36,"{"),z.Wb(),z.Pc(37," NzRateModule "),z.Xb(38,"span",18),z.Pc(39,"}"),z.Wb(),z.Pc(40," "),z.Xb(41,"span",17),z.Pc(42,"from"),z.Wb(),z.Pc(43," "),z.Xb(44,"span",19),z.Pc(45,"'ng-zorro-antd/rate'"),z.Wb(),z.Xb(46,"span",18),z.Pc(47,";"),z.Wb(),z.Wb(),z.Wb(),z.Yb(),z.Wb(),z.Xb(48,"h2"),z.Xb(49,"span"),z.Pc(50,"Examples"),z.Wb(),z.Xb(51,"i",20),z.fc("click",function(){return n.expandAllCode()}),z.Wb(),z.Wb(),z.Wb(),z.Xb(52,"div",21),z.Xb(53,"div",22),z.Xb(54,"nz-code-box",23),z.Sb(55,"nz-demo-rate-basic",24),z.Xb(56,"div",25),z.Rb(),z.Xb(57,"p"),z.Pc(58,"The simplest usage."),z.Wb(),z.Yb(),z.Wb(),z.Wb(),z.Xb(59,"nz-code-box",26),z.Sb(60,"nz-demo-rate-text",24),z.Xb(61,"div",25),z.Rb(),z.Xb(62,"p"),z.Pc(63,"Add copywriting in rate components."),z.Wb(),z.Yb(),z.Wb(),z.Wb(),z.Xb(64,"nz-code-box",27),z.Sb(65,"nz-demo-rate-clear",24),z.Xb(66,"div",25),z.Rb(),z.Xb(67,"p"),z.Pc(68,"Support set allow to clear star when click again."),z.Wb(),z.Yb(),z.Wb(),z.Wb(),z.Wb(),z.Xb(69,"div",22),z.Xb(70,"nz-code-box",28),z.Sb(71,"nz-demo-rate-half",24),z.Xb(72,"div",25),z.Rb(),z.Xb(73,"p"),z.Pc(74,"Support select half star."),z.Wb(),z.Yb(),z.Wb(),z.Wb(),z.Xb(75,"nz-code-box",29),z.Sb(76,"nz-demo-rate-disabled",24),z.Xb(77,"div",25),z.Rb(),z.Xb(78,"p"),z.Pc(79,"Read only, can't use mouse to interact."),z.Wb(),z.Yb(),z.Wb(),z.Wb(),z.Xb(80,"nz-code-box",30),z.Sb(81,"nz-demo-rate-character",24),z.Xb(82,"div",25),z.Rb(),z.Xb(83,"p"),z.Pc(84,"Replace the default star to other character like alphabet, digit, iconfont or even Chinese word."),z.Wb(),z.Yb(),z.Wb(),z.Wb(),z.Wb(),z.Wb(),z.Xb(85,"section",31),z.Rb(),z.Xb(86,"h2",32),z.Xb(87,"span"),z.Pc(88,"API"),z.Wb(),z.Xb(89,"a",33),z.Pc(90,"#"),z.Wb(),z.Wb(),z.Xb(91,"h3",34),z.Xb(92,"span"),z.Pc(93,"nz-rate"),z.Wb(),z.Xb(94,"label",35),z.Pc(95,"component"),z.Wb(),z.Xb(96,"a",36),z.Pc(97,"#"),z.Wb(),z.Wb(),z.Xb(98,"table"),z.Xb(99,"thead"),z.Xb(100,"tr"),z.Xb(101,"th"),z.Pc(102,"Property"),z.Wb(),z.Xb(103,"th"),z.Pc(104,"Description"),z.Wb(),z.Xb(105,"th"),z.Pc(106,"type"),z.Wb(),z.Xb(107,"th"),z.Pc(108,"Default"),z.Wb(),z.Xb(109,"th"),z.Pc(110,"Global Config"),z.Wb(),z.Wb(),z.Wb(),z.Xb(111,"tbody"),z.Xb(112,"tr"),z.Xb(113,"td"),z.Xb(114,"code"),z.Pc(115,"[nzAllowClear]"),z.Wb(),z.Wb(),z.Xb(116,"td"),z.Pc(117,"whether to allow clear when click again"),z.Wb(),z.Xb(118,"td"),z.Xb(119,"code"),z.Pc(120,"boolean"),z.Wb(),z.Wb(),z.Xb(121,"td"),z.Xb(122,"code"),z.Pc(123,"true"),z.Wb(),z.Wb(),z.Xb(124,"td"),z.Pc(125,"\u2705"),z.Wb(),z.Wb(),z.Xb(126,"tr"),z.Xb(127,"td"),z.Xb(128,"code"),z.Pc(129,"[nzAllowHalf]"),z.Wb(),z.Wb(),z.Xb(130,"td"),z.Pc(131,"whether to allow semi selection"),z.Wb(),z.Xb(132,"td"),z.Xb(133,"code"),z.Pc(134,"boolean"),z.Wb(),z.Wb(),z.Xb(135,"td"),z.Xb(136,"code"),z.Pc(137,"false"),z.Wb(),z.Wb(),z.Xb(138,"td"),z.Pc(139,"\u2705"),z.Wb(),z.Wb(),z.Xb(140,"tr"),z.Xb(141,"td"),z.Xb(142,"code"),z.Pc(143,"[nzAutoFocus]"),z.Wb(),z.Wb(),z.Xb(144,"td"),z.Pc(145,"get focus when component mounted"),z.Wb(),z.Xb(146,"td"),z.Xb(147,"code"),z.Pc(148,"boolean"),z.Wb(),z.Wb(),z.Xb(149,"td"),z.Xb(150,"code"),z.Pc(151,"false"),z.Wb(),z.Wb(),z.Sb(152,"td"),z.Wb(),z.Xb(153,"tr"),z.Xb(154,"td"),z.Xb(155,"code"),z.Pc(156,"[nzCharacter]"),z.Wb(),z.Wb(),z.Xb(157,"td"),z.Pc(158,"custom character of rate"),z.Wb(),z.Xb(159,"td"),z.Xb(160,"code"),z.Pc(161,"TemplateRef<void>"),z.Wb(),z.Wb(),z.Xb(162,"td"),z.Xb(163,"code"),z.Pc(164,'<i nz-icon nzType="star"></i>'),z.Wb(),z.Wb(),z.Sb(165,"td"),z.Wb(),z.Xb(166,"tr"),z.Xb(167,"td"),z.Xb(168,"code"),z.Pc(169,"[nzCount]"),z.Wb(),z.Wb(),z.Xb(170,"td"),z.Pc(171,"star count"),z.Wb(),z.Xb(172,"td"),z.Xb(173,"code"),z.Pc(174,"number"),z.Wb(),z.Wb(),z.Xb(175,"td"),z.Xb(176,"code"),z.Pc(177,"5"),z.Wb(),z.Wb(),z.Sb(178,"td"),z.Wb(),z.Xb(179,"tr"),z.Xb(180,"td"),z.Xb(181,"code"),z.Pc(182,"[nzDisabled]"),z.Wb(),z.Wb(),z.Xb(183,"td"),z.Pc(184,"read only, unable to interact"),z.Wb(),z.Xb(185,"td"),z.Xb(186,"code"),z.Pc(187,"boolean"),z.Wb(),z.Wb(),z.Xb(188,"td"),z.Xb(189,"code"),z.Pc(190,"false"),z.Wb(),z.Wb(),z.Sb(191,"td"),z.Wb(),z.Xb(192,"tr"),z.Xb(193,"td"),z.Xb(194,"code"),z.Pc(195,"[nzTooltips]"),z.Wb(),z.Wb(),z.Xb(196,"td"),z.Pc(197,"Customize tooltip by each character"),z.Wb(),z.Xb(198,"td"),z.Xb(199,"code"),z.Pc(200,"string[]"),z.Wb(),z.Wb(),z.Xb(201,"td"),z.Xb(202,"code"),z.Pc(203,"[]"),z.Wb(),z.Wb(),z.Sb(204,"td"),z.Wb(),z.Xb(205,"tr"),z.Xb(206,"td"),z.Xb(207,"code"),z.Pc(208,"[ngModel]"),z.Wb(),z.Wb(),z.Xb(209,"td"),z.Pc(210,"current value , double binding"),z.Wb(),z.Xb(211,"td"),z.Xb(212,"code"),z.Pc(213,"number"),z.Wb(),z.Wb(),z.Xb(214,"td"),z.Pc(215,"-"),z.Wb(),z.Sb(216,"td"),z.Wb(),z.Xb(217,"tr"),z.Xb(218,"td"),z.Xb(219,"code"),z.Pc(220,"(ngModelChange)"),z.Wb(),z.Wb(),z.Xb(221,"td"),z.Pc(222,"callback when select value"),z.Wb(),z.Xb(223,"td"),z.Xb(224,"code"),z.Pc(225,"EventEmitter<number>"),z.Wb(),z.Wb(),z.Xb(226,"td"),z.Pc(227,"-"),z.Wb(),z.Sb(228,"td"),z.Wb(),z.Xb(229,"tr"),z.Xb(230,"td"),z.Xb(231,"code"),z.Pc(232,"(nzOnBlur)"),z.Wb(),z.Wb(),z.Xb(233,"td"),z.Pc(234,"callback when component lose focus"),z.Wb(),z.Xb(235,"td"),z.Xb(236,"code"),z.Pc(237,"EventEmitter<FocusEvent>"),z.Wb(),z.Wb(),z.Xb(238,"td"),z.Pc(239,"-"),z.Wb(),z.Sb(240,"td"),z.Wb(),z.Xb(241,"tr"),z.Xb(242,"td"),z.Xb(243,"code"),z.Pc(244,"(nzOnFocus)"),z.Wb(),z.Wb(),z.Xb(245,"td"),z.Pc(246,"callback when component get focus"),z.Wb(),z.Xb(247,"td"),z.Xb(248,"code"),z.Pc(249,"EventEmitter<FocusEvent>"),z.Wb(),z.Wb(),z.Xb(250,"td"),z.Pc(251,"-"),z.Wb(),z.Sb(252,"td"),z.Wb(),z.Xb(253,"tr"),z.Xb(254,"td"),z.Xb(255,"code"),z.Pc(256,"(nzOnHoverChange)"),z.Wb(),z.Wb(),z.Xb(257,"td"),z.Pc(258,"callback when hover item"),z.Wb(),z.Xb(259,"td"),z.Xb(260,"code"),z.Pc(261,"EventEmitter<number>"),z.Wb(),z.Wb(),z.Xb(262,"td"),z.Pc(263,"-"),z.Wb(),z.Sb(264,"td"),z.Wb(),z.Xb(265,"tr"),z.Xb(266,"td"),z.Xb(267,"code"),z.Pc(268,"(nzOnKeyDown)"),z.Wb(),z.Wb(),z.Xb(269,"td"),z.Pc(270,"callback when keydown on component"),z.Wb(),z.Xb(271,"td"),z.Xb(272,"code"),z.Pc(273,"EventEmitter<KeyboardEvent>"),z.Wb(),z.Wb(),z.Xb(274,"td"),z.Pc(275,"-"),z.Wb(),z.Sb(276,"td"),z.Wb(),z.Wb(),z.Wb(),z.Xb(277,"h4",37),z.Xb(278,"span"),z.Pc(279,"Methods"),z.Wb(),z.Xb(280,"a",38),z.Pc(281,"#"),z.Wb(),z.Wb(),z.Xb(282,"table"),z.Xb(283,"thead"),z.Xb(284,"tr"),z.Xb(285,"th"),z.Pc(286,"Name"),z.Wb(),z.Xb(287,"th"),z.Pc(288,"Description"),z.Wb(),z.Wb(),z.Wb(),z.Xb(289,"tbody"),z.Xb(290,"tr"),z.Xb(291,"td"),z.Pc(292,"blur()"),z.Wb(),z.Xb(293,"td"),z.Pc(294,"remove focus"),z.Wb(),z.Wb(),z.Xb(295,"tr"),z.Xb(296,"td"),z.Pc(297,"focus()"),z.Wb(),z.Xb(298,"td"),z.Pc(299,"get focus"),z.Wb(),z.Wb(),z.Wb(),z.Wb(),z.Yb(),z.Wb(),z.Wb()),2&e&&(z.Cb(1),z.rc("nzOffsetTop",16),z.Cb(1),z.rc("nzAffix",!1),z.Cb(50),z.rc("nzGutter",16),z.Cb(1),z.rc("nzXl",12)("nzSpan",24),z.Cb(1),z.rc("nzId","components-rate-demo-basic")("nzLink","components-rate-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/basic.md"),z.Cb(5),z.rc("nzId","components-rate-demo-text")("nzLink","components-rate-demo-text")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/text.md"),z.Cb(5),z.rc("nzId","components-rate-demo-clear")("nzLink","components-rate-demo-clear")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/clear.md"),z.Cb(5),z.rc("nzXl",12)("nzSpan",24),z.Cb(1),z.rc("nzId","components-rate-demo-half")("nzLink","components-rate-demo-half")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/half.md"),z.Cb(5),z.rc("nzId","components-rate-demo-disabled")("nzLink","components-rate-demo-disabled")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/disabled.md"),z.Cb(5),z.rc("nzId","components-rate-demo-character")("nzLink","components-rate-demo-character")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/character.md"))},directives:[A.a,N.a,N.b,i.a,f.d,E.c,E.a,T.a,D,V,B,K,Y,ee],encapsulation:2}),$),oe=((U=function e(){n(this,e)}).\u0275fac=function(e){return new(e||U)},U.\u0275mod=z.Ob({type:U}),U.\u0275inj=z.Nb({imports:[[r.a].concat(R,[c.h.forChild([{path:"en",component:te},{path:"zh",component:ne}])])]}),U)}}])}();