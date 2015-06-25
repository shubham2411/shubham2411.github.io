var ScoreBoard = React.createClass({displayName: "ScoreBoard",
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
    var score1=this.state.rows;

    var rows = this.state.rows.map(function(row){
    var localteam = row.comm_match_summary.localteam.goals;
    var visitorteam = row.comm_match_summary.visitorteam.goals;

    var stadium = row.comm_match_info.stadium.name;
    var localteam_goals = 0;
    var visitorteam_goals = 0;

    if(!localteam.hasOwnProperty('length')) {
      var keys = [];
      for(var k in localteam.player){
        if(localteam.player.hasOwnProperty(k)){
          keys.push(k);
        }
      }
      localteam_goals = keys.length;
    }else{
      localteam_goals = localteam.length;
    }

    if(!visitorteam.hasOwnProperty('length')) {
      var keys = [];
      for(var k in visitorteam.player){
        if(visitorteam.player.hasOwnProperty(k)){
          keys.push(k);
        }
      }
      visitorteam_goals = keys.length;
    }else{
      visitorteam_goals = visitorteam.length;
    }
    var linkLocal="http://static.sportskeeda.com/football_images/"+(lcl_team.toLowerCase())+".png";
    var linkVis="http://static.sportskeeda.com/football_images/"+(vis_team.toLowerCase())+".png";

   return(
      React.createElement("div", null, 

      React.createElement("div", {style: self.box}, 


      React.createElement("div", null, 

      React.createElement("div", {style: self.localTeamScore}, 
      React.createElement("b", {style: self.teamName1}, lcl_team)
      ), 

      React.createElement("img", {style: self.localTeamImg, src: linkLocal}), 

      React.createElement("div", {style: self.localTeam}, 
      React.createElement("p", {style: self.localScore}, localteam_goals)
      )

      ), 



      React.createElement("div", null, 

      React.createElement("div", {style: self.visitorTeamScore}, 
      React.createElement("b", {style: self.teamName2}, vis_team)
      ), 

      React.createElement("img", {style: self.visitorTeamImg, src: linkVis}), 

      React.createElement("div", {style: self.visitorTeam}, 
      React.createElement("p", {style: self.visitorScore}, visitorteam_goals)
      )

      ), 

      React.createElement("h5", {style: self.stadium}, stadium)

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
  box: {
    position: 'absolute',
    height: '250px',
    width: '1365px',
    backgroundImage: 'url(' + "https://slcontent.s3.amazonaws.com/photos-cache/taxonomy/378fbf9a3a49a519bff5f4b8e0b5c412342f47c7.jpg" + ')'
  },
  localTeamScore: {
    position: 'absolute',
    top: '90px',
    left: '320px',
    backgroundColor: 'black',
    height: '65px',
    width: '300px',
    opacity: '0.6',
    fontFamily: 'Lucida Console'

  },
  visitorTeamScore: {
    position: 'absolute',
    top: '90px',
    left: '770px',
    backgroundColor: 'black',
    height: '65px',
    width: '300px',
    opacity: '0.6',
    fontFamily: 'Lucida Console'
  },
  localTeam: {
    position: 'absolute',
    height: '65px',
    width: '60px',
    backgroundColor: 'red',
    left: '610px',
    top: '90px'

  },
  visitorTeam: {
    position: 'absolute',
    height: '65px',
    width: '60px',
    backgroundColor: 'red',
    left: '710px',
    top: '90px'
  },
  teamName1: {
    position: 'absolute',
    top: '25px',
    left: '190px',
    color: 'white',
    fontSize: '18px'
  },
  teamName2: {
    position: 'absolute',
    top: '25px',
    left: '10px',
    color: 'white',
    fontSize: '18px'
  },
  localScore: {
    position: 'absolute',
    top: '10px',
    left: '19px',
    color: 'white',
    fontSize: '35px'

  },
  visitorScore: {
    position: 'absolute',
    top: '10px',
    left: '19px',
    color: 'white',
    fontSize: '35px'

  },
  localTeamImg: {
    position: 'absolute',
    top: '73px',
    left: '235px',
    borderRadius: '50%',
    height: '100px',
    width: '100px',
    backgroundColor: 'white'
    },
   visitorTeamImg: {
     position: 'absolute',
     top: '73px',
     left: '1030px',
     borderRadius: '50%',
     height: '100px',
     width: '100px'
  },
  stadium: {
    position: 'absolute',
    top: '190px',
    left: '600px',
    color: 'white'
  },

});
