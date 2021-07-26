import NavBar from './components/NavBar';
import WeatherSearch from './components/WeatherSearch';
import DisplayWeather from './components/DisplayWeather';
import { useState } from 'react';


function App() {

  const [weather, setWeather] = useState(null)
  const [weatherInput, setWeatherInput] = useState('')

  return (
    <section className="App">
      <NavBar />

      <WeatherSearch 
      weather={weather}
      setWeather={setWeather}
      weatherInput={weatherInput} 
      setWeatherInput={setWeatherInput} 
      />

      <DisplayWeather 
      weather={weather} 
      setWeather={setWeather} 
      />
    
    </section>
  );
}

export default App;
