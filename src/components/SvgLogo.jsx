import React from "react";
import { motion } from "framer-motion";

const navAnimation = {
  visible: {
    x: 0,
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: "easeIn" },
  },
  hidden: { x: -450, pathLength: 0 },
};

const cloudAnimation = {
  visible: {
    x: 0,
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: "easeIn" },
  },
  hidden: { x: 450, pathLength: 0 },
};

const SvgLogo = () => {
  return (
    <motion.svg
      height="95"
      viewBox="0 0 512 512"
      width="112"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      initial="hidden"
      animate="visible"
    >
      <linearGradient
        id="New_Gradient_Swatch_34"
        gradientUnits="userSpaceOnUse"
        x1="134.435"
        x2="377.565"
        y1="377.565"
        y2="134.435"
      >
        <stop offset=".015" stopColor="#f9cd55" />
        <stop offset="1" stopColor="#fdbc8c" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_28"
        gradientUnits="userSpaceOnUse"
        x1="353.247"
        x2="470.752"
        y1="194.752"
        y2="77.248"
      >
        <stop offset=".015" stopColor="#b7bfd8" />
        <stop offset="1" stopColor="#e4f2ee" />
      </linearGradient>
      <linearGradient
        id="New_Gradient_Swatch_28-2"
        x1="41.247"
        x2="158.752"
        xlinkHref="#New_Gradient_Swatch_28"
        y1="434.752"
        y2="317.248"
      />
      <g id="_02-sunny" data-name="02-sunny">
        <g id="gradient_blend" data-name="gradient blend">
          <motion.circle
            cx="256"
            cy="256"
            fill="url(#New_Gradient_Swatch_34)"
            r="172"
          />
          <motion.path
            d="m458.618 84.065a52.007 52.007 0 0 0 -101.477 1.076 52 52 0 0 0 10.859 102.859h88a52 52 0 0 0 2.618-103.935z"
            fill="url(#New_Gradient_Swatch_28)"
            initial="hidden"
            animate="visible"
            variants={navAnimation}
          />
          <motion.path
            d="m146.618 324.065a52.007 52.007 0 0 0 -101.477 1.076 52 52 0 0 0 10.859 102.859h88a52 52 0 0 0 2.618-103.935z"
            fill="url(#New_Gradient_Swatch_28-2)"
            initial="hidden"
            animate="visible"
            variants={cloudAnimation}
          />
          <g fill="#fce6aa">
            <motion.path d="m256 60a12 12 0 0 1 -12-12v-25a12 12 0 0 1 24 0v25a12 12 0 0 1 -12 12z" />
            <motion.path d="m152.011 87.869a12 12 0 0 1 -10.4-6l-12.5-21.651a12 12 0 0 1 20.784-12l12.5 21.651a12 12 0 0 1 -10.381 18z" />
            <motion.path d="m75.855 164a11.94 11.94 0 0 1 -5.988-1.61l-21.651-12.5a12 12 0 1 1 12-20.784l21.651 12.5a12 12 0 0 1 -6.012 22.394z" />
            <motion.path d="m48 268h-25a12 12 0 0 1 0-24h25a12 12 0 0 1 0 24z" />
            <motion.path d="m256 501a12 12 0 0 1 -12-12v-25a12 12 0 0 1 24 0v25a12 12 0 0 1 -12 12z" />
            <motion.path d="m372.511 469.786a12 12 0 0 1 -10.4-6l-12.5-21.651a12 12 0 1 1 20.784-12l12.5 21.651a12 12 0 0 1 -10.381 18z" />
            <motion.path d="m457.772 384.5a11.94 11.94 0 0 1 -5.988-1.61l-21.651-12.5a12 12 0 0 1 12-20.784l21.651 12.5a12 12 0 0 1 -6.012 22.394z" />
            <motion.path d="m489 268h-25a12 12 0 0 1 0-24h25a12 12 0 0 1 0 24z" />
          </g>
        </g>
      </g>
    </motion.svg>
  );
};

export default SvgLogo;
