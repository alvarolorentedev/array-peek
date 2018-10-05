# ![logomakr_5sisss](https://user-images.githubusercontent.com/3071208/46520471-66bd9300-c87c-11e8-855c-e38b28094435.png)
[![Build Status](https://travis-ci.org/kanekotic/array-peek.svg?branch=master)](https://travis-ci.org/kanekotic/array-peek)
[![Coverage Status](https://coveralls.io/repos/github/kanekotic/array-peek/badge.svg?branch=master)](https://coveralls.io/github/kanekotic/array-peek?branch=master)
[![npm](https://img.shields.io/npm/dy/array-peek.svg)](https://github.com/kanekotic/array-peek)
[![GitHub license](https://img.shields.io/github/license/kanekotic/array-peek.svg)](https://github.com/kanekotic/array-peek/blob/master/LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/kanekotic/array-peek/graphs/commit-activity)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/kanekotic/)

extend array functionality to allow peek method

## Installation

add it to your project using `npm install array-peek --save` or `yarn add array-peek`

## Usage

to use this package just add it before the usage of any array to extend its prototype. From then on you will have access to the peek function as seen in the next example.


```
require('../src/peek')

let array = [1,2,3].peek(console.log)
//  Output:
//> 1
//> 2
//> 3
```

##### Created my free [logo](https://logomakr.com/5sISSS) at [LogoMakr.com](LogoMakr.com) 