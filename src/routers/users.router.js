const userRouter = require('express').Router()

const userController = require('../controllers/users.controller')

userRouter.get('/', userController.getAllUsers)
// userRouter.get('/:id')
// userRouter.post('/', )
// userRouter.patch('/', )
// userRouter.delete('/', )

module.exports = userRouter