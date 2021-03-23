# DBouncer

*Generate mutable debounce functions.*

![npm](https://img.shields.io/npm/dm/dbouncer)
![npm bundle size](https://img.shields.io/bundlephobia/min/dbouncer)

## Usage

```js
import dbouncer from 'dbouncer';

const inputDebounce = dbouncer();

input.addEventListener('input', (e) => {

    inputDebounce(() => console.log(e.target.value), 700);
    // after 700 ms with no new input, console.log() will
    // be called with the last inserted value
})
```

------------

**Clearing debounce function:**

The debounce function has a **clear()** method attached to be called in this situation.

```js
import dbouncer from 'dbouncer';

const inputDebounce = dbouncer();

input.addEventListener('input', (e) => {

    inputDebounce(() => console.log(e.target.value), 700);
    
    if(!e.target.value){
        inputDebounce.clear();
        // clearing debounce function if e.target.value is falsy,
        // so console.log() will not be called.
    }
})
```

------------

**Typical debounce function:**

You can use **dbouncer()** as a any typical debounce function.

```js
import dbouncer from 'dbouncer';

var counter = 0;

input.addEventListener('input', dbouncer(() => {
    console.log(++counter);
}, 500));
// after 500 ms with no new input, dbouncer parameter function will
// be called, therefore console.log() will also be called


// PLUS: dbouncer() inner function will receive the parameters that would
// be originaly passed to dbouncer(), so you can use it just as the
// usual function. Ex.:
input.addEventListener('input', dbouncer(e => {
    console.log(e.target.value);
}, 500));
```

------------

## Installation
1. Install it using npm or yarn
    - ``npm install --save dbouncer``
    - ``yarn add dbouncer``
2. Import it
    - ``import dbouncer from 'dbouncer'``
3. Use it 😄