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
  },
  job: {
    detail: (id) => `/job/${id}`,
    list: () => "/job"
  }
};

export { path as p };
//# sourceMappingURL=path-D82U7GUR.js.map
