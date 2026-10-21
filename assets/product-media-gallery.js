/* Product Media Gallery — verified repository media, no external dependencies. */
(()=>{
"use strict";
const LIBRARY={"advanced-chart-lab":["images/advanced-chart-lab-1.png","images/advanced-chart-lab-2.jpeg","images/advanced-chart-lab-3.jpeg","images/advanced-chart-lab-4.jpeg","images/advanced-chart-lab-5.jpeg","images/advanced-chart-lab-7.png","images/advanced-chart-lab-8.png"],"backtest-mechanic":["images/mechanic_slide_01.jpg","images/mechanic_slide_02.jpg","images/mechanic_slide_03.jpg","images/mechanic_slide_04.jpg","images/mechanic_slide_05.jpg","images/mechanic_slide_06.jpg","images/mechanic_slide_07.jpg","images/mechanic_slide_08.jpg","images/mechanic_slide_09.jpg","images/mechanic_slide_10.jpg","images/Backtest_Mechanic_Natural_Language_Poster.jpg","images/Backtest_Mechanic_Snapshot_Homepage_Poster.jpg","videos/Backtest_Mechanic_Homepage_Animation.mp4","videos/Backtest_Mechanic_Index_Animation_Final.mp4","videos/Backtest_Mechanic_Snapshot_Homepage_Animation.mp4"],"momentum-bot":["images/momentum bot.png","images/momentum bot2.png","images/momentum scanner.png","videos/Momentum_Bot_Animated_Demo.mp4"],"beebot":["videos/BeeBot_Animated_Demo.mp4"],"beebot-the-hive":["videos/BeeBot_Animated_Demo.mp4"],"breakout-bot":["videos/Breakout_Bot_Animated_Demo.mp4"],"dividend-bot":["videos/Dividend_Bot_Animated_Demo.mp4"],"dividend-tracker":["images/dividend-poster.svg"],"mini-rsi":["videos/RSI_Bot_Animated_Demo.mp4"],"mini-scalper":["videos/Manual_Scalper_Animated_Demo.mp4"],"ultimate-scalper":["videos/Ultimate_Scalper_Simulated_Demo.mp4","videos/Manual_Scalper_Animated_Demo.mp4"],"if-then-bot":["videos/IF_Then_Bot_Animated_Demo.mp4"],"option-price-plotter":["images/Options plotter.png","images/Options plotter2.png","images/Options plotter3.png","images/Options plotter4.png","images/Options plotter5.png","images/Options plotter6.png","images/options-plotter-demo-poster.jpg","videos/options-plotter-simulation.mp4"],"options-plotter":["images/Options plotter.png","images/Options plotter2.png","images/Options plotter3.png","images/Options plotter4.png","images/Options plotter5.png","images/Options plotter6.png","images/options-plotter-demo-poster.jpg","videos/options-plotter-simulation.mp4"],"wheelbot":["videos/WheelBot_Animated_Demo.mp4"],"wheelhouse":["images/wheel-poster.svg"],"control-panel":["images/controlpanel.png","images/control-panel-1.webp"],"hal-intelligence":["images/hal_think1.png","images/hal_think2.png"],"hal-think-box":["images/hal_think1.png","images/hal_think2.png"],"trend-bot":["videos/Trend_Bot_Animated_Demo.mp4"],"reversal-bot":["videos/Reversal_Bot_Animated_Demo.mp4"],"zigzag-bot":["videos/ZigZag_Bot_Animated_Demo.mp4"],"zero-bot":["videos/ZeroBot_Animated_Demo.mp4"],"omni-bot":["videos/OmniBot_Animated_Demo.mp4"],"rsi-divergence-bot":["videos/RSI_Bot_Animated_Demo.mp4"]};
const FOOTAGE_CATEGORIES={"advanced-chart-lab":"chart","backtest-mechanic":"backtest","momentum-bot":"momentum","beebot":"beebot","beebot-the-hive":"beebot","dividend-tracker":"dividend","mini-rsi":"minirsi","mini-scalper":"miniscalper","wheelhouse":"wheel","hal-intelligence":"backtest","hal-think-box":"backtest"};
const key=decodeURIComponent(location.pathname.split("/").pop()||"").toLowerCase().replace(/\.html$/,"");
if(!Object.prototype.hasOwnProperty.call(LIBRARY,key))return;
if(document.querySelector("[data-trmg-active]"))return;
const files=LIBRARY[key];
if(!files.length && !FOOTAGE_CATEGORIES[key])return;
const images=files.filter(f=>f.startsWith("images/"));
const videos=files.filter(f=>f.startsWith("videos/"));
function url(f){return "/"+f.split("/").map(encodeURIComponent).join("/");}
function label(f){return f.split("/").pop().replace(/\.[^.]+$/,"").replace(/[_-]+/g," ").replace(/\s+/g," ").trim();}
const host=document.querySelector("main")||document.querySelector("article")||document.body;
const section=document.createElement("section");section.className="trmg";section.setAttribute("aria-label","Product media");section.setAttribute("data-trmg-active","");
const h=document.createElement("h2");h.textContent="Product media gallery";section.append(h);
const intro=document.createElement("p");intro.className="trmg-intro";intro.textContent="Screenshots and videos from this product.";section.append(intro);
const makeHeading=(s,n)=>{const h=document.createElement("h3");h.textContent=s+" ("+n+")";section.append(h);};
let box=null;let full=null;let count=null;let index=0;let previouslyFocused=null;
function close(){if(!box)return;box.hidden=true;document.body.classList.remove("trmg-locked");previouslyFocused?.focus(); }
function show(i){index=(i+images.length)%images.length;full.src=url(images[index]);full.alt=label(images[index]);count.textContent=(index+1)+" / "+images.length;box.hidden=false;document.body.classList.add("trmg-locked");box.querySelector(".trmg-close").focus();}
if(images.length){makeHeading("Images",images.length);const grid=document.createElement("div");grid.className="trmg-grid trmg-images";
images.forEach((f,i)=>{const b=document.createElement("button");b.type="button";b.className="trmg-image";b.setAttribute("aria-label","Enlarge "+label(f));const im=document.createElement("img");im.src=url(f);im.alt=label(f);im.loading="lazy";const cap=document.createElement("span");cap.textContent=label(f);b.append(im,cap);b.addEventListener("click",()=>{previouslyFocused=document.activeElement;show(i)});grid.append(b)});section.append(grid);
box=document.createElement("div");box.className="trmg-lightbox";box.hidden=true;box.setAttribute("role","dialog");box.setAttribute("aria-modal","true");box.setAttribute("aria-label","Image viewer");
const closeButton=document.createElement("button");closeButton.className="trmg-close";closeButton.type="button";closeButton.textContent="Close ×";closeButton.addEventListener("click",close);
const prev=document.createElement("button");prev.type="button";prev.textContent="‹";prev.className="trmg-prev";prev.setAttribute("aria-label","Previous image");prev.addEventListener("click",()=>show(index-1));
const next=document.createElement("button");next.type="button";next.textContent="›";next.className="trmg-next";next.setAttribute("aria-label","Next image");next.addEventListener("click",()=>show(index+1));
full=document.createElement("img");full.className="trmg-full";full.alt="";count=document.createElement("span");count.className="trmg-count";
box.append(closeButton,prev,full,next,count);box.addEventListener("click",e=>{if(e.target===box)close()});document.addEventListener("keydown",e=>{if(box.hidden)return;if(e.key==="Escape")close();else if(e.key==="ArrowLeft")show(index-1);else if(e.key==="ArrowRight")show(index+1);else if(e.key==="Tab"){const buttons=[closeButton,prev,next];const i=buttons.indexOf(document.activeElement);if(e.shiftKey&&i===0){e.preventDefault();next.focus()}else if(!e.shiftKey&&i===2){e.preventDefault();closeButton.focus()}}});document.body.append(box);
}
if(videos.length){makeHeading("Videos",videos.length);const grid=document.createElement("div");grid.className="trmg-grid trmg-videos";videos.forEach(f=>{const card=document.createElement("figure");card.className="trmg-video";const vid=document.createElement("video");vid.controls=true;vid.preload="metadata";vid.playsInline=true;vid.setAttribute("aria-label",label(f));const src=document.createElement("source");src.src=url(f);src.type="video/mp4";vid.append(src);const caption=document.createElement("figcaption");caption.textContent=label(f);card.append(vid,caption);grid.append(card)});section.append(grid)}
const old=host.querySelectorAll(".tr-gallery");if(images.length)old.forEach(el=>{el.hidden=true;el.setAttribute("data-trmg-replaced","")});
if(FOOTAGE_CATEGORIES[key]){
 const footage=document.createElement("p");footage.className="trmg-real-link";
 const a=document.createElement("a");a.href="/product_slideshows.html?bot="+encodeURIComponent(FOOTAGE_CATEGORIES[key]);a.textContent="View recorded software footage in Slideshows →";
 footage.append(a);section.append(footage);
 // The old product templates sometimes embed real recordings separately from this shared gallery.
 // Hide only those recordings already shown in the dedicated Slideshows page.
 const elsewhere=new Set(["Advanced chart lab dynamic chart only.mp4","Advanced chart lab dynamic view.mp4","advanced_chart_raise_stop_lock_profit.mp4","Backtest_Mechanic_Snapshot_Feature_Demo.mp4","Backtest_Mechanic_Natural_Language_Demo.mp4","demo_change_stop_order_momentum_bot.mp4","BotZips_Open_Momentum_Scanner_Presentable.mp4","BeeBot_Web_Demo.mp4","dividend-demo.mp4","wheel-demo.mp4","Mini_rsi_optimized_under25MB.mp4","Mini_scalper_optimized_under25MB.mp4","ollama natural language demo.mp4"]);
 document.querySelectorAll("main video source").forEach(source=>{
  const filename=decodeURIComponent((source.getAttribute("src")||"").split("/").pop()||"");
  if(!elsewhere.has(filename))return;
  const item=source.closest(".media")||source.closest("figure")||source.closest("article");
  if(item&&item!==host){item.hidden=true;item.setAttribute("data-moved-to-slideshows","");}
 });
}
host.append(section);
})();