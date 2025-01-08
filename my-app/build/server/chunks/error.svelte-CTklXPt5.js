import { P as escape_html, Q as store_get, R as unsubscribe_stores, v as pop, t as push } from './index-ChVjjWva.js';
import { p as page } from './stores-nK2n3wP9.js';
import './utils-p5k09QVL.js';
import './client-TAfaRk9z.js';
import './exports-CTha0ECg.js';

function Error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<h1>${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</h1> <p>${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}</p>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { Error as default };
//# sourceMappingURL=error.svelte-CTklXPt5.js.map
