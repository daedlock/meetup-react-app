/* eslint-disable */
import jsdom from 'mocha-jsdom';
import DummyComponent from '../src/components/DummyComponent.jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';

// Replace BigComplicatedComponent.js with a stub component.
global.reactModulesToStub = [
    '../src/dashboard/components/Dashboard.jsx',
];

const assert = require('assert');

describe('DummyComponent Component', () => {
    it('should succeed if true = true', () => {
        assert.equal(true, true);
    });
});
