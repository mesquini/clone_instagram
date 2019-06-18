const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')
const PostController = require('./controllers/PostControllers')
const LikeController = require('./controllers/LikeControllers')
const LoginController = require('./controllers/LoginControllers')

const routes = new express.Router()
const upload = multer(uploadConfig)

routes.get('/', PostController.index)
routes.post('/posts', upload.single('image'), PostController.store)

routes.post('/:id/like', LikeController.store)

routes.post('/login', LoginController.index)

module.exports = routes