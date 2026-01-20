/**
 * server.js - Robust Express (ES Modules version)
 */

// 1. Load Environment Variables (Modern concise syntax)
import 'dotenv/config';

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

// 2. Import Routes 
// NOTE: The '.js' extension is mandatory in ES Modules for local files
import authRoute from './routes/authRoute.ts'; 

const app = express();
const PORT = process.env.PORT || 3000;

// --- 3. Middleware ---
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// --- 4. Routes ---
// This mounts your auth routes at /api/v1/auth
app.use('/api/auth', authRoute);

app.get('/health', (req, res) => {
  return res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// --- 5. Error Handling ---
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} using ES Modules`);
});