console.log("🔥 You are running app.js");

const express = require('express');
const path = require('path');
require('dotenv').config();
const connectDB = require('./config/db');
const logger = require('./middleware/logger');

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes from route files
//app.use('/', require('./routes/index'));
app.use('/', require('./routes/auth'));
app.use('/explore', require('./routes/explore'));
app.use('/virtual-tours', require('./routes/virtualTours'));
app.use('/itinerary', require('./routes/itinerary'));
app.use('/chatbot', require('./routes/chatbot'));
app.use('/', require('./routes/airecommendation')); 
app.use('/', require('./routes/startPlanning'));

app.use('/', require('./routes/index'));


// // ✅ Your startPlanning route
// app.get('/startPlanning', (req, res) => {
//   console.log("✅ /startPlanning route hit");
//   res.render('startPlanning.ejs', { title: 'Plan Your Journey' });
// });

app.get('/test-page', (req, res) => {
  console.log("✅ /test-page route hit");
  res.render('test'); // will look for views/test.ejs
});

// Set global title fallback
app.use((req, res, next) => {
  res.locals.title = "Travel India Hub";
  next();
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at: http://localhost:${PORT}`);
});
