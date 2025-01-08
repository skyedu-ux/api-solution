import { a as attr } from './attributes-BBAyRfwG.js';
import { v as pop, t as push } from './index-ChVjjWva.js';
import './client-TAfaRk9z.js';
import { T as Toasts } from './Toasts-U3SVWIgI.js';
import './utils-p5k09QVL.js';
import './exports-CTha0ECg.js';
import './notification-CA7h_3Dj.js';
import './index3-CsTpgeW4.js';

function _page($$payload, $$props) {
  push();
  let username = "";
  let password = "";
  Toasts($$payload);
  $$payload.out += `<!----> <div class="flex h-screen items-center justify-center bg-gray-100"><form class="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-lg"><h2 class="text-center text-2xl font-bold text-gray-700">Login</h2> <div class="flex flex-col space-y-1"><label for="username" class="text-gray-600">Username</label> <input id="username" type="text"${attr("value", username)} class="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your username" required></div> <div class="flex flex-col space-y-1"><label for="password" class="text-gray-600">Password</label> <input id="password" type="password"${attr("value", password)} class="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" required></div> <button type="submit" class="w-full rounded-md bg-blue-500 py-2 text-white transition hover:bg-blue-600">Login</button></form></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BUVG5dVk.js.map
