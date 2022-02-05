!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).erlang=r()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l,y=function(t,r,n){var e,l,y,s;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,r)||c.call(t,r)?(e=t.__proto__,t.__proto__=o,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),y="get"in n,s="set"in n,l&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,r,n.get),s&&u&&u.call(t,r,n.set),t},s=e,p=y,v=(l=n()?s:p,l);var g=function(t,r,n){v(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})},b=g,d=l;var m=function(t,r,n){d(t,r,{configurable:!1,enumerable:!1,get:n})},h=m,w=l;var A=function(t,r,n,e){w(t,r,{configurable:!1,enumerable:!1,get:n,set:e})},E=A;var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var O=function(){return j&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,T=_;var N=function(t){return T.call(t)},I=Object.prototype.hasOwnProperty;var U=function(t,r){return null!=t&&I.call(t,r)},P="function"==typeof Symbol?Symbol.toStringTag:"",S=U,L=P,F=_;var M=N,R=function(t){var r,n,e;if(null==t)return F.call(t);n=t[L],r=S(t,L);try{t[L]=void 0}catch(r){return F.call(t)}return e=F.call(t),r?t[L]=n:delete t[L],e},x=O()?R:M,B=x;var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===B(t)},C=V;var G=function(t){return"object"==typeof t&&null!==t&&!C(t)},Y=/./;var q=function(t){return"boolean"==typeof t},k=Boolean.prototype.toString;var X=x,J=function(t){try{return k.call(t),!0}catch(t){return!1}},z=O();var D=function(t){return"object"==typeof t&&(t instanceof Boolean||(z?J(t):"[object Boolean]"===X(t)))},H=q,K=D;var Q=b,W=function(t){return H(t)||K(t)},Z=D;Q(W,"isPrimitive",q),Q(W,"isObject",Z);var $=W;var tt="object"==typeof self?self:null,rt="object"==typeof window?window:null,nt=$.isPrimitive,et=function(){return new Function("return this;")()},ot=tt,it=rt,at="object"==typeof t?t:null;var ut=function(t){if(arguments.length){if(!nt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return et()}if(ot)return ot;if(it)return it;if(at)return at;throw new Error("unexpected error. Unable to resolve global object.")},ft=ut(),ct=ft.document&&ft.document.childNodes,lt=Int8Array,yt=Y,st=ct,pt=lt;var vt=function(){return"function"==typeof yt||"object"==typeof pt||"function"==typeof st};var gt=function(){return/^\s*function\s*([^(]*)/i},bt=gt;b(bt,"REGEXP",gt());var dt=bt,mt=V;var ht=function(t){return null!==t&&"object"==typeof t};b(ht,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!mt(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(ht));var wt=ht;var At=x,Et=dt.REGEXP,jt=function(t){return wt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var Ot=function(t){var r,n,e;if(("Object"===(n=At(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=Et.exec(e.toString()))return r[1]}return jt(t)?"Buffer":n},_t=Ot,Tt=_t;var Nt=function(t){var r;return null===t?"null":"object"===(r=typeof t)?Tt(t).toLowerCase():r},It=_t;var Ut=Nt,Pt=function(t){return It(t).toLowerCase()},St=vt()?Pt:Ut;var Lt=function(t){return"function"===St(t)},Ft=Object.getPrototypeOf;var Mt=function(t){return t.__proto__},Rt=x,xt=Mt;var Bt=function(t){var r=xt(t);return r||null===r?r:"[object Function]"===Rt(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Vt=Ft,Ct=Bt,Gt=Lt(Object.getPrototypeOf)?Vt:Ct;var Yt=function(t){return null==t?null:(t=Object(t),Gt(t))},qt=G,kt=Lt,Xt=Yt,Jt=U,zt=x,Dt=Object.prototype;var Ht=function(t){var r;return!!qt(t)&&(!(r=Xt(t))||!Jt(t,"constructor")&&Jt(r,"constructor")&&kt(r.constructor)&&"[object Function]"===zt(r.constructor)&&Jt(r,"isPrototypeOf")&&kt(r.isPrototypeOf)&&(r===Dt||function(t){var r;for(r in t)if(!Jt(t,r))return!1;return!0}(t)))},Kt=Ht;var Qt=function(t){return function(){return t}};var Wt=function(){},Zt=Math.floor,$t=Zt;var tr=function(t){return $t(t)===t},rr=tr;var nr=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&rr(t.length)&&t.length>=0&&t.length<=9007199254740991},er=x,or="function"==typeof Uint32Array;var ir=function(t){return or&&t instanceof Uint32Array||"[object Uint32Array]"===er(t)};var ar=function(t){return"number"==typeof t},ur=Number,fr=ur.prototype.toString;var cr=x,lr=ur,yr=function(t){try{return fr.call(t),!0}catch(t){return!1}},sr=O();var pr=function(t){return"object"==typeof t&&(t instanceof lr||(sr?yr(t):"[object Number]"===cr(t)))},vr=ar,gr=pr;var br=b,dr=function(t){return vr(t)||gr(t)},mr=pr;br(dr,"isPrimitive",ar),br(dr,"isObject",mr);var hr=dr,wr=Number.POSITIVE_INFINITY,Ar=ur.NEGATIVE_INFINITY,Er=wr,jr=Ar,Or=tr;var _r=function(t){return t<Er&&t>jr&&Or(t)},Tr=hr.isPrimitive,Nr=_r;var Ir=function(t){return Tr(t)&&Nr(t)},Ur=hr.isObject,Pr=_r;var Sr=function(t){return Ur(t)&&Pr(t.valueOf())},Lr=Ir,Fr=Sr;var Mr=b,Rr=function(t){return Lr(t)||Fr(t)},xr=Sr;Mr(Rr,"isPrimitive",Ir),Mr(Rr,"isObject",xr);var Br=Rr.isPrimitive;var Vr=function(t){return Br(t)&&t>0},Cr=Rr.isObject;var Gr=function(t){return Cr(t)&&t.valueOf()>0},Yr=Vr,qr=Gr;var kr=b,Xr=function(t){return Yr(t)||qr(t)},Jr=Gr;kr(Xr,"isPrimitive",Vr),kr(Xr,"isObject",Jr);var zr=Xr,Dr=4294967295,Hr="function"==typeof Uint32Array?Uint32Array:null,Kr=ir,Qr=Hr;var Wr=function(){var t,r;if("function"!=typeof Qr)return!1;try{r=new Qr(r=[1,3.14,-3.14,4294967296,4294967297]),t=Kr(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var Zr="function"==typeof Uint32Array?Uint32Array:void 0,$r=function(){throw new Error("not implemented")},tn=Wr()?Zr:$r,rn=wr;var nn=function(t){return t!=t},en=function(t){return 0===t&&1/t===rn},on=nn,an=Ar,un=wr;var fn=function(t,r){var n,e,o,i;if(2===(n=arguments.length))return on(t)||on(r)?NaN:t===un||r===un?un:t===r&&0===t?en(t)?t:r:t>r?t:r;for(e=an,i=0;i<n;i++){if(on(o=arguments[i])||o===un)return o;(o>e||o===e&&0===o&&en(o))&&(e=o)}return e},cn=fn;var ln=function(t,r){var n,e;return((n=(65535&(t>>>=0))>>>0)*(e=(65535&(r>>>=0))>>>0)>>>0)+((t>>>16>>>0)*e+n*(r>>>16>>>0)<<16>>>0)>>>0};var yn=function(t,r,n,e,o){var i,a,u,f;if(t<=0)return e;if(1===n&&1===o){if((u=t%8)>0)for(f=0;f<u;f++)e[f]=r[f];if(t<8)return e;for(f=u;f<t;f+=8)e[f]=r[f],e[f+1]=r[f+1],e[f+2]=r[f+2],e[f+3]=r[f+3],e[f+4]=r[f+4],e[f+5]=r[f+5],e[f+6]=r[f+6],e[f+7]=r[f+7];return e}for(i=n<0?(1-t)*n:0,a=o<0?(1-t)*o:0,f=0;f<t;f++)e[a]=r[i],i+=n,a+=o;return e};var sn=function(t,r,n,e,o,i,a){var u,f,c,l;if(t<=0)return o;if(u=e,f=a,1===n&&1===i){if((c=t%8)>0)for(l=0;l<c;l++)o[f]=r[u],u+=n,f+=i;if(t<8)return o;for(l=c;l<t;l+=8)o[f]=r[u],o[f+1]=r[u+1],o[f+2]=r[u+2],o[f+3]=r[u+3],o[f+4]=r[u+4],o[f+5]=r[u+5],o[f+6]=r[u+6],o[f+7]=r[u+7],u+=8,f+=8;return o}for(l=0;l<t;l++)o[f]=r[u],u+=n,f+=i;return o},pn=yn;b(pn,"ndarray",sn);var vn=pn;var gn=function(){};var bn=Lt,dn=dt.REGEXP,mn=function(){return"foo"===gn.name}();var hn=function(t){if(!1===bn(t))throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return mn?t.name:dn.exec(t.toString())[1]},wn=x,An="function"==typeof Float64Array;var En="function"==typeof Float64Array?Float64Array:null,jn=function(t){return An&&t instanceof Float64Array||"[object Float64Array]"===wn(t)},On=En;var _n=function(){var t,r;if("function"!=typeof On)return!1;try{r=new On([1,3.14,-3.14,NaN]),t=jn(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t},Tn=_n;var Nn="function"==typeof Float64Array?Float64Array:void 0,In=function(){throw new Error("not implemented")},Un=Tn()?Nn:In,Pn=x,Sn="function"==typeof Int8Array;var Ln="function"==typeof Int8Array?Int8Array:null,Fn=function(t){return Sn&&t instanceof Int8Array||"[object Int8Array]"===Pn(t)},Mn=Ln;var Rn=function(){var t,r;if("function"!=typeof Mn)return!1;try{r=new Mn([1,3.14,-3.14,128]),t=Fn(r)&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){t=!1}return t};var xn="function"==typeof Int8Array?Int8Array:void 0,Bn=function(){throw new Error("not implemented")},Vn=Rn()?xn:Bn,Cn=x,Gn="function"==typeof Uint8Array;var Yn="function"==typeof Uint8Array?Uint8Array:null,qn=function(t){return Gn&&t instanceof Uint8Array||"[object Uint8Array]"===Cn(t)},kn=Yn;var Xn=function(){var t,r;if("function"!=typeof kn)return!1;try{r=new kn(r=[1,3.14,-3.14,256,257]),t=qn(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var Jn="function"==typeof Uint8Array?Uint8Array:void 0,zn=function(){throw new Error("not implemented")},Dn=Xn()?Jn:zn,Hn=x,Kn="function"==typeof Uint8ClampedArray;var Qn="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Wn=function(t){return Kn&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===Hn(t)},Zn=Qn;var $n=function(){var t,r;if("function"!=typeof Zn)return!1;try{r=new Zn([-1,0,1,3.14,4.99,255,256]),t=Wn(r)&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){t=!1}return t};var te="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,re=function(){throw new Error("not implemented")},ne=$n()?te:re,ee=x,oe="function"==typeof Int16Array;var ie="function"==typeof Int16Array?Int16Array:null,ae=function(t){return oe&&t instanceof Int16Array||"[object Int16Array]"===ee(t)},ue=ie;var fe=function(){var t,r;if("function"!=typeof ue)return!1;try{r=new ue([1,3.14,-3.14,32768]),t=ae(r)&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){t=!1}return t};var ce="function"==typeof Int16Array?Int16Array:void 0,le=function(){throw new Error("not implemented")},ye=fe()?ce:le,se=x,pe="function"==typeof Uint16Array;var ve="function"==typeof Uint16Array?Uint16Array:null,ge=function(t){return pe&&t instanceof Uint16Array||"[object Uint16Array]"===se(t)},be=ve;var de=function(){var t,r;if("function"!=typeof be)return!1;try{r=new be(r=[1,3.14,-3.14,65536,65537]),t=ge(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var me="function"==typeof Uint16Array?Uint16Array:void 0,he=function(){throw new Error("not implemented")},we=de()?me:he,Ae=x,Ee="function"==typeof Int32Array;var je="function"==typeof Int32Array?Int32Array:null,Oe=function(t){return Ee&&t instanceof Int32Array||"[object Int32Array]"===Ae(t)},_e=je;var Te=function(){var t,r;if("function"!=typeof _e)return!1;try{r=new _e([1,3.14,-3.14,2147483648]),t=Oe(r)&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){t=!1}return t};var Ne="function"==typeof Int32Array?Int32Array:void 0,Ie=function(){throw new Error("not implemented")},Ue=Te()?Ne:Ie,Pe=x,Se="function"==typeof Float32Array;var Le="function"==typeof Float32Array?Float32Array:null,Fe=function(t){return Se&&t instanceof Float32Array||"[object Float32Array]"===Pe(t)},Me=wr,Re=Le;var xe=function(){var t,r;if("function"!=typeof Re)return!1;try{r=new Re([1,3.14,-3.14,5e40]),t=Fe(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Me}catch(r){t=!1}return t};var Be="function"==typeof Float32Array?Float32Array:void 0,Ve=function(){throw new Error("not implemented")},Ce=xe()?Be:Ve,Ge=_t,Ye=hn,qe=Yt,ke=Un,Xe=[Un,Ce,Ue,tn,ye,we,Vn,Dn,ne],Je=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],ze=Tn()?qe(ke):De;function De(){}ze="TypedArray"===Ye(ze)?ze:De;var He=function(t,r){if("function"!=typeof r)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+r+"`.");return t instanceof r},Ke=_t,Qe=Yt,We=[[Un,"Float64Array"],[Ce,"Float32Array"],[Ue,"Int32Array"],[tn,"Uint32Array"],[ye,"Int16Array"],[we,"Uint16Array"],[Vn,"Int8Array"],[Dn,"Uint8Array"],[ne,"Uint8ClampedArray"]];var Ze=function(t){var r,n;if("object"!=typeof t||null===t)return!1;if(t instanceof ze)return!0;for(n=0;n<Xe.length;n++)if(t instanceof Xe[n])return!0;for(;t;){for(r=Ge(t),n=0;n<Je.length;n++)if(Je[n]===r)return!0;t=qe(t)}return!1},$e=function(t){var r,n;for(n=0;n<We.length;n++)if(He(t,We[n][0]))return We[n][1];for(;t;){for(r=Ke(t),n=0;n<We.length;n++)if(r===We[n][1])return We[n][1];t=Qe(t)}};var to=function(t){var r,n;if(!Ze(t))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+t+"`.");for((r={}).type=$e(t),r.data=[],n=0;n<t.length;n++)r.data.push(t[n]);return r},ro=Zt;var no=function(){return ro(1+4294967294*Math.random())>>>0},eo=b,oo=h,io=E,ao=U,uo=Kt,fo=nr,co=ir,lo=$.isPrimitive,yo=zr.isPrimitive,so=Dr,po=tn,vo=cn,go=ln,bo=vn,mo=to,ho=no,wo=624,Ao=4294967295,Eo=19650218,jo=2147483648,Oo=2147483647,_o=2636928640,To=4022730752,No=[0,2567483615],Io=1/9007199254740992,Uo=67108864,Po=.9999999999999999,So=630;function Lo(t,r){var n;return n=r?"option":"argument",t.length<631?new RangeError("invalid "+n+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):3!==t[1]?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: 3. Actual: "+t[1]+"."):t[2]!==wo?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+wo+". Actual: "+t[2]+"."):1!==t[627]?new RangeError("invalid "+n+". `state` array has an incompatible section length. Expected: "+1..toString()+". Actual: "+t[627]+"."):t[629]!==t.length-So?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(t.length-So)+". Actual: "+t[629]+"."):null}function Fo(t,r,n){var e;for(t[0]=n>>>0,e=1;e<r;e++)n=((n=t[e-1]>>>0)^n>>>30)>>>0,t[e]=go(n,1812433253)+e>>>0;return t}function Mo(t,r,n,e){var o,i,a,u;for(i=1,a=0,u=vo(r,e);u>0;u--)o=t[i-1]>>>0,o=go(o=(o^o>>>30)>>>0,1664525)>>>0,t[i]=(t[i]>>>0^o)+n[a]+a>>>0,a+=1,(i+=1)>=r&&(t[0]=t[r-1],i=1),a>=e&&(a=0);for(u=r-1;u>0;u--)o=t[i-1]>>>0,o=go(o=(o^o>>>30)>>>0,1566083941)>>>0,t[i]=(t[i]>>>0^o)-i>>>0,(i+=1)>=r&&(t[0]=t[r-1],i=1);return t[0]=2147483648,t}function Ro(t){var r,n;for(227,n=0;n<227;n++)r=t[n]&jo|t[n+1]&Oo,t[n]=t[n+397]^r>>>1^No[1&r];for(623;n<623;n++)r=t[n]&jo|t[n+1]&Oo,t[n]=t[n-227]^r>>>1^No[1&r];return r=t[623]&jo|t[0]&Oo,t[623]=t[396]^r>>>1^No[1&r],t}var xo=function(t){var r,n,e,o,i,a;if(e={},arguments.length){if(!uo(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(ao(t,"copy")&&(e.copy=t.copy,!lo(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(ao(t,"state")){if(n=t.state,e.state=!0,!co(n))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n+"`.");if(a=Lo(n,!0))throw a;!1===e.copy?r=n:(r=new po(n.length),bo(n.length,n,1,r,1)),n=new po(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,wo),o=new po(r.buffer,r.byteOffset+630*r.BYTES_PER_ELEMENT,n[629])}if(void 0===o)if(ao(t,"seed"))if(o=t.seed,e.seed=!0,yo(o)){if(o>Ao)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");o>>>=0}else{if(!1===fo(o)||o.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");if(1===o.length){if(o=o[0],!yo(o))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");if(o>Ao)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");o>>>=0}else i=o.length,(r=new po(So+i))[0]=1,r[1]=3,r[2]=wo,r[627]=1,r[628]=wo,r[629]=i,bo.ndarray(i,o,1,0,r,1,630),n=new po(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,wo),o=new po(r.buffer,r.byteOffset+630*r.BYTES_PER_ELEMENT,i),n=Mo(n=Fo(n,wo,Eo),wo,o,i)}else o=ho()>>>0}else o=ho()>>>0;return void 0===n&&((r=new po(631))[0]=1,r[1]=3,r[2]=wo,r[627]=1,r[628]=wo,r[629]=1,r[630]=o,n=new po(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,wo),o=new po(r.buffer,r.byteOffset+630*r.BYTES_PER_ELEMENT,1),n=Fo(n,wo,o)),eo(v,"NAME","mt19937"),oo(v,"seed",u),oo(v,"seedLength",f),io(v,"state",y,s),oo(v,"stateLength",c),oo(v,"byteLength",l),eo(v,"toJSON",p),eo(v,"MIN",1),eo(v,"MAX",so),eo(v,"normalized",g),eo(g,"NAME",v.NAME),oo(g,"seed",u),oo(g,"seedLength",f),io(g,"state",y,s),oo(g,"stateLength",c),oo(g,"byteLength",l),eo(g,"toJSON",p),eo(g,"MIN",0),eo(g,"MAX",Po),v;function u(){var t=r[629];return bo(t,o,1,new po(t),1)}function f(){return r[629]}function c(){return r.length}function l(){return r.byteLength}function y(){var t=r.length;return bo(t,r,1,new po(t),1)}function s(t){var i;if(!co(t))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+t+"`.");if(i=Lo(t,!1))throw i;!1===e.copy?e.state&&t.length===r.length?bo(t.length,t,1,r,1):(r=t,e.state=!0):(t.length!==r.length&&(r=new po(t.length)),bo(t.length,t,1,r,1)),n=new po(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,wo),o=new po(r.buffer,r.byteOffset+630*r.BYTES_PER_ELEMENT,r[629])}function p(){var t={type:"PRNG"};return t.name=v.NAME,t.state=mo(r),t.params=[],t}function v(){var t,e;return(e=r[628])>=wo&&(n=Ro(n),e=0),t=n[e],r[628]=e+1,t^=t>>>11,t^=t<<7&_o,t^=t<<15&To,(t^=t>>>18)>>>0}function g(){var t=v()>>>5,r=v()>>>6;return(t*Uo+r)*Io}},Bo=xo({seed:no()});b(Bo,"factory",xo);var Vo=Bo,Co=Zt;var Go=function(t){return Co(t)===t&&t>0},Yo=hr.isPrimitive;var qo=function(t){return Yo(t)&&t>0},ko=hr.isObject;var Xo=function(t){return ko(t)&&t.valueOf()>0},Jo=qo,zo=Xo;var Do=b,Ho=function(t){return Jo(t)||zo(t)},Ko=Xo;Do(Ho,"isPrimitive",qo),Do(Ho,"isObject",Ko);var Qo=Ho.isPrimitive,Wo=zr.isPrimitive;var Zo,$o=function(t,r){return Wo(t)?Qo(r)?null:new TypeError("invalid argument. Second argument must be a positive number. Value: `"+r+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+t+"`.")},ti={uint16:we,uint8:Dn};(Zo=new ti.uint16(1))[0]=4660;var ri=52===new ti.uint8(Zo.buffer)[0],ni=tn,ei=!0===ri?1:0,oi=new Un(1),ii=new ni(oi.buffer);var ai=function(t){return oi[0]=t,ii[ei]},ui=tn,fi=!0===ri?1:0,ci=new Un(1),li=new ui(ci.buffer);var yi=function(t,r){return ci[0]=t,li[fi]=r>>>0,ci[0]};var si=ai,pi=yi,vi=nn,gi=Ar,bi=function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)},di=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))},mi=.6931471803691238,hi=1.9082149292705877e-10,wi=1048575;var Ai=function(t){var r,n,e,o,i,a,u,f,c,l,y;return 0===t?gi:vi(t)||t<0?NaN:(o=0,(n=si(t))<1048576&&(o-=54,n=si(t*=0x40000000000000)),n>=2146435072?t+t:(o+=(n>>20)-1023|0,o+=(u=(n&=wi)+614244&1048576|0)>>20|0,a=(t=pi(t,n|1072693248^u))-1,(wi&2+n)<3?0===a?0===o?0:o*mi+o*hi:(i=a*a*(.5-.3333333333333333*a),0===o?a-i:o*mi-(i-o*hi-a)):(u=n-398458|0,f=440401-n|0,e=(l=(y=(c=a/(2+a))*c)*y)*bi(l),i=y*di(l)+e,(u|=f)>0?(r=.5*a*a,0===o?a-(r-c*(r+i)):o*mi-(r-(c*(r+i)+o*hi)-a)):0===o?a-c*(a-i):o*mi-(c*(a-i)-o*hi-a))))},Ei=Ai;var ji=function(t,r,n){var e,o;for(e=1,o=0;o<r;o++)e*=t();return-1/n*Ei(e)},Oi=b,_i=h,Ti=E,Ni=Kt,Ii=Lt,Ui=U,Pi=Qt,Si=Wt,Li=Vo.factory,Fi=nn,Mi=Go,Ri=to,xi=$o,Bi=ji;var Vi=function(){var t,r,n,e,o,i;if(0===arguments.length)r=Li();else if(1===arguments.length){if(!Ni(n=arguments[0]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(Ui(n,"prng")){if(!Ii(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");r=n.prng}else r=Li(n)}else{if(o=xi(i=arguments[0],t=arguments[1]))throw o;if(arguments.length>2){if(!Ni(n=arguments[2]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(Ui(n,"prng")){if(!Ii(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");r=n.prng}else r=Li(n)}else r=Li()}return Oi(e=void 0===i?v:p,"NAME","erlang"),n&&n.prng?(Oi(e,"seed",null),Oi(e,"seedLength",null),Ti(e,"state",Pi(null),Si),Oi(e,"stateLength",null),Oi(e,"byteLength",null),Oi(e,"toJSON",Pi(null)),Oi(e,"PRNG",r)):(_i(e,"seed",a),_i(e,"seedLength",u),Ti(e,"state",l,y),_i(e,"stateLength",f),_i(e,"byteLength",c),Oi(e,"toJSON",s),Oi(e,"PRNG",r),r=r.normalized),e;function a(){return r.seed}function u(){return r.seedLength}function f(){return r.stateLength}function c(){return r.byteLength}function l(){return r.state}function y(t){r.state=t}function s(){var n={type:"PRNG"};return n.name=e.NAME,n.state=Ri(r.state),n.params=void 0===i?[]:[i,t],n}function p(){return Bi(r,i,t)}function v(t,n){return Fi(t)||Fi(n)||!Mi(t)||n<=0?NaN:Bi(r,t,n)}},Ci=Vi();return b(Ci,"factory",Vi),Ci}));
//# sourceMappingURL=bundle.js.map
