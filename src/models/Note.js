// Steps to build a Model

    // 1. Define Schema --> structure regarding the model (for Note model - id, userId, title, content, date added)
    // 2. Create Model using the schema --> provide model name & schema.

const mongoose = require('mongoose');

const noteSchema = mongoose.Schema(
    {
        id : {
            type: String,
            unique: true,
            required: true,
        },
        userId : {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        dateadded: {
            type: Date,
            default: Date.now,
        },
    }
);

module.exports = mongoose.model("Note" , noteSchema);

