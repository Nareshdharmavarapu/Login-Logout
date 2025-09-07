
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS: Only ONE use, and it must allow your deployed frontend
app.use(cors({
  origin: 'https://login-logout-ppyf.vercel.app',
  credentials: true
}));

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Session config: production-ready
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,              // ✅ must be true on HTTPS (Render)
    sameSite: 'none'           // ✅ required for cross-origin cookies
  }
}));

// ✅ Routes
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.get('/api/test', (req, res) => {
  res.json({ success: true, message: 'API test route is working!' });
});

app.use('/api', authRoutes);

// ✅ Listen on provided port (Render sets it via env var)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
