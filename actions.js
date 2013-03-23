// Geolocalizacion
function inicio(){
	
	document.addEventListener("deviceready",function(){
	
 var myLatlng = new google.maps.LatLng(coordenadas()['latitude'],coordenadas()['longitude']);
  var mapOptions = {
    zoom: 4,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"Hello World!"
  });
	},false);
  
}

function coordenadas(){
	var arr = [];
	
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
	
	function onSuccess(position) {
    	arr['latitude']=position.coords.latitude;
        arr['Longitude']=position.coords.longitude;
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

return arr;
	}