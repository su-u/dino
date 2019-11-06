import React from 'react';
import { Stage, Layer, Text, Rect } from 'react-konva';
import Star from '../components/Star';
import SideBox from '../components/SideBox';
import PositionData from '../components/PositionData';
import GameStart from '../components/GameStart';
import GameClear from '../components/GameClear';

const clearScore = 1;

interface State {
    screen: {
        width: any;
        height: any;
    };
    keys: any;
    score: number;
    is_start: boolean;
    is_clear: boolean;
    starArray: any[];
}

const initState = {
    screen: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    keys: false,
    score: 0,
    is_start: false,
    is_clear: false,
    starArray: [...new Array(clearScore)]
};

export default class Game extends React.Component<{}, State> {
    constructor() {
        super({});
        this.state = initState;
    }

    addScore = () => {
        const { score } = this.state;
        const newScore = score + 1;
        this.setState({ score: newScore });
        if (newScore >= clearScore) {
            this.setState({ is_clear: true });
        }
    };

    gameStart = () => {
        this.setState({ is_start: true });
    };

    gameReStart = () => {
        this.setState({
            is_start: true,
            is_clear: false,
            score: 0,
            starArray: [...new Array(clearScore)]
        });
    };

    render() {
        const { score, is_clear, is_start, starArray } = this.state;
        console.log(starArray);
        const positionData: PositionData = {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            innerWidthHalf: window.innerWidth * 0.5,
            innerHeightHalf: window.innerHeight * 0.5,
            leftBox: window.innerWidth * 0.2,
            rifhtBox: window.innerWidth * 0.8
        };

        return (
            <>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <SideBox
                            x={0}
                            width={positionData.leftBox}
                            height={window.innerHeight}
                            color={'red'}
                        />
                        <SideBox
                            x={positionData.rifhtBox}
                            width={positionData.innerWidth}
                            height={window.innerHeight}
                            color={'black'}
                        />
                        {starArray.map((_, i) => (
                            <Star
                                key={i}
                                positionData={positionData}
                                addScore={this.addScore}
                            />
                        ))}
                        <Text text={score.toString()} fontSize={30} />
                    </Layer>
                </Stage>
                {!is_start && <GameStart startFunc={this.gameStart} />}
                {is_clear && (
                    <GameClear clearFunc={this.gameReStart} score={score} />
                )}
            </>
        );
    }
}
