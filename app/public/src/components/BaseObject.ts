import IPosition from './interface/IPosition';

export default abstract class BaseObject implements IPosition {
    public _x: number;
    public _y: number;
    public _dx: number;
    public _dy: number;
    public _speed: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
        this._dx = x;
        this._dy = y;
        this._speed = 1;
    }
}
