  
/**
 * Напишите функцию passwordCheck(password), принимающую строку password
 * и проверяющую её на сложность. Если сложность достаточна, вернуть true,
 * иначе - false.
 *
 * Достаточной сложность считается, если в строке:
 * - Есть хотя бы одно число
 * - Есть хотя бы две буквы латинского алфавита в разных регистрах
 * - Есть хотя бы один символ из ряда ! ? . , + - * / =
 * - Содержит не менее 10 символов
 *
 * Пример:
 * passwordCheck('Nagibator777') === false
 * passwordCheck('password') === false
 * passwordCheck('This is the 7th password I have come up with!') === true
 *
 * Больше примеров в тестах.
 *
 * @param  {string} password пароль
 * @return {boolean}
 */
export function passwordCheck(password) { 
 
    // const passwordLength = password.length >= 10;
    // const upperCaseChars = password.split('').filter((it) => it === (typeof Number(it) === 'number') && it.toUpperCase()).length >= 2;
    // const numberInPassword = password.split('').filter((it) => typeof Number(it) === 'number').length >= 1;
    // const charsInPassword = password.split('').filter((it) => password.split('').indexOf(it) >= 0).length >= 1;

    // return (passwordLength && upperCaseChars && numberInPassword && charsInPassword)
    return 0;
}