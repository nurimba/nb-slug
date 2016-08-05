# nb-slug
Slug strings

[ ![Codeship Status for luiz-simples/nb-slug](https://codeship.com/projects/f04e22a0-acdc-0133-9bf1-0a06bc138256/status?branch=master)](https://codeship.com/projects/131826)
[![Code Climate](https://codeclimate.com/github/nurimba/nb-slug/badges/gpa.svg)](https://codeclimate.com/github/nurimba/nb-slug)


##How to install?
```sh
$ npm install nb-slug --save
```


##How to use?
```js
var nbSlug = require('nb-slug');
var slug   = nbSlug('MY STRING ÁÉÍÓ_ al}^ ?}^{  (( ))}  dirty and  now ÚŃÑÃÕÇÂÎÔÛ STRING clear')
console.log(slug); //my-string-aeiou-al-dirty-and-now-unnaocaiou-string-clear
```


##How to contribute?

Environment with:

* [Docker](https://www.docker.com/products/docker#/linux)
* [Docker Compose](https://docs.docker.com/compose/install/)
* [Debian](https://www.debian.org/releases/stable/)
* [Make](http://www.gnu.org/software/make/manual/make.html#Running)
* [NodeJS](https://nodejs.org/dist/latest-v4.x/docs/api/)
* [NPM](https://www.npmjs.com/package/nb-slug)


Make tasks of environment

* UP and RUN docker environment - ```$ make run```
* Stop docker environment - ```$ make stop```
* Destroy docker environment - ```$ make down```


First steps after environment builded
```sh
nbSlug@dev:~/src$ npm install
nbSlug@dev:~/src$ npm test
```
