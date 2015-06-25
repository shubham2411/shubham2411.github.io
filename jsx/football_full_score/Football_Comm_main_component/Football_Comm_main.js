function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

}
var local_team=getParameterByName("local_team").replace("/", "");
var visitor_team=getParameterByName("visitor_team").replace("/", "");

var url = "http://football-api.sportskeeda.com/&Action=commentaries&match_id=1961509";

React.render(
  <Commentaries url={url}></Commentaries>,
  document.getElementById("comment")
);
