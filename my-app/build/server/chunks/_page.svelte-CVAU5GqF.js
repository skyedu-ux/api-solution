import { V as ensure_array_like, P as escape_html, W as stringify } from './index-ChVjjWva.js';
import { C as CtaMessage } from './CtaMessage-jsIt7uhf.js';
import { a as attr } from './attributes-BBAyRfwG.js';
import './utils-p5k09QVL.js';
import './path-D82U7GUR.js';

function _page($$payload) {
  const data = {
    id: "spain",
    title: "Định cư Tây Ban Nha",
    heading: "<h2>Định cư Tây Ban Nha</h2>",
    image1: "https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/11/TBN_2_aa9176df7a.jpeg?strip=all&lossy=1&ssl=1",
    image2: "https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/11/TBN_3_ae3013dc90.jpeg?strip=all&lossy=1&ssl=1",
    flagImage: "https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/10/TBN_76570d9616.png?strip=all&lossy=1&ssl=1",
    description: "Tây Ban Nha là quốc gia cực kỳ nổi tiếng với nền văn hoá đa dạng. Và khi sở hữu hộ chiếu Tây Ban Nha - visa quyền lực top 3 thế giới, bạn có thể du lịch hoặc công tác tại bất cứ nơi đâu. Thế nên, đây là địa điểm định cư hàng đầu trong lòng cư dân quốc tế.",
    content: {
      "passportPower": {
        "ranking": "Top 3 thế giới",
        "numberOfCountriesVisited": "191"
      },
      "currency": { "currencyUnit": "EUR" },
      "populationDensity": { "density": "94" },
      "flightTimeFromVietnam": { "minTime": "15", "maxTime": "20" },
      "countryArea": { "ranking": "52", "area": "505,992 km²" },
      "rankingOfNationalAssets": {
        "ranking": "16",
        "totalAssets": "($1,421.012B) (2023)"
      },
      "welfarePolicyRanking": { "ranking": "21", "score": "85.35 điểm" },
      "wealthRanking": {
        "ranking": "40",
        "wealthPerCapita": "$31,223.354 (2023)"
      },
      "educationRanking": { "ranking": "18/78" },
      "healthcareRanking": { "ranking": "8" },
      "immigrationRate": { "rate": "15.4% dân số (2021)" },
      "socialIntegrationAndSafety": { "ranking": "33/163" },
      "quota2023": { "quota": "600,000" },
      "livingCosts": {
        "ranking": "40 out of 74",
        "familyLivingCost": "3,169 EUR/tháng",
        "individualLivingCost": "1,569 EUR/tháng"
      },
      "climate": {
        "type": "Khí hậu địa trunghair",
        "highestTemperature": "40ºC",
        "lowestTemperature": "-5ºC",
        "averageTemperatureSummer": "25 - 35ºC",
        "averageTemperatureWinter": "5 - 15ºC"
      }
    },
    advantages: [
      "Miễn thị thực khối Schengen",
      "Giáo dục miễn phí, từ mẫu giáo đến đại học",
      "Sinh sống, làm việc vô thời hạn",
      "Được quyền sử dụng hệ thống chăm sóc sức khỏe công cộng của Tây Ban Nha",
      "Có thể đi cùng gia đình"
    ],
    investmentAndBusinessProgram: [
      "Nền kinh tế mạnh với tỷ lệ thất nghiệp thấp và GDP ngày càng tăng",
      "Nhiều chương trình thị thực và cư trú dành cho các nhà đầu tư và doanh nhân muốn sống và làm việc tại Tây Ban Nha",
      "Thời gian xử lý hồ sơ nhanh, chỉ 2 tháng",
      "Nhà đầu tư có quyền bán lại BĐS đã đầu tư chỉ sau 5 năm (giá trị đến 350.000 EUR)",
      "Không yêu cầu cư trú, trình độ tiếng Anh hay phỏng vấn"
    ],
    workingInSpain: [
      "Nền kinh tế đang phát triển với nhiều cơ hội nghề nghiệp",
      "Được hưởng ít nhất 22 ngày nghỉ phép có lương mỗi năm",
      "Đất nước có hệ thống y tế, giáo dục phát triển",
      "Được tự do di chuyển trong EU",
      "Tây Ban Nha là một quốc gia đa dạng với lịch sử và văn hóa phong phú"
    ]
  };
  const each_array = ensure_array_like(data.advantages);
  const each_array_1 = ensure_array_like(data.investmentAndBusinessProgram);
  const each_array_2 = ensure_array_like(data.workingInSpain);
  $$payload.out += `<main class="main-wrapper"><div class="country-detail"><div class="si-breadcrumbs flex bg-cover bg-center"${attr("style", `background-image:url('${stringify(data.image1)}');`)}><div class="container mx-auto pt-4"><div class="row"><div class="col-12"></div></div></div></div> <div class="container mt-5 py-2"><div class="row"><div class="col-12"><div class="banner-events mt-10"><div class="si-banners mx-auto mb-0"><div class="bg-banner bg-cover bg-center relative"${attr("style", `background-image:url(${stringify(data.image2)});height: 500px`)}><div class="banner-wrap w-full h-full relative"><div class="w-full mb-13"><div class="flag"><div class="flag-img"><img class="object-contain"${attr("src", data.flagImage)} alt="Flag"></div> <div><div><div class="text-white font-semibold">${escape_html(data.title)}</div></div></div></div></div></div></div></div> <div class="excerpt text-lg my-2">${escape_html(data.description)}</div></div></div> <div class="col-12 col-md-6"><div class="flex w-full items-center it-program"><div><img class="img-fluid w-12 h-12 object-contain" src="/img/immigration/I_Quyen_luc_ho_chieu_b862f7be15-1.webp" alt="Quyền lực hộ chiếu"></div> <div>Quyền lực hộ chiếu: Top ${escape_html(data.content.passportPower.ranking)} thế giới, đi được ${escape_html(data.content.passportPower.numberOfCountriesVisited)} nước</div></div></div> <div class="col-12 col-md-6"><div class="flex w-full items-center it-program"><div><img class="img-fluid w-12 h-12 object-contain" src="/img/immigration/C_Don_vi_tien_te_032f3679bd.webp" alt="Đơn vị tiền tệ"></div> <div>Đơn vị tiền tệ: ${escape_html(data.content.currency.currencyUnit)}</div></div></div> <div class="col-12 col-md-6"><div class="flex w-full items-center it-program"><div><img class="img-fluid w-12 h-12 object-contain" src="/img/immigration/F_Mat_do_dan_so_e37ecb5913.webp" alt="Mật độ dân số"></div> <div>Mật độ dân số: ${escape_html(data.content.populationDensity.density)} người/ km2</div></div></div> <div class="col-12 col-md-6"><div class="flex w-full items-center it-program"><div><img class="img-fluid w-12 h-12 object-contain" src="/img/immigration/M_Thoi_gian_bay_tu_VN_424a42ef1c.webp" alt="Thời gian bay từ VN"></div> <div>Thời gian bay từ Việt Nam: ${escape_html(data.content.flightTimeFromVietnam.minTime)} giờ - ${escape_html(data.content.flightTimeFromVietnam.maxTime)} giờ</div></div></div> <div class="col-12 col-md-6"><div class="d-flex w-100 align-items-center it-program"><div><img class="img-fluid" src="/img/immigration/A_Dien_tich_quoc_gia_42b865c0af.webp" alt="Country Area"></div> <div>Xếp hạng tổng diện tích quốc gia: Top ${escape_html(data.content.countryArea.ranking)} (${escape_html(data.content.countryArea.area)})</div></div></div> <div class="col-12 col-md-6"><div class="d-flex w-100 align-items-center it-program"><div><img class="img-fluid" src="/img/immigration/O_Xep_hang_tong_tai_san_quoc_gia_16c0a5be3b.webp" alt="Ranking of national assets"></div> <div>Xếp hạng tổng tài sản quốc gia: Top ${escape_html(data.content.rankingOfNationalAssets.ranking)} ${escape_html(data.content.rankingOfNationalAssets.totalAssets)}</div></div></div> <div class="col-12 col-md-6"><div class="d-flex w-100 align-items-center it-program"><div><img class="img-fluid" src="/img/immigration/H_Phuc_loi_xa_hoi_9bdf9ca256.webp" alt="img"></div> <div>Xếp hạng chính sách phúc lợi xã hội: Top ${escape_html(data.content.welfarePolicyRanking.ranking)} (${escape_html(data.content.welfarePolicyRanking.score)})</div></div></div> <div class="col-12 col-md-6"><div class="d-flex w-100 align-items-center it-program"><div><img class="img-fluid" alt="img" src="/img/immigration/B_Do_giau_co_d89069878c.webp" data-lazy-src="https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/10/B_Do_giau_co_d89069878c.png?strip=all&amp;lossy=1&amp;ssl=1"></div> <div>Xếp hạng mức độ giàu có : Top ${escape_html(data.content.wealthRanking.ranking)} ${escape_html(data.content.wealthRanking.wealthPerCapita)}</div></div></div> <div class="col-12 col-md-6"><div class="d-flex w-100 align-items-center it-program"><div><img class="img-fluid" alt="img" src="/img/immigration/D_Giao_duc_6920d1125c.webp" data-lazy-src="https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/10/D_Giao_duc_6920d1125c.png?strip=all&amp;lossy=1&amp;ssl=1"></div> <div>Xếp hạng giáo dục: Top ${escape_html(data.content.educationRanking.ranking)}</div></div></div> <div class="col-12 col-md-6"><div class="d-flex w-100 align-items-center it-program"><div><img class="img-fluid" src="/img/immigration/P_Y_te_73afed5fd1.webp" alt="img" data-lazy-src="https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/10/P_Y_te_73afed5fd1.png?strip=all&amp;lossy=1&amp;ssl=1"></div> <div>Xếp hạng y tế: Top ${escape_html(data.content.healthcareRanking.ranking)}</div></div></div> <div class="col-12 col-md-6"><div class="d-flex w-100 align-items-center it-program"><div><img class="img-fluid" src="/img/immigration/K_So_dan_nhap_cu_7329a66158.webp" alt="img"></div> <div>Tỷ lệ dân nhập cư: ${escape_html(data.content.immigrationRate.rate)}</div></div></div> <div class="col-12 col-md-6"><div class="d-flex w-100 align-items-center it-program"><div><img class="img-fluid" src="/img/immigration/G_Muc_do_an_toan_and_hoa_nhap_xa_hoi_a1a56b8651.webp" alt="img"></div> <div>Mức độ an toàn và hoà nhập xã hội : Top ${escape_html(data.content.immigrationRate.rate)}</div></div></div> <div class="col-12 col-md-6"><div class="d-flex w-100 align-items-center it-program"><div><img class="img-fluid" alt="img" src="/img/immigration/Han_ngach_1e42bedc66.webp" data-lazy-src="https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/10/Han_ngach_1e42bedc66.png?strip=all&amp;lossy=1&amp;ssl=1"></div> <div>Hạn ngạch 2023: ${escape_html(data.content.quota2023.quota)}</div></div></div> <div class="col-12 col-md-6"><div class="d-flex w-100 align-items-center it-program"><div><img class="img-fluid" src="/img/immigration/J_Sinh_hoat_phi_551a98a660.webp" alt="img"></div> <div>Sinh hoạt phí : Top ${escape_html(data.content.livingCosts.ranking)}. ${escape_html(data.content.livingCosts.familyLivingCost)} cho gia đình (bốn người). ${escape_html(data.content.livingCosts.individualLivingCost)} cho cá nhân</div></div></div> <div class="col-12 col-md-6"><div class="d-flex w-100 align-items-center it-program"><div><img alt="img" class="img-fluid" src="/img/immigration/E_Khi_hau_b498f3ce95.webp" data-lazy-src="https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/10/E_Khi_hau_b498f3ce95.png?strip=all&amp;lossy=1&amp;ssl=1"></div> <div>Khí hậu: ${escape_html(data.content.climate.type)}. Nhiệt độ cao nhất: ${escape_html(data.content.climate.highestTemperature)}. Nhiệt độ thấp nhất: ${escape_html(data.content.climate.lowestTemperature)}. Nhiệt độ trung bình: ${escape_html(data.content.climate.averageTemperatureWinter)} (mùa hè), ${escape_html(data.content.climate.averageTemperatureWinter)} (mùa đông)</div></div></div> <div class="col-12"><div class="si-line my-5"></div></div></div></div> <div class="why mt-5 mx-auto g-0 row" style="background-image:url('https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/11/TBN_2_aa9176df7a.jpeg?strip=all&amp;lossy=1&amp;ssl=1');"><div class="col-12 col-md-4"><div class="it"><h2>Lợi ích của thẻ thường trú nhân Tây Ban Nha</h2> <div><ul><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let advantage = each_array[$$index];
    $$payload.out += `<li>${escape_html(advantage)}</li>`;
  }
  $$payload.out += `<!--]--></ul></div></div></div> <div class="col-12 col-md-4"><div class="it"><h2>Vì sao lựa chọn chương trình đầu tư - kinh doanh &amp; định cư tại Tây Ban Nha?</h2> <div><ul><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let item = each_array_1[$$index_1];
    $$payload.out += `<li>${escape_html(item)}</li>`;
  }
  $$payload.out += `<!--]--></ul></div></div></div> <div class="col-12 col-md-4"><div class="it"><h2>Vì sao lựa chọn làm việc tại Tây Ban Nha?</h2> <div><ul><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let item = each_array_2[$$index_2];
    $$payload.out += `<li>${escape_html(item)}</li>`;
  }
  $$payload.out += `<!--]--></ul></div></div></div></div> <div class="bg-[#ffffff] pt-24">`;
  CtaMessage($$payload);
  $$payload.out += `<!----></div></div></main>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CVAU5GqF.js.map
