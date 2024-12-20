import { T as ensure_array_like, P as escape_html, v as pop, Q as store_get, V as stringify, R as unsubscribe_stores, t as push } from './index-DYLr4qAj.js';
import { p as path } from './path-ZqLufx6Z.js';
import { d as dataStore } from './store-CI2MmCxJ.js';
import { o as onDestroy } from './index-server-BX_gp4iS.js';
import { a as attr } from './attributes-Bu127xad.js';
import { p as pathAdmin } from './path.admin-BQDC-pBo.js';
import { p as page } from './stores-Dij9Zz7O.js';
import './client-TAfaRk9z.js';

function Cursor($$payload) {
  $$payload.out += `<div class="mouse-cursor cursor-outer"></div> <div class="mouse-cursor cursor-inner"></div> <div class="scroll-up"><svg class="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102"><path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path></svg></div>`;
}
const HEADER_ADMIN_DATA = {
  logo: "https://placehold.co/120x60",
  menuLinks: [
    {
      label: "Info",
      link: pathAdmin.home.base()
    },
    {
      label: "Home",
      link: pathAdmin.home.page()
    },
    {
      label: "Blog",
      link: pathAdmin.blog.base()
    },
    {
      label: "Job",
      link: pathAdmin.job.base()
    }
    // {
    // 	label: "About",
    // 	link: pathAdmin.about.base(),
    // 	children: [
    // 		{
    // 			label: "Team",
    // 			link : pathAdmin.about.base()
    // 		}
    // 	]
    // },
  ]
};
function Footer($$payload, $$props) {
  push();
  let footerData = void 0;
  let infoData = void 0;
  const unsubscribe = dataStore.subscribe((data) => {
    if (data) {
      footerData = data.footerData;
      infoData = data.infoData;
    }
  });
  onDestroy(() => {
    unsubscribe();
  });
  if (footerData && infoData) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(infoData.socialLinks);
    const each_array_1 = ensure_array_like(footerData?.exploreLinks);
    $$payload.out += `<footer class="footer-section footer-bg"><div class="container"><div class="footer-widgets-wrapper"><div class="row"><div class="col-xl-3 col-sm-6 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".2s"><div class="single-footer-widget"><div class="widget-head"><a href="index.html"><img${attr("src", infoData.logo)} alt="logo-img"></a></div> <div class="footer-content"><p>We believe it has the power to do <br> amazing things.</p> <a${attr("href", `mailto:${infoData.email}`)} class="link">${escape_html(infoData.email)}</a> <div class="social-icon d-flex align-items-center"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let socialLink = each_array[$$index];
      $$payload.out += `<a${attr("href", socialLink.link)}${attr("aria-label", socialLink.label)}><i${attr("class", socialLink.iconClass)}></i></a>`;
    }
    $$payload.out += `<!--]--></div></div></div></div> <div class="col-xl-2 ps-lg-5 col-sm-6 col-md-3 col-lg-3 wow fadeInUp" data-wow-delay=".4s"><div class="single-footer-widget"><div class="widget-head"><h5>Explore</h5></div> <ul class="list-items"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let exploreLink = each_array_1[$$index_1];
      $$payload.out += `<li><a${attr("href", exploreLink?.link)}>${escape_html(exploreLink?.label)}</a></li>`;
    }
    $$payload.out += `<!--]--></ul></div></div> <div class="col-xl-4 col-sm-6 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".8s"><div class="single-footer-widget"><div class="widget-head"><h5>Address:</h5></div> <div class="footer-address-text"><p>${escape_html(infoData.address)}</p> <h5>Hours:</h5> <p>${escape_html(infoData.timeStart)} – ${escape_html(infoData.timeEnd)} <br> ${escape_html(infoData.dateWorking)}</p></div></div></div></div></div></div> <div class="footer-bottom"><div class="container"><div class="footer-wrapper d-flex align-items-center justify-content-between"><p class="wow fadeInLeft color-2" data-wow-delay=".3s">Copyright © 2024 <a${attr("href", path.home.base())}>SkySolutions</a>. All Rights Reserved.</p></div></div></div></footer>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Header($$payload, $$props) {
  push();
  var $$store_subs;
  const isAdmin = store_get($$store_subs ??= {}, "$page", page).url.pathname.includes("admin");
  let headerData = void 0;
  let infoData = void 0;
  const unsubscribeData = dataStore.subscribe((data) => {
    if (isAdmin) {
      headerData = HEADER_ADMIN_DATA;
      return;
    }
    if (data) {
      headerData = data.headerUserData;
      infoData = data.infoData;
    }
  });
  onDestroy(() => {
    unsubscribeData();
  });
  onDestroy(() => {
  });
  const each_array_1 = ensure_array_like(headerData?.menuLinks ?? []);
  const each_array_3 = ensure_array_like(headerData?.menuLinks ?? []);
  $$payload.out += `<div>`;
  if (!isAdmin) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="header-top-section fix"><div class="container">`;
    if (infoData) {
      $$payload.out += "<!--[-->";
      const each_array = ensure_array_like(infoData.socialLinks);
      $$payload.out += `<div class="header-top-wrapper"><ul class="contact-list"><li><i class="far fa-envelope"></i> <a${attr("href", `mailto:${infoData.email}`)} class="link svelte-11suql8">${escape_html(infoData.email)}</a></li> <li><i class="fas fa-map-marker-alt"></i> ${escape_html(infoData.address)}</li></ul> <div class="top-right"><div class="social-icon d-flex align-items-center"><!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let socialLink = each_array[$$index];
        $$payload.out += `<a${attr("href", socialLink.link)}${attr("aria-label", socialLink.label)} class="svelte-11suql8"><i${attr("class", socialLink.iconClass)}></i></a>`;
      }
      $$payload.out += `<!--]--></div> <ul class="header-menu"><li><a${attr("href", path.contact.base())} class="svelte-11suql8">Help</a></li> <li><a${attr("href", path.contact.base())} class="svelte-11suql8">Support</a></li></ul></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <header class="header-section-1"><div id="header-sticky" class="header-1"><div class="container-fluid"><div class="mega-menu-wrapper"><div class="header-main"><div tabindex="0"${attr("class", `dropdown-header-container absolute ${stringify("hidden")} !lg:hidden w-full shadow-xl left-0 top-[100%] p-1`)}><ul class="rounded-lg mb-0 p-2 bg-white"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
    let menuLink = each_array_1[$$index_2];
    $$payload.out += `<li${attr("class", `${menuLink.link === store_get($$store_subs ??= {}, "$page", page).url.pathname && "bg-red-50 rounded-md"} ${menuLink?.children && "has-dropdown"}`)}><a${attr("class", `${stringify(`${menuLink.link === store_get($$store_subs ??= {}, "$page", page).url.pathname ? "!text-red-500" : "text-black"} flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`)} svelte-11suql8`)}${attr("href", menuLink.link)}>${escape_html(menuLink.label)} `;
    if (menuLink.children) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<i class="fas fa-angle-down ml-2 md:block hidden"></i>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></a> `;
    if (menuLink.children) {
      $$payload.out += "<!--[-->";
      const each_array_2 = ensure_array_like(menuLink.children);
      $$payload.out += `<ul class="submenu"><!--[-->`;
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let subMenu = each_array_2[$$index_1];
        $$payload.out += `<li class="py-2 md:p-0 pl-8"><a class="md:text-black !text-gray-500 svelte-11suql8"${attr("href", subMenu.link)}>${escape_html(subMenu.label)}</a></li>`;
      }
      $$payload.out += `<!--]--></ul>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div class="header-left"><div class="logo"><a${attr("href", isAdmin ? pathAdmin.home.base() : path.home.base())} class="header-logo svelte-11suql8"><img class="w-[120px] h-[60px] object-cover"${attr("src", infoData?.logo || "https://placehold.co/120x60")} alt="logo-img"></a></div> <div class="mean__menu-wrapper"><div class="main-menu"><nav id="mobile-menu"><ul><!--[-->`;
  for (let $$index_4 = 0, $$length = each_array_3.length; $$index_4 < $$length; $$index_4++) {
    let menuLink = each_array_3[$$index_4];
    $$payload.out += `<li${attr("class", `${menuLink.children && "has-dropdown"} menu-thumb`)}><a${attr("class", `${stringify(menuLink.link === store_get($$store_subs ??= {}, "$page", page).url.pathname ? "!text-red-500" : "")} svelte-11suql8`)}${attr("href", menuLink.link)}>${escape_html(menuLink.label)} `;
    if (menuLink.children) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<i class="fas fa-angle-down"></i>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></a> `;
    if (menuLink.children) {
      $$payload.out += "<!--[-->";
      const each_array_4 = ensure_array_like(menuLink.children);
      $$payload.out += `<ul class="submenu"><!--[-->`;
      for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
        let subMenu = each_array_4[$$index_3];
        $$payload.out += `<li><a${attr("href", subMenu.link)} class="svelte-11suql8">${escape_html(subMenu.label)}</a></li>`;
      }
      $$payload.out += `<!--]--></ul>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></li>`;
  }
  $$payload.out += `<!--]--></ul></nav></div></div></div> <div class="header-right d-flex justify-content-end align-items-center">`;
  if (!isAdmin) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="contact-info"><div class="icon"><img src="/img/call.png" alt="img"></div> <div class="content"><p>Phone:</p> <h6><a${attr("href", `tel:${infoData?.phoneNumber}`)} class="svelte-11suql8">${escape_html(infoData?.phoneNumberDisplay)}</a></h6></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <button class="btn m-1 block md:hidden">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"><title>Open Dropdown</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`;
  }
  $$payload.out += `<!--]--></button> `;
  if (isAdmin) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="group md:inline-flex hidden relative items-center justify-start overflow-hidden rounded-xl bg-red-500 px-6 py-3 font-medium transition-all"><span class="absolute right-0 top-0 inline-block h-4 w-4 rounded bg-red-700 transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4"><span class="absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white"></span></span> <span class="absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-2xl bg-red-600 transition-all delay-200 duration-500 ease-in-out group-hover:mb-12 group-hover:translate-x-0"></span> <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Back to user page</span></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div></div></div></div></header></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { Cursor as C, Footer as F, Header as H };
//# sourceMappingURL=Header-COIs1te3.js.map
