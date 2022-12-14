import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './ViewProject.css';

function ViewProject(props) {

    const instance = axios.create({
        baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
    }
    );

    const navigate = useNavigate();

    const deleteProject = () => {
        let email = props.email;
        let project = props.project;
        instance.post("/designer/project/delete", { "designer_email": email, "project_name": project })
            .then(function (response) {
                console.log(response);
                //document.getElementsByClassName()
                window.alert("Project has been deleted!");
                navigate("/dashboard");
            })
            .catch(function (error) {
                window.alert("Error deleting project.");
                console.log(error);
            })
    }

    const deletePledge = (pledge_uid) => {
        let email = props.email;
        let pledge = pledge_uid;
        instance.post("/designer/pledge/delete", { "designer_email": email, "pledge_uid": pledge })
            .then(function (response) {
                console.log(response);
                window.alert("Pledge has been deleted!");
                navigate("/dashboard/viewproject");
            })
            .catch(function (error) {
                window.alert("Error deleting pledge.");
                console.log(error);
            })
    }

    const fillData = (projectData) => {
        var element = document.getElementsByClassName("data"), index;
        for (index = element.length - 1; index >= 0; index--) {
            element[index].parentNode.removeChild(element[index]);
        }
        // Project Name
        var projectName = document.getElementById("project-name");
        projectName.innerHTML = projectData.project_name;

        //projectName.appendChild(projectNameTxt);
        //Project Description
        var projectDesc = document.getElementById("project-description");
        projectDesc.innerHTML = projectData.project_description;
        // Goal
        var projectGoal = document.getElementById("project-goal");
        const fundAmt = (Math.round(projectData.project_funded * 100) / 100).toFixed(2);
        const goalAmt = (Math.round(projectData.project_goal * 100) / 100).toFixed(2);
        projectGoal.innerHTML = `\$${fundAmt}/\$${goalAmt}`;

        var projectGoalStatus = document.getElementById("project-goal-status");
        if (fundAmt >= goalAmt) {
            projectGoalStatus.innerHTML = "Fully funded!";
        } else {
            projectGoalStatus.innerHTML = "Not fully funded";
        }
        // Genre
        var projectGenre = document.getElementById("project-genre");
        projectGenre.innerHTML = projectData.project_type;
        // Creator
        var projectCreator = document.getElementById("project-creator");
        projectCreator.innerHTML = projectData.designer_name;
        // Deadline
        var projectDeadline = document.getElementById("project-deadline");
        projectDeadline.innerHTML = projectData.project_deadline;

        var directSupp = document.getElementById("direct-supports");
        directSupp.innerHTML = projectData.direct_supports;

        projectData.project_pledges.forEach(pledge => {
            // Creating the Row
            var tr = document.createElement("tr");
            tr.className = "data";
            //tr.title = pledge.pledge_uid;
            // Creating the Cells
            var pledgeDescription = document.createElement("td");
            pledgeDescription.className = "data";
            var maxSupporters = document.createElement("td");
            maxSupporters.className = "data";
            var amount = document.createElement("td");
            amount.className = "data";
            var pledgeSupporters = document.createElement("td");
            pledgeSupporters.className = "data";
            // Creating the Text in the Cells
            
            pledgeDescription.innerText = pledge.pledge_description;

            let maxSuppValue = pledge.pledge_max_supporters;
            if (maxSuppValue == 0) {
                maxSuppValue = "Unlimited";
            }
            var maxSupportersTxt = document.createTextNode(maxSuppValue);

            const pledgeAmt = (Math.round(pledge.pledge_amount * 100) / 100).toFixed(2);
            var amountTxt = document.createTextNode(`\$${pledgeAmt}`);

            var supportersTxt = pledge.supporter_emails;
            if (supportersTxt === undefined) {
                supportersTxt = "";
            }
            pledgeSupporters.innerText = supportersTxt;

            var btn = document.createElement('input');
            btn.type = "button";
            btn.className = "delete-btn";
            btn.value = "Delete";
            btn.onclick = () => {
                deletePledge(pledge.pledge_uid);
            };
            // Getting the Table
            var pledgeTable = document.getElementById("pledge-table");
            // Appending the Text to the Cells

            //pledgeDescription.appendChild(pledgeDescriptionTxt);
            maxSupporters.appendChild(maxSupportersTxt);
            amount.appendChild(amountTxt);
            //pledgeSupporters.appendChild(pledgeSupportersTxt);
            // Appending the Cells to the Row
            tr.appendChild(pledgeDescription);
            tr.appendChild(maxSupporters);
            tr.appendChild(amount);
            tr.appendChild(pledgeSupporters);
            if (!projectData.project_launched) {
                tr.appendChild(btn);
            }
            // Appending the Row to the Table
            pledgeTable.appendChild(tr);
        });
    }

    const fetchProject = () => {
        let data = { "designer_email": props.email, "project_name": props.project };
        instance.post("/designer/project/view", data)
            .then(function (response) {
                console.log(response);
                document.getElementById("create-pledge-btn").hidden = response.data.project.project_launched;
                document.getElementById("delete-project-btn").hidden = response.data.project.project_launched;
                
                fillData(response.data.project)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchProject();
    });

    return (
        <div className="info-div" style={{ marginTop: "8%" }}>
            <div className="vp-split vp-left">
                <br></br>
                <label className="label-text">Project Name: </label>
                <div id="project-name"></div>
                <br></br>
                <label className="label-text">Description: </label>
                <div id="project-description"></div>
                <br></br>
                <label className="label-text">Goal: </label>
                <div id="project-goal"></div>
                <div id="project-goal-status"></div>
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
                <button className="action-button" type="login" id="delete-project-btn" hidden onClick={() => deleteProject()}>Delete Project</button>
                <br></br><br></br><br></br><br></br>
            </div>

            <div className="vp-split vp-right">
                <div className="login-container">
                    <button className="action-button" id="create-pledge-btn" type="login" hidden onClick={() => {
                        navigate("/dashboard/viewproject/createpledge");
                    }}>Create Pledge</button>
                    <button className="action-button" type="login" onClick={() => {
                        navigate("/dashboard");
                    }}>Return to Dashboard</button>
                    <br></br>

                    <table id="pledge-table" className="center">
                        <tr className="title-row">
                            <th>Pledge Description</th>
                            <th>Max Supporters</th>
                            <th>Amount</th>
                            <th>Supporters</th>
                            <th>Delete Pledge</th>
                        </tr>
                    </table>
                    <br /><br />
                    <label className="label-text">Direct Supporters:</label>
                    <div id="direct-supports"></div>
                </div>
            </div>
        </div>
    )
};

export default ViewProject;