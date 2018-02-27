export const postLoginUser = async (email, password) => {
  try {
    const response = await fetch('localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify({email, password})
      headers: {
        "Content-Type": "application/json"
      }
    })
    return await response.json()
  } catch (err) {
    throw(err)
  }
}
