const uri = 'mongodb+srv://sample_user:sample123@cluster0.xig4s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
const mongoose = require('mongoose');
const User = require('./models/User'); // Assuming you have a User model defined

// /workspaces/Beyondthewall/back-end/LoginValidation.js

async function validateLogin(username, password) {
    const errors = {};

    if (!username || username.trim() === '') {
        errors.username = 'Username is required';
    }

    if (!password || password.trim() === '') {
        errors.password = 'Password is required';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(errors).length > 0) {
        return {
            isValid: false,
            errors
        };
    }

    try {
        const user = await User.findOne({ email: username });
        if (!user) {
            errors.username = 'Username does not correspond to any team leader';
        } else {
            const expectedPassword = `Xplore@${user.teamName}`;
            if (password !== expectedPassword) {
                errors.password = 'Password is incorrect';
            }
        }
    } catch (err) {
        errors.general = 'An error occurred during validation';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}
module.exports = validateLogin;