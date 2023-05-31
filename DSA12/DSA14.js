// Define a method that returns the sum of three rounded numbers. If the rightmost digit of the number is less than 5, 
// then round off its value to the previous multiple of 10 otherwise if the rightmost digit of the number is 
// greater or equal to 5, then round off to the next multiple of 10. 
// Write the method with the following specifications
// Name of method sumOfRoundedValues() // which accepts three integer value as argument and return the sum of three rounded numbers.
// Example
// if a = 23, b = 34, c = 66
//    20 + 30 + 70 = 120
// if a = 23, b = 37, c = 55
//    20 + 40 + 60 = 120
// Arguments: three arguments of type integer
// Return Type: an integer value 
// Specifications: The value returned by the method sumOfRoundedValues() is determined by the following rules
// if any of the given numbers is negative or zero, return -1.
// if any of the given numbers' right most digit is of the number is less than 5, then round off its value to 
// the previous multiple of 10 otherwise if the right most digit of the number is greater or equal to 5, then 
// round off to the next multiple of 10. 

// function sumOfRoundedValues(number1, number2, number3){
//     if(number1<=0||number2<=0||number3<=0){
//         return -1
//     }else{
//         let sum = 0
//         if(+String(number1)[1]>=5){
//             number1 = String(number1).split('')
//             number1.splice(1,1,"0");
//             number1 = number1.join('')
//             number1 = +number1+10;
//             sum = sum+number1
    
//         }else{
//             number1 = String(number1).split('')
//             number1.splice(1,1,"0");
//             number1 = number1.join('')
//             sum = sum + +number1
//         }
//         if(+String(number2)[1]>=5){
//             number2 = String(number2).split('')
//             number2.splice(1,1,"0");
//             number2 = number2.join('')
//             number2 = +number2+10;
//             sum = sum+number2
    
//         }else{
//             number2= String(number2).split('')
//             number2.splice(1,1,"0");
//             number2 = number2.join('')
//             sum = sum + +number2
//         }
//         if(+String(number3)[1]>=5){
//             number3 = String(number3).split('')
//             number3.splice(1,1,"0");
//             number3 = number3.join('')
//             number3 = +number3+10;
//             sum = sum+number3
    
//         }else{
//             number3 = String(number3).split('')
//             number3.splice(1,1,"0");
//             number3 = number3.join('')
//             sum = sum + +number3
//         }
//         return sum
//     }

// }
// console.log(sumOfRoundedValues(23, 37, 55));


// Define a method which returns the square of the given number if it is an even, return cube of the given number if it is an odd number.
// Write the method with the following specifications
// Name of method calculate() // which accepts an integer value as argument and return square of the given 
// value if it is an even, return cube of the given value if it is an odd number.
// Arguments: one argument of type integer
// Return Type: an integer value 
// Specifications: The value returned by the method calculate() is determined by the following rules
// if the given number is negative or zero, return -1.
// if the given number is even, return square of the number.
// if the given number is odd, return cube of the given number.

// function calculate(number){
//     if(number<=0){
//         return -1
//     }else if(number%2 == 0){
//         return number*number
//     }else if(number%2 == 1){
//         return number*number*number
//     }
// }
// console.log(calculate(6));

// Define a method that returns a string of natural 
// numbers within a range of two numbers with a given step/increment factor. 
// Write the method with the following specifications
// Name of method: getNumbersInRange()
// Arguments : 3 arguments of type int 
// // first argument as start value
// // second argument as end value
// // third argument is the step/increment value
// Return Type: A String value
// Values must not be negative. If yes, then return -1 as a string.                      
// Values must not be the same. If yes, then return -2 as a string.                          
// 1st value must not be greater than 2nd value. If yes, then return -3 as a string.      
// Numbers in the range must not include start and end values.                                      
// Numbers in the range must be returned as one string with every value separated by a single blank space.
// For Example:
// If input values are 10 30 2
// Output: 11 13 15 17 19 21 23 25 27 29


// function getNumbersInRange(startValue, endValue, incrementValue){
//     let output_String = ""
//     if(startValue<=0 || endValue<=0){
//         return "-1"
//     }else if(startValue == endValue){
//         return "-2"

//     }else if(startValue>endValue){
//         return "-3"
//     }
//     for(let i=startValue+1; i<=endValue; i=i+incrementValue){
//         output_String = output_String + i + " "
//     }
//     return output_String
// }
// console.log(getNumbersInRange(10,30,2));



