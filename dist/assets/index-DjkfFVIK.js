(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();lucide.createIcons();const i=document.querySelector("header");window.addEventListener("scroll",()=>{window.scrollY>100?i.classList.add("scrolled"):i.classList.remove("scrolled")});const f=document.querySelectorAll(".reveal"),l=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){const s=t.target.dataset.delay||0;setTimeout(()=>{t.target.classList.add("active")},s),l.unobserve(t.target)}})},{threshold:.15,rootMargin:"0px 0px -50px 0px"});f.forEach((e,t)=>{e.dataset.delay||(e.dataset.delay=t%3*150),l.observe(e)});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){const s=this.getAttribute("href");if(s==="#")return;t.preventDefault();const c=document.querySelector(s);if(c){const r=document.querySelector("header").offsetHeight,o=c.getBoundingClientRect().top+window.pageYOffset-(r-10);window.scrollTo({top:o,behavior:"smooth"}),history.pushState(null,null,s)}})});const a=document.querySelectorAll(".gallery-item");if(a.length>0){const e=document.createElement("div");e.id="lightbox",e.style.cssText=`
        position: fixed;
        z-index: 2000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(18, 33, 24, 0.98);
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    `;const t=document.createElement("img");t.style.cssText=`
        max-width: 90%;
        max-height: 80%;
        border-radius: 8px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        transform: scale(0.9);
        transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    `,e.appendChild(t),document.body.appendChild(e),a.forEach(s=>{s.addEventListener("click",()=>{const c=s.querySelector("img");t.src=c.src,e.style.display="flex",setTimeout(()=>{t.style.transform="scale(1)"},10)})}),e.addEventListener("click",()=>{t.style.transform="scale(0.9)",setTimeout(()=>{e.style.display="none"},300)})}const d=document.querySelectorAll(".lang-btn"),u=e=>{document.body.className=document.body.className.replace(/lang-\w+/,""),document.body.classList.add(`lang-${e}`),localStorage.setItem("preferredLang",e),d.forEach(t=>{t.dataset.lang===e?t.classList.add("active"):t.classList.remove("active")}),lucide.createIcons()},m=localStorage.getItem("preferredLang")||"de";u(m);d.forEach(e=>{e.addEventListener("click",()=>{u(e.dataset.lang)})});
