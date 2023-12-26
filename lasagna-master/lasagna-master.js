/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainTime) {
    if (remainTime === undefined)
        return 'You forgot to set the timer.';
    return remainTime ? 'Not done, please wait.' : 'Lasagna is done.';
}

export function preparationTime(layersTabs, timePerLayer = 2) {
    return layersTabs.length * timePerLayer;
}

export function quantities(layersTabs) {
    let countNoodles = 0;
    let countSauce = 0;

    for (let i = 0; i < layersTabs.length; i++) {
        if (layersTabs[i] === 'noodles')
            countNoodles++;
        else if (layersTabs[i] === 'sauce')
            countSauce++;
    }
    console.log(layersTabs, ' ', countNoodles, ' ', countSauce);
    return {'noodles': countNoodles * 50, 'sauce': countSauce * 0.2};
}

export function addSecretIngredient(tabsIngredientFriens, tabsIngredientMy) {
    tabsIngredientMy.push(tabsIngredientFriens[tabsIngredientFriens.length - 1]);
}

export function scaleRecipe(objRecipe, quantitie = 0) {
    const factorPortion = quantitie / 2;
    const recipe = {};
    for (const key in objRecipe) {
        recipe[key] = objRecipe[key] * factorPortion;
    }
    return recipe;
}