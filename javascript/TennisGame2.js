/* eslint-env node */

var TennisGame2 = function(player1Name, player2Name) {
    this.P1point = 0;
    this.P2point = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1point++;
    else
        this.P2point++;
};

TennisGame2.prototype.getScore = function() {
    if (this.P1point === this.P2point) {
        return this.getEqualScore();
    } else if (this.P1point >= 4 || this.P2point >= 4) {
        return this.getAdvantageOrWinScore();
    } else {
        return this.getRunningScore();
    }
};

TennisGame2.prototype.getEqualScore = function() {
    const scores = ["Love-All", "Fifteen-All", "Thirty-All", "Deuce"];
    return scores[this.P1point] || "Deuce";
};

TennisGame2.prototype.getAdvantageOrWinScore = function() {
    const scoreDifference = this.P1point - this.P2point;
    if (scoreDifference === 1) return "Advantage player1";
    if (scoreDifference === -1) return "Advantage player2";
    return scoreDifference >= 2 ? "Win for player1" : "Win for player2";
};

TennisGame2.prototype.getRunningScore = function() {
    const scores = ["Love", "Fifteen", "Thirty", "Forty"];
    return scores[this.P1point] + "-" + scores[this.P2point];
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}
