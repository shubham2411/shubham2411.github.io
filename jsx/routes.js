var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var routes = (
  <Route handler={App}>
    <Route path="about" handler={About}/>
    <Route path="inbox" handler={Inbox}/>
  </Route>
);

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>App</h1>
        <RouteHandler/>
      </div>
    )
  }
});
Router.run(routes, Router.HashLocation, (Root) => {
 React.render(<Root/>, document.body);
});
