import { motion } from 'framer-motion';

export const fadeIn = (direction = 'up', type = 'tween', delay = 0, duration = 0.5) => {
  return {
    initial: {
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
      },
    },
  };
};

export const slideIn = (direction = 'left', type = 'tween', delay = 0, duration = 0.5) => {
  return {
    initial: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
      },
    },
  };
};

export const zoomIn = (delay = 0, duration = 0.5) => {
  return {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        delay,
        duration,
      },
    },
  };
};