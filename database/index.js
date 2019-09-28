const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://emilyyang:skye@anthropologie-zc4az.mongodb.net/anthro?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('DB connected')
});

const productSchema = new mongoose.Schema({
  category: String,
  color: String,
  title: String,
  image1: String,
  image2: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
