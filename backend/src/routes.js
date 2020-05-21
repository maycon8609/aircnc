const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/sessionController')
const SpotController = require('./controllers/spotController')
const dashboardController = require('./controllers/dashboardController')
const bookingController = require('./controllers/bookingController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store)

routes.get('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)

routes.get('/dashboard', dashboardController.show)

routes.post('/spots/:spot_id/bookings', bookingController.store)

module.exports = routes