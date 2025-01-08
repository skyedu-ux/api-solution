import { Q as store_get, V as ensure_array_like, R as unsubscribe_stores, v as pop, t as push, P as escape_html, Y as bind_props } from './index-ChVjjWva.js';
import { p as page } from './stores-nK2n3wP9.js';
import { g as goto } from './client-TAfaRk9z.js';
import { a as appApi } from './app.api-pWf64LZ0.js';
import { P as PAGINATION } from './common-DOYHydVX.js';
import { p as pathAdmin } from './path.admin-BQDC-pBo.js';
import { w as writable } from './index3-CsTpgeW4.js';
import { P as Pagination } from './Pagination-BgyP52iM.js';
import { M as Modal } from './Modal-Bge2rtyn.js';
import { f as fallback } from './utils-p5k09QVL.js';
import { a as addToast } from './notification-CA7h_3Dj.js';
import { p as path } from './path-D82U7GUR.js';
import { a as attr } from './attributes-BBAyRfwG.js';

function JobCard($$payload, $$props) {
  push();
  var $$store_subs;
  let fetchData = fallback($$props["fetchData"], () => {
  });
  let job = $$props["job"];
  const isAdmin = store_get($$store_subs ??= {}, "$page", page).url.pathname.includes("admin");
  let isModalOpen = writable(false);
  const closeModal = () => isModalOpen.set(false);
  const handleDelete = async (id) => {
    const response = await appApi.deleteJob(id);
    if ("error" in response) {
      addToast({ message: response.error, type: "error" });
      return;
    }
    fetchData();
    addToast({
      message: "Job deleted successfully",
      type: "success"
    });
  };
  Modal($$payload, {
    action: () => {
      handleDelete(job.id);
    },
    isOpen: store_get($$store_subs ??= {}, "$isModalOpen", isModalOpen),
    closeModal,
    children: ($$payload2) => {
      $$payload2.out += `<h2 class="text-xl font-semibold">Confirm Delete</h2> <p>Are you sure you want to delete this job ?</p>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="bg-white rounded-lg shadow-md overflow-hidden"><div class="bg-gray-900 p-4 flex justify-between items-center"><h2 class="text-lg text-white font-semibold">${escape_html(job.job)} - ${escape_html(job.place)}</h2> <span class="bg-red-600 text-white px-2 py-1 rounded text-sm">${escape_html(job.spot)}</span></div> <div class="p-4"><div class="mb-2"><p class="font-semibold">Salary: ${escape_html(job.salary)}</p> <p>Estimated LC Filing Date: ${escape_html(job.estimatedFilingDate)}</p> <p>${escape_html(job.place)}</p></div> `;
  if (isAdmin) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex gap-2"><a${attr("href", pathAdmin.job.edit(String(job.id)))} class="theme-btn !bg-blue-500 !rounded-lg px-4 py-2 mt-4 line-height"><span>Edit</span></a> <button class="theme-btn !rounded-lg px-4 py-2 mt-4 line-height"><span>Delete</span></button></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="text-right"><a${attr("href", path.job.detail(job.id))} class="text-blue-600 hover:underline">Read More</a></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { fetchData, job });
  pop();
}
function JobList($$payload, $$props) {
  push();
  var $$store_subs;
  store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("page") ?? PAGINATION.DEFAULT_PAGE;
  store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("limit") ?? PAGINATION.DEFAULT_LIMIT;
  let jobs = writable([]);
  const isAdmin = store_get($$store_subs ??= {}, "$page", page).url.pathname.includes("admin");
  let totalPages = writable(0);
  let totalJobs = writable(0);
  let isLoading = writable(true);
  const fetchJobs = async ({ page: page2, limit, search }) => {
    isLoading.set(true);
    try {
      const data = await appApi.getJobs({ page: page2, limit });
      totalPages.set(data.totalPages);
      totalJobs.set(data.totalJobs);
      jobs.set(data.jobs);
    } catch (e) {
      console.log(e);
    } finally {
      isLoading.set(false);
    }
  };
  const handlePageChange = async (page2) => {
    await goto();
  };
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$jobs", jobs));
  $$payload.out += `<main class="container mx-auto p-2 md:px-4 md:!py-[40px]"><div class="mb-6"><div class="flex gap-4 items-center"><h1 class="!text-[16px] md:!text-[32px] font-bold">Current offerings</h1> `;
  if (isAdmin) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", pathAdmin.job.add())} class="theme-btn !bg-blue-500 !rounded-lg px-4 py-2 line-height"><span>Add Job +</span></a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  if (!isAdmin) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="text-sm text-gray-600">Please choose an offering below. If you have any questions please reach out to our staff through the chat button below. The Estimated Open Date is the estimated date in which the employer will be able to file your Labor Certification application - this date can change slightly.</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let job = each_array[$$index];
    JobCard($$payload, {
      fetchData: () => {
        fetchJobs({ page: 1, limit: 10 });
      },
      job
    });
  }
  $$payload.out += `<!--]--></div> <div class="my-4">`;
  Pagination($$payload, {
    totalPages: store_get($$store_subs ??= {}, "$totalPages", totalPages),
    onPageChange: handlePageChange
  });
  $$payload.out += `<!----></div></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { JobList as J };
//# sourceMappingURL=JobList-CDQzk2kO.js.map
