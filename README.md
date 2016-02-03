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
console.log(slug); //my-string-aeiou-al-dirty-and-now-unnaoçaiou-string-clear
```


##How to contribute?

Environment with:

* [Docker](https://docs.docker.com/)
* [Debian](https://www.debian.org/releases/stable/)
* [Make](http://www.gnu.org/software/make/manual/make.html#Running)
* [NodeJS](https://nodejs.org/dist/latest-v4.x/docs/api/)
* [NPM](https://www.npmjs.com/package/ns-slug)


Make tasks of environment

* Build docker image - ```$ make build-image```
* Create docker container - ```$ make build-container```
* Run docker container - ```$ make attach-container```


First steps after environment builded
```sh
nbSlug@dev$ npm install
nbSlug@dev$ npm test
```
