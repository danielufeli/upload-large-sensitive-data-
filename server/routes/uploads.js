import express from 'express';

import uploadController from '../controllers/uploadController.js';
import {
  uploadValidationRules,
  validate,
} from '../middleware/validateinput.js';
import auth from '../middleware/auth.js';

const router = express.Router();

const { newUpload, newUploadN, getUploads, deleteUpload } = uploadController;

router.post('/new', newUpload);

router.post('/newa', newUploadN);

router.get('/all', auth, getUploads);

router.delete('/:id', auth, deleteUpload);

export default router;
