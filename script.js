document.getElementById("check").addEventListener("click", getLocation)

function getLocation(){
    
    navigator.geolocation.getCurrentPosition(success,error);

	
    function success(positions){
        
        var lat=positions.coords.latitude;
        var lon=positions.coords.longitude;
        var acc=positions.coords.accuracy;
                                         
        document.getElementById("map").innerHTML=` <ol>
                                                        <li>Latitude = ${lat}</li> 
                                                        <li>longitude = ${lon}</li>
                                                        <li>accuracy = ${acc}</li>
                                                    </ol> `
    }
    
    
    function error(err){
        alert("please enable the location");
    }

}
