# wow-mum-look-no-hands

* [What is this?](#what-is-this)
* [How do I use it?](#how-do-i-use-it)
* [FAQ](#faq)

# What is this?

### So here we are...**

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

![Example app launch without this library](./images/without-this-lib.gif)

&nbsp;

The most underwhelming 2 seconds of your career ...

&nbsp;

### It doesn't need to be this way!

With `wow-mum-look-no-hands` you can give your app's start-up logs that little extra panache.

Impress your boss, impress your mum, impress your colleagues, impress everyone that don't have the slightest clue what your job is. Impress everyone you shouldn't need to impress. Get the promotion, get the bonus, retire to the south of France, live a life of luxury, start collecting art. Confess on your death bed that the BIG LAUNCH was just a show.

BUT WHAT A SHOW IT WAS !

## How do I use it ?

### Install

*Note*: This app should work with Node 10+

```bash
# If using NPM
npm install wow-mum-look-no-hands

# I using Yarn
yarn add wow-mum-look-no-hands
```

### Run

```js
// ES6 or TypeScript Import
import { Theatre, Message } from 'wow-mum-look-no-hands'
// CommonJS Import
const { Theatre, Message } = require('wow-mum-look-no-hands')

// Create a new Theatre instance 
const theatre = new Theatre({
  messages: [
    {
      logLevel: 'ERROR', // DEBUG | INFO | WARN | ERROR
      message: '⚙️ Defragment Windows 95 C:\\ drive. This might take a while ...', 
      delayInMS: 500 // delay in milliseconds before above message is displayed
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
})

// When ready, call showtime() to start the show
theatre.showtime() // Returns Promise, that resolves when the show is over
```

## FAQ

### I've got a great idea for this library and/or I've found a bug. What do I do?

Contributions and error reports are always welcome. Please don't hesitate to raise an issue or a pull request against this GitHub issue

### What are the chances that a great piece of software like this is published under a non-restrictive open source license?

The chances are good my friend. This project is published under the MIT License. See [LICENSE](./LICENSE) for details

### My boss looked through this charade before I could retire early. He's not happy...

Very sorry to hear that. Unfortunately I'm not willing accept any responsiblity and don't provide any warranty for this project.

### Is this project a joke?

Yes
