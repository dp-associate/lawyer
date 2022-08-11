const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
// passwordComplexity().validate("aPassword123");

const complexityOptions = {
	min: 8,
	max: 30,
	lowerCase: 1,
	
	numeric: 1,
  }; 

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity(complexityOptions).required().label("Password"),
	});
	return schema.validate(data);
};




module.exports = { User, validate };

