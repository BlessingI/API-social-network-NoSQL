const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThought);

router.route("/:userId").post(addThought);
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .post(addThought)
  .delete(removeThought)

router
  // /api/thoughts/:thoughtId/reactions
  .route("/:thoughtId/reactions")
  .post(addReaction);

// -- Directs to: /api/thoughts/:thoughtId/reactionId <DELETE>
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
