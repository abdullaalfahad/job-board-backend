import express from 'express';
import { createJob, getJobById, getJobs } from './job.handlers.js';

const router = express.Router();

router.get('/', getJobs);
router.get('/:id', getJobById);
router.post('/', createJob);

export default router;
