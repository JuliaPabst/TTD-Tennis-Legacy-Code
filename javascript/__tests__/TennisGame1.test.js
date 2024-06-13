const TennisGame1 = require('../TennisGame1');

test('Initial score is Love-All', () => {
  const game = new TennisGame1('player1', 'player2');
  expect(game.getScore()).toBe('Love-All');
});

test('Player1 scores a point', () => {
    const game = new TennisGame1('player1', 'player2');
    game.wonPoint('player1');
    expect(game.getScore()).toBe('Fifteen-Love');
  });

test('Player2 scores a point', () => {
const game = new TennisGame1('player1', 'player2');
game.wonPoint('player2');
expect(game.getScore()).toBe('Love-Fifteen');
});

test('Both players score some points', () => {
const game = new TennisGame1('player1', 'player2');
game.wonPoint('player1');
game.wonPoint('player2');
game.wonPoint('player1');
expect(game.getScore()).toBe('Thirty-Fifteen');
});

test('Score is Deuce', () => {
const game = new TennisGame1('player1', 'player2');
game.wonPoint('player1');
game.wonPoint('player1');
game.wonPoint('player1');
game.wonPoint('player1');
game.wonPoint('player2');
game.wonPoint('player2');
game.wonPoint('player2');
game.wonPoint('player2');
expect(game.getScore()).toBe('Deuce');
});

test('Player1 has advantage', () => {
    const game = new TennisGame1('player1', 'player2');
    game.wonPoint('player1');
    game.wonPoint('player1');
    game.wonPoint('player1');
    game.wonPoint('player1');
    game.wonPoint('player2');
    game.wonPoint('player2');
    game.wonPoint('player2');
    game.wonPoint('player2');
    game.wonPoint('player1');
    expect(game.getScore()).toBe('Advantage player1');
  });

  test('Player2 wins', () => {
    const game = new TennisGame1('player1', 'player2');
    game.wonPoint('player2');
    game.wonPoint('player2');
    game.wonPoint('player2');
    game.wonPoint('player2');
    game.wonPoint('player1');
    game.wonPoint('player1');
    game.wonPoint('player1');
    game.wonPoint('player2');
    game.wonPoint('player2');
    expect(game.getScore()).toBe('Win for player2');
  });