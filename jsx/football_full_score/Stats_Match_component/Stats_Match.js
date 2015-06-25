var StatsMatch = React.createClass({
  getInitialState: function(){
    return {
      rows : this.props.rows
    };
  },

  render: function(){
    var self=this;
    var capitalizeFirstLetter= function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    var lcl_team=capitalizeFirstLetter(self.props.local_team);
    var vis_team=capitalizeFirstLetter(self.props.visitor_team);

    var rows = this.state.rows.map(function(row){
      var lclStats=row.comm_match_stats.localteam;
      var visStats=row.comm_match_stats.visitorteam;
      return(
        <div>
        <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
        <div>
        <table style={self.statsTable} className="table">
        <tr>
        <th style={self.rw}>{lcl_team}</th>
        <th style={self.rw}>Statistics</th>
        <th style={self.rw}>{vis_team}</th>
        </tr>

        <tr>
        <td style={self.rw}>{lclStats.shots.total}</td>
        <td style={self.rw}>Shots</td>
        <td style={self.rw}>{visStats.shots.total}</td>
        </tr>

        <tr>
        <td style={self.rw}>{lclStats.fouls.total}</td>
        <td style={self.rw}>Fouls</td>
        <td style={self.rw}>{visStats.fouls.total}</td>
        </tr>

        <tr>
        <td style={self.rw}>{lclStats.corners.total}</td>
        <td style={self.rw}>Corners</td>
        <td style={self.rw}>{visStats.corners.total}</td>
        </tr>

        <tr>
        <td style={self.rw}>{lclStats.offsides.total}</td>
        <td style={self.rw}>Off sides</td>
        <td style={self.rw}>{visStats.offsides.total}</td>
        </tr>

        <tr>
        <td style={self.rw}>{lclStats.possestiontime.total}</td>
        <td style={self.rw}>Possession Time</td>
        <td style={self.rw}>{visStats.possestiontime.total}</td>
        </tr>

        <tr>
        <td style={self.rw}>{lclStats.yellowcards.total}</td>
        <td style={self.rw}>Yellow Cards</td>
        <td style={self.rw}>{visStats.yellowcards.total}</td>
        </tr>

        <tr>
        <td style={self.rw}>{lclStats.redcards.total}</td>
        <td style={self.rw}>Red Cards</td>
        <td style={self.rw}>{visStats.redcards.total}</td>
        </tr>

        <tr>
        <td style={self.rw}>{lclStats.saves.total}</td>
        <td style={self.rw}>Saves</td>
        <td style={self.rw}>{visStats.saves.total}</td>
        </tr>
        </table>
        </div>
        </ReactCSSTransitionGroup>
        </div>
      );
    });
    return (
      <div>
      {rows}
      </div>
    );
  },
  statsTable:{
    position: 'absolute',
    top: '300px',
    left: '50px'

  },
  rw: {
    fontSize: '20px'
  },
});
