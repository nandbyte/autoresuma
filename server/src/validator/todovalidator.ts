import { body , param , query } from "express-validator";

const message_id = "The value should be UUID 4";
const message_title = "The value should be UUID 4";
const message_completed = "This should be boolean";

class TodoValidator{

	checkCreateTodo(){
		return[
			body('id')
				.optional()
				.isUUID()
				.withMessage(message_id),
			body('title')
				.notEmpty()
				.withMessage(message_title),
			body('completed')
				.optional()
				.isBoolean()
				.withMessage(message_completed)
				.isIn([0,false])
				.withMessage('The value should be 0 or false'),


		];
	}


 	checkReadTodo()  {

		return[
			query('limit')
				.notEmpty()
				.withMessage('The query limit should not be empty')
				.isInt({min: 1, max: 10})
				.withMessage("This limit value should be number and between 1-10"),
			query('offset')
				.optional()
				.isNumeric()
				.withMessage('This value should be number'),
		];
	}

	checkIdParam(){

		return [
			param('id')
				.notEmpty()
				.withMessage('The value should not be empty')
				.isUUID(4)
				.withMessage('The value should be UUID 4'),
		];
	}

}

export default new TodoValidator();
