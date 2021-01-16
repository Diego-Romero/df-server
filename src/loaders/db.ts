import Mongoose from 'mongoose';

Mongoose.connect('mongodb://localhost/deepflow', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'DB CONNECTION ERROR'));
db.on('open', function () {
  console.log('DB connected successfully');
});
