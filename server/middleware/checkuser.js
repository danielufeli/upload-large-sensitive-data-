import { User } from '../models/User.js';

const checkUser = async (req, res, next) => {
  const { email } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return next();
  }

  return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
};

export default checkUser;
