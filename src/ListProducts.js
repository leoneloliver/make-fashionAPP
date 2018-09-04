import React, { Component } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';

class ListProducts extends React.Component {
  // using axios
  state = {
    items: []
  }

  componentDidMount() {
    const prodCategID = "fr8s4";
    axios.get('https://api.myjson.com/bins/'+prodCategID)
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }
  render() {
    return (   
      <div className="items">
        <div className="page-title">
          <h2>Jackets</h2>
        </div>
        <Helmet title="Jackets - Products" />
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
  // using axios url: https://alligator.io/react/axios-react/
  
  // render() {
  //   let items = [
  //     { name: "Jacket Single", img: "https://images-na.ssl-images-amazon.com/images/I/71u4KFg7hHL._UY879_.jpg" },
  //     { name: "MEbox Mens Designer Jacket", img: "https://images-na.ssl-images-amazon.com/images/I/61d082jKOKL._UX679_.jpg" },
  //     { name: "Gísli padded jacket", img: "https://smhttp-ssl-56310.nexcesscdn.net/en/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/w/fw-2170-28_1_1.png" }  
  //   ];
  //   return (
  //     <div className="items">
  //       {items.map(item => (
  //         <div className="item">
  //           <h5>{ item.name }</h5>
  //           <img src={ item.img } />
  //           <div className="btn">Buy it</div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

}
export default ListProducts;

// https://api.myjson.com/bins/73bm4


