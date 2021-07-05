# Simple Express REST API on Netlify

[![][gh-deploy-image]][gh-deploy-url]
[![][dependabot-merge-image]][dependabot-merge-url]

[![Netlify Deploy][netlify-deploy-image]][netlify-deploy-url]
[![Netlify Status][netlify-status-image]][netlify-status-url]

[gh-deploy-image]: https://github.com/dotiful/netlify-express-api/workflows/deploy/badge.svg
[gh-deploy-url]: https://github.com/dotiful/netlify-express-api/actions?query=workflow%3Adeploy

[dependabot-merge-image]: https://github.com/dotiful/netlify-express-api/workflows/dependabot-auto-merge/badge.svg
[dependabot-merge-url]: https://github.com/dotiful/netlify-express-api/actions?query=workflow%3Adependabot-auto-merge

[netlify-deploy-image]: https://www.netlify.com/img/deploy/button.svg
[netlify-deploy-url]: https://app.netlify.com/start/deploy?repository=https://github.com/dotiful/netlify-express-api

[netlify-status-image]: https://api.netlify.com/api/v1/badges/8272d4b2-d2ab-4be8-8c26-e22068202e8a/deploy-status
[netlify-status-url]: https://app.netlify.com/sites/festive-leavitt-8531bb/deploys

Simple Express REST API on Netlify to convert torrent file to magnet URI

## Features

* Babel 7
* Environment Variables
* Express
* REST API

## Requirements

* [git](https://www.robinwieruch.de/git-essential-commands/)
* [nodejs](https://nodejs.org/en/) & [yarn](https://yarnpkg.com)

## Installation

* `git clone git@github.com:dotiful/netlify-express-api.git`
* `cd netlify-express-api`
* `yarn install`
* `yarn start`
* optional: include *.env* in your *.gitignore*

### Examples of how to access the Express.js endpoints

Check API reference at [apiary.io](https://dotiful.docs.apiary.io)

#### CURL

```sh
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"url":"https://mac-torrents.io/wp-content/uploads/2019/06/Visual-Studio-Code-1.35.1.zip.torrent"}' \
  http://localhost:3000/magnet
```

#### Postman

* Install [Postman](https://www.getpostman.com/apps) to interact with REST API
* Create a magnet URI from a torrent file:
  * URL: `http://localhost:3000/magnet`
  * Method: `POST`
  * Body Content: `url=https://mac-torrents.io/wp-content/uploads/2019/06/Visual-Studio-Code-1.35.1.zip.torrent`
