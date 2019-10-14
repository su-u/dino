import React, {useState} from "react";
import * as Enumerable from "linq";
import { Stage, Layer, Text } from 'react-konva';
// import {Ball} from '../components/Ball';
import { Shape } from "react-konva";
import Konva from "konva";

interface State {
    screen: {
        width: any;
        height: any;
        ratio: any;
    };
    // ball: Ball[];
    context: any;
    keys: any;
    currentScore: number;
}

export default class App extends React.Component<{}, State> {
    constructor() {
        super({});
        this.state = {
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1
            },
            // ball: [],
            context: null,
            keys: 0,
            currentScore: 0
        };
    }

    componentDidMount() {
        const { screen } = this.state;
        const context: any = this.refs.canvas.getContext("2d");
        this.setState({ context: context });

        // const ballArray = Enumerable.range(0, 50)
        //     .select(
        //         x => new Ball(x + 5, x + 5, screen.width, screen.height)
        //     )
        //     .toArray();
        // this.setState({ ball: ballArray });
        requestAnimationFrame(() => {
            this.update();
        });
    }

    componentWillUnmount() { }

    handleKeys = (value: any, e: KeyboardEvent) => {
        const { keys } = this.state;
        this.setState({
            keys: keys
        });
    };

    update() {
        const { context, screen } = this.state;
        // const keys = this.state.keys;
        const ballRadius = 10;

        //context.clearRect(0, 0, this.state.screen.width, this.state.screen.height);

        context.save();
        context.scale(this.state.screen.ratio, this.state.screen.ratio);

        // Motion trail
        context.fillStyle = "#000";
        context.globalAlpha = 0.4;
        context.fillRect(0, 0, screen.width, screen.height);
        context.globalAlpha = 1;

        // Enumerable.from(ball).select(x => x.draw(context));
        // ball.forEach(element => {
        //     element.Draw(context);
        //     element.Update();
        // });

        context.restore();

        requestAnimationFrame(() => {
            this.update();
        });
    }

    render = () =>{
        const { screen } = this.state;

        return (
            // <canvas
            //     ref="canvas"
            //     width={screen.width * screen.ratio}
            //     height={screen.height * screen.ratio}
            // />
            // <Stage width={screen.width} height={screen.height}>
            //     <Layer>
            //         <Text text="Try click on rect" />
            //         {/* <Ball /> */}
            //     </Layer>
            // </Stage>
            <p>aaaa</p>
        );
    };
}

export const Ball = () => {
    const width = 10;
    const height = 10;

    const [x] = useState(10);
    const [y] = useState(10);
    const [color] = useState(Konva.Util.getRandomColor());

    return (
        <Shape
            x={x}
            y={y}
            height={height}
            width={width}
            fill={color}
        />
    );
}

