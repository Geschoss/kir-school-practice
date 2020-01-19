import test from 'ava';
import { rle } from '../rle';

test('Lesson 1: rle', t => {
    t.is(
      rle('BCCDDDEEEE'),
      'BC2D3E4'
    );
  
    t.is(
      rle('AAAB'),
      'A3B'
    );
  
    t.is(
      rle('LLLKKFJJJJJJJJJDDDDDSSKQQQNNAAAAAGG'),
      'L3K2FJ9D5S2KQ3N2A5G2'
    );
  
    t.is(
      rle('HELLOWORLD'),
      'HEL2OWORLD'
    );
  
    t.is(
      rle('PARSELTANGSSSSHHHHHSSSSHHHHHSHHHH'),
      'PARSELTANGS4H5S4H5SH4'
    );
  });