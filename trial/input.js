

var AddScore = React.createClass({
  getInitialState: function(){

    return {
        fb:"",
        cr:"",
        others:"",
        yes:"",
        no:""

    };
  },
  componentDidMount: function(){
    var self=this;
    self.setState({
      fb:"false",
      cr:"false",
      others:"false",
      yes:"false",
      no:"false"
      });

  },
fn1: function(){
  var self=this;
  self.setState({
    fb:"true",
    cr:"false",
    others:"false",
    yes:"false",
    no:"false"
    });
},
fn2: function(){
  var self=this;
  self.setState({
    fb:"false",
    cr:"true",
    others:"false",
    yes:"false",
    no:"false"
    });
},
fn3: function(){
  var self=this;
  self.setState({
    fb:"false",
    cr:"false",
    others:"true",
    yes:"false",
    no:"false"
    });
},

  render: function(){
    var self=this;
    if(this.state.fb==="true"||this.state.cr==="true"||this.state.others==="true"){
      return(
        <div>
        <p>Add Score</p>
        <input type="radio">fb</input>
        <input type="radio">cr</input>
        <input type="radio">others</input>
        <div style={this.st}>
        <p>Auto
        <input type="radio">yes</input>
        <input type="radio">no</input>
        </p>
        </div>
        </div>
      );
    }else{
    return(
      <div>
      <p>Add Score</p>
      <input type="radio" onClick={self.fn1}>fb</input>
      <input type="radio" onClick={self.fn2}>cr</input>
      <input type="radio" onClick={self.fn3}>others</input>
      </div>
    );
}
},
st: {
  position: 'absolute',
  top: '60px',
  left: '5px'
},

});
