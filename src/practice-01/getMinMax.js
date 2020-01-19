/**
 * Напишите функцию getMinMax(input), принимающую строку input,
 * и ищущую в ней максимальное и минимальное числа.
 *
 * Числа в строке выделяются пробелами или знаками препинания.
 *
 * Пример:
 * getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028');
 * // { min: -1028, max: 15 }
 *
 * getMinMax('"To Infinity and beyond", - repeated Buzz Lightyear 4 times in a row')
 * { max: Infinity, min: 4 }
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input входная строка
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 */
export function getMinMax(input) {
    var numbers = findNumbers(input);
    let minNumber = numbers[0];
    let maxNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      let number = numbers[i];

      if(number > maxNumber){
        maxNumber = number;
      }
      if(number < minNumber){
        minNumber = number;
      }
    }

    return {min: minNumber, max: maxNumber}
}



function findNumbers(input) {
     let Result = []; 
     let Number = "";

    for (let i = 0; i < input.length; i++) {
       let currentSymbol = input.charAt(i);

       if(isPartOfNumber(input.charAt(i-1), currentSymbol, input.charAt(i + 1))){
        Number += currentSymbol;
       }
       else {
        if(Number != ""){
            Result.push(Number);
            Number = "";
        }
       }
    }

    if(Number != ""){
        Result.push(Number);
    }

    return Result;
}

function isNumeral(symbolToCheck){
    let parsed = parseInt(symbolToCheck, 10);
    if (isNaN(parsed)){
        return false;
    }

    return true;
}

function isPartOfNumber(prevSymbol, symbolToCheck, nextSymbol){
    
    if(isNumeral(symbolToCheck)){
      return true;
    }
    
    if(symbolToCheck == "." & isNumeral(prevSymbol) & isNumeral(nextSymbol)){
      return true;
    }

    if(symbolToCheck == "-" & isNumeral(nextSymbol)){
        return true;
    }

    return false;
}