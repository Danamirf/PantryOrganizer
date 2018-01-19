const mongoose = require('mongoose');
const _ = require('lodash');
const MongoClient = require('mongodb');

const {Ingredient} = require('./ingredient')
const {app} = require('./../server');

var RecipeSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		trim: true,
		minLength: 1,
		unique: true,
		validate: {
			isAsync: false,
			validator: validator.isEmail,
			message: '{VALUE} is not a valid email'
		} 
	},
	password: {
		type: String,
		require: true,
		minLength: 6
	},
	ingredients: [
		Ingredient
	]
}, 
{
	usePushEach: true
});

var Recipe = mongoose.model('Recipe', RecipeSchema);
	
module.exports = {User};