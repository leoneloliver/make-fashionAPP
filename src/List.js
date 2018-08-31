import React, { Component } from 'react';

class List extends React.Component {
  render() {
    let items = [
      { name: "Jackets", path: "/" },
      { name: "Tshirts", path: "/tshirt" },
      { name: "Shoes", path: "/shoes" }
      
    ];

    return (
      <div>
        <ul className="m-menu">
          {items.map(item => (
            <li>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div id="mobile-menu">&#9776;</div>
      </div>
    );
  }
}

export default List;
