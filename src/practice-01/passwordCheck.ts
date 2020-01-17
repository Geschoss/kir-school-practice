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
    if (!password.match(/\d/g)) {
        return false;
    }

    if (!password.match(/[A-Z].*[a-z]|[a-z].*[A-Z]/g)) {
        return false;
    }

    if (!password.match(/[!?.,+\-*/=]/g)) {
        return false;
    }

    if (password.length < 10) {
        return false;
    }

    return true;
}
