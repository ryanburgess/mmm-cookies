# Mmm Cookies

[![npm version](https://badge.fury.io/js/mmm-cookies.svg)](http://badge.fury.io/js/mmm-cookies) [![Build Status](https://travis-ci.org/ryanburgess/mmm-cookies.svg?branch=master)](https://travis-ci.org/ryanburgess/mmm-cookies)

A JavaScript module to set and get cookies in the browser.

![Mmm cookies logo](https://raw.github.com/ryanburgess/mmm-cookies/master/mmm-cookies.png)

## Install

```js
npm install mmm-cookies --save-dev
```

## Use

```js
var cookie = require('mmm-cookies');

// set a cookie
cookie.set('cookieName', 'cookieValue');

// get a cookie value
cookie.get('cookieName');
```
 
## Release History
* 1.0.1: Update documentation.
* 1.0.0: Initial release.
 
## Contributing
1. Fork it
2. Run `npm install`
3. Run Grunt watch `grunt watch`
4. Create your feature branch (`git checkout -b my-new-feature`)
5. Commit your changes (`git commit -am "Add some feature"`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

## License
MIT © [Ryan Burgess](http://github.com/ryanburgess)
