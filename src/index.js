import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';

import jobRoutes from './modules/job/job.routes.js';
import authRoutes from './modules/auth/auth.routes.js';
import applicationRoutes from './modules/application/application.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('API is running'));
app.use('/jobs', jobRoutes);
app.use('/auth', authRoutes);
app.use('/applications', applicationRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
