import express from 'express';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use('/public', express.static('public'));

//Routes
app.use('/api/songs', require('./routes/index'));
app.get('/*', (req, res) => res.sendFile(path.resolve('public/index.html')));

export default app;
