const Discussion = require('../../models/commentModel');

const likeDiscussion = async (req, res) => {
    try {
        const { postId } = req.params;
    
        // Find the post
        const post = await Discussion.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
    
        // Add the user's ID to the post's likes array
        post.likes.push(req.user.id); // Assuming authenticated user's ID is available in req.user.id
        await post.save();
    
        res.status(201).json({ message: 'Post liked successfully', post });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = likeDiscussion;
