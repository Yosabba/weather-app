import React from 'react';

const DisplayWeather = ({ weather }) => {


    return (
        <section className="display-weather">
            {weather && (
                <div className="weather-card">
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
                </div>

            )}

        </section>
    );
}

export default DisplayWeather;