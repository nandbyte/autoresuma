import jwt from 'jsonwebtoken'

const generateToken = (id:string) => {
  return jwt.sign({ id }, "secret", {
    expiresIn: '30d',
  })
}

export default generateToken
