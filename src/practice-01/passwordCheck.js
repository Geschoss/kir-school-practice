  
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
    const symbols = ['!', '?', '.', ',', '+', '-', '*', '/', '=']
    let numberPassword = password.split('').map(item => parseInt(item)).filter(item => Number(item));
    let wordPassword = password.split('').filter(item => (item.toUpperCase() !== item));
    let wordUpperPassword = password.split('').filter(item => (parseInt(item) !== Number(item))).filter(item => (item.toUpperCase() === item));
    let symbolPassword = [];
    for (let i = 0; i < password.length; i++) {
          if (symbols.indexOf(password[i]) !== -1) {
            symbolPassword.push(password[i]);
          }
    };
    
    let lengthPassword;
    if (password.length >= 10) {
      lengthPassword = true;
    } else {
      lengthPassword = false;
    };
    
    if (numberPassword.length !== 0 && 
        wordPassword.length !== 0 &&
        wordUpperPassword.length !== 0 &&
        symbolPassword.length !== 0 && 
        lengthPassword === true) {
          return true;
     } else {
       return false;
     };
  };