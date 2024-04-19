import{_ as P}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as Z,c as J,a as i}from"./app-BLdtRpIX.js";const R=i("option",{value:"0"},"名数: S0",-1),q=i("option",{value:"1"},"基数: S1",-1),G=i("option",{value:"2"},"维数: S2",-1),O=i("option",{value:"3"},"序数: S3",-1),U=[R,q,G,O],V=i("option",{value:"0"},"正数",-1),x=i("option",{value:"1"},"负数",-1),F=[V,x],K=i("option",{value:"0"},"简替",-1),Q=i("option",{value:"1"},"原形",-1),W=[K,Q],X=i("option",{value:"0"},"默认",-1),Y=i("option",{value:"1"},"省略百",-1),ee=i("option",{value:"2"},"不省略百",-1),te=[X,Y,ee],ne=i("h6",null,"转换结果",-1),le=i("div",{id:"输出区域"},[i("p",null,"请输入数字( ⓛ ω ⓛ *)")],-1),re={__name:"num.html",setup(ae){function h(n){return n.trim()==="0".repeat(n.length)?"0":n.replace(/^0+/,"")}function k(n,e){var t="";return n!==""?(e==="1"?t="%#-"+n+"&a":e==="0"&&(t="%#"+n+"&a"),console.log("数字不为空，可以执行进一步的操作")):console.log("数字为空"),t}function j(n){let e="";for(var t=0,l=n.length-1;l>=0;l--)e=n.charAt(l)+e,t++,t%4===0&&l!==0&&(e=","+e);return e}function I(n,e){n=""+n;var t=n.split(","),l=t.length-1,r="";let o="";if(e===0)for(var a=l;a>=0;a--)t[a]!=="0000"&&(o=b(l),r=h(t[a])+o[l-a]+r);else if(e===1){for(var a=l;a>=0;a--)t[a]!=="0000"&&(o=b(l),r="%#"+h(t[a])+"&ëʼi"+o[l-a]+r);r=r.replace("ëʼi","a")}else if(e===2){for(var a=l;a>=0;a--)t[a]!=="0000"&&(o=b(l),r=M(h(t[a]))+o[l-a]+r);r=r.replace("ëʼi","a")}else console.log("分节类型为空");return r}function p(n,e){for(var t="",l=0;l<n.length;l++)n[l]==="#"?e==="0"?t+="o":e==="1"?t+="a":e==="2"?t+="e":e==="3"&&(t+="u"):t+=n[l];return t}function c(n,e){let t="";for(let l=0;l<n.length;l++){let r=n[l];r==="%"?e==="0"?r="w":e==="1"&&(r=""):r==="&"&&(e==="0"?r="":e==="1"&&(r="al")),t+=r}return t}function N(n,e,t){for(var l="",r=0;r<n.length;r++){var o=parseInt(n[r]);!isNaN(o)&&o>=0&&o<e.length&&(r===0?l+=e[o]+"a ":l+=e[o]+"ëʼi ")}return l.trim()}const b=n=>{const e=[""," %#pc&ui "," %#kẓ&ui "," %#pc&ui %#kẓ&ui "," %#čg&ui "],t=[];for(let r=0;r<n;r++){const o=Math.floor(r/4),a=r%4+1;let u=e[a];for(let s=0;s<o;s++)u+="%#čg&ui ";t.push(u)}return[].concat("",t)};var m=["%#vr&","%#ll&","%#ks&","%#z&","%#pš&","%#st&","%#cp&","%#ns&","%#čk&","%#lẓ&"],_=["","ars","ärs","ers","irs","ëirs","örs","ors","ürs","urs"];function M(n){if(n.length===4){let e=n.slice(0,2),t=n.slice(2,4),l=parseInt(e[1]),r=parseInt(t[1]),o=m[l],a=m[r],u=parseInt(e[0]),s=parseInt(t[0]),f=_[u],d=_[s],g=o+f,S=a+d;return g+"@ (%#gz&ui) "+S+"üň"}else if(n.length<2){let t=parseInt(n);return m[t]+"@"}else if(n.length<3){let e=n,t=parseInt(e[1]),l=parseInt(e[0]),r=m[t],o=_[l];return r+o+"@"}else if(n.length<4){let e=n.slice(0,1),t=n.slice(1,3),l=parseInt(e),r=parseInt(t[1]),o=m[l],a=m[r],u=parseInt(t[0]),s=_[u],f=a+s;return o+"@ (%#gz&ui) "+f+"üň"}else return"输入文本必须为4个字符长度"}function A(n){let e=n.replace(/(w)?(\S)vr(al)?ars/g,"$1$2j$3");e=e.replace(/\((w)?(\S)gz(al)?ui\) (?:w)?\Svr(?:al)?üň/g,"$1$2gz$3ui"),e=e.replace(/\s(?:w)?\Svr(?:al)?üň/g,""),e=e.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)gz(al)?ui/g,"$2$3gz$4$1"),e=e.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)pc(al)?ui/g,"$2$3pc$4$1"),e=e.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)kẓ(al)?ui/g,"$2$3kẓ$4$1"),e=e.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)čg(al)?ui/g,"$2$3čg$4$1");let t=e.replace(/@/g,"ëʼi").replace("ëʼi","a");return t=t.replace(/üň w(\S{1,3})ui/g,(l,r)=>`üň ${r}alui`),t}function L(n,e){let t=n;return e==="0"?t:e==="1"?(t=t.replace(/\s\((w)?(\S)gz(al)?ui\)/g,""),t):(t=t.replace(/(\(|\))/g,""),t)}function v(){var n=document.getElementById("数字").getAttribute("pattern"),e=document.getElementById("数字").value,t=new RegExp(n),l=document.getElementById("输出区域");t.test(e)?C():e===""?l.innerHTML="<p>太空虚了所以我来填充了ヾ(•ω•`)o</p>":l.innerHTML="<p>输入的不是数字哦(・ω・)ノ</p>"}function C(){var n=document.getElementById("数字").value,e=document.getElementById("类型").value,t=document.getElementById("极性").value,l=document.getElementById("简化").value,r=Math.abs(parseInt(n)),o=document.getElementById("省略").value,a=p(k(n,t),e);const u=c(a,l),s=c(p(N(n,m),e),l);n=h(n);let f="";var d=j(n);t==="1"?f="-"+d:t==="0"&&(f=d);var g="";const S=r;n=h(n);const z=c(p(I(d,0),e),l),B=c(p(I(d,1),e),l),E=A(c(p(I(d,2),e),l));let $="",y="",w="";t==="1"?(g="wetvyahnuʼu "+z,$="wetvyahnuʼu "+B,y="wetvyahnuʼu "+E,w="wetvyalša "+s.replace("a ","ëʼi ")):S==0n?(g=z,$=c(p("%#vr&a",e),l),y=c(p("%#vr&a",e),l),w=s):(g=z,$=B,y=E,w=s);const D=L(y,o);var H=document.getElementById("输出区域");let T=`<p>简替：${u}</p>
    <p>分节数字：${f}</p>
    <p>分节替换字串：${g}</p>
    <p>表记分数替串：${$}</p>
    <p>千位转数：${D}</p>
    `;e==="0"&&(T+=`<p>基于位置而非大小的名数：${w}</p>`),H.innerHTML=T}return(n,e)=>(Z(),J("div",null,[i("input",{type:"text",id:"数字",pattern:"^[0-9]+$",placeholder:"纯数字",required:"",onInput:e[0]||(e[0]=t=>v())},null,32),i("select",{id:"类型",onInput:e[1]||(e[1]=t=>v())},U,32),i("select",{id:"极性",onInput:e[2]||(e[2]=t=>v())},F,32),i("select",{id:"简化",onInput:e[3]||(e[3]=t=>v())},W,32),i("select",{id:"省略",onInput:e[4]||(e[4]=t=>v())},te,32),ne,le]))}},se=P(re,[["__file","num.html.vue"]]),ue=JSON.parse('{"path":"/tool/num.html","title":"数字转换工具","lang":"zh-CN","frontmatter":{"title":"数字转换工具","icon":"fas fa-hashtag","sidebar":false,"description":"转换结果 请输入数字( ⓛ ω ⓛ *)","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://yuorb.github.io/en/tool/num.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://yuorb.github.io/ja/tool/num.html"}],["meta",{"property":"og:url","content":"https://yuorb.github.io/tool/num.html"}],["meta",{"property":"og:site_name","content":"NiGHT"}],["meta",{"property":"og:title","content":"数字转换工具"}],["meta",{"property":"og:description","content":"转换结果 请输入数字( ⓛ ω ⓛ *)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2024-04-19T08:46:57.000Z"}],["meta",{"property":"article:author","content":"天邪弱 Lucifer Caelius Delicatus"}],["meta",{"property":"article:modified_time","content":"2024-04-19T08:46:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数字转换工具\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-19T08:46:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"天邪弱 Lucifer Caelius Delicatus\\",\\"url\\":\\"https://www.zhihu.com/people/ryanlo713\\"}]}"]]},"headers":[],"git":{"createdTime":1713516417000,"updatedTime":1713516417000,"contributors":[{"name":"ryanlo713","email":"12672523+ryanlo713@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.09,"words":2428},"filePathRelative":"tool/num.md","localizedDate":"2024年4月19日","autoDesc":true}');export{se as comp,ue as data};
