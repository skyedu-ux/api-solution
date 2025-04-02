import express from 'express';
import fs from 'fs';
import { authenticateAdmin } from '../middleware/auth.js';
import { paginate} from '../utils.js';
const router = express.Router();



const getJsonData = (dataFilePath) => {
    const rawData = fs.readFileSync(dataFilePath);
    return JSON.parse(rawData);
  };
  
  const saveJsonData = (dataFilePath, data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  };
// Get list of jobs with pagination
router.get('/', (req, res) => {
  const { page = 1, limit = 10, search = '' } = req.query;
  const jsonData = getJsonData(req.app.locals.dataFilePath);
  const paginateJobs = paginate(jsonData.jobData, parseInt(page), parseInt(limit));

  res.status(200).json({
    jobs: paginateJobs,
    totalJobs: jsonData.jobData.length,
    totalPages: Math.ceil(jsonData.jobData.length / limit),
    page: parseInt(page),
    limit: parseInt(limit)
  });
});

// Create a job
router.post('/', authenticateAdmin, (req, res) => {
  const { jobDescription } = req.body;
  if (!jobDescription) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const jsonData = getJsonData(req.app.locals.dataFilePath);

  const newJob = {
    ...req.body,
    id: jsonData.jobData.length + 1
  };


  jsonData.jobData.push(newJob);
  saveJsonData(req.app.locals.dataFilePath, jsonData);

  res.status(201).json(newJob);
});

// Delete a job
router.delete('/:id', authenticateAdmin, (req, res) => {
  const { id } = req.params;
  
  const jobIndex = req.jsonData.jobData.findIndex(job => job.id === parseInt(id));
  
  if (jobIndex === -1) {
    return res.status(404).json({ error: 'Job not found' });
  }
  const jsonData = getJsonData(req.app.locals.dataFilePath);
  
  jsonData.jobData.splice(jobIndex, 1);
  saveJsonData(req.app.locals.dataFilePath, jsonData);
  
  res.status(200).json({ message: 'Job deleted successfully' });
});

// Edit a job
router.put('/:id', authenticateAdmin, (req, res) => {
  const { id } = req.params;
  const jsonData = getJsonData(req.app.locals.dataFilePath);

  const jobIndex = jsonData.jobData.findIndex(job => job.id === parseInt(id));

  if (jobIndex === -1) {
    return res.status(404).json({ message: 'Job not found' });
  }


  const updatedJob = { ...jsonData.jobData[jobIndex], ...req.body };
  jsonData.jobData[jobIndex] = updatedJob;
  saveJsonData(req.app.locals.dataFilePath, jsonData);
  res.status(200).json(updatedJob);
});

// edit job
router.put('/',authenticateAdmin,(req, res) => {

  const jsonData = getJsonData(req.app.locals.dataFilePath);
  jsonData.jobData = req.body
  saveJsonData(req.app.locals.dataFilePath, jsonData);
  res.status(200).json({
    message: "Update successfully!"
  });
})

// Get a specific job
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const jsonData = getJsonData(req.app.locals.dataFilePath);
  const jobIndex = jsonData.jobData.findIndex(job => job.id === parseInt(id));

  if (jobIndex === -1) {
    return res.status(404).json({ message: 'Job not found' });
  }

  res.status(200).json(jsonData.jobData[jobIndex]);
});

export default router;