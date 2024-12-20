import { T as ensure_array_like, Q as store_get, V as stringify, R as unsubscribe_stores, v as pop, t as push } from './index-DYLr4qAj.js';
import { o as onDestroy } from './index-server-BX_gp4iS.js';
import { w as writable } from './index3-CsTpgeW4.js';
import { g as globalLoading, d as dataStore } from './store-CI2MmCxJ.js';
import { L as Loading, I as Input, a as InputFile } from './InputFile-VGCulBAl.js';
import './client-TAfaRk9z.js';
import { T as Toasts } from './Toasts-DOdAir8S.js';
import './utils-p5k09QVL.js';
import './attributes-Bu127xad.js';
import './exports-CTha0ECg.js';
import './notification-CA7h_3Dj.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let loading = false;
  const formData = writable({
    email: "",
    address: "",
    phoneNumberDisplay: "",
    phoneNumber: "",
    logo: "",
    dateWorking: "",
    timeStart: "",
    timeEnd: "",
    mapUrl: "",
    socialLinks: [
      {
        label: "Facebook",
        link: "",
        iconClass: "fab fa-facebook-f"
      },
      {
        icon: "Twitter",
        link: "",
        iconClass: "fab fa-twitter"
      },
      {
        icon: "Printerest",
        link: "",
        iconClass: "fab fa-pinterest-p"
      }
    ]
  });
  const handleFileChange = async (filePath) => {
    formData.update((data) => {
      data.logo = filePath;
      return data;
    });
  };
  const unsubscribeLoading = globalLoading.subscribe((globalLoading2) => {
  });
  const unsubscribe = dataStore.subscribe((data) => {
    const infoData = data?.infoData;
    if (infoData) {
      console.log("infoData", infoData);
      formData.set({
        email: infoData.email || "",
        address: infoData.address || "",
        phoneNumberDisplay: infoData.phoneNumberDisplay || "",
        phoneNumber: infoData.phoneNumber || "",
        logo: infoData.logo || "",
        dateWorking: infoData.dateWorking || "",
        timeStart: infoData.timeStart || "",
        timeEnd: infoData.timeEnd || "",
        socialLinks: infoData.socialLinks || [],
        mapUrl: infoData.mapUrl || ""
      });
    }
  });
  onDestroy(() => {
    unsubscribe();
    unsubscribeLoading();
  });
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$formData", formData).socialLinks);
  Toasts($$payload);
  $$payload.out += `<!----> <div class="bg-gray-100"><div class="container px-4 md:px-16 py-12 text-center"><form class="relative mt-6 inline-block !w-auto rounded-xl bg-white p-8 shadow lg:mt-0 !md:text-center !text-left">`;
  if (store_get($$store_subs ??= {}, "$globalLoading", globalLoading)) {
    $$payload.out += "<!--[-->";
    Loading($$payload);
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <h2 class="break-normal pb-8 font-sans text-xl font-bold text-gray-700 !text-center">Information</h2> `;
  Input($$payload, {
    placeholder: "info@example.com",
    bindValue: store_get($$store_subs ??= {}, "$formData", formData).email,
    text: "Email :",
    type: "text"
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    placeholder: "Ex: 55 Main Street, 2nd block, Malborne ,Australia",
    bindValue: store_get($$store_subs ??= {}, "$formData", formData).address,
    text: "Address :",
    type: "text"
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    placeholder: "Ex: +236 (456) 896 22",
    bindValue: store_get($$store_subs ??= {}, "$formData", formData).phoneNumberDisplay,
    text: "Phone Number Display :",
    type: "text"
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    placeholder: "Ex: +23645689622",
    bindValue: store_get($$store_subs ??= {}, "$formData", formData).phoneNumber,
    text: "Phone Number :",
    type: "text"
  });
  $$payload.out += `<!----> `;
  InputFile($$payload, {
    loading,
    text: "Logo URL(120x60) :",
    bindValue: store_get($$store_subs ??= {}, "$formData", formData).logo,
    placeholder: "https://placehold.co/315x340",
    indexArr: 1,
    customFuncion: handleFileChange
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    placeholder: "Ex: Monday to Friday",
    bindValue: store_get($$store_subs ??= {}, "$formData", formData).dateWorking,
    text: "Working Days :",
    type: "text"
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    placeholder: "Ex: 9.30 am",
    bindValue: store_get($$store_subs ??= {}, "$formData", formData).timeStart,
    text: "Start Time :",
    type: "text"
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    placeholder: "Ex: 6.30 pm",
    bindValue: store_get($$store_subs ??= {}, "$formData", formData).timeEnd,
    text: "End Time :",
    type: "text"
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    placeholder: "Google map",
    bindValue: store_get($$store_subs ??= {}, "$formData", formData).mapUrl,
    text: "Map URL :",
    type: "text"
  });
  $$payload.out += `<!----> <!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let link = each_array[index];
    Input($$payload, {
      placeholder: "Ex: https://example.com",
      bindValue: link.link,
      text: `${stringify(link.label || link.icon)} Link :`,
      type: "text"
    });
  }
  $$payload.out += `<!--]--> <button type="submit" class="group w-full !mx-auto relative mt-4 inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-purple-500 p-4 px-6 py-3 font-medium text-indigo-600 shadow-md transition duration-300 ease-out"><span class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-purple-500 text-white duration-300 group-hover:translate-x-0"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span> <span class="ease absolute flex h-full w-full transform items-center justify-center text-purple-500 transition-all duration-300 group-hover:translate-x-full">Save</span> <span class="invisible relative">Save</span></button></form></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Dk0hJ98G.js.map
