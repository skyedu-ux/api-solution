import express from "express";
import cors from "cors";
import path, { dirname } from "path";
import fs from "fs";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import multer from 'multer';
import blogRoutes from './routes/blogs.js';
import jobRoutes from './routes/jobs.js';
import {authenticateAdmin} from './middleware/auth.js'
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
const SECRET_KEY = 'your_secret_key';






const app = express();
const PORT = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(cookieParser());

app.use(cors({
  origin: 'https://www.skysolution.com.vn',     // Development frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
  exposedHeaders: ['Set-Cookie']
}));
app.use(bodyParser.json());

// Path to your JSON file
const dataFilePath = path.join(__dirname, 'data.json');

// Load existing data from JSON file
let jsonData = {};
if (fs.existsSync(dataFilePath)) {
    const rawData = fs.readFileSync(dataFilePath);
    jsonData = JSON.parse(rawData);
}



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


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// API endpoint to get header data
app.get('/api/data/header',authenticateAdmin, (req, res) => {

  const {role} = req.query;

  if(role === 'user'){
    return res.json(jsonData.headerUserData);
  }
  
   return res.json(jsonData.headerAdminData);
});
// API endpoint to update info data
app.post('/api/data/info',authenticateAdmin, (req, res) => {
  if (!req.body) {
    return res.status(400).json({error: 'Invalid data.'});
}
jsonData.infoData = { ...jsonData.infoData, ...req.body }



fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
res.status(200).json({message: 'Data saved successfully.'});
});

// API endpoint to get data
app.get('/api/data',authenticateAdmin, (req, res) => {
    res.json(jsonData);
});

// API endpoint to get info
app.get('/api/data/info',authenticateAdmin, (req, res) => {
    res.json(jsonData.infoData);
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === '123') {
        const token = jwt.sign({ username, role: 'admin' }, SECRET_KEY, { expiresIn: '5h' });
        
  
        return res.status(200).json({ token });
    } else {
        return res.status(401).json({ Error: 'Invalid username or password' });
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
        return res.status(400).json({
            error: 'Invalid data.'
        });
    }

    jsonData = { ...jsonData, ...req.body.data };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).json({
        message: 'Data saved successfully.'
    });
});
// upload info data
app.post('/api/data/info',authenticateAdmin, (req, res) => {
    if (!req.body || !req.body.data) {
        return res.status(400).json({error: 'Invalid data.'});
    }

    jsonData = { ...jsonData, infoData : {...jsonData.infoData ,...req.body.data} };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).json({message: 'Data saved successfully.'});
});
// upload home/hero section
app.post('/api/data/hero',authenticateAdmin, (req, res) => {
    if (!req.body) {
        return res.status(400).json({error: 'Invalid data.'});
    }
    jsonData = { ...jsonData, heroData : {...jsonData.heroData ,slides: req.body} };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).json({message: 'Data saved successfully.'});
});

// get home/hero section
app.get('/api/data/hero', (req, res) => {

  res.json(jsonData.heroData);
});

// upload home/team section
app.post('/api/data/team',authenticateAdmin, (req, res) => {
    if (!req.body) {
          return res.status(400).json({error: 'Invalid data.'});
    }

    jsonData = { ...jsonData, teamData : {...jsonData.teamData ,...req.body} };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).json({message: 'Data saved successfully.'});
});
// get home/team section
app.get('/api/data/team', (req, res) => {

  res.json(jsonData.heroData);
});

// upload home/About section
app.post('/api/data/about',authenticateAdmin, (req, res) => {
    if (!req.body) {
        return res.status(400).json({error: 'Invalid data.'});
    }

    // Update headerUserData
    jsonData = { ...jsonData, aboutData : req.body };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).json({message: 'Data saved successfully.'});
});
// get home/About section
app.get('/api/data/about', (req, res) => {
  return res.json(jsonData.aboutData);
});
// upload home/Service section
app.post('/api/data/service',authenticateAdmin, (req, res) => {
    if (!req.body) {
        return res.status(400).json({error: 'Invalid data.'});
    }

    jsonData = { ...jsonData, serviceData : req.body };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    return res.status(200).json({message: 'Data saved successfully.'});
});
// get home/service section
app.get('/api/data/service', (req, res) => {
  return res.json(jsonData.serviceData);
});
// upload home/Testimonial section
app.post('/api/data/testimonial',authenticateAdmin, (req, res) => {
    if (!req.body) {
        return res.status(400).json({error: 'Invalid data.'});
    }

    // Update headerUserData
    jsonData = { ...jsonData, testimonialData : req.body };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    return res.status(200).json({message: 'Data saved successfully.'});
});
// get home/testimonial section
app.get('/api/data/testimonial', (req, res) => {
  return res.json(jsonData.testimonialData);
});

// get home/hero section
app.get('/api/data/home', (req, res) => {
  return res.json({
    heroData: jsonData.heroData,
    teamData: jsonData.teamData,
    aboutData: jsonData.aboutData,
    serviceData: jsonData.serviceData,
    testimonialData: jsonData.testimonialData
  });
});


// get sheet data
app.get('/api/data/sheet', (req, res) => {

  res.json(jsonData.sheetData);
});

// update sheet data
app.post('/api/data/sheet', (req, res) => {
  if (!req.body) {
    return res.status(400).json({error: 'Invalid data.'});
}
jsonData.sheetData = req.body;
fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
res.status(200).json({message: 'Data saved successfully.'});
});

// API endpoint for image upload
app.post('/api/upload',authenticateAdmin, upload.single('image'), (req, res) => {
  console.log('req.file',req.file);
    if (!req.file) {
        return res.status(400).json({error: 'No file uploaded.'});
    }
        const fullPath = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.status(200).json({
        message: 'File uploaded successfully.',
        filePath: fullPath 
    });
});
app.locals.dataFilePath = dataFilePath; 
app.use('/api/data/blogs', blogRoutes);
app.use('/api/data/jobs', jobRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
