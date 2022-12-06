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
            <label for="pname"><b>Project Name:</b><br></br></label>
            <input id="project-name" type="shorttext" name="pname" required />

            <label for="story"><b><br></br>Your Story:</b><br></br></label>
            <input id="your-story" type="shorttext" name="story" required />

            <label for="yname"><b><br></br>Your Name:</b><br></br></label>
            <input id="your-name" type="shorttext" name="yname" required />

            <label for="genre"><b><br></br>Genre:<br></br></b></label>
            <input id="project-genre" type="shorttext" name="genre" required />

            <label for="goal"><b><br></br>Goal:<br></br></b></label>
            <input id="project-goal" type="shorttext" name="goal" required />

            <label for="deadline"><b><br></br>Deadline:<br></br></b></label>
            <input id="project-deadline" type="shorttext" name="deadline" required />

            <label for="space"><b><br></br><br></br></b></label>
            <createbutton onClick={() => {
                // Send post to designer/project/create
                postNewProject()
            }} type="create">Create</createbutton>
        </div>
    )
}

export default NewProject;