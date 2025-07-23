import { sendError } from '../../utils/error.js';
import Job from '../job/job.model.js';
import Application from './application.model.js';

export const submitApplication = async (req, res) => {
  try {
    const { name, email, cv, jobId } = req.body;

    if (!name || !email || !jobId) {
      return sendError(res, 400, 'Name, email, and job ID are required');
    }

    const job = await Job.findById(jobId);
    if (!job) {
      return sendError(res, 404, 'Job not found');
    }

    const application = new Application({ name, email, cv, jobId });
    await application.save();

    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (err) {
    console.error('Error submitting application:', err);
    return sendError(res, 500, 'Failed to submit application', err);
  }
};
