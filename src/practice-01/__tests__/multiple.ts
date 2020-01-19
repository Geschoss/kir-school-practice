import test from 'ava';
import { multiple } from '../multiple';

test('Lesson 1: multiple', t => {
    const random = () => Math.floor(Math.random() * 100) * (Math.random() < 0.5 ? -1 : 1);
    const cases = [
      [1, 1],
      [1, 2],
      [0, 0],
      [random(), random()],
      [random(), random()],
      [random(), random()],
      [random(), random()],
      [random(), random()]
    ];
  
    cases.forEach(([a, b]) => {
      t.is(multiple(a, b), a * b);
    });
  });