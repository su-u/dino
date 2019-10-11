export default class IColor{
    private _color: string;
    private _r: number;
    private _g: number;
    private _b: number;

    constructor() {
        this._color = '';
        this._r = 0;
        this._g = 0;
        this._b = 0;
    }

    get R(): number{
        return this._r;
    }

    set R(value: number){
        if (this.ColorValueCheck(value)) {
            this._r = value;
        }
    }

    get G(): number{
        return this._g;
    }

    set G(value: number){
        if (this.ColorValueCheck(value)) {
            this._g = value;
        }
    }

    get B(): number{
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

    private RgbToString = (): string => {
        this._color = `${this.R.toString()}${this.G.toString()}${this.B.toString()}`;
        return this._color;
    }

    private ColorValueCheck = (value: number): boolean => {
        if (0 < value && value < 256) return true;
        return false;
    }

}