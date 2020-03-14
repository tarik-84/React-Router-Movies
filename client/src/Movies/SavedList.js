import React from 'react';
import { Link, NavLink } from "react-router-dom"

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    <NavLink to='/savedlis' className="saved-movie">
    {props.list.map(movie => (
      
      <span>{movie.title}</span>
    ))}</NavLink>
    <Link to='/'>
    <div><button className="home-button">Home</button></div></Link>
  </div>
);

export default SavedList;
