import * as React from "react";
import PositionData from "./components/PositionData";

export enum ColorCollection {
  red = "red",
  black = "black"
}

export const randomColor = (): ColorCollection => {
  const max = 1;
  const rnd = Math.round(Math.random() * Math.floor(max));
  return rnd == 0 ? ColorCollection.red : ColorCollection.black;
};

export const getRandomStartPosition = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min)) + min;
};

export const isFreePosition = (
  x: number,
  color: ColorCollection,
  positionData: PositionData
) => {
  const { leftBox, rifhtBox } = positionData;
  let value = true;
  switch (color) {
    case ColorCollection.red:
      value = x < leftBox ? false : true;
      break;
    case ColorCollection.black:
      value = rifhtBox < x ? false : true;
      break;
  }
  return value;
};

export const useTimer = () => {
  const [isRunning, setIsRunning] = React.useState(false);
  const [elapsedTime, setElapsedTime] = React.useState(0);

  React.useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(
        () => setElapsedTime(prevElapsedTime => prevElapsedTime + 0.1),
        100
      );
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return {
    isRunning,
    setIsRunning,
    elapsedTime,
    setElapsedTime
  };
};

export const useStopwatch = () => {
  const [laps, setLaps]: any = React.useState([]);
  const { isRunning, setIsRunning, elapsedTime, setElapsedTime } = useTimer();

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setLaps([]);
  };

  const handleAddLap = () => {
    const prevTotal =
      laps.length > 0 ? laps.reduce((acc: any, curr: any) => acc + curr, 0) : 0;
    const currentLap = laps.length > 0 ? elapsedTime - prevTotal : elapsedTime;
    isRunning && setLaps([...laps, currentLap]);
  };

  return {
    elapsedTime: elapsedTime.toFixed(1),
    laps,
    addLap: () => handleAddLap(),
    resetTimer: () => handleReset(),
    startTimer: () => setIsRunning(true),
    stopTimer: () => setIsRunning(false),
    isRunning
  };
};
