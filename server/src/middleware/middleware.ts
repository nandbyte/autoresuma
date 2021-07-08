import { Request , Response , NextFunction} from "express";
import { validationResult } from "express-validator";
// rename to valid error
class Middleware{

	handleValidationError(req : Request , res : Response){

		const error = validationResult(req);

		if(!error.isEmpty()){
			return res.json(error.array()[0]);
		}


	}

}

export default new Middleware();
