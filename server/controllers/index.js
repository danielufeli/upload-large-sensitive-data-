class homeController {
  static homeMessage(req, res) {
    res.json({ status: 200, message: 'Welcome to file uploader' });
  }
}

export default homeController;
