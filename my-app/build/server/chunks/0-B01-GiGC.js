import './client-TAfaRk9z.js';
import { a as addToast } from './notification-CA7h_3Dj.js';
import './exports-CTha0ECg.js';
import './index3-CsTpgeW4.js';
import './utils-p5k09QVL.js';

function createFetch() {
  const originalFetch = window.fetch;
  return async (url, options) => {
    const token = localStorage.getItem("access_token");
    if (!token && window.location.pathname !== "/login" && window.location.pathname.includes("/admin")) {
      alert("Please login first");
      window.location.href = "/login";
      return new Response();
    }
    options.headers = {
      ...options.headers,
      authorization: `Bearer ${token}`
    };
    const response = await originalFetch(url, options);
    console.log("Response:", response);
    if (response.status === 403 || response.status === 401) {
      localStorage.removeItem("access_token");
      addToast({
        type: "error",
        message: "Session expired. Please login again."
      });
      window.location.href = "/login";
    }
    return response;
  };
}
const load = async () => {
  if (typeof window !== "undefined") {
    window.fetch = createFetch();
  }
};

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-Ci2EWhFk.js')).default;
const universal_id = "src/routes/+layout.js";
const imports = ["_app/immutable/nodes/0.DoeURBHX.js","_app/immutable/chunks/entry.CC_BJODY.js","_app/immutable/chunks/runtime.BrVA7zyZ.js","_app/immutable/chunks/index.BFqC5wTN.js","_app/immutable/chunks/index.CvdT8md8.js","_app/immutable/chunks/notification.DGA-5bOR.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/template.CFDxphtj.js","_app/immutable/chunks/snippet.Dlf13Skp.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-B01-GiGC.js.map
