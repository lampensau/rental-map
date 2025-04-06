import{d as zo,e as zm,n as Bm,a as N,c as Ue,t as B}from"../chunks/DQdJZj1C.js";import{i as Eh}from"../chunks/DL51ovRW.js";import{v as yt,G as ai,m as bl,g as c,$ as Ih,J as jm,K as yu,H as Zn,L as Cn,w as Cr,an as qm,M as wl,n as Na,N as Th,aq as Ah,z as Hm,W as Gm,a8 as bu,as as Ao,D as Bo,at as El,au as wu,av as Wm,af as Km,aw as Qm,q as Il,ax as Tl,ay as Xm,B as Al,A as Rh,Q as Jm,ak as Ph,az as Ch,aA as Ym,ao as Zm,am as eg,E as tg,aB as rg,aC as ng,aD as ig,aE as sg,aF as ag,aG as og,aH as lg,d as Rl,P as Sh,O as kh,aI as cg,p as er,k as g,s as C,l as m,t as Ae,a as tr,j as ce,ac as re,a2 as at,b as Tt,X as R,aJ as Ee,ae as zr}from"../chunks/B_0lda6q.js";import{d as bs,w as Mr,g as Va,o as Ln,a as xh,c as Dh}from"../chunks/DAk3znD9.js";import{i as ug,a as dg,c as hg,d as or,b as fg,n as pg,e as mg,f as gg,l as Pl,s as Re,g as fr,j as vg,r as _g}from"../chunks/DGxoEtE9.js";import{l as ut,p as Gn,s as pt,i as te,b as Ma,_ as Eu,r as yg,a as bg,c as wg}from"../chunks/Bsl4ov_4.js";import{g as Nh,s as Eg}from"../chunks/BnEUddOG.js";function hn(r,e){return e}function Ig(r,e,t,n){for(var i=[],s=e.length,o=0;o<s;o++)Wm(e[o].e,i,!0);var l=s>0&&i.length===0&&t!==null;if(l){var d=t.parentNode;Km(d),d.append(t),n.clear(),Zr(r,e[0].prev,e[s-1].next)}Qm(i,()=>{for(var h=0;h<s;h++){var p=e[h];l||(n.delete(p.k),Zr(r,p.prev,p.next)),Il(p.e,!l)}})}function ar(r,e,t,n,i,s=null){var o=r,l={flags:e,items:new Map,first:null},d=(e&Ch)!==0;if(d){var h=r;o=yt?Zn(Al(h)):h.appendChild(Rh())}yt&&ai();var p=null,w=!1,T=Ih(()=>{var S=t();return Hm(S)?S:S==null?[]:Ah(S)});bl(()=>{var S=c(T),k=S.length;if(w&&k===0)return;w=k===0;let $=!1;if(yt){var O=o.data===jm;O!==(k===0)&&(o=yu(),Zn(o),Cn(!1),$=!0)}if(yt){for(var ee=null,z,V=0;V<k;V++){if(Cr.nodeType===8&&Cr.data===qm){o=Cr,$=!0,Cn(!1);break}var D=S[V],x=n(D,V);z=Vh(Cr,l,ee,null,D,x,V,i,e,t),l.items.set(x,z),ee=z}k>0&&Zn(yu())}yt||Tg(S,l,o,i,e,n,t),s!==null&&(k===0?p?wl(p):p=Na(()=>s(o)):p!==null&&Th(p,()=>{p=null})),$&&Cn(!0),c(T)}),yt&&(o=Cr)}function Tg(r,e,t,n,i,s,o){var j,ie,q,W;var l=(i&Ym)!==0,d=(i&(Tl|El))!==0,h=r.length,p=e.items,w=e.first,T=w,S,k=null,$,O=[],ee=[],z,V,D,x;if(l)for(x=0;x<h;x+=1)z=r[x],V=s(z,x),D=p.get(V),D!==void 0&&((j=D.a)==null||j.measure(),($??($=new Set)).add(D));for(x=0;x<h;x+=1){if(z=r[x],V=s(z,x),D=p.get(V),D===void 0){var L=T?T.e.nodes_start:t;k=Vh(L,e,k,k===null?e.first:k.next,z,V,x,n,i,o),p.set(V,k),O=[],ee=[],T=k.next;continue}if(d&&Ag(D,z,x,i),(D.e.f&Ao)!==0&&(wl(D.e),l&&((ie=D.a)==null||ie.unfix(),($??($=new Set)).delete(D))),D!==T){if(S!==void 0&&S.has(D)){if(O.length<ee.length){var b=ee[0],v;k=b.prev;var I=O[0],A=O[O.length-1];for(v=0;v<O.length;v+=1)Iu(O[v],b,t);for(v=0;v<ee.length;v+=1)S.delete(ee[v]);Zr(e,I.prev,A.next),Zr(e,k,I),Zr(e,A,b),T=b,k=A,x-=1,O=[],ee=[]}else S.delete(D),Iu(D,T,t),Zr(e,D.prev,D.next),Zr(e,D,k===null?e.first:k.next),Zr(e,k,D),k=D;continue}for(O=[],ee=[];T!==null&&T.k!==V;)(T.e.f&Ao)===0&&(S??(S=new Set)).add(T),ee.push(T),T=T.next;if(T===null)continue;D=T}O.push(D),k=D,T=D.next}if(T!==null||S!==void 0){for(var E=S===void 0?[]:Ah(S);T!==null;)(T.e.f&Ao)===0&&E.push(T),T=T.next;var P=E.length;if(P>0){var y=(i&Ch)!==0&&h===0?t:null;if(l){for(x=0;x<P;x+=1)(q=E[x].a)==null||q.measure();for(x=0;x<P;x+=1)(W=E[x].a)==null||W.fix()}Ig(e,E,y,p)}}l&&Jm(()=>{var oe;if($!==void 0)for(D of $)(oe=D.a)==null||oe.apply()}),Bo.first=e.first&&e.first.e,Bo.last=k&&k.e}function Ag(r,e,t,n){(n&Tl)!==0&&wu(r.v,e),(n&El)!==0?wu(r.i,t):r.i=t}function Vh(r,e,t,n,i,s,o,l,d,h){var p=(d&Tl)!==0,w=(d&Xm)===0,T=p?w?Gm(i):bu(i):i,S=(d&El)===0?o:bu(o),k={i:S,v:T,k:s,a:null,e:null,prev:t,next:n};try{return k.e=Na(()=>l(r,T,S,h),yt),k.e.prev=t&&t.e,k.e.next=n&&n.e,t===null?e.first=k:(t.next=k,t.e.next=k.e),n!==null&&(n.prev=k,n.e.prev=k.e),k}finally{}}function Iu(r,e,t){for(var n=r.next?r.next.e.nodes_start:t,i=e?e.e.nodes_start:t,s=r.e.nodes_start;s!==n;){var o=Ph(s);i.before(s),s=o}}function Zr(r,e,t){e===null?r.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Rg(r,e,t,n,i){var s=r,o="",l;bl(()=>{if(o===(o=e()??"")){yt&&ai();return}l!==void 0&&(Il(l),l=void 0),o!==""&&(l=Na(()=>{if(yt){Cr.data;for(var d=ai(),h=d;d!==null&&(d.nodeType!==8||d.data!=="");)h=d,d=Ph(d);if(d===null)throw Zm(),eg;zo(Cr,h),s=Zn(d);return}var p=o+"",w=zm(p);zo(Al(w),w.lastChild),s.before(w)}))})}function ht(r,e,t,n,i){var l;yt&&ai();var s=(l=e.$$slots)==null?void 0:l[t],o=!1;s===!0&&(s=e.children,o=!0),s===void 0||s(r,o?()=>n:n)}function Pg(r,e,t,n,i,s){let o=yt;yt&&ai();var l,d,h=null;yt&&Cr.nodeType===1&&(h=Cr,ai());var p=yt?Cr:r,w;bl(()=>{const T=e()||null;var S=rg;T!==l&&(w&&(T===null?Th(w,()=>{w=null,d=null}):T===d?wl(w):Il(w)),T&&T!==d&&(w=Na(()=>{if(h=yt?h:document.createElementNS(S,T),zo(h,h),n){yt&&ug(T)&&h.append(document.createComment(""));var k=yt?Al(h):h.appendChild(Rh());yt&&(k===null?Cn(!1):Zn(k)),n(h,k)}Bo.nodes_end=h,p.before(h)})),l=T,l&&(d=l))},tg),o&&(Cn(!0),Zn(p))}function Mh(r){var e,t,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var i=r.length;for(e=0;e<i;e++)r[e]&&(t=Mh(r[e]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t);return n}function Cg(){for(var r,e,t=0,n="",i=arguments.length;t<i;t++)(r=arguments[t])&&(e=Mh(r))&&(n&&(n+=" "),n+=e);return n}function Oa(r){return typeof r=="object"?Cg(r):r??""}const Tu=[...` 	
\r\f \v\uFEFF`];function Sg(r,e,t){var n=r==null?"":""+r;if(e&&(n=n?n+" "+e:e),t){for(var i in t)if(t[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,o=0;(o=n.indexOf(i,o))>=0;){var l=o+s;(o===0||Tu.includes(n[o-1]))&&(l===n.length||Tu.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function Au(r,e=!1){var t=e?" !important;":";",n="";for(var i in r){var s=r[i];s!=null&&s!==""&&(n+=" "+i+": "+s+t)}return n}function Ro(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function kg(r,e){if(e){var t="",n,i;if(Array.isArray(e)?(n=e[0],i=e[1]):n=e,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,l=!1,d=[];n&&d.push(...Object.keys(n).map(Ro)),i&&d.push(...Object.keys(i).map(Ro));var h=0,p=-1;const $=r.length;for(var w=0;w<$;w++){var T=r[w];if(l?T==="/"&&r[w-1]==="*"&&(l=!1):s?s===T&&(s=!1):T==="/"&&r[w+1]==="*"?l=!0:T==='"'||T==="'"?s=T:T==="("?o++:T===")"&&o--,!l&&s===!1&&o===0){if(T===":"&&p===-1)p=w;else if(T===";"||w===$-1){if(p!==-1){var S=Ro(r.substring(h,p).trim());if(!d.includes(S)){T!==";"&&w++;var k=r.substring(h,w).trim();t+=" "+k+";"}}h=w+1,p=-1}}}}return n&&(t+=Au(n)),i&&(t+=Au(i,!0)),t=t.trim(),t===""?null:t}return r==null?null:String(r)}function It(r,e,t,n,i,s){var o=r.__className;if(yt||o!==t||o===void 0){var l=Sg(t,n,s);(!yt||l!==r.getAttribute("class"))&&(l==null?r.removeAttribute("class"):e?r.className=l:r.setAttribute("class",l)),r.__className=t}else if(s&&i!==s)for(var d in s){var h=!!s[d];(i==null||h!==!!i[d])&&r.classList.toggle(d,h)}return s}function Po(r,e={},t,n){for(var i in t){var s=t[i];e[i]!==s&&(t[i]==null?r.style.removeProperty(i):r.style.setProperty(i,s,n))}}function xg(r,e,t,n){var i=r.__style;if(yt||i!==e){var s=kg(e,n);(!yt||s!==r.getAttribute("style"))&&(s==null?r.removeAttribute("style"):r.style.cssText=s),r.__style=e}else n&&(Array.isArray(n)?(Po(r,t==null?void 0:t[0],n[0]),Po(r,t==null?void 0:t[1],n[1],"important")):Po(r,t,n));return n}const zi=Symbol("class"),Bi=Symbol("style"),Oh=Symbol("is custom element"),Lh=Symbol("is html");function qe(r){if(yt){var e=!1,t=()=>{if(!e){if(e=!0,r.hasAttribute("value")){var n=r.value;nt(r,"value",null),r.value=n}if(r.hasAttribute("checked")){var i=r.checked;nt(r,"checked",null),r.checked=i}}};r.__on_r=t,ag(t),mg()}}function Dg(r,e){var t=La(r);t.value===(t.value=e??void 0)||r.value===e&&(e!==0||r.nodeName!=="PROGRESS")||(r.value=e??"")}function Yi(r,e){var t=La(r);t.checked!==(t.checked=e??void 0)&&(r.checked=e)}function Ng(r,e){e?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function nt(r,e,t,n){var i=La(r);yt&&(i[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||i[e]!==(i[e]=t)&&(e==="loading"&&(r[sg]=t),t==null?r.removeAttribute(e):typeof t!="string"&&$h(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function Ru(r,e,t,n,i=!1){var s=La(r),o=s[Oh],l=!s[Lh];let d=yt&&o;d&&Cn(!1);var h=e||{},p=r.tagName==="OPTION";for(var w in e)w in t||(t[w]=null);t.class?t.class=Oa(t.class):t[zi]&&(t.class=null),t[Bi]&&(t.style??(t.style=null));var T=$h(r);for(const V in t){let D=t[V];if(p&&V==="value"&&D==null){r.value=r.__value="",h[V]=D;continue}if(V==="class"){var S=r.namespaceURI==="http://www.w3.org/1999/xhtml";It(r,S,D,n,e==null?void 0:e[zi],t[zi]),h[V]=D,h[zi]=t[zi];continue}if(V==="style"){xg(r,D,e==null?void 0:e[Bi],t[Bi]),h[V]=D,h[Bi]=t[Bi];continue}var k=h[V];if(D!==k){h[V]=D;var $=V[0]+V[1];if($!=="$$")if($==="on"){const x={},L="$$"+V;let b=V.slice(2);var O=gg(b);if(dg(b)&&(b=b.slice(0,-7),x.capture=!0),!O&&k){if(D!=null)continue;r.removeEventListener(b,h[L],x),h[L]=null}if(D!=null)if(O)r[`__${b}`]=D,or([b]);else{let v=function(I){h[V].call(this,I)};h[L]=hg(b,r,v,x)}else O&&(r[`__${b}`]=void 0)}else if(V==="style")nt(r,V,D);else if(V==="autofocus")fg(r,!!D);else if(!o&&(V==="__value"||V==="value"&&D!=null))r.value=r.__value=D;else if(V==="selected"&&p)Ng(r,D);else{var ee=V;l||(ee=pg(ee));var z=ee==="defaultValue"||ee==="defaultChecked";if(D==null&&!o&&!z)if(s[V]=null,ee==="value"||ee==="checked"){let x=r;const L=e===void 0;if(ee==="value"){let b=x.defaultValue;x.removeAttribute(ee),x.defaultValue=b,x.value=x.__value=L?b:null}else{let b=x.defaultChecked;x.removeAttribute(ee),x.defaultChecked=b,x.checked=L?b:!1}}else r.removeAttribute(V);else z||T.includes(ee)&&(o||typeof D!="string")?r[ee]=D:typeof D!="function"&&nt(r,ee,D)}}}return d&&Cn(!0),h}function La(r){return r.__attributes??(r.__attributes={[Oh]:r.nodeName.includes("-"),[Lh]:r.namespaceURI===ng})}var Pu=new Map;function $h(r){var e=Pu.get(r.nodeName);if(e)return e;Pu.set(r.nodeName,e=[]);for(var t,n=r,i=Element.prototype;i!==n;){t=og(n);for(var s in t)t[s].set&&e.push(s);n=ig(n)}return e}function dt(r,e,t=e){var n=lg();Pl(r,"input",i=>{var s=i?r.defaultValue:r.value;if(s=Co(r)?So(s):s,t(s),n&&s!==(s=e())){var o=r.selectionStart,l=r.selectionEnd;r.value=s??"",l!==null&&(r.selectionStart=o,r.selectionEnd=Math.min(l,r.value.length))}}),(yt&&r.defaultValue!==r.value||Rl(e)==null&&r.value)&&t(Co(r)?So(r.value):r.value),Sh(()=>{var i=e();Co(r)&&i===So(r.value)||r.type==="date"&&!i&&!r.value||i!==r.value&&(r.value=i??"")})}function oi(r,e,t=e){Pl(r,"change",n=>{var i=n?r.defaultChecked:r.checked;t(i)}),(yt&&r.defaultChecked!==r.checked||Rl(e)==null)&&t(r.checked),Sh(()=>{var n=e();r.checked=!!n})}function Co(r){var e=r.type;return e==="number"||e==="range"}function So(r){return r===""?null:+r}function li(r,e,t){if(r.multiple)return Mg(r,e);for(var n of r.options){var i=Zi(n);if(cg(i,e)){n.selected=!0;return}}(!t||e!==void 0)&&(r.selectedIndex=-1)}function ua(r,e){let t=!0;kh(()=>{e&&li(r,Rl(e),t),t=!1;var n=new MutationObserver(()=>{var i=r.__value;li(r,i)});return n.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{n.disconnect()}})}function Vg(r,e,t=e){var n=!0;Pl(r,"change",i=>{var s=i?"[selected]":":checked",o;if(r.multiple)o=[].map.call(r.querySelectorAll(s),Zi);else{var l=r.querySelector(s)??r.querySelector("option:not([disabled])");o=l&&Zi(l)}t(o)}),kh(()=>{var i=e();if(li(r,i,n),n&&i===void 0){var s=r.querySelector(":checked");s!==null&&(i=Zi(s),t(i))}r.__value=i,n=!1}),ua(r)}function Mg(r,e){for(var t of r.options)t.selected=~e.indexOf(Zi(t))}function Zi(r){return"__value"in r?r.__value:r.value}/**
 * @license lucide-svelte v0.487.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const Og={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Lg=Bm("<svg><!><!></svg>");function mt(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]),n=ut(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);er(e,!1);let i=Gn(e,"name",8,void 0),s=Gn(e,"color",8,"currentColor"),o=Gn(e,"size",8,24),l=Gn(e,"strokeWidth",8,2),d=Gn(e,"absoluteStrokeWidth",8,!1),h=Gn(e,"iconNode",24,()=>[]);const p=(...$)=>$.filter((O,ee,z)=>!!O&&z.indexOf(O)===ee).join(" ");Eh();var w=Lg();let T;var S=g(w);ar(S,1,h,hn,($,O)=>{let ee=()=>c(O)[0],z=()=>c(O)[1];var V=Ue(),D=ce(V);Pg(D,ee,!0,(x,L)=>{let b;Ae(()=>b=Ru(x,b,{...z()}))}),N($,V)});var k=C(S);ht(k,e,"default",{}),m(w),Ae(($,O)=>T=Ru(w,T,{...Og,...n,width:o(),height:o(),stroke:s(),"stroke-width":$,class:O}),[()=>d()?Number(l())*24/Number(o()):l(),()=>p("lucide-icon","lucide",i()?`lucide-${i()}`:"",t.class)],Ih),N(r,w),tr()}function Sn(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"arrow-down"},()=>t,{iconNode:[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function kn(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"arrow-up"},()=>t,{iconNode:[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function $g(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"boxes"},()=>t,{iconNode:[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function Fg(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"bug"},()=>t,{iconNode:[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"}],["path",{d:"M12 20v-9"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M22 13h-4"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function Ug(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"building"},()=>t,{iconNode:[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function Cl(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"check"},()=>t,{iconNode:[["path",{d:"M20 6 9 17l-5-5"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function Sl(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"chevron-down"},()=>t,{iconNode:[["path",{d:"m6 9 6 6 6-6"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function zg(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"chevron-up"},()=>t,{iconNode:[["path",{d:"m18 15-6-6-6 6"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function Fh(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"circle-alert"},()=>t,{iconNode:[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function ci(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"circle-check-big"},()=>t,{iconNode:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function ui(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"circle-plus"},()=>t,{iconNode:[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function di(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"circle-x"},()=>t,{iconNode:[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function ei(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"factory"},()=>t,{iconNode:[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M17 18h1"}],["path",{d:"M12 18h1"}],["path",{d:"M7 18h1"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function Bg(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"file-up"},()=>t,{iconNode:[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function jo(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"globe"},()=>t,{iconNode:[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function jg(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"info"},()=>t,{iconNode:[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function Cu(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"map-pin"},()=>t,{iconNode:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function qg(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"map"},()=>t,{iconNode:[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function ti(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"package"},()=>t,{iconNode:[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function Hg(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"phone"},()=>t,{iconNode:[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function Gg(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"plus"},()=>t,{iconNode:[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function Br(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"refresh-cw"},()=>t,{iconNode:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function Su(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"rotate-ccw"},()=>t,{iconNode:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function kl(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"save"},()=>t,{iconNode:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function Wg(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"search"},()=>t,{iconNode:[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function hi(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"square-pen"},()=>t,{iconNode:[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function $a(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"trash-2"},()=>t,{iconNode:[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function Kg(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"triangle-alert"},()=>t,{iconNode:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function Uh(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"upload"},()=>t,{iconNode:[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"17 8 12 3 7 8"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}function br(r,e){const t=ut(e,["children","$$slots","$$events","$$legacy"]);mt(r,pt({name:"x"},()=>t,{iconNode:[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]],children:(i,s)=>{var o=Ue(),l=ce(o);ht(l,e,"default",{}),N(i,o)},$$slots:{default:!0}}))}const Qg=()=>{};var ku={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Xg=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],l=r[t++],d=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(d>>10)),e[n++]=String.fromCharCode(56320+(d&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,l=o?r[i+1]:0,d=i+2<r.length,h=d?r[i+2]:0,p=s>>2,w=(s&3)<<4|l>>4;let T=(l&15)<<2|h>>6,S=h&63;d||(S=64,o||(T=64)),n.push(t[p],t[w],t[T],t[S])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(zh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Xg(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],l=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const w=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||l==null||h==null||w==null)throw new Jg;const T=s<<2|l>>4;if(n.push(T),h!==64){const S=l<<4&240|h>>2;if(n.push(S),w!==64){const k=h<<6&192|w;n.push(k)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Jg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yg=function(r){const e=zh(r);return Bh.encodeByteArray(e,!0)},da=function(r){return Yg(r).replace(/\./g,"")},jh=function(r){try{return Bh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=()=>Zg().__FIREBASE_DEFAULTS__,tv=()=>{if(typeof process>"u"||typeof ku>"u")return;const r=ku.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},rv=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&jh(r[1]);return e&&JSON.parse(e)},Fa=()=>{try{return Qg()||ev()||tv()||rv()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},qh=r=>{var e,t;return(t=(e=Fa())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},nv=r=>{const e=qh(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Hh=()=>{var r;return(r=Fa())===null||r===void 0?void 0:r.config},Gh=r=>{var e;return(e=Fa())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[da(JSON.stringify(t)),da(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function av(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function ov(){var r;const e=(r=Fa())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cv(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function uv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dv(){const r=Yt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function hv(){return!ov()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fv(){try{return typeof indexedDB=="object"}catch{return!1}}function pv(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="FirebaseError";class Kr extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=mv,Object.setPrototypeOf(this,Kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ws.prototype.create)}}class ws{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gv(s,n):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Kr(i,l,n)}}function gv(r,e){return r.replace(vv,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const vv=/\{\$([^}]+)}/g;function _v(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function xn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],o=e[i];if(xu(s)&&xu(o)){if(!xn(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function xu(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Gi(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Wi(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function yv(r,e){const t=new bv(r,e);return t.subscribe.bind(t)}class bv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");wv(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=ko),i.error===void 0&&(i.error=ko),i.complete===void 0&&(i.complete=ko);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wv(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ko(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(r){return r&&r._delegate?r._delegate:r}class Dn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new iv;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tv(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);n===l&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Iv(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Iv(r){return r===Rn?void 0:r}function Tv(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ev(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(et||(et={}));const Rv={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},Pv=et.INFO,Cv={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},Sv=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=Cv[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=Pv,this._logHandler=Sv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in et))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...e),this._logHandler(this,et.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...e),this._logHandler(this,et.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,et.INFO,...e),this._logHandler(this,et.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,et.WARN,...e),this._logHandler(this,et.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...e),this._logHandler(this,et.ERROR,...e)}}const kv=(r,e)=>e.some(t=>r instanceof t);let Du,Nu;function xv(){return Du||(Du=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dv(){return Nu||(Nu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wh=new WeakMap,qo=new WeakMap,Kh=new WeakMap,xo=new WeakMap,Dl=new WeakMap;function Nv(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",o)},s=()=>{t(an(r.result)),i()},o=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Wh.set(t,r)}).catch(()=>{}),Dl.set(e,r),e}function Vv(r){if(qo.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",o),r.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",o),r.addEventListener("abort",o)});qo.set(r,e)}let Ho={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return qo.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Kh.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return an(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Mv(r){Ho=r(Ho)}function Ov(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Do(this),e,...t);return Kh.set(n,e.sort?e.sort():[e]),an(n)}:Dv().includes(r)?function(...e){return r.apply(Do(this),e),an(Wh.get(this))}:function(...e){return an(r.apply(Do(this),e))}}function Lv(r){return typeof r=="function"?Ov(r):(r instanceof IDBTransaction&&Vv(r),kv(r,xv())?new Proxy(r,Ho):r)}function an(r){if(r instanceof IDBRequest)return Nv(r);if(xo.has(r))return xo.get(r);const e=Lv(r);return e!==r&&(xo.set(r,e),Dl.set(e,r)),e}const Do=r=>Dl.get(r);function $v(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(r,e),l=an(o);return n&&o.addEventListener("upgradeneeded",d=>{n(an(o.result),d.oldVersion,d.newVersion,an(o.transaction),d)}),t&&o.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),l.then(d=>{s&&d.addEventListener("close",()=>s()),i&&d.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Fv=["get","getKey","getAll","getAllKeys","count"],Uv=["put","add","delete","clear"],No=new Map;function Vu(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(No.get(e))return No.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Uv.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Fv.includes(t)))return;const s=async function(o,...l){const d=this.transaction(o,i?"readwrite":"readonly");let h=d.store;return n&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&d.done]))[0]};return No.set(e,s),s}Mv(r=>({...r,get:(e,t,n)=>Vu(e,t)||r.get(e,t,n),has:(e,t)=>!!Vu(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Bv(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Bv(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Go="@firebase/app",Mu="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new xl("@firebase/app"),jv="@firebase/app-compat",qv="@firebase/analytics-compat",Hv="@firebase/analytics",Gv="@firebase/app-check-compat",Wv="@firebase/app-check",Kv="@firebase/auth",Qv="@firebase/auth-compat",Xv="@firebase/database",Jv="@firebase/data-connect",Yv="@firebase/database-compat",Zv="@firebase/functions",e_="@firebase/functions-compat",t_="@firebase/installations",r_="@firebase/installations-compat",n_="@firebase/messaging",i_="@firebase/messaging-compat",s_="@firebase/performance",a_="@firebase/performance-compat",o_="@firebase/remote-config",l_="@firebase/remote-config-compat",c_="@firebase/storage",u_="@firebase/storage-compat",d_="@firebase/firestore",h_="@firebase/vertexai",f_="@firebase/firestore-compat",p_="firebase",m_="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="[DEFAULT]",g_={[Go]:"fire-core",[jv]:"fire-core-compat",[Hv]:"fire-analytics",[qv]:"fire-analytics-compat",[Wv]:"fire-app-check",[Gv]:"fire-app-check-compat",[Kv]:"fire-auth",[Qv]:"fire-auth-compat",[Xv]:"fire-rtdb",[Jv]:"fire-data-connect",[Yv]:"fire-rtdb-compat",[Zv]:"fire-fn",[e_]:"fire-fn-compat",[t_]:"fire-iid",[r_]:"fire-iid-compat",[n_]:"fire-fcm",[i_]:"fire-fcm-compat",[s_]:"fire-perf",[a_]:"fire-perf-compat",[o_]:"fire-rc",[l_]:"fire-rc-compat",[c_]:"fire-gcs",[u_]:"fire-gcs-compat",[d_]:"fire-fst",[f_]:"fire-fst-compat",[h_]:"fire-vertex","fire-js":"fire-js",[p_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=new Map,v_=new Map,Ko=new Map;function Ou(r,e){try{r.container.addComponent(e)}catch(t){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function fi(r){const e=r.name;if(Ko.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;Ko.set(e,r);for(const t of ha.values())Ou(t,r);for(const t of v_.values())Ou(t,r);return!0}function Nl(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function gr(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new ws("app","Firebase",__);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=m_;function Vl(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Wo,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw on.create("bad-app-name",{appName:String(i)});if(t||(t=Hh()),!t)throw on.create("no-options");const s=ha.get(i);if(s){if(xn(t,s.options)&&xn(n,s.config))return s;throw on.create("duplicate-app",{appName:i})}const o=new Av(i);for(const d of Ko.values())o.addComponent(d);const l=new y_(t,n,o);return ha.set(i,l),l}function Qh(r=Wo){const e=ha.get(r);if(!e&&r===Wo&&Hh())return Vl();if(!e)throw on.create("no-app",{appName:r});return e}function ln(r,e,t){var n;let i=(n=g_[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(l.join(" "));return}fi(new Dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="firebase-heartbeat-database",w_=1,os="firebase-heartbeat-store";let Vo=null;function Xh(){return Vo||(Vo=$v(b_,w_,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(os)}catch(t){console.warn(t)}}}}).catch(r=>{throw on.create("idb-open",{originalErrorMessage:r.message})})),Vo}async function E_(r){try{const t=(await Xh()).transaction(os),n=await t.objectStore(os).get(Jh(r));return await t.done,n}catch(e){if(e instanceof Kr)jr.warn(e.message);else{const t=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jr.warn(t.message)}}}async function Lu(r,e){try{const n=(await Xh()).transaction(os,"readwrite");await n.objectStore(os).put(e,Jh(r)),await n.done}catch(t){if(t instanceof Kr)jr.warn(t.message);else{const n=on.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jr.warn(n.message)}}}function Jh(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=1024,T_=30;class A_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new P_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$u();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>T_){const o=C_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){jr.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$u(),{heartbeatsToSend:n,unsentEntries:i}=R_(this._heartbeatsCache.heartbeats),s=da(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return jr.warn(t),""}}}function $u(){return new Date().toISOString().substring(0,10)}function R_(r,e=I_){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Fu(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class P_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fv()?pv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await E_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fu(r){return da(JSON.stringify({version:2,heartbeats:r})).length}function C_(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(r){fi(new Dn("platform-logger",e=>new zv(e),"PRIVATE")),fi(new Dn("heartbeat",e=>new A_(e),"PRIVATE")),ln(Go,Mu,r),ln(Go,Mu,"esm2017"),ln("fire-js","")}S_("");var Uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cn,Yh;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function I(){}I.prototype=v.prototype,b.D=v.prototype,b.prototype=new I,b.prototype.constructor=b,b.C=function(A,E,P){for(var y=Array(arguments.length-2),j=2;j<arguments.length;j++)y[j-2]=arguments[j];return v.prototype[E].apply(A,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,v,I){I||(I=0);var A=Array(16);if(typeof v=="string")for(var E=0;16>E;++E)A[E]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(E=0;16>E;++E)A[E]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=b.g[0],I=b.g[1],E=b.g[2];var P=b.g[3],y=v+(P^I&(E^P))+A[0]+3614090360&4294967295;v=I+(y<<7&4294967295|y>>>25),y=P+(E^v&(I^E))+A[1]+3905402710&4294967295,P=v+(y<<12&4294967295|y>>>20),y=E+(I^P&(v^I))+A[2]+606105819&4294967295,E=P+(y<<17&4294967295|y>>>15),y=I+(v^E&(P^v))+A[3]+3250441966&4294967295,I=E+(y<<22&4294967295|y>>>10),y=v+(P^I&(E^P))+A[4]+4118548399&4294967295,v=I+(y<<7&4294967295|y>>>25),y=P+(E^v&(I^E))+A[5]+1200080426&4294967295,P=v+(y<<12&4294967295|y>>>20),y=E+(I^P&(v^I))+A[6]+2821735955&4294967295,E=P+(y<<17&4294967295|y>>>15),y=I+(v^E&(P^v))+A[7]+4249261313&4294967295,I=E+(y<<22&4294967295|y>>>10),y=v+(P^I&(E^P))+A[8]+1770035416&4294967295,v=I+(y<<7&4294967295|y>>>25),y=P+(E^v&(I^E))+A[9]+2336552879&4294967295,P=v+(y<<12&4294967295|y>>>20),y=E+(I^P&(v^I))+A[10]+4294925233&4294967295,E=P+(y<<17&4294967295|y>>>15),y=I+(v^E&(P^v))+A[11]+2304563134&4294967295,I=E+(y<<22&4294967295|y>>>10),y=v+(P^I&(E^P))+A[12]+1804603682&4294967295,v=I+(y<<7&4294967295|y>>>25),y=P+(E^v&(I^E))+A[13]+4254626195&4294967295,P=v+(y<<12&4294967295|y>>>20),y=E+(I^P&(v^I))+A[14]+2792965006&4294967295,E=P+(y<<17&4294967295|y>>>15),y=I+(v^E&(P^v))+A[15]+1236535329&4294967295,I=E+(y<<22&4294967295|y>>>10),y=v+(E^P&(I^E))+A[1]+4129170786&4294967295,v=I+(y<<5&4294967295|y>>>27),y=P+(I^E&(v^I))+A[6]+3225465664&4294967295,P=v+(y<<9&4294967295|y>>>23),y=E+(v^I&(P^v))+A[11]+643717713&4294967295,E=P+(y<<14&4294967295|y>>>18),y=I+(P^v&(E^P))+A[0]+3921069994&4294967295,I=E+(y<<20&4294967295|y>>>12),y=v+(E^P&(I^E))+A[5]+3593408605&4294967295,v=I+(y<<5&4294967295|y>>>27),y=P+(I^E&(v^I))+A[10]+38016083&4294967295,P=v+(y<<9&4294967295|y>>>23),y=E+(v^I&(P^v))+A[15]+3634488961&4294967295,E=P+(y<<14&4294967295|y>>>18),y=I+(P^v&(E^P))+A[4]+3889429448&4294967295,I=E+(y<<20&4294967295|y>>>12),y=v+(E^P&(I^E))+A[9]+568446438&4294967295,v=I+(y<<5&4294967295|y>>>27),y=P+(I^E&(v^I))+A[14]+3275163606&4294967295,P=v+(y<<9&4294967295|y>>>23),y=E+(v^I&(P^v))+A[3]+4107603335&4294967295,E=P+(y<<14&4294967295|y>>>18),y=I+(P^v&(E^P))+A[8]+1163531501&4294967295,I=E+(y<<20&4294967295|y>>>12),y=v+(E^P&(I^E))+A[13]+2850285829&4294967295,v=I+(y<<5&4294967295|y>>>27),y=P+(I^E&(v^I))+A[2]+4243563512&4294967295,P=v+(y<<9&4294967295|y>>>23),y=E+(v^I&(P^v))+A[7]+1735328473&4294967295,E=P+(y<<14&4294967295|y>>>18),y=I+(P^v&(E^P))+A[12]+2368359562&4294967295,I=E+(y<<20&4294967295|y>>>12),y=v+(I^E^P)+A[5]+4294588738&4294967295,v=I+(y<<4&4294967295|y>>>28),y=P+(v^I^E)+A[8]+2272392833&4294967295,P=v+(y<<11&4294967295|y>>>21),y=E+(P^v^I)+A[11]+1839030562&4294967295,E=P+(y<<16&4294967295|y>>>16),y=I+(E^P^v)+A[14]+4259657740&4294967295,I=E+(y<<23&4294967295|y>>>9),y=v+(I^E^P)+A[1]+2763975236&4294967295,v=I+(y<<4&4294967295|y>>>28),y=P+(v^I^E)+A[4]+1272893353&4294967295,P=v+(y<<11&4294967295|y>>>21),y=E+(P^v^I)+A[7]+4139469664&4294967295,E=P+(y<<16&4294967295|y>>>16),y=I+(E^P^v)+A[10]+3200236656&4294967295,I=E+(y<<23&4294967295|y>>>9),y=v+(I^E^P)+A[13]+681279174&4294967295,v=I+(y<<4&4294967295|y>>>28),y=P+(v^I^E)+A[0]+3936430074&4294967295,P=v+(y<<11&4294967295|y>>>21),y=E+(P^v^I)+A[3]+3572445317&4294967295,E=P+(y<<16&4294967295|y>>>16),y=I+(E^P^v)+A[6]+76029189&4294967295,I=E+(y<<23&4294967295|y>>>9),y=v+(I^E^P)+A[9]+3654602809&4294967295,v=I+(y<<4&4294967295|y>>>28),y=P+(v^I^E)+A[12]+3873151461&4294967295,P=v+(y<<11&4294967295|y>>>21),y=E+(P^v^I)+A[15]+530742520&4294967295,E=P+(y<<16&4294967295|y>>>16),y=I+(E^P^v)+A[2]+3299628645&4294967295,I=E+(y<<23&4294967295|y>>>9),y=v+(E^(I|~P))+A[0]+4096336452&4294967295,v=I+(y<<6&4294967295|y>>>26),y=P+(I^(v|~E))+A[7]+1126891415&4294967295,P=v+(y<<10&4294967295|y>>>22),y=E+(v^(P|~I))+A[14]+2878612391&4294967295,E=P+(y<<15&4294967295|y>>>17),y=I+(P^(E|~v))+A[5]+4237533241&4294967295,I=E+(y<<21&4294967295|y>>>11),y=v+(E^(I|~P))+A[12]+1700485571&4294967295,v=I+(y<<6&4294967295|y>>>26),y=P+(I^(v|~E))+A[3]+2399980690&4294967295,P=v+(y<<10&4294967295|y>>>22),y=E+(v^(P|~I))+A[10]+4293915773&4294967295,E=P+(y<<15&4294967295|y>>>17),y=I+(P^(E|~v))+A[1]+2240044497&4294967295,I=E+(y<<21&4294967295|y>>>11),y=v+(E^(I|~P))+A[8]+1873313359&4294967295,v=I+(y<<6&4294967295|y>>>26),y=P+(I^(v|~E))+A[15]+4264355552&4294967295,P=v+(y<<10&4294967295|y>>>22),y=E+(v^(P|~I))+A[6]+2734768916&4294967295,E=P+(y<<15&4294967295|y>>>17),y=I+(P^(E|~v))+A[13]+1309151649&4294967295,I=E+(y<<21&4294967295|y>>>11),y=v+(E^(I|~P))+A[4]+4149444226&4294967295,v=I+(y<<6&4294967295|y>>>26),y=P+(I^(v|~E))+A[11]+3174756917&4294967295,P=v+(y<<10&4294967295|y>>>22),y=E+(v^(P|~I))+A[2]+718787259&4294967295,E=P+(y<<15&4294967295|y>>>17),y=I+(P^(E|~v))+A[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+P&4294967295}n.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var I=v-this.blockSize,A=this.B,E=this.h,P=0;P<v;){if(E==0)for(;P<=I;)i(this,b,P),P+=this.blockSize;if(typeof b=="string"){for(;P<v;)if(A[E++]=b.charCodeAt(P++),E==this.blockSize){i(this,A),E=0;break}}else for(;P<v;)if(A[E++]=b[P++],E==this.blockSize){i(this,A),E=0;break}}this.h=E,this.o+=v},n.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var I=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=I&255,I/=256;for(this.u(b),b=Array(16),v=I=0;4>v;++v)for(var A=0;32>A;A+=8)b[I++]=this.g[v]>>>A&255;return b};function s(b,v){var I=l;return Object.prototype.hasOwnProperty.call(I,b)?I[b]:I[b]=v(b)}function o(b,v){this.h=v;for(var I=[],A=!0,E=b.length-1;0<=E;E--){var P=b[E]|0;A&&P==v||(I[E]=P,A=!1)}this.g=I}var l={};function d(b){return-128<=b&&128>b?s(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return w;if(0>b)return O(h(-b));for(var v=[],I=1,A=0;b>=I;A++)v[A]=b/I|0,I*=4294967296;return new o(v,0)}function p(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return O(p(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(v,8)),A=w,E=0;E<b.length;E+=8){var P=Math.min(8,b.length-E),y=parseInt(b.substring(E,E+P),v);8>P?(P=h(Math.pow(v,P)),A=A.j(P).add(h(y))):(A=A.j(I),A=A.add(h(y)))}return A}var w=d(0),T=d(1),S=d(16777216);r=o.prototype,r.m=function(){if($(this))return-O(this).m();for(var b=0,v=1,I=0;I<this.g.length;I++){var A=this.i(I);b+=(0<=A?A:4294967296+A)*v,v*=4294967296}return b},r.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(k(this))return"0";if($(this))return"-"+O(this).toString(b);for(var v=h(Math.pow(b,6)),I=this,A="";;){var E=D(I,v).g;I=ee(I,E.j(v));var P=((0<I.g.length?I.g[0]:I.h)>>>0).toString(b);if(I=E,k(I))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},r.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function k(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function $(b){return b.h==-1}r.l=function(b){return b=ee(this,b),$(b)?-1:k(b)?0:1};function O(b){for(var v=b.g.length,I=[],A=0;A<v;A++)I[A]=~b.g[A];return new o(I,~b.h).add(T)}r.abs=function(){return $(this)?O(this):this},r.add=function(b){for(var v=Math.max(this.g.length,b.g.length),I=[],A=0,E=0;E<=v;E++){var P=A+(this.i(E)&65535)+(b.i(E)&65535),y=(P>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);A=y>>>16,P&=65535,y&=65535,I[E]=y<<16|P}return new o(I,I[I.length-1]&-2147483648?-1:0)};function ee(b,v){return b.add(O(v))}r.j=function(b){if(k(this)||k(b))return w;if($(this))return $(b)?O(this).j(O(b)):O(O(this).j(b));if($(b))return O(this.j(O(b)));if(0>this.l(S)&&0>b.l(S))return h(this.m()*b.m());for(var v=this.g.length+b.g.length,I=[],A=0;A<2*v;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var E=0;E<b.g.length;E++){var P=this.i(A)>>>16,y=this.i(A)&65535,j=b.i(E)>>>16,ie=b.i(E)&65535;I[2*A+2*E]+=y*ie,z(I,2*A+2*E),I[2*A+2*E+1]+=P*ie,z(I,2*A+2*E+1),I[2*A+2*E+1]+=y*j,z(I,2*A+2*E+1),I[2*A+2*E+2]+=P*j,z(I,2*A+2*E+2)}for(A=0;A<v;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=v;A<2*v;A++)I[A]=0;return new o(I,0)};function z(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function V(b,v){this.g=b,this.h=v}function D(b,v){if(k(v))throw Error("division by zero");if(k(b))return new V(w,w);if($(b))return v=D(O(b),v),new V(O(v.g),O(v.h));if($(v))return v=D(b,O(v)),new V(O(v.g),v.h);if(30<b.g.length){if($(b)||$(v))throw Error("slowDivide_ only works with positive integers.");for(var I=T,A=v;0>=A.l(b);)I=x(I),A=x(A);var E=L(I,1),P=L(A,1);for(A=L(A,2),I=L(I,2);!k(A);){var y=P.add(A);0>=y.l(b)&&(E=E.add(I),P=y),A=L(A,1),I=L(I,1)}return v=ee(b,E.j(v)),new V(E,v)}for(E=w;0<=b.l(v);){for(I=Math.max(1,Math.floor(b.m()/v.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=h(I),y=P.j(v);$(y)||0<y.l(b);)I-=A,P=h(I),y=P.j(v);k(P)&&(P=T),E=E.add(P),b=ee(b,y)}return new V(E,b)}r.A=function(b){return D(this,b).h},r.and=function(b){for(var v=Math.max(this.g.length,b.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)&b.i(A);return new o(I,this.h&b.h)},r.or=function(b){for(var v=Math.max(this.g.length,b.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)|b.i(A);return new o(I,this.h|b.h)},r.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)^b.i(A);return new o(I,this.h^b.h)};function x(b){for(var v=b.g.length+1,I=[],A=0;A<v;A++)I[A]=b.i(A)<<1|b.i(A-1)>>>31;return new o(I,b.h)}function L(b,v){var I=v>>5;v%=32;for(var A=b.g.length-I,E=[],P=0;P<A;P++)E[P]=0<v?b.i(P+I)>>>v|b.i(P+I+1)<<32-v:b.i(P+I);return new o(E,b.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Yh=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,cn=o}).apply(typeof Uu<"u"?Uu:typeof self<"u"?self:typeof window<"u"?window:{});var Ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zh,Ki,ef,Zs,Qo,tf,rf,nf;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ws=="object"&&Ws];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function i(a,u){if(u)e:{var f=n;a=a.split(".");for(var _=0;_<a.length-1;_++){var M=a[_];if(!(M in f))break e;f=f[M]}a=a[a.length-1],_=f[a],u=u(_),u!=_&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function s(a,u){a instanceof String&&(a+="");var f=0,_=!1,M={next:function(){if(!_&&f<a.length){var U=f++;return{value:u(U,a[U]),done:!1}}return _=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}i("Array.prototype.values",function(a){return a||function(){return s(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function d(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function p(a,u,f){return a.call.apply(a.bind,arguments)}function w(a,u,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,_),a.apply(u,M)}}return function(){return a.apply(u,arguments)}}function T(a,u,f){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:w,T.apply(null,arguments)}function S(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function k(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,M,U){for(var le=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)le[_t-2]=arguments[_t];return u.prototype[M].apply(_,le)}}function $(a){const u=a.length;if(0<u){const f=Array(u);for(let _=0;_<u;_++)f[_]=a[_];return f}return[]}function O(a,u){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(d(_)){const M=a.length||0,U=_.length||0;a.length=M+U;for(let le=0;le<U;le++)a[M+le]=_[le]}else a.push(_)}}class ee{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function z(a){return/^[\s\xa0]*$/.test(a)}function V(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var x=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function L(a,u,f){for(const _ in a)u.call(f,a[_],_,a)}function b(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function v(a){const u={};for(const f in a)u[f]=a[f];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let f,_;for(let M=1;M<arguments.length;M++){_=arguments[M];for(f in _)a[f]=_[f];for(let U=0;U<I.length;U++)f=I[U],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function E(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function P(a){l.setTimeout(()=>{throw a},0)}function y(){var a=de;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class j{constructor(){this.h=this.g=null}add(u,f){const _=ie.get();_.set(u,f),this.h?this.h.next=_:this.g=_,this.h=_}}var ie=new ee(()=>new q,a=>a.reset());class q{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let W,oe=!1,de=new j,Pe=()=>{const a=l.Promise.resolve(void 0);W=()=>{a.then(Me)}};var Me=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(f){P(f)}var u=ie;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}oe=!1};function Xe(){this.s=this.s,this.C=this.C}Xe.prototype.s=!1,Xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var ke=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function ne(a,u){if(pe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(x){e:{try{D(u.nodeName);var M=!0;break e}catch{}M=!1}M||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:_e[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ne.aa.h.call(this)}}k(ne,pe);var _e={2:"touch",3:"pen",4:"mouse"};ne.prototype.h=function(){ne.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ue="closure_listenable_"+(1e6*Math.random()|0),K=0;function X(a,u,f,_,M){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!_,this.ha=M,this.key=++K,this.da=this.fa=!1}function Y(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function he(a){this.src=a,this.g={},this.h=0}he.prototype.add=function(a,u,f,_,M){var U=a.toString();a=this.g[U],a||(a=this.g[U]=[],this.h++);var le=ye(a,u,_,M);return-1<le?(u=a[le],f||(u.fa=!1)):(u=new X(u,this.src,U,!!_,M),u.fa=f,a.push(u)),u};function Te(a,u){var f=u.type;if(f in a.g){var _=a.g[f],M=Array.prototype.indexOf.call(_,u,void 0),U;(U=0<=M)&&Array.prototype.splice.call(_,M,1),U&&(Y(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ye(a,u,f,_){for(var M=0;M<a.length;++M){var U=a[M];if(!U.da&&U.listener==u&&U.capture==!!f&&U.ha==_)return M}return-1}var Oe="closure_lm_"+(1e6*Math.random()|0),He={};function Be(a,u,f,_,M){if(Array.isArray(u)){for(var U=0;U<u.length;U++)Be(a,u[U],f,_,M);return null}return f=ge(f),a&&a[ue]?a.K(u,f,h(_)?!!_.capture:!1,M):lt(a,u,f,!1,_,M)}function lt(a,u,f,_,M,U){if(!u)throw Error("Invalid event type");var le=h(M)?!!M.capture:!!M,_t=G(a);if(_t||(a[Oe]=_t=new he(a)),f=_t.add(u,f,_,le,U),f.proxy)return f;if(_=H(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)ke||(M=le),M===void 0&&(M=!1),a.addEventListener(u.toString(),_,M);else if(a.attachEvent)a.attachEvent(se(u.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function H(){function a(f){return u.call(a.src,a.listener,f)}const u=me;return a}function F(a,u,f,_,M){if(Array.isArray(u))for(var U=0;U<u.length;U++)F(a,u[U],f,_,M);else _=h(_)?!!_.capture:!!_,f=ge(f),a&&a[ue]?(a=a.i,u=String(u).toString(),u in a.g&&(U=a.g[u],f=ye(U,f,_,M),-1<f&&(Y(U[f]),Array.prototype.splice.call(U,f,1),U.length==0&&(delete a.g[u],a.h--)))):a&&(a=G(a))&&(u=a.g[u.toString()],a=-1,u&&(a=ye(u,f,_,M)),(f=-1<a?u[a]:null)&&Z(f))}function Z(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[ue])Te(u.i,a);else{var f=a.type,_=a.proxy;u.removeEventListener?u.removeEventListener(f,_,a.capture):u.detachEvent?u.detachEvent(se(f),_):u.addListener&&u.removeListener&&u.removeListener(_),(f=G(u))?(Te(f,a),f.h==0&&(f.src=null,u[Oe]=null)):Y(a)}}}function se(a){return a in He?He[a]:He[a]="on"+a}function me(a,u){if(a.da)a=!0;else{u=new ne(u,this);var f=a.listener,_=a.ha||a.src;a.fa&&Z(a),a=f.call(_,u)}return a}function G(a){return a=a[Oe],a instanceof he?a:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function ge(a){return typeof a=="function"?a:(a[ae]||(a[ae]=function(u){return a.handleEvent(u)}),a[ae])}function be(){Xe.call(this),this.i=new he(this),this.M=this,this.F=null}k(be,Xe),be.prototype[ue]=!0,be.prototype.removeEventListener=function(a,u,f,_){F(this,a,u,f,_)};function fe(a,u){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=u.type||u,typeof u=="string")u=new pe(u,a);else if(u instanceof pe)u.target=u.target||a;else{var M=u;u=new pe(_,a),A(u,M)}if(M=!0,f)for(var U=f.length-1;0<=U;U--){var le=u.g=f[U];M=we(le,_,!0,u)&&M}if(le=u.g=a,M=we(le,_,!0,u)&&M,M=we(le,_,!1,u)&&M,f)for(U=0;U<f.length;U++)le=u.g=f[U],M=we(le,_,!1,u)&&M}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],_=0;_<f.length;_++)Y(f[_]);delete a.g[u],a.h--}}this.F=null},be.prototype.K=function(a,u,f,_){return this.i.add(String(a),u,!1,f,_)},be.prototype.L=function(a,u,f,_){return this.i.add(String(a),u,!0,f,_)};function we(a,u,f,_){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var M=!0,U=0;U<u.length;++U){var le=u[U];if(le&&!le.da&&le.capture==f){var _t=le.listener,zt=le.ha||le.src;le.fa&&Te(a.i,le),M=_t.call(zt,_)!==!1&&M}}return M&&!_.defaultPrevented}function $e(a,u,f){if(typeof a=="function")f&&(a=T(a,f));else if(a&&typeof a.handleEvent=="function")a=T(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Ye(a){a.g=$e(()=>{a.g=null,a.i&&(a.i=!1,Ye(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Le extends Xe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ye(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function je(a){Xe.call(this),this.h=a,this.g={}}k(je,Xe);var Ze=[];function Je(a){L(a.g,function(u,f){this.g.hasOwnProperty(f)&&Z(u)},a),a.g={}}je.prototype.N=function(){je.aa.N.call(this),Je(this)},je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ge=l.JSON.stringify,We=l.JSON.parse,Ke=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function gt(){}gt.prototype.h=null;function xe(a){return a.h||(a.h=a.i())}function Ce(){}var Ne={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rt(){pe.call(this,"d")}k(rt,pe);function Rt(){pe.call(this,"c")}k(Rt,pe);var St={},Rr=null;function Ut(){return Rr=Rr||new be}St.La="serverreachability";function kt(a){pe.call(this,St.La,a)}k(kt,pe);function Ot(a){const u=Ut();fe(u,new kt(u))}St.STAT_EVENT="statevent";function hr(a,u){pe.call(this,St.STAT_EVENT,a),this.stat=u}k(hr,pe);function Et(a){const u=Ut();fe(u,new hr(u,a))}St.Ma="timingevent";function ot(a,u){pe.call(this,St.Ma,a),this.size=u}k(ot,pe);function cr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function it(){this.g=!0}it.prototype.xa=function(){this.g=!1};function En(a,u,f,_,M,U){a.info(function(){if(a.g)if(U)for(var le="",_t=U.split("&"),zt=0;zt<_t.length;zt++){var ct=_t[zt].split("=");if(1<ct.length){var Ht=ct[0];ct=ct[1];var Gt=Ht.split("_");le=2<=Gt.length&&Gt[1]=="type"?le+(Ht+"="+ct+"&"):le+(Ht+"=redacted&")}}else le=null;else le=U;return"XMLHTTP REQ ("+_+") [attempt "+M+"]: "+u+`
`+f+`
`+le})}function Di(a,u,f,_,M,U,le){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+M+"]: "+u+`
`+f+`
`+U+" "+le})}function Bn(a,u,f,_){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+wm(a,f)+(_?" "+_:"")})}function bm(a,u){a.info(function(){return"TIMEOUT: "+u})}it.prototype.info=function(){};function wm(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var M=_[1];if(Array.isArray(M)&&!(1>M.length)){var U=M[0];if(U!="noop"&&U!="stop"&&U!="close")for(var le=1;le<M.length;le++)M[le]=""}}}}return Ge(f)}catch{return u}}var Ns={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fo;function Vs(){}k(Vs,gt),Vs.prototype.g=function(){return new XMLHttpRequest},Vs.prototype.i=function(){return{}},fo=new Vs;function Qr(a,u,f,_){this.j=a,this.i=u,this.l=f,this.R=_||1,this.U=new je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mc}function Mc(){this.i=null,this.g="",this.h=!1}var Oc={},po={};function mo(a,u,f){a.L=1,a.v=$s(Or(u)),a.m=f,a.P=!0,Lc(a,null)}function Lc(a,u){a.F=Date.now(),Ms(a),a.A=Or(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Jc(f.i,"t",_),a.C=0,f=a.j.J,a.h=new Mc,a.g=mu(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Le(T(a.Y,a,a.g),a.O)),u=a.U,f=a.g,_=a.ca;var M="readystatechange";Array.isArray(M)||(M&&(Ze[0]=M.toString()),M=Ze);for(var U=0;U<M.length;U++){var le=Be(f,M[U],_||u.handleEvent,!1,u.h||u);if(!le)break;u.g[le.key]=le}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ot(),En(a.i,a.u,a.A,a.l,a.R,a.m)}Qr.prototype.ca=function(a){a=a.target;const u=this.M;u&&Lr(a)==3?u.j():this.Y(a)},Qr.prototype.Y=function(a){try{if(a==this.g)e:{const Gt=Lr(this.g);var u=this.g.Ba();const Hn=this.g.Z();if(!(3>Gt)&&(Gt!=3||this.g&&(this.h.h||this.g.oa()||iu(this.g)))){this.J||Gt!=4||u==7||(u==8||0>=Hn?Ot(3):Ot(2)),go(this);var f=this.g.Z();this.X=f;t:if($c(this)){var _=iu(this.g);a="";var M=_.length,U=Lr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){In(this),Ni(this);var le="";break t}this.h.i=new l.TextDecoder}for(u=0;u<M;u++)this.h.h=!0,a+=this.h.i.decode(_[u],{stream:!(U&&u==M-1)});_.length=0,this.h.g+=a,this.C=0,le=this.h.g}else le=this.g.oa();if(this.o=f==200,Di(this.i,this.u,this.A,this.l,this.R,Gt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var _t,zt=this.g;if((_t=zt.g?zt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(_t)){var ct=_t;break t}}ct=null}if(f=ct)Bn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vo(this,f);else{this.o=!1,this.s=3,Et(12),In(this),Ni(this);break e}}if(this.P){f=!0;let mr;for(;!this.J&&this.C<le.length;)if(mr=Em(this,le),mr==po){Gt==4&&(this.s=4,Et(14),f=!1),Bn(this.i,this.l,null,"[Incomplete Response]");break}else if(mr==Oc){this.s=4,Et(15),Bn(this.i,this.l,le,"[Invalid Chunk]"),f=!1;break}else Bn(this.i,this.l,mr,null),vo(this,mr);if($c(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Gt!=4||le.length!=0||this.h.h||(this.s=1,Et(16),f=!1),this.o=this.o&&f,!f)Bn(this.i,this.l,le,"[Invalid Chunked Response]"),In(this),Ni(this);else if(0<le.length&&!this.W){this.W=!0;var Ht=this.j;Ht.g==this&&Ht.ba&&!Ht.M&&(Ht.j.info("Great, no buffering proxy detected. Bytes received: "+le.length),Io(Ht),Ht.M=!0,Et(11))}}else Bn(this.i,this.l,le,null),vo(this,le);Gt==4&&In(this),this.o&&!this.J&&(Gt==4?du(this.j,this):(this.o=!1,Ms(this)))}else Fm(this.g),f==400&&0<le.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),In(this),Ni(this)}}}catch{}finally{}};function $c(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Em(a,u){var f=a.C,_=u.indexOf(`
`,f);return _==-1?po:(f=Number(u.substring(f,_)),isNaN(f)?Oc:(_+=1,_+f>u.length?po:(u=u.slice(_,_+f),a.C=_+f,u)))}Qr.prototype.cancel=function(){this.J=!0,In(this)};function Ms(a){a.S=Date.now()+a.I,Fc(a,a.I)}function Fc(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=cr(T(a.ba,a),u)}function go(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Qr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(bm(this.i,this.A),this.L!=2&&(Ot(),Et(17)),In(this),this.s=2,Ni(this)):Fc(this,this.S-a)};function Ni(a){a.j.G==0||a.J||du(a.j,a)}function In(a){go(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Je(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function vo(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||_o(f.h,a))){if(!a.K&&_o(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(u)}catch{_=null}if(Array.isArray(_)&&_.length==3){var M=_;if(M[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)qs(f),Bs(f);else break e;Eo(f),Et(18)}}else f.za=M[1],0<f.za-f.T&&37500>M[2]&&f.F&&f.v==0&&!f.C&&(f.C=cr(T(f.Za,f),6e3));if(1>=Bc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else An(f,11)}else if((a.K||f.g==a)&&qs(f),!z(u))for(M=f.Da.g.parse(u),u=0;u<M.length;u++){let ct=M[u];if(f.T=ct[0],ct=ct[1],f.G==2)if(ct[0]=="c"){f.K=ct[1],f.ia=ct[2];const Ht=ct[3];Ht!=null&&(f.la=Ht,f.j.info("VER="+f.la));const Gt=ct[4];Gt!=null&&(f.Aa=Gt,f.j.info("SVER="+f.Aa));const Hn=ct[5];Hn!=null&&typeof Hn=="number"&&0<Hn&&(_=1.5*Hn,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const mr=a.g;if(mr){const Gs=mr.g?mr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gs){var U=_.h;U.g||Gs.indexOf("spdy")==-1&&Gs.indexOf("quic")==-1&&Gs.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(yo(U,U.h),U.h=null))}if(_.D){const To=mr.g?mr.g.getResponseHeader("X-HTTP-Session-Id"):null;To&&(_.ya=To,bt(_.I,_.D,To))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var le=a;if(_.qa=pu(_,_.J?_.ia:null,_.W),le.K){jc(_.h,le);var _t=le,zt=_.L;zt&&(_t.I=zt),_t.B&&(go(_t),Ms(_t)),_.g=le}else cu(_);0<f.i.length&&js(f)}else ct[0]!="stop"&&ct[0]!="close"||An(f,7);else f.G==3&&(ct[0]=="stop"||ct[0]=="close"?ct[0]=="stop"?An(f,7):wo(f):ct[0]!="noop"&&f.l&&f.l.ta(ct),f.v=0)}}Ot(4)}catch{}}var Im=class{constructor(a,u){this.g=a,this.map=u}};function Uc(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Bc(a){return a.h?1:a.g?a.g.size:0}function _o(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function yo(a,u){a.g?a.g.add(u):a.h=u}function jc(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Uc.prototype.cancel=function(){if(this.i=qc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qc(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return $(a.i)}function Tm(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(d(a)){for(var u=[],f=a.length,_=0;_<f;_++)u.push(a[_]);return u}u=[],f=0;for(_ in a)u[f++]=a[_];return u}function Am(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(d(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const _ in a)u[f++]=_;return u}}}function Hc(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(d(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=Am(a),_=Tm(a),M=_.length,U=0;U<M;U++)u.call(void 0,_[U],f&&f[U],a)}var Gc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rm(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),M=null;if(0<=_){var U=a[f].substring(0,_);M=a[f].substring(_+1)}else U=a[f];u(U,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Tn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Tn){this.h=a.h,Os(this,a.j),this.o=a.o,this.g=a.g,Ls(this,a.s),this.l=a.l;var u=a.i,f=new Oi;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Wc(this,f),this.m=a.m}else a&&(u=String(a).match(Gc))?(this.h=!1,Os(this,u[1]||"",!0),this.o=Vi(u[2]||""),this.g=Vi(u[3]||"",!0),Ls(this,u[4]),this.l=Vi(u[5]||"",!0),Wc(this,u[6]||"",!0),this.m=Vi(u[7]||"")):(this.h=!1,this.i=new Oi(null,this.h))}Tn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Mi(u,Kc,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Mi(u,Kc,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Mi(f,f.charAt(0)=="/"?Sm:Cm,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Mi(f,xm)),a.join("")};function Or(a){return new Tn(a)}function Os(a,u,f){a.j=f?Vi(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ls(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Wc(a,u,f){u instanceof Oi?(a.i=u,Dm(a.i,a.h)):(f||(u=Mi(u,km)),a.i=new Oi(u,a.h))}function bt(a,u,f){a.i.set(u,f)}function $s(a){return bt(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Vi(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Mi(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,Pm),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Pm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Kc=/[#\/\?@]/g,Cm=/[#\?:]/g,Sm=/[#\?]/g,km=/[#\?@]/g,xm=/#/g;function Oi(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Xr(a){a.g||(a.g=new Map,a.h=0,a.i&&Rm(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}r=Oi.prototype,r.add=function(a,u){Xr(this),this.i=null,a=jn(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Qc(a,u){Xr(a),u=jn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Xc(a,u){return Xr(a),u=jn(a,u),a.g.has(u)}r.forEach=function(a,u){Xr(this),this.g.forEach(function(f,_){f.forEach(function(M){a.call(u,M,_,this)},this)},this)},r.na=function(){Xr(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let _=0;_<u.length;_++){const M=a[_];for(let U=0;U<M.length;U++)f.push(u[_])}return f},r.V=function(a){Xr(this);let u=[];if(typeof a=="string")Xc(this,a)&&(u=u.concat(this.g.get(jn(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},r.set=function(a,u){return Xr(this),this.i=null,a=jn(this,a),Xc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Jc(a,u,f){Qc(a,u),0<f.length&&(a.i=null,a.g.set(jn(a,u),$(f)),a.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var _=u[f];const U=encodeURIComponent(String(_)),le=this.V(_);for(_=0;_<le.length;_++){var M=U;le[_]!==""&&(M+="="+encodeURIComponent(String(le[_]))),a.push(M)}}return this.i=a.join("&")};function jn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Dm(a,u){u&&!a.j&&(Xr(a),a.i=null,a.g.forEach(function(f,_){var M=_.toLowerCase();_!=M&&(Qc(this,_),Jc(this,M,f))},a)),a.j=u}function Nm(a,u){const f=new it;if(l.Image){const _=new Image;_.onload=S(Jr,f,"TestLoadImage: loaded",!0,u,_),_.onerror=S(Jr,f,"TestLoadImage: error",!1,u,_),_.onabort=S(Jr,f,"TestLoadImage: abort",!1,u,_),_.ontimeout=S(Jr,f,"TestLoadImage: timeout",!1,u,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else u(!1)}function Vm(a,u){const f=new it,_=new AbortController,M=setTimeout(()=>{_.abort(),Jr(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:_.signal}).then(U=>{clearTimeout(M),U.ok?Jr(f,"TestPingServer: ok",!0,u):Jr(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(M),Jr(f,"TestPingServer: error",!1,u)})}function Jr(a,u,f,_,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),_(f)}catch{}}function Mm(){this.g=new Ke}function Om(a,u,f){const _=f||"";try{Hc(a,function(M,U){let le=M;h(M)&&(le=Ge(M)),u.push(_+U+"="+encodeURIComponent(le))})}catch(M){throw u.push(_+"type="+encodeURIComponent("_badmap")),M}}function Fs(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Fs,gt),Fs.prototype.g=function(){return new Us(this.l,this.j)},Fs.prototype.i=function(a){return function(){return a}}({});function Us(a,u){be.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Us,be),r=Us.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,$i(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Li(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,$i(this)),this.g&&(this.readyState=3,$i(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yc(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yc(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Li(this):$i(this),this.readyState==3&&Yc(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Li(this))},r.Qa=function(a){this.g&&(this.response=a,Li(this))},r.ga=function(){this.g&&Li(this)};function Li(a){a.readyState=4,a.l=null,a.j=null,a.v=null,$i(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function $i(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Zc(a){let u="";return L(a,function(f,_){u+=_,u+=":",u+=f,u+=`\r
`}),u}function bo(a,u,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=Zc(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):bt(a,u,f))}function Pt(a){be.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Pt,be);var Lm=/^https?$/i,$m=["POST","PUT"];r=Pt.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fo.g(),this.v=this.o?xe(this.o):xe(fo),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(U){eu(this,U);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var M in _)f.set(M,_[M]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const U of _.keys())f.set(U,_.get(U));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(U=>U.toLowerCase()=="content-type"),M=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call($m,u,void 0))||_||M||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,le]of f)this.g.setRequestHeader(U,le);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nu(this),this.u=!0,this.g.send(a),this.u=!1}catch(U){eu(this,U)}};function eu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,tu(a),zs(a)}function tu(a){a.A||(a.A=!0,fe(a,"complete"),fe(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,fe(this,"complete"),fe(this,"abort"),zs(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zs(this,!0)),Pt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ru(this):this.bb())},r.bb=function(){ru(this)};function ru(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Lr(a)!=4||a.Z()!=2)){if(a.u&&Lr(a)==4)$e(a.Ea,0,a);else if(fe(a,"readystatechange"),Lr(a)==4){a.h=!1;try{const le=a.Z();e:switch(le){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var _;if(_=le===0){var M=String(a.D).match(Gc)[1]||null;!M&&l.self&&l.self.location&&(M=l.self.location.protocol.slice(0,-1)),_=!Lm.test(M?M.toLowerCase():"")}f=_}if(f)fe(a,"complete"),fe(a,"success");else{a.m=6;try{var U=2<Lr(a)?a.g.statusText:""}catch{U=""}a.l=U+" ["+a.Z()+"]",tu(a)}}finally{zs(a)}}}}function zs(a,u){if(a.g){nu(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||fe(a,"ready");try{f.onreadystatechange=_}catch{}}}function nu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function Lr(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<Lr(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),We(u)}};function iu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Fm(a){const u={};a=(a.g&&2<=Lr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(z(a[_]))continue;var f=E(a[_]);const M=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const U=u[M]||[];u[M]=U,U.push(f)}b(u,function(_){return _.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fi(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function su(a){this.Aa=0,this.i=[],this.j=new it,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fi("baseRetryDelayMs",5e3,a),this.cb=Fi("retryDelaySeedMs",1e4,a),this.Wa=Fi("forwardChannelMaxRetries",2,a),this.wa=Fi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Uc(a&&a.concurrentRequestLimit),this.Da=new Mm,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=su.prototype,r.la=8,r.G=1,r.connect=function(a,u,f,_){Et(0),this.W=a,this.H=u||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=pu(this,null,this.W),js(this)};function wo(a){if(au(a),a.G==3){var u=a.U++,f=Or(a.I);if(bt(f,"SID",a.K),bt(f,"RID",u),bt(f,"TYPE","terminate"),Ui(a,f),u=new Qr(a,a.j,u),u.L=2,u.v=$s(Or(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=mu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ms(u)}fu(a)}function Bs(a){a.g&&(Io(a),a.g.cancel(),a.g=null)}function au(a){Bs(a),a.u&&(l.clearTimeout(a.u),a.u=null),qs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function js(a){if(!zc(a.h)&&!a.s){a.s=!0;var u=a.Ga;W||Pe(),oe||(W(),oe=!0),de.add(u,a),a.B=0}}function Um(a,u){return Bc(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=cr(T(a.Ga,a,u),hu(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const M=new Qr(this,this.j,a);let U=this.o;if(this.S&&(U?(U=v(U),A(U,this.S)):U=this.S),this.m!==null||this.O||(M.H=U,U=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(u+=_,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=lu(this,M,u),f=Or(this.I),bt(f,"RID",a),bt(f,"CVER",22),this.D&&bt(f,"X-HTTP-Session-Id",this.D),Ui(this,f),U&&(this.O?u="headers="+encodeURIComponent(String(Zc(U)))+"&"+u:this.m&&bo(f,this.m,U)),yo(this.h,M),this.Ua&&bt(f,"TYPE","init"),this.P?(bt(f,"$req",u),bt(f,"SID","null"),M.T=!0,mo(M,f,null)):mo(M,f,u),this.G=2}}else this.G==3&&(a?ou(this,a):this.i.length==0||zc(this.h)||ou(this))};function ou(a,u){var f;u?f=u.l:f=a.U++;const _=Or(a.I);bt(_,"SID",a.K),bt(_,"RID",f),bt(_,"AID",a.T),Ui(a,_),a.m&&a.o&&bo(_,a.m,a.o),f=new Qr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=lu(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),yo(a.h,f),mo(f,_,u)}function Ui(a,u){a.H&&L(a.H,function(f,_){bt(u,_,f)}),a.l&&Hc({},function(f,_){bt(u,_,f)})}function lu(a,u,f){f=Math.min(a.i.length,f);var _=a.l?T(a.l.Na,a.l,a):null;e:{var M=a.i;let U=-1;for(;;){const le=["count="+f];U==-1?0<f?(U=M[0].g,le.push("ofs="+U)):U=0:le.push("ofs="+U);let _t=!0;for(let zt=0;zt<f;zt++){let ct=M[zt].g;const Ht=M[zt].map;if(ct-=U,0>ct)U=Math.max(0,M[zt].g-100),_t=!1;else try{Om(Ht,le,"req"+ct+"_")}catch{_&&_(Ht)}}if(_t){_=le.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,_}function cu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;W||Pe(),oe||(W(),oe=!0),de.add(u,a),a.v=0}}function Eo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=cr(T(a.Fa,a),hu(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,uu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=cr(T(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Bs(this),uu(this))};function Io(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function uu(a){a.g=new Qr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Or(a.qa);bt(u,"RID","rpc"),bt(u,"SID",a.K),bt(u,"AID",a.T),bt(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&bt(u,"TO",a.ja),bt(u,"TYPE","xmlhttp"),Ui(a,u),a.m&&a.o&&bo(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=$s(Or(u)),f.m=null,f.P=!0,Lc(f,a)}r.Za=function(){this.C!=null&&(this.C=null,Bs(this),Eo(this),Et(19))};function qs(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function du(a,u){var f=null;if(a.g==u){qs(a),Io(a),a.g=null;var _=2}else if(_o(a.h,u))f=u.D,jc(a.h,u),_=1;else return;if(a.G!=0){if(u.o)if(_==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var M=a.B;_=Ut(),fe(_,new ot(_,f)),js(a)}else cu(a);else if(M=u.s,M==3||M==0&&0<u.X||!(_==1&&Um(a,u)||_==2&&Eo(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),M){case 1:An(a,5);break;case 4:An(a,10);break;case 3:An(a,6);break;default:An(a,2)}}}function hu(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function An(a,u){if(a.j.info("Error code "+u),u==2){var f=T(a.fb,a),_=a.Xa;const M=!_;_=new Tn(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Os(_,"https"),$s(_),M?Nm(_.toString(),f):Vm(_.toString(),f)}else Et(2);a.G=0,a.l&&a.l.sa(u),fu(a),au(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function fu(a){if(a.G=0,a.ka=[],a.l){const u=qc(a.h);(u.length!=0||a.i.length!=0)&&(O(a.ka,u),O(a.ka,a.i),a.h.i.length=0,$(a.i),a.i.length=0),a.l.ra()}}function pu(a,u,f){var _=f instanceof Tn?Or(f):new Tn(f);if(_.g!="")u&&(_.g=u+"."+_.g),Ls(_,_.s);else{var M=l.location;_=M.protocol,u=u?u+"."+M.hostname:M.hostname,M=+M.port;var U=new Tn(null);_&&Os(U,_),u&&(U.g=u),M&&Ls(U,M),f&&(U.l=f),_=U}return f=a.D,u=a.ya,f&&u&&bt(_,f,u),bt(_,"VER",a.la),Ui(a,_),_}function mu(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Pt(new Fs({eb:f})):new Pt(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function gu(){}r=gu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Hs(){}Hs.prototype.g=function(a,u){return new ur(a,u)};function ur(a,u){be.call(this),this.g=new su(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!z(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!z(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new qn(this)}k(ur,be),ur.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ur.prototype.close=function(){wo(this.g)},ur.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Ge(a),a=f);u.i.push(new Im(u.Ya++,a)),u.G==3&&js(u)},ur.prototype.N=function(){this.g.l=null,delete this.j,wo(this.g),delete this.g,ur.aa.N.call(this)};function vu(a){rt.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}k(vu,rt);function _u(){Rt.call(this),this.status=1}k(_u,Rt);function qn(a){this.g=a}k(qn,gu),qn.prototype.ua=function(){fe(this.g,"a")},qn.prototype.ta=function(a){fe(this.g,new vu(a))},qn.prototype.sa=function(a){fe(this.g,new _u)},qn.prototype.ra=function(){fe(this.g,"b")},Hs.prototype.createWebChannel=Hs.prototype.g,ur.prototype.send=ur.prototype.o,ur.prototype.open=ur.prototype.m,ur.prototype.close=ur.prototype.close,nf=function(){return new Hs},rf=function(){return Ut()},tf=St,Qo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ns.NO_ERROR=0,Ns.TIMEOUT=8,Ns.HTTP_ERROR=6,Zs=Ns,Vc.COMPLETE="complete",ef=Vc,Ce.EventType=Ne,Ne.OPEN="a",Ne.CLOSE="b",Ne.ERROR="c",Ne.MESSAGE="d",be.prototype.listen=be.prototype.K,Ki=Ce,Pt.prototype.listenOnce=Pt.prototype.L,Pt.prototype.getLastError=Pt.prototype.Ka,Pt.prototype.getLastErrorCode=Pt.prototype.Ba,Pt.prototype.getStatus=Pt.prototype.Z,Pt.prototype.getResponseJson=Pt.prototype.Oa,Pt.prototype.getResponseText=Pt.prototype.oa,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Ha,Zh=Pt}).apply(typeof Ws<"u"?Ws:typeof self<"u"?self:typeof window<"u"?window:{});const zu="@firebase/firestore",Bu="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Kt.UNAUTHENTICATED=new Kt(null),Kt.GOOGLE_CREDENTIALS=new Kt("google-credentials-uid"),Kt.FIRST_PARTY=new Kt("first-party-uid"),Kt.MOCK_USER=new Kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new xl("@firebase/firestore");function Wn(){return Nn.logLevel}function ve(r,...e){if(Nn.logLevel<=et.DEBUG){const t=e.map(Ml);Nn.debug(`Firestore (${Ti}): ${r}`,...t)}}function qr(r,...e){if(Nn.logLevel<=et.ERROR){const t=e.map(Ml);Nn.error(`Firestore (${Ti}): ${r}`,...t)}}function pi(r,...e){if(Nn.logLevel<=et.WARN){const t=e.map(Ml);Nn.warn(`Firestore (${Ti}): ${r}`,...t)}}function Ml(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(r="Unexpected state"){const e=`FIRESTORE (${Ti}) INTERNAL ASSERTION FAILED: `+r;throw qr(e),new Error(e)}function ft(r,e){r||Ve()}function ze(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ie extends Kr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Kt.UNAUTHENTICATED))}shutdown(){}}class x_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class D_{constructor(e){this.t=e,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ft(this.o===void 0);let n=this.i;const i=d=>this.i!==n?(n=this.i,t(d)):Promise.resolve();let s=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ur,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const d=s;e.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},l=d=>{ve("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(ve("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ur)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(ve("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(ft(typeof n.accessToken=="string"),new sf(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ft(e===null||typeof e=="string"),new Kt(e)}}class N_{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class V_{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new N_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ju{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M_{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,gr(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ft(this.o===void 0);const n=s=>{s.error!=null&&ve("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ve("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{ve("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ve("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new ju(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ft(typeof t.token=="string"),this.R=t.token,new ju(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=O_(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%62))}return n}}function Qe(r,e){return r<e?-1:r>e?1:0}function Xo(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=r.codePointAt(t),i=e.codePointAt(t);if(n!==i){if(n<128&&i<128)return Qe(n,i);{const s=af(),o=L_(s.encode(qu(r,t)),s.encode(qu(e,t)));return o!==0?o:Qe(n,i)}}t+=n>65535?2:1}return Qe(r.length,e.length)}function qu(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function L_(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Qe(r[t],e[t]);return Qe(r.length,e.length)}function mi(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=-62135596800,Gu=1e6;class Vt{static now(){return Vt.fromMillis(Date.now())}static fromDate(e){return Vt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Gu);return new Vt(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ie(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ie(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Hu)throw new Ie(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ie(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gu}_compareTo(e){return this.seconds===e.seconds?Qe(this.nanoseconds,e.nanoseconds):Qe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Hu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{static fromTimestamp(e){return new Fe(e)}static min(){return new Fe(new Vt(0,0))}static max(){return new Fe(new Vt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="__name__";class Pr{constructor(e,t,n){t===void 0?t=0:t>e.length&&Ve(),n===void 0?n=e.length-t:n>e.length-t&&Ve(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Pr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pr?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=Pr.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Qe(e.length,t.length)}static compareSegments(e,t){const n=Pr.isNumericId(e),i=Pr.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?Pr.extractNumericId(e).compare(Pr.extractNumericId(t)):Xo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cn.fromString(e.substring(4,e.length-2))}}class wt extends Pr{construct(e,t,n){return new wt(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Ie(J.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new wt(t)}static emptyPath(){return new wt([])}}const $_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends Pr{construct(e,t,n){return new jt(e,t,n)}static isValidIdentifier(e){return $_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wu}static keyField(){return new jt([Wu])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new Ie(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Ie(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new Ie(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=d,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(n+=l,i++):(s(),i++)}if(s(),o)throw new Ie(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(t)}static emptyPath(){return new jt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.path=e}static fromPath(e){return new Se(wt.fromString(e))}static fromName(e){return new Se(wt.fromString(e).popFirst(5))}static empty(){return new Se(wt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&wt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return wt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Se(new wt(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=-1;function F_(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=Fe.fromTimestamp(n===1e9?new Vt(t+1,0):new Vt(t,n));return new fn(i,Se.empty(),e)}function U_(r){return new fn(r.readTime,r.key,ls)}class fn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new fn(Fe.min(),Se.empty(),ls)}static max(){return new fn(Fe.max(),Se.empty(),ls)}}function z_(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=Se.comparator(r.documentKey,e.documentKey),t!==0?t:Qe(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class j_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(r){if(r.code!==J.FAILED_PRECONDITION||r.message!==B_)throw r;ve("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ve(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.reject(t)}static resolve(e){return new Q((t,n)=>{t(e)})}static reject(e){return new Q((t,n)=>{n(e)})}static waitFor(e){return new Q((t,n)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&t()},d=>n(d))}),o=!0,s===i&&t()})}static or(e){let t=Q.resolve(!1);for(const n of e)t=t.next(i=>i?Q.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new Q((n,i)=>{const s=e.length,o=new Array(s);let l=0;for(let d=0;d<s;d++){const h=d;t(e[h]).next(p=>{o[h]=p,++l,l===s&&n(o)},p=>i(p))}})}static doWhile(e,t){return new Q((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}function q_(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ri(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.oe(n),this._e=n=>t.writeSequenceNumber(n))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ua.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=-1;function za(r){return r==null}function fa(r){return r===0&&1/r==-1/0}function H_(r){return typeof r=="number"&&Number.isInteger(r)&&!fa(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="";function G_(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Ku(e)),e=W_(r.get(t),e);return Ku(e)}function W_(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case lf:t+="";break;default:t+=s}}return t}function Ku(r){return r+lf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function yn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function cf(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t){this.comparator=e,this.root=t||Bt.EMPTY}insert(e,t){return new At(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new At(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ks(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ks(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ks(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ks(this.root,e,this.comparator,!0)}}class Ks{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??Bt.RED,this.left=i??Bt.EMPTY,this.right=s??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new Bt(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Bt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ve();const e=this.left.check();if(e!==this.right.check())throw Ve();return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ve()}get value(){throw Ve()}get color(){throw Ve()}get left(){throw Ve()}get right(){throw Ve()}copy(e,t,n,i,s){return this}insert(e,t,n){return new Bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.comparator=e,this.data=new At(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xu(this.data.getIterator())}getIteratorFrom(e){return new Xu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof Mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Mt(this.comparator);return t.data=e,t}}class Xu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.fields=e,e.sort(jt.comparator)}static empty(){return new dr([])}unionWith(e){let t=new Mt(jt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new dr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new uf("Invalid base64 string: "+s):s}}(e);return new qt(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new qt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Qe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const K_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pn(r){if(ft(!!r),typeof r=="string"){let e=0;const t=K_.exec(r);if(ft(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Ct(r.seconds),nanos:Ct(r.nanos)}}function Ct(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function mn(r){return typeof r=="string"?qt.fromBase64String(r):qt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="server_timestamp",hf="__type__",ff="__previous_value__",pf="__local_write_time__";function Ll(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[hf])===null||t===void 0?void 0:t.stringValue)===df}function Ba(r){const e=r.mapValue.fields[ff];return Ll(e)?Ba(e):e}function cs(r){const e=pn(r.mapValue.fields[pf].timestampValue);return new Vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,t,n,i,s,o,l,d,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=h}}const pa="(default)";class us{constructor(e,t){this.projectId=e,this.database=t||pa}static empty(){return new us("","")}get isDefaultDatabase(){return this.database===pa}isEqual(e){return e instanceof us&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="__type__",X_="__max__",Qs={mapValue:{}},gf="__vector__",ma="value";function gn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ll(r)?4:Y_(r)?9007199254740991:J_(r)?10:11:Ve()}function Vr(r,e){if(r===e)return!0;const t=gn(r);if(t!==gn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return cs(r).isEqual(cs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=pn(i.timestampValue),l=pn(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return mn(i.bytesValue).isEqual(mn(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return Ct(i.geoPointValue.latitude)===Ct(s.geoPointValue.latitude)&&Ct(i.geoPointValue.longitude)===Ct(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ct(i.integerValue)===Ct(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ct(i.doubleValue),l=Ct(s.doubleValue);return o===l?fa(o)===fa(l):isNaN(o)&&isNaN(l)}return!1}(r,e);case 9:return mi(r.arrayValue.values||[],e.arrayValue.values||[],Vr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Qu(o)!==Qu(l))return!1;for(const d in o)if(o.hasOwnProperty(d)&&(l[d]===void 0||!Vr(o[d],l[d])))return!1;return!0}(r,e);default:return Ve()}}function ds(r,e){return(r.values||[]).find(t=>Vr(t,e))!==void 0}function gi(r,e){if(r===e)return 0;const t=gn(r),n=gn(e);if(t!==n)return Qe(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Qe(r.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ct(s.integerValue||s.doubleValue),d=Ct(o.integerValue||o.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(r,e);case 3:return Ju(r.timestampValue,e.timestampValue);case 4:return Ju(cs(r),cs(e));case 5:return Xo(r.stringValue,e.stringValue);case 6:return function(s,o){const l=mn(s),d=mn(o);return l.compareTo(d)}(r.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),d=o.split("/");for(let h=0;h<l.length&&h<d.length;h++){const p=Qe(l[h],d[h]);if(p!==0)return p}return Qe(l.length,d.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Qe(Ct(s.latitude),Ct(o.latitude));return l!==0?l:Qe(Ct(s.longitude),Ct(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Yu(r.arrayValue,e.arrayValue);case 10:return function(s,o){var l,d,h,p;const w=s.fields||{},T=o.fields||{},S=(l=w[ma])===null||l===void 0?void 0:l.arrayValue,k=(d=T[ma])===null||d===void 0?void 0:d.arrayValue,$=Qe(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((p=k==null?void 0:k.values)===null||p===void 0?void 0:p.length)||0);return $!==0?$:Yu(S,k)}(r.mapValue,e.mapValue);case 11:return function(s,o){if(s===Qs.mapValue&&o===Qs.mapValue)return 0;if(s===Qs.mapValue)return 1;if(o===Qs.mapValue)return-1;const l=s.fields||{},d=Object.keys(l),h=o.fields||{},p=Object.keys(h);d.sort(),p.sort();for(let w=0;w<d.length&&w<p.length;++w){const T=Xo(d[w],p[w]);if(T!==0)return T;const S=gi(l[d[w]],h[p[w]]);if(S!==0)return S}return Qe(d.length,p.length)}(r.mapValue,e.mapValue);default:throw Ve()}}function Ju(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Qe(r,e);const t=pn(r),n=pn(e),i=Qe(t.seconds,n.seconds);return i!==0?i:Qe(t.nanos,n.nanos)}function Yu(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=gi(t[i],n[i]);if(s)return s}return Qe(t.length,n.length)}function vi(r){return Jo(r)}function Jo(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=pn(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return mn(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return Se.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=Jo(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of n)s?s=!1:i+=",",i+=`${o}:${Jo(t.fields[o])}`;return i+"}"}(r.mapValue):Ve()}function ea(r){switch(gn(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ba(r);return e?16+ea(e):16;case 5:return 2*r.stringValue.length;case 6:return mn(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,s)=>i+ea(s),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return yn(n.fields,(s,o)=>{i+=s.length+ea(o)}),i}(r.mapValue);default:throw Ve()}}function Zu(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Yo(r){return!!r&&"integerValue"in r}function $l(r){return!!r&&"arrayValue"in r}function ed(r){return!!r&&"nullValue"in r}function td(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ta(r){return!!r&&"mapValue"in r}function J_(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[mf])===null||t===void 0?void 0:t.stringValue)===gf}function es(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return yn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=es(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=es(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Y_(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===X_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.value=e}static empty(){return new sr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ta(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=es(t)}setAll(e){let t=jt.emptyPath(),n={},i=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const d=this.getFieldsMap(t);this.applyChanges(d,n,i),n={},i=[],t=l.popLast()}o?n[l.lastSegment()]=es(o):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());ta(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Vr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];ta(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){yn(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new sr(es(this.value))}}function vf(r){const e=[];return yn(r.fields,(t,n)=>{const i=new jt([t]);if(ta(n)){const s=vf(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new dr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t,n,i,s,o,l){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Qt(e,0,Fe.min(),Fe.min(),Fe.min(),sr.empty(),0)}static newFoundDocument(e,t,n,i){return new Qt(e,1,t,Fe.min(),n,i,0)}static newNoDocument(e,t){return new Qt(e,2,t,Fe.min(),Fe.min(),sr.empty(),0)}static newUnknownDocument(e,t){return new Qt(e,3,t,Fe.min(),Fe.min(),sr.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t){this.position=e,this.inclusive=t}}function rd(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],o=r.position[i];if(s.field.isKeyField()?n=Se.comparator(Se.fromName(o.referenceValue),t.key):n=gi(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function nd(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Vr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t="asc"){this.field=e,this.dir=t}}function Z_(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{}class Nt extends _f{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new ty(e,t,n):t==="array-contains"?new iy(e,n):t==="in"?new sy(e,n):t==="not-in"?new ay(e,n):t==="array-contains-any"?new oy(e,n):new Nt(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new ry(e,n):new ny(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(gi(t,this.value)):t!==null&&gn(this.value)===gn(t)&&this.matchesComparison(gi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ve()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wr extends _f{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new wr(e,t)}matches(e){return yf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function yf(r){return r.op==="and"}function bf(r){return ey(r)&&yf(r)}function ey(r){for(const e of r.filters)if(e instanceof wr)return!1;return!0}function Zo(r){if(r instanceof Nt)return r.field.canonicalString()+r.op.toString()+vi(r.value);if(bf(r))return r.filters.map(e=>Zo(e)).join(",");{const e=r.filters.map(t=>Zo(t)).join(",");return`${r.op}(${e})`}}function wf(r,e){return r instanceof Nt?function(n,i){return i instanceof Nt&&n.op===i.op&&n.field.isEqual(i.field)&&Vr(n.value,i.value)}(r,e):r instanceof wr?function(n,i){return i instanceof wr&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,o,l)=>s&&wf(o,i.filters[l]),!0):!1}(r,e):void Ve()}function Ef(r){return r instanceof Nt?function(t){return`${t.field.canonicalString()} ${t.op} ${vi(t.value)}`}(r):r instanceof wr?function(t){return t.op.toString()+" {"+t.getFilters().map(Ef).join(" ,")+"}"}(r):"Filter"}class ty extends Nt{constructor(e,t,n){super(e,t,n),this.key=Se.fromName(n.referenceValue)}matches(e){const t=Se.comparator(e.key,this.key);return this.matchesComparison(t)}}class ry extends Nt{constructor(e,t){super(e,"in",t),this.keys=If("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ny extends Nt{constructor(e,t){super(e,"not-in",t),this.keys=If("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function If(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>Se.fromName(n.referenceValue))}class iy extends Nt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $l(t)&&ds(t.arrayValue,this.value)}}class sy extends Nt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ds(this.value.arrayValue,t)}}class ay extends Nt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ds(this.value.arrayValue,t)}}class oy extends Nt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$l(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>ds(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,t=null,n=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.le=null}}function id(r,e=null,t=[],n=[],i=null,s=null,o=null){return new ly(r,e,t,n,i,s,o)}function Fl(r){const e=ze(r);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Zo(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),za(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>vi(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>vi(n)).join(",")),e.le=t}return e.le}function Ul(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Z_(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!wf(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!nd(r.startAt,e.startAt)&&nd(r.endAt,e.endAt)}function el(r){return Se.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t=null,n=[],i=[],s=null,o="F",l=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=d,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function cy(r,e,t,n,i,s,o,l){return new Is(r,e,t,n,i,s,o,l)}function zl(r){return new Is(r)}function sd(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Tf(r){return r.collectionGroup!==null}function ts(r){const e=ze(r);if(e.he===null){e.he=[];const t=new Set;for(const s of e.explicitOrderBy)e.he.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Mt(jt.comparator);return o.filters.forEach(d=>{d.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.he.push(new va(s,n))}),t.has(jt.keyField().canonicalString())||e.he.push(new va(jt.keyField(),n))}return e.he}function kr(r){const e=ze(r);return e.Pe||(e.Pe=uy(e,ts(r))),e.Pe}function uy(r,e){if(r.limitType==="F")return id(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new va(i.field,s)});const t=r.endAt?new ga(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new ga(r.startAt.position,r.startAt.inclusive):null;return id(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function tl(r,e){const t=r.filters.concat([e]);return new Is(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function rl(r,e,t){return new Is(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function ja(r,e){return Ul(kr(r),kr(e))&&r.limitType===e.limitType}function Af(r){return`${Fl(kr(r))}|lt:${r.limitType}`}function Kn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>Ef(i)).join(", ")}]`),za(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>vi(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>vi(i)).join(",")),`Target(${n})`}(kr(r))}; limitType=${r.limitType})`}function qa(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Se.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of ts(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(o,l,d){const h=rd(o,l,d);return o.inclusive?h<=0:h<0}(n.startAt,ts(n),i)||n.endAt&&!function(o,l,d){const h=rd(o,l,d);return o.inclusive?h>=0:h>0}(n.endAt,ts(n),i))}(r,e)}function dy(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Rf(r){return(e,t)=>{let n=!1;for(const i of ts(r)){const s=hy(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function hy(r,e,t){const n=r.field.isKeyField()?Se.comparator(e.key,t.key):function(s,o,l){const d=o.data.field(s),h=l.data.field(s);return d!==null&&h!==null?gi(d,h):Ve()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return Ve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){yn(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return cf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=new At(Se.comparator);function Hr(){return fy}const Pf=new At(Se.comparator);function Qi(...r){let e=Pf;for(const t of r)e=e.insert(t.key,t);return e}function Cf(r){let e=Pf;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Pn(){return rs()}function Sf(){return rs()}function rs(){return new $n(r=>r.toString(),(r,e)=>r.isEqual(e))}const py=new At(Se.comparator),my=new Mt(Se.comparator);function tt(...r){let e=my;for(const t of r)e=e.add(t);return e}const gy=new Mt(Qe);function vy(){return gy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fa(e)?"-0":e}}function kf(r){return{integerValue:""+r}}function _y(r,e){return H_(e)?kf(e):Bl(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this._=void 0}}function yy(r,e,t){return r instanceof hs?function(i,s){const o={fields:{[hf]:{stringValue:df},[pf]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ll(s)&&(s=Ba(s)),s&&(o.fields[ff]=s),{mapValue:o}}(t,e):r instanceof fs?Df(r,e):r instanceof ps?Nf(r,e):function(i,s){const o=xf(i,s),l=ad(o)+ad(i.Ie);return Yo(o)&&Yo(i.Ie)?kf(l):Bl(i.serializer,l)}(r,e)}function by(r,e,t){return r instanceof fs?Df(r,e):r instanceof ps?Nf(r,e):t}function xf(r,e){return r instanceof _a?function(n){return Yo(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class hs extends Ha{}class fs extends Ha{constructor(e){super(),this.elements=e}}function Df(r,e){const t=Vf(e);for(const n of r.elements)t.some(i=>Vr(i,n))||t.push(n);return{arrayValue:{values:t}}}class ps extends Ha{constructor(e){super(),this.elements=e}}function Nf(r,e){let t=Vf(e);for(const n of r.elements)t=t.filter(i=>!Vr(i,n));return{arrayValue:{values:t}}}class _a extends Ha{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function ad(r){return Ct(r.integerValue||r.doubleValue)}function Vf(r){return $l(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,t){this.field=e,this.transform=t}}function Ey(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof fs&&i instanceof fs||n instanceof ps&&i instanceof ps?mi(n.elements,i.elements,Vr):n instanceof _a&&i instanceof _a?Vr(n.Ie,i.Ie):n instanceof hs&&i instanceof hs}(r.transform,e.transform)}class Iy{constructor(e,t){this.version=e,this.transformResults=t}}class pr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pr}static exists(e){return new pr(void 0,e)}static updateTime(e){return new pr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ra(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ga{}function Mf(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new jl(r.key,pr.none()):new Ts(r.key,r.data,pr.none());{const t=r.data,n=sr.empty();let i=new Mt(jt.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),i=i.add(s)}return new bn(r.key,n,new dr(i.toArray()),pr.none())}}function Ty(r,e,t){r instanceof Ts?function(i,s,o){const l=i.value.clone(),d=ld(i.fieldTransforms,s,o.transformResults);l.setAll(d),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):r instanceof bn?function(i,s,o){if(!ra(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=ld(i.fieldTransforms,s,o.transformResults),d=s.data;d.setAll(Of(i)),d.setAll(l),s.convertToFoundDocument(o.version,d).setHasCommittedMutations()}(r,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ns(r,e,t,n){return r instanceof Ts?function(s,o,l,d){if(!ra(s.precondition,o))return l;const h=s.value.clone(),p=cd(s.fieldTransforms,d,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof bn?function(s,o,l,d){if(!ra(s.precondition,o))return l;const h=cd(s.fieldTransforms,d,o),p=o.data;return p.setAll(Of(s)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(w=>w.field))}(r,e,t,n):function(s,o,l){return ra(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(r,e,t)}function Ay(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=xf(n.transform,i||null);s!=null&&(t===null&&(t=sr.empty()),t.set(n.field,s))}return t||null}function od(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&mi(n,i,(s,o)=>Ey(s,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Ts extends Ga{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class bn extends Ga{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Of(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function ld(r,e,t){const n=new Map;ft(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],o=s.transform,l=e.data.field(s.field);n.set(s.field,by(o,l,t[i]))}return n}function cd(r,e,t){const n=new Map;for(const i of r){const s=i.transform,o=t.data.field(i.field);n.set(i.field,yy(s,o,e))}return n}class jl extends Ga{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ry extends Ga{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Ty(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ns(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ns(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Sf();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=t.has(i.key)?null:l;const d=Mf(o,l);d!==null&&n.set(i.key,d),o.isValidDocument()||o.convertToNoDocument(Fe.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tt())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,(t,n)=>od(t,n))&&mi(this.baseMutations,e.baseMutations,(t,n)=>od(t,n))}}class ql{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){ft(e.mutations.length===n.length);let i=function(){return py}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new ql(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt,st;function ky(r){switch(r){case J.OK:return Ve();case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0;default:return Ve()}}function Lf(r){if(r===void 0)return qr("GRPC error has no .code"),J.UNKNOWN;switch(r){case xt.OK:return J.OK;case xt.CANCELLED:return J.CANCELLED;case xt.UNKNOWN:return J.UNKNOWN;case xt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case xt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case xt.INTERNAL:return J.INTERNAL;case xt.UNAVAILABLE:return J.UNAVAILABLE;case xt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case xt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case xt.NOT_FOUND:return J.NOT_FOUND;case xt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case xt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case xt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case xt.ABORTED:return J.ABORTED;case xt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case xt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case xt.DATA_LOSS:return J.DATA_LOSS;default:return Ve()}}(st=xt||(xt={}))[st.OK=0]="OK",st[st.CANCELLED=1]="CANCELLED",st[st.UNKNOWN=2]="UNKNOWN",st[st.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",st[st.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",st[st.NOT_FOUND=5]="NOT_FOUND",st[st.ALREADY_EXISTS=6]="ALREADY_EXISTS",st[st.PERMISSION_DENIED=7]="PERMISSION_DENIED",st[st.UNAUTHENTICATED=16]="UNAUTHENTICATED",st[st.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",st[st.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",st[st.ABORTED=10]="ABORTED",st[st.OUT_OF_RANGE=11]="OUT_OF_RANGE",st[st.UNIMPLEMENTED=12]="UNIMPLEMENTED",st[st.INTERNAL=13]="INTERNAL",st[st.UNAVAILABLE=14]="UNAVAILABLE",st[st.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new cn([4294967295,4294967295],0);function ud(r){const e=af().encode(r),t=new Yh;return t.update(e),new Uint8Array(t.digest())}function dd(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new cn([t,n],0),new cn([i,s],0)]}class Hl{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Xi(`Invalid padding: ${t}`);if(n<0)throw new Xi(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Xi(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Xi(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=cn.fromNumber(this.Ee)}Ae(e,t,n){let i=e.add(t.multiply(cn.fromNumber(n)));return i.compare(xy)===1&&(i=new cn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=ud(e),[n,i]=dd(t);for(let s=0;s<this.hashCount;s++){const o=this.Ae(n,i,s);if(!this.Re(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Hl(s,i,t);return n.forEach(l=>o.insert(l)),o}insert(e){if(this.Ee===0)return;const t=ud(e),[n,i]=dd(t);for(let s=0;s<this.hashCount;s++){const o=this.Ae(n,i,s);this.Ve(o)}}Ve(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Xi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,As.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Wa(Fe.min(),i,new At(Qe),Hr(),tt())}}class As{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new As(n,t,tt(),tt(),tt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t,n,i){this.me=e,this.removedTargetIds=t,this.key=n,this.fe=i}}class $f{constructor(e,t){this.targetId=e,this.ge=t}}class Ff{constructor(e,t,n=qt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class hd{constructor(){this.pe=0,this.ye=fd(),this.we=qt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=tt(),t=tt(),n=tt();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:Ve()}}),new As(this.we,this.Se,e,t,n)}Me(){this.be=!1,this.ye=fd()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ft(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Dy{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Hr(),this.$e=Xs(),this.Ue=Xs(),this.Ke=new At(Qe)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Ce(e.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(e.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(t);break;case 3:this.Je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Ce(e.resumeToken));break;default:Ve()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((n,i)=>{this.Je(i)&&t(i)})}Ze(e){const t=e.targetId,n=e.ge.count,i=this.Xe(t);if(i){const s=i.target;if(el(s))if(n===0){const o=new Se(s.path);this.ze(t,o,Qt.newNoDocument(o,Fe.min()))}else ft(n===1);else{const o=this.et(t);if(o!==n){const l=this.tt(e),d=l?this.nt(l,e,o):1;if(d!==0){this.Ye(t);const h=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,h)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let o,l;try{o=mn(n).toUint8Array()}catch(d){if(d instanceof uf)return pi("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new Hl(o,i,s)}catch(d){return pi(d instanceof Xi?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.Ee===0?null:l}nt(e,t,n){return t.ge.count===n-this.st(e,t.targetId)?0:2}st(e,t){const n=this.ke.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const o=this.ke.it(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.ze(t,s,null),i++)}),i}ot(e){const t=new Map;this.qe.forEach((s,o)=>{const l=this.Xe(o);if(l){if(s.current&&el(l.target)){const d=new Se(l.target.path);this._t(d).has(o)||this.ut(o,d)||this.ze(o,d,Qt.newNoDocument(d,e))}s.ve&&(t.set(o,s.Fe()),s.Me())}});let n=tt();this.Ue.forEach((s,o)=>{let l=!0;o.forEachWhile(d=>{const h=this.Xe(d);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new Wa(e,t,this.Ke,this.Qe,n);return this.Qe=Hr(),this.$e=Xs(),this.Ue=Xs(),this.Ke=new At(Qe),i}Ge(e,t){if(!this.Je(e))return;const n=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,n),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;const i=this.He(e);this.ut(e,t)?i.xe(t,1):i.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),n&&(this.Qe=this.Qe.insert(t,n))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new hd,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new Mt(Qe),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Mt(Qe),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||ve("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new hd),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Xs(){return new At(Se.comparator)}function fd(){return new At(Se.comparator)}const Ny={asc:"ASCENDING",desc:"DESCENDING"},Vy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},My={and:"AND",or:"OR"};class Oy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function nl(r,e){return r.useProto3Json||za(e)?e:{value:e}}function ya(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Uf(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Ly(r,e){return ya(r,e.toTimestamp())}function xr(r){return ft(!!r),Fe.fromTimestamp(function(t){const n=pn(t);return new Vt(n.seconds,n.nanos)}(r))}function Gl(r,e){return il(r,e).canonicalString()}function il(r,e){const t=function(i){return new wt(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function zf(r){const e=wt.fromString(r);return ft(Gf(e)),e}function sl(r,e){return Gl(r.databaseId,e.path)}function Mo(r,e){const t=zf(e);if(t.get(1)!==r.databaseId.projectId)throw new Ie(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new Ie(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new Se(jf(t))}function Bf(r,e){return Gl(r.databaseId,e)}function $y(r){const e=zf(r);return e.length===4?wt.emptyPath():jf(e)}function al(r){return new wt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function jf(r){return ft(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function pd(r,e,t){return{name:sl(r,e),fields:t.value.mapValue.fields}}function Fy(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Ve()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,p){return h.useProto3Json?(ft(p===void 0||typeof p=="string"),qt.fromBase64String(p||"")):(ft(p===void 0||p instanceof Buffer||p instanceof Uint8Array),qt.fromUint8Array(p||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?J.UNKNOWN:Lf(h.code);return new Ie(p,h.message||"")}(o);t=new Ff(n,i,s,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=Mo(r,n.document.name),s=xr(n.document.updateTime),o=n.document.createTime?xr(n.document.createTime):Fe.min(),l=new sr({mapValue:{fields:n.document.fields}}),d=Qt.newFoundDocument(i,s,o,l),h=n.targetIds||[],p=n.removedTargetIds||[];t=new na(h,p,d.key,d)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=Mo(r,n.document),s=n.readTime?xr(n.readTime):Fe.min(),o=Qt.newNoDocument(i,s),l=n.removedTargetIds||[];t=new na([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=Mo(r,n.document),s=n.removedTargetIds||[];t=new na([],s,i,null)}else{if(!("filter"in e))return Ve();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,o=new Sy(i,s),l=n.targetId;t=new $f(l,o)}}return t}function Uy(r,e){let t;if(e instanceof Ts)t={update:pd(r,e.key,e.value)};else if(e instanceof jl)t={delete:sl(r,e.key)};else if(e instanceof bn)t={update:pd(r,e.key,e.data),updateMask:Qy(e.fieldMask)};else{if(!(e instanceof Ry))return Ve();t={verify:sl(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,o){const l=o.transform;if(l instanceof hs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ps)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _a)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw Ve()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ly(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ve()}(r,e.precondition)),t}function zy(r,e){return r&&r.length>0?(ft(e!==void 0),r.map(t=>function(i,s){let o=i.updateTime?xr(i.updateTime):xr(s);return o.isEqual(Fe.min())&&(o=xr(s)),new Iy(o,i.transformResults||[])}(t,e))):[]}function By(r,e){return{documents:[Bf(r,e.path)]}}function jy(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Bf(r,i);const s=function(h){if(h.length!==0)return Hf(wr.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(p=>function(T){return{field:Qn(T.field),direction:Gy(T.dir)}}(p))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=nl(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:t,parent:i}}function qy(r){let e=$y(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){ft(n===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(w){const T=qf(w);return T instanceof wr&&bf(T)?T.getFilters():[T]}(t.where));let o=[];t.orderBy&&(o=function(w){return w.map(T=>function(k){return new va(Xn(k.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(T))}(t.orderBy));let l=null;t.limit&&(l=function(w){let T;return T=typeof w=="object"?w.value:w,za(T)?null:T}(t.limit));let d=null;t.startAt&&(d=function(w){const T=!!w.before,S=w.values||[];return new ga(S,T)}(t.startAt));let h=null;return t.endAt&&(h=function(w){const T=!w.before,S=w.values||[];return new ga(S,T)}(t.endAt)),cy(e,i,o,s,l,"F",d,h)}function Hy(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ve()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function qf(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Xn(t.unaryFilter.field);return Nt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Xn(t.unaryFilter.field);return Nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xn(t.unaryFilter.field);return Nt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xn(t.unaryFilter.field);return Nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Ve()}}(r):r.fieldFilter!==void 0?function(t){return Nt.create(Xn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ve()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return wr.create(t.compositeFilter.filters.map(n=>qf(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Ve()}}(t.compositeFilter.op))}(r):Ve()}function Gy(r){return Ny[r]}function Wy(r){return Vy[r]}function Ky(r){return My[r]}function Qn(r){return{fieldPath:r.canonicalString()}}function Xn(r){return jt.fromServerFormat(r.fieldPath)}function Hf(r){return r instanceof Nt?function(t){if(t.op==="=="){if(td(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NAN"}};if(ed(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(td(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NOT_NAN"}};if(ed(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qn(t.field),op:Wy(t.op),value:t.value}}}(r):r instanceof wr?function(t){const n=t.getFilters().map(i=>Hf(i));return n.length===1?n[0]:{compositeFilter:{op:Ky(t.op),filters:n}}}(r):Ve()}function Qy(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Gf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,n,i,s=Fe.min(),o=Fe.min(),l=qt.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(e){return new sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.Tt=e}}function Jy(r){const e=qy({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?rl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.Tn=new Zy}addToCollectionParentIndex(e,t){return this.Tn.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(fn.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(fn.min())}updateCollectionGroup(e,t,n){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class Zy{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Mt(wt.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Mt(wt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Wf=41943040;class ir{static withCacheSize(e){return new ir(e,ir.DEFAULT_COLLECTION_PERCENTILE,ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir.DEFAULT_COLLECTION_PERCENTILE=10,ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ir.DEFAULT=new ir(Wf,ir.DEFAULT_COLLECTION_PERCENTILE,ir.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ir.DISABLED=new ir(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new _i(0)}static Kn(){return new _i(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="LruGarbageCollector",eb=1048576;function vd([r,e],[t,n]){const i=Qe(r,t);return i===0?Qe(e,n):i}class tb{constructor(e){this.Hn=e,this.buffer=new Mt(vd),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();vd(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class rb{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ve(gd,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ri(t)?ve(gd,"Ignoring IndexedDB error during garbage collection: ",t):await Ai(t)}await this.er(3e5)})}}class nb{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return Q.resolve(Ua.ae);const n=new tb(t);return this.tr.forEachTarget(e,i=>n.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>n.Zn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.tr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ve("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(md)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(ve("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),md):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let n,i,s,o,l,d,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(ve("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,o=Date.now(),this.nthSequenceNumber(e,i))).next(w=>(n=w,l=Date.now(),this.removeTargets(e,n,t))).next(w=>(s=w,d=Date.now(),this.removeOrphanedDocuments(e,n))).next(w=>(h=Date.now(),Wn()<=et.DEBUG&&ve("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(d-l)+`ms
	Removed ${w} documents in `+(h-d)+`ms
Total Duration: ${h-p}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:w})))}}function ib(r,e){return new nb(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this.changes=new $n(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Qt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?Q.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&ns(n.mutation,i,dr.empty(),Vt.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,tt()).next(()=>n))}getLocalViewOfDocuments(e,t,n=tt()){const i=Pn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let o=Qi();return s.forEach((l,d)=>{o=o.insert(l,d.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=Pn();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tt()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,n,i){let s=Hr();const o=rs(),l=function(){return rs()}();return t.forEach((d,h)=>{const p=n.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof bn)?s=s.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),ns(p.mutation,h,p.mutation.getFieldMask(),Vt.now())):o.set(h.key,dr.empty())}),this.recalculateAndSaveOverlays(e,s).next(d=>(d.forEach((h,p)=>o.set(h,p)),t.forEach((h,p)=>{var w;return l.set(h,new ab(p,(w=o.get(h))!==null&&w!==void 0?w:null))}),l))}recalculateAndSaveOverlays(e,t){const n=rs();let i=new At((o,l)=>o-l),s=tt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(d=>{const h=t.get(d);if(h===null)return;let p=n.get(d)||dr.empty();p=l.applyToLocalView(h,p),n.set(d,p);const w=(i.get(l.batchId)||tt()).add(d);i=i.insert(l.batchId,w)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),h=d.key,p=d.value,w=Sf();p.forEach(T=>{if(!s.has(T)){const S=Mf(t.get(T),n.get(T));S!==null&&w.set(T,S),s=s.add(T)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,w))}return Q.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(o){return Se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Tf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):Q.resolve(Pn());let l=ls,d=s;return o.next(h=>Q.forEach(h,(p,w)=>(l<w.largestBatchId&&(l=w.largestBatchId),s.get(p)?Q.resolve():this.remoteDocumentCache.getEntry(e,p).next(T=>{d=d.insert(p,T)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,d,h,tt())).next(p=>({batchId:l,changes:Cf(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Se(t)).next(n=>{let i=Qi();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let o=Qi();return this.indexManager.getCollectionParents(e,s).next(l=>Q.forEach(l,d=>{const h=function(w,T){return new Is(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(t,d.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next(p=>{p.forEach((w,T)=>{o=o.insert(w,T)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(o=>{s.forEach((d,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,Qt.newInvalidDocument(p)))});let l=Qi();return o.forEach((d,h)=>{const p=s.get(d);p!==void 0&&ns(p.mutation,h,dr.empty(),Vt.now()),qa(t,h)&&(l=l.insert(d,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return Q.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:xr(i.createTime)}}(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:Jy(i.bundledQuery),readTime:xr(i.readTime)}}(t)),Q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(){this.overlays=new At(Se.comparator),this.Rr=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Pn();return Q.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.Et(e,t,s)}),Q.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Rr.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(n)),Q.resolve()}getOverlaysForCollection(e,t,n){const i=Pn(),s=t.length+1,o=new Se(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const d=l.getNext().value,h=d.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&d.largestBatchId>n&&i.set(d.getKey(),d)}return Q.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new At((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let p=s.get(h.largestBatchId);p===null&&(p=Pn(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Pn(),d=s.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=i)););return Q.resolve(l)}Et(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.Rr.get(i.largestBatchId).delete(n.key);this.Rr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Cy(t,n));let s=this.Rr.get(t);s===void 0&&(s=tt(),this.Rr.set(t,s)),this.Rr.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(){this.sessionToken=qt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.Vr=new Mt(Lt.mr),this.gr=new Mt(Lt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const n=new Lt(e,t);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.wr(new Lt(e,t))}Sr(e,t){e.forEach(n=>this.removeReference(n,t))}br(e){const t=new Se(new wt([])),n=new Lt(t,e),i=new Lt(t,e+1),s=[];return this.gr.forEachInRange([n,i],o=>{this.wr(o),s.push(o.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new Se(new wt([])),n=new Lt(t,e),i=new Lt(t,e+1);let s=tt();return this.gr.forEachInRange([n,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Lt(e,0),n=this.Vr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Lt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return Se.comparator(e.key,t.key)||Qe(e.Cr,t.Cr)}static pr(e,t){return Qe(e.Cr,t.Cr)||Se.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Mt(Lt.mr)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Py(s,t,n,i);this.mutationQueue.push(o);for(const l of i)this.Mr=this.Mr.add(new Lt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return Q.resolve(o)}lookupMutationBatch(e,t){return Q.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Nr(n),s=i<0?0:i;return Q.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?Ol:this.Fr-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Lt(t,0),i=new Lt(t,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([n,i],o=>{const l=this.Or(o.Cr);s.push(l)}),Q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Mt(Qe);return t.forEach(i=>{const s=new Lt(i,0),o=new Lt(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,o],l=>{n=n.add(l.Cr)})}),Q.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;Se.isDocumentKey(s)||(s=s.child(""));const o=new Lt(new Se(s),0);let l=new Mt(Qe);return this.Mr.forEachWhile(d=>{const h=d.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(l=l.add(d.Cr)),!0)},o),Q.resolve(this.Br(l))}Br(e){const t=[];return e.forEach(n=>{const i=this.Or(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ft(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Mr;return Q.forEach(t.mutations,i=>{const s=new Lt(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=n})}qn(e){}containsKey(e,t){const n=new Lt(t,0),i=this.Mr.firstAfterOrEqual(n);return Q.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.kr=e,this.docs=function(){return new At(Se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.kr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Q.resolve(n?n.document.mutableCopy():Qt.newInvalidDocument(t))}getEntries(e,t){let n=Hr();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():Qt.newInvalidDocument(i))}),Q.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Hr();const o=t.path,l=new Se(o.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:h,value:{document:p}}=d.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||z_(U_(p),n)<=0||(i.has(p.key)||qa(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return Q.resolve(s)}getAllFromCollectionGroup(e,t,n,i){Ve()}qr(e,t){return Q.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new fb(this)}getSize(e){return Q.resolve(this.size)}}class fb extends sb{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(n)}),Q.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.persistence=e,this.Qr=new $n(t=>Fl(t),Ul),this.lastRemoteSnapshotVersion=Fe.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Wl,this.targetCount=0,this.Kr=_i.Un()}forEachTarget(e,t){return this.Qr.forEach((n,i)=>t(i)),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$r&&(this.$r=t),Q.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new _i(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.zn(t),Q.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.Qr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),Q.waitFor(s).next(()=>i)}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const n=this.Qr.get(t)||null;return Q.resolve(n)}addMatchingKeys(e,t,n){return this.Ur.yr(t,n),Q.resolve()}removeMatchingKeys(e,t,n){this.Ur.Sr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),Q.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ur.vr(t);return Q.resolve(n)}containsKey(e,t){return Q.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Ua(0),this.zr=!1,this.zr=!0,this.jr=new ub,this.referenceDelegate=e(this),this.Hr=new pb(this),this.indexManager=new Yy,this.remoteDocumentCache=function(i){return new hb(i)}(n=>this.referenceDelegate.Jr(n)),this.serializer=new Xy(t),this.Yr=new lb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Wr[e.toKey()];return n||(n=new db(t,this.referenceDelegate),this.Wr[e.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,n){ve("MemoryPersistence","Starting transaction:",e);const i=new mb(this.Gr.next());return this.referenceDelegate.Zr(),n(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,t){return Q.or(Object.values(this.Wr).map(n=>()=>n.containsKey(e,t)))}}class mb extends j_{constructor(e){super(),this.currentSequenceNumber=e}}class Kl{constructor(e){this.persistence=e,this.ti=new Wl,this.ni=null}static ri(e){return new Kl(e)}get ii(){if(this.ni)return this.ni;throw Ve()}addReference(e,t,n){return this.ti.addReference(n,t),this.ii.delete(n.toString()),Q.resolve()}removeReference(e,t,n){return this.ti.removeReference(n,t),this.ii.add(n.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),Q.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(i=>this.ii.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.ii,n=>{const i=Se.fromPath(n);return this.si(e,i).next(s=>{s||t.removeEntry(i,Fe.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(n=>{n?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return Q.or([()=>Q.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class ba{constructor(e,t){this.persistence=e,this.oi=new $n(n=>G_(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=ib(this,t)}static ri(e,t){return new ba(e,t)}Zr(){}Xr(e){return Q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}sr(e){let t=0;return this.rr(e,n=>{t++}).next(()=>t)}rr(e,t){return Q.forEach(this.oi,(n,i)=>this.ar(e,n,i).next(s=>s?Q.resolve():t(i)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,o=>this.ar(e,o,t).next(l=>{l||(n++,s.removeEntry(o,Fe.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),Q.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),Q.resolve()}removeReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),Q.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ea(e.data.value)),t}ar(e,t,n){return Q.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.oi.get(t);return Q.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Hi=n,this.Ji=i}static Yi(e,t){let n=tt(),i=tt();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ql(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return hv()?8:q_(Yt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.rs(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ss(e,t,i,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new gb;return this._s(e,t,o).next(l=>{if(s.result=l,this.Xi)return this.us(e,t,o,l.size)})}).next(()=>s.result)}us(e,t,n,i){return n.documentReadCount<this.es?(Wn()<=et.DEBUG&&ve("QueryEngine","SDK will not create cache indexes for query:",Kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),Q.resolve()):(Wn()<=et.DEBUG&&ve("QueryEngine","Query:",Kn(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ts*i?(Wn()<=et.DEBUG&&ve("QueryEngine","The SDK decides to create cache indexes for query:",Kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kr(t))):Q.resolve())}rs(e,t){if(sd(t))return Q.resolve(null);let n=kr(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=rl(t,null,"F"),n=kr(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const o=tt(...s);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,n).next(d=>{const h=this.cs(t,l);return this.ls(t,h,o,d.readTime)?this.rs(e,rl(t,null,"F")):this.hs(e,h,t,d)}))})))}ss(e,t,n,i){return sd(t)||i.isEqual(Fe.min())?Q.resolve(null):this.ns.getDocuments(e,n).next(s=>{const o=this.cs(t,s);return this.ls(t,o,n,i)?Q.resolve(null):(Wn()<=et.DEBUG&&ve("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Kn(t)),this.hs(e,o,t,F_(i,ls)).next(l=>l))})}cs(e,t){let n=new Mt(Rf(e));return t.forEach((i,s)=>{qa(e,s)&&(n=n.add(s))}),n}ls(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,t,n){return Wn()<=et.DEBUG&&ve("QueryEngine","Using full collection scan to execute query:",Kn(t)),this.ns.getDocumentsMatchingQuery(e,t,fn.min(),n)}hs(e,t,n,i){return this.ns.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="LocalStore",_b=3e8;class yb{constructor(e,t,n,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new At(Qe),this.Is=new $n(s=>Fl(s),Ul),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(n)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ob(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function bb(r,e,t,n){return new yb(r,e,t,n)}async function Qf(r,e){const t=ze(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.As(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],l=[];let d=tt();for(const h of i){o.push(h.batchId);for(const p of h.mutations)d=d.add(p.key)}for(const h of s){l.push(h.batchId);for(const p of h.mutations)d=d.add(p.key)}return t.localDocuments.getDocuments(n,d).next(h=>({Rs:h,removedBatchIds:o,addedBatchIds:l}))})})}function wb(r,e){const t=ze(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.ds.newChangeBuffer({trackRemovals:!0});return function(l,d,h,p){const w=h.batch,T=w.keys();let S=Q.resolve();return T.forEach(k=>{S=S.next(()=>p.getEntry(d,k)).next($=>{const O=h.docVersions.get(k);ft(O!==null),$.version.compareTo(O)<0&&(w.applyToRemoteDocument($,h),$.isValidDocument()&&($.setReadTime(h.commitVersion),p.addEntry($)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(d,w))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let d=tt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(d=d.add(l.batch.mutations[h].key));return d}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function Xf(r){const e=ze(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function Eb(r,e){const t=ze(r),n=e.snapshotVersion;let i=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.ds.newChangeBuffer({trackRemovals:!0});i=t.Ts;const l=[];e.targetChanges.forEach((p,w)=>{const T=i.get(w);if(!T)return;l.push(t.Hr.removeMatchingKeys(s,p.removedDocuments,w).next(()=>t.Hr.addMatchingKeys(s,p.addedDocuments,w)));let S=T.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(w)!==null?S=S.withResumeToken(qt.EMPTY_BYTE_STRING,Fe.min()).withLastLimboFreeSnapshotVersion(Fe.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,n)),i=i.insert(w,S),function($,O,ee){return $.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=_b?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0}(T,S,p)&&l.push(t.Hr.updateTargetData(s,S))});let d=Hr(),h=tt();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(Ib(s,o,e.documentUpdates).next(p=>{d=p.Vs,h=p.fs})),!n.isEqual(Fe.min())){const p=t.Hr.getLastRemoteSnapshotVersion(s).next(w=>t.Hr.setTargetsMetadata(s,s.currentSequenceNumber,n));l.push(p)}return Q.waitFor(l).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,d,h)).next(()=>d)}).then(s=>(t.Ts=i,s))}function Ib(r,e,t){let n=tt(),i=tt();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let o=Hr();return t.forEach((l,d)=>{const h=s.get(l);d.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),d.isNoDocument()&&d.version.isEqual(Fe.min())?(e.removeEntry(l,d.readTime),o=o.insert(l,d)):!h.isValidDocument()||d.version.compareTo(h.version)>0||d.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(d),o=o.insert(l,d)):ve(Xl,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",d.version)}),{Vs:o,fs:i}})}function Tb(r,e){const t=ze(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Ol),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Ab(r,e){const t=ze(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Hr.getTargetData(n,e).next(s=>s?(i=s,Q.resolve(i)):t.Hr.allocateTargetId(n).next(o=>(i=new sn(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Hr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.Ts.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(n.targetId,n),t.Is.set(e,n.targetId)),n})}async function ol(r,e,t){const n=ze(r),i=n.Ts.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ri(o))throw o;ve(Xl,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ts=n.Ts.remove(e),n.Is.delete(i.target)}function _d(r,e,t){const n=ze(r);let i=Fe.min(),s=tt();return n.persistence.runTransaction("Execute query","readwrite",o=>function(d,h,p){const w=ze(d),T=w.Is.get(p);return T!==void 0?Q.resolve(w.Ts.get(T)):w.Hr.getTargetData(h,p)}(n,o,kr(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.Hr.getMatchingKeysForTargetId(o,l.targetId).next(d=>{s=d})}).next(()=>n.Ps.getDocumentsMatchingQuery(o,e,t?i:Fe.min(),t?s:tt())).next(l=>(Rb(n,dy(e),l),{documents:l,gs:s})))}function Rb(r,e,t){let n=r.Es.get(e)||Fe.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.Es.set(e,n)}class yd{constructor(){this.activeTargetIds=vy()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Pb{constructor(){this.ho=new yd,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,n){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new yd,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="ConnectivityMonitor";class wd{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ve(bd,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ve(bd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js=null;function ll(){return Js===null?Js=function(){return 268435456+Math.round(2147483648*Math.random())}():Js++,"0x"+Js.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="RestConnection",Sb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kb{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${i}`,this.wo=this.databaseId.database===pa?`project_id=${n}`:`project_id=${n}&database_id=${i}`}So(e,t,n,i,s){const o=ll(),l=this.bo(e,t.toUriEncodedString());ve(Oo,`Sending RPC '${e}' ${o}:`,l,n);const d={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(d,i,s),this.vo(e,l,d,n).then(h=>(ve(Oo,`Received RPC '${e}' ${o}: `,h),h),h=>{throw pi(Oo,`RPC '${e}' ${o} failed with error: `,h,"url: ",l,"request:",n),h})}Co(e,t,n,i,s,o){return this.So(e,t,n,i,s)}Do(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ti}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),n&&n.headers.forEach((i,s)=>e[s]=i)}bo(e,t){const n=Sb[e];return`${this.po}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="WebChannelConnection";class Db extends kb{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,i){const s=ll();return new Promise((o,l)=>{const d=new Zh;d.setWithCredentials(!0),d.listenOnce(ef.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Zs.NO_ERROR:const p=d.getResponseJson();ve(Wt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),o(p);break;case Zs.TIMEOUT:ve(Wt,`RPC '${e}' ${s} timed out`),l(new Ie(J.DEADLINE_EXCEEDED,"Request time out"));break;case Zs.HTTP_ERROR:const w=d.getStatus();if(ve(Wt,`RPC '${e}' ${s} failed with status:`,w,"response text:",d.getResponseText()),w>0){let T=d.getResponseJson();Array.isArray(T)&&(T=T[0]);const S=T==null?void 0:T.error;if(S&&S.status&&S.message){const k=function(O){const ee=O.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(ee)>=0?ee:J.UNKNOWN}(S.status);l(new Ie(k,S.message))}else l(new Ie(J.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new Ie(J.UNAVAILABLE,"Connection failed."));break;default:Ve()}}finally{ve(Wt,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);ve(Wt,`RPC '${e}' ${s} sending request:`,i),d.send(t,"POST",h,n,15)})}Wo(e,t,n){const i=ll(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nf(),l=rf(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(d.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Do(d.initMessageHeaders,t,n),d.encodeInitMessageHeaders=!0;const p=s.join("");ve(Wt,`Creating RPC '${e}' stream ${i}: ${p}`,d);const w=o.createWebChannel(p,d);let T=!1,S=!1;const k=new xb({Fo:O=>{S?ve(Wt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(T||(ve(Wt,`Opening RPC '${e}' stream ${i} transport.`),w.open(),T=!0),ve(Wt,`RPC '${e}' stream ${i} sending:`,O),w.send(O))},Mo:()=>w.close()}),$=(O,ee,z)=>{O.listen(ee,V=>{try{z(V)}catch(D){setTimeout(()=>{throw D},0)}})};return $(w,Ki.EventType.OPEN,()=>{S||(ve(Wt,`RPC '${e}' stream ${i} transport opened.`),k.Qo())}),$(w,Ki.EventType.CLOSE,()=>{S||(S=!0,ve(Wt,`RPC '${e}' stream ${i} transport closed`),k.Uo())}),$(w,Ki.EventType.ERROR,O=>{S||(S=!0,pi(Wt,`RPC '${e}' stream ${i} transport errored:`,O),k.Uo(new Ie(J.UNAVAILABLE,"The operation could not be completed")))}),$(w,Ki.EventType.MESSAGE,O=>{var ee;if(!S){const z=O.data[0];ft(!!z);const V=z,D=(V==null?void 0:V.error)||((ee=V[0])===null||ee===void 0?void 0:ee.error);if(D){ve(Wt,`RPC '${e}' stream ${i} received error:`,D);const x=D.status;let L=function(I){const A=xt[I];if(A!==void 0)return Lf(A)}(x),b=D.message;L===void 0&&(L=J.INTERNAL,b="Unknown error status: "+x+" with message "+D.message),S=!0,k.Uo(new Ie(L,b)),w.close()}else ve(Wt,`RPC '${e}' stream ${i} received:`,z),k.Ko(z)}}),$(l,tf.STAT_EVENT,O=>{O.stat===Qo.PROXY?ve(Wt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===Qo.NOPROXY&&ve(Wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function Lo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(r){return new Oy(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=t,this.Go=n,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-n);i>0&&ve("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="PersistentStream";class Yf{constructor(e,t,n,i,s,o,l,d){this.Ti=e,this.n_=n,this.r_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Jf(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===J.RESOURCE_EXHAUSTED?(qr(t.toString()),qr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.i_===t&&this.V_(n,i)},n=>{e(()=>{const i=new Ie(J.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(i)})})}V_(e,t){const n=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{n(()=>this.m_(i))}),this.stream.onMessage(i=>{n(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ve(Ed,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(ve(Ed,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nb extends Yf{constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=Fy(this.serializer,e),n=function(s){if(!("targetChange"in s))return Fe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Fe.min():o.readTime?xr(o.readTime):Fe.min()}(e);return this.listener.p_(t,n)}y_(e){const t={};t.database=al(this.serializer),t.addTarget=function(s,o){let l;const d=o.target;if(l=el(d)?{documents:By(s,d)}:{query:jy(s,d).ht},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Uf(s,o.resumeToken);const h=nl(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Fe.min())>0){l.readTime=ya(s,o.snapshotVersion.toTimestamp());const h=nl(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const n=Hy(this.serializer,e);n&&(t.labels=n),this.I_(t)}w_(e){const t={};t.database=al(this.serializer),t.removeTarget=e,this.I_(t)}}class Vb extends Yf{constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ft(!!e.streamToken),this.lastStreamToken=e.streamToken,ft(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ft(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=zy(e.writeResults,e.commitTime),n=xr(e.commitTime);return this.listener.v_(n,t)}C_(){const e={};e.database=al(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Uy(this.serializer,n))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{}class Ob extends Mb{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new Ie(J.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,il(t,n),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Ie(J.UNKNOWN,s.toString())})}Co(e,t,n,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,il(t,n),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Ie(J.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Lb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(qr(t),this.N_=!1):ve("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="RemoteStore";class $b{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(o=>{n.enqueueAndForget(async()=>{Fn(this)&&(ve(Vn,"Restarting streams for network reachability change."),await async function(d){const h=ze(d);h.W_.add(4),await Rs(h),h.j_.set("Unknown"),h.W_.delete(4),await Qa(h)}(this))})}),this.j_=new Lb(n,i)}}async function Qa(r){if(Fn(r))for(const e of r.G_)await e(!0)}async function Rs(r){for(const e of r.G_)await e(!1)}function Zf(r,e){const t=ze(r);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),ec(t)?Zl(t):Pi(t).c_()&&Yl(t,e))}function Jl(r,e){const t=ze(r),n=Pi(t);t.K_.delete(e),n.c_()&&ep(t,e),t.K_.size===0&&(n.c_()?n.P_():Fn(t)&&t.j_.set("Unknown"))}function Yl(r,e){if(r.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Fe.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Pi(r).y_(e)}function ep(r,e){r.H_.Ne(e),Pi(r).w_(e)}function Zl(r){r.H_=new Dy({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>r.K_.get(e)||null,it:()=>r.datastore.serializer.databaseId}),Pi(r).start(),r.j_.B_()}function ec(r){return Fn(r)&&!Pi(r).u_()&&r.K_.size>0}function Fn(r){return ze(r).W_.size===0}function tp(r){r.H_=void 0}async function Fb(r){r.j_.set("Online")}async function Ub(r){r.K_.forEach((e,t)=>{Yl(r,e)})}async function zb(r,e){tp(r),ec(r)?(r.j_.q_(e),Zl(r)):r.j_.set("Unknown")}async function Bb(r,e,t){if(r.j_.set("Online"),e instanceof Ff&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.K_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.K_.delete(l),i.H_.removeTarget(l))}(r,e)}catch(n){ve(Vn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await wa(r,n)}else if(e instanceof na?r.H_.We(e):e instanceof $f?r.H_.Ze(e):r.H_.je(e),!t.isEqual(Fe.min()))try{const n=await Xf(r.localStore);t.compareTo(n)>=0&&await function(s,o){const l=s.H_.ot(o);return l.targetChanges.forEach((d,h)=>{if(d.resumeToken.approximateByteSize()>0){const p=s.K_.get(h);p&&s.K_.set(h,p.withResumeToken(d.resumeToken,o))}}),l.targetMismatches.forEach((d,h)=>{const p=s.K_.get(d);if(!p)return;s.K_.set(d,p.withResumeToken(qt.EMPTY_BYTE_STRING,p.snapshotVersion)),ep(s,d);const w=new sn(p.target,d,h,p.sequenceNumber);Yl(s,w)}),s.remoteSyncer.applyRemoteEvent(l)}(r,t)}catch(n){ve(Vn,"Failed to raise snapshot:",n),await wa(r,n)}}async function wa(r,e,t){if(!Ri(e))throw e;r.W_.add(1),await Rs(r),r.j_.set("Offline"),t||(t=()=>Xf(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ve(Vn,"Retrying IndexedDB access"),await t(),r.W_.delete(1),await Qa(r)})}function rp(r,e){return e().catch(t=>wa(r,t,e))}async function Xa(r){const e=ze(r),t=vn(e);let n=e.U_.length>0?e.U_[e.U_.length-1].batchId:Ol;for(;jb(e);)try{const i=await Tb(e.localStore,n);if(i===null){e.U_.length===0&&t.P_();break}n=i.batchId,qb(e,i)}catch(i){await wa(e,i)}np(e)&&ip(e)}function jb(r){return Fn(r)&&r.U_.length<10}function qb(r,e){r.U_.push(e);const t=vn(r);t.c_()&&t.S_&&t.b_(e.mutations)}function np(r){return Fn(r)&&!vn(r).u_()&&r.U_.length>0}function ip(r){vn(r).start()}async function Hb(r){vn(r).C_()}async function Gb(r){const e=vn(r);for(const t of r.U_)e.b_(t.mutations)}async function Wb(r,e,t){const n=r.U_.shift(),i=ql.from(n,e,t);await rp(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Xa(r)}async function Kb(r,e){e&&vn(r).S_&&await async function(n,i){if(function(o){return ky(o)&&o!==J.ABORTED}(i.code)){const s=n.U_.shift();vn(n).h_(),await rp(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Xa(n)}}(r,e),np(r)&&ip(r)}async function Id(r,e){const t=ze(r);t.asyncQueue.verifyOperationInProgress(),ve(Vn,"RemoteStore received new credentials");const n=Fn(t);t.W_.add(3),await Rs(t),n&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Qa(t)}async function Qb(r,e){const t=ze(r);e?(t.W_.delete(2),await Qa(t)):e||(t.W_.add(2),await Rs(t),t.j_.set("Unknown"))}function Pi(r){return r.J_||(r.J_=function(t,n,i){const s=ze(t);return s.M_(),new Nb(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{xo:Fb.bind(null,r),No:Ub.bind(null,r),Lo:zb.bind(null,r),p_:Bb.bind(null,r)}),r.G_.push(async e=>{e?(r.J_.h_(),ec(r)?Zl(r):r.j_.set("Unknown")):(await r.J_.stop(),tp(r))})),r.J_}function vn(r){return r.Y_||(r.Y_=function(t,n,i){const s=ze(t);return s.M_(),new Vb(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:Hb.bind(null,r),Lo:Kb.bind(null,r),D_:Gb.bind(null,r),v_:Wb.bind(null,r)}),r.G_.push(async e=>{e?(r.Y_.h_(),await Xa(r)):(await r.Y_.stop(),r.U_.length>0&&(ve(Vn,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const o=Date.now()+n,l=new tc(e,t,o,i,s);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ie(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rc(r,e){if(qr("AsyncQueue",`${e}: ${r}`),Ri(r))return new Ie(J.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{static emptySet(e){return new ri(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Se.comparator(t.key,n.key):(t,n)=>Se.comparator(t.key,n.key),this.keyedMap=Qi(),this.sortedSet=new At(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ri)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new ri;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.Z_=new At(Se.comparator)}track(e){const t=e.doc.key,n=this.Z_.get(t);n?e.type!==0&&n.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&n.type!==1?this.Z_=this.Z_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Z_=this.Z_.remove(t):e.type===1&&n.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Ve():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class yi{constructor(e,t,n,i,s,o,l,d,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new yi(e,t,ri.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ja(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class Jb{constructor(){this.queries=Ad(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,n){const i=ze(t),s=i.queries;i.queries=Ad(),s.forEach((o,l)=>{for(const d of l.ta)d.onError(n)})})(this,new Ie(J.ABORTED,"Firestore shutting down"))}}function Ad(){return new $n(r=>Af(r),ja)}async function sp(r,e){const t=ze(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.na()&&e.ra()&&(n=2):(s=new Xb,n=e.ra()?0:1);try{switch(n){case 0:s.ea=await t.onListen(i,!0);break;case 1:s.ea=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=rc(o,`Initialization of query '${Kn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.ta.push(e),e.sa(t.onlineState),s.ea&&e.oa(s.ea)&&nc(t)}async function ap(r,e){const t=ze(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const o=s.ta.indexOf(e);o>=0&&(s.ta.splice(o,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Yb(r,e){const t=ze(r);let n=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const l of o.ta)l.oa(i)&&(n=!0);o.ea=i}}n&&nc(t)}function Zb(r,e,t){const n=ze(r),i=n.queries.get(e);if(i)for(const s of i.ta)s.onError(t);n.queries.delete(e)}function nc(r){r.ia.forEach(e=>{e.next()})}var cl,Rd;(Rd=cl||(cl={}))._a="default",Rd.Cache="cache";class op{constructor(e,t,n){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new yi(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const n=t!=="Offline";return(!this.options.Ta||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==cl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this.key=e}}class cp{constructor(e){this.key=e}}class e0{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=tt(),this.mutatedKeys=tt(),this.ya=Rf(e),this.wa=new ri(this.ya)}get Sa(){return this.fa}ba(e,t){const n=t?t.Da:new Td,i=t?t.wa:this.wa;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,w)=>{const T=i.get(p),S=qa(this.query,w)?w:null,k=!!T&&this.mutatedKeys.has(T.key),$=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let O=!1;T&&S?T.data.isEqual(S.data)?k!==$&&(n.track({type:3,doc:S}),O=!0):this.va(T,S)||(n.track({type:2,doc:S}),O=!0,(d&&this.ya(S,d)>0||h&&this.ya(S,h)<0)&&(l=!0)):!T&&S?(n.track({type:0,doc:S}),O=!0):T&&!S&&(n.track({type:1,doc:T}),O=!0,(d||h)&&(l=!0)),O&&(S?(o=o.add(S),s=$?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),n.track({type:1,doc:p})}return{wa:o,Da:n,ls:l,mutatedKeys:s}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((p,w)=>function(S,k){const $=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ve()}};return $(S)-$(k)}(p.type,w.type)||this.ya(p.doc,w.doc)),this.Ca(n),i=i!=null&&i;const l=t&&!i?this.Fa():[],d=this.pa.size===0&&this.current&&!i?1:0,h=d!==this.ga;return this.ga=d,o.length!==0||h?{snapshot:new yi(this.query,e.wa,s,o,e.mutatedKeys,d===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Td,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=tt(),this.wa.forEach(n=>{this.xa(n.key)&&(this.pa=this.pa.add(n.key))});const t=[];return e.forEach(n=>{this.pa.has(n)||t.push(new cp(n))}),this.pa.forEach(n=>{e.has(n)||t.push(new lp(n))}),t}Oa(e){this.fa=e.gs,this.pa=tt();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return yi.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ic="SyncEngine";class t0{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class r0{constructor(e){this.key=e,this.Ba=!1}}class n0{constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new $n(l=>Af(l),ja),this.qa=new Map,this.Qa=new Set,this.$a=new At(Se.comparator),this.Ua=new Map,this.Ka=new Wl,this.Wa={},this.Ga=new Map,this.za=_i.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function i0(r,e,t=!0){const n=mp(r);let i;const s=n.ka.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await up(n,e,t,!0),i}async function s0(r,e){const t=mp(r);await up(t,e,!0,!1)}async function up(r,e,t,n){const i=await Ab(r.localStore,kr(e)),s=i.targetId,o=r.sharedClientState.addLocalQueryTarget(s,t);let l;return n&&(l=await a0(r,e,s,o==="current",i.resumeToken)),r.isPrimaryClient&&t&&Zf(r.remoteStore,i),l}async function a0(r,e,t,n,i){r.Ha=(w,T,S)=>async function($,O,ee,z){let V=O.view.ba(ee);V.ls&&(V=await _d($.localStore,O.query,!1).then(({documents:b})=>O.view.ba(b,V)));const D=z&&z.targetChanges.get(O.targetId),x=z&&z.targetMismatches.get(O.targetId)!=null,L=O.view.applyChanges(V,$.isPrimaryClient,D,x);return Cd($,O.targetId,L.Ma),L.snapshot}(r,w,T,S);const s=await _d(r.localStore,e,!0),o=new e0(e,s.gs),l=o.ba(s.documents),d=As.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=o.applyChanges(l,r.isPrimaryClient,d);Cd(r,t,h.Ma);const p=new t0(e,t,o);return r.ka.set(e,p),r.qa.has(t)?r.qa.get(t).push(e):r.qa.set(t,[e]),h.snapshot}async function o0(r,e,t){const n=ze(r),i=n.ka.get(e),s=n.qa.get(i.targetId);if(s.length>1)return n.qa.set(i.targetId,s.filter(o=>!ja(o,e))),void n.ka.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ol(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&Jl(n.remoteStore,i.targetId),ul(n,i.targetId)}).catch(Ai)):(ul(n,i.targetId),await ol(n.localStore,i.targetId,!0))}async function l0(r,e){const t=ze(r),n=t.ka.get(e),i=t.qa.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Jl(t.remoteStore,n.targetId))}async function c0(r,e,t){const n=g0(r);try{const i=await function(o,l){const d=ze(o),h=Vt.now(),p=l.reduce((S,k)=>S.add(k.key),tt());let w,T;return d.persistence.runTransaction("Locally write mutations","readwrite",S=>{let k=Hr(),$=tt();return d.ds.getEntries(S,p).next(O=>{k=O,k.forEach((ee,z)=>{z.isValidDocument()||($=$.add(ee))})}).next(()=>d.localDocuments.getOverlayedDocuments(S,k)).next(O=>{w=O;const ee=[];for(const z of l){const V=Ay(z,w.get(z.key).overlayedDocument);V!=null&&ee.push(new bn(z.key,V,vf(V.value.mapValue),pr.exists(!0)))}return d.mutationQueue.addMutationBatch(S,h,ee,l)}).next(O=>{T=O;const ee=O.applyToLocalDocumentSet(w,$);return d.documentOverlayCache.saveOverlays(S,O.batchId,ee)})}).then(()=>({batchId:T.batchId,changes:Cf(w)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(o,l,d){let h=o.Wa[o.currentUser.toKey()];h||(h=new At(Qe)),h=h.insert(l,d),o.Wa[o.currentUser.toKey()]=h}(n,i.batchId,t),await Ps(n,i.changes),await Xa(n.remoteStore)}catch(i){const s=rc(i,"Failed to persist write");t.reject(s)}}async function dp(r,e){const t=ze(r);try{const n=await Eb(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Ua.get(s);o&&(ft(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ba=!0:i.modifiedDocuments.size>0?ft(o.Ba):i.removedDocuments.size>0&&(ft(o.Ba),o.Ba=!1))}),await Ps(t,n,e)}catch(n){await Ai(n)}}function Pd(r,e,t){const n=ze(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.ka.forEach((s,o)=>{const l=o.view.sa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const d=ze(o);d.onlineState=l;let h=!1;d.queries.forEach((p,w)=>{for(const T of w.ta)T.sa(l)&&(h=!0)}),h&&nc(d)}(n.eventManager,e),i.length&&n.La.p_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function u0(r,e,t){const n=ze(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Ua.get(e),s=i&&i.key;if(s){let o=new At(Se.comparator);o=o.insert(s,Qt.newNoDocument(s,Fe.min()));const l=tt().add(s),d=new Wa(Fe.min(),new Map,new At(Qe),o,l);await dp(n,d),n.$a=n.$a.remove(s),n.Ua.delete(e),sc(n)}else await ol(n.localStore,e,!1).then(()=>ul(n,e,t)).catch(Ai)}async function d0(r,e){const t=ze(r),n=e.batch.batchId;try{const i=await wb(t.localStore,e);fp(t,n,null),hp(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Ps(t,i)}catch(i){await Ai(i)}}async function h0(r,e,t){const n=ze(r);try{const i=await function(o,l){const d=ze(o);return d.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return d.mutationQueue.lookupMutationBatch(h,l).next(w=>(ft(w!==null),p=w.keys(),d.mutationQueue.removeMutationBatch(h,w))).next(()=>d.mutationQueue.performConsistencyCheck(h)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>d.localDocuments.getDocuments(h,p))})}(n.localStore,e);fp(n,e,t),hp(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Ps(n,i)}catch(i){await Ai(i)}}function hp(r,e){(r.Ga.get(e)||[]).forEach(t=>{t.resolve()}),r.Ga.delete(e)}function fp(r,e,t){const n=ze(r);let i=n.Wa[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Wa[n.currentUser.toKey()]=i}}function ul(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.qa.get(e))r.ka.delete(n),t&&r.La.Ja(n,t);r.qa.delete(e),r.isPrimaryClient&&r.Ka.br(e).forEach(n=>{r.Ka.containsKey(n)||pp(r,n)})}function pp(r,e){r.Qa.delete(e.path.canonicalString());const t=r.$a.get(e);t!==null&&(Jl(r.remoteStore,t),r.$a=r.$a.remove(e),r.Ua.delete(t),sc(r))}function Cd(r,e,t){for(const n of t)n instanceof lp?(r.Ka.addReference(n.key,e),f0(r,n)):n instanceof cp?(ve(ic,"Document no longer in limbo: "+n.key),r.Ka.removeReference(n.key,e),r.Ka.containsKey(n.key)||pp(r,n.key)):Ve()}function f0(r,e){const t=e.key,n=t.path.canonicalString();r.$a.get(t)||r.Qa.has(n)||(ve(ic,"New document in limbo: "+t),r.Qa.add(n),sc(r))}function sc(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const e=r.Qa.values().next().value;r.Qa.delete(e);const t=new Se(wt.fromString(e)),n=r.za.next();r.Ua.set(n,new r0(t)),r.$a=r.$a.insert(t,n),Zf(r.remoteStore,new sn(kr(zl(t.path)),n,"TargetPurposeLimboResolution",Ua.ae))}}async function Ps(r,e,t){const n=ze(r),i=[],s=[],o=[];n.ka.isEmpty()||(n.ka.forEach((l,d)=>{o.push(n.Ha(d,e,t).then(h=>{var p;if((h||t)&&n.isPrimaryClient){const w=h?!h.fromCache:(p=t==null?void 0:t.targetChanges.get(d.targetId))===null||p===void 0?void 0:p.current;n.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(h){i.push(h);const w=Ql.Yi(d.targetId,h);s.push(w)}}))}),await Promise.all(o),n.La.p_(i),await async function(d,h){const p=ze(d);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>Q.forEach(h,T=>Q.forEach(T.Hi,S=>p.persistence.referenceDelegate.addReference(w,T.targetId,S)).next(()=>Q.forEach(T.Ji,S=>p.persistence.referenceDelegate.removeReference(w,T.targetId,S)))))}catch(w){if(!Ri(w))throw w;ve(Xl,"Failed to update sequence numbers: "+w)}for(const w of h){const T=w.targetId;if(!w.fromCache){const S=p.Ts.get(T),k=S.snapshotVersion,$=S.withLastLimboFreeSnapshotVersion(k);p.Ts=p.Ts.insert(T,$)}}}(n.localStore,s))}async function p0(r,e){const t=ze(r);if(!t.currentUser.isEqual(e)){ve(ic,"User change. New user:",e.toKey());const n=await Qf(t.localStore,e);t.currentUser=e,function(s,o){s.Ga.forEach(l=>{l.forEach(d=>{d.reject(new Ie(J.CANCELLED,o))})}),s.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Ps(t,n.Rs)}}function m0(r,e){const t=ze(r),n=t.Ua.get(e);if(n&&n.Ba)return tt().add(n.key);{let i=tt();const s=t.qa.get(e);if(!s)return i;for(const o of s){const l=t.ka.get(o);i=i.unionWith(l.view.Sa)}return i}}function mp(r){const e=ze(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=dp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=m0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=u0.bind(null,e),e.La.p_=Yb.bind(null,e.eventManager),e.La.Ja=Zb.bind(null,e.eventManager),e}function g0(r){const e=ze(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=d0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=h0.bind(null,e),e}class Ea{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ka(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return bb(this.persistence,new vb,e.initialUser,this.serializer)}Xa(e){return new Kf(Kl.ri,this.serializer)}Za(e){return new Pb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ea.provider={build:()=>new Ea};class v0 extends Ea{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ft(this.persistence.referenceDelegate instanceof ba);const n=this.persistence.referenceDelegate.garbageCollector;return new rb(n,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?ir.withCacheSize(this.cacheSizeBytes):ir.DEFAULT;return new Kf(n=>ba.ri(n,t),this.serializer)}}class dl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Pd(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=p0.bind(null,this.syncEngine),await Qb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Jb}()}createDatastore(e){const t=Ka(e.databaseInfo.databaseId),n=function(s){return new Db(s)}(e.databaseInfo);return function(s,o,l,d){return new Ob(s,o,l,d)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,o,l){return new $b(n,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Pd(this.syncEngine,t,0),function(){return wd.D()?new wd:new Cb}())}createSyncEngine(e,t){return function(i,s,o,l,d,h,p){const w=new n0(i,s,o,l,d,h);return p&&(w.ja=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=ze(i);ve(Vn,"RemoteStore shutting down."),s.W_.add(5),await Rs(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}dl.provider={build:()=>new dl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):qr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="FirestoreClient";class _0{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Kt.UNAUTHENTICATED,this.clientId=of.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{ve(_n,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(ve(_n,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=rc(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function $o(r,e){r.asyncQueue.verifyOperationInProgress(),ve(_n,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Qf(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Sd(r,e){r.asyncQueue.verifyOperationInProgress();const t=await y0(r);ve(_n,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Id(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Id(e.remoteStore,i)),r._onlineComponents=e}async function y0(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ve(_n,"Using user provided OfflineComponentProvider");try{await $o(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===J.FAILED_PRECONDITION||i.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;pi("Error using user provided cache. Falling back to memory cache: "+t),await $o(r,new Ea)}}else ve(_n,"Using default OfflineComponentProvider"),await $o(r,new v0(void 0));return r._offlineComponents}async function vp(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ve(_n,"Using user provided OnlineComponentProvider"),await Sd(r,r._uninitializedComponentsProvider._online)):(ve(_n,"Using default OnlineComponentProvider"),await Sd(r,new dl))),r._onlineComponents}function b0(r){return vp(r).then(e=>e.syncEngine)}async function _p(r){const e=await vp(r),t=e.eventManager;return t.onListen=i0.bind(null,e.syncEngine),t.onUnlisten=o0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=s0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=l0.bind(null,e.syncEngine),t}function w0(r,e,t={}){const n=new Ur;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,l,d,h){const p=new gp({next:T=>{p.su(),o.enqueueAndForget(()=>ap(s,w));const S=T.docs.has(l);!S&&T.fromCache?h.reject(new Ie(J.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&T.fromCache&&d&&d.source==="server"?h.reject(new Ie(J.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(T)},error:T=>h.reject(T)}),w=new op(zl(l.path),p,{includeMetadataChanges:!0,Ta:!0});return sp(s,w)}(await _p(r),r.asyncQueue,e,t,n)),n.promise}function E0(r,e,t={}){const n=new Ur;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,l,d,h){const p=new gp({next:T=>{p.su(),o.enqueueAndForget(()=>ap(s,w)),T.fromCache&&d.source==="server"?h.reject(new Ie(J.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(T)},error:T=>h.reject(T)}),w=new op(l,p,{includeMetadataChanges:!0,Ta:!0});return sp(s,w)}(await _p(r),r.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(r,e,t){if(!t)throw new Ie(J.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function I0(r,e,t,n){if(e===!0&&n===!0)throw new Ie(J.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function xd(r){if(!Se.isDocumentKey(r))throw new Ie(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Dd(r){if(Se.isDocumentKey(r))throw new Ie(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ja(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ve()}function Er(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new Ie(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ja(r);throw new Ie(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="firestore.googleapis.com",Nd=!0;class Vd{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new Ie(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wp,this.ssl=Nd}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Nd;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Wf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<eb)throw new Ie(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}I0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yp((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Ie(J.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Ie(J.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Ie(J.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ya{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ie(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ie(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new k_;switch(n.type){case"firstParty":return new V_(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Ie(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=kd.get(t);n&&(ve("ComponentProvider","Removing Datastore"),kd.delete(t),n.terminate())}(this),Promise.resolve()}}function T0(r,e,t,n={}){var i;const s=(r=Er(r,Ya))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:r._getEmulatorOptions()}),l=`${e}:${t}`;s.host!==wp&&s.host!==l&&pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},s),{host:l,ssl:!1,emulatorOptions:n});if(!xn(d,o)&&(r._setSettings(d),n.mockUserToken)){let h,p;if(typeof n.mockUserToken=="string")h=n.mockUserToken,p=Kt.MOCK_USER;else{h=sv(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const w=n.mockUserToken.sub||n.mockUserToken.user_id;if(!w)throw new Ie(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Kt(w)}r._authCredentials=new x_(new sf(h,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class rr{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rr(this.firestore,e,this._key)}}class un extends Ci{constructor(e,t,n){super(e,t,zl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rr(this.firestore,null,new Se(e))}withConverter(e){return new un(this.firestore,e,this._path)}}function Si(r,e,...t){if(r=Ft(r),bp("collection","path",e),r instanceof Ya){const n=wt.fromString(e,...t);return Dd(n),new un(r,null,n)}{if(!(r instanceof rr||r instanceof un))throw new Ie(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(wt.fromString(e,...t));return Dd(n),new un(r.firestore,null,n)}}function Tr(r,e,...t){if(r=Ft(r),arguments.length===1&&(e=of.newId()),bp("doc","path",e),r instanceof Ya){const n=wt.fromString(e,...t);return xd(n),new rr(r,null,new Se(n))}{if(!(r instanceof rr||r instanceof un))throw new Ie(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(wt.fromString(e,...t));return xd(n),new rr(r.firestore,r instanceof un?r.converter:null,new Se(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="AsyncQueue";class Od{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Jf(this,"async_queue_retry"),this.Su=()=>{const n=Lo();n&&ve(Md,"Visibility state changed to "+n.visibilityState),this.a_.t_()},this.bu=e;const t=Lo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Lo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Ur;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ri(e))throw e;ve(Md,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(n=>{this.gu=n,this.pu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(n);throw qr("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.pu=!1,n))));return this.bu=t,t}enqueueAfterDelay(e,t,n){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const i=tc.createAndSchedule(this,e,t,n,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&Ve()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Un extends Ya{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Od,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Od(e),this._firestoreClient=void 0,await e}}}function A0(r,e){const t=typeof r=="object"?r:Qh(),n=typeof r=="string"?r:pa,i=Nl(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const s=nv("firestore");s&&T0(i,...s)}return i}function ac(r){if(r._terminated)throw new Ie(J.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||R0(r),r._firestoreClient}function R0(r){var e,t,n;const i=r._freezeSettings(),s=function(l,d,h,p){return new Q_(l,d,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,yp(p.experimentalLongPollingOptions),p.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new _0(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bi(qt.fromBase64String(e))}catch(t){throw new Ie(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new bi(qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Ie(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ie(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ie(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Qe(this._lat,e._lat)||Qe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=/^__.*__$/;class C0{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new bn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ts(e,this.data,t,this.fieldTransforms)}}class Ep{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new bn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ip(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ve()}}class cc{constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new cc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:n,Qu:!1});return i.$u(e),i}Uu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:n,Qu:!1});return i.Bu(),i}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ia(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Ip(this.Lu)&&P0.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class S0{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ka(e)}ju(e,t,n,i=!1){return new cc({Lu:e,methodName:t,zu:n,path:jt.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function to(r){const e=r._freezeSettings(),t=Ka(r._databaseId);return new S0(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Tp(r,e,t,n,i,s={}){const o=r.ju(s.merge||s.mergeFields?2:0,e,t,i);dc("Data must be an object, but it was:",o,n);const l=Ap(n,o);let d,h;if(s.merge)d=new dr(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const w of s.mergeFields){const T=hl(e,w,t);if(!o.contains(T))throw new Ie(J.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Pp(p,T)||p.push(T)}d=new dr(p),h=o.fieldTransforms.filter(w=>d.covers(w.field))}else d=null,h=o.fieldTransforms;return new C0(new sr(l),d,h)}class ro extends eo{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ro}}class uc extends eo{_toFieldTransform(e){return new wy(e.path,new hs)}isEqual(e){return e instanceof uc}}function k0(r,e,t,n){const i=r.ju(1,e,t);dc("Data must be an object, but it was:",i,n);const s=[],o=sr.empty();yn(n,(d,h)=>{const p=hc(e,d,t);h=Ft(h);const w=i.Uu(p);if(h instanceof ro)s.push(p);else{const T=Cs(h,w);T!=null&&(s.push(p),o.set(p,T))}});const l=new dr(s);return new Ep(o,l,i.fieldTransforms)}function x0(r,e,t,n,i,s){const o=r.ju(1,e,t),l=[hl(e,n,t)],d=[i];if(s.length%2!=0)throw new Ie(J.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<s.length;T+=2)l.push(hl(e,s[T])),d.push(s[T+1]);const h=[],p=sr.empty();for(let T=l.length-1;T>=0;--T)if(!Pp(h,l[T])){const S=l[T];let k=d[T];k=Ft(k);const $=o.Uu(S);if(k instanceof ro)h.push(S);else{const O=Cs(k,$);O!=null&&(h.push(S),p.set(S,O))}}const w=new dr(h);return new Ep(p,w,o.fieldTransforms)}function D0(r,e,t,n=!1){return Cs(t,r.ju(n?4:3,e))}function Cs(r,e){if(Rp(r=Ft(r)))return dc("Unsupported field value:",e,r),Ap(r,e);if(r instanceof eo)return function(n,i){if(!Ip(i.Lu))throw i.Wu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(n,i){const s=[];let o=0;for(const l of n){let d=Cs(l,i.Ku(o));d==null&&(d={nullValue:"NULL_VALUE"}),s.push(d),o++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=Ft(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return _y(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Vt.fromDate(n);return{timestampValue:ya(i.serializer,s)}}if(n instanceof Vt){const s=new Vt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ya(i.serializer,s)}}if(n instanceof oc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof bi)return{bytesValue:Uf(i.serializer,n._byteString)};if(n instanceof rr){const s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Gl(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof lc)return function(o,l){return{mapValue:{fields:{[mf]:{stringValue:gf},[ma]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Wu("VectorValues must only contain numeric values.");return Bl(l.serializer,h)})}}}}}}(n,i);throw i.Wu(`Unsupported field value: ${Ja(n)}`)}(r,e)}function Ap(r,e){const t={};return cf(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yn(r,(n,i)=>{const s=Cs(i,e.qu(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function Rp(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Vt||r instanceof oc||r instanceof bi||r instanceof rr||r instanceof eo||r instanceof lc)}function dc(r,e,t){if(!Rp(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=Ja(t);throw n==="an object"?e.Wu(r+" a custom object"):e.Wu(r+" "+n)}}function hl(r,e,t){if((e=Ft(e))instanceof Za)return e._internalPath;if(typeof e=="string")return hc(r,e);throw Ia("Field path arguments must be of type string or ",r,!1,void 0,t)}const N0=new RegExp("[~\\*/\\[\\]]");function hc(r,e,t){if(e.search(N0)>=0)throw Ia(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Za(...e.split("."))._internalPath}catch{throw Ia(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ia(r,e,t,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(s||o)&&(d+=" (found",s&&(d+=` in field ${n}`),o&&(d+=` in document ${i}`),d+=")"),new Ie(J.INVALID_ARGUMENT,l+r+d)}function Pp(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new rr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new V0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class V0 extends Cp{data(){return super.data()}}function fc(r,e){return typeof e=="string"?hc(r,e):e instanceof Za?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new Ie(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pc{}class O0 extends pc{}function is(r,e,...t){let n=[];e instanceof pc&&n.push(e),n=n.concat(t),function(s){const o=s.filter(d=>d instanceof mc).length,l=s.filter(d=>d instanceof no).length;if(o>1||o>0&&l>0)throw new Ie(J.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class no extends O0{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new no(e,t,n)}_apply(e){const t=this._parse(e);return Sp(e._query,t),new Ci(e.firestore,e.converter,tl(e._query,t))}_parse(e){const t=to(e.firestore);return function(s,o,l,d,h,p,w){let T;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new Ie(J.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){$d(w,p);const k=[];for(const $ of w)k.push(Ld(d,s,$));T={arrayValue:{values:k}}}else T=Ld(d,s,w)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||$d(w,p),T=D0(l,o,w,p==="in"||p==="not-in");return Nt.create(h,p,T)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Jn(r,e,t){const n=e,i=fc("where",r);return no._create(i,n,t)}class mc extends pc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new mc(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:wr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const d of l)Sp(o,d),o=tl(o,d)}(e._query,t),new Ci(e.firestore,e.converter,tl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ld(r,e,t){if(typeof(t=Ft(t))=="string"){if(t==="")throw new Ie(J.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tf(e)&&t.indexOf("/")!==-1)throw new Ie(J.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(wt.fromString(t));if(!Se.isDocumentKey(n))throw new Ie(J.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Zu(r,new Se(n))}if(t instanceof rr)return Zu(r,t._key);throw new Ie(J.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ja(t)}.`)}function $d(r,e){if(!Array.isArray(r)||r.length===0)throw new Ie(J.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Sp(r,e){const t=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Ie(J.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Ie(J.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class L0{convertValue(e,t="none"){switch(gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(mn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ve()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return yn(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t[ma].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(o=>Ct(o.doubleValue));return new lc(s)}convertGeoPoint(e){return new oc(Ct(e.latitude),Ct(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ba(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(cs(e));default:return null}}convertTimestamp(e){const t=pn(e);return new Vt(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=wt.fromString(e);ft(Gf(n));const i=new us(n.get(1),n.get(3)),s=new Se(n.popFirst(5));return i.isEqual(t)||qr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xp extends Cp{constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ia(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(fc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ia extends xp{data(e={}){return super.data(e)}}class $0{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ji(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ia(this._firestore,this._userDataWriter,n.key,n,new Ji(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Ie(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const d=new ia(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ji(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const d=new ia(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ji(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:F0(l.type),doc:d,oldIndex:h,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function F0(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(r){r=Er(r,rr);const e=Er(r.firestore,Un);return w0(ac(e),r._key).then(t=>z0(e,r,t))}class Dp extends L0{constructor(e){super(),this.firestore=e}convertBytes(e){return new bi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rr(this.firestore,null,t)}}function gc(r){r=Er(r,Ci);const e=Er(r.firestore,Un),t=ac(e),n=new Dp(e);return M0(r._query),E0(t,r._query).then(i=>new $0(e,n,r,i))}function vc(r,e,t){r=Er(r,rr);const n=Er(r.firestore,Un),i=kp(r.converter,e);return io(n,[Tp(to(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,pr.none())])}function _c(r,e,t,...n){r=Er(r,rr);const i=Er(r.firestore,Un),s=to(i);let o;return o=typeof(e=Ft(e))=="string"||e instanceof Za?x0(s,"updateDoc",r._key,e,t,n):k0(s,"updateDoc",r._key,e),io(i,[o.toMutation(r._key,pr.exists(!0))])}function yc(r){return io(Er(r.firestore,Un),[new jl(r._key,pr.none())])}function bc(r,e){const t=Er(r.firestore,Un),n=Tr(r),i=kp(r.converter,e);return io(t,[Tp(to(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,pr.exists(!1))]).then(()=>n)}function io(r,e){return function(n,i){const s=new Ur;return n.asyncQueue.enqueueAndForget(async()=>c0(await b0(n),i,s)),s.promise}(ac(r),e)}function z0(r,e,t){const n=t.docs.get(e._key),i=new Dp(r);return new xp(r,i,e._key,n,new Ji(t.hasPendingWrites,t.fromCache),e.converter)}function Gr(){return new uc("serverTimestamp")}(function(e,t=!0){(function(i){Ti=i})(Ii),fi(new Dn("firestore",(n,{instanceIdentifier:i,options:s})=>{const o=n.getProvider("app").getImmediate(),l=new Un(new D_(n.getProvider("auth-internal")),new M_(o,n.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Ie(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new us(h.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ln(zu,Bu,e),ln(zu,Bu,"esm2017")})();var B0="firebase",j0="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(B0,j0,"app");function wc(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function Np(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q0=Np,Vp=new ws("auth","Firebase",Np());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new xl("@firebase/auth");function H0(r,...e){Ta.logLevel<=et.WARN&&Ta.warn(`Auth (${Ii}): ${r}`,...e)}function sa(r,...e){Ta.logLevel<=et.ERROR&&Ta.error(`Auth (${Ii}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(r,...e){throw Ec(r,...e)}function Dr(r,...e){return Ec(r,...e)}function Mp(r,e,t){const n=Object.assign(Object.assign({},q0()),{[e]:t});return new ws("auth","Firebase",n).create(e,{appName:r.name})}function dn(r){return Mp(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ec(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Vp.create(r,...e)}function De(r,e,...t){if(!r)throw Ec(e,...t)}function $r(r){const e="INTERNAL ASSERTION FAILED: "+r;throw sa(e),new Error(e)}function Wr(r,e){r||$r(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function G0(){return Fd()==="http:"||Fd()==="https:"}function Fd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(G0()||cv()||"connection"in navigator)?navigator.onLine:!0}function K0(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t){this.shortDelay=e,this.longDelay=t,Wr(t>e,"Short delay should be less than long delay!"),this.isMobile=av()||uv()}get(){return W0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(r,e){Wr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],J0=new Ss(3e4,6e4);function zn(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function wn(r,e,t,n,i={}){return Lp(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const l=Es(Object.assign({key:r.config.apiKey},o)).slice(1),d=await r._getAdditionalHeaders();d["Content-Type"]="application/json",r.languageCode&&(d["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:d},s);return lv()||(h.referrerPolicy="no-referrer"),Op.fetch()(await $p(r,r.config.apiHost,t,l),h)})}async function Lp(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Q0),e);try{const i=new Z0(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ys(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[d,h]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ys(r,"credential-already-in-use",o);if(d==="EMAIL_EXISTS")throw Ys(r,"email-already-in-use",o);if(d==="USER_DISABLED")throw Ys(r,"user-disabled",o);const p=n[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Mp(r,p,h);Ir(r,p)}}catch(i){if(i instanceof Kr)throw i;Ir(r,"network-request-failed",{message:String(i)})}}async function so(r,e,t,n,i={}){const s=await wn(r,e,t,n,i);return"mfaPendingCredential"in s&&Ir(r,"multi-factor-auth-required",{_serverResponse:s}),s}async function $p(r,e,t,n){const i=`${e}${t}?${n}`,s=r,o=s.config.emulator?Ic(r.config,i):`${r.config.apiScheme}://${i}`;return X0.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Y0(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Z0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Dr(this.auth,"network-request-failed")),J0.get())})}}function Ys(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Dr(r,e,n);return i.customData._tokenResponse=t,i}function Ud(r){return r!==void 0&&r.enterprise!==void 0}class ew{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Y0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tw(r,e){return wn(r,"GET","/v2/recaptchaConfig",zn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(r,e){return wn(r,"POST","/v1/accounts:delete",e)}async function Aa(r,e){return wn(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nw(r,e=!1){const t=Ft(r),n=await t.getIdToken(e),i=Tc(n);De(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:ss(Fo(i.auth_time)),issuedAtTime:ss(Fo(i.iat)),expirationTime:ss(Fo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fo(r){return Number(r)*1e3}function Tc(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return sa("JWT malformed, contained fewer than 3 sections"),null;try{const i=jh(t);return i?JSON.parse(i):(sa("Failed to decode base64 JWT payload"),null)}catch(i){return sa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zd(r){const e=Tc(r);return De(e,"internal-error"),De(typeof e.exp<"u","internal-error"),De(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Kr&&iw(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function iw({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ss(this.lastLoginAt),this.creationTime=ss(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(r){var e;const t=r.auth,n=await r.getIdToken(),i=await ms(r,Aa(t,{idToken:n}));De(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Fp(s.providerUserInfo):[],l=ow(r.providerData,o),d=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(l!=null&&l.length),p=d?h:!1,w={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new pl(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(r,w)}async function aw(r){const e=Ft(r);await Ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ow(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Fp(r){return r.map(e=>{var{providerId:t}=e,n=wc(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lw(r,e){const t=await Lp(r,{},async()=>{const n=Es({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=await $p(r,i,"/v1/token",`key=${s}`),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Op.fetch()(o,{method:"POST",headers:l,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function cw(r,e){return wn(r,"POST","/v2/accounts:revokeToken",zn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){De(e.idToken,"internal-error"),De(typeof e.idToken<"u","internal-error"),De(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){De(e.length!==0,"internal-error");const t=zd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(De(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await lw(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new ni;return n&&(De(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(De(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(De(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return $r("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(r,e){De(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class _r{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=wc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ms(this,this.stsTokenManager.getToken(this.auth,e));return De(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nw(this,e)}reload(){return aw(this)}_assign(e){this!==e&&(De(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){De(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ra(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gr(this.auth.app))return Promise.reject(dn(this.auth));const e=await this.getIdToken();return await ms(this,rw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,l,d,h,p;const w=(n=t.displayName)!==null&&n!==void 0?n:void 0,T=(i=t.email)!==null&&i!==void 0?i:void 0,S=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=t.photoURL)!==null&&o!==void 0?o:void 0,$=(l=t.tenantId)!==null&&l!==void 0?l:void 0,O=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,ee=(h=t.createdAt)!==null&&h!==void 0?h:void 0,z=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:V,emailVerified:D,isAnonymous:x,providerData:L,stsTokenManager:b}=t;De(V&&b,e,"internal-error");const v=ni.fromJSON(this.name,b);De(typeof V=="string",e,"internal-error"),Yr(w,e.name),Yr(T,e.name),De(typeof D=="boolean",e,"internal-error"),De(typeof x=="boolean",e,"internal-error"),Yr(S,e.name),Yr(k,e.name),Yr($,e.name),Yr(O,e.name),Yr(ee,e.name),Yr(z,e.name);const I=new _r({uid:V,auth:e,email:T,emailVerified:D,displayName:w,isAnonymous:x,photoURL:k,phoneNumber:S,tenantId:$,stsTokenManager:v,createdAt:ee,lastLoginAt:z});return L&&Array.isArray(L)&&(I.providerData=L.map(A=>Object.assign({},A))),O&&(I._redirectEventId=O),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new ni;i.updateFromServerResponse(t);const s=new _r({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Ra(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];De(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Fp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ni;l.updateFromIdToken(n);const d=new _r({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new pl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(d,h),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=new Map;function Fr(r){Wr(r instanceof Function,"Expected a class definition");let e=Bd.get(r);return e?(Wr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Bd.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Up.type="NONE";const jd=Up;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(r,e,t){return`firebase:${r}:${e}:${t}`}class ii{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=aa(this.userKey,i.apiKey,s),this.fullPersistenceKey=aa("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Aa(this.auth,{idToken:e}).catch(()=>{});return t?_r._fromGetAccountInfoResponse(this.auth,t,e):null}return _r._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ii(Fr(jd),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Fr(jd);const o=aa(n,e.config.apiKey,e.name);let l=null;for(const h of t)try{const p=await h._get(o);if(p){let w;if(typeof p=="string"){const T=await Aa(e,{idToken:p}).catch(()=>{});if(!T)break;w=await _r._fromGetAccountInfoResponse(e,T,p)}else w=_r._fromJSON(e,p);h!==s&&(l=w),s=h;break}}catch{}const d=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!d.length?new ii(s,e,n):(s=d[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new ii(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gp(e))return"Blackberry";if(Wp(e))return"Webos";if(Bp(e))return"Safari";if((e.includes("chrome/")||jp(e))&&!e.includes("edge/"))return"Chrome";if(Hp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function zp(r=Yt()){return/firefox\//i.test(r)}function Bp(r=Yt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jp(r=Yt()){return/crios\//i.test(r)}function qp(r=Yt()){return/iemobile/i.test(r)}function Hp(r=Yt()){return/android/i.test(r)}function Gp(r=Yt()){return/blackberry/i.test(r)}function Wp(r=Yt()){return/webos/i.test(r)}function Ac(r=Yt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function uw(r=Yt()){var e;return Ac(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dw(){return dv()&&document.documentMode===10}function Kp(r=Yt()){return Ac(r)||Hp(r)||Wp(r)||Gp(r)||/windows phone/i.test(r)||qp(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(r,e=[]){let t;switch(r){case"Browser":t=qd(Yt());break;case"Worker":t=`${qd(Yt())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ii}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,l)=>{try{const d=e(s);o(d)}catch(d){l(d)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fw(r,e={}){return wn(r,"GET","/v2/passwordPolicy",zn(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=6;class mw{constructor(e){var t,n,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:pw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,o,l;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,d),this.validatePasswordCharacterOptions(e,d),d.isValid&&(d.isValid=(t=d.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),d.isValid&&(d.isValid=(n=d.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),d.isValid&&(d.isValid=(i=d.containsLowercaseLetter)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(s=d.containsUppercaseLetter)!==null&&s!==void 0?s:!0),d.isValid&&(d.isValid=(o=d.containsNumericCharacter)!==null&&o!==void 0?o:!0),d.isValid&&(d.isValid=(l=d.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),d}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hd(this),this.idTokenSubscription=new Hd(this),this.beforeStateQueue=new hw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Fr(t)),this._initializationPromise=this.queue(async()=>{var n,i,s;if(!this._deleted&&(this.persistenceManager=await ii.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Aa(this,{idToken:e}),n=await _r._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(gr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(e);(!o||o===l)&&(d!=null&&d.user)&&(i=d.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return De(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ra(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=K0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gr(this.app))return Promise.reject(dn(this));const t=e?Ft(e):null;return t&&De(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&De(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gr(this.app)?Promise.reject(dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gr(this.app)?Promise.reject(dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fw(this),t=new mw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ws("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await cw(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Fr(e)||this._popupRedirectResolver;De(t,this,"argument-error"),this.redirectPersistenceManager=await ii.create(this,[Fr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(De(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,n,i);return()=>{o=!0,d()}}else{const d=e.addObserver(t);return()=>{o=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return De(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(gr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&H0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ki(r){return Ft(r)}class Hd{constructor(e){this.auth=e,this.observer=null,this.addObserver=yv(t=>this.observer=t)}get next(){return De(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vw(r){ao=r}function Xp(r){return ao.loadJS(r)}function _w(){return ao.recaptchaEnterpriseScript}function yw(){return ao.gapiScript}function bw(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class ww{constructor(){this.enterprise=new Ew}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ew{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Iw="recaptcha-enterprise",Jp="NO_RECAPTCHA";class Tw{constructor(e){this.type=Iw,this.auth=ki(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{tw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new ew(d);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(d=>{l(d)})})}function i(s,o,l){const d=window.grecaptcha;Ud(d)?d.enterprise.ready(()=>{d.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(Jp)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ww().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{n(this.auth).then(l=>{if(!t&&Ud(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let d=_w();d.length!==0&&(d+=l),Xp(d).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Gd(r,e,t,n=!1,i=!1){const s=new Tw(r);let o;if(i)o=Jp;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const d=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const d=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return n?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Wd(r,e,t,n,i){var s;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Gd(r,e,t,t==="getOobCode");return n(r,o)}else return n(r,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Gd(r,e,t,t==="getOobCode");return n(r,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(r,e){const t=Nl(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(xn(s,e??{}))return i;Ir(i,"already-initialized")}return t.initialize({options:e})}function Rw(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Fr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Pw(r,e,t){const n=ki(r);De(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=Yp(e),{host:o,port:l}=Cw(e),d=l===null?"":`:${l}`,h={url:`${s}//${o}${d}/`},p=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){De(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),De(xn(h,n.config.emulator)&&xn(p,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=p,n.settings.appVerificationDisabledForTesting=!0,Sw()}function Yp(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Cw(r){const e=Yp(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Kd(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:Kd(o)}}}function Kd(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Sw(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $r("not implemented")}_getIdTokenResponse(e){return $r("not implemented")}_linkToIdToken(e,t){return $r("not implemented")}_getReauthenticationResolver(e){return $r("not implemented")}}async function kw(r,e){return wn(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(r,e){return so(r,"POST","/v1/accounts:signInWithPassword",zn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(r,e){return so(r,"POST","/v1/accounts:signInWithEmailLink",zn(r,e))}async function Nw(r,e){return so(r,"POST","/v1/accounts:signInWithEmailLink",zn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Rc{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new gs(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new gs(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wd(e,t,"signInWithPassword",xw);case"emailLink":return Dw(e,{email:this._email,oobCode:this._password});default:Ir(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wd(e,n,"signUpPassword",kw);case"emailLink":return Nw(e,{idToken:t,email:this._email,oobCode:this._password});default:Ir(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(r,e){return so(r,"POST","/v1/accounts:signInWithIdp",zn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="http://localhost";class Mn extends Rc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ir("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=wc(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Mn(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return si(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,si(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,si(e,t)}buildRequest(){const e={requestUri:Vw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Es(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ow(r){const e=Gi(Wi(r)).link,t=e?Gi(Wi(e)).deep_link_id:null,n=Gi(Wi(r)).deep_link_id;return(n?Gi(Wi(n)).link:null)||n||t||e||r}class Pc{constructor(e){var t,n,i,s,o,l;const d=Gi(Wi(e)),h=(t=d.apiKey)!==null&&t!==void 0?t:null,p=(n=d.oobCode)!==null&&n!==void 0?n:null,w=Mw((i=d.mode)!==null&&i!==void 0?i:null);De(h&&p&&w,"argument-error"),this.apiKey=h,this.operation=w,this.code=p,this.continueUrl=(s=d.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=d.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=d.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Ow(e);try{return new Pc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.providerId=xi.PROVIDER_ID}static credential(e,t){return gs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Pc.parseLink(t);return De(n,"argument-error"),gs._fromEmailAndCode(e,n.code,n.tenantId)}}xi.PROVIDER_ID="password";xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends Zp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends ks{constructor(){super("facebook.com")}static credential(e){return Mn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Mn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return tn.credential(t,n)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends ks{constructor(){super("github.com")}static credential(e){return Mn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends ks{constructor(){super("twitter.com")}static credential(e,t){return Mn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return nn.credential(t,n)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await _r._fromIdTokenResponse(e,n,i),o=Qd(n);return new wi({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Qd(n);return new wi({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Qd(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends Kr{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Pa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Pa(e,t,n,i)}}function em(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pa._fromErrorAndOperation(r,s,e,n):s})}async function Lw(r,e,t=!1){const n=await ms(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return wi._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $w(r,e,t=!1){const{auth:n}=r;if(gr(n.app))return Promise.reject(dn(n));const i="reauthenticate";try{const s=await ms(r,em(n,i,e,r),t);De(s.idToken,n,"internal-error");const o=Tc(s.idToken);De(o,n,"internal-error");const{sub:l}=o;return De(r.uid===l,n,"user-mismatch"),wi._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ir(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(r,e,t=!1){if(gr(r.app))return Promise.reject(dn(r));const n="signIn",i=await em(r,n,e),s=await wi._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}async function Fw(r,e){return tm(ki(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uw(r){const e=ki(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function zw(r,e,t){return gr(r.app)?Promise.reject(dn(r)):Fw(Ft(r),xi.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Uw(r),n})}function Bw(r,e,t,n){return Ft(r).onIdTokenChanged(e,t,n)}function jw(r,e,t){return Ft(r).beforeAuthStateChanged(e,t)}function qw(r,e,t,n){return Ft(r).onAuthStateChanged(e,t,n)}function Hw(r){return Ft(r).signOut()}const Ca="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ca,"1"),this.storage.removeItem(Ca),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=1e3,Ww=10;class nm extends rm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,d)=>{this.notifyListeners(o,d)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);dw()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ww):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Gw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nm.type="LOCAL";const Kw=nm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im extends rm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}im.type="SESSION";const sm=im;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new oo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const l=Array.from(o).map(async h=>h(t.origin,s)),d=await Qw(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,d)=>{const h=Cc("",20);i.port1.start();const p=setTimeout(()=>{d(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(w){const T=w;if(T.data.eventId===h)switch(T.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(T.data.response);break;default:clearTimeout(p),clearTimeout(s),d(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(){return window}function Jw(r){Nr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(){return typeof Nr().WorkerGlobalScope<"u"&&typeof Nr().importScripts=="function"}async function Yw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zw(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function eE(){return am()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="firebaseLocalStorageDb",tE=1,Sa="firebaseLocalStorage",lm="fbase_key";class xs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function lo(r,e){return r.transaction([Sa],e?"readwrite":"readonly").objectStore(Sa)}function rE(){const r=indexedDB.deleteDatabase(om);return new xs(r).toPromise()}function ml(){const r=indexedDB.open(om,tE);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Sa,{keyPath:lm})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Sa)?e(n):(n.close(),await rE(),e(await ml()))})})}async function Xd(r,e,t){const n=lo(r,!0).put({[lm]:e,value:t});return new xs(n).toPromise()}async function nE(r,e){const t=lo(r,!1).get(e),n=await new xs(t).toPromise();return n===void 0?null:n.value}function Jd(r,e){const t=lo(r,!0).delete(e);return new xs(t).toPromise()}const iE=800,sE=3;class cm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ml(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>sE)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return am()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oo._getInstance(eE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Yw(),!this.activeServiceWorker)return;this.sender=new Xw(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ml();return await Xd(e,Ca,"1"),await Jd(e,Ca),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xd(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>nE(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=lo(i,!1).getAll();return new xs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cm.type="LOCAL";const aE=cm;new Ss(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(r,e){return e?Fr(e):(De(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc extends Rc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return si(e,this._buildIdpRequest())}_linkToIdToken(e,t){return si(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return si(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lE(r){return tm(r.auth,new Sc(r),r.bypassAuthState)}function cE(r){const{auth:e,user:t}=r;return De(t,e,"internal-error"),$w(t,new Sc(r),r.bypassAuthState)}async function uE(r){const{auth:e,user:t}=r;return De(t,e,"internal-error"),Lw(t,new Sc(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const d={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lE;case"linkViaPopup":case"linkViaRedirect":return uE;case"reauthViaPopup":case"reauthViaRedirect":return cE;default:Ir(this.auth,"internal-error")}}resolve(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=new Ss(2e3,1e4);class Yn extends um{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Yn.currentPopupAction&&Yn.currentPopupAction.cancel(),Yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return De(e,this.auth,"internal-error"),e}async onExecution(){Wr(this.filter.length===1,"Popup operations only handle one event");const e=Cc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dE.get())};e()}}Yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE="pendingRedirect",oa=new Map;class fE extends um{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=oa.get(this.auth._key());if(!e){try{const n=await pE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}oa.set(this.auth._key(),e)}return this.bypassAuthState||oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pE(r,e){const t=vE(e),n=gE(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function mE(r,e){oa.set(r._key(),e)}function gE(r){return Fr(r._redirectPersistence)}function vE(r){return aa(hE,r.config.apiKey,r.name)}async function _E(r,e,t=!1){if(gr(r.app))return Promise.reject(dn(r));const n=ki(r),i=oE(n,e),o=await new fE(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=10*60*1e3;class bE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!dm(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Dr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yd(e))}saveEventToCache(e){this.cachedEventUids.add(Yd(e)),this.lastProcessedEventTime=Date.now()}}function Yd(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function dm({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wE(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dm(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(r,e={}){return wn(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TE=/^https?/;async function AE(r){if(r.config.emulator)return;const{authorizedDomains:e}=await EE(r);for(const t of e)try{if(RE(t))return}catch{}Ir(r,"unauthorized-domain")}function RE(r){const e=fl(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!TE.test(t))return!1;if(IE.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=new Ss(3e4,6e4);function Zd(){const r=Nr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function CE(r){return new Promise((e,t)=>{var n,i,s;function o(){Zd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zd(),t(Dr(r,"network-request-failed"))},timeout:PE.get()})}if(!((i=(n=Nr().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nr().gapi)===null||s===void 0)&&s.load)o();else{const l=bw("iframefcb");return Nr()[l]=()=>{gapi.load?o():t(Dr(r,"network-request-failed"))},Xp(`${yw()}?onload=${l}`).catch(d=>t(d))}}).catch(e=>{throw la=null,e})}let la=null;function SE(r){return la=la||CE(r),la}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=new Ss(5e3,15e3),xE="__/auth/iframe",DE="emulator/auth/iframe",NE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ME(r){const e=r.config;De(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ic(e,DE):`https://${r.config.authDomain}/${xE}`,n={apiKey:e.apiKey,appName:r.name,v:Ii},i=VE.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${Es(n).slice(1)}`}async function OE(r){const e=await SE(r),t=Nr().gapi;return De(t,r,"internal-error"),e.open({where:document.body,url:ME(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NE,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=Dr(r,"network-request-failed"),l=Nr().setTimeout(()=>{s(o)},kE.get());function d(){Nr().clearTimeout(l),i(n)}n.ping(d).then(d,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$E=500,FE=600,UE="_blank",zE="http://localhost";class eh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BE(r,e,t,n=$E,i=FE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const d=Object.assign(Object.assign({},LE),{width:n.toString(),height:i.toString(),top:s,left:o}),h=Yt().toLowerCase();t&&(l=jp(h)?UE:t),zp(h)&&(e=e||zE,d.scrollbars="yes");const p=Object.entries(d).reduce((T,[S,k])=>`${T}${S}=${k},`,"");if(uw(h)&&l!=="_self")return jE(e||"",l),new eh(null);const w=window.open(e||"",l,p);De(w,r,"popup-blocked");try{w.focus()}catch{}return new eh(w)}function jE(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="__/auth/handler",HE="emulator/auth/handler",GE=encodeURIComponent("fac");async function th(r,e,t,n,i,s){De(r.config.authDomain,r,"auth-domain-config-required"),De(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Ii,eventId:i};if(e instanceof Zp){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",_v(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,w]of Object.entries({}))o[p]=w}if(e instanceof ks){const p=e.getScopes().filter(w=>w!=="");p.length>0&&(o.scopes=p.join(","))}r.tenantId&&(o.tid=r.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const d=await r._getAppCheckToken(),h=d?`#${GE}=${encodeURIComponent(d)}`:"";return`${WE(r)}?${Es(l).slice(1)}${h}`}function WE({config:r}){return r.emulator?Ic(r,HE):`https://${r.authDomain}/${qE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="webStorageSupport";class KE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sm,this._completeRedirectFn=_E,this._overrideRedirectResult=mE}async _openPopup(e,t,n,i){var s;Wr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await th(e,t,n,fl(),i);return BE(e,o,Cc())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await th(e,t,n,fl(),i);return Jw(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Wr(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await OE(e),n=new bE(e);return t.register("authEvent",i=>(De(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Uo,{type:Uo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Uo];o!==void 0&&t(!!o),Ir(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=AE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kp()||Bp()||Ac()}}const QE=KE;var rh="@firebase/auth",nh="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){De(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YE(r){fi(new Dn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=n.options;De(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const d={apiKey:o,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qp(r)},h=new gw(n,i,s,d);return Rw(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),fi(new Dn("auth-internal",e=>{const t=ki(e.getProvider("auth").getImmediate());return(n=>new XE(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(rh,nh,JE(r)),ln(rh,nh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=5*60,eI=Gh("authIdTokenMaxAge")||ZE;let ih=null;const tI=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>eI)return;const i=t==null?void 0:t.token;ih!==i&&(ih=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hm(r=Qh()){const e=Nl(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Aw(r,{popupRedirectResolver:QE,persistence:[aE,Kw,sm]}),n=Gh("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const o=tI(s.toString());jw(t,o,()=>o(t.currentUser)),Bw(t,l=>o(l))}}const i=qh("auth");return i&&Pw(t,`http://${i}`),t}function rI(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}vw({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Dr("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",rI().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YE("Browser");const gl={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""},ka=typeof window<"u"?Vl(gl):null,Zt=ka?A0(ka):null;ka&&hm(ka);function lr(){return!!gl.apiKey&&!!gl.projectId}const fm=[{id:"elc",name:"ELC Lighting",isActive:!0,products:[]},{id:"firststage",name:"fiRSTstage",isActive:!0,products:[]},{id:"greengo",name:"Green-GO",isActive:!0,products:[]},{id:"greenhippo",name:"Green Hippo",isActive:!0,products:[]},{id:"hive",name:"HIVE",isActive:!0,products:[]},{id:"ronstagemaster",name:"RonStageMaster",isActive:!0,products:[]},{id:"srslighting",name:"SRS Lighting",isActive:!0,products:[]},{id:"srsrigging",name:"SRS Rigging",isActive:!0,products:[]},{id:"stagemaker",name:"Stagemaker",isActive:!0,products:[]}],pm=[{id:"elc1",name:"node8 GBx",manufacturerId:"elc",isActive:!0},{id:"elc2",name:"node3 TM FI",manufacturerId:"elc",isActive:!0},{id:"elc3",name:"showStore GBx",manufacturerId:"elc",isActive:!0},{id:"firststage1",name:"GS1 HD",manufacturerId:"firststage",isActive:!0},{id:"firststage2",name:"LT-Easy 30",manufacturerId:"firststage",isActive:!0},{id:"firststage3",name:"LT1-X",manufacturerId:"firststage",isActive:!0},{id:"firststage4",name:"LT2-X",manufacturerId:"firststage",isActive:!0},{id:"greengo1",name:"MCX Rack",manufacturerId:"greengo",isActive:!0},{id:"greengo2",name:"MCXD Desk",manufacturerId:"greengo",isActive:!0},{id:"greengo3",name:"BPX Beltpack",manufacturerId:"greengo",isActive:!0},{id:"greengo4",name:"WBPX Beltpack",manufacturerId:"greengo",isActive:!0},{id:"greengo5",name:"INTX Interface",manufacturerId:"greengo",isActive:!0},{id:"greenhippo1",name:"Nevis",manufacturerId:"greenhippo",isActive:!0},{id:"greenhippo2",name:"TEKA",manufacturerId:"greenhippo",isActive:!0},{id:"greenhippo3",name:"HYCO",manufacturerId:"greenhippo",isActive:!0},{id:"hive1",name:"Minima",manufacturerId:"hive",isActive:!0},{id:"hive2",name:"Osmia",manufacturerId:"hive",isActive:!0},{id:"hive3",name:"Pluto",manufacturerId:"hive",isActive:!0},{id:"hive4",name:"Nexus",manufacturerId:"hive",isActive:!0},{id:"ronstagemaster1",name:"5000-G4",manufacturerId:"ronstagemaster",isActive:!0},{id:"srslighting1",name:"DC6-5-JR",manufacturerId:"srslighting",isActive:!0},{id:"srslighting2",name:"SPUN12",manufacturerId:"srslighting",isActive:!0},{id:"srslighting3",name:"DMX1SW",manufacturerId:"srslighting",isActive:!0},{id:"srsrigging1",name:"AHD12-LV-12H6",manufacturerId:"srsrigging",isActive:!0},{id:"srsrigging2",name:"AHD8-DV-CEE",manufacturerId:"srsrigging",isActive:!0},{id:"srsrigging3",name:"PDU12354321S",manufacturerId:"srsrigging",isActive:!0},{id:"stagemaker1",name:"SL10",manufacturerId:"stagemaker",isActive:!0},{id:"stagemaker2",name:"SL5",manufacturerId:"stagemaker",isActive:!0},{id:"stagemaker3",name:"SR1",manufacturerId:"stagemaker",isActive:!0}];fm.forEach(r=>{r.products=pm.filter(e=>e.manufacturerId===r.id)});const nI=[{id:"rc1",name:"Tech Rentals Berlin",address:"Berliner Str. 123",city:"Berlin",postalCode:"10115",country:"Germany",latitude:52.52,longitude:13.405,website:"https://tech-rentals-berlin.de",phone:"+49-30-12345678",isActive:!0,inventory:[{productId:"elc1",quantity:5},{productId:"greengo3",quantity:10},{productId:"hive2",quantity:3}]},{id:"rc2",name:"StageEquip Hamburg",address:"Hamburger Platz 45",city:"Hamburg",postalCode:"20095",country:"Germany",latitude:53.5511,longitude:9.9937,website:"https://stageequip-hamburg.de",phone:"+49-40-9876543",isActive:!0,inventory:[{productId:"firststage2",quantity:8},{productId:"greenhippo1",quantity:2},{productId:"stagemaker1",quantity:4}]},{id:"rc3",name:"LiveTech Munich",address:"Münchner Weg 78",city:"Munich",postalCode:"80331",country:"Germany",latitude:48.1351,longitude:11.582,website:"https://livetech-munich.de",phone:"+49-89-5647382",isActive:!0,inventory:[{productId:"greengo1",quantity:3},{productId:"srslighting2",quantity:15},{productId:"ronstagemaster1",quantity:2}]},{id:"rc4",name:"Stage Systems Frankfurt",address:"Frankfurter Ring 240",city:"Frankfurt",postalCode:"60311",country:"Germany",latitude:50.1109,longitude:8.6821,website:"https://stage-systems-frankfurt.de",phone:"+49-69-12378945",isActive:!0,inventory:[{productId:"elc3",quantity:4},{productId:"firststage4",quantity:6},{productId:"srsrigging3",quantity:7}]},{id:"rc5",name:"Event Tech Cologne",address:"Kölner Str. 56",city:"Cologne",postalCode:"50667",country:"Germany",latitude:50.9375,longitude:6.9603,website:"https://eventtech-cologne.de",phone:"+49-221-3456789",isActive:!0,inventory:[{productId:"greengo5",quantity:5},{productId:"greenhippo3",quantity:1},{productId:"hive4",quantity:2}]},{id:"rc6",name:"Pro Audio Düsseldorf",address:"Düsseldorfer Allee 121",city:"Düsseldorf",postalCode:"40210",country:"Germany",latitude:51.2277,longitude:6.7735,website:"https://proaudio-duesseldorf.de",phone:"+49-211-7654321",isActive:!0,inventory:[{productId:"elc2",quantity:3},{productId:"firststage1",quantity:5},{productId:"stagemaker2",quantity:6}]},{id:"rc7",name:"Stage Gear Leipzig",address:"Leipziger Ring 88",city:"Leipzig",postalCode:"04109",country:"Germany",latitude:51.3397,longitude:12.3731,website:"https://stagegear-leipzig.de",phone:"+49-341-9876543",isActive:!0,inventory:[{productId:"greengo2",quantity:4},{productId:"srslighting1",quantity:8},{productId:"srsrigging1",quantity:3}]},{id:"rc8",name:"Rent-A-Stage Stuttgart",address:"Stuttgarter Platz 34",city:"Stuttgart",postalCode:"70173",country:"Germany",latitude:48.7758,longitude:9.1829,website:"https://rentastage-stuttgart.de",phone:"+49-711-2345678",isActive:!0,inventory:[{productId:"firststage3",quantity:7},{productId:"hive1",quantity:2},{productId:"stagemaker3",quantity:5}]},{id:"rc9",name:"Event Solutions Dresden",address:"Dresdner Allee 67",city:"Dresden",postalCode:"01067",country:"Germany",latitude:51.0504,longitude:13.7373,website:"https://eventsolutions-dresden.de",phone:"+49-351-6543210",isActive:!0,inventory:[{productId:"greengo4",quantity:6},{productId:"greenhippo2",quantity:2},{productId:"srsrigging2",quantity:4}]},{id:"rc10",name:"Tech Hire Bremen",address:"Bremer Straße 112",city:"Bremen",postalCode:"28195",country:"Germany",latitude:53.0793,longitude:8.8017,website:"https://techhire-bremen.de",phone:"+49-421-9876543",isActive:!0,inventory:[{productId:"elc1",quantity:3},{productId:"hive3",quantity:1},{productId:"srslighting3",quantity:9}]}];var iI={};const sh=3,sI=()=>{const r=typeof window<"u"?void 0:iI.VITE_LOG_LEVEL;if(!r)return sh;switch(r.toUpperCase()){case"NONE":return 0;case"ERROR":return 1;case"WARN":return 2;case"INFO":return 3;case"DEBUG":return 4;case"TRACE":return 5;default:return sh}};let aI=sI();const ji=r=>r<=aI,qi=(r,...e)=>[`[${new Date().toISOString()}] [${r}]`,...e],Hi=typeof window<"u";function Ar(r){return{error:(...e)=>{ji(1)&&Hi&&console.error(...qi(`ERROR:${r}`,...e))},warn:(...e)=>{ji(2)&&Hi&&console.warn(...qi(`WARN:${r}`,...e))},info:(...e)=>{ji(3)&&Hi&&console.info(...qi(`INFO:${r}`,...e))},debug:(...e)=>{ji(4)&&Hi&&console.debug(...qi(`DEBUG:${r}`,...e))},trace:(...e)=>{ji(5)&&Hi&&console.log(...qi(`TRACE:${r}`,...e))}}}const oI=Ar("app"),{error:A2,warn:R2,info:P2,debug:C2,trace:S2}=oI,Dt=Ar("firestore"),nr={MANUFACTURERS:"manufacturers",PRODUCTS:"products",RENTAL_COMPANIES:"rental-companies"};async function kc(r){return new Promise(e=>{setTimeout(()=>e(r),500)})}async function mm(r=!1){try{if(!lr())return kc(fm);const e=Si(Zt,nr.MANUFACTURERS);let t=r?e:is(e,Jn("isActive","==",!0));return(await gc(t)).docs.map(i=>({id:i.id,...i.data()}))}catch(e){throw Dt.error("Error fetching manufacturers:",e),e}}async function gm(r){try{if(!lr())throw new Error("Firebase is not configured for write operations");const e={...r,createdAt:Gr(),updatedAt:Gr()},{id:t,...n}=e,i=t||null;if(i){const s=Tr(Zt,nr.MANUFACTURERS,i);return await vc(s,n),{...n,id:i}}else{const s=await bc(Si(Zt,nr.MANUFACTURERS),n);return{...n,id:s.id}}}catch(e){throw Dt.error("Error creating manufacturer:",e),e}}async function ah(r,e){try{if(!lr())throw new Error("Firebase is not configured for write operations");const t=Tr(Zt,nr.MANUFACTURERS,r),n={...e,updatedAt:Gr()};await _c(t,n)}catch(t){throw Dt.error(`Error updating manufacturer ${r}:`,t),t}}async function lI(r){try{if(!lr())throw new Error("Firebase is not configured for write operations");if((await co(r)).length>0)throw new Error("Cannot delete manufacturer with associated products. Please delete or reassign the products first.");const t=Tr(Zt,nr.MANUFACTURERS,r);await yc(t)}catch(e){throw Dt.error(`Error deleting manufacturer ${r}:`,e),e}}async function co(r,e=!1){try{if(!lr()){let s=pm;return r&&(s=s.filter(o=>o.manufacturerId===r)),kc(s)}const t=Si(Zt,nr.PRODUCTS);let n;return r&&!e?n=is(t,Jn("manufacturerId","==",r),Jn("isActive","==",!0)):r?n=is(t,Jn("manufacturerId","==",r)):e?n=t:n=is(t,Jn("isActive","==",!0)),(await gc(n)).docs.map(s=>({id:s.id,...s.data()}))}catch(t){throw Dt.error("Error fetching products:",t),t}}async function vm(r){try{if(!lr())throw new Error("Firebase is not configured for write operations");const e={...r,createdAt:Gr(),updatedAt:Gr()},{id:t,...n}=e,i=t||null;if(i){const s=Tr(Zt,nr.PRODUCTS,i);return await vc(s,n),{...n,id:i}}else{const s=await bc(Si(Zt,nr.PRODUCTS),n);return{...n,id:s.id}}}catch(e){throw Dt.error("Error creating product:",e),e}}async function oh(r,e){try{if(!lr())throw new Error("Firebase is not configured for write operations");const t=Tr(Zt,nr.PRODUCTS,r),n={...e,updatedAt:Gr()};await _c(t,n)}catch(t){throw Dt.error(`Error updating product ${r}:`,t),t}}async function cI(r){try{if(!lr())throw new Error("Firebase is not configured for write operations");const e=Tr(Zt,nr.PRODUCTS,r);await yc(e)}catch(e){throw Dt.error(`Error deleting product ${r}:`,e),e}}async function uI(r={},e=!1){try{if(!lr())return kc(nI);const t=Si(Zt,nr.RENTAL_COMPANIES),n=is(t,Jn("isActive","==",!0));e&&Dt.debug("Force refreshing rental companies data from Firestore...");let s=(await gc(n)).docs.map(o=>({id:o.id,...o.data()}));if(Dt.debug(`Filtering ${s.length} companies with options:`,r),r.text){const o=r.text.toLowerCase();s=s.filter(l=>`${l.name} ${l.city} ${l.address}`.toLowerCase().includes(o)),Dt.debug(`After text search: ${s.length} companies`)}if(r.products&&r.products.length>0&&(s=s.filter(o=>r.products.some(l=>o.inventory.some(d=>d.productId===l))),Dt.debug(`After product filter: ${s.length} companies`)),r.manufacturers&&r.manufacturers.length>0){const o=await co();Dt.debug(`Loaded ${o.length} products for manufacturer filtering`);const l=o.filter(p=>r.manufacturers.includes(p.manufacturerId));Dt.debug(`Found ${l.length} products from selected manufacturers:`,l.map(p=>p.id));const d=l.map(p=>p.id),h=s.length;s=s.filter(p=>{const w=p.inventory.some(T=>d.includes(T.productId));return w&&Dt.debug(`Company ${p.name} has products from selected manufacturers`),w}),Dt.debug(`After manufacturer filter: ${s.length} of ${h} companies remain`)}return s}catch(t){throw Dt.error("Error fetching rental companies:",t),t}}async function dI(r){try{if(!lr())throw new Error("Firebase is not configured for write operations");const e={...r,createdAt:Gr(),updatedAt:Gr()},{id:t,...n}=e,i=t||null;if(i){const s=Tr(Zt,nr.RENTAL_COMPANIES,i);return await vc(s,n),{...n,id:i}}else{const s=await bc(Si(Zt,nr.RENTAL_COMPANIES),n);return{...n,id:s.id}}}catch(e){throw Dt.error("Error creating rental company:",e),e}}async function xa(r,e){try{if(!lr())throw new Error("Firebase is not configured for write operations");const t=Tr(Zt,nr.RENTAL_COMPANIES,r),n={...e,updatedAt:Gr()};await _c(t,n)}catch(t){throw Dt.error(`Error updating rental company ${r}:`,t),t}}async function hI(r){try{if(!lr())throw new Error("Firebase is not configured for write operations");const e=Tr(Zt,nr.RENTAL_COMPANIES,r);await yc(e)}catch(e){throw Dt.error(`Error deleting rental company ${r}:`,e),e}}const vt=Ar("rentalStore"),Xt=Mr([]),$t=Mr([]),Sr=Mr([]),vs=Mr(!0),vl=Mr(null),Jt=Mr({text:"",manufacturers:[],products:[]});function fI(){return Va($t)}function pI(){return Va(Sr)}function mI(){return Va(Jt)}function _s(r){if(typeof window>"u")return;const e=new URL(window.location.href);e.searchParams.delete("q"),e.searchParams.delete("manufacturers"),e.searchParams.delete("products"),r.text&&e.searchParams.set("q",r.text),r.manufacturers.length>0&&e.searchParams.set("manufacturers",r.manufacturers.join(",")),r.products.length>0&&e.searchParams.set("products",r.products.join(",")),window.history.replaceState({},"",e),vt.debug("Updated URL with filters:",e.toString())}function _m(){var i,s;if(typeof window>"u")return{text:"",manufacturers:[],products:[]};const r=new URL(window.location.href),e=r.searchParams.get("q")||"",t=((i=r.searchParams.get("manufacturers"))==null?void 0:i.split(",").filter(Boolean))||[],n=((s=r.searchParams.get("products"))==null?void 0:s.split(",").filter(Boolean))||[];return vt.debug("Loaded filters from URL:",{textQuery:e,manufacturerIds:t,productIds:n}),{text:e,manufacturers:t,products:n}}function gI(){const r=_m();Jt.set(r)}async function ys(r=!1){vs.set(!0),vl.set(null);try{vt.debug(`Loading initial data (forceRefresh: ${r})...`);const[e,t,n]=await Promise.all([mm(r),co(void 0,r),uI({},r)]);vt.debug(`Loaded ${e.length} manufacturers:`,e.map(i=>i.id)),vt.debug(`Loaded ${t.length} products:`,t.map(i=>i.id)),vt.debug(`Loaded ${n.length} rental companies`),n.forEach(i=>{vt.debug(`Company ${i.name} (${i.id}) has ${i.inventory.length} inventory items`),i.inventory.forEach(s=>{const o=t.find(l=>l.id===s.productId);if(o){const l=e.find(d=>d.id===o.manufacturerId);vt.debug(`  - Product: ${o.name} (${o.id}), Manufacturer: ${(l==null?void 0:l.name)||"Unknown"} (${o.manufacturerId}), Quantity: ${s.quantity}`)}else vt.warn(`  - Product not found: ${s.productId}, Quantity: ${s.quantity}`)})}),Xt.set(e),$t.set(t),Sr.set(n),gI()}catch(e){vt.error("Failed to load initial data:",e),vl.set(e instanceof Error?e.message:"Unknown error loading data")}finally{vs.set(!1)}}const uo=bs([Sr,Jt,vs],([r,e,t])=>{if(t)return[];vt.debug("Filtering rental companies with filters:",e);const n=r.filter(o=>{if(e.text&&!wI(o).includes(e.text.toLowerCase()))return!1;if(e.manufacturers.length>0){const l=bI(o);if(vt.debug(`Company ${o.name} has manufacturers:`,l),!e.manufacturers.some(h=>l.includes(h)))return!1}if(e.products.length>0){const l=o.inventory.map(h=>h.productId);if(vt.debug(`Company ${o.name} has products:`,l),!e.products.some(h=>l.includes(h)))return!1}return!0}),i=new Map;n.forEach(o=>{i.set(o.id,vI(o,e))});const s=[...n].sort((o,l)=>{const d=i.get(o.id)||0;return(i.get(l.id)||0)-d});return vt.debug(`Filtered from ${r.length} to ${n.length} companies`),s});function vI(r,e){if(e.manufacturers.length===0&&e.products.length===0)return r.inventory.reduce((n,i)=>n+i.quantity,0);let t=r.inventory;if(e.products.length>0)t=t.filter(n=>e.products.includes(n.productId));else if(e.manufacturers.length>0){const n={};Va($t).forEach(i=>{n[i.id]=i.manufacturerId}),t=t.filter(i=>{const s=n[i.productId];return s&&e.manufacturers.includes(s)})}return t.reduce((n,i)=>n+i.quantity,0)}const _I=bs(uo,r=>r.map(e=>({id:e.id,latitude:e.latitude,longitude:e.longitude,title:e.name}))),yI=bs([$t,Jt,vs],([r,e,t])=>{if(t)return[];if(e.manufacturers.length===0)return r;vt.debug("Filtering products by manufacturers:",e.manufacturers);const n=r.filter(i=>e.manufacturers.includes(i.manufacturerId));return vt.debug(`Filtered from ${r.length} to ${n.length} products`),n});function bI(r){const e=[];let t={};return $t.subscribe(n=>{t=n.reduce((i,s)=>(i[s.id]=s,i),{})})(),r.inventory.forEach(n=>{const i=t[n.productId];i&&!e.includes(i.manufacturerId)&&e.push(i.manufacturerId)}),e}function wI(r){let e=`${r.name} ${r.city} ${r.address}`.toLowerCase(),t={},n={};return $t.subscribe(i=>{t=i.reduce((s,o)=>(s[o.id]=o,s),{})})(),Xt.subscribe(i=>{n=i.reduce((s,o)=>(s[o.id]=o,s),{})})(),r.inventory.forEach(i=>{const s=t[i.productId];if(s){const o=n[s.manufacturerId];e+=` ${s.name} ${(o==null?void 0:o.name)||""}`.toLowerCase()}}),e}function EI(r){vt.debug(`Setting text filter: "${r}"`),Jt.update(e=>{const t={...e,text:r};return _s(t),t})}function II(r){vt.debug(`Toggling manufacturer filter: ${r}`),Jt.update(e=>{const t=e.manufacturers.includes(r)?e.manufacturers.filter(o=>o!==r):[...e.manufacturers,r];if(vt.debug("Manufacturer filters now:",t),e.manufacturers.includes(r)&&!t.includes(r)){vt.debug("Manufacturer was deselected, clearing product filters");const o={...e,manufacturers:t,products:[]};return _s(o),o}let n=[...e.products],i=[];if($t.subscribe(o=>{i=o})(),t.length>0){const o=i.filter(l=>t.includes(l.manufacturerId)).map(l=>l.id);n=n.filter(l=>o.includes(l)),vt.debug("Valid products for these manufacturers:",o),vt.debug("Updated product filters:",n)}const s={...e,manufacturers:t,products:n};return _s(s),s})}function TI(r){vt.debug(`Toggling product filter: ${r}`),Jt.update(e=>{const t=e.products.includes(r)?e.products.filter(i=>i!==r):[...e.products,r];vt.debug("Product filters now:",t);const n={...e,products:t};return _s(n),n})}function ho(){vt.debug("Resetting all filters");const r={text:"",manufacturers:[],products:[]};_s(r),Jt.set(r)}async function ca(){try{const r=await co(void 0,!0);vt.info(`Refreshed ${r.length} products (including inactive)`),vt.info("Product IDs:",r.map(t=>t.id).join(", "));const e=await mm(!0);return vt.info(`Refreshed ${e.length} manufacturers (including inactive)`),$t.set(r),Xt.set(e),r}catch(r){throw vt.error("Error refreshing product and manufacturer data:",r),r}}typeof window<"u"&&ys();var AI=B('<div class="flex items-center justify-center p-6"><div class="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-700"></div></div>'),RI=B('<div class="p-6 text-center text-gray-500">Keine Ergebnisse gefunden</div>'),PI=(r,e,t)=>e(c(t)),CI=(r,e,t)=>r.key==="Enter"&&e(c(t)),SI=B('<div class="flex items-center text-blue-600"><!> <a target="_blank" rel="noopener noreferrer" class="whitespace-nowrap">Website</a></div>'),kI=B('<div class="flex items-center text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5 flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> <a class="whitespace-nowrap">E-Mail</a></div>'),xI=B('<div class="flex items-center text-blue-600"><!> <a class="whitespace-nowrap">Anrufen</a></div>'),DI=(r,e,t)=>e(c(t).id),NI=B("Weniger anzeigen <!>",1),VI=B("Alle anzeigen <!>",1),MI=B('<div class="py-2 text-center text-xs text-gray-500">Keine passenden Produkte gefunden</div>'),OI=B('<div class="flex items-center overflow-hidden rounded-md bg-gray-100 px-2 py-1"><div class="min-w-0 flex-1"><div class="truncate text-xs font-medium text-gray-700"> </div> <div class="truncate text-xs text-gray-500"> </div></div> <div class="ml-1 flex items-center text-xs font-medium text-gray-700"> </div></div>'),LI=B('<div class="flex items-center overflow-hidden rounded-md bg-gray-100 px-2 py-1"><div class="min-w-0 flex-1"><div class="truncate text-xs font-medium text-gray-700"> </div> <div class="truncate text-xs text-gray-500"> </div></div> <div class="ml-1 flex items-center text-xs font-medium text-gray-700"> </div></div>'),$I=B('<div class="grid grid-cols-2 gap-2"><!></div>'),FI=B('<div class="cursor-pointer p-4 hover:bg-gray-50" role="button" tabindex="0"><div class="relative"><div class="flex items-center justify-between"><h4 class="mr-2 mb-1 text-lg font-medium text-gray-900"> </h4> <span class="absolute top-0 right-0 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800" title="Anzahl der verfügbaren Produkte"> </span></div> <div class="text-sm text-gray-500"> </div></div> <div class="mt-3 flex w-full flex-wrap gap-x-3 gap-y-2 text-xs"><!> <!> <!> <div class="flex items-center text-blue-600"><!> <a target="_blank" rel="noopener noreferrer" class="whitespace-nowrap">Route planen</a></div></div> <div class="mt-3"><div class="mb-1 flex items-center justify-between"><h5 class="text-xs font-medium text-gray-700">Inventar:</h5> <button class="flex items-center text-xs text-blue-600 hover:text-blue-800"><!></button></div> <!></div></div>'),UI=B('<div class="divide-y divide-gray-200"></div>'),zI=B('<div class="relative overflow-hidden rounded-xl"><div class="absolute top-0 right-0 z-10 h-2 w-4 bg-white"></div> <div class="search-results-container custom-scrollbar max-h-[500px] overflow-y-auto pr-[2px] svelte-ylzv2r"><!></div> <div class="absolute right-0 bottom-0 z-10 h-3 w-4 rounded-br-xl bg-white"></div></div>');function BI(r,e){er(e,!0);let t=re(at([])),n=re(!0),i=re(at([])),s=re(at({manufacturers:[],products:[]})),o=re(at({})),l=re(at({}));Tt(()=>{const b=uo.subscribe(E=>{R(t,[...E],!0),R(n,!1)}),v=Jt.subscribe(E=>{R(s,{manufacturers:[...E.manufacturers],products:[...E.products]},!0)}),I=$t.subscribe(E=>{R(o,E.reduce((P,y)=>(P[y.id]=y,P),{}),!0)}),A=Xt.subscribe(E=>{R(l,E.reduce((P,y)=>(P[y.id]=y,P),{}),!0)});return()=>{b(),v(),I(),A()}});function d(b){const v=c(o)[b];return(v==null?void 0:v.name)||"Unbekanntes Produkt"}function h(b){const v=c(l)[b];return(v==null?void 0:v.name)||"Unbekannter Hersteller"}function p(b){const v=c(o)[b];return v?h(v.manufacturerId):"Unbekannt"}function w(b){return k(b).reduce((I,A)=>I+A.quantity,0)}function T(b){c(i).includes(b)?R(i,c(i).filter(v=>v!==b),!0):R(i,[...c(i),b],!0)}function S(b){return c(i).includes(b.id)}function k(b){if(c(s).manufacturers.length===0&&c(s).products.length===0)return $(b.inventory);const v=b.inventory.filter(I=>{if(c(s).products.length>0)return c(s).products.includes(I.productId);if(c(s).manufacturers.length>0){const A=c(o)[I.productId];return A&&c(s).manufacturers.includes(A.manufacturerId)}return!0});return $(v)}function $(b){return!b.length||Object.keys(c(o)).length===0||Object.keys(c(l)).length===0?b:[...b].sort((v,I)=>{const A=c(o)[v.productId],E=c(o)[I.productId];if(!A||!E)return 0;const P=c(l)[A.manufacturerId],y=c(l)[E.manufacturerId];if(!P||!y)return 0;const j=P.name.localeCompare(y.name);return j!==0?j:A.name.localeCompare(E.name)})}function O(b){typeof window<"u"&&window.dispatchEvent(new CustomEvent("zoom-to-location",{detail:{latitude:b.latitude,longitude:b.longitude,zoom:14,companyId:b.id}}))}function ee(b){return`${b.address}, ${b.country}-${b.postalCode} ${b.city}`}var z=zI(),V=C(g(z),2),D=g(V);{var x=b=>{var v=AI();N(b,v)},L=(b,v)=>{{var I=E=>{var P=RI();N(E,P)},A=E=>{var P=UI();ar(P,21,()=>c(t),y=>y.id,(y,j)=>{var ie=FI();ie.__click=[PI,O,j],ie.__keydown=[CI,O,j];var q=g(ie),W=g(q),oe=g(W),de=g(oe,!0);m(oe);var Pe=C(oe,2),Me=g(Pe,!0);m(Pe),m(W);var Xe=C(W,2),pe=g(Xe,!0);m(Xe),m(q);var ke=C(q,2),ne=g(ke);{var _e=G=>{var ae=SI(),ge=g(ae);jo(ge,{size:14,class:"mr-1.5 flex-shrink-0"});var be=C(ge,2);m(ae),Ae(()=>{nt(be,"href",c(j).website),nt(be,"title",`Besuchen Sie die Website von ${c(j).name??""}`),nt(be,"aria-label",`Besuchen Sie die Website von ${c(j).name??""}`)}),N(G,ae)};te(ne,G=>{c(j).website&&G(_e)})}var ue=C(ne,2);{var K=G=>{var ae=kI(),ge=C(g(ae),2);m(ae),Ae(()=>{nt(ge,"href",`mailto:${c(j).email}`),nt(ge,"title",`Kontaktieren Sie ${c(j).name??""} per E-Mail`),nt(ge,"aria-label",`Kontaktieren Sie ${c(j).name??""} per E-Mail`)}),N(G,ae)};te(ue,G=>{c(j).email&&G(K)})}var X=C(ue,2);{var Y=G=>{var ae=xI(),ge=g(ae);Hg(ge,{size:14,class:"mr-1.5 flex-shrink-0"});var be=C(ge,2);m(ae),Ae(()=>{nt(be,"href",`tel:${c(j).phone}`),nt(be,"title",`Rufen Sie ${c(j).name??""} an: ${c(j).phone??""}`),nt(be,"aria-label",`Rufen Sie ${c(j).name??""} an: ${c(j).phone??""}`)}),N(G,ae)};te(X,G=>{c(j).phone&&G(Y)})}var he=C(X,2),Te=g(he);qg(Te,{size:14,class:"mr-1.5 flex-shrink-0"});var ye=C(Te,2);m(he),m(ke);var Oe=C(ke,2),He=g(Oe),Be=C(g(He),2);Be.__click=[DI,T,j];var lt=g(Be);{var H=G=>{var ae=NI(),ge=C(ce(ae));zg(ge,{size:12,class:"ml-1"}),N(G,ae)},F=G=>{var ae=VI(),ge=C(ce(ae));Sl(ge,{size:12,class:"ml-1"}),N(G,ae)};te(lt,G=>{c(i).includes(c(j).id)?G(H):G(F,!1)})}m(Be),m(He);var Z=C(He,2);{var se=G=>{var ae=MI();N(G,ae)},me=G=>{var ae=$I(),ge=g(ae);{var be=we=>{var $e=Ue(),Ye=ce($e);ar(Ye,17,()=>c(j).inventory,Le=>Le.productId,(Le,je)=>{var Ze=OI(),Je=g(Ze),Ge=g(Je),We=g(Ge,!0);m(Ge);var Ke=C(Ge,2),gt=g(Ke,!0);m(Ke),m(Je);var xe=C(Je,2),Ce=g(xe);m(xe),m(Ze),Ae((Ne,rt)=>{Re(We,Ne),Re(gt,rt),Re(Ce,`×${c(je).quantity??""}`)},[()=>d(c(je).productId),()=>p(c(je).productId)]),N(Le,Ze)}),N(we,$e)},fe=we=>{var $e=Ue(),Ye=ce($e);ar(Ye,17,()=>k(c(j)).slice(0,4),Le=>Le.productId,(Le,je)=>{var Ze=LI(),Je=g(Ze),Ge=g(Je),We=g(Ge,!0);m(Ge);var Ke=C(Ge,2),gt=g(Ke,!0);m(Ke),m(Je);var xe=C(Je,2),Ce=g(xe);m(xe),m(Ze),Ae((Ne,rt)=>{Re(We,Ne),Re(gt,rt),Re(Ce,`×${c(je).quantity??""}`)},[()=>d(c(je).productId),()=>p(c(je).productId)]),N(Le,Ze)}),N(we,$e)};te(ge,we=>{c(i).includes(c(j).id)?we(be):we(fe,!1)})}m(ae),N(G,ae)};te(Z,G=>{k(c(j)).length===0&&!S(c(j))?G(se):G(me,!1)})}m(Oe),m(ie),Ae((G,ae,ge,be)=>{Re(de,c(j).name),nt(Pe,"aria-label",`Anzahl der verfügbaren Produkte: ${G??""}`),Re(Me,ae),Re(pe,ge),nt(ye,"href",be),nt(ye,"title",`Route zu ${c(j).name??""} planen`),nt(ye,"aria-label",`Route zu ${c(j).name??""} planen`)},[()=>w(c(j)),()=>w(c(j)),()=>ee(c(j)),()=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${c(j).address}, ${c(j).postalCode} ${c(j).city}, ${c(j).country}`)}`]),N(y,ie)}),m(P),N(E,P)};te(b,E=>{c(t).length===0?E(I):E(A,!1)},v)}};te(D,b=>{c(n)?b(x):b(L,!1)})}m(V),Ee(2),m(z),N(r,z),tr()}or(["click","keydown"]);function jI(r,e){r.key==="Escape"&&R(e,!1)}var qI=B('<div class="absolute top-full left-0 z-50 mt-0 w-full rounded-b-xl border border-gray-300 bg-white shadow-lg"><!></div>'),HI=B('<div class="search-control relative"><div class="relative"><input type="text" placeholder="Adresse, Firmenname, Hersteller, etc."> <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500"><!></div></div> <!></div>');function lh(r,e){er(e,!0);let t=re(""),n=re(!1),i=re(0),s;function o(z){var v,I;const V=z,D=(v=V.detail)==null?void 0:v.source,x=(I=V.detail)==null?void 0:I.target,L=x==null?void 0:x.closest(".filter-fab"),b=x==null?void 0:x.closest(".mobile-filter-panel");(D==="map-click"||D==="map-drag")&&!L&&!b&&R(n,!1)}Ln(()=>{if(typeof window<"u"){window.addEventListener("map-interaction",o);const z=_m();z.text&&R(t,z.text,!0),(z.text||z.manufacturers.length>0||z.products.length>0)&&R(n,!0)}}),xh(()=>{typeof window<"u"&&window.removeEventListener("map-interaction",o)}),Tt(()=>{const z=uo.subscribe(D=>{R(i,D.length,!0)}),V=Jt.subscribe(D=>{(D.manufacturers.length>0||D.products.length>0)&&R(n,!0)});return()=>{z(),V()}});function l(){s&&clearTimeout(s),s=setTimeout(()=>{EI(c(t)),c(t).trim()&&c(i)>0?R(n,!0):c(t).trim()||Jt.subscribe(V=>{V.manufacturers.length===0&&V.products.length===0&&R(n,!1)})()},300)}function d(){R(n,!0),typeof window<"u"&&window.dispatchEvent(new CustomEvent("close-map-popups"))}function h(){let z=!1;return Jt.subscribe(D=>{z=D.manufacturers.length>0||D.products.length>0})(),z}function p(z){setTimeout(()=>{const V=z.relatedTarget,D=V==null?void 0:V.closest(".search-results-container"),x=V==null?void 0:V.closest(".filter-fab"),L=V==null?void 0:V.closest(".mobile-filter-panel");(!V||!D&&!x&&!L)&&(h()||R(n,!1))},200)}var w=HI(),T=g(w),S=g(T);qe(S),S.__input=l,S.__keydown=[jI,n];var k=C(S,2),$=g(k);Wg($,{size:18}),m(k),m(T);var O=C(T,2);{var ee=z=>{var V=qI(),D=g(V);BI(D,{}),m(V),N(z,V)};te(O,z=>{c(n)&&z(ee)})}m(w),Ae(()=>It(S,1,`w-full rounded-xl ${(c(n)?"rounded-b-none":"")??""} border border-gray-300 ${(c(n)?"border-b-0":"")??""} bg-white py-2 pr-4 pl-4 shadow-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500`)),fr("focus",S,d),fr("blur",S,p),dt(S,()=>c(t),z=>R(t,z)),N(r,w),tr()}or(["input","keydown"]);function GI(){ho()}function WI(r,e,t){c(e)||R(t,!c(t))}function KI(r,e,t,n){e.debug("======= DEBUG INFO ======="),e.debug("Manufacturers:",c(t)),e.debug("Selected manufacturers:",c(n));const i=fI(),s=pI(),o=mI();e.debug("Products:",i),e.debug("Companies:",s),e.debug("Current filters:",o),e.debug("Product-Manufacturer relationships:"),i.forEach(l=>{const d=c(t).find(h=>h.id===l.manufacturerId);e.debug(`Product: ${l.name} (${l.id}) → Manufacturer: ${(d==null?void 0:d.name)||"Unknown"} (${l.manufacturerId})`)}),e.debug("Inventory relationships:"),s.forEach(l=>{e.debug(`Company: ${l.name} (${l.id})`),l.inventory.forEach(d=>{const h=i.find(p=>p.id===d.productId);if(h){const p=c(t).find(w=>w.id===h.manufacturerId);e.debug(`  - Product: ${h.name} (${d.productId}) → Manufacturer: ${(p==null?void 0:p.name)||"Unknown"} (${h.manufacturerId}), Quantity: ${d.quantity}`)}else e.warn(`  - Product not found: ${d.productId}, Quantity: ${d.quantity}`)})}),e.debug("=========================")}var QI=B("<!> <span>Alle Hersteller</span>",1),XI=B("<!> <span> </span>",1),JI=B("<!> <span> </span>",1),YI=B('<button><div class="flex items-center gap-2"><!></div> <!></button>'),ZI=B('<span class="text-xs font-medium text-gray-700"> </span> <button class="flex h-2 items-center gap-1 text-xs text-blue-600 hover:text-blue-800"><!> Zurücksetzen</button>',1),eT=B('<span class="text-xs font-medium text-gray-700">Hersteller auswählen</span>'),tT=B('<div class="flex items-center justify-between border-b border-gray-200 p-2"><!></div>'),rT=(r,e,t)=>e(c(t).id),nT=B('<div class="py-1"><label class="flex w-full cursor-pointer items-center"><div class="flex flex-shrink-0 items-center"><input type="checkbox" class="sr-only"> <div><!></div></div> <span class="truncate text-sm text-gray-700"> </span></label></div>'),iT=B('<div class="border-t border-gray-200 p-2"><button class="flex w-full items-center justify-center gap-1 rounded bg-gray-100 px-3 py-1 text-xs text-gray-700 hover:bg-gray-200"><!> Debug Info</button></div>'),sT=B("<div><!> <div></div> <!></div>"),aT=B("<div><!> <!></div>");function ch(r,e){er(e,!0);const t=Ar("ManufacturerFilter"),n=Mr(!1);let i,s=re(!1),o=re(at([])),l=re(at([])),d=re(!1),h=re(!1),p=[],w=[];Ln(()=>{R(s,!!i.closest(".mobile-filter-panel")),c(s)&&R(d,!0)}),Tt(()=>{if(typeof window<"u"){const V=new URLSearchParams(window.location.search);R(h,V.get("debug")==="true")}}),Tt(()=>{const V=Xt.subscribe(D=>{const x=D.map(L=>L.id).sort().join(",");x!==p&&(p=x,R(o,[...D].sort((L,b)=>L.name.localeCompare(b.name)),!0))});return()=>{V()}}),Tt(()=>{const V=Jt.subscribe(D=>{const x=D.manufacturers.slice().sort().join(",");x!==w&&(w=x,R(l,[...D.manufacturers],!0))});return()=>{V()}});function T(V){II(V)}function S(V){if(c(s))return;V.target.closest(".manufacturer-dropdown")||R(d,!1)}Tt(()=>(c(d)&&!c(s)?document.addEventListener("click",S):document.removeEventListener("click",S),()=>{document.removeEventListener("click",S)}));var k=aT(),$=g(k);{var O=V=>{var D=YI();D.__click=[WI,s,d];var x=g(D),L=g(x);{var b=E=>{var P=QI(),y=ce(P);ei(y,{size:18}),Ee(2),N(E,P)},v=(E,P)=>{{var y=ie=>{var q=XI(),W=ce(q);ei(W,{size:18,class:"text-blue-600"});var oe=C(W,2),de=g(oe,!0);m(oe),Ae(Pe=>Re(de,Pe),[()=>{var Pe;return((Pe=c(o).find(Me=>Me.id===c(l)[0]))==null?void 0:Pe.name)||"Hersteller"}]),N(ie,q)},j=ie=>{var q=JI(),W=ce(q);ei(W,{size:18,class:"text-blue-600"});var oe=C(W,2),de=g(oe);m(oe),Ae(()=>Re(de,`${c(l).length??""} Hersteller ausgewählt`)),N(ie,q)};te(E,ie=>{c(l).length===1?ie(y):ie(j,!1)},P)}};te(L,E=>{c(l).length===0?E(b):E(v,!1)})}m(x);var I=C(x,2);const A=zr(()=>c(d)?"rotate-180 transform":"");Sl(I,{size:18,get class(){return c(A)}}),m(D),Ae(()=>It(D,1,`flex w-full items-center justify-between ${(c(d)?"rounded-t-xl rounded-b-none border-b-0":"rounded-xl")??""} border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 shadow-md hover:bg-gray-50`)),N(V,D)};te($,V=>{c(s)||V(O)})}var ee=C($,2);{var z=V=>{var D=sT(),x=g(D);{var L=A=>{var E=tT(),P=g(E);{var y=ie=>{var q=ZI(),W=ce(q),oe=g(W);m(W);var de=C(W,2);de.__click=[GI];var Pe=g(de);br(Pe,{size:12}),Ee(),m(de),Ae(()=>Re(oe,`${c(l).length??""} ausgewählt`)),N(ie,q)},j=ie=>{var q=eT();N(ie,q)};te(P,ie=>{c(l).length>0?ie(y):ie(j,!1)})}m(E),N(A,E)};te(x,A=>{c(s)||A(L)})}var b=C(x,2);ar(b,21,()=>c(o),A=>A.id,(A,E)=>{var P=nT(),y=g(P),j=g(y),ie=g(j);qe(ie),ie.__change=[rT,T,E];var q=C(ie,2),W=g(q);{var oe=Me=>{Cl(Me,{size:12,class:"text-white"})};te(W,Me=>{c(l).includes(c(E).id)&&Me(oe)})}m(q),m(j);var de=C(j,2),Pe=g(de,!0);m(de),m(y),m(P),Ae((Me,Xe)=>{Yi(ie,Me),It(q,1,Xe),nt(de,"title",c(E).name),Re(Pe,c(E).name)},[()=>c(l).includes(c(E).id),()=>`mr-2 flex h-4 w-4 items-center justify-center rounded border ${c(l).includes(c(E).id)?"border-blue-500 bg-blue-500":"border-gray-300"}`]),N(A,P)}),m(b);var v=C(b,2);{var I=A=>{var E=iT(),P=g(E);P.__click=[KI,t,o,l];var y=g(P);Fg(y,{size:12}),Ee(),m(P),m(E),N(A,E)};te(v,A=>{c(h)&&A(I)})}m(D),Ae(()=>{It(D,1,`${(c(s)?"relative":"absolute z-50 mt-0 w-full")??""} overflow-hidden ${(c(s)?"":"rounded-b-xl border border-gray-200 bg-white shadow-lg")??""}`),It(b,1,`custom-scrollbar ${(c(s)?"max-h-[350px]":"max-h-[300px]")??""} overflow-y-auto p-2`)}),N(V,D)};te(ee,V=>{(c(d)||c(s))&&V(z)})}return m(k),Ma(k,V=>i=V,()=>i),Ae(()=>It(k,1,`manufacturer-dropdown relative ${(c(s)?"":"w-full")??""}`)),N(r,k),tr({showSearchResults:n})}or(["click","change"]);function oT(){ho()}function lT(r,e,t){c(e)||R(t,!c(t))}var cT=B("<!> <span>Alle Produkte</span>",1),uT=B('<!> <span class="truncate svelte-1loecnu"> </span>',1),dT=B("<!> <span> </span>",1),hT=B('<button><div class="flex min-w-0 flex-1 items-center gap-2"><!></div> <!></button>'),fT=B('<span class="text-xs font-medium text-gray-700"> </span> <button class="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800"><!> Zurücksetzen</button>',1),pT=B('<span class="text-xs font-medium text-gray-700">Produkte auswählen</span>'),mT=B('<div class="flex items-center justify-between border-b border-gray-200 p-2"><!></div>'),gT=B('<div class="p-2 text-sm text-gray-500 italic">Keine Produkte verfügbar</div>'),vT=(r,e,t)=>e(c(t).id),_T=B('<div class="py-1"><label class="flex w-full cursor-pointer items-center"><div class="flex flex-shrink-0 items-center"><input type="checkbox" class="sr-only"> <div><!></div></div> <span class="truncate text-sm text-gray-700 svelte-1loecnu"> </span></label></div>'),yT=B("<div><!> <div><!></div></div>"),bT=B("<div><!> <!></div>");function uh(r,e){er(e,!0);let t,n=re(!1),i=re(at([])),s=re(at([])),o=re(!1),l=re(at({})),d=[],h=[];Ln(()=>{R(n,!!t.closest(".mobile-filter-panel")),c(n)&&R(o,!0)}),Tt(()=>{const z=Xt.subscribe(V=>{const D=V.map(x=>x.id).sort().join(",");D!==h&&(h=D,R(l,V.reduce((x,L)=>(x[L.id]=L,x),{}),!0),p())});return()=>{z()}}),Tt(()=>{const z=yI.subscribe(V=>{const D=V.map(x=>x.id).sort().join(",");D!==d&&(d=D,R(i,[...V],!0),p())});return()=>{z()}}),Tt(()=>{const z=Jt.subscribe(V=>{R(s,[...V.products],!0)});return()=>{z()}});function p(){if(c(i).length===0||Object.keys(c(l)).length===0)return;const z=[...c(i)].sort((x,L)=>{var A,E;const b=((A=c(l)[x.manufacturerId])==null?void 0:A.name)||"",v=((E=c(l)[L.manufacturerId])==null?void 0:E.name)||"",I=b.localeCompare(v);return I!==0?I:x.name.localeCompare(L.name)}),V=z.map(x=>x.id).join(","),D=c(i).map(x=>x.id).join(",");V!==D&&R(i,z,!0)}function w(z){TI(z)}function T(z){if(c(n))return;z.target.closest(".product-dropdown")||R(o,!1)}Tt(()=>(c(o)&&!c(n)?document.addEventListener("click",T):document.removeEventListener("click",T),()=>{document.removeEventListener("click",T)}));var S=bT(),k=g(S);{var $=z=>{var V=hT();V.__click=[lT,n,o];var D=g(V),x=g(D);{var L=A=>{var E=cT(),P=ce(E);ti(P,{size:18}),Ee(2),N(A,E)},b=(A,E)=>{{var P=j=>{var ie=uT(),q=ce(ie);ti(q,{size:18,class:"text-blue-500"});var W=C(q,2),oe=g(W,!0);m(W),Ae(de=>Re(oe,de),[()=>{var de;return((de=c(i).find(Pe=>Pe.id===c(s)[0]))==null?void 0:de.name)||"Produkt"}]),N(j,ie)},y=j=>{var ie=dT(),q=ce(ie);ti(q,{size:18,class:"text-blue-500"});var W=C(q,2),oe=g(W);m(W),Ae(()=>Re(oe,`${c(s).length??""} Produkte ausgewählt`)),N(j,ie)};te(A,j=>{c(s).length===1?j(P):j(y,!1)},E)}};te(x,A=>{c(s).length===0?A(L):A(b,!1)})}m(D);var v=C(D,2);const I=zr(()=>c(o)?"rotate-180 transform":"");Sl(v,{size:18,get class(){return c(I)}}),m(V),Ae(()=>It(V,1,`flex w-full items-center justify-between ${(c(o)?"rounded-t-xl rounded-b-none border-b-0":"rounded-xl")??""} border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 shadow-md hover:bg-gray-50`)),N(z,V)};te(k,z=>{c(n)||z($)})}var O=C(k,2);{var ee=z=>{var V=yT(),D=g(V);{var x=A=>{var E=mT(),P=g(E);{var y=ie=>{var q=fT(),W=ce(q),oe=g(W);m(W);var de=C(W,2);de.__click=[oT];var Pe=g(de);br(Pe,{size:12}),Ee(),m(de),Ae(()=>Re(oe,`${c(s).length??""} ausgewählt`)),N(ie,q)},j=ie=>{var q=pT();N(ie,q)};te(P,ie=>{c(s).length>0?ie(y):ie(j,!1)})}m(E),N(A,E)};te(D,A=>{c(n)||A(x)})}var L=C(D,2),b=g(L);{var v=A=>{var E=gT();N(A,E)},I=A=>{var E=Ue(),P=ce(E);ar(P,17,()=>c(i),y=>y.id,(y,j)=>{var ie=_T(),q=g(ie),W=g(q),oe=g(W);qe(oe),oe.__change=[vT,w,j];var de=C(oe,2),Pe=g(de);{var Me=ke=>{Cl(ke,{size:12,class:"text-white"})};te(Pe,ke=>{c(s).includes(c(j).id)&&ke(Me)})}m(de),m(W);var Xe=C(W,2),pe=g(Xe,!0);m(Xe),m(q),m(ie),Ae((ke,ne)=>{Yi(oe,ke),It(de,1,ne,"svelte-1loecnu"),nt(Xe,"title",c(j).name),Re(pe,c(j).name)},[()=>c(s).includes(c(j).id),()=>`mr-2 flex h-4 w-4 items-center justify-center rounded border ${c(s).includes(c(j).id)?"border-blue-500 bg-blue-500":"border-gray-300"}`]),N(y,ie)}),N(A,E)};te(b,A=>{c(i).length===0?A(v):A(I,!1)})}m(L),m(V),Ae(()=>{It(V,1,`${(c(n)?"relative":"absolute z-50 mt-0 w-full")??""} overflow-hidden ${(c(n)?"":"rounded-b-xl border border-gray-200 bg-white shadow-lg")??""}`),It(L,1,`custom-scrollbar ${(c(n)?"max-h-[350px]":"max-h-[300px]")??""} overflow-y-auto p-2`)}),N(z,V)};te(O,z=>{(c(o)||c(n))&&z(ee)})}m(S),Ma(S,z=>t=z,()=>t),Ae(()=>It(S,1,`product-dropdown relative ${(c(n)?"":"w-full")??""}`)),N(r,S),tr()}or(["click","change"]);var wT=B('<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">'),ET=B('<div class="absolute inset-0 z-10 flex items-center justify-center bg-white/50"><div class="rounded-lg bg-white p-6 text-center shadow-md"><p class="text-lg text-gray-600">Keine zu den Suchkriterien passenden Anbieter gefunden</p></div></div>'),IT=B('<div class="absolute inset-0"><!> <div class="h-full w-full"></div></div>');function TT(r,e){er(e,!0);const t=Ar("RentalMap");function n(){}let i,s=null,o=[],l=re(at([])),d=re(at([])),h=re(!0),p=re(at({})),w=re(at({}));Tt(()=>{const x=_I.subscribe(I=>{R(l,[...I],!0),O()}),L=uo.subscribe(I=>{R(d,[...I],!0)}),b=$t.subscribe(I=>{R(p,I.reduce((A,E)=>(A[E.id]=E,A),{}),!0)}),v=Xt.subscribe(I=>{R(w,I.reduce((A,E)=>(A[E.id]=E,A),{}),!0)});return()=>{x(),L(),b(),v()}}),Ln(async()=>{if(typeof window<"u")try{const{L:x}=await Eu(async()=>{const{L}=await import("../chunks/Ot-SzNcA.js");return{L}},[],import.meta.url);s=x.map(i,{zoomControl:!1,attributionControl:!1}).setView([51.1657,10.4515],6),x.control.zoom({position:"bottomright",zoomInTitle:"Vergrößern",zoomOutTitle:"Verkleinern"}).addTo(s),x.control.attribution({position:"bottomleft",prefix:'Powered by <a href="https://leafletjs.com" target="_blank">Leaflet</a>'}).addAttribution('&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Mitwirkende').addTo(s),x.Popup.prototype.options.className="custom-popup",x.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{maxZoom:19,subdomains:"abcd"}).addTo(s),s.on("click",L=>{const b=o.some(v=>{const I=v.getElement();return I&&document.elementsFromPoint(L.originalEvent.clientX,L.originalEvent.clientY).some(A=>A===I||I.contains(A))});typeof window<"u"&&window.dispatchEvent&&window.dispatchEvent(new CustomEvent("map-interaction",{detail:{source:"map-click",isMarkerClick:b,target:L.originalEvent.target}}))}),s.on("dragstart",()=>{typeof window<"u"&&window.dispatchEvent&&window.dispatchEvent(new CustomEvent("map-interaction",{detail:{source:"map-drag"}}))}),typeof window<"u"&&(window.addEventListener("zoom-to-location",L=>{const{latitude:b,longitude:v,zoom:I,companyId:A}=L.detail;s&&b&&v&&(s.setView([b,v],I||14),A&&setTimeout(()=>{const E=o.find(P=>{const y=c(l).find(j=>j.latitude===P.getLatLng().lat&&j.longitude===P.getLatLng().lng);return y&&y.id===A});E&&E.openPopup()},100))}),window.addEventListener("close-map-popups",()=>{s&&s.closePopup()})),O();try{if(typeof document<"u"){const L=document.querySelector(".leaflet-control-container");L&&L.querySelectorAll("*").forEach(v=>{v.textContent==="Zoom in"&&(v.textContent="Vergrößern"),v.textContent==="Zoom out"&&(v.textContent="Verkleinern")})}}catch(L){t.error("Error translating map elements:",L)}R(h,!1)}catch(x){t.error("Error initializing map:",x),R(h,!1)}}),xh(()=>{s&&s.remove(),typeof window<"u"&&(window.removeEventListener("zoom-to-location",()=>{}),window.removeEventListener("close-map-popups",()=>{}))});function T(x){const L=c(p)[x];return(L==null?void 0:L.name)||"Unknown product"}function S(x){const L=c(w)[x];return(L==null?void 0:L.name)||"Unknown manufacturer"}function k(x){const L=c(p)[x];return L?S(L.manufacturerId):"Unknown"}function $(x){const L=c(d).find(P=>P.id===x);if(!L)return"";let b=[...L.inventory],v=[],I=[];Jt.subscribe(({manufacturers:P,products:y})=>{v=P,I=y})(),(v.length>0||I.length>0)&&(I.length>0?b=b.filter(P=>I.includes(P.productId)):v.length>0&&(b=b.filter(P=>{const y=c(p)[P.productId];return y&&v.includes(y.manufacturerId)})));const A=b.reduce((P,y)=>P+y.quantity,0);let E="";return b.length>0&&(E=b.slice(0,3).map(P=>{const y=T(P.productId),j=k(P.productId);return`
					<div class="flex items-center justify-between text-xs py-1 border-t border-gray-200">
						<div>
							<div class="font-medium">${y}</div>
							<div class="text-gray-500">${j}</div>
						</div>
						<div class="ml-2 font-medium">×${P.quantity}</div>
					</div>
				`}).join(""),b.length>3&&(E+=`
					<div class="text-xs text-center text-blue-600 pt-1 border-t border-gray-200">
						+${b.length-3} mehr Artikel
					</div>
				`)),`
			<div class="map-popup" style="min-width: 280px; max-width: 350px; margin-top: 20px;">				
				<div class="relative">
					<div class="font-medium text-lg mt-2">${L.name}</div>
					<span class="absolute -left-1 -top-5 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
						${A} Produkte
					</span>
					<div class="text-sm text-gray-600 mb-2">${L.address}, ${L.postalCode} ${L.city}</div>
				</div>
				
				<!-- Contact links -->
				<div class="flex flex-wrap gap-x-3 gap-y-2 text-xs mb-3">
					${L.website?`<a href="${L.website}" target="_blank" class="flex items-center text-blue-600 hover:text-blue-800">
							<svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
							<span class="whitespace-nowrap">Website</span>
						</a>`:""}
					
					${L.email?`<a href="mailto:${L.email}" class="flex items-center text-blue-600 hover:text-blue-800">
							<svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
							<span class="whitespace-nowrap">E-Mail</span>
						</a>`:""}
					
					<a 
						href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${L.address}, ${L.postalCode} ${L.city}, ${L.country}`)}" 
						target="_blank"
						class="flex items-center text-blue-600 hover:text-blue-800"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5 flex-shrink-0"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>
						<span class="whitespace-nowrap">Route planen</span>
					</a>
				</div>
				
				${E?`<div class="font-medium text-sm mb-1">Inventar:</div>${E}`:""}
			</div>
		`}async function O(){if(s&&(o.forEach(x=>x.remove()),o=[],c(l).length>0))try{const{L:x}=await Eu(async()=>{const{L}=await import("../chunks/Ot-SzNcA.js");return{L}},[],import.meta.url);if(o=c(l).map(L=>{const b=x.marker([L.latitude,L.longitude],{title:L.title});return s&&(b.addTo(s).bindPopup($(L.id),{className:"custom-popup",closeButton:!0}),b.on("click",function(v){if(s){const I=s.getZoom();s.setView(v.target.getLatLng(),I)}})),b}),o.length>0&&s){const L=x.featureGroup(o);s.fitBounds(L.getBounds(),{padding:[50,50]})}}catch(x){t.error("Error updating markers:",x)}}var ee=IT();vg(x=>{var L=wT();N(x,L)});var z=g(ee);{var V=x=>{var L=ET();N(x,L)};te(z,x=>{!c(h)&&c(l).length===0&&x(V)})}var D=C(z,2);return Ma(D,x=>i=x,()=>i),m(ee),N(r,ee),tr({setSearchResultsVisibility:n})}const yr=Ar("auth"),as=Mr(null),dh=Mr(!0),hh=Mr(null),AT=bs(as,r=>r!==null),RT=bs(as,r=>(r==null?void 0:r.isAdmin)===!0);let On=null;if(lr())try{const e=Vl({apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""});On=hm(e),yr.debug("Firebase Auth initialized")}catch(r){yr.error("Failed to initialize Firebase Auth:",r)}function PT(){return!lr()||!On?(dh.set(!1),()=>{}):qw(On,async e=>{try{if(e){const t=await CT(e);as.set(t)}else as.set(null)}catch(t){yr.error("Error processing auth state change:",t),as.set(null),t instanceof Error?hh.set(t.message):hh.set("Unknown authentication error")}finally{dh.set(!1)}})}async function CT(r){try{const e=Tr(Zt,"users",r.uid),t=await U0(e);if(t.exists()){const n=t.data();return{uid:r.uid,email:r.email||"",isAdmin:n.isAdmin||!1}}}catch(e){yr.error("Error fetching user data:",e)}return{uid:r.uid,email:r.email||"",isAdmin:!1}}async function ST(r,e){if(yr.debug(`Attempting to sign in with email: ${r}`),!On)return yr.error("Auth instance not initialized"),Promise.reject(new Error("Auth service not available"));try{return await zw(On,r,e),yr.debug("Sign in successful"),Promise.resolve()}catch(t){return yr.error("Sign in failed:",t),Promise.reject(t)}}async function kT(){if(!On)return yr.error("Auth instance not initialized"),Promise.reject(new Error("Auth service not available"));try{await Hw(On),yr.debug("Sign out successful")}catch(r){throw yr.error("Sign out failed:",r),r}}typeof window<"u"&&PT();function xc(r,e,t){return[...r].sort((n,i)=>typeof n[e]=="string"&&typeof i[e]=="string"?t==="asc"?n[e].localeCompare(i[e]):i[e].localeCompare(n[e]):typeof n[e]=="boolean"&&typeof i[e]=="boolean"?t==="asc"?n[e]===i[e]?0:n[e]?1:-1:n[e]===i[e]?0:n[e]?-1:1:typeof n[e]=="number"&&typeof i[e]=="number"?t==="asc"?n[e]-i[e]:i[e]-n[e]:0)}function Dc(r,e,t){return r===e?[t==="asc"?"desc":"asc",r]:["asc",r]}function Ei(r){return[...r].sort((e,t)=>e.name.localeCompare(t.name))}var xT=B('<div class="fixed inset-0 z-[60] flex items-center justify-center bg-black/50"><div class="w-96 rounded-lg bg-white p-6 shadow-xl"><h3 class="mb-4 text-lg font-semibold">Bestätigung</h3> <p class="mb-4"> </p> <div class="flex justify-end space-x-3"><button class="rounded-md bg-gray-200 px-4 py-2 text-gray-800">Abbrechen</button> <button class="rounded-md bg-red-600 px-4 py-2 text-white"> </button></div></div></div>');function Nc(r,e){er(e,!0);function t(o){o.key==="Enter"?(o.preventDefault(),e.onConfirm()):o.key==="Escape"&&(o.preventDefault(),e.onCancel())}Tt(()=>{if(e.show)return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}});var n=Ue(),i=ce(n);{var s=o=>{var l=xT(),d=g(l),h=C(g(d),2),p=g(h);m(h);var w=C(h,2),T=g(w);T.__click=function(...$){var O;(O=e.onCancel)==null||O.apply(this,$)};var S=C(T,2);S.__click=function(...$){var O;(O=e.onConfirm)==null||O.apply(this,$)};var k=g(S,!0);m(S),m(w),m(d),m(l),Ae(()=>{Re(p,`Möchten Sie wirklich "${e.itemName??""}" löschen? Diese Aktion kann nicht rückgängig gemacht
				werden.`),T.disabled=e.loading,S.disabled=e.loading,Re(k,e.loading?"Löschen...":"Löschen")}),N(o,l)};te(i,o=>{e.show&&o(s)})}N(r,n),tr()}or(["click"]);const Ds={MANUFACTURER:/^\d{3}$/,PRODUCT:/^(\d{3})-(\w{4})-(\w+)$/,RENTAL_COMPANY:/^K\d{4,}$/,PRODUCT_FLEXIBLE:/^(\d{3})[-_]?(\w{4})[-_]?(\w+)$/},DT=Ar("validation");function _l(r,e){if(!e)return{valid:!1,message:"ID ist erforderlich"};switch(r){case"manufacturer":if(!yl(e))return{valid:!1,message:"Hersteller-ID muss 3 Ziffern enthalten"};break;case"product":if(!NT(e))return{valid:!1,message:"Produkt-ID muss dem Format XXX-XXXX-XXXX entsprechen"};break;case"rental-company":if(!VT(e))return{valid:!1,message:"Firmen-ID muss mit K beginnen und mindestens 4 Ziffern enthalten"};break;default:return{valid:!1,message:"Unbekannter Entitätstyp"}}return{valid:!0}}function yl(r){return Ds.MANUFACTURER.test(r)}function NT(r){return Ds.PRODUCT.test(r)}function VT(r){return Ds.RENTAL_COMPANY.test(r)}function MT(r){const e=r.match(Ds.PRODUCT_FLEXIBLE);if(!e)return r;const[,t,n,i]=e;return`${t}-${n}-${i}`}function fh(r){const e=r.match(Ds.PRODUCT_FLEXIBLE);return e?e[1]:(DT.warn(`Could not extract manufacturer ID from product ID: ${r}`),null)}function OT(r,e){R(e,null)}var LT=B('<div class="mb-4 rounded-md bg-red-50 p-4 text-red-800"> </div>'),$T=B("<!> Speichern...",1),FT=B("<!> Speichern",1),UT=B(`<div class="rounded-md border border-blue-200 bg-blue-50 p-4"><h3 class="mb-3 flex items-center text-lg font-medium"><!> Hersteller bearbeiten</h3> <form><div class="mb-3"><input type="text" placeholder="Herstellername" class="w-full rounded-md border border-gray-300 p-2" aria-label="Herstellername" title="Name des Herstellers" required></div> <div class="mb-3"><input type="text" placeholder="Hersteller-ID (3-stellige Zahl)" class="w-full rounded-md border border-gray-300 p-2" maxlength="3" title="Eindeutige Hersteller-ID (3-stellige Zahl)" aria-label="Hersteller-ID" required> <p class="mt-1 text-xs text-gray-500">Hinweis: Die Hersteller-ID wird für alle Produkte dieses Herstellers verwendet.</p></div> <div class="mb-3 flex items-center justify-between"><label class="flex cursor-pointer items-center gap-2" title="Aktiviert oder deaktiviert den Hersteller"><div class="relative"><input type="checkbox" class="peer sr-only"> <div class="h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-green-600 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-5"></div></div> <span>Aktiv</span></label> <div class="flex space-x-2"><button type="submit" class="flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-white disabled:bg-blue-300" title="Änderungen speichern" aria-label="Speichern"><!></button> <button type="button" class="flex items-center rounded-md bg-gray-200 px-3 py-1.5 text-gray-700" title="Bearbeitung abbrechen" aria-label="Abbrechen"><!></button></div></div></form></div>`),zT=B("<!> Hinzufügen...",1),BT=B("<!> Hinzufügen",1),jT=B(`<div class="rounded-md border border-gray-200 bg-gray-50 p-4"><h3 class="mb-3 flex items-center text-lg font-medium"><!> Neuer Hersteller</h3> <form><div class="mb-3"><input type="text" placeholder="Herstellername" class="mb-3 w-full rounded-md border border-gray-300 p-2" aria-label="Herstellername" title="Name des Herstellers" required> <input type="text" placeholder="Hersteller-ID (3-stellige Zahl)" class="w-full rounded-md border border-gray-300 p-2" maxlength="3" title="Eindeutige Hersteller-ID (3-stellige Zahl)" aria-label="Hersteller-ID" required></div> <div class="flex items-center justify-between"><label class="flex cursor-pointer items-center gap-2" title="Aktiviert oder deaktiviert den Hersteller"><div class="relative"><input type="checkbox" class="peer sr-only"> <div class="h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-green-600 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-5"></div></div> <span>Aktiv</span></label> <button type="submit" class="flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-white disabled:bg-blue-300" title="Neuen Hersteller hinzufügen" aria-label="Hersteller hinzufügen"><!></button></div></form></div>`),qT=(r,e)=>e("name"),HT=(r,e)=>e("isActive"),GT=B('<span class="flex items-center text-green-800"><!> Aktiv</span>'),WT=B('<span class="flex items-center text-red-800"><!> Inaktiv</span>'),KT=(r,e,t)=>e(c(t)),QT=(r,e,t)=>e(c(t).id,c(t).isActive),XT=(r,e,t)=>e(c(t).id,c(t).name),JT=B('<tr><td class="px-6 py-4 whitespace-nowrap"><span class="truncate-text"> </span></td><td class="px-6 py-4 whitespace-nowrap"><!></td><td class="flex justify-end space-x-2 px-6 py-4 text-right whitespace-nowrap"><button class="flex items-center rounded bg-blue-100 px-2 py-1 text-blue-800 hover:bg-blue-200" title="Hersteller bearbeiten" aria-label="Hersteller bearbeiten"><!></button> <button><!></button> <button class="flex items-center rounded bg-red-100 px-2 py-1 text-red-800 hover:bg-red-200" title="Hersteller löschen" aria-label="Hersteller löschen"><!></button></td></tr>'),YT=B('<div><!> <div class="grid grid-cols-1 gap-6 lg:grid-cols-3"><div class="lg:col-span-1"><!></div> <div class="lg:col-span-2"><div class="overflow-x-auto"><div class="custom-scrollbar max-h-[60vh] overflow-y-auto"><table class="min-w-full table-fixed divide-y divide-gray-200"><thead class="sticky top-0 z-10 bg-gray-50"><tr><th class="w-[60%] cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Name <!></th><th class="w-[10%] cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Status <!></th><th class="w-[30%] px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase">Aktionen</th></tr></thead><tbody class="divide-y divide-gray-200 bg-white"></tbody></table></div></div></div></div></div> <!>',1);function ZT(r,e){er(e,!0);let t=re(!1),n=re(""),i=re(at([])),s=re(null),o=re(at({id:"",name:"",isActive:!0})),l=re(null),d=re("name"),h=re("asc");Tt(()=>Xt.subscribe(X=>{R(i,X,!0)}));function p(K){(X=>(R(h,X[0],!0),R(d,X[1],!0)))(Dc(K,c(d),c(h)))}function w(){return xc(c(i),c(d),c(h))}async function T(K){if(K.preventDefault(),!c(o).name){R(n,"Herstellername ist erforderlich");return}if(!c(o).id){R(n,"Hersteller-ID ist erforderlich");return}if(!yl(c(o).id)){R(n,"Hersteller-ID muss eine 3-stellige Zahl sein");return}if(c(i).find(Y=>Y.id===c(o).id)){R(n,`Hersteller-ID ${c(o).id} wird bereits verwendet`);return}try{R(t,!0),R(n,"");const Y=await gm({id:c(o).id,name:c(o).name,isActive:c(o).isActive,products:[]});Xt.update(he=>Ei([...he,Y])),R(o,{id:"",name:"",isActive:!0},!0)}catch(Y){Y instanceof Error?R(n,Y.message,!0):R(n,"Fehler beim Erstellen des Herstellers")}finally{R(t,!1)}}async function S(){if(c(s))try{if(R(t,!0),R(n,""),!c(s).name){R(n,"Herstellername ist erforderlich");return}if(!c(s).id){R(n,"Hersteller-ID ist erforderlich");return}if(!yl(c(s).id)){R(n,"Hersteller-ID muss eine 3-stellige Zahl sein");return}const K=c(s).id,X=c(s).id;if(c(i).find(he=>he.id===K&&he.id!==X)){R(n,`Hersteller-ID ${K} wird bereits verwendet`);return}await ah(c(s).id,{name:c(s).name,isActive:c(s).isActive,id:c(s).id}),Xt.update(he=>he.map(Te=>{var ye;return Te.id===((ye=c(s))==null?void 0:ye.id)?{...c(s)}:Te})),R(s,null)}catch(K){K instanceof Error?R(n,K.message,!0):R(n,"Fehler beim Aktualisieren des Herstellers")}finally{R(t,!1)}}function k(K){R(s,{...K},!0)}function $(K,X){R(l,{id:K,name:X},!0)}function O(){R(l,null)}async function ee(){if(c(l))try{R(t,!0),R(n,""),await lI(c(l).id),Xt.update(K=>K.filter(X=>{var Y;return X.id!==((Y=c(l))==null?void 0:Y.id)})),R(l,null)}catch(K){K instanceof Error?R(n,K.message,!0):R(n,"Fehler beim Löschen")}finally{R(t,!1)}}async function z(K,X){try{R(t,!0),R(n,""),await ah(K,{isActive:!X}),Xt.update(Y=>Y.map(he=>he.id===K?{...he,isActive:!X}:he))}catch(Y){Y instanceof Error?R(n,Y.message,!0):R(n,"Fehler beim Ändern des Status")}finally{R(t,!1)}}var V=YT(),D=ce(V),x=g(D);{var L=K=>{var X=LT(),Y=g(X,!0);m(X),Ae(()=>Re(Y,c(n))),N(K,X)};te(x,K=>{c(n)&&K(L)})}var b=C(x,2),v=g(b),I=g(v);{var A=K=>{var X=UT(),Y=g(X),he=g(Y);hi(he,{size:18,class:"mr-2"}),Ee(),m(Y);var Te=C(Y,2),ye=g(Te),Oe=g(ye);qe(Oe),m(ye);var He=C(ye,2),Be=g(He);qe(Be),nt(Be,"pattern","[0-9]3"),Ee(2),m(He);var lt=C(He,2),H=g(lt),F=g(H),Z=g(F);qe(Z),Ee(2),m(F),Ee(2),m(H);var se=C(H,2),me=g(se),G=g(me);{var ae=we=>{var $e=$T(),Ye=ce($e);Br(Ye,{size:16,class:"mr-1 animate-spin"}),Ee(),N(we,$e)},ge=we=>{var $e=FT(),Ye=ce($e);kl(Ye,{size:16,class:"mr-1"}),Ee(),N(we,$e)};te(G,we=>{c(t)?we(ae):we(ge,!1)})}m(me);var be=C(me,2);be.__click=[OT,s];var fe=g(be);br(fe,{size:16}),m(be),m(se),m(lt),m(Te),m(X),Ae(()=>me.disabled=c(t)),fr("submit",Te,S),dt(Oe,()=>c(s).name,we=>c(s).name=we),dt(Be,()=>c(s).id,we=>c(s).id=we),oi(Z,()=>c(s).isActive,we=>c(s).isActive=we),N(K,X)},E=K=>{var X=jT(),Y=g(X),he=g(Y);ui(he,{size:18,class:"mr-2"}),Ee(),m(Y);var Te=C(Y,2),ye=g(Te),Oe=g(ye);qe(Oe);var He=C(Oe,2);qe(He),nt(He,"pattern","[0-9]3"),m(ye);var Be=C(ye,2),lt=g(Be),H=g(lt),F=g(H);qe(F),Ee(2),m(H),Ee(2),m(lt);var Z=C(lt,2),se=g(Z);{var me=ae=>{var ge=zT(),be=ce(ge);Br(be,{size:16,class:"mr-1 animate-spin"}),Ee(),N(ae,ge)},G=ae=>{var ge=BT(),be=ce(ge);ui(be,{size:16,class:"mr-1"}),Ee(),N(ae,ge)};te(se,ae=>{c(t)?ae(me):ae(G,!1)})}m(Z),m(Be),m(Te),m(X),Ae(()=>Z.disabled=c(t)),fr("submit",Te,T),dt(Oe,()=>c(o).name,ae=>c(o).name=ae),dt(He,()=>c(o).id,ae=>c(o).id=ae),oi(F,()=>c(o).isActive,ae=>c(o).isActive=ae),N(K,X)};te(I,K=>{c(s)?K(A):K(E,!1)})}m(v);var P=C(v,2),y=g(P),j=g(y),ie=g(j),q=g(ie),W=g(q),oe=g(W);oe.__click=[qT,p];var de=C(g(oe));{var Pe=K=>{var X=Ue(),Y=ce(X);{var he=ye=>{kn(ye,{size:16,class:"ml-1 inline"})},Te=ye=>{Sn(ye,{size:16,class:"ml-1 inline"})};te(Y,ye=>{c(h)==="asc"?ye(he):ye(Te,!1)})}N(K,X)};te(de,K=>{c(d)==="name"&&K(Pe)})}m(oe);var Me=C(oe);Me.__click=[HT,p];var Xe=C(g(Me));{var pe=K=>{var X=Ue(),Y=ce(X);{var he=ye=>{kn(ye,{size:16,class:"ml-1 inline"})},Te=ye=>{Sn(ye,{size:16,class:"ml-1 inline"})};te(Y,ye=>{c(h)==="asc"?ye(he):ye(Te,!1)})}N(K,X)};te(Xe,K=>{c(d)==="isActive"&&K(pe)})}m(Me),Ee(),m(W),m(q);var ke=C(q);ar(ke,21,w,hn,(K,X)=>{var Y=JT(),he=g(Y),Te=g(he),ye=g(Te,!0);m(Te),m(he);var Oe=C(he),He=g(Oe);{var Be=fe=>{var we=GT(),$e=g(we);ci($e,{size:16,class:"mr-1"}),Ee(),m(we),N(fe,we)},lt=fe=>{var we=WT(),$e=g(we);di($e,{size:16,class:"mr-1"}),Ee(),m(we),N(fe,we)};te(He,fe=>{c(X).isActive?fe(Be):fe(lt,!1)})}m(Oe);var H=C(Oe),F=g(H);F.__click=[KT,k,X];var Z=g(F);hi(Z,{size:16}),m(F);var se=C(F,2);se.__click=[QT,z,X];var me=g(se);{var G=fe=>{di(fe,{size:16})},ae=fe=>{ci(fe,{size:16})};te(me,fe=>{c(X).isActive?fe(G):fe(ae,!1)})}m(se);var ge=C(se,2);ge.__click=[XT,$,X];var be=g(ge);$a(be,{size:16}),m(ge),m(H),m(Y),Ae(()=>{var fe;It(Y,1,Oa(((fe=c(s))==null?void 0:fe.id)===c(X).id?"bg-blue-50":"")),Re(ye,c(X).name),F.disabled=c(s)!==null,It(se,1,`flex items-center rounded px-2 py-1 ${c(X).isActive?"bg-orange-100 text-orange-800 hover:bg-orange-200":"bg-green-100 text-green-800 hover:bg-green-200"}`),nt(se,"title",c(X).isActive?"Hersteller deaktivieren":"Hersteller aktivieren"),nt(se,"aria-label",c(X).isActive?"Hersteller deaktivieren":"Hersteller aktivieren")}),N(K,Y)}),m(ke),m(ie),m(j),m(y),m(P),m(b),m(D);var ne=C(D,2);const _e=zr(()=>c(l)!==null),ue=zr(()=>{var K;return((K=c(l))==null?void 0:K.name)||""});Nc(ne,{get show(){return c(_e)},get itemName(){return c(ue)},get loading(){return c(t)},onConfirm:ee,onCancel:O}),N(r,V),tr()}or(["click"]);async function e1(r,e,t,n,i,s,o){if(!(!c(e)||!c(t)))try{R(n,!0),R(i,"");const l=await gm({id:c(t).manufacturerId,name:c(e),isActive:!0}),d=await vm(c(t));Xt.update(h=>Ei([...h,l])),$t.update(h=>Ei([...h,d])),R(s,{id:"",name:"",isActive:!0},!0),R(e,""),R(o,!1),R(t,null)}catch(l){l instanceof Error?R(i,l.message,!0):R(i,"Fehler beim Erstellen des Herstellers und Produkts")}finally{R(n,!1)}}function t1(r,e,t,n){R(e,!1),R(t,null),R(n,"")}function r1(r,e){R(e,null)}var n1=B('<div class="mb-4 rounded-md bg-red-50 p-4 text-red-800"> </div>'),i1=B("<!> Speichern...",1),s1=B("<!> Speichern",1),a1=B(`<div class="rounded-md border border-blue-200 bg-blue-50 p-4"><h3 class="mb-3 flex items-center text-lg font-medium"><!> Produkt bearbeiten</h3> <form><div class="mb-3"><input type="text" placeholder="Produktname" class="w-full rounded-md border border-gray-300 p-2" aria-label="Produktname" title="Name des Produkts" required></div> <div class="mb-3"><input type="text" placeholder="Produkt-ID (z.B. 123-4567-8901)" class="w-full rounded-md border border-gray-300 p-2" aria-label="Produkt-ID" title="Eindeutige ID für das Produkt (Format: XXX-XXXX-XXXX). Die ersten drei Ziffern bestimmen den Hersteller." required> <p class="mt-1 text-xs text-gray-500">Hinweis: Die ersten drei Ziffern bestimmen den Hersteller und können nicht geändert
								werden.</p></div> <div class="mb-3"><div class="w-full rounded-md border border-gray-100 bg-gray-50 p-2"><span class="text-sm text-gray-700"> </span></div> <p class="mt-1 text-xs text-gray-500">Der Hersteller wird automatisch aus den ersten drei Ziffern der Produkt-ID
								abgeleitet.</p></div> <div class="mb-3 flex items-center justify-between"><label class="flex cursor-pointer items-center gap-2" title="Aktiviert oder deaktiviert das Produkt"><div class="relative"><input type="checkbox" class="peer sr-only"> <div class="h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-green-600 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-5"></div></div> <span>Aktiv</span></label> <div class="flex space-x-2"><button type="submit" class="flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-white disabled:bg-blue-300" title="Änderungen speichern" aria-label="Speichern"><!></button> <button type="button" class="flex items-center rounded-md bg-gray-200 px-3 py-1.5 text-gray-700" title="Bearbeitung abbrechen" aria-label="Abbrechen"><!></button></div></div></form></div>`),o1=B("<!> Hinzufügen...",1),l1=B("<!> Hinzufügen",1),c1=B(`<div class="rounded-md border border-gray-200 bg-gray-50 p-4"><h3 class="mb-3 flex items-center text-lg font-medium"><!> Neues Produkt</h3> <form><div class="mb-3"><input type="text" placeholder="Produktname" class="w-full rounded-md border border-gray-300 p-2" aria-label="Produktname" title="Name des Produkts" required></div> <div class="mb-3"><input id="product-id" type="text" placeholder="Produkt-ID (z.B. 123-4567-8901)" class="w-full rounded-md border border-gray-300 p-2" aria-label="Produkt-ID" title="Eindeutige ID für das Produkt (Format: XXX-XXXX-XXXX). Die ersten drei Ziffern bestimmen den Hersteller." required></div> <div class="flex items-center justify-between"><label class="flex cursor-pointer items-center gap-2" title="Aktiviert oder deaktiviert das Produkt"><div class="relative"><input type="checkbox" class="peer sr-only"> <div class="h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-green-600 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-5"></div></div> <span>Aktiv</span></label> <button type="submit" class="flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-white disabled:bg-blue-300" title="Neues Produkt hinzufügen" aria-label="Produkt hinzufügen"><!></button></div></form></div>`),u1=(r,e)=>e("name"),d1=(r,e)=>e("manufacturerId"),h1=(r,e)=>e("isActive"),f1=B('<span class="flex items-center text-green-800"><!> Aktiv</span>'),p1=B('<span class="flex items-center text-red-800"><!> Inaktiv</span>'),m1=(r,e,t)=>e(c(t)),g1=(r,e,t)=>e(c(t).id,c(t).isActive),v1=(r,e,t)=>e(c(t).id,c(t).name),_1=B('<tr><td class="px-6 py-4 whitespace-nowrap"><span class="truncate-text"> </span></td><td class="px-6 py-4 whitespace-nowrap"><span class="truncate-text"> </span></td><td class="px-6 py-4 whitespace-nowrap"><!></td><td class="flex justify-end space-x-2 px-6 py-4 text-right whitespace-nowrap"><button class="flex items-center rounded bg-blue-100 px-2 py-1 text-blue-800 hover:bg-blue-200" title="Produkt bearbeiten" aria-label="Produkt bearbeiten"><!></button> <button><!></button> <button class="flex items-center rounded bg-red-100 px-2 py-1 text-red-800 hover:bg-red-200" title="Produkt löschen" aria-label="Produkt löschen"><!></button></td></tr>'),y1=B(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 backdrop-blur-sm"><div class="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"><h3 class="mb-4 text-lg font-medium">Neuer Hersteller benötigt</h3> <p class="mb-4">Der Hersteller mit ID <strong> </strong> existiert noch nicht.
				Bitte geben Sie einen Namen für diesen Hersteller ein.</p> <div class="mb-4"><input type="text" placeholder="Herstellername" class="w-full rounded-md border border-gray-300 p-2" aria-label="Herstellername"></div> <div class="flex justify-end space-x-2"><button class="rounded-md bg-gray-200 px-4 py-2 text-gray-700">Abbrechen</button> <button class="rounded-md bg-blue-600 px-4 py-2 text-white"> </button></div></div></div>`),b1=B('<div><!> <div class="grid grid-cols-1 gap-6 lg:grid-cols-3"><div class="lg:col-span-1"><!></div> <div class="lg:col-span-2"><div class="overflow-x-auto"><div class="custom-scrollbar max-h-[60vh] overflow-y-auto"><table class="min-w-full table-fixed divide-y divide-gray-200"><thead class="sticky top-0 z-10 bg-gray-50"><tr><th class="w-[35%] cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Name <!></th><th class="w-[25%] cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Hersteller <!></th><th class="w-[10%] cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Status <!></th><th class="w-[30%] px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase">Aktionen</th></tr></thead><tbody class="divide-y divide-gray-200 bg-white"></tbody></table></div></div></div></div></div> <!> <!>',1);function w1(r,e){er(e,!0);let t=re(!1),n=re(""),i=re(at([])),s=re(at([])),o=re(null),l=re(at({id:"",name:"",isActive:!0})),d=re(null),h=re(""),p=re(!1),w=re(null),T=re("name"),S=re("asc");Tt(()=>{const H=$t.subscribe(Z=>{R(i,Z,!0)}),F=Xt.subscribe(Z=>{R(s,Z,!0)});return()=>{H(),F()}});function k(H){(F=>(R(S,F[0],!0),R(T,F[1],!0)))(Dc(H,c(T),c(S)))}function $(){return xc(c(i),c(T),c(S))}async function O(H){if(H.preventDefault(),!c(l).name){R(n,"Produktname ist erforderlich");return}const F=_l("product",c(l).id);if(!F.valid){R(n,F.message||"Ungültige Produkt-ID",!0);return}const Z=MT(c(l).id),se=fh(Z);if(!se){R(n,"Ungültiges Produkt-ID Format. Format muss XXX-XXXX-XXXX sein.");return}if(!c(s).find(G=>G.id===se)){R(w,{id:Z,name:c(l).name,manufacturerId:se,isActive:c(l).isActive},!0),R(p,!0);return}try{if(R(t,!0),R(n,""),c(i).find(ge=>ge.id===Z)){R(n,`Produkt-ID ${Z} wird bereits verwendet`),R(t,!1);return}const ae=await vm({id:Z,name:c(l).name,manufacturerId:se,isActive:c(l).isActive});$t.update(ge=>Ei([...ge,ae])),R(l,{id:"",name:"",isActive:!0},!0)}catch(G){G instanceof Error?R(n,G.message,!0):R(n,"Fehler beim Erstellen des Produkts")}finally{R(t,!1)}}async function ee(){if(c(o))try{if(R(t,!0),R(n,""),!c(o).name){R(n,"Produktname ist erforderlich");return}if(!c(o).id){R(n,"Produkt-ID ist erforderlich");return}const H=_l("product",c(o).id);if(!H.valid){R(n,H.message||"Ungültige Produkt-ID",!0);return}const F=fh(c(o).id);if(!F){R(n,"Ungültiges Produkt-ID Format. Format muss XXX-XXXX-XXXX sein.");return}if(!c(s).find(se=>se.id===F)){R(n,`Hersteller mit ID ${F} existiert nicht.`);return}c(o).manufacturerId=F,await oh(c(o).id,{name:c(o).name,manufacturerId:F,isActive:c(o).isActive}),$t.update(se=>se.map(me=>{var G;return me.id===((G=c(o))==null?void 0:G.id)?{...c(o)}:me})),R(o,null)}catch(H){H instanceof Error?R(n,H.message,!0):R(n,"Fehler beim Aktualisieren des Produkts")}finally{R(t,!1)}}function z(H){R(o,{...H},!0)}function V(H,F){R(d,{id:H,name:F},!0)}function D(){R(d,null)}async function x(){if(c(d))try{R(t,!0),R(n,""),await cI(c(d).id),$t.update(H=>H.filter(F=>{var Z;return F.id!==((Z=c(d))==null?void 0:Z.id)})),R(d,null)}catch(H){H instanceof Error?R(n,H.message,!0):R(n,"Fehler beim Löschen")}finally{R(t,!1)}}async function L(H,F){try{R(t,!0),R(n,""),await oh(H,{isActive:!F}),$t.update(Z=>Z.map(se=>se.id===H?{...se,isActive:!F}:se))}catch(Z){Z instanceof Error?R(n,Z.message,!0):R(n,"Fehler beim Ändern des Status")}finally{R(t,!1)}}function b(H){var F;return((F=c(s).find(Z=>Z.id===H))==null?void 0:F.name)||"Unbekannt"}var v=b1(),I=ce(v),A=g(I);{var E=H=>{var F=n1(),Z=g(F,!0);m(F),Ae(()=>Re(Z,c(n))),N(H,F)};te(A,H=>{c(n)&&H(E)})}var P=C(A,2),y=g(P),j=g(y);{var ie=H=>{var F=a1(),Z=g(F),se=g(Z);hi(se,{size:18,class:"mr-2"}),Ee(),m(Z);var me=C(Z,2),G=g(me),ae=g(G);qe(ae),m(G);var ge=C(G,2),be=g(ge);qe(be),Ee(2),m(ge);var fe=C(ge,2),we=g(fe),$e=g(we),Ye=g($e);m($e),m(we),Ee(2),m(fe);var Le=C(fe,2),je=g(Le),Ze=g(je),Je=g(Ze);qe(Je),Ee(2),m(Ze),Ee(2),m(je);var Ge=C(je,2),We=g(Ge),Ke=g(We);{var gt=rt=>{var Rt=i1(),St=ce(Rt);Br(St,{size:16,class:"mr-1 animate-spin"}),Ee(),N(rt,Rt)},xe=rt=>{var Rt=s1(),St=ce(Rt);kl(St,{size:16,class:"mr-1"}),Ee(),N(rt,Rt)};te(Ke,rt=>{c(t)?rt(gt):rt(xe,!1)})}m(We);var Ce=C(We,2);Ce.__click=[r1,o];var Ne=g(Ce);br(Ne,{size:16}),m(Ce),m(Ge),m(Le),m(me),m(F),Ae(rt=>{Re(Ye,`Hersteller: ${rt??""}`),We.disabled=c(t)},[()=>b(c(o).manufacturerId)]),fr("submit",me,ee),dt(ae,()=>c(o).name,rt=>c(o).name=rt),dt(be,()=>c(o).id,rt=>c(o).id=rt),oi(Je,()=>c(o).isActive,rt=>c(o).isActive=rt),N(H,F)},q=H=>{var F=c1(),Z=g(F),se=g(Z);ui(se,{size:18,class:"mr-2"}),Ee(),m(Z);var me=C(Z,2),G=g(me),ae=g(G);qe(ae),m(G);var ge=C(G,2),be=g(ge);qe(be),m(ge);var fe=C(ge,2),we=g(fe),$e=g(we),Ye=g($e);qe(Ye),Ee(2),m($e),Ee(2),m(we);var Le=C(we,2),je=g(Le);{var Ze=Ge=>{var We=o1(),Ke=ce(We);Br(Ke,{size:16,class:"mr-1 animate-spin"}),Ee(),N(Ge,We)},Je=Ge=>{var We=l1(),Ke=ce(We);ui(Ke,{size:16,class:"mr-1"}),Ee(),N(Ge,We)};te(je,Ge=>{c(t)?Ge(Ze):Ge(Je,!1)})}m(Le),m(fe),m(me),m(F),Ae(()=>Le.disabled=c(t)),fr("submit",me,O),dt(ae,()=>c(l).name,Ge=>c(l).name=Ge),dt(be,()=>c(l).id,Ge=>c(l).id=Ge),oi(Ye,()=>c(l).isActive,Ge=>c(l).isActive=Ge),N(H,F)};te(j,H=>{c(o)?H(ie):H(q,!1)})}m(y);var W=C(y,2),oe=g(W),de=g(oe),Pe=g(de),Me=g(Pe),Xe=g(Me),pe=g(Xe);pe.__click=[u1,k];var ke=C(g(pe));{var ne=H=>{var F=Ue(),Z=ce(F);{var se=G=>{kn(G,{size:16,class:"ml-1 inline"})},me=G=>{Sn(G,{size:16,class:"ml-1 inline"})};te(Z,G=>{c(S)==="asc"?G(se):G(me,!1)})}N(H,F)};te(ke,H=>{c(T)==="name"&&H(ne)})}m(pe);var _e=C(pe);_e.__click=[d1,k];var ue=C(g(_e));{var K=H=>{var F=Ue(),Z=ce(F);{var se=G=>{kn(G,{size:16,class:"ml-1 inline"})},me=G=>{Sn(G,{size:16,class:"ml-1 inline"})};te(Z,G=>{c(S)==="asc"?G(se):G(me,!1)})}N(H,F)};te(ue,H=>{c(T)==="manufacturerId"&&H(K)})}m(_e);var X=C(_e);X.__click=[h1,k];var Y=C(g(X));{var he=H=>{var F=Ue(),Z=ce(F);{var se=G=>{kn(G,{size:16,class:"ml-1 inline"})},me=G=>{Sn(G,{size:16,class:"ml-1 inline"})};te(Z,G=>{c(S)==="asc"?G(se):G(me,!1)})}N(H,F)};te(Y,H=>{c(T)==="isActive"&&H(he)})}m(X),Ee(),m(Xe),m(Me);var Te=C(Me);ar(Te,21,$,hn,(H,F)=>{var Z=_1(),se=g(Z),me=g(se),G=g(me,!0);m(me),m(se);var ae=C(se),ge=g(ae),be=g(ge,!0);m(ge),m(ae);var fe=C(ae),we=g(fe);{var $e=Ce=>{var Ne=f1(),rt=g(Ne);ci(rt,{size:16,class:"mr-1"}),Ee(),m(Ne),N(Ce,Ne)},Ye=Ce=>{var Ne=p1(),rt=g(Ne);di(rt,{size:16,class:"mr-1"}),Ee(),m(Ne),N(Ce,Ne)};te(we,Ce=>{c(F).isActive?Ce($e):Ce(Ye,!1)})}m(fe);var Le=C(fe),je=g(Le);je.__click=[m1,z,F];var Ze=g(je);hi(Ze,{size:16}),m(je);var Je=C(je,2);Je.__click=[g1,L,F];var Ge=g(Je);{var We=Ce=>{di(Ce,{size:16})},Ke=Ce=>{ci(Ce,{size:16})};te(Ge,Ce=>{c(F).isActive?Ce(We):Ce(Ke,!1)})}m(Je);var gt=C(Je,2);gt.__click=[v1,V,F];var xe=g(gt);$a(xe,{size:16}),m(gt),m(Le),m(Z),Ae(Ce=>{var Ne;It(Z,1,Oa(((Ne=c(o))==null?void 0:Ne.id)===c(F).id?"bg-blue-50":"")),Re(G,c(F).name),Re(be,Ce),je.disabled=c(o)!==null,It(Je,1,`flex items-center rounded px-2 py-1 ${c(F).isActive?"bg-orange-100 text-orange-800 hover:bg-orange-200":"bg-green-100 text-green-800 hover:bg-green-200"}`),nt(Je,"title",c(F).isActive?"Produkt deaktivieren":"Produkt aktivieren"),nt(Je,"aria-label",c(F).isActive?"Produkt deaktivieren":"Produkt aktivieren")},[()=>b(c(F).manufacturerId)]),N(H,Z)}),m(Te),m(Pe),m(de),m(oe),m(W),m(P),m(I);var ye=C(I,2);const Oe=zr(()=>c(d)!==null),He=zr(()=>{var H;return((H=c(d))==null?void 0:H.name)||""});Nc(ye,{get show(){return c(Oe)},get itemName(){return c(He)},get loading(){return c(t)},onConfirm:x,onCancel:D});var Be=C(ye,2);{var lt=H=>{var F=y1(),Z=g(F),se=C(g(Z),2),me=C(g(se)),G=g(me,!0);m(me),Ee(),m(se);var ae=C(se,2),ge=g(ae);qe(ge),m(ae);var be=C(ae,2),fe=g(be);fe.__click=[t1,p,w,h];var we=C(fe,2);we.__click=[e1,h,w,t,n,l,p];var $e=g(we,!0);m(we),m(be),m(Z),m(F),Ae(Ye=>{var Le;Re(G,(Le=c(w))==null?void 0:Le.manufacturerId),we.disabled=Ye,Re($e,c(t)?"Erstellen...":"Hersteller erstellen & fortfahren")},[()=>!c(h).trim()||c(t)]),dt(ge,()=>c(h),Ye=>R(h,Ye)),N(H,F)};te(Be,H=>{c(p)&&H(lt)})}N(r,v),tr()}or(["click"]);const vr=Ar("geocoding");function ym(r){const e={};try{const t=r.split(",").map(n=>n.trim());if(t.length>0){const n=t[0].match(/^(.+?)\s+(\d+(?:[-\/]?\d*)?(?:\s*[A-Za-z]*)?)$/);if(n){e.street=n[1].trim();let i=n[2].trim();e.houseNumber=i.replace(/[^\d]/g,""),vr.debug(`Parsed house number: "${i}" → "${e.houseNumber}"`)}else e.street=t[0]}if(t.length>1){const n=t[1].match(/^([A-Z]{2})-(\d+)\s+(.+)$/);if(n)e.countryCode=n[1],e.postalCode=n[2],e.city=n[3];else{const i=t[1].match(/^(\d+)\s+(.+)$/);i?(e.postalCode=i[1],e.city=i[2]):e.city=t[1]}}!e.country&&!e.countryCode&&(e.country="Deutschland",e.countryCode="DE")}catch(t){vr.error("Error parsing address:",t)}return e}async function ph(r){try{const e=ym(r);vr.debug("Parsed address components:",e);let t=new URLSearchParams({format:"json",addressdetails:"1",limit:"1",extratags:"1",countrycodes:e.countryCode||"de"});e.street&&t.append("street",`${e.street} ${e.houseNumber||""}`),e.city&&t.append("city",e.city),e.postalCode&&t.append("postalcode",e.postalCode),e.country&&t.append("country",e.country),vr.debug("Geocoding URL params (structured):",t.toString());let n=await fetch(`https://nominatim.openstreetmap.org/search?${t.toString()}`,{headers:{"Accept-Language":"de","User-Agent":"RentalMap/1.0"}});if(!n.ok)throw new Error(`Geocoding API error: ${n.status} ${n.statusText}`);let i=await n.json();return!i||i.length===0?E1(r):(i[0].display_name&&(vr.info("Geocoded to:",i[0].display_name),i[0].address&&vr.debug("Address details:",i[0].address)),{latitude:parseFloat(i[0].lat),longitude:parseFloat(i[0].lon)})}catch(e){throw vr.error("Geocoding error:",e),e}}async function E1(r){try{const e=ym(r);let t=encodeURIComponent(r);vr.debug("Using fallback geocoding with q parameter");let n=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${t}&addressdetails=1&limit=1&countrycodes=de`,{headers:{"Accept-Language":"de","User-Agent":"RentalMap/1.0"}});if(!n.ok)throw new Error(`Geocoding API error: ${n.status} ${n.statusText}`);let i=await n.json();if((!i||i.length===0)&&e.street&&e.houseNumber){const s=`${e.houseNumber} ${e.street}, ${e.postalCode||""} ${e.city||""}, ${e.country||"Deutschland"}`;if(vr.debug("Using second fallback with structured query:",s),t=encodeURIComponent(s),n=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${t}&addressdetails=1&limit=1&countrycodes=de`,{headers:{"Accept-Language":"de","User-Agent":"RentalMap/1.0"}}),!n.ok)throw new Error(`Geocoding API error: ${n.status} ${n.statusText}`);i=await n.json()}if(!i||i.length===0)throw new Error("Adresse konnte nicht gefunden werden");return vr.info("Fallback geocoded to:",i[0].display_name),{latitude:parseFloat(i[0].lat),longitude:parseFloat(i[0].lon)}}catch(e){throw vr.error("Geocoding fallback error:",e),e}}var I1=B('<div class="mt-4 rounded-md bg-red-50 p-4 text-red-800"> </div>'),T1=(r,e)=>{r.key==="Enter"&&(r.preventDefault(),e())},A1=B("<option> </option>"),R1=(r,e,t)=>e(c(t).productId),P1=B('<tr><td class="px-6 py-4 whitespace-nowrap"> </td><td class="px-6 py-4 whitespace-nowrap"> </td><td class="px-6 py-4 whitespace-nowrap"> </td><td class="px-6 py-4 text-right text-sm whitespace-nowrap"><button class="flex items-center rounded bg-red-100 px-2 py-1 text-red-800 hover:bg-red-200"><!> Entfernen</button></td></tr>'),C1=B('<tr><td colspan="4" class="px-6 py-4 text-center text-gray-500">Keine Produkte im Inventar</td></tr>'),S1=B('<div class="mb-6 border-b border-gray-200 pb-2"><div class="flex items-center justify-between"><h2 class="text-xl font-bold"> </h2> <button class="rounded-md bg-gray-200 px-3 py-1 text-sm">Zurück</button></div> <!> <div class="mt-4 mb-6 rounded-md border border-gray-200 p-4"><h3 class="mb-3 text-lg font-medium">Produkt hinzufügen</h3> <div class="grid grid-cols-3 gap-4"><div class="col-span-2"><select class="w-full rounded-md border border-gray-300 p-2"><option>Produkt auswählen</option><!></select></div> <div><input type="number" min="1" placeholder="Menge" class="w-full rounded-md border border-gray-300 p-2"></div></div> <div class="mt-3 flex justify-end"><button class="rounded-md bg-blue-600 px-4 py-2 text-white disabled:bg-blue-300"> </button></div></div> <div class="overflow-x-auto"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Produkt</th><th class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Hersteller</th><th class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Menge</th><th class="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase">Aktionen</th></tr></thead><tbody class="divide-y divide-gray-200 bg-white"><!><!></tbody></table></div></div>');function k1(r,e){er(e,!0);let t=re(!1),n=re(""),i=re(at([])),s=re(at([])),o=re(at({productId:"",quantity:1}));Tt(()=>{const k=$t.subscribe(O=>{R(i,O,!0)}),$=Xt.subscribe(O=>{R(s,O,!0)});return()=>{k(),$()}}),Tt(()=>{e.company&&R(o,{productId:"",quantity:1},!0)});async function l(){if(e.company)try{if(R(t,!0),R(n,""),!c(o).productId){R(n,"Produkt ist erforderlich");return}if(c(o).quantity<=0){R(n,"Menge muss größer als 0 sein");return}const k=e.company.inventory.findIndex(ee=>ee.productId===c(o).productId);let $;k>=0?($=[...e.company.inventory],$[k]={...$[k],quantity:$[k].quantity+c(o).quantity}):$=[...e.company.inventory,{...c(o)}],await xa(e.company.id,{inventory:$});const O={...e.company,inventory:$};Sr.update(ee=>ee.map(z=>z.id===O.id?O:z)),R(o,{productId:"",quantity:1},!0)}catch(k){k instanceof Error?R(n,k.message,!0):R(n,"Fehler beim Hinzufügen des Inventarartikels")}finally{R(t,!1)}}async function d(k){if(e.company)try{R(t,!0),R(n,"");const $=e.company.inventory.filter(ee=>ee.productId!==k);await xa(e.company.id,{inventory:$});const O={...e.company,inventory:$};Sr.update(ee=>ee.map(z=>z.id===O.id?O:z))}catch($){$ instanceof Error?R(n,$.message,!0):R(n,"Fehler beim Entfernen des Inventarartikels")}finally{R(t,!1)}}function h(k){var $;return(($=c(i).find(O=>O.id===k))==null?void 0:$.name)||"Unbekanntes Produkt"}function p(k){var O;const $=c(i).find(ee=>ee.id===k);return $?((O=c(s).find(ee=>ee.id===$.manufacturerId))==null?void 0:O.name)||"Unbekannter Hersteller":"Unbekannt"}var w=Ue(),T=ce(w);{var S=k=>{var $=S1(),O=g($),ee=g(O),z=g(ee);m(ee);var V=C(ee,2);V.__click=function(...pe){var ke;(ke=e.onClose)==null||ke.apply(this,pe)},m(O);var D=C(O,2);{var x=pe=>{var ke=I1(),ne=g(ke,!0);m(ke),Ae(()=>Re(ne,c(n))),N(pe,ke)};te(D,pe=>{c(n)&&pe(x)})}var L=C(D,2),b=C(g(L),2),v=g(b),I=g(v);I.__keydown=[T1,l];var A=g(I);A.value=((A.__value="")==null,"");var E=C(A);ar(E,17,()=>Ei(c(i).filter(pe=>pe.isActive)),hn,(pe,ke)=>{var ne=A1(),_e={},ue=g(ne);m(ne),Ae(K=>{_e!==(_e=c(ke).id)&&(ne.value=(ne.__value=c(ke).id)==null?"":c(ke).id),Re(ue,`${c(ke).name??""} (${K??""})`)},[()=>{var K;return((K=c(s).find(X=>X.id===c(ke).manufacturerId))==null?void 0:K.name)||""}]),N(pe,ne)}),m(I),m(v);var P=C(v,2),y=g(P);qe(y),m(P),m(b);var j=C(b,2),ie=g(j);ie.__click=l;var q=g(ie,!0);m(ie),m(j),m(L);var W=C(L,2),oe=g(W),de=C(g(oe)),Pe=g(de);ar(Pe,17,()=>e.company.inventory,hn,(pe,ke)=>{var ne=P1();const _e=zr(()=>c(ke).productId);var ue=g(ne),K=g(ue,!0);m(ue);var X=C(ue),Y=g(X,!0);m(X);var he=C(X),Te=g(he,!0);m(he);var ye=C(he),Oe=g(ye);Oe.__click=[R1,d,ke];var He=g(Oe);$a(He,{size:16,class:"mr-1"}),Ee(),m(Oe),m(ye),m(ne),Ae((Be,lt)=>{Re(K,Be),Re(Y,lt),Re(Te,c(ke).quantity)},[()=>h(c(_e)),()=>p(c(_e))]),N(pe,ne)});var Me=C(Pe);{var Xe=pe=>{var ke=C1();N(pe,ke)};te(Me,pe=>{e.company.inventory.length===0&&pe(Xe)})}m(de),m(oe),m(W),m($),Ae(()=>{Re(z,`Inventar für: ${e.company.name??""}`),ie.disabled=c(t),Re(q,c(t)?"Hinzufügen...":"Hinzufügen")}),Vg(I,()=>c(o).productId,pe=>c(o).productId=pe),dt(y,()=>c(o).quantity,pe=>c(o).quantity=pe),N(k,$)};te(T,k=>{e.company&&k(S)})}N(r,w),tr()}or(["click","keydown"]);const mh={deutschland:"DE",österreich:"AT",schweiz:"CH",frankreich:"FR",niederlande:"NL",belgien:"BE",luxemburg:"LU",italien:"IT",spanien:"ES",portugal:"PT",dänemark:"DK",schweden:"SE",norwegen:"NO",finnland:"FI",grossbritannien:"GB","vereinigtes königreich":"GB",polen:"PL",tschechien:"CZ",ungarn:"HU",slowakei:"SK",slowenien:"SI",kroatien:"HR",russland:"RU",griechenland:"GR",türkei:"TR",ukraine:"UA",rumänien:"RO",bulgarien:"BG",serbien:"RS"},gh={großbritannien:"GB","vereinigte königreich":"GB"},vh={germany:"DE",austria:"AT",switzerland:"CH",france:"FR",netherlands:"NL",belgium:"BE",luxembourg:"LU",italy:"IT",spain:"ES",portugal:"PT",denmark:"DK",sweden:"SE",norway:"NO",finland:"FI","united kingdom":"GB","great britain":"GB",poland:"PL","czech republic":"CZ",czechia:"CZ",hungary:"HU",slovakia:"SK",slovenia:"SI",croatia:"HR",russia:"RU",greece:"GR",turkey:"TR",ukraine:"UA",romania:"RO",bulgaria:"BG",serbia:"RS"},_h={uk:"GB",de:"DE",at:"AT",ch:"CH",fr:"FR",nl:"NL",be:"BE",lu:"LU",it:"IT",es:"ES",pt:"PT",dk:"DK",se:"SE",no:"NO",fi:"FI",gb:"GB",pl:"PL",cz:"CZ",hu:"HU",sk:"SK",si:"SI",hr:"HR",ru:"RU",gr:"GR",tr:"TR",ua:"UA",ro:"RO",bg:"BG",rs:"RS"};function x1(r){if(!r||typeof r!="string")return!1;const e=r.toUpperCase();return/^[A-Z]{2}$/.test(e)}function Da(r){if(!r||typeof r!="string")return r;if(x1(r))return r.toUpperCase();const e=r.toLowerCase().trim();return _h[e]?_h[e]:mh[e]?mh[e]:gh[e]?gh[e]:vh[e]?vh[e]:r}function yh(r,e,t,n){const i=Da(n);return`${r}, ${i}-${e} ${t}`}function D1(r,e){R(e,null)}var N1=B('<div class="mb-4 rounded-md bg-red-50 p-4 text-red-800"> </div>'),V1=B("<!> Speichern...",1),M1=B("<!> Speichern",1),O1=B(`<div class="rounded-md border border-blue-200 bg-blue-50 p-4"><h3 class="mb-3 flex items-center text-lg font-medium"><!> DryHire-Firma bearbeiten</h3> <form><div class="mb-3"><input type="text" placeholder="Firmenname" class="w-full rounded-md border border-gray-300 p-2" aria-label="Firmenname" title="Name der Firma" required></div> <div class="mb-3"><div class="relative"><span class="absolute top-2.5 left-2.5 text-gray-500"><!></span> <input type="text" placeholder="Straße und Hausnummer" class="w-full rounded-md border border-gray-300 p-2 pl-8" aria-label="Straße und Hausnummer" title="Straßenadresse der Firma" required></div></div> <div class="mb-3 grid grid-cols-10 gap-3"><input type="text" placeholder="Land" class="col-span-2 w-full rounded-md border border-gray-300 p-2" aria-label="Land" title="Ländercode (z.B. DE für Deutschland)" required> <input type="text" placeholder="PLZ" class="col-span-3 w-full rounded-md border border-gray-300 p-2" aria-label="Postleitzahl" title="Postleitzahl" required> <input type="text" placeholder="Stadt" class="col-span-5 w-full rounded-md border border-gray-300 p-2" aria-label="Stadt" title="Stadt" required></div> <div class="mb-3"><div class="relative"><span class="absolute top-2.5 left-2.5 text-gray-500"><!></span> <input type="url" placeholder="Webseite" class="w-full rounded-md border border-gray-300 p-2 pl-8" aria-label="Webseite" title="Webseite der Firma (https:// wird automatisch hinzugefügt)"></div></div> <div class="mb-3 grid grid-cols-2 gap-3"><input type="tel" placeholder="Telefon" class="w-full rounded-md border border-gray-300 p-2" aria-label="Telefon" title="Telefonnummer der Firma"> <input type="email" placeholder="E-Mail" class="w-full rounded-md border border-gray-300 p-2" aria-label="E-Mail" title="E-Mail-Adresse der Firma"></div> <div class="mb-3 flex items-center justify-between"><label class="flex cursor-pointer items-center gap-2" title="Aktiviert oder deaktiviert die Firma"><div class="relative"><input type="checkbox" class="peer sr-only"> <div class="h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-green-600 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-5"></div></div> <span>Aktiv</span></label> <div class="flex space-x-2"><button type="submit" class="flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-white disabled:bg-blue-300" title="Änderungen speichern" aria-label="Speichern"><!></button> <button type="button" class="flex items-center rounded-md bg-gray-200 px-3 py-1.5 text-gray-700" title="Bearbeitung abbrechen" aria-label="Abbrechen"><!></button></div></div></form></div>`),L1=B("<!> Hinzufügen...",1),$1=B("<!> Hinzufügen",1),F1=B(`<div class="rounded-md border border-gray-200 bg-gray-50 p-4"><h3 class="mb-3 flex items-center text-lg font-medium"><!> Neues Unternehmen</h3> <form><div class="mb-3"><input type="text" placeholder="Firmen-ID (Format: KXXXX...)" class="mb-3 w-full rounded-md border border-gray-300 p-2" title="Eindeutige Firmen-ID (beginnt mit K gefolgt von Ziffern)" aria-label="Firmen-ID" required> <input type="text" placeholder="Firmenname" class="w-full rounded-md border border-gray-300 p-2" aria-label="Firmenname" title="Name der Firma" required></div> <div class="mb-3"><div class="relative"><span class="absolute top-2.5 left-2.5 text-gray-500"><!></span> <input type="text" placeholder="Straße und Hausnummer" class="w-full rounded-md border border-gray-300 p-2 pl-8" aria-label="Straße und Hausnummer" title="Straßenadresse der Firma" required></div></div> <div class="mb-3 grid grid-cols-10 gap-3"><input type="text" placeholder="Land" class="col-span-2 w-full rounded-md border border-gray-300 p-2" aria-label="Land" title="Ländercode (z.B. DE für Deutschland)" required> <input type="text" placeholder="PLZ" class="col-span-3 w-full rounded-md border border-gray-300 p-2" aria-label="Postleitzahl" title="Postleitzahl" required> <input type="text" placeholder="Stadt" class="col-span-5 w-full rounded-md border border-gray-300 p-2" aria-label="Stadt" title="Stadt" required></div> <div class="mb-3"><div class="relative"><span class="absolute top-2.5 left-2.5 text-gray-500"><!></span> <input type="url" placeholder="Webseite" class="w-full rounded-md border border-gray-300 p-2 pl-8" aria-label="Webseite" title="Webseite der Firma (https:// wird automatisch hinzugefügt)"></div></div> <div class="mb-3 grid grid-cols-2 gap-3"><input type="tel" placeholder="Telefon" class="w-full rounded-md border border-gray-300 p-2" aria-label="Telefon" title="Telefonnummer der Firma"> <input type="email" placeholder="E-Mail" class="w-full rounded-md border border-gray-300 p-2" aria-label="E-Mail" title="E-Mail-Adresse der Firma"></div> <div class="flex items-center justify-between"><label class="flex cursor-pointer items-center gap-2" title="Aktiviert oder deaktiviert die Firma"><div class="relative"><input type="checkbox" class="peer sr-only"> <div class="h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-green-600 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-5"></div></div> <span>Aktiv</span></label> <button type="submit" class="flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-white disabled:bg-blue-300" title="Neue Firma hinzufügen" aria-label="Firma hinzufügen"><!></button></div></form></div>`),U1=(r,e)=>e("name"),z1=(r,e)=>e("isActive"),B1=B('<span class="flex items-center text-green-800"><!> Aktiv</span>'),j1=B('<span class="flex items-center text-red-800"><!> Inaktiv</span>'),q1=(r,e,t)=>e(c(t)),H1=(r,e,t)=>e(c(t)),G1=(r,e,t)=>e(c(t).id,c(t).isActive),W1=(r,e,t)=>e(c(t).id,c(t).name),K1=B('<tr><td class="px-6 py-4 whitespace-nowrap"><span class="truncate-text svelte-nxj9a0"> </span></td><td class="px-6 py-4 whitespace-nowrap"><!></td><td class="flex flex-wrap justify-end gap-1 px-6 py-4 text-right whitespace-nowrap svelte-nxj9a0"><button class="flex items-center rounded bg-purple-100 px-2 py-1 text-purple-800 hover:bg-purple-200" title="Lagerbestand verwalten" aria-label="Lagerbestand verwalten"><!></button> <button class="flex items-center rounded bg-blue-100 px-2 py-1 text-blue-800 hover:bg-blue-200" title="Firma bearbeiten" aria-label="Firma bearbeiten"><!></button> <button><!></button> <button class="flex items-center rounded bg-red-100 px-2 py-1 text-red-800 hover:bg-red-200" title="Firma löschen" aria-label="Firma löschen"><!></button></td></tr>'),Q1=B('<div><!> <div class="grid grid-cols-1 gap-6 lg:grid-cols-3"><div class="lg:col-span-1"><!></div> <div class="lg:col-span-2"><div class="overflow-hidden"><div class="custom-scrollbar max-h-[60vh] overflow-y-auto"><table class="min-w-full table-fixed divide-y divide-gray-200"><thead class="sticky top-0 z-10 bg-gray-50"><tr><th class="w-[60%] cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Name <!></th><th class="w-[15%] cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Status <!></th><th class="w-[25%] px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase">Aktionen</th></tr></thead><tbody class="divide-y divide-gray-200 bg-white"></tbody></table></div></div></div></div></div>'),X1=B("<!> <!>",1);function J1(r,e){er(e,!0);let t=re(!1),n=re(""),i=re(at([])),s=re(null),o=re(null),l=re(null),d=re("K");function h(){return{name:"",address:"",city:"",postalCode:"",country:"DE",latitude:0,longitude:0,website:"",phone:"",email:"",isActive:!0,inventory:[]}}let p=re(at(h())),w=re("name"),T=re("asc");Tt(()=>Sr.subscribe(W=>{R(i,W,!0)}));function S(q){(W=>(R(T,W[0],!0),R(w,W[1],!0)))(Dc(q,c(w),c(T)))}function k(){return xc(c(i),c(w),c(T))}function $(q){return q?q.startsWith("http://")||q.startsWith("https://")?q:`https://${q}`:""}async function O(q){if(q.preventDefault(),!c(p).name){R(n,"Firmenname ist erforderlich");return}if(!c(d)||!c(d).startsWith("K")){R(n,"Firmen-ID muss mit K beginnen");return}if(!c(p).address||!c(p).city||!c(p).postalCode){R(n,"Adresse, Stadt und PLZ sind erforderlich");return}if(!c(p).country){R(n,"Land ist erforderlich");return}const W=_l("rental-company",c(d));if(!W.valid){R(n,W.message||"Ungültige Firmen-ID",!0);return}try{R(t,!0),R(n,""),c(p).website=$(c(p).website||"");const oe=yh(c(p).address,c(p).postalCode,c(p).city,c(p).country),de=await ph(oe),Pe=await dI({id:c(d),...c(p),latitude:(de==null?void 0:de.latitude)||0,longitude:(de==null?void 0:de.longitude)||0});Sr.update(Me=>Ei([...Me,Pe])),R(p,h(),!0),R(d,"K")}catch(oe){oe instanceof Error?R(n,oe.message,!0):R(n,"Fehler beim Erstellen der DryHire-Firma")}finally{R(t,!1)}}async function ee(){if(c(s))try{if(R(t,!0),R(n,""),!c(s).name){R(n,"Firmenname ist erforderlich");return}if(!c(s).address||!c(s).city||!c(s).postalCode){R(n,"Adresse, Stadt und PLZ sind erforderlich");return}if(!c(s).country){R(n,"Land ist erforderlich");return}c(s).website=$(c(s).website||""),c(s).country&&c(s).country.length>2&&(c(s).country=Da(c(s).country)||"DE");const q=yh(c(s).address,c(s).postalCode,c(s).city,c(s).country),W=await ph(q);await xa(c(s).id,{name:c(s).name,address:c(s).address,city:c(s).city,postalCode:c(s).postalCode,country:c(s).country,latitude:(W==null?void 0:W.latitude)||c(s).latitude,longitude:(W==null?void 0:W.longitude)||c(s).longitude,website:c(s).website,phone:c(s).phone,email:c(s).email,isActive:c(s).isActive}),Sr.update(oe=>oe.map(de=>{var Pe;return de.id===((Pe=c(s))==null?void 0:Pe.id)?{...de,name:c(s).name,address:c(s).address,city:c(s).city,postalCode:c(s).postalCode,country:c(s).country,latitude:(W==null?void 0:W.latitude)||c(s).latitude,longitude:(W==null?void 0:W.longitude)||c(s).longitude,website:c(s).website,phone:c(s).phone,email:c(s).email,isActive:c(s).isActive}:de})),R(s,null)}catch(q){q instanceof Error?R(n,q.message,!0):R(n,"Fehler beim Aktualisieren der DryHire-Firma")}finally{R(t,!1)}}function z(q){R(s,{...q},!0)}function V(q,W){R(o,{id:q,name:W},!0)}function D(){R(o,null)}async function x(){if(c(o))try{R(t,!0),R(n,""),await hI(c(o).id),Sr.update(q=>q.filter(W=>{var oe;return W.id!==((oe=c(o))==null?void 0:oe.id)})),R(o,null)}catch(q){q instanceof Error?R(n,q.message,!0):R(n,"Fehler beim Löschen")}finally{R(t,!1)}}async function L(q,W){try{R(t,!0),R(n,""),await xa(q,{isActive:!W}),Sr.update(oe=>oe.map(de=>de.id===q?{...de,isActive:!W}:de))}catch(oe){oe instanceof Error?R(n,oe.message,!0):R(n,"Fehler beim Ändern des Status")}finally{R(t,!1)}}async function b(q){try{R(t,!0),R(n,""),await ca(),R(l,{...q},!0)}catch(W){W instanceof Error?R(n,W.message,!0):R(n,"Fehler beim Laden der Daten")}finally{R(t,!1)}}function v(){R(l,null)}var I=X1(),A=ce(I);{var E=q=>{k1(q,{get company(){return c(l)},onClose:v})},P=q=>{var W=Q1(),oe=g(W);{var de=H=>{var F=N1(),Z=g(F,!0);m(F),Ae(()=>Re(Z,c(n))),N(H,F)};te(oe,H=>{c(n)&&H(de)})}var Pe=C(oe,2),Me=g(Pe),Xe=g(Me);{var pe=H=>{var F=O1(),Z=g(F),se=g(Z);hi(se,{size:18,class:"mr-2"}),Ee(),m(Z);var me=C(Z,2),G=g(me),ae=g(G);qe(ae),m(G);var ge=C(G,2),be=g(ge),fe=g(be),we=g(fe);Cu(we,{size:16}),m(fe);var $e=C(fe,2);qe($e),m(be),m(ge);var Ye=C(ge,2),Le=g(Ye);qe(Le);var je=C(Le,2);qe(je);var Ze=C(je,2);qe(Ze),m(Ye);var Je=C(Ye,2),Ge=g(Je),We=g(Ge),Ke=g(We);jo(Ke,{size:16}),m(We);var gt=C(We,2);qe(gt),m(Ge),m(Je);var xe=C(Je,2),Ce=g(xe);qe(Ce);var Ne=C(Ce,2);qe(Ne),m(xe);var rt=C(xe,2),Rt=g(rt),St=g(Rt),Rr=g(St);qe(Rr),Ee(2),m(St),Ee(2),m(Rt);var Ut=C(Rt,2),kt=g(Ut),Ot=g(kt);{var hr=it=>{var En=V1(),Di=ce(En);Br(Di,{size:16,class:"mr-1 animate-spin"}),Ee(),N(it,En)},Et=it=>{var En=M1(),Di=ce(En);kl(Di,{size:16,class:"mr-1"}),Ee(),N(it,En)};te(Ot,it=>{c(t)?it(hr):it(Et,!1)})}m(kt);var ot=C(kt,2);ot.__click=[D1,s];var cr=g(ot);br(cr,{size:16}),m(ot),m(Ut),m(rt),m(me),m(F),Ae(()=>kt.disabled=c(t)),fr("submit",me,ee),dt(ae,()=>c(s).name,it=>c(s).name=it),dt($e,()=>c(s).address,it=>c(s).address=it),dt(Le,()=>c(s).country,it=>c(s).country=it),dt(je,()=>c(s).postalCode,it=>c(s).postalCode=it),dt(Ze,()=>c(s).city,it=>c(s).city=it),dt(gt,()=>c(s).website,it=>c(s).website=it),dt(Ce,()=>c(s).phone,it=>c(s).phone=it),dt(Ne,()=>c(s).email,it=>c(s).email=it),oi(Rr,()=>c(s).isActive,it=>c(s).isActive=it),N(H,F)},ke=H=>{var F=F1(),Z=g(F),se=g(Z);ui(se,{size:18,class:"mr-2"}),Ee(),m(Z);var me=C(Z,2),G=g(me),ae=g(G);qe(ae);var ge=C(ae,2);qe(ge),m(G);var be=C(G,2),fe=g(be),we=g(fe),$e=g(we);Cu($e,{size:16}),m(we);var Ye=C(we,2);qe(Ye),m(fe),m(be);var Le=C(be,2),je=g(Le);qe(je);var Ze=C(je,2);qe(Ze);var Je=C(Ze,2);qe(Je),m(Le);var Ge=C(Le,2),We=g(Ge),Ke=g(We),gt=g(Ke);jo(gt,{size:16}),m(Ke);var xe=C(Ke,2);qe(xe),m(We),m(Ge);var Ce=C(Ge,2),Ne=g(Ce);qe(Ne);var rt=C(Ne,2);qe(rt),m(Ce);var Rt=C(Ce,2),St=g(Rt),Rr=g(St),Ut=g(Rr);qe(Ut),Ee(2),m(Rr),Ee(2),m(St);var kt=C(St,2),Ot=g(kt);{var hr=ot=>{var cr=L1(),it=ce(cr);Br(it,{size:16,class:"mr-1 animate-spin"}),Ee(),N(ot,cr)},Et=ot=>{var cr=$1(),it=ce(cr);ui(it,{size:16,class:"mr-1"}),Ee(),N(ot,cr)};te(Ot,ot=>{c(t)?ot(hr):ot(Et,!1)})}m(kt),m(Rt),m(me),m(F),Ae(()=>kt.disabled=c(t)),fr("submit",me,O),dt(ae,()=>c(d),ot=>R(d,ot)),dt(ge,()=>c(p).name,ot=>c(p).name=ot),dt(Ye,()=>c(p).address,ot=>c(p).address=ot),dt(je,()=>c(p).country,ot=>c(p).country=ot),dt(Ze,()=>c(p).postalCode,ot=>c(p).postalCode=ot),dt(Je,()=>c(p).city,ot=>c(p).city=ot),dt(xe,()=>c(p).website,ot=>c(p).website=ot),dt(Ne,()=>c(p).phone,ot=>c(p).phone=ot),dt(rt,()=>c(p).email,ot=>c(p).email=ot),oi(Ut,()=>c(p).isActive,ot=>c(p).isActive=ot),N(H,F)};te(Xe,H=>{c(s)?H(pe):H(ke,!1)})}m(Me);var ne=C(Me,2),_e=g(ne),ue=g(_e),K=g(ue),X=g(K),Y=g(X),he=g(Y);he.__click=[U1,S];var Te=C(g(he));{var ye=H=>{var F=Ue(),Z=ce(F);{var se=G=>{kn(G,{size:16,class:"ml-1 inline"})},me=G=>{Sn(G,{size:16,class:"ml-1 inline"})};te(Z,G=>{c(T)==="asc"?G(se):G(me,!1)})}N(H,F)};te(Te,H=>{c(w)==="name"&&H(ye)})}m(he);var Oe=C(he);Oe.__click=[z1,S];var He=C(g(Oe));{var Be=H=>{var F=Ue(),Z=ce(F);{var se=G=>{kn(G,{size:16,class:"ml-1 inline"})},me=G=>{Sn(G,{size:16,class:"ml-1 inline"})};te(Z,G=>{c(T)==="asc"?G(se):G(me,!1)})}N(H,F)};te(He,H=>{c(w)==="isActive"&&H(Be)})}m(Oe),Ee(),m(Y),m(X);var lt=C(X);ar(lt,21,k,hn,(H,F)=>{var Z=K1(),se=g(Z),me=g(se),G=g(me,!0);m(me),m(se);var ae=C(se),ge=g(ae);{var be=xe=>{var Ce=B1(),Ne=g(Ce);ci(Ne,{size:16,class:"mr-1"}),Ee(),m(Ce),N(xe,Ce)},fe=xe=>{var Ce=j1(),Ne=g(Ce);di(Ne,{size:16,class:"mr-1"}),Ee(),m(Ce),N(xe,Ce)};te(ge,xe=>{c(F).isActive?xe(be):xe(fe,!1)})}m(ae);var we=C(ae),$e=g(we);$e.__click=[q1,b,F];var Ye=g($e);$g(Ye,{size:16}),m($e);var Le=C($e,2);Le.__click=[H1,z,F];var je=g(Le);hi(je,{size:16}),m(Le);var Ze=C(Le,2);Ze.__click=[G1,L,F];var Je=g(Ze);{var Ge=xe=>{di(xe,{size:16})},We=xe=>{ci(xe,{size:16})};te(Je,xe=>{c(F).isActive?xe(Ge):xe(We,!1)})}m(Ze);var Ke=C(Ze,2);Ke.__click=[W1,V,F];var gt=g(Ke);$a(gt,{size:16}),m(Ke),m(we),m(Z),Ae(()=>{var xe;It(Z,1,Oa(((xe=c(s))==null?void 0:xe.id)===c(F).id?"bg-blue-50":"")),Re(G,c(F).name),Le.disabled=c(s)!==null,It(Ze,1,`flex items-center rounded px-2 py-1 ${c(F).isActive?"bg-orange-100 text-orange-800 hover:bg-orange-200":"bg-green-100 text-green-800 hover:bg-green-200"}`,"svelte-nxj9a0"),nt(Ze,"title",c(F).isActive?"Firma deaktivieren":"Firma aktivieren"),nt(Ze,"aria-label",c(F).isActive?"Firma deaktivieren":"Firma aktivieren")}),N(H,Z)}),m(lt),m(K),m(ue),m(_e),m(ne),m(Pe),m(W),N(q,W)};te(A,q=>{c(l)?q(E):q(P,!1)})}var y=C(A,2);const j=zr(()=>c(o)!==null),ie=zr(()=>{var q;return((q=c(o))==null?void 0:q.name)||""});Nc(y,{get show(){return c(j)},get itemName(){return c(ie)},get loading(){return c(t)},onConfirm:x,onCancel:D}),N(r,I),tr()}or(["click"]);async function Y1(r,e,t,n,i,s,o,l,d){if(!c(e).trim()){R(t,{success:!1,message:"Please provide data to import"},!0);return}R(n,!0),R(t,null);try{i.debug(`Starting ${c(s)} import with selection:`,c(o));const h=l(c(e),c(s)),p=await fetch("/api/import",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:h,format:c(s),options:{importManufacturers:c(o).manufacturers,importProducts:c(o).products,importRentalCompanies:c(o).rentalCompanies}})}),w=await p.json();if(R(n,!1),p.ok&&w.success){R(t,{success:!0,message:w.message,created:w.created,updated:w.updated},!0);try{await ys(),window.dispatchEvent(new CustomEvent("data-updated",{detail:{forceRefresh:!0}}))}catch(T){i.error("Error refreshing data after import:",T)}d("success",{created:w.created,updated:w.updated,message:w.message,forceRefresh:!0})}else w.missingEntities&&w.missingEntities.length>0?(i.debug("Missing entities detected:",w.missingEntities),R(t,{success:!1,message:"Missing entities need to be resolved before importing",pendingResolution:!0,importSessionId:w.importSessionId},!0),d("resolveMissingEntities",{missingEntities:w.missingEntities,importSessionId:w.importSessionId})):(R(t,{success:!1,message:w.message||w.error||"Import failed",errors:w.errors||[w.error||"Unknown error"]},!0),d("error",{errors:c(t).errors||[]}))}catch(h){i.error("Import error:",h),R(n,!1),R(t,{success:!1,message:h instanceof Error?h.message:"Unknown error during import"},!0),d("error",{errors:[c(t).message||"Unknown error"]})}}function Z1(r,e){var i;const n=(i=r.target.files)==null?void 0:i[0];e(n)}function eA(r,e,t,n){R(e,""),R(t,null),c(n)&&(c(n).value="")}function tA(r,e){(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),e())}var rA=B('<div class="mt-2 rounded bg-blue-100 px-3 py-1 text-sm"> </div>'),nA=B("<!> Importing...",1),iA=B("<!> Import",1),sA=B("<!> Import Successful",1),aA=B("<!> ",1),oA=B('<div class="rounded border border-gray-200 bg-white p-2"><div class="grid grid-cols-2 gap-1 text-sm"><div> </div> <div> </div> <div> </div> <div> </div></div></div>'),lA=B("<li> </li>"),cA=B('<div class="rounded border border-red-200 bg-white p-2"><div class="mb-1 text-sm font-medium">Errors:</div> <ul class="ml-4 list-disc text-sm text-red-700"></ul></div>'),uA=B('<div class="mt-2 rounded border border-yellow-200 bg-yellow-50 p-2"><p class="text-sm font-medium">Missing entities need to be resolved.</p></div>'),dA=B('<div><h4 class="mb-1 flex items-center text-sm font-medium"><!></h4> <p class="mb-2 text-sm"> </p> <!> <!> <!></div>'),hA=B('<div class="rounded-b-xl bg-white"><div class="grid grid-cols-1 gap-4 px-4 py-4"><div role="button" tabindex="0" aria-label="Upload file by clicking or dropping files here"><input id="file-upload" type="file" accept=".csv,.json,.txt" class="hidden"> <div class="flex flex-col items-center justify-center py-4"><!> <p class="mb-1 text-sm font-medium text-gray-700">Drag and drop a file here, or click to select</p> <p class="text-xs text-gray-500">Supports CSV and JSON files</p> <!></div></div></div> <div class="px-4 pb-4"><textarea id="import-data" rows="6" class="max-h-80 w-full rounded border border-gray-300 p-3 font-mono text-sm" aria-label="Import data input"></textarea></div> <div class="flex items-center justify-end gap-2 rounded-b-xl border-t border-gray-200 px-4 py-3"><button class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"><!> Clear</button> <button class="disabled:text-white-500 inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none disabled:bg-gray-400"><!></button></div> <!></div>');function fA(r,e){er(e,!0);const t=Ar("ImportData"),n=Dh();let i=re(at(e.initialImportType||"csv")),s=re(""),o=re(!1),l=re(null),d=re("");Tt(()=>{R(d,O(c(i),e.initialEntityType||"manufacturers"),!0)});let h=re(at({manufacturers:e.initialEntityType==="manufacturers",products:e.initialEntityType==="products",rentalCompanies:e.initialEntityType==="rentalCompanies"||!e.initialEntityType&&!0})),p=at(e.initialEntityType||"manufacturers"),w=re(!1),T=re(null);function S(ne,_e){if(_e==="json")try{const ue=JSON.parse(ne);if(Array.isArray(ue)&&p==="rentalCompanies"){const K=ue.map(X=>(X.country&&(X.country=Da(X.country)),X));return JSON.stringify(K,null,2)}}catch(ue){t.error("Failed to parse JSON data for normalization:",ue)}else if(_e==="csv"&&p==="rentalCompanies")return ne.trim().split(`
`).map(X=>{const Y=X.split(",").map(he=>he.trim());return Y.length>=4&&(Y[3]=Da(Y[3])),Y.join(", ")}).join(`
`);return ne}function k(ne){R(i,ne,!0),R(d,O(ne,p),!0)}function $(ne){if(!ne)return;let _e=c(i);ne.name.toLowerCase().endsWith(".json")?_e="json":(ne.name.toLowerCase().endsWith(".csv")||ne.name.toLowerCase().endsWith(".txt"))&&(_e="csv"),_e!==c(i)&&k(_e);const ue=new FileReader;ue.onload=K=>{var X;R(s,((X=K.target)==null?void 0:X.result)||"",!0)},ue.readAsText(ne)}function O(ne,_e){if(ne==="csv"){if(_e==="rentalCompanies")return`Format for rental companies:
K1234, Example Company GmbH, 123 Main St, Berlin, DE, 12345, https://example.com, +123456789, info@example.com

# Products follow company line (matched to last company defined above)
559-1065-2012, Green-GO MCXEXT, Green-GO, 15`;if(_e==="products")return`Format for products:
# productId, productName, manufacturerName, quantity
559-1065-2012, Green-GO MCXEXT, Green-GO, 15
511-5083-3310, Stagemaker SL10, Stagemaker, 3`;if(_e==="manufacturers")return`Format for manufacturers:
# manufacturerId, manufacturerName
511, Stagemaker
559, Green-GO`}else{if(_e==="rentalCompanies")return`[
  {
    "id": "K1234",
    "name": "Example Company GmbH",
    "address": "123 Main St",
    "city": "Berlin",
    "country": "DE",
    "postalCode": "12345",
    "website": "https://example.com",
    "phone": "+12345678",
    "email": "info@example.com",
    "inventory": [
      { "productId": "559-1065-2012", "productName": "Green-GO MCXEXT", "manufacturerName": "Green-GO", "quantity": 15 }
    ]
  }
]`;if(_e==="products")return`[
  {
    "id": "559-1065-2012",
    "name": "Green-GO MCXEXT",
    "manufacturerId": "559",
    "isActive": true
  },
  {
    "id": "511-5083-3310",
    "name": "Stagemaker SL10",
    "manufacturerId": "511",
    "isActive": true
  }
]`;if(_e==="manufacturers")return`[
  {
    "id": "511",
    "name": "Stagemaker",
    "isActive": true
  },
  {
    "id": "559",
    "name": "Green-GO",
    "isActive": true
  }
]`}return""}function ee(ne){ne.preventDefault(),ne.stopPropagation(),R(w,!0)}function z(ne){ne.preventDefault(),ne.stopPropagation(),R(w,!1)}function V(ne){ne.preventDefault(),ne.stopPropagation(),R(w,!0)}function D(ne){var _e;ne.preventDefault(),ne.stopPropagation(),R(w,!1),(_e=ne.dataTransfer)!=null&&_e.files&&ne.dataTransfer.files.length>0&&$(ne.dataTransfer.files[0])}function x(){var ne;(ne=c(l))==null||ne.click()}var L=hA(),b=g(L),v=g(b);v.__click=x,v.__keydown=[tA,x];var I=g(v);I.__change=[Z1,$],Ma(I,ne=>R(l,ne),()=>c(l));var A=C(I,2),E=g(A);Bg(E,{size:32,class:"mb-2 text-gray-400"});var P=C(E,6);{var y=ne=>{var _e=rA(),ue=g(_e);m(_e),Ae(()=>Re(ue,`Selected: ${c(l).files[0].name??""}`)),N(ne,_e)};te(P,ne=>{var _e,ue;(ue=(_e=c(l))==null?void 0:_e.files)!=null&&ue[0]&&ne(y)})}m(A),m(v),m(b);var j=C(b,2),ie=g(j);_g(ie),m(j);var q=C(j,2),W=g(q);W.__click=[eA,s,T,l];var oe=g(W);br(oe,{size:16,class:"mr-2"}),Ee(),m(W);var de=C(W,2);de.__click=[Y1,s,T,o,t,i,h,S,n];var Pe=g(de);{var Me=ne=>{var _e=nA(),ue=ce(_e);Br(ue,{size:16,class:"mr-2 animate-spin"}),Ee(),N(ne,_e)},Xe=ne=>{var _e=iA(),ue=ce(_e);Uh(ue,{size:16,class:"mr-2"}),Ee(),N(ne,_e)};te(Pe,ne=>{c(o)?ne(Me):ne(Xe,!1)})}m(de),m(q);var pe=C(q,2);{var ke=ne=>{var _e=dA(),ue=g(_e),K=g(ue);{var X=F=>{var Z=sA(),se=ce(Z);Cl(se,{size:16,class:"mr-2 text-green-600"}),Ee(),N(F,Z)},Y=F=>{var Z=aA(),se=ce(Z);Fh(se,{size:16,class:"mr-2 text-red-600"});var me=C(se);Ae(()=>Re(me,` ${(c(T).pendingResolution?"Action Required":"Import Failed")??""}`)),N(F,Z)};te(K,F=>{c(T).success?F(X):F(Y,!1)})}m(ue);var he=C(ue,2),Te=g(he,!0);m(he);var ye=C(he,2);{var Oe=F=>{var Z=oA(),se=g(Z),me=g(se),G=g(me);m(me);var ae=C(me,2),ge=g(ae);m(ae);var be=C(ae,2),fe=g(be);m(be);var we=C(be,2),$e=g(we);m(we),m(se),m(Z),Ae(()=>{var Ye;Re(G,`Created: ${c(T).created.manufacturers??""} manufacturers`),Re(ge,`Created: ${c(T).created.products??""} products`),Re(fe,`Created: ${c(T).created.rentalCompanies??""} companies`),Re($e,`Updated: ${((Ye=c(T).updated)==null?void 0:Ye.rentalCompanies)||0} companies`)}),N(F,Z)};te(ye,F=>{c(T).success&&c(T).created&&F(Oe)})}var He=C(ye,2);{var Be=F=>{var Z=cA(),se=C(g(Z),2);ar(se,21,()=>c(T).errors,hn,(me,G)=>{var ae=lA(),ge=g(ae,!0);m(ae),Ae(()=>Re(ge,c(G))),N(me,ae)}),m(se),m(Z),N(F,Z)};te(He,F=>{!c(T).success&&c(T).errors&&c(T).errors.length>0&&F(Be)})}var lt=C(He,2);{var H=F=>{var Z=uA();N(F,Z)};te(lt,F=>{c(T).pendingResolution&&F(H)})}m(_e),Ae(()=>{It(_e,1,`mx-4 mt-4 mb-4 rounded border p-3 ${(c(T).success?"border-green-200 bg-green-50":"border-red-200 bg-red-50")??""}`),Re(Te,c(T).message)}),N(ne,_e)};te(pe,ne=>{c(T)&&ne(ke)})}m(L),Ae((ne,_e)=>{It(v,1,`border-2 ${(c(w)?"border-blue-500 bg-blue-50":"border-gray-300")??""} rounded-lg p-4 text-center transition-colors`),nt(ie,"placeholder",c(d)),W.disabled=ne,de.disabled=_e},[()=>c(o)||!c(s).trim(),()=>c(o)||!c(s).trim()]),fr("dragenter",v,ee),fr("dragleave",v,z),fr("dragover",v,V),fr("drop",v,D),dt(ie,()=>c(s),ne=>R(s,ne)),N(r,L),tr()}or(["click","keydown","change"]);function bh(r,e){e("cancel")}async function pA(r,e,t,n,i,s,o,l,d){if(e()){R(t,!0),R(n,"");try{i.debug("Submitting resolutions:",c(s)),i.debug("Import session ID:",l.importSessionId);const h=await fetch("/api/import",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({importSessionId:l.importSessionId,resolutions:c(s)})}),p=await h.json();i.debug("Resolution response:",p),h.ok&&p.success?d("complete",{resolutions:c(s)}):(R(n,p.error||"Failed to resolve entities",!0),i.error("Resolution failed:",c(n)))}catch(h){R(n,h instanceof Error?h.message:"Unknown error occurred",!0),i.error("Exception during resolution:",c(n))}finally{R(t,!1)}}}var mA=B('<div class="mx-4 mt-4 rounded border border-red-200 bg-red-50 p-3 text-red-700"> </div>'),gA=B('<p class="py-4 text-center text-gray-500">No missing entities to resolve.</p>'),vA=B('<span class="ml-1"> </span>'),_A=(r,e,t)=>e(c(t).id,"create"),yA=(r,e,t)=>e(c(t).id,"reference"),bA=(r,e,t)=>e(c(t).id,"skip"),wA=(r,e,t)=>e(c(t).id,r),EA=B('<div class="mt-2"><label class="block text-sm font-medium text-gray-700">Name</label> <input type="text" class="w-full rounded border p-2"></div>'),IA=(r,e,t)=>e(c(t).id,r),TA=B("<option> </option>"),AA=B('<div class="mt-2"><select class="w-full rounded border p-2"><option> </option><!></select></div>'),RA=B('<div class="rounded-lg border p-4"><h3 class="mb-2 font-medium"> <span class="font-mono"> </span></h3> <p class="mb-3 text-sm text-gray-600"> <!></p> <div class="space-y-3"><div><p class="mb-2 font-medium">Select an action:</p> <div class="space-y-2"><label class="flex items-center"><input type="radio" value="create" class="mr-2"> <span> </span></label> <label class="flex items-center"><input type="radio" value="reference" class="mr-2"> <span> </span></label> <label class="flex items-center"><input type="radio" value="skip" class="mr-2"> <span>Skip (ignore this reference)</span></label></div></div> <!></div></div>'),PA=B('<div class="space-y-6"></div>'),CA=B("<!> Processing...",1),SA=B("<!> Apply & Continue Import",1),kA=B(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"><div class="flex max-h-[90vh] w-full max-w-3xl flex-col rounded-lg bg-white shadow-xl"><div class="flex items-center justify-between border-b p-4"><h2 class="flex items-center text-xl font-bold"><!> Missing Entities Resolution</h2> <button class="rounded-full p-2 hover:bg-gray-200" aria-label="Close"><!></button></div> <div class="border-b bg-yellow-50 p-4"><p class="flex items-start"><!> <span>The import process found references to entities that don't exist in the system. Please
						specify how to handle each missing entity before continuing.</span></p></div> <!> <div class="flex-grow overflow-y-auto p-4"><!></div> <div class="flex justify-end space-x-2 border-t p-4"><button class="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300">Cancel Import</button> <button class="flex items-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-blue-400"><!></button></div></div></div>`);function xA(r,e){er(e,!0);const t=Ar("MissingEntityResolver"),n=Dh(),i=yg(e,["$$slots","$$events","$$legacy"]);let s=re(!1),o=re(at({})),l=re(at([])),d=re(at([])),h=re("");Tt(()=>{if(e.missingEntities.length>0&&Object.keys(c(o)).length===0){const D={};e.missingEntities.forEach(x=>{D[x.id]={type:x.type,id:x.id,action:"create",name:x.referenceName||""}}),R(o,D,!0),t.debug("Initialized resolutions:",c(o))}}),Tt(()=>{const D=Xt.subscribe(L=>{R(l,L,!0)}),x=$t.subscribe(L=>{R(d,L,!0)});return()=>{D(),x()}});function p(){let D=!0;return Object.values(c(o)).forEach(x=>{x.action==="create"&&(!x.name||x.name.trim()==="")&&(R(h,`Name is required for creating new ${x.type} with ID ${x.id}`),D=!1),x.action==="reference"&&!x.referenceId&&(R(h,`Reference ID is required for ${x.type} with ID ${x.id}`),D=!1)}),D||t.warn("Resolution validation failed:",c(h)),D}function w(D,x){D in c(o)&&(R(o,{...c(o),[D]:{...c(o)[D],...x}},!0),t.debug(`Updated resolution for ${D}:`,c(o)[D]))}function T(D){return D==="manufacturer"?c(l).filter(x=>x.isActive):c(d).filter(x=>x.isActive)}function S(D){return D==="manufacturer"?"Hersteller":"Produkt"}function k(D,x){w(D,{action:x})}function $(D,x){const L=x.target;L&&w(D,{name:L.value})}function O(D,x){const L=x.target;L&&w(D,{referenceId:L.value})}var ee=Ue(),z=ce(ee);{var V=D=>{var x=kA(),L=g(x),b=g(L),v=g(b),I=g(v);Kg(I,{size:20,class:"mr-2 text-yellow-500"}),Ee(),m(v);var A=C(v,2);A.__click=[bh,n];var E=g(A);br(E,{size:20}),m(A),m(b);var P=C(b,2),y=g(P),j=g(y);jg(j,{size:20,class:"mt-0.5 mr-2 flex-shrink-0 text-blue-500"}),Ee(2),m(y),m(P);var ie=C(P,2);{var q=ue=>{var K=mA(),X=g(K,!0);m(K),Ae(()=>Re(X,c(h))),N(ue,K)};te(ie,ue=>{c(h)&&ue(q)})}var W=C(ie,2),oe=g(W);{var de=ue=>{var K=gA();N(ue,K)},Pe=ue=>{var K=PA();ar(K,21,()=>e.missingEntities,X=>X.id,(X,Y)=>{var he=RA(),Te=g(he),ye=g(Te),Oe=C(ye),He=g(Oe,!0);m(Oe),m(Te);var Be=C(Te,2),lt=g(Be),H=C(lt);{var F=We=>{var Ke=vA(),gt=g(Ke);m(Ke),Ae(()=>Re(gt,`as "${c(Y).referenceName??""}"`)),N(We,Ke)};te(H,We=>{c(Y).referenceName&&We(F)})}m(Be);var Z=C(Be,2),se=g(Z),me=C(g(se),2),G=g(me),ae=g(G);qe(ae),ae.__click=[_A,k,Y];var ge=C(ae,2),be=g(ge);m(ge),m(G);var fe=C(G,2),we=g(fe);qe(we),we.__click=[yA,k,Y];var $e=C(we,2),Ye=g($e);m($e),m(fe);var Le=C(fe,2),je=g(Le);qe(je),je.__click=[bA,k,Y],Ee(2),m(Le),m(me),m(se);var Ze=C(se,2);{var Je=We=>{var Ke=EA(),gt=g(Ke),xe=C(gt,2);qe(xe),xe.__input=[wA,$,Y],m(Ke),Ae(Ce=>{var Ne;nt(gt,"for",`name-${c(Y).id??""}`),nt(xe,"id",`name-${c(Y).id??""}`),Dg(xe,((Ne=c(o)[c(Y).id])==null?void 0:Ne.name)||c(Y).referenceName||""),nt(xe,"placeholder",Ce)},[()=>`Enter ${S(c(Y).type)} name`]),N(We,Ke)},Ge=(We,Ke)=>{{var gt=xe=>{var Ce=AA(),Ne=g(Ce);ua(Ne,()=>{var Ut;return((Ut=c(o)[c(Y).id])==null?void 0:Ut.referenceId)||""});var rt;Ne.__change=[IA,O,Y];var Rt=g(Ne);Rt.value=((Rt.__value="")==null,"");var St=g(Rt);m(Rt);var Rr=C(Rt);ar(Rr,17,()=>T(c(Y).type),hn,(Ut,kt)=>{var Ot=TA(),hr={},Et=g(Ot,!0);m(Ot),Ae(()=>{hr!==(hr=c(kt).id)&&(Ot.value=(Ot.__value=c(kt).id)==null?"":c(kt).id),Re(Et,c(kt).name||c(kt).id)}),N(Ut,Ot)}),m(Ne),m(Ce),Ae(Ut=>{var kt,Ot,hr,Et;nt(Ne,"id",`reference-${c(Y).id??""}`),rt!==(rt=((kt=c(o)[c(Y).id])==null?void 0:kt.referenceId)||"")&&(Ne.value=(Ne.__value=((Ot=c(o)[c(Y).id])==null?void 0:Ot.referenceId)||"")==null?"":((hr=c(o)[c(Y).id])==null?void 0:hr.referenceId)||"",li(Ne,((Et=c(o)[c(Y).id])==null?void 0:Et.referenceId)||"")),Re(St,`Select a ${Ut??""}`)},[()=>S(c(Y).type)]),N(xe,Ce)};te(We,xe=>{var Ce;((Ce=c(o)[c(Y).id])==null?void 0:Ce.action)==="reference"&&xe(gt)},Ke)}};te(Ze,We=>{var Ke;((Ke=c(o)[c(Y).id])==null?void 0:Ke.action)==="create"?We(Je):We(Ge,!1)})}m(Z),m(he),Ae((We,Ke,gt)=>{var xe,Ce,Ne;Re(ye,`${We??""} ID: `),Re(He,c(Y).id),Re(lt,`Referenced in: ${c(Y).referencedIn??""} `),nt(ae,"name",`action-${c(Y).id??""}`),Yi(ae,((xe=c(o)[c(Y).id])==null?void 0:xe.action)==="create"),Re(be,`Create new ${Ke??""}`),nt(we,"name",`action-${c(Y).id??""}`),Yi(we,((Ce=c(o)[c(Y).id])==null?void 0:Ce.action)==="reference"),Re(Ye,`Reference existing ${gt??""}`),nt(je,"name",`action-${c(Y).id??""}`),Yi(je,((Ne=c(o)[c(Y).id])==null?void 0:Ne.action)==="skip")},[()=>S(c(Y).type),()=>S(c(Y).type),()=>S(c(Y).type)]),N(X,he)}),m(K),N(ue,K)};te(oe,ue=>{e.missingEntities.length===0?ue(de):ue(Pe,!1)})}m(W);var Me=C(W,2),Xe=g(Me);Xe.__click=[bh,n];var pe=C(Xe,2);pe.__click=[pA,p,s,h,t,o,i,e,n];var ke=g(pe);{var ne=ue=>{var K=CA(),X=ce(K);Br(X,{size:16,class:"mr-2 animate-spin"}),Ee(),N(ue,K)},_e=ue=>{var K=SA(),X=ce(K);Gg(X,{size:16,class:"mr-2"}),Ee(),N(ue,K)};te(ke,ue=>{c(s)?ue(ne):ue(_e,!1)})}m(pe),m(Me),m(L),m(x),Ae(()=>pe.disabled=c(s)||e.missingEntities.length===0),N(D,x)};te(z,D=>{e.show&&D(V)})}N(r,ee),tr()}or(["click","input","change"]);function DA(r,e,t){R(e,!1),window.location.search.includes("admin=true")&&Nh("/",{replaceState:!0});const n=new CustomEvent("close");t(n)}async function NA(r,e,t,n,i){R(e,!0),R(t,"");try{await ST(c(n),c(i))}catch(s){s instanceof Error?R(t,s.message,!0):R(t,"Anmeldung fehlgeschlagen"),R(t,`<span class="auth-error">${c(t)}</span>`)}finally{R(e,!1)}}async function VA(){await kT()}function wh(r,e,t,n,i,s){e.debug("Toggling import modal. Current state:",c(t)),R(t,!c(t)),e.debug("New import modal state:",c(t)),c(t)===!1&&(R(n,!1),R(i,[],!0),R(s,""))}function MA(r,e,t){const n=r.target;n&&(R(e,n.value,!0),R(t,!1),setTimeout(()=>{R(t,!0)},0))}function OA(r,e,t){const n=r.target;n&&(R(e,n.value,!0),R(t,!1),setTimeout(()=>{R(t,!0)},0))}var LA=B('<button class="flex items-center rounded-md bg-green-600 px-3 py-1.5 text-white" title="Import"><!> Import</button>'),$A=B('<!> <button class="rounded-md bg-gray-200 px-3 py-1.5 text-sm">Abmelden</button>',1),FA=B('<div class="mb-4 rounded-md bg-red-50 p-4 text-red-800"><!></div>'),UA=B('<div class="mx-auto my-8 max-w-md"><h2 class="mb-4 text-xl">Anmelden</h2> <!> <form><div class="mb-4"><label class="mb-1 block text-sm font-medium" for="email">Email</label> <input id="email" type="email" class="w-full rounded-md border border-gray-300 p-2" required></div> <div class="mb-4"><label class="mb-1 block text-sm font-medium" for="password">Passwort</label> <input id="password" type="password" class="w-full rounded-md border border-gray-300 p-2" required></div> <button type="button" class="rounded-md bg-blue-600 px-4 py-2 text-white disabled:bg-blue-300"> </button></form></div>'),zA=B('<div class="rounded-md bg-yellow-50 p-4 text-yellow-800"><p>Sie benötigen Administratorrechte, um dieses Dashboard zu verwenden.</p></div>'),BA=(r,e)=>e("manufacturers"),jA=(r,e)=>e("products"),qA=(r,e)=>e("rental-companies"),HA=B('<div class="mb-6 border-b border-gray-200"><nav class="-mb-px flex"><button><span class="flex items-center"><!> Hersteller</span></button> <button><span class="flex items-center"><!> Produkte</span></button> <button><span class="flex items-center"><!> DryHire-Firmen</span></button></nav></div> <!>',1),GA=B('<div class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black/30 p-4 backdrop-blur-sm"><div class="max-h-[90vh] w-11/12 max-w-6xl rounded-lg bg-white shadow-xl"><div class="flex h-full flex-col overflow-hidden"><div class="flex items-center justify-between border-b border-gray-200 p-4"><h1 class="text-2xl font-bold">Admin Panel</h1> <div class="flex items-center space-x-3"><!> <button class="rounded-full p-2 hover:bg-gray-200" aria-label="Schließen"><!></button></div></div> <div class="custom-scrollbar max-h-[calc(90vh-80px)] flex-1 overflow-y-auto p-6 pb-8 svelte-1aozakx"><!></div></div></div></div>'),WA=B('<div class="fixed inset-0 z-[60] flex items-center justify-center overflow-auto bg-black/30 p-4 backdrop-blur-sm"><div class="import-modal max-h-[70vh] w-11/12 max-w-4xl rounded-xl bg-white shadow-xl"><div class="flex items-center justify-between border-b border-gray-200 p-4"><h2 class="text-xl font-bold">Import Data</h2> <div class="flex items-center space-x-4"><select id="entity-type-select" class="h-9 rounded border border-gray-300 bg-white px-2 py-1 text-sm" aria-label="Select entity type to import"><option>Manufacturers</option><option>Products</option><option>Companies</option></select> <select id="import-format-select" class="h-9 rounded border border-gray-300 bg-white px-2 py-1 text-sm" aria-label="Select import file format"><option>CSV</option><option>JSON</option></select> <button class="text-gray-500 hover:text-gray-700" aria-label="Close import dialog"><!></button></div></div> <!></div></div>'),KA=B("<!> <!>",1);function QA(r,e){er(e,!0);const t=Ar("AdminModal");let n=re(at(e.show||!1)),i=re(""),s=re(""),o=re(!1),l=re(""),d=re("manufacturers"),h=re(!1),p=re(!1),w=re(!1),T=re(at([])),S=re(!1),k=re(""),$=re("manufacturers"),O=re("csv");Tt(()=>{R(n,e.show||!1,!0)}),Ln(()=>{const y=RT.subscribe(q=>{R(h,q,!0)}),j=AT.subscribe(q=>{R(p,q,!0)});ca();const ie=q=>{var de;const W=q;t.debug("Data updated event received, refreshing data"),ca(),((de=W.detail)==null?void 0:de.forceRefresh)===!0&&(t.debug("Force refreshing all data..."),setTimeout(()=>{ys()},100))};return window.addEventListener("data-updated",ie),()=>{y(),j(),window.removeEventListener("data-updated",ie)}});function ee(y){R(w,!1),ca()}function z(){}function V(){R(S,!1),R(T,[],!0),R(k,"")}function D(y){R(T,y.detail.missingEntities,!0),R(k,y.detail.importSessionId,!0),R(S,!0)}function x(){V(),ys()}function L(y){R(d,y,!0),V()}function b(y){document.createElement("div").dispatchEvent(y)}var v=KA(),I=ce(v);{var A=y=>{var j=GA(),ie=g(j),q=g(ie),W=g(q),oe=C(g(W),2),de=g(oe);{var Pe=ue=>{var K=$A(),X=ce(K);{var Y=Te=>{var ye=LA();ye.__click=[wh,t,w,S,T,k];var Oe=g(ye);Uh(Oe,{size:16,class:"mr-1"}),Ee(),m(ye),N(Te,ye)};te(X,Te=>{c(h)&&Te(Y)})}var he=C(X,2);he.__click=[VA],N(ue,K)};te(de,ue=>{c(p)&&ue(Pe)})}var Me=C(de,2);Me.__click=[DA,n,b];var Xe=g(Me);br(Xe,{size:24}),m(Me),m(oe),m(W);var pe=C(W,2),ke=g(pe);{var ne=ue=>{var K=UA(),X=C(g(K),2);{var Y=H=>{var F=FA(),Z=g(F);Rg(Z,()=>c(l)),m(F),N(H,F)};te(X,H=>{c(l)&&H(Y)})}var he=C(X,2),Te=g(he),ye=C(g(Te),2);qe(ye),m(Te);var Oe=C(Te,2),He=C(g(Oe),2);qe(He),m(Oe);var Be=C(Oe,2);Be.__click=[NA,o,l,i,s];var lt=g(Be,!0);m(Be),m(he),m(K),Ae(()=>{Be.disabled=c(o),Re(lt,c(o)?"Anmelden...":"Anmelden")}),dt(ye,()=>c(i),H=>R(i,H)),dt(He,()=>c(s),H=>R(s,H)),N(ue,K)},_e=(ue,K)=>{{var X=he=>{var Te=zA();N(he,Te)},Y=he=>{var Te=HA(),ye=ce(Te),Oe=g(ye),He=g(Oe);He.__click=[BA,L];var Be=g(He),lt=g(Be);ei(lt,{size:16,class:"mr-1"}),Ee(),m(Be),m(He);var H=C(He,2);H.__click=[jA,L];var F=g(H),Z=g(F);ti(Z,{size:16,class:"mr-1"}),Ee(),m(F),m(H);var se=C(H,2);se.__click=[qA,L];var me=g(se),G=g(me);Ug(G,{size:16,class:"mr-1"}),Ee(),m(me),m(se),m(Oe),m(ye);var ae=C(ye,2);{var ge=fe=>{ZT(fe,{get isAdmin(){return c(h)}})},be=(fe,we)=>{{var $e=Le=>{w1(Le,{get isAdmin(){return c(h)}})},Ye=(Le,je)=>{{var Ze=Je=>{J1(Je,{get isAdmin(){return c(h)}})};te(Le,Je=>{c(d)==="rental-companies"&&Je(Ze)},je)}};te(fe,Le=>{c(d)==="products"?Le($e):Le(Ye,!1)},we)}};te(ae,fe=>{c(d)==="manufacturers"?fe(ge):fe(be,!1)})}Ae(()=>{It(He,1,`mr-2 px-4 py-2 ${(c(d)==="manufacturers"?"border-b-2 border-blue-500 text-blue-600":"text-gray-500 hover:text-gray-700")??""}`),It(H,1,`mr-2 px-4 py-2 ${(c(d)==="products"?"border-b-2 border-blue-500 text-blue-600":"text-gray-500 hover:text-gray-700")??""}`),It(se,1,`px-4 py-2 ${(c(d)==="rental-companies"?"border-b-2 border-blue-500 text-blue-600":"text-gray-500 hover:text-gray-700")??""}`)}),N(he,Te)};te(ue,he=>{c(h)?he(Y,!1):he(X)},K)}};te(ke,ue=>{c(p)?ue(_e,!1):ue(ne)})}m(pe),m(q),m(ie),m(j),N(y,j)};te(I,y=>{c(n)&&y(A)})}var E=C(I,2);{var P=y=>{var j=WA(),ie=g(j),q=g(ie),W=C(g(q),2),oe=g(W);ua(oe,()=>c($));var de;oe.__change=[MA,$,w];var Pe=g(oe);Pe.value=(Pe.__value="manufacturers")==null?"":"manufacturers";var Me=C(Pe);Me.value=(Me.__value="products")==null?"":"products";var Xe=C(Me);Xe.value=(Xe.__value="rentalCompanies")==null?"":"rentalCompanies",m(oe);var pe=C(oe,2);ua(pe,()=>c(O));var ke;pe.__change=[OA,O,w];var ne=g(pe);ne.value=(ne.__value="csv")==null?"":"csv";var _e=C(ne);_e.value=(_e.__value="json")==null?"":"json",m(pe);var ue=C(pe,2);ue.__click=[wh,t,w,S,T,k];var K=g(ue);br(K,{size:20}),m(ue),m(W),m(q);var X=C(q,2);{var Y=Te=>{xA(Te,{get missingEntities(){return c(T)},get importSessionId(){return c(k)},get show(){return c(S)},$$events:{complete:x,cancel:V}})},he=Te=>{fA(Te,{get initialImportType(){return c(O)},get initialEntityType(){return c($)},$$events:{success:ee,error:z,resolveMissingEntities:D}})};te(X,Te=>{c(S)?Te(Y):Te(he,!1)})}m(ie),m(j),Ae(()=>{de!==(de=c($))&&(oe.value=(oe.__value=c($))==null?"":c($),li(oe,c($))),ke!==(ke=c(O))&&(pe.value=(pe.__value=c(O))==null?"":c(O),li(pe,c(O)))}),N(y,j)};te(E,y=>{c(w)&&y(P)})}N(r,v),tr()}or(["click","change"]);const XA=()=>{const r=Eg;return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},updated:r.updated}},JA={subscribe(r){return XA().page.subscribe(r)}};function YA(){ys()}var ZA=B('<div class="absolute inset-0 z-50 flex items-center justify-center bg-white/80"><div class="text-center"><div class="mx-auto h-12 w-12 animate-spin rounded-full border-b-2 border-blue-700"></div> <p class="mt-4 text-gray-600">DryHire-Daten werden geladen...</p></div></div>'),e2=B('<div class="absolute inset-0 z-50 flex items-center justify-center bg-white/80"><div class="max-w-md rounded-lg bg-red-50 p-6 text-center shadow-md"><!> <h3 class="mb-2 text-lg font-medium text-red-800">Fehler beim Laden der Daten</h3> <p class="mb-4 text-red-600"> </p> <button class="mx-auto flex items-center rounded bg-blue-600 px-4 py-2 text-white"><!> Erneut versuchen</button></div></div>'),t2=B('<div class="absolute top-4 left-6 z-10 flex items-center space-x-4"><div class="w-100"><!></div> <div class="w-60"><!></div> <div class="w-60"><!></div></div>'),r2=(r,e)=>e(r),n2=B('<span class="filter-badge absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white"> </span>'),i2=(r,e)=>e(r),s2=B('<span class="filter-badge absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white"> </span>'),a2=r=>{r.stopPropagation(),ho()},o2=B('<button class="mr-3 flex items-center justify-center text-blue-600 hover:text-blue-800" aria-label="Filter zurücksetzen"><!></button>'),l2=(r,e)=>{r.stopPropagation(),e()},c2=B('<div class="mobile-filter-panel manufacturer-panel absolute bottom-31 left-2 z-20 w-64 rounded-xl bg-white shadow-xl"><div class="filter-panel-header flex items-center justify-between rounded-t-xl p-2"><h3 class="flex items-center text-sm font-medium"><!> Hersteller Filter</h3> <div class="flex items-center"><!> <button class="text-gray-500 hover:text-gray-700"><!></button></div></div> <div><!></div></div>'),u2=r=>{r.stopPropagation(),ho()},d2=B('<button class="mr-3 flex items-center justify-center text-blue-600 hover:text-blue-800" aria-label="Filter zurücksetzen"><!></button>'),h2=(r,e)=>{r.stopPropagation(),e()},f2=B('<div class="mobile-filter-panel product-panel absolute bottom-31 left-16 z-20 w-64 rounded-xl bg-white shadow-xl"><div class="filter-panel-header flex items-center justify-between rounded-t-xl p-2"><h3 class="flex items-center text-sm font-medium"><!> Produkt Filter</h3> <div class="flex items-center"><!> <button class="text-gray-500 hover:text-gray-700"><!></button></div></div> <div><!></div></div>'),p2=B('<div class="absolute top-4 right-4 left-4 z-10"><!></div> <div class="absolute bottom-15 left-4 z-10 flex flex-row space-x-3"><button class="filter-fab manufacturer-fab relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg" aria-label="Manufacturer Filter"><!> <!></button> <button class="filter-fab product-fab relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg" aria-label="Product Filter"><!> <!></button></div> <!> <!>',1),m2=B('<div class="relative h-screen w-full overflow-hidden"><!> <!> <!> <!></div>');function g2(r,e){er(e,!0);const[t,n]=bg(),i=()=>wg(JA,"$page",t);let s=re(!0),o=re(null),l=re(!1),d=re(!1),h=re(!1),p=re(!1),w=re(at([])),T=re(at([]));function S(){R(d,window.innerWidth<940)}Tt(()=>{const E=vs.subscribe(j=>{R(s,j,!0)}),P=vl.subscribe(j=>{R(o,j,!0)}),y=Jt.subscribe(j=>{R(w,j.manufacturers,!0),R(T,j.products,!0)});return()=>{E(),P(),y()}}),Tt(()=>{R(l,i().url.searchParams.has("admin"),!0)}),Ln(()=>(S(),window.addEventListener("resize",S),document.addEventListener("click",ee),()=>{window.removeEventListener("resize",S),document.removeEventListener("click",ee)}));function k(E){c(d)&&(E.stopPropagation(),E.preventDefault(),!c(h)&&c(p)&&R(p,!1),R(h,!c(h)))}function $(E){c(d)&&(E.stopPropagation(),E.preventDefault(),!c(p)&&c(h)&&R(h,!1),R(p,!c(p)))}function O(){R(h,!1),R(p,!1)}function ee(E){if(!c(d))return;const P=E.target,y=P.closest(".manufacturer-fab"),j=P.closest(".product-fab"),ie=P.closest(".mobile-filter-panel"),q=P.closest(".search-results-container"),W=P.closest(".search-control");if(q||W){E.stopPropagation();return}!y&&!j&&!ie&&O()}var z=m2(),V=g(z);{var D=E=>{var P=ZA();N(E,P)},x=(E,P)=>{{var y=j=>{var ie=e2(),q=g(ie),W=g(q);Fh(W,{size:32,class:"mx-auto mb-3 text-red-500"});var oe=C(W,4),de=g(oe,!0);m(oe);var Pe=C(oe,2);Pe.__click=[YA];var Me=g(Pe);Br(Me,{size:16,class:"mr-2"}),Ee(),m(Pe),m(q),m(ie),Ae(()=>Re(de,c(o))),N(j,ie)};te(E,j=>{c(o)&&j(y)},P)}};te(V,E=>{c(s)?E(D):E(x,!1)})}var L=C(V,2);QA(L,{get show(){return c(l)}});var b=C(L,2);TT(b,{});var v=C(b,2);{var I=E=>{var P=t2(),y=g(P),j=g(y);lh(j,{}),m(y);var ie=C(y,2),q=g(ie);ch(q,{}),m(ie);var W=C(ie,2),oe=g(W);uh(oe,{}),m(W),m(P),N(E,P)},A=E=>{var P=p2(),y=ce(P),j=g(y);lh(j,{}),m(y);var ie=C(y,2),q=g(ie);q.__click=[r2,k];var W=g(q);ei(W,{size:20});var oe=C(W,2);{var de=K=>{var X=n2(),Y=g(X,!0);m(X),Ae(()=>Re(Y,c(w).length)),N(K,X)};te(oe,K=>{c(w).length>0&&K(de)})}m(q);var Pe=C(q,2);Pe.__click=[i2,$];var Me=g(Pe);ti(Me,{size:20});var Xe=C(Me,2);{var pe=K=>{var X=s2(),Y=g(X,!0);m(X),Ae(()=>Re(Y,c(T).length)),N(K,X)};te(Xe,K=>{c(T).length>0&&K(pe)})}m(Pe),m(ie);var ke=C(ie,2);{var ne=K=>{var X=c2(),Y=g(X),he=g(Y),Te=g(he);ei(Te,{size:16,class:"mr-1.5 text-blue-600"}),Ee(),m(he);var ye=C(he,2),Oe=g(ye);{var He=Z=>{var se=o2();se.__click=[a2];var me=g(se);Su(me,{size:16}),m(se),N(Z,se)};te(Oe,Z=>{c(w).length>0&&Z(He)})}var Be=C(Oe,2);Be.__click=[l2,O];var lt=g(Be);br(lt,{size:18}),m(Be),m(ye),m(Y);var H=C(Y,2),F=g(H);ch(F,{}),m(H),m(X),N(K,X)};te(ke,K=>{c(h)&&K(ne)})}var _e=C(ke,2);{var ue=K=>{var X=f2(),Y=g(X),he=g(Y),Te=g(he);ti(Te,{size:16,class:"mr-1.5 text-blue-600"}),Ee(),m(he);var ye=C(he,2),Oe=g(ye);{var He=Z=>{var se=d2();se.__click=[u2];var me=g(se);Su(me,{size:16}),m(se),N(Z,se)};te(Oe,Z=>{c(T).length>0&&Z(He)})}var Be=C(Oe,2);Be.__click=[h2,O];var lt=g(Be);br(lt,{size:18}),m(Be),m(ye),m(Y);var H=C(Y,2),F=g(H);uh(F,{}),m(H),m(X),N(K,X)};te(_e,K=>{c(p)&&K(ue)})}N(E,P)};te(v,E=>{c(d)?E(A,!1):E(I)})}m(z),N(r,z),tr(),n()}or(["click"]);function k2(r,e){er(e,!1),Ln(()=>{const t=new URL(window.location.href),n=t.searchParams.get("path");if(n){t.searchParams.delete("path"),history.replaceState({},"",t.toString());const[i,s,o]=n.split(/(?=\?)|(?=#)/);Nh(i+(s||"")+(o||""),{replaceState:!0})}}),Eh(),g2(r,{}),tr()}export{k2 as component};
