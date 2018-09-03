import React, { Component } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';

class ListShoes extends React.Component {
  // using axios
  state = {
    items: []
  }
  componentDidMount() {
    axios.get('https://api.myjson.com/bins/r9x0s')
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }
  render() {
    return (   
      <div className="items">
        <div className="page-title">
          <h2>Shoes</h2>
        </div>
        <Helmet title="Shoes - Products" />
        {this.state.items.map(item => (
          <div className="item" data-myattribute={ item.img }>
            <h5>{ item.name }</h5>
            <div className="img-container shoes">
              <img src={ item.img } />
            </div>
            <div className="btn">Buy it</div>
          </div>
        ))}
      </div>
    )
  }

}
export default ListShoes;


