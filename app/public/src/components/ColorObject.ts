import IColor from "./interface/IColor";
import PositionObject from "./PositionObject";

export default abstract class ColorObject extends PositionObject implements IColor {
    public _color: string = '';
    public _r: number = 0;
    public _g: number = 0;
    public _b: number = 0;

    constructor(x: number, y: number) {
        super(x, y);
    }

    get R(): number {
        return this._r;
    }

    set R(value: number) {
        if (this.ColorValueCheck(value)) {
            this._r = value;
        }
    }

    get G(): number {
        return this._g;
    }

    set G(value: number) {
        if (this.ColorValueCheck(value)) {
            this._g = value;
        }
    }

    get B(): number {
        return this._b;
    }

    set B(value: number) {
        if (this.ColorValueCheck(value)) {
            this._b = value;
        }
    }

    public SetRandomColor = (): void => {
        this.R = Math.floor(Math.random() * 256);
        this.G = Math.floor(Math.random() * 256);
        this.B = Math.floor(Math.random() * 256);
    }

    public RgbToString = (): string => {
        this._color = `${this.R.toString()}${this.G.toString()}${this.B.toString()}`;
        return this._color;
    }

    private ColorValueCheck = (value: number): boolean => {
        if (0 < value && value < 256) return true;
        return false;
    }
}
