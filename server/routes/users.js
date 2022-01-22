import express from 'express';

import authController from '../controllers/authController.js';
import { userValidationRules, validate } from '../middleware/validateinput.js';
import checkUser from '../middleware/checkuser.js';
// import allValidator from '../middleware/allValidator';
// import checkUserReg from '../middleware/checkUserReg';
// import checkUserEmail from '../middleware/checkUserEmail';
// import validateInput from '../helpers/validateInput';

const router = express.Router();

const { userSignup, userSignin } = authController;
// const { checkEmailSignin } = checkUserEmail;
// const { signupInput, signinInput } = validateInput;

router.post('/signup', userValidationRules(), validate, checkUser, userSignup);

router.post('/signin', userSignin);

export default router;
