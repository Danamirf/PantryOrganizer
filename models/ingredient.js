const mongoose = require('mongoose');
const _ = require('lodash');
const MongoClient = require('mongodb');

const {app} = require('./../server');

var IngredientSchema = new mongoose.Schema({
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
	}
}, 
{
	usePushEach: true
});


var Ingredient = mongoose.model('Ingredient', IngredientSchema);
	
module.exports = {Ingredient};