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
        </div>
    )
};

export default Dashboard;