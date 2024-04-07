// userService.js

const User = require('./models/User'); // Assuming you have a User model

async function createUser(userData) {
    try {
        const newUser = new User(userData);
        await newUser.save();
        return newUser;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
}

async function getUserById(userId) {
    try {
        const user = await User.findById(userId);
        return user;
    } catch (error) {
        throw new Error('Error fetching user: ' + error.message);
    }
}

async function updateUser(userId, newData) {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, newData, { new: true });
        return updatedUser;
    } catch (error) {
        throw new Error('Error updating user: ' + error.message);
    }
}

async function deleteUser(userId) {
    try {
        await User.findByIdAndDelete(userId);
        return { message: 'User deleted successfully' };
    } catch (error) {
        throw new Error('Error deleting user: ' + error.message);
    }
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
