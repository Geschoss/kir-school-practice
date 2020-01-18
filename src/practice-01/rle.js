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
export function rle(input) {
    let resultString = '';
    let matches = 1;
    
    for (let i = 0; i < input.length; i++) {
      let nextChar = input[i+1];

        if (input[i] === nextChar) {
            matches++;
        } else {
            resultString += input[i];
            if (matches > 1){
                resultString += matches;
                matches = 1;
            }
        }
    }

    return resultString;
}