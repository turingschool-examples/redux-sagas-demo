import request from 'supertest'
import app from '../app'

describe('API', () => {
  it('should return an error if there is an invalid request', async () => {
    const response = await request(app).post('/users')
                                       .send({email: 'wvmitchell@gmail.com', password: 'notApassword'})
    expect(response.statusCode).toBe(404)
    expect(response.body).toEqual({error: 'Not authorized'})
  })

  it('should return a user if the send password is ok', async () => {
    const response = await request(app).post('/users')
                                       .send({email: 'wvmitchell@gmail.com', password: 'password'})
    expect(response.body).toEqual({id: 0, email: 'wvmitchell@gmail.com'})
  })
})
