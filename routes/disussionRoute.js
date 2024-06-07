const express = require('express');
const router = express.Router();
const createDiscussion = require('../controller/discussion/postdiscussion');
const updateDiscussion = require('../controller/discussion/updatediscussion');
const deleteDiscussion = require('../controller/discussion/deletediscussion');
const getDiscussionsByTags = require('../controller/discussion/getdiscussionbyhashtags');
const getDiscussionsByText = require('../controller/discussion/getdiscussionByText');
const commentdiscussion = require('../controller/discussion/commentdiscussion');
const likediscussion = require('../controller/discussion/likediscussion');
const viewcount = require('../controller/discussion/viewcount');
const validateToken = require('../middleware/validateToken');
// Route for creating a new discussion

router.post('/creatediscussion', validateToken, createDiscussion);
router.route('/:id').put(validateToken, updateDiscussion);

router.route('/:id').delete(validateToken, deleteDiscussion);
router.route('/:tag').get(validateToken, getDiscussionsByTags);
router.route('/:text').get(validateToken, getDiscussionsByText);
router.route('/:id/comment').post(validateToken, commentdiscussion);
router.route('/:id/like').post(validateToken, likediscussion);
router.route('/:id/increment-view-count').post(validateToken, viewcount);
module.exports = router;
