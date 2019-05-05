var centreLatitude = 51.542530;
var centreLongitude = -0.080100;
var startZoom = 15;

var map;

function init() {
  if (GBrowserIsCompatible()) {
    dwidth=(jQuery.browser.safari)?($(window).width()-425):($(window).width()-410);
	dheight= $('#container').height()>$(window).height()?($('#container').height()+63):($(window).height()-5);
	$('#map').css('width',dwidth);
	$('#map').css('height',dheight);
	map = new GMap2(document.getElementById("map"));
    map.addControl(new GLargeMapControl());
    map.addControl(new GMapTypeControl());
	var location = new GLatLng(centreLatitude,centreLongitude);
    map.setCenter(location, startZoom, G_SATELLITE_MAP);
	var marker = new GMarker(location);
	map.addOverlay(marker);
    marker.openInfoWindowHtml('<h2>Address:</h2> <p>With Associates<br/>Top Floor<br/>100 De Beauvoir Road<br/>London, N1 4EN</p><p>+ 44 (0)20 7923 4757</p><p><a href="mailto:hello@withassociates.com">hello@withassociates.com</a></p><p><a href="http://maps.google.com/maps?f=q&hl=en&geocode=&time=&date=&ttype=&q=100 De Beauvoir Road+London, N1 4EN&sll=38.479395,-96.152344&sspn=28.698086,65.126953&ie=UTF8&om=1&ll=51.542518,-0.08008&spn=0.011183,0.0318&t=k&z=15&iwloc=addr">Get directions</a></p>');
  }
}

$(document).ready(function(){
	init();
});


$(window).resize(function(){
    init();
});


window.onunload = GUnload;