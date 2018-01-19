const mongoose = require('mongoose');
const _ = require('lodash');
const MongoClient = require('mongodb');

const {app} = require('./../server');

var GrocerySchema = new mongoose.Schema({
	user: {
		type: String,
		required: false,
	},
	name: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	amount: {
		type: Number,
		require: true,
	},
	price: {
		type: Number,
		require: false
	}
}, 
{
	usePushEach: true
});

var Grocery = mongoose.model('Grocery', GrocerySchema);
