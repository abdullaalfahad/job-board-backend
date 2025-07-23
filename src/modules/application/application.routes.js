import express from 'express';
import { submitApplication } from './application.handlers.js';

const router = express.Router();

router.post('/', submitApplication);

export default router;
