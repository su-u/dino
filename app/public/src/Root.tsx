import * as React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';

export default ({ store }: any) => (
    <Provider store={store}>
        <App />
    </Provider>
);
