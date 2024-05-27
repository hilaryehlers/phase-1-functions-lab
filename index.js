// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
   return someValue - 42;
}
distanceFromHqInBlocks(43)

function distanceFromHqInBlocks (someValue) {
    if (someValue >= 42) {
        return someValue - 42;}
        else {
            return 42 - someValue;
        }
    }
distanceFromHqInBlocks(34)

function distanceFromHqInFeet(someValue) {
    const feetPerBlock = 264;
  const distanceInBlocks = distanceFromHqInBlocks(someValue);
  return distanceInBlocks * feetPerBlock;
}

console.log(distanceFromHqInFeet(43))

function distanceTravelledInFeet(start, destination) {
    const startDistance = distanceFromHqInFeet(start);
    const endDistance = distanceFromHqInFeet(destination);
    return Math.abs(endDistance - startDistance);
}
console.log(distanceTravelledInFeet(43, 48))

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
        return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        const farePrice = (distanceInFeet - 400 ) * 0.02;
        return parseFloat(farePrice.toFixed(2));
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
    }
    console.log(calculatesFarePrice(43, 44));
    console.log(calculatesFarePrice(34, 32));
    console.log(calculatesFarePrice(50, 58));
    console.log(calculatesFarePrice(34, 24)); 