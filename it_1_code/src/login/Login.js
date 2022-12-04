import { useState, createContext } from "react";
import axios from "axios";
import Dashboard from "../dashboard/Dashboard";
import AdminDashboard from "../admindashboard/AdminDashboard";
import NewProject from "../newproject/NewProject";
import Register from "../register/Register";
import ViewProject from "../viewproject/ViewProject";
import App from "../App";
import './Login.css';

const instance = axios.create({
    baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
}
);

function Login() {

    const [showDashboard, setShowDashboard] = useState(false);
    const [showAdminDashboard, setShowAdminDashboard] = useState(false);

    const email = createContext();

    const verifyAccount = () => {
        let email = document.getElementById("email-input").value;   
        let password = document.getElementById("pswd").value;
        instance.post("/designer/login", { "designer_email": email, "designer_password": password })
            .then(function (response) {
                var url = window.location.href;
                url = url.substring(0, url.length - 6);
                url += "/dashboard/rpoleynick@wpi.edu";
                window.location.href = url;
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const verifyAdminAccount = () => {
        let password = document.getElementById("pswd").value;
        instance.post("/admin/login", { "admin_password": password })
            .then(function (response) {
                AdminDashboard.password = password;
                setShowAdminDashboard(true);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const createAccount = () => {
        let email = document.getElementById("email-input").value;
        let password = document.getElementById("pswd").value;
        instance.post("/designer/register", { "designer_email": email, "designer_password": password })
            .then(function (response) {
                console.log("This is the response: ");
                console.log(response);
                Dashboard.email = email;
                setShowDashboard(true);
            })
            .catch(function (error) {
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

            }}>Login {Dashboard.showDashboard}</button>
            <br></br>
            <button type="login" onClick={() => {
                // Make API Call with email and password
                verifyAdminAccount();
                // Check if call was 200 or 400

            }}>Admin Login {AdminDashboard.showAdminDashboard}</button>

            <label for="new"><b><br></br>New User?<br></br></b></label>
            <button type="register" onClick={() => createAccount()}>Register Account</button>
        </div>
    )
}
export default Login;