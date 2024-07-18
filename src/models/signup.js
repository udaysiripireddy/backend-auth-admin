const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signupSchema = new Schema({
  emailId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, {
  timestamps: true
});

const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;
