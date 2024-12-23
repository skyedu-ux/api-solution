import { T as ensure_array_like, P as escape_html, v as pop, t as push, Q as store_get, R as unsubscribe_stores, Y as slot } from './index-DYLr4qAj.js';
import { w as writable } from './index3-CsTpgeW4.js';
import './client-TAfaRk9z.js';
import { o as onDestroy } from './index-server-BX_gp4iS.js';
import { a as addToast } from './notification-CA7h_3Dj.js';
import { a as appApi } from './app.api-BsAOIBuB.js';
import { d as dataStore } from './store-CI2MmCxJ.js';
import { T as Toasts } from './Toasts-DOdAir8S.js';
import { a as InputFile, I as Input } from './InputFile-VGCulBAl.js';
import { S as SectionContainer } from './SectionContainer-C4Hsxk5z.js';
import { a as attr } from './attributes-Bu127xad.js';
import './utils-p5k09QVL.js';
import './exports-CTha0ECg.js';
import './common-BQFeRM-b.js';
import './index-B22U-E-j.js';

function CardContainer($$payload, $$props) {
  push();
  let { removeFunction, indexArr, text } = $$props;
  $$payload.out += `<div class="slide-container mb-6 rounded-lg bg-white p-4 shadow-xl"><h3 class="mb-4 text-center text-lg font-semibold">${escape_html(text)} ${escape_html(indexArr + 1)}</h3> <!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----> `;
  if (removeFunction) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button type="button" class="mt-2 text-red-500">Remove ${escape_html(text)}</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function About($$payload, $$props) {
  push();
  var $$store_subs;
  let aboutData = writable();
  let loading = false;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = store_get($$store_subs ??= {}, "$aboutData", aboutData);
    try {
      await appApi.updateAboutData(data);
      await appApi.getData("admin");
      addToast({
        message: "Data saved successfully",
        type: "success"
      });
    } catch (error) {
      addToast({
        message: "An error occurred while saving data.",
        type: "error"
      });
    } finally {
      loading = false;
    }
  };
  const unsubscribe = dataStore.subscribe((data) => {
    const _data = data?.aboutData;
    if (_data) {
      aboutData.update((currentData) => {
        currentData = _data;
        return currentData;
      });
    }
  });
  onDestroy(() => {
    unsubscribe();
  });
  Toasts($$payload);
  $$payload.out += `<!----> `;
  SectionContainer($$payload, {
    text: "About Configuration",
    handleSubmit,
    loading,
    children: ($$payload2) => {
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$aboutData", aboutData)?.circleBars);
      const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$aboutData", aboutData)?.aboutList);
      $$payload2.out += `<div class="mb-4 rounded-lg bg-white p-4">`;
      InputFile($$payload2, {
        indexArr: 1,
        customFuncion: (filePath, index) => {
          aboutData.update((currentAbout) => {
            currentAbout.imgLarge = filePath;
            return currentAbout;
          });
        },
        bindValue: store_get($$store_subs ??= {}, "$aboutData", aboutData)?.imgLarge,
        text: "Large Image URL(437x530):",
        placeholder: "https://placehold.co/437x530"
      });
      $$payload2.out += `<!----> `;
      InputFile($$payload2, {
        indexArr: 2,
        customFuncion: (filePath) => {
          aboutData.update((currentAbout) => {
            currentAbout.img = filePath;
            console.log("currentAbout", currentAbout);
            return currentAbout;
          });
        },
        bindValue: store_get($$store_subs ??= {}, "$aboutData", aboutData)?.img,
        text: "Small Image URL(269x277):",
        placeholder: "https://placehold.co/269x277"
      });
      $$payload2.out += `<!----> `;
      InputFile($$payload2, {
        indexArr: 3,
        customFuncion: (filePath) => {
          aboutData.update((currentAbout) => {
            currentAbout.avatarCeo = filePath;
            return currentAbout;
          });
        },
        bindValue: store_get($$store_subs ??= {}, "$aboutData", aboutData)?.avatarCeo,
        text: "CEO Avatar URL(68x68):",
        placeholder: "https://placehold.co/68x68"
      });
      $$payload2.out += `<!----> `;
      Input($$payload2, {
        bindValue: store_get($$store_subs ??= {}, "$aboutData", aboutData)?.title,
        text: "Title",
        placeholder: "Enter the title here"
      });
      $$payload2.out += `<!----> `;
      Input($$payload2, {
        bindValue: store_get($$store_subs ??= {}, "$aboutData", aboutData)?.description,
        text: "Description",
        placeholder: "Enter a description"
      });
      $$payload2.out += `<!----></div> <div class="mb-4 rounded-lg bg-gray-200 p-4"><!--[-->`;
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let bar = each_array[index];
        CardContainer($$payload2, {
          indexArr: index,
          text: "Circle Bar",
          children: ($$payload3) => {
            Input($$payload3, {
              bindValue: bar.title,
              text: "Title",
              placeholder: "Enter the title"
            });
            $$payload3.out += `<!----> `;
            Input($$payload3, {
              type: "number",
              bindValue: bar.percent,
              text: "Percentage",
              placeholder: "Enter percentage"
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
      }
      $$payload2.out += `<!--]--></div> <div class="mb-4 rounded-lg bg-gray-200 p-4"><!--[-->`;
      for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
        let item = each_array_1[index];
        CardContainer($$payload2, {
          indexArr: index,
          text: "About List",
          children: ($$payload3) => {
            Input($$payload3, {
              bindValue: item,
              text: "About Item",
              placeholder: "Enter item description"
            });
            $$payload3.out += `<!----> <button type="button" class="text-red-500">Remove</button>`;
          },
          $$slots: { default: true }
        });
      }
      $$payload2.out += `<!--]-->  <button type="button" class="mt-4 rounded block ml-auto md:mx-auto bg-blue-500 px-4 py-2 text-white">Add Item to List</button></div> <button type="submit" class="mt-4 block md:mx-auto !ml-auto rounded bg-green-500 px-4 py-2 text-white">Save All</button>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Hero($$payload, $$props) {
  push();
  var $$store_subs;
  let slides = writable([
    {
      background: "",
      tag: "",
      title: "",
      description: "",
      btnLink: "",
      btnText: ""
    }
  ]);
  let loading = false;
  const removeSlide = (index) => {
    slides.update((currentSlides) => {
      const newSlides = [...currentSlides];
      newSlides.splice(index, 1);
      return newSlides;
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    loading = true;
    const data = { slides: [] };
    slides.subscribe((value) => {
      data.slides = value;
    })();
    try {
      await appApi.updateHeroData(data);
      await appApi.getData();
      addToast({
        message: "Data saved successfully",
        type: "success"
      });
    } catch (error) {
      addToast({
        message: "An error occurred while saving data.",
        type: "error"
      });
    } finally {
      loading = false;
    }
  };
  const unsubscribe = dataStore.subscribe((data) => {
    const slidesData = data?.heroData?.slides;
    if (slidesData?.length) {
      slides.update((currentSlides) => [...slidesData]);
    }
  });
  const handleFileChange = (filePath, index) => {
    slides.update((currentSlides) => {
      const newSlides = [...currentSlides];
      newSlides[index].background = filePath;
      return newSlides;
    });
  };
  onDestroy(() => {
    unsubscribe();
  });
  Toasts($$payload);
  $$payload.out += `<!----> `;
  SectionContainer($$payload, {
    text: "Hero Configuration",
    handleSubmit,
    loading,
    children: ($$payload2) => {
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$slides", slides));
      $$payload2.out += `<!--[-->`;
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let slide = each_array[index];
        CardContainer($$payload2, {
          indexArr: index,
          text: "slide",
          removeFunction: () => {
            removeSlide(index);
          },
          children: ($$payload3) => {
            InputFile($$payload3, {
              loading,
              text: "Background URL(1920x800):",
              bindValue: slide.background,
              placeholder: "https://placehold.co/1920x800",
              indexArr: index,
              customFuncion: handleFileChange
            });
            $$payload3.out += `<!----> `;
            Input($$payload3, {
              bindValue: slide.tag,
              text: "Tag :",
              placeholder: "Your Most Trusted Partners"
            });
            $$payload3.out += `<!----> `;
            Input($$payload3, {
              bindValue: slide.title,
              text: "Title :",
              placeholder: "Ex: Immigration & <br>  Visa Consulting <br>  Here..."
            });
            $$payload3.out += `<!----> `;
            Input($$payload3, {
              customInput: true,
              bindValue: slide.tag,
              text: "Description :",
              placeholder: "",
              children: ($$payload4) => {
                $$payload4.out += `<textarea class="h-[200px] w-full rounded-md p-2 md:w-[70%] svelte-1sk5ug4" placeholder="Ex: Transmds is the world’s driving worldwide coordinations supplier we uphold &lt;br> industry and exchange  the worldwide trade of merchandi">`;
                const $$body = escape_html(slide.description);
                if ($$body) {
                  $$payload4.out += `${$$body}`;
                }
                $$payload4.out += `</textarea>`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            Input($$payload3, {
              bindValue: slide.btnLink,
              text: "Button Link :",
              placeholder: "Ex: /about"
            });
            $$payload3.out += `<!----> `;
            Input($$payload3, {
              bindValue: slide.btnText,
              text: "Button Text :",
              placeholder: "Ex: Learn more"
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
      }
      $$payload2.out += `<!--]--> <button type="button" class="mt-4 rounded bg-blue-500 px-4 py-2 text-white">Add Slide</button> <button type="submit" class="mt-4 rounded bg-green-500 px-4 py-2 text-white">Save All</button>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Service($$payload, $$props) {
  push();
  var $$store_subs;
  let serviceData = writable({ heading: "", title: "", services: [] });
  let loading = false;
  const handleSubmit = async (event) => {
    event.preventDefault();
    loading = true;
    let currentData;
    serviceData.subscribe((value) => {
      console.log("value", value);
      currentData = value;
    })();
    try {
      await appApi.updateServiceData(currentData);
      addToast({
        message: "Team data saved successfully",
        type: "success"
      });
      await appApi.getData();
    } catch (error) {
      addToast({
        message: "Error saving team data",
        type: "error"
      });
    } finally {
      loading = false;
    }
  };
  const handleFileChange = (filePath, index) => {
    serviceData.update((currentServiceData) => {
      const newServices2 = [...currentServiceData.services];
      newServices2[index].image = filePath;
      return { ...currentServiceData, members: newServices2 };
    });
  };
  const unsubscribe = dataStore.subscribe((data) => {
    const _serviceData = data?.serviceData;
    if (_serviceData) {
      serviceData.update((current) => _serviceData);
    }
  });
  onDestroy(() => {
    unsubscribe();
  });
  Toasts($$payload);
  $$payload.out += `<!----> `;
  SectionContainer($$payload, {
    text: "Service Configuration",
    handleSubmit,
    loading,
    children: ($$payload2) => {
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$serviceData", serviceData).services);
      $$payload2.out += `<div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-left"><div><h3 class="mb-2 md:text-[16px] text-xs font-bold">Heading</h3> <input${attr("value", store_get($$store_subs ??= {}, "$serviceData", serviceData).heading)} class="mb-4 w-full rounded-md p-2 svelte-9lz5sl"></div> <div><h3 class="mb-2 md:text-[16px] text-xs font-bold">Title</h3> <input type="text"${attr("value", store_get($$store_subs ??= {}, "$serviceData", serviceData).title)} class="mb-4 w-full rounded-md p-2 svelte-9lz5sl"></div></div> <!--[-->`;
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let service = each_array[index];
        $$payload2.out += `<div class="member-container mb-6 rounded-lg bg-white p-4 text-left md:text-center shadow-xl"><h3 class="mb-4 !text-center text-lg font-semibold">Service ${escape_html(index + 1)}</h3> `;
        InputFile($$payload2, {
          loading,
          text: "Image URL(350x270):",
          bindValue: service.image,
          placeholder: "https://placehold.co/315x340",
          indexArr: index,
          customFuncion: handleFileChange
        });
        $$payload2.out += `<!----> `;
        Input($$payload2, {
          bindValue: service.description,
          text: "Description:",
          placeholder: "Ex: Sit amet consectetur bestibulu ullamcorer arcustulla amet dolor tortor elementum"
        });
        $$payload2.out += `<!----> `;
        Input($$payload2, {
          bindValue: service.title,
          text: "Title :",
          placeholder: "Ex: Business Visa"
        });
        $$payload2.out += `<!----> `;
        Input($$payload2, {
          bindValue: service.link,
          text: "Link :",
          placeholder: "Ex: /"
        });
        $$payload2.out += `<!----> <button type="button" class="mt-4 text-center text-red-500">Remove Service</button></div>`;
      }
      $$payload2.out += `<!--]--> <button type="button" class="mt-4 rounded bg-blue-500 px-4 py-2 text-white">Add Service</button> <button type="submit" class="mt-4 rounded bg-green-500 px-4 py-2 text-white">Save All</button>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Team($$payload, $$props) {
  push();
  var $$store_subs;
  let teamData = writable({
    heading: "",
    title: "",
    members: [],
    ceoInfo: { name: "", avatar: "", role: "" }
  });
  let loading = false;
  const handleSubmit = async (event) => {
    event.preventDefault();
    loading = true;
    let currentData;
    teamData.subscribe((value) => {
      currentData = value;
    })();
    try {
      await appApi.updateTeamData(currentData);
      addToast({
        message: "Team data saved successfully",
        type: "success"
      });
      await appApi.getData();
    } catch (error) {
      addToast({
        message: "Error saving team data",
        type: "error"
      });
    } finally {
      loading = false;
    }
  };
  const handleFileChange = (filePath, index) => {
    teamData.update((currentTeamData) => {
      const newMembers = [...currentTeamData.members];
      newMembers[index].avatar = filePath;
      return { ...currentTeamData, members: newMembers };
    });
  };
  const unsubscribe = dataStore.subscribe((data) => {
    const _teamData = data?.teamData;
    if (_teamData) {
      teamData.update((currentSlides) => _teamData);
    }
  });
  onDestroy(() => {
    unsubscribe();
  });
  Toasts($$payload);
  $$payload.out += `<!----> `;
  SectionContainer($$payload, {
    text: "Team Configuration",
    handleSubmit,
    loading,
    children: ($$payload2) => {
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$teamData", teamData).members);
      $$payload2.out += `<div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-left"><div><h3 class="mb-2 md:text-[16px] text-xs font-bold">Heading</h3> <input${attr("value", store_get($$store_subs ??= {}, "$teamData", teamData).heading)} class="mb-4 w-full rounded-md p-2 svelte-9lz5sl"></div> <div><h3 class="mb-2 md:text-[16px] text-xs font-bold">Title</h3> <input type="text"${attr("value", store_get($$store_subs ??= {}, "$teamData", teamData).title)} class="mb-4 w-full rounded-md p-2 svelte-9lz5sl"></div></div> <!--[-->`;
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let member = each_array[index];
        $$payload2.out += `<div class="member-container mb-6 rounded-lg bg-white p-4 text-left md:text-center shadow-xl"><h3 class="mb-4 text-lg font-semibold !text-center">Member ${escape_html(index + 1)}</h3> `;
        Input($$payload2, {
          bindValue: member.name,
          text: "Name:",
          placeholder: "Salman Ahmed"
        });
        $$payload2.out += `<!----> `;
        InputFile($$payload2, {
          loading,
          text: "Avatar URL(315x340):",
          bindValue: member.avatar,
          placeholder: "https://placehold.co/315x340",
          indexArr: index,
          customFuncion: handleFileChange
        });
        $$payload2.out += `<!----> `;
        Input($$payload2, {
          bindValue: member.role,
          text: "Role:",
          placeholder: "Ceo & Founder"
        });
        $$payload2.out += `<!----> `;
        Input($$payload2, {
          bindValue: member.facebookLink,
          text: "Facebook Link:",
          placeholder: "https://facebook.com/example"
        });
        $$payload2.out += `<!----> `;
        Input($$payload2, {
          bindValue: member.twitterLink,
          text: "Twitter Link:",
          placeholder: "https://twitter.com/example"
        });
        $$payload2.out += `<!----> `;
        Input($$payload2, {
          bindValue: member.linkdinLink,
          text: "LinkedIn Link:",
          placeholder: "https://linkedIn.com/example"
        });
        $$payload2.out += `<!----> `;
        Input($$payload2, {
          bindValue: member.link,
          text: "Detail Link:",
          placeholder: "https://example.com"
        });
        $$payload2.out += `<!----> <div><input type="checkbox"${attr("checked", member.showHome, true)} class="svelte-9lz5sl"> Show on Home</div> <button type="button" class="mt-4 text-center text-red-500">Remove Member</button></div>`;
      }
      $$payload2.out += `<!--]--> <button type="button" class="mt-4 rounded bg-blue-500 px-4 py-2 text-white">Add Member</button> <button type="submit" class="mt-4 rounded bg-green-500 px-4 py-2 text-white">Save All</button>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Testimonial($$payload, $$props) {
  push();
  var $$store_subs;
  let testimonialData = writable({ heading: "", title: "", users: [] });
  let loading = false;
  const handleSubmit = async (event) => {
    event.preventDefault();
    loading = true;
    let currentData;
    testimonialData.subscribe((value) => {
      console.log("value", value);
      currentData = value;
    })();
    try {
      await appApi.updateTestimonialData(currentData);
      addToast({
        message: "Testimonial data saved successfully",
        type: "success"
      });
      await appApi.getData();
    } catch (error) {
      addToast({
        message: "Error saving testimonial data",
        type: "error"
      });
    } finally {
      loading = false;
    }
  };
  const handleFileChange = (filePath, index) => {
    testimonialData.update((currentServiceData) => {
      const newUsers = [...currentServiceData.users];
      newServices[index].avatar = filePath;
      return { ...currentServiceData, members: newUsers };
    });
  };
  const unsubscribe = dataStore.subscribe((data) => {
    const _data = data?.testimonialData;
    if (_data) {
      testimonialData.update((current) => _data);
    }
  });
  onDestroy(() => {
    unsubscribe();
  });
  Toasts($$payload);
  $$payload.out += `<!----> `;
  SectionContainer($$payload, {
    text: "Testimonial Configuration",
    handleSubmit,
    loading,
    children: ($$payload2) => {
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$testimonialData", testimonialData).users);
      $$payload2.out += `<div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-left"><div><h3 class="mb-2 md:text-[16px] text-xs font-bold">Heading</h3> <input${attr("value", store_get($$store_subs ??= {}, "$testimonialData", testimonialData).heading)} class="mb-4 w-full rounded-md p-2 svelte-9lz5sl"></div> <div><h3 class="mb-2 md:text-[16px] text-xs font-bold">Title</h3> <input type="text"${attr("value", store_get($$store_subs ??= {}, "$testimonialData", testimonialData).title)} class="mb-4 w-full rounded-md p-2 svelte-9lz5sl"></div></div> <!--[-->`;
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let user = each_array[index];
        $$payload2.out += `<div class="member-container mb-6 rounded-lg bg-white p-4 text-left md:text-center shadow-xl"><h3 class="mb-4 !text-center text-lg font-semibold">User ${escape_html(index + 1)}</h3> `;
        InputFile($$payload2, {
          loading,
          text: "Image URL(350x270):",
          bindValue: user.avatar,
          placeholder: "https://placehold.co/315x340",
          indexArr: index,
          customFuncion: handleFileChange
        });
        $$payload2.out += `<!----> `;
        Input($$payload2, {
          bindValue: user.name,
          text: "User:",
          placeholder: "Ex: Kawser Ahmed"
        });
        $$payload2.out += `<!----> `;
        Input($$payload2, {
          bindValue: user.job,
          text: "Title :",
          placeholder: "Ex: Web Developer"
        });
        $$payload2.out += `<!----> `;
        Input($$payload2, {
          bindValue: user.text,
          text: "Content :",
          placeholder: "Ex: Tôi rất ấn tượng với sự chuyên nghiệp và tận tâm của đội ngũ. Họ đã giúp tôi xây dựng chiến lược marketing hiệu quả, mang lại kết quả rõ rệt trong thời gian ngắn. Tôi chắc chắn sẽ tiếp tục hợp tác với họ trong tương lai."
        });
        $$payload2.out += `<!----> <button type="button" class="mt-4 text-center text-red-500">Remove User</button></div>`;
      }
      $$payload2.out += `<!--]--> <button type="button" class="mt-4 rounded bg-blue-500 px-4 py-2 text-white">Add User</button> <button type="submit" class="mt-4 rounded bg-green-500 px-4 py-2 text-white">Save All</button>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload, $$props) {
  push();
  let currentSectionId = 1;
  const sections = [
    { id: 1, name: "Hero Section", component: Hero },
    { id: 2, name: "Team Section", component: Team },
    {
      id: 3,
      name: "About section",
      component: About
    },
    {
      id: 4,
      name: "Service section",
      component: Service
    },
    {
      id: 5,
      name: "Testimoial section",
      component: Testimonial
    }
  ];
  const each_array = ensure_array_like(sections);
  const each_array_1 = ensure_array_like(sections);
  const each_array_2 = ensure_array_like(sections);
  $$payload.out += `<div class="bg-gray-100 text-gray-900 tracking-wider leading-normal"><div class="w-full flex lg:flex-row flex-col flex-wrap mx-auto lg:px-[96px] xl:px-[124px] px-[8px] pt-[16px] md:pt-[12px] lg:pt-11 pb-16"><div class="w-full lg:w-1/5 px-2 md:px-6 text-xl text-gray-800 leading-normal"><div class="md:hidden flex lg:flex xl:hidden md:!shadow-none shadow-lg rounded-lg px-4 py-2 gap-4 md:mb-0 mb-8 justify-between teams-center"><p class="md:text-base mb-0 lg:visible text-xl font-bold py-2 lg:pb-6 text-gray-700">Menu</p> <select id="countries" class="bg-gray-50 md:hidden visible border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"><option selected>Choose a section</option><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let section = each_array[$$index];
    $$payload.out += `<option${attr("value", section.id)}>${escape_html(section.name)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div class="w-full hidden md:block md:bg-transparent bg-[#fff] rounded-lg inset-0 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block my-8 lg:my-0 lg:shadow-none lg:bg-transparent z-20" style="top:6em;" id="menu-content"><ul class="list-reset gap-4 px-2 md:justify-evenly flex lg:block py-2 !overflow-y-auto md:py-0"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let section = each_array_1[$$index_1];
    $$payload.out += `<li${attr("class", `py-1 md:my-2 lg:pl-2 no-wrap hover:bg-yellow-100 lg:hover:bg-transparent  border-transparent font-bold ${section.id === currentSectionId && "border-b-4 lg:border-l-4 lg:border-b-0 border-yellow-600"}`)}><div${attr("class", `block p-1 lg:p-0 pl-0 !lg:pl-4 align-middle cursor-pointer ${section.id === currentSectionId ? "text-gray-700" : "text-gray-500"} no-underline hover:text-yellow-600`)}><span class="pb-1 md:pb-0 text-nowrap text-sm">${escape_html(section.name)}</span></div></li>`;
  }
  $$payload.out += `<!--]--></ul></div></div> <section class="w-full lg:w-4/5"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let section = each_array_2[$$index_2];
    if (section.id === currentSectionId) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<!---->`;
      section.component?.($$payload, {});
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></section></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-B6mRWDvE.js.map
