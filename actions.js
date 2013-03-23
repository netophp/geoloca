// Geolocalizacion
function inicio(){
	
	document.addEventListener("deviceready",function(){
		
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	
	function onSuccess(position) {

 	var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  	var mapOptions = {
		zoom: 15,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	  }
  
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"Hello World!"
  });
  
  
	}  function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }
	},false);
	
	
  
}

/*function coordenadas(){
	var arr = [];*/
	
	

/*return arr;
	}*/