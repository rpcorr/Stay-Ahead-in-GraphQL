import mongoose from 'mongoose';

async function connectMongo() {
  try {
    await mongoose.connect('mongodb://localhost/widgets');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
}

connectMongo();

const widgetSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  soldout: String,
  inventory: String,
  stores: Array,
});

const Widgets = mongoose.model('widgets', widgetSchema);

export { Widgets };
