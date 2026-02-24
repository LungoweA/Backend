import usersModel from '../model/UsersModel.js'

class UsersController {
 
  verifyUserId(req, res, next, id) {
    try {
      req.userId = usersModel.verifyUserId(id)
      next()
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const users = await usersModel.getAllUsers()
      res.json(users)
    } catch (error) {
      next(error)
    }
  }

  async addUser(req, res, next) {
    try {
      const user = req.body
      const id = await usersModel.addUser(user)
      res.status(201).json({ id })
    } catch (error) {
      next(error)
    }
  }

  async updateUser(req, res, next) {
    try {
      const user = req.body
      const success = await usersModel.updateUser(req.userId, user)
      if (success) res.json(user)
      else res.status(404).json({ error: 'User not found' })
    } catch (error) {
      next(error)
    }
  }

  async deleteUser(req, res, next) {
    try {
      const success = await usersModel.deleteUser(req.userId)
      if (success) res.status(204).end()
      else res.status(404).json({ error: 'User not found' })
    } catch (error) {
      next(error)
    }
  }

}

export default new UsersController()
