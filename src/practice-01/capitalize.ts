/**
 * Напишите функцию capitalize(input), возвращающую копию строки input,
 * в которой каждое слово начинается с заглавной буквы.
 *
 * "Слово" в данном контексте - последовательность юникод-символов из группы "letters".
 * В целях упрощения в тестовых кейсах будут использоваться только строки из латинских букв
 * и кириллицы. Слова с дефисами ("Что-то", "кто-либо" и т.д.) считаются одним словом.
 *
 * capitalize('А роза упала на лапу Азора') === 'А Роза Упала На Лапу Азора'
 * capitalize('Use the force, Luke') === 'Use The Force, Luke'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input строка с произвольным предложением.
 * @return {string}
 */
export function capitalize(input: string): string {
  return input.split(' ')
              .reduce((result: string, word: string ): string => result + ' ' + word.replace(word[0], word[0].toUpperCase()))
}
console.log(capitalize('А роза упала на лапу Азора') )
console.log(capitalize('Use the force, Luke'))