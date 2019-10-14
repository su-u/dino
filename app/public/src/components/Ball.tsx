import React, {useState} from "react";
import Konva from "konva";
import { Circle } from "react-konva";

const Ball = () => {
    const radius = 10;

    const [x] = useState(30);
    const [y] = useState(50);
    const [color] = useState(Konva.Util.getRandomColor());

    return (
        <Circle
            x={x}
            y={y}
            radius={radius}
            fill={color}
        />
    );
}

export default Ball;

