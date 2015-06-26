var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var routes = (
  React.createElement(Route, {handler: App}, 
    React.createElement(Route, {path: "about", handler: About}), 
    React.createElement(Route, {path: "inbox", handler: Inbox})
  )
);

var App = React.createClass({displayName: "App",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "App"), 
        React.createElement(RouteHandler, null)
      )
    )
  }
});
Router.run(routes, Router.HashLocation, (Root) => {
 React.render(React.createElement(Root, null), document.body);
});
