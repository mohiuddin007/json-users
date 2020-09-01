import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }

    return (
        <div className="col-md-5 border border-primary mx-4 p-1 text-center">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>id:<Link to={`/friend/${id}`}>
              <div>
                <h4>Show detail of {id}</h4>
                </div> 
                </Link></p>
                <button onClick={() => handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;