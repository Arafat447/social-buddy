import React from 'react';
import './Comments.css';

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
        </div>
    );
};

export default Comments;