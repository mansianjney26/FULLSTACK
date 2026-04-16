import React from 'react';

const Product = ({ data }) => {
  return (
    <div>
      <h3>Name: {data.name}</h3>
      <p>Role: {data.role}</p>
      <p>Country: {data.country}</p>      
    </div>
  );
}

export default Product;