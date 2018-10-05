# ![logomakr_5sisss](https://user-images.githubusercontent.com/3071208/46520471-66bd9300-c87c-11e8-855c-e38b28094435.png)
[![Build Status](https://travis-ci.org/kanekotic/array-peek.svg?branch=master)](https://travis-ci.org/kanekotic/array-peek)
[![Coverage Status](https://coveralls.io/repos/github/kanekotic/array-peek/badge.svg?branch=master)](https://coveralls.io/github/kanekotic/array-peek?branch=master)
[![npm](https://img.shields.io/npm/dy/array-peek.svg)](https://github.com/kanekotic/array-peek)
[![GitHub license](https://img.shields.io/github/license/kanekotic/array-peek.svg)](https://github.com/kanekotic/array-peek/blob/master/LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/kanekotic/array-peek/graphs/commit-activity)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/kanekotic/)

extend array functionality to allow peek method. 

## peek vs forEach

`peek` as `forEach` allows you to execute a callback on each of the elements of an array, not affecting the content of itself. 

The difference is that `forEach` returns void so no further processing can be done, while `peek` will return the array so you can continue the transformations necesary for your processing 

## Installation

add it to your project using `npm install array-peek --save` or `yarn add array-peek`

## Usage

to use this package just add it before the usage of any array to extend its prototype. From then on you will have access to the peek function as seen in the next example.


```
require('array-peek')

[1,2,3]
    .peek(console.log)
    .map((value) => value * value)
    .peek(console.log)
    
//  Output:
//> 1
//> 2
//> 3
//> 1
//> 4
//> 9
```

##### Created my free [logo](https://logomakr.com/5sISSS) at [LogoMakr.com](LogoMakr.com) 