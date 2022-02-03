import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-integer@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";var j=u.isPrimitive,f=g.isPrimitive;var c=function(e,t){return f(e)?j(t)?null:new TypeError("invalid argument. Second argument must be a positive number. Value: `"+t+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+e+"`.")},b=h;var v=function(e,t,n){var s,r;for(s=1,r=0;r<t;r++)s*=e();return-1/n*b(s)},y=e,x=t,w=n,L=s,N=r,E=i,O=o,T=m,P=d.factory,V=a,G=l,R=p,S=c,A=v;var J=function(){var e,t,n,s,r,i;if(0===arguments.length)t=P();else if(1===arguments.length){if(!L(n=arguments[0]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(E(n,"prng")){if(!N(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=n.prng}else t=P(n)}else{if(r=S(i=arguments[0],e=arguments[1]))throw r;if(arguments.length>2){if(!L(n=arguments[2]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(E(n,"prng")){if(!N(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=n.prng}else t=P(n)}else t=P()}return y(s=void 0===i?h:g,"NAME","erlang"),n&&n.prng?(y(s,"seed",null),y(s,"seedLength",null),w(s,"state",O(null),T),y(s,"stateLength",null),y(s,"byteLength",null),y(s,"toJSON",O(null)),y(s,"PRNG",t)):(x(s,"seed",o),x(s,"seedLength",m),w(s,"state",l,p),x(s,"stateLength",d),x(s,"byteLength",a),y(s,"toJSON",u),y(s,"PRNG",t),t=t.normalized),s;function o(){return t.seed}function m(){return t.seedLength}function d(){return t.stateLength}function a(){return t.byteLength}function l(){return t.state}function p(e){t.state=e}function u(){var n={type:"PRNG"};return n.name=s.NAME,n.state=R(t.state),n.params=void 0===i?[]:[i,e],n}function g(){return A(t,i,e)}function h(e,n){return V(e)||V(n)||!G(e)||n<=0?NaN:A(t,e,n)}},M=J();e(M,"factory",J);var z=M;export{z as default};
