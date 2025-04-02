// Utility function for pagination
export const paginate = (array, page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return array.slice(startIndex, endIndex);
  };
  
  // Helper function for searching
  export const searchBlogs = (blogs, query) => {
    if (!query) return blogs;
    return blogs.filter(blog => 
      blog.title.toLowerCase().includes(query.toLowerCase()) ||
      blog.description.toLowerCase().includes(query.toLowerCase())
    );
  };
  
  // Helper function for filtering by category
 export const filterBlogsByCategory = (blogs, categoryIds) => {
    if (!categoryIds || categoryIds.length === 0) return blogs;
    return blogs.filter(blog => 
      blog.categoryIds.some(id => categoryIds.includes(id))
    );
  };
  