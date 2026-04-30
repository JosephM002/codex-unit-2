// Level 11 — Call provided function with args (10 calls)
// Helper provided for students; call it 10 times and save results to descriptive consts.

export function reportScore(playerName, score) {
  return playerName + " scored " + score + " points";
}

const avaScoreReport = reportScore("Ava", 1);
const rolazarScoreReport = reportScore("Rolazar", 0);
const amberScoreReport = reportScore("Amber", 2);
const ashantiScoreReport = reportScore("Ashanti", 3);
const josephScoreReport = reportScore("Joseph", 4);
const chrisScoreReport = reportScore("Christopher", 5);
const donaldScoreReport = reportScore("Donald", 6);
const kimScoreReport = reportScore("Kimberly", 7);
const mariahScoreReport = reportScore("Mariah", 8);
const pearlaScoreReport = reportScore("Pearla", 9);

export default avaScoreReport;
