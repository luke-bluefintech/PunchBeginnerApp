import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter} from '@fortawesome/free-solid-svg-icons'
import './Dashboard.css';

function Dashboard() {
    return (
        <div>
            <input
                className="dashboard-input-search"
                type="search"
                id="myInput"
                placeholder="Search for Projects" />
            <button className="button-filter" >{<FontAwesomeIcon icon={faFilter} />}</button>
            <button className="button-create-project" >Create New Project</button>

            {/*Table that displays projects*/}
            <table>
            <tr>
                <th>Project</th>
                <th>Goal Amount</th>
                <th>Amount Reached</th>
                <th>Want to Support?</th>
            </tr>
            <tr>
                <td>Ilana</td>
                <td>800</td>
                <td>546</td>
                <td><button className="pledgebutton" type="pledge">Pledge</button></td>
            </tr>
            <tr>
                <td>Luke</td>
                <td>1200</td>
                <td>753</td>
                <td><button className="pledgebutton" type="pledge">Pledge</button></td>
            </tr>
        </table>
        </div>
    )
};

export default Dashboard;