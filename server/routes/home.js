import express from 'express';

import homeController from '../controllers/index.js';

const router = express.Router();

const { homeMessage } = homeController;

router.get('/', homeMessage);

export default router;
