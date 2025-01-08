import { P as escape_html, Q as store_get, R as unsubscribe_stores, v as pop, t as push } from './index-ChVjjWva.js';
import { p as path } from './path-D82U7GUR.js';
import './client-TAfaRk9z.js';
import { w as writable } from './index3-CsTpgeW4.js';
import { a as attr } from './attributes-BBAyRfwG.js';
import './utils-p5k09QVL.js';
import './exports-CTha0ECg.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let job = writable({
    id: "",
    job: "",
    salary: "",
    salaryVND: 0,
    place: "",
    estimatedFilingDate: "",
    spot: 0,
    company: "",
    signature: "",
    jobDescription: "",
    benefit: "",
    note: ""
  });
  $$payload.out += `<div class="mx-auto p-4 space-y-4"><a${attr("href", path.job.list())} class="text-gray-600 text-sm hover:underline">← Back to all job offerings</a> <div class="flex gap-4"><div><div class="bg-blue-600 text-white p-6 rounded-lg"><h1 class="md:!text-[32px] !text-white !text-[24px] font-semibold">${escape_html(store_get($$store_subs ??= {}, "$job", job).job)} - ${escape_html(store_get($$store_subs ??= {}, "$job", job).place)}</h1> <p class="text-sm mt-1 !mb-0">Sponsored by ${escape_html(store_get($$store_subs ??= {}, "$job", job).company)}</p></div> <div class="bg-white rounded-lg shadow-lg p-6 space-y-4"><div class="flex items-center gap-4"><div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <div><h4 class="font-medium">Apply now</h4> <p class="text-sm !mb-0 text-gray-500">Position and rate confirmed as of few days ago</p></div></div> <div class="flex items-center gap-4"><div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div> <div><h4 class="font-medium">Full-time position (40h a week)</h4> <p class="text-sm text-gray-500">We will pay ${escape_html(store_get($$store_subs ??= {}, "$job", job).salary)}</p></div></div></div> <div class="!h-auto mt-4"><div class="bg-white rounded-lg shadow-lg p-6"><h4 class="font-semibold mb-3">About this position</h4> <p class="text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$job", job).jobDescription)}</p></div></div> <div class="!h-auto mt-4"><div class="bg-white rounded-lg shadow-lg p-6"><h4 class="font-semibold mb-3">Benefits</h4> <p class="text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$job", job).benefit)}</p></div></div> <div class="!h-auto mt-4"><div class="bg-white rounded-lg shadow-lg p-6"><h4 class="font-semibold mb-3">Note</h4> <p class="text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$job", job).note)}</p></div></div></div> <div class="bg-white rounded-lg shadow-lg p-6"><div class="mb-4"><p class="text-sm">${escape_html(store_get($$store_subs ??= {}, "$job", job).spot)} spots left</p></div> <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">Apply &amp; reserve spot</button> <p class="text-xs text-gray-500 mt-3">To reserve this spot, you will need to complete the Application Fee within 2 days.</p> <p class="text-xs text-gray-500 mt-2">It must be you who will be applying for Green Card, not your spouse. Read or enquire else.</p> <div class="mt-4 flex items-center space-x-2"><span class="text-sm text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$job", job).company)}</span></div></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-XloMmhBm.js.map
