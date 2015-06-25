var Timer = React.createClass({
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
    <div >
      Time: {this.state.time}
      <button onClick={this.click}>Hello</button>
    </div>
    );
  }
});
