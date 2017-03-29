import React from 'react';
import { Link } from 'react-router-dom';

const SignedOutNav = (props) => {
    return (
      <nav>
        <ul>
          <li><img src='https://placeholdit.imgix.net/~text?txtsize=6&txt=50%C3%9750&w=50&h=50' alt='logo' /></li>
          <li>JobOrNot</li>
          <li>How It Works</li>
          <li><Link to='/signin'>Sign In</Link></li>
        </ul>
      </nav>
    );
};

export default SignedOutNav;
