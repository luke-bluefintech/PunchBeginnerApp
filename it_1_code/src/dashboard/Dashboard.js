import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import './Dashboard.css';
import ViewProject from "../viewproject/ViewProject";
import NewProject from "../newproject/NewProject";
import Pledge from "../pledge/Pledge";

function Dashboard() {

    const [showViewProject, setShowViewProject] = useState(false);
    const [showPledge, setShowPledge] = useState(false);
    const [showNewProject, setShowNewProject] = useState(false);

    const dashboard = (
        <div>
            <input
                className="dashboard-input-search"
                type="search"
                id="myInput"
                placeholder="Search for Projects" />
            <button className="button-filter" >{<FontAwesomeIcon icon={faFilter} />}</button>
            <button className="button-create-project" onClick={() => setShowNewProject(true)}>Create New Project</button>

            {/*Table that displays projects*/}
            <table className = "center">
                <tr onClick={() => setShowViewProject(true)}>
                    <th>Project</th>
                    <th>Goal Amount</th>
                    <th>Amount Reached</th>
                    <th>Want to Support?</th>
                </tr>
                <tr onClick={() => setShowViewProject(true)}>
                    <td>Ilana</td>
                    <td>800</td>
                    <td>546</td>
                    <td><button className="pledgebutton" onClick={() => setShowPledge(true)} type="pledge">Pledge</button></td>
                </tr>
                <tr onClick={() => setShowViewProject(true)}>
                    <td>Luke</td>
                    <td>1200</td>
                    <td>753</td>
                    <td><button className="pledgebutton" onClick={() => setShowPledge(true)} type="pledge">Pledge</button></td>
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