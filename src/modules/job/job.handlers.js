import Job from './job.model.js';
import { isValidObjectId } from 'mongoose';
import { sendError } from '../../utils/error.js';

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().lean();
    return res.status(200).json(jobs);
  } catch (err) {
    return sendError(res, 500, 'Failed to fetch jobs', err);
  }
};

export const getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return sendError(res, 400, 'Invalid job ID');
    }
    const job = await Job.findById(id).lean();
    if (!job) {
      return sendError(res, 404, 'Job not found');
    }
    return res.status(200).json(job);
  } catch (err) {
    return sendError(res, 500, 'Failed to fetch job', err);
  }
};

export const createJob = async (req, res) => {
  try {
    const { title, company, location, description } = req.body;

    if (!title || !company || !location || !description) {
      return sendError(
        res,
        400,
        'Title, company, location, and description are required'
      );
    }

    const job = new Job(req.body);
    await job.save();

    return res.status(201).json(job);
  } catch (err) {
    return sendError(res, 500, 'Failed to create job', err);
  }
};
