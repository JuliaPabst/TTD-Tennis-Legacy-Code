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