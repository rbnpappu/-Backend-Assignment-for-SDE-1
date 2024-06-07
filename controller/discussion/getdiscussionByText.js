const Discussion = require('../../models/discussionModel');

const getDiscussionsByText = async (req, res) => {
    try {
        const searchText = req.query.text; // Get the search text from query parameters

        // Use a regular expression to perform a case-insensitive search for discussions containing the text
        const discussions = await Discussion.find({ textfield: { $regex: searchText, $options: 'i' } });

        res.json({ discussions });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = getDiscussionsByText;
