require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { testConnection } = require('./config/db');
const app = express();

app.use(express.json());

const corsOptions = {
  origin: process.env.FRONTEND_URL || `http://localhost:3000`,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
console.log(process.env.FRONTEND_URL);

app.use(cors(corsOptions));

app.use('/api', routes);

testConnection();

module.exports = app;