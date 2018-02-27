export const postLoginUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if(response.status === 200) {
      return await response.json()
    } else {
      throw(new Error('not authorized'))
    }
  } catch (err) {
    throw(err)
  }
}
