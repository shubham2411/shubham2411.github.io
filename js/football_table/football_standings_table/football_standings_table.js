//START:extracting required name from URI
function getParameterByName(name) {

    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");

    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),

        results = regex.exec(location.search);

    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

}
//END:returns the required name from URI

var comp_id=getParameterByName("comp_id").replace("/", "");
var title=getParameterByName("title").replace("/", "");

//the base_url + comp_id give us the required url to fetch data from the api
base_url="http://football-api.sportskeeda.com/&Action=standings&";
url=base_url+"comp_id="+comp_id;

React.render(
  React.createElement(Standings, {title: title, url: url}),
  document.getElementById("football-standings")
);
