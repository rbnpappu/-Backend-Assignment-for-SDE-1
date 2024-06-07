const Discussion = require('../../models/commentModel');
const Comment = require('../../models/commentModel'); // Import the Comment model

const commentdiscussion = async (req, res) => {
    try {
        const { text } = req.body;
        const { postId } = req.params;
    
        // Find the post
        const post = await Discussion.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
    
        // Create the comment
        const comment = new Comment({
            text,
            post: postId,
            user: req.user.id // Assuming authenticated user's ID is available in req.user.id
        });
    
        // Save the comment
        await comment.save();
    
        // Add the comment to the post's comments array
        post.comments.push(comment);
        await post.save();
    
        res.status(201).json({ message: 'Comment added successfully', comment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = commentdiscussion;
