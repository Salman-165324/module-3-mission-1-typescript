"use strict";
const checkIsBird = (animal) => {
    const isBird = animal.fly !== undefined;
    return isBird;
};
const checkIsFish = (animal) => {
    const isFish = animal.swim !== undefined;
    return isFish;
};
function recognizeAnimal(animals) {
    animals.forEach((animal) => {
        if (checkIsBird(animal)) {
            console.log("This is a bird");
            animal.fly();
        }
        else if (checkIsFish(animal)) {
            console.log("Look it's fish!");
            animal.swim();
        }
        else {
            console.log("Who knows what!");
        }
    });
}
const bird = {
    type: "bird",
    isAlive: true,
    fly: () => console.log("Flying high above the buildings and chaos of the city"),
};
const fish = {
    isAlive: true,
    type: "fish",
    swim: () => console.log("Swimming deep, below and well beyond the darkness of the blinding light!"),
};
recognizeAnimal([bird, fish, { isAlive: false }]);
