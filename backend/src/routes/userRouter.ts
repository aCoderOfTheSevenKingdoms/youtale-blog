import { Router } from 'express';

import { userSignup, userSignin, updateInfo } from '../controllers/userController.js';
import { inputValidationMiddleware, loginInputValidationMiddleware, updateInfoMiddleware } from '../middlewares/inputValidation.js';

const router = Router();

router.post('/signup', inputValidationMiddleware, userSignup);
router.post('/signin', loginInputValidationMiddleware, userSignin);
router.put('/', updateInfoMiddleware, updateInfo);

export default router;