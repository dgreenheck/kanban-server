const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  name: String
});

listSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('List', listSchema);