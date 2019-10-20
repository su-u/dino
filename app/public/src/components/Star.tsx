import React, { useState } from "react";
import Konva from "konva";
import { Star as StarKonva } from "react-konva";

const Star = () => {
    const [x] = useState(30);
    const [y] = useState(50);
    const [color] = useState(Konva.Util.getRandomColor());

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
}

export default Star;

