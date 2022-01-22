import dataObjects from '../helpers/dataObjects.js';

const { newUser } = dataObjects;

class authController {
  static async userSignup(req, res) {
    try {
      const data = await newUser(req, res);
      return res
        .status(201)
        .json({
          status: 'success',
          message: `Welcome ${data.name} you have successfully registered`,
        });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async userSignin(req, res) {
    try {
      console.log(req.body);
      //   const user = await getCurrentUser('email', req.body.email.trim());
      //   const data = generateUserToken(user);
      //   return res.status(200).json({ status: 'success', data });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default authController;
