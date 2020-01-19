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

type MinMaxObj = {
  min: number,
  max: number
}

export function getMinMax(input: string): MinMaxObj {
  const numbers: number[] = input.split(' ')
                       .filter((it: string): boolean => it.includes('Infinity') || /\d/.test(it))
                       .map((it: string): number => Number(it) || parseFloat(it));
  
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  }
}
