import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Main from './components/Main.jsx';


module.hot.accept('./components/Main.jsx', () => {
  const Main = require('./components/Main.jsx').default;
  ReactDOM.render(<Main/>, document.getElementById('main'));
});



// ReactDOM.render(<Main/>, document.getElementById('main'));