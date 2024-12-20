import { Q as store_get, R as unsubscribe_stores, v as pop, t as push } from './index-DYLr4qAj.js';
import { p as page } from './stores-Dij9Zz7O.js';
import './utils-p5k09QVL.js';
import './client-TAfaRk9z.js';
import './exports-CTha0ECg.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  store_get($$store_subs ??= {}, "$page", page).params;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div><h1>404 - Not Found</h1></div>`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-D9p_Ij54.js.map
