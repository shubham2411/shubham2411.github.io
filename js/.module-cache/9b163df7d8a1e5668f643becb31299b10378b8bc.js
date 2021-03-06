var Teams = React.createClass({displayName: "Teams",
  getInitialState: function(){
    return {
      rows : this.props.rows
    };
  },

  render: function(){
    var self=this;
    var lclPlayers=[];
    var visPlayers=[];
    var lcl_team=self.props.local_team;
    var vis_team=self.props.visitor_team;
    var rows = this.state.rows.map(function(row){
      var lclStats=row.comm_match_teams.localteam.player;
      var visStats=row.comm_match_teams.visitorteam.player;

      for(i=1;i<=11;i++){
        lclPlayers.push(lclStats[i.toString()]);
      }
      for(i=1;i<=11;i++){
        visPlayers.push(visStats[i.toString()]);
      }
    });
    var localPlayers = lclPlayers.map(function(row){

      return(
        React.createElement("div", null, 
        React.createElement(ReactCSSTransitionGroup, {transitionName: "example", transitionAppear: true}, 
        React.createElement("div", null, 
        React.createElement("table", {className: "table"}, 
        React.createElement("tr", null, 
        React.createElement("td", {style: self.row}, row.number), 
        React.createElement("td", {style: self.row}, row.name)
        )
        )
        )
        )
        )
      );

    });
    var visitorPlayers = visPlayers.map(function(row){

      return(
        React.createElement("div", null, 
        React.createElement(ReactCSSTransitionGroup, {transitionName: "example", transitionAppear: true}, 
        React.createElement("div", null, 
        React.createElement("table", {className: "table"}, 
        React.createElement("tr", null, 
        React.createElement("td", {style: self.row}, row.number), 
        React.createElement("td", {style: self.row}, row.name)
        )
        )
        )
        )
        )
      );

    });

    return (
      React.createElement("div", {style: self.statsTable}, 

      React.createElement("div", {style: self.localPlayer}, 
      React.createElement("p", {style: self.teamName1}, 
      lcl_team
      ), 
      localPlayers
      ), 

      React.createElement("div", {style: self.visitorPlayer}, 
      React.createElement("p", {style: self.teamName2}, 
      vis_team
      ), 
      visitorPlayers
      )

      )
    );
  },
  statsTable:{
    position: 'absolute',
    top: '300px',
    left: '50px'
  },
  row: {
    position: 'relative',
    fontSize: '20px'
  },
  teamName1: {
    position: 'relative',
    fontSize: '25px',
    fontWeight: 'bold',

  },
  teamName2: {
    position: 'relative',
    fontSize: '25px',
    fontWeight: 'bold',

  },
  localPlayer: {
    position: 'relative',
    fontSize: '20px',
    top: '20px',
    left:'200px',
    width: '500px'
  },
  visitorPlayer: {
    position: 'relative',
    fontSize: '20px',
    top: '20px',
    left:'700px',
    width: '500px'
  },
});
