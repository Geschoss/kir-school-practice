import test from 'ava';
import { capitalize } from '../capitalize';

test('Lesson 1: capitalize', t => {
    t.is(
      capitalize('А роза упала на лапу Азора'),
      'А Роза Упала На Лапу Азора'
    );
  
    t.is(
      capitalize('Use the force, Luke'),
      'Use The Force, Luke'
    );
  
    t.is(
      capitalize('Что-то ты маловат для штурмовика.'),
      'Что-то Ты Маловат Для Штурмовика.'
    );
  
    t.is(
      capitalize('Сэр, мне кажется этот астероид нестабилен.'),
      'Сэр, Мне Кажется Этот Астероид Нестабилен.'
    );
  
    t.is(
      capitalize('Ваша самоуверенность — ваша слабость.'),
      'Ваша Самоуверенность — Ваша Слабость.'
    );
  });