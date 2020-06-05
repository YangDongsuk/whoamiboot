const COORDS="coords"
const API_KEY="17dec74bacbb08b2b4caeb4c823bf74b"
const weather=document.querySelector(".js-weather")

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json()
    }).then(function(json){
        console.log(json);
        const temperature=json.main.temp
        const temperature_max=json.main.temp_max
        const temperature_min=json.main.temp_min
        const today_weather=json.weather[0].main
        const name =json.name
        console.log(temperature);
        console.log(name);
        weather.innerText=`오늘의 온도: ${temperature}도 최고 기온 : ${temperature_max} 최저기온 : ${temperature_min} 
        오늘의 날씨 : ${today_weather}  장소: ${name}`

    })

}

function saveCoords(CoordsObj){
    localStorage.setItem(COORDS,JSON.stringify(CoordsObj))
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
    const loadedcoords=localStorage.getItem(COORDS)
    console.log(loadedcoords)
    if(loadedcoords===null){
        askforPosition()
    }else{
        const parsecoords=JSON.parse(loadedcoords)
        getWeather(parsecoords.latitude,parsecoords.longitude)
    }
    

}
function init(){
        loadedCoords()
}

init();