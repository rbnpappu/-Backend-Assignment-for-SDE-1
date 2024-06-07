const User = require('../../models/userModel')


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, 'name mobileNo email');
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = getAllUsers