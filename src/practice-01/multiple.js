/**
 * Напишите функцию multiple(a, b), умножающую число a на число b,
 * не используя оператор "*" или метод Math.imul.
 *
 * Пример:
 * multiple(1, 1) === 1
 * multiple(1, 2) === 2
 * multiple(0, 0) === 0
 *
 * Больше примеров в тестах.
 *
 * @param  {number} a любое целое число
 * @param  {number} b любое целое число
 * @return {number}
 */

export function multiple(a, b) { 
    if (a === 0 || b === 0) return 0;

    let arr = [];
    for (let i = 0; i < Math.abs(b); i++) {
        arr = arr.concat(a);
    }

    let sum = arr.reduce((num, acc) => acc + num, 0);

    return (b < 0) ? -sum : sum;
}