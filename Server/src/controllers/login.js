const users = require('../utils/users')


const login = (req,res) => {
  const {email, password} = req.query;

  const userValid = users.find((user) => user.email === email && user.password === password)
  
  return userValid 
  ? res.json({access: true})
  : res.status(403).json({access: false, message: 'User or Password incorrect'})  

  // if (userValid){
  //   return res.json({access: true})
  // } return res.json({access: false})
}

module.exports = login;