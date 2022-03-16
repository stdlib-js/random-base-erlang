// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-integer@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";var f=g.isPrimitive,c=h.isPrimitive;var b=function(e,t){return c(e)?f(t)?null:new TypeError("invalid argument. Second argument must be a positive number. Value: `"+t+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+e+"`.")},v=j;var x=function(e,t,n){var s,r;for(s=1,r=0;r<t;r++)s*=e();return-1/n*v(s)},y=e,w=t,L=n,N=s,E=r,O=i,T=o,P=m,V=d.factory,G=a,R=l,S=p,A=u,J=b,M=x;var z=function(){var e,t,n,s,r,i;if(0===arguments.length)t=V();else if(1===arguments.length){if(!N(n=arguments[0]))throw new TypeError(A("invalid argument. Options argument must be an object. Value: `%s`.",n));if(O(n,"prng")){if(!E(n.prng))throw new TypeError(A("invalid option. `prng` option must be a pseudorandom number generator function. Option: `%s`.",n.prng));t=n.prng}else t=V(n)}else{if(r=J(i=arguments[0],e=arguments[1]))throw r;if(arguments.length>2){if(!N(n=arguments[2]))throw new TypeError(A("invalid argument. Options argument must be an object. Value: `%s`.",n));if(O(n,"prng")){if(!E(n.prng))throw new TypeError(A("invalid option. `prng` option must be a pseudorandom number generator function. Option: `%s`.",n.prng));t=n.prng}else t=V(n)}else t=V()}return y(s=void 0===i?h:g,"NAME","erlang"),n&&n.prng?(y(s,"seed",null),y(s,"seedLength",null),L(s,"state",T(null),P),y(s,"stateLength",null),y(s,"byteLength",null),y(s,"toJSON",T(null)),y(s,"PRNG",t)):(w(s,"seed",o),w(s,"seedLength",m),L(s,"state",l,p),w(s,"stateLength",d),w(s,"byteLength",a),y(s,"toJSON",u),y(s,"PRNG",t),t=t.normalized),s;function o(){return t.seed}function m(){return t.seedLength}function d(){return t.stateLength}function a(){return t.byteLength}function l(){return t.state}function p(e){t.state=e}function u(){var n={type:"PRNG"};return n.name=s.NAME,n.state=S(t.state),n.params=void 0===i?[]:[i,e],n}function g(){return M(t,i,e)}function h(e,n){return G(e)||G(n)||!R(e)||n<=0?NaN:M(t,e,n)}},F=z(),k=z;e(F,"factory",k);var q=F;export{q as default,k as factory};
//# sourceMappingURL=index.mjs.map
