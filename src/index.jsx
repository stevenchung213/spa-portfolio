import React from "react";
import ReactDOM from "react-dom";
import Main from './components/Main.jsx';

//non-ssr
ReactDOM.render(<Main/>, document.getElementById('main'));

//ssr
// ReactDOM.hydrate(<Main/>, document.getElementById('main'));
