const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
    .route('/users')
    .get(getAllUser)
    .get(getUserById)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser);;

router
    .route('/:userId/friends/:friendsId')
    .post(addFriend)
    .delete(removeFriend)

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    
    

module.exports = router;