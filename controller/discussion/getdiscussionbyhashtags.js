const Discussion = require('../../models/discussionModel');

const getDiscussionsByTags = async (req, res) => {
    try {
        const { tags } = req.query;

        // Split the tags string into an array
        const tagArray = tags.split(',');

        // Find discussions containing the specified tags
        const discussions = await Discussion.find({ hashtags: { $in: tagArray } });

        res.json({ discussions });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = getDiscussionsByTags;
