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

    const deleteAdminProject = (project) => {
        //let password = props.admin_password;
        instance.post("/admin/project/delete", { "admin_password": "Secure123!", "project_name": project })
            .then(function (response) {
                console.log(response);
                window.alert("Project has been deleted!");
                navigate("/admindashboard");
            })
            .catch(function (error) {
                window.alert(error.response.data.error);
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
            var projectEmail = document.createElement("td");
            projectEmail.className = "data";
            var goalAmount = document.createElement("td");
            goalAmount.className = "data";
            var amountReached = document.createElement("td");
            amountReached.className = "data";
            var statusReport = document.createElement("td");
            statusReport.className = "data";
            // Creating the Text in the Cells
            var projectNameTxt = document.createTextNode(project.project_name);
            projectEmail.innerHTML = project.designer_email;
            var goalAmountTxt = document.createTextNode(`\$${project.project_goal.toFixed(2)}`);
            var amountReachedTxt = document.createTextNode(`\$${project.project_funded.toFixed(2)}`);

            if (!project.project_launched) {
                statusReport.innerText = "Not Launched";
            } else if (!project.project_reaped) {
                statusReport.innerText = "Launched";
            } else {
                statusReport.innerText = "FUNDED!";
            }

            var btn = document.createElement('input');
            btn.type = "button";
            btn.className = "delete-btn";
            btn.value = "Delete";
            const name = project.project_name;
            btn.onclick = () => {
                deleteAdminProject(name);
            };
            // Getting the Table
            var projectsTable = document.getElementById("projects-table");
            // Appending the Text to the Cells
            projectName.appendChild(projectNameTxt);
            goalAmount.appendChild(goalAmountTxt);
            amountReached.appendChild(amountReachedTxt);
            // Appending the Cells to the Row
            tr.appendChild(projectName);
            tr.appendChild(projectEmail);
            tr.appendChild(goalAmount);
            tr.appendChild(amountReached);
            tr.appendChild(statusReport);
            tr.appendChild(btn);
            // Appending the Row to the Table
            projectsTable.appendChild(tr);
        })
    }

    const fetchAllProjects = () => {
        instance.post("/admin/project/list", { "admin_password": "Secure123!" })
            .then(function (response) {
                fillTable(response.data.projects);
            })
            .catch(function (error) {
                window.alert(error.response.data.error);
                console.log(error);
            })
    }

    const reapProjects = () => {
        instance.post("/admin/project/reap", { "admin_password": "Secure123!" })
            .then(function (response) {
                window.alert(response.data.project_report);
                console.log(response);
                fetchAllProjects();
            })
            .catch(function (error) {
                window.alert(error.response.data.error);
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
            <button className="reap-project-button" onClick={() => {
                navigate("/admindashboard");
            }}>Refresh Projects</button> <br />
            {/*Table that displays projects*/}
            <table id="projects-table" className="center">
                <tr className="title-row">
                    <th>Project</th>
                    <th>Designer Email</th>
                    <th>Goal Amount</th>
                    <th>Amount Reached</th>
                    <th>Status</th>
                    <th>Delete Project</th>
                </tr>
            </table>
            <br /><br />
        </div>
    )
};

export default AdminDashboard;