import dataObjects from '../helpers/dataObjects.js';
import jwt from 'jsonwebtoken';
import config from 'config';

const { newUser, loginUser } = dataObjects;

class authController {
  static async userSignup(req, res) {
    try {
      const payload = await newUser(req);
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) {
            throw err;
          } else {
            return res.status(201).json({ status: 'success', token });
          }
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async userSignin(req, res) {
    try {
      const payload = await loginUser(req);
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) {
            throw err;
          } else {
            return res.status(200).json({ status: 'success', token });
          }
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default authController;
