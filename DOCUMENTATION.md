## Classes

<dl>
<dt><a href="#Settings">Settings</a></dt>
<dd></dd>
<dt><a href="#GradientStop">GradientStop</a></dt>
<dd></dd>
<dt><a href="#ParkMiller">ParkMiller</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#generate">generate(settings)</a> ⇒ <code>String</code></dt>
<dd><p>entry method</p>
</dd>
</dl>

<a name="Settings"></a>

## Settings
**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | width of the generated SVG image |
| height | <code>number</code> | height of the generated SVG image |
| points | <code>number</code> | amount of points on the x axis |
| lines | <code>number</code> | amount of lines that should be generated |
| colors | [<code>Array.&lt;GradientStop&gt;</code>](#GradientStop) | SVG gradient over the x axis |


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

| Param | Type | Description |
| --- | --- | --- |
| offset | <code>number</code> | gradient offset |
| color | <code>string</code> | gradient color. |

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

<a name="generate"></a>

## generate(settings) ⇒ <code>String</code>
entry method

**Kind**: global function  
**Returns**: <code>String</code> - Generated SVG image as string  

| Param | Type |
| --- | --- |
| settings | [<code>Settings</code>](#Settings) | 

