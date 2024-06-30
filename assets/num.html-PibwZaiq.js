import{_ as R}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as q,c as x,a as i}from"./app-B45P7Ylz.js";const F={__name:"num.html",setup(H,{expose:s}){s();function g(n){return n.trim()==="0".repeat(n.length)?"0":n.replace(/^0+/,"")}function p(n,e){var t="";return n!==""?(e==="1"?t="%#-"+n+"&a":e==="0"&&(t="%#"+n+"&a"),console.log("数字不为空，可以执行进一步的操作")):console.log("数字为空"),t}function z(n){let e="";for(var t=0,r=n.length-1;r>=0;r--)e=n.charAt(r)+e,t++,t%4===0&&r!==0&&(e=","+e);return e}function I(n,e){n=""+n;var t=n.split(","),r=t.length-1,l="";let a="";if(e===0)for(var o=r;o>=0;o--)t[o]!=="0000"&&(a=w(r),l=g(t[o])+a[r-o]+l);else if(e===1){for(var o=r;o>=0;o--)t[o]!=="0000"&&(a=w(r),l="%#"+g(t[o])+"&ëʼi"+a[r-o]+l);l=l.replace("ëʼi","a")}else if(e===2){for(var o=r;o>=0;o--)t[o]!=="0000"&&(a=w(r),l=j(g(t[o]))+a[r-o]+l);l=l.replace("ëʼi","a")}else console.log("分节类型为空");return l}function _(n){n=""+n;for(var e=n.split(","),t=e.length-1,r="",l=t;l>=0;l--)e[l]!=="0000"&&(单位表=w(t),r="%#"+e[l]+"&ëʼi"+单位表[t-l]+r);return r=r.replace("ëʼi","a"),r}function f(n,e){for(var t="",r=0;r<n.length;r++)n[r]==="#"?e==="0"?t+="o":e==="1"?t+="a":e==="2"?t+="e":e==="3"&&(t+="u"):t+=n[r];return t}function m(n,e){let t="";for(let r=0;r<n.length;r++){let l=n[r];l==="%"?e==="0"?l="w":e==="1"&&(l=""):l==="&"&&(e==="0"?l="":e==="1"&&(l="al")),t+=l}return t}function T(n,e,t){for(var r="",l=0;l<n.length;l++){var a=parseInt(n[l]);!isNaN(a)&&a>=0&&a<e.length&&(l===0?r+=e[a]+"a ":r+=e[a]+"ëʼi ")}return r.trim()}const w=n=>{const e=[""," %#pc&ui "," %#kẓ&ui "," %#pc&ui %#kẓ&ui "," %#čg&ui "],t=[];for(let l=0;l<n;l++){const a=Math.floor(l/4),o=l%4+1;let d=e[o];for(let u=0;u<a;u++)d+="%#čg&ui ";t.push(d)}return[].concat("",t)};var c=["%#vr&","%#ll&","%#ks&","%#z&","%#pš&","%#st&","%#cp&","%#ns&","%#čk&","%#lẓ&"],y=["","ars","ärs","ers","irs","ëirs","örs","ors","ürs","urs"];function j(n){if(n.length===4){let e=n.slice(0,2),t=n.slice(2,4),r=parseInt(e[1]),l=parseInt(t[1]),a=c[r],o=c[l],d=parseInt(e[0]),u=parseInt(t[0]),h=y[d],v=y[u],$=a+h,B=o+v;return $+"@ (%#gz&ui) "+B+"üň"}else if(n.length<2){let t=parseInt(n);return c[t]+"@"}else if(n.length<3){let e=n,t=parseInt(e[1]),r=parseInt(e[0]),l=c[t],a=y[r];return l+a+"@"}else if(n.length<4){let e=n.slice(0,1),t=n.slice(1,3),r=parseInt(e),l=parseInt(t[1]),a=c[r],o=c[l],d=parseInt(t[0]),u=y[d],h=o+u;return a+"@ (%#gz&ui) "+h+"üň"}else return"输入文本必须为4个字符长度"}function M(n){let e=n.replace(/(w)?(\S)vr(al)?ars/g,"$1$2j$3");e=e.replace(/\((w)?(\S)gz(al)?ui\) (?:w)?\Svr(?:al)?üň/g,"$1$2gz$3ui"),e=e.replace(/\s(?:w)?\Svr(?:al)?üň/g,""),e=e.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)gz(al)?ui/g,"$2$3gz$4$1"),e=e.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)pc(al)?ui/g,"$2$3pc$4$1"),e=e.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)kẓ(al)?ui/g,"$2$3kẓ$4$1"),e=e.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)čg(al)?ui/g,"$2$3čg$4$1");let t=e.replace(/@/g,"ëʼi").replace("ëʼi","a");return t=t.replace(/üň w(\S{1,3})ui/g,(r,l)=>`üň ${l}alui`),t}function N(n,e){let t=n;return e==="0"?t:e==="1"?(t=t.replace(/\s\((w)?(\S)gz(al)?ui\)/g,""),t):(t=t.replace(/(\(|\))/g,""),t)}function Z(){var n=document.getElementById("数字").getAttribute("pattern"),e=document.getElementById("数字").value,t=new RegExp(n),r=document.getElementById("输出区域");t.test(e)?A():e===""?r.innerHTML="<p>太空虚了所以我来填充了ヾ(•ω•`)o</p>":r.innerHTML="<p>输入的不是数字哦(・ω・)ノ</p>"}function A(){var n=document.getElementById("数字").value,e=document.getElementById("类型").value,t=document.getElementById("极性").value,r=document.getElementById("简化").value,l=Math.abs(parseInt(n)),a=document.getElementById("省略").value,o=f(p(n,t),e);const d=m(o,r),u=m(f(T(n,c),e),r);n=g(n);let h="";var v=z(n);t==="1"?h="-"+v:t==="0"&&(h=v);var $="";const B=l;n=g(n);const E=m(f(I(v,0),e),r),C=m(f(I(v,1),e),r),D=M(m(f(I(v,2),e),r));let b="",S="",k="";t==="1"?($="wetvyahnuʼu "+E,b="wetvyahnuʼu "+C,S="wetvyahnuʼu "+D,k="wetvyalša "+u.replace("a ","ëʼi ")):B==0n?($=E,b=m(f("%#vr&a",e),r),S=m(f("%#vr&a",e),r),k=u):($=E,b=C,S=D,k=u);const J=N(S,a);var O=document.getElementById("输出区域");let P=`<p>数字代词根表记法：${d}</p>
    <p>Ithkuil 数字分节：${h}</p>
    <p>Ithkuil 底数替换准备：${$}</p>
    <p>Ithkuil 底数替换：${b}</p>
    <p>Ithkuil 指数数替换：${J}</p>
    `;e==="0"&&(P+=`<p>基于位置而非大小的名数表记：${k}</p>`),O.innerHTML=P}const L={删前置零:g,简替:p,分节:z,分节替换:I,表记分节替换:_,词干:f,简替形:m,位置名数替换:T,替换表:w,get 个数(){return c},set 个数(n){c=n},get 十倍(){return y},set 十倍(n){y=n},千数转换:j,格和音渡处理:M,省略处理:N,验证:Z,解析并显示结果:A};return Object.defineProperty(L,"__isScriptSetup",{enumerable:!1,value:!0}),L}},U=i("option",{value:"0"},"名数: S0",-1),V=i("option",{value:"1"},"基数: S1",-1),Y=i("option",{value:"2"},"维数: S2",-1),G=i("option",{value:"3"},"序数: S3",-1),K=[U,V,Y,G],Q=i("option",{value:"0"},"正数",-1),W=i("option",{value:"1"},"负数",-1),X=[Q,W],ee=i("option",{value:"0"},"简替",-1),te=i("option",{value:"1"},"原形",-1),ne=[ee,te],re=i("option",{value:"0"},"默认",-1),le=i("option",{value:"1"},"省略百",-1),oe=i("option",{value:"2"},"不省略百",-1),ae=[re,le,oe],ie=i("h6",null,"转换结果",-1),se=i("div",{id:"输出区域"},[i("p",null,"请输入数字( ⓛ ω ⓛ *)")],-1);function ue(H,s,g,p,z,I){return q(),x("div",null,[i("input",{type:"text",id:"数字",pattern:"^[0-9]+$",placeholder:"纯数字",required:"",onInput:s[0]||(s[0]=_=>p.验证())},null,32),i("select",{id:"类型",onInput:s[1]||(s[1]=_=>p.验证())},K,32),i("select",{id:"极性",onInput:s[2]||(s[2]=_=>p.验证())},X,32),i("select",{id:"简化",onInput:s[3]||(s[3]=_=>p.验证())},ne,32),i("select",{id:"省略",onInput:s[4]||(s[4]=_=>p.验证())},ae,32),ie,se])}const fe=R(F,[["render",ue],["__file","num.html.vue"]]),me=JSON.parse('{"path":"/tool/num.html","title":"数字转换工具","lang":"zh-CN","frontmatter":{"title":"数字转换工具","icon":"fas fa-hashtag","sidebar":false,"description":"转换结果 请输入数字( ⓛ ω ⓛ *)","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://yuorb.github.io/en/tool/num.html"}],["link",{"rel":"alternate","hreflang":"fr-fr","href":"https://yuorb.github.io/fr/tool/num.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://yuorb.github.io/ja/tool/num.html"}],["meta",{"property":"og:url","content":"https://yuorb.github.io/tool/num.html"}],["meta",{"property":"og:site_name","content":"Yuorb"}],["meta",{"property":"og:title","content":"数字转换工具"}],["meta",{"property":"og:description","content":"转换结果 请输入数字( ⓛ ω ⓛ *)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"fr-Fr"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2024-06-22T11:05:08.000Z"}],["meta",{"property":"article:author","content":"天邪弱 Lucifer Caelius Delicatus"}],["meta",{"property":"article:modified_time","content":"2024-06-22T11:05:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数字转换工具\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-22T11:05:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"天邪弱 Lucifer Caelius Delicatus\\",\\"url\\":\\"https://www.zhihu.com/people/ryanlo713\\"}]}"]]},"headers":[],"git":{"createdTime":1713516417000,"updatedTime":1719054308000,"contributors":[{"name":"ryanlo713","email":"12672523+ryanlo713@users.noreply.github.com","commits":5}]},"readingTime":{"minutes":8.13,"words":2439},"filePathRelative":"tool/num.md","localizedDate":"2024年4月19日","autoDesc":true}');export{fe as comp,me as data};
