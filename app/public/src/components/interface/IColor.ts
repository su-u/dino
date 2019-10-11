export default interface IColor{
    _color: string;
    _r: number;
    _g: number;
    _b: number;
    SetRandomColor(): void;
    RgbToString(): string;
}