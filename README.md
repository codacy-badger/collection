# Collection
⛓ Chainable Laravel-styled collections for JS with Lodash 

## Purpose
Laravel, popular PHP framework, provides embedded `Collection` feature — easy to use, chainable way to work with arrays. My purpose was to implement something similiar to Laravel's collections in JavaScript. There are a lot to improve, so PRs are welcome!

## Installation

    npm i clct -s

## Collection 101

So basically, you can install this package using npm, import package

    import collect from 'collection';

Pass object or array to `collect()`

    let cltn = collect([{ name: 'Joe' }, { name: 'Jack' }]);

And then your code editor most likely to provide you list of methods.

What important here is that most methods except `.get()`, `.toJSON()`, `.reduce()`, `.count()`, `.contains()` and `.initial` provides you instance of `collection`, so you can chain your queries. Methods listed above return you some value. You can read about it below.

After all the queries you can retrieve result using `.get()` or `.toJSON()`.

## Methods

Listing of all `collection` mehtods.

### Basic methods

#### .get()
Retrieves final collection and finishes chain.

#### .count()
Returns count of items in current collection

#### .initial
Returns initial collection

#### .contains(what)
`Boolean`. If collection contains item. It is basically `indexOf(what)` on collection.

#### .toJSON()
Returns JSON of current collection. Implements `JSON.strgingify()`. Finishes chain.

#### .isArray()
Is current collection array. Implements `Array.isArray()`

#### .first()
Returns first value of collection. Works on both arrays and objects.

#### .flatten()
Flattens array. Implements `lodash.flatten`. [See docs](https://lodash.com/docs/4.17.10#flatten).

#### .sort(how)
JS's native `.sort()`. Pass sorter function as an argument.

#### .sortAscBy(key)
JS's native `.sort()`, but with sorter for ascending values. Pass key for sort as an argument.

#### .sortDescBy(key)
JS's native `.sort()`, but with sorter for descending values. Pass key for sort as an argument.

#### .filter(how)
JS's native `.filter()`. Pass filter function as an argument.

#### .concat(what)
JS's native `.concat()`.

#### .find(what)
Flattens array. Implements `lodash.find`. [See docs](https://lodash.com/docs/4.17.10#find). Pass value to find as an argument.

#### .findKey(what)
Flattens array. Implements `lodash.findKey`. [See docs](https://lodash.com/docs/4.17.10#findKey). Pass value to find as an argument. Returns key.

#### .diff(what)
Flattens array. Implements `lodash.difference`. [See docs](https://lodash.com/docs/4.17.10#difference). Pass value to compare as an argument. Returns array with differences.

#### .map(how)
JS's native `.map()`. Pass function to produce new array element.

#### .reduce()
JS's native `.reduce()`. Pass function to reduce array to single value. **Returns value.**

#### .except(what)
Pass array of key names as an argument. Removes passed keys from collection.

#### .some(what)
JS's native `.some()`. Works only for arrays.

#### .chunk(count)
Chunks array into smaller arrays with `count` elements. Implements `lodash.chunk`. [See docs](https://lodash.com/docs/4.17.10#chunk).

### Utilities

#### .log()
Logs current collection to console.

#### .profile()
Starts and ends profiling. Call once to call `console.time`. Then, call second time to `console.timeEnd` and log timing to console.

    collect([1, 2, 3]).profile().diff([0, 5]).concat([7, 3]).profile()
    > ​​​​​​​​​​Profiling: 0.062ms​​​​​

## TODO
- [ ] Add tests
- [ ] Implement more methods
- [ ] Move from `lodash` (?)