import React from 'react';
import './Comments.css';
import { Button } from '@material-ui/core';

const Comments = (props) => {
    const { name, email, body, id } = props.comment;
    console.log(props.comment)
    return (
        <div className="comment-container">
            <img src={`https://loremflickr.com/320/240?random=${id}`} />
            <div className="comment">
                <h5>Name: {name}</h5>
                <p>Email: {email}</p>
                <p><small>Comment: {body}</small></p>
            </div>
            <span className="like-button"><Button variant="contained" color="primary">Like</Button></span>
            <Button variant="contained" color="primary">Reply</Button>
        </div>
    );
};

export default Comments;