(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();async function l(){try{const s=await fetch("data/pictures.json");if(!s.ok)throw new Error("Failed to load pictures data");return await s.json()}catch(s){return console.error("Error loading pictures:",s),[]}}function d(s){const e=[...s];for(let t=e.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}return e}function a(s,e="desc"){return[...s].sort((t,o)=>{const i=t.date?t.date.replace(/\D/g,""):"0",n=o.date?o.date.replace(/\D/g,""):"0";return e==="desc"?n-i:i-n})}function c(s){return a(s,"desc")[0]}function u(s){const e=new Set;return s.forEach(t=>{t.tags&&t.tags.forEach(o=>e.add(o))}),Array.from(e).sort()}function h(){const s=document.getElementById("hamburger-btn"),e=document.getElementById("mobile-nav");s&&e&&(s.classList.toggle("is-active"),e.classList.toggle("is-active"),document.body.classList.toggle("nav-open"))}function m(){const s=document.getElementById("hamburger-btn"),e=document.getElementById("mobile-nav");s&&e&&(s.classList.remove("is-active"),e.classList.remove("is-active"),document.body.classList.remove("nav-open"))}function p(){const s=document.createElement("header");s.innerHTML=`
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
    `,s.querySelector("#logo-link").addEventListener("click",()=>{window.app&&window.app.showSection("home")});const t=s.querySelector("#hamburger-btn"),o=s.querySelector("#mobile-nav");return t.addEventListener("click",i=>{i.stopPropagation(),h()}),document.addEventListener("click",i=>{!t.contains(i.target)&&!o.contains(i.target)&&m()}),s}class g{constructor(e,t){this.container=e,this.currentSort="random",this.selectedTags=["All"],this.init()}async init(){const t=await(await fetch("data/pictures.json")).json();this.allPictures=t;const o=c(t);this.pictures=t.filter(i=>i!==o),this.filteredPictures=[...this.pictures],this.renderLayout(),this.setupEventListeners(),this.updateGallery()}renderLayout(){const e=u(this.pictures);this.container.innerHTML=`
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
        `}setupEventListeners(){this.container.addEventListener("click",e=>{const t=e.target.closest(".filter-tag"),o=e.target.closest(".sort-btn");if(t)this.setTagFilter(t.textContent.trim());else if(o){const i=o.id.replace("sort-","");this.setSort(i)}})}setTagFilter(e){if(e==="All")this.selectedTags=["All"];else{this.selectedTags=this.selectedTags.filter(o=>o!=="All");const t=this.selectedTags.indexOf(e);t>-1?this.selectedTags.splice(t,1):this.selectedTags.push(e),this.selectedTags.length===0&&(this.selectedTags=["All"])}this.updateGallery()}setSort(e){this.currentSort=e,this.updateGallery()}updateGallery(){this.selectedTags.includes("All")?this.filteredPictures=[...this.pictures]:this.filteredPictures=this.pictures.filter(e=>e.tags&&this.selectedTags.some(t=>e.tags.includes(t))),this.currentSort==="random"?this.filteredPictures=d(this.filteredPictures):this.filteredPictures=a(this.filteredPictures,this.currentSort),this.updateUI()}updateUI(){this.container.querySelectorAll(".filter-tag").forEach(i=>{const n=this.selectedTags.includes(i.textContent.trim());i.classList.toggle("active",n)}),this.container.querySelectorAll(".sort-btn").forEach(i=>{i.classList.toggle("active",i.id===`sort-${this.currentSort}`)});const o=this.container.querySelector("#gallery-grid");o&&(o.innerHTML=this.renderGalleryItems(),this.setupScrollAnimation())}renderGalleryItems(){return this.filteredPictures.map(e=>`
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
        `).join("")}setupScrollAnimation(){this.observer&&this.observer.disconnect(),this.observer=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.1}),this.container.querySelectorAll(".gallery-item-wrapper").forEach(t=>this.observer.observe(t))}}window.openModal=function(s){const e=document.getElementById("imageModal"),t=document.getElementById("modalImage");e&&t&&(e.style.display="flex",t.src=s)};function f(s){const e=document.createElement("div");e.id="featured-post",e.className="featured-post";const t=c(s);return t?(e.innerHTML=`
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
    `;const t=e.querySelector("#featured-post"),o=f(s);return t.parentNode.replaceChild(o,t),e}class y{constructor(){this.pictures=[],this.currentSection="home",this.init()}async init(){try{this.pictures=await l(),this.setupUI(),this.setupEventListeners(),this.setupScrollProgress(),this.showSection("today")}catch(e){console.error("앱 초기화 실패:",e),this.showError("데이터를 불러오는데 실패했습니다.")}}setupUI(){document.body.innerHTML=`
            <div class="phone-container">
                <!-- 상단 진행 바 -->
                <div id="scroll-progress"></div>

                <!-- 헤더 -->
                <div id="header-container"></div>

                <!-- 메인 콘텐츠 -->
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

                <section id="about" class="content-section">
                    <div style="max-width: 600px; margin: 0 auto; text-align: center; line-height: 1.8;">
                        <h2>About Me</h2>
                        <p>맑은 시선으로 세상을 담는 아카이브, MOA입니다.</p>
                    </div>
                </section>

                <footer>
                    <p>&copy; Copyright © 2026 MOA. All rights reserved.</p>
                </footer>
            </div>

            <div id="imageModal" class="modal">
                <span class="close">&times;</span>
                <img class="modal-content" id="modalImage">
            </div>
        `;const e=document.getElementById("header-container"),t=p();e.appendChild(t),this.galleryContainer=document.getElementById("gallery-container");const o=document.getElementById("today-container"),i=v(this.pictures);o.appendChild(i),this.setupModal()}setupEventListeners(){window.addEventListener("hashchange",()=>{const e=window.location.hash.replace("#","");this.showSection(e||"home")}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.closeModal()})}setupScrollProgress(){window.onscroll=function(){let e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,o=e/t*100;const i=document.getElementById("scroll-progress");i&&(i.style.width=o+"%")}}setupModal(){const e=document.getElementById("imageModal"),t=e.querySelector(".close");t.onclick=()=>this.closeModal(),window.onclick=o=>{o.target===e&&this.closeModal()}}showSection(e){document.querySelectorAll(".content-section.active").forEach(i=>i.classList.remove("active"));const o=document.getElementById(e);o&&(o.classList.add("active"),this.currentSection=e),e==="picture"&&this.initializeGallery(),window.scrollTo(0,0)}initializeGallery(){!this.gallery&&this.galleryContainer&&(this.gallery=new g(this.galleryContainer,this.pictures))}closeModal(){const e=document.getElementById("imageModal");e&&(e.style.display="none")}showError(e){const t=document.createElement("div");t.style.cssText=`
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
