import * as React from "react";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

interface Ball{
    x: number,
    y: number,
    dx: number,
    dy: number
}

interface Player{
    x: number,
    y: number
}

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
    dx: number,
    dy: number
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
            dx: 10,
            dy: 10
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
        const { dx, dy } = this.state;
        var ballRadius = 10;

        context.clearRect(0, 0, this.state.screen.width, this.state.screen.height);

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


        var ndx: number = dx;
        var ndy: number = dy;
        if (ball.x + dx > this.state.screen.width - ballRadius || ball.x + dx < ballRadius) {
            ndx = -dx;
        }
        if (ball.y + dy > this.state.screen.height - ballRadius || ball.y + dy < ballRadius) {
            ndy = -dy;
            console.log(dy);
        }
        this.setState({ dx: ndx, dy: ndy });

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