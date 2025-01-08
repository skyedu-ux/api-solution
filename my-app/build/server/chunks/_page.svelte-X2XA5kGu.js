import { Q as store_get, P as escape_html, R as unsubscribe_stores, v as pop, t as push } from './index-ChVjjWva.js';
import './client-TAfaRk9z.js';
import { w as writable } from './index3-CsTpgeW4.js';
import { a as attr } from './attributes-BBAyRfwG.js';
import './utils-p5k09QVL.js';
import './exports-CTha0ECg.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let newJob = writable({
    job: "",
    salary: "",
    salaryVND: 0,
    place: "",
    estimatedFilingDate: "",
    spot: "",
    company: "",
    signature: "",
    jobDescription: "",
    benefit: "",
    note: ""
  });
  $$payload.out += `<div class="p-4"><div class="form-container max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg"><h3 class="text-2xl font-semibold mb-6 text-center">Add New Job</h3> <div class="space-y-4"><div><label class="block text-lg font-medium text-gray-700">Job</label> <input type="text"${attr("value", store_get($$store_subs ??= {}, "$newJob", newJob).job)} class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 svelte-789rx1" placeholder="Enter Job Title"></div> <div><label class="block text-lg font-medium text-gray-700">Salary</label> <input type="text"${attr("value", store_get($$store_subs ??= {}, "$newJob", newJob).salary)} class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 svelte-789rx1" placeholder="Enter Salary (e.g., 10/h)"></div> <div><label class="block text-lg font-medium text-gray-700">Salary VND (4 tuần)</label> <input type="text"${attr("value", store_get($$store_subs ??= {}, "$newJob", newJob).salaryVND)} class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 svelte-789rx1" placeholder="Enter Salary VND"></div> <div><label class="block text-lg font-medium text-gray-700">Place</label> <input type="text"${attr("value", store_get($$store_subs ??= {}, "$newJob", newJob).place)} class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 svelte-789rx1" placeholder="Enter Job Location"></div> <div><label class="block text-lg font-medium text-gray-700">Estimated LC filing date</label> <input type="text"${attr("value", store_get($$store_subs ??= {}, "$newJob", newJob).estimatedFilingDate)} class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 svelte-789rx1" placeholder="Enter Filing Date"></div> <div><label class="block text-lg font-medium text-gray-700">Spot</label> <input type="number"${attr("value", store_get($$store_subs ??= {}, "$newJob", newJob).spot)} class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 svelte-789rx1" placeholder="Enter Spot Number"></div> <div><label class="block text-lg font-medium text-gray-700">Company</label> <input type="text"${attr("value", store_get($$store_subs ??= {}, "$newJob", newJob).company)} class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 svelte-789rx1" placeholder="Enter Company Name"></div> <div><label class="block text-lg font-medium text-gray-700">Job Description</label> <textarea class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 svelte-789rx1" rows="4" placeholder="Enter Job Description">`;
  const $$body = escape_html(store_get($$store_subs ??= {}, "$newJob", newJob).jobDescription);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <div><label class="block text-lg font-medium text-gray-700">Benefit</label> <input type="text"${attr("value", store_get($$store_subs ??= {}, "$newJob", newJob).benefit)} class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 svelte-789rx1" placeholder="Enter Benefits (if any)"></div> <div><label class="block text-lg font-medium text-gray-700">Note</label> <input type="text"${attr("value", store_get($$store_subs ??= {}, "$newJob", newJob).note)} class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 svelte-789rx1" placeholder="Enter any notes"></div> <div class="mt-6 text-center"><button class="w-full p-3 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">Add Job</button></div></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-X2XA5kGu.js.map
