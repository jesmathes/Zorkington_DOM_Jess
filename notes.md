todo

add?
code to handle errors that might occur, like if the player enters an invalid command.


test the code






MUTABLE change state of an object by modifying its properties: = reference types

const user = {
    name: 'marco',
    age: 24
};

user.age = 23;
console.log(user);
prints:{ name: 'marco', age: 23 }

easier to modify and update existing code , memory efficient. Buggy, hard to debug.
reference is saved and accessed by variable's value, and not as a reference to an object.
objects made up of mltple properties assigned to them

REMEMBER 3 REFERENCE TYPES:
1-OBJECTS
2-ARRAYS
3-FUNCTIONS
______________________________________________________
IMMUTABLE programming creates a new object instead of changing state of existing object: = Primitive types (strings, booleans, etc) stored as value to variable;

const newUser = Object.assign({}, user, {age: 28});

easier to reason about and debug, ensures the state can't be corrupted. Memory intensive/ slower performance due to need to create new objects

    so you can change an index value in an array (mutable)
    https://youtu.be/LTnp79Ke8FI

  immutable: declare variable f of type string and have it point to a new string on the heap "hello"
  then create another variable of type string h, copying the pointer from f, now f and h are pointing at the same object.
  Have to create a new string, and move the pointer. have h point at a new object, so now h and f are pointing at completely diff objects, and the objects have diff values
