//variable for apikey usage
const apiKey = "cc3592e9628a6e6a4f28cdcaeb1fca54"
const date = document.querySelector(".date")
const cityName = document.querySelector(".cityName")
const temp = document.querySelector(".temp")
const humidity = document.querySelector(".humidity")
const speed = document.querySelector(".speed")
const searchBar = document.querySelector(".searchBar")
const searchBtn = document.querySelector(".searchBtn")

const weatherForecast = document.querySelectorAll(".weather-forecast")
//call api and have it report to console log
function getAPIdata(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data)
            cityName.innerHTML = data.name
            temp.innerHTML = "Temp: " + Math.floor(data.main.temp) + `&#176F`
            humidity.innerHTML = "Humidity: " + Math.floor(data.main.humidity) + "%"
            speed.innerHTML = "Wind: " + Math.floor(data.wind.speed) + " mph"
        }).then(function() {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`)
            .then((res) => {
                return res.json()
            }).then((data) => {
                console.log(data)
                for(let i = 0; i < weatherForecast.length; i++) {
                    weatherForecast[i].innerHTML = ""
                    const index = i * 8 + 4
                    const fTemp = document.createElement("div")
                    fTemp.innerHTML = "Temp: " + Math.floor(data.list[index].main.temp)  + `&#176F`
                    weatherForecast[i].append(fTemp)
                    const fHumidity = document.createElement("div")
                    fHumidity.innerHTML = "Humidity: " + Math.floor(data.list[index].main.humidity)  + `%`
                    weatherForecast[i].append(fHumidity)
                    const fSpeed = document.createElement("div")
                    fSpeed.innerHTML = "Wind: " + Math.floor(data.list[index].wind.speed)  + `mph`
                    weatherForecast[i].append(fSpeed)
                }
            })
        })
};

searchBtn.addEventListener("click", function () {
    let value = searchBar.value
    getAPIdata(value)
});

    
    
      




    


