import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => (
  <div className="content-container">
    <Link to='/account'>Account Managment</Link>
    <Link to='/planner'>Meal Planner</Link>
    <Link to='/list'>Shopping List</Link>
    <Link to='/add'>Add Receipe</Link>    
  </div>
);

export default Home;