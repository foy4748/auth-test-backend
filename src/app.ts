import cors, { CorsOptions } from 'cors';
import express, { Application, Request, Response } from 'express';
import globalRoutes from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandlers';
import cookieParser from 'cookie-parser';

const app: Application = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const corsOptions: CorsOptions = {
  origin: [
    'https://auth-test-frontend.vercel.app',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

// App Routes
app.use('/api', globalRoutes);

app.get('/', (_: Request, res: Response) => {
  res.send({ success: true, message: 'Server is UP and RUNNING' });
});

app.use(globalErrorHandler);

export default app;
