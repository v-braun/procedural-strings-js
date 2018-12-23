# procedural-strings-js
> procedural generation of beautiful svg shapes

By [v-braun - viktor-braun.de](https://viktor-braun.de).


<p align="center">
<img width="70%" src="https://github.com/v-braun/procedural-strings-js/blob/master/.assets/banner.png" />
</p>


## Description


## Installation

``` sh
# as module
npm i procedural-strings-js --save

# as CLI
npm i procedural-strings-js -g

```


## Usage

### Module
``` js
const procStrings = require('procedural-strings-js');

const setting = new procStrings.Settings();
setting.width = 800;
setting.height = 600;

const data = procStrings.generate(setting);
console.log(data); // output will be the generated SVG as string

```


### CLI
``` sh

procedural-strings-js -o out.svg
open -a "Google Chrome" out.svg

```


## Configuration

Checkout the *Settings* object for more configuration details.



## Authors

![image](https://avatars3.githubusercontent.com/u/4738210?v=3&amp;s=50)  
[v-braun](https://github.com/v-braun/)



## Contributing

Make sure to read these guides before getting started:
- [Contribution Guidelines](https://github.com/v-braun/procedural-strings-js/blob/master/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/v-braun/procedural-strings-js/blob/master/CODE_OF_CONDUCT.md)

## License
**procedural-strings-js** is available under the MIT License. See [LICENSE](https://github.com/v-braun/procedural-strings-js/blob/master/LICENSE) for details.
