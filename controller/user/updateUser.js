const User = require('../../models/userModel');

const updateUser = async (req, res) => {
    try {
        const { field, value } = req.params; // Assuming field and value are passed as request parameters
        const { name, mobileNo, email } = req.body;

        // Find the user by the specified field and value
        let user = await User.findOne({ [field]: value });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user fields
        if (name) user.name = name;
        if (mobileNo) user.mobileNo = mobileNo;
        if (email) user.email = email;

        // Save the updated user
        await user.save();

        // Return a JSON response with only the specified fields
        res.json({ name: user.name, mobileNo: user.mobileNo, email: user.email });
    } catch (err) {
        res.status(500).json({ message: err.message, requestBody: req.body });
    }
}

module.exports = updateUser;


module.exports = updateUser;
