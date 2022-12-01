import { useState } from "react";
import axios from "axios";
import Dashboard from "../dashboard/Dashboard";
import NewProject from "../newproject/NewProject";
import Register from "../register/Register";
import ViewProject from "../viewproject/ViewProject";
import './Login.css';

const instance = axios.create({
    baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
}
);

function Login() {

    const [showDashboard, setShowDashboard] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const verifyAccount = () => {
        let email = document.getElementById("email-input").value;
        instance.post("/designer/login", { "designer_email": email, "designer_password": "Secure123!" })
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

    const createAccount = () => {
        let email = document.getElementById("email-input").value;
        instance.post("/designer/register", { "designer_email": email, "designer_password": "Secure123!" })
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

    const login = (
        <div>
            <label for="uname"><b>Username</b><br></br></label>
            <input id="email-input" type="text" placeholder="Enter Username:" name="uname" required />

            <label for="psw"><b><br></br>Password<br></br></b></label>
            <input type="password" placeholder="Enter Password:" name="psw" required />

            <label>
                <br></br><input type="checkbox" name="remember" />
                <a>Remember me?<br></br></a>
            </label>

            <button type="login" onClick={() => {
                // Make API Call with email and password
                verifyAccount();
                // Check if call was 200 or 400

            }}>Login {showDashboard}</button>
            <br></br>
            <button type="login" onClick={() => {
                // Make API Call with email and password
                verifyAccount();
                // Check if call was 200 or 400

            }}>Admin Login {showDashboard}</button>

            <label for="new"><b><br></br>New User?<br></br></b></label>
            <button type="register" onClick={() => createAccount()}>Register Account</button>
        </div>
    );

    return (
        <div className="container">
            {showDashboard ? false : showRegister ? false : login}
            {showDashboard ? <Dashboard /> : null}
            {/*{showRegister ? <Register /> : null}*/}
        </div>
    )
}

export default Login;