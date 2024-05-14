interface Animal {
  isAlive: boolean;
}
interface Bird extends Animal {
  type: "bird";
  fly(): void;
}

interface Fish extends Animal {
  type: "fish";
  swim(): void;
}

const checkIsBird = (animal: Animal): animal is Bird => {
  const isBird = (animal as Bird).fly !== undefined;
  return isBird;
};

const checkIsFish = (animal: Animal): animal is Fish => {
  const isFish = (animal as Fish).swim !== undefined;

  return isFish;
};

function recognizeAnimal(animals: Animal[]): void {
  animals.forEach((animal) => {
    if (checkIsBird(animal)) {
      console.log("This is a bird");
      animal.fly();
    } else if (checkIsFish(animal)) {
      console.log("Look it's fish!");
      animal.swim();
    } else {
      console.log("Who knows what!");
    }
  });
}

const bird: Bird = {
  type: "bird",
  isAlive: true,
  fly: () =>
    console.log("Flying high above the buildings and chaos of the city"),
};

const fish: Fish = {
  isAlive: true,
  type: "fish",
  swim: () =>
    console.log(
      "Swimming deep, below and well beyond the darkness of the blinding light!"
    ),
};


recognizeAnimal([bird, fish, {isAlive:false}])