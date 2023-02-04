const express = require('express')
const {
    getAllTourse,
    getTour,
    createTour,
    updateTour,
    deleteTour,
    aliasTopTours,
    getTourStats,
    getMonthltPlan
} = require('../controllers/tourController')
const router = express.Router()

router
    .route('/top-5-cheap')
    .get(aliasTopTours, getAllTourse)

router
    .route('/tour-stats')
    .get(getTourStats)

router
    .route('/monthly-plan/:year')
    .get(getMonthltPlan)

router
    .route('/')
    .get(getAllTourse)
    .post(createTour)

router
    .route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour)

module.exports = router