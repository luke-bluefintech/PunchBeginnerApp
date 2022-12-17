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
        document.getElementById("max-msg").hidden = (pledgeData.pledge_max_supporters === 0) || (pledgeData.pledge_num_claims < pledgeData.pledge_max_supporters);
        document.getElementById("claim-pledge-btn").hidden = !document.getElementById("max-msg").hidden;
        // Pledge Name
        var pledgeName = document.getElementById("pledge-name");
        pledgeName.innerHTML = pledgeData.project_name;
        // Pledge Amount
        var pledgeAmount = document.getElementById("pledge-amount");
        const pledgeAmt = (Math.round(pledgeData.pledge_amount * 100) / 100).toFixed(2);
        pledgeAmount.innerHTML = `\$${pledgeAmt}`;
        // Description
        var pledgeDescription = document.getElementById("description");
        pledgeDescription.innerHTML = pledgeData.pledge_description;
        // Maximum Supporters
        var pledgeMaxSupporters = document.getElementById("maximum-supporters");
        var maxSupportersTxt = pledgeData.pledge_max_supporters;
        if (maxSupportersTxt === 0) {
            maxSupportersTxt = "Unlimited";
        }
        pledgeMaxSupporters.innerHTML = maxSupportersTxt;
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
                console.log(response);
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
            <button type="button" className="view-pledge-btn" id="claim-pledge-btn" value="Claim" hidden onClick={() => {
                claimPledge();
            }}>Claim</button>
            <label className="label-text" id="max-msg" hidden>Pledge Claimed Maximum Number of Times!</label>
            <br />
            <button className="viewpledge-action-button" type="login" onClick={() => {
                navigate("/supporterdashboard/supporterviewproject");
            }}>Return to View Project</button>
        </div>
    )
}

export default ViewPledge;