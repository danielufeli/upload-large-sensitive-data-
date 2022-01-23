import dataObjects from '../helpers/dataObjects.js';

const { newUpload } = dataObjects;

class uploadController {
  static async newUpload(req, res, next) {
    try {
      const uploadedFile = await newUpload(req, res);
      return res.status(201).json({ status: 'success', uploadedFile });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getUploads(req, res, next) {
    try {
      const { title, description } = req.body;
      const file = req.files.mFile;

      const fileName =
        new Date().getTime().toString() + path.extname(file.name);
      const savePath = path.join(__dirname, 'public', 'uploads', fileName);
      console.log(savePath);
      await file.mv(savePath);
      return res.status(201).json({ status: 'success' });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteUpload(req, res, next) {
    try {
      const { title, description } = req.body;
      const file = req.files.mFile;

      const fileName =
        new Date().getTime().toString() + path.extname(file.name);
      const savePath = path.join(__dirname, 'public', 'uploads', fileName);
      console.log(savePath);
      await file.mv(savePath);
      return res.status(201).json({ status: 'success' });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default uploadController;
