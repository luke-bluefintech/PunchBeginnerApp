import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

const instance = axios.create({
    baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
}
);

function Login(props) {

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
        <div className="container">
            <label for="uname"><b>Username</b><br></br></label>
            <input id="email-input" type="text" placeholder="Enter Username:" name="uname" required />

            <label for="psw"><b><br></br>Password<br></br></b></label>
            <input id="pswd" type="password" placeholder="Enter Password:" name="psw" required />

            <label>
                <br></br><input type="checkbox" name="remember" />
                <a>Remember me?<br></br></a>
            </label>

            <button type="login" onClick={() => {
                // Make API Call with email and password
                verifyAccount();
                // Check if call was 200 or 400

            }}>Login</button>
            <br></br>
            <button type="login" onClick={() => {
                // Make API Call with email and password
                verifyAdminAccount();
                // Check if call was 200 or 400

            }}>Admin Login</button>

            <label for="new"><b><br></br>New User?<br></br></b></label>
            <button type="register" onClick={() => createAccount()}>Register Account</button>
        </div>
    )
}
export default Login;