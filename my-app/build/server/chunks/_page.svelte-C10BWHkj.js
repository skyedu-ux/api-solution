import { V as ensure_array_like, S as head, P as escape_html, W as stringify, v as pop, t as push } from './index-ChVjjWva.js';
import { B as BREADCRUMB_IMAGE } from './common-DOYHydVX.js';
import { a as attr } from './attributes-BBAyRfwG.js';
import { d as dataStore } from './store-CI2MmCxJ.js';
import { o as onDestroy } from './index-server-TzaSlItM.js';
import './utils-p5k09QVL.js';
import './index3-CsTpgeW4.js';

function BreadCrumb($$payload, $$props) {
  let { background, title, list } = $$props;
  const each_array = ensure_array_like(list);
  $$payload.out += `<div class="breadcrumb-wrapper section-padding bg-cover"${attr("style", `background-image: url('${background || BREADCRUMB_IMAGE}')`)}><div class="container"><div class="page-heading"><h1 class="wow fadeInUp" data-wow-delay=".3s">${escape_html(title)}</h1> <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".5s"><li><a href="/">Home Page</a></li> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<li><i class="fal fa-minus"></i></li> <li><a${attr("href", item.link)}>${escape_html(item.name)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></div></div></div>`;
}
function _page($$payload, $$props) {
  push();
  let infoData = void 0;
  const unsubscribe = dataStore.subscribe((data) => {
    if (data) {
      infoData = data.infoData;
    }
  });
  onDestroy(() => {
    unsubscribe();
  });
  const list = [{ name: "Contact", link: "" }];
  const each_array = ensure_array_like(infoData?.socialLinks ?? []);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Contact page | Visaland</title>`;
    $$payload2.out += `<meta name="description" content="This is a contact page">`;
  });
  $$payload.out += `<div>`;
  BreadCrumb($$payload, { title: "Contact", list });
  $$payload.out += `<!----> <section class="contact-main-area fix section-padding"><div class="container"><div class="contact-main-wrapper"><div class="row g-4"><div class="col-lg-6"><div class="contact-content"><div class="section-title mb-2"><span class="wow fadeInUp text-3xl">Contact us</span> <h2 class="title-anim">Chúng Tôi Luôn Sẵn Sàng Hỗ Trợ Bạn</h2></div> <p class="mt-md-0 wow fadeInUp mt-4" data-wow-delay=".4s">Có những lúc bạn cần sự giúp đỡ, đừng ngần ngại liên hệ với chúng tôi. Chúng tôi luôn sẵn sàng để giải đáp mọi thắc mắc của bạn.</p> <div class="row g-4 mt-3"><div class="col-lg-6 wow fadeInUp" data-wow-delay=".3s"><div class="info-items"><div class="icon"><i class="fas fa-map-marker-alt"></i></div> <div class="content"><h5>Location</h5> <p>${escape_html(infoData?.address)}</p></div></div></div> <div class="col-lg-6 wow fadeInUp" data-wow-delay=".5s"><div class="info-items"><div class="icon"><i class="far fa-phone"></i></div> <div class="content"><h5>Phone</h5> <a${attr("href", `tel:${stringify(infoData?.phoneNumber)}`)}>${escape_html(infoData?.phoneNumberDisplay)}</a> <br></div></div></div> <div class="col-lg-6 wow fadeInUp" data-wow-delay=".7s"><div class="info-items"><div class="icon"><i class="fal fa-envelope"></i></div> <div class="content"><h5>Email</h5> <a${attr("href", `mailto:${stringify(infoData?.email)}`)} class="link">${escape_html(infoData?.email)}</a> <br></div></div></div> <div class="col-lg-6 wow fadeInUp" data-wow-delay=".9s"><div class="info-items"><div class="icon"><i class="fas fa-share-alt"></i></div> <div class="content"><h5>Social</h5> <div class="social-icon d-flex align-items-center"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let socialLink = each_array[$$index];
    $$payload.out += `<a${attr("href", socialLink.link)}${attr("aria-label", socialLink.label)}><i${attr("class", socialLink.iconClass)}></i></a>`;
  }
  $$payload.out += `<!--]--></div></div></div></div></div></div></div> <div class="col-lg-6 mt-lg-0 mt-5"><div class="contact-form-items"><div class="contact-title"><h3 class="wow fadeInUp" data-wow-delay=".3s">Fill Up The Form</h3> <p class="wow fadeInUp" data-wow-delay=".5s">Your email address will not be published. Required fields are marked *</p></div> <form action="contact.php" id="contact-form" method="POST"><div class="row g-4"><div class="col-lg-12 wow fadeInUp" data-wow-delay=".3s"><div class="form-clt"><input type="text" name="name" id="name" placeholder="Your Name*"> <div class="icon"><i class="fal fa-user"></i></div></div></div> <div class="col-lg-12 wow fadeInUp" data-wow-delay=".5s"><div class="form-clt"><input type="text" name="email" id="email" placeholder="Email Address*"> <div class="icon"><i class="fal fa-envelope"></i></div></div></div> <div class="col-lg-12 wow fadeInUp" data-wow-delay=".7s"><div class="form-clt"><textarea name="message" id="message" placeholder="Enter Your Messege here"></textarea> <div class="icon"><i class="fal fa-edit"></i></div></div></div> <div class="col-lg-6 wow fadeInUp" data-wow-delay=".8s"><button type="submit" class="theme-btn"><span><i class="fal fa-paper-plane"></i>Get In Touch</span></button></div></div></form></div></div></div></div></div></section> <div class="map-section"><div class="google-map wow fadeInUp" data-wow-delay=".7s"><iframe title=""${attr("src", infoData?.mapUrl)} style="border:0;"${attr("allowfullscreen", true, true)} loading="lazy"></iframe></div></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-C10BWHkj.js.map
