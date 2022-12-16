import { useNavigate } from "react-router-dom";
import axios from "axios";
import './CreatePledge.css';

const instance = axios.create({
    baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
}
);

function CreatePledge(props) {

    const navigate = useNavigate();

    const postNewPledge = () => {
        let data = {
            "project_name": props.project,
            "designer_email": props.email,
            "pledge_description": document.getElementById("reward").value,
            "pledge_max_supporters": document.getElementById("how-much").value,
            "pledge_amount": document.getElementById("max").value,
        };
        instance.post("/designer/pledge/create", data)
            .then(function (response) {
                // Set ViewProjects.project to the project name
                // Switch to project view
                navigate("/dashboard/viewproject")
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div className="container">
            <label className="label-text">{props.project_name}</label>
            <br></br>
            <label className="label-text">What do they get?</label>
            <br></br>
            <input id="reward" type="shorttext" name="goal" required />
            <br></br>
            <label className="label-text">How much?</label>
            <br></br>
            <input id="how-much" type="shorttext" name="goal" required />
            <br></br>
            <label className="label-text">Maximum number?</label>
            <br></br>
            <input id="max" type="shorttext" name="goal" placeholder="Enter &quot;0&quot; or leave this secton blank for no maximum" />
            <br></br><br></br>
            <button className="cp-action-button" type="login" onClick={() => {
                postNewPledge()
            }}>Submit</button>
        </div>
    )

};

export default CreatePledge;