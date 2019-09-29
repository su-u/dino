import * as React from 'react';
import { render } from 'react-dom';
import createFinalStore from './stores/index';
import Root from './Root';

const store = createFinalStore();

// HTML の <div id="react_container"></div> に要素を挿入します
render(<Root store={store} />, document.getElementById('react_container'));
