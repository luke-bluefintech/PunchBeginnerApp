import { useState, useEffect } from "react";
import axios from "axios";
import Pledge from "../pledge/Pledge";
import './ViewProject.css';

function ViewProject() {

    const [showPledge, setShowPledge] = useState(false);

    const instance = axios.create({
        baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
    }
    );

    let project = "default";

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
    }


    const sampleProject = {
        name: "Big Fork",
        description: "Funding for Sophie's big fork.",
        goal: "500 dollars",
        genre: "Startup",
        creator: "Sophia Cheng",
        deadline: "Tomorrow"
    };

    const fetchProject = (project) => {
        let data = { "designer_email": "luke.c.foley@gmail.com", "project_name": project };
        console.log("about to fetch project : " + project);
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
        fetchProject(ViewProject.project);
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
            {/* NOT NEEDED YET <button className="pledgebutton-vp" onClick={() => setShowPledge(true)} type="pledge">Pledge</button>*/}
        </div>
    );

    return (
        <div>
            {showPledge ? <Pledge /> : viewproject}
        </div>
    )
};

export default ViewProject;