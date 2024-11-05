import express, { Router } from 'express';

import authRoutes from '../modules/auth/auth.route';

const globalRoutes = express.Router();

type TSingleRouteObj = {
  path: string;
  element: Router;
};

const routes: TSingleRouteObj[] = [
  {
    path: '/auth',
    element: authRoutes,
  },
];

routes.forEach((route) => globalRoutes.use(route.path, route.element));

export default globalRoutes;
