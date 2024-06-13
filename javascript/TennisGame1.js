/* eslint-env node */

var TennisGame1 = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

TennisGame1.prototype.getScore = function() {
    if (this.m_score1 === this.m_score2) {
        return this.equalScore();
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        return this.advantageOrWinScore();
    } else {
        return this.regularScore();
    }
};

TennisGame1.prototype.equalScore = function() {
    const scores = ["Love-All", "Fifteen-All", "Thirty-All", "Deuce"];
    return scores[this.m_score1] || "Deuce";
};

TennisGame1.prototype.advantageOrWinScore = function() {
    const minusResult = this.m_score1 - this.m_score2;
    if (minusResult === 1) return "Advantage player1";
    if (minusResult === -1) return "Advantage player2";
    return minusResult >= 2 ? "Win for player1" : "Win for player2";
};

TennisGame1.prototype.regularScore = function() {
    const scores = ["Love", "Fifteen", "Thirty", "Forty"];
    return scores[this.m_score1] + "-" + scores[this.m_score2];
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}