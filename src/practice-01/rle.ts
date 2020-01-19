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
    const letters = [...input];
    const result = [];
    let count = 1;

    letters.forEach((letter, i) => {
        const nextLetter = letters[i + 1];

        if (letter === nextLetter) {
            count++
        } else {
            result.push(`${letter}${count !== 1 ? count : ''}`)
            count = 1
        }
    });

    return result.join('');
}