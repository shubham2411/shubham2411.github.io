function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

}
var local_team=getParameterByName("local_team").replace("/", "");
var visitor_team=getParameterByName("visitor_team").replace("/", "");
var match_id=getParameterByName("match_id").replace("/", "");

var basrUrl = "http://football-api.sportskeeda.com/&Action=commentaries&";
var url=basrUrl+"match_id="+match_id;


React.render(
  React.createElement(FootballScore, {local_team: local_team, visitor_team: visitor_team, url: url}),
  document.getElementById("score")
);
//1961502 chile vs ec
