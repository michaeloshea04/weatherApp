/*
Write the functions that hit the API. 
You’re going to want functions that can take a location and return the weather data for that location. 
For now, just console.log() the information.
*/

/*
const img = document.querySelector('img');
const btn = document.getElementById('changeGif');
const searchInput = document.getElementById('searchWeather');
const searchBtn = document.getElementById('searchBtn');
*/

//function searchWeather(searchQuery) {

//const apiUrl = `https://api.giphy.com/v1/gifs/translate?api_key=LTAMl0eDujj4FoChQDLBwodYEgLDzYgs&s=${searchQuery}`;
const weatherApiUrl = 'http://api.weatherapi.com/v1/current.json?key=80f6769948be4ca6858220852240904&q=Cairns';
console.log(weatherApiUrl);

/*
fetch(apiUrl, {mode: 'cors'})
.then(function(response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(function(response) {
    if (response.data.length === 0) {
        // Handle case when no GIFs are found
        img.src = 'https://api.giphy.com/v1/gifs/translate?api_key=LTAMl0eDujj4FoChQDLBwodYEgLDzYgs&s=error'; // Replace with your default image URL
    } else {
    img.src = response.data.images.original.url;
    }
    
})
.catch(function (error) {
    console.error('Error fetching GIF:', error);
    // Display an error message or handle the error as needed
    img.src = 'https://api.giphy.com/v1/gifs/translate?api_key=LTAMl0eDujj4FoChQDLBwodYEgLDzYgs&s=error'; // Replace with your error image URL
    
;
});
}

btn.addEventListener('click', changeGif);
searchBtn.addEventListener('click', function () {
    const query = searchInput.value.trim();
    if (query) {
        changeGif(query);
    }
});
*/
const fetch = require('node-fetch');

function micksWeather(city) {
    const key = '80f6769948be4ca6858220852240904';
    fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`)    
        .then(resp => resp.json())
        .then(data => drawWeather(data)) // Call your custom function to handle the data
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

console.log(micksWeather('Cairns'));
