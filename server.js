const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv'); 
const seatRoutes = require('./routes/seatRoutes');
const cors = require('cors');

const app = express();
dotenv.config({
    origin:"*",
});


app.use(express.json());
app.use(cors());

// db connect
connectDB();


// routes
app.use('/api',seatRoutes);

// server
app.listen(5000,()=>{
    console.log(`server running on port 5000`)
});
