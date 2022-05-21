const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction,
    getAllThoughts,
    getThoughtById,
    updateThought
} = require('../../controllers/thought-controller');

module.exports = router;

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

router
    .route('/')
    .get(getAllThoughts)
    .post(addThought)
    .post(addReaction)
    .delete(removeReaction)
    .get(getThoughtById);

router
    .route('/:userId/:thoughtId').put(updateThought).delete(removeThought)
    // 

router
    .route('/thoughts/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)


router.route('/:userId/:thoughtId/:reactionId');