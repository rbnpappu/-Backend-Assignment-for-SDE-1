
const Reply = require('../../models/ReplyModel'); // Import the Reply model

const reply = async (req, res) => {
    try {
        const { replyId } = req.params;
    
        // Find the reply
        const reply = await Reply.findById(replyId);
        if (!reply) {
            return res.status(404).json({ message: 'Reply not found' });
        }
    
        // Add the user's ID to the reply's likes array
        reply.likes.push(req.user.id); // Assuming authenticated user's ID is available in req.user.id
        await reply.save();
    
        res.status(201).json({ message: 'Reply liked successfully', reply });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = reply;
