const { Schema, model } = require("mongoose");

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: "Thought text is Required",
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // get: (createdAtVal) => dateFormat(createdAtVal),
  },
  username: {
    type: String,
    required: "Username is Required",
  },
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
