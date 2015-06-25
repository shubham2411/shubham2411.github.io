var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


var FootballScore = React.createClass({displayName: "FootballScore",
  getInitialState: function(){
    return {
      rows: [],
      ScoreBoard: true,
      commentary: true,
      stats: false,
      teams: false
    };
  },
  componentDidMount: function(){
    var self = this;
    var url = self.props.url;
    $.ajax({
      url: url,
      success:function(data) {
        if(data.ERROR==="no matches found today"){
          self.setState({
            rows:[-1],
            newRows:[],
            group: ""
          });
          return;
        }else    {self.setState({
          rows: data.commentaries,
          ScoreBoard: true,
          commentary: true,
          stats: false,
          teams: false
        });
      }
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
        stats: false,
        teams: false
      });
    }else if(btn==="Stats"){
      self.setState({
        rows: this.state.rows,
        ScoreBoard: true,
        commentary: false,
        stats: true,
        teams: false
      });
    }else if(btn==="Teams"){
      self.setState({
        rows: this.state.rows,
        ScoreBoard: true,
        commentary: false,
        stats: false,
        teams: true
      });
    }
  },
  render: function(){
    var com="Commentaries";
    var sum="Summary";
    var teamBtn="Teams";
    var stat="Stats";
    var self=this;
    if(this.state.rows.length===0){
      return (
        React.createElement("div", null, 
        "Loading..."
        )
      );
    }else if(this.state.rows[0]===-1){
      return (
        React.createElement("div", null, 
        "error"
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
        React.createElement("a", {style: this.comm_btn2, onClick: self.handleclick.bind(self, stat), key: stat}, "Stats"), 
        React.createElement("a", {style: this.comm_btn3, onClick: self.handleclick.bind(self, teamBtn), key: teamBtn}, "Teams")
        ), 
        React.createElement(Commentaries, {rows: rows, local_team: self.props.local_team, visitor_team: self.props.visitor_team})
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
        React.createElement("a", {style: this.comm_btn2, onClick: self.handleclick.bind(self, stat), key: stat}, "Stats"), 
        React.createElement("a", {style: this.comm_btn3, onClick: self.handleclick.bind(self, teamBtn), key: teamBtn}, "Teams")
        ), 
        React.createElement(StatsMatch, {rows: rows, local_team: self.props.local_team, visitor_team: self.props.visitor_team})
        )
      );
    }else if(this.state.teams===true){
      var self=this;
      var rows = self.state.rows;
      return(
        React.createElement("div", null, 
        React.createElement(ScoreBoard, {rows: rows, local_team: self.props.local_team, visitor_team: self.props.visitor_team}), 
        React.createElement("div", {style: self.divBar}, 
        React.createElement("a", {style: this.comm_btn1, onClick: self.handleclick.bind(self, com), key: com}, "Commentary"), 
        React.createElement("a", {style: this.comm_btn2, onClick: self.handleclick.bind(self, stat), key: stat}, "Stats"), 
        React.createElement("a", {style: this.comm_btn3, onClick: self.handleclick.bind(self, teamBtn), key: teamBtn}, "Teams")
        ), 
        React.createElement(Teams, {rows: rows, local_team: self.props.local_team, visitor_team: self.props.visitor_team})
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
        React.createElement("a", {style: this.comm_btn2, onClick: self.handleclick.bind(self, stat), key: stat}, "Stats"), 
        React.createElement("a", {style: this.comm_btn3, onClick: self.handleclick.bind(self, teamBtn), key: teamBtnms}, "Teams")
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
    left: '500px',
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
    left: '600px',
    width: '150px',
    height: '30px',
    color: 'white',
    fontSize: '14px',
    fontFamily: 'Tahoma, Geneva, sans-serif',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  comm_btn3:{
    position: 'absolute',
    top: '12px',
    left: '680px',
    width: '150px',
    height: '30px',
    color: 'white',
    fontSize: '14px',
    fontFamily: 'Tahoma, Geneva, sans-serif',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
