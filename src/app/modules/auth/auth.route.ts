import express from 'express';
import { CLoginUser, CTestProtectedRoute } from './auth.controller';
import authentication from '../../middlewares/authentication';
const router = express.Router();

router.post('/login', CLoginUser);
router.get('/', authentication(), CTestProtectedRoute);
router.get('/public', CTestProtectedRoute);

export default router;
