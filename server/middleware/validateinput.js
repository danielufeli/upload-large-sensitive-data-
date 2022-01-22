import { body, validationResult } from 'express-validator';
const userValidationRules = () => {
  return [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('name').not().isEmpty(),
  ];
};

const userLoginValidationRules = () => {
  return [
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Password is Required').exists(),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

export { userValidationRules, userLoginValidationRules, validate };
