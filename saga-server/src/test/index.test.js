import request from 'supertest'
import app from '../app'

describe('API', () => {
  it('should return hello world', async () => {
    const response = await request(app).get('/')
    expect(response.text).toEqual('Hello world!')
  })

  it('should return a user with id: 1', async () => {
    const response = await request(app).get('/users/1')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({id: 1, name: 'Will'})
  })

  it('should return an error if there is an invalid id', async () => {
    const response = await request(app).get('/users/t')
    expect(response.statusCode).toBe(404)
    expect(response.body).toEqual({error: 'Not found'})
  })

  it('should return a user if the send password is ok', async () => {
    const response = await request(app).post('/users')
                                       .send({email: 'wvmitchell@gmail.com', password: 'password'})
    expect(response.body).toEqual({id: 0, email: 'wvmitchell@gmail.com'})
  })
})
