import express from 'express';
import { getJobById, getJobs } from './job.handlers.js';

const router = express.Router();

router.get('/', getJobs);
router.get('/:id', getJobById);

export default router;
