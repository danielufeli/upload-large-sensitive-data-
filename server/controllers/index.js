import path from 'path';
const __dirname = path.resolve();
class homeController {
  static homeMessage(req, res) {
    res.sendFile(__dirname + '/client/upload.html');
    // res.json({ status: 200, message: 'Welcome to file uploader' });
  }
}

export default homeController;
