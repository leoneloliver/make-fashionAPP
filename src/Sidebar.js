import React, { Component } from 'react';
import List from './List';

class Siderbar extends Component {
  render() {
    return (
      <aside className="sidebar">
       	<List />
      </aside>
    );
  }
}

export default Siderbar;
