document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "ccf5ba70a3d1065d50ea0bbb796e96b1"; // env variables

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if (!city) return;

        // it may throw an error
        // server/database is in another continent

        // always use some safety mechanism

        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }

    });


    async function fetchWeatherData(city) {
        // fetch
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url);
        // console.log(typeof response);
        // console.log("RESPONSE", response);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = response.json();
        return data;


    }

    function displayWeatherData(data) {
        // display
        console.log(data);
        const { name, main, weather } = data;

        // unlock the display
        weatherInfo.classList.remove('hidden');
        cityNameDisplay.classList.remove('hidden');
        temperatureDisplay.classList.remove('hidden');
        descriptionDisplay.classList.remove('hidden');
        errorMessage.classList.add('hidden')

        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Temperature : ${main.temp} Celsius`
        descriptionDisplay.textContent = `Weather : ${weather[0].description}`

        // we need to study this json object obtained as response througholy and 
        // they are all in arrays and objects


    }

    function showError() {
        weatherInfo.classList.add("hidden");
        errorMessage.classList.remove("hidden");
    }

});