import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Post.css';
import { Link } from 'react-router-dom';

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

const Posts = (props) => {
    const { body, title, id } = props.post
    const classes = useStyles();
    return (
            <div className="card-container">
                <Container maxWidth="md">
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Post No : {id}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                               Post title : {title}
                            </Typography>
                            <Typography variant="body2" component="p">
                              Post :  {body}
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/post/${id}`}><Button size="small" variant="contained" color="primary">See More</Button></Link>
                        </CardActions>
                    </Card>
                </Container>
            </div>
    );
};

export default Posts;