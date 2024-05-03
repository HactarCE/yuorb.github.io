import{f as d,i as m,h as p,j as c}from"./app-BDcy-jHW.js";import{_ as f}from"./plugin-vue_export-helper-DlAUqK2U.js";var a={name:"VueCustomTooltip",color:"#fff",background:"#000",borderRadius:100,fontWeight:400},u=d({name:"VueCustomTooltip",props:{label:String,active:{type:Boolean,default:!0},sticky:Boolean,multiline:Boolean,underlined:Boolean,abbreviation:Boolean,position:{type:String,default:"is-top",validator:function(t){return["is-top","is-bottom","is-left","is-right"].indexOf(t)>-1}},size:{type:String,default:"is-medium",validator:function(t){return["is-small","is-medium","is-large"].indexOf(t)>-1}}},setup:function(t,s){var o=s.slots,e=s.attrs,i=m("vue-custom-tooltip",a),n=function(){if(!(!i||!a)){var l=document&&document.documentElement?document.documentElement:null;l&&(l.style.setProperty("--vue-custom-tooltip-color",i.color!==a.color?i.color:null),l.style.setProperty("--vue-custom-tooltip-background",i.background!==a.background?i.background:null),l.style.setProperty("--vue-custom-tooltip-border-radius",i.borderRadius!==a.borderRadius?i.borderRadius+"px":null),l.style.setProperty("--vue-custom-tooltip-font-weight",i.fontWeight!==a.fontWeight?i.fontWeight.toString():null))}};return p(n),function(){return[c(t.abbreviation?"abbr":"span",{class:[e.class,t.position,t.multiline&&t.size==="is-small"?"is-medium":t.size,{"vue-custom-tooltip":t.active&&t.label,"is-sticky":t.sticky,"has-multiline":t.multiline,"is-underlined":t.underlined||t.abbreviation}],"data-label":t.label,"aria-label":t.label,role:"tooltip",style:[{cursor:t.abbreviation?"help":"pointer"},e.style]},o)]}}});function b(r,t){t===void 0&&(t={});var s=t.insertAt;if(!(typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",s==="top"&&o.firstChild?o.insertBefore(e,o.firstChild):o.appendChild(e),e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r))}}var v='.vue-custom-tooltip{display:inline-block;position:relative;text-decoration-line:none!important}.vue-custom-tooltip.is-top:after,.vue-custom-tooltip.is-top:before{bottom:calc(100% + 7px);left:50%;right:auto;top:auto;transform:translateX(-50%)}.vue-custom-tooltip.is-top:before{border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #000;border-top:5px solid var(--vue-custom-tooltip-background,#000);bottom:calc(100% + 2px)}.vue-custom-tooltip.is-top.has-multiline.is-small:after{width:140px}.vue-custom-tooltip.is-top.has-multiline.is-medium:after{padding:.6rem 1.25rem .65rem;width:250px}.vue-custom-tooltip.is-top.has-multiline.is-large:after{padding:.6rem 1.25rem .65rem;width:480px}.vue-custom-tooltip.is-right:after,.vue-custom-tooltip.is-right:before{bottom:auto;left:calc(100% + 7px);right:auto;top:50%;transform:translateY(-50%)}.vue-custom-tooltip.is-right:before{border-bottom:5px solid transparent;border-right:5px solid #000;border-right:5px solid var(--vue-custom-tooltip-background,#000);border-top:5px solid transparent;left:calc(100% + 3px)}.vue-custom-tooltip.is-right.has-multiline.is-small:after{width:140px}.vue-custom-tooltip.is-right.has-multiline.is-medium:after{padding:.6rem 1.25rem .65rem;width:250px}.vue-custom-tooltip.is-right.has-multiline.is-large:after{padding:.6rem 1.25rem .65rem;width:480px}.vue-custom-tooltip.is-bottom:after,.vue-custom-tooltip.is-bottom:before{bottom:auto;left:50%;right:auto;top:calc(100% + 7px);transform:translateX(-50%)}.vue-custom-tooltip.is-bottom:before{border-bottom:5px solid #000;border-bottom:5px solid var(--vue-custom-tooltip-background,#000);border-left:5px solid transparent;border-right:5px solid transparent;top:calc(100% + 2px)}.vue-custom-tooltip.is-bottom.has-multiline.is-small:after{width:140px}.vue-custom-tooltip.is-bottom.has-multiline.is-medium:after{padding:.6rem 1.25rem .65rem;width:250px}.vue-custom-tooltip.is-bottom.has-multiline.is-large:after{padding:.6rem 1.25rem .65rem;width:480px}.vue-custom-tooltip.is-left:after,.vue-custom-tooltip.is-left:before{bottom:auto;left:auto;right:calc(100% + 7px);top:50%;transform:translateY(-50%)}.vue-custom-tooltip.is-left:before{border-bottom:5px solid transparent;border-left:5px solid #000;border-left:5px solid var(--vue-custom-tooltip-background,#000);border-top:5px solid transparent;right:calc(100% + 3px)}.vue-custom-tooltip.is-left.has-multiline.is-small:after{width:140px}.vue-custom-tooltip.is-left.has-multiline.is-medium:after{padding:.6rem 1.25rem .65rem;width:250px}.vue-custom-tooltip.is-left.has-multiline.is-large:after{padding:.6rem 1.25rem .65rem;width:480px}.vue-custom-tooltip.is-underlined{border-bottom:1px dotted #000;border-bottom:1px dotted var(--vue-custom-tooltip-background,#000);line-height:1.2}.vue-custom-tooltip:after,.vue-custom-tooltip:before{content:"";opacity:0;pointer-events:none;position:absolute;transition:opacity 86ms ease-out,visibility 86ms ease-out;visibility:hidden}.vue-custom-tooltip:before{z-index:889}.vue-custom-tooltip:after{background:#000;background:var(--vue-custom-tooltip-background,#000);border-radius:100px;border-radius:var(--vue-custom-tooltip-border-radius,100px);box-shadow:0 1px 2px 1px rgba(0,1,0,.2);color:#fff;color:var(--vue-custom-tooltip-color,#fff);content:attr(data-label);font-size:.85rem!important;font-weight:400;font-weight:var(--vue-custom-tooltip-font-weight,400);letter-spacing:normal!important;line-height:1.3;max-width:100vw;padding:.45rem .75rem;text-transform:none;white-space:nowrap;width:auto;z-index:888}.vue-custom-tooltip:not([data-label=""]):hover:after,.vue-custom-tooltip:not([data-label=""]):hover:before{opacity:1;visibility:visible}:disabled .vue-custom-tooltip{pointer-events:none}.vue-custom-tooltip:not([data-label=""]).is-sticky:after,.vue-custom-tooltip:not([data-label=""]).is-sticky:before{opacity:1;visibility:visible}.vue-custom-tooltip.has-multiline:after{display:block;line-height:1.4;padding:.5rem .75rem .65rem;text-align:center;white-space:pre-wrap}';b(v);u.__file="src/VueCustomTooltip.vue";var h=function(){var r=u;return r.install=function(t,s){var o=Object.assign({},s),e=/^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;o&&o.color&&!e.test(o.color)&&delete o.color,o&&o.background&&!e.test(o.background)&&delete o.background;var i=/^[0-9]+$/;o&&o.borderRadius&&!i.test(o.borderRadius.toString())&&delete o.borderRadius;var n=/^[1-9]{1}00$/;o&&o.fontWeight&&!n.test(o.fontWeight.toString())&&delete o.fontWeight;var l=Object.assign({},a,o);t.provide("vue-custom-tooltip",l),t.component(l.name,r)},r}();const g=h,w=f(g,[["__file","Tooltip.vue"]]);export{w as default};
