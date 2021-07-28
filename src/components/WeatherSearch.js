import React from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';



const WeatherSearch = ({ weatherInput, setWeatherInput, weather, setWeather }) => {

    const handleChange = (e) => {
       setWeatherInput(e.target.value);
       
    }

    const Animation = {
        visible: { opacity: 1, transition : { duration: 1} },
        hidden: { opacity: 0 },
    }

    const searchWeather = e => {

        axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHERAPI}&q=${weatherInput}`)
        .then(response => {
            setWeather(response.data);
        })
        .catch( error => console.error(error))

        setWeatherInput('')
    }

    return (
        <motion.div
        initial="hidden"
        animate="visible"
        variants={Animation}

        >

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

        </motion.div>
    );
}

export default WeatherSearch;