import React from "react";
import { Stage, Layer, Text } from "react-konva";
import Star from "../components/Star";
import SideBox from "../components/SideBox";
import PositionData from "../components/PositionData";
import GameStart from "../components/GameStart";
import GameClear from "../components/GameClear";
import { useStopwatch } from "../utilities";

const defaultStar = 30;

const Game: React.FunctionComponent = () => {
  const [score, setScore] = React.useState(0);
  const [isStart, setStart] = React.useState(false);
  const [isClear, setClear] = React.useState(false);
  const [starArray, setStarArray] = React.useState([...Array(defaultStar)]);
  const [clearStar, setClearStar] = React.useState(defaultStar);

  const { elapsedTime, startTimer, stopTimer } = useStopwatch();

  const addScore = () => {
    const newScore = score + 1;
    setScore(newScore);
    if (newScore >= clearStar) {
      setClear(true);
      stopTimer();
    }
  };

  const positionData: PositionData = {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    innerWidthHalf: window.innerWidth * 0.5,
    innerHeightHalf: window.innerHeight * 0.5,
    leftBox: window.innerWidth * 0.2,
    rifhtBox: window.innerWidth * 0.8
  };

  const gameStart = (star: number) => {
    setClearStar(star);
    setStarArray([...Array(star)]);
    setStart(true);
    startTimer();
    console.log("start" + star);
  };

  const gameReStart = () => {
    location.reload();
  };
  return (
    <>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <SideBox
            x={0}
            width={positionData.leftBox}
            height={window.innerHeight}
            color={"red"}
          />
          <SideBox
            x={positionData.rifhtBox}
            width={positionData.innerWidth}
            height={window.innerHeight}
            color={"black"}
          />
          {starArray.map((_, i) => (
            <Star key={i} positionData={positionData} addScore={addScore} />
          ))}
          <Text text={`${elapsedTime}s`} fontSize={30} />
        </Layer>
      </Stage>
      {!isStart && (
        <GameStart
          startFunc={(star: number) => gameStart(star)}
          defaultStar={defaultStar}
        />
      )}
      {isClear && (
        <GameClear
          clearFunc={gameReStart}
          score={parseFloat(elapsedTime)}
          starNumber={clearStar}
        />
      )}
    </>
  );
};

export default Game;
