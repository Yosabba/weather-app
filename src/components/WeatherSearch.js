import React from 'react';
import axios from 'axios';


const WeatherSearch = ({ weatherInput, setWeatherInput, weather, setWeather }) => {

    const handleChange = (e) => {
       setWeatherInput(e.target.value);
       
    }

    const searchWeather = e => {

        axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHERAPI}&q=${weatherInput}`)
        .then(response => {
            setWeather(response.data);
        })
        .catch( error => console.error(error))

        setWeatherInput('')
    }

    return (
        <>
            
            {weather ? (
                <section className="weather-search">
                    <p>Enter Zip Code, City or State</p>
                    <input placeholder="Enter here" value={weatherInput} onChange={handleChange} type="text" /><br />
                    <button onClick={searchWeather}>Search</button>
                </section>
            ) : (
                <section className="weather-search">
                    <p>Enter Zip Code, City or State</p>
                    <input placeholder="Enter here" value={weatherInput} onChange={handleChange} type="text" /><br />
                    <button onClick={searchWeather}>Search</button>
                </section>
            )}

        </>
    );
}

export default WeatherSearch;