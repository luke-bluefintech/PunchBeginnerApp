import { useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import Register from "../register/Register";
import './Login.css';

function Login() {

    const [showDashboard, setShowDashboard] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    return (
        <div className="container">
            <div style={{ visibility: showDashboard ? 'hidden' : showRegister ? 'hidden' : 'visible' }}>
                <label for="uname"><b>Username</b><br></br></label>
                <input type="text" placeholder="Enter Username:" name="uname" required />

                <label for="psw"><b><br></br>Password<br></br></b></label>
                <input type="password" placeholder="Enter Password:" name="psw" required />

                <label>
                    <br></br><input type="checkbox" name="remember" />
                    <a>Remember me?<br></br></a>
                </label>

                <button type="login" onClick={() => setShowDashboard(true)}>Login {showDashboard}</button>

                <label for="new"><b><br></br>New User?<br></br></b></label>
                <button type="register" onClick={() => setShowRegister(true)}>Register Here</button>
            </div>
            {showDashboard ? <Dashboard /> : null}
            {showRegister ? <Register /> : null}
        </div>
    )
}

export default Login;