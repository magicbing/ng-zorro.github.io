!function(){function n(n){return function(n){if(Array.isArray(n))return e(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);"Object"===o&&n.constructor&&(o=n.constructor.name);if("Map"===o||"Set"===o)return Array.from(n);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return e(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function c(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{DWCk:function(e,o,a){"use strict";a.r(o),a.d(o,"NzDemoTagModule",function(){return V});var b,r=a("tyNb"),i=a("WGB2"),d=a("tKaq"),l=a("klHs"),z=a("MOHP"),s=[d.b,l.e,z.b],g=a("rKiv"),m=a("fXoL"),u=a("utH8"),p=a("l83q"),f=a("pk25"),h=a("T+9E"),W=((b=function(){function n(){t(this,n)}return c(n,[{key:"onClose",value:function(){console.log("tag was closed.")}},{key:"preventDefault",value:function(n){n.preventDefault(),n.stopPropagation(),console.log("tag can not be closed.")}}]),n}()).\u0275fac=function(n){return new(n||b)},b.\u0275cmp=m.Kb({type:b,selectors:[["nz-demo-tag-basic"]],decls:9,vars:0,consts:[["href","https://github.com/NG-ZORRO/ng-zorro-antd"],["nzMode","closeable",3,"nzOnClose"]],template:function(n,e){1&n&&(m.Xb(0,"nz-tag"),m.Pc(1,"Tag 1"),m.Wb(),m.Xb(2,"nz-tag"),m.Xb(3,"a",0),m.Pc(4,"Link"),m.Wb(),m.Wb(),m.Xb(5,"nz-tag",1),m.fc("nzOnClose",function(){return e.onClose()}),m.Pc(6,"Tag 2"),m.Wb(),m.Xb(7,"nz-tag",1),m.fc("nzOnClose",function(n){return e.preventDefault(n)}),m.Pc(8,"Prevent Default"),m.Wb())},directives:[d.a],encapsulation:2}),b),X=a("ofXK"),P=a("3Pt+"),C=["inputElement"];function k(n,e){if(1&n){var t=m.Zb();m.Xb(0,"nz-tag",3),m.fc("nzOnClose",function(){m.Ec(t);var n=e.$implicit;return m.jc().handleClose(n)}),m.Pc(1),m.Wb()}if(2&n){var o=e.$implicit,c=e.index,a=m.jc();m.rc("nzMode",0===c?"default":"closeable"),m.Cb(1),m.Rc(" ",a.sliceTagName(o)," ")}}function T(n,e){if(1&n){var t=m.Zb();m.Xb(0,"nz-tag",4),m.fc("click",function(){return m.Ec(t),m.jc().showInput()}),m.Sb(1,"i",5),m.Pc(2," New Tag "),m.Wb()}}function v(n,e){if(1&n){var t=m.Zb();m.Xb(0,"input",6,7),m.fc("ngModelChange",function(n){return m.Ec(t),m.jc().inputValue=n})("blur",function(){return m.Ec(t),m.jc().handleInputConfirm()})("keydown.enter",function(){return m.Ec(t),m.jc().handleInputConfirm()}),m.Wb()}if(2&n){var o=m.jc();m.rc("ngModel",o.inputValue)}}var y,I=((y=function(){function e(){t(this,e),this.tags=["Unremovable","Tag 2","Tag 3"],this.inputVisible=!1,this.inputValue=""}return c(e,[{key:"handleClose",value:function(n){this.tags=this.tags.filter(function(e){return e!==n})}},{key:"sliceTagName",value:function(n){return n.length>20?"".concat(n.slice(0,20),"..."):n}},{key:"showInput",value:function(){var n=this;this.inputVisible=!0,setTimeout(function(){var e;null===(e=n.inputElement)||void 0===e||e.nativeElement.focus()},10)}},{key:"handleInputConfirm",value:function(){this.inputValue&&-1===this.tags.indexOf(this.inputValue)&&(this.tags=[].concat(n(this.tags),[this.inputValue])),this.inputValue="",this.inputVisible=!1}}]),e}()).\u0275fac=function(n){return new(n||y)},y.\u0275cmp=m.Kb({type:y,selectors:[["nz-demo-tag-control"]],viewQuery:function(n,e){var t;1&n&&m.Uc(C,1),2&n&&m.Ac(t=m.gc())&&(e.inputElement=t.first)},decls:3,vars:3,consts:[[3,"nzMode","nzOnClose",4,"ngFor","ngForOf"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],["nz-input","","nzSize","small","type","text","style","width: 78px;",3,"ngModel","ngModelChange","blur","keydown.enter",4,"ngIf"],[3,"nzMode","nzOnClose"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["nz-input","","nzSize","small","type","text",2,"width","78px",3,"ngModel","ngModelChange","blur","keydown.enter"],["inputElement",""]],template:function(n,e){1&n&&(m.Nc(0,k,2,2,"nz-tag",0),m.Nc(1,T,3,0,"nz-tag",1),m.Nc(2,v,2,1,"input",2)),2&n&&(m.rc("ngForOf",e.tags),m.Cb(1),m.rc("ngIf",!e.inputVisible),m.Cb(1),m.rc("ngIf",e.inputVisible))},directives:[X.n,X.o,d.a,z.a,l.b,P.d,P.p,P.s],styles:[".editable-tag[_ngcontent-%COMP%] {\n        background: rgb(255, 255, 255);\n        border-style: dashed;\n      }"]}),y);function S(n,e){if(1&n){var t=m.Zb();m.Xb(0,"nz-tag",1),m.fc("nzCheckedChange",function(n){m.Ec(t);var o=e.$implicit;return m.jc().handleChange(n,o)}),m.Pc(1),m.Wb()}if(2&n){var o=e.$implicit,c=m.jc();m.rc("nzChecked",c.selectedTags.indexOf(o)>-1),m.Cb(1),m.Rc(" ",o," ")}}var w,H,x,O,N,R,G,M,L=["Movie","Books","Music","Sports"],E=((M=function(){function n(){t(this,n),this.hotTags=L,this.selectedTags=[]}return c(n,[{key:"handleChange",value:function(n,e){n?this.selectedTags.push(e):this.selectedTags=this.selectedTags.filter(function(n){return n!==e}),console.log("You are interested in: ",this.selectedTags)}}]),n}()).\u0275fac=function(n){return new(n||M)},M.\u0275cmp=m.Kb({type:M,selectors:[["nz-demo-tag-hot-tags"]],decls:3,vars:1,consts:[["nzMode","checkable",3,"nzChecked","nzCheckedChange",4,"ngFor","ngForOf"],["nzMode","checkable",3,"nzChecked","nzCheckedChange"]],template:function(n,e){1&n&&(m.Xb(0,"strong"),m.Pc(1,"Categories: "),m.Wb(),m.Nc(2,S,2,2,"nz-tag",0)),2&n&&(m.Cb(2),m.rc("ngForOf",e.hotTags))},directives:[X.n,d.a],encapsulation:2}),M),A=((G=function n(){t(this,n)}).\u0275fac=function(n){return new(n||G)},G.\u0275cmp=m.Kb({type:G,selectors:[["nz-demo-tag-status"]],decls:36,vars:0,consts:[["nzColor","success"],["nzColor","processing"],["nzColor","error"],["nzColor","warning"],["nzColor","default"],["nz-icon","","nzType","check-circle"],["nz-icon","","nzType","sync","nzSpin",""],["nz-icon","","nzType","close-circle"],["nz-icon","","nzType","exclamation-circle"],["nz-icon","","nzType","clock-circle"]],template:function(n,e){1&n&&(m.Xb(0,"div"),m.Xb(1,"h4"),m.Pc(2,"Without icon"),m.Wb(),m.Xb(3,"nz-tag",0),m.Pc(4,"success"),m.Wb(),m.Xb(5,"nz-tag",1),m.Pc(6,"processing"),m.Wb(),m.Xb(7,"nz-tag",2),m.Pc(8,"error"),m.Wb(),m.Xb(9,"nz-tag",3),m.Pc(10,"warning"),m.Wb(),m.Xb(11,"nz-tag",4),m.Pc(12,"default"),m.Wb(),m.Wb(),m.Xb(13,"div"),m.Xb(14,"h4"),m.Pc(15,"With icon"),m.Wb(),m.Xb(16,"nz-tag",0),m.Sb(17,"i",5),m.Xb(18,"span"),m.Pc(19,"success"),m.Wb(),m.Wb(),m.Xb(20,"nz-tag",1),m.Sb(21,"i",6),m.Xb(22,"span"),m.Pc(23,"processing"),m.Wb(),m.Wb(),m.Xb(24,"nz-tag",2),m.Sb(25,"i",7),m.Xb(26,"span"),m.Pc(27,"error"),m.Wb(),m.Wb(),m.Xb(28,"nz-tag",3),m.Sb(29,"i",8),m.Xb(30,"span"),m.Pc(31,"warning"),m.Wb(),m.Wb(),m.Xb(32,"nz-tag",4),m.Sb(33,"i",9),m.Xb(34,"span"),m.Pc(35,"default"),m.Wb(),m.Wb(),m.Wb())},directives:[d.a,z.a],encapsulation:2}),G),D=((R=function n(){t(this,n)}).\u0275fac=function(n){return new(n||R)},R.\u0275cmp=m.Kb({type:R,selectors:[["nz-demo-tag-colorful"]],decls:36,vars:15,consts:[[2,"margin-bottom","16px"],[3,"nzColor"],[2,"margin","16px 0px"]],template:function(n,e){1&n&&(m.Xb(0,"h4",0),m.Pc(1,"Presets:"),m.Wb(),m.Xb(2,"div"),m.Xb(3,"nz-tag",1),m.Pc(4,"magenta"),m.Wb(),m.Xb(5,"nz-tag",1),m.Pc(6,"red"),m.Wb(),m.Xb(7,"nz-tag",1),m.Pc(8,"volcano"),m.Wb(),m.Xb(9,"nz-tag",1),m.Pc(10,"orange"),m.Wb(),m.Xb(11,"nz-tag",1),m.Pc(12,"gold"),m.Wb(),m.Xb(13,"nz-tag",1),m.Pc(14,"lime"),m.Wb(),m.Xb(15,"nz-tag",1),m.Pc(16,"green"),m.Wb(),m.Xb(17,"nz-tag",1),m.Pc(18,"cyan"),m.Wb(),m.Xb(19,"nz-tag",1),m.Pc(20,"blue"),m.Wb(),m.Xb(21,"nz-tag",1),m.Pc(22,"geekblue"),m.Wb(),m.Xb(23,"nz-tag",1),m.Pc(24,"purple"),m.Wb(),m.Wb(),m.Xb(25,"h4",2),m.Pc(26,"Custom:"),m.Wb(),m.Xb(27,"div"),m.Xb(28,"nz-tag",1),m.Pc(29,"#f50"),m.Wb(),m.Xb(30,"nz-tag",1),m.Pc(31,"#2db7f5"),m.Wb(),m.Xb(32,"nz-tag",1),m.Pc(33,"#87d068"),m.Wb(),m.Xb(34,"nz-tag",1),m.Pc(35,"#108ee9"),m.Wb(),m.Wb()),2&n&&(m.Cb(3),m.rc("nzColor","magenta"),m.Cb(2),m.rc("nzColor","red"),m.Cb(2),m.rc("nzColor","volcano"),m.Cb(2),m.rc("nzColor","orange"),m.Cb(2),m.rc("nzColor","gold"),m.Cb(2),m.rc("nzColor","lime"),m.Cb(2),m.rc("nzColor","green"),m.Cb(2),m.rc("nzColor","cyan"),m.Cb(2),m.rc("nzColor","blue"),m.Cb(2),m.rc("nzColor","geekblue"),m.Cb(2),m.rc("nzColor","purple"),m.Cb(5),m.rc("nzColor","#f50"),m.Cb(2),m.rc("nzColor","#2db7f5"),m.Cb(2),m.rc("nzColor","#87d068"),m.Cb(2),m.rc("nzColor","#108ee9"))},directives:[d.a],styles:["\n      .ant-tag {\n        margin-bottom: 8px;\n      }\n    "],encapsulation:2}),R),Z=((N=function(){function n(){t(this,n)}return c(n,[{key:"checkChange",value:function(n){console.log(n)}}]),n}()).\u0275fac=function(n){return new(n||N)},N.\u0275cmp=m.Kb({type:N,selectors:[["nz-demo-tag-checkable"]],decls:6,vars:3,consts:[["nzMode","checkable",3,"nzChecked","nzCheckedChange"]],template:function(n,e){1&n&&(m.Xb(0,"nz-tag",0),m.fc("nzCheckedChange",function(n){return e.checkChange(n)}),m.Pc(1,"Tag1"),m.Wb(),m.Xb(2,"nz-tag",0),m.fc("nzCheckedChange",function(n){return e.checkChange(n)}),m.Pc(3,"Tag2"),m.Wb(),m.Xb(4,"nz-tag",0),m.fc("nzCheckedChange",function(n){return e.checkChange(n)}),m.Pc(5,"Tag3"),m.Wb()),2&n&&(m.rc("nzChecked",!0),m.Cb(2),m.rc("nzChecked",!0),m.Cb(2),m.rc("nzChecked",!0))},directives:[d.a],encapsulation:2}),N),Y=((O=function n(){t(this,n)}).\u0275fac=function(n){return new(n||O)},O.\u0275cmp=m.Kb({type:O,selectors:[["nz-demo-tag-icon"]],decls:16,vars:0,consts:[["nzColor","#55acee"],["nz-icon","","nzType","twitter"],["nzColor","#cd201f"],["nz-icon","","nzType","youtube"],["nzColor","#3b5999"],["nz-icon","","nzType","facebook"],["nz-icon","","nzType","linkedin"]],template:function(n,e){1&n&&(m.Xb(0,"nz-tag",0),m.Sb(1,"i",1),m.Xb(2,"span"),m.Pc(3,"Twitter"),m.Wb(),m.Wb(),m.Xb(4,"nz-tag",2),m.Sb(5,"i",3),m.Xb(6,"span"),m.Pc(7,"Youtube"),m.Wb(),m.Wb(),m.Xb(8,"nz-tag",4),m.Sb(9,"i",5),m.Xb(10,"span"),m.Pc(11,"Facebook"),m.Wb(),m.Wb(),m.Xb(12,"nz-tag",0),m.Sb(13,"i",6),m.Xb(14,"span"),m.Pc(15,"LinkedIn"),m.Wb(),m.Wb())},directives:[d.a,z.a],encapsulation:2}),O),j=((x=function(){function n(){t(this,n),this.expanded=!1}return c(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach(function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()})}}]),n}()).\u0275fac=function(n){return new(n||x)},x.\u0275cmp=m.Kb({type:x,selectors:[["nz-demo-tag"]],viewQuery:function(n,e){var t;1&n&&m.Uc(g.a,1),2&n&&m.Ac(t=m.gc())&&(e.codeBoxes=t)},decls:210,vars:35,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-tag-demo-basic","nzTitle","\u57fa\u672c"],["nzHref","#components-tag-demo-colorful","nzTitle","\u591a\u5f69\u6807\u7b7e"],["nzHref","#components-tag-demo-control","nzTitle","\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664"],["nzHref","#components-tag-demo-checkable","nzTitle","\u53ef\u9009\u62e9"],["nzHref","#components-tag-demo-hot-tags","nzTitle","\u70ed\u95e8\u6807\u7b7e"],["nzHref","#components-tag-demo-icon","nzTitle","\u56fe\u6807\u6309\u94ae"],["nzHref","#components-tag-demo-status","nzTitle","\u9884\u8bbe\u72b6\u6001\u7684\u6807\u7b7e"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c","nzSelector","nz-demo-tag-basic","nzGenerateCommand","ng g ng-zorro-antd:tag-basic <name>","nzComponentName","NzDemoTagBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664","nzSelector","nz-demo-tag-control","nzGenerateCommand","ng g ng-zorro-antd:tag-control <name>","nzComponentName","NzDemoTagControlComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u70ed\u95e8\u6807\u7b7e","nzSelector","nz-demo-tag-hot-tags","nzGenerateCommand","ng g ng-zorro-antd:tag-hot-tags <name>","nzComponentName","NzDemoTagHotTagsComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u9884\u8bbe\u72b6\u6001\u7684\u6807\u7b7e","nzSelector","nz-demo-tag-status","nzGenerateCommand","ng g ng-zorro-antd:tag-status <name>","nzComponentName","NzDemoTagStatusComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u591a\u5f69\u6807\u7b7e","nzSelector","nz-demo-tag-colorful","nzGenerateCommand","ng g ng-zorro-antd:tag-colorful <name>","nzComponentName","NzDemoTagColorfulComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u53ef\u9009\u62e9","nzSelector","nz-demo-tag-checkable","nzGenerateCommand","ng g ng-zorro-antd:tag-checkable <name>","nzComponentName","NzDemoTagCheckableComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u56fe\u6807\u6309\u94ae","nzSelector","nz-demo-tag-icon","nzGenerateCommand","ng g ng-zorro-antd:tag-icon <name>","nzComponentName","NzDemoTagIconComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-tag"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-tag'",1,"anchor"]],template:function(n,e){1&n&&(m.Xb(0,"article"),m.Xb(1,"nz-affix",0),m.Xb(2,"nz-anchor",1),m.fc("nzClick",function(n){return e.goLink(n)}),m.Sb(3,"nz-link",2),m.Sb(4,"nz-link",3),m.Sb(5,"nz-link",4),m.Sb(6,"nz-link",5),m.Sb(7,"nz-link",6),m.Sb(8,"nz-link",7),m.Sb(9,"nz-link",8),m.Sb(10,"nz-link",9),m.Wb(),m.Wb(),m.Xb(11,"section",10),m.Xb(12,"h1"),m.Pc(13,"Tag"),m.Xb(14,"span",11),m.Pc(15,"\u6807\u7b7e"),m.Wb(),m.Sb(16,"span",12),m.Xb(17,"a",13),m.Sb(18,"i",14),m.Wb(),m.Wb(),m.Xb(19,"section",10),m.Rb(),m.Xb(20,"p"),m.Pc(21,"\u8fdb\u884c\u6807\u8bb0\u548c\u5206\u7c7b\u7684\u5c0f\u6807\u7b7e\u3002"),m.Wb(),m.Xb(22,"h2",15),m.Xb(23,"span"),m.Pc(24,"\u4f55\u65f6\u4f7f\u7528"),m.Wb(),m.Xb(25,"a",16),m.Pc(26,"#"),m.Wb(),m.Wb(),m.Xb(27,"ul"),m.Xb(28,"li"),m.Pc(29," \u7528\u4e8e\u6807\u8bb0\u4e8b\u7269\u7684\u5c5e\u6027\u548c\u7ef4\u5ea6\u3002"),m.Wb(),m.Xb(30,"li"),m.Pc(31," \u8fdb\u884c\u5206\u7c7b\u3002"),m.Wb(),m.Wb(),m.Xb(32,"pre",17),m.Xb(33,"code"),m.Xb(34,"span",18),m.Pc(35,"import"),m.Wb(),m.Pc(36," "),m.Xb(37,"span",19),m.Pc(38,"{"),m.Wb(),m.Pc(39," NzTagModule "),m.Xb(40,"span",19),m.Pc(41,"}"),m.Wb(),m.Pc(42," "),m.Xb(43,"span",18),m.Pc(44,"from"),m.Wb(),m.Pc(45," "),m.Xb(46,"span",20),m.Pc(47,"'ng-zorro-antd/tag'"),m.Wb(),m.Xb(48,"span",19),m.Pc(49,";"),m.Wb(),m.Wb(),m.Wb(),m.Yb(),m.Wb(),m.Xb(50,"h2"),m.Xb(51,"span"),m.Pc(52,"\u4ee3\u7801\u6f14\u793a"),m.Wb(),m.Xb(53,"i",21),m.fc("click",function(){return e.expandAllCode()}),m.Wb(),m.Wb(),m.Wb(),m.Xb(54,"div",22),m.Xb(55,"div",23),m.Xb(56,"nz-code-box",24),m.Sb(57,"nz-demo-tag-basic",25),m.Xb(58,"div",26),m.Rb(),m.Xb(59,"p"),m.Pc(60,"\u57fa\u672c\u6807\u7b7e\u7684\u7528\u6cd5\uff0c\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 "),m.Xb(61,"code"),m.Pc(62,'nzMode="closeable"'),m.Wb(),m.Pc(63," \u53d8\u4e3a\u53ef\u5173\u95ed\u6807\u7b7e\u3002\u53ef\u5173\u95ed\u6807\u7b7e\u5177\u6709 "),m.Xb(64,"code"),m.Pc(65,"nzOnClose"),m.Wb(),m.Pc(66," \u4e8b\u4ef6\u3002"),m.Wb(),m.Yb(),m.Wb(),m.Wb(),m.Xb(67,"nz-code-box",27),m.Sb(68,"nz-demo-tag-control",25),m.Xb(69,"div",26),m.Rb(),m.Xb(70,"p"),m.Pc(71,"\u7528\u6570\u7ec4\u751f\u6210\u4e00\u7ec4\u6807\u7b7e\uff0c\u53ef\u4ee5\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664\u3002"),m.Wb(),m.Yb(),m.Wb(),m.Wb(),m.Xb(72,"nz-code-box",28),m.Sb(73,"nz-demo-tag-hot-tags",25),m.Xb(74,"div",26),m.Rb(),m.Xb(75,"p"),m.Pc(76,"\u9009\u62e9\u4f60\u611f\u5174\u8da3\u7684\u8bdd\u9898\u3002"),m.Wb(),m.Yb(),m.Wb(),m.Wb(),m.Xb(77,"nz-code-box",29),m.Sb(78,"nz-demo-tag-status",25),m.Xb(79,"div",26),m.Rb(),m.Xb(80,"p"),m.Pc(81,"\u9884\u8bbe\u4e94\u79cd\u72b6\u6001\u989c\u8272\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e "),m.Xb(82,"code"),m.Pc(83,"nzColor"),m.Wb(),m.Pc(84," \u4e3a "),m.Xb(85,"code"),m.Pc(86,"success"),m.Wb(),m.Pc(87,"\u3001 "),m.Xb(88,"code"),m.Pc(89,"processing"),m.Wb(),m.Pc(90,"\u3001"),m.Xb(91,"code"),m.Pc(92,"error"),m.Wb(),m.Pc(93,"\u3001"),m.Xb(94,"code"),m.Pc(95,"default"),m.Wb(),m.Pc(96,"\u3001"),m.Xb(97,"code"),m.Pc(98,"warning"),m.Wb(),m.Pc(99," \u6765\u4ee3\u8868\u4e0d\u540c\u7684\u72b6\u6001\u3002"),m.Wb(),m.Yb(),m.Wb(),m.Wb(),m.Wb(),m.Xb(100,"div",23),m.Xb(101,"nz-code-box",30),m.Sb(102,"nz-demo-tag-colorful",25),m.Xb(103,"div",26),m.Rb(),m.Xb(104,"p"),m.Pc(105,"\u6211\u4eec\u6dfb\u52a0\u4e86\u591a\u79cd\u9884\u8bbe\u8272\u5f69\u7684\u6807\u7b7e\u6837\u5f0f\uff0c\u7528\u4f5c\u4e0d\u540c\u573a\u666f\u4f7f\u7528\u3002\u5982\u679c\u9884\u8bbe\u503c\u4e0d\u80fd\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u5177\u4f53\u7684\u8272\u503c\u3002"),m.Wb(),m.Yb(),m.Wb(),m.Wb(),m.Xb(106,"nz-code-box",31),m.Sb(107,"nz-demo-tag-checkable",25),m.Xb(108,"div",26),m.Rb(),m.Xb(109,"p"),m.Pc(110,"\u53ef\u901a\u8fc7 "),m.Xb(111,"code"),m.Pc(112,'nzMode="checkable"'),m.Wb(),m.Pc(113," \u5b9e\u73b0\u7c7b\u4f3c Checkbox \u7684\u6548\u679c\uff0c\u70b9\u51fb\u5207\u6362\u9009\u4e2d\u6548\u679c\u3002"),m.Wb(),m.Yb(),m.Wb(),m.Wb(),m.Xb(114,"nz-code-box",32),m.Sb(115,"nz-demo-tag-icon",25),m.Xb(116,"div",26),m.Rb(),m.Xb(117,"p"),m.Pc(118,"\u5728 tag \u7ec4\u4ef6\u5185\u5d4c\u5165 icon\u3002"),m.Wb(),m.Yb(),m.Wb(),m.Wb(),m.Wb(),m.Wb(),m.Xb(119,"section",33),m.Rb(),m.Xb(120,"h2",34),m.Xb(121,"span"),m.Pc(122,"API"),m.Wb(),m.Xb(123,"a",35),m.Pc(124,"#"),m.Wb(),m.Wb(),m.Xb(125,"h3",36),m.Xb(126,"span"),m.Pc(127,"nz-tag"),m.Wb(),m.Xb(128,"label",37),m.Pc(129,"component"),m.Wb(),m.Xb(130,"a",38),m.Pc(131,"#"),m.Wb(),m.Wb(),m.Xb(132,"table"),m.Xb(133,"thead"),m.Xb(134,"tr"),m.Xb(135,"th"),m.Pc(136,"\u53c2\u6570"),m.Wb(),m.Xb(137,"th"),m.Pc(138,"\u8bf4\u660e"),m.Wb(),m.Xb(139,"th"),m.Pc(140,"\u7c7b\u578b"),m.Wb(),m.Xb(141,"th"),m.Pc(142,"\u9ed8\u8ba4\u503c"),m.Wb(),m.Wb(),m.Wb(),m.Xb(143,"tbody"),m.Xb(144,"tr"),m.Xb(145,"td"),m.Xb(146,"code"),m.Pc(147,"[nzMode]"),m.Wb(),m.Wb(),m.Xb(148,"td"),m.Pc(149,"\u8bbe\u5b9a\u6807\u7b7e\u5de5\u4f5c\u7684\u6a21\u5f0f"),m.Wb(),m.Xb(150,"td"),m.Xb(151,"code"),m.Pc(152,"'closeable' | 'default' | 'checkable'"),m.Wb(),m.Wb(),m.Xb(153,"td"),m.Xb(154,"code"),m.Pc(155,"'default'"),m.Wb(),m.Wb(),m.Wb(),m.Xb(156,"tr"),m.Xb(157,"td"),m.Xb(158,"code"),m.Pc(159,"[nzChecked]"),m.Wb(),m.Wb(),m.Xb(160,"td"),m.Pc(161,"\u8bbe\u7f6e\u6807\u7b7e\u7684\u9009\u4e2d\u72b6\u6001\uff0c\u53ef\u53cc\u5411\u7ed1\u5b9a\uff0c\u5728 "),m.Xb(162,"code"),m.Pc(163,'nzMode="checkable"'),m.Wb(),m.Pc(164," \u65f6\u53ef\u7528"),m.Wb(),m.Xb(165,"td"),m.Xb(166,"code"),m.Pc(167,"boolean"),m.Wb(),m.Wb(),m.Xb(168,"td"),m.Xb(169,"code"),m.Pc(170,"false"),m.Wb(),m.Wb(),m.Wb(),m.Xb(171,"tr"),m.Xb(172,"td"),m.Xb(173,"code"),m.Pc(174,"[nzColor]"),m.Wb(),m.Wb(),m.Xb(175,"td"),m.Pc(176,"\u6807\u7b7e\u8272"),m.Wb(),m.Xb(177,"td"),m.Xb(178,"code"),m.Pc(179,"string"),m.Wb(),m.Wb(),m.Xb(180,"td"),m.Pc(181,"-"),m.Wb(),m.Wb(),m.Xb(182,"tr"),m.Xb(183,"td"),m.Xb(184,"code"),m.Pc(185,"(nzOnClose)"),m.Wb(),m.Wb(),m.Xb(186,"td"),m.Pc(187,"\u5173\u95ed\u65f6\u7684\u56de\u8c03\uff0c\u5728 "),m.Xb(188,"code"),m.Pc(189,'nzMode="closable"'),m.Wb(),m.Pc(190," \u65f6\u53ef\u7528"),m.Wb(),m.Xb(191,"td"),m.Xb(192,"code"),m.Pc(193,"EventEmitter<MouseEvent>"),m.Wb(),m.Wb(),m.Xb(194,"td"),m.Pc(195,"-"),m.Wb(),m.Wb(),m.Xb(196,"tr"),m.Xb(197,"td"),m.Xb(198,"code"),m.Pc(199,"(nzCheckedChange)"),m.Wb(),m.Wb(),m.Xb(200,"td"),m.Pc(201,"\u8bbe\u7f6e\u6807\u7b7e\u7684\u9009\u4e2d\u72b6\u6001\u7684\u56de\u8c03\uff0c\u5728 "),m.Xb(202,"code"),m.Pc(203,'nzMode="checkable"'),m.Wb(),m.Pc(204," \u65f6\u53ef\u7528"),m.Wb(),m.Xb(205,"td"),m.Xb(206,"code"),m.Pc(207,"EventEmitter<void>"),m.Wb(),m.Wb(),m.Xb(208,"td"),m.Pc(209,"-"),m.Wb(),m.Wb(),m.Wb(),m.Wb(),m.Yb(),m.Wb(),m.Wb()),2&n&&(m.Cb(1),m.rc("nzOffsetTop",16),m.Cb(1),m.rc("nzAffix",!1),m.Cb(52),m.rc("nzGutter",16),m.Cb(1),m.rc("nzXl",12)("nzSpan",24),m.Cb(1),m.rc("nzId","components-tag-demo-basic")("nzLink","components-tag-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/basic.md"),m.Cb(11),m.rc("nzId","components-tag-demo-control")("nzLink","components-tag-demo-control")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/control.md"),m.Cb(5),m.rc("nzId","components-tag-demo-hot-tags")("nzLink","components-tag-demo-hot-tags")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/hot-tags.md"),m.Cb(5),m.rc("nzId","components-tag-demo-status")("nzLink","components-tag-demo-status")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/status.md"),m.Cb(23),m.rc("nzXl",12)("nzSpan",24),m.Cb(1),m.rc("nzId","components-tag-demo-colorful")("nzLink","components-tag-demo-colorful")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/colorful.md"),m.Cb(5),m.rc("nzId","components-tag-demo-checkable")("nzLink","components-tag-demo-checkable")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/checkable.md"),m.Cb(8),m.rc("nzId","components-tag-demo-icon")("nzLink","components-tag-demo-icon")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/icon.md"))},directives:[u.a,p.a,p.b,z.a,f.d,h.c,h.a,g.a,W,I,E,A,D,Z,Y],encapsulation:2}),x),K=((H=function(){function n(){t(this,n),this.expanded=!1}return c(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach(function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()})}}]),n}()).\u0275fac=function(n){return new(n||H)},H.\u0275cmp=m.Kb({type:H,selectors:[["nz-demo-tag"]],viewQuery:function(n,e){var t;1&n&&m.Uc(g.a,1),2&n&&m.Ac(t=m.gc())&&(e.codeBoxes=t)},decls:207,vars:35,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-tag-demo-basic","nzTitle","Basic"],["nzHref","#components-tag-demo-colorful","nzTitle","Colorful Tag"],["nzHref","#components-tag-demo-control","nzTitle","Add & Remove Dynamically"],["nzHref","#components-tag-demo-checkable","nzTitle","Checkable"],["nzHref","#components-tag-demo-hot-tags","nzTitle","Hot Tags"],["nzHref","#components-tag-demo-icon","nzTitle","Icon"],["nzHref","#components-tag-demo-status","nzTitle","Status Tag"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-tag-basic","nzGenerateCommand","ng g ng-zorro-antd:tag-basic <name>","nzComponentName","NzDemoTagBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Add & Remove Dynamically","nzSelector","nz-demo-tag-control","nzGenerateCommand","ng g ng-zorro-antd:tag-control <name>","nzComponentName","NzDemoTagControlComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Hot Tags","nzSelector","nz-demo-tag-hot-tags","nzGenerateCommand","ng g ng-zorro-antd:tag-hot-tags <name>","nzComponentName","NzDemoTagHotTagsComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Status Tag","nzSelector","nz-demo-tag-status","nzGenerateCommand","ng g ng-zorro-antd:tag-status <name>","nzComponentName","NzDemoTagStatusComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Colorful Tag","nzSelector","nz-demo-tag-colorful","nzGenerateCommand","ng g ng-zorro-antd:tag-colorful <name>","nzComponentName","NzDemoTagColorfulComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Checkable","nzSelector","nz-demo-tag-checkable","nzGenerateCommand","ng g ng-zorro-antd:tag-checkable <name>","nzComponentName","NzDemoTagCheckableComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Icon","nzSelector","nz-demo-tag-icon","nzGenerateCommand","ng g ng-zorro-antd:tag-icon <name>","nzComponentName","NzDemoTagIconComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-tag"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-tag'",1,"anchor"]],template:function(n,e){1&n&&(m.Xb(0,"article"),m.Xb(1,"nz-affix",0),m.Xb(2,"nz-anchor",1),m.fc("nzClick",function(n){return e.goLink(n)}),m.Sb(3,"nz-link",2),m.Sb(4,"nz-link",3),m.Sb(5,"nz-link",4),m.Sb(6,"nz-link",5),m.Sb(7,"nz-link",6),m.Sb(8,"nz-link",7),m.Sb(9,"nz-link",8),m.Sb(10,"nz-link",9),m.Wb(),m.Wb(),m.Xb(11,"section",10),m.Xb(12,"h1"),m.Pc(13,"Tag"),m.Sb(14,"span",11),m.Sb(15,"span",12),m.Xb(16,"a",13),m.Sb(17,"i",14),m.Wb(),m.Wb(),m.Xb(18,"section",10),m.Rb(),m.Xb(19,"p"),m.Pc(20,"Tag for categorizing or markup."),m.Wb(),m.Xb(21,"h2",15),m.Xb(22,"span"),m.Pc(23,"When To Use"),m.Wb(),m.Xb(24,"a",16),m.Pc(25,"#"),m.Wb(),m.Wb(),m.Xb(26,"ul"),m.Xb(27,"li"),m.Xb(28,"p"),m.Pc(29," It can be used to tag by dimension or property."),m.Wb(),m.Wb(),m.Xb(30,"li"),m.Xb(31,"p"),m.Pc(32," When categorizing."),m.Wb(),m.Wb(),m.Wb(),m.Xb(33,"pre",17),m.Xb(34,"code"),m.Xb(35,"span",18),m.Pc(36,"import"),m.Wb(),m.Pc(37," "),m.Xb(38,"span",19),m.Pc(39,"{"),m.Wb(),m.Pc(40," NzTagModule "),m.Xb(41,"span",19),m.Pc(42,"}"),m.Wb(),m.Pc(43," "),m.Xb(44,"span",18),m.Pc(45,"from"),m.Wb(),m.Pc(46," "),m.Xb(47,"span",20),m.Pc(48,"'ng-zorro-antd/tag'"),m.Wb(),m.Xb(49,"span",19),m.Pc(50,";"),m.Wb(),m.Wb(),m.Wb(),m.Yb(),m.Wb(),m.Xb(51,"h2"),m.Xb(52,"span"),m.Pc(53,"Examples"),m.Wb(),m.Xb(54,"i",21),m.fc("click",function(){return e.expandAllCode()}),m.Wb(),m.Wb(),m.Wb(),m.Xb(55,"div",22),m.Xb(56,"div",23),m.Xb(57,"nz-code-box",24),m.Sb(58,"nz-demo-tag-basic",25),m.Xb(59,"div",26),m.Rb(),m.Xb(60,"p"),m.Pc(61,"Usage of basic Tag, and it could be closeable by set "),m.Xb(62,"code"),m.Pc(63,'nzMode="closeable"'),m.Wb(),m.Pc(64," property. Closeable Tag supports "),m.Xb(65,"code"),m.Pc(66,"nzOnClose"),m.Wb(),m.Pc(67," events."),m.Wb(),m.Yb(),m.Wb(),m.Wb(),m.Xb(68,"nz-code-box",27),m.Sb(69,"nz-demo-tag-control",25),m.Xb(70,"div",26),m.Rb(),m.Xb(71,"p"),m.Pc(72,"Generating a set of Tags by array, you can add and remove dynamically."),m.Wb(),m.Yb(),m.Wb(),m.Wb(),m.Xb(73,"nz-code-box",28),m.Sb(74,"nz-demo-tag-hot-tags",25),m.Xb(75,"div",26),m.Rb(),m.Xb(76,"p"),m.Pc(77,"Select your favourite topics."),m.Wb(),m.Yb(),m.Wb(),m.Wb(),m.Xb(78,"nz-code-box",29),m.Sb(79,"nz-demo-tag-status",25),m.Xb(80,"div",26),m.Rb(),m.Xb(81,"p"),m.Pc(82,"We preset five different colors, you can set "),m.Xb(83,"code"),m.Pc(84,"nzColor"),m.Wb(),m.Pc(85," property such as "),m.Xb(86,"code"),m.Pc(87,"success"),m.Wb(),m.Pc(88,","),m.Xb(89,"code"),m.Pc(90,"processing"),m.Wb(),m.Pc(91,","),m.Xb(92,"code"),m.Pc(93,"error"),m.Wb(),m.Pc(94,","),m.Xb(95,"code"),m.Pc(96,"default"),m.Wb(),m.Pc(97," and "),m.Xb(98,"code"),m.Pc(99,"warning"),m.Wb(),m.Pc(100," to indicate specific status."),m.Wb(),m.Yb(),m.Wb(),m.Wb(),m.Wb(),m.Xb(101,"div",23),m.Xb(102,"nz-code-box",30),m.Sb(103,"nz-demo-tag-colorful",25),m.Xb(104,"div",26),m.Rb(),m.Xb(105,"p"),m.Pc(106,"We preset a series of colorful tag style for different situation usage.\nAnd you can always set it to a hex color string for custom color."),m.Wb(),m.Yb(),m.Wb(),m.Wb(),m.Xb(107,"nz-code-box",31),m.Sb(108,"nz-demo-tag-checkable",25),m.Xb(109,"div",26),m.Rb(),m.Xb(110,"p"),m.Xb(111,"code"),m.Pc(112,'nzMode="checkable"'),m.Wb(),m.Pc(113," works like Checkbox, click it to toggle checked state."),m.Wb(),m.Yb(),m.Wb(),m.Wb(),m.Xb(114,"nz-code-box",32),m.Sb(115,"nz-demo-tag-icon",25),m.Xb(116,"div",26),m.Rb(),m.Xb(117,"p"),m.Pc(118,"Tag components can contain an icon."),m.Wb(),m.Yb(),m.Wb(),m.Wb(),m.Wb(),m.Wb(),m.Xb(119,"section",33),m.Rb(),m.Xb(120,"h2",34),m.Xb(121,"span"),m.Pc(122,"API"),m.Wb(),m.Xb(123,"a",35),m.Pc(124,"#"),m.Wb(),m.Wb(),m.Xb(125,"h3",36),m.Xb(126,"span"),m.Pc(127,"nz-tag"),m.Wb(),m.Xb(128,"label",37),m.Pc(129,"component"),m.Wb(),m.Xb(130,"a",38),m.Pc(131,"#"),m.Wb(),m.Wb(),m.Xb(132,"table"),m.Xb(133,"thead"),m.Xb(134,"tr"),m.Xb(135,"th"),m.Pc(136,"Property"),m.Wb(),m.Xb(137,"th"),m.Pc(138,"Description"),m.Wb(),m.Xb(139,"th"),m.Pc(140,"Type"),m.Wb(),m.Xb(141,"th"),m.Pc(142,"Default"),m.Wb(),m.Wb(),m.Wb(),m.Xb(143,"tbody"),m.Xb(144,"tr"),m.Xb(145,"td"),m.Xb(146,"code"),m.Pc(147,"[nzMode]"),m.Wb(),m.Wb(),m.Xb(148,"td"),m.Pc(149,"Mode of tag"),m.Wb(),m.Xb(150,"td"),m.Xb(151,"code"),m.Pc(152,"'closeable' | 'default' | 'checkable'"),m.Wb(),m.Wb(),m.Xb(153,"td"),m.Xb(154,"code"),m.Pc(155,"'default'"),m.Wb(),m.Wb(),m.Wb(),m.Xb(156,"tr"),m.Xb(157,"td"),m.Xb(158,"code"),m.Pc(159,"[nzChecked]"),m.Wb(),m.Wb(),m.Xb(160,"td"),m.Pc(161,"Checked status of Tag, double binding, only works when "),m.Xb(162,"code"),m.Pc(163,'nzMode="checkable"'),m.Wb(),m.Wb(),m.Xb(164,"td"),m.Xb(165,"code"),m.Pc(166,"boolean"),m.Wb(),m.Wb(),m.Xb(167,"td"),m.Xb(168,"code"),m.Pc(169,"false"),m.Wb(),m.Wb(),m.Wb(),m.Xb(170,"tr"),m.Xb(171,"td"),m.Xb(172,"code"),m.Pc(173,"[nzColor]"),m.Wb(),m.Wb(),m.Xb(174,"td"),m.Pc(175,"Color of the Tag"),m.Wb(),m.Xb(176,"td"),m.Xb(177,"code"),m.Pc(178,"string"),m.Wb(),m.Wb(),m.Xb(179,"td"),m.Pc(180,"-"),m.Wb(),m.Wb(),m.Xb(181,"tr"),m.Xb(182,"td"),m.Xb(183,"code"),m.Pc(184,"(nzOnClose)"),m.Wb(),m.Wb(),m.Xb(185,"td"),m.Pc(186,"Callback executed when tag is closed, only works when "),m.Xb(187,"code"),m.Pc(188,'nzMode="closable"'),m.Wb(),m.Wb(),m.Xb(189,"td"),m.Xb(190,"code"),m.Pc(191,"EventEmitter<MouseEvent>"),m.Wb(),m.Wb(),m.Xb(192,"td"),m.Pc(193,"-"),m.Wb(),m.Wb(),m.Xb(194,"tr"),m.Xb(195,"td"),m.Xb(196,"code"),m.Pc(197,"(nzCheckedChange)"),m.Wb(),m.Wb(),m.Xb(198,"td"),m.Pc(199,"Checked status change call back, only works when "),m.Xb(200,"code"),m.Pc(201,'nzMode="checkable"'),m.Wb(),m.Wb(),m.Xb(202,"td"),m.Xb(203,"code"),m.Pc(204,"EventEmitter<boolean>"),m.Wb(),m.Wb(),m.Xb(205,"td"),m.Pc(206,"-"),m.Wb(),m.Wb(),m.Wb(),m.Wb(),m.Yb(),m.Wb(),m.Wb()),2&n&&(m.Cb(1),m.rc("nzOffsetTop",16),m.Cb(1),m.rc("nzAffix",!1),m.Cb(53),m.rc("nzGutter",16),m.Cb(1),m.rc("nzXl",12)("nzSpan",24),m.Cb(1),m.rc("nzId","components-tag-demo-basic")("nzLink","components-tag-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/basic.md"),m.Cb(11),m.rc("nzId","components-tag-demo-control")("nzLink","components-tag-demo-control")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/control.md"),m.Cb(5),m.rc("nzId","components-tag-demo-hot-tags")("nzLink","components-tag-demo-hot-tags")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/hot-tags.md"),m.Cb(5),m.rc("nzId","components-tag-demo-status")("nzLink","components-tag-demo-status")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/status.md"),m.Cb(23),m.rc("nzXl",12)("nzSpan",24),m.Cb(1),m.rc("nzId","components-tag-demo-colorful")("nzLink","components-tag-demo-colorful")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/colorful.md"),m.Cb(5),m.rc("nzId","components-tag-demo-checkable")("nzLink","components-tag-demo-checkable")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/checkable.md"),m.Cb(7),m.rc("nzId","components-tag-demo-icon")("nzLink","components-tag-demo-icon")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/icon.md"))},directives:[u.a,p.a,p.b,z.a,f.d,h.c,h.a,g.a,W,I,E,A,D,Z,Y],encapsulation:2}),H),V=((w=function n(){t(this,n)}).\u0275fac=function(n){return new(n||w)},w.\u0275mod=m.Ob({type:w}),w.\u0275inj=m.Nb({imports:[[i.a].concat(s,[r.h.forChild([{path:"en",component:K},{path:"zh",component:j}])])]}),w)}}])}();