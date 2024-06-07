const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user with the provided email exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECERT, { expiresIn: '48h' });

        // Send the token to the client
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Email or Password is not valid' });
    }
}

module.exports = loginUser;