const Discussion = require('../../models/discussionModel');
const User = require('../../models/userModel');

const createDiscussion = async (req, res) => {
    try {
        const { userId, text, image } = req.body;

        // Validate that the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create the discussion
        const newDiscussion = new Discussion({
            user: userId, // Convert userId to ObjectId
            textfield: text, // Assuming text is provided as 'text' in the request body
            image: image ? image.url : null // Assuming 'image' is provided as an object with a 'url' property
        });

        // Save the discussion
        await newDiscussion.save();

        // Return the newly created discussion data
        res.status(201).json({
            discussionId: newDiscussion.id,
            userId: newDiscussion.user,
            text: newDiscussion.textfield,
            imageUrl: newDiscussion.image
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = createDiscussion;
