import React, { Component } from 'react';
import ListProducts from './ListProducts';
import ListTshirt from './ListTshirt';
import ListShoes from './ListShoes';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



class Main extends Component {
  render() {
    return (
    	<Router>
	      <main className="main" >
	         <Route exact path="/" component={ListProducts} />
	         <Route exact path="/tshirt" component={ListTshirt} />
	         <Route exact path="/shoes" component={ListShoes} />
	      </main>
      </Router>
    );
  }
}

export default Main;
