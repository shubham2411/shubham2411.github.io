var Directions = React.createClass({displayName: "Directions",
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
    $('#idtext').keypress(function(event) {
  var keyCode = event.keyCode;
  $('#idtext').text(function(i, text) {

   return text + String.fromCharCode(keyCode);

  });

});

    return (
      // <div onKeyPress={self.myKeyPress}>{this.state.head}</div>
      React.createElement("div", null, React.createElement("input", {id: "idtext"}, this.state.head))
    );
  },
});
