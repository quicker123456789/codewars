/*
48° 12′ 30″ N
unescape("%B0"); // °
unescape("%u2032"); // ′
unescape("%u2033"); // ″
N, E > 0
S, W < 0 
*/
function decimalDeg(latlon){
  var arr = latlon.match(/\w+/g);
  var deg = +arr[0];
  var min = +arr[1];
  var sec = +arr[2];
  (arr[3].localeCompare('N') === 0 || arr[3].localeCompare('E') === 0)? sign = '+' : sign = '-';
  return +(sign  + (deg + min/60 + sec/3600));
}
//alert(decimalDeg(' 46° 38′ 0″ W'));

var rad = function(x) {
  return x * Math.PI / 180;
};

var distance = function(coord1, coord2) {
  lat1 = decimalDeg(coord1.split(',')[0]);
  lon1 = decimalDeg(coord1.split(',')[1]);
  lat2 = decimalDeg(coord2.split(',')[0]);
  lon2 = decimalDeg(coord2.split(',')[1]);
  
  // the Haversine formula
  var R = 6371; //Earth’s mean radius in meter = 6378137
  var dLat = rad(lat2 - lat1);
  var dLon = rad(lon2 - lon1);
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * 
                Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return (d/10 ^ 0)*10; // returns the distance in kilometer
};

/*
function distance(coord1, coord2){
    function parseCoord(coord){
        var r = /(\d+)° (\d+)′ (\d+)″ ([NS]), (\d+)° (\d+)′ (\d+)″ ([EW])/.exec(coord);

        var lat = (parseInt(r[1]) + parseInt(r[2])/60 + parseInt(r[3])/3600) * (r[4]=="S" ? -1 : 1);
        var lon = (parseInt(r[5]) + parseInt(r[6])/60 + parseInt(r[7])/3600) * (r[8]=="W" ? -1 : 1);

        return {'lat': deg2rad(lat), 'lon': deg2rad(lon)};
    }
    function deg2rad(deg){
        return deg * Math.PI / 180;
    }
    coord1 = parseCoord(coord1);
    coord2 = parseCoord(coord2);
    var dlon = coord2.lon - coord1.lon,
        dlat = coord2.lat - coord1.lat;
    var a = Math.pow(Math.sin(dlat/2), 2) + Math.cos(coord1.lat) * Math.cos(coord2.lat) * Math.pow(Math.sin(dlon/2), 2),
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)),
        d = 6371 * c;

    return Math.floor(d/10) * 10;
}
*/

alert(distance("48° 12′ 30″ N, 16° 22′ 23″ E", "58° 18′ 0″ N, 134° 25′ 0″ W"));