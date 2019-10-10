import Object from './Object';
import IColor from './interface/IColor';

export default class Ball extends Object implements IColor{
    private ballRadius: number;
    private xSize: any;
    private ySize: any;
    public color: string;

    constructor(x: number, y: number, xSize: any, ySize: any) {
        super(x, y);
        this.ballRadius = 10;
        this.xSize = xSize;
        this.ySize = ySize;
        this.color = ' ';
    }

    draw = (context: any): void => {
        context.beginPath();
        context.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        context.fillStyle = "#0095DD";
        context.fill();
        context.closePath();
        console.log(this.x);
    }

    update = () => {
        this.x += this.dx;
        this.y += this.dy;

        let ndx = this.dx;
        let ndy = this.dy;
        if (this.x + this.dx > this.xSize - this.ballRadius || this.x + this.dx < this.ballRadius) {
            ndx = -this.dx;
        }
        if (this.y + this.dy > this.ySize - this.ballRadius || this.y + this.dy < this.ballRadius) {
            ndy = -this.dy;
        }
        this.dx = ndx;
        this.dy = ndy;
    }
}