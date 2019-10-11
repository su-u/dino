import * as React from "react";
import * as Enumerable from "linq";
import Ball from "../components/Ball";

interface Player {
    x: number;
    y: number;
    dx: number;
    dy: number;
}

interface State {
    screen: {
        width: any;
        height: any;
        ratio: any;
    };
    ball: Ball[];
    player: Player;
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
            ball: [],
            player: {
                x: 50,
                y: 50,
                dx: 10,
                dy: 10
            },
            context: null,
            keys: 0,
            currentScore: 0
        };
    }

    componentDidMount() {
        const context: any = this.refs.canvas.getContext("2d");
        this.setState({ context: context });

        const ballArray = Enumerable.range(0, 50)
            .select(
                x => new Ball(x + 5, x + 5, this.state.screen.width, this.state.screen.height)
            )
            .toArray();
        this.setState({ ball: ballArray });
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
        const { ball, player, context, screen } = this.state;
        // const keys = this.state.keys;
        const ballRadius = 10;

        context.clearRect(0, 0, this.state.screen.width, this.state.screen.height);

        context.save();
        context.scale(this.state.screen.ratio, this.state.screen.ratio);

        // Motion trail
        context.fillStyle = "#000";
        context.globalAlpha = 0.4;
        context.fillRect(0, 0, screen.width, screen.height);
        context.globalAlpha = 1;

        context.beginPath();
        context.arc(player.x, player.y, 10, 0, Math.PI * 2);
        context.fillStyle = "#0AA0DD";
        context.fill();
        context.closePath();

        // Enumerable.from(ball).select(x => x.draw(context));
        ball.forEach(element => {
            element.Draw(context);
            element.Update();
        });

        let ndx: number = player.dx;
        let ndy: number = player.dy;
        if (
            player.x + player.dx > this.state.screen.width - ballRadius ||
            player.x + player.dx < ballRadius
        ) {
            ndx = -player.dx;
        }
        if (
            player.y + player.dy > this.state.screen.height - ballRadius ||
            player.y + player.dy < ballRadius
        ) {
            ndy = -player.dy;
        }

        player.x += player.dx;
        player.y += player.dy;
        this.setState({
            ball: ball,
            player: { x: player.x, y: player.y, dx: ndx, dy: ndy }
        });
        context.restore();

        requestAnimationFrame(() => {
            this.update();
        });
    }

    render = () => {
        const { screen } = this.state;

        return (
            <canvas
                ref="canvas"
                width={screen.width}
                height={screen.height}
            />
        );
    };
}
