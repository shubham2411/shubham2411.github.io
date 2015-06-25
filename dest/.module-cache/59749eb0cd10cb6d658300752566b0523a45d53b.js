var Directions = React.createClass({displayName: "Directions",
  getInitialState: function(){
    return {
      head : "up"
    };
  },

  render: function(){
    var self=this;
    var myKeyPress= function(e){

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
    }
    return (
      React.createElement("div", {onkeypress: "return myKeyPress(event)"}, this.state.head)
    );
  },
});
