import bcrypt from 'bcryptjs';
import { User } from '../models/User.js';

export default class dataObjects {
  tokenData = '';

  static async newUser(req) {
    const { email, name, password } = req.body;

    let user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    
    const payload = {
      user: {
        id: user.id,
      },
    };

    return payload;
  }

  static async loginUser(req) {
    const { email } = req.body;

    let user = await User.findOne({ email });
    const payload = {
      user: {
        id: user.id,
      },
    };

    return payload;
  }
}
