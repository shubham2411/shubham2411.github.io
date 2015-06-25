var Directions = React.createClass({displayName: "Directions",
  getInitialState: function(){
    return {
      head : "up"
    };
  },
  myKeyPress: function(event){
    console.log("in mykeypres");
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
      React.createElement("div", {vent: true}, React.createElement("input", {onKeyPress: self.myKeyPress}, this.state.head))
    );
  },
});
