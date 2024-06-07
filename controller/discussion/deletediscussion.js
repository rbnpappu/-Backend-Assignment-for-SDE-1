const Discussion = require('../../models/discussionModel');

const deleteDiscussion = async (req, res) => {
    try {
        const { id } = req.params; // Assuming the discussion ID is passed as a request parameter

        // Find the discussion by ID and delete it
        let discussion = await Discussion.findByIdAndDelete(id);

        if (!discussion) {
            return res.status(404).json({ message: 'Discussion not found' });
        }

        res.json({ message: 'Discussion deleted successfully', deletedDiscussion: discussion });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = deleteDiscussion;
