import express from 'express';
import config from './config';

import BenefactorRouter from './routers/benefactor.routers';
const app = express();


app.set('port', config.port);

app.use(BenefactorRouter);

export default app;