const {Router} = require('express')
const {reviewControllers} = require('../controllers/review.controller')
const router = Router()

router.post('/review/books/:id',reviewControllers.postReview)
router.delete('/review/:id',reviewControllers.deleteReview)
router.get('/review/books/:id',reviewControllers.getReview)

module.exports = router