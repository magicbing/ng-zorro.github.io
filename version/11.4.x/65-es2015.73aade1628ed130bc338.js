(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{rKLL:function(n,e,o){"use strict";o.r(e),o.d(e,"ComponentsOverviewModule",function(){return y});var t=o("tyNb"),c=o("TZWX"),i=o("A/CH"),r=o("658v"),s=o("T+9E"),a=o("MOHP"),b=o("klHs"),p=o("tKaq"),l=o("Zmph"),h=o("WGB2"),u=o("2Vo4"),g=o("Kj3r"),d=o("EHwv"),f=o("fXoL"),v=o("ofXK"),m=o("uLhK");const z=["searchBox"];function w(n,e){1&n&&(f.Yb(0,"p"),f.Yb(1,"span"),f.Yb(2,"code"),f.Qc(3,"ng-zorro-antd"),f.Xb(),f.Xb(),f.Qc(4," is an Angular UI lib, follow Ant Design specification, to provide high quantity UI components for web development. "),f.Xb())}function X(n,e){1&n&&(f.Yb(0,"p"),f.Yb(1,"span"),f.Yb(2,"code"),f.Qc(3,"ng-zorro-antd"),f.Xb(),f.Xb(),f.Qc(4," \u662f Ant Design \u7684 Angular \u5b9e\u73b0\uff0c\u4e3a\u7f51\u9875\u5f00\u53d1\u63d0\u4f9b\u9ad8\u8d28\u91cf\u7684 UI \u7ec4\u4ef6\u3002 "),f.Xb())}function O(n,e){1&n&&f.Tb(0,"i",7)}function Y(n,e){if(1&n&&(f.Yb(0,"div",12),f.Yb(1,"a",13),f.Yb(2,"nz-card",14),f.Yb(3,"div",15),f.Tb(4,"img",16),f.Xb(),f.Xb(),f.Xb(),f.Xb()),2&n){const n=e.$implicit,o=f.kc(3);f.Db(1),f.uc("routerLink","/",n.path,""),f.Db(1),f.vc("nzTitle","",n.label," ","zh"===o.language?n.zh:"",""),f.Db(2),f.sc("alt",n.label)("src",n.cover,f.Ic)}}function x(n,e){if(1&n&&(f.Wb(0),f.Yb(1,"div",8),f.Yb(2,"h3",9),f.Qc(3),f.Yb(4,"nz-tag"),f.Qc(5),f.Xb(),f.Xb(),f.Yb(6,"div",10),f.Oc(7,Y,5,5,"div",11),f.Xb(),f.Xb(),f.Vb()),2&n){const n=f.kc().$implicit;f.Db(3),f.Sc(" ",n.name," "),f.Db(2),f.Rc(n.children.length),f.Db(2),f.sc("ngForOf",n.children)}}function D(n,e){if(1&n&&(f.Wb(0),f.Oc(1,x,8,3,"ng-container",1),f.Vb()),2&n){const n=e.$implicit,o=f.kc();f.Db(1),f.sc("ngIf",n.language===o.language&&n.children.length>0)}}let C=(()=>{class n{constructor(n,e){this.route=n,this.cdr=e,this.routerList=d.b,this.language="en",this.searchChange$=new u.a("")}ngOnInit(){this.route.url.subscribe(n=>{this.language=n[0].path,this.cdr.detectChanges()}),this.searchChange$.asObservable().pipe(Object(g.a)(20)).subscribe(n=>{this.filterComponents(n)}),Promise.resolve().then(()=>{this.searchBox.nativeElement.focus()})}onSearch(n){this.searchChange$.next(n.toLowerCase())}filterComponents(n){if(this.routerList=JSON.parse(JSON.stringify(d.b)),n)for(const e of this.routerList.components)e.children=e.children.filter(e=>e.label.toLowerCase().includes(n)||e.zh.includes(n));this.cdr.detectChanges()}}return n.\u0275fac=function(e){return new(e||n)(f.Rb(t.a),f.Rb(f.h))},n.\u0275cmp=f.Lb({type:n,selectors:[["app-components-overview"]],viewQuery:function(n,e){if(1&n&&f.Vc(z,3),2&n){let n;f.Bc(n=f.hc())&&(e.searchBox=n.first)}},decls:14,vars:6,consts:[[1,"markdown"],[4,"ngIf"],[1,"components-overview-search",3,"nzSuffix"],["type","text","nz-input","","nzSize","large",3,"placeholder","input"],["searchBox",""],["suffixIconSearch",""],[4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[1,"components-overview"],["nz-typography","",1,"components-overview-group-title"],["nz-row",""],["nz-col","","nzXs","24","nzSm","12","nzMd","12","nzLg","8","nzXl","6","nzXXl","6","class","components-overview-card",4,"ngFor","ngForOf"],["nz-col","","nzXs","24","nzSm","12","nzMd","12","nzLg","8","nzXl","6","nzXXl","6",1,"components-overview-card"],[3,"routerLink"],["nzHoverable","",3,"nzTitle"],[1,"components-overview-img"],[3,"alt","src"]],template:function(n,e){if(1&n){const n=f.ac();f.Yb(0,"section",0),f.Yb(1,"h1"),f.Qc(2),f.Xb(),f.Yb(3,"section",0),f.Oc(4,w,5,0,"p",1),f.Oc(5,X,5,0,"p",1),f.Xb(),f.Tb(6,"nz-divider"),f.Yb(7,"nz-input-group",2),f.Yb(8,"input",3,4),f.gc("input",function(){f.Fc(n);const o=f.Cc(9);return e.onSearch(o.value)}),f.Xb(),f.Xb(),f.Oc(10,O,1,0,"ng-template",null,5,f.Pc),f.Tb(12,"nz-divider"),f.Oc(13,D,2,1,"ng-container",6),f.Xb()}if(2&n){const n=f.Cc(11);f.Db(2),f.Rc("en"===e.language?"Components Overview":"\u7ec4\u4ef6\u603b\u89c8"),f.Db(2),f.sc("ngIf","en"===e.language),f.Db(1),f.sc("ngIf","zh"===e.language),f.Db(2),f.sc("nzSuffix",n),f.Db(1),f.tc("placeholder","en"===e.language?"Search in components":"\u641c\u7d22\u7ec4\u4ef6"),f.Db(5),f.sc("ngForOf",e.routerList.components)}},directives:[v.o,r.a,m.a,b.c,b.d,b.b,v.n,a.a,l.a,p.a,s.c,s.a,t.g,i.a],styles:[".components-overview{padding:0}.components-overview-group-title{margin-top:24px!important}.components-overview-img{display:flex;align-items:center;justify-content:center;height:152px}.components-overview-card{cursor:pointer;padding:12px}.components-overview-search{width:100%;padding:0;font-size:20px;border:0;box-shadow:none}.components-overview-search input{color:rgba(0,0,0,.85);font-size:20px}.components-overview-search .anticon{color:#bbb}"],encapsulation:2,changeDetection:0}),n})();const L=[i.d,c.c,p.b,s.b,l.b,r.b,a.b,b.e];let y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=f.Pb({type:n}),n.\u0275inj=f.Ob({imports:[[h.a,...L,t.h.forChild([{path:"**",component:C}])]]}),n})()}}]);