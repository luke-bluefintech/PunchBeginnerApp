import './ViewProject.css';

function ViewProject() {
    const project = {
        name: "Big Fork",
        description: "Funding for Sophie's big fork.",
        goal: "500 dollars",
        color: "white" };

    return (
        <div>
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
            <label className="label-text">Project Name: </label>
            {project?.name}
            <br></br>
            <label className="label-text">Project Name: </label>
            {project?.name}
            <br></br>
        </div>

    )
};

export default ViewProject;