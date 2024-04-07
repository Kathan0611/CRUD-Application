// roleMiddleware.js

// Define roles (this can be stored in a database or retrieved from another source)
const roles = {
    admin: ['admin', 'manager'],
    manager: ['manager'],
    user: ['user']
};

// Middleware function to check role authorization
function authorize(role) {
    return (req, res, next) => {
        const userRole = req.user.role; // Assuming role information is attached to the request object

        // Check if the user has the required role
        if (!roles[role] || !roles[role].includes(userRole)) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        // User has the required role, proceed to the next middleware or route handler
        next();
    };
}

module.exports = authorize;
