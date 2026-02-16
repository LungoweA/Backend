import { app } from '../../src/express.js' 
import { expect } from 'chai';
import supertest from 'supertest'

const request = supertest(app)

describe('Tasks API Integration Tests', () => {
  
  describe('GET /api/v1/tasks', () => {
    it('should return an array of tasks', async () => {
      const res = await request.get('/api/v1/tasks')
      
      expect(res.status).to.equal(200)
      expect(res.body).to.be.an('array')
    })
  })

  describe('Error Handling for non-existent routes', () => {
    it('should return 404 with JSON for non-existent routes', async () => {
      const res = await request.get('/api/v1/completely-wrong')
      
      expect(res.status).to.equal(404)
      expect(res.body).to.have.property('message')
    })
  })
})
