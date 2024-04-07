const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json()); 


function validateUser(req, res, next) {
    // Define schema using Joi
    const schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    });

    // Validate request body against the schema
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // If validation passes, move to the next middleware
    next();
}

// Route handler with validation middleware
app.post('/api/users', validateUser, (req, res) => {
    // If validation passes, handle the request
    // Here you can assume that req.body is valid
    const { username, email, password } = req.body;
    // Example: create user in database
    res.send(`User created: ${username}, ${email}`);
});

// Example error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
