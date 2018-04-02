import * as API from './index'

describe('API', () => {
  describe('postLoginUser', () => {
    let email
    let password

    beforeEach(() => {
      email = 'will@turing.io'
      password = 'password'
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({email})
      }))
    })

    it('should call fetch with the correct params', () => {
      const expected = [
        "http://localhost:3000/users", 
        {
          body: JSON.stringify({email, password}),
          headers: {
            "Content-Type": "application/json"
          }, 
          method: "POST"
        }
      ]

      API.postLoginUser(email, password)
      expect(window.fetch).toHaveBeenCalledWith(...expected)
    })

    it('should return an object if the status code is ok', async () => {
      const expected = {email}
      await expect(API.postLoginUser(email, password)).resolves.toEqual(expected)
    })

    it('should throw an error if the status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 404
      }))
      const expected = new Error('Errored with status code 404')
      await expect(API.postLoginUser(email, password)).rejects.toEqual(expected)
    })
  })
})
