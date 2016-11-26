import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import DummyComponent from '~/components/DummyComponent.jsx';

ReactDOM.render(
    <DummyComponent></DummyComponent>,
    document.getElementById('app')
);
