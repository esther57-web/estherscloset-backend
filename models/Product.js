const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  //imageUrl: { type: [String], required: true },
  category: { type: String, required: true }, 
  quantity: { type: Number, required: true },
  brand: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);