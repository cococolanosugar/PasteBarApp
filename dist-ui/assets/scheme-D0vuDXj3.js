import{g as A,r as K}from"./index-B8TKu3i0.js";function P(f,u){for(var a=0;a<u.length;a++){const o=u[a];if(typeof o!="string"&&!Array.isArray(o)){for(const t in o)if(t!=="default"&&!(t in f)){const d=Object.getOwnPropertyDescriptor(o,t);d&&Object.defineProperty(f,t,d.get?d:{enumerable:!0,get:()=>o[t]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var z={exports:{}};(function(f,u){(function(a){a(K())})(function(a){a.defineMode("scheme",function(){var o="builtin",t="comment",d="string",b="symbol",s="atom",v="number",y="bracket",N=2;function k(e){for(var n={},i=e.split(" "),l=0;l<i.length;++l)n[i[l]]=!0;return n}var w=k("λ case-lambda call/cc class cond-expand define-class define-values exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax define-macro defmacro delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"),O=k("define let letrec let* lambda define-macro defmacro let-syntax letrec-syntax let-values let*-values define-syntax syntax-rules define-values when unless");function Q(e,n,i){this.indent=e,this.type=n,this.prev=i}function p(e,n,i){e.indentStack=new Q(n,i,e.indentStack)}function _(e){e.indentStack=e.indentStack.prev}var I=new RegExp(/^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i),$=new RegExp(/^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i),j=new RegExp(/^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i),R=new RegExp(/^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i);function B(e){return e.match(I)}function D(e){return e.match($)}function m(e,n){return n===!0&&e.backUp(1),e.match(R)}function U(e){return e.match(j)}function E(e,n){for(var i,l=!1;(i=e.next())!=null;){if(i==n.token&&!l){n.state.mode=!1;break}l=!l&&i=="\\"}}return{startState:function(){return{indentStack:null,indentation:0,mode:!1,sExprComment:!1,sExprQuote:!1}},token:function(e,n){if(n.indentStack==null&&e.sol()&&(n.indentation=e.indentation()),e.eatSpace())return null;var i=null;switch(n.mode){case"string":E(e,{token:'"',state:n}),i=d;break;case"symbol":E(e,{token:"|",state:n}),i=b;break;case"comment":for(var l,S=!1;(l=e.next())!=null;){if(l=="#"&&S){n.mode=!1;break}S=l=="|"}i=t;break;case"s-expr-comment":if(n.mode=!1,e.peek()=="("||e.peek()=="[")n.sExprComment=0;else{e.eatWhile(/[^\s\(\)\[\]]/),i=t;break}default:var r=e.next();if(r=='"')n.mode="string",i=d;else if(r=="'")e.peek()=="("||e.peek()=="["?(typeof n.sExprQuote!="number"&&(n.sExprQuote=0),i=s):(e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/),i=s);else if(r=="|")n.mode="symbol",i=b;else if(r=="#")if(e.eat("|"))n.mode="comment",i=t;else if(e.eat(/[tf]/i))i=s;else if(e.eat(";"))n.mode="s-expr-comment",i=t;else{var c=null,h=!1,q=!0;e.eat(/[ei]/i)?h=!0:e.backUp(1),e.match(/^#b/i)?c=B:e.match(/^#o/i)?c=D:e.match(/^#x/i)?c=U:e.match(/^#d/i)?c=m:e.match(/^[-+0-9.]/,!1)?(q=!1,c=m):h||e.eat("#"),c!=null&&(q&&!h&&e.match(/^#[ei]/i),c(e)&&(i=v))}else if(/^[-+0-9.]/.test(r)&&m(e,!0))i=v;else if(r==";")e.skipToEnd(),i=t;else if(r=="("||r=="["){for(var g="",x=e.column(),C;(C=e.eat(/[^\s\(\[\;\)\]]/))!=null;)g+=C;g.length>0&&O.propertyIsEnumerable(g)?p(n,x+N,r):(e.eatSpace(),e.eol()||e.peek()==";"?p(n,x+1,r):p(n,x+e.current().length,r)),e.backUp(e.current().length-1),typeof n.sExprComment=="number"&&n.sExprComment++,typeof n.sExprQuote=="number"&&n.sExprQuote++,i=y}else r==")"||r=="]"?(i=y,n.indentStack!=null&&n.indentStack.type==(r==")"?"(":"[")&&(_(n),typeof n.sExprComment=="number"&&--n.sExprComment==0&&(i=t,n.sExprComment=!1),typeof n.sExprQuote=="number"&&--n.sExprQuote==0&&(i=s,n.sExprQuote=!1))):(e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/),w&&w.propertyIsEnumerable(e.current())?i=o:i="variable")}return typeof n.sExprComment=="number"?t:typeof n.sExprQuote=="number"?s:i},indent:function(e){return e.indentStack==null?e.indentation:e.indentStack.indent},fold:"brace-paren",closeBrackets:{pairs:'()[]{}""'},lineComment:";;"}}),a.defineMIME("text/x-scheme","scheme")})})();var M=z.exports;const L=A(M),F=P({__proto__:null,default:L},[M]);export{F as s};
