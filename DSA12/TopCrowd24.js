// Define the method, which accepts an string indicating the emailid, check the email ID is valid or not.
// Define the below method with the following specifications
// Name of method isValidMailID()//accept the string indicating the emailID, check the ID is valid or not.
// Arguments: One argument of string value.
// Return Type: an string value
// Specifications: The value returned by the method isValidMailID() is determined by the following rules
// If the email id does not start with lowercase letter, return -1
// If the email id does not contains symbol @, return -2
// If the email id contains symbol @ more than once, return -3
// If the email id does not ends with ".com" or ".co.in" in lower case, return -4
// If the email id contains other than lower case letters, numbers, underscore(_) or dot (.), return -5
// If the email id entered is valid, return "Valid"


// function isvalid(email) {
//   let dotcoin =
//     email[email.length - 6] +
//     email[email.length - 5] +
//     email[email.length - 4] +
//     email[email.length - 3] +
//     email[email.length - 2] +
//     email[email.length - 1];
//   let dotcom =
//     email[email.length - 4] +
//     email[email.length - 3] +
//     email[email.length - 2] +
//     email[email.length - 1];
//   let lowerdotcoin = dotcoin.toLowerCase();
//   let lowerdotcom = dotcom.toLowerCase();
//   if (email[0] != email[0].toLowerCase()) {
//     return -1;
//   } else if (!email.includes("@")) {
//     return -2;
//   } else {
//     let atratecount = 0;
//     let valcheck = false;
//     if (dotcoin != lowerdotcoin) {
//       valcheck = true;
//     } else if (dotcom != lowerdotcom) {
//       valcheck = true;
//     }
//     if (valcheck) {
//       return -4;
//     } else {
//       for (let i of email) {
//         if (i == "@") {
//           atratecount = atratecount + 1;
//         } else if (i == i.toLowerCase() || i == +i || i == "." || i == "_") {
//         } else {
//           return -5;
//         }
//       }

//       if (atratecount > 1) {
//         return -3;
//       } else {
//         return "Valid";
//       }
//     }
//   }
// }
// console.log(isvalid("durgaprasad02@gmail.com"));




// Define the method, which accepts an string indicating the emailid, return the masked email id.
// Note: Ensure that the format of the email ID you enter is in correct format. ie., it should contain one '@' and dot.
// test@gmail.com, 123test@gmail.com, TEST@GMAIL.COM -- valid
// testgmail.com, test@gmailcom, testgmailcom -- invalid
// Example
// Input :testmail@gmail.com
// Output:teXXXXXX@gmail.com
// Define the below method with the following specifications 
// Name of method maskMailID()//accept the string indicating the emailID, return the masked email id.
// Arguments: One argument of string value.
// Return Type: an string value;


// function maskMailID(email){
//     let maskedString = "";
//     let dotcoin =
//     email[email.length - 6] +
//     email[email.length - 5] +
//     email[email.length - 4] +
//     email[email.length - 3] +
//     email[email.length - 2] +
//     email[email.length - 1];
//   let dotcom =
//     email[email.length - 4] +
//     email[email.length - 3] +
//     email[email.length - 2] +
//     email[email.length - 1];
//   let lowerdotcoin = dotcoin.toLowerCase();
//   let lowerdotcom = dotcom.toLowerCase();
//   if (email[0] != email[0].toLowerCase()) {
//     return -1;
//   } else if (!email.includes("@")) {
//     return -2;
//   } else {
//     let atratecount = 0;
//     let valcheck = false;
//     if (dotcoin != lowerdotcoin) {
//       valcheck = true;
//     } else if (dotcom != lowerdotcom) {
//       valcheck = true;
//     }
//     if (valcheck) {
//       return -4;
//     } else {
//       for (let i of email) {
//         if (i == "@") {
//           atratecount = atratecount + 1;
//         } else if (i == i.toLowerCase() || i == +i || i == "." || i == "_") {
//         } else {
//           return -5;
//         }
//       }

