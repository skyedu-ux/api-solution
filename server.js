import express from "express";
import cors from "cors";
import path, { dirname } from "path";
import fs from "fs";
import { handler } from "./my-app/build/handler.js";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import multer from 'multer';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';



// Create a storage object for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Specify the destination for uploaded files
        const uploadDir = path.join(__dirname, 'uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir); // Create the uploads directory if it doesn't exist
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Set the filename for the uploaded file
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to avoid duplicate filenames
    }
});

// Initialize multer with the storage configuration
const upload = multer({ storage });

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(bodyParser.json());

// Path to your JSON file
const dataFilePath = path.join(__dirname, 'data.json');

// Load existing data from JSON file
let jsonData = {};
if (fs.existsSync(dataFilePath)) {
    const rawData = fs.readFileSync(dataFilePath);
    jsonData = JSON.parse(rawData);
}

// Middleware to check authentication
const authenticateAdmin = (req, res, next) => {
    const {role} = req.query;
     if(role === 'user'){
        return next()
     }

    const token = req.headers.authorization?.split(' ')[1]; // Expect "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        if (decoded.role === 'admin') {
            return next(); // Proceed to the next middleware or route
        } else {
            return res.status(403).json({ message: 'Unauthorized' });
        }
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));




// API endpoint to get data
app.get('/api/data',authenticateAdmin, (req, res) => {
    res.json(jsonData);
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Replace this with your user validation logic
    if (username === 'admin' && password === '123') {
        const token = jwt.sign({ username, role: 'admin' }, SECRET_KEY, { expiresIn: '5h' });
        

        return res.status(200).json({ token });
    } else {
        return res.status(200).json({ Error: 'Invalid username or password' });
    }
});


// API endpoint to update data
app.post('/api/data', authenticateAdmin,(req, res) => {
    jsonData = req.body;
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).send('Data saved successfully.');
});

// API endpoint to update headerUserData
app.post('/api/data',authenticateAdmin,(req, res) => {
    if (!req.body || !req.body.data) {
        return res.status(400).send('Invalid data.');
    }

    // Update headerUserData
    jsonData = { ...jsonData, ...req.body.data };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).send('Data saved successfully.');
});
// upload info data
app.post('/api/data/info',authenticateAdmin, (req, res) => {
    if (!req.body || !req.body.data) {
        return res.status(400).send('Invalid data.');
    }

    jsonData = { ...jsonData, infoData : {...jsonData.infoData ,...req.body.data} };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).send('Data saved successfully.');
});
// upload home/hero section
app.post('/api/data/hero',authenticateAdmin, (req, res) => {
    if (!req.body || !req.body.data) {
        return res.status(400).send('Invalid data.');
    }

    // Update headerUserData
    jsonData = { ...jsonData, heroData : {...jsonData.heroData ,...req.body.data} };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).send('Data saved successfully.');
});

// upload home/hero section
app.post('/api/data/team',authenticateAdmin, (req, res) => {
    if (!req.body || !req.body.data) {
        return res.status(400).send('Invalid data.');
    }

    // Update headerUserData
    jsonData = { ...jsonData, teamData : {...jsonData.teamData ,...req.body.data} };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).send('Data saved successfully.');
});

// upload home/About section
app.post('/api/data/about',authenticateAdmin, (req, res) => {
    if (!req.body || !req.body.data) {
        return res.status(400).send('Invalid data.');
    }

    // Update headerUserData
    jsonData = { ...jsonData, aboutData : req.body.data };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).send('Data saved successfully.');
});
// upload home/About section
app.post('/api/data/service',authenticateAdmin, (req, res) => {
    if (!req.body || !req.body.data) {
        return res.status(400).send('Invalid data.');
    }

    // Update headerUserData
    jsonData = { ...jsonData, serviceData : req.body.data };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).send('Data saved successfully.');
});
// upload home/Testimonial section
app.post('/api/data/testimonial',authenticateAdmin, (req, res) => {
    if (!req.body || !req.body.data) {
        return res.status(400).send('Invalid data.');
    }

    // Update headerUserData
    jsonData = { ...jsonData, serviceData : req.body.data };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).send('Data saved successfully.');
});

