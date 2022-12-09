import { useNavigate } from "react-router-dom";
import './MeetTheTeam.css';

function MeetTheTeam(props) {

    const navigate = useNavigate();

    return (
        <div className="mtt-container">
            <br /><br /><br />
            <div className="profile-box">
                <div className="profile-image-border">
                    <img className="profile-image" src="https://iteration1code.s3.us-east-2.amazonaws.com/Profile_Ilana.JPG" alt="Ilana" />
                </div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div className="developer-data">
                    <br /><br />
                    <label>Name: Ilana Whittaker</label><br /><br />
                    <label>Major: Computer Science</label><br /><br />
                    <label>LinkedIn: </label>
                    <a target="_blank" href="https://www.linkedin.com/in/ilana-whittaker-132505204/">https://www.linkedin.com/in/ilana-whittaker-132505204/</a>
                </div>
            </div>
            <div className="profile-box">
                <div className="developer-data data-right">
                    <br /><br />
                    <label>Name: Lili Loughlin</label><br /><br />
                    <label>Major: Robotics Engineering</label><br /><br />
                    <label>LinkedIn: </label>
                    <a target="_blank" href="https://www.linkedin.com/in/liliana-loughlin-839175218/">https://www.linkedin.com/in/liliana-loughlin-839175218/</a>
                </div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div className="profile-image-border picture-right">
                    <img className="profile-image" src="https://iteration1code.s3.us-east-2.amazonaws.com/Profile_Lili.JPG" alt="Lili" />
                </div>
            </div>
            <div className="profile-box">
                <div className="profile-image-border">
                    <img className="profile-image" src="https://iteration1code.s3.us-east-2.amazonaws.com/Profile_Luke.JPG" alt="Luke" />
                </div><br />
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div className="developer-data">
                    <br />
                    <label>Name: Luke Foley</label><br /><br />
                    <label>Major: Computer Science</label><br /><br />
                    <label>LinkedIn: </label>
                    <a target="_blank" href="https://www.linkedin.com/in/luke-foley-9006ba205/">https://www.linkedin.com/in/luke-foley-9006ba205/</a>
                </div>
            </div>
            <div className="profile-box">
                <div className="developer-data data-right">
                    <br /><br />
                    <label>Name: Robbie Oleynick</label><br /><br />
                    <label>Major: Electrical and Computer Engineering and Computer Science</label><br /><br />
                    <label>LinkedIn: </label>
                    <a target="_blank" href="https://www.linkedin.com/in/rpoleynick/">https://www.linkedin.com/in/rpoleynick/</a>
                </div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div className="profile-image-border picture-right">
                    <img className="profile-image" src="https://iteration1code.s3.us-east-2.amazonaws.com/Profile_Robbie.JPG" alt="Robbie" />
                </div>
            </div>
            <div className="profile-box">
                <div className="profile-image-border">
                    <img className="profile-image" src="https://iteration1code.s3.us-east-2.amazonaws.com/Profile_Sophie.JPG" alt="Sophie" />
                </div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div className="developer-data">
                    <br /><br />
                    <label>Name: Sophia Cheng</label><br /><br />
                    <label>Major: Mechanical and Robotics Engineering</label><br /><br />
                    <label>LinkedIn: </label>
                    <a target="_blank" href="https://www.linkedin.com/in/sophia-cheng-a70769193/">https://www.linkedin.com/in/sophia-cheng-a70769193/</a>
                </div>
            </div>
            <button className="mtt-action-button" type="login" onClick={() => {
                navigate("/dashboard");
            }}>Return to Dashboard</button>
        </div>
    );
}

export default MeetTheTeam;