//       if (atratecount > 1) {
//         return -3;
//       } else {
//         email = email.split('');
//         // console.log(email);
//         let star = "";
//         let unmaeskedVals = ""
//         let firstTwoVal = email.splice(0,2);
//         for(let i in email){
//             if(+i<email.indexOf("@")){
//                 star = star + "X"
//             }else{
//                 unmaeskedVals = unmaeskedVals+email[i]
//             }
//         }
//         firstTwoVal = firstTwoVal.join('');
//         maskedString = maskedString + firstTwoVal+star+unmaeskedVals;
//       }
//     }
//   }
//   return maskedString
// }
// console.log(maskMailID("durgaprasad02@gmail.com"));




// Write a program which calculates the sum of all amicable pairs till 1 Million.
// Explanation
// Amicable numbers are two different numbers 'a' and 'b' so related that the sum of the proper divisors of 'a' is equal to number 'b', simillerly sum of the proper divisors of 'b' is equal to number 'a'. 
// A proper divisor of a number is a positive integer divisor other than the number itself. 
// Example
// 220 and 284 are amicable pairs as the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110. Their sum is 284. The proper divisors of 284 are 1, 2, 4, 71, and 142, of which the sum is 220.
// Define the below methods with the following specifications
// Name of method sumOfAmicablePairs()// return the sum of all amicable pairs till 1 Million.
// Arguments: No
// Return Type: an Integer value
// Name of method getSumOfProperDivisors()//accepts an integer value as argument and return the sum of the proper divisors of the given number
// Arguments: One argument of integer value.
// Return Type: an integer value
// Example
// Input : 220
// Output: 284

// function getSumOfProperDivisors(number){
//     let properDivisorSum = 0;
//     for(let i=1; i<number; i++){
//         if(number%i == 0){
//             properDivisorSum = properDivisorSum  + i;
//         }
//     }
//     return properDivisorSum;
// }
// console.log(getSumOfProperDivisors(1184));



// Write a program which calculates the sum of distinct elements from the given array.
// Example
// Input :int[] a = {10, 20, 30, 40, 50, 60, 10}
// Output: 200
// Define the below methods with the following specifications
// Name of method getSumOfDistinctElements()//accepts an integer array and return the sum of distinct elements
// Arguments: One argument of integer array.
// Return Type: an Integer value
// Specifications: The value returned by the method getSumOfDistinctElements() is determined by the following rules
// If the array contains negative element, return -1
// If the array contains zero as element value, return -2
// in other case return the sum of distince elements.
// Example
// Input :int[] a = {10, 20, 30, 40, 50}
// Output: 150


// function getSumOfDistinctElements(input_array){
//     let distinctValuesSum = 0;
//     for(let i of input_array){
//         if(input_array.indexOf(i) == input_array.lastIndexOf(i)){
//             distinctValuesSum = distinctValuesSum + i;
//         }
//     };
//     return distinctValuesSum;
// }
// console.log(getSumOfDistinctElements([10, 20, 30, 40, 50]));





