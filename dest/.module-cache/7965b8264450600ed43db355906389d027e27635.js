var Directions = React.createClass({displayName: "Directions",
  getInitialState: function(){
    return {
      head : "up"
    };
  },
  myKeyPress: function(event){
    console.log("in mykeypres");
    e = e || window.event;

    if (e.keyCode == '38') {
      self.setState({
        head : "up"
      });
    }
    else if (e.keyCode == '40') {
      self.setState({
        head : "down"
      });
    }
    else if (e.keyCode == '37') {
      self.setState({
        head : "left"
      });
    }
    else if (e.keyCode == '39') {
      self.setState({
        head : "right"
      });

    }
  },
  render: function(){
    var self=this;

    return (
      React.createElement("div", {onClick: self.myKeyPress}, this.state.head)
    );
  },
});
