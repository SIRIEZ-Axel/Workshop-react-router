import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to)
    return (
        <Link 
        to={to}
        style={{ 
            color: match ? 'turquoise' : 'white'
        }}
        {... props}>
            {children}
        </Link>
    );
};

export default CustomLink;