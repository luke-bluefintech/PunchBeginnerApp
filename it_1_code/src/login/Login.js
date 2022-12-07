import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

const instance = axios.create({
    baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
});

function Login(props) {

    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();

    const email = createContext();

    const verifySupporterAccount = () => {
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

    const verifyDesignerAccount = () => {
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
                    <label className="login-label">Login</label>
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
                    <div className="no-account">Don't have an account? <a href={"/register"}>Sign up</a></div>
                    <br></br>

                    <button className="login" type="login" onClick={() => {
                        verifySupporterAccount();
                    }}>Login</button>
                    <br></br>
                    <button className="special-login" type="login" onClick={() => {
                        verifyDesignerAccount();
                    }}>Designer Login</button>
                    <button className="special-login" type="login" onClick={() => {
                        verifyAdminAccount();
                    }}>Admin Login</button>
                    <div className="copy-right">Powered by team L’étoile du Nord</div>
                </div>
            </div>
        </div>
    )
}
export default Login;