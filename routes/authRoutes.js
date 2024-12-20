import express from 'express';
import { signup, login, profile } from '../controllers/authController.js';
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);  
router.post('/login', login);    
router.get('/profile', verifyToken, profile); 

export default router;
