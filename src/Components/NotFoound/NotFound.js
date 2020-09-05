import React from 'react';
import './NotFound.css';
import { Button } from '@material-ui/core';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Not found</h1>
            <h2>404 Error</h2>
            <p>Please check the link that you have entered..</p>
            <Button variant="contained" color="secondary"> Learn More</Button>
        </div>
    );
};

export default NotFound;