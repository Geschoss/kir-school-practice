/**
 * Напишите функцию limitCalls(fn, maxCalls), принимающую функцию fn,
 * и возвращающую новую функцию, которую можно вызвать не более
 * указанного в maxCalls количества раз.
 *
 * В целях упрощени, входящая функция не принимает никаких аргументов, работу с
 * аргументами можно не учитывать.
 *
 * Пример:
 * const limitedLog = limitCalls(() => console.log('log'), 2);
 * limitedLog(); // 'log'
 * limitedLog(); // 'log'
 * limitedLog(); // undefined
 * limitedLog(); // undefined
 *
 * Больше примеров в тестах.
 *
 * @param  {Function} fn функция
 * @param  {number} maxCalls максимальное количество вызовов
 * @return {Function}
 */

function limitCalls(fn, maxCalls) {
    let count = maxCalls;
    
    return () => {
        while (count > 0) {
            fn();
            count--;
        }
    };
}

// не понимаю почему сыпется тест с пометкой 
// TypeError {
//    message: '(0 , _limitCalls.limitCalls) is not a function',
// }