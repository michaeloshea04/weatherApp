# weatherApp
Create a weather forecast site using the weather API

> You should be able to search for a specific location and toggle displaying the data in Fahrenheit or Celsius.
> You should change the look of the page based on the data, maybe by changing the color of the background or by adding images that describe the weather. (You could even use the Giphy API to find appropriate weather-related gifs and display them). Feel free to use promises or async/await in your code, though you should try to become comfortable with both.

1.) Set up a blank HTML document with the appropriate links to your JavaScript and CSS files. DONE

2.) Write the functions that hit the API. You’re going to want functions that can take a location and return the weather data for that location. For now, just console.log() the information. DONE

http://api.weatherapi.com/v1
80f6769948be4ca6858220852240904

3.) Write the functions that process the JSON data you’re getting from the API and return an object with only the data you require for your app.  **Up to here**
*Data required for app*
weatherData.location.name
weatherData.location.region
weatherData.location.country

weatherData.current.condition.text

weatherData.current.temp_c
weatherData.current.temp_f

**Code given by copilot for this section**
// Assume you have fetched weather data and stored it in a variable called 'weatherData'

function extractWeatherInfo(weatherData) {
    // Extract relevant information (e.g., temperature, description, humidity, etc.)
    const { temp_c, temp_f, condition, humidity } = weatherData.current;

    // Create an object with the extracted data
    const extractedInfo = {
        temperatureCelsius: temp_c,
        temperatureFahrenheit: temp_f,
        weatherCondition: condition.text,
        humidityPercentage: humidity,
        // Add other relevant properties as needed
    };

    return extractedInfo;
}

// Example usage:
const sampleWeatherData = {
    current: {
        temp_c: 20, // Example temperature in Celsius
        temp_f: 68, // Example temperature in Fahrenheit
        condition: {
            text: 'Partly cloudy', // Example weather condition
        },
        humidity: 60, // Example humidity percentage
        // Other properties...
    },
};

const extractedData = extractWeatherInfo(sampleWeatherData);
console.log('Extracted weather info:', extractedData);
**End copilot code**

4.) Set up a form that will let users input their location and will fetch the weather info (still just console.log() it).

5.) Display the information on your webpage!
6.) Add any styling you like!
7.) Optional: add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API. Use DevTools to test for low-end devices.
8.) Push that baby to github and share your solution below!

