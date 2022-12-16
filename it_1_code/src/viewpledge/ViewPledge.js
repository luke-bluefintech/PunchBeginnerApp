import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './ViewPledge.css';

function ViewPledge(props) {
    const instance = axios.create({
        baseURL: 'https://s31510gc92.execute-api.us-east-2.amazonaws.com/Prod'
    }
    );

    const navigate = useNavigate();

    const fillPledgeData = (pledgeData) => {
        // Pledge Name
        var pledgeName = document.getElementById("pledge-name");
        pledgeName.innerHTML = pledgeData.project_name;
        // Pledge Amount
        var pledgeAmount = document.getElementById("pledge-amount");
        pledgeAmount.innerHTML = pledgeData.pledge_amount;
        // Description
        var pledgeDescription = document.getElementById("description");
        pledgeDescription.innerHTML = pledgeData.pledge_description;
        // Maximum Supporters
        var pledgeMaxSupporters = document.getElementById("maximum-supporters");
        pledgeMaxSupporters.innerHTML = pledgeData.pledge_max_supporters;
        // Pledge Claims
        var pledgeNumClaims = document.getElementById("pledge-claims");
        pledgeNumClaims.innerHTML = pledgeData.pledge_num_claims;
        // Your Claims
        var supporterNumClaims = document.getElementById("your-claims");
        supporterNumClaims.innerHTML = pledgeData.supporter_num_claims;

    }

    const fetchPledge = () => {
        let data = { "pledge_uid": props.pledgeUID, "supporter_email": props.email };
        instance.post("/supporter/pledge/view", data)
            .then(function (response) {
                console.log(response)
                fillPledgeData(response.data.pledge);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const claimPledge = () => {
        let data = {
            "num_claims": 1, "pledge_uid": props.pledgeUID, "supporter_email": props.email
        };
        instance.post("/supporter/pledge/claim", data)
            .then(function (response) {
                console.log(response);
                navigate("/supporterdashboard/supporterviewproject/viewpledge");
            })
            .catch(function (error) {
                console.log(error);
                window.alert(error.response.data.error);
                navigate("/supporterdashboard/supporterviewproject/viewpledge");
            })
    }

    useEffect(() => {
        fetchPledge();
    });

    return (
        <div className="container">
            <label className="label-text">Pledge Name: </label>
            <div id="pledge-name"></div>
            <br></br>
            <label className="label-text">Pledge Amount: </label>
            <div id="pledge-amount"></div>
            <br></br>
            <label className="label-text">Description: </label>
            <div id="description"></div>
            <br></br>
            <label className="label-text">Maximum Supporters: </label>
            <div id="maximum-supporters"></div>
            <br></br>
            <label className="label-text">Pledge Claims: </label>
            <div id="pledge-claims"></div>
            <br></br>
            <label className="label-text">Your Claims: </label>
            <div id="your-claims"></div>
            <br></br>
            <button type="button" className="view-pledge-btn" value="Claim" onClick={() => {
                claimPledge();
            }}>Claim</button>
            <br />
            <button className="viewpledge-action-button" type="login" onClick={() => {
                navigate("/supporterdashboard/supporterviewproject");
            }}>Return to View Project</button>
        </div>
    )
}

export default ViewPledge;