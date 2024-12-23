import { Q as store_get, T as ensure_array_like, V as stringify, P as escape_html, R as unsubscribe_stores, v as pop, t as push } from './index-DYLr4qAj.js';
import { g as goto } from './client-TAfaRk9z.js';
import { p as path } from './path-BUKK5iOb.js';
import { d as dataStore } from './store-CI2MmCxJ.js';
import dayjs from 'dayjs';
import { o as onDestroy } from './index-server-BX_gp4iS.js';
import { w as writable } from './index3-CsTpgeW4.js';
import { p as page } from './stores-Dij9Zz7O.js';
import { P as Pagination } from './Pagination-Bwi18_JP.js';
import { a as attr } from './attributes-Bu127xad.js';
import './utils-p5k09QVL.js';
import './exports-CTha0ECg.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let infoData = void 0;
  const urlParams = new URLSearchParams(store_get($$store_subs ??= {}, "$page", page).url.search);
  urlParams.get("limit");
  const unsubscribe = dataStore.subscribe((data) => {
    if (data) {
      infoData = data.infoData;
    }
  });
  let blogs = writable([]);
  let totalPages = writable(0);
  const handlePageChange = async (page2) => {
    await goto();
  };
  onDestroy(() => {
    unsubscribe();
  });
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$blogs", blogs));
  const each_array_1 = ensure_array_like(infoData.socialLinks);
  $$payload.out += `<div class="breadcrumb-wrapper section-padding bg-cover" style="background-image: url('assets/img/breadcrumb.jpg');"><div class="container"><div class="page-heading"><h1 class="wow fadeInUp" data-wow-delay=".3s">Blog</h1> <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".5s"><li><a href="/">Home Page</a></li> <li><i class="fal fa-minus"></i></li> <li>Blog</li></ul></div></div></div> <section class="blog-wrapper news-wrapper section-padding border-bottom"><div class="container"><div class="news-area"><div class="row"><div class="col-12 col-lg-8"><div class="blog-posts"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let blog = each_array[$$index];
    $$payload.out += `<div class="single-blog-post"><div class="post-featured-thumb bg-cover"${attr("style", `background-image: url('${stringify(blog.thumb)}');`)}></div> <div class="post-content"><div class="post-meta"><span><i class="fal fa-comments"></i>${escape_html(blog.author)}</span> <span><i class="fal fa-calendar-alt"></i>${escape_html(dayjs(blog.date).format("DD MMMM YYYY"))}</span></div> <h2 class="title-anim"><a${attr("href", path.blog.detail(blog.id))}>${escape_html(blog.title)}</a></h2> <p>${escape_html(blog.description)}</p> <a${attr("href", path.blog.detail(blog.id))} class="theme-btn mt-4 line-height"><span>READ MORE <i class="fas fa-chevron-right"></i></span></a></div></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="page-nav-wrap mt-5 text-center">`;
  Pagination($$payload, {
    totalPages: store_get($$store_subs ??= {}, "$totalPages", totalPages),
    onPageChange: handlePageChange
  });
  $$payload.out += `<!----></div></div> <div class="col-12 col-lg-4"><div class="main-sidebar"><div class="single-sidebar-widget"><div class="wid-title"><h3>Search</h3></div> <div class="search_widget"><form action="#"><input type="text" placeholder="Keywords here...."> <button type="submit"><i class="fal fa-search"></i></button></form></div></div> <div class="single-sidebar-widget"><div class="wid-title"><h3>Popular Feeds</h3></div> <div class="popular-posts"><div class="single-post-item"><div class="thumb bg-cover" style="background-image: url('assets/img/news/pp1.jpg');"></div> <div class="post-content"><h5><a${attr("href", path.blog.detail(""))}>Visa Application Fee Increases From July 2024</a></h5> <div class="post-date"><i class="far fa-calendar-alt"></i>24th March 2024</div></div></div></div></div> <div class="single-sidebar-widget"><div class="wid-title"><h3>Never Miss News</h3></div> <div class="social-link"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let socialLink = each_array_1[$$index_1];
    $$payload.out += `<a${attr("href", socialLink.link)}${attr("aria-label", socialLink.label)}><i${attr("class", socialLink.iconClass)}></i></a>`;
  }
  $$payload.out += `<!--]--></div></div></div></div></div></div></div></section>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DoxieHRO.js.map
