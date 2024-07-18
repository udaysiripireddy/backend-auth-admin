const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const signupRoutes = require('./routes/signupRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect('mongodb+srv://udaysiripireddy7:udaysiripireddy7@cluster0.xurauls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
  
app.use(bodyParser.json());

app.use('/api', signupRoutes);
app.use('/api', registrationRoutes);
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
