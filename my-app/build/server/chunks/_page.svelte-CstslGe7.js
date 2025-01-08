import { V as ensure_array_like, P as escape_html } from './index-ChVjjWva.js';
import './utils-p5k09QVL.js';

function _page($$payload) {
  const title = "Giới thiệu về du học Mỹ";
  const paragraphs = [
    "Các trường đại học ở Mỹ rất nổi tiếng và được du học sinh thế giới đánh giá cao nhờ vào chất lượng giảng dạy cũng như những nghiên cứu chuyên sâu. Du học Mỹ cũng là lựa chọn số một của nhiều sinh viên quốc tế muốn tìm kiếm cơ hội học năng cao hơn, ước tính có khoảng 30% số lượng sinh viên quốc tế của thế giới đang học tập tại Mỹ.",
    "Bạn có bao giờ tự hỏi tại sao giáo dục bậc đại học và sau đại học của Mỹ lại phổ biến trên thế giới đến thế? Câu trả lời là một nửa số trường tốt nhất thế giới đều nằm tại Mỹ, và nơi đây có hệ thống giáo dục đa dạng, linh hoạt nhất so với bất cứ quốc gia nào, điều đó giúp cho các sinh viên có thể dễ dàng tìm thấy cơ hội học tập phù hợp với bản thân mình.",
    "ISC Education tự hào vì đã tư vấn thành công cho hàng ngàn sinh viên nhập học tại các trường Cao đẳng, Đại học hàng đầu của Mỹ với những suất học bổng có giá trị."
  ];
  const sections = [
    {
      title: "Chất lượng giảng dạy xuất sắc",
      content: [
        "Mỹ đã xây dựng thành công một trong những hệ thống giáo dục tốt nhất trên thế giới với nhiều chương trình xuất sắc ở các lĩnh vực học. Ở bậc Đại học, các trường Đại học Mỹ có nhiều chương trình nổi trội trong các ngành học phổ biến cũng như các lĩnh vực chuyên môn để sinh viên lựa chọn. Ở bậc Thạc sĩ và Tiến sĩ, sinh viên thường xuyên có cơ hội học và làm việc với các nhà nghiên cứu hàng đầu thế giới. Bằng do các trường đại học Mỹ cấp được công nhận trên toàn thế giới nhờ vào chất lượng giảng dạy xuất sắc.",
        "Chính vì vậy, nhiều chính trị gia, tỷ phú, tổng thống của các nước trên thế giới cũng đều tốt nghiệp từ một số các trường tại Mỹ như: Đại học Harvard, Đại học Stanford, Viện công nghệ Caltech, Trường Princeton cùng các trường trong nhóm Ivy League..."
      ]
    },
    {
      title: "Học tập đa dạng và cơ hội việc làm lớn",
      content: [
        "Hệ thống giáo dục đại học và sau đại học của Mỹ đem lại rất nhiều lựa chọn cho sinh viên. Thiết kế của chương trình học luôn đặt tầm quan trọng của việc xây dựng một chương trình kết hợp cân bằng giữa nền tảng lý thuyết vững vàng và các kỹ năng làm việc thực tế.",
        "Nếu như bạn tốt nghiệp tại một trường Đại học tại Mỹ, khả năng cao bạn có thể được làm việc tại Mỹ cho một trong những tập đoàn đa quốc gia lớn nhất thế giới. Lý do bởi Mỹ là trung tâm kinh tế của toàn cầu, hội tụ những công ty hàng đầu trong mọi lĩnh vực. Mỹ cũng là đất nước đi đầu trong việc đổi mới và sáng tạo. Thung lũng Silicon được coi là một trong những biểu tượng cho sự phát triển công nghệ tại Mỹ. Du học Mỹ cũng giúp bạn được tiếp cận với những công nghệ tiên tiến sớm nhất."
      ]
    }
  ];
  const each_array = ensure_array_like(paragraphs);
  const each_array_1 = ensure_array_like(sections[0].content);
  const each_array_2 = ensure_array_like(sections[1].content);
  $$payload.out += `<div class="max-w-7xl mx-auto px-4 py-12 md:py-16"><div class="grid md:grid-cols-2 gap-8 items-center"><div class="space-y-6"><h3 class="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">${escape_html(title)} <div class="absolute -bottom-2 left-0 w-1/2 h-1 bg-red-400"></div></h3> <div class="space-y-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let paragraph = each_array[$$index];
    $$payload.out += `<p class="text-gray-600 leading-relaxed">${escape_html(paragraph)}</p>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="relative"><div class="flex items-center justify-center"><img src="/img/duhoc/Gioi-thieu-ve-du-hoc-My.png" alt="US Capitol Building with American Flag" class="object-cover"></div></div></div> <div class="mt-24"></div> <h3 class="text-3xl md:text-4xl text-center font-bold text-gray-800 relative inline-block">Tại sao chọn du học Mỹ <div class="absolute -bottom-2 left-0 w-1/2 h-1 bg-red-400"></div></h3> <div class="grid md:grid-cols-2 gap-12 items-center mb-20 mt-12"><div class="space-y-6"><h2 class="text-3xl font-bold text-gray-800 relative inline-block">${escape_html(sections[0].title)} <div class="absolute -bottom-2 left-0 w-1/2 h-1 bg-teal-400"></div></h2> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let paragraph = each_array_1[$$index_1];
    $$payload.out += `<p class="text-gray-600 leading-relaxed">${escape_html(paragraph)}</p>`;
  }
  $$payload.out += `<!--]--></div> <div class="relative"><div class="rounded-2xl overflow-hidden"><img src="/path-to-classroom-image.jpg" alt="Students in classroom discussion" class="w-full h-full object-cover"></div> <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-400 rounded-2xl -z-10"></div></div></div> <div class="grid md:grid-cols-2 gap-12 items-center"><div class="relative order-2 md:order-1"><div class="rounded-2xl overflow-hidden"><img src="/path-to-lab-image.jpg" alt="Students in laboratory" class="w-full h-full object-cover"></div> <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500 rounded-2xl -z-10"></div></div> <div class="space-y-6 order-1 md:order-2"><h2 class="text-3xl font-bold text-gray-800 relative inline-block">${escape_html(sections[1].title)} <div class="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-500"></div></h2> <!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let paragraph = each_array_2[$$index_2];
    $$payload.out += `<p class="text-gray-600 leading-relaxed">${escape_html(paragraph)}</p>`;
  }
  $$payload.out += `<!--]--></div></div></div>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CstslGe7.js.map
