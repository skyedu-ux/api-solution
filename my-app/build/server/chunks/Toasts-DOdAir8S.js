import { Q as store_get, T as ensure_array_like, P as escape_html, R as unsubscribe_stores, v as pop, t as push, V as stringify, Y as slot, W as bind_props } from './index-DYLr4qAj.js';
import { f as fallback } from './utils-p5k09QVL.js';
import { a as attr } from './attributes-Bu127xad.js';
import './client-TAfaRk9z.js';
import { t as toasts } from './notification-CA7h_3Dj.js';

function SuccessIcon($$payload, $$props) {
  let width = fallback($$props["width"], "1em");
  $$payload.out += `<svg${attr("width", width)} style="text-align: center; display: inline-block;" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"></path></svg>`;
  bind_props($$props, { width });
}
function ErrorIcon($$payload, $$props) {
  let width = fallback($$props["width"], "1em");
  $$payload.out += `<svg${attr("width", width)} style="text-align: center; display: inline-block;" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"></path></svg>`;
  bind_props($$props, { width });
}
function InfoIcon($$payload, $$props) {
  let width = fallback($$props["width"], "1em");
  $$payload.out += `<svg${attr("width", width)} style="text-align: center; display: inline-block;" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"></path></svg>`;
  bind_props($$props, { width });
}
function CloseIcon($$payload, $$props) {
  let width = fallback($$props["width"], "1em");
  $$payload.out += `<svg${attr("width", width)} style="text-align: center; display: inline-block;" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>`;
  bind_props($$props, { width });
}
function Toast($$payload, $$props) {
  push();
  let type = fallback($$props["type"], "error");
  let dismissible = fallback($$props["dismissible"], true);
  $$payload.out += `<article${attr("class", `${stringify(type)} svelte-15pa99c`)} role="alert">`;
  if (type === "success") {
    $$payload.out += "<!--[-->";
    SuccessIcon($$payload, { width: "1.1em" });
  } else {
    $$payload.out += "<!--[!-->";
    if (type === "error") {
      $$payload.out += "<!--[-->";
      ErrorIcon($$payload, { width: "1.1em" });
    } else {
      $$payload.out += "<!--[!-->";
      InfoIcon($$payload, { width: "1.1em" });
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> <div class="text svelte-15pa99c"><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div> `;
  if (dismissible) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="close svelte-15pa99c">`;
    CloseIcon($$payload, { width: "0.8em" });
    $$payload.out += `<!----></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></article>`;
  bind_props($$props, { type, dismissible });
  pop();
}
function Toasts($$payload, $$props) {
  push();
  var $$store_subs;
  if (store_get($$store_subs ??= {}, "$toasts", toasts)) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$toasts", toasts));
    $$payload.out += `<section class="svelte-1vtr9z7"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let toast = each_array[$$index];
      Toast($$payload, {
        type: toast.type,
        dismissible: toast.dismissible,
        children: ($$payload2) => {
          $$payload2.out += `<!---->${escape_html(toast.message)}`;
        },
        $$slots: { default: true }
      });
    }
    $$payload.out += `<!--]--></section>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { Toasts as T };
//# sourceMappingURL=Toasts-DOdAir8S.js.map
