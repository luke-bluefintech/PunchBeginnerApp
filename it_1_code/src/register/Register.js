import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Register.css';

const instance = axios.create({
    baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
});

function Register(props) {

    const [showLogin, setShowLogin] = useState(false);

    const navigate = useNavigate();

    const createAccount = () => {
        let email = document.getElementById("reg-email-input").value;
        let password = document.getElementById("reg-pswd").value;
        // Handles supporter login
        if (document.getElementById('supporter-account').checked) {
            instance.post("/supporter/register", { "supporter_email": email, "supporter_password": password })
                .then(function (response) {
                    console.log(response);
                    window.alert("Account has been registered!");
                    navigate("/login");
                })
                .catch(function (error) {
                    window.alert("Error creating account. Please enter a valid email and check the password restrictions.");
                    console.log(error);
                })
            // Handles designer login
        } else if (document.getElementById('designer-account').checked) {
            instance.post("/designer/register", { "designer_email": email, "designer_password": password })
                .then(function (response) {
                    console.log(response);
                    window.alert("Account has been registered!");
                    navigate("/login");
                })
                .catch(function (error) {
                    window.alert("Error creating account. Please enter a valid email and check the password restrictions.");
                    console.log(error);
                })
            // No box selected
        } else {
            window.alert("Please select one of the options for account type");
        }
    }

    return (
        <div className="reg-container">
            <div className="spacing-container" />
            <label className="top-label">Register</label><br></br><br></br><br></br><br></br><br></br><br></br>
            <label className="reg-entry-label" for="fname"><b>First Name</b></label><br></br>
            <input className="reg-text" type="text" name="fname" required /><br></br>

            <label className="reg-entry-label" for="lname"><b>Last Name</b></label><br></br>
            <input className="reg-text" type="text" name="lname" required /><br></br>

            <label className="reg-entry-label" for="uname"><b>Enter Email</b></label><br></br>
            <input className="reg-text" type="text" id="reg-email-input" name="uname" required /><br></br>

            <label className="reg-entry-label" for="psw"><b>Enter Password</b></label><br></br>
            <input className="reg-password" type="password" id="reg-pswd" name="psw" required /><br></br>

            <label className="reg-entry-label" for="conpsw"><b>Confirm Password</b></label><br></br>
            <input className="reg-password" type="password" name="conpsw" required /><br></br>

            <div className="please-choose">Please choose one of the following:
                <input type="radio" id="supporter-account" name="account" />
                <label className="checkbox-label" for="supporter-account"> Supporter Account </label>
                <input type="radio" id="designer-account" name="account" />
                <label className="checkbox-label" for="designer-account"> Designer Account </label></div>
            <button className="signupbutton" style={{ marginTop: "15px" }} type="signup" onClick={() => createAccount()}>Sign Up</button>
        </div>
    )
}

export default Register;