import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import City from "../Images/city.jpg";
import Rain from "../Images/raining.png";
import Snowy from "../Images/snowing.png";
import Storm from "../Images/storm.png";
import Clouds from "../Images/cloudy-day.png";
import Sun from "../Images/sun.png";
import Wind from "../Images/wind.png";
import Mist from "../Images/mist.png";
import Fog from "../Images/fog.png";

const DisplayWeather = ({ currentWeather, currentLocation }) => {
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

  const iconToImage = (icon) => {
    switch (icon) {
      case "Clouds":
        return Clouds;
      case "Rain":
        return Rain;
      case "Snow":
        return Snowy;
      case "Thunderstom":
        return Storm;
      case "Drizzle":
        return Rain;
      case "Clear":
        return Sun;
      case "Mist":
        return Mist;
      case "Fog":
        return Fog;
      default:
        return Wind;
    }
  };

  const unixToTime = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const time = new Intl.DateTimeFormat("en-US", {
      timeStyle: "short",
    }).format(date);

    return time;
  };

  return (
    <Flex direction="column" justify="center" align="center">
      <Heading as="h1" fontSize="5rem" fontWeight="300">
        {currentWeather.temp.toFixed(0)}°
      </Heading>

      <Image
        src={iconToImage(currentWeather.weather[0].main)}
        alt="Weather Icon"
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
          {currentLocation}
        </Text>
      </Box>
    </Flex>
  );
};

export default DisplayWeather;
