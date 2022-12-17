import { useNavigate } from "react-router-dom";
import axios from "axios";
import './NewProject.css';

function NewProject(props) {

    const navigate = useNavigate();

    const instance = axios.create({
        baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
    }
    );

    const postNewProject = () => {
        let data = {
            "designer_email": props.email,
            "project_name": document.getElementById("project-name").value,
            "project_description": document.getElementById("your-story").value,
            "designer_name": document.getElementById("your-name").value,
            "project_type": document.getElementById("project-genre").value,
            "project_goal": document.getElementById("project-goal").value,
            "project_deadline": document.getElementById("project-deadline").value
        };
        instance.post("/designer/project/create", data)
            .then(function (response) {
                // Set ViewProjects.project to the project name
                // Switch to project view
                navigate("/dashboard");
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div className="container">
            <label className="np-input-label" for="pname">Project Name:<br></br></label>
            <input id="project-name" type="shorttext" name="pname" required />

            <label className="np-input-label" for="story"><br></br>Your Story:<br></br></label>
            <input id="your-story" type="shorttext" name="story" required />

            <label className="np-input-label" for="yname"><br></br>Your Name:<br></br></label>
            <input id="your-name" type="shorttext" name="yname" required />

            <label className="np-input-label" for="genre"><br></br>Genre:<br></br></label>
            <input id="project-genre" type="shorttext" name="genre" required />

            <label className="np-input-label" for="goal"><br></br>Goal:<br></br></label>
            <input id="project-goal" type="shorttext" name="goal" required />

            <label className="np-input-label" for="deadline"><br></br>Deadline:<br></br></label>
            <input id="project-deadline" type="shorttext" name="deadline" placeholder="YYYY-MM-DD" required />

            <label for="space"><b><br></br><br></br></b></label>
            <button className="create-button" onClick={() => {
                // Send post to designer/project/create
                postNewProject()
            }} type="create">Create Project</button>
        </div>
    )
}

export default NewProject;