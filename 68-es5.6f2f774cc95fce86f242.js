!function(){function n(n,e){for(var b=0;b<e.length;b++){var t=e[b];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function e(e,b,t){return b&&n(e.prototype,b),t&&n(e,t),e}function b(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"TB/v":function(n,t,o){"use strict";o.r(t),o.d(t,"NzDemoInputNumberModule",(function(){return G}));var c,i,r,d,a,u,m,p,z,s=o("tyNb"),V=o("WGB2"),l=o("nJzI"),U=o("TZWX"),P=[l.b,U.c],g=o("rKiv"),f=o("fXoL"),h=o("utH8"),I=o("l83q"),k=o("MOHP"),v=o("uLhK"),M=o("pk25"),x=o("T+9E"),C=o("3Pt+"),w=((c=function n(){b(this,n),this.demoValue=3}).\u0275fac=function(n){return new(n||c)},c.\u0275cmp=f.Ib({type:c,selectors:[["nz-demo-input-number-basic"]],decls:1,vars:4,consts:[[3,"ngModel","nzMin","nzMax","nzStep","ngModelChange"]],template:function(n,e){1&n&&(f.Vb(0,"nz-input-number",0),f.dc("ngModelChange",(function(n){return e.demoValue=n})),f.Ub()),2&n&&f.pc("ngModel",e.demoValue)("nzMin",1)("nzMax",10)("nzStep",1)},directives:[l.a,C.p,C.s],encapsulation:2}),c),H=o("vdzw"),N=((z=function(){function n(){b(this,n),this.demoValue=3,this.isDisabled=!1}return e(n,[{key:"toggleDisabled",value:function(){this.isDisabled=!this.isDisabled}}]),n}()).\u0275fac=function(n){return new(n||z)},z.\u0275cmp=f.Ib({type:z,selectors:[["nz-demo-input-number-disabled"]],decls:5,vars:6,consts:[[3,"ngModel","nzMin","nzMax","nzStep","nzDisabled","ngModelChange"],[2,"margin-top","20px"],["nz-button","",3,"nzType","click"]],template:function(n,e){1&n&&(f.Vb(0,"nz-input-number",0),f.dc("ngModelChange",(function(n){return e.demoValue=n})),f.Ub(),f.Vb(1,"div",1),f.Vb(2,"button",2),f.dc("click",(function(){return e.toggleDisabled()})),f.Vb(3,"span"),f.Pc(4,"Toggle Disabled"),f.Ub(),f.Ub(),f.Ub()),2&n&&(f.pc("ngModel",e.demoValue)("nzMin",1)("nzMax",10)("nzStep",1)("nzDisabled",e.isDisabled),f.Ab(2),f.pc("nzType","primary"))},directives:[l.a,C.p,C.s,U.a,H.a,v.a],encapsulation:2}),z),S=((p=function n(){b(this,n),this.demoValue=100,this.formatterPercent=function(n){return n+" %"},this.parserPercent=function(n){return n.replace(" %","")},this.formatterDollar=function(n){return"$ "+n},this.parserDollar=function(n){return n.replace("$ ","")}}).\u0275fac=function(n){return new(n||p)},p.\u0275cmp=f.Ib({type:p,selectors:[["nz-demo-input-number-formatter"]],decls:2,vars:12,consts:[[3,"ngModel","nzMin","nzMax","nzStep","nzFormatter","nzParser","ngModelChange"]],template:function(n,e){1&n&&(f.Vb(0,"nz-input-number",0),f.dc("ngModelChange",(function(n){return e.demoValue=n})),f.Ub(),f.Vb(1,"nz-input-number",0),f.dc("ngModelChange",(function(n){return e.demoValue=n})),f.Ub()),2&n&&(f.pc("ngModel",e.demoValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",e.formatterDollar)("nzParser",e.parserDollar),f.Ab(1),f.pc("ngModel",e.demoValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",e.formatterPercent)("nzParser",e.parserPercent))},directives:[l.a,C.p,C.s],styles:["nz-input-number[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"]}),p),y=((m=function n(){b(this,n),this.demoValue=3}).\u0275fac=function(n){return new(n||m)},m.\u0275cmp=f.Ib({type:m,selectors:[["nz-demo-input-number-size"]],decls:3,vars:14,consts:[[3,"ngModel","nzSize","nzMin","nzMax","nzStep","ngModelChange"],[3,"ngModel","nzMin","nzMax","nzStep","ngModelChange"]],template:function(n,e){1&n&&(f.Vb(0,"nz-input-number",0),f.dc("ngModelChange",(function(n){return e.demoValue=n})),f.Ub(),f.Vb(1,"nz-input-number",1),f.dc("ngModelChange",(function(n){return e.demoValue=n})),f.Ub(),f.Vb(2,"nz-input-number",0),f.dc("ngModelChange",(function(n){return e.demoValue=n})),f.Ub()),2&n&&(f.pc("ngModel",e.demoValue)("nzSize","large")("nzMin",1)("nzMax",10)("nzStep",1),f.Ab(1),f.pc("ngModel",e.demoValue)("nzMin",1)("nzMax",10)("nzStep",1),f.Ab(1),f.pc("ngModel",e.demoValue)("nzSize","small")("nzMin",1)("nzMax",10)("nzStep",1))},directives:[l.a,C.p,C.s],styles:["nz-input-number[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"]}),m),T=((u=function n(){b(this,n),this.demoValue=0}).\u0275fac=function(n){return new(n||u)},u.\u0275cmp=f.Ib({type:u,selectors:[["nz-demo-input-number-digit"]],decls:1,vars:5,consts:[[3,"ngModel","nzMin","nzMax","nzStep","nzPlaceHolder","ngModelChange"]],template:function(n,e){1&n&&(f.Vb(0,"nz-input-number",0),f.dc("ngModelChange",(function(n){return e.demoValue=n})),f.Ub()),2&n&&f.pc("ngModel",e.demoValue)("nzMin",1)("nzMax",10)("nzStep",.1)("nzPlaceHolder","Digital")},directives:[l.a,C.p,C.s],encapsulation:2}),u),A=((a=function(){function n(){b(this,n),this.toFixedValue=2,this.cutValue=2,this.customFnValue=2,this.precision=2}return e(n,[{key:"customPrecisionFn",value:function(n,e){return+Number(n).toFixed(e+1)}}]),n}()).\u0275fac=function(n){return new(n||a)},a.\u0275cmp=f.Ib({type:a,selectors:[["nz-demo-input-number-precision"]],decls:3,vars:7,consts:[["nzPlaceHolder","toFixed",3,"ngModel","nzPrecision","ngModelChange"],["nzPrecisionMode","cut","nzPlaceHolder","cut off",3,"ngModel","nzPrecision","ngModelChange"],["nzPlaceHolder","cut off",3,"ngModel","nzPrecision","nzPrecisionMode","ngModelChange"]],template:function(n,e){1&n&&(f.Vb(0,"nz-input-number",0),f.dc("ngModelChange",(function(n){return e.toFixedValue=n})),f.Ub(),f.Vb(1,"nz-input-number",1),f.dc("ngModelChange",(function(n){return e.cutValue=n})),f.Ub(),f.Vb(2,"nz-input-number",2),f.dc("ngModelChange",(function(n){return e.customFnValue=n})),f.Ub()),2&n&&(f.pc("ngModel",e.toFixedValue)("nzPrecision",e.precision),f.Ab(1),f.pc("ngModel",e.cutValue)("nzPrecision",e.precision),f.Ab(1),f.pc("ngModel",e.customFnValue)("nzPrecision",e.precision)("nzPrecisionMode",e.customPrecisionFn))},directives:[l.a,C.p,C.s],styles:["nz-input-number[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"]}),a),D=((d=function(){function n(){b(this,n),this.expanded=!1}return e(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach((function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()}))}}]),n}()).\u0275fac=function(n){return new(n||d)},d.\u0275cmp=f.Ib({type:d,selectors:[["nz-demo-input-number"]],viewQuery:function(n,e){var b;1&n&&f.Uc(g.a,!0),2&n&&f.yc(b=f.ec())&&(e.codeBoxes=b)},decls:364,vars:31,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-input-number-demo-basic","nzTitle","\u57fa\u672c"],["nzHref","#components-input-number-demo-size","nzTitle","\u4e09\u79cd\u5927\u5c0f"],["nzHref","#components-input-number-demo-disabled","nzTitle","\u4e0d\u53ef\u7528"],["nzHref","#components-input-number-demo-digit","nzTitle","\u5c0f\u6570"],["nzHref","#components-input-number-demo-formatter","nzTitle","\u683c\u5f0f\u5316\u5c55\u793a"],["nzHref","#components-input-number-demo-precision","nzTitle","\u7cbe\u5ea6"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c","nzSelector","nz-demo-input-number-basic","nzGenerateCommand","ng g ng-zorro-antd:input-number-basic <name>","nzComponentName","NzDemoInputNumberBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u4e0d\u53ef\u7528","nzSelector","nz-demo-input-number-disabled","nzGenerateCommand","ng g ng-zorro-antd:input-number-disabled <name>","nzComponentName","NzDemoInputNumberDisabledComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u683c\u5f0f\u5316\u5c55\u793a","nzSelector","nz-demo-input-number-formatter","nzGenerateCommand","ng g ng-zorro-antd:input-number-formatter <name>","nzComponentName","NzDemoInputNumberFormatterComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u4e09\u79cd\u5927\u5c0f","nzSelector","nz-demo-input-number-size","nzGenerateCommand","ng g ng-zorro-antd:input-number-size <name>","nzComponentName","NzDemoInputNumberSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u5c0f\u6570","nzSelector","nz-demo-input-number-digit","nzGenerateCommand","ng g ng-zorro-antd:input-number-digit <name>","nzComponentName","NzDemoInputNumberDigitComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u7cbe\u5ea6","nzSelector","nz-demo-input-number-precision","nzGenerateCommand","ng g ng-zorro-antd:input-number-precision <name>","nzComponentName","NzDemoInputNumberPrecisionComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-input-number"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-input-number'",1,"anchor"],["href","https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode","target","_blank"],["id","\u65b9\u6cd5"],["onclick","window.location.hash = '\u65b9\u6cd5'",1,"anchor"]],template:function(n,e){1&n&&(f.Vb(0,"article"),f.Vb(1,"nz-affix",0),f.Vb(2,"nz-anchor",1),f.dc("nzClick",(function(n){return e.goLink(n)})),f.Qb(3,"nz-link",2),f.Qb(4,"nz-link",3),f.Qb(5,"nz-link",4),f.Qb(6,"nz-link",5),f.Qb(7,"nz-link",6),f.Qb(8,"nz-link",7),f.Qb(9,"nz-link",8),f.Ub(),f.Ub(),f.Vb(10,"section",9),f.Vb(11,"h1"),f.Pc(12,"InputNumber"),f.Vb(13,"span",10),f.Pc(14,"\u6570\u5b57\u8f93\u5165\u6846"),f.Ub(),f.Qb(15,"span",11),f.Vb(16,"a",12),f.Qb(17,"i",13),f.Ub(),f.Ub(),f.Vb(18,"section",9),f.Pb(),f.Vb(19,"p"),f.Pc(20,"\u901a\u8fc7\u9f20\u6807\u6216\u952e\u76d8\uff0c\u8f93\u5165\u8303\u56f4\u5185\u7684\u6570\u503c\u3002"),f.Ub(),f.Vb(21,"h2",14),f.Vb(22,"span"),f.Pc(23,"\u4f55\u65f6\u4f7f\u7528"),f.Ub(),f.Vb(24,"a",15),f.Pc(25,"#"),f.Ub(),f.Ub(),f.Vb(26,"p"),f.Pc(27,"\u5f53\u9700\u8981\u83b7\u53d6\u6807\u51c6\u6570\u503c\u65f6\u3002"),f.Ub(),f.Vb(28,"pre",16),f.Vb(29,"code"),f.Vb(30,"span",17),f.Pc(31,"import"),f.Ub(),f.Pc(32," "),f.Vb(33,"span",18),f.Pc(34,"{"),f.Ub(),f.Pc(35," NzInputNumberModule "),f.Vb(36,"span",18),f.Pc(37,"}"),f.Ub(),f.Pc(38," "),f.Vb(39,"span",17),f.Pc(40,"from"),f.Ub(),f.Pc(41," "),f.Vb(42,"span",19),f.Pc(43,"'ng-zorro-antd/input-number'"),f.Ub(),f.Vb(44,"span",18),f.Pc(45,";"),f.Ub(),f.Ub(),f.Ub(),f.Wb(),f.Ub(),f.Vb(46,"h2"),f.Vb(47,"span"),f.Pc(48,"\u4ee3\u7801\u6f14\u793a"),f.Ub(),f.Vb(49,"i",20),f.dc("click",(function(){return e.expandAllCode()})),f.Ub(),f.Ub(),f.Ub(),f.Vb(50,"div",21),f.Vb(51,"div",22),f.Vb(52,"nz-code-box",23),f.Qb(53,"nz-demo-input-number-basic",24),f.Vb(54,"div",25),f.Pb(),f.Vb(55,"p"),f.Pc(56,"\u6570\u5b57\u8f93\u5165\u6846\u3002"),f.Ub(),f.Wb(),f.Ub(),f.Ub(),f.Vb(57,"nz-code-box",26),f.Qb(58,"nz-demo-input-number-disabled",24),f.Vb(59,"div",25),f.Pb(),f.Vb(60,"p"),f.Pc(61,"\u70b9\u51fb\u6309\u94ae\u5207\u6362\u53ef\u7528\u72b6\u6001\u3002"),f.Ub(),f.Wb(),f.Ub(),f.Ub(),f.Vb(62,"nz-code-box",27),f.Qb(63,"nz-demo-input-number-formatter",24),f.Vb(64,"div",25),f.Pb(),f.Vb(65,"p"),f.Pc(66,"\u901a\u8fc7 "),f.Vb(67,"code"),f.Pc(68,"nzFormatter"),f.Ub(),f.Pc(69," \u683c\u5f0f\u5316\u6570\u5b57\uff0c\u4ee5\u5c55\u793a\u5177\u6709\u5177\u4f53\u542b\u4e49\u7684\u6570\u636e\uff0c\u5f80\u5f80\u9700\u8981\u914d\u5408 "),f.Vb(70,"code"),f.Pc(71,"nzParser"),f.Ub(),f.Pc(72," \u4e00\u8d77\u4f7f\u7528\u3002"),f.Ub(),f.Wb(),f.Ub(),f.Ub(),f.Ub(),f.Vb(73,"div",22),f.Vb(74,"nz-code-box",28),f.Qb(75,"nz-demo-input-number-size",24),f.Vb(76,"div",25),f.Pb(),f.Vb(77,"p"),f.Pc(78,"\u4e09\u79cd\u5927\u5c0f\u7684\u6570\u5b57\u8f93\u5165\u6846\uff0c\u5f53 "),f.Vb(79,"code"),f.Pc(80,"nzSize"),f.Ub(),f.Pc(81," \u5206\u522b\u4e3a "),f.Vb(82,"code"),f.Pc(83,"large"),f.Ub(),f.Pc(84," \u548c "),f.Vb(85,"code"),f.Pc(86,"small"),f.Ub(),f.Pc(87," \u65f6\uff0c\u8f93\u5165\u6846\u9ad8\u5ea6\u4e3a "),f.Vb(88,"code"),f.Pc(89,"40px"),f.Ub(),f.Pc(90," \u548c "),f.Vb(91,"code"),f.Pc(92,"24px"),f.Ub(),f.Pc(93," \uff0c\u9ed8\u8ba4\u9ad8\u5ea6\u4e3a "),f.Vb(94,"code"),f.Pc(95,"32px"),f.Ub(),f.Pc(96,"\u3002"),f.Ub(),f.Wb(),f.Ub(),f.Ub(),f.Vb(97,"nz-code-box",29),f.Qb(98,"nz-demo-input-number-digit",24),f.Vb(99,"div",25),f.Pb(),f.Vb(100,"p"),f.Pc(101,"\u548c\u539f\u751f\u7684\u6570\u5b57\u8f93\u5165\u6846\u4e00\u6837\uff0cvalue \u7684\u7cbe\u5ea6\u7531 "),f.Vb(102,"code"),f.Pc(103,"nzStep"),f.Ub(),f.Pc(104," \u7684\u5c0f\u6570\u4f4d\u6570\u51b3\u5b9a\u3002"),f.Ub(),f.Wb(),f.Ub(),f.Ub(),f.Vb(105,"nz-code-box",30),f.Qb(106,"nz-demo-input-number-precision",24),f.Vb(107,"div",25),f.Pb(),f.Vb(108,"p"),f.Pc(109,"\u6307\u5b9a value \u7684\u7cbe\u5ea6"),f.Ub(),f.Wb(),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Vb(110,"section",31),f.Pb(),f.Vb(111,"h2",32),f.Vb(112,"span"),f.Pc(113,"API"),f.Ub(),f.Vb(114,"a",33),f.Pc(115,"#"),f.Ub(),f.Ub(),f.Vb(116,"h3",34),f.Vb(117,"span"),f.Pc(118,"nz-input-number"),f.Ub(),f.Vb(119,"label",35),f.Pc(120,"component"),f.Ub(),f.Vb(121,"a",36),f.Pc(122,"#"),f.Ub(),f.Ub(),f.Vb(123,"table"),f.Vb(124,"thead"),f.Vb(125,"tr"),f.Vb(126,"th"),f.Pc(127,"\u6210\u5458"),f.Ub(),f.Vb(128,"th"),f.Pc(129,"\u8bf4\u660e"),f.Ub(),f.Vb(130,"th"),f.Pc(131,"\u7c7b\u578b"),f.Ub(),f.Vb(132,"th"),f.Pc(133,"\u9ed8\u8ba4\u503c"),f.Ub(),f.Ub(),f.Ub(),f.Vb(134,"tbody"),f.Vb(135,"tr"),f.Vb(136,"td"),f.Vb(137,"code"),f.Pc(138,"[ngModel]"),f.Ub(),f.Ub(),f.Vb(139,"td"),f.Pc(140,"\u5f53\u524d\u503c\uff0c\u53ef\u53cc\u5411\u7ed1\u5b9a"),f.Ub(),f.Vb(141,"td"),f.Vb(142,"code"),f.Pc(143,"number | string"),f.Ub(),f.Pc(144," | "),f.Vb(145,"code"),f.Pc(146,"string"),f.Ub(),f.Ub(),f.Vb(147,"td"),f.Pc(148,"-"),f.Ub(),f.Ub(),f.Vb(149,"tr"),f.Vb(150,"td"),f.Vb(151,"code"),f.Pc(152,"[nzAutoFocus]"),f.Ub(),f.Ub(),f.Vb(153,"td"),f.Pc(154,"\u81ea\u52a8\u83b7\u53d6\u7126\u70b9"),f.Ub(),f.Vb(155,"td"),f.Vb(156,"code"),f.Pc(157,"boolean"),f.Ub(),f.Ub(),f.Vb(158,"td"),f.Vb(159,"code"),f.Pc(160,"false"),f.Ub(),f.Ub(),f.Ub(),f.Vb(161,"tr"),f.Vb(162,"td"),f.Vb(163,"code"),f.Pc(164,"[nzDisabled]"),f.Ub(),f.Ub(),f.Vb(165,"td"),f.Pc(166,"\u7981\u7528"),f.Ub(),f.Vb(167,"td"),f.Vb(168,"code"),f.Pc(169,"boolean"),f.Ub(),f.Ub(),f.Vb(170,"td"),f.Vb(171,"code"),f.Pc(172,"false"),f.Ub(),f.Ub(),f.Ub(),f.Vb(173,"tr"),f.Vb(174,"td"),f.Vb(175,"code"),f.Pc(176,"[nzMax]"),f.Ub(),f.Ub(),f.Vb(177,"td"),f.Pc(178,"\u6700\u5927\u503c"),f.Ub(),f.Vb(179,"td"),f.Vb(180,"code"),f.Pc(181,"number"),f.Ub(),f.Ub(),f.Vb(182,"td"),f.Vb(183,"code"),f.Pc(184,"Infinity"),f.Ub(),f.Ub(),f.Ub(),f.Vb(185,"tr"),f.Vb(186,"td"),f.Vb(187,"code"),f.Pc(188,"[nzMin]"),f.Ub(),f.Ub(),f.Vb(189,"td"),f.Pc(190,"\u6700\u5c0f\u503c"),f.Ub(),f.Vb(191,"td"),f.Vb(192,"code"),f.Pc(193,"number"),f.Ub(),f.Ub(),f.Vb(194,"td"),f.Vb(195,"code"),f.Pc(196,"-Infinity"),f.Ub(),f.Ub(),f.Ub(),f.Vb(197,"tr"),f.Vb(198,"td"),f.Vb(199,"code"),f.Pc(200,"[nzFormatter]"),f.Ub(),f.Ub(),f.Vb(201,"td"),f.Pc(202,"\u6307\u5b9a\u8f93\u5165\u6846\u5c55\u793a\u503c\u7684\u683c\u5f0f"),f.Ub(),f.Vb(203,"td"),f.Vb(204,"code"),f.Pc(205,"(value: number | string) => string | number"),f.Ub(),f.Ub(),f.Vb(206,"td"),f.Pc(207,"-"),f.Ub(),f.Ub(),f.Vb(208,"tr"),f.Vb(209,"td"),f.Vb(210,"code"),f.Pc(211,"[nzParser]"),f.Ub(),f.Ub(),f.Vb(212,"td"),f.Pc(213,"\u6307\u5b9a\u4ece nzFormatter \u91cc\u8f6c\u6362\u56de\u6570\u5b57\u7684\u65b9\u5f0f\uff0c\u548c nzFormatter \u642d\u914d\u4f7f\u7528"),f.Ub(),f.Vb(214,"td"),f.Vb(215,"code"),f.Pc(216,"(value: string) => string | number"),f.Ub(),f.Ub(),f.Vb(217,"td"),f.Vb(218,"code"),f.Pc(219,"(value: string) => value.trim().replace(/\u3002/g, '.').replace(/[^\\w\\.-]+/g, '')"),f.Ub(),f.Ub(),f.Ub(),f.Vb(220,"tr"),f.Vb(221,"td"),f.Vb(222,"code"),f.Pc(223,"[nzPrecision]"),f.Ub(),f.Ub(),f.Vb(224,"td"),f.Pc(225,"\u6570\u503c\u7cbe\u5ea6"),f.Ub(),f.Vb(226,"td"),f.Vb(227,"code"),f.Pc(228,"number"),f.Ub(),f.Ub(),f.Vb(229,"td"),f.Pc(230,"-"),f.Ub(),f.Ub(),f.Vb(231,"tr"),f.Vb(232,"td"),f.Vb(233,"code"),f.Pc(234,"[nzPrecisionMode]"),f.Ub(),f.Ub(),f.Vb(235,"td"),f.Pc(236,"\u6570\u503c\u7cbe\u5ea6\u7684\u53d6\u503c\u65b9\u5f0f"),f.Ub(),f.Vb(237,"td"),f.Vb(238,"code"),f.Pc(239,"'cut' | 'toFixed' | ((value: number | string, precision?: number) => number)"),f.Ub(),f.Ub(),f.Vb(240,"td"),f.Vb(241,"code"),f.Pc(242,"'toFixed'"),f.Ub(),f.Ub(),f.Ub(),f.Vb(243,"tr"),f.Vb(244,"td"),f.Vb(245,"code"),f.Pc(246,"[nzSize]"),f.Ub(),f.Ub(),f.Vb(247,"td"),f.Pc(248,"\u8f93\u5165\u6846\u5927\u5c0f"),f.Ub(),f.Vb(249,"td"),f.Vb(250,"code"),f.Pc(251,"'large' | 'small' | 'default'"),f.Ub(),f.Ub(),f.Vb(252,"td"),f.Vb(253,"code"),f.Pc(254,"'default'"),f.Ub(),f.Ub(),f.Ub(),f.Vb(255,"tr"),f.Vb(256,"td"),f.Vb(257,"code"),f.Pc(258,"[nzStep]"),f.Ub(),f.Ub(),f.Vb(259,"td"),f.Pc(260,"\u6bcf\u6b21\u6539\u53d8\u6b65\u6570\uff0c\u53ef\u4ee5\u4e3a\u5c0f\u6570"),f.Ub(),f.Vb(261,"td"),f.Vb(262,"code"),f.Pc(263,"number | string"),f.Ub(),f.Ub(),f.Vb(264,"td"),f.Vb(265,"code"),f.Pc(266,"1"),f.Ub(),f.Ub(),f.Ub(),f.Vb(267,"tr"),f.Vb(268,"td"),f.Vb(269,"code"),f.Pc(270,"[nzInputMode]"),f.Ub(),f.Ub(),f.Vb(271,"td"),f.Pc(272,"\u63d0\u4f9b\u4e86\u7528\u6237\u5728\u7f16\u8f91\u5143\u7d20\u6216\u5176\u5185\u5bb9\u65f6\u53ef\u80fd\u8f93\u5165\u7684\u6570\u636e\u7c7b\u578b\u7684\u63d0\u793a\uff0c\u8be6\u89c1"),f.Vb(273,"a",37),f.Pc(274,"MDN"),f.Ub(),f.Ub(),f.Vb(275,"td"),f.Vb(276,"code"),f.Pc(277,"string"),f.Ub(),f.Ub(),f.Vb(278,"td"),f.Vb(279,"code"),f.Pc(280,"decimal"),f.Ub(),f.Ub(),f.Ub(),f.Vb(281,"tr"),f.Vb(282,"td"),f.Vb(283,"code"),f.Pc(284,"[nzPlaceHolder]"),f.Ub(),f.Ub(),f.Vb(285,"td"),f.Pc(286,"\u9009\u62e9\u6846\u9ed8\u8ba4\u6587\u5b57"),f.Ub(),f.Vb(287,"td"),f.Vb(288,"code"),f.Pc(289,"string"),f.Ub(),f.Ub(),f.Vb(290,"td"),f.Pc(291,"-"),f.Ub(),f.Ub(),f.Vb(292,"tr"),f.Vb(293,"td"),f.Vb(294,"code"),f.Pc(295,"[nzId]"),f.Ub(),f.Ub(),f.Vb(296,"td"),f.Pc(297,"\u7ec4\u4ef6\u5185\u90e8 input \u7684 id \u503c"),f.Ub(),f.Vb(298,"td"),f.Vb(299,"code"),f.Pc(300,"string"),f.Ub(),f.Ub(),f.Vb(301,"td"),f.Pc(302,"-"),f.Ub(),f.Ub(),f.Vb(303,"tr"),f.Vb(304,"td"),f.Vb(305,"code"),f.Pc(306,"(ngModelChange)"),f.Ub(),f.Ub(),f.Vb(307,"td"),f.Pc(308,"\u6570\u503c\u6539\u53d8\u65f6\u56de\u8c03"),f.Ub(),f.Vb(309,"td"),f.Vb(310,"code"),f.Pc(311,"EventEmitter<number>"),f.Ub(),f.Ub(),f.Vb(312,"td"),f.Pc(313,"-"),f.Ub(),f.Ub(),f.Vb(314,"tr"),f.Vb(315,"td"),f.Vb(316,"code"),f.Pc(317,"(nzFocus)"),f.Ub(),f.Ub(),f.Vb(318,"td"),f.Pc(319,"focus\u65f6\u56de\u8c03"),f.Ub(),f.Vb(320,"td"),f.Vb(321,"code"),f.Pc(322,"EventEmitter<void>"),f.Ub(),f.Ub(),f.Vb(323,"td"),f.Pc(324,"-"),f.Ub(),f.Ub(),f.Vb(325,"tr"),f.Vb(326,"td"),f.Vb(327,"code"),f.Pc(328,"(nzBlur)"),f.Ub(),f.Ub(),f.Vb(329,"td"),f.Pc(330,"blur\u65f6\u56de\u8c03"),f.Ub(),f.Vb(331,"td"),f.Vb(332,"code"),f.Pc(333,"EventEmitter<void>"),f.Ub(),f.Ub(),f.Vb(334,"td"),f.Pc(335,"-"),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Vb(336,"h4",38),f.Vb(337,"span"),f.Pc(338,"\u65b9\u6cd5"),f.Ub(),f.Vb(339,"a",39),f.Pc(340,"#"),f.Ub(),f.Ub(),f.Vb(341,"p"),f.Pc(342,"\u901a\u8fc7 "),f.Vb(343,"code"),f.Pc(344,"ViewChild"),f.Ub(),f.Pc(345," \u7b49\u65b9\u6cd5\u83b7\u5f97\u5b9e\u4f8b\u540e\u8c03\u7528"),f.Ub(),f.Vb(346,"table"),f.Vb(347,"thead"),f.Vb(348,"tr"),f.Vb(349,"th"),f.Pc(350,"\u540d\u79f0"),f.Ub(),f.Vb(351,"th"),f.Pc(352,"\u63cf\u8ff0"),f.Ub(),f.Ub(),f.Ub(),f.Vb(353,"tbody"),f.Vb(354,"tr"),f.Vb(355,"td"),f.Pc(356,"focus()"),f.Ub(),f.Vb(357,"td"),f.Pc(358,"\u83b7\u53d6\u7126\u70b9"),f.Ub(),f.Ub(),f.Vb(359,"tr"),f.Vb(360,"td"),f.Pc(361,"blur()"),f.Ub(),f.Vb(362,"td"),f.Pc(363,"\u79fb\u9664\u7126\u70b9"),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Wb(),f.Ub(),f.Ub()),2&n&&(f.Ab(1),f.pc("nzOffsetTop",16),f.Ab(1),f.pc("nzAffix",!1),f.Ab(48),f.pc("nzGutter",16),f.Ab(1),f.pc("nzXl",12)("nzSpan",24),f.Ab(1),f.pc("nzId","components-input-number-demo-basic")("nzLink","components-input-number-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/basic.md"),f.Ab(5),f.pc("nzId","components-input-number-demo-disabled")("nzLink","components-input-number-demo-disabled")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/disabled.md"),f.Ab(5),f.pc("nzId","components-input-number-demo-formatter")("nzLink","components-input-number-demo-formatter")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/formatter.md"),f.Ab(11),f.pc("nzXl",12)("nzSpan",24),f.Ab(1),f.pc("nzId","components-input-number-demo-size")("nzLink","components-input-number-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/size.md"),f.Ab(23),f.pc("nzId","components-input-number-demo-digit")("nzLink","components-input-number-demo-digit")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/digit.md"),f.Ab(8),f.pc("nzId","components-input-number-demo-precision")("nzLink","components-input-number-demo-precision")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/precision.md"))},directives:[h.a,I.a,I.b,k.a,v.a,M.d,x.c,x.a,g.a,w,N,S,y,T,A],encapsulation:2}),d),O=((r=function(){function n(){b(this,n),this.expanded=!1}return e(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach((function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()}))}}]),n}()).\u0275fac=function(n){return new(n||r)},r.\u0275cmp=f.Ib({type:r,selectors:[["nz-demo-input-number"]],viewQuery:function(n,e){var b;1&n&&f.Uc(g.a,!0),2&n&&f.yc(b=f.ec())&&(e.codeBoxes=b)},decls:362,vars:31,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-input-number-demo-basic","nzTitle","Basic"],["nzHref","#components-input-number-demo-size","nzTitle","Sizes"],["nzHref","#components-input-number-demo-disabled","nzTitle","Disabled"],["nzHref","#components-input-number-demo-digit","nzTitle","Decimals"],["nzHref","#components-input-number-demo-formatter","nzTitle","Formatter"],["nzHref","#components-input-number-demo-precision","nzTitle","Precision"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-input-number-basic","nzGenerateCommand","ng g ng-zorro-antd:input-number-basic <name>","nzComponentName","NzDemoInputNumberBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Disabled","nzSelector","nz-demo-input-number-disabled","nzGenerateCommand","ng g ng-zorro-antd:input-number-disabled <name>","nzComponentName","NzDemoInputNumberDisabledComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Formatter","nzSelector","nz-demo-input-number-formatter","nzGenerateCommand","ng g ng-zorro-antd:input-number-formatter <name>","nzComponentName","NzDemoInputNumberFormatterComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Sizes","nzSelector","nz-demo-input-number-size","nzGenerateCommand","ng g ng-zorro-antd:input-number-size <name>","nzComponentName","NzDemoInputNumberSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Decimals","nzSelector","nz-demo-input-number-digit","nzGenerateCommand","ng g ng-zorro-antd:input-number-digit <name>","nzComponentName","NzDemoInputNumberDigitComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Precision","nzSelector","nz-demo-input-number-precision","nzGenerateCommand","ng g ng-zorro-antd:input-number-precision <name>","nzComponentName","NzDemoInputNumberPrecisionComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-input-number"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-input-number'",1,"anchor"],["href","https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode","target","_blank"],["id","methods"],["onclick","window.location.hash = 'methods'",1,"anchor"]],template:function(n,e){1&n&&(f.Vb(0,"article"),f.Vb(1,"nz-affix",0),f.Vb(2,"nz-anchor",1),f.dc("nzClick",(function(n){return e.goLink(n)})),f.Qb(3,"nz-link",2),f.Qb(4,"nz-link",3),f.Qb(5,"nz-link",4),f.Qb(6,"nz-link",5),f.Qb(7,"nz-link",6),f.Qb(8,"nz-link",7),f.Qb(9,"nz-link",8),f.Ub(),f.Ub(),f.Vb(10,"section",9),f.Vb(11,"h1"),f.Pc(12,"InputNumber"),f.Qb(13,"span",10),f.Qb(14,"span",11),f.Vb(15,"a",12),f.Qb(16,"i",13),f.Ub(),f.Ub(),f.Vb(17,"section",9),f.Pb(),f.Vb(18,"p"),f.Pc(19,"Enter a number within certain range with the mouse or keyboard."),f.Ub(),f.Vb(20,"h2",14),f.Vb(21,"span"),f.Pc(22,"When To Use"),f.Ub(),f.Vb(23,"a",15),f.Pc(24,"#"),f.Ub(),f.Ub(),f.Vb(25,"p"),f.Pc(26,"When a numeric value needs to be provided."),f.Ub(),f.Vb(27,"pre",16),f.Vb(28,"code"),f.Vb(29,"span",17),f.Pc(30,"import"),f.Ub(),f.Pc(31," "),f.Vb(32,"span",18),f.Pc(33,"{"),f.Ub(),f.Pc(34," NzInputNumberModule "),f.Vb(35,"span",18),f.Pc(36,"}"),f.Ub(),f.Pc(37," "),f.Vb(38,"span",17),f.Pc(39,"from"),f.Ub(),f.Pc(40," "),f.Vb(41,"span",19),f.Pc(42,"'ng-zorro-antd/input-number'"),f.Ub(),f.Vb(43,"span",18),f.Pc(44,";"),f.Ub(),f.Ub(),f.Ub(),f.Wb(),f.Ub(),f.Vb(45,"h2"),f.Vb(46,"span"),f.Pc(47,"Examples"),f.Ub(),f.Vb(48,"i",20),f.dc("click",(function(){return e.expandAllCode()})),f.Ub(),f.Ub(),f.Ub(),f.Vb(49,"div",21),f.Vb(50,"div",22),f.Vb(51,"nz-code-box",23),f.Qb(52,"nz-demo-input-number-basic",24),f.Vb(53,"div",25),f.Pb(),f.Vb(54,"p"),f.Pc(55,"Numeric-only input box."),f.Ub(),f.Wb(),f.Ub(),f.Ub(),f.Vb(56,"nz-code-box",26),f.Qb(57,"nz-demo-input-number-disabled",24),f.Vb(58,"div",25),f.Pb(),f.Vb(59,"p"),f.Pc(60,"Click the button to toggle between available and disabled states."),f.Ub(),f.Wb(),f.Ub(),f.Ub(),f.Vb(61,"nz-code-box",27),f.Qb(62,"nz-demo-input-number-formatter",24),f.Vb(63,"div",25),f.Pb(),f.Vb(64,"p"),f.Pc(65,"Display value within it's situation with "),f.Vb(66,"code"),f.Pc(67,"nzFormatter"),f.Ub(),f.Pc(68,", and we usually use "),f.Vb(69,"code"),f.Pc(70,"nzParser"),f.Ub(),f.Pc(71," at the same time."),f.Ub(),f.Wb(),f.Ub(),f.Ub(),f.Ub(),f.Vb(72,"div",22),f.Vb(73,"nz-code-box",28),f.Qb(74,"nz-demo-input-number-size",24),f.Vb(75,"div",25),f.Pb(),f.Vb(76,"p"),f.Pc(77,"There are three sizes available to a numeric input box. By default, the "),f.Vb(78,"code"),f.Pc(79,"nzSize"),f.Ub(),f.Pc(80," is "),f.Vb(81,"code"),f.Pc(82,"32px"),f.Ub(),f.Pc(83,". The two additional sizes are "),f.Vb(84,"code"),f.Pc(85,"large"),f.Ub(),f.Pc(86," and "),f.Vb(87,"code"),f.Pc(88,"small"),f.Ub(),f.Pc(89," which means "),f.Vb(90,"code"),f.Pc(91,"40px"),f.Ub(),f.Pc(92," and "),f.Vb(93,"code"),f.Pc(94,"24px"),f.Ub(),f.Pc(95,", respectively."),f.Ub(),f.Wb(),f.Ub(),f.Ub(),f.Vb(96,"nz-code-box",29),f.Qb(97,"nz-demo-input-number-digit",24),f.Vb(98,"div",25),f.Pb(),f.Vb(99,"p"),f.Pc(100,"A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the "),f.Vb(101,"code"),f.Pc(102,"nzStep"),f.Ub(),f.Pc(103," prop."),f.Ub(),f.Wb(),f.Ub(),f.Ub(),f.Vb(104,"nz-code-box",30),f.Qb(105,"nz-demo-input-number-precision",24),f.Vb(106,"div",25),f.Pb(),f.Vb(107,"p"),f.Pc(108,"Set precision of the value"),f.Ub(),f.Wb(),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Vb(109,"section",31),f.Pb(),f.Vb(110,"h2",32),f.Vb(111,"span"),f.Pc(112,"API"),f.Ub(),f.Vb(113,"a",33),f.Pc(114,"#"),f.Ub(),f.Ub(),f.Vb(115,"h3",34),f.Vb(116,"span"),f.Pc(117,"nz-input-number"),f.Ub(),f.Vb(118,"label",35),f.Pc(119,"component"),f.Ub(),f.Vb(120,"a",36),f.Pc(121,"#"),f.Ub(),f.Ub(),f.Vb(122,"table"),f.Vb(123,"thead"),f.Vb(124,"tr"),f.Vb(125,"th"),f.Pc(126,"property"),f.Ub(),f.Vb(127,"th"),f.Pc(128,"description"),f.Ub(),f.Vb(129,"th"),f.Pc(130,"type"),f.Ub(),f.Vb(131,"th"),f.Pc(132,"default"),f.Ub(),f.Ub(),f.Ub(),f.Vb(133,"tbody"),f.Vb(134,"tr"),f.Vb(135,"td"),f.Vb(136,"code"),f.Pc(137,"[ngModel]"),f.Ub(),f.Ub(),f.Vb(138,"td"),f.Pc(139,"current value, double binding"),f.Ub(),f.Vb(140,"td"),f.Vb(141,"code"),f.Pc(142,"number | string"),f.Ub(),f.Pc(143," | "),f.Vb(144,"code"),f.Pc(145,"string"),f.Ub(),f.Ub(),f.Vb(146,"td"),f.Pc(147,"-"),f.Ub(),f.Ub(),f.Vb(148,"tr"),f.Vb(149,"td"),f.Vb(150,"code"),f.Pc(151,"[nzAutoFocus]"),f.Ub(),f.Ub(),f.Vb(152,"td"),f.Pc(153,"get focus when component mounted"),f.Ub(),f.Vb(154,"td"),f.Vb(155,"code"),f.Pc(156,"boolean"),f.Ub(),f.Ub(),f.Vb(157,"td"),f.Vb(158,"code"),f.Pc(159,"false"),f.Ub(),f.Ub(),f.Ub(),f.Vb(160,"tr"),f.Vb(161,"td"),f.Vb(162,"code"),f.Pc(163,"[nzDisabled]"),f.Ub(),f.Ub(),f.Vb(164,"td"),f.Pc(165,"disable the input"),f.Ub(),f.Vb(166,"td"),f.Vb(167,"code"),f.Pc(168,"boolean"),f.Ub(),f.Ub(),f.Vb(169,"td"),f.Vb(170,"code"),f.Pc(171,"false"),f.Ub(),f.Ub(),f.Ub(),f.Vb(172,"tr"),f.Vb(173,"td"),f.Vb(174,"code"),f.Pc(175,"[nzMax]"),f.Ub(),f.Ub(),f.Vb(176,"td"),f.Pc(177,"max value"),f.Ub(),f.Vb(178,"td"),f.Vb(179,"code"),f.Pc(180,"number"),f.Ub(),f.Ub(),f.Vb(181,"td"),f.Vb(182,"code"),f.Pc(183,"Infinity"),f.Ub(),f.Ub(),f.Ub(),f.Vb(184,"tr"),f.Vb(185,"td"),f.Vb(186,"code"),f.Pc(187,"[nzMin]"),f.Ub(),f.Ub(),f.Vb(188,"td"),f.Pc(189,"min value"),f.Ub(),f.Vb(190,"td"),f.Vb(191,"code"),f.Pc(192,"number"),f.Ub(),f.Ub(),f.Vb(193,"td"),f.Vb(194,"code"),f.Pc(195,"-Infinity"),f.Ub(),f.Ub(),f.Ub(),f.Vb(196,"tr"),f.Vb(197,"td"),f.Vb(198,"code"),f.Pc(199,"[nzFormatter]"),f.Ub(),f.Ub(),f.Vb(200,"td"),f.Pc(201,"Specifies the format of the value presented"),f.Ub(),f.Vb(202,"td"),f.Vb(203,"code"),f.Pc(204,"(value: number | string) => string | number"),f.Ub(),f.Ub(),f.Vb(205,"td"),f.Pc(206,"-"),f.Ub(),f.Ub(),f.Vb(207,"tr"),f.Vb(208,"td"),f.Vb(209,"code"),f.Pc(210,"[nzParser]"),f.Ub(),f.Ub(),f.Vb(211,"td"),f.Pc(212,"Specifies the value extracted from nzFormatter"),f.Ub(),f.Vb(213,"td"),f.Vb(214,"code"),f.Pc(215,"(value: string) => string | number"),f.Ub(),f.Ub(),f.Vb(216,"td"),f.Vb(217,"code"),f.Pc(218,"(value: string) => value.trim().replace(/\u3002/g, '.').replace(/[^\\w\\.-]+/g, '')"),f.Ub(),f.Ub(),f.Ub(),f.Vb(219,"tr"),f.Vb(220,"td"),f.Vb(221,"code"),f.Pc(222,"[nzPrecision]"),f.Ub(),f.Ub(),f.Vb(223,"td"),f.Pc(224,"precision of input value"),f.Ub(),f.Vb(225,"td"),f.Vb(226,"code"),f.Pc(227,"number"),f.Ub(),f.Ub(),f.Vb(228,"td"),f.Pc(229,"-"),f.Ub(),f.Ub(),f.Vb(230,"tr"),f.Vb(231,"td"),f.Vb(232,"code"),f.Pc(233,"[nzPrecisionMode]"),f.Ub(),f.Ub(),f.Vb(234,"td"),f.Pc(235,"The method for calculating the precision of input value"),f.Ub(),f.Vb(236,"td"),f.Vb(237,"code"),f.Pc(238,"'cut' | 'toFixed' | ((value: number | string, precision?: number) => number)"),f.Ub(),f.Ub(),f.Vb(239,"td"),f.Vb(240,"code"),f.Pc(241,"'toFixed'"),f.Ub(),f.Ub(),f.Ub(),f.Vb(242,"tr"),f.Vb(243,"td"),f.Vb(244,"code"),f.Pc(245,"[nzSize]"),f.Ub(),f.Ub(),f.Vb(246,"td"),f.Pc(247,"width of input box"),f.Ub(),f.Vb(248,"td"),f.Vb(249,"code"),f.Pc(250,"'large' | 'small' | 'default'"),f.Ub(),f.Ub(),f.Vb(251,"td"),f.Vb(252,"code"),f.Pc(253,"'default'"),f.Ub(),f.Ub(),f.Ub(),f.Vb(254,"tr"),f.Vb(255,"td"),f.Vb(256,"code"),f.Pc(257,"[nzStep]"),f.Ub(),f.Ub(),f.Vb(258,"td"),f.Pc(259,"The number to which the current value is increased or decreased. It can be an integer or decimal."),f.Ub(),f.Vb(260,"td"),f.Vb(261,"code"),f.Pc(262,"number | string"),f.Ub(),f.Ub(),f.Vb(263,"td"),f.Vb(264,"code"),f.Pc(265,"1"),f.Ub(),f.Ub(),f.Ub(),f.Vb(266,"tr"),f.Vb(267,"td"),f.Vb(268,"code"),f.Pc(269,"[nzInputMode]"),f.Ub(),f.Ub(),f.Vb(270,"td"),f.Pc(271,"enumerated attribute that hints at the type of data that might be entered by the user, "),f.Vb(272,"a",37),f.Pc(273,"MDN"),f.Ub(),f.Ub(),f.Vb(274,"td"),f.Vb(275,"code"),f.Pc(276,"string"),f.Ub(),f.Ub(),f.Vb(277,"td"),f.Vb(278,"code"),f.Pc(279,"decimal"),f.Ub(),f.Ub(),f.Ub(),f.Vb(280,"tr"),f.Vb(281,"td"),f.Vb(282,"code"),f.Pc(283,"[nzPlaceHolder]"),f.Ub(),f.Ub(),f.Vb(284,"td"),f.Pc(285,"Placeholder of select"),f.Ub(),f.Vb(286,"td"),f.Vb(287,"code"),f.Pc(288,"string"),f.Ub(),f.Ub(),f.Vb(289,"td"),f.Pc(290,"-"),f.Ub(),f.Ub(),f.Vb(291,"tr"),f.Vb(292,"td"),f.Vb(293,"code"),f.Pc(294,"[nzId]"),f.Ub(),f.Ub(),f.Vb(295,"td"),f.Pc(296,"input id attribute inside the component"),f.Ub(),f.Vb(297,"td"),f.Vb(298,"code"),f.Pc(299,"string"),f.Ub(),f.Ub(),f.Vb(300,"td"),f.Pc(301,"-"),f.Ub(),f.Ub(),f.Vb(302,"tr"),f.Vb(303,"td"),f.Vb(304,"code"),f.Pc(305,"(ngModelChange)"),f.Ub(),f.Ub(),f.Vb(306,"td"),f.Pc(307,"The callback triggered when the value is changed"),f.Ub(),f.Vb(308,"td"),f.Vb(309,"code"),f.Pc(310,"EventEmitter<number>"),f.Ub(),f.Ub(),f.Vb(311,"td"),f.Pc(312,"-"),f.Ub(),f.Ub(),f.Vb(313,"tr"),f.Vb(314,"td"),f.Vb(315,"code"),f.Pc(316,"(nzFocus)"),f.Ub(),f.Ub(),f.Vb(317,"td"),f.Pc(318,"focus callback"),f.Ub(),f.Vb(319,"td"),f.Vb(320,"code"),f.Pc(321,"EventEmitter<void>"),f.Ub(),f.Ub(),f.Vb(322,"td"),f.Pc(323,"-"),f.Ub(),f.Ub(),f.Vb(324,"tr"),f.Vb(325,"td"),f.Vb(326,"code"),f.Pc(327,"(nzBlur)"),f.Ub(),f.Ub(),f.Vb(328,"td"),f.Pc(329,"blur callback"),f.Ub(),f.Vb(330,"td"),f.Vb(331,"code"),f.Pc(332,"EventEmitter<void>"),f.Ub(),f.Ub(),f.Vb(333,"td"),f.Pc(334,"-"),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Vb(335,"h4",38),f.Vb(336,"span"),f.Pc(337,"Methods"),f.Ub(),f.Vb(338,"a",39),f.Pc(339,"#"),f.Ub(),f.Ub(),f.Vb(340,"p"),f.Pc(341,"You can get instance by "),f.Vb(342,"code"),f.Pc(343,"ViewChild"),f.Ub(),f.Ub(),f.Vb(344,"table"),f.Vb(345,"thead"),f.Vb(346,"tr"),f.Vb(347,"th"),f.Pc(348,"Name"),f.Ub(),f.Vb(349,"th"),f.Pc(350,"Description"),f.Ub(),f.Ub(),f.Ub(),f.Vb(351,"tbody"),f.Vb(352,"tr"),f.Vb(353,"td"),f.Pc(354,"focus()"),f.Ub(),f.Vb(355,"td"),f.Pc(356,"get focus"),f.Ub(),f.Ub(),f.Vb(357,"tr"),f.Vb(358,"td"),f.Pc(359,"blur()"),f.Ub(),f.Vb(360,"td"),f.Pc(361,"remove focus"),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Wb(),f.Ub(),f.Ub()),2&n&&(f.Ab(1),f.pc("nzOffsetTop",16),f.Ab(1),f.pc("nzAffix",!1),f.Ab(47),f.pc("nzGutter",16),f.Ab(1),f.pc("nzXl",12)("nzSpan",24),f.Ab(1),f.pc("nzId","components-input-number-demo-basic")("nzLink","components-input-number-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/basic.md"),f.Ab(5),f.pc("nzId","components-input-number-demo-disabled")("nzLink","components-input-number-demo-disabled")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/disabled.md"),f.Ab(5),f.pc("nzId","components-input-number-demo-formatter")("nzLink","components-input-number-demo-formatter")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/formatter.md"),f.Ab(11),f.pc("nzXl",12)("nzSpan",24),f.Ab(1),f.pc("nzId","components-input-number-demo-size")("nzLink","components-input-number-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/size.md"),f.Ab(23),f.pc("nzId","components-input-number-demo-digit")("nzLink","components-input-number-demo-digit")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/digit.md"),f.Ab(8),f.pc("nzId","components-input-number-demo-precision")("nzLink","components-input-number-demo-precision")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/precision.md"))},directives:[h.a,I.a,I.b,k.a,v.a,M.d,x.c,x.a,g.a,w,N,S,y,T,A],encapsulation:2}),r),G=((i=function n(){b(this,n)}).\u0275mod=f.Mb({type:i}),i.\u0275inj=f.Lb({factory:function(n){return new(n||i)},imports:[[V.a].concat(P,[s.h.forChild([{path:"en",component:O},{path:"zh",component:D}])])]}),i)}}])}();