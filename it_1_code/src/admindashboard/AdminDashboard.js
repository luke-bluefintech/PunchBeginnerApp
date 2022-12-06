import { useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import './AdminDashboard.css';

const instance = axios.create({
    baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
}
);

function AdminDashboard(props) {

    let password = "";

    const fillTable = (projects) => {
        var element = document.getElementsByClassName("data"), index;
        for (index = element.length - 1; index >= 0; index--) {
            element[index].parentNode.removeChild(element[index]);
        }
        // Clear table?
        projects.forEach(project => {
            // Creating the Row
            var tr = document.createElement("tr");
            tr.className = "data";
            // Creating the Cells
            var projectName = document.createElement("td");
            projectName.className = "data";
            var goalAmount = document.createElement("td");
            goalAmount.className = "data";
            var amountReached = document.createElement("td");
            amountReached.className = "data";
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
        instance.post("/admin/project/list", { "admin_password": props.password })
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

    return (
        <div>
            <input
                className="dashboard-input-search"
                type="search"
                id="myInput"
                placeholder="Search for Projects" />
            <button className="button-filter" >{<FontAwesomeIcon icon={faFilter} />}</button>
            <button className="button-create-project" onClick={() => {
                //NewProject.password = AdminDashboard.password;
                //setShowNewProject(true);
            }}>Create New Project</button>

            {/*Table that displays projects*/}
            <table id="projects-table" className="center">
                <tr>
                    <th>Project</th>
                    <th>Goal Amount</th>
                    <th>Amount Reached</th>
                </tr>
            </table>
        </div>
    )
};

export default AdminDashboard;