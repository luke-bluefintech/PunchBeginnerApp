import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './AdminDashboard.css';

const instance = axios.create({
    baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
}
);

function AdminDashboard(props) {

    //let password = "";

    const navigate = useNavigate();

    const deleteAdminProject = () => {
        let password = props.admin_password;
        let project = props.project;
        instance.post("/admin/project/delete", { "admin_password": password, "project_name": project })
            .then(function (response) {
                console.log(response);
                window.alert("Project has been deleted!");
                navigate("/admindashboard");
            })
            .catch(function (error) {
                window.alert("Error deleting project.");
                console.log(error);
            })
    }

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
            var btn = document.createElement('input');
            btn.type = "button";
            btn.className = "delete-btn";
            btn.value = "Delete";
            btn.onclick = () => {
                deleteAdminProject();
            };
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
            tr.appendChild(btn);
            // Appending the Row to the Table
            projectsTable.appendChild(tr);
        })
    }

    const fetchAllProjects = () => {
        instance.post("/admin/project/list", { "admin_password": props.password })
            .then(function (response) {
                fillTable(response.data.projects);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const reapProjects = () => {
        instance.post("/admin/project/reap", { "admin_password": props.password })
            .then(function (response) {
                fetchAllProjects();
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchAllProjects();
    });

    return (
        <div className="ad-container">
            <br />
            <button className="reap-project-button" onClick={() => {
                reapProjects();
            }}>Reap Projects</button> <br />
            {/*Table that displays projects*/}
            <table id="projects-table" className="center">
                <tr className="title-row">
                    <th>Project</th>
                    <th>Goal Amount</th>
                    <th>Amount Reached</th>
                    <th>Delete Project</th>
                </tr>
            </table>
            <br /><br />
        </div>
    )
};

export default AdminDashboard;