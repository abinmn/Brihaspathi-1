import React from 'react';
import { Link } from 'react-router-dom';
import './Error.style.scss';

function Error(){
  return (
    <div className="errorText">
      <h1>The page you are looking for does not exist!</h1>
      <h2>Would you like to return <Link to="/">home</Link> instead?</h2>
    </div>
  );
}

export default Error;