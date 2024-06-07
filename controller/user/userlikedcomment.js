const Comment = require('../../models/commentModel');

const likeComment = async (req, res) => {
    try {
        const { commentId } = req.params;
    
        // Find the comment
        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
    
        // Add the user's ID to the comment's likes array
        comment.likes.push(req.user.id); // Assuming authenticated user's ID is available in req.user.id
        await comment.save();
    
        res.status(201).json({ message: 'Comment liked successfully', comment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = likeComment;
