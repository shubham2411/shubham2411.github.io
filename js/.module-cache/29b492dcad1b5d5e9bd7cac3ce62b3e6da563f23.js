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
        self.setState({
          rows: data.commentaries,
          ScoreBoard: true,
          commentary: true,
          stats: false,
          teams: false
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



// var Teams = React.createClass({
//   getInitialState: function(){
//     return {
//       rows : this.props.rows
//     };
//   },
//
//   render: function(){
//     var self=this;
//     var lclPlayers=[];
//     var lcl_team=self.props.local_team;
//     var vis_team=self.props.visitor_team;
//     var rows = this.state.rows.map(function(row){
//       var lclStats=row.comm_match_teams.localteam.player;
//       var visStats=row.comm_match_teams.visitorteam.player;
//
//       for(i=1;i<=11;i++){
//         lclPlayers.push(lclStats[i.toString()]);
//       }
//
//     });
//     var players = lclPlayers.map(function(row){
//
//       return(
//         <div>
//         <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
//         <div>
//         <table className="table">
//         <tr>
//         <td style={self.row}>{row.number}</td>
//         <td style={self.row}>{row.name}</td>
//         </tr>
//
//         </table>
//         </div>
//         </ReactCSSTransitionGroup>
//         </div>
//       );
//
//     });
//     return (
//       <div style={self.statsTable}>
//       <div style={self.teamName1}>
//       {lcl_team}
//       </div>
//       <div style={self.players}>
//       {players}
//       </div>
//       </div>
//     );
//   },
//   statsTableHeading:{
//     position: 'relative',
//     top: '300px',
//     left: '50px'
//
//   },
//   statsTable:{
//     position: 'absolute',
//     top: '300px',
//     left: '50px'
//
//   },
//   row: {
//     position: 'relative',
//     fontSize: '20px'
//   },
//   teamName1: {
//     position: 'relative',
//     fontSize: '20px',
//     fontWeight: 'bold'
//   },
//   players: {
//     position: 'relative',
//     fontSize: '20px',
//     top: '20px'
//   },
// });
