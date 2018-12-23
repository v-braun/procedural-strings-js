#!/usr/bin/env node

const lib = require('.');
const options = require('options-parser');
const fs = require('fs');

const opts = {
  width:  { 
    short: 'w', 
    default: 800,
    varName: '800',
    help: 'width of the generated image'
  },
  height: { 
    short: 'h', 
    default: 600,
    varName: '600',
    help: 'height of the generated image'
  },
  out:   { 
    short: 'o', 
    varName: 'out.svg',
    type: options.type.file.open.write(),
    help: 'name of the output file'
  },
  help: {
    short: 'h',
    help: 'this help screen',
    showHelp: { 
      banner: 'procedural-strings-js example: [options]'
    }
  }  
};

const result = options.parse(opts);
if(!result.opt.out){
  options.help(opts);
  process.exit();
}

const setting = new lib.Settings();
setting.width = result.opt.width;
setting.height = result.opt.height;

const data = lib.generate(setting);
fs.writeFileSync(result.opt.out.fd, data);
