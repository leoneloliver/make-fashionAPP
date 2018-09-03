import React, { Component } from 'react';
import ListProducts from './ListProducts';
import ListTshirt from './ListTshirt';
import ListShoes from './ListShoes';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const MainMenu = () => {
  return (
    <div className="breadcrumbs">
      <Link to="/" onClick={this.clickable} className="linkto">
        Jackets
      </Link>&nbsp;/&nbsp;
      <Link to="/tshirt" onClick={this.clickable} className="linkto">
        Tshirt
      </Link>&nbsp;/&nbsp;
      <Link to="/shoes" onClick={this.clickable} className="linkto">
        Shoes
      </Link>
    </div>
  );
};

class Main extends Component {
  render() {
    return (
    	<Router>

	      <main className="main" >
           <MainMenu />
	         <Route exact path="/" component={ListProducts} />
	         <Route exact path="/tshirt" component={ListTshirt} />
	         <Route exact path="/shoes" component={ListShoes} />
	      </main>
      </Router>
    );
  }
}

export default Main;
