# Simple Express REST API on Netlify

[![travis-build][travis-build-image]][travis-build-url]
[![dependabot][dependabot-image]][dependabot-url]

[travis-build-image]: https://flat.badgen.net/travis/dotiful/netlify-express-api
[travis-build-url]: https://travis-ci.org/dotiful/netlify-express-api
[dependabot-image]: https://flat.badgen.net/dependabot/dependabot/dependabot-core/?icon=dependabot
[dependabot-url]: https://dependabot.com

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dotiful/netlify-express-api)

Simple Express REST API on Netlify to convert torrent file to magnet URI

## Features

* Babel 7
* Environment Variables
* Express
* REST API

## Requirements

* [node & npm](https://nodejs.org/en/)
* [git](https://www.robinwieruch.de/git-essential-commands/)

## Installation

* `git clone git@github.com:dotiful/netlify-express-api.git`
* `cd netlify-express-api`
* `yarn install`
* `yarn start`
* optional: include *.env* in your *.gitignore*

### Examples of how to access the Express.js endpoints

#### CURL

```sh
curl -X POST http://localhost:3000/magnet -d "url=https://mac-torrents.io/wp-content/uploads/2019/06/Visual-Studio-Code-1.35.1.zip.torrent"
```

#### Postman

* Install [Postman](https://www.getpostman.com/apps) to interact with REST API
* Create a magnet URI from a torrent file:
  * URL: `http://localhost:3000/magnet`
  * Method: `POST`
  * Body Content: `url=https://mac-torrents.io/wp-content/uploads/2019/06/Visual-Studio-Code-1.35.1.zip.torrent`
