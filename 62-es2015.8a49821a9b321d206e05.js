(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{ySfe:function(t,n,e){"use strict";e.r(n),e.d(n,"NzDemoBackTopModule",function(){return B});var o=e("tyNb"),b=e("WGB2"),c=e("mrSG"),i=e("cH1L"),a=e("nLfN"),r=e("ofXK"),s=e("fXoL"),d=e("eczo"),l=e("8IHs"),p=e("d1+9"),z=e("XNiG"),m=e("xgIS"),h=e("1G5W"),X=e("gcYM"),W=e("MOHP"),g=e("amOf");function u(t,n){1&t&&(s.Xb(0,"div",4),s.Xb(1,"div",5),s.Sb(2,"i",6),s.Wb(),s.Wb())}function k(t,n){}function f(t,n){if(1&t){const t=s.Zb();s.Xb(0,"div",1),s.fc("click",function(){return s.Ec(t),s.jc().clickBackTop()}),s.Nc(1,u,3,0,"ng-template",null,2,s.Oc),s.Nc(3,k,0,0,"ng-template",3),s.Wb()}if(2&t){const t=s.Bc(2),n=s.jc();s.Ib("ant-back-top-rtl","rtl"===n.dir),s.rc("@fadeMotion",void 0),s.Cb(3),s.rc("ngTemplateOutlet",n.nzTemplate||t)}}let P=(()=>{class t{constructor(t,n,e,o,b,c,i,a){this.doc=t,this.nzConfigService=n,this.scrollSrv=e,this.platform=o,this.cd=b,this.zone=c,this.cdr=i,this.directionality=a,this._nzModuleName="backTop",this.scrollListenerDestroy$=new z.a,this.destroy$=new z.a,this.target=null,this.visible=!1,this.dir="ltr",this.nzVisibilityHeight=400,this.nzDuration=450,this.nzClick=new s.n,this.dir=this.directionality.value}ngOnInit(){var t;this.registerScrollEvent(),null===(t=this.directionality.change)||void 0===t||t.pipe(Object(h.a)(this.destroy$)).subscribe(t=>{this.dir=t,this.cdr.detectChanges()}),this.dir=this.directionality.value}clickBackTop(){this.scrollSrv.scrollTo(this.getTarget(),0,{duration:this.nzDuration}),this.nzClick.emit(!0)}getTarget(){return this.target||window}handleScroll(){this.visible!==this.scrollSrv.getScroll(this.getTarget())>this.nzVisibilityHeight&&(this.visible=!this.visible,this.cd.detectChanges())}registerScrollEvent(){this.platform.isBrowser&&(this.scrollListenerDestroy$.next(),this.handleScroll(),this.zone.runOutsideAngular(()=>{Object(m.a)(this.getTarget(),"scroll").pipe(Object(X.a)(50),Object(h.a)(this.scrollListenerDestroy$)).subscribe(()=>this.handleScroll())}))}ngOnDestroy(){this.scrollListenerDestroy$.next(),this.scrollListenerDestroy$.complete(),this.destroy$.next(),this.destroy$.complete()}ngOnChanges(t){const{nzTarget:n}=t;n&&(this.target="string"==typeof this.nzTarget?this.doc.querySelector(this.nzTarget):this.nzTarget,this.registerScrollEvent())}}return t.\u0275fac=function(n){return new(n||t)(s.Qb(r.d),s.Qb(l.b),s.Qb(g.e),s.Qb(a.a),s.Qb(s.h),s.Qb(s.A),s.Qb(s.h),s.Qb(i.c,8))},t.\u0275cmp=s.Kb({type:t,selectors:[["nz-back-top"]],inputs:{nzVisibilityHeight:"nzVisibilityHeight",nzDuration:"nzDuration",nzTemplate:"nzTemplate",nzTarget:"nzTarget"},outputs:{nzClick:"nzClick"},exportAs:["nzBackTop"],features:[s.Ab],decls:1,vars:1,consts:[["class","ant-back-top",3,"ant-back-top-rtl","click",4,"ngIf"],[1,"ant-back-top",3,"click"],["defaultContent",""],[3,"ngTemplateOutlet"],[1,"ant-back-top-content"],[1,"ant-back-top-icon"],["nz-icon","","nzType","vertical-align-top"]],template:function(t,n){1&t&&s.Nc(0,f,4,4,"div",0),2&t&&s.rc("ngIf",n.visible)},directives:[r.o,r.t,W.a],encapsulation:2,data:{animation:[d.b]},changeDetection:0}),Object(c.b)([Object(l.c)(),Object(p.b)(),Object(c.c)("design:type",Number)],t.prototype,"nzVisibilityHeight",void 0),Object(c.b)([Object(p.b)(),Object(c.c)("design:type",Number)],t.prototype,"nzDuration",void 0),t})();const T=[(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({imports:[[i.a,r.c,a.b,W.b]]}),t})()];var y=e("rKiv"),C=e("utH8"),v=e("l83q"),x=e("pk25"),w=e("T+9E");let S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["nz-demo-back-top-basic"]],decls:5,vars:0,template:function(t,n){1&t&&(s.Sb(0,"nz-back-top"),s.Pc(1," Scroll down to see the bottom-right "),s.Xb(2,"strong"),s.Pc(3," gray "),s.Wb(),s.Pc(4," button. "))},directives:[P],styles:["strong[_ngcontent-%COMP%] {\n        color: rgba(64, 64, 64, 0.6);\n      }"]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["nz-demo-back-top-target"]],decls:8,vars:1,consts:[[1,"long-div"],["divTarget",""],[1,"long-div-inner"],[3,"nzTarget"]],template:function(t,n){if(1&t&&(s.Pc(0," Scroll down to see the bottom-right "),s.Xb(1,"strong"),s.Pc(2,"gray"),s.Wb(),s.Pc(3," button. "),s.Xb(4,"div",0,1),s.Sb(6,"div",2),s.Sb(7,"nz-back-top",3),s.Wb()),2&t){const t=s.Bc(5);s.Cb(7),s.rc("nzTarget",t)}},directives:[P],styles:["[_nghost-%COMP%]     .long-div {\n        height: 300px;\n        overflow-y: scroll;\n        background-image: url(//zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg);\n      }\n\n      [_nghost-%COMP%]     .long-div-inner {\n        height: 1500px;\n      }\n\n      [_nghost-%COMP%]     .long-div .ant-back-top {\n        right: 150px;\n      }\n\n      [_nghost-%COMP%]     .long-div .ant-back-top-rtl {\n        right: unset;\n        left: 150px;\n      }\n\n      [_nghost-%COMP%]     strong {\n        color: rgba(64, 64, 64, 0.6);\n      }"]}),t})();function I(t,n){1&t&&(s.Xb(0,"div",2),s.Pc(1,"UP"),s.Wb())}let H=(()=>{class t{notify(){console.log("notify")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["nz-demo-back-top-custom"]],decls:7,vars:2,consts:[[3,"nzTemplate","nzVisibilityHeight","nzOnClick"],["tpl",""],[1,"ant-back-top-inner"]],template:function(t,n){if(1&t&&(s.Xb(0,"nz-back-top",0),s.fc("nzOnClick",function(){return n.notify()}),s.Nc(1,I,2,0,"ng-template",null,1,s.Oc),s.Wb(),s.Pc(3," Scroll down to see the bottom-right "),s.Xb(4,"strong"),s.Pc(5," blue "),s.Wb(),s.Pc(6," button. ")),2&t){const t=s.Bc(2);s.rc("nzTemplate",t)("nzVisibilityHeight",100)}},directives:[P],styles:["[_nghost-%COMP%]     .ant-back-top {\n        bottom: 100px;\n      }\n\n      [_nghost-%COMP%]     .ant-back-top-inner {\n        height: 40px;\n        width: 40px;\n        line-height: 40px;\n        border-radius: 4px;\n        background-color: #1088e9;\n        color: #fff;\n        text-align: center;\n        font-size: 20px;\n      }\n\n      [_nghost-%COMP%]     strong {\n        color: #1088e9;\n      }"]}),t})(),N=(()=>{class t{constructor(){this.expanded=!1}goLink(t){window&&(window.location.hash=t)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(t=>{t.nzExpanded=this.expanded,t.expandCode(this.expanded),t.check()})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["nz-demo-back-top"]],viewQuery:function(t,n){if(1&t&&s.Uc(y.a,1),2&t){let t;s.Ac(t=s.gc())&&(n.codeBoxes=t)}},decls:176,vars:19,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-back-top-demo-basic","nzTitle","\u57fa\u672c"],["nzHref","#components-back-top-demo-custom","nzTitle","\u81ea\u5b9a\u4e49\u6837\u5f0f"],["nzHref","#components-back-top-demo-target","nzTitle","\u6eda\u52a8\u5bb9\u5668"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/back-top/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c","nzSelector","nz-demo-back-top-basic","nzGenerateCommand","ng g ng-zorro-antd:back-top-basic <name>","nzComponentName","NzDemoBackTopBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u6eda\u52a8\u5bb9\u5668","nzSelector","nz-demo-back-top-target","nzGenerateCommand","ng g ng-zorro-antd:back-top-target <name>","nzComponentName","NzDemoBackTopTargetComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u81ea\u5b9a\u4e49\u6837\u5f0f","nzSelector","nz-demo-back-top-custom","nzGenerateCommand","ng g ng-zorro-antd:back-top-custom <name>","nzComponentName","NzDemoBackTopCustomComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-back-top"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-back-top'",1,"anchor"]],template:function(t,n){1&t&&(s.Xb(0,"article"),s.Xb(1,"nz-affix",0),s.Xb(2,"nz-anchor",1),s.fc("nzClick",function(t){return n.goLink(t)}),s.Sb(3,"nz-link",2),s.Sb(4,"nz-link",3),s.Sb(5,"nz-link",4),s.Sb(6,"nz-link",5),s.Wb(),s.Wb(),s.Xb(7,"section",6),s.Xb(8,"h1"),s.Pc(9,"BackTop"),s.Xb(10,"span",7),s.Pc(11,"\u56de\u5230\u9876\u90e8"),s.Wb(),s.Sb(12,"span",8),s.Xb(13,"a",9),s.Sb(14,"i",10),s.Wb(),s.Wb(),s.Xb(15,"section",6),s.Rb(),s.Xb(16,"p"),s.Pc(17,"\u8fd4\u56de\u9875\u9762\u9876\u90e8\u7684\u64cd\u4f5c\u6309\u94ae\u3002"),s.Wb(),s.Xb(18,"h2",11),s.Xb(19,"span"),s.Pc(20,"\u4f55\u65f6\u4f7f\u7528"),s.Wb(),s.Xb(21,"a",12),s.Pc(22,"#"),s.Wb(),s.Wb(),s.Xb(23,"ul"),s.Xb(24,"li"),s.Pc(25," \u5f53\u9875\u9762\u5185\u5bb9\u533a\u57df\u6bd4\u8f83\u957f\u65f6\uff1b"),s.Wb(),s.Xb(26,"li"),s.Pc(27," \u5f53\u7528\u6237\u9700\u8981\u9891\u7e41\u8fd4\u56de\u9876\u90e8\u67e5\u770b\u76f8\u5173\u5185\u5bb9\u65f6\u3002"),s.Wb(),s.Wb(),s.Xb(28,"pre",13),s.Xb(29,"code"),s.Xb(30,"span",14),s.Pc(31,"import"),s.Wb(),s.Pc(32," "),s.Xb(33,"span",15),s.Pc(34,"{"),s.Wb(),s.Pc(35," NzBackTopModule "),s.Xb(36,"span",15),s.Pc(37,"}"),s.Wb(),s.Pc(38," "),s.Xb(39,"span",14),s.Pc(40,"from"),s.Wb(),s.Pc(41," "),s.Xb(42,"span",16),s.Pc(43,"'ng-zorro-antd/back-top'"),s.Wb(),s.Xb(44,"span",15),s.Pc(45,";"),s.Wb(),s.Wb(),s.Wb(),s.Yb(),s.Wb(),s.Xb(46,"h2"),s.Xb(47,"span"),s.Pc(48,"\u4ee3\u7801\u6f14\u793a"),s.Wb(),s.Xb(49,"i",17),s.fc("click",function(){return n.expandAllCode()}),s.Wb(),s.Wb(),s.Wb(),s.Xb(50,"div",18),s.Xb(51,"div",19),s.Xb(52,"nz-code-box",20),s.Sb(53,"nz-demo-back-top-basic",21),s.Xb(54,"div",22),s.Rb(),s.Xb(55,"p"),s.Pc(56,"\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"),s.Wb(),s.Yb(),s.Wb(),s.Wb(),s.Xb(57,"nz-code-box",23),s.Sb(58,"nz-demo-back-top-target",21),s.Xb(59,"div",22),s.Rb(),s.Xb(60,"p"),s.Pc(61,"\u8bbe\u7f6e "),s.Xb(62,"code"),s.Pc(63,"nzTarget"),s.Wb(),s.Pc(64," \u53c2\u6570\uff0c\u5141\u8bb8\u5bf9\u67d0\u4e2a\u5bb9\u5668\u8fd4\u56de\u9876\u90e8\u3002"),s.Wb(),s.Yb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(65,"div",19),s.Xb(66,"nz-code-box",24),s.Sb(67,"nz-demo-back-top-custom",21),s.Xb(68,"div",22),s.Rb(),s.Xb(69,"p"),s.Pc(70,"\u53ef\u4ee5\u81ea\u5b9a\u4e49\u56de\u5230\u9876\u90e8\u6309\u94ae\u7684\u6837\u5f0f\uff0c\u9650\u5236\u5bbd\u9ad8\uff1a"),s.Xb(71,"code"),s.Pc(72,"40px * 40px"),s.Wb(),s.Pc(73,"\u3002"),s.Wb(),s.Yb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(74,"section",25),s.Rb(),s.Xb(75,"h2",26),s.Xb(76,"span"),s.Pc(77,"API"),s.Wb(),s.Xb(78,"a",27),s.Pc(79,"#"),s.Wb(),s.Wb(),s.Xb(80,"h3",28),s.Xb(81,"span"),s.Pc(82,"nz-back-top"),s.Wb(),s.Xb(83,"label",29),s.Pc(84,"component"),s.Wb(),s.Xb(85,"a",30),s.Pc(86,"#"),s.Wb(),s.Wb(),s.Xb(87,"blockquote"),s.Xb(88,"p"),s.Pc(89,"\u6709\u9ed8\u8ba4\u6837\u5f0f\uff0c\u8ddd\u79bb\u5e95\u90e8 "),s.Xb(90,"code"),s.Pc(91,"50px"),s.Wb(),s.Pc(92,"\uff0c\u53ef\u8986\u76d6\u3002\n\u81ea\u5b9a\u4e49\u6837\u5f0f\u5bbd\u9ad8\u4e0d\u5927\u4e8e "),s.Xb(93,"code"),s.Pc(94,"40px * 40px"),s.Wb(),s.Pc(95,"\u3002"),s.Wb(),s.Wb(),s.Xb(96,"table"),s.Xb(97,"thead"),s.Xb(98,"tr"),s.Xb(99,"th"),s.Pc(100,"\u6210\u5458"),s.Wb(),s.Xb(101,"th"),s.Pc(102,"\u8bf4\u660e"),s.Wb(),s.Xb(103,"th"),s.Pc(104,"\u7c7b\u578b"),s.Wb(),s.Xb(105,"th"),s.Pc(106,"\u9ed8\u8ba4\u503c"),s.Wb(),s.Xb(107,"th"),s.Pc(108,"\u5168\u5c40\u914d\u7f6e"),s.Wb(),s.Wb(),s.Wb(),s.Xb(109,"tbody"),s.Xb(110,"tr"),s.Xb(111,"td"),s.Xb(112,"code"),s.Pc(113,"[nzTemplate]"),s.Wb(),s.Wb(),s.Xb(114,"td"),s.Pc(115,"\u81ea\u5b9a\u4e49\u5185\u5bb9\uff0c\u89c1\u793a\u4f8b"),s.Wb(),s.Xb(116,"td"),s.Xb(117,"code"),s.Pc(118,"TemplateRef<void>"),s.Wb(),s.Wb(),s.Xb(119,"td"),s.Pc(120,"-"),s.Wb(),s.Sb(121,"td"),s.Wb(),s.Xb(122,"tr"),s.Xb(123,"td"),s.Xb(124,"code"),s.Pc(125,"[nzVisibilityHeight]"),s.Wb(),s.Wb(),s.Xb(126,"td"),s.Pc(127,"\u6eda\u52a8\u9ad8\u5ea6\u8fbe\u5230\u6b64\u53c2\u6570\u503c\u624d\u51fa\u73b0 "),s.Xb(128,"code"),s.Pc(129,"nz-back-top"),s.Wb(),s.Wb(),s.Xb(130,"td"),s.Xb(131,"code"),s.Pc(132,"number"),s.Wb(),s.Wb(),s.Xb(133,"td"),s.Xb(134,"code"),s.Pc(135,"400"),s.Wb(),s.Wb(),s.Xb(136,"td"),s.Pc(137,"\u2705"),s.Wb(),s.Wb(),s.Xb(138,"tr"),s.Xb(139,"td"),s.Xb(140,"code"),s.Pc(141,"[nzTarget]"),s.Wb(),s.Wb(),s.Xb(142,"td"),s.Pc(143,"\u8bbe\u7f6e\u9700\u8981\u76d1\u542c\u5176\u6eda\u52a8\u4e8b\u4ef6\u7684\u5143\u7d20\uff0c\u503c\u4e3a\u4e00\u4e2a\u8fd4\u56de\u5bf9\u5e94 DOM \u5143\u7d20\u7684\u51fd\u6570"),s.Wb(),s.Xb(144,"td"),s.Xb(145,"code"),s.Pc(146,"string | Element"),s.Wb(),s.Wb(),s.Xb(147,"td"),s.Xb(148,"code"),s.Pc(149,"window"),s.Wb(),s.Wb(),s.Sb(150,"td"),s.Wb(),s.Xb(151,"tr"),s.Xb(152,"td"),s.Xb(153,"code"),s.Pc(154,"[nzDuration]"),s.Wb(),s.Wb(),s.Xb(155,"td"),s.Pc(156,"\u56de\u5230\u9876\u90e8\u6240\u9700\u65f6\u95f4\uff08ms\uff09"),s.Wb(),s.Xb(157,"td"),s.Xb(158,"code"),s.Pc(159,"number"),s.Wb(),s.Wb(),s.Xb(160,"td"),s.Xb(161,"code"),s.Pc(162,"450"),s.Wb(),s.Wb(),s.Sb(163,"td"),s.Wb(),s.Xb(164,"tr"),s.Xb(165,"td"),s.Xb(166,"code"),s.Pc(167,"(nzClick)"),s.Wb(),s.Wb(),s.Xb(168,"td"),s.Pc(169,"\u70b9\u51fb\u6309\u94ae\u7684\u56de\u8c03\u51fd\u6570"),s.Wb(),s.Xb(170,"td"),s.Xb(171,"code"),s.Pc(172,"EventEmitter<boolean>"),s.Wb(),s.Wb(),s.Xb(173,"td"),s.Pc(174,"-"),s.Wb(),s.Sb(175,"td"),s.Wb(),s.Wb(),s.Wb(),s.Yb(),s.Wb(),s.Wb()),2&t&&(s.Cb(1),s.rc("nzOffsetTop",16),s.Cb(1),s.rc("nzAffix",!1),s.Cb(48),s.rc("nzGutter",16),s.Cb(1),s.rc("nzXl",12)("nzSpan",24),s.Cb(1),s.rc("nzId","components-back-top-demo-basic")("nzLink","components-back-top-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/back-top/demo/basic.md"),s.Cb(5),s.rc("nzId","components-back-top-demo-target")("nzLink","components-back-top-demo-target")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/back-top/demo/target.md"),s.Cb(8),s.rc("nzXl",12)("nzSpan",24),s.Cb(1),s.rc("nzId","components-back-top-demo-custom")("nzLink","components-back-top-demo-custom")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/back-top/demo/custom.md"))},directives:[C.a,v.a,v.b,W.a,x.d,w.c,w.a,y.a,S,O,H],encapsulation:2}),t})(),R=(()=>{class t{constructor(){this.expanded=!1}goLink(t){window&&(window.location.hash=t)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(t=>{t.nzExpanded=this.expanded,t.expandCode(this.expanded),t.check()})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["nz-demo-back-top"]],viewQuery:function(t,n){if(1&t&&s.Uc(y.a,1),2&t){let t;s.Ac(t=s.gc())&&(n.codeBoxes=t)}},decls:175,vars:19,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-back-top-demo-basic","nzTitle","Basic"],["nzHref","#components-back-top-demo-custom","nzTitle","Custom style"],["nzHref","#components-back-top-demo-target","nzTitle","Using nzTarget"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/back-top/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-back-top-basic","nzGenerateCommand","ng g ng-zorro-antd:back-top-basic <name>","nzComponentName","NzDemoBackTopBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Using nzTarget","nzSelector","nz-demo-back-top-target","nzGenerateCommand","ng g ng-zorro-antd:back-top-target <name>","nzComponentName","NzDemoBackTopTargetComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Custom style","nzSelector","nz-demo-back-top-custom","nzGenerateCommand","ng g ng-zorro-antd:back-top-custom <name>","nzComponentName","NzDemoBackTopCustomComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-back-top"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-back-top'",1,"anchor"]],template:function(t,n){1&t&&(s.Xb(0,"article"),s.Xb(1,"nz-affix",0),s.Xb(2,"nz-anchor",1),s.fc("nzClick",function(t){return n.goLink(t)}),s.Sb(3,"nz-link",2),s.Sb(4,"nz-link",3),s.Sb(5,"nz-link",4),s.Sb(6,"nz-link",5),s.Wb(),s.Wb(),s.Xb(7,"section",6),s.Xb(8,"h1"),s.Pc(9,"BackTop"),s.Sb(10,"span",7),s.Sb(11,"span",8),s.Xb(12,"a",9),s.Sb(13,"i",10),s.Wb(),s.Wb(),s.Xb(14,"section",6),s.Rb(),s.Xb(15,"p"),s.Xb(16,"code"),s.Pc(17,"nz-back-top"),s.Wb(),s.Pc(18," makes it easy to go back to the top of the page."),s.Wb(),s.Xb(19,"h2",11),s.Xb(20,"span"),s.Pc(21,"When To Use"),s.Wb(),s.Xb(22,"a",12),s.Pc(23,"#"),s.Wb(),s.Wb(),s.Xb(24,"ul"),s.Xb(25,"li"),s.Pc(26," When the page content is very long."),s.Wb(),s.Xb(27,"li"),s.Pc(28," When you need to go back to the top very frequently in order to view the contents."),s.Wb(),s.Wb(),s.Xb(29,"pre",13),s.Xb(30,"code"),s.Xb(31,"span",14),s.Pc(32,"import"),s.Wb(),s.Pc(33," "),s.Xb(34,"span",15),s.Pc(35,"{"),s.Wb(),s.Pc(36," NzBackTopModule "),s.Xb(37,"span",15),s.Pc(38,"}"),s.Wb(),s.Pc(39," "),s.Xb(40,"span",14),s.Pc(41,"from"),s.Wb(),s.Pc(42," "),s.Xb(43,"span",16),s.Pc(44,"'ng-zorro-antd/back-top'"),s.Wb(),s.Xb(45,"span",15),s.Pc(46,";"),s.Wb(),s.Wb(),s.Wb(),s.Yb(),s.Wb(),s.Xb(47,"h2"),s.Xb(48,"span"),s.Pc(49,"Examples"),s.Wb(),s.Xb(50,"i",17),s.fc("click",function(){return n.expandAllCode()}),s.Wb(),s.Wb(),s.Wb(),s.Xb(51,"div",18),s.Xb(52,"div",19),s.Xb(53,"nz-code-box",20),s.Sb(54,"nz-demo-back-top-basic",21),s.Xb(55,"div",22),s.Rb(),s.Xb(56,"p"),s.Pc(57,"The most basic usage."),s.Wb(),s.Yb(),s.Wb(),s.Wb(),s.Xb(58,"nz-code-box",23),s.Sb(59,"nz-demo-back-top-target",21),s.Xb(60,"div",22),s.Rb(),s.Xb(61,"p"),s.Pc(62,"specifies the scrollable area dom node."),s.Wb(),s.Yb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(63,"div",19),s.Xb(64,"nz-code-box",24),s.Sb(65,"nz-demo-back-top-custom",21),s.Xb(66,"div",22),s.Rb(),s.Xb(67,"p"),s.Pc(68,"You can customize the style of the button, just note the size limit: no more than "),s.Xb(69,"code"),s.Pc(70,"40px * 40px"),s.Wb(),s.Pc(71,"."),s.Wb(),s.Yb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(72,"section",25),s.Rb(),s.Xb(73,"h2",26),s.Xb(74,"span"),s.Pc(75,"API"),s.Wb(),s.Xb(76,"a",27),s.Pc(77,"#"),s.Wb(),s.Wb(),s.Xb(78,"h3",28),s.Xb(79,"span"),s.Pc(80,"nz-back-top"),s.Wb(),s.Xb(81,"label",29),s.Pc(82,"component"),s.Wb(),s.Xb(83,"a",30),s.Pc(84,"#"),s.Wb(),s.Wb(),s.Xb(85,"blockquote"),s.Xb(86,"p"),s.Pc(87,"The distance to the bottom is set to "),s.Xb(88,"code"),s.Pc(89,"50px"),s.Wb(),s.Pc(90," by default, which is overridable.\nIf you decide to use custom styles, please note the size limit: no more than "),s.Xb(91,"code"),s.Pc(92,"40px * 40px"),s.Wb(),s.Pc(93,"."),s.Wb(),s.Wb(),s.Xb(94,"table"),s.Xb(95,"thead"),s.Xb(96,"tr"),s.Xb(97,"th"),s.Pc(98,"Property"),s.Wb(),s.Xb(99,"th"),s.Pc(100,"Description"),s.Wb(),s.Xb(101,"th"),s.Pc(102,"Type"),s.Wb(),s.Xb(103,"th"),s.Pc(104,"Default"),s.Wb(),s.Xb(105,"th"),s.Pc(106,"Global Config"),s.Wb(),s.Wb(),s.Wb(),s.Xb(107,"tbody"),s.Xb(108,"tr"),s.Xb(109,"td"),s.Xb(110,"code"),s.Pc(111,"[nzTemplate]"),s.Wb(),s.Wb(),s.Xb(112,"td"),s.Pc(113,"custom content"),s.Wb(),s.Xb(114,"td"),s.Xb(115,"code"),s.Pc(116,"TemplateRef<void>"),s.Wb(),s.Wb(),s.Xb(117,"td"),s.Pc(118,"-"),s.Wb(),s.Sb(119,"td"),s.Wb(),s.Xb(120,"tr"),s.Xb(121,"td"),s.Xb(122,"code"),s.Pc(123,"[nzVisibilityHeight]"),s.Wb(),s.Wb(),s.Xb(124,"td"),s.Pc(125,"the "),s.Xb(126,"code"),s.Pc(127,"nz-back-top"),s.Wb(),s.Pc(128," button will not show until the scroll height reaches this value"),s.Wb(),s.Xb(129,"td"),s.Xb(130,"code"),s.Pc(131,"number"),s.Wb(),s.Wb(),s.Xb(132,"td"),s.Xb(133,"code"),s.Pc(134,"400"),s.Wb(),s.Wb(),s.Xb(135,"td"),s.Pc(136,"\u2705"),s.Wb(),s.Wb(),s.Xb(137,"tr"),s.Xb(138,"td"),s.Xb(139,"code"),s.Pc(140,"[nzTarget]"),s.Wb(),s.Wb(),s.Xb(141,"td"),s.Pc(142,"specifies the scrollable area dom node"),s.Wb(),s.Xb(143,"td"),s.Xb(144,"code"),s.Pc(145,"string | Element"),s.Wb(),s.Wb(),s.Xb(146,"td"),s.Xb(147,"code"),s.Pc(148,"window"),s.Wb(),s.Wb(),s.Sb(149,"td"),s.Wb(),s.Xb(150,"tr"),s.Xb(151,"td"),s.Xb(152,"code"),s.Pc(153,"[nzDuration]"),s.Wb(),s.Wb(),s.Xb(154,"td"),s.Pc(155,"Time to return to top (ms)"),s.Wb(),s.Xb(156,"td"),s.Xb(157,"code"),s.Pc(158,"number"),s.Wb(),s.Wb(),s.Xb(159,"td"),s.Xb(160,"code"),s.Pc(161,"450"),s.Wb(),s.Wb(),s.Sb(162,"td"),s.Wb(),s.Xb(163,"tr"),s.Xb(164,"td"),s.Xb(165,"code"),s.Pc(166,"(nzClick)"),s.Wb(),s.Wb(),s.Xb(167,"td"),s.Pc(168,"a callback function, which can be executed when you click the button"),s.Wb(),s.Xb(169,"td"),s.Xb(170,"code"),s.Pc(171,"EventEmitter<boolean>"),s.Wb(),s.Wb(),s.Xb(172,"td"),s.Pc(173,"-"),s.Wb(),s.Sb(174,"td"),s.Wb(),s.Wb(),s.Wb(),s.Yb(),s.Wb(),s.Wb()),2&t&&(s.Cb(1),s.rc("nzOffsetTop",16),s.Cb(1),s.rc("nzAffix",!1),s.Cb(49),s.rc("nzGutter",16),s.Cb(1),s.rc("nzXl",12)("nzSpan",24),s.Cb(1),s.rc("nzId","components-back-top-demo-basic")("nzLink","components-back-top-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/back-top/demo/basic.md"),s.Cb(5),s.rc("nzId","components-back-top-demo-target")("nzLink","components-back-top-demo-target")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/back-top/demo/target.md"),s.Cb(5),s.rc("nzXl",12)("nzSpan",24),s.Cb(1),s.rc("nzId","components-back-top-demo-custom")("nzLink","components-back-top-demo-custom")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/back-top/demo/custom.md"))},directives:[C.a,v.a,v.b,W.a,x.d,w.c,w.a,y.a,S,O,H],encapsulation:2}),t})(),B=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({imports:[[b.a,...T,o.h.forChild([{path:"en",component:R},{path:"zh",component:N}])]]}),t})()}}]);