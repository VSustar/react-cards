import React from "react";
import Cards from "../Cards/Cards";
import Card from "../Cards/CardUI";
import '../Cards/card-style.css';

const User = ({ users }) => {
  return (
    <>
    <div className="container-fluid d-flex justify-content-center">
      
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
      
    </>
  );
};

export default User;