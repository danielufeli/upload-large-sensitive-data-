import express from 'express';

import uploadController from '../controllers/uploadController.js';
import {
  userValidationRules,
  userLoginValidationRules,
  validate,
} from '../middleware/validateinput.js';
import auth from '../middleware/auth.js';

const router = express.Router();

const { newUpload } = uploadController;

router.post('/new', newUpload);

export default router;
