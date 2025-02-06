import express from 'express';
import fs from 'fs';
import { paginate, searchBlogs, filterBlogsByCategory } from '../utils.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

// Hàm helper để đọc và ghi file
const getJsonData = (dataFilePath) => {
  const rawData = fs.readFileSync(dataFilePath);
  return JSON.parse(rawData);
};

const saveJsonData = (dataFilePath, data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// API endpoint to get a list of blogs with pagination, search, and category filter
router.get('/', (req, res) => {
  const { page = 1, limit = 10, search = '', categoryIds = [] } = req.query;
  const jsonData = getJsonData(req.app.locals.dataFilePath);

  const filteredBlogs = searchBlogs(jsonData.blogData.blogs, search);
  const categoryFilteredBlogs = filterBlogsByCategory(filteredBlogs, categoryIds);
  const paginatedBlogs = paginate(categoryFilteredBlogs, parseInt(page), parseInt(limit));

  res.status(200).json({
    blogs: paginatedBlogs,
    totalBlogs: categoryFilteredBlogs.length,
    totalPages: Math.ceil(categoryFilteredBlogs.length / limit),
    page: parseInt(page),
    limit: parseInt(limit)
  });
});

// API get 3 newest popular blogs
router.get('/popular', (req, res) => {
  const jsonData = getJsonData(req.app.locals.dataFilePath);
  const popularBlogs = jsonData.blogData.blogs
    .filter(blog => blog.isPopular)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
  res.status(200).json(popularBlogs);
});

// API endpoint to get an existing blog
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const jsonData = getJsonData(req.app.locals.dataFilePath);
  const blogIndex = jsonData.blogData.blogs.findIndex(blog => blog.id === parseInt(id));

  if (blogIndex === -1) {
    return res.status(404).json({ message: 'Blog not found' });
  }

  res.status(200).json({
    data: jsonData.blogData.blogs[blogIndex]
  });
});

// API endpoint to create a new blog
router.post('/', authenticateAdmin, (req, res) => {
  const { title, description, author, categoryIds, content, thumb,isPopular = false } = req.body;
  
  if (!title || !description || !author || !content) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const jsonData = getJsonData(req.app.locals.dataFilePath);
  const newBlog = {
    id: jsonData.blogData.blogs.length + 1,
    title,
    description,
    author,
    date: new Date().toISOString(),
    categoryIds: categoryIds || [],
    content,
    thumb,
    isPopular
  };

  jsonData.blogData.blogs.push(newBlog);
  saveJsonData(req.app.locals.dataFilePath, jsonData);

  res.status(201).json(newBlog);
});

// API endpoint to edit an existing blog
router.put('/:id', authenticateAdmin, (req, res) => {
  const { id } = req.params;
  const { title, description, author, categoryIds, content, thumb, date, isPopular } = req.body;

  const jsonData = getJsonData(req.app.locals.dataFilePath);
  const blogIndex = jsonData.blogData.blogs.findIndex(blog => blog.id === parseInt(id));

  if (blogIndex === -1) {
    return res.status(404).json({ message: 'Blog not found' });
  }

  const updatedBlog = { ...jsonData.blogData.blogs[blogIndex], title, description, date, author, categoryIds, content, thumb, isPopular };
  jsonData.blogData.blogs[blogIndex] = updatedBlog;

  saveJsonData(req.app.locals.dataFilePath, jsonData);
  res.status(200).json(updatedBlog);
});

// API endpoint to delete a blog
router.delete('/:id', authenticateAdmin, (req, res) => {
  const { id } = req.params;
  
  const jsonData = getJsonData(req.app.locals.dataFilePath);
  const blogIndex = jsonData.blogData.blogs.findIndex(blog => blog.id === parseInt(id));
  
  if (blogIndex === -1) {
    return res.status(404).json({ error: 'Blog not found' });
  }
  
  jsonData.blogData.blogs.splice(blogIndex, 1);
  saveJsonData(req.app.locals.dataFilePath, jsonData);
  
  res.status(200).json({ message: 'Blog deleted successfully' });
});

export default router;