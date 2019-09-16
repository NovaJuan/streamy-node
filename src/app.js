import express from 'express';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';

if(process.env.NODE_ENV === 'development'){
    dotenv.config();
}

const app = express();

//Settings
app.set('port',process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());
app.use(cors());
app.use('/public',express.static("public"));

//Routes
import ApiRoutes from './routes/index';
app.use('/api/songs',ApiRoutes);
app.use('/*',(req,res)=>res.sendFile(path.resolve('public/index.html')));

export default app;