const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Secret key for signing JWT tokens
const JWT_SECRET = process.env.secret_key;

// Function to generate JWT token
function generateToken(user) {
    return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
}

// Function to verify JWT token
function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}

// Function to hash a password
async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

// Function to compare a password with its hash
async function comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
}

module.exports = {
    generateToken,
    verifyToken,
    hashPassword,
    comparePassword
};
