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

export function getMinMax(input: any) {
    let objMinMax = {'max': 0, 'min': 0};
    let arrWord = input.split(' ');
    let arrNumber = [];
    arrWord.forEach((item, i, arr) => {
        arr[i] = parseFloat(item);
        if (!isNaN(arr[i])) {
            arrNumber.push(arr[i]);
        }
    });
    arrNumber = arrNumber.sort((a, b) => a - b);
    objMinMax.min = arrNumber[0];
    objMinMax.max = arrNumber[arrNumber.length - 1];
    return objMinMax
}