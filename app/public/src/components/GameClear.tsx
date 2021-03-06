import React from "react";
import styled from "styled-components";

interface Props {
  clearFunc: () => void;
  score: number;
  starNumber: number;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const StartButton = styled.div`
  position: fixed;
  border: 1px solid green;
  border-radius: 5px;
  background-color: green;
  padding: 20px;
  text-align: center;
  color: white;
  width: 150px;
  height: 30px;
  cursor: pointer;
  top: calc(50% - 30px / 2);
  left: calc(50% - 150px / 2);
  &:hover {
    background-color: #084c08;
    border: 1px solid #084c08;
  }
`;

const ClearText = styled.div`
  position: fixed;
  width: 480px;
  top: 30%;
  left: calc(50% - 480px / 2);
  color: #364e96;
  font-size: 60px;
`;

const ScoreText = styled.div`
  position: fixed;
  width: 350px;
  top: 40%;
  left: calc(50% - 350px / 2);
  font-size: 30px;
`;

const GameClear: React.FunctionComponent<Props> = (props: Props) => {
  const { clearFunc, score, starNumber } = props;

  const average = score / starNumber;

  return (
    <>
      <Overlay />
      <ClearText>Congratulations!</ClearText>
      <ScoreText>
        score:{score}s(average:{average.toFixed(1)}s)
      </ScoreText>
      <StartButton onClick={clearFunc}>タイトルに戻る</StartButton>
    </>
  );
};

export default GameClear;
