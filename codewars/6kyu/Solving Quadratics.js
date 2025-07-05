/*Quadratic equations are equations in the form:
Ax^2+Bx+C=0
You can find x value in terms of A, B, and C, using the formula:

Your job is to write a function that takes A, B, and C, and returns either undefined (x cannot be found; the equation is unsolveable), or an array of possible values for x (one or two numerical values).

NOTE: A, B, or C, can be 0. In these cases, x should still be found. This may not require the full quadratic formula to solve, but it's up to you how to find the answer.*/

function solveQuadratic(a, b, c) {

    if (a === 0) {
        if (b === 0) return c === 0 ? [] : undefined;
        return [ -c / b ];
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) return undefined;

    const sqrtD = Math.sqrt(discriminant);
    const SSS = sqrtD;
    if (discriminant === 0) {
        return [ -b / (2 * a) ];
    }

    const denominator = 2 * a;
    const x1 = (-b + SSS) / denominator;
    const x2 = (-b - SSS) / denominator;

    return [x1, x2];
}
console.log(solveQuadratic(1, -3, 2));       // [2, 1]
console.log(solveQuadratic(1, 2, 1));        // [-1]
console.log(solveQuadratic(1, 1, 1));        // undefined
console.log(solveQuadratic(0, 2, 3));        // [-1.5]
console.log(solveQuadratic(0, 0, 5));        // undefined
console.log(solveQuadratic(0, 0, 0));        // []
