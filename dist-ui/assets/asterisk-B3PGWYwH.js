import{g as m,c as f}from"./index-BfZB7xyU.js";function x(s,l){for(var t=0;t<l.length;t++){const r=l[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in s)){const c=Object.getOwnPropertyDescriptor(r,o);c&&Object.defineProperty(s,o,c.get?c:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var g={exports:{}};(function(s,l){(function(t){t(f)})(function(t){t.defineMode("asterisk",function(){var r=["exten","same","include","ignorepat","switch"],o=["#include","#exec"],c=["addqueuemember","adsiprog","aelsub","agentlogin","agentmonitoroutgoing","agi","alarmreceiver","amd","answer","authenticate","background","backgrounddetect","bridge","busy","callcompletioncancel","callcompletionrequest","celgenuserevent","changemonitor","chanisavail","channelredirect","chanspy","clearhash","confbridge","congestion","continuewhile","controlplayback","dahdiacceptr2call","dahdibarge","dahdiras","dahdiscan","dahdisendcallreroutingfacility","dahdisendkeypadfacility","datetime","dbdel","dbdeltree","deadagi","dial","dictate","directory","disa","dumpchan","eagi","echo","endwhile","exec","execif","execiftime","exitwhile","extenspy","externalivr","festival","flash","followme","forkcdr","getcpeid","gosub","gosubif","goto","gotoif","gotoiftime","hangup","iax2provision","ices","importvar","incomplete","ivrdemo","jabberjoin","jabberleave","jabbersend","jabbersendgroup","jabberstatus","jack","log","macro","macroexclusive","macroexit","macroif","mailboxexists","meetme","meetmeadmin","meetmechanneladmin","meetmecount","milliwatt","minivmaccmess","minivmdelete","minivmgreet","minivmmwi","minivmnotify","minivmrecord","mixmonitor","monitor","morsecode","mp3player","mset","musiconhold","nbscat","nocdr","noop","odbc","odbc","odbcfinish","originate","ospauth","ospfinish","osplookup","ospnext","page","park","parkandannounce","parkedcall","pausemonitor","pausequeuemember","pickup","pickupchan","playback","playtones","privacymanager","proceeding","progress","queue","queuelog","raiseexception","read","readexten","readfile","receivefax","receivefax","receivefax","record","removequeuemember","resetcdr","retrydial","return","ringing","sayalpha","saycountedadj","saycountednoun","saycountpl","saydigits","saynumber","sayphonetic","sayunixtime","senddtmf","sendfax","sendfax","sendfax","sendimage","sendtext","sendurl","set","setamaflags","setcallerpres","setmusiconhold","sipaddheader","sipdtmfmode","sipremoveheader","skel","slastation","slatrunk","sms","softhangup","speechactivategrammar","speechbackground","speechcreate","speechdeactivategrammar","speechdestroy","speechloadgrammar","speechprocessingsound","speechstart","speechunloadgrammar","stackpop","startmusiconhold","stopmixmonitor","stopmonitor","stopmusiconhold","stopplaytones","system","testclient","testserver","transfer","tryexec","trysystem","unpausemonitor","unpausequeuemember","userevent","verbose","vmauthenticate","vmsayname","voicemail","voicemailmain","wait","waitexten","waitfornoise","waitforring","waitforsilence","waitmusiconhold","waituntil","while","zapateller"];function d(e,n){var i="",a=e.next();if(n.blockComment)return a=="-"&&e.match("-;",!0)?n.blockComment=!1:e.skipTo("--;")?(e.next(),e.next(),e.next(),n.blockComment=!1):e.skipToEnd(),"comment";if(a==";")return e.match("--",!0)&&!e.match("-",!1)?(n.blockComment=!0,"comment"):(e.skipToEnd(),"comment");if(a=="[")return e.skipTo("]"),e.eat("]"),"header";if(a=='"')return e.skipTo('"'),"string";if(a=="'")return e.skipTo("'"),"string-2";if(a=="#"&&(e.eatWhile(/\w/),i=e.current(),o.indexOf(i)!==-1))return e.skipToEnd(),"strong";if(a=="$"){var p=e.peek();if(p=="{")return e.skipTo("}"),e.eat("}"),"variable-3"}if(e.eatWhile(/\w/),i=e.current(),r.indexOf(i)!==-1){switch(n.extenStart=!0,i){case"same":n.extenSame=!0;break;case"include":case"switch":case"ignorepat":n.extenInclude=!0;break}return"atom"}}return{startState:function(){return{blockComment:!1,extenStart:!1,extenSame:!1,extenInclude:!1,extenExten:!1,extenPriority:!1,extenApplication:!1}},token:function(e,n){var i="";if(e.eatSpace())return null;if(n.extenStart)return e.eatWhile(/[^\s]/),i=e.current(),/^=>?$/.test(i)?(n.extenExten=!0,n.extenStart=!1,"strong"):(n.extenStart=!1,e.skipToEnd(),"error");if(n.extenExten)return n.extenExten=!1,n.extenPriority=!0,e.eatWhile(/[^,]/),n.extenInclude&&(e.skipToEnd(),n.extenPriority=!1,n.extenInclude=!1),n.extenSame&&(n.extenPriority=!1,n.extenSame=!1,n.extenApplication=!0),"tag";if(n.extenPriority)return n.extenPriority=!1,n.extenApplication=!0,e.next(),n.extenSame?null:(e.eatWhile(/[^,]/),"number");if(n.extenApplication){if(e.eatWhile(/,/),i=e.current(),i===",")return null;if(e.eatWhile(/\w/),i=e.current().toLowerCase(),n.extenApplication=!1,c.indexOf(i)!==-1)return"def strong"}else return d(e,n);return null},blockCommentStart:";--",blockCommentEnd:"--;",lineComment:";"}}),t.defineMIME("text/x-asterisk","asterisk")})})();var u=g.exports;const h=m(u),k=x({__proto__:null,default:h},[u]);export{k as a};
