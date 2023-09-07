        const { hashPassword, comparePass } = require("../helper/hashPassword");
        const { UserModel } = require("../models/userModel");
        const jwt = require("jsonwebtoken");
        require("dotenv").config();

        const userRegistration = async (req, res) => {
        try {
            const { first_name, last_name, email, password, role } = req.body;
            if (!first_name) res.status(200).send({ message: "Enter first name" });
            if (!last_name) res.status(200).send({ message: "Enter last name" });
            if (!email) res.status(200).send({ message: "Enter Email id" });
            if (!password) res.status(200).send({ message: "Enter Password" });
            const existing_email = await UserModel.findOne({ email });
            if (existing_email) {
            res.status(200).send({
                message: "Email id already registered with Ajio",
            });
            }
            const hashedpassword = await hashPassword(password);
            const user = new UserModel({
            first_name,
            last_name,
            email,
            password: hashedpassword,
            role,
            });
            await user.save();
            res.status(200).send({
            message: "User Registered Successfully!",
            err: false,
            status: 200,
            });
        } catch (err) {
            console.log(err);
            res.status(200).send({
            message: "User Registration failed!",
            err: false,
            status: 400,
            });
        }
        };

        const userLogin = async (req, res) => {
        try {
            const { email, password } = req.body;
            const checkUser = await UserModel.findOne({ email });
            if (!checkUser) {
            res.status(400).send({
                status: 400,
                message: "User not found!, please Register",
                err: false,
            });
            } else {
            const match = await comparePass(password, checkUser.password);
            if (!match) {
                res.status(400).send({
                message: "Invalid Password!",
                err: false,
                status: 400,
                });
            } else {
                let token = jwt.sign(
                { userId: checkUser._id, role: checkUser.role },
                process.env.SecretKey
                );
                res.status(200).send({
                message: "Login Successful!",
                err: false,
                status: 200,
                token,
                first_name: checkUser.first_name,
                last_name: checkUser.last_name,
                role: checkUser.role,
                email: checkUser.email,
                userId: checkUser._id,
                });
            }
            }
        } catch (err) {
            res.send({
            message: "Login failed!",
            });
        }
        };

        const getUser = async (req, res) => {
        const {page}=req.query
        const skip = (page - 1) * 5;
        try {
            let users = await UserModel.find({role:"user"}).skip(skip).limit(5);
            let total = await UserModel.countDocuments({role:"user"});
            res.status(200).send({
            message: "Users",
            users,
            total,
            });
        } catch (err) {
            res.send({
            message: "something went wrong!",
            err: true,
            err,
            status: 400,
            });
        }
        };


        module.exports = {
        userRegistration,
        userLogin,
        getUser,
        };
