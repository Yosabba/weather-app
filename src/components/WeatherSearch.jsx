import React, { useState } from "react";
import axios from "axios";
import { Input, Button, Flex } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const WeatherSearch = ({
  setCurrentWeather,
  setCurrentLocation,
  setSevenDayForecast,
}) => {
  const [weatherInput, setWeatherInput] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  let urlForCords = `https://api.openweathermap.org/data/2.5/weather?zip=${weatherInput}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`;

  const handleChange = (e) => {
    setWeatherInput(e.target.value);
    if (e.target.value.length === 5) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const searchWeather = (e) => {
    axios
      .get(urlForCords)
      .then((response) => {
        setCurrentLocation(response.data.name);
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
          )
          .then((response) => {
            setCurrentWeather(response.data.current);
            setSevenDayForecast(response.data.daily);
          })
          .catch((error) => {
            console.error(error);
          });
      })

      .catch((error) => {
        console.error(error);
      });

    setWeatherInput("");
  };

  return (
    <Flex direction="row" justify="center" align="center" my="1rem">
      <Input
        size="xs"
        variant="outline"
        placeholder="Enter Zipcode (Ex: 90210)"
        value={weatherInput}
        onChange={handleChange}
        focusBorderColor="blue.500"
        fontSize="0.7rem"
        textAlign="left"
        type="number"
        borderRadius="5px"
      />

      <Button
        onClick={searchWeather}
        leftIcon={<SearchIcon />}
        bgColor="blue.500"
        _hover={{ bgColor: "blue.600" }}
        variant="solid"
        fontSize="1rem"
        color={"white"}
        ml="0.2rem"
        isDisabled={isButtonDisabled}
        size="xs"
      ></Button>
    </Flex>
  );
};

export default WeatherSearch;
