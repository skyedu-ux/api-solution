import { t as push, V as stringify, W as bind_props, v as pop } from './index-DYLr4qAj.js';
import { o as onDestroy } from './index-server-BX_gp4iS.js';
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
import { f as fallback } from './utils-p5k09QVL.js';
import { a as attr } from './attributes-Bu127xad.js';

function TextEditor($$payload, $$props) {
  push();
  let editor;
  let content = fallback($$props["content"], "");
  onDestroy(() => {
  });
  $$payload.out += `<div></div> <div class="flex gap-2 flex-wrap mb-4 max-w-full overflow-scroll"><button type="button"${attr("class", `px-4 py-2 bg-blue-500 text-white rounded ${stringify(editor?.isActive({ textAlign: "left" }))}`)}>Left</button> <button type="button"${attr("class", `px-4 py-2 bg-blue-500 text-white rounded ${stringify(editor?.isActive({ textAlign: "center" }))}`)}>Center</button> <button type="button"${attr("class", `px-4 py-2 bg-blue-500 text-white rounded ${stringify(editor?.isActive({ textAlign: "right" }))}`)}>Right</button> <button type="button"${attr("class", `px-4 py-2 bg-blue-500 text-white rounded ${stringify(editor?.isActive({ textAlign: "justify" }))}`)}>Justify</button> <button type="button" class="px-4 py-2 bg-blue-500 text-white rounded">Unset text align</button> <button type="button"${attr("class", `px-4 py-2 bg-blue-500 text-white rounded ${stringify(editor?.isActive("bold"))}`)}>Bold</button> <button type="button" class="px-4 py-2 bg-blue-500 text-white rounded">Italic</button> <button type="button" class="px-4 py-2 bg-blue-500 text-white rounded">Strike</button> <button type="button" class="px-4 py-2 bg-blue-500 text-white rounded">H1</button> <button type="button" class="px-4 py-2 bg-blue-500 text-white rounded">H2</button> <button type="button" class="px-4 py-2 bg-blue-500 text-white rounded">H3</button> <button type="button" class="px-4 py-2 bg-blue-500 text-white rounded">Bullet List</button> <button type="button" class="px-4 py-2 bg-blue-500 text-white rounded">Ordered List</button> <label for="image-upload" class="px-4 py-2 bg-green-500 text-white rounded cursor-pointer">Upload Image</label> <input id="image-upload" type="file" accept="image/*" class="hidden"></div> <div class="tiptap-container border p-4 rounded-lg shadow-md min-h-[200px]"></div>`;
  bind_props($$props, { content });
  pop();
}

export { TextEditor as T };
//# sourceMappingURL=TextEditor-DU0XaZW2.js.map
