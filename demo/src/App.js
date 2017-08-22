import React, { Component } from 'react';
import router from './router.js';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>John's Clothing</h1>
        <p>Quality Products</p>


        {/* hashrouter can only take one child element. so create div first with all elements inside. 
        if no exact is used in Route, then it will use all that match */}

        {/* all sections were moved to individual component pages. ex router.js (function).  AND the <HashRouter> tag was moved to index.js to encapsulate the whole <App> component*/}

        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/about/faq'><div><h2>Faq</h2></div></Link>
          <Link to='/people'>People</Link>
          {router}
        </div>


      </div>
    );
  }
}

export default App;
