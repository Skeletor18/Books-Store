const {Router} = require('express')
const {genresControllers} = require('../controllers/genres.controller')
const router = Router()

router.post('/genres',genresControllers.postGenres)
router.delete('/genres',genresControllers.deleteGenres)
router.get('/genres',genresControllers.getGenres)

module.exports = router