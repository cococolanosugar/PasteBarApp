import{g as o,r as u,a as c,b as f}from"./index-BJkAP4oS.js";import{r as x}from"./overlay-D8XsXBBz.js";import{a as m}from"./coffeescript-B057E4pa.js";import{a as g}from"./css-BrsJcM3n.js";import{a as v}from"./sass-wlcoIaat.js";import{a as y}from"./stylus-B4eJfQIi.js";import{a as d}from"./pug-BjvvTFt-.js";import{a as b}from"./handlebars-CpOsYUKe.js";function $(r,p){for(var e=0;e<p.length;e++){const s=p[e];if(typeof s!="string"&&!Array.isArray(s)){for(const t in s)if(t!=="default"&&!(t in r)){const a=Object.getOwnPropertyDescriptor(s,t);a&&Object.defineProperty(r,t,a.get?a:{enumerable:!0,get:()=>s[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var h={exports:{}};(function(r,p){(function(e){e(u(),x(),c(),f(),m,g,v,y,d,b)})(function(e){var s={script:[["lang",/coffee(script)?/,"coffeescript"],["type",/^(?:text|application)\/(?:x-)?coffee(?:script)?$/,"coffeescript"],["lang",/^babel$/,"javascript"],["type",/^text\/babel$/,"javascript"],["type",/^text\/ecmascript-\d+$/,"javascript"]],style:[["lang",/^stylus$/i,"stylus"],["lang",/^sass$/i,"sass"],["lang",/^less$/i,"text/x-less"],["lang",/^scss$/i,"text/x-scss"],["type",/^(text\/)?(x-)?styl(us)?$/i,"stylus"],["type",/^text\/sass/i,"sass"],["type",/^(text\/)?(x-)?scss$/i,"text/x-scss"],["type",/^(text\/)?(x-)?less$/i,"text/x-less"]],template:[["lang",/^vue-template$/i,"vue"],["lang",/^pug$/i,"pug"],["lang",/^handlebars$/i,"handlebars"],["type",/^(text\/)?(x-)?pug$/i,"pug"],["type",/^text\/x-handlebars-template$/i,"handlebars"],[null,null,"vue-template"]]};e.defineMode("vue-template",function(t,a){var n={token:function(l){if(l.match(/^\{\{.*?\}\}/))return"meta mustache";for(;l.next()&&!l.match("{{",!1););return null}};return e.overlayMode(e.getMode(t,a.backdrop||"text/html"),n)}),e.defineMode("vue",function(t){return e.getMode(t,{name:"htmlmixed",tags:s})},"htmlmixed","xml","javascript","coffeescript","css","sass","stylus","pug","handlebars"),e.defineMIME("script/x-vue","vue"),e.defineMIME("text/x-vue","vue")})})();var i=h.exports;const E=o(i),A=$({__proto__:null,default:E},[i]);export{A as v};
