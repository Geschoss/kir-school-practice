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
    let newArr = input.split('');
    let rleArr = [];
    let counter = 1;
    let letter;
    for (let i = 0; i < newArr.length; i++) {
      letter = newArr[i];
      if (letter === newArr[i+1]) {
        counter++;
      } else {
        if (counter !== 1) {
          rleArr.push(letter + counter);
          counter = 1;
        } else {
          rleArr.push(letter);
        }
      }
    }
    return rleArr.join('');
  }