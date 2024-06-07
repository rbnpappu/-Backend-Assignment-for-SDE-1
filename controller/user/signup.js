const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../../models/userModel');

const addUser = async (req, res) => {
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, mobileNo, email, password } = req.body;
        
        // Check if the mobile number or email is already registered
        const existingUser = await User.findOne({ $or: [{ mobileNo }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Mobile number or email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ name, mobileNo, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json ({ name: newUser.name, mobileNo: newUser.mobileNo, email: newUser.email });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = addUser;
