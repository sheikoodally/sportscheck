import express from 'express';
const router = express.Router();
import auth from '../controllers/authController.ts';

// Example route: POST /api/v1/auth/register
router.get('/sign-in', auth.signIn);

// Use export default instead of module.exports
export default router;