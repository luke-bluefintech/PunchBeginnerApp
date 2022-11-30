import './Login.css';

function Login() {
    return (
        <div className="container">
            <label for="uname"><b>Username</b><br></br></label>
            <input type="text" placeholder="Enter Username:" name="uname" required />

            <label for="psw"><b><br></br>Password<br></br></b></label>
            <input type="password" placeholder="Enter Password:" name="psw" required />

            <label>
                <br></br><input type="checkbox" name="remember" />
                <a>Remember me?<br></br></a>
            </label>

            <button type="submit">Login</button>

            <label for="new"><b><br></br>New User?<br></br></b></label>
            <submitbutton type="register">Register Here</submitbutton>
        </div>
    )
}

export default Login;