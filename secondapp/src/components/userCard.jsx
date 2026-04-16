import React from 'react';

const userCard = ({ data }) => {
  return (
    <div>
      <h3>Name: {data.name}</h3>
      <p>Age: {data.age}</p>
      <p>Role: {data.role}</p>
      <p>Country: {data.country}</p>
    </div>
  );
};

export default userCard;