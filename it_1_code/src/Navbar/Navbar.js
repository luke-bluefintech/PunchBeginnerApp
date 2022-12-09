import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom";
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

function Navbar() {

    var userName = "Luke";

    const navigate = useNavigate();

    function MouseOver(event) {
        event.target.style.color = '#00B4E5';
    }

    function MouseOut(event) {
        event.target.style.color = "white";
    }

    return (
        <div className="navigation-wrapper">
            <div className="background-image"></div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar"
                style={{ backgroundColor: "rgba(42,87,131,1)" }}>
                <div className="content-container">
                    <i className="punch-beginner">PunchBeginner</i>
                    <div className="meet-the-team" onClick={() =>
                        navigate("/meet-the-team")
                    }>
                        <div className="mtt-text">Meet the Team</div>
                    </div>
                    <div className="nav-bar--dropdown">
                        <button
                            className="dropbtn"
                            onMouseOver={MouseOver}
                            onMouseOut={MouseOut}
                        >
                            <div className="button-content">
                                {userName + " "}
                                {<FontAwesomeIcon icon={faCaretDown} />}
                            </div>
                        </button>

                        <div
                            className="dropdown-content"
                            onMouseOver={MouseOver}
                            onMouseOut={MouseOut}
                        >
                            <a className="link-logout" >Sign Out</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;