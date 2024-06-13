const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  oldPrice: { type: String, required: true },
  newPrice: { type: String, required: false },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);