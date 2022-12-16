import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './SupporterDashboard.css';

const instance = axios.create({
    baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
}
);

function Dashboard(props) {

    const navigate = useNavigate();

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
                props.setProject(tr.childNodes[0].innerHTML);
                navigate("/supporterdashboard/supporterviewproject")
            };
            tr.className = "dashboard-data";
            // Creating the Cells
            var projectName = document.createElement("td");
            projectName.className = "dashboard-data projNameCell";
            var goalAmount = document.createElement("td");
            goalAmount.className = "dashboard-data";
            var amountReached = document.createElement("td");
            amountReached.className = "dashboard-data";
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
            // Appending the Row to the Table
            projectsTable.appendChild(tr);
        })
    }

    const onhandleSearch = (event) => {
        let value = event.target.value;
        fetchAllProjects(value)
    }

    const fetchAllProjects = () => {
        var email = props.email;
        var value = document.getElementById("myInput").value;
        instance.post("/supporter/project/search", { "supporter_email": email, "project_search": value })
            .then(function (response) {
                console.log(response);
                fillTable(response.data.projects);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchAllProjects();
    }
    );

    return (
        <div className="supporter-container">
            <label className="label-text">Your Funds: </label>

            <label className="label-text">Add Funds: </label>
            <input className="add-funds-input"></input>
            <button className="add-funds-submit-button">Submit</button>
            <br /><br />
            <input
                className="dashboard-input-search"
                type="search"
                id="myInput"
                onChange={(event) => onhandleSearch(event)}
                placeholder="Search for Projects" />

            {/*Table that displays projects*/}
            <table id="projects-table" className="center">
                <tr className="title-row">
                    <th>Project</th>
                    <th>Goal Amount</th>
                    <th>Amount Reached</th>
                </tr>
                <tr className="dashboard-data" onClick={() => {
                    props.setProject(document.getElementsByClassName("dashboard-data")[0].childNodes[0].innerHTML);
                    navigate("/supporterdashboard/supporterviewproject")
                }}>
                    <td>Sample Project</td>
                    <td>$4500</td>
                    <td>$2500</td>
                </tr>
            </table>
        </div >
    )
};

export default Dashboard;