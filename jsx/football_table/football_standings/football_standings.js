/*
* ATTRIBUTES:
* url: <API URL as String>
* mark: <Team Names like comma separated Manchester United,Arsenal as String>
* range: <Query Range of Records like 1,3 as String>
* color: <Boolean true, false to show colors for 1st pos/ UCL / relegation>
*/

var Standings = React.createClass({
  getInitialState: function(){
    //rows and newRows being an array here and group a string to store the group name
    //rows do not change throughout the component while newRows is used to load different data
    return {
      rows: [],
      newRows: [],
      group: ""
    };
  },
  componentDidMount: function(){
    var self = this;
    //url being fetched from football-standings-table
    var url = self.props.url;

    var comp_id=this.props.comp_id;
    //success function for ajax call for the data from api
    $.ajax({
      url: url,
      success:function(data) {
        //condition for the check of incorrect or leagues without any standings
        if(data.ERROR==="Competition cannot be found"){
          self.setState({
            rows:[-1],
            newRows:[],
            group: ""
          });
          return;
        }else{
          //setting rows and new rows to the fetched data and groups to null
          self.setState({
            rows:data.teams,
            newRows:data.teams,
            group: ""
          });
        }
        // START: GET UNIQUE GROUPS
        var allGroups = new Array();
        data.teams.map(function(row){
          allGroups.push(row.stand_group);
        });
        allGroups = _.uniq(allGroups);
        // END: GET UNIQUE GROUPS

        //Setting the page to the default group
        self.grpFill(allGroups[0]);
      }
    });
  },
  // value=the group name
  grpFill: function(value){
    var val=value;
    var g;
    var mainArray={};
    //buttons not being displayed when no groups
    if(val==="")
    document.getElementById("bn").style.visibility="hidden";

    //Filling the main Array with required groups
    this.state.rows.map(function(row){
      if(mainArray.hasOwnProperty(row.stand_group)){
      }else{
        mainArray[row.stand_group]=new Array();
      }
      mainArray[row.stand_group].push(row);

    });

    //Setting state to the group chosen
    g=mainArray[val];

    this.setState({
      rows: this.state.rows,
      newRows: g,
      group: value
    });
  },
  //setting group=value so as to recognize user pressed which button
  render: function(){
    //for displaying No Standings when comp_id is invalid
    if(this.state.rows[0]===-1){
      return (

        <div>
        <table>
        <tr>
        <td style={this.Err1} className="hidden-xs visible-lg">No standings for this Competition</td>
        <td style={this.Err2} className="visible-xs hidden-lg 	">No standings for this Competition</td>

        </tr>
        </table>
        </div>
      );


    }else if(this.state.rows.length===0){
      //displaying loading on the page untill the rows get some data
      return (

        <div className="panel panel-default">
        <table>
        <tr>
        <td style={this.load}>Loading...</td>
        </tr>
        </table>
        </div>
      );
    }else{
      //displaying actual data

      var self = this;
      // START: GET UNIQUE GROUPS(Divyendu)
      var allGroups = new Array();
      this.state.rows.map(function(row){
        allGroups.push(row.stand_group);
      });
      allGroups = _.uniq(allGroups);
      // END: GET UNIQUE GROUPS

      var value;
      var rows = this.state.newRows.map(function(row){
        //Return for all the required data of rows
        return (
          <tr key={row.stand_team_id}>
          <td style={self.row} className="col-xs-1">{row.stand_position}</td>
          <td style={self.row} className="col-xs-3">{row.stand_team_name}</td>
          <td style={self.row} className="col-xs-1">{row.stand_overall_gp}</td>
          <td style={self.row} className="col-xs-1 hidden-xs">{row.stand_overall_w}</td>
          <td style={self.row} className="col-xs-1 hidden-xs">{row.stand_overall_d}</td>
          <td style={self.row} className="col-xs-1 hidden-xs">{row.stand_overall_l}</td>
          <td style={self.row} className="col-xs-1 hidden-xs">{row.stand_overall_gs}</td>
          <td style={self.row} className="col-xs-1 hidden-xs">{row.stand_overall_ga}</td>
          <td style={self.row} className="col-xs-1">{row.stand_gd}</td>
          <td style={self.row} className="col-xs-1">{row.stand_points}</td>
          </tr>
        );
      });
      //START: creating buttons
      var buttons = allGroups.map(function(oneGroup){
        return (
          <button style={self.getStyle(self.state.group, oneGroup)} id="bn" className="btn-primary" onClick={self.grpFill.bind(self, oneGroup)} key={oneGroup}>
          {oneGroup.split(" ")[1]}
          </button>
        );
      });
      //END: creating buttons

      //initializing the header as required
      var header=this.props.title;
      if(header==="")
      head="Standings";
      //Return for the required table headings
      return (

        <div className="panel panel-default">
        <br></br>
        <div className="panel-heading" style={this.heading}>{header}</div>
        <div>
        <div className="col-xs-12">
        <br></br>
        <div style={this.row}>
        {buttons}
        </div>
        <br></br>
        <table className="table table-bordered">
        <thead>
        <tr>
        <th style={this.row} className="">  #</th>
        <th style={this.row} className="">Club</th>
        <th style={this.row} className="">Played</th>
        <th style={this.row} className="hidden-xs">Won</th>
        <th style={this.row} className="hidden-xs">Draw</th>
        <th style={this.row} className="hidden-xs">Lost</th>
        <th style={this.row} className="hidden-xs">GF</th>
        <th style={this.row} className="hidden-xs">GA</th>
        <th style={this.row} className="">GD</th>
        <th style={this.row} className="">Points</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
        </table>
        </div>
        </div>
        </div>
      );
    }
  },
  //getStyle function used to set the button style to active class as and when clicked
  getStyle: function(a,b){
    if(a===b){
      return this.active;
    }else{
      return {}
    }
  },
  //css for rows
  row: {
    textAlign: 'center'
  },
  //css for buttons
  tab: {
    borderRadius: '50%',
    color: "",
    visibility: "visible"
  },
  //css for buttons when pressed
  active: {
    backgroundColor: 'red'
  },
  //css for heading(div)
  heading: {
    textAlign: 'left',
    fontSize: '30px'
  },
  //css for big screen no standings
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
  //css for loading
  load: {
    position: 'absolute',
    top: '300px',
    left: '550px',
    fontSize: '30px'
  }
});
