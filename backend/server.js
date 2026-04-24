const express = require('express');
const cors = require('cors');
const socket = require('socket.io');
const mongoose = require('mongoose');
require('dotenv').config();

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

const app = express();

const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Festival API is running' });
});

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

const io = socket(server, {
  cors: {
    origin: CLIENT_URL,
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('New socket!', socket.id);
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: '404 not found...' });
});

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});

db.on('error', (err) => console.log('Error ' + err));