// Define a method that returns a String containing natural numbers between a range of two numbers separated by 
// a single space. Solve it using While loops.
// Write the method with the following specifications
// Name of method: getNaturalNumbers()
// Arguments: 2 Arguments of int type. 
// Return Type: A String value
// Values must not be negative. If yes, then return -1 as a string.                                
// Values must not be 0. If yes, then return -2 as a string. 
// Natural Numbers must be returned as one string with every value separated by a single blank space.
// Consider that, the first argument value is less than the second argument number


// function getNaturalNumbers(number1, number2){
//     let output_String = "";
//         while(number1+1<number2){
//             number1 = number1+1;
//             if(number1<0){
//                 return "-1"
//             }else if(number1 == 0){
//                 return "-2"
//             }else{
//                 output_String = output_String + String(number1)+ " "
//             }
//         }
//         return output_String
// }
// console.log(getNaturalNumbers(1, 10));



// Define a method which accepts three boolean value as arguments and return true if any of the two values are 
// true, other wise return false.
// Write the method with the following specifications
// Name of method countBoolean() // which accepts three boolean arguments, return true if any of the two values 
// are true, else return false.
// Arguments: Three arguments of type boolean
// Return Type: A boolean value 
// Specifications: The value returned by the method countBoolean() is determined by the following rules
// if b1 = true, b2 = true, b3 = true then, return true
// if b1 = true, b2 = true, b3 = false then, return true
// if b1 = true, b2 = false, b3 = false then, return false
// if b1 = false, b2 = false, b3 = false then, return false


// function countBoolean(bool1, bool2, bool3){
//     let trueValueCount = 0;
//     if(bool1==true){
//         trueValueCount = trueValueCount +1;
//     }
//     if(bool2 == true){
//         trueValueCount = trueValueCount +1;
//     }
//     if(bool3 == true){
//         trueValueCount = trueValueCount +1
//     }
//     if(trueValueCount == 2 || trueValueCount == 3){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(countBoolean(true, true, false));



// Define a method that accepts two values as arguments(an integer and a boolean) and returns the string 
// indicating when the alarm should ring. 
// the first argument indicating the day of the week is encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a 
// boolean indicating if we are on vacation or not.
// Write the method with the following specifications
// Name of method ringAlarm() // which accepts two arguments, first indicating the day of the week and second a 
// boolean indicating if we are on vacation.
// Arguments: two arguments of type integer and boolean
// Return Type: a string value 
// Specifications: The value returned by the method ringAlarm() is determined by the following rules
// if the first argument value is not between 0 to 6, return "Invalid Inputs"
// if the second value is not a boolean value true or false, return "Invalid Inputs"
// if the first argument value is between 1 to 5 indicating the week day's and the second value is true indicating
//  on vacation, return "10:00"
// if the first argument value is between 1 to 5 indicating the week day's and the second value is false indicating
//  not on vacation, return "07:00"
// if the first argument value is 0 or 6 indicating the weekend day and second value is true indicating on vacation, return "OFF"
// if the first argument value is 0 or 6 indicating the weekend day and second value is false indicating not on vacation, return
// "10:00"

// function ringAlarm(day, boolVal){
//     if(day>=0 && day <=6){
//        if(boolVal == true || boolVal == false){
//           if(day>=1 && day<=5){
//             if(boolVal == true){
//                 return "10:00"
//             }else{
//                 return "7:00"
//             }
//           }
//           if(day == 0 || day == 6){
//             if(boolVal == true){
//                 return "OFF"
//             }else{
//                 return "10:00"
//             }
//           }
//        }else{
//             return "invalid input"
//        }
//     }else{
//         return "invalid input"
//     }
// }
// console.log(ringAlarm(60,true));


// Define a method that returns a String containing natural numbers between a range of two numbers separated by a
//  single space.
// Write the method with the following specifications
// Name of method: getNumbersInRange()
// Arguments: 2 Arguments of int type 
// Return Type: A String value
// Values must not be negative. If yes, then return -1 as a string.  
// Values must not be the same. If yes, then return -2 as a string.  
// 1st argument's value must not be greater than 2nd argument's value. If yes, then return -3 as a string.
// Exclude the first and last value and return the result as one string with every value separated by a single
//  blank space.

//  function getNumbersInRange(number1, number2){
//     let valuesArray = []
//     if(number1>number2){
//         return "-3"
//     }else{
//         for(let i=number1; i<number2; i++){
//             if(i<0){
//                 return "-1"
//             }else {
//                 if(valuesArray.indexOf(i) == -1){
//                     valuesArray.push(i)
//                 }else{
//                     return "-2"
//                 }    
//             }
//         }
//     }
//     return valuesArray.join(' ')
// }
// console.log(getNumbersInRange(1,10));



