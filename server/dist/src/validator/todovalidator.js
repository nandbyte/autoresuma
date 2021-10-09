"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const message_id = "The value should be UUID 4";
const message_title = "The value should be UUID 4";
const message_completed = "This should be boolean";
class TodoValidator {
    checkCreateTodo() {
        return [
            express_validator_1.body('id')
                .optional()
                .isUUID()
                .withMessage(message_id),
            express_validator_1.body('title')
                .notEmpty()
                .withMessage(message_title),
            express_validator_1.body('completed')
                .optional()
                .isBoolean()
                .withMessage(message_completed)
                .isIn([0, false])
                .withMessage('The value should be 0 or false'),
        ];
    }
    checkReadTodo() {
        return [
            express_validator_1.query('limit')
                .notEmpty()
                .withMessage('The query limit should not be empty')
                .isInt({ min: 1, max: 10 })
                .withMessage("This limit value should be number and between 1-10"),
            express_validator_1.query('offset')
                .optional()
                .isNumeric()
                .withMessage('This value should be number'),
        ];
    }
    checkIdParam() {
        return [
            express_validator_1.param('id')
                .notEmpty()
                .withMessage('The value should not be empty')
                .isUUID(4)
                .withMessage('The value should be UUID 4'),
        ];
    }
}
exports.default = new TodoValidator();
