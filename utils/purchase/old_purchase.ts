// All Variables have export before them, so they are global. This is not required for the script to function.
// inital variable declarations
export let score: number = 0; // score variable with type number
export let buildings: number[] = [0, 0, 0, 0, 0]; // buildings variable with array type number
export let cost: number[] = [10, 100, 1000, 10000, 100000]; // cost variables with array type number
export let cps: number = 0; // cps variable with type number
export let clickBonus: number = 0; // click bonus variable with type number
export let upgradeBonusCursor: number = 0; // cursor upgrade bonus variable with type number
export let buildingBonuses: number[] = [0, 0, 0, 0] // building upgrade bonuses with array type number

// purchase function
export function purchase(building: string): void //specifies what is returned: void, and requires building arg to be a string
{
    if (building === "cursor" && score >= cost[0]) // checks if you can afford it, and if it was the selected building 
    {
        buildings[0] += 1; // adds one to building counter
        score -= cost[0]; // removes cost from score
        clickBonus += upgradeBonusCursor; // adds one to the click bonus
        cost[0] = Math.floor((cost[0] * 1.15) ** 2); // refactors cost
    }
    if (building === "tree" && score >= cost[1]) // checks if you can afford it, and if it was the selected building
    {
        buildings[1] += 1; // adds one to building counter
        score -= cost[1]; // removes cost from score
        cps += 1 + buildingBonuses[0]; // adds cps and building bonus together
    }
    if (building === "shed" && score >= cost[2]) // checks if you can afford it, and if it was the selected building
    {
        buildings[2] += 1; // adds one to building counter
        score -= cost[2]; // removes cost from score
        cps += 10 + buildingBonuses[1]; // adds cps and building bonus together
    } 
    if (building === "farm" && score >= cost[3]) // checks if you can afford it, and if it was the selected building
    {
        buildings[3] += 1; // adds one to building counter
        score -= cost[3]; // removes cost from score
        cps += 100 + buildingBonuses[2]; // adds cps and building bonus together
    }
    if (building === "orange_orchard" && score >= cost[4]) // checks if you can afford it, and if it was the selected building
    {
        buildings[4] += 1; // adds one to building counter
        score -= cost[4]; // removes cost from score
        cps += 1000 + buildingBonuses[3]; // adds cps and building bonus together
    }
}