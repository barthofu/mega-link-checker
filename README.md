<h1 align="center" font-weight="bold">Mega Link Checker</h1>

<p align="center">
    <a href="http://forthebadge.com/" target="_blank">
    	<img src="http://forthebadge.com/images/badges/built-with-love.svg"
    </a>
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
  </a>
</p>

> #### Little tool that checks if a [MEGA](https://mega.nz) is valid or not.

------

## Installation

```sh
npm install --save mega-link-checker
```

## Use

```js
const megaLinkChecker = require('mega-link-checker')

megaLinkChecker('your_mega_shared_link')
    .then(result => console.log(result)) // can be either 'true' or 'false'
```

## License
MIT License

Copyright (c) barthofu