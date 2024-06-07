const express = require('express');
const router = express.Router();
const adduser = require('../controller/user/signup');
const getAllUsers = require('../controller/user/getAlluser');
const deleteUserById = require('../controller/user/deleteuser');
const updateUser = require('../controller/user/updateUser');
const findUserByName = require('../controller/user/finduserByname');
const likeComment = require('../controller/user/userlikedcomment');
const likereply = require('../controller/user/replycomment');
const login = require('../controller/user/loginuser');
const validateToken = require('../middleware/validateToken');

// Update user by ID
router.route('/:id').put(validateToken, updateUser);

// Delete user by ID
router.route('/:id').delete(validateToken, deleteUserById);

// Get user by name
router.route('/:name').get(validateToken, findUserByName);

// Like a reply
router.route('/replies/:id/like').post(validateToken, likereply);

// Like a comment
router.route('/comments/:id/like').post(validateToken, likeComment);

// User signup
router.route('/signup').post(adduser);

// User login
router.route('/login').post(login);

// Get list of users
router.route('/getlistofuser').get(validateToken, getAllUsers);

module.exports = router;
