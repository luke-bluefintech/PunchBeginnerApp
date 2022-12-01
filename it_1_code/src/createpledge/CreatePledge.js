import { useState, useEffect } from "react";
import axios from "axios";
import './CreatePledge.css';
import ViewProject from "../viewproject/ViewProject";

const instance = axios.create({
    baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
}
);

function CreatePledge() {

    const [showViewProject, setShowViewProject] = useState(false);

    let email = "";
    let project_name = "";

    const postNewPledge = () => {
        let data = {
            "project_name": CreatePledge.project_name,
            "designer_email": CreatePledge.email,
            "pledge_description": document.getElementById("reward").value,
            "pledge_max_supporters": document.getElementById("how-much").value,
            "pledge_amount": document.getElementById("max").value,
            };
        instance.post("/designer/pledge/create", data)
            .then(function (response) {
                // Set ViewProjects.project to the project name
                // Switch to project view
                ViewProject.email = CreatePledge.email;
                ViewProject.project_name = CreatePledge.project_name;
                setShowViewProject(true);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const createpledge = (
        <div>
            <label className="label-text">{CreatePledge.project_name}</label>
            <br></br>
            <label className="label-text">What do they get?: </label>
            <input id="reward" type="shorttext" name="goal" required />
            <br></br>
            <label className="label-text">How much: </label>
            <input id="how-much" type="shorttext" name="goal" required />
            <br></br>
            <label className="label-text">Max: </label>
            <input id="max" type="shorttext" name="goal" required />
            <br></br>
            <button type="login" onClick={() => {
                postNewPledge()
            }}>Submit</button>
        </div>
    );

    return (
        <div>
            {showViewProject ? <ViewProject /> : createpledge}
        </div>
    )

};

export default CreatePledge;