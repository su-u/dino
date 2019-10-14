import * as React from "react";
import Konva from "konva";
import { Shape } from "react-konva";
const { useState } = React;

export const Ball = () => {
    const width = 10;
    const height = 10;

    const [x] = useState(10);
    const [y] = useState(10);
    const [color] = useState(Konva.Util.getRandomColor());

    return (
        <Shape
            x={x}
            y={y}
            height={height}
            width={width}
            fill={color}
        />
    );
}

