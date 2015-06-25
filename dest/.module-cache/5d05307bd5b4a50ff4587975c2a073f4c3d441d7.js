var Directions = React.createClass({displayName: "Directions",
  getInitialState: function(){
    return {

    };
  },

  render: function(){
  var myKeyPress= function(e){

            e = e || window.event;

            if (e.keyCode == '38') {
              alert('up');
            }
            else if (e.keyCode == '40') {
              alert('down');
            }
            else if (e.keyCode == '37') {
              alert('left');
            }
            else if (e.keyCode == '39') {
              alert('right');
            }
      }
    return (
      React.createElement("div", {onkeypress: "return myKeyPress(event)"}, "ds")
    );
  },
});
