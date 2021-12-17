import { motion } from "framer-motion";
import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import WeatherSearch from "./WeatherSearch.jsx";
import DisplayWeather from "./DisplayWeather.jsx";

const NavBar = ({
  currentWeather,
  setCurrentWeather,
  isDataFetched,
  currentLocation,
  setCurrentLocation,
  setSevenDayForecast,
}) => {
  const navAnimation = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={navAnimation}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent={["center", "center", "start", "start", "start"]}
        flexDirection="column"
        height="100%"
        pos={["static", "static", "fixed", "fixed", "fixed"]}
        top={["auto", "auto", "0", "0", "0"]}
        left={["auto", "auto", "0", "0", "0"]}
        w={["100%", "100%", "23%", "20%", "15%"]}
        bgColor="white"
        overflowX="hidden"
        pb="2rem"
        boxShadow="lg"
      >
        <WeatherSearch
          setCurrentWeather={setCurrentWeather}
          setCurrentLocation={setCurrentLocation}
          setSevenDayForecast={setSevenDayForecast}
        />
        {isDataFetched ? (
          <DisplayWeather
            currentWeather={currentWeather}
            currentLocation={currentLocation}
            isDataFetched={isDataFetched}
          />
        ) : (
          <Box>
            <Skeleton height="10vh" mb=".5rem" />
            <SkeletonCircle size="40" />
            <Skeleton height="3vh" mt="0.8rem" />
            <SkeletonText noOfLines={1} mt=".8rem" />
            <br />
            <Skeleton height="10vh" />
          </Box>
        )}
      </Box>
    </motion.div>
  );
};

export default NavBar;
