const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// JWT authentication
const JWT_KEY = 'AnuragPatel1234';
const fetchUser = require('../middlewares/fetchUser');

// Router 1 for sign up
router.post('/SignUp', [
   body('emailId', 'Enter a valid email').isEmail(),
   body('factoryName', 'Enter a valid Factory Name').isLength({ min: 3 }),
   body('password', 'Enter a strong password of minimum 5 characters').isLength({ min: 5 })], async (req, res) => {
      let success = false;
      //If there are errors return bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ success, errors: errors.array() });
      }

      // check whether email is already in use
      try {
         let user = await User.findOne({ emailId: req.body.emailId });
         if (user) {
            return res.status(400).json({ success, error: 'Email already in use' });
         }
         // password hashing is being done using salt and hash --- bcryptjs
         const salt = await bcrypt.genSalt(10);
         const secPass = await bcrypt.hash(req.body.password, salt);


         // new user is being created
         user = await User.create({
            factoryName: req.body.factoryName,
            emailId: req.body.emailId,
            password: secPass, // Password secured --- secret Password stored in db
         });
         // JWT Auth token
         const data = {
            user:
            {
               id: user.id
            }
         }
         const authToken = jwt.sign(data, JWT_KEY);
         success = true;
         res.json({success, authToken });
      }
      catch (error) {
         console.error(error.message);
         res.status(500).send("Some error occured");
      }

   }) // closing bracket 7 and 10


   // Router 2 for login
// Create a login window using Post "/api/auth/login"
router.post('/Login', [
   body('emailId', 'Enter a valid email').isEmail(),
   body('password', 'Password field cannot be empty').exists(),
], async (req, res) => {
   let success = false;
   //If there are errors return bad request and errors
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
   }

   const { emailId, password } = req.body;
   try {
      let user = await User.findOne({ emailId });
      if (!user) {
         return res.status(400).json({success, error: "Bad credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
         return res.status(400).json({success, error: "Bad credentials" });
      }
      const data = {
         user:
         {
            id: user.id
         }
      }
      success = true;
      const authToken = jwt.sign(data, JWT_KEY);
      res.json({success, authToken });
   }
   catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Serve Error!!");
   }
// Route3 : get logged in user details using Post "/api/auth/calculations"...login required
try {
   
} catch (error) {
   console.error(error.message);
   res.status(500).send("Internal Serve Error!!");
}

}
)
 

// Router 3 for getting user : get loggedin user details
router.post('/getUser', fetchUser, async (req, res) => {
try{
   const userId= req.user.id;
const user = await User.findById(userId).select("-password");
res.send(user);
}catch (error) {
   console.error(error.message);
   res.status(500).send("Internal Serve Error!!");
}
})
module.exports = router