const Discussion = require('../../models/discussionModel');

const incrementViewCount = async (req, res) => {
    try {
        const { postId } = req.params;
    
        // Find the post
        const post = await Discussion.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
    
        // Increment the view count
        post.viewCount += 1;
        await post.save();
    
        res.status(200).json({ message: 'View count updated successfully', viewCount: post.viewCount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = incrementViewCount;
