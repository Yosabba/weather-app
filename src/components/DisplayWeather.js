import React from 'react';
import { motion } from 'framer-motion';

const DisplayWeather = ({ weather }) => {

    const DisplayAnimation = {
      visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: "easeIn" },
      },
      hidden: { opacity: 0 },
    };


    return (
        <section className="display-weather">
            {weather && (
                <motion.div 
                className="weather-card"
                layout
                initial="hidden"
                animate="visible"
                variants={DisplayAnimation}
                >
                    <h1 className="weather-degrees"> {` ${weather.current.temp_f}°`}</h1>
                    <img src={weather.current.condition.icon} alt="" />
                    <p>{weather.current.condition.text}</p>
                    <h1>Humidity</h1>
                    <p>{`${weather.current.humidity}%`}</p>
                    <h1>Real Feel</h1>
                    <p>{weather.current.feelslike_f}°</p>
                    <h1>Wind</h1>
                    <p>{`${weather.current.wind_dir}, ${weather.current.wind_mph} mph`}</p>
                    <h1>Location</h1>
                    <p>{`${weather.location.name}, ${weather.location.region}`}</p>
                </motion.div>

            )}

        </section>
    );
}

export default DisplayWeather;