import test from 'ava';
import { limitCalls } from '../limitCalls';

test('Lesson 1: limitCalls', t => {
    (() => {
      let count = 0;
      const increment = () => { count += 1; };
      const limitedIncrementA = limitCalls(increment, 3);
  
      limitedIncrementA();
      limitedIncrementA();
      limitedIncrementA();
      limitedIncrementA();
      limitedIncrementA();
  
      t.is(
        count,
        3
      );
  
      count = 0;
      const limitedIncrementB = limitCalls(increment, 1);
  
      limitedIncrementB();
      limitedIncrementB();
      limitedIncrementB();
  
      t.is(
        count,
        1
      );
    })();
  });