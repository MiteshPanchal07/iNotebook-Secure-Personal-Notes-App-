const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Notes');
const { body, validationResult } = require("express-validator");


//ROUTE:1 Get All the notes using: GET "api/notes/getuser". login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

//ROUTE:2 add a new node: POST "api/notes/addnote". login required
router.post('/addnote', fetchuser, [
    body("title", 'Enter a valid title').isLength({ min: 3 }),
    body("description", 'Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {

        const { title, description, tag } = req.body;

        //  if there are errors, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const saveNote = await note.save()

        res.json(saveNote);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

//ROUTE:3 Update an existing Note Using : PUT "api/notes/updatenote". login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        // Create a newnote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // find the note to be updated and update it 
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed");
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

//ROUTE:4 Delete an existing Note Using : DELETE "api/notes/deletenote". login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    // const { title, description, tag } = req.body;
    try {
        // find the note to be delete and update it 
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") }

        // allow deletetion only if user owns this Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed");
        }
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been Deleted!", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})


module.exports = router 