import React from 'react';
import { Rect } from 'react-konva';
interface Props {
    x: number;
    width: number;
    height: number;
    color: string;
}
const SideBox = (props: Props) => {
    return (
        <Rect
            x={props.x + 5}
            y={5}
            width={props.width - 10}
            height={props.height - 10}
            stroke={props.color}
            strokeWidth={10}
        />
    );
};

export default SideBox;
