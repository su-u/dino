import React, { useState } from 'react';
import Konva from 'konva';
import { Star as StarKonva } from 'react-konva';
import PositionData from './PositionData';

interface Props {
    positionData: PositionData;
}

const Star: React.FunctionComponent<Props> = ({ positionData }) => {
    const { innerHeight, leftBox, rifhtBox } = positionData;

    const randomColor = () => {
        const max = 1;
        const rnd = Math.round(Math.random() * Math.floor(max));
        return rnd == 0 ? 'red' : 'black';
    };

    const getRandomStartPosition = (min: number, max: number) => {
        return Math.round(Math.random() * (max - min)) + min;
    };

    const [x] = useState(getRandomStartPosition(leftBox, rifhtBox));
    const [y] = useState(getRandomStartPosition(0, innerHeight));
    const [color] = useState(randomColor());

    const handleDragStart = (e: any) => {
        e.target.setAttrs({
            shadowOffset: {
                x: 15,
                y: 15
            },
            scaleX: 1.1,
            scaleY: 1.1
        });
    };
    const handleDragEnd = (e: any) => {
        e.target.to({
            duration: 0.5,
            easing: Konva.Easings.ElasticEaseOut,
            scaleX: 1,
            scaleY: 1,
            shadowOffsetX: 5,
            shadowOffsetY: 5
        });
    };

    return (
        <StarKonva
            x={x}
            y={y}
            numPoints={5}
            innerRadius={20}
            outerRadius={40}
            fill={color}
            draggable
            shadowColor="black"
            shadowBlur={10}
            shadowOpacity={0.6}
            rotation={Math.random() * 180}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        />
    );
};

export default Star;
