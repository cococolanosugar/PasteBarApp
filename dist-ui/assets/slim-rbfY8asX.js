import{g as pn,r as an}from"./index-D1o0vJsP.js";import{r as xn}from"./htmlmixed-C9hSwolq.js";import{r as zn}from"./ruby-Dx1er7Ch.js";function hn(h,g){for(var t=0;t<g.length;t++){const l=g[t];if(typeof l!="string"&&!Array.isArray(l)){for(const c in l)if(c!=="default"&&!(c in h)){const f=Object.getOwnPropertyDescriptor(l,c);f&&Object.defineProperty(h,c,f.get?f:{enumerable:!0,get:()=>l[c]})}}}return Object.freeze(Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}))}var mn={exports:{}};(function(h,g){(function(t){t(an(),xn(),zn())})(function(t){t.defineMode("slim",function(l){var c=t.getMode(l,{name:"htmlmixed"}),f=t.getMode(l,"ruby"),w={html:c,ruby:f},D={ruby:"ruby",javascript:"javascript",css:"text/css",sass:"text/x-sass",scss:"text/x-scss",less:"text/x-less",styl:"text/x-styl",coffee:"coffeescript",asciidoc:"text/x-asciidoc",markdown:"text/x-markdown",textile:"text/x-textile",creole:"text/x-creole",wiki:"text/x-wiki",mediawiki:"text/x-mediawiki",rdoc:"text/x-rdoc",builder:"text/x-builder",nokogiri:"text/x-nokogiri",erb:"application/x-erb"},U=function(n){var e=[];for(var i in n)e.push(i);return new RegExp("^("+e.join("|")+"):")}(D),L={commentLine:"comment",slimSwitch:"operator special",slimTag:"tag",slimId:"attribute def",slimClass:"attribute qualifier",slimAttribute:"attribute",slimSubmode:"keyword special",closeAttributeTag:null,slimDoctype:null,lineContinuation:null},q={"{":"}","[":"]","(":")"},m="_a-zA-ZÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�",y=m+"\\-0-9·̀-ͯ‿-⁀",N=new RegExp("^[:"+m+"](?::["+y+"]|["+y+"]*)"),Q=new RegExp("^[:"+m+"][:\\."+y+"]*(?=\\s*=)"),V=new RegExp("^[:"+m+"][:\\."+y+"]*"),W=/^\.-?[_a-zA-Z]+[\w\-]*/,H=/^#[_a-zA-Z]+[\w\-]*/;function Z(n,e,i){var u=function(r,o){return o.tokenize=e,r.pos<n?(r.pos=n,i):o.tokenize(r,o)};return function(r,o){return o.tokenize=u,e(r,o)}}function B(n,e,i,u,r){var o=n.current(),k=o.search(i);return k>-1&&(e.tokenize=Z(n.pos,e.tokenize,r),n.backUp(o.length-k-u)),r}function F(n,e){n.stack={parent:n.stack,style:"continuation",indented:e,tokenize:n.line},n.line=n.tokenize}function A(n){n.line==n.tokenize&&(n.line=n.stack.tokenize,n.stack=n.stack.parent)}function G(n,e){return function(i,u){if(A(u),i.match(/^\\$/))return F(u,n),"lineContinuation";var r=e(i,u);return i.eol()&&i.current().match(/(?:^|[^\\])(?:\\\\)*\\$/)&&i.backUp(1),r}}function J(n,e){return function(i,u){A(u);var r=e(i,u);return i.eol()&&i.current().match(/,$/)&&F(u,n),r}}function M(n,e){return function(i,u){var r=i.peek();return r==n&&u.rubyState.tokenize.length==1?(i.next(),u.tokenize=e,"closeAttributeTag"):a(i,u)}}function d(n){var e,i=function(u,r){if(r.rubyState.tokenize.length==1&&!r.rubyState.context.prev){if(u.backUp(1),u.eatSpace())return r.rubyState=e,r.tokenize=n,n(u,r);u.next()}return a(u,r)};return function(u,r){return e=r.rubyState,r.rubyState=t.startState(f),r.tokenize=i,a(u,r)}}function a(n,e){return f.token(n,e.rubyState)}function K(n,e){return n.match(/^\\$/)?"lineContinuation":O(n,e)}function O(n,e){return n.match(/^#\{/)?(e.tokenize=M("}",e.tokenize),null):B(n,e,/[^\\]#\{/,1,c.token(n,e.htmlState))}function X(n){return function(e,i){var u=K(e,i);return e.eol()&&(i.tokenize=n),u}}function s(n,e,i){return e.stack={parent:e.stack,style:"html",indented:n.column()+i,tokenize:e.line},e.line=e.tokenize=O,null}function T(n,e){return n.skipToEnd(),e.stack.style}function Y(n,e){return e.stack={parent:e.stack,style:"comment",indented:e.indented+1,tokenize:e.line},e.line=T,T(n,e)}function p(n,e){return n.eat(e.stack.endQuote)?(e.line=e.stack.line,e.tokenize=e.stack.tokenize,e.stack=e.stack.parent,null):n.match(V)?(e.tokenize=nn,"slimAttribute"):(n.next(),null)}function nn(n,e){return n.match(/^==?/)?(e.tokenize=en,null):p(n,e)}function en(n,e){var i=n.peek();return i=='"'||i=="'"?(e.tokenize=j(i,"string",!0,!1,p),n.next(),e.tokenize(n,e)):i=="["?d(p)(n,e):n.match(/^(true|false|nil)\b/)?(e.tokenize=p,"keyword"):d(p)(n,e)}function un(n,e,i){return n.stack={parent:n.stack,style:"wrapper",indented:n.indented+1,tokenize:i,line:n.line,endQuote:e},n.line=n.tokenize=p,null}function rn(n,e){if(n.match(/^#\{/))return e.tokenize=M("}",e.tokenize),null;var i=new t.StringStream(n.string.slice(e.stack.indented),n.tabSize);i.pos=n.pos-e.stack.indented,i.start=n.start-e.stack.indented,i.lastColumnPos=n.lastColumnPos-e.stack.indented,i.lastColumnValue=n.lastColumnValue-e.stack.indented;var u=e.subMode.token(i,e.subState);return n.pos=i.pos+e.stack.indented,u}function tn(n,e){return e.stack.indented=n.column(),e.line=e.tokenize=rn,e.tokenize(n,e)}function on(n){var e=D[n],i=t.mimeModes[e];if(i)return t.getMode(l,i);var u=t.modes[e];return u?u(l,{name:e}):t.getMode(l,"null")}function ln(n){return w.hasOwnProperty(n)?w[n]:w[n]=on(n)}function cn(n,e){var i=ln(n),u=t.startState(i);return e.subMode=i,e.subState=u,e.stack={parent:e.stack,style:"sub",indented:e.indented+1,tokenize:e.line},e.line=e.tokenize=tn,"slimSubmode"}function fn(n,e){return n.skipToEnd(),"slimDoctype"}function kn(n,e){var i=n.peek();if(i=="<")return(e.tokenize=X(e.tokenize))(n,e);if(n.match(/^[|']/))return s(n,e,1);if(n.match(/^\/(!|\[\w+])?/))return Y(n,e);if(n.match(/^(-|==?[<>]?)/))return e.tokenize=G(n.column(),J(n.column(),a)),"slimSwitch";if(n.match(/^doctype\b/))return e.tokenize=fn,"keyword";var u=n.match(U);return u?cn(u[1],e):R(n,e)}function E(n,e){return e.startOfLine?kn(n,e):R(n,e)}function R(n,e){return n.eat("*")?(e.tokenize=d(_),null):n.match(N)?(e.tokenize=_,"slimTag"):x(n,e)}function _(n,e){return n.match(/^(<>?|><?)/)?(e.tokenize=x,null):x(n,e)}function x(n,e){return n.match(H)?(e.tokenize=x,"slimId"):n.match(W)?(e.tokenize=x,"slimClass"):b(n,e)}function b(n,e){return n.match(/^([\[\{\(])/)?un(e,q[RegExp.$1],b):n.match(Q)?(e.tokenize=dn,"slimAttribute"):n.peek()=="*"?(n.next(),e.tokenize=d(C),null):C(n,e)}function dn(n,e){return n.match(/^==?/)?(e.tokenize=bn,null):b(n,e)}function bn(n,e){var i=n.peek();return i=='"'||i=="'"?(e.tokenize=j(i,"string",!0,!1,b),n.next(),e.tokenize(n,e)):i=="["?d(b)(n,e):i==":"?d($)(n,e):n.match(/^(true|false|nil)\b/)?(e.tokenize=b,"keyword"):d(b)(n,e)}function $(n,e){return n.backUp(1),n.match(/^[^\s],(?=:)/)?(e.tokenize=d($),null):(n.next(),b(n,e))}function j(n,e,i,u,r){return function(o,k){A(k);var S=o.current().length==0;if(o.match(/^\\$/,S))return S?(F(k,k.indented),"lineContinuation"):e;if(o.match(/^#\{/,S))return S?(k.tokenize=M("}",k.tokenize),null):e;for(var z=!1,v;(v=o.next())!=null;){if(v==n&&(u||!z)){k.tokenize=r;break}if(i&&v=="#"&&!z&&o.eat("{")){o.backUp(2);break}z=!z&&v=="\\"}return o.eol()&&z&&o.backUp(1),e}}function C(n,e){return n.match(/^==?/)?(e.tokenize=a,"slimSwitch"):n.match(/^\/$/)?(e.tokenize=E,null):n.match(/^:/)?(e.tokenize=R,"slimSwitch"):(s(n,e,0),e.tokenize(n,e))}var P={startState:function(){var n=t.startState(c),e=t.startState(f);return{htmlState:n,rubyState:e,stack:null,last:null,tokenize:E,line:E,indented:0}},copyState:function(n){return{htmlState:t.copyState(c,n.htmlState),rubyState:t.copyState(f,n.rubyState),subMode:n.subMode,subState:n.subMode&&t.copyState(n.subMode,n.subState),stack:n.stack,last:n.last,tokenize:n.tokenize,line:n.line}},token:function(n,e){if(n.sol())for(e.indented=n.indentation(),e.startOfLine=!0,e.tokenize=e.line;e.stack&&e.stack.indented>e.indented&&e.last!="slimSubmode";)e.line=e.tokenize=e.stack.tokenize,e.stack=e.stack.parent,e.subMode=null,e.subState=null;if(n.eatSpace())return null;var i=e.tokenize(n,e);return e.startOfLine=!1,i&&(e.last=i),L.hasOwnProperty(i)?L[i]:i},blankLine:function(n){if(n.subMode&&n.subMode.blankLine)return n.subMode.blankLine(n.subState)},innerMode:function(n){return n.subMode?{state:n.subState,mode:n.subMode}:{state:n,mode:P}}};return P},"htmlmixed","ruby"),t.defineMIME("text/x-slim","slim"),t.defineMIME("application/x-slim","slim")})})();var I=mn.exports;const yn=pn(I),wn=hn({__proto__:null,default:yn},[I]);export{wn as s};
