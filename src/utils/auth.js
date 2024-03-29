const jwt = require('jsonwebtoken')

exports.auth = (req, res, next) => {
  try {
    const { authorization } = req.headers
    if(!authorization) {
      throw new Error('Su sesión expiró, ingrese nuevamente')
    }
    const [_, token] = authorization.split(' ')
    if(!token) {
      throw new Error('Su sesión expiró, ingrese nuevamente')
    }
    
    const { userId } = jwt.verify(token, process.env.SECRET)

    req.user = {
      userId
    }
    
    next()
  } catch(error) {
    res.status(401).json({ message: 'Su sesión expiró', error })
  }
}