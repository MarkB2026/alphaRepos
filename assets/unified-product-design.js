/* Standardize product-page furniture; retains each page's own product content. */
(()=>{"use strict";
function ready(){
const body=document.body,main=document.querySelector("main");
if(!main || main.dataset.trStandardized)return;
main.dataset.trStandardized="true";body.classList.add("tr-product-standard");
const page=decodeURIComponent(location.pathname.split("/").pop()||"").replace(/\.html$/i,"");
const title=document.querySelector("main h1")?.textContent.trim()||document.title.split("|")[0].trim();
const categories={"advanced-chart-lab":"chart","backtest-mechanic":"backtest","momentum-bot":"momentum","beebot":"beebot","beebot-the-hive":"beebot","breakout-bot":"breakout","dividend-bot":"dividend","dividend-tracker":"dividend","control-panel":"control","hal-intelligence":"hal","hal-think-box":"hal","if-then-bot":"ifthen","mini-rsi":"minirsi","mini-scalper":"miniscalper","ultimate-scalper":"miniscalper","omni-bot":"omni","option-price-plotter":"options","options-plotter":"options","wheelbot":"wheel","wheelhouse":"wheel","trend-bot":"trend","reversal-bot":"reversal","zigzag-bot":"zigzag","zero-bot":"zero","rsi-divergence-bot":"rsi"};
const slug=categories[page]||"all",slideUrl="/product_slideshows.html?bot="+encodeURIComponent(slug);
// Normalize the old Traders Toybox style and keep its existing product descriptions.
if(!document.querySelector("header.top")){
document.querySelectorAll("body > header,body > div > header").forEach(el=>el.remove());
const header=document.createElement("header");header.className="top";header.innerHTML='<div class="wrap"><div><a class="brand" href="/index.html">trader <b>&lt;/&gt; repository</b></a><div class="tagline">// trading software for download</div></div><nav class="nav" aria-label="Main navigation"><a href="/index.html">Repository</a><a href="/basic.html">Checkout</a><a href="/packages.html">Packages</a><a href="'+slideUrl+'">Slideshows</a></nav></div>';body.insertBefore(header,body.firstChild);
}
main.classList.add("wrap");// Preserve each page’s original DOM hierarchy and existing footer placement.
if(!main.querySelector(".breadcrumb")){const crumb=document.createElement("div");crumb.className="breadcrumb";crumb.textContent="REPOSITORY / PRODUCTS / "+page.toUpperCase().replace(/-/g,"-");main.prepend(crumb);}
const mainTitle=main.querySelector("h1");if(mainTitle&&mainTitle.parentElement!==main){main.insertBefore(mainTitle,main.children[1]||null);}
if(mainTitle&&!main.querySelector(".status")){const status=document.createElement("div");status.className="status";status.textContent="PRODUCT INFORMATION · SEE CHECKOUT FOR RELEASE AVAILABILITY";mainTitle.after(status);}
for(const article of main.querySelectorAll("article")){article.classList.add("expanded-details");}
for(const panel of main.querySelectorAll(".panel")){if(!panel.classList.contains("tr-slideshow-link"))panel.classList.add("expanded-details");}
// Reuse actual per-product specifications; do not declare an unverified broker or platform supported.
if(!main.querySelector(".momentum-spec-compact")&&!main.querySelector(".tr-standard-specs")){
const details=[...main.querySelectorAll(".spec-item")].map(item=>({name:item.querySelector("span")?.textContent.trim()||"",value:item.querySelector("strong")?.textContent.trim()||""})).filter(x=>x.name&&x.value);
if(details.length){
const panel=document.createElement("section");panel.className="tr-standard-specs";panel.setAttribute("aria-label","At-a-glance product specifications");const heading=document.createElement("h2");heading.textContent="PRODUCT SNAPSHOT";panel.append(heading);
const rows=[["RELEASE & VERSION",details.filter(x=>/release|version|status/i.test(x.name))],["BROKER INTEGRATIONS",details.filter(x=>/broker|interactive|IBKR|metatrader|MT5/i.test(x.name))],["OTHER DETAILS",details.filter(x=>!/release|version|status|broker|interactive|IBKR|metatrader|MT5/i.test(x.name))]];
for(const [name,items] of rows){if(!items.length)continue;const row=document.createElement("div");row.className="tr-standard-row";const lab=document.createElement("span");lab.className="tr-standard-label";lab.textContent=name;row.append(lab);
for(const item of items){const chip=document.createElement("span");chip.className="tr-standard-chip";chip.textContent=item.name+": "+item.value;if(/not verified|not confirmed|planned|roadmap|pending|in development/i.test(item.value))chip.classList.add("muted");if(/supported|compatible|verified/i.test(item.value)&&!chip.classList.contains("muted"))chip.classList.add("supported");row.append(chip);}panel.append(row);}
const specs=main.querySelector("#product-specifications");if(specs)specs.append(panel);else (mainTitle||main).after(panel);
}
}
if(!main.querySelector(".momentum-benefits,.product-benefits,.tr-standard-benefits")){
const b=document.createElement("section");b.className="tr-standard-benefits";b.setAttribute("aria-label","Software ownership benefits");
b.innerHTML='<h2>YOUR SOFTWARE. YOUR COMPUTER.</h2><div class="tr-benefit-grid"><div class="tr-benefit"><div class="symbol">↓</div><strong>Download &amp; Run</strong><small>Software designed for your own computer.</small></div><div class="tr-benefit"><div class="symbol">☁̸</div><strong>No Cloud Required</strong><small>Local-first trading tools.</small></div><div class="tr-benefit"><div class="symbol">⚙</div><strong>Your Trading Setup</strong><small>Control your own configurations.</small></div><div class="tr-benefit"><div class="symbol">◇</div><strong>Yours to Keep</strong><small>Buy once. Own forever. No subscriptions.</small></div></div>';
const media=main.querySelector(".tr-slideshow-link");if(media)media.before(b);else main.append(b);
}
// Keep gallery media out of product pages; retain a direct category link.
const media=main.querySelector(".tr-slideshow-link");
if(media){let a=media.querySelector("a");if(a){a.href=slideUrl;}}
else{const sec=document.createElement("section");sec.className="tr-slideshow-link";sec.innerHTML='<h2>Photos, Videos &amp; Demonstrations</h2><p>All product screenshots and videos are in Slideshows.</p><a href="'+slideUrl+'">View in Slideshows →</a>';main.append(sec);}
if(!main.querySelector('.tr-standard-checkout')&&!main.querySelector('a[href="../basic.html"],a[href="/basic.html"]')){const c=document.createElement("section");c.className="panel tr-standard-checkout";c.innerHTML='<h2>Download &amp; checkout</h2><p>Check the catalog for release availability.</p><a class="btn" href="/basic.html">Go to checkout →</a>';main.append(c);}
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",ready);else ready();
})();