/*Function declarations are not part of the regular
top-to-bottom flow of control.*/

//Trial excercises on functions to understand the concepts explained
let number = 23;
console.log(number);

function greet(who){
    console.log("Hello" + " " + who);
}
greet("Harry")
console.log("Bye");



function egg(){
    return chicken();
}
//console.log(chicken() + " " + "came first");

/*It ignores the extra arguments
and computes the square of the first one.*/
function square (x){
    return x * x
}
console.log(square(4, true, 'hedgehog'));

function minus(a, b){
    if (b===undefined) return -a;
    else return a-b;
}
console.log(minus(10));
console.log(minus(10, 15));

/*If you don’t provide it or pass the value undefined, it will default
to two, and the function will behave like square. */

function power(base, exponent=4){
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}
console.log(power(4));
console.log(power(4, 4));



//Excercise 1
function minValue(a, b){
    if (a < b){
        return a;
    }else{
        return b;
    }
  }
console.log(minValue(5, 8));
console.log(minValue(2, 1));


//Excercise 2 Still not correct
function isEven(N){
let a = 0;
let positveNumber = a % 2;
    if (positveNumber === 0){
        return true;
    }else if (positveNumber === 1){
        return false;
    }else{
        for (N = 0; N > positveNumber; N - 2){
            return true;
        }
    }
}
console.log(isEven(75));


function countBs (string){

}