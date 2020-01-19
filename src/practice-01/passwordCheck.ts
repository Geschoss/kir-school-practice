  
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

export function passwordCheck(password: string): boolean {
  const hasMatchInPass = (regexp: RegExp): boolean => regexp.test(password);

  if (password.length < 10) return false;
  if (!hasMatchInPass(/\d/)) return false;
  if (!hasMatchInPass(/[!?.,+\-*\/=]/)) return false;
  if (!hasMatchInPass(/[a-z]/) && !hasMatchInPass(/[A-Z]/)) return false ;
  return true
}
