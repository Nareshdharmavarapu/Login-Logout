const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // secure: true in production with HTTPS
}));

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.get('/api/test', (req, res) => {
  res.json({ success: true, message: 'API test route is working!' });
});


app.use('/api', authRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
