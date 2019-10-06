import * as React from 'react';
import { Provider } from 'react-redux';
import Game from './containers/Game';
import GlobalStyle from "./components/GlobalStyle";


export default ({ store }: any) => (
    <Provider store={store}>
        <GlobalStyle />
        <Game />
    </Provider>
);
