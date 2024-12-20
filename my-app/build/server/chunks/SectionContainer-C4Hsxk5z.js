import { t as push, P as escape_html, Y as slot, v as pop } from './index-DYLr4qAj.js';
import './client-TAfaRk9z.js';
import './index-B22U-E-j.js';
import { L as Loading } from './InputFile-VGCulBAl.js';

function SectionContainer($$payload, $$props) {
  push();
  let {
    text,
    loading,
    handleSubmit,
    isShowPreviewBtn = true
  } = $$props;
  $$payload.out += `<div><div class="flex gap-4 pb-[12px] md:pb-[24px] items-center justify-center"><h2 class="break-normal text-[16px] !text-center font-sans md:text-xl font-bold text-gray-700">${escape_html(text)}</h2>  `;
  if (isShowPreviewBtn) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="relative text-center cursor-pointer px-4 py-2 md:px-6 md:py-3 font-bold text-black group"><span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span> <span class="absolute inset-0 w-full h-full border-4 border-black"></span> <span class="relative text-xs md:text-[18px]">${escape_html("Preview")}</span></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="bg-gray-100"><div class="container px-2 md:px-4 lg:px-16 text-left md:text-center"><form class="relative mt-2 md:mt-6 inline-block !w-full lg:!w-auto rounded-xl p-2 md:p-8 lg:mt-0">`;
    if (loading) {
      $$payload.out += "<!--[-->";
      Loading($$payload);
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></form></div></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}

export { SectionContainer as S };
//# sourceMappingURL=SectionContainer-C4Hsxk5z.js.map
