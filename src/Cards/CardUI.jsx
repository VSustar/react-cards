import React from 'react';
import { Link } from "react-router-dom";
import './card-style.css';


const Card = ({user})=> {
    return(
        <div className="card text-center shadow">

            <div className="body">

 
            <div className="avatar">

                <span className="initial-wrap rounded-circle"><span>{user.name.charAt(0)}</span></span>

                </div>
                    <div className="mt-3">
                      <h4>{user.name}</h4>
                      <p className="text-secondary mb-1"><i>@{user.username}</i></p>
                      <a href={user.website}>http://{user.website}</a>
                      <p><Link className="btn btn-outline-success" to={`/users/${user.id}`}> MORE DETAILS</Link></p>
                </div>
            </div>
            </div>

    );
}

export default Card;