webpackJsonp([35],{"8BDE":function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n@Component({\n  selector: 'nz-demo-carousel-fade',\n  template: `\n    <nz-carousel [nzEffect]=\"'fade'\">\n      <div nz-carousel-content *ngFor=\"let index of array\"><h3>{{index}}</h3></div>\n    </nz-carousel>`,\n  styles  : [\n      `:host ::ng-deep .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n    h3 {\n      color: #fff;\n    }\n    `\n  ]\n})\nexport class NzDemoCarouselFadeComponent implements OnInit {\n  array = [];\n  constructor() {\n  }\n\n  ngOnInit() {\n    setTimeout(_ => {\n      this.array = [ 1, 2, 3, 4 ];\n    }, 500)\n  }\n}\n"},M1oM:function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-carousel-vertical',\n  template: `\n    <nz-carousel [nzVertical]=\"true\">\n      <div nz-carousel-content *ngFor=\"let index of array\"><h3>{{index}}</h3></div>\n    </nz-carousel>`,\n  styles  : [\n      `:host ::ng-deep .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n\n    h3 {\n      color: #fff;\n    }\n    `\n  ]\n})\nexport class NzDemoCarouselVerticalComponent implements OnInit {\n  array = [ 1, 2, 3 ]; // try dynamic change the array\n\n  constructor() {\n  }\n\n  ngOnInit() {\n    setTimeout(() => {\n      this.array = [ 1, 2, 3, 4 ];\n    }, 500)\n  }\n}\n"},P8w0:function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-carousel-basic',\n  template: `\n    <nz-carousel>\n      <div nz-carousel-content *ngFor=\"let index of array\"><h3>{{index}}</h3></div>\n    </nz-carousel>`,\n  styles  : [\n      `:host ::ng-deep .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n\n    h3 {\n      color: #fff;\n    }\n    `\n  ]\n})\nexport class NzDemoCarouselBasicComponent implements OnInit {\n  array = [ 1, 2, 3 ];\n\n  constructor() {\n  }\n\n  ngOnInit() {\n    setTimeout(_ => {\n      this.array = [ 1, 2, 3, 4 ];\n    }, 500)\n  }\n}\n"},Ygb9:function(l,n,u){"use strict";function t(l){return O._47(0,[(l()(),O._23(0,0,null,null,4,"li",[],[[2,"slick-active",null]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.setActive(l.context.$implicit,l.context.index)&&t}return t},null,null)),(l()(),O._45(-1,null,["\n          "])),(l()(),O._23(2,0,null,null,1,"button",[],null,null,null,null,null)),(l()(),O._45(-1,null,["1"])),(l()(),O._45(-1,null,["\n        "]))],null,function(l,n){l(n,0,0,n.context.$implicit.isActive)})}function e(l){return O._47(0,[(l()(),O._23(0,0,null,null,4,"ul",[["class","slick-dots"],["style","display: block;"]],null,null,null,null,null)),(l()(),O._45(-1,null,["\n        "])),(l()(),O._17(16777216,null,null,1,null,t)),O._21(3,802816,null,0,P.k,[O._5,O._0,O.C],{ngForOf:[0,"ngForOf"]},null),(l()(),O._45(-1,null,["\n      "]))],function(l,n){l(n,3,0,n.component.slideContents)},null)}function o(l){return O._47(0,[O._43(402653184,1,{slickList:0}),O._43(402653184,2,{slickTrack:0}),(l()(),O._45(-1,null,["\n    "])),(l()(),O._23(3,0,null,null,12,"div",[["class","slick-initialized slick-slider"]],[[2,"slick-vertical",null]],null,null,null,null)),(l()(),O._45(-1,null,["\n      "])),(l()(),O._23(5,0,[[1,0],["slickList",1]],null,6,"div",[["class","slick-list"]],null,null,null,null,null)),(l()(),O._45(-1,null,["\n        "])),(l()(),O._23(7,0,[[2,0],["slickTrack",1]],null,3,"div",[["class","slick-track"],["style","opacity: 1;"]],[[4,"transform",null]],null,null,null,null)),(l()(),O._45(-1,null,["\n          "])),O._36(null,0),(l()(),O._45(-1,null,["\n        "])),(l()(),O._45(-1,null,["\n      "])),(l()(),O._45(-1,null,["\n      "])),(l()(),O._17(16777216,null,null,1,null,e)),O._21(14,16384,null,0,P.l,[O._5,O._0],{ngIf:[0,"ngIf"]},null),(l()(),O._45(-1,null,["\n    "]))],function(l,n){l(n,14,0,n.component.nzDots)},function(l,n){var u=n.component;l(n,3,0,u.nzVertical),l(n,7,0,u.transform)})}function a(l){return O._47(0,[(l()(),O._23(0,0,null,null,2,"nz-carousel",[],[[2,"ant-carousel-vertical",null],[2,"ant-carousel",null]],null,null,o,I)),O._21(1,4374528,null,1,w.a,[O.r,O.R],null,null),O._43(603979776,1,{_slideContents:1})],null,function(l,n){l(n,0,0,O._37(n,1).nzVertical,O._37(n,1)._nzCarousel)})}function i(l){return D._47(0,[(l()(),D._23(0,0,null,null,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),D._21(1,16384,[[1,4]],0,F.a,[D.r],null,null),(l()(),D._23(2,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),D._45(3,null,["",""]))],null,function(l,n){l(n,0,0,D._37(n,1)._nzSlickSlide,D._37(n,1).setActiveClass,D._37(n,1).setWidth,D._37(n,1).setLeft,D._37(n,1).setTop,D._37(n,1).setPosition,D._37(n,1).setOpacity),l(n,3,0,n.context.$implicit)})}function r(l){return D._47(0,[(l()(),D._45(-1,null,["\n    "])),(l()(),D._23(1,0,null,null,6,"nz-carousel",[],[[2,"ant-carousel-vertical",null],[2,"ant-carousel",null]],null,null,o,I)),D._21(2,4374528,null,1,M.a,[D.r,D.R],null,null),D._43(603979776,1,{_slideContents:1}),(l()(),D._45(-1,0,["\n      "])),(l()(),D._17(16777216,null,0,1,null,i)),D._21(6,802816,null,0,R.k,[D._5,D._0,D.C],{ngForOf:[0,"ngForOf"]},null),(l()(),D._45(-1,0,["\n    "]))],function(l,n){l(n,6,0,n.component.array)},function(l,n){l(n,1,0,D._37(n,2).nzVertical,D._37(n,2)._nzCarousel)})}function c(l){return D._47(0,[(l()(),D._23(0,0,null,null,1,"nz-demo-carousel-basic",[],null,null,null,r,N)),D._21(1,114688,null,0,A,[],null,null)],function(l,n){l(n,1,0)},null)}function s(l){return B._47(0,[(l()(),B._23(0,0,null,null,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),B._21(1,16384,[[1,4]],0,L.a,[B.r],null,null),(l()(),B._23(2,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),B._45(3,null,["",""]))],null,function(l,n){l(n,0,0,B._37(n,1)._nzSlickSlide,B._37(n,1).setActiveClass,B._37(n,1).setWidth,B._37(n,1).setLeft,B._37(n,1).setTop,B._37(n,1).setPosition,B._37(n,1).setOpacity),l(n,3,0,n.context.$implicit)})}function _(l){return B._47(0,[(l()(),B._45(-1,null,["\n    "])),(l()(),B._23(1,0,null,null,6,"nz-carousel",[],[[2,"ant-carousel-vertical",null],[2,"ant-carousel",null]],null,null,o,I)),B._21(2,4374528,null,1,G.a,[B.r,B.R],{nzEffect:[0,"nzEffect"]},null),B._43(603979776,1,{_slideContents:1}),(l()(),B._45(-1,0,["\n      "])),(l()(),B._17(16777216,null,0,1,null,s)),B._21(6,802816,null,0,q.k,[B._5,B._0,B.C],{ngForOf:[0,"ngForOf"]},null),(l()(),B._45(-1,0,["\n    "]))],function(l,n){var u=n.component;l(n,2,0,"fade"),l(n,6,0,u.array)},function(l,n){l(n,1,0,B._37(n,2).nzVertical,B._37(n,2)._nzCarousel)})}function d(l){return B._47(0,[(l()(),B._23(0,0,null,null,1,"nz-demo-carousel-fade",[],null,null,null,_,K)),B._21(1,114688,null,0,V,[],null,null)],function(l,n){l(n,1,0)},null)}function p(l){return E._47(0,[(l()(),E._23(0,0,null,null,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),E._21(1,16384,[[1,4]],0,Y.a,[E.r],null,null),(l()(),E._23(2,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),E._45(3,null,["",""]))],null,function(l,n){l(n,0,0,E._37(n,1)._nzSlickSlide,E._37(n,1).setActiveClass,E._37(n,1).setWidth,E._37(n,1).setLeft,E._37(n,1).setTop,E._37(n,1).setPosition,E._37(n,1).setOpacity),l(n,3,0,n.context.$implicit)})}function f(l){return E._47(0,[(l()(),E._45(-1,null,["\n    "])),(l()(),E._23(1,0,null,null,6,"nz-carousel",[],[[2,"ant-carousel-vertical",null],[2,"ant-carousel",null]],null,null,o,I)),E._21(2,4374528,null,1,Q.a,[E.r,E.R],{nzVertical:[0,"nzVertical"]},null),E._43(603979776,1,{_slideContents:1}),(l()(),E._45(-1,0,["\n      "])),(l()(),E._17(16777216,null,0,1,null,p)),E._21(6,802816,null,0,W.k,[E._5,E._0,E.C],{ngForOf:[0,"ngForOf"]},null),(l()(),E._45(-1,0,["\n    "]))],function(l,n){var u=n.component;l(n,2,0,!0),l(n,6,0,u.array)},function(l,n){l(n,1,0,E._37(n,2).nzVertical,E._37(n,2)._nzCarousel)})}function h(l){return E._47(0,[(l()(),E._23(0,0,null,null,1,"nz-demo-carousel-vertical",[],null,null,null,f,Z)),E._21(1,114688,null,0,H,[],null,null)],function(l,n){l(n,1,0)},null)}function k(l){return U._47(0,[(l()(),U._23(0,0,null,null,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),U._21(1,16384,[[1,4]],0,X.a,[U.r],null,null),(l()(),U._23(2,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),U._45(3,null,["",""]))],null,function(l,n){l(n,0,0,U._37(n,1)._nzSlickSlide,U._37(n,1).setActiveClass,U._37(n,1).setWidth,U._37(n,1).setLeft,U._37(n,1).setTop,U._37(n,1).setPosition,U._37(n,1).setOpacity),l(n,3,0,n.context.$implicit)})}function g(l){return U._47(0,[(l()(),U._45(-1,null,["\n    "])),(l()(),U._23(1,0,null,null,6,"nz-carousel",[],[[2,"ant-carousel-vertical",null],[2,"ant-carousel",null]],null,null,o,I)),U._21(2,4374528,null,1,ll.a,[U.r,U.R],{nzAutoPlay:[0,"nzAutoPlay"]},null),U._43(603979776,1,{_slideContents:1}),(l()(),U._45(-1,0,["\n      "])),(l()(),U._17(16777216,null,0,1,null,k)),U._21(6,802816,null,0,nl.k,[U._5,U._0,U.C],{ngForOf:[0,"ngForOf"]},null),(l()(),U._45(-1,0,["\n    "]))],function(l,n){var u=n.component;l(n,2,0,!0),l(n,6,0,u.array)},function(l,n){l(n,1,0,U._37(n,2).nzVertical,U._37(n,2)._nzCarousel)})}function z(l){return U._47(0,[(l()(),U._23(0,0,null,null,1,"nz-demo-carousel-auto",[],null,null,null,g,tl)),U._21(1,114688,null,0,J,[],null,null)],function(l,n){l(n,1,0)},null)}function m(l){return ol._47(0,[(l()(),ol._23(0,0,null,null,210,"article",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n  "])),(l()(),ol._23(2,0,null,null,35,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),ol._23(3,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["Carousel \u8d70\u9a6c\u706f"])),(l()(),ol._45(-1,null,["\n    "])),(l()(),ol._23(6,0,null,null,26,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),ol._23(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u65cb\u8f6c\u6728\u9a6c\uff0c\u4e00\u7ec4\u8f6e\u64ad\u7684\u533a\u57df\u3002"])),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._23(10,0,null,null,6,"h2",[["id","\u4f55\u65f6\u4f7f\u7528"]],null,null,null,null,null)),(l()(),ol._23(11,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u4f55\u65f6\u4f7f\u7528"])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(14,0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),ol._45(-1,null,["#"])),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._23(18,0,null,null,13,"ul",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(20,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),ol._23(21,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u5f53\u6709\u4e00\u7ec4\u5e73\u7ea7\u7684\u5185\u5bb9\u3002"])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(24,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),ol._23(25,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u5f53\u5185\u5bb9\u7a7a\u95f4\u4e0d\u8db3\u65f6\uff0c\u53ef\u4ee5\u7528\u8d70\u9a6c\u706f\u7684\u5f62\u5f0f\u8fdb\u884c\u6536\u7eb3\uff0c\u8fdb\u884c\u8f6e\u64ad\u5c55\u73b0\u3002"])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(28,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),ol._23(29,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u5e38\u7528\u4e8e\u4e00\u7ec4\u56fe\u7247\u6216\u5361\u7247\u8f6e\u64ad\u3002"])),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._45(-1,null,["\n    "])),(l()(),ol._45(-1,null,["\n    "])),(l()(),ol._23(34,0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u4ee3\u7801\u6f14\u793a"])),(l()(),ol._23(36,0,null,null,0,"i",[["class","code-box-expand-trigger anticon anticon-appstore"],["title","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801"]],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n  "])),(l()(),ol._45(-1,null,["\n  "])),(l()(),ol._23(39,0,null,null,62,"div",[["nz-row",""]],null,null,null,al.b,al.a)),ol._21(40,114688,null,0,il.a,[ol.r,ol.R],{nzGutter:[0,"nzGutter"]},null),(l()(),ol._45(-1,0,["\n    "])),(l()(),ol._23(42,0,null,0,28,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),ol._21(43,606208,null,0,rl.a,[ol.r,[2,il.a],ol.R],{nzSpan:[0,"nzSpan"]},null),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._23(45,0,null,null,11,"nz-code-box",[["id","components-carousel-demo-basic"]],null,null,null,cl.b,cl.a)),ol._21(46,114688,null,0,sl.a,[_l.d,ol.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(48,0,null,0,1,"nz-demo-carousel-basic",[["demo",""]],null,null,null,r,N)),ol._21(49,114688,null,0,A,[],null,null),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(51,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(53,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._23(58,0,null,null,11,"nz-code-box",[["id","components-carousel-demo-fade"]],null,null,null,cl.b,cl.a)),ol._21(59,114688,null,0,sl.a,[_l.d,ol.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(61,0,null,0,1,"nz-demo-carousel-fade",[["demo",""]],null,null,null,_,K)),ol._21(62,114688,null,0,V,[],null,null),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(64,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(66,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u5207\u6362\u6548\u679c\u4e3a\u6e10\u663e\u3002"])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._45(-1,null,["\n    "])),(l()(),ol._45(-1,0,["\n    "])),(l()(),ol._23(72,0,null,0,28,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),ol._21(73,606208,null,0,rl.a,[ol.r,[2,il.a],ol.R],{nzSpan:[0,"nzSpan"]},null),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._23(75,0,null,null,11,"nz-code-box",[["id","components-carousel-demo-vertical"]],null,null,null,cl.b,cl.a)),ol._21(76,114688,null,0,sl.a,[_l.d,ol.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(78,0,null,0,1,"nz-demo-carousel-vertical",[["demo",""]],null,null,null,f,Z)),ol._21(79,114688,null,0,H,[],null,null),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(81,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(83,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u5782\u76f4\u663e\u793a\u3002"])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._23(88,0,null,null,11,"nz-code-box",[["id","components-carousel-demo-auto"]],null,null,null,cl.b,cl.a)),ol._21(89,114688,null,0,sl.a,[_l.d,ol.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(91,0,null,0,1,"nz-demo-carousel-auto",[["demo",""]],null,null,null,g,tl)),ol._21(92,114688,null,0,J,[],null,null),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(94,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(96,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u5b9a\u65f6\u5207\u6362\u4e0b\u4e00\u5f20\u3002"])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._45(-1,null,["\n    "])),(l()(),ol._45(-1,0,["\n  "])),(l()(),ol._45(-1,null,["\n  "])),(l()(),ol._23(103,0,null,null,106,"section",[["class","markdown api-container"]],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n    "])),(l()(),ol._23(105,0,null,null,4,"h2",[["id","API"]],null,null,null,null,null)),(l()(),ol._23(106,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["API"])),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._45(-1,null,["\n    "])),(l()(),ol._45(-1,null,["\n    "])),(l()(),ol._23(111,0,null,null,97,"table",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._23(113,0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(115,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(117,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u53c2\u6570"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(120,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u8bf4\u660e"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(123,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u7c7b\u578b"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(126,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u9ed8\u8ba4\u503c"])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._23(131,0,null,null,76,"tbody",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(133,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(135,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["[nz-carousel-content]"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(138,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u7528\u4e8e\u6807\u8bc6\u6eda\u52a8\u7684slide\u5185\u5bb9"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(141,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["Directive"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(144,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["-"])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(148,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(150,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["nzEffect"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(153,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u52a8\u753b\u6548\u679c\u51fd\u6570\uff0c\u53ef\u53d6 scrollx, fade"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(156,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["String"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(159,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["scrollx"])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(163,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(165,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["nzDots"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(168,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u662f\u5426\u663e\u793a\u9762\u677f\u6307\u793a\u70b9"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(171,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["Boolean"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(174,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["true"])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(178,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(180,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["nzVertical"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(183,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u5782\u76f4\u663e\u793a"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(186,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["Boolean"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(189,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["false"])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._23(193,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(195,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["nzAutoPlay"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(198,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["\u662f\u5426\u81ea\u52a8\u5207\u6362"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(201,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["Boolean"])),(l()(),ol._45(-1,null,["\n          "])),(l()(),ol._23(204,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),ol._45(-1,null,["false"])),(l()(),ol._45(-1,null,["\n        "])),(l()(),ol._45(-1,null,["\n      "])),(l()(),ol._45(-1,null,["\n    "])),(l()(),ol._45(-1,null,["\n  "])),(l()(),ol._45(-1,null,["\n"])),(l()(),ol._45(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,40,0,8);l(n,43,0,12);l(n,46,0,"\u57fa\u672c",u.NzDemoCarouselBasicCode),l(n,49,0);l(n,59,0,"\u6e10\u73b0",u.NzDemoCarouselFadeCode),l(n,62,0);l(n,73,0,12);l(n,76,0,"\u5782\u76f4",u.NzDemoCarouselVerticalCode),l(n,79,0);l(n,89,0,"\u81ea\u52a8\u5207\u6362",u.NzDemoCarouselAutoCode),l(n,92,0)},function(l,n){l(n,42,0,ol._37(n,43).paddingLeft,ol._37(n,43).paddingRight),l(n,72,0,ol._37(n,73).paddingLeft,ol._37(n,73).paddingRight)})}function x(l){return ol._47(0,[(l()(),ol._23(0,0,null,null,1,"nz-demo-carousel",[],null,null,null,m,pl)),ol._21(1,114688,null,0,el,[],null,null)],function(l,n){l(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var v=function(){function l(){}return l}(),b=[""],y=['.ant-carousel .slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-touch-callout:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.ant-carousel .slick-list{position:relative;overflow:hidden;display:block;margin:0;padding:0}.ant-carousel .slick-list:focus{outline:none}.ant-carousel .slick-list.dragging{cursor:pointer}.ant-carousel .slick-slider .slick-list,.ant-carousel .slick-slider .slick-track{-webkit-transform:translateZ(0);transform:translateZ(0)}.ant-carousel .slick-track{position:relative;left:0;top:0;display:block}.ant-carousel .slick-track:after,.ant-carousel .slick-track:before{content:"";display:table}.ant-carousel .slick-track:after{clear:both}.slick-loading .ant-carousel .slick-track{visibility:hidden}.ant-carousel .slick-slide{float:left;height:100%;min-height:1px;display:none}[dir=rtl] .ant-carousel .slick-slide{float:right}.ant-carousel .slick-slide img{display:block}.ant-carousel .slick-slide.slick-loading img{display:none}.ant-carousel .slick-slide.dragging img{pointer-events:none}.ant-carousel .slick-initialized .slick-slide{display:block}.ant-carousel .slick-loading .slick-slide{visibility:hidden}.ant-carousel .slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.ant-carousel .slick-arrow.slick-hidden{display:none}.ant-carousel .slick-next,.ant-carousel .slick-prev{position:absolute;display:block;height:20px;width:20px;line-height:0;font-size:0;cursor:pointer;top:50%;margin-top:-10px;padding:0;border:0}.ant-carousel .slick-next,.ant-carousel .slick-next:focus,.ant-carousel .slick-next:hover,.ant-carousel .slick-prev,.ant-carousel .slick-prev:focus,.ant-carousel .slick-prev:hover{background:transparent;color:transparent;outline:none}.ant-carousel .slick-next:focus:before,.ant-carousel .slick-next:hover:before,.ant-carousel .slick-prev:focus:before,.ant-carousel .slick-prev:hover:before{opacity:1}.ant-carousel .slick-next.slick-disabled:before,.ant-carousel .slick-prev.slick-disabled:before{opacity:.25}.ant-carousel .slick-prev{left:-25px}.ant-carousel .slick-prev:before{content:"\\2190"}.ant-carousel .slick-next{right:-25px}.ant-carousel .slick-next:before{content:"\\2192"}.ant-carousel .slick-dots{position:absolute;bottom:12px;list-style:none;display:block;text-align:center;padding:0;width:100%;height:3px}.ant-carousel .slick-dots li{position:relative;display:inline-block;vertical-align:top;text-align:center;margin:0 2px;padding:0}.ant-carousel .slick-dots li button{border:0;cursor:pointer;background:#fff;opacity:.3;display:block;width:16px;height:3px;border-radius:1px;outline:none;font-size:0;color:transparent;transition:all .5s}.ant-carousel .slick-dots li button:focus,.ant-carousel .slick-dots li button:hover{opacity:.75}.ant-carousel .slick-dots li.slick-active button{background:#fff;opacity:1;width:24px}.ant-carousel .slick-dots li.slick-active button:focus,.ant-carousel .slick-dots li.slick-active button:hover{opacity:1}.ant-carousel-vertical .slick-dots{width:3px;bottom:auto;right:12px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:auto}.ant-carousel-vertical .slick-dots li{margin:0 2px;vertical-align:baseline}.ant-carousel-vertical .slick-dots li button{width:3px;height:16px}.ant-carousel-vertical .slick-dots li.slick-active button{width:3px;height:24px}'],C=["nz-carousel{display:block;position:relative;width:100%;height:100%}nz-carousel .slick-track{transition:all .5s ease}nz-carousel .slick-track .slick-slide{transition:opacity .5s ease}"],O=u("/oeL"),P=u("qbdv"),w=u("RTcx"),T=[y,C],I=O._20({encapsulation:2,styles:T,data:{}}),A=(O._18("nz-carousel",w.a,a,{nzAutoPlay:"nzAutoPlay",nzDots:"nzDots",nzEffect:"nzEffect",nzVertical:"nzVertical"},{},["*"]),function(){function l(){this.array=[1,2,3]}return l.prototype.ngOnInit=function(){var l=this;setTimeout(function(n){l.array=[1,2,3,4]},500)},l.ctorParameters=function(){return[]},l}()),D=u("/oeL"),F=u("KgHP"),M=u("RTcx"),R=u("qbdv"),S=["[_nghost-%COMP%]     .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n\n    h3[_ngcontent-%COMP%] {\n      color: #fff;\n    }"],N=D._20({encapsulation:0,styles:S,data:{}}),V=(D._18("nz-demo-carousel-basic",A,c,{},{},[]),function(){function l(){this.array=[]}return l.prototype.ngOnInit=function(){var l=this;setTimeout(function(n){l.array=[1,2,3,4]},500)},l.ctorParameters=function(){return[]},l}()),B=u("/oeL"),L=u("KgHP"),G=u("RTcx"),q=u("qbdv"),j=["[_nghost-%COMP%]     .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n    h3[_ngcontent-%COMP%] {\n      color: #fff;\n    }"],K=B._20({encapsulation:0,styles:j,data:{}}),H=(B._18("nz-demo-carousel-fade",V,d,{},{},[]),function(){function l(){this.array=[1,2,3]}return l.prototype.ngOnInit=function(){var l=this;setTimeout(function(){l.array=[1,2,3,4]},500)},l.ctorParameters=function(){return[]},l}()),E=u("/oeL"),Y=u("KgHP"),Q=u("RTcx"),W=u("qbdv"),$=["[_nghost-%COMP%]     .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n\n    h3[_ngcontent-%COMP%] {\n      color: #fff;\n    }"],Z=E._20({encapsulation:0,styles:$,data:{}}),J=(E._18("nz-demo-carousel-vertical",H,h,{},{},[]),function(){function l(){this.array=[1]}return l.prototype.ngOnInit=function(){var l=this;setTimeout(function(n){l.array=[1,2,3,4]},500)},l.ctorParameters=function(){return[]},l}()),U=u("/oeL"),X=u("KgHP"),ll=u("RTcx"),nl=u("qbdv"),ul=["[_nghost-%COMP%]     .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n\n    h3[_ngcontent-%COMP%] {\n      color: #fff;\n    }"],tl=U._20({encapsulation:0,styles:ul,data:{}}),el=(U._18("nz-demo-carousel-auto",J,z,{},{},[]),function(){function l(){this.NzDemoCarouselBasicCode=u("P8w0"),this.NzDemoCarouselVerticalCode=u("M1oM"),this.NzDemoCarouselFadeCode=u("8BDE"),this.NzDemoCarouselAutoCode=u("tgBx")}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),ol=u("/oeL"),al=u("AQI4"),il=u("QJaU"),rl=u("HzDP"),cl=u("xfRN"),sl=u("d0SC"),_l=u("qbdv"),dl=[b],pl=ol._20({encapsulation:2,styles:dl,data:{}}),fl=ol._18("nz-demo-carousel",el,x,{},{},[]),hl=function(){function l(){}return l}();u.d(n,"NzDemoCarouselModuleNgFactory",function(){return qn});var kl=u("/oeL"),gl=u("gNns"),zl=u("VMe7"),ml=u("ZjYu"),xl=u("BRsn"),vl=u("1w55"),bl=u("tdcY"),yl=u("NarQ"),Cl=u("qbdv"),Ol=u("bm2B"),Pl=u("p4Sk"),wl=u("YtGb"),Tl=u("Bi2f"),Il=u("6lGd"),Al=u("Dj3/"),Dl=u("yK6y"),Fl=u("RaX4"),Ml=u("Fn2S"),Rl=u("fc+i"),Sl=u("7bMD"),Nl=u("71yQ"),Vl=u("jhj7"),Bl=u("4FjH"),Ll=u("hNpP"),Gl=u("f42N"),ql=u("v3Ml"),jl=u("KvRT"),Kl=u("fFfs"),Hl=u("x1IG"),El=u("AuvO"),Yl=u("ICnb"),Ql=u("nQgM"),Wl=u("AMM9"),$l=u("x9cu"),Zl=u("Abwc"),Jl=u("Gb4R"),Ul=u("ATGq"),Xl=u("rMvC"),ln=u("PIhm"),nn=u("G5xS"),un=u("tGoV"),tn=u("Bd7q"),en=u("HbPf"),on=u("+dpF"),an=u("t6og"),rn=u("0oag"),cn=u("0MmT"),sn=u("0SjK"),_n=u("UWIb"),dn=u("FP9i"),pn=u("8zAG"),fn=u("OtIO"),hn=u("V5qy"),kn=u("BGFw"),gn=u("qa79"),zn=u("DJ6J"),mn=u("A6WS"),xn=u("nGV/"),vn=u("4I7f"),bn=u("LLhl"),yn=u("+35O"),Cn=u("TRYS"),On=u("NGUZ"),Pn=u("Hjq/"),wn=u("Cjk6"),Tn=u("6eTp"),In=u("pORy"),An=u("aQzP"),Dn=u("LpTC"),Fn=u("YeNB"),Mn=u("x7DS"),Rn=u("//KT"),Sn=u("Pgvs"),Nn=u("BkNc"),Vn=u("jlvU"),Bn=u("ZgIK"),Ln=u("mQB5"),Gn=u("9rok"),qn=kl._19(v,[],function(l){return kl._34([kl._35(512,kl.n,kl._15,[[8,[gl.a,zl.a,ml.a,xl.a,vl.a,bl.a,yl.a,fl]],[3,kl.n],kl.I]),kl._35(4608,Cl.n,Cl.m,[kl.E]),kl._35(4608,Ol.u,Ol.u,[]),kl._35(4608,Pl.l,Pl.l,[]),kl._35(5120,wl.b,wl.a,[[3,wl.b],kl.K,Pl.l]),kl._35(5120,Tl.c,Tl.b,[[3,Tl.c],wl.b]),kl._35(4608,Il.a,Il.a,[wl.b,Tl.c]),kl._35(5120,Al.c,Al.b,[[3,Al.c]]),kl._35(4608,Dl.a,Dl.a,[Tl.c]),kl._35(4608,Fl.a,Fl.a,[Il.a,Al.c,kl.n,Dl.a,kl.g,kl.A,kl.K]),kl._35(5120,Ml.c,Ml.b,[Fl.a,Rl.b,[3,Ml.c]]),kl._35(4608,Sl.a,Sl.a,[]),kl._35(4608,Nl.a,Nl.a,[kl.g,kl.n]),kl._35(4608,Vl.a,Vl.a,[]),kl._35(4608,Pl.i,Pl.i,[]),kl._35(4608,Bl.a,Bl.a,[]),kl._35(5120,kl.d,function(l,n){return[Ll.b(l,n)]},[Rl.b,[2,Ll.a]]),kl._35(5120,Gl.a,Gl.b,[Rl.b,[3,Gl.a]]),kl._35(512,Cl.c,Cl.c,[]),kl._35(512,ql.a,ql.a,[]),kl._35(512,jl.a,jl.a,[]),kl._35(512,Kl.a,Kl.a,[]),kl._35(512,Ol.s,Ol.s,[]),kl._35(512,Ol.i,Ol.i,[]),kl._35(512,Pl.m,Pl.m,[]),kl._35(512,Hl.a,Hl.a,[]),kl._35(512,El.d,El.d,[]),kl._35(512,Yl.a,Yl.a,[]),kl._35(512,Ql.a,Ql.a,[]),kl._35(512,Wl.a,Wl.a,[]),kl._35(512,$l.a,$l.a,[]),kl._35(512,Zl.a,Zl.a,[]),kl._35(512,Jl.a,Jl.a,[]),kl._35(512,Ul.a,Ul.a,[]),kl._35(512,Xl.a,Xl.a,[]),kl._35(512,ln.a,ln.a,[]),kl._35(512,nn.a,nn.a,[]),kl._35(512,un.a,un.a,[]),kl._35(512,tn.a,tn.a,[]),kl._35(512,en.a,en.a,[]),kl._35(512,on.a,on.a,[]),kl._35(512,an.a,an.a,[]),kl._35(512,rn.a,rn.a,[]),kl._35(512,cn.a,cn.a,[]),kl._35(512,sn.a,sn.a,[]),kl._35(512,_n.a,_n.a,[]),kl._35(512,dn.a,dn.a,[]),kl._35(512,pn.a,pn.a,[]),kl._35(512,fn.a,fn.a,[]),kl._35(512,hn.a,hn.a,[]),kl._35(512,kn.a,kn.a,[]),kl._35(512,gn.a,gn.a,[]),kl._35(512,zn.a,zn.a,[]),kl._35(512,Pl.n,Pl.n,[]),kl._35(512,Pl.k,Pl.k,[]),kl._35(512,mn.a,mn.a,[]),kl._35(512,xn.a,xn.a,[]),kl._35(512,vn.a,vn.a,[]),kl._35(512,bn.a,bn.a,[]),kl._35(512,yn.a,yn.a,[]),kl._35(512,Cn.a,Cn.a,[]),kl._35(512,On.a,On.a,[]),kl._35(131584,Pn.a,Pn.a,[Rl.b,kl.A,kl.n]),kl._35(512,wn.a,wn.a,[]),kl._35(512,Tn.a,Tn.a,[]),kl._35(512,In.a,In.a,[]),kl._35(512,An.a,An.a,[]),kl._35(512,Dn.a,Dn.a,[]),kl._35(512,Fn.a,Fn.a,[]),kl._35(512,Mn.a,Mn.a,[]),kl._35(512,Rn.a,Rn.a,[]),kl._35(512,Sn.a,Sn.a,[]),kl._35(512,Nn.o,Nn.o,[[2,Nn.t],[2,Nn.l]]),kl._35(512,hl,hl,[]),kl._35(512,Vn.a,Vn.a,[]),kl._35(512,Bn.a,Bn.a,[]),kl._35(512,v,v,[]),kl._35(256,Ln.b,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),kl._35(256,Gn.b,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),kl._35(1024,Nn.j,function(){return[[{path:"",component:el}]]},[])])})},tgBx:function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-carousel-auto',\n  template: `\n    <nz-carousel [nzAutoPlay]=\"true\">\n      <div nz-carousel-content *ngFor=\"let index of array\"><h3>{{index}}</h3></div>\n    </nz-carousel>`,\n  styles  : [\n      `:host ::ng-deep .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n\n    h3 {\n      color: #fff;\n    }\n    `\n  ]\n})\nexport class NzDemoCarouselAutoComponent implements OnInit {\n  array = [ 1 ];\n\n  constructor() {\n  }\n\n  ngOnInit() {\n    setTimeout(_ => {\n      this.array = [ 1, 2, 3, 4 ];\n    }, 500)\n  }\n}\n"}});