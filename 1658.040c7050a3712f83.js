"use strict";(self.webpackChunkng_zorro_antd_doc=self.webpackChunkng_zorro_antd_doc||[]).push([[1658],{1658:(at,U,s)=>{s.d(U,{Fd:()=>it,Lr:()=>A,Nx:()=>L,iK:()=>st,U5:()=>rt});var b=s(226),k=s(5113),W=s(925),C=s(9808),t=s(5e3),F=s(3915),P=s(1735),D=s(971),R=s(2869),h=s(3075),z=s(8929),j=s(2654),_=s(7625),v=s(2198),Y=s(4850),Q=s(2994),$=s(1059),K=s(5459),u=s(9701),V=s(8623),f=s(655),g=s(4255);const E=["*"];function w(o,i){if(1&o&&t._UZ(0,"i",6),2&o){const n=t.oxw();t.Q6J("nzType",n.iconType)}}function H(o,i){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const n=t.oxw(2);t.xp6(1),t.Oqu(n.innerTip)}}const Z=function(o){return[o]},J=function(o){return{$implicit:o}};function G(o,i){if(1&o&&(t.TgZ(0,"div",7),t.TgZ(1,"div",8),t.YNc(2,H,2,1,"ng-container",9),t.qZA(),t.qZA()),2&o){const n=t.oxw();t.Q6J("@helpMotion",void 0),t.xp6(1),t.Q6J("ngClass",t.VKq(4,Z,"ant-form-item-explain-"+n.status)),t.xp6(1),t.Q6J("nzStringTemplateOutlet",n.innerTip)("nzStringTemplateOutletContext",t.VKq(6,J,n.validateControl))}}function X(o,i){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const n=t.oxw(2);t.xp6(1),t.Oqu(n.nzExtra)}}function q(o,i){if(1&o&&(t.TgZ(0,"div",10),t.YNc(1,X,2,1,"ng-container",11),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",n.nzExtra)}}function tt(o,i){if(1&o&&(t.ynx(0),t._UZ(1,"i",3),t.BQk()),2&o){const n=i.$implicit,e=t.oxw(2);t.xp6(1),t.Q6J("nzType",n)("nzTheme",e.tooltipIcon.theme)}}function nt(o,i){if(1&o&&(t.TgZ(0,"span",1),t.YNc(1,tt,2,2,"ng-container",2),t.qZA()),2&o){const n=t.oxw();t.Q6J("nzTooltipTitle",n.nzTooltipTitle),t.xp6(1),t.Q6J("nzStringTemplateOutlet",n.tooltipIcon.type)}}let L=(()=>{class o{constructor(n,e,r){this.cdr=r,this.status=null,this.hasFeedback=!1,this.withHelpClass=!1,this.destroy$=new z.xQ,e.addClass(n.nativeElement,"ant-form-item")}setWithHelpViaTips(n){this.withHelpClass=n,this.cdr.markForCheck()}setStatus(n){this.status=n,this.cdr.markForCheck()}setHasFeedback(n){this.hasFeedback=n,this.cdr.markForCheck()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(t.sBO))},o.\u0275cmp=t.Xpm({type:o,selectors:[["nz-form-item"]],hostVars:12,hostBindings:function(n,e){2&n&&t.ekj("ant-form-item-has-success","success"===e.status)("ant-form-item-has-warning","warning"===e.status)("ant-form-item-has-error","error"===e.status)("ant-form-item-is-validating","validating"===e.status)("ant-form-item-has-feedback",e.hasFeedback&&e.status)("ant-form-item-with-help",e.withHelpClass)},exportAs:["nzFormItem"],ngContentSelectors:E,decls:1,vars:0,template:function(n,e){1&n&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),o})();const I={type:"question-circle",theme:"outline"};let A=(()=>{class o{constructor(n,e,r,a){var l;this.nzConfigService=n,this.renderer=r,this.directionality=a,this._nzModuleName="form",this.nzLayout="horizontal",this.nzNoColon=!1,this.nzAutoTips={},this.nzDisableAutoTips=!1,this.nzTooltipIcon=I,this.dir="ltr",this.destroy$=new z.xQ,this.inputChanges$=new z.xQ,this.renderer.addClass(e.nativeElement,"ant-form"),this.dir=this.directionality.value,null===(l=this.directionality.change)||void 0===l||l.pipe((0,_.R)(this.destroy$)).subscribe(c=>{this.dir=c})}getInputObservable(n){return this.inputChanges$.pipe((0,v.h)(e=>n in e),(0,Y.U)(e=>e[n]))}ngOnChanges(n){this.inputChanges$.next(n)}ngOnDestroy(){this.inputChanges$.complete(),this.destroy$.next(),this.destroy$.complete()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(g.jY),t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(b.Is,8))},o.\u0275dir=t.lG2({type:o,selectors:[["","nz-form",""]],hostVars:8,hostBindings:function(n,e){2&n&&t.ekj("ant-form-horizontal","horizontal"===e.nzLayout)("ant-form-vertical","vertical"===e.nzLayout)("ant-form-inline","inline"===e.nzLayout)("ant-form-rtl","rtl"===e.dir)},inputs:{nzLayout:"nzLayout",nzNoColon:"nzNoColon",nzAutoTips:"nzAutoTips",nzDisableAutoTips:"nzDisableAutoTips",nzTooltipIcon:"nzTooltipIcon"},exportAs:["nzForm"],features:[t.TTD]}),(0,f.gn)([(0,g.oS)(),(0,u.yF)()],o.prototype,"nzNoColon",void 0),(0,f.gn)([(0,g.oS)()],o.prototype,"nzAutoTips",void 0),(0,f.gn)([(0,u.yF)()],o.prototype,"nzDisableAutoTips",void 0),(0,f.gn)([(0,g.oS)()],o.prototype,"nzTooltipIcon",void 0),o})();const et={error:"close-circle-fill",validating:"loading",success:"check-circle-fill",warning:"exclamation-circle-fill"};let it=(()=>{class o{constructor(n,e,r,a,l,c){var p,d;this.nzFormItemComponent=e,this.cdr=r,this.nzFormDirective=c,this._hasFeedback=!1,this.validateChanges=j.w.EMPTY,this.validateString=null,this.destroyed$=new z.xQ,this.status=null,this.validateControl=null,this.iconType=null,this.innerTip=null,this.nzAutoTips={},this.nzDisableAutoTips="default",a.addClass(n.nativeElement,"ant-form-item-control"),this.subscribeAutoTips(l.localeChange.pipe((0,Q.b)(T=>this.localeId=T.locale))),this.subscribeAutoTips(null===(p=this.nzFormDirective)||void 0===p?void 0:p.getInputObservable("nzAutoTips")),this.subscribeAutoTips(null===(d=this.nzFormDirective)||void 0===d?void 0:d.getInputObservable("nzDisableAutoTips").pipe((0,v.h)(()=>"default"===this.nzDisableAutoTips)))}get disableAutoTips(){var n;return"default"!==this.nzDisableAutoTips?(0,u.sw)(this.nzDisableAutoTips):null===(n=this.nzFormDirective)||void 0===n?void 0:n.nzDisableAutoTips}set nzHasFeedback(n){this._hasFeedback=(0,u.sw)(n),this.nzFormItemComponent&&this.nzFormItemComponent.setHasFeedback(this._hasFeedback)}get nzHasFeedback(){return this._hasFeedback}set nzValidateStatus(n){n instanceof h.TO||n instanceof h.On?(this.validateControl=n,this.validateString=null,this.watchControl()):n instanceof h.u?(this.validateControl=n.control,this.validateString=null,this.watchControl()):(this.validateString=n,this.validateControl=null,this.setStatus())}watchControl(){this.validateChanges.unsubscribe(),this.validateControl&&this.validateControl.statusChanges&&(this.validateChanges=this.validateControl.statusChanges.pipe((0,$.O)(null),(0,_.R)(this.destroyed$)).subscribe(n=>{this.disableAutoTips||this.updateAutoErrorTip(),this.setStatus(),this.cdr.markForCheck()}))}setStatus(){this.status=this.getControlStatus(this.validateString),this.iconType=this.status?et[this.status]:null,this.innerTip=this.getInnerTip(this.status),this.nzFormItemComponent&&(this.nzFormItemComponent.setWithHelpViaTips(!!this.innerTip),this.nzFormItemComponent.setStatus(this.status))}getControlStatus(n){let e;return e="warning"===n||this.validateControlStatus("INVALID","warning")?"warning":"error"===n||this.validateControlStatus("INVALID")?"error":"validating"===n||"pending"===n||this.validateControlStatus("PENDING")?"validating":"success"===n||this.validateControlStatus("VALID")?"success":null,e}validateControlStatus(n,e){if(this.validateControl){const{dirty:r,touched:a,status:l}=this.validateControl;return(!!r||!!a)&&(e?this.validateControl.hasError(e):l===n)}return!1}getInnerTip(n){switch(n){case"error":return!this.disableAutoTips&&this.autoErrorTip||this.nzErrorTip||null;case"validating":return this.nzValidatingTip||null;case"success":return this.nzSuccessTip||null;case"warning":return this.nzWarningTip||null;default:return null}}updateAutoErrorTip(){var n,e,r,a,l,c,p,d,T,y,O,x,N;if(this.validateControl){const M=this.validateControl.errors||{};let S="";for(const m in M)if(M.hasOwnProperty(m)&&(S=null!==(O=null!==(p=null!==(l=null!==(e=null===(n=M[m])||void 0===n?void 0:n[this.localeId])&&void 0!==e?e:null===(a=null===(r=this.nzAutoTips)||void 0===r?void 0:r[this.localeId])||void 0===a?void 0:a[m])&&void 0!==l?l:null===(c=this.nzAutoTips.default)||void 0===c?void 0:c[m])&&void 0!==p?p:null===(y=null===(T=null===(d=this.nzFormDirective)||void 0===d?void 0:d.nzAutoTips)||void 0===T?void 0:T[this.localeId])||void 0===y?void 0:y[m])&&void 0!==O?O:null===(N=null===(x=this.nzFormDirective)||void 0===x?void 0:x.nzAutoTips.default)||void 0===N?void 0:N[m]),S)break;this.autoErrorTip=S}}subscribeAutoTips(n){null==n||n.pipe((0,_.R)(this.destroyed$)).subscribe(()=>{this.disableAutoTips||(this.updateAutoErrorTip(),this.setStatus(),this.cdr.markForCheck())})}ngOnChanges(n){const{nzDisableAutoTips:e,nzAutoTips:r,nzSuccessTip:a,nzWarningTip:l,nzErrorTip:c,nzValidatingTip:p}=n;e||r?(this.updateAutoErrorTip(),this.setStatus()):(a||l||c||p)&&this.setStatus()}ngOnInit(){this.setStatus()}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}ngAfterContentInit(){!this.validateControl&&!this.validateString&&(this.nzValidateStatus=this.defaultValidateControl instanceof h.oH?this.defaultValidateControl.control:this.defaultValidateControl)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(t.SBq),t.Y36(L,9),t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(V.wi),t.Y36(A,8))},o.\u0275cmp=t.Xpm({type:o,selectors:[["nz-form-control"]],contentQueries:function(n,e,r){if(1&n&&t.Suo(r,h.a5,5),2&n){let a;t.iGM(a=t.CRH())&&(e.defaultValidateControl=a.first)}},inputs:{nzSuccessTip:"nzSuccessTip",nzWarningTip:"nzWarningTip",nzErrorTip:"nzErrorTip",nzValidatingTip:"nzValidatingTip",nzExtra:"nzExtra",nzAutoTips:"nzAutoTips",nzDisableAutoTips:"nzDisableAutoTips",nzHasFeedback:"nzHasFeedback",nzValidateStatus:"nzValidateStatus"},exportAs:["nzFormControl"],features:[t.TTD],ngContentSelectors:E,decls:7,vars:3,consts:[[1,"ant-form-item-control-input"],[1,"ant-form-item-control-input-content"],[1,"ant-form-item-children-icon"],["nz-icon","",3,"nzType",4,"ngIf"],["class","ant-form-item-explain ant-form-item-explain-connected",4,"ngIf"],["class","ant-form-item-extra",4,"ngIf"],["nz-icon","",3,"nzType"],[1,"ant-form-item-explain","ant-form-item-explain-connected"],["role","alert",3,"ngClass"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],[1,"ant-form-item-extra"],[4,"nzStringTemplateOutlet"]],template:function(n,e){1&n&&(t.F$t(),t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.Hsn(2),t.qZA(),t.TgZ(3,"span",2),t.YNc(4,w,1,1,"i",3),t.qZA(),t.qZA(),t.YNc(5,G,3,8,"div",4),t.YNc(6,q,2,1,"div",5)),2&n&&(t.xp6(4),t.Q6J("ngIf",e.nzHasFeedback&&e.iconType),t.xp6(1),t.Q6J("ngIf",e.innerTip),t.xp6(1),t.Q6J("ngIf",e.nzExtra))},directives:[C.O5,D.Ls,C.mk,F.f],encapsulation:2,data:{animation:[K.c8]},changeDetection:0}),o})();function B(o){const i="string"==typeof o?{type:o}:o;return Object.assign(Object.assign({},I),i)}let st=(()=>{class o{constructor(n,e,r,a){this.cdr=r,this.nzFormDirective=a,this.nzRequired=!1,this.noColon="default",this._tooltipIcon="default",this.destroy$=new z.xQ,e.addClass(n.nativeElement,"ant-form-item-label"),this.nzFormDirective&&(this.nzFormDirective.getInputObservable("nzNoColon").pipe((0,v.h)(()=>"default"===this.noColon),(0,_.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.nzFormDirective.getInputObservable("nzTooltipIcon").pipe((0,v.h)(()=>"default"===this._tooltipIcon),(0,_.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()))}set nzNoColon(n){this.noColon=(0,u.sw)(n)}get nzNoColon(){var n;return"default"!==this.noColon?this.noColon:null===(n=this.nzFormDirective)||void 0===n?void 0:n.nzNoColon}set nzTooltipIcon(n){this._tooltipIcon=B(n)}get tooltipIcon(){var n;return"default"!==this._tooltipIcon?this._tooltipIcon:B((null===(n=this.nzFormDirective)||void 0===n?void 0:n.nzTooltipIcon)||I)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(t.sBO),t.Y36(A,12))},o.\u0275cmp=t.Xpm({type:o,selectors:[["nz-form-label"]],inputs:{nzFor:"nzFor",nzRequired:"nzRequired",nzNoColon:"nzNoColon",nzTooltipTitle:"nzTooltipTitle",nzTooltipIcon:"nzTooltipIcon"},exportAs:["nzFormLabel"],ngContentSelectors:E,decls:3,vars:6,consts:[["class","ant-form-item-tooltip","nz-tooltip","",3,"nzTooltipTitle",4,"ngIf"],["nz-tooltip","",1,"ant-form-item-tooltip",3,"nzTooltipTitle"],[4,"nzStringTemplateOutlet"],["nz-icon","",3,"nzType","nzTheme"]],template:function(n,e){1&n&&(t.F$t(),t.TgZ(0,"label"),t.Hsn(1),t.YNc(2,nt,2,2,"span",0),t.qZA()),2&n&&(t.ekj("ant-form-item-no-colon",e.nzNoColon)("ant-form-item-required",e.nzRequired),t.uIk("for",e.nzFor),t.xp6(2),t.Q6J("ngIf",e.nzTooltipTitle))},directives:[C.O5,R.SY,F.f,D.Ls],encapsulation:2,changeDetection:0}),(0,f.gn)([(0,u.yF)()],o.prototype,"nzRequired",void 0),o})(),rt=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[b.vT,C.ez,P.Jb,D.PV,R.cg,k.xu,W.ud,F.T],P.Jb]}),o})()}}]);