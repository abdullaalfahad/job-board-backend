import request from 'supertest';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { beforeAll, afterAll, describe, it, expect } from '@jest/globals';

dotenv.config();

beforeAll(async () => {
  await import('../index.js');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET /jobs', () => {
  it('should return 200 and an array', async () => {
    const res = await request('http://localhost:5000').get('/jobs');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
