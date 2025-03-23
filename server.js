const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');
const doctorRoutes = require("./routes/doctorRoutes");
const shiftRoutes = require("./routes/shiftRoutes");




//dotenv config
dotenv.config();

connectDB();

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());


//routes
app.use('/api/admin', adminRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/shifts", shiftRoutes);

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'server running'
  })
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  )
})
