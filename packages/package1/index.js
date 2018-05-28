(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "babel-runtime/core-js/symbol"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("babel-runtime/core-js/symbol"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.symbol);
    global.index = mod.exports;
  }
})(this, function (exports, _symbol) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.foo = undefined;

  var _symbol2 = _interopRequireDefault(_symbol);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var foo = exports.foo = (0, _symbol2.default)("foo");
});