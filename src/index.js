module.exports = function solveEquation(equation) {
   equation = equation.replace(/\s/g, '');

   let arrayNumbers = equation.match(/-?\d+/g);

   let a = +arrayNumbers[0];
   let b = +arrayNumbers[2];
   let c = +arrayNumbers[3];


   let squareDiscriminant = Math.sqrt(b * b - 4 * a * c);

   let solution = [];

   let firstRoot = (-1 * b + squareDiscriminant) / (2 * a);
   let secondRoot = (-1 * b - squareDiscriminant) / (2 * a);

   if (firstRoot < secondRoot) {
      solution.push(Math.trunc(firstRoot));
      solution.push(Math.trunc(secondRoot));
} else {

      solution.push(Math.trunc(secondRoot));
      solution.push(Math.trunc(firstRoot));

}

   return solution;

}
