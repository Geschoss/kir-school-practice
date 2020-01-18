
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
    var array = [0, 0, 0, 0];
    for (var i = 0; i < password.length; i++) {
        var n = Number(password[i]);
        if (Number(password[i]) && array[0] == 0) {
            array[0]++;
        }
    }

    var arrayUp = 0;
    var arrayDown = 0;
    for (var i = 0; i < password.length; i++) {
        if (password[i] === password[i].toUpperCase() && isNaN(password[i])) {
            arrayUp++;
        }
        if (password[i] === password[i].toLowerCase() && isNaN(password[i])) {
            arrayDown++;
        }
        if (arrayUp > 0 && arrayDown > 0 && array[1] == 0) {
            array[1]++;
        }
    }

    var SymbolArray = ['!', '?', '.', ',', '+', '-', '*', '/', '='];
    for (var i = 0; i < password.length; i++) {
        if (SymbolArray.indexOf(password[i]) !== -1 && array[2] == 0) {
            array[2]++;
        }
    }

    if (password.length > 10) {
        array[3]++;
    }


    if (array[0] === array[1] && array[2] === array[3] && array.indexOf(0) == -1) {
        return true
    } else {
        return false
    }

    //console.log('Its a prank');
}