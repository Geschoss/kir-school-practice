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
    let sum = 0;
    for (let i = 0; i < Math.abs(b); i++) {
       sum += Math.abs(a);
    }

    if (a < 0 && b < 0) {
        return Math.abs(sum);
    } else if (a < 0 || b < 0 ) {
        return -sum;
    } else {
        return sum;
    }
}
