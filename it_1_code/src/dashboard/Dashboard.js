import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import './Dashboard.css';
import ViewProject from "../viewproject/ViewProject";
import NewProject from "../newproject/NewProject";
import Pledge from "../pledge/Pledge";
import $ from 'jquery';

const instance = axios.create({
    baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
}
);

function Dashboard() {

    const [showViewProject, setShowViewProject] = useState(false);
    const [showPledge, setShowPledge] = useState(false);
    const [showNewProject, setShowNewProject] = useState(false);

    let email = "a";

    const fillTable = (projects) => {
        var element = document.getElementsByClassName("dashboard-data"), index;
        for (index = element.length - 1; index >= 0; index--) {
            element[index].parentNode.removeChild(element[index]);
        }
        // Clear table?
        projects.forEach(project => {
            // Creating the Row
            var tr = document.createElement("tr");
            tr.onclick = () => {
                ViewProject.email = Dashboard.email;
                ViewProject.project_name = project.project_name;
                setShowViewProject(true);
            };
            tr.className = "dashboard-data";
            // Creating the Cells
            var projectName = document.createElement("td");
            projectName.className = "dashboard-data";
            var goalAmount = document.createElement("td");
            goalAmount.className = "dashboard-data";
            var amountReached = document.createElement("td");
            amountReached.className = "dashboard-data";
            // Creating the Text in the Cells
            var projectNameTxt = document.createTextNode(project.project_name);
            var goalAmountTxt = document.createTextNode(project.project_goal);
            var amountReachedTxt = document.createTextNode(project.project_funded);
            // Getting the Table
            var projectsTable = document.getElementById("projects-table");
            // Appending the Text to the Cells
            projectName.appendChild(projectNameTxt);
            goalAmount.appendChild(goalAmountTxt);
            amountReached.appendChild(amountReachedTxt);
            // Appending the Cells to the Row
            tr.appendChild(projectName);
            tr.appendChild(goalAmount);
            tr.appendChild(amountReached);
            // Appending the Row to the Table
            projectsTable.appendChild(tr);
        })
    }

    const fetchAllProjects = () => {
        console.log(email);
        instance.post("/designer/project/list", { "designer_email": Dashboard.email })
            .then(function (response) {
                console.log("HERE");
                console.log(response);
                fillTable(response.data.projects);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchAllProjects();
    });

    const dashboard =
        (
            <div className="container">
                <input
                    className="dashboard-input-search"
                    type="search"
                    id="myInput"
                    placeholder="Search for Projects" />
                <button className="button-filter" >{<FontAwesomeIcon icon={faFilter} />}</button>
                <button className="button-create-project" onClick={() => {
                    NewProject.email = Dashboard.email;
                    setShowNewProject(true);
                }}>Create New Project</button>

                {/*Table that displays projects*/}
                <table id="projects-table" className="center">
                    <tr>
                        <th>Project</th>
                        <th>Goal Amount</th>
                        <th>Amount Reached</th>
                        <th>Launch Project?</th>
                    </tr>
                </table>
            </div>
        );

    return (
        <div>
            {dashboard}
            {/*showPledge ? <Pledge /> : showViewProject ? <ViewProject /> : null*/}
            {/*showNewProject ? <NewProject /> : null*/}
            {/*showPledge || showNewProject || showViewProject ? null : dashboard*/}
        </div>
    )
};

export default Dashboard;