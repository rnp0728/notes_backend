const express = require('express');
const router = express.Router();
const Note = require('./../models/Note');

router.post('/list', async (req, res) => {
    const notes = await Note.find({ userId: req.body.userId });
    res.json(notes);
});

router.post('/add', async (req, res) => {
    const newNote = new Note(
        {
            id: req.body.id,
            userId: req.body.userId,
            title: req.body.title,
            content: req.body.content,
        }
    );
    await newNote.save();
    const response = { message: "New note created " + `id : ${req.body.id}` };
    res.json(response);
});

router.post('/update', async (req, res) => {
    await Note.deleteOne({ id: req.body.id });

    const newNote = new Note(
        {
            id: req.body.id,
            userId: req.body.userId,
            title: req.body.title,
            content: req.body.content,
        }
    );
    await newNote.save();
    const response = { message: "Note Updated " + `id : ${req.body.id}` };
    res.json(response);
});

router.post('/delete', async (req, res) => {
    // res.json(req.body);
    await Note.deleteOne({ id: req.body.id });

    const response = { message: "Note Deleted " + `id : ${req.body.id}` };
    res.json(response);
});

module.exports = router;