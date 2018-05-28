```sh
yarn
cd packages/package2
yarn test
```

should display

```
FAIL  ./foo.spec.js
 ● Test suite failed to run

   TypeError: (0 , _symbol2.default) is not a function

     27 |   }
     28 |
   > 29 |   var foo = exports.foo = (0, _symbol2.default)("foo");
        |                           ^
     30 | });

     at ../package1/index.js:29:27
```
