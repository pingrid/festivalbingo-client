import React from 'react';
import { Link } from 'react-router-dom';
import './rules.scss';

const Rules = () => (
    <div className="rules">
        <Link to="/"><i className="back-button material-icons">arrow_back</i></Link>
        <h1 className="fancy-title mb-7">Rules</h1>
        <ul className="rules-list">
            <li className="mb-1">An artist can maximum be entered 3 times per board</li>
            <li className="mb-1">Each tile can have up to 3 artists</li>
            <li className="mb-1">An artist can be added multiple times per tile (but maximum 3 times per board)</li>
        </ul>
    </div>
);

Rules.propTypes = {};

export default Rules;
