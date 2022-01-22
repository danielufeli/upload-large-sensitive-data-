import bcrypt from 'bcryptjs';
import { User } from '../models/User.js';

const checkPassword = async (req, res, next) => {
  const { password, email } = req.body;
  let user = await User.findOne({ email });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
  }

  return next();
};

export default checkPassword;
