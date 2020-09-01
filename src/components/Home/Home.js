import React, { useState, useEffect } from 'react';
import Friend from '../Friend/Friend';


const Home = () => {
    const [friends, setFriends] = useState([])

    useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data))
    },[])
    return (
        <div className="container">
            <h1>Friends: {friends.length}</h1>
            <div className="row">
        {
          friends.map(friends => <Friend friend={friends}></Friend>)
        } 
           </div>
        </div>
    );
};

export default Home;