"use strict";(self.webpackChunkng_zorro_antd_doc=self.webpackChunkng_zorro_antd_doc||[]).push([[4770],{4770:(me,S,a)=>{a.d(S,{Iv:()=>E,m4:()=>he,wY:()=>pe});var d=a(655),T=a(2845),n=a(5e3),m=a(3075),k=a(8929),y=a(3753),A=a(1086),v=a(7625),N=a(4850),g=a(900),I=a(5459),h=a(4255),w=a(1238),c=a(9701),z=a(8623),R=a(925),b=a(226),U=a(2343),O=a(6985),_=a(9808),F=a(5140),P=a(7737),H=a(3915),D=a(971),x=a(9985);const V=["hourListElement"],B=["minuteListElement"],L=["secondListElement"],Z=["use12HoursListElement"];function Y(i,o){if(1&i&&(n.TgZ(0,"div",4)(1,"div",5),n._uU(2),n.qZA()()),2&i){const e=n.oxw();n.xp6(2),n.Oqu(e.dateHelper.format(null==e.time?null:e.time.value,e.format)||"\xa0")}}function J(i,o){if(1&i){const e=n.EpF();n.TgZ(0,"li",10),n.NdJ("click",function(){n.CHM(e);const s=n.oxw().$implicit;return n.oxw(2).selectHour(s)}),n.TgZ(1,"div",11),n._uU(2),n.ALo(3,"number"),n.qZA()()}if(2&i){const e=n.oxw().$implicit,t=n.oxw(2);n.ekj("ant-picker-time-panel-cell-selected",t.isSelectedHour(e))("ant-picker-time-panel-cell-disabled",e.disabled),n.xp6(2),n.Oqu(n.xi3(3,5,e.index,"2.0-0"))}}function Q(i,o){if(1&i&&(n.ynx(0),n.YNc(1,J,4,8,"li",9),n.BQk()),2&i){const e=o.$implicit,t=n.oxw(2);n.xp6(1),n.Q6J("ngIf",!(t.nzHideDisabledOptions&&e.disabled))}}function K(i,o){if(1&i&&(n.TgZ(0,"ul",6,7),n.YNc(2,Q,2,1,"ng-container",8),n.qZA()),2&i){const e=n.oxw();n.xp6(2),n.Q6J("ngForOf",e.hourRange)("ngForTrackBy",e.trackByFn)}}function X(i,o){if(1&i){const e=n.EpF();n.TgZ(0,"li",10),n.NdJ("click",function(){n.CHM(e);const s=n.oxw().$implicit;return n.oxw(2).selectMinute(s)}),n.TgZ(1,"div",11),n._uU(2),n.ALo(3,"number"),n.qZA()()}if(2&i){const e=n.oxw().$implicit,t=n.oxw(2);n.ekj("ant-picker-time-panel-cell-selected",t.isSelectedMinute(e))("ant-picker-time-panel-cell-disabled",e.disabled),n.xp6(2),n.Oqu(n.xi3(3,5,e.index,"2.0-0"))}}function W(i,o){if(1&i&&(n.ynx(0),n.YNc(1,X,4,8,"li",9),n.BQk()),2&i){const e=o.$implicit,t=n.oxw(2);n.xp6(1),n.Q6J("ngIf",!(t.nzHideDisabledOptions&&e.disabled))}}function $(i,o){if(1&i&&(n.TgZ(0,"ul",6,12),n.YNc(2,W,2,1,"ng-container",8),n.qZA()),2&i){const e=n.oxw();n.xp6(2),n.Q6J("ngForOf",e.minuteRange)("ngForTrackBy",e.trackByFn)}}function j(i,o){if(1&i){const e=n.EpF();n.TgZ(0,"li",10),n.NdJ("click",function(){n.CHM(e);const s=n.oxw().$implicit;return n.oxw(2).selectSecond(s)}),n.TgZ(1,"div",11),n._uU(2),n.ALo(3,"number"),n.qZA()()}if(2&i){const e=n.oxw().$implicit,t=n.oxw(2);n.ekj("ant-picker-time-panel-cell-selected",t.isSelectedSecond(e))("ant-picker-time-panel-cell-disabled",e.disabled),n.xp6(2),n.Oqu(n.xi3(3,5,e.index,"2.0-0"))}}function G(i,o){if(1&i&&(n.ynx(0),n.YNc(1,j,4,8,"li",9),n.BQk()),2&i){const e=o.$implicit,t=n.oxw(2);n.xp6(1),n.Q6J("ngIf",!(t.nzHideDisabledOptions&&e.disabled))}}function q(i,o){if(1&i&&(n.TgZ(0,"ul",6,13),n.YNc(2,G,2,1,"ng-container",8),n.qZA()),2&i){const e=n.oxw();n.xp6(2),n.Q6J("ngForOf",e.secondRange)("ngForTrackBy",e.trackByFn)}}function ee(i,o){if(1&i){const e=n.EpF();n.TgZ(0,"li",10),n.NdJ("click",function(){n.CHM(e);const s=n.oxw().$implicit;return n.oxw(2).select12Hours(s)}),n.TgZ(1,"div",11),n._uU(2),n.qZA()()}if(2&i){const e=n.oxw().$implicit,t=n.oxw(2);n.ekj("ant-picker-time-panel-cell-selected",t.isSelected12Hours(e)),n.xp6(2),n.Oqu(e.value)}}function ne(i,o){if(1&i&&(n.ynx(0),n.YNc(1,ee,3,3,"li",16),n.BQk()),2&i){const e=n.oxw(2);n.xp6(1),n.Q6J("ngIf",!e.nzHideDisabledOptions)}}function te(i,o){if(1&i&&(n.TgZ(0,"ul",6,14),n.YNc(2,ne,2,1,"ng-container",15),n.qZA()),2&i){const e=n.oxw();n.xp6(2),n.Q6J("ngForOf",e.use12HoursRange)}}function ie(i,o){}function se(i,o){if(1&i&&(n.TgZ(0,"div",24),n.YNc(1,ie,0,0,"ng-template",25),n.qZA()),2&i){const e=n.oxw(2);n.xp6(1),n.Q6J("ngTemplateOutlet",e.nzAddOn)}}function oe(i,o){if(1&i){const e=n.EpF();n.TgZ(0,"div",17),n.YNc(1,se,2,1,"div",18),n.TgZ(2,"ul",19)(3,"li",20)(4,"a",21),n.NdJ("click",function(){return n.CHM(e),n.oxw().onClickNow()}),n._uU(5),n.ALo(6,"nzI18n"),n.qZA()(),n.TgZ(7,"li",22)(8,"button",23),n.NdJ("click",function(){return n.CHM(e),n.oxw().onClickOk()}),n._uU(9),n.ALo(10,"nzI18n"),n.qZA()()()()}if(2&i){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.nzAddOn),n.xp6(4),n.hij(" ",e.nzNowText||n.lcZ(6,3,"Calendar.lang.now")," "),n.xp6(4),n.hij(" ",e.nzOkText||n.lcZ(10,5,"Calendar.lang.ok")," ")}}const le=["inputElement"];function re(i,o){if(1&i&&(n.ynx(0),n._UZ(1,"i",7),n.BQk()),2&i){const e=o.$implicit;n.xp6(1),n.Q6J("nzType",e)}}function ae(i,o){if(1&i){const e=n.EpF();n.TgZ(0,"span",8),n.NdJ("click",function(s){return n.CHM(e),n.oxw().onClickClearBtn(s)}),n._UZ(1,"i",9),n.qZA()}if(2&i){const e=n.oxw();n.xp6(1),n.uIk("aria-label",e.nzClearText)("title",e.nzClearText)}}function ce(i,o){if(1&i){const e=n.EpF();n.TgZ(0,"div",10)(1,"div",11)(2,"div",12)(3,"nz-time-picker-panel",13),n.NdJ("ngModelChange",function(s){return n.CHM(e),n.oxw().value=s})("ngModelChange",function(s){return n.CHM(e),n.oxw().onPanelValueChange(s)})("closePanel",function(){return n.CHM(e),n.oxw().setCurrentValueAndClose()}),n.ALo(4,"async"),n.qZA()()()()}if(2&i){const e=n.oxw();n.Q6J("@slideMotion","enter"),n.xp6(3),n.Q6J("ngClass",e.nzPopupClassName)("format",e.nzFormat)("nzHourStep",e.nzHourStep)("nzMinuteStep",e.nzMinuteStep)("nzSecondStep",e.nzSecondStep)("nzDisabledHours",e.nzDisabledHours)("nzDisabledMinutes",e.nzDisabledMinutes)("nzDisabledSeconds",e.nzDisabledSeconds)("nzPlaceHolder",e.nzPlaceHolder||n.lcZ(4,19,e.i18nPlaceHolder$))("nzHideDisabledOptions",e.nzHideDisabledOptions)("nzUse12Hours",e.nzUse12Hours)("nzDefaultOpenValue",e.nzDefaultOpenValue)("nzAddOn",e.nzAddOn)("nzClearText",e.nzClearText)("nzNowText",e.nzNowText)("nzOkText",e.nzOkText)("nzAllowEmpty",e.nzAllowEmpty)("ngModel",e.value)}}class ue{constructor(){this.selected12Hours=void 0,this._use12Hours=!1,this._changes=new k.xQ}setMinutes(o,e){return e||(this.initValue(),this.value.setMinutes(o),this.update()),this}setHours(o,e){return e||(this.initValue(),this.value.setHours(this._use12Hours?"PM"===this.selected12Hours&&12!==o?o+12:"AM"===this.selected12Hours&&12===o?0:o:o),this.update()),this}setSeconds(o,e){return e||(this.initValue(),this.value.setSeconds(o),this.update()),this}setUse12Hours(o){return this._use12Hours=o,this}get changes(){return this._changes.asObservable()}setValue(o,e){return(0,c.DX)(e)&&(this._use12Hours=e),o!==this.value&&(this._value=o,(0,c.DX)(this.value)?this._use12Hours&&(0,c.DX)(this.hours)&&(this.selected12Hours=this.hours>=12?"PM":"AM"):this._clear()),this}initValue(){(0,c.kK)(this.value)&&this.setValue(new Date,this._use12Hours)}clear(){this._clear(),this.update()}get isEmpty(){return!((0,c.DX)(this.hours)||(0,c.DX)(this.minutes)||(0,c.DX)(this.seconds))}_clear(){this._value=void 0,this.selected12Hours=void 0}update(){this.isEmpty?this._value=void 0:((0,c.DX)(this.hours)&&this.value.setHours(this.hours),(0,c.DX)(this.minutes)&&this.value.setMinutes(this.minutes),(0,c.DX)(this.seconds)&&this.value.setSeconds(this.seconds),this._use12Hours&&("PM"===this.selected12Hours&&this.hours<12&&this.value.setHours(this.hours+12),"AM"===this.selected12Hours&&this.hours>=12&&this.value.setHours(this.hours-12))),this.changed()}changed(){this._changes.next(this.value)}get viewHours(){return this._use12Hours&&(0,c.DX)(this.hours)?this.calculateViewHour(this.hours):this.hours}setSelected12Hours(o){o.toUpperCase()!==this.selected12Hours&&(this.selected12Hours=o.toUpperCase(),this.update())}get value(){return this._value||this._defaultOpenValue}get hours(){var o;return null===(o=this.value)||void 0===o?void 0:o.getHours()}get minutes(){var o;return null===(o=this.value)||void 0===o?void 0:o.getMinutes()}get seconds(){var o;return null===(o=this.value)||void 0===o?void 0:o.getSeconds()}setDefaultOpenValue(o){return this._defaultOpenValue=o,this}calculateViewHour(o){const e=this.selected12Hours;return"PM"===e&&o>12?o-12:"AM"===e&&0===o?12:o}}function C(i,o=1,e=0){return new Array(Math.ceil(i/o)).fill(0).map((t,s)=>(s+e)*o)}let E=(()=>{class i{constructor(e,t,s,r){this.ngZone=e,this.cdr=t,this.dateHelper=s,this.elementRef=r,this._nzHourStep=1,this._nzMinuteStep=1,this._nzSecondStep=1,this.unsubscribe$=new k.xQ,this._format="HH:mm:ss",this._disabledHours=()=>[],this._disabledMinutes=()=>[],this._disabledSeconds=()=>[],this._allowEmpty=!0,this.time=new ue,this.hourEnabled=!0,this.minuteEnabled=!0,this.secondEnabled=!0,this.firstScrolled=!1,this.enabledColumns=3,this.nzInDatePicker=!1,this.nzHideDisabledOptions=!1,this.nzUse12Hours=!1,this.closePanel=new n.vpe}set nzAllowEmpty(e){(0,c.DX)(e)&&(this._allowEmpty=e)}get nzAllowEmpty(){return this._allowEmpty}set nzDisabledHours(e){this._disabledHours=e,this._disabledHours&&this.buildHours()}get nzDisabledHours(){return this._disabledHours}set nzDisabledMinutes(e){(0,c.DX)(e)&&(this._disabledMinutes=e,this.buildMinutes())}get nzDisabledMinutes(){return this._disabledMinutes}set nzDisabledSeconds(e){(0,c.DX)(e)&&(this._disabledSeconds=e,this.buildSeconds())}get nzDisabledSeconds(){return this._disabledSeconds}set format(e){if((0,c.DX)(e)){this._format=e,this.enabledColumns=0;const t=new Set(e);this.hourEnabled=t.has("H")||t.has("h"),this.minuteEnabled=t.has("m"),this.secondEnabled=t.has("s"),this.hourEnabled&&this.enabledColumns++,this.minuteEnabled&&this.enabledColumns++,this.secondEnabled&&this.enabledColumns++,this.nzUse12Hours&&this.build12Hours()}}get format(){return this._format}set nzHourStep(e){(0,c.DX)(e)&&(this._nzHourStep=e,this.buildHours())}get nzHourStep(){return this._nzHourStep}set nzMinuteStep(e){(0,c.DX)(e)&&(this._nzMinuteStep=e,this.buildMinutes())}get nzMinuteStep(){return this._nzMinuteStep}set nzSecondStep(e){(0,c.DX)(e)&&(this._nzSecondStep=e,this.buildSeconds())}get nzSecondStep(){return this._nzSecondStep}trackByFn(e){return e}buildHours(){var e;let t=24,s=null===(e=this.nzDisabledHours)||void 0===e?void 0:e.call(this),r=0;if(this.nzUse12Hours&&(t=12,s&&(s="PM"===this.time.selected12Hours?s.filter(l=>l>=12).map(l=>l>12?l-12:l):s.filter(l=>l<12||24===l).map(l=>24===l||0===l?12:l)),r=1),this.hourRange=C(t,this.nzHourStep,r).map(l=>({index:l,disabled:!!s&&-1!==s.indexOf(l)})),this.nzUse12Hours&&12===this.hourRange[this.hourRange.length-1].index){const l=[...this.hourRange];l.unshift(l[l.length-1]),l.splice(l.length-1,1),this.hourRange=l}}buildMinutes(){this.minuteRange=C(60,this.nzMinuteStep).map(e=>({index:e,disabled:!!this.nzDisabledMinutes&&-1!==this.nzDisabledMinutes(this.time.hours).indexOf(e)}))}buildSeconds(){this.secondRange=C(60,this.nzSecondStep).map(e=>({index:e,disabled:!!this.nzDisabledSeconds&&-1!==this.nzDisabledSeconds(this.time.hours,this.time.minutes).indexOf(e)}))}build12Hours(){const e=this._format.includes("A");this.use12HoursRange=[{index:0,value:e?"AM":"am"},{index:1,value:e?"PM":"pm"}]}buildTimes(){this.buildHours(),this.buildMinutes(),this.buildSeconds(),this.build12Hours()}scrollToTime(e=0){this.hourEnabled&&this.hourListElement&&this.scrollToSelected(this.hourListElement.nativeElement,this.time.viewHours,e,"hour"),this.minuteEnabled&&this.minuteListElement&&this.scrollToSelected(this.minuteListElement.nativeElement,this.time.minutes,e,"minute"),this.secondEnabled&&this.secondListElement&&this.scrollToSelected(this.secondListElement.nativeElement,this.time.seconds,e,"second"),this.nzUse12Hours&&this.use12HoursListElement&&this.scrollToSelected(this.use12HoursListElement.nativeElement,"AM"===this.time.selected12Hours?0:1,e,"12-hour")}selectHour(e){this.time.setHours(e.index,e.disabled),this._disabledMinutes&&this.buildMinutes(),(this._disabledSeconds||this._disabledMinutes)&&this.buildSeconds()}selectMinute(e){this.time.setMinutes(e.index,e.disabled),this._disabledSeconds&&this.buildSeconds()}selectSecond(e){this.time.setSeconds(e.index,e.disabled)}select12Hours(e){this.time.setSelected12Hours(e.value),this._disabledHours&&this.buildHours(),this._disabledMinutes&&this.buildMinutes(),this._disabledSeconds&&this.buildSeconds()}scrollToSelected(e,t,s=0,r){if(!e)return;const l=this.translateIndex(t,r);this.scrollTo(e,(e.children[l]||e.children[0]).offsetTop,s)}translateIndex(e,t){var s,r,l;return"hour"===t?this.calcIndex(null===(s=this.nzDisabledHours)||void 0===s?void 0:s.call(this),this.hourRange.map(u=>u.index).indexOf(e)):"minute"===t?this.calcIndex(null===(r=this.nzDisabledMinutes)||void 0===r?void 0:r.call(this,this.time.hours),this.minuteRange.map(u=>u.index).indexOf(e)):"second"===t?this.calcIndex(null===(l=this.nzDisabledSeconds)||void 0===l?void 0:l.call(this,this.time.hours,this.time.minutes),this.secondRange.map(u=>u.index).indexOf(e)):this.calcIndex([],this.use12HoursRange.map(u=>u.index).indexOf(e))}scrollTo(e,t,s){if(s<=0)return void(e.scrollTop=t);const l=(t-e.scrollTop)/s*10;this.ngZone.runOutsideAngular(()=>{(0,U.e)(()=>{e.scrollTop=e.scrollTop+l,e.scrollTop!==t&&this.scrollTo(e,t,s-10)})})}calcIndex(e,t){return(null==e?void 0:e.length)&&this.nzHideDisabledOptions?t-e.reduce((s,r)=>s+(r<t?1:0),0):t}changed(){this.onChange&&this.onChange(this.time.value)}touched(){this.onTouch&&this.onTouch()}timeDisabled(e){var t,s,r,l,u,p;const f=e.getHours(),M=e.getMinutes(),_e=e.getSeconds();return(null!==(s=null===(t=this.nzDisabledHours)||void 0===t?void 0:t.call(this).indexOf(f))&&void 0!==s?s:-1)>-1||(null!==(l=null===(r=this.nzDisabledMinutes)||void 0===r?void 0:r.call(this,f).indexOf(M))&&void 0!==l?l:-1)>-1||(null!==(p=null===(u=this.nzDisabledSeconds)||void 0===u?void 0:u.call(this,f,M).indexOf(_e))&&void 0!==p?p:-1)>-1}onClickNow(){const e=new Date;this.timeDisabled(e)||(this.time.setValue(e),this.changed(),this.closePanel.emit())}onClickOk(){this.time.setValue(this.time.value,this.nzUse12Hours),this.changed(),this.closePanel.emit()}isSelectedHour(e){return e.index===this.time.viewHours}isSelectedMinute(e){return e.index===this.time.minutes}isSelectedSecond(e){return e.index===this.time.seconds}isSelected12Hours(e){return e.value.toUpperCase()===this.time.selected12Hours}ngOnInit(){this.time.changes.pipe((0,v.R)(this.unsubscribe$)).subscribe(()=>{this.changed(),this.touched(),this.scrollToTime(120)}),this.buildTimes(),this.ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.scrollToTime(),this.firstScrolled=!0}),(0,y.R)(this.elementRef.nativeElement,"mousedown").pipe((0,v.R)(this.unsubscribe$)).subscribe(e=>{e.preventDefault()})})}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}ngOnChanges(e){const{nzUse12Hours:t,nzDefaultOpenValue:s}=e;!(null==t?void 0:t.previousValue)&&(null==t?void 0:t.currentValue)&&(this.build12Hours(),this.enabledColumns++),(null==s?void 0:s.currentValue)&&this.time.setDefaultOpenValue(this.nzDefaultOpenValue||new Date)}writeValue(e){this.time.setValue(e,this.nzUse12Hours),this.buildTimes(),e&&this.firstScrolled&&this.scrollToTime(120),this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouch=e}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(n.R0b),n.Y36(n.sBO),n.Y36(z.mx),n.Y36(n.SBq))},i.\u0275cmp=n.Xpm({type:i,selectors:[["nz-time-picker-panel"]],viewQuery:function(e,t){if(1&e&&(n.Gf(V,5),n.Gf(B,5),n.Gf(L,5),n.Gf(Z,5)),2&e){let s;n.iGM(s=n.CRH())&&(t.hourListElement=s.first),n.iGM(s=n.CRH())&&(t.minuteListElement=s.first),n.iGM(s=n.CRH())&&(t.secondListElement=s.first),n.iGM(s=n.CRH())&&(t.use12HoursListElement=s.first)}},hostAttrs:[1,"ant-picker-time-panel"],hostVars:12,hostBindings:function(e,t){2&e&&n.ekj("ant-picker-time-panel-column-0",0===t.enabledColumns&&!t.nzInDatePicker)("ant-picker-time-panel-column-1",1===t.enabledColumns&&!t.nzInDatePicker)("ant-picker-time-panel-column-2",2===t.enabledColumns&&!t.nzInDatePicker)("ant-picker-time-panel-column-3",3===t.enabledColumns&&!t.nzInDatePicker)("ant-picker-time-panel-narrow",t.enabledColumns<3)("ant-picker-time-panel-placement-bottomLeft",!t.nzInDatePicker)},inputs:{nzInDatePicker:"nzInDatePicker",nzAddOn:"nzAddOn",nzHideDisabledOptions:"nzHideDisabledOptions",nzClearText:"nzClearText",nzNowText:"nzNowText",nzOkText:"nzOkText",nzPlaceHolder:"nzPlaceHolder",nzUse12Hours:"nzUse12Hours",nzDefaultOpenValue:"nzDefaultOpenValue",nzAllowEmpty:"nzAllowEmpty",nzDisabledHours:"nzDisabledHours",nzDisabledMinutes:"nzDisabledMinutes",nzDisabledSeconds:"nzDisabledSeconds",format:"format",nzHourStep:"nzHourStep",nzMinuteStep:"nzMinuteStep",nzSecondStep:"nzSecondStep"},outputs:{closePanel:"closePanel"},exportAs:["nzTimePickerPanel"],features:[n._Bn([{provide:m.JU,useExisting:i,multi:!0}]),n.TTD],decls:7,vars:6,consts:[["class","ant-picker-header",4,"ngIf"],[1,"ant-picker-content"],["class","ant-picker-time-panel-column","style","position: relative;",4,"ngIf"],["class","ant-picker-footer",4,"ngIf"],[1,"ant-picker-header"],[1,"ant-picker-header-view"],[1,"ant-picker-time-panel-column",2,"position","relative"],["hourListElement",""],[4,"ngFor","ngForOf","ngForTrackBy"],["class","ant-picker-time-panel-cell",3,"ant-picker-time-panel-cell-selected","ant-picker-time-panel-cell-disabled","click",4,"ngIf"],[1,"ant-picker-time-panel-cell",3,"click"],[1,"ant-picker-time-panel-cell-inner"],["minuteListElement",""],["secondListElement",""],["use12HoursListElement",""],[4,"ngFor","ngForOf"],["class","ant-picker-time-panel-cell",3,"ant-picker-time-panel-cell-selected","click",4,"ngIf"],[1,"ant-picker-footer"],["class","ant-picker-footer-extra",4,"ngIf"],[1,"ant-picker-ranges"],[1,"ant-picker-now"],[3,"click"],[1,"ant-picker-ok"],["nz-button","","type","button","nzSize","small","nzType","primary",3,"click"],[1,"ant-picker-footer-extra"],[3,"ngTemplateOutlet"]],template:function(e,t){1&e&&(n.YNc(0,Y,3,1,"div",0),n.TgZ(1,"div",1),n.YNc(2,K,3,2,"ul",2),n.YNc(3,$,3,2,"ul",2),n.YNc(4,q,3,2,"ul",2),n.YNc(5,te,3,1,"ul",2),n.qZA(),n.YNc(6,oe,11,7,"div",3)),2&e&&(n.Q6J("ngIf",t.nzInDatePicker),n.xp6(2),n.Q6J("ngIf",t.hourEnabled),n.xp6(1),n.Q6J("ngIf",t.minuteEnabled),n.xp6(1),n.Q6J("ngIf",t.secondEnabled),n.xp6(1),n.Q6J("ngIf",t.nzUse12Hours),n.xp6(1),n.Q6J("ngIf",!t.nzInDatePicker))},directives:[O.ix,_.O5,_.sg,_.tP,F.dQ,P.w],pipes:[_.JJ,z.o9],encapsulation:2,changeDetection:0}),(0,d.gn)([(0,c.yF)()],i.prototype,"nzUse12Hours",void 0),i})(),he=(()=>{class i{constructor(e,t,s,r,l,u,p,f){this.nzConfigService=e,this.i18n=t,this.element=s,this.renderer=r,this.cdr=l,this.dateHelper=u,this.platform=p,this.directionality=f,this._nzModuleName="timePicker",this.destroy$=new k.xQ,this.isInit=!1,this.focused=!1,this.inputValue="",this.value=null,this.preValue=null,this.i18nPlaceHolder$=(0,A.of)(void 0),this.overlayPositions=[{offsetY:3,originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{offsetY:-3,originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{offsetY:3,originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{offsetY:-3,originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"}],this.dir="ltr",this.nzId=null,this.nzSize=null,this.nzHourStep=1,this.nzMinuteStep=1,this.nzSecondStep=1,this.nzClearText="clear",this.nzNowText="",this.nzOkText="",this.nzPopupClassName="",this.nzPlaceHolder="",this.nzFormat="HH:mm:ss",this.nzOpen=!1,this.nzUse12Hours=!1,this.nzSuffixIcon="clock-circle",this.nzOpenChange=new n.vpe,this.nzHideDisabledOptions=!1,this.nzAllowEmpty=!0,this.nzDisabled=!1,this.nzAutoFocus=!1,this.nzBackdrop=!1}emitValue(e){this.setValue(e,!0),this._onChange&&this._onChange(this.value),this._onTouched&&this._onTouched()}setValue(e,t=!1){t&&(this.preValue=(0,g.Z)(e)?new Date(e):null),this.value=(0,g.Z)(e)?new Date(e):null,this.inputValue=this.dateHelper.format(e,this.nzFormat),this.cdr.markForCheck()}open(){this.nzDisabled||this.nzOpen||(this.focus(),this.nzOpen=!0,this.nzOpenChange.emit(this.nzOpen))}close(){this.nzOpen=!1,this.cdr.markForCheck(),this.nzOpenChange.emit(this.nzOpen)}updateAutoFocus(){this.isInit&&!this.nzDisabled&&(this.nzAutoFocus?this.renderer.setAttribute(this.inputRef.nativeElement,"autofocus","autofocus"):this.renderer.removeAttribute(this.inputRef.nativeElement,"autofocus"))}onClickClearBtn(e){e.stopPropagation(),this.emitValue(null)}onClickOutside(e){this.element.nativeElement.contains(e.target)||this.setCurrentValueAndClose()}onFocus(e){this.focused=e,e||(this.checkTimeValid(this.value)?this.setCurrentValueAndClose():(this.setValue(this.preValue),this.close()))}focus(){this.inputRef.nativeElement&&this.inputRef.nativeElement.focus()}blur(){this.inputRef.nativeElement&&this.inputRef.nativeElement.blur()}onKeyupEsc(){this.setValue(this.preValue)}onKeyupEnter(){this.nzOpen&&(0,g.Z)(this.value)?this.setCurrentValueAndClose():this.nzOpen||this.open()}onInputChange(e){!this.platform.TRIDENT&&document.activeElement===this.inputRef.nativeElement&&(this.open(),this.parseTimeString(e))}onPanelValueChange(e){this.setValue(e),this.focus()}setCurrentValueAndClose(){this.emitValue(this.value),this.close()}ngOnInit(){var e;this.inputSize=Math.max(8,this.nzFormat.length)+2,this.origin=new T.xu(this.element),this.i18nPlaceHolder$=this.i18n.localeChange.pipe((0,N.U)(t=>t.TimePicker.placeholder)),this.dir=this.directionality.value,null===(e=this.directionality.change)||void 0===e||e.pipe((0,v.R)(this.destroy$)).subscribe(t=>{this.dir=t})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngOnChanges(e){const{nzUse12Hours:t,nzFormat:s,nzDisabled:r,nzAutoFocus:l}=e;if(t&&!t.previousValue&&t.currentValue&&!s&&(this.nzFormat="h:mm:ss a"),r){const p=this.inputRef.nativeElement;r.currentValue?this.renderer.setAttribute(p,"disabled",""):this.renderer.removeAttribute(p,"disabled")}l&&this.updateAutoFocus()}parseTimeString(e){const t=this.dateHelper.parseTime(e,this.nzFormat)||null;(0,g.Z)(t)&&(this.value=t,this.cdr.markForCheck())}ngAfterViewInit(){this.isInit=!0,this.updateAutoFocus()}writeValue(e){let t;e instanceof Date?t=e:(0,c.kK)(e)?t=null:((0,w.ZK)('Non-Date type is not recommended for time-picker, use "Date" type.'),t=new Date(e)),this.setValue(t,!0)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.nzDisabled=e,this.cdr.markForCheck()}checkTimeValid(e){var t,s,r;if(!e)return!0;const l=null===(t=this.nzDisabledHours)||void 0===t?void 0:t.call(this),u=null===(s=this.nzDisabledMinutes)||void 0===s?void 0:s.call(this,e.getHours()),p=null===(r=this.nzDisabledSeconds)||void 0===r?void 0:r.call(this,e.getHours(),e.getMinutes());return!((null==l?void 0:l.includes(e.getHours()))||(null==u?void 0:u.includes(e.getMinutes()))||(null==p?void 0:p.includes(e.getSeconds())))}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(h.jY),n.Y36(z.wi),n.Y36(n.SBq),n.Y36(n.Qsj),n.Y36(n.sBO),n.Y36(z.mx),n.Y36(R.t4),n.Y36(b.Is,8))},i.\u0275cmp=n.Xpm({type:i,selectors:[["nz-time-picker"]],viewQuery:function(e,t){if(1&e&&n.Gf(le,7),2&e){let s;n.iGM(s=n.CRH())&&(t.inputRef=s.first)}},hostAttrs:[1,"ant-picker"],hostVars:10,hostBindings:function(e,t){1&e&&n.NdJ("click",function(){return t.open()}),2&e&&n.ekj("ant-picker-large","large"===t.nzSize)("ant-picker-small","small"===t.nzSize)("ant-picker-disabled",t.nzDisabled)("ant-picker-focused",t.focused)("ant-picker-rtl","rtl"===t.dir)},inputs:{nzId:"nzId",nzSize:"nzSize",nzHourStep:"nzHourStep",nzMinuteStep:"nzMinuteStep",nzSecondStep:"nzSecondStep",nzClearText:"nzClearText",nzNowText:"nzNowText",nzOkText:"nzOkText",nzPopupClassName:"nzPopupClassName",nzPlaceHolder:"nzPlaceHolder",nzAddOn:"nzAddOn",nzDefaultOpenValue:"nzDefaultOpenValue",nzDisabledHours:"nzDisabledHours",nzDisabledMinutes:"nzDisabledMinutes",nzDisabledSeconds:"nzDisabledSeconds",nzFormat:"nzFormat",nzOpen:"nzOpen",nzUse12Hours:"nzUse12Hours",nzSuffixIcon:"nzSuffixIcon",nzHideDisabledOptions:"nzHideDisabledOptions",nzAllowEmpty:"nzAllowEmpty",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus",nzBackdrop:"nzBackdrop"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzTimePicker"],features:[n._Bn([{provide:m.JU,useExisting:i,multi:!0}]),n.TTD],decls:8,vars:14,consts:[[1,"ant-picker-input"],["type","text","autocomplete","off",3,"size","placeholder","ngModel","disabled","ngModelChange","focus","blur","keyup.enter","keyup.escape"],["inputElement",""],[1,"ant-picker-suffix"],[4,"nzStringTemplateOutlet"],["class","ant-picker-clear",3,"click",4,"ngIf"],["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","detach","overlayOutsideClick"],["nz-icon","",3,"nzType"],[1,"ant-picker-clear",3,"click"],["nz-icon","","nzType","close-circle","nzTheme","fill"],[1,"ant-picker-dropdown",2,"position","relative"],[1,"ant-picker-panel-container"],["tabindex","-1",1,"ant-picker-panel"],[3,"ngClass","format","nzHourStep","nzMinuteStep","nzSecondStep","nzDisabledHours","nzDisabledMinutes","nzDisabledSeconds","nzPlaceHolder","nzHideDisabledOptions","nzUse12Hours","nzDefaultOpenValue","nzAddOn","nzClearText","nzNowText","nzOkText","nzAllowEmpty","ngModel","ngModelChange","closePanel"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0)(1,"input",1,2),n.NdJ("ngModelChange",function(r){return t.inputValue=r})("focus",function(){return t.onFocus(!0)})("blur",function(){return t.onFocus(!1)})("keyup.enter",function(){return t.onKeyupEnter()})("keyup.escape",function(){return t.onKeyupEsc()})("ngModelChange",function(r){return t.onInputChange(r)}),n.ALo(3,"async"),n.qZA(),n.TgZ(4,"span",3),n.YNc(5,re,2,1,"ng-container",4),n.qZA(),n.YNc(6,ae,2,2,"span",5),n.qZA(),n.YNc(7,ce,5,21,"ng-template",6),n.NdJ("detach",function(){return t.close()})("overlayOutsideClick",function(r){return t.onClickOutside(r)})),2&e&&(n.xp6(1),n.Q6J("size",t.inputSize)("placeholder",t.nzPlaceHolder||n.lcZ(3,12,t.i18nPlaceHolder$))("ngModel",t.inputValue)("disabled",t.nzDisabled),n.uIk("id",t.nzId),n.xp6(4),n.Q6J("nzStringTemplateOutlet",t.nzSuffixIcon),n.xp6(1),n.Q6J("ngIf",t.nzAllowEmpty&&!t.nzDisabled&&t.value),n.xp6(1),n.Q6J("cdkConnectedOverlayHasBackdrop",t.nzBackdrop)("cdkConnectedOverlayPositions",t.overlayPositions)("cdkConnectedOverlayOrigin",t.origin)("cdkConnectedOverlayOpen",t.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-picker-dropdown"))},directives:[E,m.Fj,m.JJ,m.On,H.f,D.Ls,P.w,_.O5,T.pI,x.hQ,_.mk],pipes:[_.Ov],encapsulation:2,data:{animation:[I.mF]},changeDetection:0}),(0,d.gn)([(0,h.oS)()],i.prototype,"nzHourStep",void 0),(0,d.gn)([(0,h.oS)()],i.prototype,"nzMinuteStep",void 0),(0,d.gn)([(0,h.oS)()],i.prototype,"nzSecondStep",void 0),(0,d.gn)([(0,h.oS)()],i.prototype,"nzClearText",void 0),(0,d.gn)([(0,h.oS)()],i.prototype,"nzNowText",void 0),(0,d.gn)([(0,h.oS)()],i.prototype,"nzOkText",void 0),(0,d.gn)([(0,h.oS)()],i.prototype,"nzPopupClassName",void 0),(0,d.gn)([(0,h.oS)()],i.prototype,"nzFormat",void 0),(0,d.gn)([(0,h.oS)(),(0,c.yF)()],i.prototype,"nzUse12Hours",void 0),(0,d.gn)([(0,h.oS)()],i.prototype,"nzSuffixIcon",void 0),(0,d.gn)([(0,c.yF)()],i.prototype,"nzHideDisabledOptions",void 0),(0,d.gn)([(0,h.oS)(),(0,c.yF)()],i.prototype,"nzAllowEmpty",void 0),(0,d.gn)([(0,c.yF)()],i.prototype,"nzDisabled",void 0),(0,d.gn)([(0,c.yF)()],i.prototype,"nzAutoFocus",void 0),(0,d.gn)([(0,h.oS)()],i.prototype,"nzBackdrop",void 0),i})(),pe=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[[b.vT,_.ez,m.u5,z.YI,T.U8,D.PV,x.e4,H.T,O.sL]]}),i})()}}]);