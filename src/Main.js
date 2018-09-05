import React, { Component } from 'react';
import ListProducts from './ListProducts';
import ListTshirt from './ListTshirt';
import ListShoes from './ListShoes';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// const MainMenu = () => {
//   return (
//     <div className="breadcrumbs">
//       <Link to="/" onClick={this.handleClick} className="linkto">
//         Jackets
//       </Link>&nbsp;/&nbsp;
//       <Link to="/tshirt" onClick={this.handleClick} className="linkto">
//         Tshirt
//       </Link>&nbsp;/&nbsp;
//       <Link to="/shoes" onClick={this.handleClick} className="linkto">
//         Shoes
//       </Link>
//     </div>
//   );
// };


class Main extends Component {

  handleClick = () => {
    function clickable(){
      var classname = document.getElementsByClassName("item");
      var myFunction = function() {
        var attribute = this.getAttribute("data-myattribute");
        document.getElementById("my-modal").getElementsByTagName("img")[0].src=attribute;
        document.getElementById("my-modal").classList.add("show-it");      
      };
      Array.from(classname).forEach(function(element) {
        element.addEventListener("click", myFunction);
      });
      document.getElementById("close").addEventListener("click", closeModal);
      function closeModal(){
        document.getElementById("my-modal").classList.remove("show-it");
      }
      document.getElementById("mobile-menu").addEventListener("click", openMenu);
      function openMenu(){
        document.getElementsByClassName('m-menu')[0].classList.add("open");
      }
    }
    setTimeout(function(){ clickable(); }, 900);
  }

  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    this.handleClick();
  }

  render() {
    let items = [
      { name: "Jackets", path: "/" },
      { name: "Tshirts", path: "/tshirt" },
      { name: "Shoes", path: "/shoes" }
    ];

    return (
    	<Router>
	      <main className="main" >
            <div className="breadcrumbs">           
            {items.map(item => (   
              <Link to={item.path} onClick={this.handleClick} className="linkto"><span className="square">■</span> {item.name}<span>&nbsp;&nbsp;/&nbsp;&nbsp;</span></Link>      
            ))}            
            </div>
	         <Route exact path="/" component={ListProducts} />
	         <Route exact path="/tshirt" component={ListTshirt} />
	         <Route exact path="/shoes" component={ListShoes} />  
	      </main>
      </Router>
    );
  }
}
export default Main;