// API endpoint for image upload
app.post('/api/upload',authenticateAdmin, upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    
        // const oldImageName = req.body.oldImageName;
        // const oldImagePath = path.join(__dirname, 'uploads', oldImageName);
    
        // if (oldImageName) {
        //     fs.unlink(oldImagePath, (err) => {
        //         if (err) {
        //             console.error('Error deleting old image:', err);
                
        //         } else {
        //             console.log('Old image deleted successfully.');
        //         }
        //     });
        // }
        const fullPath = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.status(200).json({
        message: 'File uploaded successfully.',
        filePath: fullPath 
    });
});

///blogs

// Add the following to your existing API file

// Utility function for pagination
const paginate = (array, page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return array.slice(startIndex, endIndex);
  };
  
  // Helper function for searching
  const searchBlogs = (blogs, query) => {
    if (!query) return blogs;
    return blogs.filter(blog => 
      blog.title.toLowerCase().includes(query.toLowerCase()) ||
      blog.description.toLowerCase().includes(query.toLowerCase())
    );
  };
  
  // Helper function for filtering by category
  const filterBlogsByCategory = (blogs, categoryIds) => {
    if (!categoryIds || categoryIds.length === 0) return blogs;
    return blogs.filter(blog => 
      blog.categoryIds.some(id => categoryIds.includes(id))
    );
  };
  
  // API endpoint to get a list of blogs with pagination, search, and category filter
  app.get('/api/data/blogs', authenticateAdmin, (req, res) => {
    const { page = 1, limit = 10, search = '', categoryIds = [] } = req.query;
  
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
  
  // API endpoint to create a new blog
  app.post('/api/data/blogs', authenticateAdmin, (req, res) => {
    const { title, description, author, categoryIds, content, thumb } = req.body;
    
    if (!title || !description || !author || !content) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    const newBlog = {
      id: jsonData.blogData.blogs.length + 1,  // Generate a new ID
      title,
      description,
      author,
      date: new Date().toISOString(),
      categoryIds : categoryIds || [],
      content,
      thumb,
      isPopular: false  // Default value
    };
  
    jsonData.blogData.blogs.push(newBlog);
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
  
    res.status(201).json(newBlog);
  });
    // API endpoint to get an existing blog
    app.get('/api/data/blogs/:id', authenticateAdmin, (req, res) => {
        const { id } = req.params;
  
      
        const blogIndex = jsonData.blogData.blogs.findIndex(blog => blog.id === parseInt(id));
      
        if (blogIndex === -1) {
          return res.status(404).json({ message: 'Blog not found' });
        }
      
     
      
        res.status(200).json({
            data: (jsonData.blogData.blogs)[blogIndex]
        });
      });
  
  // API endpoint to edit an existing blog
  app.put('/api/data/blogs/:id', authenticateAdmin, (req, res) => {
    const { id } = req.params;
    const { title, description, author, categoryIds, content, thumb,date } = req.body;
  
    const blogIndex = jsonData.blogData.blogs.findIndex(blog => blog.id === parseInt(id));
  
    if (blogIndex === -1) {
      return res.status(404).json({ message: 'Blog not found' });
    }
  
    // Update blog
    const updatedBlog = { ...jsonData.blogData.blogs[blogIndex], title, description,date, author, categoryIds, content, thumb };
    jsonData.blogData.blogs[blogIndex] = updatedBlog;
  
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
  
    res.status(200).json(updatedBlog);
  });
  
  // API endpoint to delete a blog
  app.delete('/api/data/blogs/:id', authenticateAdmin, (req, res) => {
    const { id } = req.params;
    
    const blogIndex = jsonData.blogData.blogs.findIndex(blog => blog.id === parseInt(id));
    
    if (blogIndex === -1) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    
    jsonData.blogData.blogs.splice(blogIndex, 1);
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    
    res.status(200).json({ message: 'Blog deleted successfully' });
  });


  // APi create a job
    app.post('/api/data/job', authenticateAdmin, (req, res) => {
        const { id,place,benefit, jobDescription, salary, company ,salaryVND,estimatedFilingDate,note,signature,spot } = req.body;
        if(!jobDescription ){
            return res.status(400).json({ error: 'Missing required fields' });
        }
        // if ( !jobDescription || !salary || !company || !salaryVND || !place || !estimatedFilingDate || !benefit   || !spot) {
        // return res.status(400).json({ error: 'Missing required fields' });
        // }
    
        const newJob = {
          ...req.body
        };
    
        jsonData.jobData.push(newJob);
        fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    
        res.status(201).json(newJob);
    });
  

app.use(handler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
