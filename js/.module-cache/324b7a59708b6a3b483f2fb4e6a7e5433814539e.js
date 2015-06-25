var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


var FootballScore = React.createClass({displayName: "FootballScore",
  getInitialState: function(){
    return {
      rows: [],
      ScoreBoard: true,
      commentary: true,
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
          commentary: true,
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
        React.createElement(Teams, {rows: rows, local_team: self.props.local_team, visitor_team: self.props.visitor_team})
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
        React.createElement(StatsMatch, {rows: rows, local_team: self.props.local_team, visitor_team: self.props.visitor_team})
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


var Teams = React.createClass({displayName: "Teams",
  getInitialState: function(){
    return {
      rows : this.props.rows
    };
  },

render: function(){
  var self=this;

  var lcl_team=self.props.local_team;
  var vis_team=self.props.visitor_team;

  var rows = this.state.rows.map(function(row){
    var lclStats=row.comm_match_teams.localteam.player;
    var visStats=row.comm_match_teams.visitorteam.player;
    // for(i=1;i<=11;i++){
    var i=1;
          var num=lclStats[i.toString()].number;
          var name=lclStats[i.toString()].name;

    return(
      React.createElement("div", null, 
      React.createElement(ReactCSSTransitionGroup, {transitionName: "example", transitionAppear: true}, 
      React.createElement("div", null, 
      React.createElement("table", {style: self.statsTable, className: "table"}, 
      React.createElement("tr", null, 
        React.createElement("th", {style: self.rw}, lcl_team)

      ), 

      React.createElement("tr", null, 
      React.createElement("td", {style: self.rw}, num), 
      React.createElement("td", {style: self.rw}, name)
      )

      )
      )
      )
      )
    );
  // }
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
