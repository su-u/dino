import React from "react";
import { Stage, Layer, Text, Rect } from 'react-konva';
import Star from '../components/Star';
import SideBox from '../components/SideBox';
import PositionData from '../components/PositionData';

interface State {
    screen: {
        width: any;
        height: any;
    };
    keys: any;
    score: number;
}

export default class Game extends React.Component<{}, State> {
    constructor() {
        super({});
        this.state = {
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
            },
            keys: false,
            score: 0
        }
    }

    addScore = () => {
        const { score } = this.state;
        this.setState({ score: score + 1 });
    }
    
    render() {
        const { score } = this.state;
        const positionData: PositionData = {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            innerWidthHalf: window.innerWidth * 0.5,
            innerHeightHalf: window.innerHeight * 0.5,
            leftBox: window.innerWidth * 0.2,
            rifhtBox: window.innerWidth * 0.8
        }

        return (
            <>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <SideBox x={0} width={positionData.leftBox} height={window.innerHeight} color={'red'} />
                    <SideBox x={positionData.rifhtBox} width={positionData.innerWidth} height={window.innerHeight} color={'black'} />
                    {[...Array(20)].map((_, i) => (
                        <Star key={i} positionData={positionData} addScore={this.addScore} />
                    ))}
                        <Text text={score.toString()} fontSize={30}/>
                </Layer>
            </Stage>
            </>
        );
    };
}


