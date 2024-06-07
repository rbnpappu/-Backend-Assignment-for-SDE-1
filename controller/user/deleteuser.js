const User = require('../../models/userModel');

const deleteUser = async (req, res) => {
    try {
        const { field, value } = req.params; // Assuming field and value are passed as request parameters

        // Find the user by the specified field and value
        let user = await User.findOneAndDelete({ [field]: value });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: `${user.name}'s data deleted successfully`, deletedUser: {name:user.name, email: user.email} });
    } catch (err) {
        res.status(500).json({ message: err.message, requestBody: req.body });
    }
}

module.exports = deleteUser;
