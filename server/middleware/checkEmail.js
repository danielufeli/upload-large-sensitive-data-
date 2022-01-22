import { User } from '../models/User.js';

const checkEmail = async (req, res, next) => {
  const { email } = req.body;
  let user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
  }

  return next();
};

export default checkEmail;
