import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <h2>C'mon Dude...</h2>
            <p> U did shit. Go back <Link to="/">Home</Link></p>
        </div>
    );
};

export default Notfound;