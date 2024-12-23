import { T as ensure_array_like, V as stringify, Q as store_get, P as escape_html, R as unsubscribe_stores, v as pop, t as push } from './index-DYLr4qAj.js';
import './client-TAfaRk9z.js';
import { o as onDestroy } from './index-server-BX_gp4iS.js';
import { w as writable } from './index3-CsTpgeW4.js';
import dayjs from 'dayjs';
import { d as dataStore } from './store-CI2MmCxJ.js';
import { C as CtaMessage } from './CtaMessage-BkruOAzn.js';
import { a as attr } from './attributes-Bu127xad.js';
import { h as html } from './html-FW6Ia4bL.js';
import './utils-p5k09QVL.js';
import './exports-CTha0ECg.js';
import './path-BUKK5iOb.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let infoData = void 0;
  const unsubscribe = dataStore.subscribe((data) => {
    if (data) {
      infoData = data.infoData;
    }
  });
  let blog = writable({
    id: "",
    title: "",
    description: "",
    author: "",
    date: "",
    categoryIds: [],
    content: "",
    thumb: "",
    isPopular: false
  });
  onDestroy(() => {
    unsubscribe();
  });
  const each_array = ensure_array_like(infoData.socialLinks);
  $$payload.out += `<div class="breadcrumb-wrapper section-padding bg-cover"${attr("style", `background-image: url('${stringify(store_get($$store_subs ??= {}, "$blog", blog).thumb)}');`)}><div class="container"><div class="page-heading"><h1 class="wow fadeInUp" data-wow-delay=".3s">News</h1></div></div></div> <section class="blog-wrapper news-wrapper section-padding border-bottom"><div class="container"><div class="news-area"><div class="row"><div class="col-12 col-lg-8"><div class="blog-post-details border-wrap mt-0"><div class="single-blog-post post-details mt-0"><div class="post-content pt-0"><h2 class="mt-0 title-anim">${escape_html(store_get($$store_subs ??= {}, "$blog", blog).title)}</h2> <div class="post-meta mt-3"><span><i class="fal fa-user"></i>${escape_html(store_get($$store_subs ??= {}, "$blog", blog).author)}</span> <span><i class="fal fa-calendar-alt"></i>${escape_html(dayjs(store_get($$store_subs ??= {}, "$blog", blog).date).format("DD MMMM YYYY"))}</span></div> <div class="w-full blog-content">${html(store_get($$store_subs ??= {}, "$blog", blog).content)}</div></div></div></div></div> <div class="col-12 col-lg-4"><div class="main-sidebar"><div class="single-sidebar-widget"><div class="wid-title"><h3>Popular Feeds</h3></div> <div class="popular-posts"><div class="single-post-item"><div class="thumb bg-cover" style="background-image: url('assets/img/news/pp1.jpg');"></div> <div class="post-content"><h5><a href="news-details.html">Visa Application Fee Increases From July 2024</a></h5> <div class="post-date"><i class="far fa-calendar-alt"></i>24th March 2024</div></div></div> <div class="single-post-item"><div class="thumb bg-cover" style="background-image: url('assets/img/news/pp2.jpg');"></div> <div class="post-content"><h5><a href="news-details.html">Top 25 Most In Demand Jobs In Canada</a></h5> <div class="post-date"><i class="far fa-calendar-alt"></i>25th March 2024</div></div></div> <div class="single-post-item"><div class="thumb bg-cover" style="background-image: url('assets/img/news/pp3.jpg');"></div> <div class="post-content"><h5><a href="news-details.html">The Human Rights And Study Visa Programs</a></h5> <div class="post-date"><i class="far fa-calendar-alt"></i>26th March 2024</div></div></div></div></div> <div class="single-sidebar-widget"><div class="wid-title"><h3>Never Miss News</h3></div> <div class="social-link"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let socialLink = each_array[$$index];
    $$payload.out += `<a${attr("href", socialLink.link)}${attr("aria-label", socialLink.label)}><i${attr("class", socialLink.iconClass)}></i></a>`;
  }
  $$payload.out += `<!--]--></div></div></div></div></div></div></div></section> `;
  CtaMessage($$payload);
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DDqv4aHM.js.map
