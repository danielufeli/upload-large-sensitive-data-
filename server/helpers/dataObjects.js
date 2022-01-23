import bcrypt from 'bcryptjs';
import path from 'path';
import fs from 'fs';
const __dirname = path.resolve();
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

  static async newUpload(req, res) {
    try {
      const { title, description } = req.body;
      const { files } = req;
      console.log(files);
      if (files) {
        const { mFile } = files;
        const fileName =
          new Date().getTime().toString() + path.extname(mFile.name);
        const savePath = path.join(
          __dirname,
          'client',
          'public',
          'uploads',
          fileName
        );
        if (mFile.truncated) {
          return res
            .status(500)
            .json({ errors: [{ msg: 'You can only upload upto 1GB...' }] });
        }
        await mFile.mv(savePath);
        const size = mFile.size;
        const type = mFile.mimetype;
        const host = `${req.protocol}://${req.get('host')}`;
        const fileUrl = `/client/public/uploads/${fileName}`;
        let uploadedFile = new Upload({
          title,
          description,
          fileUrl,
          size,
          type,
          savePath,
        });

        await uploadedFile.save();

        return uploadedFile;
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getFiles(req, res) {
    const allFiles = await Upload.find();
    return allFiles;
  }

  static async deleteFile(req, res) {
    const file = await Upload.find({ _id: req.params.id });

    fs.unlink(file[0].savePath, () => {
      Upload.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
          return res.send({ status: '200', response: 'fail' });
        }
      });
    });

    return 'Successfully Deleted File';
  }
}
