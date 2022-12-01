import { useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import './NewProject.css';

function NewProject() {

    const [showDashboard, setShowDashboard] = useState(false);

    const newproject = (
        <div className="container">
            <label for="pname"><b>Project Name:</b><br></br></label>
            <input type="shorttext" name="pname" required />

            <label for="story"><b><br></br>Your Story:</b><br></br></label>
            <input type="longtext" name="story" required />

            <label for="yname"><b><br></br>Your Name:</b><br></br></label>
            <input type="shorttext" name="yname" required />

            <label for="genre"><b><br></br>Genre:<br></br></b></label>
            <input type="shorttext" name="genre" required />

            <label for="goal"><b><br></br>Goal:<br></br></b></label>
            <input type="shorttext" name="goal" required />

            <label for="deadline"><b><br></br>Deadline:<br></br></b></label>
            <input type="shorttext" name="deadline" required />

            <label for="space"><b><br></br><br></br></b></label>
            <createbutton onClick={() => setShowDashboard(true)} type="create">Create</createbutton>

        </div>
    );

    return (
        <div>
            {showDashboard ? <Dashboard /> : newproject}
        </div>
    )
}

export default NewProject;