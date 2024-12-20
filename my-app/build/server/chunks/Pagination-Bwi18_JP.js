import { T as ensure_array_like, V as stringify, P as escape_html, v as pop, t as push } from './index-DYLr4qAj.js';
import './client-TAfaRk9z.js';
import { a as attr } from './attributes-Bu127xad.js';

function Pagination($$payload, $$props) {
  push();
  let { totalPages, onPageChange } = $$props;
  let currentPage = 1;
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 5;
    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let start = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
      let end = Math.min(start + visiblePages - 1, totalPages);
      if (end - start < visiblePages - 1) {
        start = Math.max(end - visiblePages + 1, 1);
      }
      if (start > 1) {
        pageNumbers.push(1);
        if (start > 2) {
          pageNumbers.push("...");
        }
      }
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }
      if (end < totalPages) {
        if (end < totalPages - 1) {
          pageNumbers.push("...");
        }
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };
  const each_array = ensure_array_like(generatePageNumbers());
  $$payload.out += `<div class="flex items-center justify-center gap-2 mt-4"><button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300 svelte-1glwstj"${attr("disabled", currentPage === 1, true)}>Prev</button> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let page = each_array[$$index];
    $$payload.out += `<button${attr("class", `px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 svelte-1glwstj ${stringify([page === currentPage ? "selected" : ""].filter(Boolean).join(" "))}`)}${attr("disabled", page === "...", true)}>${escape_html(page)}</button>`;
  }
  $$payload.out += `<!--]--> <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300 svelte-1glwstj"${attr("disabled", currentPage === totalPages, true)}>Next</button></div>`;
  pop();
}

export { Pagination as P };
//# sourceMappingURL=Pagination-Bwi18_JP.js.map
