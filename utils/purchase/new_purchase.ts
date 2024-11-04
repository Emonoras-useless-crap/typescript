export let score: number = 0 // score variable
export let buildings: number[] = [0, 0, 0, 0, 0]; // buildings variable with array type number
export let cost: number[] = [10, 100, 1000, 10000, 100000]; // cost variables with array type number
export let cps: number = 0; // cps variable with type number
export let clickBonus: number = 0; // click bonus variable with type number
export let upgradeBonusCursor: number = 0; // cursor upgrade bonus variable with type number
export let buildingBonuses: number[] = [0, 0, 0, 0] // building upgrade bonuses with array type number
export let buildingList: string[] = ["cursor", "tree", "shed", "farm", "orange_orchard"]

export function purchase(building: string): void // returns nothing or void
{
    for (let i = 0; i < buildingList.length; i++) // loops through buildings array
    {
        if (building == buildingList[i] && score >= cost[i]) // checks if you can afford it, and if it was selected
        {
            score -= cost[i]; // removes cost from score
            buildings[i] += 1; // adds one to the building counter of choice
            if (building == buildingList[0]) // checks if cursor
            {
                clickBonus += upgradeBonusCursor; // increase cursor bonus
            } else // else statement
            {
                for (let i = 0; i < 4; i++) // for loop to add cps
                {
                    if (building == buildingList[i]) 
                    {
                        cps = i * 10 ** i
                    }
                }
            }

        }
    }
}