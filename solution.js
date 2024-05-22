// 1. Sum of two numbers 

function sum(num1, num2){

    return num1 + num2;
}
console.log(sum(3, 2)) 

// 2. Return the next number from the number passed

function nextNumber(number){
    number++;

    return number;
}
console.log(nextNumber(7))

// 3. Find perimeter of a rectangle

function rectanglePerimeter(length, width){

    return 2 * (length + width)
}
console.log(rectanglePerimeter(5, 4))

// 4. Write a function called returnSomethingToMe that returns the string "something" followed by a space " " followed by the string that was passed into the function.

function returnSomethingToMe(){
    let word = "wonderful";

    return "something" + " " + word
}
console.log(returnSomethingToMe())

// 5. Bob's BMI vs Jane's BMI

function greaterBMI(bobBMI, janeBMI){
    if (bobBMI > janeBMI){
        return "Bob"
    } else if (janeBMI > bobBMI) {
        return "Jane"
    } else {
        return "Equal"
    } 
};

console.log(greaterBMI(30, 25))  /* Prints Bob */
console.log(greaterBMI(35, 40))  /* prints Jane */
console.log(greaterBMI(35, 35))  /* Prints Equal */

// 6. Basketball points

function basketBallPoints(pointer2, pointer3){
    finalPoints= (2 * pointer2) + (3 * pointer3)

    return finalPoints
}
console.log(basketBallPoints(1, 1))
console.log(basketBallPoints(7, 5))
console.log(basketBallPoints(0, 5))

// 7. Less than 100

function isSumMoreThan100(number1, number2){
    let sumResult = number1 + number2;
    if (sumResult > 100){
        return true
    }else{
        return false
    }
    return
}

console.log(isSumMoreThan100(25,55))
console.log(isSumMoreThan100(72,38))

// 8. Convert minutes to second
function convertToSeconds(noOfMinutes){
    let totalSeconds = noOfMinutes * 60;
    if (noOfMinutes == 0){
        return "0";
    }else if(noOfMinutes === 1){
        return "1"
    } else {
        return totalSeconds + " " + "seconds"
    }; 
};
console.log(convertToSeconds(5))
console.log(convertToSeconds(0))
console.log(convertToSeconds(1))

//  9. Greater among the three

function greater(int1, int2, int3){
    if ((int1 >= int2) && (int1 > int3)){
        return int1
    } else if((int2 > int1) && (int2 > int3)){
        return int2
    }else if ((int3 > int2) && (int3 > int1)){
        return int3
    } else {
        return (int1 || int2 || int3)
    }
};
console.log(greater(2, 35, 9)) 
console.log(greater(23, 23, 23))

// 10. Less among the three

function least(intLeast1, intLeast2, intLeast3){
    if ((intLeast1 < intLeast2) && (intLeast1 < intLeast3)){
        return intLeast1
    } else if((intLeast2 < intLeast1) && (intLeast2 < intLeast3)){
        return intLeast2
    }else if ((intLeast3 < intLeast1) && (intLeast3 < intLeast2)){
        return intLeast3
    }else{
        return (intLeast1 || intLeast2 || intLeast3)
    }
};
console.log(least(2, 35, 9))
console.log(least(23, 23, 23))

// 11. Football points

function footballPoints(win, draw, lose){
    finalStats = (win * 3) + (draw * 1) + (lose * 0 )

    return finalStats;
}
console.log(footballPoints(5, 0, 2))
console.log(footballPoints(0, 0, 2))
console.log(footballPoints(5, 2, 0))

// 12. Even numbers
// Write a function called isEven that takes in a number as an argument, the function returns true if a number is even and returns false if a number is odd. 
function isEven(num){
    return num % 2 == 0;
}

// Use this function to log to the console all the even numbers between 0 and 101.
console.log(isEven(46))

    for (let i = 1; i <= 101; i++){
        if (isEven(i)){
            console.log(i);
        }
    }
 