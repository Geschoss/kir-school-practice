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
    let newInput = '';
    if (/^[A-Z]+$/.test(input)) {
        let count = 1;
        let symbol = input.charAt(0);
        for (let i = 1; i <= input.length; i++) {
            if (input[i] == symbol){
                count++;
            }
            else {
                if (count < 2) {
                    newInput += symbol;
                }
                else {
                    newInput += symbol + count;
                }
                symbol = input.charAt(i);
                count = 1;
            }
        }
    }
    return newInput; 
}