// Write a program to get the sum of all armstrongs which contains all odd digits with in the given range.
// Explanation
// An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits.
// Example:
// 153 = 1^3 + 5^3 + 3^3  = 1 + 125 + 27 = 153
// 1634  1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634 
// Define the below methods with the following specifications
// Name of method getSumOfAllArmstrongNums()//returns the sum of all armstrongs, which contains all odd digits wiht in the range
// Arguments: Two integer values
// Return Type: an integer value
// Specifications: The value returned by the method  getSumOfAllArmstrongNums() is determined by the following rules
// If the start value is greater than end value, return -3
// If the start or end value are negative, return -1
// If the start or end value are zero, return -2
// other case return the sum of all armstrongs with contains all odd digits.
// Name of method isArmstrong()//return true if the given value is an armstrong, else return false.
// Arguments: One argument of integer value.
// Return Type: an boolean value
// Example
// Input : 153 / 370 / 407 / 1634 / 9474
// Output: true
// Input : 152 / 1013 
// Output: false
// Name of method sumOfPowersOfDigits()//return the sum of powers of it's digits of the given number
// Arguments: One argument of integer value.
// Return Type: an integer value
// Example
// Input : 153
// Output: 153
// Input : 407
// Output: 407
// Input : 182
// Output: 521
// Name of method getDigits()//return an array of integer contains the digits of the given number, in same order
// Arguments: One argument of integer value.
// Return Type: an integer array
// Example
// Input: 153
// Output: {1, 5, 3}
// Input: 5307
// Output: {5, 3, 0 7}
// Name of method containsAllOddDigits()//return true if the given number contains all odd digits
// irguments: One argument of integer value.
// Return Type: an boolean value
// Example
// Input: 153
// Output: true
// Input: 5307
// Output: true
// Input: 5247
// Output: false 
// Note: As zero is not even or odd, if the number contains zero in it and all the other digits are odd return true. so, 5307 return true.



// function getSumOfAllArmstrongNums(startValue, endValue){
//     let sumOfOddDigitsArmStrong = 0
//     if(startValue>endValue){
//         return -3
//     }else if(startValue<0 || endValue<0){
//         return -1
//     }else if(startValue == 0 || endValue == 0){
//         return -2
//     }else{ 
//         for(let i=startValue; i<=endValue; i++){
//             let sum = 0;
//             i = String(i);
//             for(let j of i){
//                 sum = sum + (+j)**i.length;
//             }
//             if(sum == +i && sum%2 ==1){
//                 sumOfOddDigitsArmStrong = sumOfOddDigitsArmStrong + sum 
//             }
//         }
//     }
//     return sumOfOddDigitsArmStrong
// }
// console.log(getSumOfAllArmstrongNums(1, 10000));


// function isArmstrong(input_array){
//     let armstrongCheck = true
//     for(let i of input_array){
//         let sum = 0;
//         i = String(i);
//         for(let j of i){
//             sum = sum + (+j)**i.length;
//         }
//         if(sum != +i ){
//             armstrongCheck = false
//         }
//     }
//     return armstrongCheck
// }
// console.log(isArmstrong([153,370,407,1634,9474]));


// function sumOfPowersOfDigits(number){
//     let sumOFPowerTotalDigits = 0
//     number = String(number);
//     for(let i of number){
//         sumOFPowerTotalDigits = sumOFPowerTotalDigits + (+i)**number.length;
//     }
//     return sumOFPowerTotalDigits
// }
// console.log(sumOfPowersOfDigits(182));


// function getDigits(number){
//     let digitsArray = [];
//     number = String(number);
//     for(let i of number){
//         digitsArray.push(+i)
//     }
//     return digitsArray
// };
// console.log(getDigits(5307));


// function containsAllOddDigits(number){
//     number = String(number);
//     let nonZeroArray = [];
//     for(let i of number){
//         if(i >0){
//             nonZeroArray.push(i)
//         }
//     }
//     let isOdd = true;
//     for(let i of nonZeroArray){
//         if(i%2 == 0){
//             isOdd  = false
//         }
//     }
//     return isOdd
// }
// console.log(containsAllOddDigits(5307));




