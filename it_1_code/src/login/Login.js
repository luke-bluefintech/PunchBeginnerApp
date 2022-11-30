import './Login.css';

function Login() {
    return (
        <div className="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username:" name="uname" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password:" name="psw" required />

            <label>
                <input type="checkbox" name="remember" />
                <a>Remember me?<br></br></a>
            </label>

            <button type="submit">Login</button>

            <label for="new"><b><br></br>New User?<br></br></b></label>
            <button type="register">Register Here</button>
        </div>
    )
}

export default Login;