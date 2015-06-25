var StatsMatch = React.createClass({displayName: "StatsMatch",
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
        React.createElement("div", null, 
        React.createElement(ReactCSSTransitionGroup, {transitionName: "example", transitionAppear: true}, 
        React.createElement("div", null, 
        React.createElement("table", {style: self.statsTable, className: "table"}, 
        React.createElement("tr", null, 
        React.createElement("th", {style: self.rw}, lcl_team), 
        React.createElement("th", {style: self.rw}, "Statistics"), 
        React.createElement("th", {style: self.rw}, vis_team)
        ), 

        React.createElement("tr", null, 
        React.createElement("td", {style: self.rw}, lclStats.shots.total), 
        React.createElement("td", {style: self.rw}, "Shots"), 
        React.createElement("td", {style: self.rw}, visStats.shots.total)
        ), 

        React.createElement("tr", null, 
        React.createElement("td", {style: self.rw}, lclStats.fouls.total), 
        React.createElement("td", {style: self.rw}, "Fouls"), 
        React.createElement("td", {style: self.rw}, visStats.fouls.total)
        ), 

        React.createElement("tr", null, 
        React.createElement("td", {style: self.rw}, lclStats.corners.total), 
        React.createElement("td", {style: self.rw}, "Corners"), 
        React.createElement("td", {style: self.rw}, visStats.corners.total)
        ), 

        React.createElement("tr", null, 
        React.createElement("td", {style: self.rw}, lclStats.offsides.total), 
        React.createElement("td", {style: self.rw}, "Off sides"), 
        React.createElement("td", {style: self.rw}, visStats.offsides.total)
        ), 

        React.createElement("tr", null, 
        React.createElement("td", {style: self.rw}, lclStats.possestiontime.total), 
        React.createElement("td", {style: self.rw}, "Possession Time"), 
        React.createElement("td", {style: self.rw}, visStats.possestiontime.total)
        ), 

        React.createElement("tr", null, 
        React.createElement("td", {style: self.rw}, lclStats.yellowcards.total), 
        React.createElement("td", {style: self.rw}, "Yellow Cards"), 
        React.createElement("td", {style: self.rw}, visStats.yellowcards.total)
        ), 

        React.createElement("tr", null, 
        React.createElement("td", {style: self.rw}, lclStats.redcards.total), 
        React.createElement("td", {style: self.rw}, "Red Cards"), 
        React.createElement("td", {style: self.rw}, visStats.redcards.total)
        ), 

        React.createElement("tr", null, 
        React.createElement("td", {style: self.rw}, lclStats.saves.total), 
        React.createElement("td", {style: self.rw}, "Saves"), 
        React.createElement("td", {style: self.rw}, visStats.saves.total)
        )
        )
        )
        )
        )
      );
    });
    return (
      React.createElement("div", null, 
      rows
      )
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
