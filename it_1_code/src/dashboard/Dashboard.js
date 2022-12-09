import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import './Dashboard.css';
cd 
const instance = axios.create({
    baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
}
);

function Dashboard(props) {

    const navigate = useNavigate();

    const fillTable = (projects) => {
        var element = document.getElementsByClassName("created-flag"), index;
        for (index = element.length - 1; index >= 0; index--) {
            element[index].parentNode.removeChild(element[index]);
        }
        // Clear table?
        projects.forEach(project => {
            console.log("LAUNCHED? " + project.project_launched);
            // Creating the Row
            var tr = document.createElement("tr");
            tr.className = "created-flag";
            // Creating the Cells
            var projectName = document.createElement("td");
            projectName.className = "dashboard-data projNameCell";
            projectName.onclick = () => {
                props.setProject(tr.childNodes[0].innerHTML);
                navigate("/dashboard/viewproject")
            };
            var goalAmount = document.createElement("td");
            goalAmount.className = "dashboard-data";
            goalAmount.onclick = () => {
                props.setProject(tr.childNodes[0].innerHTML);
                navigate("/dashboard/viewproject")
            };
            var amountReached = document.createElement("td");
            amountReached.className = "dashboard-data";
            amountReached.onclick = () => {
                props.setProject(tr.childNodes[0].innerHTML);
                navigate("/dashboard/viewproject")
            };
            var launchBtn;
            var launched;
            if (project.project_launched === 0) {
                launchBtn = document.createElement("div");
                launchBtn.innerHTML = "Launch";
                launchBtn.className = "launchBtn";
                launchBtn.onclick = () => {
                    launchProjects(projectName.innerHTML);
                };
            } else {
                launched = document.createElement("div");
                launched.className = "launched"
                launched.innerHTML = "Launched";
            }
            // Creating the Text in the Cells
            projectName.innerHTML = project.project_name;
            goalAmount.innerHTML = project.project_goal;
            amountReached.innerHTML = project.project_funded;
            // Getting the Table
            var projectsTable = document.getElementById("projects-table");
            // Appending the Cells to the Row
            tr.appendChild(projectName);
            tr.appendChild(goalAmount);
            tr.appendChild(amountReached);
            if (project.project_launched === 0) {
                tr.appendChild(launchBtn);
            } else {
                tr.appendChild(launched);
            }
            // Appending the Row to the Table
            projectsTable.appendChild(tr);
        })
    }

    const fetchAllProjects = () => {
        var email = props.email;
        instance.post("/designer/project/list", { "designer_email": email })
            .then(function (response) {
                console.log(response);
                fillTable(response.data.projects);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const launchProjects = (projName) => {
        var email = props.email;
        var project = projName;
        instance.post("/designer/project/launch", { "project_name": project, "designer_email": email })
            .then(function (response) {
                console.log(response);
                navigate("/dashboard");
            })
            .catch(function (error) {
                console.log(error);
                navigate("/dashboard");
            })
    }

    useEffect(() => {
        fetchAllProjects();
    }
    );

    return (
        <div className="container">
            <input
                className="dashboard-input-search"
                type="search"
                id="myInput"
                placeholder="Search for Projects" />
            <button className="button-filter" >{<FontAwesomeIcon icon={faFilter} />}</button>
            <button className="button-create-project" onClick={() => {
                navigate("/dashboard/newproject");
            }}>Create New Project</button>

            {/*Table that displays projects*/}
            <table id="projects-table" className="center">
                <tr className="title-row">
                    <th>Project</th>
                    <th>Goal Amount</th>
                    <th>Amount Reached</th>
                    <th>Launch Project?</th>
                </tr>
            </table>
        </div>
    )
};

export default Dashboard;