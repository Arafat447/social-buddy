import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Comments from '../Comments/Comments';
import './PostDetail.css'

const PostDetail = () => {
    const { postId } = useParams();
    const [postDetail, setPostDetail] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPostDetail(data))
    }, []);
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    const { body, title, id } = postDetail;
    const classes = useStyles();
    return (

        <div className="card-container">
            <Container maxWidth="md">
                <Card className={classes.root}>
                    <CardContent>
                        <div><img src={`https://loremflickr.com/320/240?random=${id}`} alt=""/></div>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Post NO {id}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                           Post title: {title}
                        </Typography>
                        <Typography variant="body2" component="p">
                           Post: {body}
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                        <br/>
                        {/* <Link to="/home"><Button size="small" variant="contained" color="primary">Back To Home</Button></Link> */}
                    </CardContent>
                    <span className="share-button"><Button variant="contained" color="primary">Comment</Button></span>
                    <span><Button variant="contained" color="primary">Share</Button></span>
                </Card>
                <h3>Comments {comments.length}</h3>
                {
                    comments.map(comment => <Comments comment={comment}></Comments>)
                }
            </Container>
        </div>
    );
};

export default PostDetail;