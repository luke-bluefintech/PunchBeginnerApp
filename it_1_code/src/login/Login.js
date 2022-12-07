import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

const instance = axios.create({
    baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
}
);

function Login(props) {

    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();

    const email = createContext();

    const verifyAccount = () => {
        let email = document.getElementById("email-input").value;
        let password = document.getElementById("pswd").value;
        instance.post("/designer/login", { "designer_email": email, "designer_password": password })
            .then(function (response) {
                props.setEmail(email);
                props.setPassword(password);
                navigate("/dashboard");
            })
            .catch(function (error) {
                window.alert("Error logging in as a designer. Please check your username and password.");
                console.log(error);
            })
    }

    const verifyAdminAccount = () => {
        let password = document.getElementById("pswd").value;
        instance.post("/admin/login", { "admin_password": password })
            .then(function (response) {
                props.setPassword(password);
                navigate("/admindashboard");
            })
            .catch(function (error) {
                window.alert("Error logging in as an admin. Please check your username and password.");
                console.log(error);
            })
    }

    const createAccount = () => {
        let email = document.getElementById("email-input").value;
        let password = document.getElementById("pswd").value;
        instance.post("/designer/register", { "designer_email": email, "designer_password": password })
            .then(function (response) {
                console.log(response);
                props.setEmail(email);
                props.setPassword(password);
                window.alert("Account has been registered!");
            })
            .catch(function (error) {
                window.alert("Error creating account. Please enter a valid email and check the password restrictions.");
                console.log(error);
            })
    }

    return (
        <div>
            <div className="split left">
                <div className="color-pink"></div>
                <i className="logo-title">PunchBeginner</i>
                <div className="welcome-back">Welcome Back</div>
                <div className="thank-you">Thank you for using the site that powers startups, small businesses, and projects alike.</div>
            </div>
            <div className="split right">
                <div className="login-container">
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
                    <br></br>
                    <label className="entry-label login-label">Login</label>
                    <br></br><br></br><br></br><br></br><br></br>
                    <label className="entry-label">Email</label>
                    <br></br>
                    <input id="email-input" type="text" placeholder="Enter Your Email" name="uname" required />
                    <br></br>
                    <label className="entry-label">Password</label>
                    <br></br>
                    <input id="pswd" type={showPassword ? "password" : "text"} placeholder="Enter Your Password" name="psw" required />
                    {showPassword ?
                        <i className="bi bi-eye-slash input-password-eye" onClick={() => { setShowPassword(false) }} /> :
                        <i className="bi bi-eye input-password-eye" onClick={() => { setShowPassword(true) }} />}

                    <br></br>

                    <button className="login" type="login" onClick={() => {
                        // Make API Call with email and password
                        verifyAccount();
                        // Check if call was 200 or 400

                    }}>Login</button>
                    <br></br>
                    <button className="special-login" type="login" onClick={() => {
                        // Make API Call with email and password
                        verifyAdminAccount();
                        // Check if call was 200 or 400

                    }}>Admin Login</button>

                    <button className="special-login" type="register" onClick={() => createAccount()}>Register</button>
                    <div className="copy-right">Created by team L’étoile du Nord</div>
                </div>
            </div>
        </div>
    )
}
export default Login;