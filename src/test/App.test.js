import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

it('renders without crashing', () => {
    const div = document.createElement('Router');
    ReactDOM.render(<App/>, div);
});