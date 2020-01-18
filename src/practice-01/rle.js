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
    var array = [...input];
    var arrayCounter = [];
    var count = 1; //Не додумался как тут 0 использовать а не 1;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            count++;
        } else {
            if (count === 1) {
                arrayCounter.push(array[i]);
            } else {
                arrayCounter.push(array[i] + count);
            }
            count = 1; //И "обнуление" до единицы тоже пугает. Что в двух местах у меня зависимость одной переменной
        }
    }
    return arrayCounter.join('');
}