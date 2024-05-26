import{g as J,c as K}from"./index-BfZB7xyU.js";function M(k,_){for(var c=0;c<_.length;c++){const p=_[c];if(typeof p!="string"&&!Array.isArray(p)){for(const y in p)if(y!=="default"&&!(y in k)){const b=Object.getOwnPropertyDescriptor(p,y);b&&Object.defineProperty(k,y,b.get?b:{enumerable:!0,get:()=>p[y]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var H={exports:{}};(function(k,_){(function(c){c(K)})(function(c){function p(a){return new RegExp("^(("+a.join(")|(")+"))\\b")}var y=p(["and","or","not","is"]),b=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],m=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];c.registerHelper("hintWords","python",b.concat(m).concat(["exec","print"]));function f(a){return a.scopes[a.scopes.length-1]}c.defineMode("python",function(a,l){for(var h="error",B=l.delimiters||l.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,v=[l.singleOperators,l.doubleOperators,l.doubleDelimiters,l.tripleDelimiters,l.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],x=0;x<v.length;x++)v[x]||v.splice(x--,1);var S=l.hangingIndent||a.indentUnit,g=b,s=m;l.extra_keywords!=null&&(g=g.concat(l.extra_keywords)),l.extra_builtins!=null&&(s=s.concat(l.extra_builtins));var F=!(l.version&&Number(l.version)<3);if(F){var w=l.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;g=g.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),s=s.concat(["ascii","bytes","exec","print"]);var O=new RegExp("^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|\"{3}|['\"]))","i")}else{var w=l.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;g=g.concat(["exec","print"]),s=s.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var O=new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i")}var D=p(g),N=p(s);function T(e,n){var r=e.sol()&&n.lastToken!="\\";if(r&&(n.indent=e.indentation()),r&&f(n).type=="py"){var i=f(n).offset;if(e.eatSpace()){var t=e.indentation();return t>i?A(n):t<i&&I(e,n)&&e.peek()!="#"&&(n.errorToken=!0),null}else{var u=E(e,n);return i>0&&I(e,n)&&(u+=" "+h),u}}return E(e,n)}function E(e,n,r){if(e.eatSpace())return null;if(!r&&e.match(/^#.*/))return"comment";if(e.match(/^[0-9\.]/,!1)){var i=!1;if(e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(i=!0),e.match(/^[\d_]+\.\d*/)&&(i=!0),e.match(/^\.\d+/)&&(i=!0),i)return e.eat(/J/i),"number";var t=!1;if(e.match(/^0x[0-9a-f_]+/i)&&(t=!0),e.match(/^0b[01_]+/i)&&(t=!0),e.match(/^0o[0-7_]+/i)&&(t=!0),e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(e.eat(/J/i),t=!0),e.match(/^0(?![\dx])/i)&&(t=!0),t)return e.eat(/L/i),"number"}if(e.match(O)){var u=e.current().toLowerCase().indexOf("f")!==-1;return u?(n.tokenize=P(e.current(),n.tokenize),n.tokenize(e,n)):(n.tokenize=$(e.current(),n.tokenize),n.tokenize(e,n))}for(var o=0;o<v.length;o++)if(e.match(v[o]))return"operator";return e.match(B)?"punctuation":n.lastToken=="."&&e.match(w)?"property":e.match(D)||e.match(y)?"keyword":e.match(N)?"builtin":e.match(/^(self|cls)\b/)?"variable-2":e.match(w)?n.lastToken=="def"||n.lastToken=="class"?"def":"variable":(e.next(),r?null:h)}function P(e,n){for(;"rubf".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1);var r=e.length==1,i="string";function t(o){return function(d,z){var j=E(d,z,!0);return j=="punctuation"&&(d.current()=="{"?z.tokenize=t(o+1):d.current()=="}"&&(o>1?z.tokenize=t(o-1):z.tokenize=u)),j}}function u(o,d){for(;!o.eol();)if(o.eatWhile(/[^'"\{\}\\]/),o.eat("\\")){if(o.next(),r&&o.eol())return i}else{if(o.match(e))return d.tokenize=n,i;if(o.match("{{"))return i;if(o.match("{",!1))return d.tokenize=t(0),o.current()?i:d.tokenize(o,d);if(o.match("}}"))return i;if(o.match("}"))return h;o.eat(/['"]/)}if(r){if(l.singleLineStringErrors)return h;d.tokenize=n}return i}return u.isString=!0,u}function $(e,n){for(;"rubf".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1);var r=e.length==1,i="string";function t(u,o){for(;!u.eol();)if(u.eatWhile(/[^'"\\]/),u.eat("\\")){if(u.next(),r&&u.eol())return i}else{if(u.match(e))return o.tokenize=n,i;u.eat(/['"]/)}if(r){if(l.singleLineStringErrors)return h;o.tokenize=n}return i}return t.isString=!0,t}function A(e){for(;f(e).type!="py";)e.scopes.pop();e.scopes.push({offset:f(e).offset+a.indentUnit,type:"py",align:null})}function U(e,n,r){var i=e.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:e.column()+1;n.scopes.push({offset:n.indent+S,type:r,align:i})}function I(e,n){for(var r=e.indentation();n.scopes.length>1&&f(n).offset>r;){if(f(n).type!="py")return!0;n.scopes.pop()}return f(n).offset!=r}function Z(e,n){e.sol()&&(n.beginningOfLine=!0,n.dedent=!1);var r=n.tokenize(e,n),i=e.current();if(n.beginningOfLine&&i=="@")return e.match(w,!1)?"meta":F?"operator":h;if(/\S/.test(i)&&(n.beginningOfLine=!1),(r=="variable"||r=="builtin")&&n.lastToken=="meta"&&(r="meta"),(i=="pass"||i=="return")&&(n.dedent=!0),i=="lambda"&&(n.lambda=!0),i==":"&&!n.lambda&&f(n).type=="py"&&e.match(/^\s*(?:#|$)/,!1)&&A(n),i.length==1&&!/string|comment/.test(r)){var t="[({".indexOf(i);if(t!=-1&&U(e,n,"])}".slice(t,t+1)),t="])}".indexOf(i),t!=-1)if(f(n).type==i)n.indent=n.scopes.pop().offset-S;else return h}return n.dedent&&e.eol()&&f(n).type=="py"&&n.scopes.length>1&&n.scopes.pop(),r}var W={startState:function(e){return{tokenize:T,scopes:[{offset:e||0,type:"py",align:null}],indent:e||0,lastToken:null,lambda:!1,dedent:0}},token:function(e,n){var r=n.errorToken;r&&(n.errorToken=!1);var i=Z(e,n);return i&&i!="comment"&&(n.lastToken=i=="keyword"||i=="punctuation"?e.current():i),i=="punctuation"&&(i=null),e.eol()&&n.lambda&&(n.lambda=!1),r?i+" "+h:i},indent:function(e,n){if(e.tokenize!=T)return e.tokenize.isString?c.Pass:0;var r=f(e),i=r.type==n.charAt(0)||r.type=="py"&&!e.dedent&&/^(else:|elif |except |finally:)/.test(n);return r.align!=null?r.align-(i?1:0):r.offset-(i?S:0)},electricInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,closeBrackets:{triples:"'\""},lineComment:"#",fold:"indent"};return W}),c.defineMIME("text/x-python","python");var R=function(a){return a.split(" ")};c.defineMIME("text/x-cython",{name:"python",extra_keywords:R("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})})})();var L=H.exports;const q=J(L),Q=M({__proto__:null,default:q},[L]);export{L as a,Q as p};
