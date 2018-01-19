var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI);
var promise = mongoose.connect('mongodb://localhost:27017/PantryOrganizer', {
	useMongoClient: true
});

module.exports = {mongoose};