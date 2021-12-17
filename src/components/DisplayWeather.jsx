import { motion } from "framer-motion";
import {
  Flex,
  Heading,
  Text,
  Image,
  Box
} from "@chakra-ui/react";
import City from "../Images/city.jpg";

const DisplayWeather = ({ currentWeather, currentLocation, isDataFetched }) => {

  const unixToDate = (unixTime) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(unixTime * 1000);
    const day = days[date.getDay()];

    return day;
  };

  const unixToTime = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const time = new Intl.DateTimeFormat("en-US", {
      timeStyle: "short",
    }).format(date);

    return time;
  };

  const removeUnderscores = (city) => {
    const cityArray = city.split("_");
    const cityName = cityArray.join(" ");

    return cityName;
  };

  return (
    <Flex direction="column" justify="center" align="center">
      <Heading as="h1" fontSize="4rem" fontWeight="300">
        {currentWeather.temp.toFixed(0)}°
      </Heading>

      <Image
        src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
        alt=""
        boxSize="80px"
      />

      <Text my="0.5rem" textTransform="capitalize">
        {currentWeather.weather[0].description}
      </Text>

      <Heading mb="0.5rem" fontSize="1rem">{`${unixToDate(
        currentWeather.dt
      )}, ${unixToTime(currentWeather.dt)}`}</Heading>

      <hr style={{ width: 150 }} />

      <Box
        bgImage={City}
        bgRepeat="no-repeat"
        bgSize="cover"
        borderRadius="5px"
        px="4.5rem"
        py="1.5rem"
        mt="2rem"
        boxShadow="inset 0 0 0 1000px #0000008b;"
      >
        <Text color="white" mt="0.5rem">
          {removeUnderscores(currentLocation)}
        </Text>
      </Box>

    </Flex>
  );
};

export default DisplayWeather;
