import {body, param} from "express-validator";

export const createTaskValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 5 })
    .withMessage("Description must be at least 5 characters")
];

export const updateTaskValidator = [
  param("id")
    .isMongoId()
    .withMessage("Invalid Task ID"),

  body("title")
    .optional()
    .trim()
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),

  body("description")
    .optional()
    .trim()
    .isLength({ min: 5 })
    .withMessage("Description must be at least 5 characters")
];

export const deleteTaskValidator = [
  param("id")
    .isMongoId()
    .withMessage("Invalid Task ID")
];

export const registerTaskValidator=[
     body("name")
        .notEmpty()
        .withMessage("Name is required"),
        body("email")
        .isEmail()
        .withMessage("Valid email required"),
    
        body("password")
        .isLength({min:6})
        .withMessage("Password must be at least 6 characters")
]

export const loginTaskValidator=[

        body("email")
        .isEmail()
        .withMessage("Valid email required"),
    
        body("password")
        .isLength({min:6})
        .withMessage("Password must be at least 6 characters")
]
