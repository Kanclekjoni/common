import{_ as c,r as o,o as i,c as d,a as e,b as a,d as n,w as t,e as l}from"./app-6f40ace5.js";const p={},u=l(`<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel-lang/common <span class="token parameter variable">--dev</span>

php artisan lang:add fr

php artisan lang:update
</code></pre></div><h2 id="recommended" tabindex="-1"><a class="header-anchor" href="#recommended" aria-hidden="true">#</a> Recommended</h2>`,4),h=e("code",null,"Laravel Lang: Common",-1),m={href:"https://getcomposer.org",target:"_blank",rel:"noopener noreferrer"},v=l(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require <span class="token parameter variable">--dev</span> laravel-lang/common
</code></pre></div><div class="custom-container tip"><p>If you are using the list of localizations from the <code>Laravel Lang: Publisher</code> package in production, then use this command instead: <code>composer require laravel-lang/common</code>.</p></div><p>Now you can manage localizations:</p>`,3),g=e("h2",{id:"alternative",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#alternative","aria-hidden":"true"},"#"),a(" Alternative")],-1),_=l(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require <span class="token parameter variable">--dev</span> laravel-lang/publisher

<span class="token function">composer</span> require <span class="token parameter variable">--dev</span> laravel-lang/lang
<span class="token function">composer</span> require <span class="token parameter variable">--dev</span> laravel-lang/attributes
<span class="token function">composer</span> require <span class="token parameter variable">--dev</span> laravel-lang/http-statuses
</code></pre></div>`,1);function f(k,b){const r=o("ExternalLinkIcon"),s=o("RouterLink");return i(),d("div",null,[u,e("p",null,[a("To get the latest version of "),h,a(", simply require the project using "),e("a",m,[a("Composer"),n(r)]),a(":")]),v,e("ul",null,[e("li",null,[n(s,{to:"/usage/add-locales.html"},{default:t(()=>[a("Add locale")]),_:1})]),e("li",null,[n(s,{to:"/usage/update-locales.html"},{default:t(()=>[a("Update locale")]),_:1})]),e("li",null,[n(s,{to:"/usage/reset-locales.html"},{default:t(()=>[a("Reset locale")]),_:1})]),e("li",null,[n(s,{to:"/usage/remove-locales.html"},{default:t(()=>[a("Remove locale")]),_:1})])]),g,e("p",null,[a("You can also install certain packages (check the "),n(s,{to:"/installation/compatibility/"},{default:t(()=>[a("compatibility tables")]),_:1}),a("):")]),_])}const q=c(p,[["render",f],["__file","index.html.vue"]]);export{q as default};