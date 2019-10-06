import * as React from "react";

interface State{
    screen: {
        width: any,
        height: any,
        ratio: any
    },
    ball: {
        x: number,
        y: number
    }
    context: any,
    keys: any,
    currentScore: number,
}

export default class App extends React.Component<{}, State> {
    constructor(){
        super();
        this.state = {
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
            },
            ball: {
                x: 50,
                y: 50
            },
            context: null,
            keys: 0,
            currentScore: 0,
        }
    }


    componentDidMount() {
        const context = this.refs.canvas.getContext('2d');
        this.setState({ context: context });

        requestAnimationFrame(() => { this.update() });
    }

    componentWillUnmount() {
    }

    handleKeys = (value: any, e: KeyboardEvent) => {
        let { keys } = this.state;
        keys = value;
        this.setState({
            keys: keys
        });
    }

    update() {
        const context = this.state.context;
        const {ball} = this.state;
        // const keys = this.state.keys;

        context.save();
        context.scale(this.state.screen.ratio, this.state.screen.ratio);

        // Motion trail
        context.fillStyle = '#000';
        context.globalAlpha = 0.4;
        context.fillRect(0, 0, this.state.screen.width, this.state.screen.height);
        context.globalAlpha = 1;

        context.beginPath();
        context.arc(ball.x, ball.y, 10, 0, Math.PI * 2);
        context.fillStyle = "#0095DD";
        context.fill();
        context.closePath();

        var dx = 2;
        var dy = 2;

        ball.x += dx;
        ball.y += dy;

        context.restore();

        requestAnimationFrame(() => { this.update() });
    }


    render = () => {
        const { screen } = this.state;

        return (
            <canvas ref="canvas"
                width={screen.width * screen.ratio}
                height={screen.height * screen.ratio}
            />
        )
    }


}