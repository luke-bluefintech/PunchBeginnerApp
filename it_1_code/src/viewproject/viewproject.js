import { useState, useEffect } from "react";
import axios from "axios";
import Pledge from "../pledge/Pledge";
import Dashboard from "../dashboard/Dashboard";
import './ViewProject.css';
import CreatePledge from "../createpledge/CreatePledge";

function ViewProject() {

    const [showPledge, setShowPledge] = useState(false);
    const [showCreatePledge, setShowCreatePledge] = useState(false);
    const [showDashboard, setShowDashboard] = useState(false);

    const instance = axios.create({
        baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
    }
    );

    let project_name = "";
    let email = "";

    const fillData = (projectData) => {
        // Project Name
        var projectName = document.getElementById("project-name");
        var projectNameTxt = document.createTextNode(projectData.project_name);
        projectName.appendChild(projectNameTxt);
        //Project Description
        var projectDesc = document.getElementById("project-description");
        var projectDescTxt = document.createTextNode(projectData.project_description);
        projectDesc.appendChild(projectDescTxt);
        // Goal
        var projectGoal = document.getElementById("project-goal");
        var projectGoalTxt = document.createTextNode(projectData.project_goal);
        projectGoal.appendChild(projectGoalTxt);
        // Genre
        var projectGenre = document.getElementById("project-genre");
        var projectGenreTxt = document.createTextNode(projectData.project_type);
        projectGenre.appendChild(projectGenreTxt);
        // Creator
        var projectCreator = document.getElementById("project-creator");
        var projectCreatorTxt = document.createTextNode(projectData.designer_name);
        projectCreator.appendChild(projectCreatorTxt);
        // Deadline
        var projectDeadline = document.getElementById("project-deadline");
        var projectDeadlineTxt = document.createTextNode(projectData.project_deadline);
        projectDeadline.appendChild(projectDeadlineTxt);

        projectData.project_pledges.forEach(pledge => {
            // Creating the Row
            var tr = document.createElement("tr");
            // Creating the Cells
            var pledgeDescription = document.createElement("td");
            var maxSupporters = document.createElement("td");
            var amount = document.createElement("td");
            // Creating the Text in the Cells
            var pledgeDescriptionTxt = document.createTextNode(pledge.pledge_description);

            let maxSuppValue = pledge.pledge_max_supporters;
            if (maxSuppValue == 0) {
                maxSuppValue = "Unlimited";
            }
            var maxSupportersTxt = document.createTextNode(maxSuppValue);
            var amountTxt = document.createTextNode(pledge.pledge_amount);
            // Getting the Table
            var pledgeTable = document.getElementById("pledge-table");
            // Appending the Text to the Cells
            pledgeDescription.appendChild(pledgeDescriptionTxt);
            maxSupporters.appendChild(maxSupportersTxt);
            amount.appendChild(amountTxt);
            // Appending the Cells to the Row
            tr.appendChild(pledgeDescription);
            tr.appendChild(maxSupporters);
            tr.appendChild(amount);
            // Appending the Row to the Table
            pledgeTable.appendChild(tr);
        });
    }


    const sampleProject = {
        name: "Big Fork",
        description: "Funding for Sophie's big fork.",
        goal: "500 dollars",
        genre: "Startup",
        creator: "Sophia Cheng",
        deadline: "Tomorrow"
    };

    const fetchProject = () => {
        let data = { "designer_email": ViewProject.email, "project_name": ViewProject.project_name };
        console.log("about to fetch project : " + ViewProject.project_name);
        instance.post("/designer/project/view", data)
            .then(function (response) {
                console.log("RESPONSE");
                console.log(response)
                fillData(response.data.project)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        console.log("ViewProject : " + ViewProject.project);
        fetchProject();
    });

    const viewproject = (
        <div className="info-div">
            {/* img below will have src='url of project image' */}
            <img className='heading--logo' />
            <br></br>
            <label className="label-text">Project Name: </label>
            <div id="project-name"></div>
            <br></br>
            <label className="label-text">Description: </label>
            <div id="project-description"></div>
            <br></br>
            <label className="label-text">Goal: </label>
            <div id="project-goal"></div>
            <br></br>
            <label className="label-text">Genre: </label>
            <div id="project-genre"></div>
            <br></br>
            <label className="label-text">Creator: </label>
            <div id="project-creator"></div>
            <br></br>
            <label className="label-text">Deadline: </label>
            <div id="project-deadline"></div>
            <br></br>
            <table id="pledge-table" className="center">
                <tr>
                    <th>Pledge Description</th>
                    <th>Max Supporters</th>
                    <th>Amount</th>
                </tr>
            </table>
            <br></br>
            <button type="login" onClick={() => {
                CreatePledge.email = email;
                CreatePledge.project_name = ViewProject.project_name;
                setShowCreatePledge(true);
            }}>Create Pledge</button>
            <br></br>
            <button type="login" onClick={() => {
                Dashboard.email = email;
                setShowDashboard(true);
            }}>Return to Dashboard</button>
            {/* NOT NEEDED YET <button className="pledgebutton-vp" onClick={() => setShowPledge(true)} type="pledge">Pledge</button>*/}
        </div>
    );

    return (
        <div>
            {showDashboard ? <Dashboard /> : showCreatePledge ? <CreatePledge /> : viewproject}
        </div>
    )
};

export default ViewProject;