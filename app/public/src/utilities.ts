import PositionData from './components/PositionData';

export enum ColorCollection {
    red = 'red',
    black = 'black'
}

export const randomColor = (): ColorCollection => {
    const max = 1;
    const rnd = Math.round(Math.random() * Math.floor(max));
    return rnd == 0 ? ColorCollection.red : ColorCollection.black;
};

export const getRandomStartPosition = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min)) + min;
};

export const isFreePosition = (
    x: number,
    color: ColorCollection,
    positionData: PositionData
) => {
    const { leftBox, rifhtBox } = positionData;
    let value = true;
    switch (color) {
        case ColorCollection.red:
            value = x < leftBox ? false : true;
            break;
        case ColorCollection.black:
            value = rifhtBox < x ? false : true;
            break;
    }
    return value;
};
