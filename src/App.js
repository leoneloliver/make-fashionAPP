import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import Footer from './Footer';



const Modal = () => {
  return (
    <div id="my-modal" className="popup">
    <div id="close">X</div>
    <p>My Modal</p>
      <img />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App wrapper">
        <Header />
        <section className="content">
          <div className="columns">
            <Sidebar />
            <Main />
          </div>
        </section>
        <Footer />
        <Modal />
      </div>   
    );
  }
}

export default App;

