import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';
import './Home.css';


const Home = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
          <h1 className="total-post">Total Posts: {posts.length}</h1>  
      {
          posts.map(post => <Posts post ={post}></Posts>)
      }
        </div>
    );
};

export default Home;
