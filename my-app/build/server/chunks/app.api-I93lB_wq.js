const baseUrl = "http://localhost:3000/api/data";
const appApi = {
  getData: async (role = "user") => {
    const response = await fetch(`${baseUrl}?role=${role}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    return data;
  },
  updateInfoData: async (data) => {
    const response = await fetch(`${baseUrl}/info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data })
    });
    return response;
  },
  updateHeroData: async (data) => {
    const response = await fetch(`${baseUrl}/hero`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data })
    });
    return response;
  },
  updateTeamData: async (data) => {
    const response = await fetch(`${baseUrl}/team`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data })
    });
    return response;
  },
  updateAboutData: async (data) => {
    const response = await fetch(`${baseUrl}/about`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data })
    });
    return response;
  },
  updateServiceData: async (data) => {
    const response = await fetch(`${baseUrl}/service`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data })
    });
    return response;
  },
  updateTestimonialData: async (data) => {
    const response = await fetch(`${baseUrl}/testimonial`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data })
    });
    return response;
  },
  login: async (data) => {
    const response = await fetch(`http://localhost:3000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...data })
    });
    return response;
  },
  getBlogs: async ({ page = 1, limit = 10, search }) => {
    const response = await fetch(`${baseUrl}/blogs?page=${page}&limit=${limit}${search ? `&search=${search}` : ""}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    return data;
  },
  getBLogDetail: async (id) => {
    const response = await fetch(`${baseUrl}/blogs/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    return data;
  },
  createBlog: async (data) => {
    const response = await fetch(`${baseUrl}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...data })
    });
    const res = await response.json();
    return res;
  },
  updateBlog: async (id, data) => {
    const response = await fetch(`${baseUrl}/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...data })
    });
    const res = await response.json();
    return res;
  },
  deleteBlog: async (id) => {
    const response = await fetch(`${baseUrl}/blogs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const res = await response.json();
    return res;
  },
  createJob: async (data) => {
    const response = await fetch(`${baseUrl}/job`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...data })
    });
    const res = await response.json();
    return res;
  }
};

export { appApi as a };
//# sourceMappingURL=app.api-I93lB_wq.js.map
