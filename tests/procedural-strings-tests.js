const test = require('ava');
const procStr = require('../lib/procedural-strings');
const parser = require("svg-parser");

test('generate', async t => {
  const svg = procStr.generate();
  t.truthy(true);
  t.true(typeof svg === 'string');
})

test('static-seed', async t => {
  const settings = new procStr.Settings();
  settings.height = 10;
  settings.width = 20;
  settings.lines = 1;
  settings.points = 2;
  settings.random.seed = 123;

  var str = procStr.generate(settings);
  var svg = parser.parse(str);

  t.is(svg.name, 'svg');
  t.is(svg.attributes.xmlns, 'http://www.w3.org/2000/svg');
  t.is(svg.attributes.width, settings.width);
  t.is(svg.attributes.height, settings.height);
  t.is(svg.children.length, 2);
  t.is(svg.children[1].name, 'path');
  t.is(svg.children[1].attributes.d, 'M 0 0.08605307416327901 C 10 0.08605307416327901 10 5.296261470376532 20 5.296261470376532');
  
  settings.random.seed = 321;
  str = procStr.generate(settings);
  svg = parser.parse(str);
  t.not(svg.children[1].attributes.d, 'M 0 0.08605307416327901 C 10 0.08605307416327901 10 5.296261470376532 20 5.296261470376532');

});