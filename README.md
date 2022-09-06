<h1 align="center" font-weight="bold">Mega Link Checker</h1>

<p align="center">
    <a href="http://forthebadge.com/" target="_blank">
    	<img src="https://img.shields.io/badge/Made%20with-%F0%9F%A4%8D-orange"
    </a>
    <a href="https://opensource.org/licenses/MIT" target="_blank">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
    </a>
</p>

> #### Little tool that checks if a shared [MEGA](https://mega.nz) link is valid or not.




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
