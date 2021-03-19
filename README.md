# 🤷‍♂️ wow-mum-look-no-hands

[![Build & Test](https://github.com/hmmmsausages/wow-mum-look-no-hands/actions/workflows/build-and-test.yml/badge.svg?branch=main)](https://github.com/hmmmsausages/wow-mum-look-no-hands/actions/workflows/build-and-test.yml)

[![NPM published version](https://img.shields.io/npm/v/wow-mum-look-no-hands)](https://www.npmjs.com/package/wow-mum-look-no-hands)

[![License](https://img.shields.io/npm/l/wow-mum-look-no-hands)](https://www.npmjs.com/package/wow-mum-look-no-hands)

* [What is this?](#what-is-this)
* [How do I use it?](#how-do-i-use-it)
* [FAQ](#faq)

## What is this?

### So here we are...

You've spent countless nights and days developing your API.

All features are implemented.

Ensured everything is well written and tested.

All stakeholders are eargerly looking forward to the BIG release.

Press announcements have been published.

The deployment environment has been prepared and is longing to run some of that promissed code.

Your whole company, including the board of directors, including CEO, CTO, CFO, COO, CCC, CBA ... are gathering in the big presenstation room.

You open the deployment pipeline.

You press the giant red button, titled "LAUNCH".

The deployment is starting.

BUILD ✅

TEST ✅

PACKAGE ✅

DEPLOY ✅

You open up your app's logs for the whole company to see.

&nbsp;

**And then you present them with this ...**

&nbsp;

![Example app launch without this library](https://user-images.githubusercontent.com/10978490/111663786-0d0d7100-8809-11eb-8e7b-4313a90a7d47.gif)

&nbsp;

The most underwhelming 2 seconds of your career ...

&nbsp;

### It doesn't need to be this way!

With `wow-mum-look-no-hands` you can give your app's start-up logs that little extra panache.

![Example app launch with this library](https://user-images.githubusercontent.com/10978490/111663768-07b02680-8809-11eb-93fa-4101035e38a8.gif))

Impress your boss, impress your mum, impress your colleagues, impress everyone that don't have the slightest clue what your job is. Impress everyone you shouldn't need to impress. Get the promotion, get the bonus, retire to the south of France, live a life of luxury, start collecting art. Confess on your death bed that the BIG LAUNCH was just a show.

BUT WHAT A SHOW IT WAS !

## How do I use it?

### Install

This library is available via the public npm registry and should work with any Node version that
has very basic ES6 support (e.g. Node 10+ should be fine).

```bash
# If using NPM
npm install wow-mum-look-no-hands

# I using Yarn
yarn add wow-mum-look-no-hands
```

### Run

It makes sense to run `wow-mum-look-no-hands` as part of your app start up script.
The `showtime()` method returns a `Promise` that resolves as soon all messages, including their specified delay have been logged.
By default, the library is going to log via the `console` functions (i.e. `console.debug`, `console.info`, `console.warn` and `console.error`, which correspond to the specified `logLevel` properties)

```js
// ES6 or TypeScript Import
import { Theatre, Message } from 'wow-mum-look-no-hands'
// CommonJS Import
const { Theatre, Message } = require('wow-mum-look-no-hands')

// Create a new Theatre instance 
const theatre = new Theatre({
  messages: [
    {
      logLevel: 'ERROR', // DEBUG | INFO | WARN | ERROR - DEFAULT: INFO
      message: '⚙️ Defragment Windows 95 C:\ drive. This might take a while ...', 
      delayInMS: 500 // delay in milliseconds before above message is displayed - DEFALT: 250
    },
    new Message('🙈 Discovered year 2020. Aborting unnecessary Windows 95 operations.'),
    new Message({
      message: '⚙️ Processing super-vortex decission algorhithm ...',
      delayInMS: 5000
    })
    // ...
    // further messages for the Show
    // ...
  ]
  //,
  //logger: (message: Message) => void  // defaults to console - implement if other logging library is needed (see below for example)
})

// When ready, call showtime() to start the show
theatre.showtime() // Returns Promise, that resolves when the show is over
```

If you want to log via a different logging library and not via the `console` functions, then you can provide a `logger` property to the `Theatre` configuration like this:

```js
const theatre = new Theatre({
  messages: [
    // see above for examples
  ],
  logger: message => {
    const { logLevel, delayInMS, message } = message // message argument contains all message properties

    // do what ever your logger requires
    // Example: pseudo alternative logger call
    myLog.log({
      level: logLevel,
      message: message
    })

    // return is void / not required
  }
})
```

## FAQ

### I've got a great idea for this library and/or I've found a bug. What do I do?

Contributions and error reports are always welcome. Please don't hesitate to raise an [issue](https://github.com/hmmmsausages/wow-mum-look-no-hands/issues) or a [pull request](https://github.com/hmmmsausages/wow-mum-look-no-hands/pulls) against this GitHub issue

### What are the chances that a great piece of software like this is published under a non-restrictive open source license?

The chances are good my friend. This project is published under the MIT License. See [LICENSE](./LICENSE) for details

### My boss looked through this charade before I could retire early. He's not happy...

Very sorry to hear that. Unfortunately I'm not willing accept any responsiblity and don't provide any warranty for this project.

### Isn't this app just a simple sequential logger, with made up delays and meaningless log messages?

Yes
### Is this project a joke?

Yes
