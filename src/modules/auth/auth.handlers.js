import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const login = (req, res) => {
  const { username, password } = req.body;

  if (username !== process.env.ADMIN_USERNAME) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const valid = bcrypt.compareSync(password, process.env.ADMIN_PASSWORD);

  if (!valid) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  res.json({ token });
};
