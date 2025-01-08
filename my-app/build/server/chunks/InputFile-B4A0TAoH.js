import { P as escape_html, X as slot, Y as bind_props, v as pop, W as stringify, t as push } from './index-ChVjjWva.js';
import { f as fallback } from './utils-p5k09QVL.js';
import { a as attr } from './attributes-BBAyRfwG.js';
import './client-TAfaRk9z.js';

function Loading($$payload) {
  $$payload.out += `<div class="fixed bottom-0 left-0 z-10 flex h-screen w-screen items-center justify-center rounded-xl bg-black bg-opacity-10"><div class="flex items-center"><span class="mr-4 text-3xl text-black">Loading</span> <svg class="h-8 w-8 animate-spin text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div></div>`;
}
function Input($$payload, $$props) {
  push();
  let bindValue = $$props["bindValue"];
  let text = $$props["text"];
  let placeholder = $$props["placeholder"];
  let customInput = fallback($$props["customInput"], false);
  let type = fallback($$props["type"], "text");
  $$payload.out += `<div class="mb-4 lg:min-w-[800px] md:min-w-[600px] items-center md:flex md:gap-0 !gap-4"><label class="pr-4 mb-2 md:mb-0 md:text-[16px] text-xs font-bold text-gray-600 md:w-[30%] md:text-left">${escape_html(text)}</label> `;
  if (!customInput) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<input${attr("type", type)} class="w-full rounded-md p-2 md:w-[70%] svelte-1w19983"${attr("value", bindValue)}${attr("placeholder", placeholder)}>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, {
    bindValue,
    text,
    placeholder,
    customInput,
    type
  });
  pop();
}
function InputFile($$payload, $$props) {
  push();
  let {
    loading = false,
    customFuncion,
    bindValue,
    indexArr,
    text,
    placeholder = "https://placehold.co/315x340"
  } = $$props;
  $$payload.out += `<div class="mb-4 lg:min-w-[800px] md:min-w-[600px] items-center md:flex gap-3"><label${attr("for", `upload-${stringify(indexArr)}`)} class="md:text-[15px] leading-5 text-xs pr-4 mb-2 md:mb-0 font-bold text-gray-600 md:w-[30%] md:text-left">${escape_html(text)}</label> <div class="flex w-full gap-2 md:w-[70%]"><input disabled type="text" class="flex-1 rounded-md p-2 svelte-p4kol9"${attr("value", bindValue)}${attr("placeholder", placeholder)}> <label${attr("for", `upload-${stringify(indexArr)}`)} class="group relative inline-block cursor-pointer px-2 py-2 md:px-4 md:py-2 font-medium"><span class="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span> <span class="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-black"></span> <span class="relative text-xs md:text-[16px] text-black group-hover:text-white">Upload</span></label> <input class="hidden rounded-md p-2 svelte-p4kol9" type="file"${attr("id", `upload-${stringify(indexArr)}`)} accept="image/*"></div></div>`;
  pop();
}

export { Input as I, Loading as L, InputFile as a };
//# sourceMappingURL=InputFile-B4A0TAoH.js.map
