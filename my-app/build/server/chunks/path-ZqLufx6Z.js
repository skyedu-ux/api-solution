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
    base: () => "/blog",
    create: () => "/blog/create",
    edit: (id) => `/blog/edit/${id}`,
    detail: (id) => `/blog/${id}`
  }
};

export { path as p };
//# sourceMappingURL=path-ZqLufx6Z.js.map
