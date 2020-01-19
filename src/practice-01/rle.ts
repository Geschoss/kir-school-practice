/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input
 * @return {string}
 */

export function rle(input: string) {
    let resultString = '';
    let prevChar = input[0];
    let matches = 1;

    for (let i = 1; i < input.length; i++) {
        if (prevChar === input[i]) {
            matches++;
        } else {
            resultString += prevChar;
            if (matches > 1){
                resultString += matches;
                matches = 1;
            }
            prevChar = input[i];
        }
    }

    resultString += prevChar;
    if (matches > 1){
        resultString += matches;
    }
    return resultString;
}