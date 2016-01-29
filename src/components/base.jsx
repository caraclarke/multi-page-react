var React = require('react');

var Base = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Header</h1>
        {this.props.children}
      </div>
    );
  }
});

// how does react know how to insert other pages
// how does it know to talk to router
// react router will do it because of this.props.children
  // saying we are inserting children -- child routes in routes jsx file
// wherever you put props.children is where things will be swapped in and out on your page

module.exports = Base;