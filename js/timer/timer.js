var Timer = React.createClass({displayName: "Timer",
  getInitialState: function(){
    return {
        time: 0
      };
  },
  tick: function(){
    var _this = this;
    this.setState({
      time: _this.state.time + 1
    });
  },
  componentDidMount: function(){
    this.timer = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
  },
  click: function(){
    console.log("clicked");
  },
  render: function(){
    return(
    React.createElement("div", null, 
      "Time: ", this.state.time, 
      React.createElement("button", {onClick: this.click}, "Hello")
    )
    );
  }
});
