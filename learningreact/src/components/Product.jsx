import React from 'react'
import {Navlink} from 'react-dom'

function Product({ title, other, obj ,price}) {
  // let list = [];
  // if (Array.isArray(other)) {
  //   list = other.map((element) => <li>{element}</li>)
  // }
  let bg = "bg-green-500";
  return (
    <div className= {` ${price>4000? bg :"bg-blue-500"} text-yellow-500 font-bold`}>
      {/* <h3>{title}</h3>
      <ul>{list}</ul>
      <p>{obj.a}</p> */}
      {/* {price>4000 && <p>"Discount of 5%"</p> } */}
      HI
  {price>4000? <p>"Discount of 5%"</p>: false }
    </div>
  )
}

export default Product
