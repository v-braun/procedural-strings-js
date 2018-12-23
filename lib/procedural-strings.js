let sinCurves = require('./sin').sinCurves;
let ParkMiller = require('./rnd-park-miller');

/**
* @property {number} width
* @property {number} height
* @property {number} points
* @property {number} lines
* @property {GradientStop[]} colors
*/
class Settings{

  constructor(){
    this.width = 1200;
    this.height = 600;
    this.points = 10;
    this.lines = 200;

    /** @type {ParkMiller} */
    this.random = new ParkMiller(new Date().getTime());
    
    /** @type {GradientStop[]} */
    this.colors = [];
    this.colors.push(
      new GradientStop(0, '#80c0f570'),
      new GradientStop(50, '#0471ca94'), 
      new GradientStop(100, '#80c0f570')
      );
      
    }
  }
  class GradientStop{
    /**
    * @param {number} offset 
    * @param {string} color
    */  
    constructor(offset, color){
      this.offset = offset;
      this.color = color;
    }
  }
  
  class Point{
    /**
    * @param {number} x 
    * @param {number} y 
    */
    constructor(x, y){
      this.x = x;
      this.y = y;
    }
  }
  
  class Line{
    constructor() {
      
      this.phase = 0;
      
      this.curve = 10;
      
      /** @type {Point[]} */
      this.points = [];
      
      /** @type {Line} */
      this.prev = null;
      
      
    }
    
    svgD() {
      let result = '';
      for(let i = 0; i < this.points.length; i++){
        let p = this.points[i];
        let svgP = '';
        if(i == 0){
          svgP = `M ${p.x} ${p.y}`;
        }
        else{
          let prevP = this.points[i -1];
          svgP = ` C ${prevP.x + this.curve} ${prevP.y} ${p.x - this.curve} ${p.y} ${p.x} ${p.y}`;
        }
        
        result += svgP;
      }
      
      return result;
    }
  }
  
  /**
  * 
  * @param {Settings} params 
  * @returns {Line[]}
  */
  function generateLines(params){
    
    /** @type {Line[]} */
    var result = []; 
    
    /** @type {Line} */
    var prev = null;
    
    var sinYMin = 0;
    var sinYMax = params.height;  
    
    var sinXMin = 0;
    var sinXMax = 100;
    var xMoveCurves = 2;
    
    
    var pointsRnd = {};
    for(var str = 0; str < params.lines; str++){
      var l = new Line();
      l.prev = prev;
      l.phase = str;
      
      for(var point = 0; point < params.points; point++){
        let x = (params.width / params.points) * point;
        let xDelta = sinCurves(params.lines, xMoveCurves, sinXMin, sinXMax, str);
        x += xDelta;
        
        if(point == (params.points-1)){
          x = params.width;
        }
        else if(point == 0){
          x = 0;
        }
        
        
        if(pointsRnd[point] === undefined){
          let cfg = {
            min: params.random.nextFloatBetween(sinYMin, sinYMax),
            max: params.random.nextFloatBetween(sinYMin, sinYMax),
          }
          if(cfg.min > cfg.max){
            let tmp = cfg.min;
            cfg.min = cfg.max;
            cfg.max = tmp;
          }

          cfg.init = params.random.nextFloatBetween(cfg.min, cfg.max)
          pointsRnd[point] = cfg;
          
        }      
        let cfg = pointsRnd[point];   
        let yDelta = sinCurves(params.lines, 2, cfg.min, cfg.max, cfg.init + str);
        let y = 0 + yDelta;
        
        var p = new Point(x, y);
        l.points.push(p);
      }
      
      prev = l;
      result.push(l);
    }
    
    return result;  
  }
  
  
  /**
  * 
  * @param {Settings} settings 
  */
  function generate(settings){
    if(!settings){
      settings = new Settings();
    }
    
    let lines = generateLines(settings);
    let stops = '';
    for(let stop of settings.colors){
      stops += `<stop offset="${stop.offset}%" stop-color="${stop.color}"/>`;
    }
    
    
    let paths = '';
    for(let l of lines){
      let d = l.svgD();
      let path = `<path style="stroke: url(#grad); fill:none;" d="${d}" ></path>`;
      paths += path;
    }
    
    let result = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${settings.width}" height="${settings.height}">
    <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
    ${stops}
    </linearGradient>
    </defs>  
    ${paths}
    </svg>
    `;  
    
    return result;
  }
  
  module.exports.generate = generate;
  module.exports.Settings = Settings;