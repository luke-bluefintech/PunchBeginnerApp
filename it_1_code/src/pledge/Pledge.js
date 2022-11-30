import './Pledge.css';

function Pledge() {
    return (
        <div className="container">
            <label for="amount"><b>Pledge Amount</b><br></br></label>
            <input type="amt" name="amount" required />

            <label for="describe"><b><br></br>Description<br></br></b></label>
            <input type="description" placeholder="How should this pledge be used?" name="describe" required />

            <submitbutton type="submitbutton">Submit</submitbutton>
        </div>
    )
};

export default Pledge;