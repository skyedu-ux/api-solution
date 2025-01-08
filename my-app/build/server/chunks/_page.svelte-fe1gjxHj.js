import { Q as store_get, V as ensure_array_like, P as escape_html, R as unsubscribe_stores, v as pop, W as stringify, t as push } from './index-ChVjjWva.js';
import { C as CtaMessage } from './CtaMessage-jsIt7uhf.js';
import { p as page } from './stores-nK2n3wP9.js';
import { a as attr } from './attributes-BBAyRfwG.js';
import './utils-p5k09QVL.js';
import './path-D82U7GUR.js';
import './client-TAfaRk9z.js';
import './exports-CTha0ECg.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  store_get($$store_subs ??= {}, "$page", page).params;
  const data = {
    image1: "https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/10/New_Zealand_7_e8620400ce.jpeg?strip=all&lossy=1&ssl=1",
    image2: "https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/10/Singapore_2_23f0d5e291.jpeg?strip=all&lossy=1&ssl=1",
    title: "Định cư các nước khác",
    countries: [
      {
        text: "ANH: Chương trình Innovator Visa",
        img: "/img/flag/eng-square.webp"
      },
      {
        text: "DOMINICA: Chương trình Định cư Dominica",
        img: "/img/flag/dominica-square.webp"
      },
      {
        text: "GRENADA: Chương trình Định cư Grenada",
        img: "/img/flag/grenada-square.webp"
      },
      {
        text: "VANUATU: Chương trình Định cư Vanuatu",
        img: "/img/flag/vanuatu-square.webp"
      },
      {
        text: "THỔ NHĨ KỲ: Chương trình Định cư Thổ Nhĩ Kỳ",
        img: "/img/flag/turkey-square.webp"
      },
      {
        text: "ANTIGUA & BARBUDA: Chương trình Định cư Antigua & Barbuda",
        img: "/img/flag/antigua-square.webp"
      },
      {
        text: "ĐẢO SÍP: Chương trình Đầu tư – Sở hữu Thẻ thường trú CH Síp",
        img: "/img/flag/sip-square.webp"
      },
      {
        text: "MALAYSIA: Chương trình Định cư Malaysia",
        img: "/img/flag/malaysia-square.webp"
      },
      {
        text: "SAINT LUCIA: Chương trình Định cư Saint Lucia",
        img: "/img/flag/saint-lucia.webp"
      },
      {
        text: "SINGAPORE: Chương trình Giải pháp Đầu tư Giáo dục – Trở thành Thường trú nhân Singapore/ Chương trình Nhà đầu tư toàn cầu Singapore (GIP)",
        img: "/img/flag/singapore-square.webp"
      }
    ],
    advantages: [
      "Vợ/chồng, con cái cùng đi cùng hồ sơ",
      "Miễn học phí cấp phổ thông",
      "Học phí đại học tương đương bản xứ – thấp hơn 30% so với sinh viên quốc tế",
      "Miễn thị thực nhập cảnh Úc",
      "Miễn thị thực tới châu Âu, Canada",
      "Nhập cảnh Mỹ với thị thực điện tử"
    ],
    investmentAndBusinessProgram: [
      "Nền kinh tế tăng trưởng liên tục",
      "Thủ tục thành lập doanh nghiệp nhanh chóng",
      "Thuế doanh nghiệp ưu đãi",
      "Doanh nhân quốc tế được chào đón để định cư tại Úc"
    ],
    workingReason: [
      "Thị trường lao động đa văn hóa",
      "Luật lao động rõ ràng",
      "Phúc lợi tốt dành cho bà mẹ và trẻ em (Tài trợ khi sinh con, thời gian nghỉ sinh hưởng nguyên lương cho cả vợ và chồng …)",
      "Dễ dàng chuyển tiếp làm việc tại các quốc gia phát triển khác"
    ]
  };
  if (data) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(data?.countries);
    const each_array_1 = ensure_array_like(data?.advantages);
    const each_array_2 = ensure_array_like(data?.investmentAndBusinessProgram);
    const each_array_3 = ensure_array_like(data?.workingReason);
    $$payload.out += `<main class="main-wrapper"><div class="country-detail"><div class="si-breadcrumbs flex bg-cover bg-center"${attr("style", `background-image:url('${stringify(data.image1)}');`)}><div class="container mx-auto pt-4"><div class="row"><div class="col-12"></div></div></div></div> <div class="container mt-5 py-2"><div class="row"><div class="col-12"><div class="banner-events mt-10"><div class="si-banners mx-auto mb-0"><div class="bg-banner bg-cover bg-center relative"${attr("style", `background-image:url(${stringify(data.image2)});height: 500px`)}><div class="banner-wrap w-full h-full relative"><div class="w-full mb-13"><div class="flag"><div class="flag-img"></div> <div><div><div class="text-white font-semibold">${escape_html(data.title)}</div></div></div></div></div></div></div></div> <div class="excerpt text-lg my-2">${escape_html(data.description)}</div></div></div> <!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let country = each_array[$$index];
      $$payload.out += `<div class="col-12 col-md-6"><div class="flex w-full items-center it-program"><div><img class="img-fluid w-12 h-12 object-contain"${attr("src", country.img)} alt="Quyền lực hộ chiếu"></div> <div>${escape_html(country.text)}</div></div></div>`;
    }
    $$payload.out += `<!--]--> <div class="col-12"><div class="si-line my-5"></div></div></div></div> <div class="why mt-5 mx-auto g-0 row" style="background-image:url('https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/11/TBN_2_aa9176df7a.jpeg?strip=all&amp;lossy=1&amp;ssl=1');"><div class="col-12 col-md-4"><div class="it"><h2>Lợi ích của thẻ thường trú nhân - hộ chiếu</h2> <div><ul><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let advantage = each_array_1[$$index_1];
      $$payload.out += `<li>${escape_html(advantage)}</li>`;
    }
    $$payload.out += `<!--]--></ul></div></div></div> <div class="col-12 col-md-4"><div class="it"><h2>Vì sao lựa chọn đầu tư - kinh doanh &amp; định cư?</h2> <div><ul><!--[-->`;
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let item = each_array_2[$$index_2];
      $$payload.out += `<li>${escape_html(item)}</li>`;
    }
    $$payload.out += `<!--]--></ul></div></div></div> <div class="col-12 col-md-4"><div class="it"><h2>Vì sao lựa chọn làm việc tại?</h2> <div><ul><!--[-->`;
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let item = each_array_3[$$index_3];
      $$payload.out += `<li>${escape_html(item)}</li>`;
    }
    $$payload.out += `<!--]--></ul></div></div></div></div> <div class="bg-[#ffffff] pt-24">`;
    CtaMessage($$payload);
    $$payload.out += `<!----></div></div></main>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-fe1gjxHj.js.map
