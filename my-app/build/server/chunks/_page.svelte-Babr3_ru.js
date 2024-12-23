import { $ as copy_payload, a0 as assign_payload, v as pop, t as push, Q as store_get, R as unsubscribe_stores, a1 as store_mutate } from './index-DYLr4qAj.js';
import 'marked';
import { w as writable } from './index3-CsTpgeW4.js';
import { S as SectionContainer } from './SectionContainer-C4Hsxk5z.js';
import { a as InputFile, I as Input } from './InputFile-VGCulBAl.js';
import { g as goto } from './client-TAfaRk9z.js';
import { p as pathAdmin } from './path.admin-BQDC-pBo.js';
import { a as appApi } from './app.api-BsAOIBuB.js';
import { a as addToast } from './notification-CA7h_3Dj.js';
import { T as TextEditor } from './TextEditor-DU0XaZW2.js';
import './utils-p5k09QVL.js';
import './index-B22U-E-j.js';
import './attributes-Bu127xad.js';
import './exports-CTha0ECg.js';
import './common-BQFeRM-b.js';
import './index-server-BX_gp4iS.js';
import '@tiptap/extension-bold';
import '@tiptap/extension-italic';
import '@tiptap/extension-strike';
import '@tiptap/extension-heading';
import '@tiptap/extension-image';
import '@tiptap/extension-link';
import '@tiptap/extension-list-item';
import '@tiptap/extension-bullet-list';
import '@tiptap/extension-ordered-list';
import '@tiptap/starter-kit';
import '@tiptap/extension-document';
import '@tiptap/extension-paragraph';
import '@tiptap/extension-text';
import '@tiptap/extension-text-align';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let blog = writable({
    id: "",
    title: "",
    description: "",
    author: "",
    date: "",
    categoryIds: [],
    content: "",
    thumb: "",
    isPopular: false
  });
  let isLoading = false;
  const handleSubmit = async (event) => {
    event.preventDefault();
    isLoading = true;
    try {
      const res = await appApi.createBlog(store_get($$store_subs ??= {}, "$blog", blog));
      console.log("asdas", res);
      if ("error" in res) {
        addToast({ message: res.error, type: "error" });
        return;
      } else {
        addToast({
          message: "Blog created successfully",
          type: "success"
        });
        goto(pathAdmin.blog.base());
      }
    } catch (e) {
      console.log(e);
    } finally {
      isLoading = false;
    }
  };
  const handleFileChange = (filePath, index) => {
    blog.update((currentBlog) => {
      return { ...currentBlog, thumb: filePath };
    });
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="py-8 bg-gray-100">`;
    SectionContainer($$payload2, {
      isShowPreviewBtn: false,
      handleSubmit,
      text: "Create Blog",
      children: ($$payload3) => {
        InputFile($$payload3, {
          loading: isLoading,
          text: "ThumbURL: ",
          bindValue: store_get($$store_subs ??= {}, "$blog", blog).thumb,
          placeholder: "Ex: https://placehold.co/1920x800",
          indexArr: "1",
          customFuncion: handleFileChange
        });
        $$payload3.out += `<!----> `;
        Input($$payload3, {
          bindValue: store_get($$store_subs ??= {}, "$blog", blog).title,
          text: "Title :",
          placeholder: "Type title here..."
        });
        $$payload3.out += `<!----> `;
        Input($$payload3, {
          bindValue: store_get($$store_subs ??= {}, "$blog", blog).description,
          text: "Description :",
          placeholder: "Type description here..."
        });
        $$payload3.out += `<!----> `;
        Input($$payload3, {
          bindValue: store_get($$store_subs ??= {}, "$blog", blog).author,
          text: "Author :",
          placeholder: "Type author here..."
        });
        $$payload3.out += `<!----> `;
        Input($$payload3, {
          type: "date",
          bindValue: store_get($$store_subs ??= {}, "$blog", blog).date,
          text: "Date :",
          placeholder: "Type date here..."
        });
        $$payload3.out += `<!----> `;
        TextEditor($$payload3, {
          get content() {
            return store_get($$store_subs ??= {}, "$blog", blog).content;
          },
          set content($$value) {
            store_mutate($$store_subs ??= {}, "$blog", blog, store_get($$store_subs ??= {}, "$blog", blog).content = $$value);
            $$settled = false;
          }
        });
        $$payload3.out += `<!----> <button type="button" class="mt-4 rounded bg-gray-500 px-4 py-2 text-white">Cancel</button> <button type="submit" class="mt-4 rounded bg-blue-500 px-4 py-2 text-white">Save</button>`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Babr3_ru.js.map
