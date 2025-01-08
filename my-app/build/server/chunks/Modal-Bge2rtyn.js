import { t as push, _ as add_styles, W as stringify, X as slot, Y as bind_props, v as pop } from './index-ChVjjWva.js';
import { f as fallback } from './utils-p5k09QVL.js';
import { a as attr } from './attributes-BBAyRfwG.js';

function Modal($$payload, $$props) {
  push();
  let isOpen = fallback($$props["isOpen"], false);
  let closeModal = fallback($$props["closeModal"], () => {
  });
  let action = fallback($$props["action"], () => {
  });
  $$payload.out += `<div${add_styles({ visibility: isOpen ? "visible" : "hidden" })} class="fixed inset-0 bg-black bg-opacity-50 z-50"><div class="flex justify-center items-center min-h-screen"><div${attr("class", `bg-white p-6 rounded-lg shadow-lg w-full max-w-md transform svelte-1w5u870 ${stringify([
    isOpen ? "scale-100" : "",
    !isOpen ? "scale-95" : ""
  ].filter(Boolean).join(" "))}`)}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----> <div class="flex gap-2"><button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Accept</button> <button class="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button></div></div></div></div>`;
  bind_props($$props, { isOpen, closeModal, action });
  pop();
}

export { Modal as M };
//# sourceMappingURL=Modal-Bge2rtyn.js.map
