const { Schema, model } = require('mongoose');

const ResultSchema = Schema({
   id: {
      type: Number,
      require: true,
   },
   contenido: {
      type: String,
      require: true,
   },
   resultado: {
      type: String,
      require: true,
   }

});

ResultSchema.method('toJSON', function() {
   const { __v, _id, ...object } = this.toObject();
   object.id = _id.toString();
   return object;
});

module.exports = model( 'Result', ResultSchema );