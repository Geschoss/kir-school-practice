import test from 'ava';
import { passwordCheck } from '../passwordCheck';

test('Lesson 1: passwordCheck', t => {
    t.is(
      passwordCheck('Nagibator777'),
      false
    );
  
    t.is(
      passwordCheck('password'),
      false
    );
  
    t.is(
      passwordCheck('Bp^VfT9h'),
      false
    );
  
    t.is(
      passwordCheck('SbGGstn6mQf7'),
      false
    );
  
    t.is(
      passwordCheck('<+)saHz[6HX'),
      true
    );
  
    t.is(
      passwordCheck('<+)saHz[6HX'),
      true
    );
  
    t.is(
      passwordCheck('95-Yt$e&*d4u8E@vtUkP'),
      true
    );
  
    t.is(
      passwordCheck('This is the 7th password I have come up with!'),
      true
    );
  });