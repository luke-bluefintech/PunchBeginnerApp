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
            var entreprenuer = document.createElement("td");
            entreprenuer.className = "dashboard-data";
            var projectType = document.createElement("td");
            projectName.className = "dashboard-data projTypeCell";
            var goalAmount = document.createElement("td");
            goalAmount.className = "dashboard-data";
            var amountReached = document.createElement("td");
            amountReached.className = "dashboard-data";
            // Creating the Text in the Cells
            projectName.innerHTML = project.project_name;
            entreprenuer.innerHTML = project.designer_name;
            projectType.innerHTML = project.project_type;
            goalAmount.innerHTML = `\$${project.project_goal.toFixed(2)}`;
            amountReached.innerHTML = `\$${project.project_funded.toFixed(2)}`;
            // Getting the Table
            var projectsTable = document.getElementById("projects-table");
            // Appending the Cells to the Row
            tr.appendChild(projectName);
            tr.appendChild(entreprenuer);
            tr.appendChild(projectType);
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
                document.getElementById("your-funds").innerHTML = `\$${response.data.supporter_balance.toFixed(2)}`;
                document.getElementById("your-activity").innerHTML = response.data.supporter_activity;
                fillTable(response.data.projects);
            })
            .catch(function (error) {
                window.alert(error.response.data.error);
                console.log(error);
            })
    }

    const addFunds = () => {
        var email = props.email;
        var funds = document.getElementById("funds-input").value;
        instance.post("/supporter/addFunds", { "supporter_email" : email, "balance_adjust" : funds })
            .then(function (response) {
                fetchAllProjects();
            })
            .catch(function (error) {
                window.alert(error.response.data.error);
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
            <label id="your-funds" className="label-text"></label>
            &nbsp;&nbsp;
            <label className="label-text">Add Funds: </label>
            <input id="funds-input" className="add-funds-input"></input>
            <button className="add-funds-submit-button" onClick={() => { addFunds() }}>Submit</button>
            <br /><br />
            <label className="label-text">Your Activity:</label>
            <br />
            <label id="your-activity" className="label-text"></label>
            <br /><br />
            <input
                className="dashboard-input-search"
                type="search"
                id="myInput"
                onChange={(event) => onhandleSearch(event)}
                placeholder="Search for Projects" />
            <table id="projects-table" className="center">
                <tr className="title-row">
                    <th>Project</th>
                    <th>Creator</th>
                    <th>Type</th>
                    <th>Goal Amount</th>
                    <th>Amount Reached</th>
                </tr>
                <tr className="dashboard-data" onClick={() => {
                    props.setProject(document.getElementsByClassName("dashboard-data")[0].childNodes[0].innerHTML);
                    navigate("/supporterdashboard/supporterviewproject")
                }}>
                    <td>Sample Project</td>
                    <td>Name</td>
                    <td>MyType</td>
                    <td>$2500.00</td>
                    <td>$2000.00</td>
                </tr>
            </table>
        </div >
    )
};

export default Dashboard;
