const User = require('../../models/userModel');

const findUserByName = async (req, res) => {
    try {
        const { name } = req.params; // Assuming name is passed as a request parameter

        // Find the user by the specified name
        const user = await User.findOne({ name });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the found user
        res.json({name:user.name, mobileNo: user.mobileNo,email:user.email});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = findUserByName;
