import './NewProject.css';

function NewProject() {

    return (
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

            </div>
    )
}

export default NewProject;