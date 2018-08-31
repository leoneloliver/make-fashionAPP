import React, { Component } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';

class ListTshirt extends React.Component {
  // using axios
  state = {
    items: []
  }
  componentDidMount() {
    axios.get('https://api.myjson.com/bins/121v2k')
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }
  render() {
    return (   
      <div className="items">
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

