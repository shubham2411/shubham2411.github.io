var Directions = React.createClass({
  getInitialState: function(){
    return {
      head : "up"
    };
  },
  myKeyPress: function(event){
    var self=this;
    event = event || window.event;

    if (event.keyCode == '38') {
      self.setState({
        head : "up"
      });
    }
    else if (event.keyCode == '40') {
      self.setState({
        head : "down"
      });
    }
    else if (event.keyCode == '37') {
      self.setState({
        head : "left"
      });
    }
    else if (event.keyCode == '39') {
      self.setState({
        head : "right"
      });

    }
  },
  render: function(){
    var self=this;

    return (
      // <div onKeyPress={self.myKeyPress}>{this.state.head}</div>
      <div ><input onKeyDown={self.myKeyPress}>{this.state.head}</input></div>
    );
  },
});
