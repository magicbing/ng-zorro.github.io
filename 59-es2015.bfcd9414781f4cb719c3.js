(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"7mjV":function(n,b,c){"use strict";c.r(b),c.d(b,"NzDemoAnchorModule",function(){return m});var t=c("tyNb"),o=c("WGB2"),e=c("l83q");const a=[e.c];var i=c("rKiv"),r=c("fXoL"),d=c("utH8"),X=c("MOHP"),W=c("pk25"),s=c("T+9E");let z=(()=>{class n{}return n.\u0275fac=function(b){return new(b||n)},n.\u0275cmp=r.Kb({type:n,selectors:[["nz-demo-anchor-basic"]],decls:6,vars:0,consts:[["nzHref","#components-anchor-demo-basic","nzTitle","Basic demo"],["nzHref","#components-anchor-demo-static","nzTitle","Static demo"],["nzHref","#api","nzTitle","API"],["nzHref","#nz-anchor","nzTitle","nz-anchor"],["nzHref","#nz-link","nzTitle","nz-link"]],template:function(n,b){1&n&&(r.Xb(0,"nz-anchor"),r.Sb(1,"nz-link",0),r.Sb(2,"nz-link",1),r.Xb(3,"nz-link",2),r.Sb(4,"nz-link",3),r.Sb(5,"nz-link",4),r.Wb(),r.Wb())},directives:[e.a,e.b],encapsulation:2}),n})(),l=(()=>{class n{}return n.\u0275fac=function(b){return new(b||n)},n.\u0275cmp=r.Kb({type:n,selectors:[["nz-demo-anchor-static"]],decls:6,vars:1,consts:[[3,"nzAffix"],["nzHref","#components-anchor-demo-basic","nzTitle","Basic demo"],["nzHref","#components-anchor-demo-static","nzTitle","Static demo"],["nzHref","#api","nzTitle","API"],["nzHref","#nz-anchor","nzTitle","nz-anchor"],["nzHref","#nz-link","nzTitle","nz-link"]],template:function(n,b){1&n&&(r.Xb(0,"nz-anchor",0),r.Sb(1,"nz-link",1),r.Sb(2,"nz-link",2),r.Xb(3,"nz-link",3),r.Sb(4,"nz-link",4),r.Sb(5,"nz-link",5),r.Wb(),r.Wb()),2&n&&r.rc("nzAffix",!1)},directives:[e.a,e.b],encapsulation:2}),n})(),h=(()=>{class n{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return n.\u0275fac=function(b){return new(b||n)},n.\u0275cmp=r.Kb({type:n,selectors:[["nz-demo-anchor"]],viewQuery:function(n,b){if(1&n&&r.Uc(i.a,1),2&n){let n;r.Ac(n=r.gc())&&(b.codeBoxes=n)}},decls:218,vars:15,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-anchor-demo-basic","nzTitle","\u57fa\u672c"],["nzHref","#components-anchor-demo-static","nzTitle","\u9759\u6001\u4f4d\u7f6e"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c","nzSelector","nz-demo-anchor-basic","nzGenerateCommand","ng g ng-zorro-antd:anchor-basic <name>","nzComponentName","NzDemoAnchorBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u9759\u6001\u4f4d\u7f6e","nzSelector","nz-demo-anchor-static","nzGenerateCommand","ng g ng-zorro-antd:anchor-static <name>","nzComponentName","NzDemoAnchorStaticComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-anchor"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-anchor'",1,"anchor"],["id","nz-link"],["onclick","window.location.hash = 'nz-link'",1,"anchor"]],template:function(n,b){1&n&&(r.Xb(0,"article"),r.Xb(1,"nz-affix",0),r.Xb(2,"nz-anchor",1),r.fc("nzClick",function(n){return b.goLink(n)}),r.Sb(3,"nz-link",2),r.Sb(4,"nz-link",3),r.Sb(5,"nz-link",4),r.Wb(),r.Wb(),r.Xb(6,"section",5),r.Xb(7,"h1"),r.Pc(8,"Anchor"),r.Xb(9,"span",6),r.Pc(10,"\u951a\u70b9"),r.Wb(),r.Sb(11,"span",7),r.Xb(12,"a",8),r.Sb(13,"i",9),r.Wb(),r.Wb(),r.Xb(14,"section",5),r.Rb(),r.Xb(15,"p"),r.Pc(16,"\u7528\u4e8e\u8df3\u8f6c\u5230\u9875\u9762\u6307\u5b9a\u4f4d\u7f6e\u3002"),r.Wb(),r.Xb(17,"h2",10),r.Xb(18,"span"),r.Pc(19,"\u4f55\u65f6\u4f7f\u7528"),r.Wb(),r.Xb(20,"a",11),r.Pc(21,"#"),r.Wb(),r.Wb(),r.Xb(22,"p"),r.Pc(23,"\u9700\u8981\u5c55\u73b0\u5f53\u524d\u9875\u9762\u4e0a\u53ef\u4f9b\u8df3\u8f6c\u7684\u951a\u70b9\u94fe\u63a5\uff0c\u4ee5\u53ca\u5feb\u901f\u5728\u951a\u70b9\u4e4b\u95f4\u8df3\u8f6c\u3002"),r.Wb(),r.Xb(24,"pre",12),r.Xb(25,"code"),r.Xb(26,"span",13),r.Pc(27,"import"),r.Wb(),r.Pc(28," "),r.Xb(29,"span",14),r.Pc(30,"{"),r.Wb(),r.Pc(31," NzAnchorModule "),r.Xb(32,"span",14),r.Pc(33,"}"),r.Wb(),r.Pc(34," "),r.Xb(35,"span",13),r.Pc(36,"from"),r.Wb(),r.Pc(37," "),r.Xb(38,"span",15),r.Pc(39,"'ng-zorro-antd/anchor'"),r.Wb(),r.Xb(40,"span",14),r.Pc(41,";"),r.Wb(),r.Wb(),r.Wb(),r.Yb(),r.Wb(),r.Xb(42,"h2"),r.Xb(43,"span"),r.Pc(44,"\u4ee3\u7801\u6f14\u793a"),r.Wb(),r.Xb(45,"i",16),r.fc("click",function(){return b.expandAllCode()}),r.Wb(),r.Wb(),r.Wb(),r.Xb(46,"div",17),r.Xb(47,"div",18),r.Xb(48,"nz-code-box",19),r.Sb(49,"nz-demo-anchor-basic",20),r.Xb(50,"div",21),r.Rb(),r.Xb(51,"p"),r.Pc(52,"\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"),r.Wb(),r.Yb(),r.Wb(),r.Wb(),r.Wb(),r.Xb(53,"div",18),r.Xb(54,"nz-code-box",22),r.Sb(55,"nz-demo-anchor-static",20),r.Xb(56,"div",21),r.Rb(),r.Xb(57,"p"),r.Pc(58,"\u4e0d\u6d6e\u52a8\uff0c\u72b6\u6001\u4e0d\u968f\u9875\u9762\u6eda\u52a8\u53d8\u5316\u3002"),r.Wb(),r.Yb(),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Xb(59,"section",23),r.Rb(),r.Xb(60,"h2",24),r.Xb(61,"span"),r.Pc(62,"API"),r.Wb(),r.Xb(63,"a",25),r.Pc(64,"#"),r.Wb(),r.Wb(),r.Xb(65,"h3",26),r.Xb(66,"span"),r.Pc(67,"nz-anchor"),r.Wb(),r.Xb(68,"label",27),r.Pc(69,"component"),r.Wb(),r.Xb(70,"a",28),r.Pc(71,"#"),r.Wb(),r.Wb(),r.Xb(72,"table"),r.Xb(73,"thead"),r.Xb(74,"tr"),r.Xb(75,"th"),r.Pc(76,"\u6210\u5458"),r.Wb(),r.Xb(77,"th"),r.Pc(78,"\u8bf4\u660e"),r.Wb(),r.Xb(79,"th"),r.Pc(80,"\u7c7b\u578b"),r.Wb(),r.Xb(81,"th"),r.Pc(82,"\u9ed8\u8ba4\u503c"),r.Wb(),r.Xb(83,"th"),r.Pc(84,"\u5168\u5c40\u914d\u7f6e"),r.Wb(),r.Wb(),r.Wb(),r.Xb(85,"tbody"),r.Xb(86,"tr"),r.Xb(87,"td"),r.Xb(88,"code"),r.Pc(89,"[nzAffix]"),r.Wb(),r.Wb(),r.Xb(90,"td"),r.Pc(91,"\u56fa\u5b9a\u6a21\u5f0f"),r.Wb(),r.Xb(92,"td"),r.Xb(93,"code"),r.Pc(94,"boolean"),r.Wb(),r.Wb(),r.Xb(95,"td"),r.Xb(96,"code"),r.Pc(97,"true"),r.Wb(),r.Wb(),r.Sb(98,"td"),r.Wb(),r.Xb(99,"tr"),r.Xb(100,"td"),r.Xb(101,"code"),r.Pc(102,"[nzBounds]"),r.Wb(),r.Wb(),r.Xb(103,"td"),r.Pc(104,"\u951a\u70b9\u533a\u57df\u8fb9\u754c\uff0c\u5355\u4f4d\uff1apx"),r.Wb(),r.Xb(105,"td"),r.Xb(106,"code"),r.Pc(107,"number"),r.Wb(),r.Wb(),r.Xb(108,"td"),r.Xb(109,"code"),r.Pc(110,"5"),r.Wb(),r.Wb(),r.Xb(111,"td"),r.Pc(112,"\u2705"),r.Wb(),r.Wb(),r.Xb(113,"tr"),r.Xb(114,"td"),r.Xb(115,"code"),r.Pc(116,"[nzOffsetTop]"),r.Wb(),r.Wb(),r.Xb(117,"td"),r.Pc(118,"\u8ddd\u79bb\u7a97\u53e3\u9876\u90e8\u8fbe\u5230\u6307\u5b9a\u504f\u79fb\u91cf\u540e\u89e6\u53d1"),r.Wb(),r.Xb(119,"td"),r.Xb(120,"code"),r.Pc(121,"number"),r.Wb(),r.Wb(),r.Xb(122,"td"),r.Pc(123,"-"),r.Wb(),r.Xb(124,"td"),r.Pc(125,"\u2705"),r.Wb(),r.Wb(),r.Xb(126,"tr"),r.Xb(127,"td"),r.Xb(128,"code"),r.Pc(129,"[nzShowInkInFixed]"),r.Wb(),r.Wb(),r.Xb(130,"td"),r.Pc(131,"\u56fa\u5b9a\u6a21\u5f0f\u662f\u5426\u663e\u793a\u5c0f\u5706\u70b9"),r.Wb(),r.Xb(132,"td"),r.Xb(133,"code"),r.Pc(134,"boolean"),r.Wb(),r.Wb(),r.Xb(135,"td"),r.Xb(136,"code"),r.Pc(137,"false"),r.Wb(),r.Wb(),r.Xb(138,"td"),r.Pc(139,"\u2705"),r.Wb(),r.Wb(),r.Xb(140,"tr"),r.Xb(141,"td"),r.Xb(142,"code"),r.Pc(143,"[nzContainer]"),r.Wb(),r.Wb(),r.Xb(144,"td"),r.Pc(145,"\u6307\u5b9a\u6eda\u52a8\u7684\u5bb9\u5668"),r.Wb(),r.Xb(146,"td"),r.Xb(147,"code"),r.Pc(148,"string | HTMLElement"),r.Wb(),r.Wb(),r.Xb(149,"td"),r.Xb(150,"code"),r.Pc(151,"window"),r.Wb(),r.Wb(),r.Sb(152,"td"),r.Wb(),r.Xb(153,"tr"),r.Xb(154,"td"),r.Xb(155,"code"),r.Pc(156,"(nzClick)"),r.Wb(),r.Wb(),r.Xb(157,"td"),r.Pc(158,"\u70b9\u51fb\u9879\u89e6\u53d1"),r.Wb(),r.Xb(159,"td"),r.Xb(160,"code"),r.Pc(161,"EventEmitter<string>"),r.Wb(),r.Wb(),r.Xb(162,"td"),r.Pc(163,"-"),r.Wb(),r.Sb(164,"td"),r.Wb(),r.Xb(165,"tr"),r.Xb(166,"td"),r.Xb(167,"code"),r.Pc(168,"(nzScroll)"),r.Wb(),r.Wb(),r.Xb(169,"td"),r.Pc(170,"\u6eda\u52a8\u81f3\u67d0\u951a\u70b9\u65f6\u89e6\u53d1"),r.Wb(),r.Xb(171,"td"),r.Xb(172,"code"),r.Pc(173,"EventEmitter<NzAnchorLinkComponent>"),r.Wb(),r.Wb(),r.Xb(174,"td"),r.Pc(175,"-"),r.Wb(),r.Sb(176,"td"),r.Wb(),r.Wb(),r.Wb(),r.Xb(177,"h3",29),r.Xb(178,"span"),r.Pc(179,"nz-link"),r.Wb(),r.Xb(180,"label",27),r.Pc(181,"component"),r.Wb(),r.Xb(182,"a",30),r.Pc(183,"#"),r.Wb(),r.Wb(),r.Xb(184,"table"),r.Xb(185,"thead"),r.Xb(186,"tr"),r.Xb(187,"th"),r.Pc(188,"\u6210\u5458"),r.Wb(),r.Xb(189,"th"),r.Pc(190,"\u8bf4\u660e"),r.Wb(),r.Xb(191,"th"),r.Pc(192,"\u7c7b\u578b"),r.Wb(),r.Xb(193,"th"),r.Pc(194,"\u9ed8\u8ba4\u503c"),r.Wb(),r.Wb(),r.Wb(),r.Xb(195,"tbody"),r.Xb(196,"tr"),r.Xb(197,"td"),r.Xb(198,"code"),r.Pc(199,"[nzHref]"),r.Wb(),r.Wb(),r.Xb(200,"td"),r.Pc(201,"\u951a\u70b9\u94fe\u63a5"),r.Wb(),r.Xb(202,"td"),r.Xb(203,"code"),r.Pc(204,"string"),r.Wb(),r.Wb(),r.Xb(205,"td"),r.Pc(206,"-"),r.Wb(),r.Wb(),r.Xb(207,"tr"),r.Xb(208,"td"),r.Xb(209,"code"),r.Pc(210,"[nzTitle]"),r.Wb(),r.Wb(),r.Xb(211,"td"),r.Pc(212,"\u6587\u5b57\u5185\u5bb9"),r.Wb(),r.Xb(213,"td"),r.Xb(214,"code"),r.Pc(215,"string | TemplateRef<void>"),r.Wb(),r.Wb(),r.Xb(216,"td"),r.Pc(217,"-"),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Yb(),r.Wb(),r.Wb()),2&n&&(r.Cb(1),r.rc("nzOffsetTop",16),r.Cb(1),r.rc("nzAffix",!1),r.Cb(44),r.rc("nzGutter",16),r.Cb(1),r.rc("nzXl",12)("nzSpan",24),r.Cb(1),r.rc("nzId","components-anchor-demo-basic")("nzLink","components-anchor-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/demo/basic.md"),r.Cb(5),r.rc("nzXl",12)("nzSpan",24),r.Cb(1),r.rc("nzId","components-anchor-demo-static")("nzLink","components-anchor-demo-static")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/demo/static.md"))},directives:[d.a,e.a,e.b,X.a,W.d,s.c,s.a,i.a,z,l],encapsulation:2}),n})(),p=(()=>{class n{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return n.\u0275fac=function(b){return new(b||n)},n.\u0275cmp=r.Kb({type:n,selectors:[["nz-demo-anchor"]],viewQuery:function(n,b){if(1&n&&r.Uc(i.a,1),2&n){let n;r.Ac(n=r.gc())&&(b.codeBoxes=n)}},decls:218,vars:15,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-anchor-demo-basic","nzTitle","Basic"],["nzHref","#components-anchor-demo-static","nzTitle","Static Anchor"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-anchor-basic","nzGenerateCommand","ng g ng-zorro-antd:anchor-basic <name>","nzComponentName","NzDemoAnchorBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Static Anchor","nzSelector","nz-demo-anchor-static","nzGenerateCommand","ng g ng-zorro-antd:anchor-static <name>","nzComponentName","NzDemoAnchorStaticComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-anchor"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-anchor'",1,"anchor"],["id","nz-link"],["onclick","window.location.hash = 'nz-link'",1,"anchor"]],template:function(n,b){1&n&&(r.Xb(0,"article"),r.Xb(1,"nz-affix",0),r.Xb(2,"nz-anchor",1),r.fc("nzClick",function(n){return b.goLink(n)}),r.Sb(3,"nz-link",2),r.Sb(4,"nz-link",3),r.Sb(5,"nz-link",4),r.Wb(),r.Wb(),r.Xb(6,"section",5),r.Xb(7,"h1"),r.Pc(8,"Anchor"),r.Sb(9,"span",6),r.Sb(10,"span",7),r.Xb(11,"a",8),r.Sb(12,"i",9),r.Wb(),r.Wb(),r.Xb(13,"section",5),r.Rb(),r.Xb(14,"p"),r.Pc(15,"Hyperlinks to scroll on one page."),r.Wb(),r.Xb(16,"h2",10),r.Xb(17,"span"),r.Pc(18,"When To Use"),r.Wb(),r.Xb(19,"a",11),r.Pc(20,"#"),r.Wb(),r.Wb(),r.Xb(21,"p"),r.Pc(22,"For displaying anchor hyperlinks on page and jumping between them."),r.Wb(),r.Xb(23,"pre",12),r.Xb(24,"code"),r.Xb(25,"span",13),r.Pc(26,"import"),r.Wb(),r.Pc(27," "),r.Xb(28,"span",14),r.Pc(29,"{"),r.Wb(),r.Pc(30," NzAnchorModule "),r.Xb(31,"span",14),r.Pc(32,"}"),r.Wb(),r.Pc(33," "),r.Xb(34,"span",13),r.Pc(35,"from"),r.Wb(),r.Pc(36," "),r.Xb(37,"span",15),r.Pc(38,"'ng-zorro-antd/anchor'"),r.Wb(),r.Xb(39,"span",14),r.Pc(40,";"),r.Wb(),r.Wb(),r.Wb(),r.Yb(),r.Wb(),r.Xb(41,"h2"),r.Xb(42,"span"),r.Pc(43,"Examples"),r.Wb(),r.Xb(44,"i",16),r.fc("click",function(){return b.expandAllCode()}),r.Wb(),r.Wb(),r.Wb(),r.Xb(45,"div",17),r.Xb(46,"div",18),r.Xb(47,"nz-code-box",19),r.Sb(48,"nz-demo-anchor-basic",20),r.Xb(49,"div",21),r.Rb(),r.Xb(50,"p"),r.Pc(51,"The simplest usage."),r.Wb(),r.Yb(),r.Wb(),r.Wb(),r.Wb(),r.Xb(52,"div",18),r.Xb(53,"nz-code-box",22),r.Sb(54,"nz-demo-anchor-static",20),r.Xb(55,"div",21),r.Rb(),r.Xb(56,"p"),r.Pc(57,"Do not change state when page is scrolling."),r.Wb(),r.Yb(),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Xb(58,"section",23),r.Rb(),r.Xb(59,"h2",24),r.Xb(60,"span"),r.Pc(61,"API"),r.Wb(),r.Xb(62,"a",25),r.Pc(63,"#"),r.Wb(),r.Wb(),r.Xb(64,"h3",26),r.Xb(65,"span"),r.Pc(66,"nz-anchor"),r.Wb(),r.Xb(67,"label",27),r.Pc(68,"component"),r.Wb(),r.Xb(69,"a",28),r.Pc(70,"#"),r.Wb(),r.Wb(),r.Xb(71,"table"),r.Xb(72,"thead"),r.Xb(73,"tr"),r.Xb(74,"th"),r.Pc(75,"Property"),r.Wb(),r.Xb(76,"th"),r.Pc(77,"Description"),r.Wb(),r.Xb(78,"th"),r.Pc(79,"Type"),r.Wb(),r.Xb(80,"th"),r.Pc(81,"Default"),r.Wb(),r.Xb(82,"th"),r.Pc(83,"Global Config"),r.Wb(),r.Wb(),r.Wb(),r.Xb(84,"tbody"),r.Xb(85,"tr"),r.Xb(86,"td"),r.Xb(87,"code"),r.Pc(88,"[nzAffix]"),r.Wb(),r.Wb(),r.Xb(89,"td"),r.Pc(90,"Fixed mode of Anchor"),r.Wb(),r.Xb(91,"td"),r.Xb(92,"code"),r.Pc(93,"boolean"),r.Wb(),r.Wb(),r.Xb(94,"td"),r.Xb(95,"code"),r.Pc(96,"true"),r.Wb(),r.Wb(),r.Sb(97,"td"),r.Wb(),r.Xb(98,"tr"),r.Xb(99,"td"),r.Xb(100,"code"),r.Pc(101,"[nzBounds]"),r.Wb(),r.Wb(),r.Xb(102,"td"),r.Pc(103,"Bounding distance of anchor area, unit: px"),r.Wb(),r.Xb(104,"td"),r.Xb(105,"code"),r.Pc(106,"number"),r.Wb(),r.Wb(),r.Xb(107,"td"),r.Xb(108,"code"),r.Pc(109,"5"),r.Wb(),r.Wb(),r.Xb(110,"td"),r.Pc(111,"\u2705"),r.Wb(),r.Wb(),r.Xb(112,"tr"),r.Xb(113,"td"),r.Xb(114,"code"),r.Pc(115,"[nzOffsetTop]"),r.Wb(),r.Wb(),r.Xb(116,"td"),r.Pc(117,"Pixels to offset from top when calculating position of scroll"),r.Wb(),r.Xb(118,"td"),r.Xb(119,"code"),r.Pc(120,"number"),r.Wb(),r.Wb(),r.Xb(121,"td"),r.Xb(122,"code"),r.Pc(123,"0"),r.Wb(),r.Wb(),r.Xb(124,"td"),r.Pc(125,"\u2705"),r.Wb(),r.Wb(),r.Xb(126,"tr"),r.Xb(127,"td"),r.Xb(128,"code"),r.Pc(129,"[nzShowInkInFixed]"),r.Wb(),r.Wb(),r.Xb(130,"td"),r.Pc(131,"Whether show ink-balls in Fixed mode"),r.Wb(),r.Xb(132,"td"),r.Xb(133,"code"),r.Pc(134,"boolean"),r.Wb(),r.Wb(),r.Xb(135,"td"),r.Xb(136,"code"),r.Pc(137,"false"),r.Wb(),r.Wb(),r.Xb(138,"td"),r.Pc(139,"\u2705"),r.Wb(),r.Wb(),r.Xb(140,"tr"),r.Xb(141,"td"),r.Xb(142,"code"),r.Pc(143,"[nzContainer]"),r.Wb(),r.Wb(),r.Xb(144,"td"),r.Pc(145,"Scrolling container"),r.Wb(),r.Xb(146,"td"),r.Xb(147,"code"),r.Pc(148,"string | HTMLElement"),r.Wb(),r.Wb(),r.Xb(149,"td"),r.Xb(150,"code"),r.Pc(151,"window"),r.Wb(),r.Wb(),r.Sb(152,"td"),r.Wb(),r.Xb(153,"tr"),r.Xb(154,"td"),r.Xb(155,"code"),r.Pc(156,"(nzClick)"),r.Wb(),r.Wb(),r.Xb(157,"td"),r.Pc(158,"Click of Anchor item"),r.Wb(),r.Xb(159,"td"),r.Xb(160,"code"),r.Pc(161,"EventEmitter<string>"),r.Wb(),r.Wb(),r.Xb(162,"td"),r.Pc(163,"-"),r.Wb(),r.Sb(164,"td"),r.Wb(),r.Xb(165,"tr"),r.Xb(166,"td"),r.Xb(167,"code"),r.Pc(168,"(nzScroll)"),r.Wb(),r.Wb(),r.Xb(169,"td"),r.Pc(170,"The scroll function that is triggered when scrolling to an anchor."),r.Wb(),r.Xb(171,"td"),r.Xb(172,"code"),r.Pc(173,"EventEmitter<NzAnchorLinkComponent>"),r.Wb(),r.Wb(),r.Xb(174,"td"),r.Pc(175,"-"),r.Wb(),r.Sb(176,"td"),r.Wb(),r.Wb(),r.Wb(),r.Xb(177,"h3",29),r.Xb(178,"span"),r.Pc(179,"nz-link"),r.Wb(),r.Xb(180,"label",27),r.Pc(181,"component"),r.Wb(),r.Xb(182,"a",30),r.Pc(183,"#"),r.Wb(),r.Wb(),r.Xb(184,"table"),r.Xb(185,"thead"),r.Xb(186,"tr"),r.Xb(187,"th"),r.Pc(188,"Property"),r.Wb(),r.Xb(189,"th"),r.Pc(190,"Description"),r.Wb(),r.Xb(191,"th"),r.Pc(192,"Type"),r.Wb(),r.Xb(193,"th"),r.Pc(194,"Default"),r.Wb(),r.Wb(),r.Wb(),r.Xb(195,"tbody"),r.Xb(196,"tr"),r.Xb(197,"td"),r.Xb(198,"code"),r.Pc(199,"[nzHref]"),r.Wb(),r.Wb(),r.Xb(200,"td"),r.Pc(201,"target of hyperlink"),r.Wb(),r.Xb(202,"td"),r.Xb(203,"code"),r.Pc(204,"string"),r.Wb(),r.Wb(),r.Xb(205,"td"),r.Pc(206,"-"),r.Wb(),r.Wb(),r.Xb(207,"tr"),r.Xb(208,"td"),r.Xb(209,"code"),r.Pc(210,"[nzTitle]"),r.Wb(),r.Wb(),r.Xb(211,"td"),r.Pc(212,"content of hyperlink"),r.Wb(),r.Xb(213,"td"),r.Xb(214,"code"),r.Pc(215,"string | TemplateRef<void>"),r.Wb(),r.Wb(),r.Xb(216,"td"),r.Pc(217,"-"),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Yb(),r.Wb(),r.Wb()),2&n&&(r.Cb(1),r.rc("nzOffsetTop",16),r.Cb(1),r.rc("nzAffix",!1),r.Cb(43),r.rc("nzGutter",16),r.Cb(1),r.rc("nzXl",12)("nzSpan",24),r.Cb(1),r.rc("nzId","components-anchor-demo-basic")("nzLink","components-anchor-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/demo/basic.md"),r.Cb(5),r.rc("nzXl",12)("nzSpan",24),r.Cb(1),r.rc("nzId","components-anchor-demo-static")("nzLink","components-anchor-demo-static")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/anchor/demo/static.md"))},directives:[d.a,e.a,e.b,X.a,W.d,s.c,s.a,i.a,z,l],encapsulation:2}),n})(),m=(()=>{class n{}return n.\u0275mod=r.Ob({type:n}),n.\u0275inj=r.Nb({factory:function(b){return new(b||n)},imports:[[o.a,...a,t.h.forChild([{path:"en",component:p},{path:"zh",component:h}])]]}),n})()}}]);