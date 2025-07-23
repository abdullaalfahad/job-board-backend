import express from 'express';
import { login } from './auth.handlers.js';

const router = express.Router();

router.post('/login', login);

export default router;
