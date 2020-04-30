var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function f(){return t=" ",document.createTextNode(t);var t}function i(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let d;function p(t){d=t}const $=[],h=[],g=[],m=[],v=Promise.resolve();let b=!1;function y(t){g.push(t)}let x=!1;const _=new Set;function w(){if(!x){x=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];p(e),k(e.$$)}for($.length=0;h.length;)h.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];_.has(e)||(_.add(e),e())}g.length=0}while($.length);for(;m.length;)m.pop()();b=!1,x=!1,_.clear()}}function k(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const E=new Set;function A(t,e){t&&t.i&&(E.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(E.has(t))return;E.add(t),(void 0).c.push(()=>{E.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function S(t){t&&t.c()}function T(t,n,s){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(n,s),y(()=>{const n=c.map(e).filter(o);l?l.push(...n):r(n),t.$$.on_mount=[]}),u.forEach(y)}function C(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&($.push(t),b||(b=!0,v.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(e,o,s,a,c,u,f=[-1]){const i=d;p(e);const $=o.props||{},h=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:n(),dirty:f};let g=!1;if(h.ctx=s?s(e,$,(t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),g&&H(e,t)),n}):[],h.update(),g=!0,r(h.before_update),h.fragment=!!a&&a(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(l)}else h.fragment&&h.fragment.c();o.intro&&A(e.$$.fragment),T(e,o.target,o.anchor),w()}p(i)}class j{$destroy(){C(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function B(e){let n;return{c(){n=u("div"),n.innerHTML='<img src="assets/images/mock_product.svg" alt="Mock Product" class="svelte-1ac65bi"> \n  <div class="divider svelte-1ac65bi"></div> \n  <h2 class="svelte-1ac65bi">SaaS Templatekkkk</h2> \n  <p class="svelte-1ac65bi">Everything you need</p>',i(n,"class","entry svelte-1ac65bi")},m(t,e){c(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}class L extends j{constructor(t){super(),N(this,t,null,B,s,{})}}function O(e){let n,r,o,s,d,p,$,h,g,m,v,b,y,x;const _=new L({}),w=new L({}),k=new L({}),E=new L({});return{c(){n=u("main"),r=u("div"),o=u("div"),o.innerHTML='<span class="svelte-1ht2fbu"><a href="#blog" class="svelte-1ht2fbu">Blog</a></span> \n      <span class="svelte-1ht2fbu">•</span> \n      <span class="svelte-1ht2fbu"><a href="#about" class="svelte-1ht2fbu">About</a></span>',s=f(),d=u("h1"),d.textContent=""+P,p=f(),$=u("div"),h=f(),g=u("div"),m=u("div"),S(_.$$.fragment),v=f(),S(w.$$.fragment),b=f(),S(k.$$.fragment),y=f(),S(E.$$.fragment),i(o,"id","nav"),i(d,"class","svelte-1ht2fbu"),i(r,"class","page-hero svelte-1ht2fbu"),i($,"class","divider svelte-1ht2fbu"),i(m,"class","entries svelte-1ht2fbu"),i(g,"class","page-content"),i(n,"class","svelte-1ht2fbu")},m(t,e){c(t,n,e),a(n,r),a(r,o),a(r,s),a(r,d),a(n,p),a(n,$),a(n,h),a(n,g),a(g,m),T(_,m,null),a(m,v),T(w,m,null),a(m,b),T(k,m,null),a(m,y),T(E,m,null),x=!0},p:t,i(t){x||(A(_.$$.fragment,t),A(w.$$.fragment,t),A(k.$$.fragment,t),A(E.$$.fragment,t),x=!0)},o(t){M(_.$$.fragment,t),M(w.$$.fragment,t),M(k.$$.fragment,t),M(E.$$.fragment,t),x=!1},d(t){t&&l(n),C(_),C(w),C(k),C(E)}}}let P="Victor He";return new class extends j{constructor(t){super(),N(this,t,null,O,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
