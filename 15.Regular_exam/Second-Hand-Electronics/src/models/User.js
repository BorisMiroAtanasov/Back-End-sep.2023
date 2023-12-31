const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const userSchema = new mongoose.Schema({

    username:{type: String, required: true},
    email: {type: String, required: true, unique :true},
    password: {type: String, required: true},
});

// userSchema.path('email').validate(function (emailInput) {
//     const email = mongoose.model("User").findOne({email: emailInput});
//     return !!email
// }, "Email already exists!")

userSchema.virtual('repeatPassword').set(function (value) {
    // console.log(value);
    // console.log(this.password);
if(value !== this.password){
    throw new Error("Password missmatch")
}

});

userSchema.pre("save", async function(){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash
})

const User = mongoose.model("User", userSchema);

module.exports = User;