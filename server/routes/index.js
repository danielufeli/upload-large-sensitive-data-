import express from 'express';
import cors from 'cors';
import home from './home.js';
import users from './users.js';
import uploads from './uploads.js';

export default (app) => {
  app.use(express.json({ extended: false }));
  app.use(cors());
  app.use('/', home);
  app.use('/api/v1/auth', users);
  app.use('/api/v1/upload', uploads);
  app.use((req, res, next) =>
    res
      .status(404)
      .json({ status: 'error', error: `Route '${req.url}' Not found.` })
  );
  app.use((req, res, next) =>
    res.status(500).json({
      status: 'error',
      error: 'An internal error occured an Administartor has been notified',
    })
  );
};
