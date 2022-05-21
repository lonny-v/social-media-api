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
    .post(createThought);

router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    // 
    .put(updateThought)
    .delete(removeThought)
    .post(addReaction)
    .delete(removeReaction)

router
    .route('/thoughts/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)


router.route('/:userId/:thoughtId/:reactionId');