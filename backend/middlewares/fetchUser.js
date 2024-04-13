const jwt = require('jsonwebtoken');
const JWT_KEY = 'AnuragPatel1234';
const fetchUser = (req, res, next)=>{
const token = req.header('auth-token');
if(!token){
    res.status(401).send({error : "Authentication failed!!"});
}
try {
    const data = jwt.verify(token, JWT_KEY);
req.user = data.user;
next();
} catch (error) {
    res.status(401).send({error : "Authentication failed!!"});
}
}

module.exports = fetchUser;