import dataObjects from '../helpers/dataObjects.js';

const { newUpload, getFiles, deleteFile } = dataObjects;

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
      const allFiles = await getFiles(req);
      return res.status(200).json({ status: 'success', allFiles });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteUpload(req, res, next) {
    try {
      const data = await deleteFile(req, res);
      return res.status(200).json({ status: 'success', data });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default uploadController;
