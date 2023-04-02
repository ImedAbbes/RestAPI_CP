const router = require('express').Router()
const userController = require('../Controllers/userController')

router.get('/get',userController.getUser)
router.post('/add',userController.addUser)
router.put('/update',userController.updateUser)
router.delete('/delete',userController.deleteUser)

module.exports = router
