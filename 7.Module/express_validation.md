# Table of Contents

- [Express validation](#express-validation)

## Express validation

**Explanation:**

Express validation is a middleware for the Express.js framework that helps in validating and sanitizing user input. It ensures that the data coming into your application meets certain criteria before it is processed.

- [Express validation: docs](https://express-validator.github.io/docs)

**Key Concepts:**

1. **Middleware:** Functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
2. **Validation:** The process of ensuring that the data meets certain criteria.
3. **Sanitization:** The process of cleaning the data to prevent malicious input.

**Example:**

1. **Basic Validation:**

   ```js
   import { body, validationResult } from 'express-validator';

   app.post('/user', [
     body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
     body('email').isEmail().withMessage('Email must be valid')
   ], (req, res) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }
     res.send('User is valid');
   });
   ```

2. **Chained Validation:**

    ```js
    import { body, validationResult } from 'express-validator';

    app.post('/user', [
        body('password')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
        .matches(/\d/).withMessage('Password must contain a number')
    ], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        res.send('Password is valid');
    });
    ```

3. **Schema Validation using `checkSchema`:**

    ```js
    export const validate = (schema) => {
        return async (req, res, next) => {
        // Run all validation rules in the schema asynchronously
        await Promise.all(schema.map((validation) => validation.run(req)));

        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        // If there are validation errors, return a 400 response with the errors
        return res.status(400).json({ errors: errors.array() });
        }

        // If no errors, proceed to the next middleware or route handler
        next();
        };
    };

    import { checkSchema } from 'express-validator';

    export const userValidationSchema = checkSchema({
    username: {
        isLength: {
            options: { min: 6, max: 32 },
            errorMessage: 'Username must be at least 6 characters with a max of 32 characters',
        },
        notEmpty: {
            errorMessage: 'Username cannot be empty',
        },
        isString: {
            errorMessage: 'Username must be a string!',
        },
    },
    password: {
        isLength: {
            options: { min: 8, max: 128 },
            errorMessage: 'Password must be between 8 and 128 characters',
        },
        matches: {
            options: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&~#^_+=\-';,./|":<>?])[A-Za-z\d@$!%*?&~#^_+=\-';,./|":<>?]{8,128}$/,
            errorMessage: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
         },
        notEmpty: {
            errorMessage: 'Password cannot be empty',
        },
    },
    });

    import express from 'express';
    import { validationResult } from 'express-validator';

    const app = express();

    app.post('/register', validate(userValidationSchema), (req, res) => {
        res.send('User registration is valid');
    });

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
    ```

4. **Custom Validator:**

    ```js
    import { body, validationResult } from 'express-validator';

    app.post('/user', [
        body('age').custom(value => {
            if (value < 18) {
                throw new Error('Age must be at least 18');
            }
            return true;
        })
    ], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        res.send('Age is valid');
    });
    ```
