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

export function rle(input: string): string {
  let count: number = 1;

  return input.split('').reduce((accumulator: string, letter: string, index: number, array: []): string => {
    const nextLetter: string = array[index + 1];

    if (letter === nextLetter) {
      count++;
    } else {
      accumulator = `${accumulator}${letter}${count !== 1 ? count : ''}`;
      count = 1;
    }
    return accumulator
    
  }, '')
}
