import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/LoginSignupDbFYP", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Signup DB connected");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error.message);
  });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,

})

const User = new mongoose.model("User", userSchema)


//routes

app.post("/login", (req, res) => {
    const {email, password} = req.body
    User.findOne({email: email})
        .then(user => {
            if(user){
                if(password === user.password){
                    res.send({message: "Login Succesful!", user:user})
                } else {
                    res.send({message: "Password didn't match!"})
                }
            }else {
                res.send({message: "User not registered"})
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({message: "Internal server error"});
        });
});


app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
  
    User.findOne({ email: email })
      .then((user) => {
        if (user) {
          res.send({ message: "User already registered!" });
        } else {
          const user = new User({
            name,
            email,
            password,
          });
          user.save().then(() => {
            res.send({ message: "Successfully registered, Please Login now." });
          });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error" });
      });
  });
  

app.listen(9002, () => {
    console.log("BE started at 9002")
})


