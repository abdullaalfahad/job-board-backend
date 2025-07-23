import express from 'express';
import { createJob, getJobById, getJobs } from './job.handlers.js';
import { auth } from '../../middlewares/auth.js';

const router = express.Router();

router.get('/', getJobs);
router.get('/:id', getJobById);
router.post('/', auth, createJob);

export default router;
