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

    document.body.style.height = '0';

    const email = createContext();

    const verifySupporterAccount = () => {
        let email = document.getElementById("email-input").value;
        let password = document.getElementById("pswd").value;
        instance.post("/supporter/login", { "supporter_email": email, "supporter_password": password })
            .then(function (response) {
                props.setEmail(email);
                props.setPassword(password);
                props.setAccType("supporter");
                console.log(email + "   " + password);
                navigate("/supporterdashboard");
            })
            .catch(function (error) {
                window.alert(error.response.data.error);
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
                props.setAccType("designer");
                navigate("/dashboard");
            })
            .catch(function (error) {
                window.alert(error.response.data.error);
                console.log(error);
            })
    }

    const verifyAdminAccount = () => {
        let password = document.getElementById("pswd").value;
        instance.post("/admin/login", { "admin_password": password })
            .then(function (response) {
                props.setEmail(document.getElementById("email-input").value);
                props.setPassword(password);
                props.setAccType("admin");
                navigate("/admindashboard");
            })
            .catch(function (error) {
                window.alert(error.response.data.error);
                console.log(error);
            })
    }

    return (
        <div>
            {props.setEmail("")}
            <div className="split left">
                <div className="color-pink"></div>
                <i className="logo-title">PunchBeginner</i>
                <div className="welcome-back">Welcome Back</div>
                <div className="thank-you">
                Special thanks to Professor Heineman for all that he has done for us throughout the term; he enabled a truly unique
                and exciting experience for all of us, and we are so grateful for all his hard work to make the course possible.</div>
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
                    <button className="login" type="login" onClick={() => {
                        navigate("/register");
                    }}>Click Here To Register</button>
                    <div className="copy-right">Powered by team L’étoile du Nord</div>
                </div>
            </div>
        </div>
    )
}
export default Login;