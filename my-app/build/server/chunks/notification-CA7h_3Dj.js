import { w as writable } from './index3-CsTpgeW4.js';

const toasts = writable([]);
const addToast = (toast) => {
  const id = Math.floor(Math.random() * 1e4);
  const defaults = {
    id,
    type: "info",
    dismissible: true,
    timeout: 3e3
  };
  toasts.update((all) => [{ ...defaults, ...toast }, ...all]);
  if (toast.timeout) setTimeout(() => {
    console.log("dismissToast", id);
    dismissToast(id), toast.timeout;
  });
};
const dismissToast = (id) => {
  toasts.update((all) => all.filter((t) => t.id !== id));
};

export { addToast as a, toasts as t };
//# sourceMappingURL=notification-CA7h_3Dj.js.map
