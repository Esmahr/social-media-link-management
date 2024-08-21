const mongoose = require('mongoose');

const SocialMediaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('SocialMedia', SocialMediaSchema);
