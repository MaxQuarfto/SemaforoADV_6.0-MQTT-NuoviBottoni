let temperature = 0;
let weather = "";
let vento;
let LoadJsonMeteo;
let iconLoaded = false;
let gotMeteo = false;

function LoadJsonM() {
    let url =
        "https://api.openweathermap.org/data/2.5/weather?q=Camugnano&units=metric&lang=it&APPID=e812164ca05ed9e0344b89ebe273c141";
    LoadJsonMeteo = loadJSON(url, meteoStatus);
}

function meteoStatus() {
    gotMeteo = true;
}

function readMeteo() {
    console.log("meteoStatus", meteoStatus);
    if (!gotMeteo) return ("Meteo non disponibile");
    temperature = LoadJsonMeteo.main.temp;
    vento = LoadJsonMeteo.wind.speed;
    weather = LoadJsonMeteo.weather[0].description;
    iconLink = "https://openweathermap.org/img/wn/" + LoadJsonMeteo.weather[0].icon + "@2x.png";
    //iconImage = loadImage(iconLink, imageLoaded);
    tramonto = new Date(LoadJsonMeteo.sys.sunrise);
    return ("temp: " + temperature + String.fromCharCode(176) + "\n" +
        "vento: " + vento + " m/s \n" +
        "Previsioni: " + weather + "\n" +
        "Alba: " + convertDate(LoadJsonMeteo.sys.sunrise) + "\n" +
        "Tramonto: " + convertDate(LoadJsonMeteo.sys.sunset));
}


function convertDate(dateNumber) {
    dataLetta = new Date(dateNumber);
    return dataLetta.getHours() + ":" + dataLetta.getMinutes();
}

/*
{
  "coord":{
    "lon":-74.01,
    "lat":40.71
  },
  "sys":{
    "message":0.2012,
    "country":"US",
    "sunrise":1406540974,
    "sunset":1406592927
  },
  "weather":[
    {
      "id":801,
      "main":"Clouds",
      "description":"few clouds",
      "icon":"02d"
    }
  ],
  "base":"cmc stations",
  "main":{
    "temp":73.45,
    "humidity":83,
    "pressure":999,
    "temp_min":70,
    "temp_max":75.99
  },
  "wind":{
    "speed":4.45,
    "gust":3.6,
    "deg":259
  },
  "rain":{
    "3h":0
  },
  "clouds":{
    "all":24
  },
  "dt":1406559145,
  "id":5128581,
  "name":"New York",
  "cod":200
}
*/
