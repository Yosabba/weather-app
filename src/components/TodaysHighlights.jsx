import { Flex, Text, Heading, Image } from "@chakra-ui/react";
import Sunset from "../Images/sunset.png";
import Sunrise from "../Images/sunrise.png";

export const FeelsLike = ({ info }) => {
  return (
    <Flex
      direction="column"
      justify="space-evenly"
      align="center"
      bgColor="white"
      borderRadius="20px"
      py="1rem"
      px="1rem"
      boxShadow="md"
    >
      <Heading color="#Bcbcbd" fontWeight="500" fontSize="1rem">
        Feels Like
      </Heading>
      <Text fontSize="3rem">{`${info.feels_like.toFixed(0)}°`}</Text>
    </Flex>
  );
};

export const SunriseSunset = ({ info }) => {
  const unixToTime = (unixTime) => {
    const date = new Date(unixTime * 1000);
    let hours = date.getHours();
    hours = hours % 12;
    let minutes = date.getMinutes();
    const time =
      hours + ":" + minutes + " " + (date.getHours() > 11 ? "PM" : "AM");

    return time;
  };

  return (
    <Flex
      direction="column"
      justify="space-evenly"
      align="center"
      bgColor="white"
      borderRadius="20px"
      py="1rem"
      px="1rem"
      boxShadow="md"
    >
      <Heading color="#Bcbcbd" fontWeight="500" fontSize="1rem">
        Sunrise & Sunset
      </Heading>
      <Flex direction="row" justify="center" align="center">
        <Image boxSize="50px" src={Sunrise} />
        &nbsp; &nbsp;
        <Text fontSize="0.8rem" fontWeight="600">{`${unixToTime(
          info.sunrise
        )} sunrise`}</Text>
      </Flex>
      <Flex direction="row" justify="center" align="center">
        <Image boxSize="50px" src={Sunset} />
        &nbsp; &nbsp;
        <Text fontSize="0.8rem" fontWeight="600">{`${unixToTime(
          info.sunset
        )} sunset`}</Text>
      </Flex>
    </Flex>
  );
};

export const Humidity = ({ info }) => {
  return (
    <Flex
      direction="column"
      justify="space-evenly"
      align="center"
      bgColor="white"
      borderRadius="20px"
      py="1rem"
      px="1rem"
      boxShadow="md"
    >
      <Heading color="#Bcbcbd" fontWeight="500" fontSize="1rem">
        Humidity
      </Heading>
      <Text fontSize="3rem">{`${info.humidity}%`}</Text>
    </Flex>
  );
};
export const WindSpeed = ({ info }) => {
  return (
    <Flex
      direction="column"
      justify="space-evenly"
      align="center"
      bgColor="white"
      borderRadius="20px"
      py="1rem"
      px="1rem"
      boxShadow="md"
    >
      <Heading color="#Bcbcbd" fontWeight="500" fontSize="1rem">
        Wind Speed
      </Heading>
      <Text fontSize="3rem">
        {`${info.wind_speed.toFixed(0)}`}{" "}
        <Text as="span" fontSize="1rem" color="#Bcbcbd">
          mph
        </Text>
      </Text>
    </Flex>
  );
};

export const UvIndex = ({ info }) => {
  return (
    <Flex
      direction="column"
      justify="space-evenly"
      align="center"
      bgColor="white"
      borderRadius="20px"
      py="1rem"
      px="1rem"
      boxShadow="md"
    >
      <Heading color="#Bcbcbd" fontSize="1rem" fontWeight="500">
        Uv Index
      </Heading>
      <Text fontSize="3rem">{`${info.uvi.toFixed(0)}`}</Text>
    </Flex>
  );
};

export const Visibility = ({ info }) => {
  const convertMetersToMiles = (meters) => {
    return meters * 0.000621371;
  };

  return (
    <Flex
      direction="column"
      justify="space-evenly"
      align="center"
      bgColor="white"
      borderRadius="20px"
      py="1rem"
      px="1rem"
      boxShadow="md"
    >
      <Heading color="#Bcbcbd" fontSize="1rem" fontWeight="500">
        Visibility
      </Heading>
      <Text fontSize="3rem">{`${convertMetersToMiles(info.visibility).toFixed(
        1
      )} mi`}</Text>
    </Flex>
  );
};
