import { useState } from "react";
import Login from "../login/Login";
import './Register.css';

function Register() {

    const [showLogin, setShowLogin] = useState(false);

    const register = (
        <div>
            <label for="fname"><b>First Name</b><br></br></label>
            <input type="text" name="fname" required />

            <label for="lname"><b><br></br>Last Name</b><br></br></label>
            <input type="text" name="lname" required />

            <label for="uname"><b><br></br>Enter Username</b><br></br></label>
            <input type="text" name="uname" required />

            <label for="psw"><b><br></br>Enter Password<br></br></b></label>
            <input type="password" name="psw" required />

            <label for="conpsw"><b><br></br>Confirm Password<br></br></b></label>
            <input type="password" name="conpsw" required />

            <signupbutton type="signup" onClick={() => setShowLogin(true)}>Sign Up</signupbutton>
        </div>
    );

    return (
        <div className="container">
            {showLogin ? <Login /> : register}
        </div>
    )
}

export default Register;