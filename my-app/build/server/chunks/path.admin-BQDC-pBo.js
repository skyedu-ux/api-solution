const baseUrl = "/admin";
const pathAdmin = {
  home: {
    base: () => baseUrl,
    page: () => `${baseUrl}/home`,
    header: () => `${baseUrl}/header`,
    footer: () => `${baseUrl}/footer`
  },
  blog: {
    base: () => `${baseUrl}/blog`,
    create: () => `${baseUrl}/blog/create`,
    edit: (id) => `${baseUrl}/blog/edit/${id}`
  },
  contact: {
    base: () => `${baseUrl}/contact`
  },
  about: {
    base: () => `${baseUrl}/about`
  },
  job: {
    base: () => `${baseUrl}/job`,
    add: () => `${baseUrl}/job/add`,
    edit: (id) => `${baseUrl}/job/edit/${id}`
  }
};

export { pathAdmin as p };
//# sourceMappingURL=path.admin-BQDC-pBo.js.map
