import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();
const port = 8000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/artists');
app.use('/albums');
app.use('/tracks');
app.use('/users');
app.use('/track_history');

const run = async () => {

  app.listen(port, () => {
    console.log(`Server started on ${port} port`);
  });

  process.on('exit', () => {
    mongoose.disconnect();
  });
};

run().catch((e) => console.error(e));