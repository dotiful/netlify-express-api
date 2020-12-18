# Simple Express REST API on Netlify

[![][dependabot-merge-image]][dependabot-merge-url]
[![][gh-deploy-image]][gh-deploy-url]

[![Netlify Deploy][netlify-deploy-image]][netlify-deploy-url]
[![Netlify Status][netlify-status-image]][netlify-status-url]

[dependabot-merge-image]: https://github.com/dotiful/netlify-express-api/workflows/dependabot-auto-merge/badge.svg
[dependabot-merge-url]: https://github.com/dotiful/netlify-express-api/actions?query=workflow%3Adependabot-auto-merge

[gh-deploy-image]: https://github.com/dotiful/netlify-express-api/workflows/deploy/badge.svg
[gh-deploy-url]: https://github.com/dotiful/netlify-express-api/actions?query=workflow%3Adeploy

[netlify-deploy-image]: https://www.netlify.com/img/deploy/button.svg
[netlify-deploy-url]: https://app.netlify.com/start/deploy?repository=https://github.com/dotiful/netlify-express-api

[netlify-status-image]: https://api.netlify.com/api/v1/badges/ffc376ed-9c60-48f9-a084-5e1020ff1953/deploy-status
[netlify-status-url]: https://app.netlify.com/sites/eloquent-snyder-4d7ee9/deploys

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
