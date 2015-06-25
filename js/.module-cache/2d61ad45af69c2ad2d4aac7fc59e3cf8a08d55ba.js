

var FootballScore = React.createClass({displayName: "FootballScore",
  getInitialState: function(){
    return {
      rows: [],
      ScoreBoard: true,
      commentary: false,
      stats: false
    };
  },
  componentDidMount: function(){
    var self = this;
    var url = self.props.url;
    // console.log(url);
    $.ajax({
      url: url,
      success:function(data) {
        self.setState({
          rows: data.commentaries,
          ScoreBoard: true,
          commentary: false,
          stats: false
        });
      }
    });
  },
  handleclick: function(btn){
    var self=this;
    if(btn==="Commentaries"){
    self.setState({
      rows: this.state.rows,
      ScoreBoard: true,
      commentary: true,
      stats: false
    });
  }else if(btn==="Stats"){
    self.setState({
      rows: this.state.rows,
      ScoreBoard: true,
      commentary: false,
      stats: true
    });
  }
  },
  render: function(){
    var com="Commentaries";
    var sum="Summary";
    var team="Teams";
    var stat="Stats";
    var self=this;
    if(this.state.rows.length===0){
      return (
        React.createElement("div", null, 
        "Loading..."
        )
      );
    }else if(this.state.commentary===true){
      var self=this;
      var rows = self.state.rows;
      return(
        React.createElement("div", null, 
        React.createElement(ScoreBoard, {rows: rows, local_team: self.props.local_team, visitor_team: self.props.visitor_team}), 
        React.createElement("div", {style: self.divBar}, 
        React.createElement("a", {style: this.comm_btn1, onClick: self.handleclick.bind(self, com), key: com}, "Commentary"), 
        React.createElement("a", {style: this.comm_btn2, onClick: self.handleclick.bind(self, stat), key: stat}, "Stats")
        ), 
        React.createElement(Commentaries, {rows: rows})
        )
      );
    }else if(this.state.stats===true){
      var self=this;
      var rows = self.state.rows;
      return(
        React.createElement("div", null, 
        React.createElement(ScoreBoard, {rows: rows, local_team: self.props.local_team, visitor_team: self.props.visitor_team}), 
        React.createElement("div", {style: self.divBar}, 
        React.createElement("a", {style: this.comm_btn1, onClick: self.handleclick.bind(self, com), key: com}, "Commentary"), 
        React.createElement("a", {style: this.comm_btn2, onClick: self.handleclick.bind(self, stat), key: stat}, "Stats")
        ), 
        React.createElement(StatsMatch, {rows: rows})
        )
      );
    }else {
      var self=this;
      var rows = self.state.rows;
      return(
        React.createElement("div", null, 
        React.createElement(ScoreBoard, {rows: rows, local_team: self.props.local_team, visitor_team: self.props.visitor_team}), 
        React.createElement("div", {style: self.divBar}, 
        React.createElement("a", {style: this.comm_btn1, onClick: self.handleclick.bind(self, com), key: com}, "Commentary"), 
        React.createElement("a", {style: this.comm_btn2, onClick: self.handleclick.bind(self, stat), key: stat}, "Stats")
        )
        )
      );
    }
  },
  divBar: {
    position: 'absolute',
    top: '250px',
    height: '40px',
    width: '1500px',
    border:'0px solid black',
    backgroundColor: '#0066FF'
  },

  comm_btn1:{
    position: 'absolute',
    top: '12px',
    left: '50px',
    width: '150px',
    height: '30px',
    color: 'white',
    fontSize: '14px',
    fontFamily: 'Tahoma, Geneva, sans-serif',
    fontWeight: 'bold',
    textAlign: 'center'
  },

    comm_btn2:{
      position: 'absolute',
      top: '12px',
      left: '150px',
      width: '150px',
      height: '30px',
      color: 'white',
      fontSize: '14px',
      fontFamily: 'Tahoma, Geneva, sans-serif',
      fontWeight: 'bold',
      textAlign: 'center'
    },
});

var StatsMatch = React.createClass({displayName: "StatsMatch",
  getInitialState: function(){
    return {
      rows : this.props.rows
    };
  },

  render: function(){
    var self=this;
    return (
      React.createElement("div", null, 
      "test"
      )
    );
},
});
