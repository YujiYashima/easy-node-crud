const mongoose = require("mongoose");

const CRUDSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    completed: Boolean,
    created_at: {
        type: Date,
        default: Date.now
    },
});

const CRUD = mongoose.model("CRUD", CRUDSchema);

module.exports = CRUD;