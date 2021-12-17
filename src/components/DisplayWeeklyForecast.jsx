import React from "react";
import { motion } from "framer-motion";
import { Flex, Text, Image } from "@chakra-ui/react";
import Rain from "../Images/raining.png";
import Snowy from "../Images/snowing.png";
import Storm from "../Images/storm.png";
import Clouds from "../Images/cloudy-day.png";
import Sun from "../Images/sun.png";

const DisplayWeeklyForecast = ({ info }) => {
  const unixToDay = (unixTime) => {
    const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    const date = new Date(unixTime * 1000);
    const day = days[date.getDay()];
    const day1 = date.getDate();

    if (day1 === new Date().getDate()) {
      return "Today";
    } else {
      return day;
    }
  };

  //motion stuff
  const DisplayAnimation = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: { opacity: 0 },
  };

  //write function that replaces images with icons
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
        return "https://cdn.pixabay.com/photo/2016/11/29/05/36/sun-1867461_960_720.png";
      case "Clear":
        return Sun;
      default:
        return "https://cdn.pixabay.com/photo/2016/11/29/05/36/sun-1867461_960_720.png";
    }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={DisplayAnimation}>
      <Flex
        justify="center"
        align="center"
        direction="column"
        bgColor="white"
        borderRadius="20px"
        py="15px"
        px="15px"
        boxShadow="lg"
      >
        <Text>{`${unixToDay(info.dt)}`}</Text>
        <Image
          src={iconToImage(info.weather[0].main)}
          alt="weather icon"
          boxSize="80px"
        />
        <Flex direction="row" justify="space" align="center">
          <Text
            textTransform="capitalize"
            fontSize="1rem"
            fontWeight="500"
          >{` ${info.temp.max.toFixed(0)}° `}</Text>
          &nbsp; &nbsp;
          <Text
            textTransform="capitalize"
            fontSize="1rem"
            fontWeight="500"
            color="#Bcbcbd"
          >{` ${info.temp.min.toFixed(0)}° `}</Text>
        </Flex>
        <Text
          fontSize=".7rem"
          textTransform="capitalize"
        >{`${info.weather[0].main}`}</Text>
      </Flex>
    </motion.div>
  );
};

export default DisplayWeeklyForecast;
