import{g as _,r as O}from"./index-BJkAP4oS.js";function j(p,h){for(var a=0;a<h.length;a++){const r=h[a];if(typeof r!="string"&&!Array.isArray(r)){for(const f in r)if(f!=="default"&&!(f in p)){const o=Object.getOwnPropertyDescriptor(r,f);o&&Object.defineProperty(p,f,o.get?o:{enumerable:!0,get:()=>r[f]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var A={exports:{}};(function(p,h){(function(a){a(O())})(function(a){a.defineMode("elm",function(){function r(t,e,n){return e(n),n(t,e)}var f=/[a-z]/,o=/[A-Z]/,u=/[a-zA-Z0-9_]/,m=/[0-9]/,x=/[0-9A-Fa-f]/,g=/[-&*+.\\/<>=?^|:]/,w=/[(),[\]{}]/,y=/[ \v\f]/;function i(){return function(t,e){if(t.eatWhile(y))return null;var n=t.next();if(w.test(n))return n==="{"&&t.eat("-")?r(t,e,v(1)):n==="["&&t.match("glsl|")?r(t,e,W):"builtin";if(n==="'")return r(t,e,k);if(n==='"')return t.eat('"')?t.eat('"')?r(t,e,E):"string":r(t,e,b);if(o.test(n))return t.eatWhile(u),"variable-2";if(f.test(n)){var l=t.pos===1;return t.eatWhile(u),l?"def":"variable"}if(m.test(n)){if(n==="0"){if(t.eat(/[xX]/))return t.eatWhile(x),"number"}else t.eatWhile(m);return t.eat(".")&&t.eatWhile(m),t.eat(/[eE]/)&&(t.eat(/[-+]/),t.eatWhile(m)),"number"}return g.test(n)?n==="-"&&t.eat("-")?(t.skipToEnd(),"comment"):(t.eatWhile(g),"keyword"):n==="_"?"keyword":"error"}}function v(t){return t==0?i():function(e,n){for(;!e.eol();){var l=e.next();if(l=="{"&&e.eat("-"))++t;else if(l=="-"&&e.eat("}")&&(--t,t===0))return n(i()),"comment"}return n(v(t)),"comment"}}function E(t,e){for(;!t.eol();){var n=t.next();if(n==='"'&&t.eat('"')&&t.eat('"'))return e(i()),"string"}return"string"}function b(t,e){for(;t.skipTo('\\"');)t.next(),t.next();return t.skipTo('"')?(t.next(),e(i()),"string"):(t.skipToEnd(),e(i()),"error")}function k(t,e){for(;t.skipTo("\\'");)t.next(),t.next();return t.skipTo("'")?(t.next(),e(i()),"string"):(t.skipToEnd(),e(i()),"error")}function W(t,e){for(;!t.eol();){var n=t.next();if(n==="|"&&t.eat("]"))return e(i()),"string"}return"string"}var R={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1};return{startState:function(){return{f:i()}},copyState:function(t){return{f:t.f}},lineComment:"--",token:function(t,e){var n=e.f(t,function(T){e.f=T}),l=t.current();return R.hasOwnProperty(l)?"keyword":n}}}),a.defineMIME("text/x-elm","elm")})})();var d=A.exports;const M=_(d),P=j({__proto__:null,default:M},[d]);export{P as e};
