export let score = 0;
export let cps = 0;

export function updateScore(upgradeBonus: number) {
    score += upgradeBonus + 1 + cps;
    return score;
}

