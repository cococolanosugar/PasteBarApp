import{g as A,r as O}from"./index-BJkAP4oS.js";function B(d,k){for(var o=0;o<k.length;o++){const f=k[o];if(typeof f!="string"&&!Array.isArray(f)){for(const c in f)if(c!=="default"&&!(c in d)){const l=Object.getOwnPropertyDescriptor(f,c);l&&Object.defineProperty(d,c,l.get?l:{enumerable:!0,get:()=>f[c]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}var M={exports:{}};(function(d,k){(function(o){o(O())})(function(o){o.defineMode("tiddlywiki",function(){var f={},c={allTags:!0,closeAll:!0,list:!0,newJournal:!0,newTiddler:!0,permaview:!0,saveChanges:!0,search:!0,slider:!0,tabs:!0,tag:!0,tagging:!0,tags:!0,tiddler:!0,timeline:!0,today:!0,version:!0,option:!0,with:!0,filter:!0},l=/[\w_\-]/i,p=/^\-\-\-\-+$/,w=/^\/\*\*\*$/,b=/^\*\*\*\/$/,y=/^<<<$/,g=/^\/\/\{\{\{$/,v=/^\/\/\}\}\}$/,x=/^<!--\{\{\{-->$/,m=/^<!--\}\}\}-->$/,S=/^\{\{\{$/,$=/^\}\}\}$/,_=/.*?\}\}\}/;function u(e,r,n){return r.tokenize=n,n(e,r)}function i(e,r){var n=e.sol(),t=e.peek();if(r.block=!1,n&&/[<\/\*{}\-]/.test(t)){if(e.match(S))return r.block=!0,u(e,r,h);if(e.match(y))return"quote";if(e.match(w)||e.match(b)||e.match(g)||e.match(v)||e.match(x)||e.match(m))return"comment";if(e.match(p))return"hr"}if(e.next(),n&&/[\/\*!#;:>|]/.test(t)){if(t=="!")return e.skipToEnd(),"header";if(t=="*")return e.eatWhile("*"),"comment";if(t=="#")return e.eatWhile("#"),"comment";if(t==";")return e.eatWhile(";"),"comment";if(t==":")return e.eatWhile(":"),"comment";if(t==">")return e.eatWhile(">"),"quote";if(t=="|")return"header"}if(t=="{"&&e.match("{{"))return u(e,r,h);if(/[hf]/i.test(t)&&/[ti]/i.test(e.peek())&&e.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return"link";if(t=='"')return"string";if(t=="~"||/[\[\]]/.test(t)&&e.match(t))return"brace";if(t=="@")return e.eatWhile(l),"link";if(/\d/.test(t))return e.eatWhile(/\d/),"number";if(t=="/"){if(e.eat("%"))return u(e,r,z);if(e.eat("/"))return u(e,r,E)}if(t=="_"&&e.eat("_"))return u(e,r,T);if(t=="-"&&e.eat("-")){if(e.peek()!=" ")return u(e,r,W);if(e.peek()==" ")return"brace"}return t=="'"&&e.eat("'")?u(e,r,C):t=="<"&&e.eat("<")?u(e,r,j):(e.eatWhile(/[\w\$_]/),f.propertyIsEnumerable(e.current())?"keyword":null)}function z(e,r){for(var n=!1,t;t=e.next();){if(t=="/"&&n){r.tokenize=i;break}n=t=="%"}return"comment"}function C(e,r){for(var n=!1,t;t=e.next();){if(t=="'"&&n){r.tokenize=i;break}n=t=="'"}return"strong"}function h(e,r){var n=r.block;return n&&e.current()?"comment":!n&&e.match(_)||n&&e.sol()&&e.match($)?(r.tokenize=i,"comment"):(e.next(),"comment")}function E(e,r){for(var n=!1,t;t=e.next();){if(t=="/"&&n){r.tokenize=i;break}n=t=="/"}return"em"}function T(e,r){for(var n=!1,t;t=e.next();){if(t=="_"&&n){r.tokenize=i;break}n=t=="_"}return"underlined"}function W(e,r){for(var n=!1,t;t=e.next();){if(t=="-"&&n){r.tokenize=i;break}n=t=="-"}return"strikethrough"}function j(e,r){if(e.current()=="<<")return"macro";var n=e.next();return n?n==">"&&e.peek()==">"?(e.next(),r.tokenize=i,"macro"):(e.eatWhile(/[\w\$_]/),c.propertyIsEnumerable(e.current())?"keyword":null):(r.tokenize=i,null)}return{startState:function(){return{tokenize:i}},token:function(e,r){if(e.eatSpace())return null;var n=r.tokenize(e,r);return n}}}),o.defineMIME("text/x-tiddlywiki","tiddlywiki")})})();var a=M.exports;const q=A(a),J=B({__proto__:null,default:q},[a]);export{J as t};
