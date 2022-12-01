import { useState } from "react";
import Pledge from "../pledge/Pledge";
import './ViewProject.css';

function ViewProject() {

    const [showPledge, setShowPledge] = useState(false);

    const project = {
        name: "Big Fork",
        description: "Funding for Sophie's big fork.",
        goal: "500 dollars",
        genre: "Startup",
        creator: "Sophia Cheng",
        deadline: "Tomorrow"
    };

    const viewproject = (
        <div className="info-div">
            {/* img below will have src='url of project image' */}
            <img className='heading--logo' />
            <br></br>
            <label className="label-text">Project Name: </label>
            {project?.name}
            <br></br>
            <label className="label-text">Description: </label>
            {project?.description}
            <br></br>
            <label className="label-text">Goal: </label>
            {project?.goal}
            <br></br>
            <label className="label-text">Genre: </label>
            {project?.genre}
            <br></br>
            <label className="label-text">Creator: </label>
            {project?.creator}
            <br></br>
            <label className="label-text">Deadline: </label>
            {project?.deadline}
            <br></br>
            <button className="pledgebutton-vp" onClick={() => setShowPledge(true)} type="pledge">Pledge</button>
        </div>
    );

    return (
        <div>
            {showPledge ? <Pledge /> : viewproject}
        </div>
    )
};

export default ViewProject;