var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


var FootballScore = React.createClass({
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
        <div>
        Loading...
        </div>
      );
    }else if(this.state.rows[0]===-1){
      return (
        <div>
        <table>
        <tr>
        <td style={this.Err1} className="hidden-xs visible-lg">No match</td>
        <td style={this.Err2} className="visible-xs hidden-lg 	">No match</td>

        </tr>
        </table>
        </div>
      );
    }else if(this.state.commentary===true){
      var self=this;
      var rows = self.state.rows;
      return(
        <div>

        <div>
        <ScoreBoard rows={rows} local_team={self.props.local_team} visitor_team={self.props.visitor_team}></ScoreBoard>
        <div style={self.divBar}>
        <a style={this.comm_btn1}  onClick={self.handleclick.bind(self, com)} key={com}>Commentary</a>
        <a style={this.comm_btn2}  onClick={self.handleclick.bind(self, stat)} key={stat}>Stats</a>
        <a style={this.comm_btn3}  onClick={self.handleclick.bind(self, teamBtn)} key={teamBtn}>Teams</a>
        </div>

        </div>
        <Commentaries rows={rows} local_team={self.props.local_team} visitor_team={self.props.visitor_team}></Commentaries>
        </div>
      );
    }else if(this.state.stats===true){
      var self=this;
      var rows = self.state.rows;
      return(
        <div>
        <ScoreBoard rows={rows} local_team={self.props.local_team} visitor_team={self.props.visitor_team}></ScoreBoard>
        <div style={self.divBar}>
        <a style={this.comm_btn1}  onClick={self.handleclick.bind(self, com)} key={com}>Commentary</a>
        <a style={this.comm_btn2}  onClick={self.handleclick.bind(self, stat)} key={stat}>Stats</a>
        <a style={this.comm_btn3}  onClick={self.handleclick.bind(self, teamBtn)} key={teamBtn}>Teams</a>
        </div>
        <StatsMatch rows={rows} local_team={self.props.local_team} visitor_team={self.props.visitor_team}></StatsMatch>
        </div>
      );
    }else if(this.state.teams===true){
      var self=this;
      var rows = self.state.rows;
      return(
        <div>
        <ScoreBoard rows={rows} local_team={self.props.local_team} visitor_team={self.props.visitor_team}></ScoreBoard>
        <div style={self.divBar}>
        <a style={this.comm_btn1}  onClick={self.handleclick.bind(self, com)} key={com}>Commentary</a>
        <a style={this.comm_btn2}  onClick={self.handleclick.bind(self, stat)} key={stat}>Stats</a>
        <a style={this.comm_btn3}  onClick={self.handleclick.bind(self, teamBtn)} key={teamBtn}>Teams</a>
        </div>
        <Teams rows={rows} local_team={self.props.local_team} visitor_team={self.props.visitor_team}></Teams>
        </div>
      );
    }else {
      var self=this;
      var rows = self.state.rows;
      return(
        <div>
        <ScoreBoard rows={rows} local_team={self.props.local_team} visitor_team={self.props.visitor_team}></ScoreBoard>
        <div style={self.divBar}>
        <a style={this.comm_btn1} onClick={self.handleclick.bind(self, com)} key={com}>Commentary</a>
        <a style={this.comm_btn2} onClick={self.handleclick.bind(self, stat)} key={stat}>Stats</a>
        <a style={this.comm_btn3}  onClick={self.handleclick.bind(self, teamBtn)} key={teamBtnms}>Teams</a>
        </div>
        </div>
      );
    }
  },
  Err1: {
    position: 'absolute',
    top: '300px',
    left: '450px',
    fontSize: '30px'
  },
  //css for small screen no standings
  Err2: {
    position: 'absolute',
    top: '200px',
    left: '120px',
    fontSize: '30px'
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
