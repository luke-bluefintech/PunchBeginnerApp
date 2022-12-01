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

    let email = "";
    let password = "";

    const samplePayload = {
        "data": {
            "projects": [
                {
                    "project_name": "Large Strawberry Fork",
                    "project_description": "This project is to make a large strawberry fork!",
                    "designer_email": "shcheng@wpi.edu",
                    "project_type": "Art",
                    "project_goal": 2000.00,
                    "project_funded": 0.00,
                    "project_deadline": "December 17, 2022",
                    "project_launched": false,
                    "project_reaped": false,
                    "project_pledge_num_supporters": 0,
                    "project_direct_num_supporters": 0
                },
                {
                    "project_name": "Giant Fish Sword",
                    "project_description": "This project is to make a giant fish sword!",
                    "designer_email": "shcheng@wpi.edu",
                    "project_type": "Art",
                    "project_goal": 2500.01,
                    "project_funded": 420.69,
                    "project_deadline": "January 1, 2023",
                    "project_launched": true,
                    "project_reaped": false,
                    "project_pledge_num_supporters": 3,
                    "project_direct_num_supporters": 4
                },
                {
                    "project_name": "Ninja Se 4.0",
                    "project_description": "This project is to make Ninja-Se 4.0!",
                    "designer_email": "rpoleynick@wpi.edu",
                    "project_type": "Game",
                    "project_goal": 500.00,
                    "project_funded": 560.00,
                    "project_deadline": "November 29, 2022",
                    "project_launched": true,
                    "project_reaped": true,
                    "project_pledge_num_supporters": 5,
                    "project_direct_num_supporters": 0
                }
            ]
        }
    };

    const fillTable = (projects) => {
        // Clear table?
        projects.forEach(project => {
            // Creating the Row
            var tr = document.createElement("tr");
            tr.onclick = () => {
                ViewProject.email = email;
                ViewProject.project_name = project.project_name;
                setShowViewProject(true);
            };
            // Creating the Cells
            var projectName = document.createElement("td");
            var goalAmount = document.createElement("td");
            var amountReached = document.createElement("td");
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
        instance.post("/designer/project/list", { "designer_email": Dashboard.email })
            .then(function (response) {
                fillTable(response.data.projects)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchAllProjects();
    });

    const dashboard = (
        <div>
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
            {showPledge ? <Pledge /> : showViewProject ? <ViewProject /> : null}
            {showNewProject ? <NewProject /> : null}
            {showPledge || showNewProject || showViewProject ? null : dashboard}
        </div>
    )
};

export default Dashboard;