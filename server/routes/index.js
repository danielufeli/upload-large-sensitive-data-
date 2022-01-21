import bodyParser from 'body-parser';
import home from './home.js';

export default (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/', home);
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
