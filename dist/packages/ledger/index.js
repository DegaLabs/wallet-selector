import { isMobile } from 'is-mobile';
import { TypedError } from 'near-api-js/lib/utils/errors';
import { signTransactions } from '@near-wallet-selector/wallet-utils';
import { getActiveAccount } from '@near-wallet-selector/core';
import TransportWebHID from '@ledgerhq/hw-transport-webhid';
import { utils } from 'near-api-js';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$f =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$h = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$g = fails$h;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$g(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$f = fails$h;

var functionBindNative = !fails$f(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$2 = functionBindNative;

var call$9 = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$9.bind(call$9) : function () {
  return call$9.apply(call$9, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$4 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var bind = FunctionPrototype$2.bind;
var call$8 = FunctionPrototype$2.call;
var uncurryThis$i = NATIVE_BIND$1 && bind.bind(call$8, call$8);

var functionUncurryThis = NATIVE_BIND$1 ? function (fn) {
  return fn && uncurryThis$i(fn);
} : function (fn) {
  return fn && function () {
    return call$8.apply(fn, arguments);
  };
};

var uncurryThis$h = functionUncurryThis;

var toString$8 = uncurryThis$h({}.toString);
var stringSlice$3 = uncurryThis$h(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$3(toString$8(it), 8, -1);
};

var uncurryThis$g = functionUncurryThis;
var fails$e = fails$h;
var classof$5 = classofRaw$1;

var $Object$4 = Object;
var split = uncurryThis$g(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$e(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$5(it) == 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

var $TypeError$9 = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$6 = function (it) {
  if (it == undefined) throw $TypeError$9("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = indexedObject;
var requireObjectCoercible$5 = requireObjectCoercible$6;

var toIndexedObject$5 = function (it) {
  return IndexedObject(requireObjectCoercible$5(it));
};

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$h = function (argument) {
  return typeof argument == 'function';
};

var isCallable$g = isCallable$h;

var isObject$6 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$g(it);
};

var global$e = global$f;
var isCallable$f = isCallable$h;

var aFunction = function (argument) {
  return isCallable$f(argument) ? argument : undefined;
};

var getBuiltIn$5 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$e[namespace]) : global$e[namespace] && global$e[namespace][method];
};

var uncurryThis$f = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$f({}.isPrototypeOf);

var getBuiltIn$4 = getBuiltIn$5;

var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

var global$d = global$f;
var userAgent = engineUserAgent;

var process = global$d.process;
var Deno = global$d.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es-x/no-symbol -- required for testing */

var V8_VERSION = engineV8Version;
var fails$d = fails$h;

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$d(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es-x/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = nativeSymbol;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$3 = getBuiltIn$5;
var isCallable$e = isCallable$h;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$3('Symbol');
  return isCallable$e($Symbol) && isPrototypeOf($Symbol.prototype, $Object$3(it));
};

var $String$3 = String;

var tryToString$2 = function (argument) {
  try {
    return $String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$d = isCallable$h;
var tryToString$1 = tryToString$2;

var $TypeError$8 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$1 = function (argument) {
  if (isCallable$d(argument)) return argument;
  throw $TypeError$8(tryToString$1(argument) + ' is not a function');
};

var aCallable = aCallable$1;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$2 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

var call$7 = functionCall;
var isCallable$c = isCallable$h;
var isObject$5 = isObject$6;

var $TypeError$7 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$c(fn = input.toString) && !isObject$5(val = call$7(fn, input))) return val;
  if (isCallable$c(fn = input.valueOf) && !isObject$5(val = call$7(fn, input))) return val;
  if (pref !== 'string' && isCallable$c(fn = input.toString) && !isObject$5(val = call$7(fn, input))) return val;
  throw $TypeError$7("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var global$c = global$f;

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty$4 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$4(global$c, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$c[key] = value;
  } return value;
};

var global$b = global$f;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$b[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.23.3',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$4 = requireObjectCoercible$6;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$2 = function (argument) {
  return $Object$2(requireObjectCoercible$4(argument));
};

var uncurryThis$e = functionUncurryThis;
var toObject$1 = toObject$2;

var hasOwnProperty = uncurryThis$e({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$1(it), key);
};

var uncurryThis$d = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$7 = uncurryThis$d(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$7(++id + postfix, 36);
};

var global$a = global$f;
var shared$3 = shared$4.exports;
var hasOwn$8 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore = shared$3('wks');
var Symbol$2 = global$a.Symbol;
var symbolFor = Symbol$2 && Symbol$2['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

var wellKnownSymbol$c = function (name) {
  if (!hasOwn$8(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn$8(Symbol$2, name)) {
      WellKnownSymbolsStore[name] = Symbol$2[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

var call$6 = functionCall;
var isObject$4 = isObject$6;
var isSymbol$1 = isSymbol$2;
var getMethod$1 = getMethod$2;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$b = wellKnownSymbol$c;

var $TypeError$6 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$b('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$4(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$1(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$6(exoticToPrim, input, pref);
    if (!isObject$4(result) || isSymbol$1(result)) return result;
    throw $TypeError$6("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$9 = global$f;
var isObject$3 = isObject$6;

var document$1 = global$9.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$3(document$1) && isObject$3(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$8 = descriptors;
var fails$c = fails$h;
var createElement = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$8 && !fails$c(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$7 = descriptors;
var call$5 = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$3 = createPropertyDescriptor$4;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$7 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$7(O, P)) return createPropertyDescriptor$3(!call$5(propertyIsEnumerableModule.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$6 = descriptors;
var fails$b = fails$h;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$6 && fails$b(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$2 = isObject$6;

var $String$2 = String;
var $TypeError$5 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$9 = function (argument) {
  if (isObject$2(argument)) return argument;
  throw $TypeError$5($String$2(argument) + ' is not an object');
};

var DESCRIPTORS$5 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$8 = anObject$9;
var toPropertyKey$1 = toPropertyKey$3;

var $TypeError$4 = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$5 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$8(O);
  P = toPropertyKey$1(P);
  anObject$8(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$8(O);
  P = toPropertyKey$1(P);
  anObject$8(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$4('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$4 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$4;

var createNonEnumerableProperty$5 = DESCRIPTORS$4 ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$2(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$2 = {exports: {}};

var DESCRIPTORS$3 = descriptors;
var hasOwn$6 = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$6(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || (DESCRIPTORS$3 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$c = functionUncurryThis;
var isCallable$b = isCallable$h;
var store$1 = sharedStore;

var functionToString = uncurryThis$c(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$b(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$8 = global$f;
var isCallable$a = isCallable$h;
var inspectSource$2 = inspectSource$3;

var WeakMap$1 = global$8.WeakMap;

var nativeWeakMap = isCallable$a(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$7 = global$f;
var uncurryThis$b = functionUncurryThis;
var isObject$1 = isObject$6;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
var hasOwn$5 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$7.TypeError;
var WeakMap = global$7.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$1(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap());
  var wmget = uncurryThis$b(store.get);
  var wmhas = uncurryThis$b(store.has);
  var wmset = uncurryThis$b(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$3[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn$5(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$4(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$5(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$5(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var fails$a = fails$h;
var isCallable$9 = isCallable$h;
var hasOwn$4 = hasOwnProperty_1;
var DESCRIPTORS$2 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$1 = inspectSource$3;
var InternalStateModule$1 = internalState;

var enforceInternalState = InternalStateModule$1.enforce;
var getInternalState$2 = InternalStateModule$1.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty$3 = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$a(function () {
  return defineProperty$3(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$4(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$2) defineProperty$3(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$4(options, 'arity') && value.length !== options.arity) {
    defineProperty$3(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$4(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$2) defineProperty$3(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$4(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$9(this) && getInternalState$2(this).source || inspectSource$1(this);
}, 'toString');

var isCallable$8 = isCallable$h;
var definePropertyModule$3 = objectDefineProperty;
var makeBuiltIn = makeBuiltIn$2.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$4 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$8(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$3.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$3 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;

var max$1 = Math.max;
var min$3 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$2(index);
  return integer < 0 ? max$1(integer + length, 0) : min$3(integer, length);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;

var min$2 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$3 = function (argument) {
  return argument > 0 ? min$2(toIntegerOrInfinity$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$2 = toLength$3;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$2 = function (obj) {
  return toLength$2(obj.length);
};

var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$1 = lengthOfArrayLike$2;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
    var length = lengthOfArrayLike$1(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};

var uncurryThis$a = functionUncurryThis;
var hasOwn$3 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$1 = uncurryThis$a([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$3(hiddenKeys$2, key) && hasOwn$3(O, key) && push$1(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$3(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$1(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$2 = getBuiltIn$5;
var uncurryThis$9 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$7 = anObject$9;

var concat = uncurryThis$9([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$7(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$2 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$2(target, key) && !(exceptions && hasOwn$2(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$9 = fails$h;
var isCallable$7 = isCallable$h;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$7(detection) ? fails$9(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global$6 = global$f;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
var defineBuiltIn$3 = defineBuiltIn$4;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$6;
  } else if (STATIC) {
    target = global$6[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$6[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$3(sourceProperty, 'sham', true);
    }
    defineBuiltIn$3(target, key, sourceProperty, options);
  }
};

var wellKnownSymbol$a = wellKnownSymbol$c;

var TO_STRING_TAG$3 = wellKnownSymbol$a('toStringTag');
var test = {};

test[TO_STRING_TAG$3] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$6 = isCallable$h;
var classofRaw = classofRaw$1;
var wellKnownSymbol$9 = wellKnownSymbol$c;

var TO_STRING_TAG$2 = wellKnownSymbol$9('toStringTag');
var $Object$1 = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$4 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$2)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$6(O.callee) ? 'Arguments' : result;
};

var classof$3 = classof$4;

var $String$1 = String;

var toString$6 = function (argument) {
  if (classof$3(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var anObject$6 = anObject$9;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$6(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

var fails$8 = fails$h;
var global$5 = global$f;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$5.RegExp;

var UNSUPPORTED_Y$2 = fails$8(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$8(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$8(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$2
};

var objectDefineProperties = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$1 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$5 = anObject$9;
var toIndexedObject$1 = toIndexedObject$5;
var objectKeys = objectKeys$1;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$1 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$5(O);
  var props = toIndexedObject$1(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$1 = getBuiltIn$5;

var html$1 = getBuiltIn$1('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject$4 = anObject$9;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$1 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$1('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$1('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$4(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var fails$7 = fails$h;
var global$4 = global$f;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$4.RegExp;

var regexpUnsupportedDotAll = fails$7(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$6 = fails$h;
var global$3 = global$f;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$3.RegExp;

var regexpUnsupportedNcg = fails$6(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$4 = functionCall;
var uncurryThis$8 = functionUncurryThis;
var toString$5 = toString$6;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$4.exports;
var create$2 = objectCreate;
var getInternalState$1 = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$2 = uncurryThis$8(''.charAt);
var indexOf = uncurryThis$8(''.indexOf);
var replace$1 = uncurryThis$8(''.replace);
var stringSlice$2 = uncurryThis$8(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$4(nativeExec, re1, 'a');
  call$4(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState$1(re);
    var str = toString$5(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$4(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$4(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$1(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$2(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$2(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call$4(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$2(match.input, charsAdded);
        match[0] = stringSlice$2(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call$4(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create$2(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$3 = patchedExec;

var $$3 = _export;
var exec$3 = regexpExec$3;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$3({ target: 'RegExp', proto: true, forced: /./.exec !== exec$3 }, {
  exec: exec$3
});

var NATIVE_BIND = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$1 = FunctionPrototype.apply;
var call$3 = FunctionPrototype.call;

// eslint-disable-next-line es-x/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$3.bind(apply$1) : function () {
  return call$3.apply(apply$1, arguments);
});

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$7 = functionUncurryThis;
var defineBuiltIn$2 = defineBuiltIn$4;
var regexpExec$2 = regexpExec$3;
var fails$5 = fails$h;
var wellKnownSymbol$8 = wellKnownSymbol$c;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;

var SPECIES$1 = wellKnownSymbol$8('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$8(KEY);

  var DELEGATES_TO_SYMBOL = !fails$5(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$5(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES$1] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis$7(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$7(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec$2 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn$2(String.prototype, KEY, methods[0]);
    defineBuiltIn$2(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty$2(RegExpPrototype[SYMBOL], 'sham', true);
};

var isObject = isObject$6;
var classof$2 = classofRaw$1;
var wellKnownSymbol$7 = wellKnownSymbol$c;

var MATCH$1 = wellKnownSymbol$7('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$2(it) == 'RegExp');
};

var uncurryThis$6 = functionUncurryThis;
var fails$4 = fails$h;
var isCallable$5 = isCallable$h;
var classof$1 = classof$4;
var getBuiltIn = getBuiltIn$5;
var inspectSource = inspectSource$3;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$6(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$5(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$5(argument)) return false;
  switch (classof$1(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$1 = !construct || fails$4(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor = isConstructor$1;
var tryToString = tryToString$2;

var $TypeError$3 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError$3(tryToString(argument) + ' is not a constructor');
};

var anObject$3 = anObject$9;
var aConstructor = aConstructor$1;
var wellKnownSymbol$6 = wellKnownSymbol$c;

var SPECIES = wellKnownSymbol$6('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$3(O).constructor;
  var S;
  return C === undefined || (S = anObject$3(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};

var uncurryThis$5 = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$3;
var toString$4 = toString$6;
var requireObjectCoercible$3 = requireObjectCoercible$6;

var charAt$1 = uncurryThis$5(''.charAt);
var charCodeAt = uncurryThis$5(''.charCodeAt);
var stringSlice$1 = uncurryThis$5(''.slice);

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$4(requireObjectCoercible$3($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$1(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$1(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};

var charAt = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$1 = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$4;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor$1(0, value));
  else object[propertyKey] = value;
};

var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike = lengthOfArrayLike$2;
var createProperty = createProperty$1;

var $Array = Array;
var max = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};

var call$2 = functionCall;
var anObject$2 = anObject$9;
var isCallable$4 = isCallable$h;
var classof = classofRaw$1;
var regexpExec$1 = regexpExec$3;

var $TypeError$2 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$4(exec)) {
    var result = call$2(exec, R, S);
    if (result !== null) anObject$2(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call$2(regexpExec$1, R, S);
  throw $TypeError$2('RegExp#exec called on incompatible receiver');
};

var apply = functionApply;
var call$1 = functionCall;
var uncurryThis$4 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var isRegExp$1 = isRegexp;
var anObject$1 = anObject$9;
var requireObjectCoercible$2 = requireObjectCoercible$6;
var speciesConstructor = speciesConstructor$1;
var advanceStringIndex = advanceStringIndex$1;
var toLength$1 = toLength$3;
var toString$3 = toString$6;
var getMethod = getMethod$2;
var arraySlice = arraySliceSimple;
var callRegExpExec = regexpExecAbstract;
var regexpExec = regexpExec$3;
var stickyHelpers = regexpStickyHelpers;
var fails$3 = fails$h;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min$1 = Math.min;
var $push = [].push;
var exec$1 = uncurryThis$4(/./.exec);
var push = uncurryThis$4($push);
var stringSlice = uncurryThis$4(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$3(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString$3(requireObjectCoercible$2(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp$1(separator)) {
        return call$1(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call$1(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec$1(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call$1(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible$2(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call$1(splitter, separator, O, limit)
        : call$1(internalSplit, toString$3(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject$1(this);
      var S = toString$3(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min$1(toLength$1(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

var isRegExp = isRegexp;

var $TypeError$1 = TypeError;

var notARegexp = function (it) {
  if (isRegExp(it)) {
    throw $TypeError$1("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$5 = wellKnownSymbol$c;

var MATCH = wellKnownSymbol$5('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var $$2 = _export;
var uncurryThis$3 = functionUncurryThis;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var toLength = toLength$3;
var toString$2 = toString$6;
var notARegExp = notARegexp;
var requireObjectCoercible$1 = requireObjectCoercible$6;
var correctIsRegExpLogic = correctIsRegexpLogic;

// eslint-disable-next-line es-x/no-string-prototype-endswith -- safe
var un$EndsWith = uncurryThis$3(''.endsWith);
var slice = uncurryThis$3(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$$2({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString$2(requireObjectCoercible$1(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = that.length;
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = toString$2(searchString);
    return un$EndsWith
      ? un$EndsWith(that, search, end)
      : slice(that, end - search.length, end) === search;
  }
});

// a string of all valid unicode whitespaces
var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$2 = functionUncurryThis;
var requireObjectCoercible = requireObjectCoercible$6;
var toString$1 = toString$6;
var whitespaces$1 = whitespaces$2;

var replace = uncurryThis$2(''.replace);
var whitespace = '[' + whitespaces$1 + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString$1(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

var global$2 = global$f;
var fails$2 = fails$h;
var uncurryThis$1 = functionUncurryThis;
var toString = toString$6;
var trim = stringTrim.trim;
var whitespaces = whitespaces$2;

var $parseInt$1 = global$2.parseInt;
var Symbol$1 = global$2.Symbol;
var ITERATOR$3 = Symbol$1 && Symbol$1.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis$1(hex.exec);
var FORCED = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR$3 && !fails$2(function () { $parseInt$1(Object(ITERATOR$3)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
var numberParseInt = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt$1(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt$1;

var $$1 = _export;
var $parseInt = numberParseInt;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$$1({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});

var wellKnownSymbol$4 = wellKnownSymbol$c;
var create$1 = objectCreate;
var defineProperty$2 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$4('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty$2(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$1(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$1 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var iterators = {};

var fails$1 = fails$h;

var correctPrototypeGetter = !fails$1(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$1 = hasOwnProperty_1;
var isCallable$3 = isCallable$h;
var toObject = toObject$2;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es-x/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn$1(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$3(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};

var fails = fails$h;
var isCallable$2 = isCallable$h;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$1 = defineBuiltIn$4;
var wellKnownSymbol$3 = wellKnownSymbol$c;

var ITERATOR$2 = wellKnownSymbol$3('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es-x/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$2(IteratorPrototype$2[ITERATOR$2])) {
  defineBuiltIn$1(IteratorPrototype$2, ITERATOR$2, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$1 = objectDefineProperty.f;
var hasOwn = hasOwnProperty_1;
var wellKnownSymbol$2 = wellKnownSymbol$c;

var TO_STRING_TAG$1 = wellKnownSymbol$2('toStringTag');

var setToStringTag$2 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG$1)) {
    defineProperty$1(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$4;
var setToStringTag$1 = setToStringTag$2;
var Iterators$2 = iterators;

var returnThis$1 = function () { return this; };

var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$2[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var isCallable$1 = isCallable$h;

var $String = String;
var $TypeError = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$1(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThis = functionUncurryThis;
var anObject = anObject$9;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $ = _export;
var call = functionCall;
var FunctionName = functionName;
var isCallable = isCallable$h;
var createIteratorConstructor = createIteratorConstructor$1;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$2;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
var defineBuiltIn = defineBuiltIn$4;
var wellKnownSymbol$1 = wellKnownSymbol$c;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol$1('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var defineIterator$1 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$1]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR$1])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR$1, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$1(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR$1, defaultIterator, { name: DEFAULT });
  }
  Iterators$1[NAME] = defaultIterator;

  return methods;
};

var toIndexedObject = toIndexedObject$5;
var addToUnscopables = addToUnscopables$1;
var Iterators = iterators;
var InternalStateModule = internalState;
var defineProperty = objectDefineProperty.f;
var defineIterator = defineIterator$1;
var DESCRIPTORS = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = documentCreateElement$2;

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

var global$1 = global$f;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty = createNonEnumerableProperty$5;
var wellKnownSymbol = wellKnownSymbol$c;

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$1[COLLECTION_NAME] && global$1[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

// - https://gist.github.com/Wollac/49f0c4e318e42f463b8306298dfb4f4a
// - https://github.com/LedgerHQ/app-near/blob/master/workdir/app-near/src/constants.h

const CLA = 0x80; // Always the same for Ledger.

const INS_SIGN = 0x02; // Sign

const INS_GET_PUBLIC_KEY = 0x04; // Get Public Key

const INS_GET_APP_VERSION = 0x06; // Get App Version

const P1_LAST = 0x80; // End of Bytes to Sign (finalize)

const P1_MORE = 0x00; // More bytes coming

const P1_IGNORE = 0x00;
const P2_IGNORE = 0x00; // Converts BIP32-compliant derivation path to a Buffer.
// More info here: https://github.com/LedgerHQ/ledger-live-common/blob/master/docs/derivation.md

function parseDerivationPath(derivationPath) {
  const parts = derivationPath.split("/");
  return Buffer.concat(parts.map(part => {
    return part.endsWith(`'`) ? Math.abs(parseInt(part.slice(0, -1))) | 0x80000000 : Math.abs(parseInt(part));
  }).map(i32 => {
    return Buffer.from([i32 >> 24 & 0xff, i32 >> 16 & 0xff, i32 >> 8 & 0xff, i32 & 0xff]);
  }));
} // TODO: Understand what this is exactly. What's so special about 87?

const networkId = "W".charCodeAt(0); // Not using TransportWebHID.isSupported as it's chosen to use a Promise...

const isLedgerSupported = () => {
  var _a;

  return !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.hid);
};
class LedgerClient {
  constructor() {
    this.transport = null;

    this.isConnected = () => {
      return Boolean(this.transport);
    };

    this.connect = () => __awaiter(this, void 0, void 0, function* () {
      this.transport = yield TransportWebHID.create();

      const handleDisconnect = () => {
        var _a;

        (_a = this.transport) === null || _a === void 0 ? void 0 : _a.off("disconnect", handleDisconnect);
        this.transport = null;
      };

      this.transport.on("disconnect", handleDisconnect);
    });

    this.disconnect = () => __awaiter(this, void 0, void 0, function* () {
      if (!this.transport) {
        throw new Error("Device not connected");
      }

      yield this.transport.close();
      this.transport = null;
    });

    this.setScrambleKey = key => {
      if (!this.transport) {
        throw new Error("Device not connected");
      }

      this.transport.setScrambleKey(key);
    };

    this.on = (event, callback) => {
      if (!this.transport) {
        throw new Error("Device not connected");
      }

      this.transport.on(event, callback);
      return {
        remove: () => {
          var _a;

          return (_a = this.transport) === null || _a === void 0 ? void 0 : _a.off(event, callback);
        }
      };
    };

    this.off = (event, callback) => {
      if (!this.transport) {
        throw new Error("Device not connected");
      }

      this.transport.off(event, callback);
    };

    this.getVersion = () => __awaiter(this, void 0, void 0, function* () {
      if (!this.transport) {
        throw new Error("Device not connected");
      }

      const res = yield this.transport.send(CLA, INS_GET_APP_VERSION, P1_IGNORE, P2_IGNORE);
      const [major, minor, patch] = Array.from(res);
      return `${major}.${minor}.${patch}`;
    });

    this.getPublicKey = ({
      derivationPath
    }) => __awaiter(this, void 0, void 0, function* () {
      if (!this.transport) {
        throw new Error("Device not connected");
      }

      const res = yield this.transport.send(CLA, INS_GET_PUBLIC_KEY, P2_IGNORE, networkId, parseDerivationPath(derivationPath));
      return utils.serialize.base_encode(res.subarray(0, -2));
    });

    this.sign = ({
      data,
      derivationPath
    }) => __awaiter(this, void 0, void 0, function* () {
      if (!this.transport) {
        throw new Error("Device not connected");
      } // NOTE: getVersion call resets state to avoid starting from partially filled buffer


      yield this.getVersion(); // 128 - 5 service bytes

      const CHUNK_SIZE = 123;
      const allData = Buffer.concat([parseDerivationPath(derivationPath), Buffer.from(data)]);

      for (let offset = 0; offset < allData.length; offset += CHUNK_SIZE) {
        const isLastChunk = offset + CHUNK_SIZE >= allData.length;
        const response = yield this.transport.send(CLA, INS_SIGN, isLastChunk ? P1_LAST : P1_MORE, P2_IGNORE, Buffer.from(allData.subarray(offset, offset + CHUNK_SIZE)));

        if (isLastChunk) {
          return Buffer.from(response.subarray(0, -2));
        }
      }

      throw new Error("Invalid data or derivation path");
    });
  }

}

const STORAGE_ACCOUNTS = "accounts";

const setupLedgerState = storage => __awaiter(void 0, void 0, void 0, function* () {
  const accounts = yield storage.getItem(STORAGE_ACCOUNTS);
  return {
    client: new LedgerClient(),
    subscriptions: [],
    accounts: accounts || []
  };
});

const Ledger = ({
  options,
  store,
  provider,
  logger,
  storage,
  metadata
}) => __awaiter(void 0, void 0, void 0, function* () {
  const _state = yield setupLedgerState(storage);

  const signer = {
    createKey: () => {
      throw new Error("Not implemented");
    },
    getPublicKey: accountId => __awaiter(void 0, void 0, void 0, function* () {
      const account = _state.accounts.find(a => a.accountId === accountId);

      if (!account) {
        throw new Error("Failed to find public key for account");
      }

      return utils.PublicKey.from(account.publicKey);
    }),
    signMessage: (message, accountId) => __awaiter(void 0, void 0, void 0, function* () {
      const account = _state.accounts.find(a => a.accountId === accountId);

      if (!account) {
        throw new Error("Failed to find account for signing");
      }

      const signature = yield _state.client.sign({
        data: message,
        derivationPath: account.derivationPath
      });
      return {
        signature,
        publicKey: utils.PublicKey.from(account.publicKey)
      };
    })
  };

  const getAccounts = () => {
    return _state.accounts.map(x => ({
      accountId: x.accountId
    }));
  };

  const cleanup = () => {
    _state.subscriptions.forEach(subscription => subscription.remove());

    _state.subscriptions = [];
    _state.accounts = [];
    storage.removeItem(STORAGE_ACCOUNTS);
  };

  const signOut = () => __awaiter(void 0, void 0, void 0, function* () {
    if (_state.client.isConnected()) {
      yield _state.client.disconnect().catch(err => {
        logger.log("Failed to disconnect device");
        logger.error(err);
      });
    }

    cleanup();
  });

  const connectLedgerDevice = () => __awaiter(void 0, void 0, void 0, function* () {
    if (_state.client.isConnected()) {
      return;
    }

    yield _state.client.connect();
  });

  const validateAccessKey = ({
    accountId,
    publicKey
  }) => {
    logger.log("validateAccessKey", {
      accountId,
      publicKey
    });
    return provider.viewAccessKey({
      accountId,
      publicKey
    }).then(accessKey => {
      logger.log("validateAccessKey:accessKey", {
        accessKey
      });

      if (accessKey.permission !== "FullAccess") {
        throw new Error("Public key requires 'FullAccess' permission");
      }

      return accessKey;
    }, err => {
      if (err instanceof TypedError && err.type === "AccessKeyDoesNotExist") {
        return null;
      }

      throw err;
    });
  };

  const transformTransactions = transactions => {
    const {
      contract
    } = store.getState();

    if (!contract) {
      throw new Error("Wallet not signed in");
    }

    const account = getActiveAccount(store.getState());

    if (!account) {
      throw new Error("No active account");
    }

    return transactions.map(transaction => {
      return {
        signerId: transaction.signerId || account.accountId,
        receiverId: transaction.receiverId || contract.contractId,
        actions: transaction.actions
      };
    });
  };

  return {
    signIn({
      accounts
    }) {
      return __awaiter(this, void 0, void 0, function* () {
        const existingAccounts = getAccounts();

        if (existingAccounts.length) {
          return existingAccounts;
        }

        const ledgerAccounts = [];

        for (let i = 0; i < accounts.length; i++) {
          const {
            derivationPath,
            accountId,
            publicKey
          } = accounts[i];
          const accessKey = yield validateAccessKey({
            accountId,
            publicKey
          });

          if (!accessKey) {
            throw new Error(`Public key is not registered with the account '${accountId}'.`);
          }

          ledgerAccounts.push({
            accountId,
            derivationPath,
            publicKey
          });
        }

        yield storage.setItem(STORAGE_ACCOUNTS, ledgerAccounts);
        _state.accounts = ledgerAccounts;
        return getAccounts();
      });
    },

    signOut,

    getAccounts() {
      return __awaiter(this, void 0, void 0, function* () {
        return getAccounts();
      });
    },

    verifyOwner({
      message
    }) {
      return __awaiter(this, void 0, void 0, function* () {
        logger.log("Ledger:verifyOwner", {
          message
        });
        throw new Error(`Method not supported by ${metadata.name}`);
      });
    },

    signAndSendTransaction({
      signerId,
      receiverId,
      actions
    }) {
      return __awaiter(this, void 0, void 0, function* () {
        logger.log("signAndSendTransaction", {
          signerId,
          receiverId,
          actions
        });

        if (!_state.accounts.length) {
          throw new Error("Wallet not signed in");
        } // Note: Connection must be triggered by user interaction.


        yield connectLedgerDevice();
        const signedTransactions = yield signTransactions(transformTransactions([{
          signerId,
          receiverId,
          actions
        }]), signer, options.network);
        return provider.sendTransaction(signedTransactions[0]);
      });
    },

    signAndSendTransactions({
      transactions
    }) {
      return __awaiter(this, void 0, void 0, function* () {
        logger.log("signAndSendTransactions", {
          transactions
        });

        if (!_state.accounts.length) {
          throw new Error("Wallet not signed in");
        } // Note: Connection must be triggered by user interaction.


        yield connectLedgerDevice();
        const signedTransactions = yield signTransactions(transformTransactions(transactions), signer, options.network);
        const results = [];

        for (let i = 0; i < signedTransactions.length; i++) {
          results.push(yield provider.sendTransaction(signedTransactions[i]));
        }

        return results;
      });
    },

    getPublicKey(derivationPath) {
      return __awaiter(this, void 0, void 0, function* () {
        yield connectLedgerDevice();
        return yield _state.client.getPublicKey({
          derivationPath
        });
      });
    }

  };
});

function setupLedger({
  iconUrl = "./assets/ledger-icon.png",
  deprecated = false
} = {}) {
  return () => __awaiter(this, void 0, void 0, function* () {
    const mobile = isMobile();
    const supported = isLedgerSupported();

    if (mobile) {
      return null;
    }

    return {
      id: "ledger",
      type: "hardware",
      metadata: {
        name: "Ledger",
        description: null,
        iconUrl,
        deprecated,
        available: supported
      },
      init: Ledger
    };
  });
}

export { setupLedger };
