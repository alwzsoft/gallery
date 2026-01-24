(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();async function l(){try{const s=await fetch("data/pictures.json");if(!s.ok)throw new Error("Failed to load pictures data");return await s.json()}catch(s){return console.error("Error loading pictures:",s),[]}}function d(s){const e=[...s];for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}function a(s,e="desc"){return[...s].sort((t,i)=>{const o=t.date?t.date.replace(/\D/g,""):"0",n=i.date?i.date.replace(/\D/g,""):"0";return e==="desc"?n-o:o-n})}function c(s){return a(s,"desc")[0]}function u(s){const e=new Set;return s.forEach(t=>{t.tags&&t.tags.forEach(i=>e.add(i))}),Array.from(e).sort()}function m(){const s=document.getElementById("hamburger-btn"),e=document.getElementById("mobile-nav");s&&e&&(s.classList.toggle("is-active"),e.classList.toggle("is-active"),document.body.classList.toggle("nav-open"))}function p(){const s=document.getElementById("hamburger-btn"),e=document.getElementById("mobile-nav");s&&e&&(s.classList.remove("is-active"),e.classList.remove("is-active"),document.body.classList.remove("nav-open"))}function h(){const s=document.createElement("header");s.innerHTML=`
        <div class="logo" id="logo-link">MOA</div>
        <div class="menu-icon" id="hamburger-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav class="mobile-nav" id="mobile-nav">
            <a href="#today" onclick="closeMenuAndShowSection('today')">Today</a>
            <a href="#picture" onclick="closeMenuAndShowSection('picture')">#picture</a>
            <a href="#about" onclick="closeMenuAndShowSection('about')">About</a>
            <a href="https://buymeacoffee.com/alwzsoft" target="_blank" onclick="closeMenu()">Donate</a>
        </nav>
    `,s.querySelector("#logo-link").addEventListener("click",()=>{window.app&&window.app.showSection("home")});const t=s.querySelector("#hamburger-btn"),i=s.querySelector("#mobile-nav");return t.addEventListener("click",o=>{o.stopPropagation(),m()}),document.addEventListener("click",o=>{!t.contains(o.target)&&!i.contains(o.target)&&p()}),s}class f{constructor(e,t){this.container=e,this.currentSort="random",this.selectedTags=["All"],this.init()}async init(){const t=await(await fetch("data/pictures.json")).json();this.allPictures=t;const i=c(t);this.pictures=t.filter(o=>o!==i),this.filteredPictures=[...this.pictures],this.renderLayout(),this.setupEventListeners(),this.updateGallery()}renderLayout(){const e=u(this.pictures);this.container.innerHTML=`
            <div class="controls-wrapper">
                <div class="filter-row-1">
                    <div class="filter-all-left">
                        <span class="filter-tag">All</span>
                    </div>
                    <div class="sort-bar-right">
                        <button class="sort-btn" id="sort-random" title="랜덤"><i class="fas fa-random"></i></button>
                        <button class="sort-btn" id="sort-desc" title="최신순"><i class="fas fa-sort-down"></i></button>
                        <button class="sort-btn" id="sort-asc" title="과거순"><i class="fas fa-sort-up"></i></button>
                    </div>
                </div>
                <div class="filter-row-2">
                    <div class="tag-container">
                        ${e.map(t=>`<span class="filter-tag">${t}</span>`).join("")}
                    </div>
                </div>
            </div>
            <div class="features" id="gallery-grid"></div>
        `}setupEventListeners(){this.container.addEventListener("click",e=>{const t=e.target.closest(".filter-tag"),i=e.target.closest(".sort-btn");if(t)this.setTagFilter(t.textContent.trim());else if(i){const o=i.id.replace("sort-","");this.setSort(o)}})}setTagFilter(e){if(e==="All")this.selectedTags=["All"];else{this.selectedTags=this.selectedTags.filter(i=>i!=="All");const t=this.selectedTags.indexOf(e);t>-1?this.selectedTags.splice(t,1):this.selectedTags.push(e),this.selectedTags.length===0&&(this.selectedTags=["All"])}this.updateGallery()}setSort(e){this.currentSort=e,this.updateGallery()}updateGallery(){this.selectedTags.includes("All")?this.filteredPictures=[...this.pictures]:this.filteredPictures=this.pictures.filter(e=>e.tags&&this.selectedTags.some(t=>e.tags.includes(t))),this.currentSort==="random"?this.filteredPictures=d(this.filteredPictures):this.filteredPictures=a(this.filteredPictures,this.currentSort),this.updateUI()}updateUI(){this.container.querySelectorAll(".filter-tag").forEach(o=>{const n=this.selectedTags.includes(o.textContent.trim());o.classList.toggle("active",n)}),this.container.querySelectorAll(".sort-btn").forEach(o=>{o.classList.toggle("active",o.id===`sort-${this.currentSort}`)});const i=this.container.querySelector("#gallery-grid");i&&(i.innerHTML=this.renderGalleryItems(),this.setupScrollAnimation())}renderGalleryItems(){return this.filteredPictures.map(e=>`
            <div class="gallery-item-wrapper">
                <section class="main-image">
                    <img src="${e.img}" alt="${e.title||"무제"}" onclick="openModal('${e.img}')">
                </section>
                <section class="content">
                    <div class="stamp"><span class="char-mo">모</span><span class="char-a">아</span></div>
                    <h1 class="title">${e.title||"무제"}</h1>
                    <p class="description-short">${e.description||(e.tags?e.tags.join(", "):"기록")}</p>
                    <div class="description-long">${e.date||"Someday"} - "잊고 싶지 않은 순간의 기록입니다."</div>
                    <div class="post-separator">···</div>
                </section>
            </div>
        `).join("")}setupScrollAnimation(){this.observer&&this.observer.disconnect(),this.observer=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&i.target.classList.add("visible")})},{threshold:.1}),this.container.querySelectorAll(".gallery-item-wrapper").forEach(t=>this.observer.observe(t))}}window.openModal=function(s){const e=document.getElementById("imageModal"),t=document.getElementById("modalImage");e&&t&&(e.style.display="flex",t.src=s)};function g(s){const e=document.createElement("div");e.id="featured-post",e.className="featured-post";const t=c(s);return t?(e.innerHTML=`
        <div class="featured-image">
            <img src="${t.img}" alt="${t.title||"오늘의 시선"}" onclick="openModal('${t.img}')">
        </div>
        <div class="featured-title">${t.title||"오늘의 시선"}</div>
        <div class="featured-description">
            ${t.description||(t.tags?t.tags.join(", "):"한국의 아름다움")}
        </div>
        <div class="featured-date">${t.date||"2026년 기록"}</div>
    `,e):(e.innerHTML="<p>표시할 포스트가 없습니다.</p>",e)}function v(s){const e=document.createElement("section");e.id="today",e.className="content-section",e.innerHTML=`
        <div class="today-section">
            <h2 class="today-title">오늘의 시선</h2>
            <div id="featured-post" class="featured-post"></div>
        </div>
    `;const t=e.querySelector("#featured-post"),i=g(s);return t.parentNode.replaceChild(i,t),e}class y{constructor(){this.pictures=[],this.currentSection="home",this.init()}async init(){try{this.pictures=await l(),this.setupUI(),this.setupEventListeners(),this.setupScrollProgress(),this.showSection("today")}catch(e){console.error("앱 초기화 실패:",e),this.showError("데이터를 불러오는데 실패했습니다.")}}setupUI(){document.body.innerHTML=`
            <div class="phone-container">
                <div id="scroll-progress"></div>

                <div id="header-container"></div>

                <section id="home" class="content-section active">
                    <div class="intro-box">
                        <h2 style="font-weight: 300;">Gathering moments, making my own archive.</h2>
                        <p><i class="fas fa-quote-left"></i> 순간을 모아, 나만의 기록을 만듭니다. <i class="fas fa-quote-right"></i></p>
                    </div>
                </section>

                <section id="picture" class="content-section">
                    <div id="gallery-container"></div>
                </section>

                <div id="today-container"></div>

<section id="about" class="content-section" style="padding: 120px 20px; background-color: #fcfcfc;">
                    <div style="max-width: 700px; margin: 0 auto; text-align: center;">
                        
                        <div style="width: 1px; height: 60px; background-color: #333; margin: 0 auto 40px; opacity: 0.6;"></div>
                        
                        <div style="margin-bottom: 60px;">
                            <h2 style="font-family: 'serif'; font-weight: 300; font-size: 0.9rem; letter-spacing: 0.4rem; color: #999; margin-bottom: 15px; text-transform: uppercase;">
                                Moments of Archive
                            </h2>
                            <h1 style="font-family: 'serif'; font-size: 3.5rem; font-weight: 400; color: #1a1a1a; margin: 0; letter-spacing: 0.5rem;">
                                MOA
                            </h1>
                            <div style="display: inline-block; width: 26px; height: 26px; border: 1.5px solid #c0392b; color: #c0392b; font-size: 13px; line-height: 24px; margin-top: 20px; font-weight: bold; font-family: 'Noto Serif KR', serif;">
                                摹
                            </div>
                        </div>

                        <div style="line-height: 2; color: #444; word-break: keep-all; font-family: 'Pretendard', sans-serif;">
                            <div style="margin-bottom: 40px;">
                                <p style="font-size: 1.3rem; color: #222; font-weight: 600; margin-bottom: 8px;">
                                    "맑은 시선으로 세상을 담는 기록의 공간"
                                </p>
                                <p style="font-size: 1rem; color: #888; font-style: italic; font-family: 'serif';">
                                    "An archive capturing the world through a clear lens."
                                </p>
                            </div>

                            <div style="font-size: 0.95rem; color: #555;">
                                <p style="margin-bottom: 25px;">
                                    우리는 스쳐 지나가는 무수한 찰나(Moments) 속에서<br>
                                    변하지 않는 가치를 발견하고 정성껏 기록(Archive)합니다.<br>
                                    MOA는 당신의 일상에 잔잔한 영감이 머무는 공간을 지향합니다.
                                </p>
                                <p style="font-size: 0.9rem; color: #777; line-height: 1.8;">
                                    We discover and meticulously record timeless values<br>
                                    found within the countless fleeting moments of life.<br>
                                    MOA aims to be a space where gentle inspiration dwells in your everyday.
                                </p>
                            </div>
                        </div>

                        <div style="margin-top: 80px; padding-top: 40px; border-top: 1px solid #eee;">
                            <p style="font-size: 0.75rem; color: #aaa; margin-bottom: 15px; letter-spacing: 0.2rem; text-transform: uppercase;">
                                For Inquiries & Collaboration
                            </p>
                            <a href="mailto:alwzsoft@gmail.com" style="text-decoration: none; color: #1a1a1a; font-size: 1.1rem; font-weight: 400; border-bottom: 1px solid #1a1a1a; padding-bottom: 2px; transition: all 0.3s;">
                                alwzsoft@gmail.com
                            </a>
                        </div>
                    </div>
                </section>

                <footer>
                    <p>&copy; Copyright 2026 MOA. All rights reserved.</p>
                </footer>
            </div>

            <div id="imageModal" class="modal">
                <span class="close">&times;</span>
                <img class="modal-content" id="modalImage">
            </div>
        `;const e=document.getElementById("header-container"),t=h();e.appendChild(t),this.galleryContainer=document.getElementById("gallery-container");const i=document.getElementById("today-container"),o=v(this.pictures);i.appendChild(o),this.setupModal()}setupEventListeners(){window.addEventListener("hashchange",()=>{const e=window.location.hash.replace("#","");this.showSection(e||"home")}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.closeModal()})}setupScrollProgress(){window.onscroll=function(){let e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,i=e/t*100;const o=document.getElementById("scroll-progress");o&&(o.style.width=i+"%")}}setupModal(){const e=document.getElementById("imageModal"),t=e.querySelector(".close");t.onclick=()=>this.closeModal(),window.onclick=i=>{i.target===e&&this.closeModal()}}showSection(e){document.querySelectorAll(".content-section.active").forEach(o=>o.classList.remove("active"));const i=document.getElementById(e);i&&(i.classList.add("active"),this.currentSection=e),e==="picture"&&this.initializeGallery(),window.scrollTo(0,0)}initializeGallery(){!this.gallery&&this.galleryContainer&&(this.gallery=new f(this.galleryContainer,this.pictures))}closeModal(){const e=document.getElementById("imageModal");e&&(e.style.display="none")}showError(e){const t=document.createElement("div");t.style.cssText=`
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #ff6b6b;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 10000;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        `,t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.remove()},5e3)}}window.showSection=function(s){window.app&&window.app.showSection(s)};window.closeMenuAndShowSection=function(s){const e=document.getElementById("hamburger-btn"),t=document.getElementById("mobile-nav");e&&t&&(e.classList.remove("is-active"),t.classList.remove("is-active"),document.body.classList.remove("nav-open")),window.app&&window.app.showSection(s)};window.openModal=function(s){const e=document.getElementById("imageModal"),t=document.getElementById("modalImage");e&&t&&(e.style.display="flex",t.src=s)};document.addEventListener("contextmenu",s=>s.preventDefault());document.addEventListener("selectstart",s=>s.preventDefault());document.addEventListener("DOMContentLoaded",()=>{window.app=new y});
