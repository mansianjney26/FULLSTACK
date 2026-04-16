import React from 'react'

const Header = ({title,color,year}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{color}</h2>
      <h2>{year}</h2>
    </div>
  )
}

export default Header

