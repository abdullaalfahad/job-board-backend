import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { sendError } from '../../utils/error.js';

export const login = (req, res) => {
  const { username, password } = req.body;

  if (username !== process.env.ADMIN_USERNAME) {
    return sendError(res, 401, 'Invalid username');
  }

  const valid = bcrypt.compareSync(password, process.env.ADMIN_PASSWORD);

  if (!valid) {
    return sendError(res, 401, 'Invalid password');
  }

  const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  res.json({ token });
};
