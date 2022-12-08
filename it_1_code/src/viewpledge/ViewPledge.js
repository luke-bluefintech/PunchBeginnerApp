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

    return (
        <div className="container">
            <label className="label-text">Pledge Name: </label>
            <div id="pledge-name"></div>
            <br></br>
            <label className="label-text">Pledge Amount: </label>
            <div id="project-name"></div>
            <br></br>
            <label className="label-text">Description: </label>
            <div id="project-name"></div>
            <br></br>
            <label className="label-text">Maximum Supporters: </label>
            <div id="project-name"></div>
            <br></br>
            <label className="label-text">Pledge Claims: </label>
            <div id="project-name"></div>
            <br></br>
            <label className="label-text">Your Claims: </label>
            <div id="project-name"></div>
            <br></br>
        </div>
    )
}

export default ViewPledge;