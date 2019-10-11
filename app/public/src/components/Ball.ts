import ColorObject from './ColorObject';
import IRender from './interface/IRender';

export default class Ball extends ColorObject implements IRender {
    private ballRadius: number;
    private xSize: number;
    private ySize: number;

    constructor(x: number, y: number, xSize: number, ySize: number) {
        super(x, y);
        this.xSize = xSize;
        this.ySize = ySize;
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
        this._x += (this._dx * this._speed);
        this._y += (this._dy * this._speed);

        let ndx = this._dx;
        let ndy = this._dy;
        if (
            this._x + this._dx > this.xSize - this.ballRadius ||
            this._x + this._dx < this.ballRadius
        ) {
            ndx = -this._dx;
        }
        if (
            this._y + this._dy > this.ySize - this.ballRadius ||
            this._y + this._dy < this.ballRadius
        ) {
            ndy = -this._dy;
        }
        this._dx = ndx;
        this._dy = ndy;
    }
    
    private GetRandomRadius = (): number => {
        return Math.floor(Math.random() * 10) + 10;
    }

    public set Speed(value: number) {
        this._speed = value;
    }
}
