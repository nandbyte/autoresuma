"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class UserValidator {
    checkUserCreate() {
        return [
            express_validator_1.body('firstName')
                .notEmpty()
                .withMessage("This value should not be empty"),
            express_validator_1.body('lastName')
                .notEmpty()
                .withMessage("This value should not be empty"),
            express_validator_1.body('email')
                .notEmpty()
                .isEmail()
                .withMessage("This value should be a valid mail id"),
        ];
    }
    checkReadAUser() {
    }
}
exports.default = new UserValidator();
