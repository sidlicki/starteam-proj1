(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();let s=null;function l(){const r=window.matchMedia("(max-width: 767px)");s!==null&&s.destroy(),s=new Swiper(".swiper",{direction:"horizontal",loop:!0,initialSlide:0,pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:18,autoplay:!0,autoplaySpeed:4e3,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!0,waitForAnimate:!1,variableWidth:!0,slidesPerView:"auto",speed:400,effect:r.matches?"cube":"slide",cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:10,shadowScale:.7},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1}}),s.init()}window.addEventListener("DOMContentLoaded",l);window.addEventListener("resize",l);new Swiper(".swiper-loved",{direction:"horizontal",loop:!1,initialSlide:0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:!0,autoplaySpeed:7500,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!0,waitForAnimate:!1,variableWidth:!0,slidesPerView:"auto",breakpoints:{768:{slidesPerView:2},1200:{slidesPerView:3}}});(function(r){typeof r.matches!="function"&&(r.matches=r.msMatchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||function(o){for(var n=this,i=(n.document||n.ownerDocument).querySelectorAll(o),e=0;i[e]&&i[e]!==n;)++e;return Boolean(i[e])}),typeof r.closest!="function"&&(r.closest=function(o){for(var n=this;n&&n.nodeType===1;){if(n.matches(o))return n;n=n.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var r=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");r.forEach(function(i){i.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("data-modal"),a=document.querySelector('.modal[data-modal="'+t+'"]');a.classList.add("active"),o.classList.add("active")})}),n.forEach(function(i){i.addEventListener("click",function(e){var t=this.closest(".modal");t.classList.remove("active"),o.classList.remove("active")})}),document.body.addEventListener("keyup",function(i){var e=i.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),o.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});(()=>{const r=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),i=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),r.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};o.addEventListener("click",i),n.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(r.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
