import test from 'ava';
import { getMinMax } from '../getMinMax';

test('Lesson 1: getMinMax', t => {
    t.deepEqual(
      getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028'),
      {
        max: 15,
        min: -1028
      }
    );
  
    t.deepEqual(
      getMinMax('100 и 500 -3; 178 или неточное число 1.3232'),
      {
        max: 500,
        min: -3
      }
    );
  
    t.deepEqual(
      getMinMax('"To Infinity and beyond", - repeated Buzz Lightyear 4 times in a row'),
      {
        max: Infinity,
        min: 4
      }
    );
  
    t.deepEqual(
      getMinMax(`
        У нас было 2 мешка травы, 75 таблеток мескалина, 5 марок мощнейшей кислоты,
        полсолонки кокаина и гора возбудителей, успокоительных и всего такого, всех цветов,
        а ещё 1 литр текилы, 1 литр рома, ящик пива, 0.5 литра эфира и 24 амила.
      `),
      {
        max: 75,
        min: 0.5
      }
    );
  });