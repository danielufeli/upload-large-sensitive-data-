import express from 'express';

import authController from '../controllers/authController.js';
import {
  userValidationRules,
  userLoginValidationRules,
  validate,
} from '../middleware/validateinput.js';
import checkUser from '../middleware/checkuser.js';
import checkPassword from '../middleware/checkpass.js';
import checkEmail from '../middleware/checkEmail.js';

const router = express.Router();

const { userSignup, userSignin } = authController;

router.post('/signup', userValidationRules(), validate, checkUser, userSignup);

router.post(
  '/signin',
  userLoginValidationRules(),
  validate,
  checkEmail,
  checkPassword,
  userSignin
);

export default router;
