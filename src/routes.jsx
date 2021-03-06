var React = require('react');
var ReactRouter = require('react-router'); // npm package
var Router = ReactRouter.Router; // grabbing router out of package
var Route = ReactRouter.Route; // for specifc page

var createHistory = require('history/lib/createHashHistory');
// set congif setting to get rid of URL hash
var History = new createHistory({
  queryKey: false
}); // shut off hash

var Base = require('./components/base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');
// import pages for routes

var Routes = (

  <Router history={History}>
    <Route path="/" component={Base} >
      <Route path="/page1" component={Page1}></Route>
      <Route path="/page2" component={Page2}></Route>
    </Route>
  </Router>

);

module.exports = Routes;