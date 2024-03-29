import React, { Component } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';

class ListTshirt extends React.Component {
  // using axios
  state = {
    items: []
  }
  componentDidMount() {
    const prodCategID = "18dyyy";
    const apiURL= "https://api.myjson.com/bins/";
    axios.get(apiURL+prodCategID)
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }
  render() {
    return (   
      <div className="items">
        <div className="page-title">
          <h2>T-Shirts</h2>
        </div>
        <Helmet title="T-Shirts - Products" />
        {this.state.items.map(item => (
          <div className="item" data-myattribute={ item.img }>
            <h5>{ item.name }</h5>
            <div className="img-container">
              <img src={ item.img } />
            </div>
            <div className="btn">Buy it</div>
          </div>
        ))}
      </div>
    )
  }
  

}
export default ListTshirt;

// https://api.myjson.com/bins/121v2k