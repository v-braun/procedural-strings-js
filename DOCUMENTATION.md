## Classes

<dl>
<dt><a href="#Settings">Settings</a></dt>
<dd></dd>
<dt><a href="#GradientStop">GradientStop</a></dt>
<dd></dd>
<dt><a href="#Point">Point</a></dt>
<dd></dd>
<dt><a href="#ParkMiller">ParkMiller</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#generateLines">generateLines(params)</a> ⇒ <code>Array.&lt;Line&gt;</code></dt>
<dd></dd>
<dt><a href="#generate">generate(settings)</a></dt>
<dd></dd>
<dt><a href="#sinBetween">sinBetween(min, max, val)</a></dt>
<dd></dd>
<dt><a href="#sinCurves">sinCurves(totalPhases, totalWaves, min, max, val)</a></dt>
<dd></dd>
</dl>

<a name="Settings"></a>

## Settings
**Kind**: global class  
**Properties**

| Name | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 
| points | <code>number</code> | 
| lines | <code>number</code> | 
| colors | [<code>Array.&lt;GradientStop&gt;</code>](#GradientStop) | 


* [Settings](#Settings)
    * [.random](#Settings+random) : [<code>ParkMiller</code>](#ParkMiller)
    * [.colors](#Settings+colors) : [<code>Array.&lt;GradientStop&gt;</code>](#GradientStop)

<a name="Settings+random"></a>

### settings.random : [<code>ParkMiller</code>](#ParkMiller)
**Kind**: instance property of [<code>Settings</code>](#Settings)  
<a name="Settings+colors"></a>

### settings.colors : [<code>Array.&lt;GradientStop&gt;</code>](#GradientStop)
**Kind**: instance property of [<code>Settings</code>](#Settings)  
<a name="GradientStop"></a>

## GradientStop
**Kind**: global class  
<a name="new_GradientStop_new"></a>

### new GradientStop(offset, color)

| Param | Type |
| --- | --- |
| offset | <code>number</code> | 
| color | <code>string</code> | 

<a name="Point"></a>

## Point
**Kind**: global class  
<a name="new_Point_new"></a>

### new Point(x, y)

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 

<a name="ParkMiller"></a>

## ParkMiller
**Kind**: global class  

* [ParkMiller](#ParkMiller)
    * [new ParkMiller(seed)](#new_ParkMiller_new)
    * [.nextInt()](#ParkMiller+nextInt) ⇒ <code>number</code>
    * [.nextFloat()](#ParkMiller+nextFloat) ⇒ <code>number</code>
    * [.nextIntBetween(min, max)](#ParkMiller+nextIntBetween)
    * [.nextFloatBetween(min, max)](#ParkMiller+nextFloatBetween)

<a name="new_ParkMiller_new"></a>

### new ParkMiller(seed)
simple Random generator
code is based on this gist
https://gist.github.com/blixt/f17b47c62508be59987b


| Param | Type | Description |
| --- | --- | --- |
| seed | <code>number</code> | generators seed |

<a name="ParkMiller+nextInt"></a>

### parkMiller.nextInt() ⇒ <code>number</code>
returns next random int number

**Kind**: instance method of [<code>ParkMiller</code>](#ParkMiller)  
<a name="ParkMiller+nextFloat"></a>

### parkMiller.nextFloat() ⇒ <code>number</code>
returns next random float number

**Kind**: instance method of [<code>ParkMiller</code>](#ParkMiller)  
<a name="ParkMiller+nextIntBetween"></a>

### parkMiller.nextIntBetween(min, max)
returns next random int between min and max

**Kind**: instance method of [<code>ParkMiller</code>](#ParkMiller)  

| Param | Type |
| --- | --- |
| min | <code>number</code> | 
| max | <code>number</code> | 

<a name="ParkMiller+nextFloatBetween"></a>

### parkMiller.nextFloatBetween(min, max)
returns next random float between min and max

**Kind**: instance method of [<code>ParkMiller</code>](#ParkMiller)  

| Param | Type |
| --- | --- |
| min | <code>number</code> | 
| max | <code>number</code> | 

<a name="generateLines"></a>

## generateLines(params) ⇒ <code>Array.&lt;Line&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| params | [<code>Settings</code>](#Settings) | 


* [generateLines(params)](#generateLines) ⇒ <code>Array.&lt;Line&gt;</code>
    * [~result](#generateLines..result) : <code>Array.&lt;Line&gt;</code>
    * [~prev](#generateLines..prev) : <code>Line</code>

<a name="generateLines..result"></a>

### generateLines~result : <code>Array.&lt;Line&gt;</code>
**Kind**: inner property of [<code>generateLines</code>](#generateLines)  
<a name="generateLines..prev"></a>

### generateLines~prev : <code>Line</code>
**Kind**: inner property of [<code>generateLines</code>](#generateLines)  
<a name="generate"></a>

## generate(settings)
**Kind**: global function  

| Param | Type |
| --- | --- |
| settings | [<code>Settings</code>](#Settings) | 

<a name="sinBetween"></a>

## sinBetween(min, max, val)
**Kind**: global function  

| Param | Type |
| --- | --- |
| min | <code>number</code> | 
| max | <code>number</code> | 
| val | <code>number</code> | 

<a name="sinCurves"></a>

## sinCurves(totalPhases, totalWaves, min, max, val)
**Kind**: global function  

| Param | Type |
| --- | --- |
| totalPhases | <code>number</code> | 
| totalWaves | <code>number</code> | 
| min | <code>number</code> | 
| max | <code>number</code> | 
| val | <code>number</code> | 

