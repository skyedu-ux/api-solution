import { Q as store_get, T as ensure_array_like, P as escape_html, R as unsubscribe_stores, v as pop, t as push } from './index-DYLr4qAj.js';
import { p as page } from './stores-Dij9Zz7O.js';
import { p as pathAdmin } from './path.admin-BQDC-pBo.js';
import { d as dataStore } from './store-CI2MmCxJ.js';
import { o as onDestroy } from './index-server-BX_gp4iS.js';
import { a as attr } from './attributes-Bu127xad.js';

function JobList($$payload, $$props) {
  push();
  var $$store_subs;
  let jobs = [];
  const isAdmin = store_get($$store_subs ??= {}, "$page", page).url.pathname.includes("admin");
  const unSubscribe = dataStore.subscribe((data) => {
    console.log("data", data?.jobData);
    jobs = data?.jobData;
  });
  onDestroy(() => {
    unSubscribe();
  });
  const each_array = ensure_array_like(jobs);
  $$payload.out += `<div class="lg:p-10 p-6 !w-[calc(100vw-64px)] !overflow-scroll"><div class="flex justify-center gap-2 max-w-[600px] mx-auto mb-8 items-center"><h2 class="md:text-[36px] text-[20px] text-center">Job List</h2> `;
  if (isAdmin) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="bg-blue-500 min-w-[120px] hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"><a class="text-neutral-50"${attr("href", pathAdmin.job.add())}>Add new job +</a></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <table class="svelte-1gfd7ks"><thead><tr><th class="text-center svelte-1gfd7ks">STT</th><th class="text-center min-w-[140px] svelte-1gfd7ks">Job</th><th class="text-center svelte-1gfd7ks">Salary</th><th class="text-center min-w-[180px] svelte-1gfd7ks">Lương (VND)/4 tuần</th><th class="text-center svelte-1gfd7ks">Place</th><th class="text-center min-w-[240px] svelte-1gfd7ks">Estimated LC filing date</th><th class="text-center svelte-1gfd7ks">Spot</th><th class="text-center min-w-[400px] svelte-1gfd7ks">Company</th><th class="text-center svelte-1gfd7ks">Signature</th><th class="text-center min-w-[360px] svelte-1gfd7ks">Job Description</th><th class="text-center svelte-1gfd7ks">Benefit</th><th class="text-center min-w-[400px] svelte-1gfd7ks">Note</th></tr></thead><tbody><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let job = each_array[index];
    $$payload.out += `<tr><td class="text-center svelte-1gfd7ks">${escape_html(index + 1)}</td><td class="text-center svelte-1gfd7ks">${escape_html(job.job)}</td><td class="text-center svelte-1gfd7ks">${escape_html(job.salary)}</td><td class="text-center svelte-1gfd7ks">${escape_html(job.salaryVND)}</td><td class="text-center svelte-1gfd7ks">${escape_html(job.place)}</td><td class="text-center svelte-1gfd7ks">${escape_html(job.estimatedFilingDate)}</td><td class="text-center svelte-1gfd7ks">${escape_html(job.spot)}</td><td class="text-center svelte-1gfd7ks">${escape_html(job.company)}</td><td class="text-center svelte-1gfd7ks">${escape_html(job.signature)}</td><td class="svelte-1gfd7ks">${escape_html(job.jobDescription)}</td><td class="text-center svelte-1gfd7ks">${escape_html(job.benefit)}</td><td class="text-center svelte-1gfd7ks">${escape_html(job.note)}</td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { JobList as J };
//# sourceMappingURL=JobList-DVXYkqgV.js.map
