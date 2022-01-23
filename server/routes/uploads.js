import express from 'express';

import uploadController from '../controllers/uploadController.js';
import {
  uploadValidationRules,
  validate,
} from '../middleware/validateinput.js';
import auth from '../middleware/auth.js';

const router = express.Router();

const { newUpload, getUploads, deleteUpload } = uploadController;

router.post('/new', auth, uploadValidationRules(), validate, newUpload);

router.get('/all', auth, getUploads);

router.delete('/:id', auth, deleteUpload);

export default router;
