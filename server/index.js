import express from 'express';
import fileUpload from 'express-fileupload';
import path from 'path';
const __dirname = path.resolve();
import routes from './routes/index.js';
import connectDB from '../config/db.js';

const app = express();
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join('client', 'tmp'),
    createParentPath: true,
    limits: { fileSize: 1024 * 1024 * 1024 },
  })
);
connectDB();

app.set('views', './client');
app.set('view engine', 'ejs');

routes(app);

const port = process.env.PORT || 3000;
console.log(`Server Running on port ${port}`);
const server = app.listen(port);
export default server;
