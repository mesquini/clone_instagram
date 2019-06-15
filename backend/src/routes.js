const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')
const PostController = require('./controllers/PostControllers')
const LikeController = require('./controllers/LikeControllers')

const routes = new express.Router()
const upload = multer(uploadConfig)

routes.get('/', PostController.index)
routes.post('/posts', upload.single('image'), PostController.store)

routes.post('/:id/like', LikeController.store)


module.exports = routes