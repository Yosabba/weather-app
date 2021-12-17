import NavBar from "./components/NavBar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Heading,
  SimpleGrid,
  Box,
  Flex,
  Skeleton,
} from "@chakra-ui/react";
import DisplayWeeklyForecast from "./components/DisplayWeeklyForecast.jsx";
import SvgLogo from "./components/SvgLogo.jsx";
import {
  SunriseSunset,
  UvIndex,
  Humidity,
  FeelsLike,
  WindSpeed,
  Visibility,
} from "./components/TodaysHighlights.jsx";

function App() {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [sevenDayForecast, setSevenDayForecast] = useState([]);
  const [currentLocation, setCurrentLocation] = useState("");
  const [isDataFetched, setIsDataFetched] = useState(false);

  const getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  useEffect(() => {
    getPosition()
      .then((position) => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
          )
          .then((res) => {
            setCurrentLocation(res.data.name);
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
              )
              .then((res) => {
                setCurrentWeather(res.data.current);
                setSevenDayForecast(res.data.daily);
                setIsDataFetched(true);
              });
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Box pb="2rem">
      <Flex
        ml={["0", "25%", "25%", "22%", "18%"]}
        justify="center"
        direction="row"
        align="center"
      >
        <SvgLogo />
        <Heading
          fontSize={["1rem", "1.5rem", "3rem", "3rem", "3rem"]}
          align="center"
          mx="2rem"
          fontWeight="600"
          whiteSpace="nowrap"
          textTransform="uppercase"
        >
          Wibzy
        </Heading>
      </Flex>

      <NavBar
        currentWeather={currentWeather}
        setCurrentWeather={setCurrentWeather}
        isDataFetched={isDataFetched}
        sevenDayForecast={sevenDayForecast}
        setSevenDayForecast={setSevenDayForecast}
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
      
      <Box ml={["0", "0", "25%", "22%", "18%"]} mr="0.9rem">
        {/* Weekly forecast begins */}
        <Heading
          textAlign="left"
          fontSize={["1.5rem", "1.5rem", "2rem", "2rem", "2rem"]}
          mt="2rem"
          fontWeight="500"
        >
          Weekly Forecast
        </Heading>
        <SimpleGrid
          textAlign="center"
          minChildWidth={["260px", "250px", "250px", "180px", "160px"]}
          spacing="8px"
          mt="2rem"
        >
          {isDataFetched ? (
            sevenDayForecast.map((info, index) => (
              <DisplayWeeklyForecast info={info} key={index} />
            ))
          ) : (
            <>
              {[...Array(8)].map((_, index) => (
                <Box index={index}>
                  <Skeleton height="100px" />
                </Box>
              ))}
            </>
          )}
        </SimpleGrid>

        {/* Todays Highlight Begins */}
        <Heading
          textAlign="left"
          fontSize={["1.5rem", "1.5rem", "2rem", "2rem", "2rem"]}
          mt="2rem"
          fontWeight="500"
        >
          Today's Highlights
        </Heading>
        <SimpleGrid
          textAlign="center"
          minChildWidth="170px"
          spacing="10px"
          mt="2rem"
        >
          {isDataFetched ? (
            <>
              <SunriseSunset info={currentWeather} />
              <UvIndex info={currentWeather} />
              <Humidity info={currentWeather} />
              <FeelsLike info={currentWeather} />
              <WindSpeed info={currentWeather} />
              <Visibility info={currentWeather} />
            </>
          ) : (
            <>
              {[...Array(6)].map((_, index) => (
                <Box index={index}>
                  <Skeleton height="100px" />
                </Box>
              ))}
            </>
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default App;
