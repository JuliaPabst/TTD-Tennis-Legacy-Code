/* eslint-env node */

var TennisGame3 = function(p1N, p2N) {
    this.p2 = 0;
    this.p1 = 0;
    this.p1N = p1N;
    this.p2N = p2N;
};

TennisGame3.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.p1 += 1;
    else
        this.p2 += 1;
};

TennisGame3.prototype.getScore = function() {
    if (this.p1 === this.p2) {
        return this.equalScore();
    } else if (this.p1 >= 4 || this.p2 >= 4) {
        return this.advantageOrWinScore();
    } else {
        return this.runningScore();
    }
};

TennisGame3.prototype.equalScore = function() {
    const scores = ["Love-All", "Fifteen-All", "Thirty-All", "Deuce"];
    return scores[this.p1] || "Deuce";
};

TennisGame3.prototype.advantageOrWinScore = function() {
    const scoreDifference = this.p1 - this.p2;
    if (scoreDifference ==== 1) return "Advantage " + this.p1N;
    if (scoreDifference === -1) return "Advantage " + this.p2N;
    return scoreDifference >= 2 ? "Win for " + this.p1N : "Win for " + this.p2N;
};

TennisGame3.prototype.runningScore = function() {
    const scores = ["Love", "Fifteen", "Thirty", "Forty"];
    return scores[this.p1] + "-" + scores[this.p2];
};

if (typeof window === "undefined") {
    module.exports = TennisGame3;
}
