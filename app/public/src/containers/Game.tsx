import React from "react";
import * as Enumerable from "linq";
import { Stage, Layer, Text, Rect } from 'react-konva';
import Ball from '../components/Ball';

interface State {
    screen: {
        width: any;
        height: any;
        ratio: any;
    };
    keys: any;
}

export default class Game extends React.Component<{}, State> {
    render(){
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Text text="Try click on rect" />
                    <Ball />
                    {/* <Rect
                        x={20}
                        y={20}
                        width={50}
                        height={50}
                        fill={"#000000"}
                        shadowBlur={5}
                    /> */}
                </Layer>
            </Stage>
        );
    };
}


