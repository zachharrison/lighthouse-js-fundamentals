function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 4);

// console.log(-20 + -19 - (-10) - (-1) + 24)
// console.log((10/5) * 4 - 20)
// console.log(4096 % 12)

const whichSchool = function (age) {
  if(age < 13){
    return 'Elementary School';
  } else if(age >= 13 && age <= 18){
    return 'Secondary School';
  } else {
    return 'Lighthouse Labs';
  }
}