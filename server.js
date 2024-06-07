const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection");
const router = require("./routes/userRoute");
const discussionRouter = require('./routes/disussionRoute');


// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection
connectDb();

// Routes
app.use('/api/users', router); // Mount the user router
app.use('/api/discussions', discussionRouter); // Mount the discussion router
// Error handling middleware

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
