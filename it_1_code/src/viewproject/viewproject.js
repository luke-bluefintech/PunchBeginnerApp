import './ViewProject.css';

function ViewProject() {
    const project = {
        name: "Big Fork",
        description: "Funding for Sophie's big fork.",
        goal: "500 dollars",
        genre: "Startup",
        creator: "Sophia Cheng",
        deadline: "Tomorrow"
    };

    return (
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
            <button className="pledgebutton-vp" type="pledge">Pledge</button>
        </div>
    )
};

export default ViewProject;