// Write a program which counts the number of left truncatable primes between the given range.
// Explanation
// In number theory, a left-truncatable prime is a prime number which, in a given base, contains no 0, and if the leading ("left") digit is successively removed, then all resulting numbers are prime. 
// For example 9137 is a left-truncatable prime, since 9137, 137, 37 and 7 are all prime.
//             1013 is not a left-truncatable prime, as it contains a digit 0.
//  Define the below methods with the following specifications
// Name of method getCountOfLeftTruncatablePrimes()//returns the count of left-truncatable primes with in the given range.
// Arguments: Two integer values
// Return Type: an integer value
// Specifications: The value returned by the method  getCountOfLeftTruncatablePrimes() is determined by the following rules
// If the start value is greater than end value, return -1
// If the start or end value are negative, return -2
// If the start or end value are zero, return -3
// other case return the count of left-truncatable primes.
// Name of method isLeftTruncatablePrime()//return true if the given value is a left-truncatable prime, else return false.
// Arguments: One argument of integer value.
// Return Type: an boolean value
// Example
// Input : 223 / 1523 / 9397 / 27283
// Output: true
// Input : 220 / 1013 
// Output: false
// Name of method isPrime()//return true if the given value is a prime, else return false.
// Arguments: One argument of integer value.
// Return Type: an boolean value
// Note: 1 is not a prime
// Example
// Input : 17 / 59 / 2
// Output: true
// Input : 1 / 14
// Output: false



function isPrime(input_array){
    let isAllprime = true;
    for(let i of input_array){
        let isPrime = true;
        if(i == 1){
            console.log(i, "not a prime number");
            isAllprime = false;
        }else{
            for(let j=2;j<i; j++){
                if(i%j == 0){
                    isPrime = false
                }
            }
            if(isPrime){
                console.log(i, "prime number");
            }else if(isPrime == false){
                isAllprime = false;
                isPrime = true;
                console.log(i, "not a prime Number");
            }
        }
    }
    return isAllprime
}
console.log(isPrime([17, 59, 2]));




function getCountOfLeftTruncatablePrimes(startVal, endVal){
    let leftTrucatePrimeCount = 0;
    if(startVal>endVal){
        return -1
    }else if(startVal<0||endVal<0){
        return -2
    }else if(startVal == 0 || endVal == 0){
        return -3
    }else{
        for(let number=startVal; number<=endVal; number++){  
            let arr1 = [];
            let arr2 = [];
            let number1 = String(number).split('');
            if(number1.includes('0')){
    
            }else{
                let count = number1.length+1
                for(let i in number1){
                    let arr = [...number1];
                    count = count-1;
                    let subArr = arr.splice(+i, count);
                    subArr = subArr.join('');
                    subArr = +subArr;
                    arr1.push(subArr);
                    let primeNumber = true;
                    for(let i=2; i<subArr; i++){
                        if(subArr%i == 0){
                            primeNumber = false
                        }
                    };
                    if(primeNumber){
                        arr2.push("prime")
        
                    }else if(subArr == false){
                        primeNumber = true;
                    };
                }
                if(arr1.length == arr2.length){
                    leftTrucatePrimeCount = leftTrucatePrimeCount + 1;
                    arr1 = [];
                    arr2 = [];
                }
            }
        }
    }
    return leftTrucatePrimeCount;
}
console.log(getCountOfLeftTruncatablePrimes(10, 150));




function isLeftTruncatablePrime(input_array){
    let finalVal = []
    for(let number1 of input_array){  
        let arr1 = [];
        let arr2 = [];
         number1 = String(number1).split('');
        if(number1.includes('0')){

        }else{
            console.log(number1, "venkat");
            let count = number1.length+1
            for(let i in number1){
                let arr = [...number1];
                count = count-1;
                let subArr = arr.splice(+i, count);
                subArr = subArr.join('');
                subArr = +subArr;
                arr1.push(subArr);
                let primeNumber = true;
                for(let i=2; i<subArr; i++){
                    if(subArr%i == 0){
                        primeNumber = false
                    }
                };
                if(primeNumber){
                    arr2.push("prime")
    
                }else if(subArr == false){
                    primeNumber = true;
                };
            }
            if(arr1.length == arr2.length){
                finalVal.push(arr1[0]);
                arr1 = [];
                arr2 = [];
            }
        }
    }
    console.log(finalVal, "venkatesh");
    console.log(input_array, "venkatesh");
    if(finalVal.length == input_array.length){
        return true
    }else{
        return false
    }
}
console.log(isLeftTruncatablePrime([223 , 1523 , 9397 , 27283]));