// Define a method that returns the sum of three numbers after rounding off each number to the
// next multiple of 10. If any of the given numbers is a multiple of 10 don't change it's value.
// For Example: 
// if value of X is 56 round it's value to 60
// if value of X is 30, don't change it's value.
// Write the method with the following specifications
// Name of method sumOfMultiples() // which accepts three integer value as argument and return the sum
// of three numbers after rounding off each number to the next multiple of 10. 
// Arguments: three arguments of type integer
// Return Type: an integer value 
// Specifications: The value returned by the method sumOfMultiples() is determined by the following rules
// if any of the given numbers is negative or zero, return -1.
// in other cases return the sum of all three rounded values.

// function sumOfMultiples(number1, number2, number3){
//     let roundedSum = 0
//     if(number1<=0||number2<=0||number3<=0){
//         return -1
//     }else if(number1>9 && number2>9 && number3>9){
//         number1 = String(number1);
//         number2 = String(number2);
//         number3 = String(number3);
//         if(number1[number1.length-1] == "0"){
//             roundedSum = roundedSum + +number1
//         }else{
//           number1 = number1.split('')
//           number1.splice(number1.length-1,1,"0");
//           number1 = number1.join('');
//           roundedSum = roundedSum + +number1 + 10
//         }
//         if(number2[number2.length-1] == "0"){
//             roundedSum = roundedSum + +number2
//         }else{
//           number2 = number2.split('')
//           number2.splice(number2.length-1,1,"0");
//           number2 = number2.join('');
//           roundedSum = roundedSum + +number2 + 10
//         }
//         if(number3[number3.length-1] == "0"){
//             roundedSum = roundedSum + +number3
//         }else{
//           number3 = number3.split('')
//           number3.splice(number3.length-1,1,"0");
//           number3 = number3.join('');
//           roundedSum = roundedSum + +number3 + 10
//         }
//     }
//     return roundedSum
// }
// console.log(sumOfMultiples(50,20,20));


// Define a method that returns a string of all numbers between 1 and the given input value.
// Write the method with the following specifications
// Name of method: getFourPerLine()
// Arguments: 1 argument of type int
// Return Type: A String value
// The value must not be negative. If yes, then return -1 as string.                        
// The value must not be 0. If yes, then return -2 as a string.                              
// The value must not be greater than 99. If yes, then return -3 as string.
// Numbers in the range must be returned as one string with every value separated by a single blank space.
// Ensure a new line after every set of 4 values.
// For Example:
// In Input: 12
// Output:
// 1 2 3 4 
// 5 6 7 8
// 9 10 11 12


// function getFourPerLine(latsVal){
//     let count = 0
//     let output_String = ""
//      for(let i=1; i<=latsVal; i++){
//         if(i<0){
//             return "-1"
//         }else if(i == 0){
//             return "-2"
//         }
//         else{
//             count++;
//             output_String = output_String + String(i)+" ";
//             if(count == 4){
//                 output_String = output_String +'\n'
//                 count = 0
//             }
//         }
//      }
//      return output_String
// }
// console.log(getFourPerLine(12));


// Define a method that returns a String containing natural numbers between a given range separated by a single space.

// Write the method with the following specifications
// Name of method: getNumbersInRange() // accepts two integer value, return the number between the given range
// Arguments: Two arguments of integer type, start_val, and end_val
// Return Type: A String value

// Example:
// Inputs: 10 1
// Output: 9 8 7 6 5 4 3 2

// Inputs: 3 0
// Output: 2 1 

// Inputs: 3 2 
// Output: "-4" // as the difference between 3 and 2 is 1

// Specifications: The value returned by the method getNumbersInRange() is determined by the following rules:

// If the input values are negative, return "-1" as a string
// If the input values are equal, return "-2" as a string
// If the first argument value is less than the second argument value, return "-3" as a string
// If the difference between the first argument and the second argument is 1, return "-4" as a string
// in other cases return a string with every value separated by a single blank space.

// Note: Numbers in the range must not include start value and end value.



let output_String = ""
function getNumbersInRange(number1, number2){
    if(number1<0 || number2<0){
        return "-1"
    }else if(number1 == number2){
        return "-2"
    }else if(number1<number2){
        return "-3"
    }else if(number1-number2 == 1){
        return "-4"
    }else {
        for(let i= number1-1; i>number2; i--){
          
            output_String = output_String + String(i) + " "
        }
        return output_String
    }
}
console.log(getNumbersInRange(10, 1));


