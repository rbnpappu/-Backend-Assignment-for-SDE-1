const Discussion = require('../../models/discussionModel');

const updateDiscussion = async (req, res) => {
    try {
        const { id } = req.params; // Assuming the discussion ID is passed as a request parameter
        const { textfield, image, hashtags } = req.body; // Assuming updated discussion fields are provided in the request body

        // Find the discussion by ID and update its fields
        let discussion = await Discussion.findByIdAndUpdate(id, {
            textfield: textfield,
            image: image,
            hashtags: hashtags
        }, { new: true });

        if (!discussion) {
            return res.status(404).json({ message: 'Discussion not found' });
        }

        res.json({ message: 'Discussion updated successfully', updatedDiscussion: discussion });
    } catch (err) {
        res.status(500).json({ message: err.message, requestBody: req.body });
    }
}

module.exports = updateDiscussion;
