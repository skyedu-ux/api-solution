import { S as head, Q as store_get, R as unsubscribe_stores, v as pop, t as push } from './index-DYLr4qAj.js';
import { H as Header, C as Cursor, F as Footer } from './Header-DOwXR_c7.js';
import { w as writable } from './index3-CsTpgeW4.js';
import './utils-p5k09QVL.js';
import './path-BUKK5iOb.js';
import './store-CI2MmCxJ.js';
import './index-server-BX_gp4iS.js';
import './attributes-Bu127xad.js';
import './path.admin-BQDC-pBo.js';
import './stores-Dij9Zz7O.js';
import './client-TAfaRk9z.js';
import './exports-CTha0ECg.js';

function PreLoader($$payload) {
  $$payload.out += `<div class="preloader"><div class="animation-preloader"><div class="spinner"></div> <div class="txt-loading"><span data-text-preloader="S" class="letters-loading">S</span> <span data-text-preloader="K" class="letters-loading">K</span> <span data-text-preloader="Y" class="letters-loading">Y</span>   <span data-text-preloader="S" class="letters-loading">S</span> <span data-text-preloader="O" class="letters-loading">O</span> <span data-text-preloader="L" class="letters-loading">L</span> <span data-text-preloader="U" class="letters-loading">U</span> <span data-text-preloader="T" class="letters-loading">T</span> <span data-text-preloader="I" class="letters-loading">I</span> <span data-text-preloader="O" class="letters-loading">O</span> <span data-text-preloader="N" class="letters-loading">N</span></div> <p class="text-center">Loading</p></div> <div class="loader"><div class="row"><div class="col-3 loader-section section-left"><div class="bg"></div></div> <div class="col-3 loader-section section-left"><div class="bg"></div></div> <div class="col-3 loader-section section-right"><div class="bg"></div></div> <div class="col-3 loader-section section-right"><div class="bg"></div></div></div></div></div>`;
}
function AreaStart($$payload) {
  $$payload.out += `<div><div class="fix-area"><div class="offcanvas__info"><div class="offcanvas__wrapper"><div class="offcanvas__content"><div class="offcanvas__top d-flex justify-content-between align-items-center mb-5"><div class="offcanvas__logo"><a href="index.html"><img src="/img/logo/logo.svg" alt="logo-img"></a></div> <div class="offcanvas__close"><button><i class="fas fa-times"></i></button></div></div> <div class="mobile-menu fix mb-3"></div> <div class="offcanvas__contact"><h4>Contact Info</h4> <ul><li class="d-flex align-items-center"><div class="offcanvas__contact-icon"><i class="fal fa-map-marker-alt"></i></div> <div class="offcanvas__contact-text"><a target="_blank" href="#">Main Street, Melbourne, Australia</a></div></li> <li class="d-flex align-items-center"><div class="offcanvas__contact-icon mr-15"><i class="fal fa-envelope"></i></div> <div class="offcanvas__contact-text"><a href="mailto:info@example.com"><span class="mailto:info@azent.com">info@example.com</span></a></div></li> <li class="d-flex align-items-center"><div class="offcanvas__contact-icon mr-15"><i class="fal fa-clock"></i></div> <div class="offcanvas__contact-text"><a target="_blank" href="#">Mod-friday, 09am -05pm</a></div></li> <li class="d-flex align-items-center"><div class="offcanvas__contact-icon mr-15"><i class="far fa-phone"></i></div> <div class="offcanvas__contact-text"><a href="tel:+11002345909">+11002345909</a></div></li></ul> <div class="header-button mt-4"><a href="contact.html" class="theme-btn text-center"><span>Contact Us<i class="fas fa-chevron-right"></i></span></a></div> <div class="social-icon d-flex align-items-center"><a href="#"><i class="fab fa-facebook-f"></i></a> <a href="#"><i class="fab fa-twitter"></i></a> <a href="#"><i class="fab fa-youtube"></i></a> <a href="#"><i class="fab fa-linkedin-in"></i></a></div></div></div></div></div></div> <div class="offcanvas__overlay"></div></div>`;
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let isWindowLoaded = true;
  let isLoading = writable(false);
  let { children } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="stylesheet" href="/css/animate.css"> <link rel="stylesheet" href="/css/bootstrap.min.css"> <link rel="stylesheet" href="/css/bootstrap.min.css.map"> <link rel="stylesheet" href="/css/bootstrap.css.map"> <link rel="stylesheet" href="/css/font-awesome.css"> <link rel="stylesheet" href="/css/magnific-popup.css">  <link rel="stylesheet" href="/css/slick.css"> <link rel="stylesheet" href="/css/swiper-bundle.min.css"> <link rel="stylesheet" href="/css/nice-select.css"> <link rel="stylesheet" href="/css/meanmenu.css"> <script src="/js/jquery-3.7.1.min.js"><\/script> <script src="/js/viewport.jquery.js"><\/script> <script src="/js/bootstrap.bundle.min.js"><\/script> <script src="/js/bootstrap.bundle.min.js.map"><\/script> <script src="/js/gsap/gsap.js"><\/script> <script src="/js/gsap/gsap-scroll-trigger.js"><\/script> <script src="/js/gsap/gsap-split-text.js"><\/script> <script src="/js/jquery.nice-select.min.js"><\/script> <script src="/js/jquery.waypoints.js"><\/script> <script src="/js/jquery.counterup.min.js"><\/script> <script src="/js/slick.min.js"><\/script> <script src="/js/swiper-bundle.min.js"><\/script>  <script src="/js/slick-animation.min.js"><\/script> <script src="/js/jquery.meanmenu.min.js"><\/script> <script src="/js/jquery.magnific-popup.min.js"><\/script> <script src="/js/wow.min.js"><\/script> <script src="/js/circle-progress.js"><\/script> <script src="/js/main.js"><\/script>`;
  });
  if (store_get($$store_subs ??= {}, "$isLoading", isLoading) || isWindowLoaded) {
    $$payload.out += "<!--[-->";
    PreLoader($$payload);
  } else {
    $$payload.out += "<!--[!-->";
    Header($$payload);
    $$payload.out += `<!----> `;
    AreaStart($$payload);
    $$payload.out += `<!----> `;
    Cursor($$payload);
    $$payload.out += `<!----> `;
    children($$payload);
    $$payload.out += `<!----> `;
    Footer($$payload);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-t2Zf_MiT.js.map
