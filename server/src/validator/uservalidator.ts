import {body, param , query } from 'express-validator';

class UserValidator{
	checkUserCreate(){
		return[
			body('firstName')
				.notEmpty()
				.withMessage("This value should not be empty"),
			body('lastName')
				.notEmpty()
				.withMessage("This value should not be empty"),
			body('email')
				.notEmpty()
				.isEmail()
				.withMessage("This value should be a valid mail id"),

		];
	}

	checkReadAUser(){

	}
}

export default new UserValidator();
