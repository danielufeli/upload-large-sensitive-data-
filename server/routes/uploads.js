import express from 'express';

import uploadController from '../controllers/uploadController.js';
import {
  uploadValidationRules,
  validate,
} from '../middleware/validateinput.js';
import auth from '../middleware/auth.js';

const router = express.Router();

const { newUpload, getUploads, deleteUpload } = uploadController;

router.post('/new', uploadValidationRules(), validate, newUpload);

router.get('/all', getUploads);

router.delete('/:id', deleteUpload);

export default router;
