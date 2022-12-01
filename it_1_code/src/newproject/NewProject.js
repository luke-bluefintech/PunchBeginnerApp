import './NewProject.css';

function NewProject() {

    return (
        <div className="container">
            <label for="pname"><b>Project Name:</b><br></br></label>
            <input type="text" name="pname" required />

            <label for="story"><b><br></br>Your Story:</b><br></br></label>
            <input type="text" name="story" required />

            <label for="yname"><b><br></br>Your Name:</b><br></br></label>
            <input type="text" name="yname" required />

            <label for="genre"><b><br></br>Genre:<br></br></b></label>
            <input type="text" name="genre" required />

            <label for="goal"><b><br></br>Goal:<br></br></b></label>
            <input type="text" name="goal" required />

            <label for="deadline"><b><br></br>Deadline:<br></br></b></label>
            <input type="text" name="deadline" required />

            <label for="space"><b><br></br><br></br></b></label>
            <createbutton type="create">Create</createbutton>

        </div>
    )
}

export default NewProject;