import './MeetTheTeam.css';

function MeetTheTeam(props) {
    return (
        <div className="mtt-container">
            <div className="profile-image-border">
                <img className="profile-image" src="https://iteration1code.s3.us-east-2.amazonaws.com/Profile_Ilana.JPG" alt="Ilana" />
            </div>
            <div className="profile-image-border">
                <img className="profile-image" src="https://iteration1code.s3.us-east-2.amazonaws.com/Profile_Lili.JPG" alt="Lili" />
            </div>
            <div className="profile-image-border">
                <img className="profile-image" src="https://iteration1code.s3.us-east-2.amazonaws.com/Profile_Luke.JPG" alt="Luke" />
            </div>
            <div className="profile-image-border">
                <img className="profile-image" src="https://iteration1code.s3.us-east-2.amazonaws.com/Profile_Robbie.JPG" alt="Robbie" />
            </div>
            <div className="profile-image-border">
                <img className="profile-image" src="https://iteration1code.s3.us-east-2.amazonaws.com/Profile_Sophie.JPG" alt="Sophie" />
            </div>
        </div>
    );
}

export default MeetTheTeam;