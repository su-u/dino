import ColorObject from './ColorObject';
import IPlayer from './interface/IPlayer';

export default class Player extends ColorObject implements IPlayer {
    private ballRadius: number;

    constructor(x: number, y: number) {
        super(x, y);
        this.ballRadius = this.GetRandomRadius();
        this.SetRandomColor();
    }

    public Draw = (context: any) => {
        context.beginPath();
        context.arc(this._x, this._y, this.ballRadius, 0, Math.PI * 2);
        context.fillStyle = `#${this.RgbToString()}`
        context.fill();
        context.closePath();
    }

    public Update = () => {
    }

    public set Speed(value: number) {
        this._speed = value;
    }

    public MoveUp = () => {

    }

    public MoveDown = () => {

    }

    public MoveLeft = () => {

    }

    public MoveRight = () => {

    }

    private GetRandomRadius = (): number => {
        return Math.floor(Math.random() * 10) + 10;
    }
}
