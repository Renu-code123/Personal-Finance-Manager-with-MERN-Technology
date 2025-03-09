import mongoose from "mongoose";
import validator from "validator";

// User Schema Model - (Name, email, password, creation Date) with validation rules
//new mongoose.Schema({feild1:{type:dtype,contraint:value},feild2:{type:dtype,contraint:value}})
//CREATE TABLE USER(name varchar(25) notnull)
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique : true,
        validate : validator.isEmail,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength : [6, "Password Must Be Atleast 6 characters"],
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    avatarImage: {
        type: String,
        default: ""
    },
    transactions: {
        type: [],
    },
    createdAt: {
        type:Date,
        default: Date.now,
    },
});

const User = mongoose.model("User", userSchema);

export default User;
