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
    var sum = 0;
    var count = Math.abs(b);
    var array = [];
    for (var i = 0; i < count; i++) {
        array.push(Math.abs(a));
    };
    var sum = array.reduce((sum, current) => sum + current, 0)

    if (a == 0 || b == 0) {
        return 0;
    };
    if (Math.sign(a) == Math.sign(b)) {
        return sum;
    } else {
        return -sum;
    }
}