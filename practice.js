function loopyLighthouse(){
  for(let i = 100; i <= 200; i++){
    if(i % 3 === 0 && i % 4 === 0){
      console.log('LoopyLighthouse');
    } else if(i % 3 === 0){
      console.log('Loopy');
    } else if(i % 4 === 0){
      console.log('Lighthouse');
    } else {
      console.log(i);
    }
  }
}
// loopyLighthouse();

function chooseStations(stations){
  const result = [];
  for(let station of stations){
    const capacity = station[1];
    const room = station[2];
    if(capacity >= 20){
      if(room === 'school' || room === 'community centre'){
        result.push(station[0])
      }
    }
  }
  return result;
}

function finalPosition(moves){
  let x = 0; 
  let y = 0;
  moves.forEach(move => {
    if(move === 'north'){
      y++;
    } else if(move === 'south'){
      y--;
    } else if(move === 'east'){
      x++;
    } else if(move === 'west'){
      x--;
    }
  });
  return [x,y];
}

// console.log(finalPosition(['north', 'north', 'west', 'west', 'north', 'east','north'] ));

function ageCalculator(name, yearOfBirth, currentYear){
  return `${name} is ${currentYear - yearOfBirth} years old.`;
}

function howManyHundreds(num){
  return Math.round(num / 100);
}

const calculateRectangleArea = (length, width) => width < 1 ? undefined : length * width;
const calculateTriangleArea = (base, height) => height < 1 ? undefined : base * height / 2;
const calculateCircleArea = (radius) => radius < 1 ? undefined : Math.PI * Math.pow(radius,2);