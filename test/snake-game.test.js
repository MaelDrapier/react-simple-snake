import React from 'react';
import TestRenderer from 'react-test-renderer';
import SnakeGame from '../src/SnakeGame';

const testRenderer = TestRenderer.create(<SnakeGame />);
const testInstance = testRenderer.root;

it('starts up the game correctly', function () {
    expect(testInstance.findByProps({id: "GameBoard"})).not.toEqual(null);
});

it('has correct starting snake length', function () {
    expect(testInstance.findByProps({id: "GameBoard"}).children.length).toEqual(8);
});

it('shows the score board', function () {
    expect(testInstance.findByProps({id: "Score"})).not.toEqual(null);
});

it('shows the correct starting score', function () {
    const score =  testInstance.findByProps({id: "Score"}).children;
    expect(score[score.length-1]).toEqual("0");
});