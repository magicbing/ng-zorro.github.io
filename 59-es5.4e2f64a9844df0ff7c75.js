!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{ySfe:function(t,o,c){"use strict";c.r(o),c.d(o,"NzDemoBackTopModule",(function(){return j}));var b=c("tyNb"),i=c("WGB2"),a=c("mrSG"),r=c("nLfN"),s=c("ofXK"),p=c("fXoL"),d=c("eczo"),l=c("8IHs"),z=c("d1+9"),m=c("XNiG"),h=c("xgIS"),u=c("gcYM"),V=c("1G5W"),U=c("MOHP"),g=c("amOf");function f(n,t){1&n&&(p.Vb(0,"div",4),p.Vb(1,"div",5),p.Qb(2,"i",6),p.Ub(),p.Ub())}function k(n,t){}function P(n,t){if(1&n){var e=p.Xb();p.Vb(0,"div",1),p.dc("click",(function(){return p.Cc(e),p.hc().clickBackTop()})),p.Nc(1,f,3,0,"ng-template",null,2,p.Oc),p.Nc(3,k,0,0,"ng-template",3),p.Ub()}if(2&n){var o=p.zc(2),c=p.hc();p.pc("@fadeMotion",void 0),p.Ab(3),p.pc("ngTemplateOutlet",c.nzTemplate||o)}}var v,y,T,w,x=((v=function(){function t(e,o,c,b,i,a){n(this,t),this.doc=e,this.nzConfigService=o,this.scrollSrv=c,this.platform=b,this.cd=i,this.zone=a,this._nzModuleName="backTop",this.scrollListenerDestroy$=new m.a,this.target=null,this.visible=!1,this.nzVisibilityHeight=400,this.nzClick=new p.n}return e(t,[{key:"ngOnInit",value:function(){this.registerScrollEvent()}},{key:"clickBackTop",value:function(){this.scrollSrv.scrollTo(this.getTarget(),0),this.nzClick.emit(!0)}},{key:"getTarget",value:function(){return this.target||window}},{key:"handleScroll",value:function(){this.visible!==this.scrollSrv.getScroll(this.getTarget())>this.nzVisibilityHeight&&(this.visible=!this.visible,this.cd.detectChanges())}},{key:"registerScrollEvent",value:function(){var n=this;this.platform.isBrowser&&(this.scrollListenerDestroy$.next(),this.handleScroll(),this.zone.runOutsideAngular((function(){Object(h.a)(n.getTarget(),"scroll").pipe(Object(u.a)(50),Object(V.a)(n.scrollListenerDestroy$)).subscribe((function(){return n.handleScroll()}))})))}},{key:"ngOnDestroy",value:function(){this.scrollListenerDestroy$.next(),this.scrollListenerDestroy$.complete()}},{key:"ngOnChanges",value:function(n){n.nzTarget&&(this.target="string"==typeof this.nzTarget?this.doc.querySelector(this.nzTarget):this.nzTarget,this.registerScrollEvent())}}]),t}()).\u0275fac=function(n){return new(n||v)(p.Ob(s.d),p.Ob(l.b),p.Ob(g.e),p.Ob(r.a),p.Ob(p.h),p.Ob(p.z))},v.\u0275cmp=p.Ib({type:v,selectors:[["nz-back-top"]],inputs:{nzVisibilityHeight:"nzVisibilityHeight",nzTemplate:"nzTemplate",nzTarget:"nzTarget"},outputs:{nzClick:"nzClick"},exportAs:["nzBackTop"],features:[p.yb],decls:1,vars:1,consts:[["class","ant-back-top",3,"click",4,"ngIf"],[1,"ant-back-top",3,"click"],["defaultContent",""],[3,"ngTemplateOutlet"],[1,"ant-back-top-content"],[1,"ant-back-top-icon"],["nz-icon","","nzType","vertical-align-top"]],template:function(n,t){1&n&&p.Nc(0,P,4,2,"div",0),2&n&&p.pc("ngIf",t.visible)},directives:[s.o,s.t,U.a],encapsulation:2,data:{animation:[d.b]},changeDetection:0}),Object(a.b)([Object(l.c)(),Object(z.b)(),Object(a.c)("design:type",Number)],v.prototype,"nzVisibilityHeight",void 0),v),C=[(y=function t(){n(this,t)},y.\u0275mod=p.Mb({type:y}),y.\u0275inj=p.Lb({factory:function(n){return new(n||y)},imports:[[s.c,r.b,U.b]]}),y)],O=c("rKiv"),I=c("utH8"),H=c("l83q"),S=c("pk25"),A=c("T+9E"),N=((w=function t(){n(this,t)}).\u0275fac=function(n){return new(n||w)},w.\u0275cmp=p.Ib({type:w,selectors:[["nz-demo-back-top-basic"]],decls:5,vars:0,template:function(n,t){1&n&&(p.Qb(0,"nz-back-top"),p.Pc(1," Scroll down to see the bottom-right "),p.Vb(2,"strong"),p.Pc(3," gray "),p.Ub(),p.Pc(4," button. "))},directives:[x],styles:["strong[_ngcontent-%COMP%] {\n        color: rgba(64, 64, 64, 0.6);\n      }"]}),w),Q=((T=function t(){n(this,t)}).\u0275fac=function(n){return new(n||T)},T.\u0275cmp=p.Ib({type:T,selectors:[["nz-demo-back-top-target"]],decls:8,vars:1,consts:[[1,"long-div"],["divTarget",""],[1,"long-div-inner"],[3,"nzTarget"]],template:function(n,t){if(1&n&&(p.Pc(0," Scroll down to see the bottom-right "),p.Vb(1,"strong"),p.Pc(2," gray "),p.Ub(),p.Pc(3," button. "),p.Vb(4,"div",0,1),p.Qb(6,"div",2),p.Qb(7,"nz-back-top",3),p.Ub()),2&n){var e=p.zc(5);p.Ab(7),p.pc("nzTarget",e)}},directives:[x],styles:["[_nghost-%COMP%]     .long-div {\n        height: 300px;\n        overflow-y: scroll;\n        background-image: url(//zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg);\n      }\n\n      [_nghost-%COMP%]     .long-div-inner {\n        height: 1500px;\n      }\n\n      [_nghost-%COMP%]     .long-div .ant-back-top {\n        right: 150px;\n      }\n\n      [_nghost-%COMP%]     strong {\n        color: rgba(64, 64, 64, 0.6);\n      }"]}),T);function G(n,t){1&n&&(p.Vb(0,"div",2),p.Pc(1,"UP"),p.Ub())}var L,B,E,R,M=((R=function(){function t(){n(this,t)}return e(t,[{key:"notify",value:function(){console.log("notify")}}]),t}()).\u0275fac=function(n){return new(n||R)},R.\u0275cmp=p.Ib({type:R,selectors:[["nz-demo-back-top-custom"]],decls:7,vars:2,consts:[[3,"nzTemplate","nzVisibilityHeight","nzOnClick"],["tpl",""],[1,"ant-back-top-inner"]],template:function(n,t){if(1&n&&(p.Vb(0,"nz-back-top",0),p.dc("nzOnClick",(function(){return t.notify()})),p.Nc(1,G,2,0,"ng-template",null,1,p.Oc),p.Ub(),p.Pc(3," Scroll down to see the bottom-right "),p.Vb(4,"strong"),p.Pc(5," blue "),p.Ub(),p.Pc(6," button. ")),2&n){var e=p.zc(2);p.pc("nzTemplate",e)("nzVisibilityHeight",100)}},directives:[x],styles:["[_nghost-%COMP%]     .ant-back-top {\n        bottom: 100px;\n      }\n\n      [_nghost-%COMP%]     .ant-back-top-inner {\n        height: 40px;\n        width: 40px;\n        line-height: 40px;\n        border-radius: 4px;\n        background-color: #1088e9;\n        color: #fff;\n        text-align: center;\n        font-size: 20px;\n      }\n\n      [_nghost-%COMP%]     strong {\n        color: #1088e9;\n      }"]}),R),D=((E=function(){function t(){n(this,t),this.expanded=!1}return e(t,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach((function(t){t.nzExpanded=n.expanded,t.expandCode(n.expanded),t.check()}))}}]),t}()).\u0275fac=function(n){return new(n||E)},E.\u0275cmp=p.Ib({type:E,selectors:[["nz-demo-back-top"]],viewQuery:function(n,t){var e;1&n&&p.Uc(O.a,!0),2&n&&p.yc(e=p.ec())&&(t.codeBoxes=e)},decls:163,vars:19,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-back-top-demo-basic","nzTitle","\u57fa\u672c"],["nzHref","#components-back-top-demo-custom","nzTitle","\u81ea\u5b9a\u4e49\u6837\u5f0f"],["nzHref","#components-back-top-demo-target","nzTitle","\u6eda\u52a8\u5bb9\u5668"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/back-top/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c","nzSelector","nz-demo-back-top-basic","nzGenerateCommand","ng g ng-zorro-antd:back-top-basic <name>","nzComponentName","NzDemoBackTopBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u6eda\u52a8\u5bb9\u5668","nzSelector","nz-demo-back-top-target","nzGenerateCommand","ng g ng-zorro-antd:back-top-target <name>","nzComponentName","NzDemoBackTopTargetComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u81ea\u5b9a\u4e49\u6837\u5f0f","nzSelector","nz-demo-back-top-custom","nzGenerateCommand","ng g ng-zorro-antd:back-top-custom <name>","nzComponentName","NzDemoBackTopCustomComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-back-top"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-back-top'",1,"anchor"]],template:function(n,t){1&n&&(p.Vb(0,"article"),p.Vb(1,"nz-affix",0),p.Vb(2,"nz-anchor",1),p.dc("nzClick",(function(n){return t.goLink(n)})),p.Qb(3,"nz-link",2),p.Qb(4,"nz-link",3),p.Qb(5,"nz-link",4),p.Qb(6,"nz-link",5),p.Ub(),p.Ub(),p.Vb(7,"section",6),p.Vb(8,"h1"),p.Pc(9,"BackTop"),p.Vb(10,"span",7),p.Pc(11,"\u56de\u5230\u9876\u90e8"),p.Ub(),p.Qb(12,"span",8),p.Vb(13,"a",9),p.Qb(14,"i",10),p.Ub(),p.Ub(),p.Vb(15,"section",6),p.Pb(),p.Vb(16,"p"),p.Pc(17,"\u8fd4\u56de\u9875\u9762\u9876\u90e8\u7684\u64cd\u4f5c\u6309\u94ae\u3002"),p.Ub(),p.Vb(18,"h2",11),p.Vb(19,"span"),p.Pc(20,"\u4f55\u65f6\u4f7f\u7528"),p.Ub(),p.Vb(21,"a",12),p.Pc(22,"#"),p.Ub(),p.Ub(),p.Vb(23,"ul"),p.Vb(24,"li"),p.Pc(25,"\u5f53\u9875\u9762\u5185\u5bb9\u533a\u57df\u6bd4\u8f83\u957f\u65f6\uff1b"),p.Ub(),p.Vb(26,"li"),p.Pc(27,"\u5f53\u7528\u6237\u9700\u8981\u9891\u7e41\u8fd4\u56de\u9876\u90e8\u67e5\u770b\u76f8\u5173\u5185\u5bb9\u65f6\u3002"),p.Ub(),p.Ub(),p.Vb(28,"pre",13),p.Vb(29,"code"),p.Vb(30,"span",14),p.Pc(31,"import"),p.Ub(),p.Pc(32," "),p.Vb(33,"span",15),p.Pc(34,"{"),p.Ub(),p.Pc(35," NzBackTopModule "),p.Vb(36,"span",15),p.Pc(37,"}"),p.Ub(),p.Pc(38," "),p.Vb(39,"span",14),p.Pc(40,"from"),p.Ub(),p.Pc(41," "),p.Vb(42,"span",16),p.Pc(43,"'ng-zorro-antd/back-top'"),p.Ub(),p.Vb(44,"span",15),p.Pc(45,";"),p.Ub(),p.Ub(),p.Ub(),p.Wb(),p.Ub(),p.Vb(46,"h2"),p.Vb(47,"span"),p.Pc(48,"\u4ee3\u7801\u6f14\u793a"),p.Ub(),p.Vb(49,"i",17),p.dc("click",(function(){return t.expandAllCode()})),p.Ub(),p.Ub(),p.Ub(),p.Vb(50,"div",18),p.Vb(51,"div",19),p.Vb(52,"nz-code-box",20),p.Qb(53,"nz-demo-back-top-basic",21),p.Vb(54,"div",22),p.Pb(),p.Vb(55,"p"),p.Pc(56,"\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"),p.Ub(),p.Wb(),p.Ub(),p.Ub(),p.Vb(57,"nz-code-box",23),p.Qb(58,"nz-demo-back-top-target",21),p.Vb(59,"div",22),p.Pb(),p.Vb(60,"p"),p.Pc(61,"\u8bbe\u7f6e "),p.Vb(62,"code"),p.Pc(63,"nzTarget"),p.Ub(),p.Pc(64," \u53c2\u6570\uff0c\u5141\u8bb8\u5bf9\u67d0\u4e2a\u5bb9\u5668\u8fd4\u56de\u9876\u90e8\u3002"),p.Ub(),p.Wb(),p.Ub(),p.Ub(),p.Ub(),p.Vb(65,"div",19),p.Vb(66,"nz-code-box",24),p.Qb(67,"nz-demo-back-top-custom",21),p.Vb(68,"div",22),p.Pb(),p.Vb(69,"p"),p.Pc(70,"\u53ef\u4ee5\u81ea\u5b9a\u4e49\u56de\u5230\u9876\u90e8\u6309\u94ae\u7684\u6837\u5f0f\uff0c\u9650\u5236\u5bbd\u9ad8\uff1a"),p.Vb(71,"code"),p.Pc(72,"40px * 40px"),p.Ub(),p.Pc(73,"\u3002"),p.Ub(),p.Wb(),p.Ub(),p.Ub(),p.Ub(),p.Ub(),p.Vb(74,"section",25),p.Pb(),p.Vb(75,"h2",26),p.Vb(76,"span"),p.Pc(77,"API"),p.Ub(),p.Vb(78,"a",27),p.Pc(79,"#"),p.Ub(),p.Ub(),p.Vb(80,"h3",28),p.Vb(81,"span"),p.Pc(82,"nz-back-top"),p.Ub(),p.Vb(83,"label",29),p.Pc(84,"component"),p.Ub(),p.Vb(85,"a",30),p.Pc(86,"#"),p.Ub(),p.Ub(),p.Vb(87,"blockquote"),p.Vb(88,"p"),p.Pc(89,"\u6709\u9ed8\u8ba4\u6837\u5f0f\uff0c\u8ddd\u79bb\u5e95\u90e8 "),p.Vb(90,"code"),p.Pc(91,"50px"),p.Ub(),p.Pc(92,"\uff0c\u53ef\u8986\u76d6\u3002\n\u81ea\u5b9a\u4e49\u6837\u5f0f\u5bbd\u9ad8\u4e0d\u5927\u4e8e "),p.Vb(93,"code"),p.Pc(94,"40px * 40px"),p.Ub(),p.Pc(95,"\u3002"),p.Ub(),p.Ub(),p.Vb(96,"table"),p.Vb(97,"thead"),p.Vb(98,"tr"),p.Vb(99,"th"),p.Pc(100,"\u6210\u5458"),p.Ub(),p.Vb(101,"th"),p.Pc(102,"\u8bf4\u660e"),p.Ub(),p.Vb(103,"th"),p.Pc(104,"\u7c7b\u578b"),p.Ub(),p.Vb(105,"th"),p.Pc(106,"\u9ed8\u8ba4\u503c"),p.Ub(),p.Vb(107,"th"),p.Pc(108,"\u5168\u5c40\u914d\u7f6e"),p.Ub(),p.Ub(),p.Ub(),p.Vb(109,"tbody"),p.Vb(110,"tr"),p.Vb(111,"td"),p.Vb(112,"code"),p.Pc(113,"[nzTemplate]"),p.Ub(),p.Ub(),p.Vb(114,"td"),p.Pc(115,"\u81ea\u5b9a\u4e49\u5185\u5bb9\uff0c\u89c1\u793a\u4f8b"),p.Ub(),p.Vb(116,"td"),p.Vb(117,"code"),p.Pc(118,"TemplateRef<void>"),p.Ub(),p.Ub(),p.Vb(119,"td"),p.Pc(120,"-"),p.Ub(),p.Qb(121,"td"),p.Ub(),p.Vb(122,"tr"),p.Vb(123,"td"),p.Vb(124,"code"),p.Pc(125,"[nzVisibilityHeight]"),p.Ub(),p.Ub(),p.Vb(126,"td"),p.Pc(127,"\u6eda\u52a8\u9ad8\u5ea6\u8fbe\u5230\u6b64\u53c2\u6570\u503c\u624d\u51fa\u73b0 "),p.Vb(128,"code"),p.Pc(129,"nz-back-top"),p.Ub(),p.Ub(),p.Vb(130,"td"),p.Vb(131,"code"),p.Pc(132,"number"),p.Ub(),p.Ub(),p.Vb(133,"td"),p.Vb(134,"code"),p.Pc(135,"400"),p.Ub(),p.Ub(),p.Vb(136,"td"),p.Pc(137,"\u2705"),p.Ub(),p.Ub(),p.Vb(138,"tr"),p.Vb(139,"td"),p.Vb(140,"code"),p.Pc(141,"[nzTarget]"),p.Ub(),p.Ub(),p.Vb(142,"td"),p.Pc(143,"\u8bbe\u7f6e\u9700\u8981\u76d1\u542c\u5176\u6eda\u52a8\u4e8b\u4ef6\u7684\u5143\u7d20\uff0c\u503c\u4e3a\u4e00\u4e2a\u8fd4\u56de\u5bf9\u5e94 DOM \u5143\u7d20\u7684\u51fd\u6570"),p.Ub(),p.Vb(144,"td"),p.Vb(145,"code"),p.Pc(146,"string | Element"),p.Ub(),p.Ub(),p.Vb(147,"td"),p.Vb(148,"code"),p.Pc(149,"window"),p.Ub(),p.Ub(),p.Qb(150,"td"),p.Ub(),p.Vb(151,"tr"),p.Vb(152,"td"),p.Vb(153,"code"),p.Pc(154,"(nzClick)"),p.Ub(),p.Ub(),p.Vb(155,"td"),p.Pc(156,"\u70b9\u51fb\u6309\u94ae\u7684\u56de\u8c03\u51fd\u6570"),p.Ub(),p.Vb(157,"td"),p.Vb(158,"code"),p.Pc(159,"EventEmitter<boolean>"),p.Ub(),p.Ub(),p.Vb(160,"td"),p.Pc(161,"-"),p.Ub(),p.Qb(162,"td"),p.Ub(),p.Ub(),p.Ub(),p.Wb(),p.Ub(),p.Ub()),2&n&&(p.Ab(1),p.pc("nzOffsetTop",16),p.Ab(1),p.pc("nzAffix",!1),p.Ab(48),p.pc("nzGutter",16),p.Ab(1),p.pc("nzXl",12)("nzSpan",24),p.Ab(1),p.pc("nzId","components-back-top-demo-basic")("nzLink","components-back-top-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/back-top/demo/basic.md"),p.Ab(5),p.pc("nzId","components-back-top-demo-target")("nzLink","components-back-top-demo-target")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/back-top/demo/target.md"),p.Ab(8),p.pc("nzXl",12)("nzSpan",24),p.Ab(1),p.pc("nzId","components-back-top-demo-custom")("nzLink","components-back-top-demo-custom")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/back-top/demo/custom.md"))},directives:[I.a,H.a,H.b,U.a,S.d,A.c,A.a,O.a,N,Q,M],encapsulation:2}),E),W=((B=function(){function t(){n(this,t),this.expanded=!1}return e(t,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach((function(t){t.nzExpanded=n.expanded,t.expandCode(n.expanded),t.check()}))}}]),t}()).\u0275fac=function(n){return new(n||B)},B.\u0275cmp=p.Ib({type:B,selectors:[["nz-demo-back-top"]],viewQuery:function(n,t){var e;1&n&&p.Uc(O.a,!0),2&n&&p.yc(e=p.ec())&&(t.codeBoxes=e)},decls:162,vars:19,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-back-top-demo-basic","nzTitle","Basic"],["nzHref","#components-back-top-demo-custom","nzTitle","Custom style"],["nzHref","#components-back-top-demo-target","nzTitle","Using nzTarget"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/back-top/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-back-top-basic","nzGenerateCommand","ng g ng-zorro-antd:back-top-basic <name>","nzComponentName","NzDemoBackTopBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Using nzTarget","nzSelector","nz-demo-back-top-target","nzGenerateCommand","ng g ng-zorro-antd:back-top-target <name>","nzComponentName","NzDemoBackTopTargetComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Custom style","nzSelector","nz-demo-back-top-custom","nzGenerateCommand","ng g ng-zorro-antd:back-top-custom <name>","nzComponentName","NzDemoBackTopCustomComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-back-top"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-back-top'",1,"anchor"]],template:function(n,t){1&n&&(p.Vb(0,"article"),p.Vb(1,"nz-affix",0),p.Vb(2,"nz-anchor",1),p.dc("nzClick",(function(n){return t.goLink(n)})),p.Qb(3,"nz-link",2),p.Qb(4,"nz-link",3),p.Qb(5,"nz-link",4),p.Qb(6,"nz-link",5),p.Ub(),p.Ub(),p.Vb(7,"section",6),p.Vb(8,"h1"),p.Pc(9,"BackTop"),p.Qb(10,"span",7),p.Qb(11,"span",8),p.Vb(12,"a",9),p.Qb(13,"i",10),p.Ub(),p.Ub(),p.Vb(14,"section",6),p.Pb(),p.Vb(15,"p"),p.Vb(16,"code"),p.Pc(17,"nz-back-top"),p.Ub(),p.Pc(18," makes it easy to go back to the top of the page."),p.Ub(),p.Vb(19,"h2",11),p.Vb(20,"span"),p.Pc(21,"When To Use"),p.Ub(),p.Vb(22,"a",12),p.Pc(23,"#"),p.Ub(),p.Ub(),p.Vb(24,"ul"),p.Vb(25,"li"),p.Pc(26,"When the page content is very long."),p.Ub(),p.Vb(27,"li"),p.Pc(28,"When you need to go back to the top very frequently in order to view the contents."),p.Ub(),p.Ub(),p.Vb(29,"pre",13),p.Vb(30,"code"),p.Vb(31,"span",14),p.Pc(32,"import"),p.Ub(),p.Pc(33," "),p.Vb(34,"span",15),p.Pc(35,"{"),p.Ub(),p.Pc(36," NzBackTopModule "),p.Vb(37,"span",15),p.Pc(38,"}"),p.Ub(),p.Pc(39," "),p.Vb(40,"span",14),p.Pc(41,"from"),p.Ub(),p.Pc(42," "),p.Vb(43,"span",16),p.Pc(44,"'ng-zorro-antd/back-top'"),p.Ub(),p.Vb(45,"span",15),p.Pc(46,";"),p.Ub(),p.Ub(),p.Ub(),p.Wb(),p.Ub(),p.Vb(47,"h2"),p.Vb(48,"span"),p.Pc(49,"Examples"),p.Ub(),p.Vb(50,"i",17),p.dc("click",(function(){return t.expandAllCode()})),p.Ub(),p.Ub(),p.Ub(),p.Vb(51,"div",18),p.Vb(52,"div",19),p.Vb(53,"nz-code-box",20),p.Qb(54,"nz-demo-back-top-basic",21),p.Vb(55,"div",22),p.Pb(),p.Vb(56,"p"),p.Pc(57,"The most basic usage."),p.Ub(),p.Wb(),p.Ub(),p.Ub(),p.Vb(58,"nz-code-box",23),p.Qb(59,"nz-demo-back-top-target",21),p.Vb(60,"div",22),p.Pb(),p.Vb(61,"p"),p.Pc(62,"specifies the scrollable area dom node."),p.Ub(),p.Wb(),p.Ub(),p.Ub(),p.Ub(),p.Vb(63,"div",19),p.Vb(64,"nz-code-box",24),p.Qb(65,"nz-demo-back-top-custom",21),p.Vb(66,"div",22),p.Pb(),p.Vb(67,"p"),p.Pc(68,"You can customize the style of the button, just note the size limit: no more than "),p.Vb(69,"code"),p.Pc(70,"40px * 40px"),p.Ub(),p.Pc(71,"."),p.Ub(),p.Wb(),p.Ub(),p.Ub(),p.Ub(),p.Ub(),p.Vb(72,"section",25),p.Pb(),p.Vb(73,"h2",26),p.Vb(74,"span"),p.Pc(75,"API"),p.Ub(),p.Vb(76,"a",27),p.Pc(77,"#"),p.Ub(),p.Ub(),p.Vb(78,"h3",28),p.Vb(79,"span"),p.Pc(80,"nz-back-top"),p.Ub(),p.Vb(81,"label",29),p.Pc(82,"component"),p.Ub(),p.Vb(83,"a",30),p.Pc(84,"#"),p.Ub(),p.Ub(),p.Vb(85,"blockquote"),p.Vb(86,"p"),p.Pc(87,"The distance to the bottom is set to "),p.Vb(88,"code"),p.Pc(89,"50px"),p.Ub(),p.Pc(90," by default, which is overridable.\nIf you decide to use custom styles, please note the size limit: no more than "),p.Vb(91,"code"),p.Pc(92,"40px * 40px"),p.Ub(),p.Pc(93,"."),p.Ub(),p.Ub(),p.Vb(94,"table"),p.Vb(95,"thead"),p.Vb(96,"tr"),p.Vb(97,"th"),p.Pc(98,"Property"),p.Ub(),p.Vb(99,"th"),p.Pc(100,"Description"),p.Ub(),p.Vb(101,"th"),p.Pc(102,"Type"),p.Ub(),p.Vb(103,"th"),p.Pc(104,"Default"),p.Ub(),p.Vb(105,"th"),p.Pc(106,"Global Config"),p.Ub(),p.Ub(),p.Ub(),p.Vb(107,"tbody"),p.Vb(108,"tr"),p.Vb(109,"td"),p.Vb(110,"code"),p.Pc(111,"[nzTemplate]"),p.Ub(),p.Ub(),p.Vb(112,"td"),p.Pc(113,"custom content"),p.Ub(),p.Vb(114,"td"),p.Vb(115,"code"),p.Pc(116,"TemplateRef<void>"),p.Ub(),p.Ub(),p.Vb(117,"td"),p.Pc(118,"-"),p.Ub(),p.Qb(119,"td"),p.Ub(),p.Vb(120,"tr"),p.Vb(121,"td"),p.Vb(122,"code"),p.Pc(123,"[nzVisibilityHeight]"),p.Ub(),p.Ub(),p.Vb(124,"td"),p.Pc(125,"the "),p.Vb(126,"code"),p.Pc(127,"nz-back-top"),p.Ub(),p.Pc(128," button will not show until the scroll height reaches this value"),p.Ub(),p.Vb(129,"td"),p.Vb(130,"code"),p.Pc(131,"number"),p.Ub(),p.Ub(),p.Vb(132,"td"),p.Vb(133,"code"),p.Pc(134,"400"),p.Ub(),p.Ub(),p.Vb(135,"td"),p.Pc(136,"\u2705"),p.Ub(),p.Ub(),p.Vb(137,"tr"),p.Vb(138,"td"),p.Vb(139,"code"),p.Pc(140,"[nzTarget]"),p.Ub(),p.Ub(),p.Vb(141,"td"),p.Pc(142,"specifies the scrollable area dom node"),p.Ub(),p.Vb(143,"td"),p.Vb(144,"code"),p.Pc(145,"string | Element"),p.Ub(),p.Ub(),p.Vb(146,"td"),p.Vb(147,"code"),p.Pc(148,"window"),p.Ub(),p.Ub(),p.Qb(149,"td"),p.Ub(),p.Vb(150,"tr"),p.Vb(151,"td"),p.Vb(152,"code"),p.Pc(153,"(nzClick)"),p.Ub(),p.Ub(),p.Vb(154,"td"),p.Pc(155,"a callback function, which can be executed when you click the button"),p.Ub(),p.Vb(156,"td"),p.Vb(157,"code"),p.Pc(158,"EventEmitter<boolean>"),p.Ub(),p.Ub(),p.Vb(159,"td"),p.Pc(160,"-"),p.Ub(),p.Qb(161,"td"),p.Ub(),p.Ub(),p.Ub(),p.Wb(),p.Ub(),p.Ub()),2&n&&(p.Ab(1),p.pc("nzOffsetTop",16),p.Ab(1),p.pc("nzAffix",!1),p.Ab(49),p.pc("nzGutter",16),p.Ab(1),p.pc("nzXl",12)("nzSpan",24),p.Ab(1),p.pc("nzId","components-back-top-demo-basic")("nzLink","components-back-top-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/back-top/demo/basic.md"),p.Ab(5),p.pc("nzId","components-back-top-demo-target")("nzLink","components-back-top-demo-target")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/back-top/demo/target.md"),p.Ab(5),p.pc("nzXl",12)("nzSpan",24),p.Ab(1),p.pc("nzId","components-back-top-demo-custom")("nzLink","components-back-top-demo-custom")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/back-top/demo/custom.md"))},directives:[I.a,H.a,H.b,U.a,S.d,A.c,A.a,O.a,N,Q,M],encapsulation:2}),B),j=((L=function t(){n(this,t)}).\u0275mod=p.Mb({type:L}),L.\u0275inj=p.Lb({factory:function(n){return new(n||L)},imports:[[i.a].concat(C,[b.h.forChild([{path:"en",component:W},{path:"zh",component:D}])])]}),L)}}])}();