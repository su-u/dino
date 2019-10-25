import React, { useState } from 'react';
import Konva from 'konva';
import { Star as StarKonva } from 'react-konva';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import * as Actions from '../actions/app';
import PositionData from './PositionData';
import {
    randomColor,
    getRandomStartPosition,
    isFreePosition
} from '../utilities';

interface Props {
    positionData: PositionData;
    addScore: () => void;
}

const Star: React.FunctionComponent<Props> = ({ positionData, addScore }) => {
    const { innerHeight, leftBox, rifhtBox } = positionData;

    const [x] = useState(getRandomStartPosition(leftBox, rifhtBox));
    const [y] = useState(getRandomStartPosition(0, innerHeight));
    const [color] = useState(randomColor());
    const [visible, setVisible] = useState(true);

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
        const isFree = isFreePosition(e.target.x(), color, positionData);
        setVisible(isFree);
        if (!isFree) {
            addScore();
        }
    };

    return (
        <>
            {visible && (
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
                    rotation={rotation}s
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                />
            )}
        </>
    );
};

export default Star;
