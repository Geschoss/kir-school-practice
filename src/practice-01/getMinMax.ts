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
type minMax = {
    min: number,
    max: number
}
export function getMinMax(input: string): minMax {

    let r = /\d/;
    let m = input.split(' ')
        .filter((it: string) => it.includes('Infinity') || it.search(r) !== -1)
        .map((it: string) => Number(it) || parseFloat(it));
    const max: number = Math.max.apply(null, m)
    const min: number = Math.min.apply(null, m)
    return { max: max, min: min }
}