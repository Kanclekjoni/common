import{_ as n,r as o,o as s,c as t,a as e,b as a,d as r,w as c,e as d}from"./app-6f40ace5.js";const i={},p=e("h1",{id:"upgrade-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#upgrade-guide","aria-hidden":"true"},"#"),a(" Upgrade Guide")],-1),h=e("h2",{id:"from-laravel-lang-to-laravel-lang-common",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#from-laravel-lang-to-laravel-lang-common","aria-hidden":"true"},"#"),a(" From "),e("code",null,"laravel-lang/*"),a(" to "),e("code",null,"laravel-lang/common")],-1),g={class:"custom-container tip"},u=d(`<p>First remove the old dependencies:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> remove laravel-lang/publisher laravel-lang/lang laravel-lang/attributes laravel-lang/http-statuses
</code></pre></div><p>After that, install the <code>laravel-lang/common</code> version of the desired version.</p><p>If you are using the list of localizations from the <code>Laravel Lang: Publisher</code> package in production, then use this command:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel-lang/common
</code></pre></div><p>Otherwise, we recommend installing dependencies in the <code>dev</code> block:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel-lang/common <span class="token parameter variable">--dev</span>
</code></pre></div><p>Enjoy! 🙂</p><h2 id="from-caouecs-laravel-lang" tabindex="-1"><a class="header-anchor" href="#from-caouecs-laravel-lang" aria-hidden="true">#</a> From <code>caouecs/laravel-lang</code></h2><p>If you are using the old version of the <code>laravel-lang/lang</code> package when it was called <code>caouecs/laravel-lang</code>, then you need to follow the steps below to upgrade.</p><p>You also need to remove all package managers responsible for installing localizations in the project. You can do all this with one command:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> remove caouecs/laravel-lang laravel-lang/publisher overtrue/laravel-lang arcanedev/laravel-lang andrey-helldar/laravel-lang-publisher
</code></pre></div><p>Next, you need to delete the <code>config/lang-publisher.php</code> file if it exists:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-f</span> config/lang-publisher.php
</code></pre></div><p>After that, you can install the latest version of <code>Laravel Lang</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel-lang/common <span class="token parameter variable">--dev</span>
</code></pre></div>`,16);function v(m,f){const l=o("RouterLink");return s(),t("div",null,[p,h,e("div",g,[e("p",null,[a("Check the version of the framework and PHP against the "),r(l,{to:"/installation/compatibility/common.html"},{default:c(()=>[a("compatibility")]),_:1}),a(" table.")])]),u])}const _=n(i,[["render",v],["__file","index.html.vue"]]);export{_ as default};