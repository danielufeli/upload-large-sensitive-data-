import express from 'express';
import fileUpload from 'express-fileupload';

const app = express();


const port = process.env.PORT || 3000;
console.log(`Server Running on port ${port}`);
const server = app.listen(port);
export default server;
