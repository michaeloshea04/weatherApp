const API_Key = '80f6769948be4ca6858220852240904'; //API key for weatherapi.com
const searchInput = document.getElementById('searchWeather');
const searchBtn = document.getElementById('searchBtn');
const tempDisplay = document.getElementById('temp');
const condDisplay = document.getElementById('weatherCondition');



// Function to fetch weather data
async function micksWeather(city) {
    try {
        const response = await
        fetch(`http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${city}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Extract relevant information (e.g., temperature, description) and update your UI
function displayWeatherInfo(weatherData) {    
    console.log('Weather mother fucker:', weatherData); //console log result

    const tempCelsius = weatherData.current.temp_c;
    const tempFahrenheit = weatherData.current.temp_f;
    tempDisplay.textContent = `Temperature: ${tempCelsius}°C / ${tempFahrenheit}°F`;

    const conditions = weatherData.current.condition.text;
    condDisplay.textContent = `The conditions are: ${conditions}`;

}

// what does this function do?
function changeCity(searchQuery) {
    micksWeather(searchQuery)
        .then(displayWeatherInfo)
        .catch((error) => {
            console.error('Error:', error);
        });
}
 

 //eventListner on the searchBtn click
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        changeCity(query);
    }
});


