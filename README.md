# dbouncer

*Generate mutable debounce functions.*

![npm](https://img.shields.io/npm/dm/dbouncer)
![npm bundle size](https://img.shields.io/bundlephobia/min/dbouncer)

## Usage

In a typical debounce, you set the function to be called when you are declaring it, so it will always be calling the same function.<br />
**Dbouncer** let's you **change the function to be called whenever you like**.

```js
import dbouncer from 'dbouncer';

const inputDebounce = dbouncer(); // generating a mutable debounce function

inputElement.addEventListener('input', (e) => {

    if(e.target.value.length > 10)
        inputDebounce(() => console.log('more than 10 chars'), 700);
    else
        inputDebounce(() => console.log('up to 10 chars'), 700);
    // Every time input event fires, you can set a different function
    // to inputDebounce. After 700 ms with no new input,
    // inputDebounce will run the last setted function.
})
```

------------

**Presetting the wait time:**

You can also preset the wait time right in the dbouncer() function

```js
const inputDebounce = dbouncer(700); // presetting fire wait to 700 ms

inputElement.addEventListener('input', (e) => {

    if(e.target.value.length > 10)
        inputDebounce(() => console.log('more than 10 chars'));
    else
        inputDebounce(() => console.log('up to 10 chars'));
    // After 700 ms with no new input, inputDebounce will run the
    // last setted function.
})

```

------------

**Clearing debounce function:**

The generated debounce function has a **clear()** method attached to it.

```js
import dbouncer from 'dbouncer';

const inputDebounce = dbouncer();

inputElement.addEventListener('input', (e) => {

    inputDebounce(() => console.log(e.target.value), 700);
    
    if(!e.target.value){
        inputDebounce.clear();
        // clearing inputDebounce function if "e.target.value"
        // is falsy, so console.log() will not be called.
    }
})
```

------------

**Using dbouncer as a typical debounce function:**

You can also use **dbouncer()** as a any typical debounce function.

```js
import dbouncer from 'dbouncer';

var counter = 0;

inputElement.addEventListener('input', dbouncer(() => {
    console.log(++counter);
}, 500));
// after 500 ms with no new input, dbouncer function will be called


/**
 * PLUS: the function you set in dbouncer will receive the same
 * parameters that would be originaly passed to dbouncer().
 */
inputElement.addEventListener('input', dbouncer(e => {
    console.log(e.target.value);
    // using "e" object that was passed to dbouncer()
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