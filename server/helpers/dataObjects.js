import bcrypt from 'bcryptjs';
import path from 'path';
import { User } from '../models/User.js';
import { Upload } from '../models/Upload.js';

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

  static async newUpload(req) {
    const { title, description } = req.body;
    const { mFile } = req.files;
    
    const fileName = new Date().getTime().toString() + path.extname(mFile.name);
    const savePath = path.join(__dirname, 'public', 'uploads', fileName);
    await mFile.mv(savePath);
    console.log(fileName);
    let uploadedFile = new Upload({
      title,
      description,
      savePath,
    });

    await uploadedFile.save();

    return uploadedFile;
  }
}
