import { useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import './Pledge.css';

function Pledge() {

    const [showDashboard, setShowDashboard] = useState(false);

    const Pledge = (
        <div className="container">
            <label for="amount"><b>Pledge Amount</b><br></br></label>
            <input type="amt" name="amount" required />

            <label for="describe"><b><br></br>Description<br></br></b></label>
            <input type="description" placeholder="How should this pledge be used?" name="describe" required />

            <submitbutton onClick={() => setShowDashboard(true)} type="submitbutton">Submit</submitbutton>
        </div>
    );

    return (
        <div className="container">
            {showDashboard ? <Dashboard /> : Pledge}
        </div>
    )
};

export default Pledge;