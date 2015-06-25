var Teams = React.createClass({
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
        <div>
        <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
        <div>
        <table className="table">
        <tr>
        <td style={self.row}>{row.number}</td>
        <td style={self.row}>{row.name}</td>
        </tr>
        </table>
        </div>
        </ReactCSSTransitionGroup>
        </div>
      );

    });
    var visitorPlayers = visPlayers.map(function(row){

      return(
        <div>
        <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
        <div>
        <table className="table">
        <tr>
        <td style={self.row}>{row.number}</td>
        <td style={self.row}>{row.name}</td>
        </tr>
        </table>
        </div>
        </ReactCSSTransitionGroup>
        </div>
      );

    });

    return (
      <table style={self.statsTable}>
      <tr>
      <td>
      <div style={self.localPlayer}>
      <p style={self.teamName1}>
      {lcl_team}
      </p>
      {localPlayers}
      </div>
      </td>

      <td>
      <div style={self.visitorPlayer}>
      <p style={self.teamName2}>
      {vis_team}
      </p>
      {visitorPlayers}
      </div>
      </td>
      </tr>
      </table>
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
    left:'200px'
  },
  visitorPlayer: {
    position: 'relative',
    fontSize: '20px',
    top: '20px',
    left:'700px'
  },
});
