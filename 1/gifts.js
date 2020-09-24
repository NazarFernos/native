let candy = 10;
let pineapple = 25;
let apple = 15;
let weight = 40;

function solve(x, y, z, w) {
    let result = 0
    for(let x_c = 0; x_c <= w / x; ++x_c) {
        for(let y_c = 0; y_c <= w / y; ++y_c) {
            for(let z_c = 0; z_c <= w / z; ++z_c){
                if(x_c * x + y_c * y + z_c * z === w) {
                    result++;
                }
            }
        }
    }
    return result;
}

let num = solve(candy, pineapple, apple, weight);
console.log('1. Candies');
console.log(num);