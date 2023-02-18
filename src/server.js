const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const app = express();
const Note = require('./models/Note');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Mongo DB connection

const mongoDbPath = 'mongodb+srv://rnp0728:rnp0728@cluster00.sgahmst.mongodb.net/notesdb';
mongoose.connect(mongoDbPath, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(function () {
    app.get('/', (req, res) => {
      const response = { statuscode: res.statusCode, message: "API works Fine..." };
      res.json(response);
    });

    app.get('/notes/list', async (req, res) => {
      const notes = await Note.find();
      res.json(notes);
    });
    const noteRouter = require('./routes/Notes');
    app.use("/notes", noteRouter);

    app.listen(PORT, () => {
      console.log('Server Started at PORT : ' + PORT);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB database', error);
  });
