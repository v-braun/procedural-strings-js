const test = require('ava');
const ParkMiller = require('../lib/rnd-park-miller');



test('nextInt', async t => {
  var rnd = new ParkMiller(123);
  var result = rnd.nextInt();
  t.true(Number.isInteger(result));
  t.is(result, 2067261);
  
  
  rnd = new ParkMiller(2147483647);
  result = rnd.nextInt();
  t.is(result, 2147466840);
});

test('nextIntBetween', async t => {
  const min = 1;
  const max = 100;
  var rnd = new ParkMiller(123);
  var result = rnd.nextIntBetween(1, 100);
  t.true(Number.isInteger(result));
  t.true(result >= min);
  t.true(result <= max);
  t.is(result, 1);
});

test('nextIntBetween multiple iterations', async t => {
  var rnd = new ParkMiller(new Date().getTime());
  const min = 100;
  const max = 1000;

  for(var i = 0; i < 1000; i++){
    var result = rnd.nextIntBetween(min, max);
    t.true(Number.isInteger(result));
    t.true(result >= min);
    t.true(result <= max);      
  }
});

test('nextFloatBetween multiple iterations', async t => {
  var rnd = new ParkMiller(new Date().getTime());
  const min = 0.1;
  const max = 0.2;

  for(var i = 0; i < 1000; i++){
    var result = rnd.nextFloatBetween(min, max);
    t.false(Number.isInteger(result));
    t.true(result >= min, `result >= min failed (${result} >= ${min})`);
    t.true(result <= max, `result <= max failed (${result} >= ${max})`);
  }
});