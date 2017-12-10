webpackJsonp([33],{"0QB0":function(l,n){l.exports="import {Component} from '@angular/core';\nimport {NzNotificationService} from '../../../index.showcase';\n\n@Component({\n  selector  : 'nz-demo-notification-duration',\n  template  : `\n    <button nz-button [nzType]=\"'primary'\" (click)=\"createBasicNotification()\">\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846</button>\n`,\n  styles    : []\n})\nexport class NzDemoNotificationDurationComponent {\n  createBasicNotification = () => {\n    this._notification.blank('\u8fd9\u662f\u6807\u9898', '\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed', {nzDuration: 0});\n  };\n  constructor(private _notification: NzNotificationService) {\n  }\n}\n\n"},TagL:function(l,n){l.exports="import {Component} from '@angular/core';\nimport {NzNotificationService} from '../../../index.showcase';\n\n@Component({\n  selector  : 'nz-demo-notification-html',\n  template  : `\n    <button nz-button [nzType]=\"'primary'\" (click)=\"createBasicNotification()\">\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846</button>\n`,\n  styles    : []\n})\nexport class NzDemoNotificationHtmlComponent {\n  createBasicNotification = () => {\n    this._notification.html('<strong>\u81ea\u5b9a\u4e49\u901a\u77e5\u680f\u5185HTML</strong><br><p>HTML</p>');\n  };\n  constructor(private _notification: NzNotificationService) {\n  }\n}\n\n"},ZpxX:function(l,n){l.exports="import {Component} from '@angular/core';\nimport {NzNotificationService} from '../../../index.showcase';\n\n@Component({\n  selector  : 'nz-demo-notification-icon',\n  template  : `\n    <button nz-button (click)=\"createNotification('success')\">\u6210 \u529f</button>\n    <button nz-button (click)=\"createNotification('info')\">\u6d88 \u606f</button>\n    <button nz-button (click)=\"createNotification('warning')\">\u8b66 \u544a</button>\n    <button nz-button (click)=\"createNotification('error')\">\u9519 \u8bef</button>\n`,\n  styles    : []\n})\nexport class NzDemoNotificationIconComponent {\n  createNotification = (type) => {\n    this._notification.create(type, '\u8fd9\u662f\u6807\u9898', '\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848');\n  };\n  constructor(private _notification: NzNotificationService) {\n  }\n}\n\n"},dYlS:function(l,n,u){"use strict";function t(l){return c._34(0,[(l()(),c._32(-1,null,["\n    "])),(l()(),c._10(1,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,_=l.component;return"click"===n&&(t=!1!==c._24(l,2)._onClick()&&t),"click"===n&&(t=!1!==_.createBasicNotification()&&t),t},T.b,T.a)),c._9(2,1097728,null,0,x.a,[c.l,c.G],{nzType:[0,"nzType"]},null),(l()(),c._32(-1,0,["\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846"])),(l()(),c._32(-1,null,["\n  "]))],function(l,n){l(n,2,0,"primary")},null)}function _(l){return c._34(0,[(l()(),c._32(-1,null,["\n    "])),(l()(),c._10(1,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,_=l.component;return"click"===n&&(t=!1!==c._24(l,2)._onClick()&&t),"click"===n&&(t=!1!==_.createNotification("success")&&t),t},T.b,T.a)),c._9(2,1097728,null,0,x.a,[c.l,c.G],null,null),(l()(),c._32(-1,0,["\u6210 \u529f"])),(l()(),c._32(-1,null,["\n    "])),(l()(),c._10(5,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,_=l.component;return"click"===n&&(t=!1!==c._24(l,6)._onClick()&&t),"click"===n&&(t=!1!==_.createNotification("info")&&t),t},T.b,T.a)),c._9(6,1097728,null,0,x.a,[c.l,c.G],null,null),(l()(),c._32(-1,0,["\u6d88 \u606f"])),(l()(),c._32(-1,null,["\n    "])),(l()(),c._10(9,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,_=l.component;return"click"===n&&(t=!1!==c._24(l,10)._onClick()&&t),"click"===n&&(t=!1!==_.createNotification("warning")&&t),t},T.b,T.a)),c._9(10,1097728,null,0,x.a,[c.l,c.G],null,null),(l()(),c._32(-1,0,["\u8b66 \u544a"])),(l()(),c._32(-1,null,["\n    "])),(l()(),c._10(13,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,_=l.component;return"click"===n&&(t=!1!==c._24(l,14)._onClick()&&t),"click"===n&&(t=!1!==_.createNotification("error")&&t),t},T.b,T.a)),c._9(14,1097728,null,0,x.a,[c.l,c.G],null,null),(l()(),c._32(-1,0,["\u9519 \u8bef"])),(l()(),c._32(-1,null,["\n"]))],null,null)}function o(l){return c._34(0,[(l()(),c._32(-1,null,["\n    "])),(l()(),c._10(1,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,_=l.component;return"click"===n&&(t=!1!==c._24(l,2)._onClick()&&t),"click"===n&&(t=!1!==_.createBasicNotification()&&t),t},T.b,T.a)),c._9(2,1097728,null,0,x.a,[c.l,c.G],{nzType:[0,"nzType"]},null),(l()(),c._32(-1,0,["\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846"])),(l()(),c._32(-1,null,["\n"]))],function(l,n){l(n,2,0,"primary")},null)}function i(l){return c._34(0,[(l()(),c._32(-1,null,["\n    "])),(l()(),c._10(1,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,_=l.component;return"click"===n&&(t=!1!==c._24(l,2)._onClick()&&t),"click"===n&&(t=!1!==_.createBasicNotification()&&t),t},T.b,T.a)),c._9(2,1097728,null,0,x.a,[c.l,c.G],{nzType:[0,"nzType"]},null),(l()(),c._32(-1,0,["\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846"])),(l()(),c._32(-1,null,["\n"]))],function(l,n){l(n,2,0,"primary")},null)}function a(l){return c._34(0,[(l()(),c._10(0,0,null,null,401,"article",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n\n  "])),(l()(),c._10(2,0,null,null,67,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),c._32(-1,null,["\n    "])),(l()(),c._10(4,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),c._32(-1,null,["Notification \u901a\u77e5\u63d0\u9192\u6846"])),(l()(),c._32(-1,null,["\n    "])),(l()(),c._10(7,0,null,null,57,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),c._10(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u5168\u5c40\u5c55\u793a\u901a\u77e5\u63d0\u9192\u4fe1\u606f\u3002"])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._10(11,0,null,null,6,"h2",[["id","\u4f55\u65f6\u4f7f\u7528"]],null,null,null,null,null)),(l()(),c._10(12,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u4f55\u65f6\u4f7f\u7528"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(15,0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),c._32(-1,null,["#"])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._10(19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u5728\u7cfb\u7edf\u53f3\u4e0a\u89d2\u663e\u793a\u901a\u77e5\u63d0\u9192\u4fe1\u606f\u3002\u7ecf\u5e38\u7528\u4e8e\u4ee5\u4e0b\u60c5\u51b5\uff1a"])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._10(22,0,null,null,13,"ul",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(24,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),c._10(25,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u8f83\u4e3a\u590d\u6742\u7684\u901a\u77e5\u5185\u5bb9\u3002"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(28,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),c._10(29,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u5e26\u6709\u4ea4\u4e92\u7684\u901a\u77e5\uff0c\u7ed9\u51fa\u7528\u6237\u4e0b\u4e00\u6b65\u7684\u884c\u52a8\u70b9\u3002"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(32,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),c._10(33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u7cfb\u7edf\u4e3b\u52a8\u63a8\u9001\u3002"])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._10(37,0,null,null,3,"h2",[["id","\u5982\u4f55\u4f7f\u7528"]],null,null,null,null,null)),(l()(),c._10(38,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u5982\u4f55\u4f7f\u7528"])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._10(42,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u4e0eMessage\u7c7b\u4f3c\uff0c\u5982\u679c\u8981\u4fee\u6539message\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u63d0\u4f9b\u5546"])),(l()(),c._10(44,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),c._32(-1,null,["NZ_NOTIFICATION_CONFIG"])),(l()(),c._32(-1,null,["\u7684\u503c\u6765\u4fee\u6539\u3002\n      "])),(l()(),c._10(47,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\uff08\u5982\uff1a\u5728\u4f60\u7684\u6a21\u5757\u7684providers\u4e2d\u52a0\u5165 "])),(l()(),c._10(49,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),c._32(50,null,[""," provide: NZ_NOTIFICATION_CONFIG, useValue: "," nzDuration: 3000 "," ",""])),(l()(),c._32(-1,null,["\uff0c"])),(l()(),c._10(52,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),c._32(-1,null,["NZ_NOTIFICATION_CONFIG"])),(l()(),c._32(-1,null,["\u53ef\u4ee5\u4ece"])),(l()(),c._10(55,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),c._32(-1,null,["ng-zorro-antd"])),(l()(),c._32(-1,null,["\u5bfc\u5165\uff09"])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._10(59,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u9ed8\u8ba4\u914d\u7f6e\u4e3a"])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._10(62,0,null,null,1,"pre",[["style","font-size:12px;"]],null,null,null,null,null)),(l()(),c._32(63,null,[" ","\n    nzTop                  : '24px',\n    nzRight                : '0px',\n    nzDuration             : 4500,\n    nzMaxStack             : 7,\n    nzPauseOnHover         : true,\n    nzAnimate              : true\n ",""])),(l()(),c._32(-1,null,["\n    "])),(l()(),c._32(-1,null,["\n\n    "])),(l()(),c._10(66,0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u4ee3\u7801\u6f14\u793a"])),(l()(),c._10(68,0,null,null,0,"i",[["class","code-box-expand-trigger anticon anticon-appstore"],["title","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801"]],null,null,null,null,null)),(l()(),c._32(-1,null,["\n  "])),(l()(),c._32(-1,null,["\n\n  "])),(l()(),c._10(71,0,null,null,68,"div",[["nz-row",""]],null,null,null,g.b,g.a)),c._9(72,114688,null,0,h.a,[c.l,c.G],{nzGutter:[0,"nzGutter"]},null),(l()(),c._32(-1,0,["\n    "])),(l()(),c._10(74,0,null,0,28,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),c._9(75,606208,null,0,k.a,[c.l,[2,h.a],c.G],{nzSpan:[0,"nzSpan"]},null),(l()(),c._32(-1,null,["\n      "])),(l()(),c._10(77,0,null,null,11,"nz-code-box",[["id","components-notification-demo-basic"]],null,null,null,C.b,C.a)),c._9(78,114688,null,0,v.a,[e.d,c.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(80,0,null,0,1,"nz-demo-notification-basic",[["demo",""]],null,null,null,t,O)),c._9(81,49152,null,0,r,[y.a],null,null),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(83,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(85,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._10(90,0,null,null,11,"nz-code-box",[["id","components-notification-demo-icon"]],null,null,null,C.b,C.a)),c._9(91,114688,null,0,v.a,[e.d,c.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(93,0,null,0,1,"nz-demo-notification-icon",[["demo",""]],null,null,null,_,S)),c._9(94,49152,null,0,s,[y.a],null,null),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(96,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(98,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u901a\u77e5\u63d0\u9192\u6846\u5de6\u4fa7\u6709\u56fe\u6807\u3002"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._32(-1,null,["\n    "])),(l()(),c._32(-1,0,["\n    "])),(l()(),c._10(104,0,null,0,34,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),c._9(105,606208,null,0,k.a,[c.l,[2,h.a],c.G],{nzSpan:[0,"nzSpan"]},null),(l()(),c._32(-1,null,["\n      "])),(l()(),c._10(107,0,null,null,17,"nz-code-box",[["id","components-notification-demo-duration"]],null,null,null,C.b,C.a)),c._9(108,114688,null,0,v.a,[e.d,c.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(110,0,null,0,1,"nz-demo-notification-duration",[["demo",""]],null,null,null,o,I)),c._9(111,49152,null,0,d,[y.a],null,null),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(113,0,null,1,10,"div",[["intro",""]],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(115,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u81ea\u5b9a\u4e49\u901a\u77e5\u6846\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u9ed8\u8ba4"])),(l()(),c._10(117,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),c._32(-1,null,["4.5s"])),(l()(),c._32(-1,null,["\uff0c\u53d6\u6d88\u81ea\u52a8\u5173\u95ed\u53ea\u8981\u5c06\u8be5\u503c\u8bbe\u4e3a "])),(l()(),c._10(120,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),c._32(-1,null,["0"])),(l()(),c._32(-1,null,[" \u5373\u53ef\u3002"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._10(126,0,null,null,11,"nz-code-box",[["id","components-notification-demo-html"]],null,null,null,C.b,C.a)),c._9(127,114688,null,0,v.a,[e.d,c.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(129,0,null,0,1,"nz-demo-notification-html",[["demo",""]],null,null,null,i,D)),c._9(130,49152,null,0,p,[y.a],null,null),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(132,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(134,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u81ea\u5b9a\u4e49\u901a\u77e5\u680f\u5185HTML\uff0c\u6ce8\u610f\u9632\u6b62XSS"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._32(-1,null,["\n    "])),(l()(),c._32(-1,0,["\n  "])),(l()(),c._32(-1,null,["\n  "])),(l()(),c._10(141,0,null,null,259,"section",[["class","markdown api-container"]],null,null,null,null,null)),(l()(),c._32(-1,null,["\n    "])),(l()(),c._10(143,0,null,null,4,"h2",[["id","API"]],null,null,null,null,null)),(l()(),c._10(144,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),c._32(-1,null,["API"])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._32(-1,null,["\n    "])),(l()(),c._32(-1,null,["\n    "])),(l()(),c._10(149,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),c._10(150,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u5168\u5c40\u914d\u7f6e\uff08NZ_NOTIFICATION_CONFIG\uff09"])),(l()(),c._32(-1,null,["\n    "])),(l()(),c._10(153,0,null,null,112,"table",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n      "])),(l()(),c._10(155,0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(157,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(159,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u53c2\u6570"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(162,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u7c7b\u578b"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(165,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u9ed8\u8ba4\u503c"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(168,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u8bf4\u660e"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._10(173,0,null,null,91,"tbody",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(175,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(177,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["nzTop"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(180,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["String"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(183,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["24px"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(186,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u9876\u90e8\u8ddd\u79bb"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(190,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(192,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["nzRight"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(195,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["String"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(198,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["0px"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(201,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u53f3\u4fa7\u8ddd\u79bb"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(205,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(207,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["nzDuration"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(210,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["Number"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(213,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["0"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(216,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u6301\u7eed\u65f6\u95f4,\u5f53\u8bbe\u7f6e\u4e3a0\u65f6\u4e0d\u6d88\u5931\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(220,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(222,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["nzMaxStack"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(225,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["Number"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(228,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["8"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(231,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u63d0\u793a\u6700\u5927\u5806\u53e0\u6570"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(235,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(237,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["nzPauseOnHover"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(240,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["bool"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(243,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["true"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(246,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u60ac\u505c\u65f6\u505c\u6b62\u5012\u8ba1\u65f6\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(250,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(252,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["nzAnimate"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(255,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["bool"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(258,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["true"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(261,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u5f00\u5173\u52a8\u753b\u6548\u679c\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._32(-1,null,["\n    "])),(l()(),c._32(-1,null,["\n    "])),(l()(),c._10(267,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),c._10(268,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),c._32(-1,null,["NzNotificationService\u670d\u52a1"])),(l()(),c._32(-1,null,["\n    "])),(l()(),c._10(271,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u63d0\u793a\uff1a\u4ee5\u4e0boptions\u53c2\u6570\u652f\u6301\u5168\u5c40\u914d\u7f6e\u4e2d\u7684 "])),(l()(),c._10(273,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),c._32(-1,null,["nzDuration/nzAnimate/nzPauseOnHover"])),(l()(),c._32(-1,null,["\n    "])),(l()(),c._10(276,0,null,null,123,"table",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n      "])),(l()(),c._10(278,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(280,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(282,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u65b9\u6cd5"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(285,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u53c2\u6570"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(288,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u8bf4\u660e"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._10(293,0,null,null,105,"tbody",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(295,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(297,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["blank"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(300,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),c._10(301,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),c._32(-1,null,["(title: string, content: string, options?: Object)"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(304,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u4e0d\u5e26\u56fe\u6807\u7684\u63d0\u793a"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(308,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(310,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["success"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(313,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),c._10(314,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),c._32(-1,null,["(title: string, content: string, options?: Object)"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(317,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u6210\u529f\u63d0\u793a"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(321,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(323,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["error"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(326,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),c._10(327,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),c._32(-1,null,["(title: string, content: string, options?: Object)"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(330,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u5931\u8d25\u63d0\u793a"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(334,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(336,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["warning"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(339,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),c._10(340,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),c._32(-1,null,["(title: string, content: string, options?: Object)"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(343,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u8b66\u544a\u63d0\u793a"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(347,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(349,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["info"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(352,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),c._10(353,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),c._32(-1,null,["(title: string, content: string, options?: Object)"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(356,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u4fe1\u606f\u63d0\u793a"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(360,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(362,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["create"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(365,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),c._10(366,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),c._32(-1,null,["(type: string, title: string, content: string, options?: Object)"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(369,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u63d0\u4f9btype\u5c5e\u6027\uff0c\u53ef\u4f20\u5165'success'\u7b49\u9009\u9879"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(373,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(375,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["html"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(378,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),c._10(379,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),c._32(-1,null,["(html: string, options?: Object)"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(382,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u53ef\u4f7f\u7528html\u4ee3\u7801\u6765\u6e32\u67d3\u5185\u5bb9"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._10(386,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(388,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["remove"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(391,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),c._10(392,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),c._32(-1,null,["(id?: string)"])),(l()(),c._32(-1,null,["\n          "])),(l()(),c._10(395,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),c._32(-1,null,["\u79fb\u9664\u7279\u5b9aid\u7684\u6d88\u606f\uff0c\u5f53id\u4e3a\u7a7a\u65f6\uff0c\u79fb\u9664\u6240\u6709\u6d88\u606f"])),(l()(),c._32(-1,null,["\n        "])),(l()(),c._32(-1,null,["\n      "])),(l()(),c._32(-1,null,["\n    "])),(l()(),c._32(-1,null,["\n  "])),(l()(),c._32(-1,null,["\n"])),(l()(),c._32(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,72,0,8),l(n,75,0,12),l(n,78,0,"\u57fa\u672c",u.NzDemoNotificationBasicCode),l(n,91,0,"\u5e26\u6709icon\u7684\u901a\u77e5\u63d0\u9192\u6846",u.NzDemoNotificationIconCode),l(n,105,0,12),l(n,108,0,"\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6",u.NzDemoNotificationDurationCode),l(n,127,0,"\u81ea\u5b9a\u4e49",u.NzDemoNotificationHtmlCode)},function(l,n){l(n,50,0,"{","{","}","}"),l(n,63,0,"{","}"),l(n,74,0,c._24(n,75).paddingLeft,c._24(n,75).paddingRight),l(n,104,0,c._24(n,105).paddingLeft,c._24(n,105).paddingRight)})}Object.defineProperty(n,"__esModule",{value:!0});var c=u("LMZF"),e=(u("6Xbx"),u("Un6q")),r=(u("01zq"),function(){function l(l){this._notification=l}return l.prototype.createBasicNotification=function(){this._notification.blank("\u8fd9\u662f\u6807\u9898","\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848")},l}()),d=function(l){var n=this;this._notification=l,this.createBasicNotification=function(){n._notification.blank("\u8fd9\u662f\u6807\u9898","\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed",{nzDuration:0})}},s=function(l){var n=this;this._notification=l,this.createNotification=function(l){n._notification.create(l,"\u8fd9\u662f\u6807\u9898","\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848")}},p=function(l){var n=this;this._notification=l,this.createBasicNotification=function(){n._notification.html("<strong>\u81ea\u5b9a\u4e49\u901a\u77e5\u680f\u5185HTML</strong><br><p>HTML</p>")}},f=function(){return function(){this.NzDemoNotificationBasicCode=u("p/LX"),this.NzDemoNotificationDurationCode=u("0QB0"),this.NzDemoNotificationIconCode=u("ZpxX"),this.NzDemoNotificationHtmlCode=u("TagL")}}(),z=u("ZgIK"),m=u("UHIZ"),b=function(){},N=function(){},g=u("g3ta"),h=u("QJaU"),k=u("HzDP"),C=u("88JB"),v=u("d0SC"),T=u("N5qe"),x=u("yojp"),y=u("COMP"),O=c._8({encapsulation:2,styles:[],data:{}}),S=c._8({encapsulation:2,styles:[],data:{}}),I=c._8({encapsulation:2,styles:[],data:{}}),D=c._8({encapsulation:2,styles:[],data:{}}),B=c._8({encapsulation:2,styles:[["#components-notification-demo-icon .ant-btn{margin-right:1em}"]],data:{}}),G=c._6("nz-demo-notification",f,function(l){return c._34(0,[(l()(),c._10(0,0,null,null,1,"nz-demo-notification",[],null,null,null,a,B)),c._9(1,49152,null,0,f,[],null,null)],null,null)},{},{},[]),M=u("XQ86"),j=u("94s6"),L=u("QYLS"),w=u("sVuO"),A=u("WKJP"),P=u("9Q3e"),H=u("4e8C"),F=u("7rz8"),Z=u("PqOC"),Q=u("md/V"),R=u("0nO6"),q=u("l6RC"),V=u("V8+5"),X=u("4jwp"),J=u("OFGE"),K=u("7bMD"),U=u("71yQ"),Y=u("jhj7"),W=u("ppgG"),E=u("Hjq/"),$=u("hNpP"),ll=u("f42N"),nl=u("jlvU"),ul=u("AKwh"),tl=u("LTvz"),_l=u("v3Ml"),ol=u("KvRT"),il=u("fFfs"),al=u("CZgk"),cl=u("ICnb"),el=u("nQgM"),rl=u("AMM9"),dl=u("x9cu"),sl=u("Abwc"),pl=u("Gb4R"),fl=u("ATGq"),zl=u("rMvC"),ml=u("PIhm"),bl=u("G5xS"),Nl=u("tGoV"),gl=u("Bd7q"),hl=u("+dpF"),kl=u("t6og"),Cl=u("0oag"),vl=u("0MmT"),Tl=u("0SjK"),xl=u("UWIb"),yl=u("FP9i"),Ol=u("8zAG"),Sl=u("OtIO"),Il=u("V5qy"),Dl=u("BGFw"),Bl=u("qa79"),Gl=u("DJ6J"),Ml=u("A6WS"),jl=u("nGV/"),Ll=u("4I7f"),wl=u("LLhl"),Al=u("+35O"),Pl=u("TRYS"),Hl=u("NGUZ"),Fl=u("Cjk6"),Zl=u("6eTp"),Ql=u("pORy"),Rl=u("aQzP"),ql=u("LpTC"),Vl=u("YeNB"),Xl=u("x7DS"),Jl=u("//KT"),Kl=u("h8LI"),Ul=u("Pgvs"),Yl=u("mQB5"),Wl=u("9rok");u.d(n,"NzDemoNotificationModuleNgFactory",function(){return El});var El=c._7(N,[],function(l){return c._21([c._22(512,c.k,c._2,[[8,[G,M.a,j.a,L.a,w.a,A.a,P.a,H.a]],[3,c.k],c.z]),c._22(4608,e.n,e.m,[c.w,[2,e.v]]),c._22(5120,F.b,F.a,[[3,F.b],F.c]),c._22(5120,Z.b,Z.a,[[3,Z.b],Q.a,F.b]),c._22(4608,R.u,R.u,[]),c._22(6144,q.b,null,[e.d]),c._22(4608,q.c,q.c,[[2,q.b]]),c._22(4608,V.a,V.a,[]),c._22(5120,X.c,X.a,[[3,X.c],c.B,V.a]),c._22(5120,X.f,X.e,[[3,X.f],V.a,c.B]),c._22(4608,J.g,J.g,[X.c,X.f,c.B]),c._22(5120,J.d,J.h,[[3,J.d],e.d]),c._22(4608,J.l,J.l,[X.f,e.d]),c._22(5120,J.e,J.k,[[3,J.e],e.d]),c._22(4608,J.c,J.c,[J.g,J.d,c.k,J.l,J.e,c.g,c.s,c.B,e.d]),c._22(5120,J.i,J.j,[J.c]),c._22(4608,K.a,K.a,[]),c._22(4608,U.a,U.a,[c.g,c.k,Z.b]),c._22(4608,Y.a,Y.a,[]),c._22(4608,W.b,W.b,[]),c._22(5120,c.d,function(l,n){return[E.b(l,n)]},[e.d,[2,$.a]]),c._22(5120,ll.a,ll.b,[e.d,[3,ll.a]]),c._22(512,m.o,m.o,[[2,m.t],[2,m.l]]),c._22(512,b,b,[]),c._22(512,e.c,e.c,[]),c._22(512,nl.a,nl.a,[]),c._22(512,ul.a,ul.a,[]),c._22(512,tl.a,tl.a,[]),c._22(512,_l.a,_l.a,[]),c._22(512,ol.a,ol.a,[]),c._22(512,il.a,il.a,[]),c._22(512,R.s,R.s,[]),c._22(512,R.i,R.i,[]),c._22(512,q.a,q.a,[]),c._22(512,al.c,al.c,[]),c._22(512,V.b,V.b,[]),c._22(512,X.b,X.b,[]),c._22(512,J.f,J.f,[]),c._22(512,cl.a,cl.a,[]),c._22(512,el.a,el.a,[]),c._22(512,rl.a,rl.a,[]),c._22(512,dl.a,dl.a,[]),c._22(512,sl.a,sl.a,[]),c._22(512,pl.a,pl.a,[]),c._22(512,fl.a,fl.a,[]),c._22(512,zl.a,zl.a,[]),c._22(512,ml.a,ml.a,[]),c._22(512,bl.a,bl.a,[]),c._22(512,Nl.a,Nl.a,[]),c._22(512,gl.a,gl.a,[]),c._22(512,hl.a,hl.a,[]),c._22(512,kl.a,kl.a,[]),c._22(512,Cl.a,Cl.a,[]),c._22(512,vl.a,vl.a,[]),c._22(512,Tl.a,Tl.a,[]),c._22(512,xl.a,xl.a,[]),c._22(512,yl.a,yl.a,[]),c._22(512,Ol.a,Ol.a,[]),c._22(512,Sl.a,Sl.a,[]),c._22(512,Il.a,Il.a,[]),c._22(512,Dl.a,Dl.a,[]),c._22(512,Bl.a,Bl.a,[]),c._22(512,Gl.a,Gl.a,[]),c._22(512,W.c,W.c,[]),c._22(512,Ml.a,Ml.a,[]),c._22(512,jl.a,jl.a,[]),c._22(512,Ll.a,Ll.a,[]),c._22(512,wl.a,wl.a,[]),c._22(512,Al.a,Al.a,[]),c._22(512,Pl.a,Pl.a,[]),c._22(512,Hl.a,Hl.a,[]),c._22(131584,E.a,E.a,[e.d,c.s,c.k]),c._22(512,Fl.a,Fl.a,[]),c._22(512,Zl.a,Zl.a,[]),c._22(512,Ql.a,Ql.a,[]),c._22(512,Rl.a,Rl.a,[]),c._22(512,ql.a,ql.a,[]),c._22(512,Vl.a,Vl.a,[]),c._22(512,Xl.a,Xl.a,[]),c._22(512,Jl.a,Jl.a,[]),c._22(512,Kl.a,Kl.a,[]),c._22(512,Ul.a,Ul.a,[]),c._22(512,z.a,z.a,[]),c._22(512,N,N,[]),c._22(1024,m.j,function(){return[[{path:"",component:f}]]},[]),c._22(256,F.c,!1,[]),c._22(256,Q.a,tl.b,[]),c._22(256,Yl.b,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),c._22(256,Wl.b,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[])])})},"p/LX":function(l,n){l.exports="import {Component} from '@angular/core';\nimport {NzNotificationService} from '../../../index.showcase';\n\n@Component({\n  selector  : 'nz-demo-notification-basic',\n  template  : `\n    <button nz-button [nzType]=\"'primary'\" (click)=\"createBasicNotification()\">\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846</button>\n  `,\n  styles    : []\n})\nexport class NzDemoNotificationBasicComponent {\n\n  constructor(private _notification: NzNotificationService) { }\n\n  createBasicNotification() {\n    this._notification.blank('\u8fd9\u662f\u6807\u9898', '\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848');\n  }\n}\n\n"}});