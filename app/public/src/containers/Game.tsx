import React from "react";
import * as Enumerable from "linq";
import { Stage, Layer, Text, Rect } from 'react-konva';
import Ball from '../components/Ball';
import SideBox from '../components/SideBox';

interface State {
    screen: {
        width: any;
        height: any;
        ratio: any;
    };
    keys: any;
}

export default class Game extends React.Component<{}, State> {
    render() {
        const width = window.innerWidth * 0.2;
        const rightPosition = window.innerWidth * 0.8;

        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Text text="Try click on rect" />
                    <SideBox x={0} width={width} height={window.innerHeight} color={'red'}/>
                    <Ball />
                    {/* <Rect
                        x={20}
                        y={20}
                        width={50}
                        height={50}
                        fill={"#000000"}
                        shadowBlur={5}
                    /> */}
                    <SideBox x={rightPosition} width={width} height={window.innerHeight} color={'black'} />
                </Layer>
            </Stage>
        );
    };
}


