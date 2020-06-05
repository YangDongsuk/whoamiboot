const COORDS2="coords"
let Lang;
let Long;
function saveCoords(CoordsObj){
    localStorage.setItem(COORDS2,JSON.stringify(CoordsObj))
}

function handlesuccess(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const CoordsObj={
        latitude,
        longitude
    }
    saveCoords(CoordsObj)
}

function handleerror(){
    console.log('error');

}
function askforPosition(){
    navigator.geolocation.getCurrentPosition(handlesuccess,handleerror);

}
function loadedCoords(){
    const loadedcoords=localStorage.getItem(COORDS2)
    console.log(loadedcoords)
    if(loadedcoords===null){
        askforPosition()
    }else{
        const parsecoords=JSON.parse(loadedcoords)
        Lang=parsecoords.latitude
        Long=parsecoords.longitude
    }
    

}
function init(){
        loadedCoords()
}

init();

$(document).ready(function() {
    var myLatlng = new google.maps.LatLng(37.48,126.87); // 위치값 위도 경도
var Y_point			= Lang;		// Y 좌표
var X_point			= Long;		// X 좌표
var zoomLevel		= 18;				// 지도의 확대 레벨 : 숫자가 클수록 확대정도가 큼
var markerTitle		= "대구광역시";		// 현재 위치 마커에 마우스를 오버을때 나타나는 정보
var markerMaxWidth	= 300;				// 마커를 클릭했을때 나타나는 말풍선의 최대 크기

// 말풍선 내용
var contentString	= '<div>' +
'<h2>대구남구</h2>'+
'<p>안녕하세요. 구글지도입니다.</p>' +

'</div>';
var myLatlng = new google.maps.LatLng(Y_point, X_point);
var mapOptions = {
                zoom: zoomLevel,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
var map = new google.maps.Map(document.getElementById('map_ma'), mapOptions);
var marker = new google.maps.Marker({
                                    position: myLatlng,
                                    map: map,
                                    title: markerTitle
});
var infowindow = new google.maps.InfoWindow(
                                        {
                                            content: contentString,
                                            maxWizzzdth: markerMaxWidth
                                        }
    );
google.maps.event.addListener(marker, 'click', function() {
infowindow.open(map, marker);
});
});

