import{g as c,r as l}from"./index-D1o0vJsP.js";import{r}from"./htmlmixed-C9hSwolq.js";import{r as s}from"./multiplex-BM4ygnnb.js";function a(d,o){for(var e=0;e<o.length;e++){const m=o[e];if(typeof m!="string"&&!Array.isArray(m)){for(const t in m)if(t!=="default"&&!(t in d)){const n=Object.getOwnPropertyDescriptor(m,t);n&&Object.defineProperty(d,t,n.get?n:{enumerable:!0,get:()=>m[t]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}var u={exports:{}};(function(d,o){(function(e){e(l(),r(),s())})(function(e){e.defineMode("htmlembedded",function(m,t){var n=t.closeComment||"--%>";return e.multiplexingMode(e.getMode(m,"htmlmixed"),{open:t.openComment||"<%--",close:n,delimStyle:"comment",mode:{token:function(i){return i.skipTo(n)||i.skipToEnd(),"comment"}}},{open:t.open||t.scriptStartRegex||"<%",close:t.close||t.scriptEndRegex||"%>",mode:e.getMode(m,t.scriptingModeSpec)})},"htmlmixed"),e.defineMIME("application/x-ejs",{name:"htmlembedded",scriptingModeSpec:"javascript"}),e.defineMIME("application/x-aspx",{name:"htmlembedded",scriptingModeSpec:"text/x-csharp"}),e.defineMIME("application/x-jsp",{name:"htmlembedded",scriptingModeSpec:"text/x-java"}),e.defineMIME("application/x-erb",{name:"htmlembedded",scriptingModeSpec:"ruby"})})})();var p=u.exports;const x=c(p),g=a({__proto__:null,default:x},[p]);export{g as h};
