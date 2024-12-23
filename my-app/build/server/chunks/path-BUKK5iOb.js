const path = {
  home: {
    base: () => "/"
  },
  contact: {
    base: () => "/contact"
  },
  about: {
    base: () => "/about"
  },
  blog: {
    base: () => "/news",
    create: () => "/news/create",
    edit: (id) => `/news/edit/${id}`,
    detail: (id) => `/news/${id}`
  }
};

export { path as p };
//# sourceMappingURL=path-BUKK5iOb.js.map
