








// sir wali api url https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=ae51a4bb2c418a197081a41663fa3103

// https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}


    // let baseUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
    // let baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";


// let baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=london";
// let getData = fetch(baseUrl);
// .then(respons)
// console.long(getData)


// let api = "https://jsonplaceholder.typicode.com/posts";
// fetch(api)
// .then(response => {
//     response.json().then((posts)=> console.log(posts));
// })

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



    // "https://api.openweathermap.org/data/2.5/weather?q=london&appid=ae51a4bb2c418a197081a41663fa3103"


    // let promise = fetch(baseUrl);
    // console.log(promise);
let cityNameText = document.getElementById("city_text");
let cityName_inp = document.getElementById("city_inp");

let serch_btn = document.getElementById("serch_btn");

let sunSet = document.getElementById("sunset");
let sunrise = document.getElementById("sunrise");

let windSp_txt = document.getElementById("wind_sp");
let humidity = document.getElementById("rain_per");
let rain_icon = document.getElementById("rain_icon");

let weatherDescrip = document.getElementById("weather_txt");
let temptxt = document.getElementById("temText");
// serch_btn.addEventListener('click', serch_btn) 


// const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=ae51a4bb2c418a197081a41663fa3103";

async function getData() {
    try{
        if(cityName_inp.value.trim() !== ''){
            let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName_inp.value}&appid=ae51a4bb2c418a197081a41663fa3103`;
            let fetchResult = await fetch(baseUrl);
            // let finalData = await fetchResult.json();
            // console.log(finalData)
            // let cityName = finalData.name;
            // console.log(cityName);
            if(!fetchResult.ok && fetchResult.statusText === 'Not Found') {
                alert('City Not Found')
            } 
            else {
                // console.log("else")
                let resultJson = await fetchResult.json()
                // console.log(resultJson)
                showWeather(resultJson)
            }
            // alert("Enter City name")
        }else{
            alert("Enter City name")
        }
        
    }catch(error){

    }
}

function showWeather(showData){
    // console.log(weatherData);

    console.log('func call')
    console.log(showData)

    cityNameText.innerText = showData.name;
    windSp_txt.innerText = `${showData.wind.speed} Km/h`;
    humidity.innerText = `${showData.main.humidity} %`;
    sunrise.innerText = `${showData.sys.sunrise}`;
    sunSet.innerText = `${showData.sys.sunset}`
    weatherDescrip.innerText = `${showData.weather[0].main}`
    temptxt.innerHTML = `<h1 class="cel_txt" id="temText"> ${Math.floor(showData.main.temp - 273.15)}<sup class="cel">°C </sup></h1> `                    

}

























































// getData (){
//         console.log("fetching Data...")
//         let respons = await fetch(baseUrl);
//         let data = await respons.json();
//         let cityName = data.name;

//     //    let windSpeed = data.wind.speed;
//     //    let rainChance = data.
//     //    let timezone = data.timezone;

//        // main data 
//        let feels_like = data.main.feels_like;
//        let real_feels = data.main.grnd_level;
//        let tem_max = data.main.temp_max;
//        let tem_min = data.main.temp_max;
//        let tem = data.main.temp;
//        let pressure = data.main.pressure;
//        let humidity = data.main.humidity;
//        /// ------------ //

//     //    weather data   
//     // let weatherData = data.weather.;

//        console.log(data)
//     // console.log(cityName)
//     // console.log(data.wind)
//     // console.log(data.wind.speed)
//     // console.log(timezone)

//         // console.log(data.weather[0].description)
//         // console.log(data.weather[0].icon)
//         // console.log(data.weather[0].id)


//     }













// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         getNextData();

//         // if(getNextData){
//         // getNextData();
//         // // console.log("nan")
//         // }
        
//     },2000)
// }
// // setTimeout(getData, 2000);

// getData(1, ()=>{
//     getData(2 )
// });
// getData(2);
// getData(3);






// async function data(params) {
//     let baseUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
//     //  console.log(baseUrl)
    
//     let fetchResullt = await fetch(baseUrl);
//     console.log(baseUrl)
// }

// data()

// let promise = new Promise((resolve, reject)=>{
//     console.log("promise Runn");
//     reject("samosa nh h")
// });
// console.log(promise);

//  function getData(dataId){
// return prom = new Promise((resolve, reject) =>{
// setTimeout(()=>{
//     console.log("Data", dataId)
//     resolve("sucsess")
// }, 3000)
// })
// }
// // console.log("Feecthing Data 1...");
// (async function () {
//     await getData(1);
// })();

// callme()


// async function calling() {
//     await getData(1);
//     console.log("sucses")
// console.log("Feecthing Data 2...");
//     await getData(2);
//     console.log("sucses")

// }
// calling()


// getData(1).then((res)=>{
//     console.log(res);
// console.log("Feecthing Data 2...");
//   return getData(2);
// }).then((res)=>{

//     console.log(res)
// console.log("Feecthing Data 3...");
//   return getData(3);

// }).then((res)=>{

//     console.log(res)
//   return getData(4);

// })

