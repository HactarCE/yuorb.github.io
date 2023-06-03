import{_ as b}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as w,c as A,e as x,b as s,d as e,a,w as l,n as z,g as E,f as c}from"./app-310ea7eb.js";const B={},j=s("p",null,"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。",-1),V=s("p",null,"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。",-1),U=s("h2",{id:"markdown-介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-介绍","aria-hidden":"true"},"#"),e(" Markdown 介绍")],-1),C={href:"https://theme-hope.vuejs.press/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://theme-hope.vuejs.press/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},P=s("h2",{id:"markdown-配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-配置","aria-hidden":"true"},"#"),e(" Markdown 配置")],-1),I=s("p",null,"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。",-1),J={class:"hint-container info"},F=s("p",{class:"hint-container-title"},"相关信息",-1),G={href:"https://theme-hope.vuejs.press/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},D=s("h2",{id:"markdown-扩展",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-扩展","aria-hidden":"true"},"#"),e(" Markdown 扩展")],-1),X={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},K=s("h3",{id:"vuepress-扩展",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-扩展","aria-hidden":"true"},"#"),e(" VuePress 扩展")],-1),L=s("p",null,"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。",-1),W={href:"https://theme-hope.vuejs.press/cookbook/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},Y=s("h3",{id:"主题扩展",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#主题扩展","aria-hidden":"true"},"#"),e(" 主题扩展")],-1),S={href:"https://theme-hope.vuejs.press/md-enhance/",target:"_blank",rel:"noopener noreferrer"},T=s("code",null,"vuepress-plugin-md-enhance",-1),q=c(`<h4 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h4><div><p>安全的在 Markdown 中使用 {{ variable }}。</p></div><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8">链接</a>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><div class="hint-container danger"><p class="hint-container-title">自定义标题</p><p>危险容器</p></div><details class="hint-container details"><summary>自定义标题</summary><p>详情容器</p></details>`,7),H={href:"https://theme-hope.vuejs.press/guide/markdown/container.html",target:"_blank",rel:"noopener noreferrer"},Q=s("h4",{id:"代码块",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#代码块","aria-hidden":"true"},"#"),e(" 代码块")],-1),R=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"pnpm"),e(),s("span",{class:"token function"},"add"),e(),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),O=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),e(),s("span",{class:"token function"},"add"),e(),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),N=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),e(" i "),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),$={href:"https://theme-hope.vuejs.press/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},ss=s("h4",{id:"上下角标",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#上下角标","aria-hidden":"true"},"#"),e(" 上下角标")],-1),es=s("p",null,[e("19"),s("sup",null,"th"),e(" H"),s("sub",null,"2"),e("O")],-1),as={href:"https://theme-hope.vuejs.press/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},ts=s("h4",{id:"自定义对齐",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自定义对齐","aria-hidden":"true"},"#"),e(" 自定义对齐")],-1),ns=s("div",{style:{"text-align":"center"}},[s("p",null,"我是居中的")],-1),ls=s("div",{style:{"text-align":"right"}},[s("p",null,"我在右对齐")],-1),rs={href:"https://theme-hope.vuejs.press/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},os=s("h4",{id:"attrs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),e(" Attrs")],-1),is=s("p",null,[e("一个拥有 ID 的 "),s("strong",{id:"word"},"单词"),e("。")],-1),cs={href:"https://theme-hope.vuejs.press/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"},ps=c('<h4 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h4><p>此文字有脚注<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p>',2),ms={href:"https://theme-hope.vuejs.press/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},hs=s("h4",{id:"标记",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#标记","aria-hidden":"true"},"#"),e(" 标记")],-1),ds=s("p",null,[e("你可以标记 "),s("mark",null,"重要的内容"),e(" 。")],-1),us={href:"https://theme-hope.vuejs.press/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},gs=s("h4",{id:"任务列表",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#任务列表","aria-hidden":"true"},"#"),e(" 任务列表")],-1),ks={class:"task-list-container"},_s=c('<li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 计划 1</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 计划 2</label></p></li>',2),vs={href:"https://theme-hope.vuejs.press/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},fs=s("h3",{id:"图片增强",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#图片增强","aria-hidden":"true"},"#"),e(" 图片增强")],-1),ys=s("p",null,"支持为图片设置颜色模式和大小",-1),bs={href:"https://theme-hope.vuejs.press/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},ws=s("h4",{id:"卡片",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#卡片","aria-hidden":"true"},"#"),e(" 卡片")],-1),As={href:"https://theme-hope.vuejs.press/guide/markdown/card.html",target:"_blank",rel:"noopener noreferrer"},xs=s("h4",{id:"图表",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#图表","aria-hidden":"true"},"#"),e(" 图表")],-1),zs={href:"https://theme-hope.vuejs.press/guide/markdown/chart.html",target:"_blank",rel:"noopener noreferrer"},Es=s("h4",{id:"echarts",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#echarts","aria-hidden":"true"},"#"),e(" Echarts")],-1),Bs={href:"https://theme-hope.vuejs.press/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},js=s("h4",{id:"流程图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#"),e(" 流程图")],-1),Vs={href:"https://theme-hope.vuejs.press/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},Us=s("h4",{id:"mermaid",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mermaid","aria-hidden":"true"},"#"),e(" Mermaid")],-1),Cs={href:"https://theme-hope.vuejs.press/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},Ms=s("h4",{id:"tex-语法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tex-语法","aria-hidden":"true"},"#"),e(" Tex 语法")],-1),Ps=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("msup",null,[s("mi",{mathvariant:"normal"},"∂"),s("mi",null,"r")]),s("mrow",null,[s("mi",{mathvariant:"normal"},"∂"),s("msup",null,[s("mi",null,"ω"),s("mi",null,"r")])])]),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"ω")]),s("mi",null,"ω")]),s("mo",{fence:"true"},")")]),s("mo",null,"="),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"ω")]),s("mi",null,"ω")]),s("mo",{fence:"true"},")")]),s("mrow",null,[s("mo",{fence:"true"},"{"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"r")]),s("mo",null,"+"),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"r")]),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mo",null,"−"),s("mn",null,"1"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"i")]),s("mi",null,"r"),s("mo",null,"⋯"),s("mo",{stretchy:"false"},"("),s("mi",null,"r"),s("mo",null,"−"),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mrow",null,[s("mi",null,"r"),s("mo",null,"−"),s("mi",null,"i")])])]),s("msup",null,[s("mi",null,"ω"),s("mi",null,"i")])]),s("mo",{fence:"true"},"}")])]),s("annotation",{encoding:"application/x-tex"}," \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4em","vertical-align":"-0.95em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3714em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.5904em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"ω")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.0277em","vertical-align":"-1.2777em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"ω")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"{")]),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[e("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.6514em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5017em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7507em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"−"),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},"⋯"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[e("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"}")])])])])])])],-1),Is={href:"https://theme-hope.vuejs.press/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},Js=s("h4",{id:"导入文件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#导入文件","aria-hidden":"true"},"#"),e(" 导入文件")],-1),Fs={href:"https://theme-hope.vuejs.press/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},Gs=s("h4",{id:"代码演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#代码演示","aria-hidden":"true"},"#"),e(" 代码演示")],-1),Ds=s("div",{class:"language-html line-numbers-mode","data-ext":"html"},[s("pre",{class:"language-html"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("h1")]),s("span",{class:"token punctuation"},">")]),e("VuePress Theme Hope"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("h1")]),s("span",{class:"token punctuation"},">")]),e(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("p")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("span")]),e(),s("span",{class:"token attr-name"},"id"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),e("very"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),e("非常"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("span")]),s("span",{class:"token punctuation"},">")]),e("强大!"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("p")]),s("span",{class:"token punctuation"},">")]),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Xs=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{class:"language-javascript"},[s("code",null,[e("document"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"querySelector"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"#very"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"addEventListener"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"click"'),s("span",{class:"token punctuation"},","),e(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),e(),s("span",{class:"token operator"},"=>"),e(),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token function"},"alert"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"非常强大"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Zs=s("div",{class:"language-css line-numbers-mode","data-ext":"css"},[s("pre",{class:"language-css"},[s("code",null,[s("span",{class:"token selector"},"span"),e(),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token property"},"color"),s("span",{class:"token punctuation"},":"),e(" red"),s("span",{class:"token punctuation"},";"),e(`
`),s("span",{class:"token punctuation"},"}"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Ks={href:"https://theme-hope.vuejs.press/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},Ls=s("h4",{id:"样式化",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#样式化","aria-hidden":"true"},"#"),e(" 样式化")],-1),Ws={href:"https://theme-hope.vuejs.press/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},Ys=s("h4",{id:"交互演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#交互演示","aria-hidden":"true"},"#"),e(" 交互演示")],-1),Ss={href:"https://theme-hope.vuejs.press/guide/markdown/playground.html",target:"_blank",rel:"noopener noreferrer"},Ts=s("h4",{id:"vue-交互演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vue-交互演示","aria-hidden":"true"},"#"),e(" Vue 交互演示")],-1),qs={href:"https://theme-hope.vuejs.press/guide/markdown/vue-playground.html",target:"_blank",rel:"noopener noreferrer"},Hs=s("h4",{id:"幻灯片",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#幻灯片","aria-hidden":"true"},"#"),e(" 幻灯片")],-1),Qs={href:"https://theme-hope.vuejs.press/guide/markdown/presentation.html",target:"_blank",rel:"noopener noreferrer"},Rs=c('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>这是脚注内容 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function Os(Ns,$s){const t=n("ExternalLinkIcon"),p=n("CodeTabs"),m=n("VPCard"),h=n("ChartJS"),d=n("ECharts"),u=n("FlowChart"),g=n("Mermaid"),i=n("RouterLink"),k=n("CodeDemo"),_=n("Badge"),v=n("Playground"),f=n("VuePlayground"),y=n("Presentation");return w(),A("div",null,[j,V,x(" more "),U,s("p",null,[e("如果你是一个新手，还不会编写 Markdown，请先阅读 "),s("a",C,[e("Markdown 介绍"),a(t)]),e(" 和 "),s("a",M,[e("Markdown 演示"),a(t)]),e("。")]),P,I,s("div",J,[F,s("p",null,[e("Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 "),s("a",G,[e("Frontmatter 介绍"),a(t)]),e("。")])]),D,s("p",null,[e("VuePress 会使用 "),s("a",X,[e("markdown-it"),a(t)]),e(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 "),s("a",Z,[e("语法扩展"),a(t)]),e(" 。")]),K,L,s("p",null,[e("关于这些扩展，请阅读 "),s("a",W,[e("VuePress 中的 Markdown 扩展"),a(t)]),e("。")]),Y,s("p",null,[e("通过 "),s("a",S,[T,a(t)]),e("，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。")]),q,s("ul",null,[s("li",null,[s("a",H,[e("查看详情"),a(t)])])]),Q,a(p,{id:"89",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2},{title0:l(({value:r,isActive:o})=>[e("pnpm")]),title1:l(({value:r,isActive:o})=>[e("yarn")]),title2:l(({value:r,isActive:o})=>[e("npm")]),tab0:l(({value:r,isActive:o})=>[R]),tab1:l(({value:r,isActive:o})=>[O]),tab2:l(({value:r,isActive:o})=>[N]),_:1}),s("ul",null,[s("li",null,[s("a",$,[e("查看详情"),a(t)])])]),ss,es,s("ul",null,[s("li",null,[s("a",as,[e("查看详情"),a(t)])])]),ts,ns,ls,s("ul",null,[s("li",null,[s("a",rs,[e("查看详情"),a(t)])])]),os,is,s("ul",null,[s("li",null,[s("a",cs,[e("查看详情"),a(t)])])]),ps,s("ul",null,[s("li",null,[s("a",ms,[e("查看详情"),a(t)])])]),hs,ds,s("ul",null,[s("li",null,[s("a",us,[e("查看详情"),a(t)])])]),gs,s("ul",ks,[_s,s("li",null,[s("p",null,[s("a",vs,[e("查看详情"),a(t)])])])]),fs,ys,s("ul",null,[s("li",null,[s("a",bs,[e("查看详情"),a(t)])])]),ws,a(m,z(E({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mrhope.site/logo.svg",link:"https://mrhope.site",color:"rgba(253, 230, 138, 0.15)"})),null,16),s("ul",null,[s("li",null,[s("a",As,[e("查看详情"),a(t)])])]),xs,a(h,{id:"chart-226",config:"eJxtULsOgjAU3fmKppMmaETDoKufYRgKNIRYKYGaSAyLg5sjk6O7cfWHMP6F95byMGFp2vO6t+dsEUJVkXK6ITQPmFI8ozaCIVMMQBSYV85VDshOI8QwmhXM5wIT6urxubzr6lXfnt/7VScZjclr3TqB0BNAM2dhE1rAbUHK3tHxLeuM053bHXfP3Zafg6ITeIPdfBbso0wek3ArhczwJ1nkT5YuWNdrmzir5ZQaeZPgwamnUZmqWCZYjKkKWhS8fwOCawzaausWccJZ07ZhUpnHmIasL5WSh/+peJZWaf0ALadm1Q==",title:"%E4%B8%80%E4%B8%AA%E6%95%A3%E7%82%B9%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),s("ul",null,[s("li",null,[s("a",zs,[e("查看详情"),a(t)])])]),Es,a(d,{id:"echarts-239",config:"eJyr5lJQUKpwrMgsVrJSAHGA3JLKglQgTyk5sSQ1Pb+oUkkHIp6SWJIIFI9W8s3PU9JRUAopTQVR4akpYF5GKYhyK8oEUcGJJWCqNE8pFqi7FmSEUiV2e8oSc4AmwVUVpxZlpoKURYOVQRQjWW9oaqCjYGQMIoxMgIShhY6CobEpkDAxB3LNDGIh7kWyISczD2wB0AogGctVywUA9j06jQ==",title:"%E4%B8%80%E4%B8%AA%E6%8A%98%E7%BA%BF%E5%9B%BE%E6%A1%88%E4%BE%8B"}),s("ul",null,[s("li",null,[s("a",Bs,[e("查看详情"),a(t)])])]),js,a(u,{id:"flowchart-252",code:"eJxLzs9LsbUDkZklmfl5VgrPZqx/OmHZs87lLxb2PJvc+2TvHHuugqL85NTiYlu7/ILUokSoOrAcV6qtXWpeipXC892Tn82dz8UFMkmjMrVYU9cOqkvXLhUimpcPFEzlAgD7FTFE",preset:"vue"}),s("ul",null,[s("li",null,[s("a",Vs,[e("查看详情"),a(t)])])]),Us,a(g,{id:"mermaid-263",code:"eJzT1dXlKsksyUm1UnDLyS9PzkgsKuECCabBeAohTlwKQJBsqKtrl2gEZheXJqUXJRZkKOTnpYIFEpEkU/NSUBWVlOeDBZJAipJwKcooSoWYBbYoGVUZ0B4FoCjcKLBqVJHyfDAfqBEAuj83LQ=="}),s("ul",null,[s("li",null,[s("a",Cs,[e("查看详情"),a(t)])])]),Ms,Ps,s("ul",null,[s("li",null,[s("a",Is,[e("查看详情"),a(t)])])]),Js,s("ul",null,[s("li",null,[s("p",null,[a(i,{to:"/demo/markdown.html"},{default:l(()=>[e("Markdown 展示")]),_:1})])]),s("li",null,[s("p",null,[a(i,{to:"/demo/page.html"},{default:l(()=>[e("页面展示")]),_:1})])]),s("li",null,[s("p",null,[a(i,{to:"/demo/disable.html"},{default:l(()=>[e("禁用展示")]),_:1})])]),s("li",null,[s("p",null,[a(i,{to:"/demo/encrypt.html"},{default:l(()=>[e("加密展示")]),_:1})])])]),s("ul",null,[s("li",null,[s("a",Fs,[e("查看详情"),a(t)])])]),Gs,a(k,{id:"code-demo-319",type:"normal",title:"%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%20Demo",code:"eJwljrGKAjEQhl9lbq5REJdrvZju4IorDhSrNEsysKvZZE2ygoiPopXgK4j4Olv4Fk7cZor5v3++OWCVGoszFNWXXHX0HyhGWFbUEPz6lkTBe+VEK0VsSwe1mSvcUdgrlM/Tub/dRJED2T/u/eX6IYqWcZzgOvJR43XXkEvTbceVBVnSyYeRws/hxHhaGvOzY+Kvjokc5UzbWm8UTmA0hrmEg3IApaWQOBuUg4vr38od82Cfjln4/vHd0N76MINAJkOMHF8ck1dC"},{default:l(()=>[Ds,Xs,Zs]),_:1}),s("ul",null,[s("li",null,[s("a",Ks,[e("查看详情"),a(t)])])]),Ls,s("p",null,[e("向 Mr.Hope 捐赠一杯咖啡。 "),a(_,{type:"tip"},{default:l(()=>[e("Recommended")]),_:1})]),s("ul",null,[s("li",null,[s("a",Ws,[e("查看详情"),a(t)])])]),Ys,a(v,{key:"565c8bdc",title:"TS%20%E6%A1%88%E4%BE%8B",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),s("ul",null,[s("li",null,[s("a",Ss,[e("查看详情"),a(t)])])]),Ts,a(f,{title:"Vue%20%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA",key:"1d9baac6",settings:"%7B%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D"}),s("ul",null,[s("li",null,[s("a",qs,[e("查看详情"),a(t)])])]),Hs,a(y,{id:"presentation-377",code:"eJzjUlZWeLpz9/PG9c872xUMubie7Gh4smPVszmdz6a1P107/emkHoXol5P3PetbGquRUVJSUGylr59blJFfkKpXnFmSqqnwfFbLs3VbX0zYy8Wlq6vLhWqgEVBQ4eXCnc9nrwMaDmeChDHUGusBrU9ISMgq5krOzysuUUhUsFUwtAYJgZRjqAYaoqLC5aURU5KRWpIYb6ADZRhqAvXFFJfmxldn2hrUghQBAI9BXC0=",theme:"auto"}),s("ul",null,[s("li",null,[s("a",Qs,[e("查看详情"),a(t)])])]),Rs])}const ae=b(B,[["render",Os],["__file","markdown.html.vue"]]);export{ae as default};
