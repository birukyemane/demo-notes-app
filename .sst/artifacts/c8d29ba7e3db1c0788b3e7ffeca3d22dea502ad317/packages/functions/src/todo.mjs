import { createRequire as topLevelCreateRequire } from 'module';
const require = topLevelCreateRequire(import.meta.url);
import { fileURLToPath as topLevelFileUrlToPath, URL as topLevelURL } from "url"
const __dirname = topLevelFileUrlToPath(new topLevelURL(".", import.meta.url))

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x3) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x3, {
  get: (a6, b6) => (typeof require !== "undefined" ? require : a6)[b6]
}) : x3)(function(x3) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x3 + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@aws-sdk/util-middleware/dist-es/normalizeProvider.js
var normalizeProvider;
var init_normalizeProvider = __esm({
  "node_modules/@aws-sdk/util-middleware/dist-es/normalizeProvider.js"() {
    normalizeProvider = /* @__PURE__ */ __name((input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    }, "normalizeProvider");
  }
});

// node_modules/@aws-sdk/util-middleware/dist-es/index.js
var init_dist_es = __esm({
  "node_modules/@aws-sdk/util-middleware/dist-es/index.js"() {
    init_normalizeProvider();
  }
});

// node_modules/@aws-sdk/querystring-parser/dist-es/index.js
function parseQueryString(querystring) {
  const query = {};
  querystring = querystring.replace(/^\?/, "");
  if (querystring) {
    for (const pair of querystring.split("&")) {
      let [key, value = null] = pair.split("=");
      key = decodeURIComponent(key);
      if (value) {
        value = decodeURIComponent(value);
      }
      if (!(key in query)) {
        query[key] = value;
      } else if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    }
  }
  return query;
}
var init_dist_es2 = __esm({
  "node_modules/@aws-sdk/querystring-parser/dist-es/index.js"() {
    __name(parseQueryString, "parseQueryString");
  }
});

// node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d6, b6) {
  extendStatics(d6, b6);
  function __() {
    this.constructor = d6;
  }
  __name(__, "__");
  d6.prototype = b6 === null ? Object.create(b6) : (__.prototype = b6.prototype, new __());
}
function __rest(s6, e6) {
  var t4 = {};
  for (var p6 in s6)
    if (Object.prototype.hasOwnProperty.call(s6, p6) && e6.indexOf(p6) < 0)
      t4[p6] = s6[p6];
  if (s6 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i6 = 0, p6 = Object.getOwnPropertySymbols(s6); i6 < p6.length; i6++) {
      if (e6.indexOf(p6[i6]) < 0 && Object.prototype.propertyIsEnumerable.call(s6, p6[i6]))
        t4[p6[i6]] = s6[p6[i6]];
    }
  return t4;
}
function __decorate(decorators, target, key, desc) {
  var c6 = arguments.length, r6 = c6 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r6 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i6 = decorators.length - 1; i6 >= 0; i6--)
      if (d6 = decorators[i6])
        r6 = (c6 < 3 ? d6(r6) : c6 > 3 ? d6(target, key, r6) : d6(target, key)) || r6;
  return c6 > 3 && r6 && Object.defineProperty(target, key, r6), r6;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e6) {
        reject(e6);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e6) {
        reject(e6);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t4[0] & 1)
      throw t4[1];
    return t4[1];
  }, trys: [], ops: [] }, f6, y3, t4, g6;
  return g6 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g6[Symbol.iterator] = function() {
    return this;
  }), g6;
  function verb(n6) {
    return function(v5) {
      return step([n6, v5]);
    };
  }
  __name(verb, "verb");
  function step(op) {
    if (f6)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f6 = 1, y3 && (t4 = op[0] & 2 ? y3["return"] : op[0] ? y3["throw"] || ((t4 = y3["return"]) && t4.call(y3), 0) : y3.next) && !(t4 = t4.call(y3, op[1])).done)
          return t4;
        if (y3 = 0, t4)
          op = [op[0] & 2, t4.value];
        switch (op[0]) {
          case 0:
          case 1:
            t4 = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y3 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t4 = _.trys, t4 = t4.length > 0 && t4[t4.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t4 || op[1] > t4[0] && op[1] < t4[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t4[1]) {
              _.label = t4[1];
              t4 = op;
              break;
            }
            if (t4 && _.label < t4[2]) {
              _.label = t4[2];
              _.ops.push(op);
              break;
            }
            if (t4[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e6) {
        op = [6, e6];
        y3 = 0;
      } finally {
        f6 = t4 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
  __name(step, "step");
}
function __createBinding(o6, m6, k6, k22) {
  if (k22 === void 0)
    k22 = k6;
  o6[k22] = m6[k6];
}
function __exportStar(m6, exports) {
  for (var p6 in m6)
    if (p6 !== "default" && !exports.hasOwnProperty(p6))
      exports[p6] = m6[p6];
}
function __values(o6) {
  var s6 = typeof Symbol === "function" && Symbol.iterator, m6 = s6 && o6[s6], i6 = 0;
  if (m6)
    return m6.call(o6);
  if (o6 && typeof o6.length === "number")
    return {
      next: function() {
        if (o6 && i6 >= o6.length)
          o6 = void 0;
        return { value: o6 && o6[i6++], done: !o6 };
      }
    };
  throw new TypeError(s6 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o6, n6) {
  var m6 = typeof Symbol === "function" && o6[Symbol.iterator];
  if (!m6)
    return o6;
  var i6 = m6.call(o6), r6, ar = [], e6;
  try {
    while ((n6 === void 0 || n6-- > 0) && !(r6 = i6.next()).done)
      ar.push(r6.value);
  } catch (error) {
    e6 = { error };
  } finally {
    try {
      if (r6 && !r6.done && (m6 = i6["return"]))
        m6.call(i6);
    } finally {
      if (e6)
        throw e6.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i6 = 0; i6 < arguments.length; i6++)
    ar = ar.concat(__read(arguments[i6]));
  return ar;
}
function __spreadArrays() {
  for (var s6 = 0, i6 = 0, il = arguments.length; i6 < il; i6++)
    s6 += arguments[i6].length;
  for (var r6 = Array(s6), k6 = 0, i6 = 0; i6 < il; i6++)
    for (var a6 = arguments[i6], j6 = 0, jl = a6.length; j6 < jl; j6++, k6++)
      r6[k6] = a6[j6];
  return r6;
}
function __await(v5) {
  return this instanceof __await ? (this.v = v5, this) : new __await(v5);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g6 = generator.apply(thisArg, _arguments || []), i6, q6 = [];
  return i6 = {}, verb("next"), verb("throw"), verb("return"), i6[Symbol.asyncIterator] = function() {
    return this;
  }, i6;
  function verb(n6) {
    if (g6[n6])
      i6[n6] = function(v5) {
        return new Promise(function(a6, b6) {
          q6.push([n6, v5, a6, b6]) > 1 || resume(n6, v5);
        });
      };
  }
  __name(verb, "verb");
  function resume(n6, v5) {
    try {
      step(g6[n6](v5));
    } catch (e6) {
      settle(q6[0][3], e6);
    }
  }
  __name(resume, "resume");
  function step(r6) {
    r6.value instanceof __await ? Promise.resolve(r6.value.v).then(fulfill, reject) : settle(q6[0][2], r6);
  }
  __name(step, "step");
  function fulfill(value) {
    resume("next", value);
  }
  __name(fulfill, "fulfill");
  function reject(value) {
    resume("throw", value);
  }
  __name(reject, "reject");
  function settle(f6, v5) {
    if (f6(v5), q6.shift(), q6.length)
      resume(q6[0][0], q6[0][1]);
  }
  __name(settle, "settle");
}
function __asyncDelegator(o6) {
  var i6, p6;
  return i6 = {}, verb("next"), verb("throw", function(e6) {
    throw e6;
  }), verb("return"), i6[Symbol.iterator] = function() {
    return this;
  }, i6;
  function verb(n6, f6) {
    i6[n6] = o6[n6] ? function(v5) {
      return (p6 = !p6) ? { value: __await(o6[n6](v5)), done: n6 === "return" } : f6 ? f6(v5) : v5;
    } : f6;
  }
  __name(verb, "verb");
}
function __asyncValues(o6) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m6 = o6[Symbol.asyncIterator], i6;
  return m6 ? m6.call(o6) : (o6 = typeof __values === "function" ? __values(o6) : o6[Symbol.iterator](), i6 = {}, verb("next"), verb("throw"), verb("return"), i6[Symbol.asyncIterator] = function() {
    return this;
  }, i6);
  function verb(n6) {
    i6[n6] = o6[n6] && function(v5) {
      return new Promise(function(resolve, reject) {
        v5 = o6[n6](v5), settle(resolve, reject, v5.done, v5.value);
      });
    };
  }
  __name(verb, "verb");
  function settle(resolve, reject, d6, v5) {
    Promise.resolve(v5).then(function(v6) {
      resolve({ value: v6, done: d6 });
    }, reject);
  }
  __name(settle, "settle");
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k6 in mod)
      if (Object.hasOwnProperty.call(mod, k6))
        result[k6] = mod[k6];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics, __assign;
var init_tslib_es6 = __esm({
  "node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js"() {
    extendStatics = /* @__PURE__ */ __name(function(d6, b6) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d7, b7) {
        d7.__proto__ = b7;
      } || function(d7, b7) {
        for (var p6 in b7)
          if (b7.hasOwnProperty(p6))
            d7[p6] = b7[p6];
      };
      return extendStatics(d6, b6);
    }, "extendStatics");
    __name(__extends, "__extends");
    __assign = /* @__PURE__ */ __name(function() {
      __assign = Object.assign || /* @__PURE__ */ __name(function __assign2(t4) {
        for (var s6, i6 = 1, n6 = arguments.length; i6 < n6; i6++) {
          s6 = arguments[i6];
          for (var p6 in s6)
            if (Object.prototype.hasOwnProperty.call(s6, p6))
              t4[p6] = s6[p6];
        }
        return t4;
      }, "__assign");
      return __assign.apply(this, arguments);
    }, "__assign");
    __name(__rest, "__rest");
    __name(__decorate, "__decorate");
    __name(__param, "__param");
    __name(__metadata, "__metadata");
    __name(__awaiter, "__awaiter");
    __name(__generator, "__generator");
    __name(__createBinding, "__createBinding");
    __name(__exportStar, "__exportStar");
    __name(__values, "__values");
    __name(__read, "__read");
    __name(__spread, "__spread");
    __name(__spreadArrays, "__spreadArrays");
    __name(__await, "__await");
    __name(__asyncGenerator, "__asyncGenerator");
    __name(__asyncDelegator, "__asyncDelegator");
    __name(__asyncValues, "__asyncValues");
    __name(__makeTemplateObject, "__makeTemplateObject");
    __name(__importStar, "__importStar");
    __name(__importDefault, "__importDefault");
    __name(__classPrivateFieldGet, "__classPrivateFieldGet");
    __name(__classPrivateFieldSet, "__classPrivateFieldSet");
  }
});

// node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js
var fromUtf8, toUtf8;
var init_pureJs = __esm({
  "node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js"() {
    fromUtf8 = /* @__PURE__ */ __name((input) => {
      const bytes = [];
      for (let i6 = 0, len = input.length; i6 < len; i6++) {
        const value = input.charCodeAt(i6);
        if (value < 128) {
          bytes.push(value);
        } else if (value < 2048) {
          bytes.push(value >> 6 | 192, value & 63 | 128);
        } else if (i6 + 1 < input.length && (value & 64512) === 55296 && (input.charCodeAt(i6 + 1) & 64512) === 56320) {
          const surrogatePair = 65536 + ((value & 1023) << 10) + (input.charCodeAt(++i6) & 1023);
          bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
        } else {
          bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
        }
      }
      return Uint8Array.from(bytes);
    }, "fromUtf8");
    toUtf8 = /* @__PURE__ */ __name((input) => {
      let decoded = "";
      for (let i6 = 0, len = input.length; i6 < len; i6++) {
        const byte = input[i6];
        if (byte < 128) {
          decoded += String.fromCharCode(byte);
        } else if (192 <= byte && byte < 224) {
          const nextByte = input[++i6];
          decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
        } else if (240 <= byte && byte < 365) {
          const surrogatePair = [byte, input[++i6], input[++i6], input[++i6]];
          const encoded = "%" + surrogatePair.map((byteValue) => byteValue.toString(16)).join("%");
          decoded += decodeURIComponent(encoded);
        } else {
          decoded += String.fromCharCode((byte & 15) << 12 | (input[++i6] & 63) << 6 | input[++i6] & 63);
        }
      }
      return decoded;
    }, "toUtf8");
  }
});

// node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js
function fromUtf82(input) {
  return new TextEncoder().encode(input);
}
function toUtf82(input) {
  return new TextDecoder("utf-8").decode(input);
}
var init_whatwgEncodingApi = __esm({
  "node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js"() {
    __name(fromUtf82, "fromUtf8");
    __name(toUtf82, "toUtf8");
  }
});

// node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js
var dist_es_exports = {};
__export(dist_es_exports, {
  fromUtf8: () => fromUtf83,
  toUtf8: () => toUtf83
});
var fromUtf83, toUtf83;
var init_dist_es3 = __esm({
  "node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js"() {
    init_pureJs();
    init_whatwgEncodingApi();
    fromUtf83 = /* @__PURE__ */ __name((input) => typeof TextEncoder === "function" ? fromUtf82(input) : fromUtf8(input), "fromUtf8");
    toUtf83 = /* @__PURE__ */ __name((input) => typeof TextDecoder === "function" ? toUtf82(input) : toUtf8(input), "toUtf8");
  }
});

// node_modules/@aws-crypto/util/build/convertToBuffer.js
var require_convertToBuffer = __commonJS({
  "node_modules/@aws-crypto/util/build/convertToBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertToBuffer = void 0;
    var util_utf8_browser_1 = (init_dist_es3(), __toCommonJS(dist_es_exports));
    var fromUtf85 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
      return Buffer.from(input, "utf8");
    } : util_utf8_browser_1.fromUtf8;
    function convertToBuffer(data) {
      if (data instanceof Uint8Array)
        return data;
      if (typeof data === "string") {
        return fromUtf85(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }
    __name(convertToBuffer, "convertToBuffer");
    exports.convertToBuffer = convertToBuffer;
  }
});

// node_modules/@aws-crypto/util/build/isEmptyData.js
var require_isEmptyData = __commonJS({
  "node_modules/@aws-crypto/util/build/isEmptyData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmptyData = void 0;
    function isEmptyData(data) {
      if (typeof data === "string") {
        return data.length === 0;
      }
      return data.byteLength === 0;
    }
    __name(isEmptyData, "isEmptyData");
    exports.isEmptyData = isEmptyData;
  }
});

// node_modules/@aws-crypto/util/build/numToUint8.js
var require_numToUint8 = __commonJS({
  "node_modules/@aws-crypto/util/build/numToUint8.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.numToUint8 = void 0;
    function numToUint8(num) {
      return new Uint8Array([
        (num & 4278190080) >> 24,
        (num & 16711680) >> 16,
        (num & 65280) >> 8,
        num & 255
      ]);
    }
    __name(numToUint8, "numToUint8");
    exports.numToUint8 = numToUint8;
  }
});

// node_modules/@aws-crypto/util/build/uint32ArrayFrom.js
var require_uint32ArrayFrom = __commonJS({
  "node_modules/@aws-crypto/util/build/uint32ArrayFrom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint32ArrayFrom = void 0;
    function uint32ArrayFrom(a_lookUpTable) {
      if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while (a_index < a_lookUpTable.length) {
          return_array[a_index] = a_lookUpTable[a_index];
          a_index += 1;
        }
        return return_array;
      }
      return Uint32Array.from(a_lookUpTable);
    }
    __name(uint32ArrayFrom, "uint32ArrayFrom");
    exports.uint32ArrayFrom = uint32ArrayFrom;
  }
});

// node_modules/@aws-crypto/util/build/index.js
var require_build = __commonJS({
  "node_modules/@aws-crypto/util/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
    var convertToBuffer_1 = require_convertToBuffer();
    Object.defineProperty(exports, "convertToBuffer", { enumerable: true, get: function() {
      return convertToBuffer_1.convertToBuffer;
    } });
    var isEmptyData_1 = require_isEmptyData();
    Object.defineProperty(exports, "isEmptyData", { enumerable: true, get: function() {
      return isEmptyData_1.isEmptyData;
    } });
    var numToUint8_1 = require_numToUint8();
    Object.defineProperty(exports, "numToUint8", { enumerable: true, get: function() {
      return numToUint8_1.numToUint8;
    } });
    var uint32ArrayFrom_1 = require_uint32ArrayFrom();
    Object.defineProperty(exports, "uint32ArrayFrom", { enumerable: true, get: function() {
      return uint32ArrayFrom_1.uint32ArrayFrom;
    } });
  }
});

// node_modules/@aws-crypto/crc32/build/aws_crc32.js
var require_aws_crc32 = __commonJS({
  "node_modules/@aws-crypto/crc32/build/aws_crc32.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsCrc32 = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var util_1 = require_build();
    var index_1 = require_build2();
    var AwsCrc32 = function() {
      function AwsCrc322() {
        this.crc32 = new index_1.Crc32();
      }
      __name(AwsCrc322, "AwsCrc32");
      AwsCrc322.prototype.update = function(toHash) {
        if ((0, util_1.isEmptyData)(toHash))
          return;
        this.crc32.update((0, util_1.convertToBuffer)(toHash));
      };
      AwsCrc322.prototype.digest = function() {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          return tslib_1.__generator(this, function(_a) {
            return [2, (0, util_1.numToUint8)(this.crc32.digest())];
          });
        });
      };
      AwsCrc322.prototype.reset = function() {
        this.crc32 = new index_1.Crc32();
      };
      return AwsCrc322;
    }();
    exports.AwsCrc32 = AwsCrc32;
  }
});

// node_modules/@aws-crypto/crc32/build/index.js
var require_build2 = __commonJS({
  "node_modules/@aws-crypto/crc32/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsCrc32 = exports.Crc32 = exports.crc32 = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var util_1 = require_build();
    function crc32(data) {
      return new Crc323().update(data).digest();
    }
    __name(crc32, "crc32");
    exports.crc32 = crc32;
    var Crc323 = function() {
      function Crc324() {
        this.checksum = 4294967295;
      }
      __name(Crc324, "Crc32");
      Crc324.prototype.update = function(data) {
        var e_1, _a;
        try {
          for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
            var byte = data_1_1.value;
            this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 255];
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (data_1_1 && !data_1_1.done && (_a = data_1.return))
              _a.call(data_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        return this;
      };
      Crc324.prototype.digest = function() {
        return (this.checksum ^ 4294967295) >>> 0;
      };
      return Crc324;
    }();
    exports.Crc32 = Crc323;
    var a_lookUpTable = [
      0,
      1996959894,
      3993919788,
      2567524794,
      124634137,
      1886057615,
      3915621685,
      2657392035,
      249268274,
      2044508324,
      3772115230,
      2547177864,
      162941995,
      2125561021,
      3887607047,
      2428444049,
      498536548,
      1789927666,
      4089016648,
      2227061214,
      450548861,
      1843258603,
      4107580753,
      2211677639,
      325883990,
      1684777152,
      4251122042,
      2321926636,
      335633487,
      1661365465,
      4195302755,
      2366115317,
      997073096,
      1281953886,
      3579855332,
      2724688242,
      1006888145,
      1258607687,
      3524101629,
      2768942443,
      901097722,
      1119000684,
      3686517206,
      2898065728,
      853044451,
      1172266101,
      3705015759,
      2882616665,
      651767980,
      1373503546,
      3369554304,
      3218104598,
      565507253,
      1454621731,
      3485111705,
      3099436303,
      671266974,
      1594198024,
      3322730930,
      2970347812,
      795835527,
      1483230225,
      3244367275,
      3060149565,
      1994146192,
      31158534,
      2563907772,
      4023717930,
      1907459465,
      112637215,
      2680153253,
      3904427059,
      2013776290,
      251722036,
      2517215374,
      3775830040,
      2137656763,
      141376813,
      2439277719,
      3865271297,
      1802195444,
      476864866,
      2238001368,
      4066508878,
      1812370925,
      453092731,
      2181625025,
      4111451223,
      1706088902,
      314042704,
      2344532202,
      4240017532,
      1658658271,
      366619977,
      2362670323,
      4224994405,
      1303535960,
      984961486,
      2747007092,
      3569037538,
      1256170817,
      1037604311,
      2765210733,
      3554079995,
      1131014506,
      879679996,
      2909243462,
      3663771856,
      1141124467,
      855842277,
      2852801631,
      3708648649,
      1342533948,
      654459306,
      3188396048,
      3373015174,
      1466479909,
      544179635,
      3110523913,
      3462522015,
      1591671054,
      702138776,
      2966460450,
      3352799412,
      1504918807,
      783551873,
      3082640443,
      3233442989,
      3988292384,
      2596254646,
      62317068,
      1957810842,
      3939845945,
      2647816111,
      81470997,
      1943803523,
      3814918930,
      2489596804,
      225274430,
      2053790376,
      3826175755,
      2466906013,
      167816743,
      2097651377,
      4027552580,
      2265490386,
      503444072,
      1762050814,
      4150417245,
      2154129355,
      426522225,
      1852507879,
      4275313526,
      2312317920,
      282753626,
      1742555852,
      4189708143,
      2394877945,
      397917763,
      1622183637,
      3604390888,
      2714866558,
      953729732,
      1340076626,
      3518719985,
      2797360999,
      1068828381,
      1219638859,
      3624741850,
      2936675148,
      906185462,
      1090812512,
      3747672003,
      2825379669,
      829329135,
      1181335161,
      3412177804,
      3160834842,
      628085408,
      1382605366,
      3423369109,
      3138078467,
      570562233,
      1426400815,
      3317316542,
      2998733608,
      733239954,
      1555261956,
      3268935591,
      3050360625,
      752459403,
      1541320221,
      2607071920,
      3965973030,
      1969922972,
      40735498,
      2617837225,
      3943577151,
      1913087877,
      83908371,
      2512341634,
      3803740692,
      2075208622,
      213261112,
      2463272603,
      3855990285,
      2094854071,
      198958881,
      2262029012,
      4057260610,
      1759359992,
      534414190,
      2176718541,
      4139329115,
      1873836001,
      414664567,
      2282248934,
      4279200368,
      1711684554,
      285281116,
      2405801727,
      4167216745,
      1634467795,
      376229701,
      2685067896,
      3608007406,
      1308918612,
      956543938,
      2808555105,
      3495958263,
      1231636301,
      1047427035,
      2932959818,
      3654703836,
      1088359270,
      936918e3,
      2847714899,
      3736837829,
      1202900863,
      817233897,
      3183342108,
      3401237130,
      1404277552,
      615818150,
      3134207493,
      3453421203,
      1423857449,
      601450431,
      3009837614,
      3294710456,
      1567103746,
      711928724,
      3020668471,
      3272380065,
      1510334235,
      755167117
    ];
    var lookupTable = (0, util_1.uint32ArrayFrom)(a_lookUpTable);
    var aws_crc32_1 = require_aws_crc32();
    Object.defineProperty(exports, "AwsCrc32", { enumerable: true, get: function() {
      return aws_crc32_1.AwsCrc32;
    } });
  }
});

// node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js
function fromHex(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  const out = new Uint8Array(encoded.length / 2);
  for (let i6 = 0; i6 < encoded.length; i6 += 2) {
    const encodedByte = encoded.slice(i6, i6 + 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT) {
      out[i6 / 2] = HEX_TO_SHORT[encodedByte];
    } else {
      throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
    }
  }
  return out;
}
function toHex(bytes) {
  let out = "";
  for (let i6 = 0; i6 < bytes.byteLength; i6++) {
    out += SHORT_TO_HEX[bytes[i6]];
  }
  return out;
}
var SHORT_TO_HEX, HEX_TO_SHORT;
var init_dist_es4 = __esm({
  "node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js"() {
    SHORT_TO_HEX = {};
    HEX_TO_SHORT = {};
    for (let i6 = 0; i6 < 256; i6++) {
      let encodedByte = i6.toString(16).toLowerCase();
      if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
      }
      SHORT_TO_HEX[i6] = encodedByte;
      HEX_TO_SHORT[encodedByte] = i6;
    }
    __name(fromHex, "fromHex");
    __name(toHex, "toHex");
  }
});

// node_modules/@aws-sdk/eventstream-codec/dist-es/Int64.js
function negate(bytes) {
  for (let i6 = 0; i6 < 8; i6++) {
    bytes[i6] ^= 255;
  }
  for (let i6 = 7; i6 > -1; i6--) {
    bytes[i6]++;
    if (bytes[i6] !== 0)
      break;
  }
}
var Int64;
var init_Int64 = __esm({
  "node_modules/@aws-sdk/eventstream-codec/dist-es/Int64.js"() {
    init_dist_es4();
    Int64 = class {
      constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
          throw new Error("Int64 buffers must be exactly 8 bytes");
        }
      }
      static fromNumber(number) {
        if (number > 9223372036854776e3 || number < -9223372036854776e3) {
          throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i6 = 7, remaining = Math.abs(Math.round(number)); i6 > -1 && remaining > 0; i6--, remaining /= 256) {
          bytes[i6] = remaining;
        }
        if (number < 0) {
          negate(bytes);
        }
        return new Int64(bytes);
      }
      valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
          negate(bytes);
        }
        return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
    __name(Int64, "Int64");
    __name(negate, "negate");
  }
});

// node_modules/@aws-sdk/eventstream-codec/dist-es/HeaderMarshaller.js
var HeaderMarshaller, HEADER_VALUE_TYPE, BOOLEAN_TAG, BYTE_TAG, SHORT_TAG, INT_TAG, LONG_TAG, BINARY_TAG, STRING_TAG, TIMESTAMP_TAG, UUID_TAG, UUID_PATTERN;
var init_HeaderMarshaller = __esm({
  "node_modules/@aws-sdk/eventstream-codec/dist-es/HeaderMarshaller.js"() {
    init_dist_es4();
    init_Int64();
    HeaderMarshaller = class {
      constructor(toUtf85, fromUtf85) {
        this.toUtf8 = toUtf85;
        this.fromUtf8 = fromUtf85;
      }
      format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
          const bytes = this.fromUtf8(headerName);
          chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
          out.set(chunk, position);
          position += chunk.byteLength;
        }
        return out;
      }
      formatHeaderValue(header) {
        switch (header.type) {
          case "boolean":
            return Uint8Array.from([header.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, header.value]);
          case "short":
            const shortView = new DataView(new ArrayBuffer(3));
            shortView.setUint8(0, 3);
            shortView.setInt16(1, header.value, false);
            return new Uint8Array(shortView.buffer);
          case "integer":
            const intView = new DataView(new ArrayBuffer(5));
            intView.setUint8(0, 4);
            intView.setInt32(1, header.value, false);
            return new Uint8Array(intView.buffer);
          case "long":
            const longBytes = new Uint8Array(9);
            longBytes[0] = 5;
            longBytes.set(header.value.bytes, 1);
            return longBytes;
          case "binary":
            const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
            binView.setUint8(0, 6);
            binView.setUint16(1, header.value.byteLength, false);
            const binBytes = new Uint8Array(binView.buffer);
            binBytes.set(header.value, 3);
            return binBytes;
          case "string":
            const utf8Bytes = this.fromUtf8(header.value);
            const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
            strView.setUint8(0, 7);
            strView.setUint16(1, utf8Bytes.byteLength, false);
            const strBytes = new Uint8Array(strView.buffer);
            strBytes.set(utf8Bytes, 3);
            return strBytes;
          case "timestamp":
            const tsBytes = new Uint8Array(9);
            tsBytes[0] = 8;
            tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
            return tsBytes;
          case "uuid":
            if (!UUID_PATTERN.test(header.value)) {
              throw new Error(`Invalid UUID received: ${header.value}`);
            }
            const uuidBytes = new Uint8Array(17);
            uuidBytes[0] = 9;
            uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
            return uuidBytes;
        }
      }
      parse(headers) {
        const out = {};
        let position = 0;
        while (position < headers.byteLength) {
          const nameLength = headers.getUint8(position++);
          const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
          position += nameLength;
          switch (headers.getUint8(position++)) {
            case 0:
              out[name] = {
                type: BOOLEAN_TAG,
                value: true
              };
              break;
            case 1:
              out[name] = {
                type: BOOLEAN_TAG,
                value: false
              };
              break;
            case 2:
              out[name] = {
                type: BYTE_TAG,
                value: headers.getInt8(position++)
              };
              break;
            case 3:
              out[name] = {
                type: SHORT_TAG,
                value: headers.getInt16(position, false)
              };
              position += 2;
              break;
            case 4:
              out[name] = {
                type: INT_TAG,
                value: headers.getInt32(position, false)
              };
              position += 4;
              break;
            case 5:
              out[name] = {
                type: LONG_TAG,
                value: new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
              };
              position += 8;
              break;
            case 6:
              const binaryLength = headers.getUint16(position, false);
              position += 2;
              out[name] = {
                type: BINARY_TAG,
                value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
              };
              position += binaryLength;
              break;
            case 7:
              const stringLength = headers.getUint16(position, false);
              position += 2;
              out[name] = {
                type: STRING_TAG,
                value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
              };
              position += stringLength;
              break;
            case 8:
              out[name] = {
                type: TIMESTAMP_TAG,
                value: new Date(new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
              };
              position += 8;
              break;
            case 9:
              const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
              position += 16;
              out[name] = {
                type: UUID_TAG,
                value: `${toHex(uuidBytes.subarray(0, 4))}-${toHex(uuidBytes.subarray(4, 6))}-${toHex(uuidBytes.subarray(6, 8))}-${toHex(uuidBytes.subarray(8, 10))}-${toHex(uuidBytes.subarray(10))}`
              };
              break;
            default:
              throw new Error(`Unrecognized header type tag`);
          }
        }
        return out;
      }
    };
    __name(HeaderMarshaller, "HeaderMarshaller");
    (function(HEADER_VALUE_TYPE2) {
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolTrue"] = 0] = "boolTrue";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolFalse"] = 1] = "boolFalse";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byte"] = 2] = "byte";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["short"] = 3] = "short";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["integer"] = 4] = "integer";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["long"] = 5] = "long";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byteArray"] = 6] = "byteArray";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["string"] = 7] = "string";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["timestamp"] = 8] = "timestamp";
      HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["uuid"] = 9] = "uuid";
    })(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
    BOOLEAN_TAG = "boolean";
    BYTE_TAG = "byte";
    SHORT_TAG = "short";
    INT_TAG = "integer";
    LONG_TAG = "long";
    BINARY_TAG = "binary";
    STRING_TAG = "string";
    TIMESTAMP_TAG = "timestamp";
    UUID_TAG = "uuid";
    UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
  }
});

// node_modules/@aws-sdk/eventstream-codec/dist-es/splitMessage.js
var import_crc32, PRELUDE_MEMBER_LENGTH, PRELUDE_LENGTH, CHECKSUM_LENGTH, MINIMUM_MESSAGE_LENGTH;
var init_splitMessage = __esm({
  "node_modules/@aws-sdk/eventstream-codec/dist-es/splitMessage.js"() {
    import_crc32 = __toESM(require_build2());
    PRELUDE_MEMBER_LENGTH = 4;
    PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
    CHECKSUM_LENGTH = 4;
    MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
  }
});

// node_modules/@aws-sdk/eventstream-codec/dist-es/EventStreamCodec.js
var import_crc322;
var init_EventStreamCodec = __esm({
  "node_modules/@aws-sdk/eventstream-codec/dist-es/EventStreamCodec.js"() {
    import_crc322 = __toESM(require_build2());
    init_HeaderMarshaller();
    init_splitMessage();
  }
});

// node_modules/@aws-sdk/eventstream-codec/dist-es/Message.js
var init_Message = __esm({
  "node_modules/@aws-sdk/eventstream-codec/dist-es/Message.js"() {
  }
});

// node_modules/@aws-sdk/eventstream-codec/dist-es/MessageDecoderStream.js
var MessageDecoderStream;
var init_MessageDecoderStream = __esm({
  "node_modules/@aws-sdk/eventstream-codec/dist-es/MessageDecoderStream.js"() {
    MessageDecoderStream = class {
      constructor(options) {
        this.options = options;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const bytes of this.options.inputStream) {
          const decoded = this.options.decoder.decode(bytes);
          yield decoded;
        }
      }
    };
    __name(MessageDecoderStream, "MessageDecoderStream");
  }
});

// node_modules/@aws-sdk/eventstream-codec/dist-es/MessageEncoderStream.js
var MessageEncoderStream;
var init_MessageEncoderStream = __esm({
  "node_modules/@aws-sdk/eventstream-codec/dist-es/MessageEncoderStream.js"() {
    MessageEncoderStream = class {
      constructor(options) {
        this.options = options;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const msg of this.options.messageStream) {
          const encoded = this.options.encoder.encode(msg);
          yield encoded;
        }
        if (this.options.includeEndFrame) {
          yield new Uint8Array(0);
        }
      }
    };
    __name(MessageEncoderStream, "MessageEncoderStream");
  }
});

// node_modules/@aws-sdk/eventstream-codec/dist-es/SmithyMessageDecoderStream.js
var SmithyMessageDecoderStream;
var init_SmithyMessageDecoderStream = __esm({
  "node_modules/@aws-sdk/eventstream-codec/dist-es/SmithyMessageDecoderStream.js"() {
    SmithyMessageDecoderStream = class {
      constructor(options) {
        this.options = options;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const message of this.options.messageStream) {
          const deserialized = await this.options.deserializer(message);
          if (deserialized === void 0)
            continue;
          yield deserialized;
        }
      }
    };
    __name(SmithyMessageDecoderStream, "SmithyMessageDecoderStream");
  }
});

// node_modules/@aws-sdk/eventstream-codec/dist-es/SmithyMessageEncoderStream.js
var SmithyMessageEncoderStream;
var init_SmithyMessageEncoderStream = __esm({
  "node_modules/@aws-sdk/eventstream-codec/dist-es/SmithyMessageEncoderStream.js"() {
    SmithyMessageEncoderStream = class {
      constructor(options) {
        this.options = options;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const chunk of this.options.inputStream) {
          const payloadBuf = this.options.serializer(chunk);
          yield payloadBuf;
        }
      }
    };
    __name(SmithyMessageEncoderStream, "SmithyMessageEncoderStream");
  }
});

// node_modules/@aws-sdk/eventstream-codec/dist-es/index.js
var init_dist_es5 = __esm({
  "node_modules/@aws-sdk/eventstream-codec/dist-es/index.js"() {
    init_EventStreamCodec();
    init_HeaderMarshaller();
    init_Int64();
    init_Message();
    init_MessageDecoderStream();
    init_MessageEncoderStream();
    init_SmithyMessageDecoderStream();
    init_SmithyMessageEncoderStream();
  }
});

// node_modules/@aws-sdk/is-array-buffer/dist-es/index.js
var isArrayBuffer;
var init_dist_es6 = __esm({
  "node_modules/@aws-sdk/is-array-buffer/dist-es/index.js"() {
    isArrayBuffer = /* @__PURE__ */ __name((arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]", "isArrayBuffer");
  }
});

// node_modules/@aws-sdk/util-buffer-from/dist-es/index.js
import { Buffer as Buffer2 } from "buffer";
var fromArrayBuffer, fromString;
var init_dist_es7 = __esm({
  "node_modules/@aws-sdk/util-buffer-from/dist-es/index.js"() {
    init_dist_es6();
    fromArrayBuffer = /* @__PURE__ */ __name((input, offset = 0, length = input.byteLength - offset) => {
      if (!isArrayBuffer(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
      }
      return Buffer2.from(input, offset, length);
    }, "fromArrayBuffer");
    fromString = /* @__PURE__ */ __name((input, encoding) => {
      if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
      }
      return encoding ? Buffer2.from(input, encoding) : Buffer2.from(input);
    }, "fromString");
  }
});

// node_modules/@aws-sdk/util-utf8/dist-es/fromUtf8.js
var fromUtf84;
var init_fromUtf8 = __esm({
  "node_modules/@aws-sdk/util-utf8/dist-es/fromUtf8.js"() {
    init_dist_es7();
    fromUtf84 = /* @__PURE__ */ __name((input) => {
      const buf = fromString(input, "utf8");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }, "fromUtf8");
  }
});

// node_modules/@aws-sdk/util-utf8/dist-es/toUint8Array.js
var toUint8Array;
var init_toUint8Array = __esm({
  "node_modules/@aws-sdk/util-utf8/dist-es/toUint8Array.js"() {
    init_fromUtf8();
    toUint8Array = /* @__PURE__ */ __name((data) => {
      if (typeof data === "string") {
        return fromUtf84(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }, "toUint8Array");
  }
});

// node_modules/@aws-sdk/util-utf8/dist-es/toUtf8.js
var toUtf84;
var init_toUtf8 = __esm({
  "node_modules/@aws-sdk/util-utf8/dist-es/toUtf8.js"() {
    init_dist_es7();
    toUtf84 = /* @__PURE__ */ __name((input) => fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8"), "toUtf8");
  }
});

// node_modules/@aws-sdk/util-utf8/dist-es/index.js
var init_dist_es8 = __esm({
  "node_modules/@aws-sdk/util-utf8/dist-es/index.js"() {
    init_fromUtf8();
    init_toUint8Array();
    init_toUtf8();
  }
});

// node_modules/@aws-sdk/signature-v4/dist-es/constants.js
var ALGORITHM_QUERY_PARAM, CREDENTIAL_QUERY_PARAM, AMZ_DATE_QUERY_PARAM, SIGNED_HEADERS_QUERY_PARAM, EXPIRES_QUERY_PARAM, SIGNATURE_QUERY_PARAM, TOKEN_QUERY_PARAM, AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER, GENERATED_HEADERS, SIGNATURE_HEADER, SHA256_HEADER, TOKEN_HEADER, ALWAYS_UNSIGNABLE_HEADERS, PROXY_HEADER_PATTERN, SEC_HEADER_PATTERN, ALGORITHM_IDENTIFIER, EVENT_ALGORITHM_IDENTIFIER, UNSIGNED_PAYLOAD, MAX_CACHE_SIZE, KEY_TYPE_IDENTIFIER, MAX_PRESIGNED_TTL;
var init_constants = __esm({
  "node_modules/@aws-sdk/signature-v4/dist-es/constants.js"() {
    ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
    CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
    AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
    SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
    EXPIRES_QUERY_PARAM = "X-Amz-Expires";
    SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
    TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
    AUTH_HEADER = "authorization";
    AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
    DATE_HEADER = "date";
    GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
    SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
    SHA256_HEADER = "x-amz-content-sha256";
    TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
    ALWAYS_UNSIGNABLE_HEADERS = {
      authorization: true,
      "cache-control": true,
      connection: true,
      expect: true,
      from: true,
      "keep-alive": true,
      "max-forwards": true,
      pragma: true,
      referer: true,
      te: true,
      trailer: true,
      "transfer-encoding": true,
      upgrade: true,
      "user-agent": true,
      "x-amzn-trace-id": true
    };
    PROXY_HEADER_PATTERN = /^proxy-/;
    SEC_HEADER_PATTERN = /^sec-/;
    ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
    EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
    UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
    MAX_CACHE_SIZE = 50;
    KEY_TYPE_IDENTIFIER = "aws4_request";
    MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
  }
});

// node_modules/@aws-sdk/signature-v4/dist-es/credentialDerivation.js
var signingKeyCache, cacheQueue, createScope, getSigningKey, hmac;
var init_credentialDerivation = __esm({
  "node_modules/@aws-sdk/signature-v4/dist-es/credentialDerivation.js"() {
    init_dist_es4();
    init_dist_es8();
    init_constants();
    signingKeyCache = {};
    cacheQueue = [];
    createScope = /* @__PURE__ */ __name((shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`, "createScope");
    getSigningKey = /* @__PURE__ */ __name(async (sha256Constructor, credentials, shortDate, region, service) => {
      const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
      const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
      if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
      }
      cacheQueue.push(cacheKey);
      while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
      }
      let key = `AWS4${credentials.secretAccessKey}`;
      for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
      }
      return signingKeyCache[cacheKey] = key;
    }, "getSigningKey");
    hmac = /* @__PURE__ */ __name((ctor, secret, data) => {
      const hash = new ctor(secret);
      hash.update(toUint8Array(data));
      return hash.digest();
    }, "hmac");
  }
});

// node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalHeaders.js
var getCanonicalHeaders;
var init_getCanonicalHeaders = __esm({
  "node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalHeaders.js"() {
    init_constants();
    getCanonicalHeaders = /* @__PURE__ */ __name(({ headers }, unsignableHeaders, signableHeaders) => {
      const canonical = {};
      for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == void 0) {
          continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
          if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
            continue;
          }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
      }
      return canonical;
    }, "getCanonicalHeaders");
  }
});

// node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri.js
var escapeUri, hexEncode;
var init_escape_uri = __esm({
  "node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri.js"() {
    escapeUri = /* @__PURE__ */ __name((uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode), "escapeUri");
    hexEncode = /* @__PURE__ */ __name((c6) => `%${c6.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode");
  }
});

// node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri-path.js
var init_escape_uri_path = __esm({
  "node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri-path.js"() {
    init_escape_uri();
  }
});

// node_modules/@aws-sdk/util-uri-escape/dist-es/index.js
var init_dist_es9 = __esm({
  "node_modules/@aws-sdk/util-uri-escape/dist-es/index.js"() {
    init_escape_uri();
    init_escape_uri_path();
  }
});

// node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalQuery.js
var getCanonicalQuery;
var init_getCanonicalQuery = __esm({
  "node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalQuery.js"() {
    init_dist_es9();
    init_constants();
    getCanonicalQuery = /* @__PURE__ */ __name(({ query = {} }) => {
      const keys = [];
      const serialized = {};
      for (const key of Object.keys(query).sort()) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
          continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
          serialized[key] = `${escapeUri(key)}=${escapeUri(value)}`;
        } else if (Array.isArray(value)) {
          serialized[key] = value.slice(0).sort().reduce((encoded, value2) => encoded.concat([`${escapeUri(key)}=${escapeUri(value2)}`]), []).join("&");
        }
      }
      return keys.map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
    }, "getCanonicalQuery");
  }
});

// node_modules/@aws-sdk/signature-v4/dist-es/getPayloadHash.js
var getPayloadHash;
var init_getPayloadHash = __esm({
  "node_modules/@aws-sdk/signature-v4/dist-es/getPayloadHash.js"() {
    init_dist_es6();
    init_dist_es4();
    init_dist_es8();
    init_constants();
    getPayloadHash = /* @__PURE__ */ __name(async ({ headers, body }, hashConstructor) => {
      for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
          return headers[headerName];
        }
      }
      if (body == void 0) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update(toUint8Array(body));
        return toHex(await hashCtor.digest());
      }
      return UNSIGNED_PAYLOAD;
    }, "getPayloadHash");
  }
});

// node_modules/@aws-sdk/signature-v4/dist-es/headerUtil.js
var hasHeader;
var init_headerUtil = __esm({
  "node_modules/@aws-sdk/signature-v4/dist-es/headerUtil.js"() {
    hasHeader = /* @__PURE__ */ __name((soughtHeader, headers) => {
      soughtHeader = soughtHeader.toLowerCase();
      for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
          return true;
        }
      }
      return false;
    }, "hasHeader");
  }
});

// node_modules/@aws-sdk/signature-v4/dist-es/cloneRequest.js
var cloneRequest, cloneQuery2;
var init_cloneRequest = __esm({
  "node_modules/@aws-sdk/signature-v4/dist-es/cloneRequest.js"() {
    cloneRequest = /* @__PURE__ */ __name(({ headers, query, ...rest }) => ({
      ...rest,
      headers: { ...headers },
      query: query ? cloneQuery2(query) : void 0
    }), "cloneRequest");
    cloneQuery2 = /* @__PURE__ */ __name((query) => Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param
      };
    }, {}), "cloneQuery");
  }
});

// node_modules/@aws-sdk/signature-v4/dist-es/moveHeadersToQuery.js
var moveHeadersToQuery;
var init_moveHeadersToQuery = __esm({
  "node_modules/@aws-sdk/signature-v4/dist-es/moveHeadersToQuery.js"() {
    init_cloneRequest();
    moveHeadersToQuery = /* @__PURE__ */ __name((request2, options = {}) => {
      const { headers, query = {} } = typeof request2.clone === "function" ? request2.clone() : cloneRequest(request2);
      for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
          query[name] = headers[name];
          delete headers[name];
        }
      }
      return {
        ...request2,
        headers,
        query
      };
    }, "moveHeadersToQuery");
  }
});

// node_modules/@aws-sdk/signature-v4/dist-es/prepareRequest.js
var prepareRequest;
var init_prepareRequest = __esm({
  "node_modules/@aws-sdk/signature-v4/dist-es/prepareRequest.js"() {
    init_cloneRequest();
    init_constants();
    prepareRequest = /* @__PURE__ */ __name((request2) => {
      request2 = typeof request2.clone === "function" ? request2.clone() : cloneRequest(request2);
      for (const headerName of Object.keys(request2.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
          delete request2.headers[headerName];
        }
      }
      return request2;
    }, "prepareRequest");
  }
});

// node_modules/@aws-sdk/signature-v4/dist-es/utilDate.js
var iso8601, toDate;
var init_utilDate = __esm({
  "node_modules/@aws-sdk/signature-v4/dist-es/utilDate.js"() {
    iso8601 = /* @__PURE__ */ __name((time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601");
    toDate = /* @__PURE__ */ __name((time) => {
      if (typeof time === "number") {
        return new Date(time * 1e3);
      }
      if (typeof time === "string") {
        if (Number(time)) {
          return new Date(Number(time) * 1e3);
        }
        return new Date(time);
      }
      return time;
    }, "toDate");
  }
});

// node_modules/@aws-sdk/signature-v4/dist-es/SignatureV4.js
var SignatureV4, formatDate, getCanonicalHeaderList;
var init_SignatureV4 = __esm({
  "node_modules/@aws-sdk/signature-v4/dist-es/SignatureV4.js"() {
    init_dist_es5();
    init_dist_es4();
    init_dist_es();
    init_dist_es8();
    init_constants();
    init_credentialDerivation();
    init_getCanonicalHeaders();
    init_getCanonicalQuery();
    init_getPayloadHash();
    init_headerUtil();
    init_moveHeadersToQuery();
    init_prepareRequest();
    init_utilDate();
    SignatureV4 = class {
      constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
        this.headerMarshaller = new HeaderMarshaller(toUtf84, fromUtf84);
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = normalizeProvider(region);
        this.credentialProvider = normalizeProvider(credentials);
      }
      async presign(originalRequest, options = {}) {
        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
          return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request2 = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });
        if (credentials.sessionToken) {
          request2.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request2.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request2.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request2.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request2.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request2, unsignableHeaders, signableHeaders);
        request2.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request2.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request2, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
        return request2;
      }
      async sign(toSign, options) {
        if (typeof toSign === "string") {
          return this.signString(toSign, options);
        } else if (toSign.headers && toSign.payload) {
          return this.signEvent(toSign, options);
        } else if (toSign.message) {
          return this.signMessage(toSign, options);
        } else {
          return this.signRequest(toSign, options);
        }
      }
      async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = toHex(await hash.digest());
        const stringToSign = [
          EVENT_ALGORITHM_IDENTIFIER,
          longDate,
          scope,
          priorSignature,
          hashedHeaders,
          hashedPayload
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
      }
      async signMessage(signableMessage, { signingDate = new Date(), signingRegion, signingService }) {
        const promise = this.signEvent({
          headers: this.headerMarshaller.format(signableMessage.message.headers),
          payload: signableMessage.message.body
        }, {
          signingDate,
          signingRegion,
          signingService,
          priorSignature: signableMessage.priorSignature
        });
        return promise.then((signature) => {
          return { message: signableMessage.message, signature };
        });
      }
      async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
      }
      async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const request2 = prepareRequest(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request2.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
          request2.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request2, this.sha256);
        if (!hasHeader(SHA256_HEADER, request2.headers) && this.applyChecksum) {
          request2.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request2, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request2, canonicalHeaders, payloadHash));
        request2.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
        return request2;
      }
      createCanonicalRequest(request2, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request2.method}
${this.getCanonicalPath(request2)}
${getCanonicalQuery(request2)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
      }
      async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update(toUint8Array(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
      }
      getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
          const normalizedPathSegments = [];
          for (const pathSegment of path.split("/")) {
            if (pathSegment?.length === 0)
              continue;
            if (pathSegment === ".")
              continue;
            if (pathSegment === "..") {
              normalizedPathSegments.pop();
            } else {
              normalizedPathSegments.push(pathSegment);
            }
          }
          const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
          const doubleEncoded = encodeURIComponent(normalizedPath);
          return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
      }
      async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
      }
      getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
      }
      validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
          throw new Error("Resolved credential object is not valid");
        }
      }
    };
    __name(SignatureV4, "SignatureV4");
    formatDate = /* @__PURE__ */ __name((now) => {
      const longDate = iso8601(now).replace(/[\-:]/g, "");
      return {
        longDate,
        shortDate: longDate.slice(0, 8)
      };
    }, "formatDate");
    getCanonicalHeaderList = /* @__PURE__ */ __name((headers) => Object.keys(headers).sort().join(";"), "getCanonicalHeaderList");
  }
});

// node_modules/@aws-sdk/signature-v4/dist-es/index.js
var init_dist_es10 = __esm({
  "node_modules/@aws-sdk/signature-v4/dist-es/index.js"() {
    init_SignatureV4();
    init_getCanonicalHeaders();
    init_getCanonicalQuery();
    init_getPayloadHash();
    init_moveHeadersToQuery();
    init_prepareRequest();
    init_credentialDerivation();
  }
});

// node_modules/fast-xml-parser/src/util.js
var require_util = __commonJS({
  "node_modules/fast-xml-parser/src/util.js"(exports) {
    "use strict";
    var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    var regexName = new RegExp("^" + nameRegexp + "$");
    var getAllMatches = /* @__PURE__ */ __name(function(string, regex) {
      const matches = [];
      let match = regex.exec(string);
      while (match) {
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for (let index = 0; index < len; index++) {
          allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
      }
      return matches;
    }, "getAllMatches");
    var isName = /* @__PURE__ */ __name(function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    }, "isName");
    exports.isExist = function(v5) {
      return typeof v5 !== "undefined";
    };
    exports.isEmptyObject = function(obj) {
      return Object.keys(obj).length === 0;
    };
    exports.merge = function(target, a6, arrayMode) {
      if (a6) {
        const keys = Object.keys(a6);
        const len = keys.length;
        for (let i6 = 0; i6 < len; i6++) {
          if (arrayMode === "strict") {
            target[keys[i6]] = [a6[keys[i6]]];
          } else {
            target[keys[i6]] = a6[keys[i6]];
          }
        }
      }
    };
    exports.getValue = function(v5) {
      if (exports.isExist(v5)) {
        return v5;
      } else {
        return "";
      }
    };
    exports.isName = isName;
    exports.getAllMatches = getAllMatches;
    exports.nameRegexp = nameRegexp;
  }
});

// node_modules/fast-xml-parser/src/validator.js
var require_validator = __commonJS({
  "node_modules/fast-xml-parser/src/validator.js"(exports) {
    "use strict";
    var util2 = require_util();
    var defaultOptions = {
      allowBooleanAttributes: false,
      unpairedTags: []
    };
    exports.validate = function(xmlData, options) {
      options = Object.assign({}, defaultOptions, options);
      const tags = [];
      let tagFound = false;
      let reachedRoot = false;
      if (xmlData[0] === "\uFEFF") {
        xmlData = xmlData.substr(1);
      }
      for (let i6 = 0; i6 < xmlData.length; i6++) {
        if (xmlData[i6] === "<" && xmlData[i6 + 1] === "?") {
          i6 += 2;
          i6 = readPI(xmlData, i6);
          if (i6.err)
            return i6;
        } else if (xmlData[i6] === "<") {
          let tagStartPos = i6;
          i6++;
          if (xmlData[i6] === "!") {
            i6 = readCommentAndCDATA(xmlData, i6);
            continue;
          } else {
            let closingTag = false;
            if (xmlData[i6] === "/") {
              closingTag = true;
              i6++;
            }
            let tagName = "";
            for (; i6 < xmlData.length && xmlData[i6] !== ">" && xmlData[i6] !== " " && xmlData[i6] !== "	" && xmlData[i6] !== "\n" && xmlData[i6] !== "\r"; i6++) {
              tagName += xmlData[i6];
            }
            tagName = tagName.trim();
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substring(0, tagName.length - 1);
              i6--;
            }
            if (!validateTagName(tagName)) {
              let msg;
              if (tagName.trim().length === 0) {
                msg = "Invalid space after '<'.";
              } else {
                msg = "Tag '" + tagName + "' is an invalid name.";
              }
              return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i6));
            }
            const result = readAttributeStr(xmlData, i6);
            if (result === false) {
              return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i6));
            }
            let attrStr = result.value;
            i6 = result.index;
            if (attrStr[attrStr.length - 1] === "/") {
              const attrStrStart = i6 - attrStr.length;
              attrStr = attrStr.substring(0, attrStr.length - 1);
              const isValid2 = validateAttributeString(attrStr, options);
              if (isValid2 === true) {
                tagFound = true;
              } else {
                return getErrorObject(isValid2.err.code, isValid2.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid2.err.line));
              }
            } else if (closingTag) {
              if (!result.tagClosed) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i6));
              } else if (attrStr.trim().length > 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
              } else {
                const otg = tags.pop();
                if (tagName !== otg.tagName) {
                  let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                  return getErrorObject(
                    "InvalidTag",
                    "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                    getLineNumberForPosition(xmlData, tagStartPos)
                  );
                }
                if (tags.length == 0) {
                  reachedRoot = true;
                }
              }
            } else {
              const isValid2 = validateAttributeString(attrStr, options);
              if (isValid2 !== true) {
                return getErrorObject(isValid2.err.code, isValid2.err.msg, getLineNumberForPosition(xmlData, i6 - attrStr.length + isValid2.err.line));
              }
              if (reachedRoot === true) {
                return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i6));
              } else if (options.unpairedTags.indexOf(tagName) !== -1) {
              } else {
                tags.push({ tagName, tagStartPos });
              }
              tagFound = true;
            }
            for (i6++; i6 < xmlData.length; i6++) {
              if (xmlData[i6] === "<") {
                if (xmlData[i6 + 1] === "!") {
                  i6++;
                  i6 = readCommentAndCDATA(xmlData, i6);
                  continue;
                } else if (xmlData[i6 + 1] === "?") {
                  i6 = readPI(xmlData, ++i6);
                  if (i6.err)
                    return i6;
                } else {
                  break;
                }
              } else if (xmlData[i6] === "&") {
                const afterAmp = validateAmpersand(xmlData, i6);
                if (afterAmp == -1)
                  return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i6));
                i6 = afterAmp;
              } else {
                if (reachedRoot === true && !isWhiteSpace(xmlData[i6])) {
                  return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i6));
                }
              }
            }
            if (xmlData[i6] === "<") {
              i6--;
            }
          }
        } else {
          if (isWhiteSpace(xmlData[i6])) {
            continue;
          }
          return getErrorObject("InvalidChar", "char '" + xmlData[i6] + "' is not expected.", getLineNumberForPosition(xmlData, i6));
        }
      }
      if (!tagFound) {
        return getErrorObject("InvalidXml", "Start tag expected.", 1);
      } else if (tags.length == 1) {
        return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
      } else if (tags.length > 0) {
        return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t4) => t4.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
      }
      return true;
    };
    function isWhiteSpace(char) {
      return char === " " || char === "	" || char === "\n" || char === "\r";
    }
    __name(isWhiteSpace, "isWhiteSpace");
    function readPI(xmlData, i6) {
      const start = i6;
      for (; i6 < xmlData.length; i6++) {
        if (xmlData[i6] == "?" || xmlData[i6] == " ") {
          const tagname = xmlData.substr(start, i6 - start);
          if (i6 > 5 && tagname === "xml") {
            return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i6));
          } else if (xmlData[i6] == "?" && xmlData[i6 + 1] == ">") {
            i6++;
            break;
          } else {
            continue;
          }
        }
      }
      return i6;
    }
    __name(readPI, "readPI");
    function readCommentAndCDATA(xmlData, i6) {
      if (xmlData.length > i6 + 5 && xmlData[i6 + 1] === "-" && xmlData[i6 + 2] === "-") {
        for (i6 += 3; i6 < xmlData.length; i6++) {
          if (xmlData[i6] === "-" && xmlData[i6 + 1] === "-" && xmlData[i6 + 2] === ">") {
            i6 += 2;
            break;
          }
        }
      } else if (xmlData.length > i6 + 8 && xmlData[i6 + 1] === "D" && xmlData[i6 + 2] === "O" && xmlData[i6 + 3] === "C" && xmlData[i6 + 4] === "T" && xmlData[i6 + 5] === "Y" && xmlData[i6 + 6] === "P" && xmlData[i6 + 7] === "E") {
        let angleBracketsCount = 1;
        for (i6 += 8; i6 < xmlData.length; i6++) {
          if (xmlData[i6] === "<") {
            angleBracketsCount++;
          } else if (xmlData[i6] === ">") {
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          }
        }
      } else if (xmlData.length > i6 + 9 && xmlData[i6 + 1] === "[" && xmlData[i6 + 2] === "C" && xmlData[i6 + 3] === "D" && xmlData[i6 + 4] === "A" && xmlData[i6 + 5] === "T" && xmlData[i6 + 6] === "A" && xmlData[i6 + 7] === "[") {
        for (i6 += 8; i6 < xmlData.length; i6++) {
          if (xmlData[i6] === "]" && xmlData[i6 + 1] === "]" && xmlData[i6 + 2] === ">") {
            i6 += 2;
            break;
          }
        }
      }
      return i6;
    }
    __name(readCommentAndCDATA, "readCommentAndCDATA");
    var doubleQuote = '"';
    var singleQuote = "'";
    function readAttributeStr(xmlData, i6) {
      let attrStr = "";
      let startChar = "";
      let tagClosed = false;
      for (; i6 < xmlData.length; i6++) {
        if (xmlData[i6] === doubleQuote || xmlData[i6] === singleQuote) {
          if (startChar === "") {
            startChar = xmlData[i6];
          } else if (startChar !== xmlData[i6]) {
          } else {
            startChar = "";
          }
        } else if (xmlData[i6] === ">") {
          if (startChar === "") {
            tagClosed = true;
            break;
          }
        }
        attrStr += xmlData[i6];
      }
      if (startChar !== "") {
        return false;
      }
      return {
        value: attrStr,
        index: i6,
        tagClosed
      };
    }
    __name(readAttributeStr, "readAttributeStr");
    var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function validateAttributeString(attrStr, options) {
      const matches = util2.getAllMatches(attrStr, validAttrStrRegxp);
      const attrNames = {};
      for (let i6 = 0; i6 < matches.length; i6++) {
        if (matches[i6][1].length === 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i6][2] + "' has no space in starting.", getPositionFromMatch(matches[i6]));
        } else if (matches[i6][3] !== void 0 && matches[i6][4] === void 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i6][2] + "' is without value.", getPositionFromMatch(matches[i6]));
        } else if (matches[i6][3] === void 0 && !options.allowBooleanAttributes) {
          return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i6][2] + "' is not allowed.", getPositionFromMatch(matches[i6]));
        }
        const attrName = matches[i6][2];
        if (!validateAttrName(attrName)) {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i6]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
          attrNames[attrName] = 1;
        } else {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i6]));
        }
      }
      return true;
    }
    __name(validateAttributeString, "validateAttributeString");
    function validateNumberAmpersand(xmlData, i6) {
      let re = /\d/;
      if (xmlData[i6] === "x") {
        i6++;
        re = /[\da-fA-F]/;
      }
      for (; i6 < xmlData.length; i6++) {
        if (xmlData[i6] === ";")
          return i6;
        if (!xmlData[i6].match(re))
          break;
      }
      return -1;
    }
    __name(validateNumberAmpersand, "validateNumberAmpersand");
    function validateAmpersand(xmlData, i6) {
      i6++;
      if (xmlData[i6] === ";")
        return -1;
      if (xmlData[i6] === "#") {
        i6++;
        return validateNumberAmpersand(xmlData, i6);
      }
      let count = 0;
      for (; i6 < xmlData.length; i6++, count++) {
        if (xmlData[i6].match(/\w/) && count < 20)
          continue;
        if (xmlData[i6] === ";")
          break;
        return -1;
      }
      return i6;
    }
    __name(validateAmpersand, "validateAmpersand");
    function getErrorObject(code, message, lineNumber) {
      return {
        err: {
          code,
          msg: message,
          line: lineNumber.line || lineNumber,
          col: lineNumber.col
        }
      };
    }
    __name(getErrorObject, "getErrorObject");
    function validateAttrName(attrName) {
      return util2.isName(attrName);
    }
    __name(validateAttrName, "validateAttrName");
    function validateTagName(tagname) {
      return util2.isName(tagname);
    }
    __name(validateTagName, "validateTagName");
    function getLineNumberForPosition(xmlData, index) {
      const lines = xmlData.substring(0, index).split(/\r?\n/);
      return {
        line: lines.length,
        col: lines[lines.length - 1].length + 1
      };
    }
    __name(getLineNumberForPosition, "getLineNumberForPosition");
    function getPositionFromMatch(match) {
      return match.startIndex + match[1].length;
    }
    __name(getPositionFromMatch, "getPositionFromMatch");
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var require_OptionsBuilder = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports) {
    var defaultOptions = {
      preserveOrder: false,
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      removeNSPrefix: false,
      allowBooleanAttributes: false,
      parseTagValue: true,
      parseAttributeValue: false,
      trimValues: true,
      cdataPropName: false,
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
      },
      tagValueProcessor: function(tagName, val2) {
        return val2;
      },
      attributeValueProcessor: function(attrName, val2) {
        return val2;
      },
      stopNodes: [],
      alwaysCreateTextNode: false,
      isArray: () => false,
      commentPropName: false,
      unpairedTags: [],
      processEntities: true,
      htmlEntities: false,
      ignoreDeclaration: false,
      ignorePiTags: false,
      transformTagName: false,
      transformAttributeName: false,
      updateTag: function(tagName, jPath, attrs) {
        return tagName;
      }
    };
    var buildOptions = /* @__PURE__ */ __name(function(options) {
      return Object.assign({}, defaultOptions, options);
    }, "buildOptions");
    exports.buildOptions = buildOptions;
    exports.defaultOptions = defaultOptions;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var require_xmlNode = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports, module2) {
    "use strict";
    var XmlNode = class {
      constructor(tagname) {
        this.tagname = tagname;
        this.child = [];
        this[":@"] = {};
      }
      add(key, val2) {
        if (key === "__proto__")
          key = "#__proto__";
        this.child.push({ [key]: val2 });
      }
      addChild(node) {
        if (node.tagname === "__proto__")
          node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
          this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
        } else {
          this.child.push({ [node.tagname]: node.child });
        }
      }
    };
    __name(XmlNode, "XmlNode");
    module2.exports = XmlNode;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var require_DocTypeReader = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports, module2) {
    function readDocType(xmlData, i6) {
      const entities = {};
      if (xmlData[i6 + 3] === "O" && xmlData[i6 + 4] === "C" && xmlData[i6 + 5] === "T" && xmlData[i6 + 6] === "Y" && xmlData[i6 + 7] === "P" && xmlData[i6 + 8] === "E") {
        i6 = i6 + 9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for (; i6 < xmlData.length; i6++) {
          if (xmlData[i6] === "<" && !comment) {
            if (hasBody && isEntity(xmlData, i6)) {
              i6 += 7;
              [entityName, val, i6] = readEntityExp(xmlData, i6 + 1);
              if (val.indexOf("&") === -1)
                entities[validateEntityName(entityName)] = {
                  regx: RegExp(`&${entityName};`, "g"),
                  val
                };
            } else if (hasBody && isElement(xmlData, i6))
              i6 += 8;
            else if (hasBody && isAttlist(xmlData, i6))
              i6 += 8;
            else if (hasBody && isNotation(xmlData, i6))
              i6 += 9;
            else if (isComment)
              comment = true;
            else
              throw new Error("Invalid DOCTYPE");
            angleBracketsCount++;
            exp = "";
          } else if (xmlData[i6] === ">") {
            if (comment) {
              if (xmlData[i6 - 1] === "-" && xmlData[i6 - 2] === "-") {
                comment = false;
                angleBracketsCount--;
              }
            } else {
              angleBracketsCount--;
            }
            if (angleBracketsCount === 0) {
              break;
            }
          } else if (xmlData[i6] === "[") {
            hasBody = true;
          } else {
            exp += xmlData[i6];
          }
        }
        if (angleBracketsCount !== 0) {
          throw new Error(`Unclosed DOCTYPE`);
        }
      } else {
        throw new Error(`Invalid Tag instead of DOCTYPE`);
      }
      return { entities, i: i6 };
    }
    __name(readDocType, "readDocType");
    function readEntityExp(xmlData, i6) {
      let entityName2 = "";
      for (; i6 < xmlData.length && (xmlData[i6] !== "'" && xmlData[i6] !== '"'); i6++) {
        entityName2 += xmlData[i6];
      }
      entityName2 = entityName2.trim();
      if (entityName2.indexOf(" ") !== -1)
        throw new Error("External entites are not supported");
      const startChar = xmlData[i6++];
      let val2 = "";
      for (; i6 < xmlData.length && xmlData[i6] !== startChar; i6++) {
        val2 += xmlData[i6];
      }
      return [entityName2, val2, i6];
    }
    __name(readEntityExp, "readEntityExp");
    function isComment(xmlData, i6) {
      if (xmlData[i6 + 1] === "!" && xmlData[i6 + 2] === "-" && xmlData[i6 + 3] === "-")
        return true;
      return false;
    }
    __name(isComment, "isComment");
    function isEntity(xmlData, i6) {
      if (xmlData[i6 + 1] === "!" && xmlData[i6 + 2] === "E" && xmlData[i6 + 3] === "N" && xmlData[i6 + 4] === "T" && xmlData[i6 + 5] === "I" && xmlData[i6 + 6] === "T" && xmlData[i6 + 7] === "Y")
        return true;
      return false;
    }
    __name(isEntity, "isEntity");
    function isElement(xmlData, i6) {
      if (xmlData[i6 + 1] === "!" && xmlData[i6 + 2] === "E" && xmlData[i6 + 3] === "L" && xmlData[i6 + 4] === "E" && xmlData[i6 + 5] === "M" && xmlData[i6 + 6] === "E" && xmlData[i6 + 7] === "N" && xmlData[i6 + 8] === "T")
        return true;
      return false;
    }
    __name(isElement, "isElement");
    function isAttlist(xmlData, i6) {
      if (xmlData[i6 + 1] === "!" && xmlData[i6 + 2] === "A" && xmlData[i6 + 3] === "T" && xmlData[i6 + 4] === "T" && xmlData[i6 + 5] === "L" && xmlData[i6 + 6] === "I" && xmlData[i6 + 7] === "S" && xmlData[i6 + 8] === "T")
        return true;
      return false;
    }
    __name(isAttlist, "isAttlist");
    function isNotation(xmlData, i6) {
      if (xmlData[i6 + 1] === "!" && xmlData[i6 + 2] === "N" && xmlData[i6 + 3] === "O" && xmlData[i6 + 4] === "T" && xmlData[i6 + 5] === "A" && xmlData[i6 + 6] === "T" && xmlData[i6 + 7] === "I" && xmlData[i6 + 8] === "O" && xmlData[i6 + 9] === "N")
        return true;
      return false;
    }
    __name(isNotation, "isNotation");
    var specialChar = "!?\\/[]$%{}^&*()<>|+";
    function validateEntityName(name) {
      for (let i6 = 0; i6 < specialChar.length; i6++) {
        const ch = specialChar[i6];
        if (name.indexOf(ch) !== -1)
          throw new Error(`Invalid character ${ch} in entity name`);
      }
      return name;
    }
    __name(validateEntityName, "validateEntityName");
    module2.exports = readDocType;
  }
});

// node_modules/strnum/strnum.js
var require_strnum = __commonJS({
  "node_modules/strnum/strnum.js"(exports, module2) {
    var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    var numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
    if (!Number.parseInt && window.parseInt) {
      Number.parseInt = window.parseInt;
    }
    if (!Number.parseFloat && window.parseFloat) {
      Number.parseFloat = window.parseFloat;
    }
    var consider = {
      hex: true,
      leadingZeros: true,
      decimalPoint: ".",
      eNotation: true
    };
    function toNumber(str, options = {}) {
      options = Object.assign({}, consider, options);
      if (!str || typeof str !== "string")
        return str;
      let trimmedStr = str.trim();
      if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr))
        return str;
      else if (options.hex && hexRegex.test(trimmedStr)) {
        return Number.parseInt(trimmedStr, 16);
      } else {
        const match = numRegex.exec(trimmedStr);
        if (match) {
          const sign = match[1];
          const leadingZeros = match[2];
          let numTrimmedByZeros = trimZeros(match[3]);
          const eNotation = match[4] || match[6];
          if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".")
            return str;
          else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".")
            return str;
          else {
            const num = Number(trimmedStr);
            const numStr = "" + num;
            if (numStr.search(/[eE]/) !== -1) {
              if (options.eNotation)
                return num;
              else
                return str;
            } else if (eNotation) {
              if (options.eNotation)
                return num;
              else
                return str;
            } else if (trimmedStr.indexOf(".") !== -1) {
              if (numStr === "0" && numTrimmedByZeros === "")
                return num;
              else if (numStr === numTrimmedByZeros)
                return num;
              else if (sign && numStr === "-" + numTrimmedByZeros)
                return num;
              else
                return str;
            }
            if (leadingZeros) {
              if (numTrimmedByZeros === numStr)
                return num;
              else if (sign + numTrimmedByZeros === numStr)
                return num;
              else
                return str;
            }
            if (trimmedStr === numStr)
              return num;
            else if (trimmedStr === sign + numStr)
              return num;
            return str;
          }
        } else {
          return str;
        }
      }
    }
    __name(toNumber, "toNumber");
    function trimZeros(numStr) {
      if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, "");
        if (numStr === ".")
          numStr = "0";
        else if (numStr[0] === ".")
          numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".")
          numStr = numStr.substr(0, numStr.length - 1);
        return numStr;
      }
      return numStr;
    }
    __name(trimZeros, "trimZeros");
    module2.exports = toNumber;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var require_OrderedObjParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports, module2) {
    "use strict";
    var util2 = require_util();
    var xmlNode = require_xmlNode();
    var readDocType = require_DocTypeReader();
    var toNumber = require_strnum();
    var regx = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, util2.nameRegexp);
    var OrderedObjParser = class {
      constructor(options) {
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
          "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
          "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
          "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
          "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
        };
        this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
        this.htmlEntities = {
          "space": { regex: /&(nbsp|#160);/g, val: " " },
          "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
          "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
          "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
          "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
          "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
          "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
          "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" }
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
      }
    };
    __name(OrderedObjParser, "OrderedObjParser");
    function addExternalEntities(externalEntities) {
      const entKeys = Object.keys(externalEntities);
      for (let i6 = 0; i6 < entKeys.length; i6++) {
        const ent = entKeys[i6];
        this.lastEntities[ent] = {
          regex: new RegExp("&" + ent + ";", "g"),
          val: externalEntities[ent]
        };
      }
    }
    __name(addExternalEntities, "addExternalEntities");
    function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
      if (val2 !== void 0) {
        if (this.options.trimValues && !dontTrim) {
          val2 = val2.trim();
        }
        if (val2.length > 0) {
          if (!escapeEntities)
            val2 = this.replaceEntitiesValue(val2);
          const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
          if (newval === null || newval === void 0) {
            return val2;
          } else if (typeof newval !== typeof val2 || newval !== val2) {
            return newval;
          } else if (this.options.trimValues) {
            return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
          } else {
            const trimmedVal = val2.trim();
            if (trimmedVal === val2) {
              return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              return val2;
            }
          }
        }
      }
    }
    __name(parseTextData, "parseTextData");
    function resolveNameSpace(tagname) {
      if (this.options.removeNSPrefix) {
        const tags = tagname.split(":");
        const prefix = tagname.charAt(0) === "/" ? "/" : "";
        if (tags[0] === "xmlns") {
          return "";
        }
        if (tags.length === 2) {
          tagname = prefix + tags[1];
        }
      }
      return tagname;
    }
    __name(resolveNameSpace, "resolveNameSpace");
    var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function buildAttributesMap(attrStr, jPath, tagName) {
      if (!this.options.ignoreAttributes && typeof attrStr === "string") {
        const matches = util2.getAllMatches(attrStr, attrsRegx);
        const len = matches.length;
        const attrs = {};
        for (let i6 = 0; i6 < len; i6++) {
          const attrName = this.resolveNameSpace(matches[i6][1]);
          let oldVal = matches[i6][4];
          let aName = this.options.attributeNamePrefix + attrName;
          if (attrName.length) {
            if (this.options.transformAttributeName) {
              aName = this.options.transformAttributeName(aName);
            }
            if (aName === "__proto__")
              aName = "#__proto__";
            if (oldVal !== void 0) {
              if (this.options.trimValues) {
                oldVal = oldVal.trim();
              }
              oldVal = this.replaceEntitiesValue(oldVal);
              const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
              if (newVal === null || newVal === void 0) {
                attrs[aName] = oldVal;
              } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                attrs[aName] = newVal;
              } else {
                attrs[aName] = parseValue(
                  oldVal,
                  this.options.parseAttributeValue,
                  this.options.numberParseOptions
                );
              }
            } else if (this.options.allowBooleanAttributes) {
              attrs[aName] = true;
            }
          }
        }
        if (!Object.keys(attrs).length) {
          return;
        }
        if (this.options.attributesGroupName) {
          const attrCollection = {};
          attrCollection[this.options.attributesGroupName] = attrs;
          return attrCollection;
        }
        return attrs;
      }
    }
    __name(buildAttributesMap, "buildAttributesMap");
    var parseXml = /* @__PURE__ */ __name(function(xmlData) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      const xmlObj = new xmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      let jPath = "";
      for (let i6 = 0; i6 < xmlData.length; i6++) {
        const ch = xmlData[i6];
        if (ch === "<") {
          if (xmlData[i6 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i6, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i6 + 2, closeIndex).trim();
            if (this.options.removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode) {
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
            }
            const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
            if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
              throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
            }
            let propIndex = 0;
            if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
              propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
              this.tagsNodeStack.pop();
            } else {
              propIndex = jPath.lastIndexOf(".");
            }
            jPath = jPath.substring(0, propIndex);
            currentNode = this.tagsNodeStack.pop();
            textData = "";
            i6 = closeIndex;
          } else if (xmlData[i6 + 1] === "?") {
            let tagData = readTagExp(xmlData, i6, false, "?>");
            if (!tagData)
              throw new Error("Pi Tag is not closed.");
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
            } else {
              const childNode = new xmlNode(tagData.tagName);
              childNode.add(this.options.textNodeName, "");
              if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
              }
              this.addChild(currentNode, childNode, jPath);
            }
            i6 = tagData.closeIndex + 1;
          } else if (xmlData.substr(i6 + 1, 3) === "!--") {
            const endIndex = findClosingIndex(xmlData, "-->", i6 + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const comment = xmlData.substring(i6 + 4, endIndex - 2);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
            }
            i6 = endIndex;
          } else if (xmlData.substr(i6 + 1, 2) === "!D") {
            const result = readDocType(xmlData, i6);
            this.docTypeEntities = result.entities;
            i6 = result.i;
          } else if (xmlData.substr(i6 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i6, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i6 + 9, closeIndex);
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.cdataPropName) {
              currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
            } else {
              let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
              if (val2 == void 0)
                val2 = "";
              currentNode.add(this.options.textNodeName, val2);
            }
            i6 = closeIndex + 2;
          } else {
            let result = readTagExp(xmlData, i6, this.options.removeNSPrefix);
            let tagName = result.tagName;
            let tagExp = result.tagExp;
            let attrExpPresent = result.attrExpPresent;
            let closeIndex = result.closeIndex;
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
              }
            }
            const lastTag = currentNode;
            if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
              currentNode = this.tagsNodeStack.pop();
              jPath = jPath.substring(0, jPath.lastIndexOf("."));
            }
            if (tagName !== xmlObj.tagname) {
              jPath += jPath ? "." + tagName : tagName;
            }
            if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
              let tagContent = "";
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                i6 = result.closeIndex;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                i6 = result.closeIndex;
              } else {
                const result2 = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
                if (!result2)
                  throw new Error(`Unexpected end of ${tagName}`);
                i6 = result2.i;
                tagContent = result2.tagContent;
              }
              const childNode = new xmlNode(tagName);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
              }
              if (tagContent) {
                tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
              }
              jPath = jPath.substr(0, jPath.lastIndexOf("."));
              childNode.add(this.options.textNodeName, tagContent);
              this.addChild(currentNode, childNode, jPath);
            } else {
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                if (this.options.transformTagName) {
                  tagName = this.options.transformTagName(tagName);
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
              } else {
                const childNode = new xmlNode(tagName);
                this.tagsNodeStack.push(currentNode);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                currentNode = childNode;
              }
              textData = "";
              i6 = closeIndex;
            }
          }
        } else {
          textData += xmlData[i6];
        }
      }
      return xmlObj.child;
    }, "parseXml");
    function addChild(currentNode, childNode, jPath) {
      const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
      if (result === false) {
      } else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode);
      } else {
        currentNode.addChild(childNode);
      }
    }
    __name(addChild, "addChild");
    var replaceEntitiesValue = /* @__PURE__ */ __name(function(val2) {
      if (this.options.processEntities) {
        for (let entityName2 in this.docTypeEntities) {
          const entity = this.docTypeEntities[entityName2];
          val2 = val2.replace(entity.regx, entity.val);
        }
        for (let entityName2 in this.lastEntities) {
          const entity = this.lastEntities[entityName2];
          val2 = val2.replace(entity.regex, entity.val);
        }
        if (this.options.htmlEntities) {
          for (let entityName2 in this.htmlEntities) {
            const entity = this.htmlEntities[entityName2];
            val2 = val2.replace(entity.regex, entity.val);
          }
        }
        val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return val2;
    }, "replaceEntitiesValue");
    function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
      if (textData) {
        if (isLeafNode === void 0)
          isLeafNode = Object.keys(currentNode.child).length === 0;
        textData = this.parseTextData(
          textData,
          currentNode.tagname,
          jPath,
          false,
          currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
          isLeafNode
        );
        if (textData !== void 0 && textData !== "")
          currentNode.add(this.options.textNodeName, textData);
        textData = "";
      }
      return textData;
    }
    __name(saveTextToParentTag, "saveTextToParentTag");
    function isItStopNode(stopNodes, jPath, currentTagName) {
      const allNodesExp = "*." + currentTagName;
      for (const stopNodePath in stopNodes) {
        const stopNodeExp = stopNodes[stopNodePath];
        if (allNodesExp === stopNodeExp || jPath === stopNodeExp)
          return true;
      }
      return false;
    }
    __name(isItStopNode, "isItStopNode");
    function tagExpWithClosingIndex(xmlData, i6, closingChar = ">") {
      let attrBoundary;
      let tagExp = "";
      for (let index = i6; index < xmlData.length; index++) {
        let ch = xmlData[index];
        if (attrBoundary) {
          if (ch === attrBoundary)
            attrBoundary = "";
        } else if (ch === '"' || ch === "'") {
          attrBoundary = ch;
        } else if (ch === closingChar[0]) {
          if (closingChar[1]) {
            if (xmlData[index + 1] === closingChar[1]) {
              return {
                data: tagExp,
                index
              };
            }
          } else {
            return {
              data: tagExp,
              index
            };
          }
        } else if (ch === "	") {
          ch = " ";
        }
        tagExp += ch;
      }
    }
    __name(tagExpWithClosingIndex, "tagExpWithClosingIndex");
    function findClosingIndex(xmlData, str, i6, errMsg) {
      const closingIndex = xmlData.indexOf(str, i6);
      if (closingIndex === -1) {
        throw new Error(errMsg);
      } else {
        return closingIndex + str.length - 1;
      }
    }
    __name(findClosingIndex, "findClosingIndex");
    function readTagExp(xmlData, i6, removeNSPrefix, closingChar = ">") {
      const result = tagExpWithClosingIndex(xmlData, i6 + 1, closingChar);
      if (!result)
        return;
      let tagExp = result.data;
      const closeIndex = result.index;
      const separatorIndex = tagExp.search(/\s/);
      let tagName = tagExp;
      let attrExpPresent = true;
      if (separatorIndex !== -1) {
        tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, "");
        tagExp = tagExp.substr(separatorIndex + 1);
      }
      if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
          tagName = tagName.substr(colonIndex + 1);
          attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
      }
      return {
        tagName,
        tagExp,
        closeIndex,
        attrExpPresent
      };
    }
    __name(readTagExp, "readTagExp");
    function readStopNodeData(xmlData, tagName, i6) {
      const startIndex = i6;
      let openTagCount = 1;
      for (; i6 < xmlData.length; i6++) {
        if (xmlData[i6] === "<") {
          if (xmlData[i6 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i6, `${tagName} is not closed`);
            let closeTagName = xmlData.substring(i6 + 2, closeIndex).trim();
            if (closeTagName === tagName) {
              openTagCount--;
              if (openTagCount === 0) {
                return {
                  tagContent: xmlData.substring(startIndex, i6),
                  i: closeIndex
                };
              }
            }
            i6 = closeIndex;
          } else if (xmlData[i6 + 1] === "?") {
            const closeIndex = findClosingIndex(xmlData, "?>", i6 + 1, "StopNode is not closed.");
            i6 = closeIndex;
          } else if (xmlData.substr(i6 + 1, 3) === "!--") {
            const closeIndex = findClosingIndex(xmlData, "-->", i6 + 3, "StopNode is not closed.");
            i6 = closeIndex;
          } else if (xmlData.substr(i6 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i6, "StopNode is not closed.") - 2;
            i6 = closeIndex;
          } else {
            const tagData = readTagExp(xmlData, i6, ">");
            if (tagData) {
              const openTagName = tagData && tagData.tagName;
              if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                openTagCount++;
              }
              i6 = tagData.closeIndex;
            }
          }
        }
      }
    }
    __name(readStopNodeData, "readStopNodeData");
    function parseValue(val2, shouldParse, options) {
      if (shouldParse && typeof val2 === "string") {
        const newval = val2.trim();
        if (newval === "true")
          return true;
        else if (newval === "false")
          return false;
        else
          return toNumber(val2, options);
      } else {
        if (util2.isExist(val2)) {
          return val2;
        } else {
          return "";
        }
      }
    }
    __name(parseValue, "parseValue");
    module2.exports = OrderedObjParser;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/node2json.js
var require_node2json = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports) {
    "use strict";
    function prettify(node, options) {
      return compress(node, options);
    }
    __name(prettify, "prettify");
    function compress(arr, options, jPath) {
      let text;
      const compressedObj = {};
      for (let i6 = 0; i6 < arr.length; i6++) {
        const tagObj = arr[i6];
        const property = propName(tagObj);
        let newJpath = "";
        if (jPath === void 0)
          newJpath = property;
        else
          newJpath = jPath + "." + property;
        if (property === options.textNodeName) {
          if (text === void 0)
            text = tagObj[property];
          else
            text += "" + tagObj[property];
        } else if (property === void 0) {
          continue;
        } else if (tagObj[property]) {
          let val2 = compress(tagObj[property], options, newJpath);
          const isLeaf = isLeafTag(val2, options);
          if (tagObj[":@"]) {
            assignAttributes(val2, tagObj[":@"], newJpath, options);
          } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
            val2 = val2[options.textNodeName];
          } else if (Object.keys(val2).length === 0) {
            if (options.alwaysCreateTextNode)
              val2[options.textNodeName] = "";
            else
              val2 = "";
          }
          if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
            if (!Array.isArray(compressedObj[property])) {
              compressedObj[property] = [compressedObj[property]];
            }
            compressedObj[property].push(val2);
          } else {
            if (options.isArray(property, newJpath, isLeaf)) {
              compressedObj[property] = [val2];
            } else {
              compressedObj[property] = val2;
            }
          }
        }
      }
      if (typeof text === "string") {
        if (text.length > 0)
          compressedObj[options.textNodeName] = text;
      } else if (text !== void 0)
        compressedObj[options.textNodeName] = text;
      return compressedObj;
    }
    __name(compress, "compress");
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i6 = 0; i6 < keys.length; i6++) {
        const key = keys[i6];
        if (key !== ":@")
          return key;
      }
    }
    __name(propName, "propName");
    function assignAttributes(obj, attrMap, jpath, options) {
      if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length;
        for (let i6 = 0; i6 < len; i6++) {
          const atrrName = keys[i6];
          if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
            obj[atrrName] = [attrMap[atrrName]];
          } else {
            obj[atrrName] = attrMap[atrrName];
          }
        }
      }
    }
    __name(assignAttributes, "assignAttributes");
    function isLeafTag(obj, options) {
      const { textNodeName } = options;
      const propCount = Object.keys(obj).length;
      if (propCount === 0) {
        return true;
      }
      if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
        return true;
      }
      return false;
    }
    __name(isLeafTag, "isLeafTag");
    exports.prettify = prettify;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var require_XMLParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports, module2) {
    var { buildOptions } = require_OptionsBuilder();
    var OrderedObjParser = require_OrderedObjParser();
    var { prettify } = require_node2json();
    var validator = require_validator();
    var XMLParser2 = class {
      constructor(options) {
        this.externalEntities = {};
        this.options = buildOptions(options);
      }
      parse(xmlData, validationOption) {
        if (typeof xmlData === "string") {
        } else if (xmlData.toString) {
          xmlData = xmlData.toString();
        } else {
          throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
          if (validationOption === true)
            validationOption = {};
          const result = validator.validate(xmlData, validationOption);
          if (result !== true) {
            throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
          }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === void 0)
          return orderedResult;
        else
          return prettify(orderedResult, this.options);
      }
      addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
          throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
          throw new Error("An entity with value '&' is not permitted");
        } else {
          this.externalEntities[key] = value;
        }
      }
    };
    __name(XMLParser2, "XMLParser");
    module2.exports = XMLParser2;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
var require_orderedJs2Xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports, module2) {
    var EOL = "\n";
    function toXml(jArray, options) {
      let indentation = "";
      if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
      }
      return arrToStr(jArray, options, "", indentation);
    }
    __name(toXml, "toXml");
    function arrToStr(arr, options, jPath, indentation) {
      let xmlStr = "";
      let isPreviousElementTag = false;
      for (let i6 = 0; i6 < arr.length; i6++) {
        const tagObj = arr[i6];
        const tagName = propName(tagObj);
        let newJPath = "";
        if (jPath.length === 0)
          newJPath = tagName;
        else
          newJPath = `${jPath}.${tagName}`;
        if (tagName === options.textNodeName) {
          let tagText = tagObj[tagName];
          if (!isStopNode(newJPath, options)) {
            tagText = options.tagValueProcessor(tagName, tagText);
            tagText = replaceEntitiesValue(tagText, options);
          }
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += tagText;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.cdataPropName) {
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.commentPropName) {
          xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
          isPreviousElementTag = true;
          continue;
        } else if (tagName[0] === "?") {
          const attStr2 = attr_to_str(tagObj[":@"], options);
          const tempInd = tagName === "?xml" ? "" : indentation;
          let piTextNodeName = tagObj[tagName][0][options.textNodeName];
          piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
          xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
          isPreviousElementTag = true;
          continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
          newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
          if (options.suppressUnpairedNode)
            xmlStr += tagStart + ">";
          else
            xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
          xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
          xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
          xmlStr += tagStart + ">";
          if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
            xmlStr += indentation + options.indentBy + tagValue + indentation;
          } else {
            xmlStr += tagValue;
          }
          xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
      }
      return xmlStr;
    }
    __name(arrToStr, "arrToStr");
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i6 = 0; i6 < keys.length; i6++) {
        const key = keys[i6];
        if (key !== ":@")
          return key;
      }
    }
    __name(propName, "propName");
    function attr_to_str(attrMap, options) {
      let attrStr = "";
      if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
          let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
          attrVal = replaceEntitiesValue(attrVal, options);
          if (attrVal === true && options.suppressBooleanAttributes) {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
          } else {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
          }
        }
      }
      return attrStr;
    }
    __name(attr_to_str, "attr_to_str");
    function isStopNode(jPath, options) {
      jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
      let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
      for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName)
          return true;
      }
      return false;
    }
    __name(isStopNode, "isStopNode");
    function replaceEntitiesValue(textValue, options) {
      if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i6 = 0; i6 < options.entities.length; i6++) {
          const entity = options.entities[i6];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    }
    __name(replaceEntitiesValue, "replaceEntitiesValue");
    module2.exports = toXml;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
var require_json2xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports, module2) {
    "use strict";
    var buildFromOrderedJs = require_orderedJs2Xml();
    var defaultOptions = {
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      cdataPropName: false,
      format: false,
      indentBy: "  ",
      suppressEmptyNode: false,
      suppressUnpairedNode: true,
      suppressBooleanAttributes: true,
      tagValueProcessor: function(key, a6) {
        return a6;
      },
      attributeValueProcessor: function(attrName, a6) {
        return a6;
      },
      preserveOrder: false,
      commentPropName: false,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" }
      ],
      processEntities: true,
      stopNodes: [],
      oneListGroup: false
    };
    function Builder(options) {
      this.options = Object.assign({}, defaultOptions, options);
      if (this.options.ignoreAttributes || this.options.attributesGroupName) {
        this.isAttribute = function() {
          return false;
        };
      } else {
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
      }
      this.processTextOrObjNode = processTextOrObjNode;
      if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = ">\n";
        this.newLine = "\n";
      } else {
        this.indentate = function() {
          return "";
        };
        this.tagEndChar = ">";
        this.newLine = "";
      }
    }
    __name(Builder, "Builder");
    Builder.prototype.build = function(jObj) {
      if (this.options.preserveOrder) {
        return buildFromOrderedJs(jObj, this.options);
      } else {
        if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
          jObj = {
            [this.options.arrayNodeName]: jObj
          };
        }
        return this.j2x(jObj, 0).val;
      }
    };
    Builder.prototype.j2x = function(jObj, level) {
      let attrStr = "";
      let val2 = "";
      for (let key in jObj) {
        if (typeof jObj[key] === "undefined") {
        } else if (jObj[key] === null) {
          if (key[0] === "?")
            val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
          else
            val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
        } else if (jObj[key] instanceof Date) {
          val2 += this.buildTextValNode(jObj[key], key, "", level);
        } else if (typeof jObj[key] !== "object") {
          const attr = this.isAttribute(key);
          if (attr) {
            attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
          } else {
            if (key === this.options.textNodeName) {
              let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
              val2 += this.replaceEntitiesValue(newval);
            } else {
              val2 += this.buildTextValNode(jObj[key], key, "", level);
            }
          }
        } else if (Array.isArray(jObj[key])) {
          const arrLen = jObj[key].length;
          let listTagVal = "";
          for (let j6 = 0; j6 < arrLen; j6++) {
            const item = jObj[key][j6];
            if (typeof item === "undefined") {
            } else if (item === null) {
              if (key[0] === "?")
                val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
              else
                val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
            } else if (typeof item === "object") {
              if (this.options.oneListGroup) {
                listTagVal += this.j2x(item, level + 1).val;
              } else {
                listTagVal += this.processTextOrObjNode(item, key, level);
              }
            } else {
              listTagVal += this.buildTextValNode(item, key, "", level);
            }
          }
          if (this.options.oneListGroup) {
            listTagVal = this.buildObjectNode(listTagVal, key, "", level);
          }
          val2 += listTagVal;
        } else {
          if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
            const Ks = Object.keys(jObj[key]);
            const L = Ks.length;
            for (let j6 = 0; j6 < L; j6++) {
              attrStr += this.buildAttrPairStr(Ks[j6], "" + jObj[key][Ks[j6]]);
            }
          } else {
            val2 += this.processTextOrObjNode(jObj[key], key, level);
          }
        }
      }
      return { attrStr, val: val2 };
    };
    Builder.prototype.buildAttrPairStr = function(attrName, val2) {
      val2 = this.options.attributeValueProcessor(attrName, "" + val2);
      val2 = this.replaceEntitiesValue(val2);
      if (this.options.suppressBooleanAttributes && val2 === "true") {
        return " " + attrName;
      } else
        return " " + attrName + '="' + val2 + '"';
    };
    function processTextOrObjNode(object, key, level) {
      const result = this.j2x(object, level + 1);
      if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
        return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
      } else {
        return this.buildObjectNode(result.val, key, result.attrStr, level);
      }
    }
    __name(processTextOrObjNode, "processTextOrObjNode");
    Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
      if (val2 === "") {
        if (key[0] === "?")
          return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        }
      } else {
        let tagEndExp = "</" + key + this.tagEndChar;
        let piClosingChar = "";
        if (key[0] === "?") {
          piClosingChar = "?";
          tagEndExp = "";
        }
        if (attrStr && val2.indexOf("<") === -1) {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
          return this.indentate(level) + `<!--${val2}-->` + this.newLine;
        } else {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
        }
      }
    };
    Builder.prototype.closeTag = function(key) {
      let closeTag = "";
      if (this.options.unpairedTags.indexOf(key) !== -1) {
        if (!this.options.suppressUnpairedNode)
          closeTag = "/";
      } else if (this.options.suppressEmptyNode) {
        closeTag = "/";
      } else {
        closeTag = `></${key}`;
      }
      return closeTag;
    };
    Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
      if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
        return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
      } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
        return this.indentate(level) + `<!--${val2}-->` + this.newLine;
      } else if (key[0] === "?") {
        return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
      } else {
        let textValue = this.options.tagValueProcessor(key, val2);
        textValue = this.replaceEntitiesValue(textValue);
        if (textValue === "") {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        } else {
          return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
        }
      }
    };
    Builder.prototype.replaceEntitiesValue = function(textValue) {
      if (textValue && textValue.length > 0 && this.options.processEntities) {
        for (let i6 = 0; i6 < this.options.entities.length; i6++) {
          const entity = this.options.entities[i6];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    };
    function indentate(level) {
      return this.options.indentBy.repeat(level);
    }
    __name(indentate, "indentate");
    function isAttribute(name) {
      if (name.startsWith(this.options.attributeNamePrefix)) {
        return name.substr(this.attrPrefixLen);
      } else {
        return false;
      }
    }
    __name(isAttribute, "isAttribute");
    module2.exports = Builder;
  }
});

// node_modules/fast-xml-parser/src/fxp.js
var require_fxp = __commonJS({
  "node_modules/fast-xml-parser/src/fxp.js"(exports, module2) {
    "use strict";
    var validator = require_validator();
    var XMLParser2 = require_XMLParser();
    var XMLBuilder = require_json2xml();
    module2.exports = {
      XMLParser: XMLParser2,
      XMLValidator: validator,
      XMLBuilder
    };
  }
});

// node_modules/aws-crt/dist/common/promise.js
var require_promise = __commonJS({
  "node_modules/aws-crt/dist/common/promise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.newLiftedPromise = exports.makeSelfCleaningPromise = void 0;
    function makeSelfCleaningPromise(promise, cleaner) {
      if (!cleaner) {
        return promise;
      }
      return promise.finally(() => {
        cleaner();
      });
    }
    __name(makeSelfCleaningPromise, "makeSelfCleaningPromise");
    exports.makeSelfCleaningPromise = makeSelfCleaningPromise;
    function newLiftedPromise(promiseBody) {
      let localResolve = void 0;
      let localReject = void 0;
      let promise = new Promise((resolve, reject) => {
        localResolve = resolve;
        localReject = reject;
      });
      if (!localResolve || !localReject) {
        throw new Error("Failed to bind resolve and reject when making lifted promise");
      }
      if (promiseBody) {
        promiseBody(localResolve, localReject);
      }
      return {
        promise,
        resolve: localResolve,
        reject: localReject
      };
    }
    __name(newLiftedPromise, "newLiftedPromise");
    exports.newLiftedPromise = newLiftedPromise;
  }
});

// node_modules/aws-crt/dist/common/cancel.js
var require_cancel = __commonJS({
  "node_modules/aws-crt/dist/common/cancel.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      var desc = Object.getOwnPropertyDescriptor(m6, k6);
      if (!desc || ("get" in desc ? !m6.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m6[k6];
        } };
      }
      Object.defineProperty(o6, k22, desc);
    } : function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      o6[k22] = m6[k6];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o6, v5) {
      Object.defineProperty(o6, "default", { enumerable: true, value: v5 });
    } : function(o6, v5) {
      o6["default"] = v5;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k6 in mod)
          if (k6 !== "default" && Object.prototype.hasOwnProperty.call(mod, k6))
            __createBinding2(result, mod, k6);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.newCancellablePromiseFromNextEvent = exports.CancelController = exports.EVENT_NAME = void 0;
    var events_1 = __require("events");
    var promise = __importStar2(require_promise());
    exports.EVENT_NAME = "cancelled";
    var CancelController = class {
      constructor(options) {
        this.cancelled = false;
        if (options && options.emitterFactory) {
          this.emitter = options.emitterFactory();
        } else {
          this.emitter = new events_1.EventEmitter();
        }
      }
      cancel() {
        if (!this.cancelled) {
          this.cancelled = true;
          this.emitter.emit(exports.EVENT_NAME);
          this.emitter.removeAllListeners(exports.EVENT_NAME);
        }
      }
      hasBeenCancelled() {
        return this.cancelled;
      }
      addListener(listener) {
        if (this.cancelled) {
          listener();
          return void 0;
        }
        this.emitter.on(exports.EVENT_NAME, listener);
        return () => {
          this.emitter.removeListener(exports.EVENT_NAME, listener);
        };
      }
    };
    __name(CancelController, "CancelController");
    exports.CancelController = CancelController;
    function newCancellablePromiseFromNextEvent(config) {
      let onEvent = void 0;
      let cancelRemoveListener = void 0;
      let liftedPromise = promise.newLiftedPromise();
      onEvent = /* @__PURE__ */ __name((eventData) => {
        try {
          if (config.eventDataTransformer) {
            liftedPromise.resolve(config.eventDataTransformer(eventData));
          } else {
            liftedPromise.resolve(eventData);
          }
        } catch (err) {
          liftedPromise.reject(err);
        }
      }, "onEvent");
      config.emitter.addListener(config.eventName, onEvent);
      if (config.cancelController) {
        cancelRemoveListener = config.cancelController.addListener(() => {
          liftedPromise.reject(config.cancelMessage);
        });
      }
      return promise.makeSelfCleaningPromise(liftedPromise.promise, () => {
        if (onEvent) {
          config.emitter.removeListener(config.eventName, onEvent);
        }
        if (cancelRemoveListener) {
          cancelRemoveListener();
        }
      });
    }
    __name(newCancellablePromiseFromNextEvent, "newCancellablePromiseFromNextEvent");
    exports.newCancellablePromiseFromNextEvent = newCancellablePromiseFromNextEvent;
  }
});

// node_modules/aws-crt/package.json
var require_package = __commonJS({
  "node_modules/aws-crt/package.json"(exports, module2) {
    module2.exports = {
      name: "aws-crt",
      version: "1.15.18",
      description: "NodeJS/browser bindings to the aws-c-* libraries",
      homepage: "https://github.com/awslabs/aws-crt-nodejs",
      repository: {
        type: "git",
        url: "git+https://github.com/awslabs/aws-crt-nodejs.git"
      },
      contributors: [
        "AWS Common Runtime Team <aws-sdk-common-runtime@amazon.com>"
      ],
      license: "Apache-2.0",
      main: "./dist/index.js",
      browser: "./dist.browser/browser.js",
      types: "./dist/index.d.ts",
      scripts: {
        tsc: "node ./scripts/tsc.js",
        test: "npm run test:native",
        "test:node": "npm run test:native",
        "test:native": "npx jest --runInBand --verbose --config test/native/jest.config.js --forceExit",
        "test:browser": "npx jest --runInBand --verbose --config test/browser/jest.config.js --forceExit",
        "test:browser:ci": "npm run install:puppeteer && npm run test:browser",
        "install:puppeteer": "npm install --save-dev jest-puppeteer puppeteer @types/puppeteer",
        prepare: "node ./scripts/tsc.js && node ./scripts/install.js",
        install: "node ./scripts/install.js"
      },
      devDependencies: {
        "@types/crypto-js": "^3.1.43",
        "@types/jest": "^27.0.1",
        "@types/node": "^10.17.54",
        "@types/prettier": "2.6.0",
        "@types/puppeteer": "^5.4.7",
        "@types/uuid": "^3.4.8",
        "@types/ws": "^7.4.7",
        "aws-sdk": "^2.848.0",
        "cmake-js": "^6.3.2",
        "https-proxy-agent": "^5.0.1",
        jest: "^27.2.1",
        "jest-puppeteer": "^5.0.4",
        "jest-runtime": "^27.2.1",
        puppeteer: "^3.3.0",
        tar: "^6.1.11",
        "ts-jest": "^27.0.5",
        typedoc: "^0.22.18",
        "typedoc-plugin-merge-modules": "^3.1.0",
        typescript: "^4.7.4",
        uuid: "^8.3.2",
        yargs: "^17.2.1"
      },
      dependencies: {
        "@aws-sdk/util-utf8-browser": "^3.109.0",
        "@httptoolkit/websocket-stream": "^6.0.0",
        axios: "^0.24.0",
        buffer: "^6.0.3",
        "cmake-js": "^6.3.2",
        "crypto-js": "^4.0.0",
        mqtt: "^4.3.7",
        process: "^0.11.10",
        tar: "^6.1.11"
      }
    };
  }
});

// node_modules/aws-crt/dist/common/platform.js
var require_platform = __commonJS({
  "node_modules/aws-crt/dist/common/platform.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.crt_version = exports.package_info = exports.is_browser = exports.is_nodejs = void 0;
    function is_nodejs() {
      return typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node !== "undefined";
    }
    __name(is_nodejs, "is_nodejs");
    exports.is_nodejs = is_nodejs;
    function is_browser() {
      return !is_nodejs();
    }
    __name(is_browser, "is_browser");
    exports.is_browser = is_browser;
    function package_info() {
      try {
        const pkg = require_package();
        return pkg;
      } catch (err) {
        return {
          name: "aws-crt-nodejs",
          version: "UNKNOWN"
        };
      }
    }
    __name(package_info, "package_info");
    exports.package_info = package_info;
    function crt_version() {
      const pkg = package_info();
      return pkg.version;
    }
    __name(crt_version, "crt_version");
    exports.crt_version = crt_version;
  }
});

// node_modules/aws-crt/dist/common/resource_safety.js
var require_resource_safety = __commonJS({
  "node_modules/aws-crt/dist/common/resource_safety.js"(exports) {
    "use strict";
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e6) {
            reject(e6);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e6) {
            reject(e6);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.using = void 0;
    function using(resource, func) {
      return __awaiter2(this, void 0, void 0, function* () {
        try {
          yield func(resource);
        } finally {
          resource.close();
        }
      });
    }
    __name(using, "using");
    exports.using = using;
  }
});

// node_modules/aws-crt/dist/native/binding.js
var require_binding = __commonJS({
  "node_modules/aws-crt/dist/native/binding.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      var desc = Object.getOwnPropertyDescriptor(m6, k6);
      if (!desc || ("get" in desc ? !m6.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m6[k6];
        } };
      }
      Object.defineProperty(o6, k22, desc);
    } : function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      o6[k22] = m6[k6];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o6, v5) {
      Object.defineProperty(o6, "default", { enumerable: true, value: v5 });
    } : function(o6, v5) {
      o6["default"] = v5;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k6 in mod)
          if (k6 !== "default" && Object.prototype.hasOwnProperty.call(mod, k6))
            __createBinding2(result, mod, k6);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var path = __importStar2(__require("path"));
    var os_1 = __require("os");
    var fs_1 = __require("fs");
    var process_1 = __require("process");
    var upgrade_string = "Please upgrade to node >=10.16.0, or use the provided browser implementation.";
    if ("napi" in process_1.versions) {
      const napi_version = parseInt(process_1.versions["napi"]);
      if (napi_version < 4) {
        throw new Error("The AWS CRT native implementation requires that NAPI version 4 be present. " + upgrade_string);
      }
    } else {
      throw new Error("The current runtime is not reporting an NAPI version. " + upgrade_string);
    }
    var binary_name = "aws-crt-nodejs";
    var platformDir = `${os_1.platform}-${os_1.arch}`;
    var source_root = path.resolve(__dirname, "..", "..");
    var dist = path.join(source_root, "dist");
    if ((0, fs_1.existsSync)(dist)) {
      source_root = dist;
    }
    var bin_path = path.resolve(source_root, "bin");
    var search_paths = [
      path.join(bin_path, platformDir, binary_name)
    ];
    var binding;
    for (const path2 of search_paths) {
      if ((0, fs_1.existsSync)(path2 + ".node")) {
        binding = __require(path2);
        break;
      }
    }
    if (binding == void 0) {
      throw new Error("AWS CRT binary not present in any of the following locations:\n	" + search_paths.join("\n	"));
    }
    exports.default = binding;
  }
});

// node_modules/aws-crt/dist/native/error.js
var require_error = __commonJS({
  "node_modules/aws-crt/dist/native/error.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CrtError = void 0;
    var binding_1 = __importDefault2(require_binding());
    var CrtError = class extends Error {
      constructor(error) {
        super(extract_message(error));
        this.error = error;
        this.error_code = extract_code(error);
        this.error_name = extract_name(error);
      }
    };
    __name(CrtError, "CrtError");
    exports.CrtError = CrtError;
    function extract_message(error) {
      if (typeof error === "number") {
        return binding_1.default.error_code_to_string(error);
      } else if (error instanceof CrtError) {
        return error.message;
      }
      return error.toString();
    }
    __name(extract_message, "extract_message");
    function extract_code(error) {
      if (typeof error === "number") {
        return error;
      } else if (error instanceof CrtError) {
        return error.error_code;
      }
      return void 0;
    }
    __name(extract_code, "extract_code");
    function extract_name(error) {
      if (typeof error === "number") {
        return binding_1.default.error_code_to_name(error);
      } else if (error instanceof CrtError) {
        return error.error_name;
      }
      return void 0;
    }
    __name(extract_name, "extract_name");
  }
});

// node_modules/aws-crt/dist/native/native_resource.js
var require_native_resource = __commonJS({
  "node_modules/aws-crt/dist/native/native_resource.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NativeResourceMixin = exports.NativeResource = void 0;
    var NativeResource = class {
      constructor(handle) {
        this.handle = handle;
      }
      native_handle() {
        return this.handle;
      }
    };
    __name(NativeResource, "NativeResource");
    exports.NativeResource = NativeResource;
    function NativeResourceMixin(Base) {
      return class extends Base {
        constructor(...args) {
          const handle = args.shift();
          super(...args);
          this._handle = handle;
        }
        _super(handle) {
          this._handle = handle;
        }
        native_handle() {
          return this._handle;
        }
      };
    }
    __name(NativeResourceMixin, "NativeResourceMixin");
    exports.NativeResourceMixin = NativeResourceMixin;
  }
});

// node_modules/aws-crt/dist/common/io.js
var require_io = __commonJS({
  "node_modules/aws-crt/dist/common/io.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SocketDomain = exports.SocketType = exports.TlsVersion = void 0;
    var TlsVersion;
    (function(TlsVersion2) {
      TlsVersion2[TlsVersion2["SSLv3"] = 0] = "SSLv3";
      TlsVersion2[TlsVersion2["TLSv1"] = 1] = "TLSv1";
      TlsVersion2[TlsVersion2["TLSv1_1"] = 2] = "TLSv1_1";
      TlsVersion2[TlsVersion2["TLSv1_2"] = 3] = "TLSv1_2";
      TlsVersion2[TlsVersion2["TLSv1_3"] = 4] = "TLSv1_3";
      TlsVersion2[TlsVersion2["Default"] = 128] = "Default";
    })(TlsVersion = exports.TlsVersion || (exports.TlsVersion = {}));
    var SocketType;
    (function(SocketType2) {
      SocketType2[SocketType2["STREAM"] = 0] = "STREAM";
      SocketType2[SocketType2["DGRAM"] = 1] = "DGRAM";
    })(SocketType = exports.SocketType || (exports.SocketType = {}));
    var SocketDomain;
    (function(SocketDomain2) {
      SocketDomain2[SocketDomain2["IPV4"] = 0] = "IPV4";
      SocketDomain2[SocketDomain2["IPV6"] = 1] = "IPV6";
      SocketDomain2[SocketDomain2["LOCAL"] = 2] = "LOCAL";
    })(SocketDomain = exports.SocketDomain || (exports.SocketDomain = {}));
  }
});

// node_modules/aws-crt/dist/native/io.js
var require_io2 = __commonJS({
  "node_modules/aws-crt/dist/native/io.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pkcs11Lib = exports.TlsConnectionOptions = exports.ServerTlsContext = exports.ClientTlsContext = exports.TlsContext = exports.TlsContextOptions = exports.SocketOptions = exports.ClientBootstrap = exports.InputStream = exports.is_alpn_available = exports.enable_logging = exports.LogLevel = exports.error_code_to_name = exports.error_code_to_string = exports.SocketDomain = exports.SocketType = exports.TlsVersion = void 0;
    var binding_1 = __importDefault2(require_binding());
    var native_resource_1 = require_native_resource();
    var io_1 = require_io();
    var io_2 = require_io();
    Object.defineProperty(exports, "TlsVersion", { enumerable: true, get: function() {
      return io_2.TlsVersion;
    } });
    Object.defineProperty(exports, "SocketType", { enumerable: true, get: function() {
      return io_2.SocketType;
    } });
    Object.defineProperty(exports, "SocketDomain", { enumerable: true, get: function() {
      return io_2.SocketDomain;
    } });
    var error_1 = require_error();
    function error_code_to_string(error_code) {
      return binding_1.default.error_code_to_string(error_code);
    }
    __name(error_code_to_string, "error_code_to_string");
    exports.error_code_to_string = error_code_to_string;
    function error_code_to_name(error_code) {
      return binding_1.default.error_code_to_name(error_code);
    }
    __name(error_code_to_name, "error_code_to_name");
    exports.error_code_to_name = error_code_to_name;
    var LogLevel;
    (function(LogLevel2) {
      LogLevel2[LogLevel2["NONE"] = 0] = "NONE";
      LogLevel2[LogLevel2["FATAL"] = 1] = "FATAL";
      LogLevel2[LogLevel2["ERROR"] = 2] = "ERROR";
      LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
      LogLevel2[LogLevel2["INFO"] = 4] = "INFO";
      LogLevel2[LogLevel2["DEBUG"] = 5] = "DEBUG";
      LogLevel2[LogLevel2["TRACE"] = 6] = "TRACE";
    })(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
    function enable_logging(level) {
      binding_1.default.io_logging_enable(level);
    }
    __name(enable_logging, "enable_logging");
    exports.enable_logging = enable_logging;
    function is_alpn_available() {
      return binding_1.default.is_alpn_available();
    }
    __name(is_alpn_available, "is_alpn_available");
    exports.is_alpn_available = is_alpn_available;
    var InputStream = class extends native_resource_1.NativeResource {
      constructor(source) {
        super(binding_1.default.io_input_stream_new(16 * 1024));
        this.source = source;
        this.source.on("data", (data) => {
          data = Buffer.isBuffer(data) ? data : Buffer.from(data.toString());
          binding_1.default.io_input_stream_append(this.native_handle(), data);
        });
        this.source.on("end", () => {
          binding_1.default.io_input_stream_append(this.native_handle(), void 0);
        });
      }
    };
    __name(InputStream, "InputStream");
    exports.InputStream = InputStream;
    var ClientBootstrap = class extends native_resource_1.NativeResource {
      constructor() {
        super(binding_1.default.io_client_bootstrap_new());
      }
    };
    __name(ClientBootstrap, "ClientBootstrap");
    exports.ClientBootstrap = ClientBootstrap;
    var SocketOptions = class extends native_resource_1.NativeResource {
      constructor(type = io_1.SocketType.STREAM, domain = io_1.SocketDomain.IPV6, connect_timeout_ms = 5e3, keepalive = false, keep_alive_interval_sec = 0, keep_alive_timeout_sec = 0, keep_alive_max_failed_probes = 0) {
        super(binding_1.default.io_socket_options_new(type, domain, connect_timeout_ms, keep_alive_interval_sec, keep_alive_timeout_sec, keep_alive_max_failed_probes, keepalive));
      }
    };
    __name(SocketOptions, "SocketOptions");
    exports.SocketOptions = SocketOptions;
    var TlsContextOptions = class {
      constructor() {
        this.min_tls_version = io_1.TlsVersion.Default;
        this.alpn_list = [];
        this.verify_peer = true;
      }
      override_default_trust_store_from_path(ca_dirpath, ca_filepath) {
        this.ca_dirpath = ca_dirpath;
        this.ca_filepath = ca_filepath;
      }
      override_default_trust_store(certificate_authority) {
        this.certificate_authority = certificate_authority;
      }
      static create_client_with_mtls(certificate, private_key) {
        let opt = new TlsContextOptions();
        opt.certificate = certificate;
        opt.private_key = private_key;
        opt.verify_peer = true;
        return opt;
      }
      static create_client_with_mtls_from_path(certificate_filepath, private_key_filepath) {
        let opt = new TlsContextOptions();
        opt.certificate_filepath = certificate_filepath;
        opt.private_key_filepath = private_key_filepath;
        opt.verify_peer = true;
        return opt;
      }
      static create_client_with_mtls_pkcs12_from_path(pkcs12_filepath, pkcs12_password) {
        let opt = new TlsContextOptions();
        opt.pkcs12_filepath = pkcs12_filepath;
        opt.pkcs12_password = pkcs12_password;
        opt.verify_peer = true;
        return opt;
      }
      static create_client_with_mtls_pkcs_from_path(pkcs12_filepath, pkcs12_password) {
        return this.create_client_with_mtls_pkcs12_from_path(pkcs12_filepath, pkcs12_password);
      }
      static create_client_with_mtls_pkcs11(options) {
        let opt = new TlsContextOptions();
        opt.pkcs11_options = options;
        opt.verify_peer = true;
        return opt;
      }
      static create_client_with_mtls_windows_cert_store_path(certificate_path) {
        let opt = new TlsContextOptions();
        opt.windows_cert_store_path = certificate_path;
        opt.verify_peer = true;
        return opt;
      }
      static create_server_with_mtls_from_path(certificate_filepath, private_key_filepath) {
        let opt = new TlsContextOptions();
        opt.certificate_filepath = certificate_filepath;
        opt.private_key_filepath = private_key_filepath;
        opt.verify_peer = false;
        return opt;
      }
      static create_server_with_mtls_pkcs_from_path(pkcs12_filepath, pkcs12_password) {
        let opt = new TlsContextOptions();
        opt.pkcs12_filepath = pkcs12_filepath;
        opt.pkcs12_password = pkcs12_password;
        opt.verify_peer = false;
        return opt;
      }
    };
    __name(TlsContextOptions, "TlsContextOptions");
    exports.TlsContextOptions = TlsContextOptions;
    var TlsContext = class extends native_resource_1.NativeResource {
      constructor(ctx_opt) {
        if (ctx_opt == null || ctx_opt == void 0) {
          throw new error_1.CrtError("TlsContext constructor: ctx_opt not defined");
        }
        super(binding_1.default.io_tls_ctx_new(ctx_opt.min_tls_version, ctx_opt.ca_filepath, ctx_opt.ca_dirpath, ctx_opt.certificate_authority, ctx_opt.alpn_list && ctx_opt.alpn_list.length > 0 ? ctx_opt.alpn_list.join(";") : void 0, ctx_opt.certificate_filepath, ctx_opt.certificate, ctx_opt.private_key_filepath, ctx_opt.private_key, ctx_opt.pkcs12_filepath, ctx_opt.pkcs12_password, ctx_opt.pkcs11_options, ctx_opt.windows_cert_store_path, ctx_opt.verify_peer));
      }
    };
    __name(TlsContext, "TlsContext");
    exports.TlsContext = TlsContext;
    var ClientTlsContext = class extends TlsContext {
      constructor(ctx_opt) {
        if (!ctx_opt) {
          ctx_opt = new TlsContextOptions();
          ctx_opt.verify_peer = true;
        }
        super(ctx_opt);
      }
    };
    __name(ClientTlsContext, "ClientTlsContext");
    exports.ClientTlsContext = ClientTlsContext;
    var ServerTlsContext = class extends TlsContext {
      constructor(ctx_opt) {
        if (!ctx_opt) {
          ctx_opt = new TlsContextOptions();
          ctx_opt.verify_peer = false;
        }
        super(ctx_opt);
      }
    };
    __name(ServerTlsContext, "ServerTlsContext");
    exports.ServerTlsContext = ServerTlsContext;
    var TlsConnectionOptions = class extends native_resource_1.NativeResource {
      constructor(tls_ctx, server_name, alpn_list = []) {
        if (tls_ctx == null || tls_ctx == void 0) {
          throw new error_1.CrtError("TlsConnectionOptions constructor: tls_ctx not defined");
        }
        super(binding_1.default.io_tls_connection_options_new(tls_ctx.native_handle(), server_name, alpn_list && alpn_list.length > 0 ? alpn_list.join(";") : void 0));
        this.tls_ctx = tls_ctx;
        this.server_name = server_name;
        this.alpn_list = alpn_list;
      }
    };
    __name(TlsConnectionOptions, "TlsConnectionOptions");
    exports.TlsConnectionOptions = TlsConnectionOptions;
    var Pkcs11Lib = class extends native_resource_1.NativeResource {
      constructor(path, behavior = Pkcs11Lib.InitializeFinalizeBehavior.DEFAULT) {
        super(binding_1.default.io_pkcs11_lib_new(path, behavior));
      }
      close() {
        binding_1.default.io_pkcs11_lib_close(this.native_handle());
      }
    };
    __name(Pkcs11Lib, "Pkcs11Lib");
    exports.Pkcs11Lib = Pkcs11Lib;
    (function(Pkcs11Lib2) {
      let InitializeFinalizeBehavior;
      (function(InitializeFinalizeBehavior2) {
        InitializeFinalizeBehavior2[InitializeFinalizeBehavior2["DEFAULT"] = 0] = "DEFAULT";
        InitializeFinalizeBehavior2[InitializeFinalizeBehavior2["OMIT"] = 1] = "OMIT";
        InitializeFinalizeBehavior2[InitializeFinalizeBehavior2["STRICT"] = 2] = "STRICT";
      })(InitializeFinalizeBehavior = Pkcs11Lib2.InitializeFinalizeBehavior || (Pkcs11Lib2.InitializeFinalizeBehavior = {}));
    })(Pkcs11Lib = exports.Pkcs11Lib || (exports.Pkcs11Lib = {}));
  }
});

// node_modules/aws-crt/dist/native/auth.js
var require_auth = __commonJS({
  "node_modules/aws-crt/dist/native/auth.js"(exports) {
    "use strict";
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e6) {
            reject(e6);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e6) {
            reject(e6);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.aws_verify_sigv4a_signing = exports.aws_sign_request = exports.AwsSignedBodyHeaderType = exports.AwsSignedBodyValue = exports.AwsSignatureType = exports.AwsSigningAlgorithm = exports.AwsCredentialsProvider = void 0;
    var binding_1 = __importDefault2(require_binding());
    var error_1 = require_error();
    var io_1 = require_io2();
    var AwsCredentialsProvider = class extends binding_1.default.AwsCredentialsProvider {
      static newDefault(bootstrap = void 0) {
        return super.newDefault(bootstrap != null ? bootstrap.native_handle() : null);
      }
      static newStatic(access_key, secret_key, session_token) {
        return super.newStatic(access_key, secret_key, session_token);
      }
      static newCognito(config) {
        if (config == null || config == void 0) {
          throw new error_1.CrtError("AwsCredentialsProvider newCognito: Cognito config not defined");
        }
        return super.newCognito(config, config.tlsContext != null ? config.tlsContext.native_handle() : new io_1.ClientTlsContext().native_handle(), config.bootstrap != null ? config.bootstrap.native_handle() : null, config.httpProxyOptions ? config.httpProxyOptions.create_native_handle() : null);
      }
      static newX509(config) {
        if (config == null || config == void 0) {
          throw new error_1.CrtError("AwsCredentialsProvider newX509: X509 config not defined");
        }
        return super.newX509(config, config.tlsContext.native_handle(), config.httpProxyOptions ? config.httpProxyOptions.create_native_handle() : null);
      }
    };
    __name(AwsCredentialsProvider, "AwsCredentialsProvider");
    exports.AwsCredentialsProvider = AwsCredentialsProvider;
    var AwsSigningAlgorithm;
    (function(AwsSigningAlgorithm2) {
      AwsSigningAlgorithm2[AwsSigningAlgorithm2["SigV4"] = 0] = "SigV4";
      AwsSigningAlgorithm2[AwsSigningAlgorithm2["SigV4Asymmetric"] = 1] = "SigV4Asymmetric";
    })(AwsSigningAlgorithm = exports.AwsSigningAlgorithm || (exports.AwsSigningAlgorithm = {}));
    var AwsSignatureType;
    (function(AwsSignatureType2) {
      AwsSignatureType2[AwsSignatureType2["HttpRequestViaHeaders"] = 0] = "HttpRequestViaHeaders";
      AwsSignatureType2[AwsSignatureType2["HttpRequestViaQueryParams"] = 1] = "HttpRequestViaQueryParams";
      AwsSignatureType2[AwsSignatureType2["HttpRequestChunk"] = 2] = "HttpRequestChunk";
      AwsSignatureType2[AwsSignatureType2["HttpRequestEvent"] = 3] = "HttpRequestEvent";
    })(AwsSignatureType = exports.AwsSignatureType || (exports.AwsSignatureType = {}));
    var AwsSignedBodyValue;
    (function(AwsSignedBodyValue2) {
      AwsSignedBodyValue2["EmptySha256"] = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      AwsSignedBodyValue2["UnsignedPayload"] = "UNSIGNED-PAYLOAD";
      AwsSignedBodyValue2["StreamingAws4HmacSha256Payload"] = "STREAMING-AWS4-HMAC-SHA256-PAYLOAD";
      AwsSignedBodyValue2["StreamingAws4HmacSha256Events"] = "STREAMING-AWS4-HMAC-SHA256-EVENTS";
    })(AwsSignedBodyValue = exports.AwsSignedBodyValue || (exports.AwsSignedBodyValue = {}));
    var AwsSignedBodyHeaderType;
    (function(AwsSignedBodyHeaderType2) {
      AwsSignedBodyHeaderType2[AwsSignedBodyHeaderType2["None"] = 0] = "None";
      AwsSignedBodyHeaderType2[AwsSignedBodyHeaderType2["XAmzContentSha256"] = 1] = "XAmzContentSha256";
    })(AwsSignedBodyHeaderType = exports.AwsSignedBodyHeaderType || (exports.AwsSignedBodyHeaderType = {}));
    function aws_sign_request(request2, config) {
      return __awaiter2(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          try {
            binding_1.default.aws_sign_request(request2, config, (error_code) => {
              if (error_code == 0) {
                resolve(request2);
              } else {
                reject(new error_1.CrtError(error_code));
              }
            });
          } catch (error) {
            reject(error);
          }
        });
      });
    }
    __name(aws_sign_request, "aws_sign_request");
    exports.aws_sign_request = aws_sign_request;
    function aws_verify_sigv4a_signing(request2, config, expected_canonical_request, signature, ecc_key_pub_x, ecc_key_pub_y) {
      return binding_1.default.aws_verify_sigv4a_signing(request2, config, expected_canonical_request, signature, ecc_key_pub_x, ecc_key_pub_y);
    }
    __name(aws_verify_sigv4a_signing, "aws_verify_sigv4a_signing");
    exports.aws_verify_sigv4a_signing = aws_verify_sigv4a_signing;
  }
});

// node_modules/aws-crt/dist/native/checksums.js
var require_checksums = __commonJS({
  "node_modules/aws-crt/dist/native/checksums.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.crc32c = exports.crc32 = void 0;
    var binding_1 = __importDefault2(require_binding());
    function crc32(data, previous) {
      return binding_1.default.checksums_crc32(data, previous);
    }
    __name(crc32, "crc32");
    exports.crc32 = crc32;
    function crc32c(data, previous) {
      return binding_1.default.checksums_crc32c(data, previous);
    }
    __name(crc32c, "crc32c");
    exports.crc32c = crc32c;
  }
});

// node_modules/aws-crt/dist/native/crt.js
var require_crt = __commonJS({
  "node_modules/aws-crt/dist/native/crt.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.native_memory_dump = exports.native_memory = void 0;
    var binding_1 = __importDefault2(require_binding());
    function native_memory() {
      return binding_1.default.native_memory();
    }
    __name(native_memory, "native_memory");
    exports.native_memory = native_memory;
    function native_memory_dump() {
      return binding_1.default.native_memory_dump();
    }
    __name(native_memory_dump, "native_memory_dump");
    exports.native_memory_dump = native_memory_dump;
  }
});

// node_modules/aws-crt/dist/native/crypto.js
var require_crypto = __commonJS({
  "node_modules/aws-crt/dist/native/crypto.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hmac_sha256 = exports.Sha256Hmac = exports.hash_sha1 = exports.Sha1Hash = exports.hash_sha256 = exports.Sha256Hash = exports.hash_md5 = exports.Md5Hash = void 0;
    var binding_1 = __importDefault2(require_binding());
    var native_resource_1 = require_native_resource();
    var Hash2 = class extends native_resource_1.NativeResource {
      update(data) {
        binding_1.default.hash_update(this.native_handle(), data);
      }
      finalize(truncate_to) {
        return binding_1.default.hash_digest(this.native_handle(), truncate_to);
      }
      constructor(hash_handle) {
        super(hash_handle);
      }
    };
    __name(Hash2, "Hash");
    var Md5Hash = class extends Hash2 {
      constructor() {
        super(binding_1.default.hash_md5_new());
      }
    };
    __name(Md5Hash, "Md5Hash");
    exports.Md5Hash = Md5Hash;
    function hash_md5(data, truncate_to) {
      return binding_1.default.hash_md5_compute(data, truncate_to);
    }
    __name(hash_md5, "hash_md5");
    exports.hash_md5 = hash_md5;
    var Sha256Hash = class extends Hash2 {
      constructor() {
        super(binding_1.default.hash_sha256_new());
      }
    };
    __name(Sha256Hash, "Sha256Hash");
    exports.Sha256Hash = Sha256Hash;
    function hash_sha256(data, truncate_to) {
      return binding_1.default.hash_sha256_compute(data, truncate_to);
    }
    __name(hash_sha256, "hash_sha256");
    exports.hash_sha256 = hash_sha256;
    var Sha1Hash = class extends Hash2 {
      constructor() {
        super(binding_1.default.hash_sha1_new());
      }
    };
    __name(Sha1Hash, "Sha1Hash");
    exports.Sha1Hash = Sha1Hash;
    function hash_sha1(data, truncate_to) {
      return binding_1.default.hash_sha1_compute(data, truncate_to);
    }
    __name(hash_sha1, "hash_sha1");
    exports.hash_sha1 = hash_sha1;
    var Hmac = class extends native_resource_1.NativeResource {
      update(data) {
        binding_1.default.hmac_update(this.native_handle(), data);
      }
      finalize(truncate_to) {
        return binding_1.default.hmac_digest(this.native_handle(), truncate_to);
      }
      constructor(hash_handle) {
        super(hash_handle);
      }
    };
    __name(Hmac, "Hmac");
    var Sha256Hmac = class extends Hmac {
      constructor(secret) {
        super(binding_1.default.hmac_sha256_new(secret));
      }
    };
    __name(Sha256Hmac, "Sha256Hmac");
    exports.Sha256Hmac = Sha256Hmac;
    function hmac_sha256(secret, data, truncate_to) {
      return binding_1.default.hmac_sha256_compute(secret, data, truncate_to);
    }
    __name(hmac_sha256, "hmac_sha256");
    exports.hmac_sha256 = hmac_sha256;
  }
});

// node_modules/aws-crt/dist/common/event.js
var require_event = __commonJS({
  "node_modules/aws-crt/dist/common/event.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BufferedEventEmitter = void 0;
    var events_1 = __require("events");
    var BufferedEvent = class {
      constructor(event2, args) {
        this.event = event2;
        this.args = args;
      }
    };
    __name(BufferedEvent, "BufferedEvent");
    var BufferedEventEmitter = class extends events_1.EventEmitter {
      constructor() {
        super();
        this.corked = false;
      }
      cork() {
        this.corked = true;
      }
      uncork() {
        this.corked = false;
        while (this.eventQueue) {
          const event2 = this.eventQueue;
          super.emit(event2.event, ...event2.args);
          this.eventQueue = this.eventQueue.next;
        }
      }
      emit(event2, ...args) {
        if (this.corked) {
          let last = this.lastQueuedEvent;
          this.lastQueuedEvent = new BufferedEvent(event2, args);
          if (last) {
            last.next = this.lastQueuedEvent;
          } else {
            this.eventQueue = this.lastQueuedEvent;
          }
          return this.listeners(event2).length > 0;
        }
        return super.emit(event2, ...args);
      }
    };
    __name(BufferedEventEmitter, "BufferedEventEmitter");
    exports.BufferedEventEmitter = BufferedEventEmitter;
  }
});

// node_modules/aws-crt/dist/native/eventstream_utils.js
var require_eventstream_utils = __commonJS({
  "node_modules/aws-crt/dist/native/eventstream_utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unmarshalInt64BigintFromBuffer = exports.marshalInt64BigintAsBuffer = exports.MIN_INT64 = exports.MAX_INT64 = exports.MIN_INT32 = exports.MAX_INT32 = exports.MIN_INT16 = exports.MAX_INT16 = exports.MIN_INT8 = exports.MAX_INT8 = void 0;
    var error_1 = require_error();
    exports.MAX_INT8 = 127;
    exports.MIN_INT8 = -128;
    exports.MAX_INT16 = 32767;
    exports.MIN_INT16 = -32768;
    exports.MAX_INT32 = 2147483647;
    exports.MIN_INT32 = -2147483648;
    exports.MAX_INT64 = BigInt("9223372036854775807");
    exports.MIN_INT64 = BigInt("-9223372036854775808");
    var MAX_UINT8_AS_BIGINT = BigInt("256");
    function marshalInt64BigintAsBuffer(value) {
      if (value < exports.MIN_INT64 || value > exports.MAX_INT64) {
        throw new error_1.CrtError("marshalInt64BigintAsBuffer expects a value that can fit in 8 bytes");
      }
      let buffer = new Uint8Array(8);
      if (value < 0) {
        value = -value - BigInt(1);
        for (let i6 = 0; i6 < 8; ++i6) {
          buffer[i6] = 255 - Number(value % MAX_UINT8_AS_BIGINT);
          value /= MAX_UINT8_AS_BIGINT;
        }
      } else {
        for (let i6 = 0; i6 < 8; ++i6) {
          buffer[i6] = Number(value % MAX_UINT8_AS_BIGINT);
          value /= MAX_UINT8_AS_BIGINT;
        }
      }
      return buffer;
    }
    __name(marshalInt64BigintAsBuffer, "marshalInt64BigintAsBuffer");
    exports.marshalInt64BigintAsBuffer = marshalInt64BigintAsBuffer;
    function unmarshalInt64BigintFromBuffer(buffer) {
      let value = BigInt(0);
      let byteView = new Uint8Array(buffer);
      if (byteView.length != 8) {
        throw new error_1.CrtError("unmarshalInt64BigintFromBuffer expects a byte buffer of length 8");
      }
      let shift = BigInt(1);
      let isNegative = (byteView[7] & 128) != 0;
      if (isNegative) {
        for (let i6 = 0; i6 < byteView.length; ++i6) {
          let byteValue = BigInt(255 - byteView[i6]);
          value += byteValue * shift;
          shift *= MAX_UINT8_AS_BIGINT;
        }
        value += BigInt(1);
        value = -value;
      } else {
        for (let i6 = 0; i6 < byteView.length; ++i6) {
          let byteValue = BigInt(byteView[i6]);
          value += byteValue * shift;
          shift *= MAX_UINT8_AS_BIGINT;
        }
      }
      return value;
    }
    __name(unmarshalInt64BigintFromBuffer, "unmarshalInt64BigintFromBuffer");
    exports.unmarshalInt64BigintFromBuffer = unmarshalInt64BigintFromBuffer;
  }
});

// node_modules/aws-crt/dist/native/eventstream.js
var require_eventstream = __commonJS({
  "node_modules/aws-crt/dist/native/eventstream.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      var desc = Object.getOwnPropertyDescriptor(m6, k6);
      if (!desc || ("get" in desc ? !m6.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m6[k6];
        } };
      }
      Object.defineProperty(o6, k22, desc);
    } : function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      o6[k22] = m6[k6];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o6, v5) {
      Object.defineProperty(o6, "default", { enumerable: true, value: v5 });
    } : function(o6, v5) {
      o6["default"] = v5;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k6 in mod)
          if (k6 !== "default" && Object.prototype.hasOwnProperty.call(mod, k6))
            __createBinding2(result, mod, k6);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e6) {
            reject(e6);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e6) {
            reject(e6);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClientStream = exports.ClientConnection = exports.MessageType = exports.MessageFlags = exports.Header = exports.HeaderType = void 0;
    var native_resource_1 = require_native_resource();
    var event_1 = require_event();
    var error_1 = require_error();
    var io = __importStar2(require_io2());
    var eventstream_utils = __importStar2(require_eventstream_utils());
    var promise = __importStar2(require_promise());
    var binding_1 = __importDefault2(require_binding());
    var HeaderType;
    (function(HeaderType2) {
      HeaderType2[HeaderType2["BooleanTrue"] = 0] = "BooleanTrue";
      HeaderType2[HeaderType2["BooleanFalse"] = 1] = "BooleanFalse";
      HeaderType2[HeaderType2["Byte"] = 2] = "Byte";
      HeaderType2[HeaderType2["Int16"] = 3] = "Int16";
      HeaderType2[HeaderType2["Int32"] = 4] = "Int32";
      HeaderType2[HeaderType2["Int64"] = 5] = "Int64";
      HeaderType2[HeaderType2["ByteBuffer"] = 6] = "ByteBuffer";
      HeaderType2[HeaderType2["String"] = 7] = "String";
      HeaderType2[HeaderType2["Timestamp"] = 8] = "Timestamp";
      HeaderType2[HeaderType2["UUID"] = 9] = "UUID";
    })(HeaderType = exports.HeaderType || (exports.HeaderType = {}));
    var AWS_MAXIMUM_EVENT_STREAM_HEADER_NAME_LENGTH = 127;
    var Header = class {
      constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
      }
      static validateHeaderName(name) {
        if (name.length == 0 || name.length > AWS_MAXIMUM_EVENT_STREAM_HEADER_NAME_LENGTH) {
          throw new error_1.CrtError(`Event stream header name (${name}) is not valid`);
        }
      }
      static newBoolean(name, value) {
        Header.validateHeaderName(name);
        if (value) {
          return new Header(name, HeaderType.BooleanTrue);
        } else {
          return new Header(name, HeaderType.BooleanFalse);
        }
      }
      static newByte(name, value) {
        Header.validateHeaderName(name);
        if (value >= eventstream_utils.MIN_INT8 && value <= eventstream_utils.MAX_INT8 && Number.isSafeInteger(value)) {
          return new Header(name, HeaderType.Byte, value);
        }
        throw new error_1.CrtError(`Illegal value for eventstream byte-valued header: ${value}`);
      }
      static newInt16(name, value) {
        Header.validateHeaderName(name);
        if (value >= eventstream_utils.MIN_INT16 && value <= eventstream_utils.MAX_INT16 && Number.isSafeInteger(value)) {
          return new Header(name, HeaderType.Int16, value);
        }
        throw new error_1.CrtError(`Illegal value for eventstream int16-valued header: ${value}`);
      }
      static newInt32(name, value) {
        Header.validateHeaderName(name);
        if (value >= eventstream_utils.MIN_INT32 && value <= eventstream_utils.MAX_INT32 && Number.isSafeInteger(value)) {
          return new Header(name, HeaderType.Int32, value);
        }
        throw new error_1.CrtError(`Illegal value for eventstream int32-valued header: ${value}`);
      }
      static newInt64FromNumber(name, value) {
        Header.validateHeaderName(name);
        if (Number.isSafeInteger(value)) {
          return new Header(name, HeaderType.Int64, eventstream_utils.marshalInt64BigintAsBuffer(BigInt(value)));
        }
        throw new error_1.CrtError(`Illegal value for eventstream int64-valued header: ${value}`);
      }
      static newInt64FromBigint(name, value) {
        Header.validateHeaderName(name);
        if (value >= eventstream_utils.MIN_INT64 && value <= eventstream_utils.MAX_INT64) {
          return new Header(name, HeaderType.Int64, eventstream_utils.marshalInt64BigintAsBuffer(value));
        }
        throw new error_1.CrtError(`Illegal value for eventstream int64-valued header: ${value}`);
      }
      static newByteBuffer(name, value) {
        Header.validateHeaderName(name);
        return new Header(name, HeaderType.ByteBuffer, value);
      }
      static newString(name, value) {
        Header.validateHeaderName(name);
        return new Header(name, HeaderType.String, value);
      }
      static newTimeStampFromSecondsSinceEpoch(name, secondsSinceEpoch) {
        Header.validateHeaderName(name);
        if (Number.isSafeInteger(secondsSinceEpoch) && secondsSinceEpoch >= 0) {
          return new Header(name, HeaderType.Timestamp, secondsSinceEpoch);
        }
        throw new error_1.CrtError(`Illegal value for eventstream timestamp-valued header: ${secondsSinceEpoch}`);
      }
      static newTimeStampFromDate(name, date) {
        Header.validateHeaderName(name);
        const secondsSinceEpoch = date.getTime();
        if (Number.isSafeInteger(secondsSinceEpoch)) {
          return new Header(name, HeaderType.Timestamp, secondsSinceEpoch);
        }
        throw new error_1.CrtError(`Illegal value for eventstream timestamp-valued header: ${date}`);
      }
      static newUUID(name, value) {
        Header.validateHeaderName(name);
        if (value.byteLength == 16) {
          return new Header(name, HeaderType.UUID, value);
        }
        throw new error_1.CrtError(`Illegal value for eventstream uuid-valued header: ${value}`);
      }
      toValue(type) {
        if (type != this.type) {
          throw new error_1.CrtError(`Header of type (${this.type}) cannot be converted to type (${type})`);
        }
        return this.value;
      }
      asBoolean() {
        switch (this.type) {
          case HeaderType.BooleanFalse:
            return false;
          case HeaderType.BooleanTrue:
            return true;
          default:
            throw new error_1.CrtError(`Header of type (${this.type}) cannot be converted to type (boolean)`);
        }
      }
      asByte() {
        return this.toValue(HeaderType.Byte);
      }
      asInt16() {
        return this.toValue(HeaderType.Int16);
      }
      asInt32() {
        return this.toValue(HeaderType.Int32);
      }
      asInt64() {
        return eventstream_utils.unmarshalInt64BigintFromBuffer(this.toValue(HeaderType.Int64));
      }
      asByteBuffer() {
        return this.toValue(HeaderType.ByteBuffer);
      }
      asString() {
        return this.toValue(HeaderType.String);
      }
      asTimestamp() {
        return this.toValue(HeaderType.Timestamp);
      }
      asUUID() {
        return this.toValue(HeaderType.UUID);
      }
    };
    __name(Header, "Header");
    exports.Header = Header;
    var MessageFlags;
    (function(MessageFlags2) {
      MessageFlags2[MessageFlags2["None"] = 0] = "None";
      MessageFlags2[MessageFlags2["ConnectionAccepted"] = 1] = "ConnectionAccepted";
      MessageFlags2[MessageFlags2["TerminateStream"] = 2] = "TerminateStream";
    })(MessageFlags = exports.MessageFlags || (exports.MessageFlags = {}));
    var MessageType;
    (function(MessageType2) {
      MessageType2[MessageType2["ApplicationMessage"] = 0] = "ApplicationMessage";
      MessageType2[MessageType2["ApplicationError"] = 1] = "ApplicationError";
      MessageType2[MessageType2["Ping"] = 2] = "Ping";
      MessageType2[MessageType2["PingResponse"] = 3] = "PingResponse";
      MessageType2[MessageType2["Connect"] = 4] = "Connect";
      MessageType2[MessageType2["ConnectAck"] = 5] = "ConnectAck";
      MessageType2[MessageType2["ProtocolError"] = 6] = "ProtocolError";
      MessageType2[MessageType2["InternalError"] = 7] = "InternalError";
    })(MessageType = exports.MessageType || (exports.MessageType = {}));
    function mapPodHeadersToJSHeaders(headers) {
      return Array.from(headers, (header) => {
        return new Header(header.name, header.type, header.value);
      });
    }
    __name(mapPodHeadersToJSHeaders, "mapPodHeadersToJSHeaders");
    function mapPodMessageToJSMessage(message) {
      let jsMessage = {
        type: message.type,
        flags: message.flags,
        payload: message.payload
      };
      if (message.headers) {
        jsMessage.headers = mapPodHeadersToJSHeaders(message.headers);
      }
      return jsMessage;
    }
    __name(mapPodMessageToJSMessage, "mapPodMessageToJSMessage");
    var ClientConnectionState;
    (function(ClientConnectionState2) {
      ClientConnectionState2[ClientConnectionState2["None"] = 0] = "None";
      ClientConnectionState2[ClientConnectionState2["Connecting"] = 1] = "Connecting";
      ClientConnectionState2[ClientConnectionState2["Connected"] = 2] = "Connected";
      ClientConnectionState2[ClientConnectionState2["Disconnected"] = 3] = "Disconnected";
      ClientConnectionState2[ClientConnectionState2["Closed"] = 4] = "Closed";
    })(ClientConnectionState || (ClientConnectionState = {}));
    var ClientConnection = class extends (0, native_resource_1.NativeResourceMixin)(event_1.BufferedEventEmitter) {
      constructor(config) {
        if (config === void 0) {
          throw new error_1.CrtError("Invalid configuration passed to eventstream ClientConnection constructor");
        }
        super();
        this.state = ClientConnectionState.None;
        this._super(binding_1.default.event_stream_client_connection_new(this, config, (connection, errorCode) => {
          ClientConnection._s_on_disconnect(connection, errorCode);
        }, (connection, message) => {
          ClientConnection._s_on_protocol_message(connection, message);
        }, config.socketOptions ? config.socketOptions.native_handle() : null, config.tlsCtx ? config.tlsCtx.native_handle() : null));
      }
      close() {
        if (this.state != ClientConnectionState.Closed) {
          this.state = ClientConnectionState.Closed;
          binding_1.default.event_stream_client_connection_close(this.native_handle());
        }
      }
      connect(options) {
        return __awaiter2(this, void 0, void 0, function* () {
          let cleanupCancelListener = void 0;
          let connectPromise = new Promise((resolve, reject) => {
            if (!options) {
              reject(new error_1.CrtError("Invalid options passed to event stream ClientConnection.connect"));
              return;
            }
            if (this.state != ClientConnectionState.None) {
              reject(new error_1.CrtError(`Event stream connection in a state (${this.state}) where connect() is not allowed.`));
              return;
            }
            this.state = ClientConnectionState.Connecting;
            if (options.cancelController) {
              let cancel = /* @__PURE__ */ __name(() => {
                reject(new error_1.CrtError(`Event stream connection connect() cancelled by external request.`));
                setImmediate(() => {
                  this.close();
                });
              }, "cancel");
              cleanupCancelListener = options.cancelController.addListener(cancel);
              if (!cleanupCancelListener) {
                return;
              }
            }
            function curriedPromiseCallback(connection, errorCode) {
              return ClientConnection._s_on_connection_setup(resolve, reject, connection, errorCode);
            }
            __name(curriedPromiseCallback, "curriedPromiseCallback");
            try {
              binding_1.default.event_stream_client_connection_connect(this.native_handle(), curriedPromiseCallback);
            } catch (e6) {
              this.state = ClientConnectionState.Disconnected;
              reject(e6);
            }
          });
          return promise.makeSelfCleaningPromise(connectPromise, cleanupCancelListener);
        });
      }
      sendProtocolMessage(options) {
        return __awaiter2(this, void 0, void 0, function* () {
          let cleanupCancelListener = void 0;
          let sendProtocolMessagePromise = new Promise((resolve, reject) => {
            try {
              let curriedPromiseCallback = function(errorCode) {
                return ClientConnection._s_on_connection_send_protocol_message_completion(resolve, reject, errorCode);
              };
              __name(curriedPromiseCallback, "curriedPromiseCallback");
              if (!options) {
                reject(new error_1.CrtError("Invalid options passed to event stream ClientConnection.sendProtocolMessage"));
                return;
              }
              if (!this.isConnected()) {
                reject(new error_1.CrtError(`Event stream connection in a state (${this.state}) where sending protocol messages is not allowed.`));
                return;
              }
              if (options.cancelController) {
                let cancel = /* @__PURE__ */ __name(() => {
                  reject(new error_1.CrtError(`Event stream connection sendProtocolMessage() cancelled by external request.`));
                  setImmediate(() => {
                    this.close();
                  });
                }, "cancel");
                cleanupCancelListener = options.cancelController.addListener(cancel);
                if (!cleanupCancelListener) {
                  return;
                }
              }
              binding_1.default.event_stream_client_connection_send_protocol_message(this.native_handle(), options, curriedPromiseCallback);
            } catch (e6) {
              reject(e6);
            }
          });
          return promise.makeSelfCleaningPromise(sendProtocolMessagePromise, cleanupCancelListener);
        });
      }
      isConnected() {
        return this.state == ClientConnectionState.Connected;
      }
      newStream() {
        if (!this.isConnected()) {
          throw new error_1.CrtError(`Event stream connection in a state (${this.state}) where creating new streams is forbidden.`);
        }
        return new ClientStream(this);
      }
      on(event2, listener) {
        super.on(event2, listener);
        return this;
      }
      static _s_on_connection_setup(resolve, reject, connection, errorCode) {
        if (errorCode == 0 && connection.state == ClientConnectionState.Connecting) {
          connection.state = ClientConnectionState.Connected;
          resolve();
        } else {
          if (connection.state != ClientConnectionState.Closed) {
            connection.state = ClientConnectionState.Disconnected;
          }
          reject(io.error_code_to_string(errorCode));
        }
      }
      static _s_on_disconnect(connection, errorCode) {
        if (connection.state != ClientConnectionState.Closed) {
          connection.state = ClientConnectionState.Disconnected;
        }
        process.nextTick(() => {
          connection.emit("disconnection", { errorCode });
        });
      }
      static _s_on_protocol_message(connection, message) {
        process.nextTick(() => {
          connection.emit("protocolMessage", { message: mapPodMessageToJSMessage(message) });
        });
      }
      static _s_on_connection_send_protocol_message_completion(resolve, reject, errorCode) {
        if (errorCode == 0) {
          resolve();
        } else {
          reject(io.error_code_to_string(errorCode));
        }
      }
    };
    __name(ClientConnection, "ClientConnection");
    exports.ClientConnection = ClientConnection;
    ClientConnection.DISCONNECTION = "disconnection";
    ClientConnection.PROTOCOL_MESSAGE = "protocolMessage";
    var ClientStreamState;
    (function(ClientStreamState2) {
      ClientStreamState2[ClientStreamState2["None"] = 0] = "None";
      ClientStreamState2[ClientStreamState2["Activating"] = 1] = "Activating";
      ClientStreamState2[ClientStreamState2["Activated"] = 2] = "Activated";
      ClientStreamState2[ClientStreamState2["Ended"] = 3] = "Ended";
      ClientStreamState2[ClientStreamState2["Closed"] = 4] = "Closed";
    })(ClientStreamState || (ClientStreamState = {}));
    var ClientStream = class extends (0, native_resource_1.NativeResourceMixin)(event_1.BufferedEventEmitter) {
      constructor(connection) {
        super();
        this._super(binding_1.default.event_stream_client_stream_new(this, connection.native_handle(), (stream) => {
          ClientStream._s_on_stream_ended(stream);
        }, (stream, message) => {
          ClientStream._s_on_stream_message(stream, message);
        }));
        this.state = ClientStreamState.None;
      }
      close() {
        if (this.state != ClientStreamState.Closed) {
          this.state = ClientStreamState.Closed;
          binding_1.default.event_stream_client_stream_close(this.native_handle());
        }
      }
      activate(options) {
        return __awaiter2(this, void 0, void 0, function* () {
          let cleanupCancelListener = void 0;
          let activatePromise = new Promise((resolve, reject) => {
            try {
              let curriedPromiseCallback = function(stream, errorCode) {
                return ClientStream._s_on_stream_activated(resolve, reject, stream, errorCode);
              };
              __name(curriedPromiseCallback, "curriedPromiseCallback");
              if (this.state != ClientStreamState.None) {
                reject(new error_1.CrtError(`Event stream in a state (${this.state}) where activation is not allowed.`));
                return;
              }
              if (options === void 0) {
                this.state = ClientStreamState.Ended;
                reject(new error_1.CrtError("Invalid options passed to ClientStream.activate"));
                return;
              }
              this.state = ClientStreamState.Activating;
              if (options.cancelController) {
                let cancel = /* @__PURE__ */ __name(() => {
                  reject(new error_1.CrtError(`Event stream activate() cancelled by external request.`));
                  setImmediate(() => {
                    this.close();
                  });
                }, "cancel");
                cleanupCancelListener = options.cancelController.addListener(cancel);
                if (!cleanupCancelListener) {
                  return;
                }
              }
              binding_1.default.event_stream_client_stream_activate(this.native_handle(), options, curriedPromiseCallback);
            } catch (e6) {
              this.state = ClientStreamState.Ended;
              reject(e6);
            }
          });
          return promise.makeSelfCleaningPromise(activatePromise, cleanupCancelListener);
        });
      }
      sendMessage(options) {
        return __awaiter2(this, void 0, void 0, function* () {
          let cleanupCancelListener = void 0;
          let sendMessagePromise = new Promise((resolve, reject) => {
            try {
              let curriedPromiseCallback = function(errorCode) {
                return ClientStream._s_on_stream_send_message_completion(resolve, reject, errorCode);
              };
              __name(curriedPromiseCallback, "curriedPromiseCallback");
              if (!options) {
                reject(new error_1.CrtError("Invalid options passed to ClientStream.sendMessage"));
                return;
              }
              if (this.state != ClientStreamState.Activated) {
                reject(new error_1.CrtError(`Event stream in a state (${this.state}) where sending messages is not allowed.`));
                return;
              }
              if (options.cancelController) {
                let cancel = /* @__PURE__ */ __name(() => {
                  reject(new error_1.CrtError(`Event stream sendMessage() cancelled by external request.`));
                  setImmediate(() => {
                    this.close();
                  });
                }, "cancel");
                cleanupCancelListener = options.cancelController.addListener(cancel);
                if (!cleanupCancelListener) {
                  return;
                }
              }
              binding_1.default.event_stream_client_stream_send_message(this.native_handle(), options, curriedPromiseCallback);
            } catch (e6) {
              reject(e6);
            }
          });
          return promise.makeSelfCleaningPromise(sendMessagePromise, cleanupCancelListener);
        });
      }
      isActive() {
        return this.state == ClientStreamState.Activated;
      }
      on(event2, listener) {
        super.on(event2, listener);
        return this;
      }
      static _s_on_stream_activated(resolve, reject, stream, errorCode) {
        if (errorCode == 0 && stream.state == ClientStreamState.Activating) {
          stream.state = ClientStreamState.Activated;
          resolve();
        } else {
          if (stream.state != ClientStreamState.Closed) {
            stream.state = ClientStreamState.Ended;
          }
          reject(io.error_code_to_string(errorCode));
        }
      }
      static _s_on_stream_send_message_completion(resolve, reject, errorCode) {
        if (errorCode == 0) {
          resolve();
        } else {
          reject(io.error_code_to_string(errorCode));
        }
      }
      static _s_on_stream_ended(stream) {
        process.nextTick(() => {
          stream.emit(ClientStream.ENDED, {});
        });
      }
      static _s_on_stream_message(stream, message) {
        process.nextTick(() => {
          stream.emit(ClientStream.MESSAGE, { message: mapPodMessageToJSMessage(message) });
        });
      }
    };
    __name(ClientStream, "ClientStream");
    exports.ClientStream = ClientStream;
    ClientStream.ENDED = "ended";
    ClientStream.MESSAGE = "message";
  }
});

// node_modules/aws-crt/dist/common/http.js
var require_http = __commonJS({
  "node_modules/aws-crt/dist/common/http.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommonHttpProxyOptions = exports.HttpProxyAuthenticationType = exports.HttpVersion = void 0;
    var HttpVersion;
    (function(HttpVersion2) {
      HttpVersion2[HttpVersion2["Unknown"] = 0] = "Unknown";
      HttpVersion2[HttpVersion2["Http1_0"] = 1] = "Http1_0";
      HttpVersion2[HttpVersion2["Http1_1"] = 2] = "Http1_1";
      HttpVersion2[HttpVersion2["Http2"] = 3] = "Http2";
    })(HttpVersion = exports.HttpVersion || (exports.HttpVersion = {}));
    var HttpProxyAuthenticationType;
    (function(HttpProxyAuthenticationType2) {
      HttpProxyAuthenticationType2[HttpProxyAuthenticationType2["None"] = 0] = "None";
      HttpProxyAuthenticationType2[HttpProxyAuthenticationType2["Basic"] = 1] = "Basic";
    })(HttpProxyAuthenticationType = exports.HttpProxyAuthenticationType || (exports.HttpProxyAuthenticationType = {}));
    var CommonHttpProxyOptions = class {
      constructor(host_name, port, auth_method = HttpProxyAuthenticationType.None, auth_username, auth_password) {
        this.host_name = host_name;
        this.port = port;
        this.auth_method = auth_method;
        this.auth_username = auth_username;
        this.auth_password = auth_password;
      }
    };
    __name(CommonHttpProxyOptions, "CommonHttpProxyOptions");
    exports.CommonHttpProxyOptions = CommonHttpProxyOptions;
  }
});

// node_modules/aws-crt/dist/native/http.js
var require_http2 = __commonJS({
  "node_modules/aws-crt/dist/native/http.js"(exports) {
    "use strict";
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpClientConnectionManager = exports.HttpClientStream = exports.HttpStream = exports.HttpClientConnection = exports.HttpProxyOptions = exports.HttpProxyConnectionType = exports.HttpConnection = exports.HttpRequest = exports.HttpHeaders = exports.HttpProxyAuthenticationType = void 0;
    var binding_1 = __importDefault2(require_binding());
    var native_resource_1 = require_native_resource();
    var error_1 = require_error();
    var http_1 = require_http();
    var http_2 = require_http();
    Object.defineProperty(exports, "HttpProxyAuthenticationType", { enumerable: true, get: function() {
      return http_2.HttpProxyAuthenticationType;
    } });
    var event_1 = require_event();
    exports.HttpHeaders = binding_1.default.HttpHeaders;
    var nativeHttpRequest = binding_1.default.HttpRequest;
    var HttpRequest3 = class extends nativeHttpRequest {
      constructor(method, path, headers, body) {
        super(method, path, headers, body === null || body === void 0 ? void 0 : body.native_handle());
      }
    };
    __name(HttpRequest3, "HttpRequest");
    exports.HttpRequest = HttpRequest3;
    var HttpConnection = class extends (0, native_resource_1.NativeResourceMixin)(event_1.BufferedEventEmitter) {
      constructor(native_handle) {
        super();
        this._super(native_handle);
      }
      close() {
        binding_1.default.http_connection_close(this.native_handle());
      }
      on(event2, listener) {
        super.on(event2, listener);
        if (event2 == "connect") {
          process.nextTick(() => {
            this.uncork();
          });
        }
        return this;
      }
    };
    __name(HttpConnection, "HttpConnection");
    exports.HttpConnection = HttpConnection;
    HttpConnection.CONNECT = "connect";
    HttpConnection.ERROR = "error";
    HttpConnection.CLOSE = "close";
    var HttpProxyConnectionType;
    (function(HttpProxyConnectionType2) {
      HttpProxyConnectionType2[HttpProxyConnectionType2["Legacy"] = 0] = "Legacy";
      HttpProxyConnectionType2[HttpProxyConnectionType2["Forwarding"] = 1] = "Forwarding";
      HttpProxyConnectionType2[HttpProxyConnectionType2["Tunneling"] = 2] = "Tunneling";
    })(HttpProxyConnectionType = exports.HttpProxyConnectionType || (exports.HttpProxyConnectionType = {}));
    var HttpProxyOptions = class extends http_1.CommonHttpProxyOptions {
      constructor(host_name, port, auth_method = http_1.HttpProxyAuthenticationType.None, auth_username, auth_password, tls_opts, connection_type) {
        super(host_name, port, auth_method, auth_username, auth_password);
        this.tls_opts = tls_opts;
        this.connection_type = connection_type;
      }
      create_native_handle() {
        return binding_1.default.http_proxy_options_new(this.host_name, this.port, this.auth_method, this.auth_username, this.auth_password, this.tls_opts ? this.tls_opts.native_handle() : void 0, this.connection_type ? this.connection_type : HttpProxyConnectionType.Legacy);
      }
    };
    __name(HttpProxyOptions, "HttpProxyOptions");
    exports.HttpProxyOptions = HttpProxyOptions;
    var HttpClientConnection = class extends HttpConnection {
      constructor(bootstrap, host_name, port, socket_options, tls_opts, proxy_options, handle) {
        if (socket_options == null || socket_options == void 0) {
          throw new error_1.CrtError("HttpClientConnection constructor: socket_options not defined");
        }
        super(handle ? handle : binding_1.default.http_connection_new(bootstrap != null ? bootstrap.native_handle() : null, (handle2, error_code) => {
          this._on_setup(handle2, error_code);
        }, (handle2, error_code) => {
          this._on_shutdown(handle2, error_code);
        }, host_name, port, socket_options.native_handle(), tls_opts ? tls_opts.native_handle() : void 0, proxy_options ? proxy_options.create_native_handle() : void 0));
        this.bootstrap = bootstrap;
        this.socket_options = socket_options;
        this.tls_opts = tls_opts;
      }
      _on_setup(native_handle, error_code) {
        if (error_code) {
          this.emit("error", new error_1.CrtError(error_code));
          return;
        }
        this.emit("connect");
      }
      _on_shutdown(native_handle, error_code) {
        if (error_code) {
          this.emit("error", new error_1.CrtError(error_code));
          return;
        }
        this.emit("close");
      }
      request(request2) {
        let stream;
        const on_response_impl = /* @__PURE__ */ __name((status_code, headers) => {
          stream._on_response(status_code, headers);
        }, "on_response_impl");
        const on_body_impl = /* @__PURE__ */ __name((data) => {
          stream._on_body(data);
        }, "on_body_impl");
        const on_complete_impl = /* @__PURE__ */ __name((error_code) => {
          stream._on_complete(error_code);
        }, "on_complete_impl");
        const native_handle = binding_1.default.http_stream_new(this.native_handle(), request2, on_complete_impl, on_response_impl, on_body_impl);
        return stream = new HttpClientStream(native_handle, this, request2);
      }
    };
    __name(HttpClientConnection, "HttpClientConnection");
    exports.HttpClientConnection = HttpClientConnection;
    var HttpStream = class extends (0, native_resource_1.NativeResourceMixin)(event_1.BufferedEventEmitter) {
      constructor(native_handle, connection) {
        super();
        this.connection = connection;
        this._super(native_handle);
        this.cork();
      }
      activate() {
        binding_1.default.http_stream_activate(this.native_handle());
      }
      close() {
        binding_1.default.http_stream_close(this.native_handle());
      }
      _on_body(data) {
        this.emit("data", data);
      }
      _on_complete(error_code) {
        if (error_code) {
          this.emit("error", new error_1.CrtError(error_code));
          this.close();
          return;
        }
        this.on("end", () => {
          this.close();
        });
        this.emit("end");
      }
    };
    __name(HttpStream, "HttpStream");
    exports.HttpStream = HttpStream;
    var HttpClientStream = class extends HttpStream {
      constructor(native_handle, connection, request2) {
        super(native_handle, connection);
        this.request = request2;
      }
      status_code() {
        return this.response_status_code;
      }
      on(event2, listener) {
        super.on(event2, listener);
        if (event2 == "response") {
          process.nextTick(() => {
            this.uncork();
          });
        }
        return this;
      }
      _on_response(status_code, header_array) {
        this.response_status_code = status_code;
        let headers = new exports.HttpHeaders(header_array);
        this.emit("response", status_code, headers);
      }
    };
    __name(HttpClientStream, "HttpClientStream");
    exports.HttpClientStream = HttpClientStream;
    HttpClientStream.RESPONSE = "response";
    HttpClientStream.DATA = "data";
    HttpClientStream.ERROR = "error";
    HttpClientStream.END = "end";
    HttpClientStream.HEADERS = "headers";
    var HttpClientConnectionManager = class extends native_resource_1.NativeResource {
      constructor(bootstrap, host, port, max_connections, initial_window_size, socket_options, tls_opts, proxy_options) {
        if (socket_options == null || socket_options == void 0) {
          throw new error_1.CrtError("HttpClientConnectionManager constructor: socket_options not defined");
        }
        super(binding_1.default.http_connection_manager_new(bootstrap != null ? bootstrap.native_handle() : null, host, port, max_connections, initial_window_size, socket_options.native_handle(), tls_opts ? tls_opts.native_handle() : void 0, proxy_options ? proxy_options.create_native_handle() : void 0, void 0));
        this.bootstrap = bootstrap;
        this.host = host;
        this.port = port;
        this.max_connections = max_connections;
        this.initial_window_size = initial_window_size;
        this.socket_options = socket_options;
        this.tls_opts = tls_opts;
        this.proxy_options = proxy_options;
        this.connections = /* @__PURE__ */ new Map();
      }
      acquire() {
        return new Promise((resolve, reject) => {
          const on_acquired = /* @__PURE__ */ __name((handle, error_code) => {
            if (error_code) {
              reject(new error_1.CrtError(error_code));
              return;
            }
            let connection = this.connections.get(handle);
            if (!connection) {
              connection = new HttpClientConnection(this.bootstrap, this.host, this.port, this.socket_options, this.tls_opts, this.proxy_options, handle);
              this.connections.set(handle, connection);
              connection.on("close", () => {
                this.connections.delete(handle);
              });
            }
            resolve(connection);
          }, "on_acquired");
          binding_1.default.http_connection_manager_acquire(this.native_handle(), on_acquired);
        });
      }
      release(connection) {
        if (connection == null || connection == void 0) {
          throw new error_1.CrtError("HttpClientConnectionManager release: connection not defined");
        }
        binding_1.default.http_connection_manager_release(this.native_handle(), connection.native_handle());
      }
      close() {
        binding_1.default.http_connection_manager_close(this.native_handle());
      }
    };
    __name(HttpClientConnectionManager, "HttpClientConnectionManager");
    exports.HttpClientConnectionManager = HttpClientConnectionManager;
  }
});

// node_modules/aws-crt/dist/common/mqtt.js
var require_mqtt = __commonJS({
  "node_modules/aws-crt/dist/common/mqtt.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_RECONNECT_MIN_SEC = exports.DEFAULT_RECONNECT_MAX_SEC = exports.MqttWill = exports.QoS = void 0;
    var QoS;
    (function(QoS2) {
      QoS2[QoS2["AtMostOnce"] = 0] = "AtMostOnce";
      QoS2[QoS2["AtLeastOnce"] = 1] = "AtLeastOnce";
      QoS2[QoS2["ExactlyOnce"] = 2] = "ExactlyOnce";
    })(QoS = exports.QoS || (exports.QoS = {}));
    var MqttWill = class {
      constructor(topic, qos, payload, retain = false) {
        this.topic = topic;
        this.qos = qos;
        this.payload = payload;
        this.retain = retain;
      }
    };
    __name(MqttWill, "MqttWill");
    exports.MqttWill = MqttWill;
    exports.DEFAULT_RECONNECT_MAX_SEC = 128;
    exports.DEFAULT_RECONNECT_MIN_SEC = 1;
  }
});

// node_modules/aws-crt/dist/common/aws_iot_shared.js
var require_aws_iot_shared = __commonJS({
  "node_modules/aws-crt/dist/common/aws_iot_shared.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      var desc = Object.getOwnPropertyDescriptor(m6, k6);
      if (!desc || ("get" in desc ? !m6.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m6[k6];
        } };
      }
      Object.defineProperty(o6, k22, desc);
    } : function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      o6[k22] = m6[k6];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o6, v5) {
      Object.defineProperty(o6, "default", { enumerable: true, value: v5 });
    } : function(o6, v5) {
      o6["default"] = v5;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k6 in mod)
          if (k6 !== "default" && Object.prototype.hasOwnProperty.call(mod, k6))
            __createBinding2(result, mod, k6);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extractRegionFromEndpoint = exports.buildMqtt5FinalUsername = exports.populate_username_string_with_custom_authorizer = exports.is_string_and_not_empty = exports.add_to_username_parameter = void 0;
    var platform2 = __importStar2(require_platform());
    function add_to_username_parameter(current_username, parameter_value, parameter_pre_text) {
      let return_string = current_username;
      if (return_string.indexOf("?") != -1) {
        return_string += "&";
      } else {
        return_string += "?";
      }
      if (parameter_value.indexOf(parameter_pre_text) != -1) {
        return return_string + parameter_value;
      } else {
        return return_string + parameter_pre_text + parameter_value;
      }
    }
    __name(add_to_username_parameter, "add_to_username_parameter");
    exports.add_to_username_parameter = add_to_username_parameter;
    function is_string_and_not_empty(item) {
      return item != void 0 && typeof item == "string" && item != "";
    }
    __name(is_string_and_not_empty, "is_string_and_not_empty");
    exports.is_string_and_not_empty = is_string_and_not_empty;
    function populate_username_string_with_custom_authorizer(current_username, input_username, input_authorizer, input_signature, input_builder_username, input_token_key_name, input_token_value) {
      let username_string = "";
      if (current_username) {
        username_string += current_username;
      }
      if (is_string_and_not_empty(input_username) == false) {
        if (is_string_and_not_empty(input_builder_username) && input_builder_username) {
          username_string += input_builder_username;
        }
      } else {
        username_string += input_username;
      }
      if (is_string_and_not_empty(input_authorizer) && input_authorizer) {
        username_string = add_to_username_parameter(username_string, input_authorizer, "x-amz-customauthorizer-name=");
      }
      if (is_string_and_not_empty(input_signature) && input_signature) {
        username_string = add_to_username_parameter(username_string, input_signature, "x-amz-customauthorizer-signature=");
        if (is_string_and_not_empty(input_token_key_name) && input_token_key_name || is_string_and_not_empty(input_token_value) && input_token_value) {
          console.log("Warning: Signed custom authorizers with signature will not work without a token key name and token value. Your connection may be rejected/stalled on the IoT Core side due to this. Please set the token key name and token value to connect to a signed custom authorizer.");
        }
      }
      if (is_string_and_not_empty(input_signature) || is_string_and_not_empty(input_token_value) || is_string_and_not_empty(input_token_key_name)) {
        if (!input_token_value || !input_token_key_name) {
          throw new Error("Token-based custom authentication requires all token-related properties to be set");
        }
        username_string = add_to_username_parameter(username_string, input_token_value, input_token_key_name + "=");
      }
      return username_string;
    }
    __name(populate_username_string_with_custom_authorizer, "populate_username_string_with_custom_authorizer");
    exports.populate_username_string_with_custom_authorizer = populate_username_string_with_custom_authorizer;
    function addParam(paramName, paramValue, paramSet) {
      if (paramValue) {
        paramSet.push([paramName, paramValue]);
      }
    }
    __name(addParam, "addParam");
    function buildMqtt5FinalUsername(customAuthConfig) {
      let path = "";
      let paramList = [];
      if (customAuthConfig) {
        let usingSigning = false;
        if (customAuthConfig.tokenValue || customAuthConfig.tokenKeyName || customAuthConfig.tokenSignature) {
          usingSigning = true;
          if (!customAuthConfig.tokenValue || !customAuthConfig.tokenKeyName || !customAuthConfig.tokenSignature) {
            throw new Error("Token-based custom authentication requires all token-related properties to be set");
          }
        }
        let username = customAuthConfig.username;
        let pathSplit = (username !== null && username !== void 0 ? username : "").split("?");
        let params = pathSplit.slice(1);
        path = pathSplit[0];
        if (params.length > 1) {
          throw new Error("Custom auth username property value is invalid");
        } else if (params.length == 1) {
          params[0].split("&").forEach((keyValue, index, array) => {
            var _a;
            let kvPair = keyValue.split("=");
            paramList.push([kvPair[0], (_a = kvPair[1]) !== null && _a !== void 0 ? _a : ""]);
          });
        }
        addParam("x-amz-customauthorizer-name", customAuthConfig.authorizerName, paramList);
        if (usingSigning) {
          addParam(customAuthConfig.tokenKeyName, customAuthConfig.tokenValue, paramList);
          addParam("x-amz-customauthorizer-signature", customAuthConfig.tokenSignature, paramList);
        }
      }
      paramList.push(["SDK", "NodeJSv2"]);
      paramList.push(["Version", platform2.crt_version()]);
      return (path !== null && path !== void 0 ? path : "") + "?" + paramList.map((value) => `${value[0]}=${value[1]}`).join("&");
    }
    __name(buildMqtt5FinalUsername, "buildMqtt5FinalUsername");
    exports.buildMqtt5FinalUsername = buildMqtt5FinalUsername;
    function extractRegionFromEndpoint(endpoint) {
      const regexpRegion = /^[\w\-]+\.[\w\-]+\.([\w+\-]+)\./;
      const match = endpoint.match(regexpRegion);
      if (match) {
        return match[1];
      }
      throw new Error("AWS region could not be extracted from endpoint.  Use 'region' property on WebsocketConfig to set manually.");
    }
    __name(extractRegionFromEndpoint, "extractRegionFromEndpoint");
    exports.extractRegionFromEndpoint = extractRegionFromEndpoint;
  }
});

// node_modules/aws-crt/dist/native/aws_iot.js
var require_aws_iot = __commonJS({
  "node_modules/aws-crt/dist/native/aws_iot.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      var desc = Object.getOwnPropertyDescriptor(m6, k6);
      if (!desc || ("get" in desc ? !m6.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m6[k6];
        } };
      }
      Object.defineProperty(o6, k22, desc);
    } : function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      o6[k22] = m6[k6];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o6, v5) {
      Object.defineProperty(o6, "default", { enumerable: true, value: v5 });
    } : function(o6, v5) {
      o6["default"] = v5;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k6 in mod)
          if (k6 !== "default" && Object.prototype.hasOwnProperty.call(mod, k6))
            __createBinding2(result, mod, k6);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e6) {
            reject(e6);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e6) {
            reject(e6);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsIotMqttConnectionConfigBuilder = void 0;
    var mqtt_1 = require_mqtt();
    var io = __importStar2(require_io2());
    var io_1 = require_io2();
    var platform2 = __importStar2(require_platform());
    var error_1 = require_error();
    var auth_1 = require_auth();
    var iot_shared = __importStar2(require_aws_iot_shared());
    var AwsIotMqttConnectionConfigBuilder = class {
      constructor(tls_ctx_options) {
        this.tls_ctx_options = tls_ctx_options;
        this.params = {
          client_id: "",
          host_name: "",
          socket_options: new io.SocketOptions(),
          port: 8883,
          use_websocket: false,
          clean_session: false,
          keep_alive: void 0,
          will: void 0,
          username: "",
          password: void 0,
          tls_ctx: void 0,
          reconnect_min_sec: mqtt_1.DEFAULT_RECONNECT_MIN_SEC,
          reconnect_max_sec: mqtt_1.DEFAULT_RECONNECT_MAX_SEC
        };
        this.is_using_custom_authorizer = false;
      }
      static new_mtls_builder_from_path(cert_path, key_path) {
        let builder = new AwsIotMqttConnectionConfigBuilder(io_1.TlsContextOptions.create_client_with_mtls_from_path(cert_path, key_path));
        builder.params.port = 8883;
        if (io.is_alpn_available()) {
          builder.tls_ctx_options.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static new_mtls_builder(cert, private_key) {
        let builder = new AwsIotMqttConnectionConfigBuilder(io_1.TlsContextOptions.create_client_with_mtls(cert, private_key));
        builder.params.port = 8883;
        if (io.is_alpn_available()) {
          builder.tls_ctx_options.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static new_mtls_pkcs11_builder(pkcs11_options) {
        let builder = new AwsIotMqttConnectionConfigBuilder(io_1.TlsContextOptions.create_client_with_mtls_pkcs11(pkcs11_options));
        builder.params.port = 8883;
        if (io.is_alpn_available()) {
          builder.tls_ctx_options.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static new_mtls_pkcs12_builder(pkcs12_options) {
        let builder = new AwsIotMqttConnectionConfigBuilder(io_1.TlsContextOptions.create_client_with_mtls_pkcs12_from_path(pkcs12_options.pkcs12_file, pkcs12_options.pkcs12_password));
        builder.params.port = 8883;
        if (io.is_alpn_available()) {
          builder.tls_ctx_options.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static new_mtls_windows_cert_store_path_builder(certificate_path) {
        let builder = new AwsIotMqttConnectionConfigBuilder(io_1.TlsContextOptions.create_client_with_mtls_windows_cert_store_path(certificate_path));
        builder.params.port = 8883;
        if (io.is_alpn_available()) {
          builder.tls_ctx_options.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static new_default_builder() {
        let ctx_options = new io.TlsContextOptions();
        let builder = new AwsIotMqttConnectionConfigBuilder(ctx_options);
        return builder;
      }
      static new_websocket_builder(...args) {
        return this.new_with_websockets(...args);
      }
      static configure_websocket_handshake(builder, options) {
        if (options) {
          if (builder == null || builder == void 0) {
            throw new error_1.CrtError("AwsIotMqttConnectionConfigBuilder configure_websocket_handshake: builder not defined");
          }
          builder.params.websocket_handshake_transform = (request2, done) => __awaiter2(this, void 0, void 0, function* () {
            var _a, _b, _c;
            const signing_config = (_b = (_a = options.create_signing_config) === null || _a === void 0 ? void 0 : _a.call(options)) !== null && _b !== void 0 ? _b : {
              algorithm: auth_1.AwsSigningAlgorithm.SigV4,
              signature_type: auth_1.AwsSignatureType.HttpRequestViaQueryParams,
              provider: options.credentials_provider,
              region: options.region,
              service: (_c = options.service) !== null && _c !== void 0 ? _c : "iotdevicegateway",
              signed_body_value: auth_1.AwsSignedBodyValue.EmptySha256,
              omit_session_token: true
            };
            try {
              yield (0, auth_1.aws_sign_request)(request2, signing_config);
              done();
            } catch (error) {
              if (error instanceof error_1.CrtError) {
                done(error.error_code);
              } else {
                done(3);
              }
            }
          });
        }
        return builder;
      }
      static new_with_websockets(options) {
        let tls_ctx_options = options === null || options === void 0 ? void 0 : options.tls_ctx_options;
        if (!tls_ctx_options) {
          tls_ctx_options = new io_1.TlsContextOptions();
          tls_ctx_options.alpn_list = [];
        }
        let builder = new AwsIotMqttConnectionConfigBuilder(tls_ctx_options);
        builder.params.use_websocket = true;
        builder.params.proxy_options = options === null || options === void 0 ? void 0 : options.proxy_options;
        if (builder.tls_ctx_options) {
          builder.params.port = 443;
        }
        this.configure_websocket_handshake(builder, options);
        return builder;
      }
      static new_builder_for_websocket() {
        return this.new_with_websockets();
      }
      with_certificate_authority_from_path(ca_dirpath, ca_filepath) {
        this.tls_ctx_options.override_default_trust_store_from_path(ca_dirpath, ca_filepath);
        return this;
      }
      with_certificate_authority(ca) {
        this.tls_ctx_options.override_default_trust_store(ca);
        return this;
      }
      with_endpoint(endpoint) {
        this.params.host_name = endpoint;
        return this;
      }
      with_port(port) {
        this.params.port = port;
        return this;
      }
      with_client_id(client_id) {
        this.params.client_id = client_id;
        return this;
      }
      with_clean_session(clean_session) {
        this.params.clean_session = clean_session;
        return this;
      }
      with_keep_alive_seconds(keep_alive) {
        this.params.keep_alive = keep_alive;
        return this;
      }
      with_timeout_ms(timeout_ms) {
        this.with_ping_timeout_ms(timeout_ms);
        return this;
      }
      with_ping_timeout_ms(ping_timeout) {
        this.params.ping_timeout = ping_timeout;
        return this;
      }
      with_protocol_operation_timeout_ms(protocol_operation_timeout) {
        this.params.protocol_operation_timeout = protocol_operation_timeout;
        return this;
      }
      with_will(will) {
        this.params.will = will;
        return this;
      }
      with_socket_options(socket_options) {
        this.params.socket_options = socket_options;
        return this;
      }
      with_credentials(aws_region, aws_access_id, aws_secret_key, aws_sts_token) {
        return AwsIotMqttConnectionConfigBuilder.configure_websocket_handshake(this, {
          credentials_provider: auth_1.AwsCredentialsProvider.newStatic(aws_access_id, aws_secret_key, aws_sts_token),
          region: aws_region,
          service: "iotdevicegateway"
        });
      }
      with_http_proxy_options(proxy_options) {
        this.params.proxy_options = proxy_options;
        return this;
      }
      with_custom_authorizer(username, authorizer_name, authorizer_signature, password, token_key_name, token_value) {
        this.is_using_custom_authorizer = true;
        let username_string = iot_shared.populate_username_string_with_custom_authorizer("", username, authorizer_name, authorizer_signature, this.params.username, token_key_name, token_value);
        this.params.username = username_string;
        this.params.password = password;
        if (!this.params.use_websocket) {
          this.tls_ctx_options.alpn_list = ["mqtt"];
        }
        this.params.port = 443;
        return this;
      }
      with_username(username) {
        this.params.username = username;
        return this;
      }
      with_password(password) {
        this.params.password = password;
        return this;
      }
      with_reconnect_max_sec(max_sec) {
        this.params.reconnect_max_sec = max_sec;
        return this;
      }
      with_reconnect_min_sec(min_sec) {
        this.params.reconnect_min_sec = min_sec;
        return this;
      }
      build() {
        var _a, _b, _c;
        if (this.params.client_id === void 0 || this.params.host_name === void 0) {
          throw "client_id and endpoint are required";
        }
        if (this.is_using_custom_authorizer == false) {
          if (iot_shared.is_string_and_not_empty(this.params.username)) {
            if (((_a = this.params.username) === null || _a === void 0 ? void 0 : _a.indexOf("x-amz-customauthorizer-name=")) != -1 || ((_b = this.params.username) === null || _b === void 0 ? void 0 : _b.indexOf("x-amz-customauthorizer-signature=")) != -1) {
              this.is_using_custom_authorizer = true;
            }
          }
        }
        if (this.is_using_custom_authorizer == true) {
          if (this.params.port != 443) {
            console.log("Warning: Attempting to connect to authorizer with unsupported port. Port is not 443...");
          }
        }
        if (this.params.tls_ctx === void 0) {
          this.params.tls_ctx = new io.ClientTlsContext(this.tls_ctx_options);
        }
        if (iot_shared.is_string_and_not_empty(this.params.username) == false) {
          this.params.username = "?SDK=NodeJSv2&Version=";
        } else {
          if (((_c = this.params.username) === null || _c === void 0 ? void 0 : _c.indexOf("?")) != -1) {
            this.params.username += "&SDK=NodeJSv2&Version=";
          } else {
            this.params.username += "?SDK=NodeJSv2&Version=";
          }
        }
        this.params.username += platform2.crt_version();
        return this.params;
      }
    };
    __name(AwsIotMqttConnectionConfigBuilder, "AwsIotMqttConnectionConfigBuilder");
    exports.AwsIotMqttConnectionConfigBuilder = AwsIotMqttConnectionConfigBuilder;
  }
});

// node_modules/aws-crt/dist/common/mqtt_shared.js
var require_mqtt_shared = __commonJS({
  "node_modules/aws-crt/dist/common/mqtt_shared.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_KEEP_ALIVE = exports.normalize_payload = void 0;
    function normalize_payload(payload) {
      if (payload instanceof Buffer) {
        return payload;
      }
      if (typeof payload === "string") {
        return payload;
      }
      if (ArrayBuffer.isView(payload)) {
        const view = payload;
        return Buffer.from(view.buffer, view.byteOffset, view.byteLength);
      }
      if (payload instanceof ArrayBuffer) {
        return Buffer.from(payload);
      }
      if (typeof payload === "object") {
        return JSON.stringify(payload);
      }
      if (!payload) {
        return "";
      }
      throw new TypeError("payload parameter must be a string, object, or DataView.");
    }
    __name(normalize_payload, "normalize_payload");
    exports.normalize_payload = normalize_payload;
    exports.DEFAULT_KEEP_ALIVE = 1200;
  }
});

// node_modules/aws-crt/dist/common/mqtt5.js
var require_mqtt5 = __commonJS({
  "node_modules/aws-crt/dist/common/mqtt5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RetryJitterType = exports.ClientSessionBehavior = void 0;
    var ClientSessionBehavior;
    (function(ClientSessionBehavior2) {
      ClientSessionBehavior2[ClientSessionBehavior2["Default"] = 0] = "Default";
      ClientSessionBehavior2[ClientSessionBehavior2["Clean"] = 1] = "Clean";
      ClientSessionBehavior2[ClientSessionBehavior2["RejoinPostSuccess"] = 2] = "RejoinPostSuccess";
      ClientSessionBehavior2[ClientSessionBehavior2["RejoinAlways"] = 3] = "RejoinAlways";
    })(ClientSessionBehavior = exports.ClientSessionBehavior || (exports.ClientSessionBehavior = {}));
    var RetryJitterType;
    (function(RetryJitterType2) {
      RetryJitterType2[RetryJitterType2["Default"] = 0] = "Default";
      RetryJitterType2[RetryJitterType2["None"] = 1] = "None";
      RetryJitterType2[RetryJitterType2["Full"] = 2] = "Full";
      RetryJitterType2[RetryJitterType2["Decorrelated"] = 3] = "Decorrelated";
    })(RetryJitterType = exports.RetryJitterType || (exports.RetryJitterType = {}));
  }
});

// node_modules/aws-crt/dist/common/mqtt5_packet.js
var require_mqtt5_packet = __commonJS({
  "node_modules/aws-crt/dist/common/mqtt5_packet.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PacketType = exports.RetainHandlingType = exports.QoS = exports.PayloadFormatIndicator = exports.isSuccessfulPubackReasonCode = exports.PubackReasonCode = exports.isSuccessfulUnsubackReasonCode = exports.UnsubackReasonCode = exports.isSuccessfulSubackReasonCode = exports.SubackReasonCode = exports.isSuccessfulDisconnectReasonCode = exports.DisconnectReasonCode = exports.isSuccessfulConnectReasonCode = exports.ConnectReasonCode = void 0;
    var ConnectReasonCode;
    (function(ConnectReasonCode2) {
      ConnectReasonCode2[ConnectReasonCode2["Success"] = 0] = "Success";
      ConnectReasonCode2[ConnectReasonCode2["UnspecifiedError"] = 128] = "UnspecifiedError";
      ConnectReasonCode2[ConnectReasonCode2["MalformedPacket"] = 129] = "MalformedPacket";
      ConnectReasonCode2[ConnectReasonCode2["ProtocolError"] = 130] = "ProtocolError";
      ConnectReasonCode2[ConnectReasonCode2["ImplementationSpecificError"] = 131] = "ImplementationSpecificError";
      ConnectReasonCode2[ConnectReasonCode2["UnsupportedProtocolVersion"] = 132] = "UnsupportedProtocolVersion";
      ConnectReasonCode2[ConnectReasonCode2["ClientIdentifierNotValid"] = 133] = "ClientIdentifierNotValid";
      ConnectReasonCode2[ConnectReasonCode2["BadUsernameOrPassword"] = 134] = "BadUsernameOrPassword";
      ConnectReasonCode2[ConnectReasonCode2["NotAuthorized"] = 135] = "NotAuthorized";
      ConnectReasonCode2[ConnectReasonCode2["ServerUnavailable"] = 136] = "ServerUnavailable";
      ConnectReasonCode2[ConnectReasonCode2["ServerBusy"] = 137] = "ServerBusy";
      ConnectReasonCode2[ConnectReasonCode2["Banned"] = 138] = "Banned";
      ConnectReasonCode2[ConnectReasonCode2["BadAuthenticationMethod"] = 140] = "BadAuthenticationMethod";
      ConnectReasonCode2[ConnectReasonCode2["TopicNameInvalid"] = 144] = "TopicNameInvalid";
      ConnectReasonCode2[ConnectReasonCode2["PacketTooLarge"] = 149] = "PacketTooLarge";
      ConnectReasonCode2[ConnectReasonCode2["QuotaExceeded"] = 151] = "QuotaExceeded";
      ConnectReasonCode2[ConnectReasonCode2["PayloadFormatInvalid"] = 153] = "PayloadFormatInvalid";
      ConnectReasonCode2[ConnectReasonCode2["RetainNotSupported"] = 154] = "RetainNotSupported";
      ConnectReasonCode2[ConnectReasonCode2["QosNotSupported"] = 155] = "QosNotSupported";
      ConnectReasonCode2[ConnectReasonCode2["UseAnotherServer"] = 156] = "UseAnotherServer";
      ConnectReasonCode2[ConnectReasonCode2["ServerMoved"] = 157] = "ServerMoved";
      ConnectReasonCode2[ConnectReasonCode2["ConnectionRateExceeded"] = 159] = "ConnectionRateExceeded";
    })(ConnectReasonCode = exports.ConnectReasonCode || (exports.ConnectReasonCode = {}));
    function isSuccessfulConnectReasonCode(reasonCode) {
      return reasonCode < 128;
    }
    __name(isSuccessfulConnectReasonCode, "isSuccessfulConnectReasonCode");
    exports.isSuccessfulConnectReasonCode = isSuccessfulConnectReasonCode;
    var DisconnectReasonCode;
    (function(DisconnectReasonCode2) {
      DisconnectReasonCode2[DisconnectReasonCode2["NormalDisconnection"] = 0] = "NormalDisconnection";
      DisconnectReasonCode2[DisconnectReasonCode2["DisconnectWithWillMessage"] = 4] = "DisconnectWithWillMessage";
      DisconnectReasonCode2[DisconnectReasonCode2["UnspecifiedError"] = 128] = "UnspecifiedError";
      DisconnectReasonCode2[DisconnectReasonCode2["MalformedPacket"] = 129] = "MalformedPacket";
      DisconnectReasonCode2[DisconnectReasonCode2["ProtocolError"] = 130] = "ProtocolError";
      DisconnectReasonCode2[DisconnectReasonCode2["ImplementationSpecificError"] = 131] = "ImplementationSpecificError";
      DisconnectReasonCode2[DisconnectReasonCode2["NotAuthorized"] = 135] = "NotAuthorized";
      DisconnectReasonCode2[DisconnectReasonCode2["ServerBusy"] = 137] = "ServerBusy";
      DisconnectReasonCode2[DisconnectReasonCode2["ServerShuttingDown"] = 139] = "ServerShuttingDown";
      DisconnectReasonCode2[DisconnectReasonCode2["KeepAliveTimeout"] = 141] = "KeepAliveTimeout";
      DisconnectReasonCode2[DisconnectReasonCode2["SessionTakenOver"] = 142] = "SessionTakenOver";
      DisconnectReasonCode2[DisconnectReasonCode2["TopicFilterInvalid"] = 143] = "TopicFilterInvalid";
      DisconnectReasonCode2[DisconnectReasonCode2["TopicNameInvalid"] = 144] = "TopicNameInvalid";
      DisconnectReasonCode2[DisconnectReasonCode2["ReceiveMaximumExceeded"] = 147] = "ReceiveMaximumExceeded";
      DisconnectReasonCode2[DisconnectReasonCode2["TopicAliasInvalid"] = 148] = "TopicAliasInvalid";
      DisconnectReasonCode2[DisconnectReasonCode2["PacketTooLarge"] = 149] = "PacketTooLarge";
      DisconnectReasonCode2[DisconnectReasonCode2["MessageRateTooHigh"] = 150] = "MessageRateTooHigh";
      DisconnectReasonCode2[DisconnectReasonCode2["QuotaExceeded"] = 151] = "QuotaExceeded";
      DisconnectReasonCode2[DisconnectReasonCode2["AdministrativeAction"] = 152] = "AdministrativeAction";
      DisconnectReasonCode2[DisconnectReasonCode2["PayloadFormatInvalid"] = 153] = "PayloadFormatInvalid";
      DisconnectReasonCode2[DisconnectReasonCode2["RetainNotSupported"] = 154] = "RetainNotSupported";
      DisconnectReasonCode2[DisconnectReasonCode2["QosNotSupported"] = 155] = "QosNotSupported";
      DisconnectReasonCode2[DisconnectReasonCode2["UseAnotherServer"] = 156] = "UseAnotherServer";
      DisconnectReasonCode2[DisconnectReasonCode2["ServerMoved"] = 157] = "ServerMoved";
      DisconnectReasonCode2[DisconnectReasonCode2["SharedSubscriptionsNotSupported"] = 158] = "SharedSubscriptionsNotSupported";
      DisconnectReasonCode2[DisconnectReasonCode2["ConnectionRateExceeded"] = 159] = "ConnectionRateExceeded";
      DisconnectReasonCode2[DisconnectReasonCode2["MaximumConnectTime"] = 160] = "MaximumConnectTime";
      DisconnectReasonCode2[DisconnectReasonCode2["SubscriptionIdentifiersNotSupported"] = 161] = "SubscriptionIdentifiersNotSupported";
      DisconnectReasonCode2[DisconnectReasonCode2["WildcardSubscriptionsNotSupported"] = 162] = "WildcardSubscriptionsNotSupported";
    })(DisconnectReasonCode = exports.DisconnectReasonCode || (exports.DisconnectReasonCode = {}));
    function isSuccessfulDisconnectReasonCode(reasonCode) {
      return reasonCode < 128;
    }
    __name(isSuccessfulDisconnectReasonCode, "isSuccessfulDisconnectReasonCode");
    exports.isSuccessfulDisconnectReasonCode = isSuccessfulDisconnectReasonCode;
    var SubackReasonCode;
    (function(SubackReasonCode2) {
      SubackReasonCode2[SubackReasonCode2["GrantedQoS0"] = 0] = "GrantedQoS0";
      SubackReasonCode2[SubackReasonCode2["GrantedQoS1"] = 1] = "GrantedQoS1";
      SubackReasonCode2[SubackReasonCode2["GrantedQoS2"] = 2] = "GrantedQoS2";
      SubackReasonCode2[SubackReasonCode2["UnspecifiedError"] = 128] = "UnspecifiedError";
      SubackReasonCode2[SubackReasonCode2["ImplementationSpecificError"] = 131] = "ImplementationSpecificError";
      SubackReasonCode2[SubackReasonCode2["NotAuthorized"] = 135] = "NotAuthorized";
      SubackReasonCode2[SubackReasonCode2["TopicFilterInvalid"] = 143] = "TopicFilterInvalid";
      SubackReasonCode2[SubackReasonCode2["PacketIdentifierInUse"] = 145] = "PacketIdentifierInUse";
      SubackReasonCode2[SubackReasonCode2["QuotaExceeded"] = 151] = "QuotaExceeded";
      SubackReasonCode2[SubackReasonCode2["SharedSubscriptionsNotSupported"] = 158] = "SharedSubscriptionsNotSupported";
      SubackReasonCode2[SubackReasonCode2["SubscriptionIdentifiersNotSupported"] = 161] = "SubscriptionIdentifiersNotSupported";
      SubackReasonCode2[SubackReasonCode2["WildcardSubscriptionsNotSupported"] = 162] = "WildcardSubscriptionsNotSupported";
    })(SubackReasonCode = exports.SubackReasonCode || (exports.SubackReasonCode = {}));
    function isSuccessfulSubackReasonCode(reasonCode) {
      return reasonCode < 128;
    }
    __name(isSuccessfulSubackReasonCode, "isSuccessfulSubackReasonCode");
    exports.isSuccessfulSubackReasonCode = isSuccessfulSubackReasonCode;
    var UnsubackReasonCode;
    (function(UnsubackReasonCode2) {
      UnsubackReasonCode2[UnsubackReasonCode2["Success"] = 0] = "Success";
      UnsubackReasonCode2[UnsubackReasonCode2["NoSubscriptionExisted"] = 17] = "NoSubscriptionExisted";
      UnsubackReasonCode2[UnsubackReasonCode2["UnspecifiedError"] = 128] = "UnspecifiedError";
      UnsubackReasonCode2[UnsubackReasonCode2["ImplementationSpecificError"] = 131] = "ImplementationSpecificError";
      UnsubackReasonCode2[UnsubackReasonCode2["NotAuthorized"] = 135] = "NotAuthorized";
      UnsubackReasonCode2[UnsubackReasonCode2["TopicFilterInvalid"] = 143] = "TopicFilterInvalid";
      UnsubackReasonCode2[UnsubackReasonCode2["PacketIdentifierInUse"] = 145] = "PacketIdentifierInUse";
    })(UnsubackReasonCode = exports.UnsubackReasonCode || (exports.UnsubackReasonCode = {}));
    function isSuccessfulUnsubackReasonCode(reasonCode) {
      return reasonCode < 128;
    }
    __name(isSuccessfulUnsubackReasonCode, "isSuccessfulUnsubackReasonCode");
    exports.isSuccessfulUnsubackReasonCode = isSuccessfulUnsubackReasonCode;
    var PubackReasonCode;
    (function(PubackReasonCode2) {
      PubackReasonCode2[PubackReasonCode2["Success"] = 0] = "Success";
      PubackReasonCode2[PubackReasonCode2["NoMatchingSubscribers"] = 16] = "NoMatchingSubscribers";
      PubackReasonCode2[PubackReasonCode2["UnspecifiedError"] = 128] = "UnspecifiedError";
      PubackReasonCode2[PubackReasonCode2["ImplementationSpecificError"] = 131] = "ImplementationSpecificError";
      PubackReasonCode2[PubackReasonCode2["NotAuthorized"] = 135] = "NotAuthorized";
      PubackReasonCode2[PubackReasonCode2["TopicNameInvalid"] = 144] = "TopicNameInvalid";
      PubackReasonCode2[PubackReasonCode2["PacketIdentifierInUse"] = 145] = "PacketIdentifierInUse";
      PubackReasonCode2[PubackReasonCode2["QuotaExceeded"] = 151] = "QuotaExceeded";
      PubackReasonCode2[PubackReasonCode2["PayloadFormatInvalid"] = 153] = "PayloadFormatInvalid";
    })(PubackReasonCode = exports.PubackReasonCode || (exports.PubackReasonCode = {}));
    function isSuccessfulPubackReasonCode(reasonCode) {
      return reasonCode < 128;
    }
    __name(isSuccessfulPubackReasonCode, "isSuccessfulPubackReasonCode");
    exports.isSuccessfulPubackReasonCode = isSuccessfulPubackReasonCode;
    var PayloadFormatIndicator;
    (function(PayloadFormatIndicator2) {
      PayloadFormatIndicator2[PayloadFormatIndicator2["Bytes"] = 0] = "Bytes";
      PayloadFormatIndicator2[PayloadFormatIndicator2["Utf8"] = 1] = "Utf8";
    })(PayloadFormatIndicator = exports.PayloadFormatIndicator || (exports.PayloadFormatIndicator = {}));
    var QoS;
    (function(QoS2) {
      QoS2[QoS2["AtMostOnce"] = 0] = "AtMostOnce";
      QoS2[QoS2["AtLeastOnce"] = 1] = "AtLeastOnce";
      QoS2[QoS2["ExactlyOnce"] = 2] = "ExactlyOnce";
    })(QoS = exports.QoS || (exports.QoS = {}));
    var RetainHandlingType;
    (function(RetainHandlingType2) {
      RetainHandlingType2[RetainHandlingType2["SendOnSubscribe"] = 0] = "SendOnSubscribe";
      RetainHandlingType2[RetainHandlingType2["SendOnSubscribeIfNew"] = 1] = "SendOnSubscribeIfNew";
      RetainHandlingType2[RetainHandlingType2["DontSend"] = 2] = "DontSend";
    })(RetainHandlingType = exports.RetainHandlingType || (exports.RetainHandlingType = {}));
    var PacketType;
    (function(PacketType2) {
      PacketType2[PacketType2["Connect"] = 1] = "Connect";
      PacketType2[PacketType2["Connack"] = 2] = "Connack";
      PacketType2[PacketType2["Publish"] = 3] = "Publish";
      PacketType2[PacketType2["Puback"] = 4] = "Puback";
      PacketType2[PacketType2["Pubrec"] = 5] = "Pubrec";
      PacketType2[PacketType2["Pubrel"] = 6] = "Pubrel";
      PacketType2[PacketType2["Pubcomp"] = 7] = "Pubcomp";
      PacketType2[PacketType2["Subscribe"] = 8] = "Subscribe";
      PacketType2[PacketType2["Suback"] = 9] = "Suback";
      PacketType2[PacketType2["Unsubscribe"] = 10] = "Unsubscribe";
      PacketType2[PacketType2["Unsuback"] = 11] = "Unsuback";
      PacketType2[PacketType2["Pingreq"] = 12] = "Pingreq";
      PacketType2[PacketType2["Pingresp"] = 13] = "Pingresp";
      PacketType2[PacketType2["Disconnect"] = 14] = "Disconnect";
      PacketType2[PacketType2["Auth"] = 15] = "Auth";
    })(PacketType = exports.PacketType || (exports.PacketType = {}));
  }
});

// node_modules/aws-crt/dist/native/mqtt5.js
var require_mqtt52 = __commonJS({
  "node_modules/aws-crt/dist/native/mqtt5.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      var desc = Object.getOwnPropertyDescriptor(m6, k6);
      if (!desc || ("get" in desc ? !m6.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m6[k6];
        } };
      }
      Object.defineProperty(o6, k22, desc);
    } : function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      o6[k22] = m6[k6];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o6, v5) {
      Object.defineProperty(o6, "default", { enumerable: true, value: v5 });
    } : function(o6, v5) {
      o6["default"] = v5;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k6 in mod)
          if (k6 !== "default" && Object.prototype.hasOwnProperty.call(mod, k6))
            __createBinding2(result, mod, k6);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar2 = exports && exports.__exportStar || function(m6, exports2) {
      for (var p6 in m6)
        if (p6 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p6))
          __createBinding2(exports2, m6, p6);
    };
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e6) {
            reject(e6);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e6) {
            reject(e6);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mqtt5Client = exports.ClientExtendedValidationAndFlowControl = exports.ClientOperationQueueBehavior = exports.HttpProxyOptions = void 0;
    var binding_1 = __importDefault2(require_binding());
    var native_resource_1 = require_native_resource();
    var event_1 = require_event();
    var io = __importStar2(require_io2());
    var mqtt_shared = __importStar2(require_mqtt_shared());
    var error_1 = require_error();
    var http_1 = require_http2();
    Object.defineProperty(exports, "HttpProxyOptions", { enumerable: true, get: function() {
      return http_1.HttpProxyOptions;
    } });
    __exportStar2(require_mqtt5(), exports);
    __exportStar2(require_mqtt5_packet(), exports);
    var ClientOperationQueueBehavior;
    (function(ClientOperationQueueBehavior2) {
      ClientOperationQueueBehavior2[ClientOperationQueueBehavior2["Default"] = 0] = "Default";
      ClientOperationQueueBehavior2[ClientOperationQueueBehavior2["FailNonQos1PublishOnDisconnect"] = 1] = "FailNonQos1PublishOnDisconnect";
      ClientOperationQueueBehavior2[ClientOperationQueueBehavior2["FailQos0PublishOnDisconnect"] = 2] = "FailQos0PublishOnDisconnect";
      ClientOperationQueueBehavior2[ClientOperationQueueBehavior2["FailAllOnDisconnect"] = 3] = "FailAllOnDisconnect";
    })(ClientOperationQueueBehavior = exports.ClientOperationQueueBehavior || (exports.ClientOperationQueueBehavior = {}));
    var ClientExtendedValidationAndFlowControl;
    (function(ClientExtendedValidationAndFlowControl2) {
      ClientExtendedValidationAndFlowControl2[ClientExtendedValidationAndFlowControl2["None"] = 0] = "None";
      ClientExtendedValidationAndFlowControl2[ClientExtendedValidationAndFlowControl2["AwsIotCoreDefaults"] = 1] = "AwsIotCoreDefaults";
    })(ClientExtendedValidationAndFlowControl = exports.ClientExtendedValidationAndFlowControl || (exports.ClientExtendedValidationAndFlowControl = {}));
    var Mqtt5Client = class extends (0, native_resource_1.NativeResourceMixin)(event_1.BufferedEventEmitter) {
      constructor(config) {
        super();
        this._super(binding_1.default.mqtt5_client_new(this, config, (client2) => {
          Mqtt5Client._s_on_stopped(client2);
        }, (client2) => {
          Mqtt5Client._s_on_attempting_connect(client2);
        }, (client2, connack, settings) => {
          Mqtt5Client._s_on_connection_success(client2, connack, settings);
        }, (client2, errorCode, connack) => {
          Mqtt5Client._s_on_connection_failure(client2, new error_1.CrtError(errorCode), connack);
        }, (client2, errorCode, disconnect) => {
          Mqtt5Client._s_on_disconnection(client2, new error_1.CrtError(errorCode), disconnect);
        }, (client2, message) => {
          Mqtt5Client._s_on_message_received(client2, message);
        }, config.clientBootstrap ? config.clientBootstrap.native_handle() : null, config.socketOptions ? config.socketOptions.native_handle() : null, config.tlsCtx ? config.tlsCtx.native_handle() : null, config.httpProxyOptions ? config.httpProxyOptions.create_native_handle() : null));
      }
      close() {
        binding_1.default.mqtt5_client_close(this.native_handle());
      }
      start() {
        binding_1.default.mqtt5_client_start(this.native_handle());
      }
      stop(disconnectPacket) {
        binding_1.default.mqtt5_client_stop(this.native_handle(), disconnectPacket);
      }
      subscribe(packet) {
        return __awaiter2(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            function curriedPromiseCallback(client2, errorCode, suback) {
              return Mqtt5Client._s_on_suback_callback(resolve, reject, client2, errorCode, suback);
            }
            __name(curriedPromiseCallback, "curriedPromiseCallback");
            try {
              binding_1.default.mqtt5_client_subscribe(this.native_handle(), packet, curriedPromiseCallback);
            } catch (e6) {
              reject(e6);
            }
          });
        });
      }
      unsubscribe(packet) {
        return __awaiter2(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            function curriedPromiseCallback(client2, errorCode, unsuback) {
              return Mqtt5Client._s_on_unsuback_callback(resolve, reject, client2, errorCode, unsuback);
            }
            __name(curriedPromiseCallback, "curriedPromiseCallback");
            try {
              binding_1.default.mqtt5_client_unsubscribe(this.native_handle(), packet, curriedPromiseCallback);
            } catch (e6) {
              reject(e6);
            }
          });
        });
      }
      publish(packet) {
        return __awaiter2(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            if (packet && packet.payload) {
              packet.payload = mqtt_shared.normalize_payload(packet.payload);
            }
            function curriedPromiseCallback(client2, errorCode, result) {
              return Mqtt5Client._s_on_puback_callback(resolve, reject, client2, errorCode, result);
            }
            __name(curriedPromiseCallback, "curriedPromiseCallback");
            try {
              binding_1.default.mqtt5_client_publish(this.native_handle(), packet, curriedPromiseCallback);
            } catch (e6) {
              reject(e6);
            }
          });
        });
      }
      getQueueStatistics() {
        return binding_1.default.mqtt5_client_get_queue_statistics(this.native_handle());
      }
      on(event2, listener) {
        super.on(event2, listener);
        return this;
      }
      static _s_on_stopped(client2) {
        process.nextTick(() => {
          let stoppedEvent = {};
          client2.emit(Mqtt5Client.STOPPED, stoppedEvent);
        });
      }
      static _s_on_attempting_connect(client2) {
        process.nextTick(() => {
          let attemptingConnectEvent = {};
          client2.emit(Mqtt5Client.ATTEMPTING_CONNECT, attemptingConnectEvent);
        });
      }
      static _s_on_connection_success(client2, connack, settings) {
        let connectionSuccessEvent = {
          connack,
          settings
        };
        process.nextTick(() => {
          client2.emit(Mqtt5Client.CONNECTION_SUCCESS, connectionSuccessEvent);
        });
      }
      static _s_on_connection_failure(client2, error, connack) {
        let connectionFailureEvent = {
          error
        };
        if (connack !== null && connack !== void 0) {
          connectionFailureEvent.connack = connack;
        }
        process.nextTick(() => {
          client2.emit(Mqtt5Client.CONNECTION_FAILURE, connectionFailureEvent);
        });
      }
      static _s_on_disconnection(client2, error, disconnect) {
        let disconnectionEvent = {
          error
        };
        if (disconnect !== null && disconnect !== void 0) {
          disconnectionEvent.disconnect = disconnect;
        }
        process.nextTick(() => {
          client2.emit(Mqtt5Client.DISCONNECTION, disconnectionEvent);
        });
      }
      static _s_on_suback_callback(resolve, reject, client2, errorCode, suback) {
        if (errorCode == 0 && suback !== void 0) {
          resolve(suback);
        } else {
          reject(io.error_code_to_string(errorCode));
        }
      }
      static _s_on_unsuback_callback(resolve, reject, client2, errorCode, unsuback) {
        if (errorCode == 0 && unsuback !== void 0) {
          resolve(unsuback);
        } else {
          reject(io.error_code_to_string(errorCode));
        }
      }
      static _s_on_puback_callback(resolve, reject, client2, errorCode, result) {
        if (errorCode == 0) {
          resolve(result);
        } else {
          reject(io.error_code_to_string(errorCode));
        }
      }
      static _s_on_message_received(client2, message) {
        let messageReceivedEvent = {
          message
        };
        process.nextTick(() => {
          client2.emit(Mqtt5Client.MESSAGE_RECEIVED, messageReceivedEvent);
        });
      }
    };
    __name(Mqtt5Client, "Mqtt5Client");
    exports.Mqtt5Client = Mqtt5Client;
    Mqtt5Client.ERROR = "error";
    Mqtt5Client.MESSAGE_RECEIVED = "messageReceived";
    Mqtt5Client.ATTEMPTING_CONNECT = "attemptingConnect";
    Mqtt5Client.CONNECTION_SUCCESS = "connectionSuccess";
    Mqtt5Client.CONNECTION_FAILURE = "connectionFailure";
    Mqtt5Client.DISCONNECTION = "disconnection";
    Mqtt5Client.STOPPED = "stopped";
  }
});

// node_modules/aws-crt/dist/native/aws_iot_mqtt5.js
var require_aws_iot_mqtt5 = __commonJS({
  "node_modules/aws-crt/dist/native/aws_iot_mqtt5.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      var desc = Object.getOwnPropertyDescriptor(m6, k6);
      if (!desc || ("get" in desc ? !m6.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m6[k6];
        } };
      }
      Object.defineProperty(o6, k22, desc);
    } : function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      o6[k22] = m6[k6];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o6, v5) {
      Object.defineProperty(o6, "default", { enumerable: true, value: v5 });
    } : function(o6, v5) {
      o6["default"] = v5;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k6 in mod)
          if (k6 !== "default" && Object.prototype.hasOwnProperty.call(mod, k6))
            __createBinding2(result, mod, k6);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e6) {
            reject(e6);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e6) {
            reject(e6);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AwsIotMqtt5ClientConfigBuilder = void 0;
    var mqtt5 = __importStar2(require_mqtt52());
    var io = __importStar2(require_io2());
    var auth = __importStar2(require_auth());
    var error_1 = require_error();
    var iot_shared = __importStar2(require_aws_iot_shared());
    var mqtt_shared = __importStar2(require_mqtt_shared());
    var AwsIotMqtt5ClientConfigBuilder = class {
      constructor(hostName, port, tlsContextOptions) {
        this.tlsContextOptions = tlsContextOptions;
        this.config = {
          hostName,
          port,
          connectProperties: {
            keepAliveIntervalSeconds: mqtt_shared.DEFAULT_KEEP_ALIVE
          },
          extendedValidationAndFlowControlOptions: mqtt5.ClientExtendedValidationAndFlowControl.AwsIotCoreDefaults
        };
      }
      static newDirectMqttBuilderWithMtlsFromPath(hostName, certPath, keyPath) {
        let builder = new AwsIotMqtt5ClientConfigBuilder(hostName, AwsIotMqtt5ClientConfigBuilder.DEFAULT_DIRECT_MQTT_PORT, io.TlsContextOptions.create_client_with_mtls_from_path(certPath, keyPath));
        if (io.is_alpn_available()) {
          builder.tlsContextOptions.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static newDirectMqttBuilderWithMtlsFromMemory(hostName, cert, privateKey) {
        let builder = new AwsIotMqtt5ClientConfigBuilder(hostName, AwsIotMqtt5ClientConfigBuilder.DEFAULT_DIRECT_MQTT_PORT, io.TlsContextOptions.create_client_with_mtls(cert, privateKey));
        if (io.is_alpn_available()) {
          builder.tlsContextOptions.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static newDirectMqttBuilderWithMtlsFromPkcs11(hostName, pkcs11Options) {
        let builder = new AwsIotMqtt5ClientConfigBuilder(hostName, AwsIotMqtt5ClientConfigBuilder.DEFAULT_DIRECT_MQTT_PORT, io.TlsContextOptions.create_client_with_mtls_pkcs11(pkcs11Options));
        if (io.is_alpn_available()) {
          builder.tlsContextOptions.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static newDirectMqttBuilderWithMtlsFromPkcs12(hostName, pkcs12_options) {
        let builder = new AwsIotMqtt5ClientConfigBuilder(hostName, AwsIotMqtt5ClientConfigBuilder.DEFAULT_DIRECT_MQTT_PORT, io.TlsContextOptions.create_client_with_mtls_pkcs12_from_path(pkcs12_options.pkcs12_file, pkcs12_options.pkcs12_password));
        if (io.is_alpn_available()) {
          builder.tlsContextOptions.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static newDirectMqttBuilderWithMtlsFromWindowsCertStorePath(hostName, certificatePath) {
        let builder = new AwsIotMqtt5ClientConfigBuilder(hostName, AwsIotMqtt5ClientConfigBuilder.DEFAULT_DIRECT_MQTT_PORT, io.TlsContextOptions.create_client_with_mtls_windows_cert_store_path(certificatePath));
        if (io.is_alpn_available()) {
          builder.tlsContextOptions.alpn_list.unshift("x-amzn-mqtt-ca");
        }
        return builder;
      }
      static newDirectMqttBuilderWithCustomAuth(hostName, customAuthConfig) {
        let builder = new AwsIotMqtt5ClientConfigBuilder(hostName, AwsIotMqtt5ClientConfigBuilder.DEFAULT_WEBSOCKET_MQTT_PORT, new io.TlsContextOptions());
        builder.customAuthConfig = customAuthConfig;
        builder.tlsContextOptions.alpn_list = ["mqtt"];
        return builder;
      }
      static newWebsocketMqttBuilderWithSigv4Auth(hostName, options) {
        let tlsContextOptions = new io.TlsContextOptions();
        tlsContextOptions.alpn_list = [];
        let builder = new AwsIotMqtt5ClientConfigBuilder(hostName, AwsIotMqtt5ClientConfigBuilder.DEFAULT_WEBSOCKET_MQTT_PORT, tlsContextOptions);
        let credentialsProvider = options === null || options === void 0 ? void 0 : options.credentialsProvider;
        if (!credentialsProvider) {
          credentialsProvider = auth.AwsCredentialsProvider.newDefault();
        }
        builder.config.websocketHandshakeTransform = (request2, done) => __awaiter2(this, void 0, void 0, function* () {
          var _a;
          try {
            const signingConfig = {
              algorithm: auth.AwsSigningAlgorithm.SigV4,
              signature_type: auth.AwsSignatureType.HttpRequestViaQueryParams,
              provider: credentialsProvider,
              region: (_a = options === null || options === void 0 ? void 0 : options.region) !== null && _a !== void 0 ? _a : iot_shared.extractRegionFromEndpoint(hostName),
              service: "iotdevicegateway",
              signed_body_value: auth.AwsSignedBodyValue.EmptySha256,
              omit_session_token: true
            };
            yield auth.aws_sign_request(request2, signingConfig);
            done();
          } catch (error) {
            if (error instanceof error_1.CrtError) {
              done(error.error_code);
            } else {
              done(3);
            }
          }
        });
        return builder;
      }
      static newWebsocketMqttBuilderWithCustomAuth(hostName, customAuthConfig) {
        let builder = new AwsIotMqtt5ClientConfigBuilder(hostName, AwsIotMqtt5ClientConfigBuilder.DEFAULT_WEBSOCKET_MQTT_PORT, new io.TlsContextOptions());
        builder.customAuthConfig = customAuthConfig;
        builder.config.websocketHandshakeTransform = (request2, done) => __awaiter2(this, void 0, void 0, function* () {
          done(0);
        });
        return builder;
      }
      withCertificateAuthorityFromPath(caDirpath, caFilepath) {
        this.tlsContextOptions.override_default_trust_store_from_path(caDirpath, caFilepath);
        return this;
      }
      withCertificateAuthority(ca) {
        this.tlsContextOptions.override_default_trust_store(ca);
        return this;
      }
      withPort(port) {
        this.config.port = port;
        return this;
      }
      withConnectProperties(connectPacket) {
        this.config.connectProperties = connectPacket;
        return this;
      }
      withSessionBehavior(sessionBehavior) {
        this.config.sessionBehavior = sessionBehavior;
        return this;
      }
      withRetryJitterMode(retryJitterMode) {
        this.config.retryJitterMode = retryJitterMode;
        return this;
      }
      withMinReconnectDelayMs(minReconnectDelayMs) {
        this.config.minReconnectDelayMs = minReconnectDelayMs;
        return this;
      }
      withMaxReconnectDelayMs(maxReconnectDelayMs) {
        this.config.maxReconnectDelayMs = maxReconnectDelayMs;
        return this;
      }
      withMinConnectedTimeToResetReconnectDelayMs(minConnectedTimeToResetReconnectDelayMs) {
        this.config.minConnectedTimeToResetReconnectDelayMs = minConnectedTimeToResetReconnectDelayMs;
        return this;
      }
      withConnackTimeoutMs(connackTimeoutMs) {
        this.config.connackTimeoutMs = connackTimeoutMs;
        return this;
      }
      withOfflineQueueBehavior(offlineQueueBehavior) {
        this.config.offlineQueueBehavior = offlineQueueBehavior;
        return this;
      }
      withPingTimeoutMs(pingTimeoutMs) {
        this.config.pingTimeoutMs = pingTimeoutMs;
        return this;
      }
      withAckTimeoutSeconds(ackTimeoutSeconds) {
        this.config.ackTimeoutSeconds = ackTimeoutSeconds;
        return this;
      }
      withSocketOptions(socketOptions) {
        this.config.socketOptions = socketOptions;
        return this;
      }
      withHttpProxyOptions(httpProxyOptions) {
        this.config.httpProxyOptions = httpProxyOptions;
        return this;
      }
      withExtendedValidationAndFlowControlOptions(extendedValidationAndFlowControlOptions) {
        this.config.extendedValidationAndFlowControlOptions = extendedValidationAndFlowControlOptions;
        return this;
      }
      build() {
        var _a, _b;
        if (this.config.tlsCtx === void 0) {
          this.config.tlsCtx = new io.ClientTlsContext(this.tlsContextOptions);
        }
        if (this.config.connectProperties) {
          this.config.connectProperties.username = iot_shared.buildMqtt5FinalUsername(this.customAuthConfig);
          if ((_a = this.customAuthConfig) === null || _a === void 0 ? void 0 : _a.password) {
            this.config.connectProperties.password = (_b = this.customAuthConfig) === null || _b === void 0 ? void 0 : _b.password;
          }
        }
        return this.config;
      }
    };
    __name(AwsIotMqtt5ClientConfigBuilder, "AwsIotMqtt5ClientConfigBuilder");
    exports.AwsIotMqtt5ClientConfigBuilder = AwsIotMqtt5ClientConfigBuilder;
    AwsIotMqtt5ClientConfigBuilder.DEFAULT_WEBSOCKET_MQTT_PORT = 443;
    AwsIotMqtt5ClientConfigBuilder.DEFAULT_DIRECT_MQTT_PORT = 8883;
  }
});

// node_modules/aws-crt/dist/native/iot.js
var require_iot = __commonJS({
  "node_modules/aws-crt/dist/native/iot.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      var desc = Object.getOwnPropertyDescriptor(m6, k6);
      if (!desc || ("get" in desc ? !m6.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m6[k6];
        } };
      }
      Object.defineProperty(o6, k22, desc);
    } : function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      o6[k22] = m6[k6];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m6, exports2) {
      for (var p6 in m6)
        if (p6 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p6))
          __createBinding2(exports2, m6, p6);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar2(require_aws_iot(), exports);
    __exportStar2(require_aws_iot_mqtt5(), exports);
  }
});

// node_modules/aws-crt/dist/native/mqtt.js
var require_mqtt2 = __commonJS({
  "node_modules/aws-crt/dist/native/mqtt.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      var desc = Object.getOwnPropertyDescriptor(m6, k6);
      if (!desc || ("get" in desc ? !m6.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m6[k6];
        } };
      }
      Object.defineProperty(o6, k22, desc);
    } : function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      o6[k22] = m6[k6];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o6, v5) {
      Object.defineProperty(o6, "default", { enumerable: true, value: v5 });
    } : function(o6, v5) {
      o6["default"] = v5;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k6 in mod)
          if (k6 !== "default" && Object.prototype.hasOwnProperty.call(mod, k6))
            __createBinding2(result, mod, k6);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e6) {
            reject(e6);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e6) {
            reject(e6);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault2 = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MqttClientConnection = exports.MqttClient = exports.MqttWill = exports.QoS = exports.HttpProxyOptions = void 0;
    var binding_1 = __importDefault2(require_binding());
    var native_resource_1 = require_native_resource();
    var event_1 = require_event();
    var crt = __importStar2(require_mqtt_shared());
    var error_1 = require_error();
    var io = __importStar2(require_io2());
    var http_1 = require_http2();
    Object.defineProperty(exports, "HttpProxyOptions", { enumerable: true, get: function() {
      return http_1.HttpProxyOptions;
    } });
    var mqtt_1 = require_mqtt();
    var mqtt_2 = require_mqtt();
    Object.defineProperty(exports, "QoS", { enumerable: true, get: function() {
      return mqtt_2.QoS;
    } });
    Object.defineProperty(exports, "MqttWill", { enumerable: true, get: function() {
      return mqtt_2.MqttWill;
    } });
    var MqttClient = class extends native_resource_1.NativeResource {
      constructor(bootstrap = void 0) {
        super(binding_1.default.mqtt_client_new(bootstrap != null ? bootstrap.native_handle() : null));
        this.bootstrap = bootstrap;
      }
      new_connection(config) {
        return new MqttClientConnection(this, config);
      }
    };
    __name(MqttClient, "MqttClient");
    exports.MqttClient = MqttClient;
    var MqttClientConnection = class extends (0, native_resource_1.NativeResourceMixin)(event_1.BufferedEventEmitter) {
      constructor(client2, config) {
        super();
        this.client = client2;
        this.config = config;
        if (config == null || config == void 0) {
          throw new error_1.CrtError("MqttClientConnection constructor: config not defined");
        }
        const will = config.will ? {
          topic: config.will.topic,
          qos: config.will.qos,
          payload: crt.normalize_payload(config.will.payload),
          retain: config.will.retain
        } : void 0;
        var min_sec = mqtt_1.DEFAULT_RECONNECT_MIN_SEC;
        var max_sec = mqtt_1.DEFAULT_RECONNECT_MAX_SEC;
        if (config.reconnect_min_sec) {
          min_sec = config.reconnect_min_sec;
          max_sec = Math.max(min_sec, max_sec);
        }
        if (config.reconnect_max_sec) {
          max_sec = config.reconnect_max_sec;
          min_sec = Math.min(min_sec, max_sec);
        }
        if (client2 == void 0 || client2 == null) {
          throw new error_1.CrtError("MqttClientConnection constructor: client not defined");
        }
        if (config.socket_options == void 0 || config.socket_options == null) {
          throw new error_1.CrtError("MqttClientConnection constructor: socket_options in configuration not defined");
        }
        this._super(binding_1.default.mqtt_client_connection_new(client2.native_handle(), (error_code) => {
          this._on_connection_interrupted(error_code);
        }, (return_code, session_present) => {
          this._on_connection_resumed(return_code, session_present);
        }, config.tls_ctx ? config.tls_ctx.native_handle() : null, will, config.username, config.password, config.use_websocket, config.proxy_options ? config.proxy_options.create_native_handle() : void 0, config.websocket_handshake_transform, min_sec, max_sec));
        this.tls_ctx = config.tls_ctx;
        binding_1.default.mqtt_client_connection_on_message(this.native_handle(), this._on_any_publish.bind(this));
        this.on("error", (error) => {
        });
      }
      close() {
        binding_1.default.mqtt_client_connection_close(this.native_handle());
      }
      on(event2, listener) {
        super.on(event2, listener);
        if (event2 == "connect") {
          process.nextTick(() => {
            this.uncork();
          });
        }
        return this;
      }
      connect() {
        return __awaiter2(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            reject = this._reject(reject);
            if (this.config.socket_options == null || this.config.socket_options == void 0) {
              throw new error_1.CrtError("MqttClientConnection connect: socket_options in configuration not defined");
            }
            try {
              binding_1.default.mqtt_client_connection_connect(this.native_handle(), this.config.client_id, this.config.host_name, this.config.port, this.config.socket_options.native_handle(), this.config.keep_alive, this.config.ping_timeout, this.config.protocol_operation_timeout, this.config.clean_session, this._on_connect_callback.bind(this, resolve, reject));
            } catch (e6) {
              reject(e6);
            }
          });
        });
      }
      reconnect() {
        return __awaiter2(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            reject = this._reject(reject);
            try {
              binding_1.default.mqtt_client_connection_reconnect(this.native_handle(), this._on_connect_callback.bind(this, resolve, reject));
            } catch (e6) {
              reject(e6);
            }
          });
        });
      }
      publish(topic, payload, qos, retain = false) {
        return __awaiter2(this, void 0, void 0, function* () {
          if (typeof topic !== "string") {
            return Promise.reject("topic is not a string");
          }
          if (typeof qos !== "number") {
            return Promise.reject("qos is not a number");
          }
          if (typeof retain !== "boolean") {
            return Promise.reject("retain is not a boolean");
          }
          return new Promise((resolve, reject) => {
            reject = this._reject(reject);
            try {
              binding_1.default.mqtt_client_connection_publish(this.native_handle(), topic, crt.normalize_payload(payload), qos, retain, this._on_puback_callback.bind(this, resolve, reject));
            } catch (e6) {
              reject(e6);
            }
          });
        });
      }
      subscribe(topic, qos, on_message) {
        return __awaiter2(this, void 0, void 0, function* () {
          if (typeof topic !== "string") {
            return Promise.reject("topic is not a string");
          }
          if (typeof qos !== "number") {
            return Promise.reject("qos is not a number");
          }
          return new Promise((resolve, reject) => {
            reject = this._reject(reject);
            try {
              binding_1.default.mqtt_client_connection_subscribe(this.native_handle(), topic, qos, on_message, this._on_suback_callback.bind(this, resolve, reject));
            } catch (e6) {
              reject(e6);
            }
          });
        });
      }
      unsubscribe(topic) {
        return __awaiter2(this, void 0, void 0, function* () {
          if (typeof topic !== "string") {
            return Promise.reject("topic is not a string");
          }
          return new Promise((resolve, reject) => {
            reject = this._reject(reject);
            try {
              binding_1.default.mqtt_client_connection_unsubscribe(this.native_handle(), topic, this._on_unsuback_callback.bind(this, resolve, reject));
            } catch (e6) {
              reject(e6);
            }
          });
        });
      }
      disconnect() {
        return __awaiter2(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            reject = this._reject(reject);
            try {
              binding_1.default.mqtt_client_connection_disconnect(this.native_handle(), this._on_disconnect_callback.bind(this, resolve));
            } catch (e6) {
              reject(e6);
            }
          });
        });
      }
      getQueueStatistics() {
        return binding_1.default.mqtt_client_connection_get_queue_statistics(this.native_handle());
      }
      _reject(reject) {
        return (reason) => {
          reject(reason);
          process.nextTick(() => {
            this.emit("error", new error_1.CrtError(reason));
          });
        };
      }
      _on_connection_interrupted(error_code) {
        this.emit("interrupt", new error_1.CrtError(error_code));
      }
      _on_connection_resumed(return_code, session_present) {
        this.emit("resume", return_code, session_present);
      }
      _on_any_publish(topic, payload, dup, qos, retain) {
        this.emit("message", topic, payload, dup, qos, retain);
      }
      _on_connect_callback(resolve, reject, error_code, return_code, session_present) {
        if (error_code == 0 && return_code == 0) {
          resolve(session_present);
          this.emit("connect", session_present);
        } else if (error_code != 0) {
          reject("Failed to connect: " + io.error_code_to_string(error_code));
        } else {
          reject("Server rejected connection.");
        }
      }
      _on_puback_callback(resolve, reject, packet_id, error_code) {
        if (error_code == 0) {
          resolve({ packet_id });
        } else {
          reject("Failed to publish: " + io.error_code_to_string(error_code));
        }
      }
      _on_suback_callback(resolve, reject, packet_id, topic, qos, error_code) {
        if (error_code == 0) {
          resolve({ packet_id, topic, qos, error_code });
        } else {
          reject("Failed to subscribe: " + io.error_code_to_string(error_code));
        }
      }
      _on_unsuback_callback(resolve, reject, packet_id, error_code) {
        if (error_code == 0) {
          resolve({ packet_id });
        } else {
          reject("Failed to unsubscribe: " + io.error_code_to_string(error_code));
        }
      }
      _on_disconnect_callback(resolve) {
        resolve();
        this.emit("disconnect");
        this.close();
      }
    };
    __name(MqttClientConnection, "MqttClientConnection");
    exports.MqttClientConnection = MqttClientConnection;
    MqttClientConnection.CONNECT = "connect";
    MqttClientConnection.DISCONNECT = "disconnect";
    MqttClientConnection.ERROR = "error";
    MqttClientConnection.INTERRUPT = "interrupt";
    MqttClientConnection.RESUME = "resume";
    MqttClientConnection.MESSAGE = "message";
  }
});

// node_modules/aws-crt/dist/index.js
var require_dist = __commonJS({
  "node_modules/aws-crt/dist/index.js"(exports) {
    "use strict";
    var __createBinding2 = exports && exports.__createBinding || (Object.create ? function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      var desc = Object.getOwnPropertyDescriptor(m6, k6);
      if (!desc || ("get" in desc ? !m6.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m6[k6];
        } };
      }
      Object.defineProperty(o6, k22, desc);
    } : function(o6, m6, k6, k22) {
      if (k22 === void 0)
        k22 = k6;
      o6[k22] = m6[k6];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o6, v5) {
      Object.defineProperty(o6, "default", { enumerable: true, value: v5 });
    } : function(o6, v5) {
      o6["default"] = v5;
    });
    var __importStar2 = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k6 in mod)
          if (k6 !== "default" && Object.prototype.hasOwnProperty.call(mod, k6))
            __createBinding2(result, mod, k6);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CrtError = exports.resource_safety = exports.promise = exports.platform = exports.mqtt5 = exports.mqtt = exports.iot = exports.io = exports.http = exports.eventstream = exports.crt = exports.crypto = exports.checksums = exports.cancel = exports.auth = void 0;
    var cancel = __importStar2(require_cancel());
    exports.cancel = cancel;
    var platform2 = __importStar2(require_platform());
    exports.platform = platform2;
    var promise = __importStar2(require_promise());
    exports.promise = promise;
    var resource_safety = __importStar2(require_resource_safety());
    exports.resource_safety = resource_safety;
    var auth = __importStar2(require_auth());
    exports.auth = auth;
    var checksums = __importStar2(require_checksums());
    exports.checksums = checksums;
    var crt = __importStar2(require_crt());
    exports.crt = crt;
    var crypto3 = __importStar2(require_crypto());
    exports.crypto = crypto3;
    var eventstream = __importStar2(require_eventstream());
    exports.eventstream = eventstream;
    var http = __importStar2(require_http2());
    exports.http = http;
    var io = __importStar2(require_io2());
    exports.io = io;
    var iot = __importStar2(require_iot());
    exports.iot = iot;
    var mqtt = __importStar2(require_mqtt2());
    exports.mqtt = mqtt;
    var mqtt5 = __importStar2(require_mqtt52());
    exports.mqtt5 = mqtt5;
    var error_1 = require_error();
    Object.defineProperty(exports, "CrtError", { enumerable: true, get: function() {
      return error_1.CrtError;
    } });
  }
});

// node_modules/@aws-sdk/signature-v4-crt/dist-es/constants.js
var AMZ_DATE_QUERY_PARAM2, SIGNATURE_QUERY_PARAM2, TOKEN_QUERY_PARAM2, AMZ_DATE_HEADER2, SIGNATURE_HEADER2, SHA256_HEADER2, TOKEN_HEADER2, MAX_PRESIGNED_TTL2;
var init_constants2 = __esm({
  "node_modules/@aws-sdk/signature-v4-crt/dist-es/constants.js"() {
    AMZ_DATE_QUERY_PARAM2 = "X-Amz-Date";
    SIGNATURE_QUERY_PARAM2 = "X-Amz-Signature";
    TOKEN_QUERY_PARAM2 = "X-Amz-Security-Token";
    AMZ_DATE_HEADER2 = AMZ_DATE_QUERY_PARAM2.toLowerCase();
    SIGNATURE_HEADER2 = SIGNATURE_QUERY_PARAM2.toLowerCase();
    SHA256_HEADER2 = "x-amz-content-sha256";
    TOKEN_HEADER2 = TOKEN_QUERY_PARAM2.toLowerCase();
    MAX_PRESIGNED_TTL2 = 60 * 60 * 24 * 7;
  }
});

// node_modules/@aws-sdk/signature-v4-crt/dist-es/headerUtil.js
function deleteHeader(soughtHeader, headers) {
  soughtHeader = soughtHeader.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      delete headers[headerName];
    }
  }
}
var init_headerUtil2 = __esm({
  "node_modules/@aws-sdk/signature-v4-crt/dist-es/headerUtil.js"() {
    __name(deleteHeader, "deleteHeader");
  }
});

// node_modules/@aws-sdk/signature-v4-crt/dist-es/CrtSignerV4.js
function sdkHttpRequest2crtHttpRequest(sdkRequest) {
  deleteHeader(SHA256_HEADER2, sdkRequest.headers);
  const headersArray = Object.entries(sdkRequest.headers);
  const crtHttpHeaders = new import_aws_crt.http.HttpHeaders(headersArray);
  const queryString = getCanonicalQuery(sdkRequest);
  return new import_aws_crt.http.HttpRequest(sdkRequest.method, sdkRequest.path + "?" + queryString, crtHttpHeaders);
}
function sdk2crtCredentialsProvider(credentials) {
  return import_aws_crt.auth.AwsCredentialsProvider.newStatic(credentials.accessKeyId, credentials.secretAccessKey, credentials.sessionToken);
}
function getHeadersUnsignable(unsignableHeaders, signableHeaders) {
  if (!unsignableHeaders) {
    return [];
  }
  if (!signableHeaders) {
    return [...unsignableHeaders];
  }
  const result = /* @__PURE__ */ new Set([...unsignableHeaders]);
  for (let it = signableHeaders.values(), val2 = null; val2 = it.next().value; ) {
    if (result.has(val2)) {
      result.delete(val2);
    }
  }
  return [...result];
}
var import_aws_crt, CrtSignerV4;
var init_CrtSignerV4 = __esm({
  "node_modules/@aws-sdk/signature-v4-crt/dist-es/CrtSignerV4.js"() {
    init_dist_es2();
    init_dist_es10();
    init_dist_es();
    import_aws_crt = __toESM(require_dist());
    init_constants2();
    init_headerUtil2();
    __name(sdkHttpRequest2crtHttpRequest, "sdkHttpRequest2crtHttpRequest");
    CrtSignerV4 = class {
      constructor({ credentials, region, service, sha256, applyChecksum = true, uriEscapePath = true, signingAlgorithm = import_aws_crt.auth.AwsSigningAlgorithm.SigV4 }) {
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.signingAlgorithm = signingAlgorithm;
        this.applyChecksum = applyChecksum;
        this.regionProvider = normalizeProvider(region);
        this.credentialProvider = normalizeProvider(credentials);
        import_aws_crt.io.enable_logging(import_aws_crt.io.LogLevel.ERROR);
      }
      async options2crtConfigure({ signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}, viaHeader, payloadHash, expiresIn) {
        const credentials = await this.credentialProvider();
        const region = signingRegion ?? await this.regionProvider();
        const service = signingService ?? this.service;
        if (signableHeaders?.has("x-amzn-trace-id") || signableHeaders?.has("user-agent")) {
          throw new Error("internal check (x-amzn-trace-id, user-agent) is not supported to be included to sign with CRT.");
        }
        const headersUnsignable = getHeadersUnsignable(unsignableHeaders, signableHeaders);
        return {
          algorithm: this.signingAlgorithm,
          signature_type: viaHeader ? import_aws_crt.auth.AwsSignatureType.HttpRequestViaHeaders : import_aws_crt.auth.AwsSignatureType.HttpRequestViaQueryParams,
          provider: sdk2crtCredentialsProvider(credentials),
          region,
          service,
          date: new Date(signingDate),
          header_blacklist: headersUnsignable,
          use_double_uri_encode: this.uriEscapePath,
          signed_body_value: payloadHash,
          signed_body_header: this.applyChecksum && viaHeader ? import_aws_crt.auth.AwsSignedBodyHeaderType.XAmzContentSha256 : import_aws_crt.auth.AwsSignedBodyHeaderType.None,
          expiration_in_seconds: expiresIn
        };
      }
      async presign(originalRequest, options = {}) {
        if (options.expiresIn && options.expiresIn > MAX_PRESIGNED_TTL2) {
          return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
        }
        const request2 = moveHeadersToQuery(prepareRequest(originalRequest));
        const crtSignedRequest = await this.signRequest(request2, await this.options2crtConfigure(options, false, await getPayloadHash(originalRequest, this.sha256), options.expiresIn ? options.expiresIn : 3600));
        request2.query = this.getQueryParam(crtSignedRequest.path);
        return request2;
      }
      async sign(toSign, options) {
        const request2 = prepareRequest(toSign);
        const crtSignedRequest = await this.signRequest(request2, await this.options2crtConfigure(options, true, await getPayloadHash(toSign, this.sha256)));
        request2.headers = crtSignedRequest.headers._flatten().reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
        return request2;
      }
      getQueryParam(crtPath) {
        const start = crtPath.search(/\?/);
        const startHash = crtPath.search(/\#/);
        const end = startHash == -1 ? void 0 : startHash;
        const queryParam = {};
        if (start == -1) {
          return queryParam;
        }
        const queryString = crtPath.slice(start + 1, end);
        return parseQueryString(queryString);
      }
      async signRequest(requestToSign, crtConfig) {
        const request2 = sdkHttpRequest2crtHttpRequest(requestToSign);
        try {
          return await import_aws_crt.auth.aws_sign_request(request2, crtConfig);
        } catch (error) {
          throw new Error(error);
        }
      }
      async verifySigv4aSigning(request2, signature, expectedCanonicalRequest, eccPubKeyX, eccPubKeyY, options = {}) {
        const sdkRequest = prepareRequest(request2);
        const crtRequest = sdkHttpRequest2crtHttpRequest(sdkRequest);
        const payloadHash = await getPayloadHash(request2, this.sha256);
        const crtConfig = await this.options2crtConfigure(options, true, payloadHash);
        return import_aws_crt.auth.aws_verify_sigv4a_signing(crtRequest, crtConfig, expectedCanonicalRequest, signature, eccPubKeyX, eccPubKeyY);
      }
      async verifySigv4aPreSigning(request2, signature, expectedCanonicalRequest, eccPubKeyX, eccPubKeyY, options = {}) {
        if (typeof signature != "string") {
          return false;
        }
        const sdkRequest = prepareRequest(request2);
        const crtRequest = sdkHttpRequest2crtHttpRequest(sdkRequest);
        const crtConfig = await this.options2crtConfigure(options, false, await getPayloadHash(request2, this.sha256), options.expiresIn ? options.expiresIn : 3600);
        return import_aws_crt.auth.aws_verify_sigv4a_signing(crtRequest, crtConfig, expectedCanonicalRequest, signature, eccPubKeyX, eccPubKeyY);
      }
    };
    __name(CrtSignerV4, "CrtSignerV4");
    __name(sdk2crtCredentialsProvider, "sdk2crtCredentialsProvider");
    __name(getHeadersUnsignable, "getHeadersUnsignable");
  }
});

// node_modules/@aws-sdk/signature-v4-crt/dist-es/index.js
var dist_es_exports2 = {};
__export(dist_es_exports2, {
  CrtSignerV4: () => CrtSignerV4
});
var init_dist_es11 = __esm({
  "node_modules/@aws-sdk/signature-v4-crt/dist-es/index.js"() {
    init_CrtSignerV4();
  }
});

// node_modules/@aws-sdk/util-config-provider/dist-es/booleanSelector.js
var SelectorType;
(function(SelectorType2) {
  SelectorType2["ENV"] = "env";
  SelectorType2["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));
var booleanSelector = /* @__PURE__ */ __name((obj, key, type) => {
  if (!(key in obj))
    return void 0;
  if (obj[key] === "true")
    return true;
  if (obj[key] === "false")
    return false;
  throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
}, "booleanSelector");

// node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
var ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
var CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
var NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => booleanSelector(env2, ENV_USE_DUALSTACK_ENDPOINT, SelectorType.ENV),
  configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_DUALSTACK_ENDPOINT, SelectorType.CONFIG),
  default: false
};

// node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
var ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
var CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
var NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => booleanSelector(env2, ENV_USE_FIPS_ENDPOINT, SelectorType.ENV),
  configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_FIPS_ENDPOINT, SelectorType.CONFIG),
  default: false
};

// node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js
init_dist_es();

// node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js
init_dist_es();

// node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/config.js
var REGION_ENV_NAME = "AWS_REGION";
var REGION_INI_NAME = "region";
var NODE_REGION_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => env2[REGION_ENV_NAME],
  configFileSelector: (profile) => profile[REGION_INI_NAME],
  default: () => {
    throw new Error("Region is missing");
  }
};
var NODE_REGION_CONFIG_FILE_OPTIONS = {
  preferredFile: "credentials"
};

// node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/isFipsRegion.js
var isFipsRegion = /* @__PURE__ */ __name((region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips")), "isFipsRegion");

// node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/getRealRegion.js
var getRealRegion = /* @__PURE__ */ __name((region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region, "getRealRegion");

// node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
var resolveRegionConfig = /* @__PURE__ */ __name((input) => {
  const { region, useFipsEndpoint } = input;
  if (!region) {
    throw new Error("Region is missing");
  }
  return {
    ...input,
    region: async () => {
      if (typeof region === "string") {
        return getRealRegion(region);
      }
      const providedRegion = await region();
      return getRealRegion(providedRegion);
    },
    useFipsEndpoint: async () => {
      const providedRegion = typeof region === "string" ? region : await region();
      if (isFipsRegion(providedRegion)) {
        return true;
      }
      return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
    }
  };
}, "resolveRegionConfig");

// node_modules/@aws-sdk/protocol-http/dist-es/FieldPosition.js
var FieldPosition;
(function(FieldPosition3) {
  FieldPosition3[FieldPosition3["HEADER"] = 0] = "HEADER";
  FieldPosition3[FieldPosition3["TRAILER"] = 1] = "TRAILER";
})(FieldPosition || (FieldPosition = {}));

// node_modules/@aws-sdk/protocol-http/dist-es/httpRequest.js
var HttpRequest = class {
  constructor(options) {
    this.method = options.method || "GET";
    this.hostname = options.hostname || "localhost";
    this.port = options.port;
    this.query = options.query || {};
    this.headers = options.headers || {};
    this.body = options.body;
    this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
    this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
    this.username = options.username;
    this.password = options.password;
    this.fragment = options.fragment;
  }
  static isInstance(request2) {
    if (!request2)
      return false;
    const req = request2;
    return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
  }
  clone() {
    const cloned = new HttpRequest({
      ...this,
      headers: { ...this.headers }
    });
    if (cloned.query)
      cloned.query = cloneQuery(cloned.query);
    return cloned;
  }
};
__name(HttpRequest, "HttpRequest");
function cloneQuery(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}
__name(cloneQuery, "cloneQuery");

// node_modules/@aws-sdk/protocol-http/dist-es/httpResponse.js
var HttpResponse = class {
  constructor(options) {
    this.statusCode = options.statusCode;
    this.reason = options.reason;
    this.headers = options.headers || {};
    this.body = options.body;
  }
  static isInstance(response) {
    if (!response)
      return false;
    const resp = response;
    return typeof resp.statusCode === "number" && typeof resp.headers === "object";
  }
};
__name(HttpResponse, "HttpResponse");

// node_modules/@aws-sdk/middleware-content-length/dist-es/index.js
var CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
  return (next) => async (args) => {
    const request2 = args.request;
    if (HttpRequest.isInstance(request2)) {
      const { body, headers } = request2;
      if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
        try {
          const length = bodyLengthChecker(body);
          request2.headers = {
            ...request2.headers,
            [CONTENT_LENGTH_HEADER]: String(length)
          };
        } catch (error) {
        }
      }
    }
    return next({
      ...args,
      request: request2
    });
  };
}
__name(contentLengthMiddleware, "contentLengthMiddleware");
var contentLengthMiddlewareOptions = {
  step: "build",
  tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
  name: "contentLengthMiddleware",
  override: true
};
var getContentLengthPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
  }
}), "getContentLengthPlugin");

// node_modules/@aws-sdk/middleware-endpoint/dist-es/service-customizations/s3.js
var resolveParamsForS3 = /* @__PURE__ */ __name(async (endpointParams) => {
  const bucket = endpointParams?.Bucket || "";
  if (typeof endpointParams.Bucket === "string") {
    endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
  }
  if (isArnBucketName(bucket)) {
    if (endpointParams.ForcePathStyle === true) {
      throw new Error("Path-style addressing cannot be used with ARN buckets");
    }
  } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
    endpointParams.ForcePathStyle = true;
  }
  if (endpointParams.DisableMultiRegionAccessPoints) {
    endpointParams.disableMultiRegionAccessPoints = true;
    endpointParams.DisableMRAP = true;
  }
  return endpointParams;
}, "resolveParamsForS3");
var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
var DOTS_PATTERN = /\.\./;
var isDnsCompatibleBucketName = /* @__PURE__ */ __name((bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName), "isDnsCompatibleBucketName");
var isArnBucketName = /* @__PURE__ */ __name((bucketName) => {
  const [arn, partition2, service, region, account, typeOrId] = bucketName.split(":");
  const isArn = arn === "arn" && bucketName.split(":").length >= 6;
  const isValidArn = [arn, partition2, service, account, typeOrId].filter(Boolean).length === 5;
  if (isArn && !isValidArn) {
    throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
  }
  return arn === "arn" && !!partition2 && !!service && !!account && !!typeOrId;
}, "isArnBucketName");

// node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
var createConfigValueProvider = /* @__PURE__ */ __name((configKey, canonicalEndpointParamKey, config) => {
  const configProvider = /* @__PURE__ */ __name(async () => {
    const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
    if (typeof configValue === "function") {
      return configValue();
    }
    return configValue;
  }, "configProvider");
  if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
    return async () => {
      const endpoint = await configProvider();
      if (endpoint && typeof endpoint === "object") {
        if ("url" in endpoint) {
          return endpoint.url.href;
        }
        if ("hostname" in endpoint) {
          const { protocol, hostname, port, path } = endpoint;
          return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
        }
      }
      return endpoint;
    };
  }
  return configProvider;
}, "createConfigValueProvider");

// node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
var getEndpointFromInstructions = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig, context) => {
  const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
  if (typeof clientConfig.endpointProvider !== "function") {
    throw new Error("config.endpointProvider is not set.");
  }
  const endpoint = clientConfig.endpointProvider(endpointParams, context);
  return endpoint;
}, "getEndpointFromInstructions");
var resolveParams = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig) => {
  const endpointParams = {};
  const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
  for (const [name, instruction] of Object.entries(instructions)) {
    switch (instruction.type) {
      case "staticContextParams":
        endpointParams[name] = instruction.value;
        break;
      case "contextParams":
        endpointParams[name] = commandInput[instruction.name];
        break;
      case "clientContextParams":
      case "builtInParams":
        endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
        break;
      default:
        throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
    }
  }
  if (Object.keys(instructions).length === 0) {
    Object.assign(endpointParams, clientConfig);
  }
  if (String(clientConfig.serviceId).toLowerCase() === "s3") {
    await resolveParamsForS3(endpointParams);
  }
  return endpointParams;
}, "resolveParams");

// node_modules/@aws-sdk/url-parser/dist-es/index.js
init_dist_es2();
var parseUrl = /* @__PURE__ */ __name((url) => {
  if (typeof url === "string") {
    return parseUrl(new URL(url));
  }
  const { hostname, pathname, port, protocol, search } = url;
  let query;
  if (search) {
    query = parseQueryString(search);
  }
  return {
    hostname,
    port: port ? parseInt(port) : void 0,
    protocol,
    path: pathname,
    query
  };
}, "parseUrl");

// node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
var toEndpointV1 = /* @__PURE__ */ __name((endpoint) => {
  if (typeof endpoint === "object") {
    if ("url" in endpoint) {
      return parseUrl(endpoint.url);
    }
    return endpoint;
  }
  return parseUrl(endpoint);
}, "toEndpointV1");

// node_modules/@aws-sdk/middleware-endpoint/dist-es/endpointMiddleware.js
var endpointMiddleware = /* @__PURE__ */ __name(({ config, instructions }) => {
  return (next, context) => async (args) => {
    const endpoint = await getEndpointFromInstructions(args.input, {
      getEndpointParameterInstructions() {
        return instructions;
      }
    }, { ...config }, context);
    context.endpointV2 = endpoint;
    context.authSchemes = endpoint.properties?.authSchemes;
    const authScheme = context.authSchemes?.[0];
    if (authScheme) {
      context["signing_region"] = authScheme.signingRegion;
      context["signing_service"] = authScheme.signingName;
    }
    return next({
      ...args
    });
  };
}, "endpointMiddleware");

// node_modules/@aws-sdk/middleware-serde/dist-es/deserializerMiddleware.js
var deserializerMiddleware = /* @__PURE__ */ __name((options, deserializer) => (next, context) => async (args) => {
  const { response } = await next(args);
  try {
    const parsed = await deserializer(response, options);
    return {
      response,
      output: parsed
    };
  } catch (error) {
    Object.defineProperty(error, "$response", {
      value: response
    });
    if (!("$metadata" in error)) {
      const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
      error.message += "\n  " + hint;
    }
    throw error;
  }
}, "deserializerMiddleware");

// node_modules/@aws-sdk/middleware-serde/dist-es/serializerMiddleware.js
var serializerMiddleware = /* @__PURE__ */ __name((options, serializer) => (next, context) => async (args) => {
  const endpoint = context.endpointV2?.url && options.urlParser ? async () => options.urlParser(context.endpointV2.url) : options.endpoint;
  if (!endpoint) {
    throw new Error("No valid endpoint provider available.");
  }
  const request2 = await serializer(args.input, { ...options, endpoint });
  return next({
    ...args,
    request: request2
  });
}, "serializerMiddleware");

// node_modules/@aws-sdk/middleware-serde/dist-es/serdePlugin.js
var deserializerMiddlewareOption = {
  name: "deserializerMiddleware",
  step: "deserialize",
  tags: ["DESERIALIZER"],
  override: true
};
var serializerMiddlewareOption = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"],
  override: true
};
function getSerdePlugin(config, serializer, deserializer) {
  return {
    applyToStack: (commandStack) => {
      commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
      commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
    }
  };
}
__name(getSerdePlugin, "getSerdePlugin");

// node_modules/@aws-sdk/middleware-endpoint/dist-es/getEndpointPlugin.js
var endpointMiddlewareOptions = {
  step: "serialize",
  tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
  name: "endpointV2Middleware",
  override: true,
  relation: "before",
  toMiddleware: serializerMiddlewareOption.name
};
var getEndpointPlugin = /* @__PURE__ */ __name((config, instructions) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(endpointMiddleware({
      config,
      instructions
    }), endpointMiddlewareOptions);
  }
}), "getEndpointPlugin");

// node_modules/@aws-sdk/middleware-endpoint/dist-es/resolveEndpointConfig.js
init_dist_es();
var resolveEndpointConfig = /* @__PURE__ */ __name((input) => {
  const tls = input.tls ?? true;
  const { endpoint } = input;
  const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider(endpoint)()) : void 0;
  const isCustomEndpoint = !!endpoint;
  return {
    ...input,
    endpoint: customEndpointProvider,
    tls,
    isCustomEndpoint,
    useDualstackEndpoint: normalizeProvider(input.useDualstackEndpoint ?? false),
    useFipsEndpoint: normalizeProvider(input.useFipsEndpoint ?? false)
  };
}, "resolveEndpointConfig");

// node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
function resolveHostHeaderConfig(input) {
  return input;
}
__name(resolveHostHeaderConfig, "resolveHostHeaderConfig");
var hostHeaderMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
  if (!HttpRequest.isInstance(args.request))
    return next(args);
  const { request: request2 } = args;
  const { handlerProtocol = "" } = options.requestHandler.metadata || {};
  if (handlerProtocol.indexOf("h2") >= 0 && !request2.headers[":authority"]) {
    delete request2.headers["host"];
    request2.headers[":authority"] = "";
  } else if (!request2.headers["host"]) {
    let host = request2.hostname;
    if (request2.port != null)
      host += `:${request2.port}`;
    request2.headers["host"] = host;
  }
  return next(args);
}, "hostHeaderMiddleware");
var hostHeaderMiddlewareOptions = {
  name: "hostHeaderMiddleware",
  step: "build",
  priority: "low",
  tags: ["HOST"],
  override: true
};
var getHostHeaderPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
  }
}), "getHostHeaderPlugin");

// node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
var loggerMiddleware = /* @__PURE__ */ __name(() => (next, context) => async (args) => {
  try {
    const response = await next(args);
    const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
    const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
    const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
    const { $metadata, ...outputWithoutMetadata } = response.output;
    logger2?.info?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      output: outputFilterSensitiveLog(outputWithoutMetadata),
      metadata: $metadata
    });
    return response;
  } catch (error) {
    const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
    const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
    logger2?.error?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      error,
      metadata: error.$metadata
    });
    throw error;
  }
}, "loggerMiddleware");
var loggerMiddlewareOptions = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
  override: true
};
var getLoggerPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
  }
}), "getLoggerPlugin");

// node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
var TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
var ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
var ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
var recursionDetectionMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
  const { request: request2 } = args;
  if (!HttpRequest.isInstance(request2) || options.runtime !== "node" || request2.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
    return next(args);
  }
  const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
  const traceId = process.env[ENV_TRACE_ID];
  const nonEmptyString = /* @__PURE__ */ __name((str) => typeof str === "string" && str.length > 0, "nonEmptyString");
  if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
    request2.headers[TRACE_ID_HEADER_NAME] = traceId;
  }
  return next({
    ...args,
    request: request2
  });
}, "recursionDetectionMiddleware");
var addRecursionDetectionMiddlewareOptions = {
  step: "build",
  tags: ["RECURSION_DETECTION"],
  name: "recursionDetectionMiddleware",
  override: true,
  priority: "low"
};
var getRecursionDetectionPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
  }
}), "getRecursionDetectionPlugin");

// node_modules/@aws-sdk/util-retry/dist-es/config.js
var RETRY_MODES;
(function(RETRY_MODES2) {
  RETRY_MODES2["STANDARD"] = "standard";
  RETRY_MODES2["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
var DEFAULT_MAX_ATTEMPTS = 3;
var DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

// node_modules/@aws-sdk/service-error-classification/dist-es/constants.js
var THROTTLING_ERROR_CODES = [
  "BandwidthLimitExceeded",
  "EC2ThrottledException",
  "LimitExceededException",
  "PriorRequestNotComplete",
  "ProvisionedThroughputExceededException",
  "RequestLimitExceeded",
  "RequestThrottled",
  "RequestThrottledException",
  "SlowDown",
  "ThrottledException",
  "Throttling",
  "ThrottlingException",
  "TooManyRequestsException",
  "TransactionInProgressException"
];
var TRANSIENT_ERROR_CODES = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"];
var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];

// node_modules/@aws-sdk/service-error-classification/dist-es/index.js
var isThrottlingError = /* @__PURE__ */ __name((error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true, "isThrottlingError");
var isTransientError = /* @__PURE__ */ __name((error) => TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0), "isTransientError");
var isServerError = /* @__PURE__ */ __name((error) => {
  if (error.$metadata?.httpStatusCode !== void 0) {
    const statusCode = error.$metadata.httpStatusCode;
    if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
      return true;
    }
    return false;
  }
  return false;
}, "isServerError");

// node_modules/@aws-sdk/util-retry/dist-es/DefaultRateLimiter.js
var DefaultRateLimiter = class {
  constructor(options) {
    this.currentCapacity = 0;
    this.enabled = false;
    this.lastMaxRate = 0;
    this.measuredTxRate = 0;
    this.requestCount = 0;
    this.lastTimestamp = 0;
    this.timeWindow = 0;
    this.beta = options?.beta ?? 0.7;
    this.minCapacity = options?.minCapacity ?? 1;
    this.minFillRate = options?.minFillRate ?? 0.5;
    this.scaleConstant = options?.scaleConstant ?? 0.4;
    this.smooth = options?.smooth ?? 0.8;
    const currentTimeInSeconds = this.getCurrentTimeInSeconds();
    this.lastThrottleTime = currentTimeInSeconds;
    this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
    this.fillRate = this.minFillRate;
    this.maxCapacity = this.minCapacity;
  }
  getCurrentTimeInSeconds() {
    return Date.now() / 1e3;
  }
  async getSendToken() {
    return this.acquireTokenBucket(1);
  }
  async acquireTokenBucket(amount) {
    if (!this.enabled) {
      return;
    }
    this.refillTokenBucket();
    if (amount > this.currentCapacity) {
      const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    this.currentCapacity = this.currentCapacity - amount;
  }
  refillTokenBucket() {
    const timestamp = this.getCurrentTimeInSeconds();
    if (!this.lastTimestamp) {
      this.lastTimestamp = timestamp;
      return;
    }
    const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
    this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
    this.lastTimestamp = timestamp;
  }
  updateClientSendingRate(response) {
    let calculatedRate;
    this.updateMeasuredRate();
    if (isThrottlingError(response)) {
      const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
      this.lastMaxRate = rateToUse;
      this.calculateTimeWindow();
      this.lastThrottleTime = this.getCurrentTimeInSeconds();
      calculatedRate = this.cubicThrottle(rateToUse);
      this.enableTokenBucket();
    } else {
      this.calculateTimeWindow();
      calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
    }
    const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
    this.updateTokenBucketRate(newRate);
  }
  calculateTimeWindow() {
    this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
  }
  cubicThrottle(rateToUse) {
    return this.getPrecise(rateToUse * this.beta);
  }
  cubicSuccess(timestamp) {
    return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
  }
  enableTokenBucket() {
    this.enabled = true;
  }
  updateTokenBucketRate(newRate) {
    this.refillTokenBucket();
    this.fillRate = Math.max(newRate, this.minFillRate);
    this.maxCapacity = Math.max(newRate, this.minCapacity);
    this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
  }
  updateMeasuredRate() {
    const t4 = this.getCurrentTimeInSeconds();
    const timeBucket = Math.floor(t4 * 2) / 2;
    this.requestCount++;
    if (timeBucket > this.lastTxRateBucket) {
      const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
      this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
      this.requestCount = 0;
      this.lastTxRateBucket = timeBucket;
    }
  }
  getPrecise(num) {
    return parseFloat(num.toFixed(8));
  }
};
__name(DefaultRateLimiter, "DefaultRateLimiter");

// node_modules/@aws-sdk/util-retry/dist-es/constants.js
var DEFAULT_RETRY_DELAY_BASE = 100;
var MAXIMUM_RETRY_DELAY = 20 * 1e3;
var THROTTLING_RETRY_DELAY_BASE = 500;
var INITIAL_RETRY_TOKENS = 500;
var RETRY_COST = 5;
var TIMEOUT_RETRY_COST = 10;
var NO_RETRY_INCREMENT = 1;
var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
var REQUEST_HEADER = "amz-sdk-request";

// node_modules/@aws-sdk/util-retry/dist-es/defaultRetryBackoffStrategy.js
var getDefaultRetryBackoffStrategy = /* @__PURE__ */ __name(() => {
  let delayBase = DEFAULT_RETRY_DELAY_BASE;
  const computeNextBackoffDelay = /* @__PURE__ */ __name((attempts) => {
    return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
  }, "computeNextBackoffDelay");
  const setDelayBase = /* @__PURE__ */ __name((delay) => {
    delayBase = delay;
  }, "setDelayBase");
  return {
    computeNextBackoffDelay,
    setDelayBase
  };
}, "getDefaultRetryBackoffStrategy");

// node_modules/@aws-sdk/util-retry/dist-es/defaultRetryToken.js
var createDefaultRetryToken = /* @__PURE__ */ __name(({ retryDelay, retryCount, retryCost }) => {
  const getRetryCount = /* @__PURE__ */ __name(() => retryCount, "getRetryCount");
  const getRetryDelay = /* @__PURE__ */ __name(() => Math.min(MAXIMUM_RETRY_DELAY, retryDelay), "getRetryDelay");
  const getRetryCost = /* @__PURE__ */ __name(() => retryCost, "getRetryCost");
  return {
    getRetryCount,
    getRetryDelay,
    getRetryCost
  };
}, "createDefaultRetryToken");

// node_modules/@aws-sdk/util-retry/dist-es/StandardRetryStrategy.js
var StandardRetryStrategy = class {
  constructor(maxAttempts) {
    this.maxAttempts = maxAttempts;
    this.mode = RETRY_MODES.STANDARD;
    this.capacity = INITIAL_RETRY_TOKENS;
    this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
    this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
  }
  async acquireInitialRetryToken(retryTokenScope) {
    return createDefaultRetryToken({
      retryDelay: DEFAULT_RETRY_DELAY_BASE,
      retryCount: 0
    });
  }
  async refreshRetryTokenForRetry(token, errorInfo) {
    const maxAttempts = await this.getMaxAttempts();
    if (this.shouldRetry(token, errorInfo, maxAttempts)) {
      const errorType = errorInfo.errorType;
      this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
      const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
      const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
      const capacityCost = this.getCapacityCost(errorType);
      this.capacity -= capacityCost;
      return createDefaultRetryToken({
        retryDelay,
        retryCount: token.getRetryCount() + 1,
        retryCost: capacityCost
      });
    }
    throw new Error("No retry token available");
  }
  recordSuccess(token) {
    this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
  }
  getCapacity() {
    return this.capacity;
  }
  async getMaxAttempts() {
    try {
      return await this.maxAttemptsProvider();
    } catch (error) {
      console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
      return DEFAULT_MAX_ATTEMPTS;
    }
  }
  shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
    const attempts = tokenToRenew.getRetryCount();
    return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
  }
  getCapacityCost(errorType) {
    return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
  }
  isRetryableError(errorType) {
    return errorType === "THROTTLING" || errorType === "TRANSIENT";
  }
};
__name(StandardRetryStrategy, "StandardRetryStrategy");

// node_modules/@aws-sdk/util-retry/dist-es/AdaptiveRetryStrategy.js
var AdaptiveRetryStrategy = class {
  constructor(maxAttemptsProvider, options) {
    this.maxAttemptsProvider = maxAttemptsProvider;
    this.mode = RETRY_MODES.ADAPTIVE;
    const { rateLimiter } = options ?? {};
    this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
    this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
  }
  async acquireInitialRetryToken(retryTokenScope) {
    await this.rateLimiter.getSendToken();
    return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
  }
  async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
    this.rateLimiter.updateClientSendingRate(errorInfo);
    return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
  }
  recordSuccess(token) {
    this.rateLimiter.updateClientSendingRate({});
    this.standardRetryStrategy.recordSuccess(token);
  }
};
__name(AdaptiveRetryStrategy, "AdaptiveRetryStrategy");

// node_modules/@aws-sdk/middleware-retry/node_modules/uuid/dist/esm-node/rng.js
import crypto from "crypto";
var rnds8Pool = new Uint8Array(256);
var poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
__name(rng, "rng");

// node_modules/@aws-sdk/middleware-retry/node_modules/uuid/dist/esm-node/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/@aws-sdk/middleware-retry/node_modules/uuid/dist/esm-node/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
__name(validate, "validate");
var validate_default = validate;

// node_modules/@aws-sdk/middleware-retry/node_modules/uuid/dist/esm-node/stringify.js
var byteToHex = [];
for (let i6 = 0; i6 < 256; ++i6) {
  byteToHex.push((i6 + 256).toString(16).substr(1));
}
function stringify(arr, offset = 0) {
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
__name(stringify, "stringify");
var stringify_default = stringify;

// node_modules/@aws-sdk/middleware-retry/node_modules/uuid/dist/esm-node/v4.js
function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i6 = 0; i6 < 16; ++i6) {
      buf[offset + i6] = rnds[i6];
    }
    return buf;
  }
  return stringify_default(rnds);
}
__name(v4, "v4");
var v4_default = v4;

// node_modules/@aws-sdk/middleware-retry/dist-es/util.js
var asSdkError = /* @__PURE__ */ __name((error) => {
  if (error instanceof Error)
    return error;
  if (error instanceof Object)
    return Object.assign(new Error(), error);
  if (typeof error === "string")
    return new Error(error);
  return new Error(`AWS SDK error wrapper for ${error}`);
}, "asSdkError");

// node_modules/@aws-sdk/middleware-retry/dist-es/configurations.js
init_dist_es();
var ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
var CONFIG_MAX_ATTEMPTS = "max_attempts";
var NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => {
    const value = env2[ENV_MAX_ATTEMPTS];
    if (!value)
      return void 0;
    const maxAttempt = parseInt(value);
    if (Number.isNaN(maxAttempt)) {
      throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
    }
    return maxAttempt;
  },
  configFileSelector: (profile) => {
    const value = profile[CONFIG_MAX_ATTEMPTS];
    if (!value)
      return void 0;
    const maxAttempt = parseInt(value);
    if (Number.isNaN(maxAttempt)) {
      throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
    }
    return maxAttempt;
  },
  default: DEFAULT_MAX_ATTEMPTS
};
var resolveRetryConfig = /* @__PURE__ */ __name((input) => {
  const { retryStrategy } = input;
  const maxAttempts = normalizeProvider(input.maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
  return {
    ...input,
    maxAttempts,
    retryStrategy: async () => {
      if (retryStrategy) {
        return retryStrategy;
      }
      const retryMode = await normalizeProvider(input.retryMode)();
      if (retryMode === RETRY_MODES.ADAPTIVE) {
        return new AdaptiveRetryStrategy(maxAttempts);
      }
      return new StandardRetryStrategy(maxAttempts);
    }
  };
}, "resolveRetryConfig");
var ENV_RETRY_MODE = "AWS_RETRY_MODE";
var CONFIG_RETRY_MODE = "retry_mode";
var NODE_RETRY_MODE_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => env2[ENV_RETRY_MODE],
  configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
  default: DEFAULT_RETRY_MODE
};

// node_modules/@aws-sdk/middleware-retry/dist-es/retryMiddleware.js
var retryMiddleware = /* @__PURE__ */ __name((options) => (next, context) => async (args) => {
  let retryStrategy = await options.retryStrategy();
  const maxAttempts = await options.maxAttempts();
  if (isRetryStrategyV2(retryStrategy)) {
    retryStrategy = retryStrategy;
    let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
    let lastError = new Error();
    let attempts = 0;
    let totalRetryDelay = 0;
    const { request: request2 } = args;
    if (HttpRequest.isInstance(request2)) {
      request2.headers[INVOCATION_ID_HEADER] = v4_default();
    }
    while (true) {
      try {
        if (HttpRequest.isInstance(request2)) {
          request2.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
        }
        const { response, output } = await next(args);
        retryStrategy.recordSuccess(retryToken);
        output.$metadata.attempts = attempts + 1;
        output.$metadata.totalRetryDelay = totalRetryDelay;
        return { response, output };
      } catch (e6) {
        const retryErrorInfo = getRetryErrorInfo(e6);
        lastError = asSdkError(e6);
        try {
          retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
        } catch (refreshError) {
          if (!lastError.$metadata) {
            lastError.$metadata = {};
          }
          lastError.$metadata.attempts = attempts + 1;
          lastError.$metadata.totalRetryDelay = totalRetryDelay;
          throw lastError;
        }
        attempts = retryToken.getRetryCount();
        const delay = retryToken.getRetryDelay();
        totalRetryDelay += delay;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  } else {
    retryStrategy = retryStrategy;
    if (retryStrategy?.mode)
      context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
    return retryStrategy.retry(next, args);
  }
}, "retryMiddleware");
var isRetryStrategyV2 = /* @__PURE__ */ __name((retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined", "isRetryStrategyV2");
var getRetryErrorInfo = /* @__PURE__ */ __name((error) => {
  const errorInfo = {
    errorType: getRetryErrorType(error)
  };
  const retryAfterHint = getRetryAfterHint(error.$response);
  if (retryAfterHint) {
    errorInfo.retryAfterHint = retryAfterHint;
  }
  return errorInfo;
}, "getRetryErrorInfo");
var getRetryErrorType = /* @__PURE__ */ __name((error) => {
  if (isThrottlingError(error))
    return "THROTTLING";
  if (isTransientError(error))
    return "TRANSIENT";
  if (isServerError(error))
    return "SERVER_ERROR";
  return "CLIENT_ERROR";
}, "getRetryErrorType");
var retryMiddlewareOptions = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: true
};
var getRetryPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
  }
}), "getRetryPlugin");
var getRetryAfterHint = /* @__PURE__ */ __name((response) => {
  if (!HttpResponse.isInstance(response))
    return;
  const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
  if (!retryAfterHeaderName)
    return;
  const retryAfter = response.headers[retryAfterHeaderName];
  const retryAfterSeconds = Number(retryAfter);
  if (!Number.isNaN(retryAfterSeconds))
    return new Date(retryAfterSeconds * 1e3);
  const retryAfterDate = new Date(retryAfter);
  return retryAfterDate;
}, "getRetryAfterHint");

// node_modules/@aws-sdk/property-provider/dist-es/ProviderError.js
var ProviderError = class extends Error {
  constructor(message, tryNextLink = true) {
    super(message);
    this.tryNextLink = tryNextLink;
    this.name = "ProviderError";
    Object.setPrototypeOf(this, ProviderError.prototype);
  }
  static from(error, tryNextLink = true) {
    return Object.assign(new this(error.message, tryNextLink), error);
  }
};
__name(ProviderError, "ProviderError");

// node_modules/@aws-sdk/property-provider/dist-es/CredentialsProviderError.js
var CredentialsProviderError = class extends ProviderError {
  constructor(message, tryNextLink = true) {
    super(message, tryNextLink);
    this.tryNextLink = tryNextLink;
    this.name = "CredentialsProviderError";
    Object.setPrototypeOf(this, CredentialsProviderError.prototype);
  }
};
__name(CredentialsProviderError, "CredentialsProviderError");

// node_modules/@aws-sdk/property-provider/dist-es/TokenProviderError.js
var TokenProviderError = class extends ProviderError {
  constructor(message, tryNextLink = true) {
    super(message, tryNextLink);
    this.tryNextLink = tryNextLink;
    this.name = "TokenProviderError";
    Object.setPrototypeOf(this, TokenProviderError.prototype);
  }
};
__name(TokenProviderError, "TokenProviderError");

// node_modules/@aws-sdk/property-provider/dist-es/chain.js
var chain = /* @__PURE__ */ __name((...providers) => async () => {
  if (providers.length === 0) {
    throw new ProviderError("No providers in chain");
  }
  let lastProviderError;
  for (const provider of providers) {
    try {
      const credentials = await provider();
      return credentials;
    } catch (err) {
      lastProviderError = err;
      if (err?.tryNextLink) {
        continue;
      }
      throw err;
    }
  }
  throw lastProviderError;
}, "chain");

// node_modules/@aws-sdk/property-provider/dist-es/fromStatic.js
var fromStatic = /* @__PURE__ */ __name((staticValue) => () => Promise.resolve(staticValue), "fromStatic");

// node_modules/@aws-sdk/property-provider/dist-es/memoize.js
var memoize = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = /* @__PURE__ */ __name(async () => {
    if (!pending) {
      pending = provider();
    }
    try {
      resolved = await pending;
      hasResult = true;
      isConstant = false;
    } finally {
      pending = void 0;
    }
    return resolved;
  }, "coalesceProvider");
  if (isExpired === void 0) {
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider();
      }
      return resolved;
    };
  }
  return async (options) => {
    if (!hasResult || options?.forceRefresh) {
      resolved = await coalesceProvider();
    }
    if (isConstant) {
      return resolved;
    }
    if (requiresRefresh && !requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider();
      return resolved;
    }
    return resolved;
  };
}, "memoize");

// node_modules/@aws-sdk/middleware-signing/dist-es/awsAuthConfiguration.js
init_dist_es10();
init_dist_es();
var CREDENTIAL_EXPIRE_WINDOW = 3e5;
var resolveAwsAuthConfig = /* @__PURE__ */ __name((input) => {
  const normalizedCreds = input.credentials ? normalizeCredentialProvider(input.credentials) : input.credentialDefaultProvider(input);
  const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
  let signer;
  if (input.signer) {
    signer = normalizeProvider(input.signer);
  } else if (input.regionInfoProvider) {
    signer = /* @__PURE__ */ __name(() => normalizeProvider(input.region)().then(async (region) => [
      await input.regionInfoProvider(region, {
        useFipsEndpoint: await input.useFipsEndpoint(),
        useDualstackEndpoint: await input.useDualstackEndpoint()
      }) || {},
      region
    ]).then(([regionInfo, region]) => {
      const { signingRegion, signingService } = regionInfo;
      input.signingRegion = input.signingRegion || signingRegion || region;
      input.signingName = input.signingName || signingService || input.serviceId;
      const params = {
        ...input,
        credentials: normalizedCreds,
        region: input.signingRegion,
        service: input.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = input.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    }), "signer");
  } else {
    signer = /* @__PURE__ */ __name(async (authScheme) => {
      authScheme = Object.assign({}, {
        name: "sigv4",
        signingName: input.signingName || input.defaultSigningName,
        signingRegion: await normalizeProvider(input.region)(),
        properties: {}
      }, authScheme);
      const signingRegion = authScheme.signingRegion;
      const signingService = authScheme.signingName;
      input.signingRegion = input.signingRegion || signingRegion;
      input.signingName = input.signingName || signingService || input.serviceId;
      const params = {
        ...input,
        credentials: normalizedCreds,
        region: input.signingRegion,
        service: input.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = input.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    }, "signer");
  }
  return {
    ...input,
    systemClockOffset,
    signingEscapePath,
    credentials: normalizedCreds,
    signer
  };
}, "resolveAwsAuthConfig");
var normalizeCredentialProvider = /* @__PURE__ */ __name((credentials) => {
  if (typeof credentials === "function") {
    return memoize(credentials, (credentials2) => credentials2.expiration !== void 0 && credentials2.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW, (credentials2) => credentials2.expiration !== void 0);
  }
  return normalizeProvider(credentials);
}, "normalizeCredentialProvider");

// node_modules/@aws-sdk/middleware-signing/dist-es/utils/getSkewCorrectedDate.js
var getSkewCorrectedDate = /* @__PURE__ */ __name((systemClockOffset) => new Date(Date.now() + systemClockOffset), "getSkewCorrectedDate");

// node_modules/@aws-sdk/middleware-signing/dist-es/utils/isClockSkewed.js
var isClockSkewed = /* @__PURE__ */ __name((clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5, "isClockSkewed");

// node_modules/@aws-sdk/middleware-signing/dist-es/utils/getUpdatedSystemClockOffset.js
var getUpdatedSystemClockOffset = /* @__PURE__ */ __name((clockTime, currentSystemClockOffset) => {
  const clockTimeInMs = Date.parse(clockTime);
  if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
    return clockTimeInMs - Date.now();
  }
  return currentSystemClockOffset;
}, "getUpdatedSystemClockOffset");

// node_modules/@aws-sdk/middleware-signing/dist-es/awsAuthMiddleware.js
var awsAuthMiddleware = /* @__PURE__ */ __name((options) => (next, context) => async function(args) {
  if (!HttpRequest.isInstance(args.request))
    return next(args);
  const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
  const multiRegionOverride = authScheme?.name === "sigv4a" ? authScheme?.signingRegionSet?.join(",") : void 0;
  const signer = await options.signer(authScheme);
  const output = await next({
    ...args,
    request: await signer.sign(args.request, {
      signingDate: getSkewCorrectedDate(options.systemClockOffset),
      signingRegion: multiRegionOverride || context["signing_region"],
      signingService: context["signing_service"]
    })
  }).catch((error) => {
    const serverTime = error.ServerTime ?? getDateHeader(error.$response);
    if (serverTime) {
      options.systemClockOffset = getUpdatedSystemClockOffset(serverTime, options.systemClockOffset);
    }
    throw error;
  });
  const dateHeader = getDateHeader(output.response);
  if (dateHeader) {
    options.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, options.systemClockOffset);
  }
  return output;
}, "awsAuthMiddleware");
var getDateHeader = /* @__PURE__ */ __name((response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0, "getDateHeader");
var awsAuthMiddlewareOptions = {
  name: "awsAuthMiddleware",
  tags: ["SIGNATURE", "AWSAUTH"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true
};
var getAwsAuthPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
  }
}), "getAwsAuthPlugin");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
function resolveUserAgentConfig(input) {
  return {
    ...input,
    customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent
  };
}
__name(resolveUserAgentConfig, "resolveUserAgentConfig");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
var partitions_default = {
  partitions: [{
    id: "aws",
    outputs: {
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      name: "aws",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    regions: {
      "af-south-1": {
        description: "Africa (Cape Town)"
      },
      "ap-east-1": {
        description: "Asia Pacific (Hong Kong)"
      },
      "ap-northeast-1": {
        description: "Asia Pacific (Tokyo)"
      },
      "ap-northeast-2": {
        description: "Asia Pacific (Seoul)"
      },
      "ap-northeast-3": {
        description: "Asia Pacific (Osaka)"
      },
      "ap-south-1": {
        description: "Asia Pacific (Mumbai)"
      },
      "ap-south-2": {
        description: "Asia Pacific (Hyderabad)"
      },
      "ap-southeast-1": {
        description: "Asia Pacific (Singapore)"
      },
      "ap-southeast-2": {
        description: "Asia Pacific (Sydney)"
      },
      "ap-southeast-3": {
        description: "Asia Pacific (Jakarta)"
      },
      "ap-southeast-4": {
        description: "Asia Pacific (Melbourne)"
      },
      "aws-global": {
        description: "AWS Standard global region"
      },
      "ca-central-1": {
        description: "Canada (Central)"
      },
      "eu-central-1": {
        description: "Europe (Frankfurt)"
      },
      "eu-central-2": {
        description: "Europe (Zurich)"
      },
      "eu-north-1": {
        description: "Europe (Stockholm)"
      },
      "eu-south-1": {
        description: "Europe (Milan)"
      },
      "eu-south-2": {
        description: "Europe (Spain)"
      },
      "eu-west-1": {
        description: "Europe (Ireland)"
      },
      "eu-west-2": {
        description: "Europe (London)"
      },
      "eu-west-3": {
        description: "Europe (Paris)"
      },
      "me-central-1": {
        description: "Middle East (UAE)"
      },
      "me-south-1": {
        description: "Middle East (Bahrain)"
      },
      "sa-east-1": {
        description: "South America (Sao Paulo)"
      },
      "us-east-1": {
        description: "US East (N. Virginia)"
      },
      "us-east-2": {
        description: "US East (Ohio)"
      },
      "us-west-1": {
        description: "US West (N. California)"
      },
      "us-west-2": {
        description: "US West (Oregon)"
      }
    }
  }, {
    id: "aws-cn",
    outputs: {
      dnsSuffix: "amazonaws.com.cn",
      dualStackDnsSuffix: "api.amazonwebservices.com.cn",
      name: "aws-cn",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    regions: {
      "aws-cn-global": {
        description: "AWS China global region"
      },
      "cn-north-1": {
        description: "China (Beijing)"
      },
      "cn-northwest-1": {
        description: "China (Ningxia)"
      }
    }
  }, {
    id: "aws-us-gov",
    outputs: {
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      name: "aws-us-gov",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    regions: {
      "aws-us-gov-global": {
        description: "AWS GovCloud (US) global region"
      },
      "us-gov-east-1": {
        description: "AWS GovCloud (US-East)"
      },
      "us-gov-west-1": {
        description: "AWS GovCloud (US-West)"
      }
    }
  }, {
    id: "aws-iso",
    outputs: {
      dnsSuffix: "c2s.ic.gov",
      dualStackDnsSuffix: "c2s.ic.gov",
      name: "aws-iso",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-global": {
        description: "AWS ISO (US) global region"
      },
      "us-iso-east-1": {
        description: "US ISO East"
      },
      "us-iso-west-1": {
        description: "US ISO WEST"
      }
    }
  }, {
    id: "aws-iso-b",
    outputs: {
      dnsSuffix: "sc2s.sgov.gov",
      dualStackDnsSuffix: "sc2s.sgov.gov",
      name: "aws-iso-b",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-b-global": {
        description: "AWS ISOB (US) global region"
      },
      "us-isob-east-1": {
        description: "US ISOB East (Ohio)"
      }
    }
  }, {
    id: "aws-iso-e",
    outputs: {
      dnsSuffix: "cloud.adc-e.uk",
      dualStackDnsSuffix: "cloud.adc-e.uk",
      name: "aws-iso-e",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
    regions: {}
  }, {
    id: "aws-iso-f",
    outputs: {
      dnsSuffix: "csp.hci.ic.gov",
      dualStackDnsSuffix: "csp.hci.ic.gov",
      name: "aws-iso-f",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
    regions: {}
  }],
  version: "1.1"
};

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
var selectedPartitionsInfo = partitions_default;
var selectedUserAgentPrefix = "";
var partition = /* @__PURE__ */ __name((value) => {
  const { partitions } = selectedPartitionsInfo;
  for (const partition2 of partitions) {
    const { regions, outputs } = partition2;
    for (const [region, regionData] of Object.entries(regions)) {
      if (region === value) {
        return {
          ...outputs,
          ...regionData
        };
      }
    }
  }
  for (const partition2 of partitions) {
    const { regionRegex, outputs } = partition2;
    if (new RegExp(regionRegex).test(value)) {
      return {
        ...outputs
      };
    }
  }
  const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
  if (!DEFAULT_PARTITION) {
    throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
  }
  return {
    ...DEFAULT_PARTITION.outputs
  };
}, "partition");
var setPartitionInfo = /* @__PURE__ */ __name((partitionsInfo, userAgentPrefix = "") => {
  selectedPartitionsInfo = partitionsInfo;
  selectedUserAgentPrefix = userAgentPrefix;
}, "setPartitionInfo");
var useDefaultPartitionInfo = /* @__PURE__ */ __name(() => {
  setPartitionInfo(partitions_default, "");
}, "useDefaultPartitionInfo");
var getUserAgentPrefix = /* @__PURE__ */ __name(() => selectedUserAgentPrefix, "getUserAgentPrefix");

// node_modules/@aws-sdk/util-endpoints/dist-es/debug/debugId.js
var debugId = "endpoints";

// node_modules/@aws-sdk/util-endpoints/dist-es/debug/toDebugString.js
function toDebugString(input) {
  if (typeof input !== "object" || input == null) {
    return input;
  }
  if ("ref" in input) {
    return `$${toDebugString(input.ref)}`;
  }
  if ("fn" in input) {
    return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
  }
  return JSON.stringify(input, null, 2);
}
__name(toDebugString, "toDebugString");

// node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js
var EndpointError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "EndpointError";
  }
};
__name(EndpointError, "EndpointError");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/index.js
var lib_exports = {};
__export(lib_exports, {
  aws: () => aws_exports,
  booleanEquals: () => booleanEquals,
  getAttr: () => getAttr,
  isSet: () => isSet,
  isValidHostLabel: () => isValidHostLabel,
  not: () => not,
  parseURL: () => parseURL,
  stringEquals: () => stringEquals,
  substring: () => substring,
  uriEncode: () => uriEncode
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/index.js
var aws_exports = {};
__export(aws_exports, {
  getUserAgentPrefix: () => getUserAgentPrefix,
  isVirtualHostableS3Bucket: () => isVirtualHostableS3Bucket,
  parseArn: () => parseArn,
  partition: () => partition,
  setPartitionInfo: () => setPartitionInfo,
  useDefaultPartitionInfo: () => useDefaultPartitionInfo
});

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js
var IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
var isIpAddress = /* @__PURE__ */ __name((value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]"), "isIpAddress");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/isValidHostLabel.js
var VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
var isValidHostLabel = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
  if (!allowSubDomains) {
    return VALID_HOST_LABEL_REGEX.test(value);
  }
  const labels = value.split(".");
  for (const label of labels) {
    if (!isValidHostLabel(label)) {
      return false;
    }
  }
  return true;
}, "isValidHostLabel");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
var isVirtualHostableS3Bucket = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
  if (allowSubDomains) {
    for (const label of value.split(".")) {
      if (!isVirtualHostableS3Bucket(label)) {
        return false;
      }
    }
    return true;
  }
  if (!isValidHostLabel(value)) {
    return false;
  }
  if (value.length < 3 || value.length > 63) {
    return false;
  }
  if (value !== value.toLowerCase()) {
    return false;
  }
  if (isIpAddress(value)) {
    return false;
  }
  return true;
}, "isVirtualHostableS3Bucket");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
var parseArn = /* @__PURE__ */ __name((value) => {
  const segments = value.split(":");
  if (segments.length < 6)
    return null;
  const [arn, partition2, service, region, accountId, ...resourceId] = segments;
  if (arn !== "arn" || partition2 === "" || service === "" || resourceId[0] === "")
    return null;
  return {
    partition: partition2,
    service,
    region,
    accountId,
    resourceId: resourceId[0].includes("/") ? resourceId[0].split("/") : resourceId
  };
}, "parseArn");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/booleanEquals.js
var booleanEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "booleanEquals");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/getAttrPathList.js
var getAttrPathList = /* @__PURE__ */ __name((path) => {
  const parts = path.split(".");
  const pathList = [];
  for (const part of parts) {
    const squareBracketIndex = part.indexOf("[");
    if (squareBracketIndex !== -1) {
      if (part.indexOf("]") !== part.length - 1) {
        throw new EndpointError(`Path: '${path}' does not end with ']'`);
      }
      const arrayIndex = part.slice(squareBracketIndex + 1, -1);
      if (Number.isNaN(parseInt(arrayIndex))) {
        throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
      }
      if (squareBracketIndex !== 0) {
        pathList.push(part.slice(0, squareBracketIndex));
      }
      pathList.push(arrayIndex);
    } else {
      pathList.push(part);
    }
  }
  return pathList;
}, "getAttrPathList");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/getAttr.js
var getAttr = /* @__PURE__ */ __name((value, path) => getAttrPathList(path).reduce((acc, index) => {
  if (typeof acc !== "object") {
    throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
  } else if (Array.isArray(acc)) {
    return acc[parseInt(index)];
  }
  return acc[index];
}, value), "getAttr");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/isSet.js
var isSet = /* @__PURE__ */ __name((value) => value != null, "isSet");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/not.js
var not = /* @__PURE__ */ __name((value) => !value, "not");

// node_modules/@aws-sdk/types/dist-es/auth.js
var HttpAuthLocation;
(function(HttpAuthLocation3) {
  HttpAuthLocation3["HEADER"] = "header";
  HttpAuthLocation3["QUERY"] = "query";
})(HttpAuthLocation || (HttpAuthLocation = {}));

// node_modules/@aws-sdk/types/dist-es/dns.js
var HostAddressType;
(function(HostAddressType2) {
  HostAddressType2["AAAA"] = "AAAA";
  HostAddressType2["A"] = "A";
})(HostAddressType || (HostAddressType = {}));

// node_modules/@aws-sdk/types/dist-es/endpoint.js
var EndpointURLScheme;
(function(EndpointURLScheme3) {
  EndpointURLScheme3["HTTP"] = "http";
  EndpointURLScheme3["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));

// node_modules/@aws-sdk/types/dist-es/transfer.js
var RequestHandlerProtocol;
(function(RequestHandlerProtocol3) {
  RequestHandlerProtocol3["HTTP_0_9"] = "http/0.9";
  RequestHandlerProtocol3["HTTP_1_0"] = "http/1.0";
  RequestHandlerProtocol3["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol || (RequestHandlerProtocol = {}));

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/parseURL.js
var DEFAULT_PORTS = {
  [EndpointURLScheme.HTTP]: 80,
  [EndpointURLScheme.HTTPS]: 443
};
var parseURL = /* @__PURE__ */ __name((value) => {
  const whatwgURL = (() => {
    try {
      if (value instanceof URL) {
        return value;
      }
      if (typeof value === "object" && "hostname" in value) {
        const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
        const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
        url.search = Object.entries(query).map(([k6, v5]) => `${k6}=${v5}`).join("&");
        return url;
      }
      return new URL(value);
    } catch (error) {
      return null;
    }
  })();
  if (!whatwgURL) {
    console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
    return null;
  }
  const urlString = whatwgURL.href;
  const { host, hostname, pathname, protocol, search } = whatwgURL;
  if (search) {
    return null;
  }
  const scheme = protocol.slice(0, -1);
  if (!Object.values(EndpointURLScheme).includes(scheme)) {
    return null;
  }
  const isIp = isIpAddress(hostname);
  const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
  const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
  return {
    scheme,
    authority,
    path: pathname,
    normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
    isIp
  };
}, "parseURL");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/stringEquals.js
var stringEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "stringEquals");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/substring.js
var substring = /* @__PURE__ */ __name((input, start, stop, reverse) => {
  if (start >= stop || input.length < stop) {
    return null;
  }
  if (!reverse) {
    return input.substring(start, stop);
  }
  return input.substring(input.length - stop, input.length - start);
}, "substring");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/uriEncode.js
var uriEncode = /* @__PURE__ */ __name((value) => encodeURIComponent(value).replace(/[!*'()]/g, (c6) => `%${c6.charCodeAt(0).toString(16).toUpperCase()}`), "uriEncode");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateTemplate.js
var evaluateTemplate = /* @__PURE__ */ __name((template, options) => {
  const evaluatedTemplateArr = [];
  const templateContext = {
    ...options.endpointParams,
    ...options.referenceRecord
  };
  let currentIndex = 0;
  while (currentIndex < template.length) {
    const openingBraceIndex = template.indexOf("{", currentIndex);
    if (openingBraceIndex === -1) {
      evaluatedTemplateArr.push(template.slice(currentIndex));
      break;
    }
    evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
    const closingBraceIndex = template.indexOf("}", openingBraceIndex);
    if (closingBraceIndex === -1) {
      evaluatedTemplateArr.push(template.slice(openingBraceIndex));
      break;
    }
    if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
      evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
      currentIndex = closingBraceIndex + 2;
    }
    const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
    if (parameterName.includes("#")) {
      const [refName, attrName] = parameterName.split("#");
      evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
    } else {
      evaluatedTemplateArr.push(templateContext[parameterName]);
    }
    currentIndex = closingBraceIndex + 1;
  }
  return evaluatedTemplateArr.join("");
}, "evaluateTemplate");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/getReferenceValue.js
var getReferenceValue = /* @__PURE__ */ __name(({ ref }, options) => {
  const referenceRecord = {
    ...options.endpointParams,
    ...options.referenceRecord
  };
  return referenceRecord[ref];
}, "getReferenceValue");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateExpression.js
var evaluateExpression = /* @__PURE__ */ __name((obj, keyName, options) => {
  if (typeof obj === "string") {
    return evaluateTemplate(obj, options);
  } else if (obj["fn"]) {
    return callFunction(obj, options);
  } else if (obj["ref"]) {
    return getReferenceValue(obj, options);
  }
  throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
}, "evaluateExpression");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/callFunction.js
var callFunction = /* @__PURE__ */ __name(({ fn, argv }, options) => {
  const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
  return fn.split(".").reduce((acc, key) => acc[key], lib_exports)(...evaluatedArgs);
}, "callFunction");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateCondition.js
var evaluateCondition = /* @__PURE__ */ __name(({ assign, ...fnArgs }, options) => {
  if (assign && assign in options.referenceRecord) {
    throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
  }
  const value = callFunction(fnArgs, options);
  options.logger?.debug?.(debugId, `evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
  return {
    result: value === "" ? true : !!value,
    ...assign != null && { toAssign: { name: assign, value } }
  };
}, "evaluateCondition");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateConditions.js
var evaluateConditions = /* @__PURE__ */ __name((conditions = [], options) => {
  const conditionsReferenceRecord = {};
  for (const condition of conditions) {
    const { result, toAssign } = evaluateCondition(condition, {
      ...options,
      referenceRecord: {
        ...options.referenceRecord,
        ...conditionsReferenceRecord
      }
    });
    if (!result) {
      return { result };
    }
    if (toAssign) {
      conditionsReferenceRecord[toAssign.name] = toAssign.value;
      options.logger?.debug?.(debugId, `assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
    }
  }
  return { result: true, referenceRecord: conditionsReferenceRecord };
}, "evaluateConditions");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointHeaders.js
var getEndpointHeaders = /* @__PURE__ */ __name((headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
  ...acc,
  [headerKey]: headerVal.map((headerValEntry) => {
    const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
    if (typeof processedExpr !== "string") {
      throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
    }
    return processedExpr;
  })
}), {}), "getEndpointHeaders");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointProperty.js
var getEndpointProperty = /* @__PURE__ */ __name((property, options) => {
  if (Array.isArray(property)) {
    return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
  }
  switch (typeof property) {
    case "string":
      return evaluateTemplate(property, options);
    case "object":
      if (property === null) {
        throw new EndpointError(`Unexpected endpoint property: ${property}`);
      }
      return getEndpointProperties(property, options);
    case "boolean":
      return property;
    default:
      throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
  }
}, "getEndpointProperty");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointProperties.js
var getEndpointProperties = /* @__PURE__ */ __name((properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
  ...acc,
  [propertyKey]: getEndpointProperty(propertyVal, options)
}), {}), "getEndpointProperties");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointUrl.js
var getEndpointUrl = /* @__PURE__ */ __name((endpointUrl, options) => {
  const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
  if (typeof expression === "string") {
    try {
      return new URL(expression);
    } catch (error) {
      console.error(`Failed to construct URL with ${expression}`, error);
      throw error;
    }
  }
  throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
}, "getEndpointUrl");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateEndpointRule.js
var evaluateEndpointRule = /* @__PURE__ */ __name((endpointRule, options) => {
  const { conditions, endpoint } = endpointRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  const endpointRuleOptions = {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  };
  const { url, properties, headers } = endpoint;
  options.logger?.debug?.(debugId, `Resolving endpoint from template: ${toDebugString(endpoint)}`);
  return {
    ...headers != void 0 && {
      headers: getEndpointHeaders(headers, endpointRuleOptions)
    },
    ...properties != void 0 && {
      properties: getEndpointProperties(properties, endpointRuleOptions)
    },
    url: getEndpointUrl(url, endpointRuleOptions)
  };
}, "evaluateEndpointRule");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateErrorRule.js
var evaluateErrorRule = /* @__PURE__ */ __name((errorRule, options) => {
  const { conditions, error } = errorRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  throw new EndpointError(evaluateExpression(error, "Error", {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  }));
}, "evaluateErrorRule");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateTreeRule.js
var evaluateTreeRule = /* @__PURE__ */ __name((treeRule, options) => {
  const { conditions, rules } = treeRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  return evaluateRules(rules, {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  });
}, "evaluateTreeRule");

// node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateRules.js
var evaluateRules = /* @__PURE__ */ __name((rules, options) => {
  for (const rule of rules) {
    if (rule.type === "endpoint") {
      const endpointOrUndefined = evaluateEndpointRule(rule, options);
      if (endpointOrUndefined) {
        return endpointOrUndefined;
      }
    } else if (rule.type === "error") {
      evaluateErrorRule(rule, options);
    } else if (rule.type === "tree") {
      const endpointOrUndefined = evaluateTreeRule(rule, options);
      if (endpointOrUndefined) {
        return endpointOrUndefined;
      }
    } else {
      throw new EndpointError(`Unknown endpoint rule: ${rule}`);
    }
  }
  throw new EndpointError(`Rules evaluation failed`);
}, "evaluateRules");

// node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js
var resolveEndpoint = /* @__PURE__ */ __name((ruleSetObject, options) => {
  const { endpointParams, logger: logger2 } = options;
  const { parameters, rules } = ruleSetObject;
  options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
  const paramsWithDefault = Object.entries(parameters).filter(([, v5]) => v5.default != null).map(([k6, v5]) => [k6, v5.default]);
  if (paramsWithDefault.length > 0) {
    for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
      endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
    }
  }
  const requiredParams = Object.entries(parameters).filter(([, v5]) => v5.required).map(([k6]) => k6);
  for (const requiredParam of requiredParams) {
    if (endpointParams[requiredParam] == null) {
      throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
    }
  }
  const endpoint = evaluateRules(rules, { endpointParams, logger: logger2, referenceRecord: {} });
  if (options.endpointParams?.Endpoint) {
    try {
      const givenEndpoint = new URL(options.endpointParams.Endpoint);
      const { protocol, port } = givenEndpoint;
      endpoint.url.protocol = protocol;
      endpoint.url.port = port;
    } catch (e6) {
    }
  }
  options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
  return endpoint;
}, "resolveEndpoint");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
var USER_AGENT = "user-agent";
var X_AMZ_USER_AGENT = "x-amz-user-agent";
var SPACE = " ";
var UA_NAME_SEPARATOR = "/";
var UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
var UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
var UA_ESCAPE_CHAR = "-";

// node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
var userAgentMiddleware = /* @__PURE__ */ __name((options) => (next, context) => async (args) => {
  const { request: request2 } = args;
  if (!HttpRequest.isInstance(request2))
    return next(args);
  const { headers } = request2;
  const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
  const defaultUserAgent2 = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
  const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
  const prefix = getUserAgentPrefix();
  const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent2, ...userAgent, ...customUserAgent]).join(SPACE);
  const normalUAValue = [
    ...defaultUserAgent2.filter((section) => section.startsWith("aws-sdk-")),
    ...customUserAgent
  ].join(SPACE);
  if (options.runtime !== "browser") {
    if (normalUAValue) {
      headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
    }
    headers[USER_AGENT] = sdkUserAgentValue;
  } else {
    headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
  }
  return next({
    ...args,
    request: request2
  });
}, "userAgentMiddleware");
var escapeUserAgent = /* @__PURE__ */ __name((userAgentPair) => {
  const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
  const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
  const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
  const prefix = name.substring(0, prefixSeparatorIndex);
  let uaName = name.substring(prefixSeparatorIndex + 1);
  if (prefix === "api") {
    uaName = uaName.toLowerCase();
  }
  return [prefix, uaName, version].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
    switch (index) {
      case 0:
        return item;
      case 1:
        return `${acc}/${item}`;
      default:
        return `${acc}#${item}`;
    }
  }, "");
}, "escapeUserAgent");
var getUserAgentMiddlewareOptions = {
  name: "getUserAgentMiddleware",
  step: "build",
  priority: "low",
  tags: ["SET_USER_AGENT", "USER_AGENT"],
  override: true
};
var getUserAgentPlugin = /* @__PURE__ */ __name((config) => ({
  applyToStack: (clientStack) => {
    clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
  }
}), "getUserAgentPlugin");

// node_modules/@aws-sdk/smithy-client/dist-es/NoOpLogger.js
var NoOpLogger = class {
  trace() {
  }
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
};
__name(NoOpLogger, "NoOpLogger");

// node_modules/@aws-sdk/middleware-stack/dist-es/MiddlewareStack.js
var constructStack = /* @__PURE__ */ __name(() => {
  let absoluteEntries = [];
  let relativeEntries = [];
  const entriesNameSet = /* @__PURE__ */ new Set();
  const sort = /* @__PURE__ */ __name((entries) => entries.sort((a6, b6) => stepWeights[b6.step] - stepWeights[a6.step] || priorityWeights[b6.priority || "normal"] - priorityWeights[a6.priority || "normal"]), "sort");
  const removeByName = /* @__PURE__ */ __name((toRemove) => {
    let isRemoved = false;
    const filterCb = /* @__PURE__ */ __name((entry) => {
      if (entry.name && entry.name === toRemove) {
        isRemoved = true;
        entriesNameSet.delete(toRemove);
        return false;
      }
      return true;
    }, "filterCb");
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  }, "removeByName");
  const removeByReference = /* @__PURE__ */ __name((toRemove) => {
    let isRemoved = false;
    const filterCb = /* @__PURE__ */ __name((entry) => {
      if (entry.middleware === toRemove) {
        isRemoved = true;
        if (entry.name)
          entriesNameSet.delete(entry.name);
        return false;
      }
      return true;
    }, "filterCb");
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  }, "removeByReference");
  const cloneTo = /* @__PURE__ */ __name((toStack) => {
    absoluteEntries.forEach((entry) => {
      toStack.add(entry.middleware, { ...entry });
    });
    relativeEntries.forEach((entry) => {
      toStack.addRelativeTo(entry.middleware, { ...entry });
    });
    return toStack;
  }, "cloneTo");
  const expandRelativeMiddlewareList = /* @__PURE__ */ __name((from) => {
    const expandedMiddlewareList = [];
    from.before.forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    expandedMiddlewareList.push(from);
    from.after.reverse().forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    return expandedMiddlewareList;
  }, "expandRelativeMiddlewareList");
  const getMiddlewareList = /* @__PURE__ */ __name((debug = false) => {
    const normalizedAbsoluteEntries = [];
    const normalizedRelativeEntries = [];
    const normalizedEntriesNameMap = {};
    absoluteEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: []
      };
      if (normalizedEntry.name)
        normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
      normalizedAbsoluteEntries.push(normalizedEntry);
    });
    relativeEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: []
      };
      if (normalizedEntry.name)
        normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
      normalizedRelativeEntries.push(normalizedEntry);
    });
    normalizedRelativeEntries.forEach((entry) => {
      if (entry.toMiddleware) {
        const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
        if (toMiddleware === void 0) {
          if (debug) {
            return;
          }
          throw new Error(`${entry.toMiddleware} is not found when adding ${entry.name || "anonymous"} middleware ${entry.relation} ${entry.toMiddleware}`);
        }
        if (entry.relation === "after") {
          toMiddleware.after.push(entry);
        }
        if (entry.relation === "before") {
          toMiddleware.before.push(entry);
        }
      }
    });
    const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expendedMiddlewareList) => {
      wholeList.push(...expendedMiddlewareList);
      return wholeList;
    }, []);
    return mainChain;
  }, "getMiddlewareList");
  const stack = {
    add: (middleware, options = {}) => {
      const { name, override } = options;
      const entry = {
        step: "initialize",
        priority: "normal",
        middleware,
        ...options
      };
      if (name) {
        if (entriesNameSet.has(name)) {
          if (!override)
            throw new Error(`Duplicate middleware name '${name}'`);
          const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === name);
          const toOverride = absoluteEntries[toOverrideIndex];
          if (toOverride.step !== entry.step || toOverride.priority !== entry.priority) {
            throw new Error(`"${name}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by same-name middleware with ${entry.priority} priority in ${entry.step} step.`);
          }
          absoluteEntries.splice(toOverrideIndex, 1);
        }
        entriesNameSet.add(name);
      }
      absoluteEntries.push(entry);
    },
    addRelativeTo: (middleware, options) => {
      const { name, override } = options;
      const entry = {
        middleware,
        ...options
      };
      if (name) {
        if (entriesNameSet.has(name)) {
          if (!override)
            throw new Error(`Duplicate middleware name '${name}'`);
          const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === name);
          const toOverride = relativeEntries[toOverrideIndex];
          if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
            throw new Error(`"${name}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by same-name middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
          }
          relativeEntries.splice(toOverrideIndex, 1);
        }
        entriesNameSet.add(name);
      }
      relativeEntries.push(entry);
    },
    clone: () => cloneTo(constructStack()),
    use: (plugin) => {
      plugin.applyToStack(stack);
    },
    remove: (toRemove) => {
      if (typeof toRemove === "string")
        return removeByName(toRemove);
      else
        return removeByReference(toRemove);
    },
    removeByTag: (toRemove) => {
      let isRemoved = false;
      const filterCb = /* @__PURE__ */ __name((entry) => {
        const { tags, name } = entry;
        if (tags && tags.includes(toRemove)) {
          if (name)
            entriesNameSet.delete(name);
          isRemoved = true;
          return false;
        }
        return true;
      }, "filterCb");
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    },
    concat: (from) => {
      const cloned = cloneTo(constructStack());
      cloned.use(from);
      return cloned;
    },
    applyToStack: cloneTo,
    identify: () => {
      return getMiddlewareList(true).map((mw) => {
        return mw.name + ": " + (mw.tags || []).join(",");
      });
    },
    resolve: (handler, context) => {
      for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
        handler = middleware(handler, context);
      }
      return handler;
    }
  };
  return stack;
}, "constructStack");
var stepWeights = {
  initialize: 5,
  serialize: 4,
  build: 3,
  finalizeRequest: 2,
  deserialize: 1
};
var priorityWeights = {
  high: 3,
  normal: 2,
  low: 1
};

// node_modules/@aws-sdk/smithy-client/dist-es/client.js
var Client = class {
  constructor(config) {
    this.middlewareStack = constructStack();
    this.config = config;
  }
  send(command, optionsOrCb, cb) {
    const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
    const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
    const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
    if (callback) {
      handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
      });
    } else {
      return handler(command).then((result) => result.output);
    }
  }
  destroy() {
    if (this.config.requestHandler.destroy)
      this.config.requestHandler.destroy();
  }
};
__name(Client, "Client");

// node_modules/@aws-sdk/smithy-client/dist-es/command.js
var Command = class {
  constructor() {
    this.middlewareStack = constructStack();
  }
};
__name(Command, "Command");

// node_modules/@aws-sdk/smithy-client/dist-es/constants.js
var SENSITIVE_STRING = "***SensitiveInformation***";

// node_modules/@aws-sdk/smithy-client/dist-es/parse-utils.js
var expectNumber = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    const parsed = parseFloat(value);
    if (!Number.isNaN(parsed)) {
      if (String(parsed) !== String(value)) {
        logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
      }
      return parsed;
    }
  }
  if (typeof value === "number") {
    return value;
  }
  throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
}, "expectNumber");
var MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
var expectFloat32 = /* @__PURE__ */ __name((value) => {
  const expected = expectNumber(value);
  if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
    if (Math.abs(expected) > MAX_FLOAT) {
      throw new TypeError(`Expected 32-bit float, got ${value}`);
    }
  }
  return expected;
}, "expectFloat32");
var expectLong = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (Number.isInteger(value) && !Number.isNaN(value)) {
    return value;
  }
  throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
}, "expectLong");
var expectInt32 = /* @__PURE__ */ __name((value) => expectSizedInt(value, 32), "expectInt32");
var expectShort = /* @__PURE__ */ __name((value) => expectSizedInt(value, 16), "expectShort");
var expectByte = /* @__PURE__ */ __name((value) => expectSizedInt(value, 8), "expectByte");
var expectSizedInt = /* @__PURE__ */ __name((value, size) => {
  const expected = expectLong(value);
  if (expected !== void 0 && castInt(expected, size) !== expected) {
    throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
  }
  return expected;
}, "expectSizedInt");
var castInt = /* @__PURE__ */ __name((value, size) => {
  switch (size) {
    case 32:
      return Int32Array.of(value)[0];
    case 16:
      return Int16Array.of(value)[0];
    case 8:
      return Int8Array.of(value)[0];
  }
}, "castInt");
var expectNonNull = /* @__PURE__ */ __name((value, location) => {
  if (value === null || value === void 0) {
    if (location) {
      throw new TypeError(`Expected a non-null value for ${location}`);
    }
    throw new TypeError("Expected a non-null value");
  }
  return value;
}, "expectNonNull");
var expectObject = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "object" && !Array.isArray(value)) {
    return value;
  }
  const receivedType = Array.isArray(value) ? "array" : typeof value;
  throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
}, "expectObject");
var expectString = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    return value;
  }
  if (["boolean", "number", "bigint"].includes(typeof value)) {
    logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
    return String(value);
  }
  throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
}, "expectString");
var strictParseDouble = /* @__PURE__ */ __name((value) => {
  if (typeof value == "string") {
    return expectNumber(parseNumber(value));
  }
  return expectNumber(value);
}, "strictParseDouble");
var strictParseFloat32 = /* @__PURE__ */ __name((value) => {
  if (typeof value == "string") {
    return expectFloat32(parseNumber(value));
  }
  return expectFloat32(value);
}, "strictParseFloat32");
var NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
var parseNumber = /* @__PURE__ */ __name((value) => {
  const matches = value.match(NUMBER_REGEX);
  if (matches === null || matches[0].length !== value.length) {
    throw new TypeError(`Expected real number, got implicit NaN`);
  }
  return parseFloat(value);
}, "parseNumber");
var strictParseInt32 = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectInt32(parseNumber(value));
  }
  return expectInt32(value);
}, "strictParseInt32");
var strictParseShort = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectShort(parseNumber(value));
  }
  return expectShort(value);
}, "strictParseShort");
var strictParseByte = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectByte(parseNumber(value));
  }
  return expectByte(value);
}, "strictParseByte");
var stackTraceWarning = /* @__PURE__ */ __name((message) => {
  return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s6) => !s6.includes("stackTraceWarning")).join("\n");
}, "stackTraceWarning");
var logger = {
  warn: console.warn
};

// node_modules/@aws-sdk/smithy-client/dist-es/date-utils.js
var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
var RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
var parseRfc3339DateTimeWithOffset = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value !== "string") {
    throw new TypeError("RFC-3339 date-times must be expressed as strings");
  }
  const match = RFC3339_WITH_OFFSET.exec(value);
  if (!match) {
    throw new TypeError("Invalid RFC-3339 date-time value");
  }
  const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
  const year = strictParseShort(stripLeadingZeroes(yearStr));
  const month = parseDateValue(monthStr, "month", 1, 12);
  const day = parseDateValue(dayStr, "day", 1, 31);
  const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
  if (offsetStr.toUpperCase() != "Z") {
    date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
  }
  return date;
}, "parseRfc3339DateTimeWithOffset");
var IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
var RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
var ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
var parseEpochTimestamp = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  let valueAsDouble;
  if (typeof value === "number") {
    valueAsDouble = value;
  } else if (typeof value === "string") {
    valueAsDouble = strictParseDouble(value);
  } else {
    throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
  }
  if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
    throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
  }
  return new Date(Math.round(valueAsDouble * 1e3));
}, "parseEpochTimestamp");
var buildDate = /* @__PURE__ */ __name((year, month, day, time) => {
  const adjustedMonth = month - 1;
  validateDayOfMonth(year, adjustedMonth, day);
  return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
}, "buildDate");
var FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var validateDayOfMonth = /* @__PURE__ */ __name((year, month, day) => {
  let maxDays = DAYS_IN_MONTH[month];
  if (month === 1 && isLeapYear(year)) {
    maxDays = 29;
  }
  if (day > maxDays) {
    throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
  }
}, "validateDayOfMonth");
var isLeapYear = /* @__PURE__ */ __name((year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}, "isLeapYear");
var parseDateValue = /* @__PURE__ */ __name((value, type, lower, upper) => {
  const dateVal = strictParseByte(stripLeadingZeroes(value));
  if (dateVal < lower || dateVal > upper) {
    throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
  }
  return dateVal;
}, "parseDateValue");
var parseMilliseconds = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return 0;
  }
  return strictParseFloat32("0." + value) * 1e3;
}, "parseMilliseconds");
var parseOffsetToMilliseconds = /* @__PURE__ */ __name((value) => {
  const directionStr = value[0];
  let direction = 1;
  if (directionStr == "+") {
    direction = 1;
  } else if (directionStr == "-") {
    direction = -1;
  } else {
    throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
  }
  const hour = Number(value.substring(1, 3));
  const minute = Number(value.substring(4, 6));
  return direction * (hour * 60 + minute) * 60 * 1e3;
}, "parseOffsetToMilliseconds");
var stripLeadingZeroes = /* @__PURE__ */ __name((value) => {
  let idx = 0;
  while (idx < value.length - 1 && value.charAt(idx) === "0") {
    idx++;
  }
  if (idx === 0) {
    return value;
  }
  return value.slice(idx);
}, "stripLeadingZeroes");

// node_modules/@aws-sdk/smithy-client/dist-es/exceptions.js
var ServiceException = class extends Error {
  constructor(options) {
    super(options.message);
    Object.setPrototypeOf(this, ServiceException.prototype);
    this.name = options.name;
    this.$fault = options.$fault;
    this.$metadata = options.$metadata;
  }
};
__name(ServiceException, "ServiceException");
var decorateServiceException = /* @__PURE__ */ __name((exception, additions = {}) => {
  Object.entries(additions).filter(([, v5]) => v5 !== void 0).forEach(([k6, v5]) => {
    if (exception[k6] == void 0 || exception[k6] === "") {
      exception[k6] = v5;
    }
  });
  const message = exception.message || exception.Message || "UnknownError";
  exception.message = message;
  delete exception.Message;
  return exception;
}, "decorateServiceException");

// node_modules/@aws-sdk/smithy-client/dist-es/default-error-handler.js
var throwDefaultError = /* @__PURE__ */ __name(({ output, parsedBody, exceptionCtor, errorCode }) => {
  const $metadata = deserializeMetadata(output);
  const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
  const response = new exceptionCtor({
    name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
    $fault: "client",
    $metadata
  });
  throw decorateServiceException(response, parsedBody);
}, "throwDefaultError");
var withBaseException = /* @__PURE__ */ __name((ExceptionCtor) => {
  return ({ output, parsedBody, errorCode }) => {
    throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
  };
}, "withBaseException");
var deserializeMetadata = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");

// node_modules/@aws-sdk/smithy-client/dist-es/defaults-mode.js
var loadConfigsForDefaultMode = /* @__PURE__ */ __name((mode) => {
  switch (mode) {
    case "standard":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "in-region":
      return {
        retryMode: "standard",
        connectionTimeout: 1100
      };
    case "cross-region":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "mobile":
      return {
        retryMode: "standard",
        connectionTimeout: 3e4
      };
    default:
      return {};
  }
}, "loadConfigsForDefaultMode");

// node_modules/@aws-sdk/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
var warningEmitted = false;
var emitWarningIfUnsupportedVersion = /* @__PURE__ */ __name((version) => {
  if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 14) {
    warningEmitted = true;
  }
}, "emitWarningIfUnsupportedVersion");

// node_modules/@aws-sdk/smithy-client/dist-es/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c6) {
    return "%" + c6.charCodeAt(0).toString(16).toUpperCase();
  });
}
__name(extendedEncodeURIComponent, "extendedEncodeURIComponent");

// node_modules/@aws-sdk/smithy-client/dist-es/get-value-from-text-node.js
var getValueFromTextNode = /* @__PURE__ */ __name((obj) => {
  const textNodeName = "#text";
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
      obj[key] = obj[key][textNodeName];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      obj[key] = getValueFromTextNode(obj[key]);
    }
  }
  return obj;
}, "getValueFromTextNode");

// node_modules/@aws-sdk/smithy-client/dist-es/lazy-json.js
var StringWrapper = /* @__PURE__ */ __name(function() {
  const Class = Object.getPrototypeOf(this).constructor;
  const Constructor = Function.bind.apply(String, [null, ...arguments]);
  const instance = new Constructor();
  Object.setPrototypeOf(instance, Class.prototype);
  return instance;
}, "StringWrapper");
StringWrapper.prototype = Object.create(String.prototype, {
  constructor: {
    value: StringWrapper,
    enumerable: false,
    writable: true,
    configurable: true
  }
});
Object.setPrototypeOf(StringWrapper, String);

// node_modules/@aws-sdk/smithy-client/dist-es/object-mapping.js
function map(arg0, arg1, arg2) {
  let target;
  let filter;
  let instructions;
  if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
    target = {};
    instructions = arg0;
  } else {
    target = arg0;
    if (typeof arg1 === "function") {
      filter = arg1;
      instructions = arg2;
      return mapWithFilter(target, filter, instructions);
    } else {
      instructions = arg1;
    }
  }
  for (const key of Object.keys(instructions)) {
    if (!Array.isArray(instructions[key])) {
      target[key] = instructions[key];
      continue;
    }
    applyInstruction(target, null, instructions, key);
  }
  return target;
}
__name(map, "map");
var take = /* @__PURE__ */ __name((source, instructions) => {
  const out = {};
  for (const key in instructions) {
    applyInstruction(out, source, instructions, key);
  }
  return out;
}, "take");
var mapWithFilter = /* @__PURE__ */ __name((target, filter, instructions) => {
  return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
    if (Array.isArray(value)) {
      _instructions[key] = value;
    } else {
      if (typeof value === "function") {
        _instructions[key] = [filter, value()];
      } else {
        _instructions[key] = [filter, value];
      }
    }
    return _instructions;
  }, {}));
}, "mapWithFilter");
var applyInstruction = /* @__PURE__ */ __name((target, source, instructions, targetKey) => {
  if (source !== null) {
    let instruction = instructions[targetKey];
    if (typeof instruction === "function") {
      instruction = [, instruction];
    }
    const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
    if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
      target[targetKey] = valueFn(source[sourceKey]);
    }
    return;
  }
  let [filter, value] = instructions[targetKey];
  if (typeof value === "function") {
    let _value;
    const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
    const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
    if (defaultFilterPassed) {
      target[targetKey] = _value;
    } else if (customFilterPassed) {
      target[targetKey] = value();
    }
  } else {
    const defaultFilterPassed = filter === void 0 && value != null;
    const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
    if (defaultFilterPassed || customFilterPassed) {
      target[targetKey] = value;
    }
  }
}, "applyInstruction");
var nonNullish = /* @__PURE__ */ __name((_) => _ != null, "nonNullish");
var pass = /* @__PURE__ */ __name((_) => _, "pass");

// node_modules/@aws-sdk/smithy-client/dist-es/serde-json.js
var _json = /* @__PURE__ */ __name((obj) => {
  if (obj == null) {
    return {};
  }
  if (Array.isArray(obj)) {
    return obj.filter((_) => _ != null);
  }
  if (typeof obj === "object") {
    const target = {};
    for (const key of Object.keys(obj)) {
      if (obj[key] == null) {
        continue;
      }
      target[key] = _json(obj[key]);
    }
    return target;
  }
  return obj;
}, "_json");

// node_modules/@aws-sdk/client-ssm/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters = /* @__PURE__ */ __name((options) => {
  return {
    ...options,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "ssm"
  };
}, "resolveClientEndpointParameters");

// node_modules/@aws-sdk/client-ssm/package.json
var package_default = {
  name: "@aws-sdk/client-ssm",
  description: "AWS SDK for JavaScript Ssm Client for Node.js, Browser and React Native",
  version: "3.354.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "tsc -p tsconfig.cjs.json",
    "build:docs": "typedoc",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo ssm"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha256-browser": "3.0.0",
    "@aws-crypto/sha256-js": "3.0.0",
    "@aws-sdk/client-sts": "3.354.0",
    "@aws-sdk/config-resolver": "3.354.0",
    "@aws-sdk/credential-provider-node": "3.354.0",
    "@aws-sdk/fetch-http-handler": "3.353.0",
    "@aws-sdk/hash-node": "3.347.0",
    "@aws-sdk/invalid-dependency": "3.347.0",
    "@aws-sdk/middleware-content-length": "3.347.0",
    "@aws-sdk/middleware-endpoint": "3.347.0",
    "@aws-sdk/middleware-host-header": "3.347.0",
    "@aws-sdk/middleware-logger": "3.347.0",
    "@aws-sdk/middleware-recursion-detection": "3.347.0",
    "@aws-sdk/middleware-retry": "3.354.0",
    "@aws-sdk/middleware-serde": "3.347.0",
    "@aws-sdk/middleware-signing": "3.354.0",
    "@aws-sdk/middleware-stack": "3.347.0",
    "@aws-sdk/middleware-user-agent": "3.352.0",
    "@aws-sdk/node-config-provider": "3.354.0",
    "@aws-sdk/node-http-handler": "3.350.0",
    "@aws-sdk/smithy-client": "3.347.0",
    "@aws-sdk/types": "3.347.0",
    "@aws-sdk/url-parser": "3.347.0",
    "@aws-sdk/util-base64": "3.310.0",
    "@aws-sdk/util-body-length-browser": "3.310.0",
    "@aws-sdk/util-body-length-node": "3.310.0",
    "@aws-sdk/util-defaults-mode-browser": "3.353.0",
    "@aws-sdk/util-defaults-mode-node": "3.354.0",
    "@aws-sdk/util-endpoints": "3.352.0",
    "@aws-sdk/util-retry": "3.347.0",
    "@aws-sdk/util-user-agent-browser": "3.347.0",
    "@aws-sdk/util-user-agent-node": "3.354.0",
    "@aws-sdk/util-utf8": "3.310.0",
    "@aws-sdk/util-waiter": "3.347.0",
    "@smithy/protocol-http": "^1.0.1",
    "@smithy/types": "^1.0.0",
    tslib: "^2.5.0",
    uuid: "^8.3.2"
  },
  devDependencies: {
    "@aws-sdk/service-client-documentation-generator": "3.310.0",
    "@tsconfig/node14": "1.0.3",
    "@types/node": "^14.14.31",
    "@types/uuid": "^8.3.0",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typedoc: "0.23.23",
    typescript: "~4.9.5"
  },
  engines: {
    node: ">=14.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-ssm",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-ssm"
  }
};

// node_modules/@aws-sdk/middleware-sdk-sts/dist-es/index.js
var resolveStsAuthConfig = /* @__PURE__ */ __name((input, { stsClientCtor }) => resolveAwsAuthConfig({
  ...input,
  stsClientCtor
}), "resolveStsAuthConfig");

// node_modules/@aws-sdk/client-sts/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters2 = /* @__PURE__ */ __name((options) => {
  return {
    ...options,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    useGlobalEndpoint: options.useGlobalEndpoint ?? false,
    defaultSigningName: "sts"
  };
}, "resolveClientEndpointParameters");

// node_modules/@aws-sdk/client-sts/package.json
var package_default2 = {
  name: "@aws-sdk/client-sts",
  description: "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native",
  version: "3.354.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "tsc -p tsconfig.cjs.json",
    "build:docs": "typedoc",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo sts",
    test: "yarn test:unit",
    "test:unit": "jest"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha256-browser": "3.0.0",
    "@aws-crypto/sha256-js": "3.0.0",
    "@aws-sdk/config-resolver": "3.354.0",
    "@aws-sdk/credential-provider-node": "3.354.0",
    "@aws-sdk/fetch-http-handler": "3.353.0",
    "@aws-sdk/hash-node": "3.347.0",
    "@aws-sdk/invalid-dependency": "3.347.0",
    "@aws-sdk/middleware-content-length": "3.347.0",
    "@aws-sdk/middleware-endpoint": "3.347.0",
    "@aws-sdk/middleware-host-header": "3.347.0",
    "@aws-sdk/middleware-logger": "3.347.0",
    "@aws-sdk/middleware-recursion-detection": "3.347.0",
    "@aws-sdk/middleware-retry": "3.354.0",
    "@aws-sdk/middleware-sdk-sts": "3.354.0",
    "@aws-sdk/middleware-serde": "3.347.0",
    "@aws-sdk/middleware-signing": "3.354.0",
    "@aws-sdk/middleware-stack": "3.347.0",
    "@aws-sdk/middleware-user-agent": "3.352.0",
    "@aws-sdk/node-config-provider": "3.354.0",
    "@aws-sdk/node-http-handler": "3.350.0",
    "@aws-sdk/smithy-client": "3.347.0",
    "@aws-sdk/types": "3.347.0",
    "@aws-sdk/url-parser": "3.347.0",
    "@aws-sdk/util-base64": "3.310.0",
    "@aws-sdk/util-body-length-browser": "3.310.0",
    "@aws-sdk/util-body-length-node": "3.310.0",
    "@aws-sdk/util-defaults-mode-browser": "3.353.0",
    "@aws-sdk/util-defaults-mode-node": "3.354.0",
    "@aws-sdk/util-endpoints": "3.352.0",
    "@aws-sdk/util-retry": "3.347.0",
    "@aws-sdk/util-user-agent-browser": "3.347.0",
    "@aws-sdk/util-user-agent-node": "3.354.0",
    "@aws-sdk/util-utf8": "3.310.0",
    "@smithy/protocol-http": "^1.0.1",
    "@smithy/types": "^1.0.0",
    "fast-xml-parser": "4.2.4",
    tslib: "^2.5.0"
  },
  devDependencies: {
    "@aws-sdk/service-client-documentation-generator": "3.310.0",
    "@tsconfig/node14": "1.0.3",
    "@types/node": "^14.14.31",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typedoc: "0.23.23",
    typescript: "~4.9.5"
  },
  engines: {
    node: ">=14.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-sts"
  }
};

// node_modules/@aws-sdk/client-sts/dist-es/models/STSServiceException.js
var STSServiceException = class extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, STSServiceException.prototype);
  }
};
__name(STSServiceException, "STSServiceException");

// node_modules/@aws-sdk/client-sts/dist-es/models/models_0.js
var ExpiredTokenException = class extends STSServiceException {
  constructor(opts) {
    super({
      name: "ExpiredTokenException",
      $fault: "client",
      ...opts
    });
    this.name = "ExpiredTokenException";
    this.$fault = "client";
    Object.setPrototypeOf(this, ExpiredTokenException.prototype);
  }
};
__name(ExpiredTokenException, "ExpiredTokenException");
var MalformedPolicyDocumentException = class extends STSServiceException {
  constructor(opts) {
    super({
      name: "MalformedPolicyDocumentException",
      $fault: "client",
      ...opts
    });
    this.name = "MalformedPolicyDocumentException";
    this.$fault = "client";
    Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
  }
};
__name(MalformedPolicyDocumentException, "MalformedPolicyDocumentException");
var PackedPolicyTooLargeException = class extends STSServiceException {
  constructor(opts) {
    super({
      name: "PackedPolicyTooLargeException",
      $fault: "client",
      ...opts
    });
    this.name = "PackedPolicyTooLargeException";
    this.$fault = "client";
    Object.setPrototypeOf(this, PackedPolicyTooLargeException.prototype);
  }
};
__name(PackedPolicyTooLargeException, "PackedPolicyTooLargeException");
var RegionDisabledException = class extends STSServiceException {
  constructor(opts) {
    super({
      name: "RegionDisabledException",
      $fault: "client",
      ...opts
    });
    this.name = "RegionDisabledException";
    this.$fault = "client";
    Object.setPrototypeOf(this, RegionDisabledException.prototype);
  }
};
__name(RegionDisabledException, "RegionDisabledException");
var IDPRejectedClaimException = class extends STSServiceException {
  constructor(opts) {
    super({
      name: "IDPRejectedClaimException",
      $fault: "client",
      ...opts
    });
    this.name = "IDPRejectedClaimException";
    this.$fault = "client";
    Object.setPrototypeOf(this, IDPRejectedClaimException.prototype);
  }
};
__name(IDPRejectedClaimException, "IDPRejectedClaimException");
var InvalidIdentityTokenException = class extends STSServiceException {
  constructor(opts) {
    super({
      name: "InvalidIdentityTokenException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidIdentityTokenException";
    this.$fault = "client";
    Object.setPrototypeOf(this, InvalidIdentityTokenException.prototype);
  }
};
__name(InvalidIdentityTokenException, "InvalidIdentityTokenException");
var IDPCommunicationErrorException = class extends STSServiceException {
  constructor(opts) {
    super({
      name: "IDPCommunicationErrorException",
      $fault: "client",
      ...opts
    });
    this.name = "IDPCommunicationErrorException";
    this.$fault = "client";
    Object.setPrototypeOf(this, IDPCommunicationErrorException.prototype);
  }
};
__name(IDPCommunicationErrorException, "IDPCommunicationErrorException");
var CredentialsFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING }
}), "CredentialsFilterSensitiveLog");
var AssumeRoleResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
}), "AssumeRoleResponseFilterSensitiveLog");
var AssumeRoleWithWebIdentityRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.WebIdentityToken && { WebIdentityToken: SENSITIVE_STRING }
}), "AssumeRoleWithWebIdentityRequestFilterSensitiveLog");
var AssumeRoleWithWebIdentityResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
}), "AssumeRoleWithWebIdentityResponseFilterSensitiveLog");

// node_modules/@smithy/types/dist-es/auth.js
var HttpAuthLocation2;
(function(HttpAuthLocation3) {
  HttpAuthLocation3["HEADER"] = "header";
  HttpAuthLocation3["QUERY"] = "query";
})(HttpAuthLocation2 || (HttpAuthLocation2 = {}));

// node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme2;
(function(EndpointURLScheme3) {
  EndpointURLScheme3["HTTP"] = "http";
  EndpointURLScheme3["HTTPS"] = "https";
})(EndpointURLScheme2 || (EndpointURLScheme2 = {}));

// node_modules/@smithy/types/dist-es/http.js
var FieldPosition2;
(function(FieldPosition3) {
  FieldPosition3[FieldPosition3["HEADER"] = 0] = "HEADER";
  FieldPosition3[FieldPosition3["TRAILER"] = 1] = "TRAILER";
})(FieldPosition2 || (FieldPosition2 = {}));

// node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol2;
(function(RequestHandlerProtocol3) {
  RequestHandlerProtocol3["HTTP_0_9"] = "http/0.9";
  RequestHandlerProtocol3["HTTP_1_0"] = "http/1.0";
  RequestHandlerProtocol3["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol2 || (RequestHandlerProtocol2 = {}));

// node_modules/@smithy/protocol-http/dist-es/httpRequest.js
var HttpRequest2 = class {
  constructor(options) {
    this.method = options.method || "GET";
    this.hostname = options.hostname || "localhost";
    this.port = options.port;
    this.query = options.query || {};
    this.headers = options.headers || {};
    this.body = options.body;
    this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
    this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
    this.username = options.username;
    this.password = options.password;
    this.fragment = options.fragment;
  }
  static isInstance(request2) {
    if (!request2)
      return false;
    const req = request2;
    return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
  }
  clone() {
    const cloned = new HttpRequest2({
      ...this,
      headers: { ...this.headers }
    });
    if (cloned.query)
      cloned.query = cloneQuery3(cloned.query);
    return cloned;
  }
};
__name(HttpRequest2, "HttpRequest");
function cloneQuery3(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}
__name(cloneQuery3, "cloneQuery");

// node_modules/@aws-sdk/client-sts/dist-es/protocols/Aws_query.js
var import_fast_xml_parser = __toESM(require_fxp());
var se_AssumeRoleCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_AssumeRoleRequest(input, context),
    Action: "AssumeRole",
    Version: "2011-06-15"
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_AssumeRoleCommand");
var se_AssumeRoleWithWebIdentityCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_AssumeRoleWithWebIdentityRequest(input, context),
    Action: "AssumeRoleWithWebIdentity",
    Version: "2011-06-15"
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_AssumeRoleWithWebIdentityCommand");
var de_AssumeRoleCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_AssumeRoleCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = de_AssumeRoleResponse(data.AssumeRoleResult, context);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_AssumeRoleCommand");
var de_AssumeRoleCommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredTokenException":
    case "com.amazonaws.sts#ExpiredTokenException":
      throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.sts#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "PackedPolicyTooLarge":
    case "com.amazonaws.sts#PackedPolicyTooLargeException":
      throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
    case "RegionDisabledException":
    case "com.amazonaws.sts#RegionDisabledException":
      throw await de_RegionDisabledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError2({
        output,
        parsedBody: parsedBody.Error,
        errorCode
      });
  }
}, "de_AssumeRoleCommandError");
var de_AssumeRoleWithWebIdentityCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_AssumeRoleWithWebIdentityCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = de_AssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_AssumeRoleWithWebIdentityCommand");
var de_AssumeRoleWithWebIdentityCommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredTokenException":
    case "com.amazonaws.sts#ExpiredTokenException":
      throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
    case "IDPCommunicationError":
    case "com.amazonaws.sts#IDPCommunicationErrorException":
      throw await de_IDPCommunicationErrorExceptionRes(parsedOutput, context);
    case "IDPRejectedClaim":
    case "com.amazonaws.sts#IDPRejectedClaimException":
      throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
    case "InvalidIdentityToken":
    case "com.amazonaws.sts#InvalidIdentityTokenException":
      throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.sts#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "PackedPolicyTooLarge":
    case "com.amazonaws.sts#PackedPolicyTooLargeException":
      throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
    case "RegionDisabledException":
    case "com.amazonaws.sts#RegionDisabledException":
      throw await de_RegionDisabledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError2({
        output,
        parsedBody: parsedBody.Error,
        errorCode
      });
  }
}, "de_AssumeRoleWithWebIdentityCommandError");
var de_ExpiredTokenExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_ExpiredTokenException(body.Error, context);
  const exception = new ExpiredTokenException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ExpiredTokenExceptionRes");
var de_IDPCommunicationErrorExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_IDPCommunicationErrorException(body.Error, context);
  const exception = new IDPCommunicationErrorException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_IDPCommunicationErrorExceptionRes");
var de_IDPRejectedClaimExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_IDPRejectedClaimException(body.Error, context);
  const exception = new IDPRejectedClaimException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_IDPRejectedClaimExceptionRes");
var de_InvalidIdentityTokenExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidIdentityTokenException(body.Error, context);
  const exception = new InvalidIdentityTokenException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InvalidIdentityTokenExceptionRes");
var de_MalformedPolicyDocumentExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_MalformedPolicyDocumentException(body.Error, context);
  const exception = new MalformedPolicyDocumentException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_MalformedPolicyDocumentExceptionRes");
var de_PackedPolicyTooLargeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_PackedPolicyTooLargeException(body.Error, context);
  const exception = new PackedPolicyTooLargeException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_PackedPolicyTooLargeExceptionRes");
var de_RegionDisabledExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_RegionDisabledException(body.Error, context);
  const exception = new RegionDisabledException({
    $metadata: deserializeMetadata2(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_RegionDisabledExceptionRes");
var se_AssumeRoleRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input.RoleArn != null) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.RoleSessionName != null) {
    entries["RoleSessionName"] = input.RoleSessionName;
  }
  if (input.PolicyArns != null) {
    const memberEntries = se_policyDescriptorListType(input.PolicyArns, context);
    if (input.PolicyArns?.length === 0) {
      entries.PolicyArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Policy != null) {
    entries["Policy"] = input.Policy;
  }
  if (input.DurationSeconds != null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TransitiveTagKeys != null) {
    const memberEntries = se_tagKeyListType(input.TransitiveTagKeys, context);
    if (input.TransitiveTagKeys?.length === 0) {
      entries.TransitiveTagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TransitiveTagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExternalId != null) {
    entries["ExternalId"] = input.ExternalId;
  }
  if (input.SerialNumber != null) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.TokenCode != null) {
    entries["TokenCode"] = input.TokenCode;
  }
  if (input.SourceIdentity != null) {
    entries["SourceIdentity"] = input.SourceIdentity;
  }
  return entries;
}, "se_AssumeRoleRequest");
var se_AssumeRoleWithWebIdentityRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input.RoleArn != null) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.RoleSessionName != null) {
    entries["RoleSessionName"] = input.RoleSessionName;
  }
  if (input.WebIdentityToken != null) {
    entries["WebIdentityToken"] = input.WebIdentityToken;
  }
  if (input.ProviderId != null) {
    entries["ProviderId"] = input.ProviderId;
  }
  if (input.PolicyArns != null) {
    const memberEntries = se_policyDescriptorListType(input.PolicyArns, context);
    if (input.PolicyArns?.length === 0) {
      entries.PolicyArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Policy != null) {
    entries["Policy"] = input.Policy;
  }
  if (input.DurationSeconds != null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  return entries;
}, "se_AssumeRoleWithWebIdentityRequest");
var se_policyDescriptorListType = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_PolicyDescriptorType(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
}, "se_policyDescriptorListType");
var se_PolicyDescriptorType = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input.arn != null) {
    entries["arn"] = input.arn;
  }
  return entries;
}, "se_PolicyDescriptorType");
var se_Tag = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
}, "se_Tag");
var se_tagKeyListType = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
}, "se_tagKeyListType");
var se_tagListType = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Tag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
}, "se_tagListType");
var de_AssumedRoleUser = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["AssumedRoleId"] !== void 0) {
    contents.AssumedRoleId = expectString(output["AssumedRoleId"]);
  }
  if (output["Arn"] !== void 0) {
    contents.Arn = expectString(output["Arn"]);
  }
  return contents;
}, "de_AssumedRoleUser");
var de_AssumeRoleResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["Credentials"] !== void 0) {
    contents.Credentials = de_Credentials(output["Credentials"], context);
  }
  if (output["AssumedRoleUser"] !== void 0) {
    contents.AssumedRoleUser = de_AssumedRoleUser(output["AssumedRoleUser"], context);
  }
  if (output["PackedPolicySize"] !== void 0) {
    contents.PackedPolicySize = strictParseInt32(output["PackedPolicySize"]);
  }
  if (output["SourceIdentity"] !== void 0) {
    contents.SourceIdentity = expectString(output["SourceIdentity"]);
  }
  return contents;
}, "de_AssumeRoleResponse");
var de_AssumeRoleWithWebIdentityResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["Credentials"] !== void 0) {
    contents.Credentials = de_Credentials(output["Credentials"], context);
  }
  if (output["SubjectFromWebIdentityToken"] !== void 0) {
    contents.SubjectFromWebIdentityToken = expectString(output["SubjectFromWebIdentityToken"]);
  }
  if (output["AssumedRoleUser"] !== void 0) {
    contents.AssumedRoleUser = de_AssumedRoleUser(output["AssumedRoleUser"], context);
  }
  if (output["PackedPolicySize"] !== void 0) {
    contents.PackedPolicySize = strictParseInt32(output["PackedPolicySize"]);
  }
  if (output["Provider"] !== void 0) {
    contents.Provider = expectString(output["Provider"]);
  }
  if (output["Audience"] !== void 0) {
    contents.Audience = expectString(output["Audience"]);
  }
  if (output["SourceIdentity"] !== void 0) {
    contents.SourceIdentity = expectString(output["SourceIdentity"]);
  }
  return contents;
}, "de_AssumeRoleWithWebIdentityResponse");
var de_Credentials = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["AccessKeyId"] !== void 0) {
    contents.AccessKeyId = expectString(output["AccessKeyId"]);
  }
  if (output["SecretAccessKey"] !== void 0) {
    contents.SecretAccessKey = expectString(output["SecretAccessKey"]);
  }
  if (output["SessionToken"] !== void 0) {
    contents.SessionToken = expectString(output["SessionToken"]);
  }
  if (output["Expiration"] !== void 0) {
    contents.Expiration = expectNonNull(parseRfc3339DateTimeWithOffset(output["Expiration"]));
  }
  return contents;
}, "de_Credentials");
var de_ExpiredTokenException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["message"] !== void 0) {
    contents.message = expectString(output["message"]);
  }
  return contents;
}, "de_ExpiredTokenException");
var de_IDPCommunicationErrorException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["message"] !== void 0) {
    contents.message = expectString(output["message"]);
  }
  return contents;
}, "de_IDPCommunicationErrorException");
var de_IDPRejectedClaimException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["message"] !== void 0) {
    contents.message = expectString(output["message"]);
  }
  return contents;
}, "de_IDPRejectedClaimException");
var de_InvalidIdentityTokenException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["message"] !== void 0) {
    contents.message = expectString(output["message"]);
  }
  return contents;
}, "de_InvalidIdentityTokenException");
var de_MalformedPolicyDocumentException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["message"] !== void 0) {
    contents.message = expectString(output["message"]);
  }
  return contents;
}, "de_MalformedPolicyDocumentException");
var de_PackedPolicyTooLargeException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["message"] !== void 0) {
    contents.message = expectString(output["message"]);
  }
  return contents;
}, "de_PackedPolicyTooLargeException");
var de_RegionDisabledException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output["message"] !== void 0) {
    contents.message = expectString(output["message"]);
  }
  return contents;
}, "de_RegionDisabledException");
var deserializeMetadata2 = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var collectBody = /* @__PURE__ */ __name((streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
}, "collectBody");
var collectBodyString = /* @__PURE__ */ __name((streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
var throwDefaultError2 = withBaseException(STSServiceException);
var buildHttpRpcRequest = /* @__PURE__ */ __name(async (context, headers, path, resolvedHostname, body) => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers
  };
  if (resolvedHostname !== void 0) {
    contents.hostname = resolvedHostname;
  }
  if (body !== void 0) {
    contents.body = body;
  }
  return new HttpRequest2(contents);
}, "buildHttpRpcRequest");
var SHARED_HEADERS = {
  "content-type": "application/x-www-form-urlencoded"
};
var parseBody = /* @__PURE__ */ __name((streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
  if (encoded.length) {
    const parser = new import_fast_xml_parser.XMLParser({
      attributeNamePrefix: "",
      htmlEntities: true,
      ignoreAttributes: false,
      ignoreDeclaration: true,
      parseTagValue: false,
      trimValues: false,
      tagValueProcessor: (_, val2) => val2.trim() === "" && val2.includes("\n") ? "" : void 0
    });
    parser.addEntity("#xD", "\r");
    parser.addEntity("#10", "\n");
    const parsedObj = parser.parse(encoded);
    const textNodeName = "#text";
    const key = Object.keys(parsedObj)[0];
    const parsedObjToReturn = parsedObj[key];
    if (parsedObjToReturn[textNodeName]) {
      parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
      delete parsedObjToReturn[textNodeName];
    }
    return getValueFromTextNode(parsedObjToReturn);
  }
  return {};
}), "parseBody");
var parseErrorBody = /* @__PURE__ */ __name(async (errorBody, context) => {
  const value = await parseBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
}, "parseErrorBody");
var buildFormUrlencodedString = /* @__PURE__ */ __name((formEntries) => Object.entries(formEntries).map(([key, value]) => extendedEncodeURIComponent(key) + "=" + extendedEncodeURIComponent(value)).join("&"), "buildFormUrlencodedString");
var loadQueryErrorCode = /* @__PURE__ */ __name((output, data) => {
  if (data.Error?.Code !== void 0) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
}, "loadQueryErrorCode");

// node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleCommand.js
var AssumeRoleCommand = class extends Command {
  static getEndpointParameterInstructions() {
    return {
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
  constructor(input) {
    super();
    this.input = input;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AssumeRoleCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const clientName = "STSClient";
    const commandName = "AssumeRoleCommand";
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_) => _,
      outputFilterSensitiveLog: AssumeRoleResponseFilterSensitiveLog
    };
    const { requestHandler } = configuration;
    return stack.resolve((request2) => requestHandler.handle(request2.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return se_AssumeRoleCommand(input, context);
  }
  deserialize(output, context) {
    return de_AssumeRoleCommand(output, context);
  }
};
__name(AssumeRoleCommand, "AssumeRoleCommand");

// node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleWithWebIdentityCommand.js
var AssumeRoleWithWebIdentityCommand = class extends Command {
  static getEndpointParameterInstructions() {
    return {
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
  constructor(input) {
    super();
    this.input = input;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AssumeRoleWithWebIdentityCommand.getEndpointParameterInstructions()));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const clientName = "STSClient";
    const commandName = "AssumeRoleWithWebIdentityCommand";
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssumeRoleWithWebIdentityResponseFilterSensitiveLog
    };
    const { requestHandler } = configuration;
    return stack.resolve((request2) => requestHandler.handle(request2.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return se_AssumeRoleWithWebIdentityCommand(input, context);
  }
  deserialize(output, context) {
    return de_AssumeRoleWithWebIdentityCommand(output, context);
  }
};
__name(AssumeRoleWithWebIdentityCommand, "AssumeRoleWithWebIdentityCommand");

// node_modules/@aws-sdk/client-sts/dist-es/defaultStsRoleAssumers.js
var ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
var decorateDefaultRegion = /* @__PURE__ */ __name((region) => {
  if (typeof region !== "function") {
    return region === void 0 ? ASSUME_ROLE_DEFAULT_REGION : region;
  }
  return async () => {
    try {
      return await region();
    } catch (e6) {
      return ASSUME_ROLE_DEFAULT_REGION;
    }
  };
}, "decorateDefaultRegion");
var getDefaultRoleAssumer = /* @__PURE__ */ __name((stsOptions, stsClientCtor) => {
  let stsClient;
  let closureSourceCreds;
  return async (sourceCreds, params) => {
    closureSourceCreds = sourceCreds;
    if (!stsClient) {
      const { logger: logger2, region, requestHandler } = stsOptions;
      stsClient = new stsClientCtor({
        logger: logger2,
        credentialDefaultProvider: () => async () => closureSourceCreds,
        region: decorateDefaultRegion(region || stsOptions.region),
        ...requestHandler ? { requestHandler } : {}
      });
    }
    const { Credentials } = await stsClient.send(new AssumeRoleCommand(params));
    if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
      throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
    }
    return {
      accessKeyId: Credentials.AccessKeyId,
      secretAccessKey: Credentials.SecretAccessKey,
      sessionToken: Credentials.SessionToken,
      expiration: Credentials.Expiration
    };
  };
}, "getDefaultRoleAssumer");
var getDefaultRoleAssumerWithWebIdentity = /* @__PURE__ */ __name((stsOptions, stsClientCtor) => {
  let stsClient;
  return async (params) => {
    if (!stsClient) {
      const { logger: logger2, region, requestHandler } = stsOptions;
      stsClient = new stsClientCtor({
        logger: logger2,
        region: decorateDefaultRegion(region || stsOptions.region),
        ...requestHandler ? { requestHandler } : {}
      });
    }
    const { Credentials } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
    if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
      throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
    }
    return {
      accessKeyId: Credentials.AccessKeyId,
      secretAccessKey: Credentials.SecretAccessKey,
      sessionToken: Credentials.SessionToken,
      expiration: Credentials.Expiration
    };
  };
}, "getDefaultRoleAssumerWithWebIdentity");
var decorateDefaultCredentialProvider = /* @__PURE__ */ __name((provider) => (input) => provider({
  roleAssumer: getDefaultRoleAssumer(input, input.stsClientCtor),
  roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input, input.stsClientCtor),
  ...input
}), "decorateDefaultCredentialProvider");

// node_modules/@aws-sdk/credential-provider-env/dist-es/fromEnv.js
var ENV_KEY = "AWS_ACCESS_KEY_ID";
var ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
var ENV_SESSION = "AWS_SESSION_TOKEN";
var ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
var fromEnv = /* @__PURE__ */ __name(() => async () => {
  const accessKeyId = process.env[ENV_KEY];
  const secretAccessKey = process.env[ENV_SECRET];
  const sessionToken = process.env[ENV_SESSION];
  const expiry = process.env[ENV_EXPIRATION];
  if (accessKeyId && secretAccessKey) {
    return {
      accessKeyId,
      secretAccessKey,
      ...sessionToken && { sessionToken },
      ...expiry && { expiration: new Date(expiry) }
    };
  }
  throw new CredentialsProviderError("Unable to find environment variable credentials.");
}, "fromEnv");

// node_modules/@aws-sdk/shared-ini-file-loader/dist-es/getHomeDir.js
import { homedir } from "os";
import { sep } from "path";
var getHomeDir = /* @__PURE__ */ __name(() => {
  const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${sep}` } = process.env;
  if (HOME)
    return HOME;
  if (USERPROFILE)
    return USERPROFILE;
  if (HOMEPATH)
    return `${HOMEDRIVE}${HOMEPATH}`;
  return homedir();
}, "getHomeDir");

// node_modules/@aws-sdk/shared-ini-file-loader/dist-es/getProfileName.js
var ENV_PROFILE = "AWS_PROFILE";
var DEFAULT_PROFILE = "default";
var getProfileName = /* @__PURE__ */ __name((init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE, "getProfileName");

// node_modules/@aws-sdk/shared-ini-file-loader/dist-es/getSSOTokenFilepath.js
import { createHash } from "crypto";
import { join } from "path";
var getSSOTokenFilepath = /* @__PURE__ */ __name((id) => {
  const hasher = createHash("sha1");
  const cacheName = hasher.update(id).digest("hex");
  return join(getHomeDir(), ".aws", "sso", "cache", `${cacheName}.json`);
}, "getSSOTokenFilepath");

// node_modules/@aws-sdk/shared-ini-file-loader/dist-es/getSSOTokenFromFile.js
import { promises as fsPromises } from "fs";
var { readFile } = fsPromises;
var getSSOTokenFromFile = /* @__PURE__ */ __name(async (id) => {
  const ssoTokenFilepath = getSSOTokenFilepath(id);
  const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
  return JSON.parse(ssoTokenText);
}, "getSSOTokenFromFile");

// node_modules/@aws-sdk/shared-ini-file-loader/dist-es/getConfigFilepath.js
import { join as join2 } from "path";
var ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
var getConfigFilepath = /* @__PURE__ */ __name(() => process.env[ENV_CONFIG_PATH] || join2(getHomeDir(), ".aws", "config"), "getConfigFilepath");

// node_modules/@aws-sdk/shared-ini-file-loader/dist-es/getCredentialsFilepath.js
import { join as join3 } from "path";
var ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
var getCredentialsFilepath = /* @__PURE__ */ __name(() => process.env[ENV_CREDENTIALS_PATH] || join3(getHomeDir(), ".aws", "credentials"), "getCredentialsFilepath");

// node_modules/@aws-sdk/shared-ini-file-loader/dist-es/getProfileData.js
var profileKeyRegex = /^profile\s(["'])?([^\1]+)\1$/;
var getProfileData = /* @__PURE__ */ __name((data) => Object.entries(data).filter(([key]) => profileKeyRegex.test(key)).reduce((acc, [key, value]) => ({ ...acc, [profileKeyRegex.exec(key)[2]]: value }), {
  ...data.default && { default: data.default }
}), "getProfileData");

// node_modules/@aws-sdk/shared-ini-file-loader/dist-es/parseIni.js
var profileNameBlockList = ["__proto__", "profile __proto__"];
var parseIni = /* @__PURE__ */ __name((iniData) => {
  const map2 = {};
  let currentSection;
  for (let line of iniData.split(/\r?\n/)) {
    line = line.split(/(^|\s)[;#]/)[0].trim();
    const isSection = line[0] === "[" && line[line.length - 1] === "]";
    if (isSection) {
      currentSection = line.substring(1, line.length - 1);
      if (profileNameBlockList.includes(currentSection)) {
        throw new Error(`Found invalid profile name "${currentSection}"`);
      }
    } else if (currentSection) {
      const indexOfEqualsSign = line.indexOf("=");
      const start = 0;
      const end = line.length - 1;
      const isAssignment = indexOfEqualsSign !== -1 && indexOfEqualsSign !== start && indexOfEqualsSign !== end;
      if (isAssignment) {
        const [name, value] = [
          line.substring(0, indexOfEqualsSign).trim(),
          line.substring(indexOfEqualsSign + 1).trim()
        ];
        map2[currentSection] = map2[currentSection] || {};
        map2[currentSection][name] = value;
      }
    }
  }
  return map2;
}, "parseIni");

// node_modules/@aws-sdk/shared-ini-file-loader/dist-es/slurpFile.js
import { promises as fsPromises2 } from "fs";
var { readFile: readFile2 } = fsPromises2;
var filePromisesHash = {};
var slurpFile = /* @__PURE__ */ __name((path, options) => {
  if (!filePromisesHash[path] || options?.ignoreCache) {
    filePromisesHash[path] = readFile2(path, "utf8");
  }
  return filePromisesHash[path];
}, "slurpFile");

// node_modules/@aws-sdk/shared-ini-file-loader/dist-es/loadSharedConfigFiles.js
var swallowError = /* @__PURE__ */ __name(() => ({}), "swallowError");
var loadSharedConfigFiles = /* @__PURE__ */ __name(async (init = {}) => {
  const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
  const parsedFiles = await Promise.all([
    slurpFile(configFilepath, {
      ignoreCache: init.ignoreCache
    }).then(parseIni).then(getProfileData).catch(swallowError),
    slurpFile(filepath, {
      ignoreCache: init.ignoreCache
    }).then(parseIni).catch(swallowError)
  ]);
  return {
    configFile: parsedFiles[0],
    credentialsFile: parsedFiles[1]
  };
}, "loadSharedConfigFiles");

// node_modules/@aws-sdk/shared-ini-file-loader/dist-es/getSsoSessionData.js
var ssoSessionKeyRegex = /^sso-session\s(["'])?([^\1]+)\1$/;
var getSsoSessionData = /* @__PURE__ */ __name((data) => Object.entries(data).filter(([key]) => ssoSessionKeyRegex.test(key)).reduce((acc, [key, value]) => ({ ...acc, [ssoSessionKeyRegex.exec(key)[2]]: value }), {}), "getSsoSessionData");

// node_modules/@aws-sdk/shared-ini-file-loader/dist-es/loadSsoSessionData.js
var swallowError2 = /* @__PURE__ */ __name(() => ({}), "swallowError");
var loadSsoSessionData = /* @__PURE__ */ __name(async (init = {}) => slurpFile(init.configFilepath ?? getConfigFilepath()).then(parseIni).then(getSsoSessionData).catch(swallowError2), "loadSsoSessionData");

// node_modules/@aws-sdk/shared-ini-file-loader/dist-es/mergeConfigFiles.js
var mergeConfigFiles = /* @__PURE__ */ __name((...files) => {
  const merged = {};
  for (const file of files) {
    for (const [key, values] of Object.entries(file)) {
      if (merged[key] !== void 0) {
        Object.assign(merged[key], values);
      } else {
        merged[key] = values;
      }
    }
  }
  return merged;
}, "mergeConfigFiles");

// node_modules/@aws-sdk/shared-ini-file-loader/dist-es/parseKnownFiles.js
var parseKnownFiles = /* @__PURE__ */ __name(async (init) => {
  const parsedFiles = await loadSharedConfigFiles(init);
  return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
}, "parseKnownFiles");

// node_modules/@aws-sdk/credential-provider-imds/dist-es/fromContainerMetadata.js
import { parse } from "url";

// node_modules/@aws-sdk/credential-provider-imds/dist-es/remoteProvider/httpRequest.js
import { Buffer as Buffer3 } from "buffer";
import { request } from "http";
function httpRequest(options) {
  return new Promise((resolve, reject) => {
    const req = request({
      method: "GET",
      ...options,
      hostname: options.hostname?.replace(/^\[(.+)\]$/, "$1")
    });
    req.on("error", (err) => {
      reject(Object.assign(new ProviderError("Unable to connect to instance metadata service"), err));
      req.destroy();
    });
    req.on("timeout", () => {
      reject(new ProviderError("TimeoutError from instance metadata service"));
      req.destroy();
    });
    req.on("response", (res) => {
      const { statusCode = 400 } = res;
      if (statusCode < 200 || 300 <= statusCode) {
        reject(Object.assign(new ProviderError("Error response received from instance metadata service"), { statusCode }));
        req.destroy();
      }
      const chunks = [];
      res.on("data", (chunk) => {
        chunks.push(chunk);
      });
      res.on("end", () => {
        resolve(Buffer3.concat(chunks));
        req.destroy();
      });
    });
    req.end();
  });
}
__name(httpRequest, "httpRequest");

// node_modules/@aws-sdk/credential-provider-imds/dist-es/remoteProvider/ImdsCredentials.js
var isImdsCredentials = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.AccessKeyId === "string" && typeof arg.SecretAccessKey === "string" && typeof arg.Token === "string" && typeof arg.Expiration === "string", "isImdsCredentials");
var fromImdsCredentials = /* @__PURE__ */ __name((creds) => ({
  accessKeyId: creds.AccessKeyId,
  secretAccessKey: creds.SecretAccessKey,
  sessionToken: creds.Token,
  expiration: new Date(creds.Expiration)
}), "fromImdsCredentials");

// node_modules/@aws-sdk/credential-provider-imds/dist-es/remoteProvider/RemoteProviderInit.js
var DEFAULT_TIMEOUT = 1e3;
var DEFAULT_MAX_RETRIES = 0;
var providerConfigFromInit = /* @__PURE__ */ __name(({ maxRetries = DEFAULT_MAX_RETRIES, timeout = DEFAULT_TIMEOUT }) => ({ maxRetries, timeout }), "providerConfigFromInit");

// node_modules/@aws-sdk/credential-provider-imds/dist-es/remoteProvider/retry.js
var retry = /* @__PURE__ */ __name((toRetry, maxRetries) => {
  let promise = toRetry();
  for (let i6 = 0; i6 < maxRetries; i6++) {
    promise = promise.catch(toRetry);
  }
  return promise;
}, "retry");

// node_modules/@aws-sdk/credential-provider-imds/dist-es/fromContainerMetadata.js
var ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
var ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
var ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
var fromContainerMetadata = /* @__PURE__ */ __name((init = {}) => {
  const { timeout, maxRetries } = providerConfigFromInit(init);
  return () => retry(async () => {
    const requestOptions = await getCmdsUri();
    const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
    if (!isImdsCredentials(credsResponse)) {
      throw new CredentialsProviderError("Invalid response received from instance metadata service.");
    }
    return fromImdsCredentials(credsResponse);
  }, maxRetries);
}, "fromContainerMetadata");
var requestFromEcsImds = /* @__PURE__ */ __name(async (timeout, options) => {
  if (process.env[ENV_CMDS_AUTH_TOKEN]) {
    options.headers = {
      ...options.headers,
      Authorization: process.env[ENV_CMDS_AUTH_TOKEN]
    };
  }
  const buffer = await httpRequest({
    ...options,
    timeout
  });
  return buffer.toString();
}, "requestFromEcsImds");
var CMDS_IP = "169.254.170.2";
var GREENGRASS_HOSTS = {
  localhost: true,
  "127.0.0.1": true
};
var GREENGRASS_PROTOCOLS = {
  "http:": true,
  "https:": true
};
var getCmdsUri = /* @__PURE__ */ __name(async () => {
  if (process.env[ENV_CMDS_RELATIVE_URI]) {
    return {
      hostname: CMDS_IP,
      path: process.env[ENV_CMDS_RELATIVE_URI]
    };
  }
  if (process.env[ENV_CMDS_FULL_URI]) {
    const parsed = parse(process.env[ENV_CMDS_FULL_URI]);
    if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
      throw new CredentialsProviderError(`${parsed.hostname} is not a valid container metadata service hostname`, false);
    }
    if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
      throw new CredentialsProviderError(`${parsed.protocol} is not a valid container metadata service protocol`, false);
    }
    return {
      ...parsed,
      port: parsed.port ? parseInt(parsed.port, 10) : void 0
    };
  }
  throw new CredentialsProviderError(`The container metadata credential provider cannot be used unless the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment variable is set`, false);
}, "getCmdsUri");

// node_modules/@aws-sdk/node-config-provider/dist-es/fromEnv.js
var fromEnv2 = /* @__PURE__ */ __name((envVarSelector) => async () => {
  try {
    const config = envVarSelector(process.env);
    if (config === void 0) {
      throw new Error();
    }
    return config;
  } catch (e6) {
    throw new CredentialsProviderError(e6.message || `Cannot load config from environment variables with getter: ${envVarSelector}`);
  }
}, "fromEnv");

// node_modules/@aws-sdk/node-config-provider/dist-es/fromSharedConfigFiles.js
var fromSharedConfigFiles = /* @__PURE__ */ __name((configSelector, { preferredFile = "config", ...init } = {}) => async () => {
  const profile = getProfileName(init);
  const { configFile, credentialsFile } = await loadSharedConfigFiles(init);
  const profileFromCredentials = credentialsFile[profile] || {};
  const profileFromConfig = configFile[profile] || {};
  const mergedProfile = preferredFile === "config" ? { ...profileFromCredentials, ...profileFromConfig } : { ...profileFromConfig, ...profileFromCredentials };
  try {
    const configValue = configSelector(mergedProfile);
    if (configValue === void 0) {
      throw new Error();
    }
    return configValue;
  } catch (e6) {
    throw new CredentialsProviderError(e6.message || `Cannot load config for profile ${profile} in SDK configuration files with getter: ${configSelector}`);
  }
}, "fromSharedConfigFiles");

// node_modules/@aws-sdk/node-config-provider/dist-es/fromStatic.js
var isFunction = /* @__PURE__ */ __name((func) => typeof func === "function", "isFunction");
var fromStatic2 = /* @__PURE__ */ __name((defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : fromStatic(defaultValue), "fromStatic");

// node_modules/@aws-sdk/node-config-provider/dist-es/configLoader.js
var loadConfig = /* @__PURE__ */ __name(({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => memoize(chain(fromEnv2(environmentVariableSelector), fromSharedConfigFiles(configFileSelector, configuration), fromStatic2(defaultValue))), "loadConfig");

// node_modules/@aws-sdk/credential-provider-imds/dist-es/config/Endpoint.js
var Endpoint;
(function(Endpoint2) {
  Endpoint2["IPv4"] = "http://169.254.169.254";
  Endpoint2["IPv6"] = "http://[fd00:ec2::254]";
})(Endpoint || (Endpoint = {}));

// node_modules/@aws-sdk/credential-provider-imds/dist-es/config/EndpointConfigOptions.js
var ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
var CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
var ENDPOINT_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => env2[ENV_ENDPOINT_NAME],
  configFileSelector: (profile) => profile[CONFIG_ENDPOINT_NAME],
  default: void 0
};

// node_modules/@aws-sdk/credential-provider-imds/dist-es/config/EndpointMode.js
var EndpointMode;
(function(EndpointMode2) {
  EndpointMode2["IPv4"] = "IPv4";
  EndpointMode2["IPv6"] = "IPv6";
})(EndpointMode || (EndpointMode = {}));

// node_modules/@aws-sdk/credential-provider-imds/dist-es/config/EndpointModeConfigOptions.js
var ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
var CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
var ENDPOINT_MODE_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => env2[ENV_ENDPOINT_MODE_NAME],
  configFileSelector: (profile) => profile[CONFIG_ENDPOINT_MODE_NAME],
  default: EndpointMode.IPv4
};

// node_modules/@aws-sdk/credential-provider-imds/dist-es/utils/getInstanceMetadataEndpoint.js
var getInstanceMetadataEndpoint = /* @__PURE__ */ __name(async () => parseUrl(await getFromEndpointConfig() || await getFromEndpointModeConfig()), "getInstanceMetadataEndpoint");
var getFromEndpointConfig = /* @__PURE__ */ __name(async () => loadConfig(ENDPOINT_CONFIG_OPTIONS)(), "getFromEndpointConfig");
var getFromEndpointModeConfig = /* @__PURE__ */ __name(async () => {
  const endpointMode = await loadConfig(ENDPOINT_MODE_CONFIG_OPTIONS)();
  switch (endpointMode) {
    case EndpointMode.IPv4:
      return Endpoint.IPv4;
    case EndpointMode.IPv6:
      return Endpoint.IPv6;
    default:
      throw new Error(`Unsupported endpoint mode: ${endpointMode}. Select from ${Object.values(EndpointMode)}`);
  }
}, "getFromEndpointModeConfig");

// node_modules/@aws-sdk/credential-provider-imds/dist-es/utils/getExtendedInstanceMetadataCredentials.js
var STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
var STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
var STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
var getExtendedInstanceMetadataCredentials = /* @__PURE__ */ __name((credentials, logger2) => {
  const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS + Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
  const newExpiration = new Date(Date.now() + refreshInterval * 1e3);
  logger2.warn("Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(newExpiration)}.\nFor more information, please visit: " + STATIC_STABILITY_DOC_URL);
  const originalExpiration = credentials.originalExpiration ?? credentials.expiration;
  return {
    ...credentials,
    ...originalExpiration ? { originalExpiration } : {},
    expiration: newExpiration
  };
}, "getExtendedInstanceMetadataCredentials");

// node_modules/@aws-sdk/credential-provider-imds/dist-es/utils/staticStabilityProvider.js
var staticStabilityProvider = /* @__PURE__ */ __name((provider, options = {}) => {
  const logger2 = options?.logger || console;
  let pastCredentials;
  return async () => {
    let credentials;
    try {
      credentials = await provider();
      if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
        credentials = getExtendedInstanceMetadataCredentials(credentials, logger2);
      }
    } catch (e6) {
      if (pastCredentials) {
        logger2.warn("Credential renew failed: ", e6);
        credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger2);
      } else {
        throw e6;
      }
    }
    pastCredentials = credentials;
    return credentials;
  };
}, "staticStabilityProvider");

// node_modules/@aws-sdk/credential-provider-imds/dist-es/fromInstanceMetadata.js
var IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
var IMDS_TOKEN_PATH = "/latest/api/token";
var fromInstanceMetadata = /* @__PURE__ */ __name((init = {}) => staticStabilityProvider(getInstanceImdsProvider(init), { logger: init.logger }), "fromInstanceMetadata");
var getInstanceImdsProvider = /* @__PURE__ */ __name((init) => {
  let disableFetchToken = false;
  const { timeout, maxRetries } = providerConfigFromInit(init);
  const getCredentials = /* @__PURE__ */ __name(async (maxRetries2, options) => {
    const profile = (await retry(async () => {
      let profile2;
      try {
        profile2 = await getProfile(options);
      } catch (err) {
        if (err.statusCode === 401) {
          disableFetchToken = false;
        }
        throw err;
      }
      return profile2;
    }, maxRetries2)).trim();
    return retry(async () => {
      let creds;
      try {
        creds = await getCredentialsFromProfile(profile, options);
      } catch (err) {
        if (err.statusCode === 401) {
          disableFetchToken = false;
        }
        throw err;
      }
      return creds;
    }, maxRetries2);
  }, "getCredentials");
  return async () => {
    const endpoint = await getInstanceMetadataEndpoint();
    if (disableFetchToken) {
      return getCredentials(maxRetries, { ...endpoint, timeout });
    } else {
      let token;
      try {
        token = (await getMetadataToken({ ...endpoint, timeout })).toString();
      } catch (error) {
        if (error?.statusCode === 400) {
          throw Object.assign(error, {
            message: "EC2 Metadata token request returned error"
          });
        } else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
          disableFetchToken = true;
        }
        return getCredentials(maxRetries, { ...endpoint, timeout });
      }
      return getCredentials(maxRetries, {
        ...endpoint,
        headers: {
          "x-aws-ec2-metadata-token": token
        },
        timeout
      });
    }
  };
}, "getInstanceImdsProvider");
var getMetadataToken = /* @__PURE__ */ __name(async (options) => httpRequest({
  ...options,
  path: IMDS_TOKEN_PATH,
  method: "PUT",
  headers: {
    "x-aws-ec2-metadata-token-ttl-seconds": "21600"
  }
}), "getMetadataToken");
var getProfile = /* @__PURE__ */ __name(async (options) => (await httpRequest({ ...options, path: IMDS_PATH })).toString(), "getProfile");
var getCredentialsFromProfile = /* @__PURE__ */ __name(async (profile, options) => {
  const credsResponse = JSON.parse((await httpRequest({
    ...options,
    path: IMDS_PATH + profile
  })).toString());
  if (!isImdsCredentials(credsResponse)) {
    throw new CredentialsProviderError("Invalid response received from instance metadata service.");
  }
  return fromImdsCredentials(credsResponse);
}, "getCredentialsFromProfile");

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js
var resolveCredentialSource = /* @__PURE__ */ __name((credentialSource, profileName) => {
  const sourceProvidersMap = {
    EcsContainer: fromContainerMetadata,
    Ec2InstanceMetadata: fromInstanceMetadata,
    Environment: fromEnv
  };
  if (credentialSource in sourceProvidersMap) {
    return sourceProvidersMap[credentialSource]();
  } else {
    throw new CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, expected EcsContainer or Ec2InstanceMetadata or Environment.`);
  }
}, "resolveCredentialSource");

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js
var isAssumeRoleProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof arg.external_id) > -1 && ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 && (isAssumeRoleWithSourceProfile(arg) || isAssumeRoleWithProviderProfile(arg)), "isAssumeRoleProfile");
var isAssumeRoleWithSourceProfile = /* @__PURE__ */ __name((arg) => typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined", "isAssumeRoleWithSourceProfile");
var isAssumeRoleWithProviderProfile = /* @__PURE__ */ __name((arg) => typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined", "isAssumeRoleWithProviderProfile");
var resolveAssumeRoleCredentials = /* @__PURE__ */ __name(async (profileName, profiles, options, visitedProfiles = {}) => {
  const data = profiles[profileName];
  if (!options.roleAssumer) {
    throw new CredentialsProviderError(`Profile ${profileName} requires a role to be assumed, but no role assumption callback was provided.`, false);
  }
  const { source_profile } = data;
  if (source_profile && source_profile in visitedProfiles) {
    throw new CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${getProfileName(options)}. Profiles visited: ` + Object.keys(visitedProfiles).join(", "), false);
  }
  const sourceCredsProvider = source_profile ? resolveProfileData(source_profile, profiles, options, {
    ...visitedProfiles,
    [source_profile]: true
  }) : resolveCredentialSource(data.credential_source, profileName)();
  const params = {
    RoleArn: data.role_arn,
    RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
    ExternalId: data.external_id
  };
  const { mfa_serial } = data;
  if (mfa_serial) {
    if (!options.mfaCodeProvider) {
      throw new CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, false);
    }
    params.SerialNumber = mfa_serial;
    params.TokenCode = await options.mfaCodeProvider(mfa_serial);
  }
  const sourceCreds = await sourceCredsProvider;
  return options.roleAssumer(sourceCreds, params);
}, "resolveAssumeRoleCredentials");

// node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js
import { exec } from "child_process";
import { promisify } from "util";

// node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js
var getValidatedProcessCredentials = /* @__PURE__ */ __name((profileName, data) => {
  if (data.Version !== 1) {
    throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
  }
  if (data.AccessKeyId === void 0 || data.SecretAccessKey === void 0) {
    throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
  }
  if (data.Expiration) {
    const currentTime = new Date();
    const expireTime = new Date(data.Expiration);
    if (expireTime < currentTime) {
      throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
    }
  }
  return {
    accessKeyId: data.AccessKeyId,
    secretAccessKey: data.SecretAccessKey,
    ...data.SessionToken && { sessionToken: data.SessionToken },
    ...data.Expiration && { expiration: new Date(data.Expiration) }
  };
}, "getValidatedProcessCredentials");

// node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js
var resolveProcessCredentials = /* @__PURE__ */ __name(async (profileName, profiles) => {
  const profile = profiles[profileName];
  if (profiles[profileName]) {
    const credentialProcess = profile["credential_process"];
    if (credentialProcess !== void 0) {
      const execPromise = promisify(exec);
      try {
        const { stdout } = await execPromise(credentialProcess);
        let data;
        try {
          data = JSON.parse(stdout.trim());
        } catch {
          throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
        }
        return getValidatedProcessCredentials(profileName, data);
      } catch (error) {
        throw new CredentialsProviderError(error.message);
      }
    } else {
      throw new CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`);
    }
  } else {
    throw new CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`);
  }
}, "resolveProcessCredentials");

// node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js
var fromProcess = /* @__PURE__ */ __name((init = {}) => async () => {
  const profiles = await parseKnownFiles(init);
  return resolveProcessCredentials(getProfileName(init), profiles);
}, "fromProcess");

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js
var isProcessProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string", "isProcessProfile");
var resolveProcessCredentials2 = /* @__PURE__ */ __name(async (options, profile) => fromProcess({
  ...options,
  profile
})(), "resolveProcessCredentials");

// node_modules/@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js
var isSsoProfile = /* @__PURE__ */ __name((arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string"), "isSsoProfile");

// node_modules/@aws-sdk/client-sso/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters3 = /* @__PURE__ */ __name((options) => {
  return {
    ...options,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "awsssoportal"
  };
}, "resolveClientEndpointParameters");

// node_modules/@aws-sdk/client-sso/package.json
var package_default3 = {
  name: "@aws-sdk/client-sso",
  description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native",
  version: "3.354.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "tsc -p tsconfig.cjs.json",
    "build:docs": "typedoc",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo sso"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha256-browser": "3.0.0",
    "@aws-crypto/sha256-js": "3.0.0",
    "@aws-sdk/config-resolver": "3.354.0",
    "@aws-sdk/fetch-http-handler": "3.353.0",
    "@aws-sdk/hash-node": "3.347.0",
    "@aws-sdk/invalid-dependency": "3.347.0",
    "@aws-sdk/middleware-content-length": "3.347.0",
    "@aws-sdk/middleware-endpoint": "3.347.0",
    "@aws-sdk/middleware-host-header": "3.347.0",
    "@aws-sdk/middleware-logger": "3.347.0",
    "@aws-sdk/middleware-recursion-detection": "3.347.0",
    "@aws-sdk/middleware-retry": "3.354.0",
    "@aws-sdk/middleware-serde": "3.347.0",
    "@aws-sdk/middleware-stack": "3.347.0",
    "@aws-sdk/middleware-user-agent": "3.352.0",
    "@aws-sdk/node-config-provider": "3.354.0",
    "@aws-sdk/node-http-handler": "3.350.0",
    "@aws-sdk/smithy-client": "3.347.0",
    "@aws-sdk/types": "3.347.0",
    "@aws-sdk/url-parser": "3.347.0",
    "@aws-sdk/util-base64": "3.310.0",
    "@aws-sdk/util-body-length-browser": "3.310.0",
    "@aws-sdk/util-body-length-node": "3.310.0",
    "@aws-sdk/util-defaults-mode-browser": "3.353.0",
    "@aws-sdk/util-defaults-mode-node": "3.354.0",
    "@aws-sdk/util-endpoints": "3.352.0",
    "@aws-sdk/util-retry": "3.347.0",
    "@aws-sdk/util-user-agent-browser": "3.347.0",
    "@aws-sdk/util-user-agent-node": "3.354.0",
    "@aws-sdk/util-utf8": "3.310.0",
    "@smithy/protocol-http": "^1.0.1",
    "@smithy/types": "^1.0.0",
    tslib: "^2.5.0"
  },
  devDependencies: {
    "@aws-sdk/service-client-documentation-generator": "3.310.0",
    "@tsconfig/node14": "1.0.3",
    "@types/node": "^14.14.31",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typedoc: "0.23.23",
    typescript: "~4.9.5"
  },
  engines: {
    node: ">=14.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-sso"
  }
};

// node_modules/@aws-sdk/hash-node/dist-es/index.js
init_dist_es7();
init_dist_es8();
import { Buffer as Buffer4 } from "buffer";
import { createHash as createHash2, createHmac } from "crypto";
var Hash = class {
  constructor(algorithmIdentifier, secret) {
    this.algorithmIdentifier = algorithmIdentifier;
    this.secret = secret;
    this.reset();
  }
  update(toHash, encoding) {
    this.hash.update(toUint8Array(castSourceData(toHash, encoding)));
  }
  digest() {
    return Promise.resolve(this.hash.digest());
  }
  reset() {
    this.hash = this.secret ? createHmac(this.algorithmIdentifier, castSourceData(this.secret)) : createHash2(this.algorithmIdentifier);
  }
};
__name(Hash, "Hash");
function castSourceData(toCast, encoding) {
  if (Buffer4.isBuffer(toCast)) {
    return toCast;
  }
  if (typeof toCast === "string") {
    return fromString(toCast, encoding);
  }
  if (ArrayBuffer.isView(toCast)) {
    return fromArrayBuffer(toCast.buffer, toCast.byteOffset, toCast.byteLength);
  }
  return fromArrayBuffer(toCast);
}
__name(castSourceData, "castSourceData");

// node_modules/@aws-sdk/querystring-builder/dist-es/index.js
init_dist_es9();
function buildQueryString(query) {
  const parts = [];
  for (let key of Object.keys(query).sort()) {
    const value = query[key];
    key = escapeUri(key);
    if (Array.isArray(value)) {
      for (let i6 = 0, iLen = value.length; i6 < iLen; i6++) {
        parts.push(`${key}=${escapeUri(value[i6])}`);
      }
    } else {
      let qsEntry = key;
      if (value || typeof value === "string") {
        qsEntry += `=${escapeUri(value)}`;
      }
      parts.push(qsEntry);
    }
  }
  return parts.join("&");
}
__name(buildQueryString, "buildQueryString");

// node_modules/@aws-sdk/node-http-handler/dist-es/node-http-handler.js
import { Agent as hAgent, request as hRequest } from "http";
import { Agent as hsAgent, request as hsRequest } from "https";

// node_modules/@aws-sdk/node-http-handler/dist-es/constants.js
var NODEJS_TIMEOUT_ERROR_CODES2 = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];

// node_modules/@aws-sdk/node-http-handler/dist-es/get-transformed-headers.js
var getTransformedHeaders = /* @__PURE__ */ __name((headers) => {
  const transformedHeaders = {};
  for (const name of Object.keys(headers)) {
    const headerValues = headers[name];
    transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
  }
  return transformedHeaders;
}, "getTransformedHeaders");

// node_modules/@aws-sdk/node-http-handler/dist-es/set-connection-timeout.js
var setConnectionTimeout = /* @__PURE__ */ __name((request2, reject, timeoutInMs = 0) => {
  if (!timeoutInMs) {
    return;
  }
  const timeoutId = setTimeout(() => {
    request2.destroy();
    reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
      name: "TimeoutError"
    }));
  }, timeoutInMs);
  request2.on("socket", (socket) => {
    if (socket.connecting) {
      socket.on("connect", () => {
        clearTimeout(timeoutId);
      });
    } else {
      clearTimeout(timeoutId);
    }
  });
}, "setConnectionTimeout");

// node_modules/@aws-sdk/node-http-handler/dist-es/set-socket-keep-alive.js
var setSocketKeepAlive = /* @__PURE__ */ __name((request2, { keepAlive, keepAliveMsecs }) => {
  if (keepAlive !== true) {
    return;
  }
  request2.on("socket", (socket) => {
    socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
  });
}, "setSocketKeepAlive");

// node_modules/@aws-sdk/node-http-handler/dist-es/set-socket-timeout.js
var setSocketTimeout = /* @__PURE__ */ __name((request2, reject, timeoutInMs = 0) => {
  request2.setTimeout(timeoutInMs, () => {
    request2.destroy();
    reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
  });
}, "setSocketTimeout");

// node_modules/@aws-sdk/node-http-handler/dist-es/write-request-body.js
import { Readable } from "stream";
var MIN_WAIT_TIME = 1e3;
async function writeRequestBody(httpRequest2, request2, maxContinueTimeoutMs = MIN_WAIT_TIME) {
  const headers = request2.headers ?? {};
  const expect = headers["Expect"] || headers["expect"];
  let timeoutId = -1;
  let hasError = false;
  if (expect === "100-continue") {
    await Promise.race([
      new Promise((resolve) => {
        timeoutId = Number(setTimeout(resolve, Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
      }),
      new Promise((resolve) => {
        httpRequest2.on("continue", () => {
          clearTimeout(timeoutId);
          resolve();
        });
        httpRequest2.on("error", () => {
          hasError = true;
          clearTimeout(timeoutId);
          resolve();
        });
      })
    ]);
  }
  if (!hasError) {
    writeBody(httpRequest2, request2.body);
  }
}
__name(writeRequestBody, "writeRequestBody");
function writeBody(httpRequest2, body) {
  if (body instanceof Readable) {
    body.pipe(httpRequest2);
  } else if (body) {
    httpRequest2.end(Buffer.from(body));
  } else {
    httpRequest2.end();
  }
}
__name(writeBody, "writeBody");

// node_modules/@aws-sdk/node-http-handler/dist-es/node-http-handler.js
var NodeHttpHandler = class {
  constructor(options) {
    this.metadata = { handlerProtocol: "http/1.1" };
    this.configProvider = new Promise((resolve, reject) => {
      if (typeof options === "function") {
        options().then((_options) => {
          resolve(this.resolveDefaultConfig(_options));
        }).catch(reject);
      } else {
        resolve(this.resolveDefaultConfig(options));
      }
    });
  }
  resolveDefaultConfig(options) {
    const { requestTimeout, connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
    const keepAlive = true;
    const maxSockets = 50;
    return {
      connectionTimeout,
      requestTimeout: requestTimeout ?? socketTimeout,
      httpAgent: httpAgent || new hAgent({ keepAlive, maxSockets }),
      httpsAgent: httpsAgent || new hsAgent({ keepAlive, maxSockets })
    };
  }
  destroy() {
    this.config?.httpAgent?.destroy();
    this.config?.httpsAgent?.destroy();
  }
  async handle(request2, { abortSignal } = {}) {
    if (!this.config) {
      this.config = await this.configProvider;
    }
    return new Promise((_resolve, _reject) => {
      let writeRequestBodyPromise = void 0;
      const resolve = /* @__PURE__ */ __name(async (arg) => {
        await writeRequestBodyPromise;
        _resolve(arg);
      }, "resolve");
      const reject = /* @__PURE__ */ __name(async (arg) => {
        await writeRequestBodyPromise;
        _reject(arg);
      }, "reject");
      if (!this.config) {
        throw new Error("Node HTTP request handler config is not resolved");
      }
      if (abortSignal?.aborted) {
        const abortError = new Error("Request aborted");
        abortError.name = "AbortError";
        reject(abortError);
        return;
      }
      const isSSL = request2.protocol === "https:";
      const queryString = buildQueryString(request2.query || {});
      let auth = void 0;
      if (request2.username != null || request2.password != null) {
        const username = request2.username ?? "";
        const password = request2.password ?? "";
        auth = `${username}:${password}`;
      }
      let path = request2.path;
      if (queryString) {
        path += `?${queryString}`;
      }
      if (request2.fragment) {
        path += `#${request2.fragment}`;
      }
      const nodeHttpsOptions = {
        headers: request2.headers,
        host: request2.hostname,
        method: request2.method,
        path,
        port: request2.port,
        agent: isSSL ? this.config.httpsAgent : this.config.httpAgent,
        auth
      };
      const requestFunc = isSSL ? hsRequest : hRequest;
      const req = requestFunc(nodeHttpsOptions, (res) => {
        const httpResponse = new HttpResponse({
          statusCode: res.statusCode || -1,
          reason: res.statusMessage,
          headers: getTransformedHeaders(res.headers),
          body: res
        });
        resolve({ response: httpResponse });
      });
      req.on("error", (err) => {
        if (NODEJS_TIMEOUT_ERROR_CODES2.includes(err.code)) {
          reject(Object.assign(err, { name: "TimeoutError" }));
        } else {
          reject(err);
        }
      });
      setConnectionTimeout(req, reject, this.config.connectionTimeout);
      setSocketTimeout(req, reject, this.config.requestTimeout);
      if (abortSignal) {
        abortSignal.onabort = () => {
          req.abort();
          const abortError = new Error("Request aborted");
          abortError.name = "AbortError";
          reject(abortError);
        };
      }
      const httpAgent = nodeHttpsOptions.agent;
      if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
        setSocketKeepAlive(req, {
          keepAlive: httpAgent.keepAlive,
          keepAliveMsecs: httpAgent.keepAliveMsecs
        });
      }
      writeRequestBodyPromise = writeRequestBody(req, request2, this.config.requestTimeout);
    });
  }
};
__name(NodeHttpHandler, "NodeHttpHandler");

// node_modules/@aws-sdk/node-http-handler/dist-es/node-http2-connection-pool.js
var NodeHttp2ConnectionPool = class {
  constructor(sessions) {
    this.sessions = [];
    this.sessions = sessions ?? [];
  }
  poll() {
    if (this.sessions.length > 0) {
      return this.sessions.shift();
    }
  }
  offerLast(session) {
    this.sessions.push(session);
  }
  contains(session) {
    return this.sessions.includes(session);
  }
  remove(session) {
    this.sessions = this.sessions.filter((s6) => s6 !== session);
  }
  [Symbol.iterator]() {
    return this.sessions[Symbol.iterator]();
  }
  destroy(connection) {
    for (const session of this.sessions) {
      if (session === connection) {
        if (!session.destroyed) {
          session.destroy();
        }
      }
    }
  }
};
__name(NodeHttp2ConnectionPool, "NodeHttp2ConnectionPool");

// node_modules/@aws-sdk/node-http-handler/dist-es/stream-collector/collector.js
import { Writable } from "stream";
var Collector = class extends Writable {
  constructor() {
    super(...arguments);
    this.bufferedBytes = [];
  }
  _write(chunk, encoding, callback) {
    this.bufferedBytes.push(chunk);
    callback();
  }
};
__name(Collector, "Collector");

// node_modules/@aws-sdk/node-http-handler/dist-es/stream-collector/index.js
var streamCollector = /* @__PURE__ */ __name((stream) => new Promise((resolve, reject) => {
  const collector = new Collector();
  stream.pipe(collector);
  stream.on("error", (err) => {
    collector.end();
    reject(err);
  });
  collector.on("error", reject);
  collector.on("finish", function() {
    const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
    resolve(bytes);
  });
}), "streamCollector");

// node_modules/@aws-sdk/util-body-length-node/dist-es/calculateBodyLength.js
import { fstatSync, lstatSync } from "fs";
var calculateBodyLength = /* @__PURE__ */ __name((body) => {
  if (!body) {
    return 0;
  }
  if (typeof body === "string") {
    return Buffer.from(body).length;
  } else if (typeof body.byteLength === "number") {
    return body.byteLength;
  } else if (typeof body.size === "number") {
    return body.size;
  } else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
    return lstatSync(body.path).size;
  } else if (typeof body.fd === "number") {
    return fstatSync(body.fd).size;
  }
  throw new Error(`Body Length computation failed for ${body}`);
}, "calculateBodyLength");

// node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js
import { platform, release } from "os";
import { env, versions } from "process";

// node_modules/@aws-sdk/util-user-agent-node/dist-es/is-crt-available.js
var isCrtAvailable = /* @__PURE__ */ __name(() => {
  try {
    if (typeof __require === "function" && typeof module !== "undefined" && require_dist()) {
      return ["md/crt-avail"];
    }
    return null;
  } catch (e6) {
    return null;
  }
}, "isCrtAvailable");

// node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js
var UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
var UA_APP_ID_INI_NAME = "sdk-ua-app-id";
var defaultUserAgent = /* @__PURE__ */ __name(({ serviceId, clientVersion }) => {
  const sections = [
    ["aws-sdk-js", clientVersion],
    ["ua", "2.0"],
    [`os/${platform()}`, release()],
    ["lang/js"],
    ["md/nodejs", `${versions.node}`]
  ];
  const crtAvailable = isCrtAvailable();
  if (crtAvailable) {
    sections.push(crtAvailable);
  }
  if (serviceId) {
    sections.push([`api/${serviceId}`, clientVersion]);
  }
  if (env.AWS_EXECUTION_ENV) {
    sections.push([`exec-env/${env.AWS_EXECUTION_ENV}`]);
  }
  const appIdPromise = loadConfig({
    environmentVariableSelector: (env2) => env2[UA_APP_ID_ENV_NAME],
    configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME],
    default: void 0
  })();
  let resolvedUserAgent = void 0;
  return async () => {
    if (!resolvedUserAgent) {
      const appId = await appIdPromise;
      resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
    }
    return resolvedUserAgent;
  };
}, "defaultUserAgent");

// node_modules/@aws-sdk/util-base64/dist-es/fromBase64.js
init_dist_es7();
var BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
var fromBase64 = /* @__PURE__ */ __name((input) => {
  if (input.length * 3 % 4 !== 0) {
    throw new TypeError(`Incorrect padding on base64 string.`);
  }
  if (!BASE64_REGEX.exec(input)) {
    throw new TypeError(`Invalid base64 string.`);
  }
  const buffer = fromString(input, "base64");
  return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
}, "fromBase64");

// node_modules/@aws-sdk/util-base64/dist-es/toBase64.js
init_dist_es7();
var toBase64 = /* @__PURE__ */ __name((input) => fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64"), "toBase64");

// node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.shared.js
init_dist_es8();

// node_modules/@aws-sdk/client-sso/dist-es/endpoint/ruleset.js
var p = "required";
var q = "fn";
var r = "argv";
var s = "ref";
var a = "PartitionResult";
var b = "tree";
var c = "error";
var d = "endpoint";
var e = { [p]: false, "type": "String" };
var f = { [p]: true, "default": false, "type": "Boolean" };
var g = { [s]: "Endpoint" };
var h = { [q]: "booleanEquals", [r]: [{ [s]: "UseFIPS" }, true] };
var i = { [q]: "booleanEquals", [r]: [{ [s]: "UseDualStack" }, true] };
var j = {};
var k = { [q]: "booleanEquals", [r]: [true, { [q]: "getAttr", [r]: [{ [s]: a }, "supportsFIPS"] }] };
var l = { [q]: "booleanEquals", [r]: [true, { [q]: "getAttr", [r]: [{ [s]: a }, "supportsDualStack"] }] };
var m = [g];
var n = [h];
var o = [i];
var _data = { version: "1.0", parameters: { Region: e, UseDualStack: f, UseFIPS: f, Endpoint: e }, rules: [{ conditions: [{ [q]: "aws.partition", [r]: [{ [s]: "Region" }], assign: a }], type: b, rules: [{ conditions: [{ [q]: "isSet", [r]: m }, { [q]: "parseURL", [r]: m, assign: "url" }], type: b, rules: [{ conditions: n, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: c }, { type: b, rules: [{ conditions: o, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: c }, { endpoint: { url: g, properties: j, headers: j }, type: d }] }] }, { conditions: [h, i], type: b, rules: [{ conditions: [k, l], type: b, rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: j, headers: j }, type: d }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: c }] }, { conditions: n, type: b, rules: [{ conditions: [k], type: b, rules: [{ type: b, rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: j, headers: j }, type: d }] }] }, { error: "FIPS is enabled but this partition does not support FIPS", type: c }] }, { conditions: o, type: b, rules: [{ conditions: [l], type: b, rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: j, headers: j }, type: d }] }, { error: "DualStack is enabled but this partition does not support DualStack", type: c }] }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: j, headers: j }, type: d }] }] };
var ruleSet = _data;

// node_modules/@aws-sdk/client-sso/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver = /* @__PURE__ */ __name((endpointParams, context = {}) => {
  return resolveEndpoint(ruleSet, {
    endpointParams,
    logger: context.logger
  });
}, "defaultEndpointResolver");

// node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.shared.js
var getRuntimeConfig = /* @__PURE__ */ __name((config) => ({
  apiVersion: "2019-06-10",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? new NoOpLogger(),
  serviceId: config?.serviceId ?? "SSO",
  urlParser: config?.urlParser ?? parseUrl,
  utf8Decoder: config?.utf8Decoder ?? fromUtf84,
  utf8Encoder: config?.utf8Encoder ?? toUtf84
}), "getRuntimeConfig");

// node_modules/@aws-sdk/util-defaults-mode-node/dist-es/constants.js
var AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
var AWS_REGION_ENV = "AWS_REGION";
var AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
var DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
var IMDS_REGION_PATH = "/latest/meta-data/placement/region";

// node_modules/@aws-sdk/util-defaults-mode-node/dist-es/defaultsModeConfig.js
var AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
var AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
var NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
  environmentVariableSelector: (env2) => {
    return env2[AWS_DEFAULTS_MODE_ENV];
  },
  configFileSelector: (profile) => {
    return profile[AWS_DEFAULTS_MODE_CONFIG];
  },
  default: "legacy"
};

// node_modules/@aws-sdk/util-defaults-mode-node/dist-es/resolveDefaultsModeConfig.js
var resolveDefaultsModeConfig = /* @__PURE__ */ __name(({ region = loadConfig(NODE_REGION_CONFIG_OPTIONS), defaultsMode = loadConfig(NODE_DEFAULTS_MODE_CONFIG_OPTIONS) } = {}) => memoize(async () => {
  const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
  switch (mode?.toLowerCase()) {
    case "auto":
      return resolveNodeDefaultsModeAuto(region);
    case "in-region":
    case "cross-region":
    case "mobile":
    case "standard":
    case "legacy":
      return Promise.resolve(mode?.toLocaleLowerCase());
    case void 0:
      return Promise.resolve("legacy");
    default:
      throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
  }
}), "resolveDefaultsModeConfig");
var resolveNodeDefaultsModeAuto = /* @__PURE__ */ __name(async (clientRegion) => {
  if (clientRegion) {
    const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
    const inferredRegion = await inferPhysicalRegion();
    if (!inferredRegion) {
      return "standard";
    }
    if (resolvedRegion === inferredRegion) {
      return "in-region";
    } else {
      return "cross-region";
    }
  }
  return "standard";
}, "resolveNodeDefaultsModeAuto");
var inferPhysicalRegion = /* @__PURE__ */ __name(async () => {
  if (process.env[AWS_EXECUTION_ENV] && (process.env[AWS_REGION_ENV] || process.env[AWS_DEFAULT_REGION_ENV])) {
    return process.env[AWS_REGION_ENV] ?? process.env[AWS_DEFAULT_REGION_ENV];
  }
  if (!process.env[ENV_IMDS_DISABLED]) {
    try {
      const endpoint = await getInstanceMetadataEndpoint();
      return (await httpRequest({ ...endpoint, path: IMDS_REGION_PATH })).toString();
    } catch (e6) {
    }
  }
}, "inferPhysicalRegion");

// node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.js
var getRuntimeConfig2 = /* @__PURE__ */ __name((config) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
  const clientSharedValues = getRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default3.version }),
    maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
    retryMode: config?.retryMode ?? loadConfig({
      ...NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
    }),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
    useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-sso/dist-es/SSOClient.js
var SSOClient = class extends Client {
  constructor(configuration) {
    const _config_0 = getRuntimeConfig2(configuration);
    const _config_1 = resolveClientEndpointParameters3(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};
__name(SSOClient, "SSOClient");

// node_modules/@aws-sdk/client-sso/dist-es/models/SSOServiceException.js
var SSOServiceException = class extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, SSOServiceException.prototype);
  }
};
__name(SSOServiceException, "SSOServiceException");

// node_modules/@aws-sdk/client-sso/dist-es/models/models_0.js
var InvalidRequestException = class extends SSOServiceException {
  constructor(opts) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidRequestException";
    this.$fault = "client";
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
};
__name(InvalidRequestException, "InvalidRequestException");
var ResourceNotFoundException = class extends SSOServiceException {
  constructor(opts) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts
    });
    this.name = "ResourceNotFoundException";
    this.$fault = "client";
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
};
__name(ResourceNotFoundException, "ResourceNotFoundException");
var TooManyRequestsException = class extends SSOServiceException {
  constructor(opts) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts
    });
    this.name = "TooManyRequestsException";
    this.$fault = "client";
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
  }
};
__name(TooManyRequestsException, "TooManyRequestsException");
var UnauthorizedException = class extends SSOServiceException {
  constructor(opts) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts
    });
    this.name = "UnauthorizedException";
    this.$fault = "client";
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
};
__name(UnauthorizedException, "UnauthorizedException");
var GetRoleCredentialsRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.accessToken && { accessToken: SENSITIVE_STRING }
}), "GetRoleCredentialsRequestFilterSensitiveLog");
var RoleCredentialsFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.secretAccessKey && { secretAccessKey: SENSITIVE_STRING },
  ...obj.sessionToken && { sessionToken: SENSITIVE_STRING }
}), "RoleCredentialsFilterSensitiveLog");
var GetRoleCredentialsResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.roleCredentials && { roleCredentials: RoleCredentialsFilterSensitiveLog(obj.roleCredentials) }
}), "GetRoleCredentialsResponseFilterSensitiveLog");

// node_modules/@aws-sdk/client-sso/dist-es/protocols/Aws_restJson1.js
var se_GetRoleCredentialsCommand = /* @__PURE__ */ __name(async (input, context) => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers = map({}, isSerializableHeaderValue, {
    "x-amz-sso_bearer_token": input.accessToken
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}/federation/credentials`;
  const query = map({
    role_name: [, expectNonNull(input.roleName, `roleName`)],
    account_id: [, expectNonNull(input.accountId, `accountId`)]
  });
  let body;
  return new HttpRequest2({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
}, "se_GetRoleCredentialsCommand");
var de_GetRoleCredentialsCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRoleCredentialsCommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata3(output)
  });
  const data = expectNonNull(expectObject(await parseBody2(output.body, context)), "body");
  const doc = take(data, {
    roleCredentials: _json
  });
  Object.assign(contents, doc);
  return contents;
}, "de_GetRoleCredentialsCommand");
var de_GetRoleCredentialsCommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody2(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.sso#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sso#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sso#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.sso#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError3({
        output,
        parsedBody,
        errorCode
      });
  }
}, "de_GetRoleCredentialsCommandError");
var throwDefaultError3 = withBaseException(SSOServiceException);
var de_InvalidRequestExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    message: expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_InvalidRequestExceptionRes");
var de_ResourceNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    message: expectString
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_ResourceNotFoundExceptionRes");
var de_TooManyRequestsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    message: expectString
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_TooManyRequestsExceptionRes");
var de_UnauthorizedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    message: expectString
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_UnauthorizedExceptionRes");
var deserializeMetadata3 = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var collectBody2 = /* @__PURE__ */ __name((streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
}, "collectBody");
var collectBodyString2 = /* @__PURE__ */ __name((streamBody, context) => collectBody2(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
var isSerializableHeaderValue = /* @__PURE__ */ __name((value) => value !== void 0 && value !== null && value !== "" && (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) && (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0), "isSerializableHeaderValue");
var parseBody2 = /* @__PURE__ */ __name((streamBody, context) => collectBodyString2(streamBody, context).then((encoded) => {
  if (encoded.length) {
    return JSON.parse(encoded);
  }
  return {};
}), "parseBody");
var parseErrorBody2 = /* @__PURE__ */ __name(async (errorBody, context) => {
  const value = await parseBody2(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
}, "parseErrorBody");
var loadRestJsonErrorCode = /* @__PURE__ */ __name((output, data) => {
  const findKey = /* @__PURE__ */ __name((object, key) => Object.keys(object).find((k6) => k6.toLowerCase() === key.toLowerCase()), "findKey");
  const sanitizeErrorCode = /* @__PURE__ */ __name((rawValue) => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  }, "sanitizeErrorCode");
  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== void 0) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }
  if (data.code !== void 0) {
    return sanitizeErrorCode(data.code);
  }
  if (data["__type"] !== void 0) {
    return sanitizeErrorCode(data["__type"]);
  }
}, "loadRestJsonErrorCode");

// node_modules/@aws-sdk/client-sso/dist-es/commands/GetRoleCredentialsCommand.js
var GetRoleCredentialsCommand = class extends Command {
  static getEndpointParameterInstructions() {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
  constructor(input) {
    super();
    this.input = input;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetRoleCredentialsCommand.getEndpointParameterInstructions()));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const clientName = "SSOClient";
    const commandName = "GetRoleCredentialsCommand";
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRoleCredentialsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRoleCredentialsResponseFilterSensitiveLog
    };
    const { requestHandler } = configuration;
    return stack.resolve((request2) => requestHandler.handle(request2.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return se_GetRoleCredentialsCommand(input, context);
  }
  deserialize(output, context) {
    return de_GetRoleCredentialsCommand(output, context);
  }
};
__name(GetRoleCredentialsCommand, "GetRoleCredentialsCommand");

// node_modules/@aws-sdk/token-providers/dist-es/constants.js
var EXPIRE_WINDOW_MS = 5 * 60 * 1e3;
var REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;

// node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters4 = /* @__PURE__ */ __name((options) => {
  return {
    ...options,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "awsssooidc"
  };
}, "resolveClientEndpointParameters");

// node_modules/@aws-sdk/client-sso-oidc/package.json
var package_default4 = {
  name: "@aws-sdk/client-sso-oidc",
  description: "AWS SDK for JavaScript Sso Oidc Client for Node.js, Browser and React Native",
  version: "3.354.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "tsc -p tsconfig.cjs.json",
    "build:docs": "typedoc",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo sso-oidc"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha256-browser": "3.0.0",
    "@aws-crypto/sha256-js": "3.0.0",
    "@aws-sdk/config-resolver": "3.354.0",
    "@aws-sdk/fetch-http-handler": "3.353.0",
    "@aws-sdk/hash-node": "3.347.0",
    "@aws-sdk/invalid-dependency": "3.347.0",
    "@aws-sdk/middleware-content-length": "3.347.0",
    "@aws-sdk/middleware-endpoint": "3.347.0",
    "@aws-sdk/middleware-host-header": "3.347.0",
    "@aws-sdk/middleware-logger": "3.347.0",
    "@aws-sdk/middleware-recursion-detection": "3.347.0",
    "@aws-sdk/middleware-retry": "3.354.0",
    "@aws-sdk/middleware-serde": "3.347.0",
    "@aws-sdk/middleware-stack": "3.347.0",
    "@aws-sdk/middleware-user-agent": "3.352.0",
    "@aws-sdk/node-config-provider": "3.354.0",
    "@aws-sdk/node-http-handler": "3.350.0",
    "@aws-sdk/smithy-client": "3.347.0",
    "@aws-sdk/types": "3.347.0",
    "@aws-sdk/url-parser": "3.347.0",
    "@aws-sdk/util-base64": "3.310.0",
    "@aws-sdk/util-body-length-browser": "3.310.0",
    "@aws-sdk/util-body-length-node": "3.310.0",
    "@aws-sdk/util-defaults-mode-browser": "3.353.0",
    "@aws-sdk/util-defaults-mode-node": "3.354.0",
    "@aws-sdk/util-endpoints": "3.352.0",
    "@aws-sdk/util-retry": "3.347.0",
    "@aws-sdk/util-user-agent-browser": "3.347.0",
    "@aws-sdk/util-user-agent-node": "3.354.0",
    "@aws-sdk/util-utf8": "3.310.0",
    "@smithy/protocol-http": "^1.0.1",
    "@smithy/types": "^1.0.0",
    tslib: "^2.5.0"
  },
  devDependencies: {
    "@aws-sdk/service-client-documentation-generator": "3.310.0",
    "@tsconfig/node14": "1.0.3",
    "@types/node": "^14.14.31",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typedoc: "0.23.23",
    typescript: "~4.9.5"
  },
  engines: {
    node: ">=14.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso-oidc",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-sso-oidc"
  }
};

// node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.shared.js
init_dist_es8();

// node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/ruleset.js
var p2 = "required";
var q2 = "fn";
var r2 = "argv";
var s2 = "ref";
var a2 = "PartitionResult";
var b2 = "tree";
var c2 = "error";
var d2 = "endpoint";
var e2 = { [p2]: false, "type": "String" };
var f2 = { [p2]: true, "default": false, "type": "Boolean" };
var g2 = { [s2]: "Endpoint" };
var h2 = { [q2]: "booleanEquals", [r2]: [{ [s2]: "UseFIPS" }, true] };
var i2 = { [q2]: "booleanEquals", [r2]: [{ [s2]: "UseDualStack" }, true] };
var j2 = {};
var k2 = { [q2]: "booleanEquals", [r2]: [true, { [q2]: "getAttr", [r2]: [{ [s2]: a2 }, "supportsFIPS"] }] };
var l2 = { [q2]: "booleanEquals", [r2]: [true, { [q2]: "getAttr", [r2]: [{ [s2]: a2 }, "supportsDualStack"] }] };
var m2 = [g2];
var n2 = [h2];
var o2 = [i2];
var _data2 = { version: "1.0", parameters: { Region: e2, UseDualStack: f2, UseFIPS: f2, Endpoint: e2 }, rules: [{ conditions: [{ [q2]: "aws.partition", [r2]: [{ [s2]: "Region" }], assign: a2 }], type: b2, rules: [{ conditions: [{ [q2]: "isSet", [r2]: m2 }, { [q2]: "parseURL", [r2]: m2, assign: "url" }], type: b2, rules: [{ conditions: n2, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: c2 }, { type: b2, rules: [{ conditions: o2, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: c2 }, { endpoint: { url: g2, properties: j2, headers: j2 }, type: d2 }] }] }, { conditions: [h2, i2], type: b2, rules: [{ conditions: [k2, l2], type: b2, rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: j2, headers: j2 }, type: d2 }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: c2 }] }, { conditions: n2, type: b2, rules: [{ conditions: [k2], type: b2, rules: [{ type: b2, rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", properties: j2, headers: j2 }, type: d2 }] }] }, { error: "FIPS is enabled but this partition does not support FIPS", type: c2 }] }, { conditions: o2, type: b2, rules: [{ conditions: [l2], type: b2, rules: [{ endpoint: { url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: j2, headers: j2 }, type: d2 }] }, { error: "DualStack is enabled but this partition does not support DualStack", type: c2 }] }, { endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: j2, headers: j2 }, type: d2 }] }] };
var ruleSet2 = _data2;

// node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver2 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
  return resolveEndpoint(ruleSet2, {
    endpointParams,
    logger: context.logger
  });
}, "defaultEndpointResolver");

// node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.shared.js
var getRuntimeConfig3 = /* @__PURE__ */ __name((config) => ({
  apiVersion: "2019-06-10",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver2,
  logger: config?.logger ?? new NoOpLogger(),
  serviceId: config?.serviceId ?? "SSO OIDC",
  urlParser: config?.urlParser ?? parseUrl,
  utf8Decoder: config?.utf8Decoder ?? fromUtf84,
  utf8Encoder: config?.utf8Encoder ?? toUtf84
}), "getRuntimeConfig");

// node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.js
var getRuntimeConfig4 = /* @__PURE__ */ __name((config) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
  const clientSharedValues = getRuntimeConfig3(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default4.version }),
    maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
    retryMode: config?.retryMode ?? loadConfig({
      ...NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
    }),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
    useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-sso-oidc/dist-es/SSOOIDCClient.js
var SSOOIDCClient = class extends Client {
  constructor(configuration) {
    const _config_0 = getRuntimeConfig4(configuration);
    const _config_1 = resolveClientEndpointParameters4(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};
__name(SSOOIDCClient, "SSOOIDCClient");

// node_modules/@aws-sdk/client-sso-oidc/dist-es/models/SSOOIDCServiceException.js
var SSOOIDCServiceException = class extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, SSOOIDCServiceException.prototype);
  }
};
__name(SSOOIDCServiceException, "SSOOIDCServiceException");

// node_modules/@aws-sdk/client-sso-oidc/dist-es/models/models_0.js
var AccessDeniedException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts
    });
    this.name = "AccessDeniedException";
    this.$fault = "client";
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(AccessDeniedException, "AccessDeniedException");
var AuthorizationPendingException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "AuthorizationPendingException",
      $fault: "client",
      ...opts
    });
    this.name = "AuthorizationPendingException";
    this.$fault = "client";
    Object.setPrototypeOf(this, AuthorizationPendingException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(AuthorizationPendingException, "AuthorizationPendingException");
var ExpiredTokenException2 = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "ExpiredTokenException",
      $fault: "client",
      ...opts
    });
    this.name = "ExpiredTokenException";
    this.$fault = "client";
    Object.setPrototypeOf(this, ExpiredTokenException2.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(ExpiredTokenException2, "ExpiredTokenException");
var InternalServerException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts
    });
    this.name = "InternalServerException";
    this.$fault = "server";
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(InternalServerException, "InternalServerException");
var InvalidClientException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "InvalidClientException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidClientException";
    this.$fault = "client";
    Object.setPrototypeOf(this, InvalidClientException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(InvalidClientException, "InvalidClientException");
var InvalidGrantException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "InvalidGrantException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidGrantException";
    this.$fault = "client";
    Object.setPrototypeOf(this, InvalidGrantException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(InvalidGrantException, "InvalidGrantException");
var InvalidRequestException2 = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidRequestException";
    this.$fault = "client";
    Object.setPrototypeOf(this, InvalidRequestException2.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(InvalidRequestException2, "InvalidRequestException");
var InvalidScopeException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "InvalidScopeException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidScopeException";
    this.$fault = "client";
    Object.setPrototypeOf(this, InvalidScopeException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(InvalidScopeException, "InvalidScopeException");
var SlowDownException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "SlowDownException",
      $fault: "client",
      ...opts
    });
    this.name = "SlowDownException";
    this.$fault = "client";
    Object.setPrototypeOf(this, SlowDownException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(SlowDownException, "SlowDownException");
var UnauthorizedClientException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "UnauthorizedClientException",
      $fault: "client",
      ...opts
    });
    this.name = "UnauthorizedClientException";
    this.$fault = "client";
    Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(UnauthorizedClientException, "UnauthorizedClientException");
var UnsupportedGrantTypeException = class extends SSOOIDCServiceException {
  constructor(opts) {
    super({
      name: "UnsupportedGrantTypeException",
      $fault: "client",
      ...opts
    });
    this.name = "UnsupportedGrantTypeException";
    this.$fault = "client";
    Object.setPrototypeOf(this, UnsupportedGrantTypeException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(UnsupportedGrantTypeException, "UnsupportedGrantTypeException");

// node_modules/@aws-sdk/client-sso-oidc/dist-es/protocols/Aws_restJson1.js
var se_CreateTokenCommand = /* @__PURE__ */ __name(async (input, context) => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers = {
    "content-type": "application/json"
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}/token`;
  let body;
  body = JSON.stringify(take(input, {
    clientId: [],
    clientSecret: [],
    code: [],
    deviceCode: [],
    grantType: [],
    redirectUri: [],
    refreshToken: [],
    scope: (_) => _json(_)
  }));
  return new HttpRequest2({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
}, "se_CreateTokenCommand");
var de_CreateTokenCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateTokenCommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata4(output)
  });
  const data = expectNonNull(expectObject(await parseBody3(output.body, context)), "body");
  const doc = take(data, {
    accessToken: expectString,
    expiresIn: expectInt32,
    idToken: expectString,
    refreshToken: expectString,
    tokenType: expectString
  });
  Object.assign(contents, doc);
  return contents;
}, "de_CreateTokenCommand");
var de_CreateTokenCommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody3(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode2(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssooidc#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationPendingException":
    case "com.amazonaws.ssooidc#AuthorizationPendingException":
      throw await de_AuthorizationPendingExceptionRes(parsedOutput, context);
    case "ExpiredTokenException":
    case "com.amazonaws.ssooidc#ExpiredTokenException":
      throw await de_ExpiredTokenExceptionRes2(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssooidc#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidClientException":
    case "com.amazonaws.ssooidc#InvalidClientException":
      throw await de_InvalidClientExceptionRes(parsedOutput, context);
    case "InvalidGrantException":
    case "com.amazonaws.ssooidc#InvalidGrantException":
      throw await de_InvalidGrantExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ssooidc#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes2(parsedOutput, context);
    case "InvalidScopeException":
    case "com.amazonaws.ssooidc#InvalidScopeException":
      throw await de_InvalidScopeExceptionRes(parsedOutput, context);
    case "SlowDownException":
    case "com.amazonaws.ssooidc#SlowDownException":
      throw await de_SlowDownExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.ssooidc#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
    case "UnsupportedGrantTypeException":
    case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
      throw await de_UnsupportedGrantTypeExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError4({
        output,
        parsedBody,
        errorCode
      });
  }
}, "de_CreateTokenCommandError");
var throwDefaultError4 = withBaseException(SSOOIDCServiceException);
var de_AccessDeniedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata4(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_AccessDeniedExceptionRes");
var de_AuthorizationPendingExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new AuthorizationPendingException({
    $metadata: deserializeMetadata4(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_AuthorizationPendingExceptionRes");
var de_ExpiredTokenExceptionRes2 = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new ExpiredTokenException2({
    $metadata: deserializeMetadata4(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_ExpiredTokenExceptionRes");
var de_InternalServerExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata4(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_InternalServerExceptionRes");
var de_InvalidClientExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidClientException({
    $metadata: deserializeMetadata4(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_InvalidClientExceptionRes");
var de_InvalidGrantExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidGrantException({
    $metadata: deserializeMetadata4(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_InvalidGrantExceptionRes");
var de_InvalidRequestExceptionRes2 = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException2({
    $metadata: deserializeMetadata4(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_InvalidRequestExceptionRes");
var de_InvalidScopeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidScopeException({
    $metadata: deserializeMetadata4(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_InvalidScopeExceptionRes");
var de_SlowDownExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new SlowDownException({
    $metadata: deserializeMetadata4(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_SlowDownExceptionRes");
var de_UnauthorizedClientExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedClientException({
    $metadata: deserializeMetadata4(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_UnauthorizedClientExceptionRes");
var de_UnsupportedGrantTypeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: expectString,
    error_description: expectString
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedGrantTypeException({
    $metadata: deserializeMetadata4(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_UnsupportedGrantTypeExceptionRes");
var deserializeMetadata4 = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var collectBody3 = /* @__PURE__ */ __name((streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
}, "collectBody");
var collectBodyString3 = /* @__PURE__ */ __name((streamBody, context) => collectBody3(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
var parseBody3 = /* @__PURE__ */ __name((streamBody, context) => collectBodyString3(streamBody, context).then((encoded) => {
  if (encoded.length) {
    return JSON.parse(encoded);
  }
  return {};
}), "parseBody");
var parseErrorBody3 = /* @__PURE__ */ __name(async (errorBody, context) => {
  const value = await parseBody3(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
}, "parseErrorBody");
var loadRestJsonErrorCode2 = /* @__PURE__ */ __name((output, data) => {
  const findKey = /* @__PURE__ */ __name((object, key) => Object.keys(object).find((k6) => k6.toLowerCase() === key.toLowerCase()), "findKey");
  const sanitizeErrorCode = /* @__PURE__ */ __name((rawValue) => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  }, "sanitizeErrorCode");
  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== void 0) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }
  if (data.code !== void 0) {
    return sanitizeErrorCode(data.code);
  }
  if (data["__type"] !== void 0) {
    return sanitizeErrorCode(data["__type"]);
  }
}, "loadRestJsonErrorCode");

// node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/CreateTokenCommand.js
var CreateTokenCommand = class extends Command {
  static getEndpointParameterInstructions() {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
  constructor(input) {
    super();
    this.input = input;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateTokenCommand.getEndpointParameterInstructions()));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const clientName = "SSOOIDCClient";
    const commandName = "CreateTokenCommand";
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_) => _,
      outputFilterSensitiveLog: (_) => _
    };
    const { requestHandler } = configuration;
    return stack.resolve((request2) => requestHandler.handle(request2.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return se_CreateTokenCommand(input, context);
  }
  deserialize(output, context) {
    return de_CreateTokenCommand(output, context);
  }
};
__name(CreateTokenCommand, "CreateTokenCommand");

// node_modules/@aws-sdk/token-providers/dist-es/getSsoOidcClient.js
var ssoOidcClientsHash = {};
var getSsoOidcClient = /* @__PURE__ */ __name((ssoRegion) => {
  if (ssoOidcClientsHash[ssoRegion]) {
    return ssoOidcClientsHash[ssoRegion];
  }
  const ssoOidcClient = new SSOOIDCClient({ region: ssoRegion });
  ssoOidcClientsHash[ssoRegion] = ssoOidcClient;
  return ssoOidcClient;
}, "getSsoOidcClient");

// node_modules/@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js
var getNewSsoOidcToken = /* @__PURE__ */ __name((ssoToken, ssoRegion) => {
  const ssoOidcClient = getSsoOidcClient(ssoRegion);
  return ssoOidcClient.send(new CreateTokenCommand({
    clientId: ssoToken.clientId,
    clientSecret: ssoToken.clientSecret,
    refreshToken: ssoToken.refreshToken,
    grantType: "refresh_token"
  }));
}, "getNewSsoOidcToken");

// node_modules/@aws-sdk/token-providers/dist-es/validateTokenExpiry.js
var validateTokenExpiry = /* @__PURE__ */ __name((token) => {
  if (token.expiration && token.expiration.getTime() < Date.now()) {
    throw new TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
  }
}, "validateTokenExpiry");

// node_modules/@aws-sdk/token-providers/dist-es/validateTokenKey.js
var validateTokenKey = /* @__PURE__ */ __name((key, value, forRefresh = false) => {
  if (typeof value === "undefined") {
    throw new TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`, false);
  }
}, "validateTokenKey");

// node_modules/@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js
import { promises as fsPromises3 } from "fs";
var { writeFile } = fsPromises3;
var writeSSOTokenToFile = /* @__PURE__ */ __name((id, ssoToken) => {
  const tokenFilepath = getSSOTokenFilepath(id);
  const tokenString = JSON.stringify(ssoToken, null, 2);
  return writeFile(tokenFilepath, tokenString);
}, "writeSSOTokenToFile");

// node_modules/@aws-sdk/token-providers/dist-es/fromSso.js
var lastRefreshAttemptTime = new Date(0);
var fromSso = /* @__PURE__ */ __name((init = {}) => async () => {
  const profiles = await parseKnownFiles(init);
  const profileName = getProfileName(init);
  const profile = profiles[profileName];
  if (!profile) {
    throw new TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
  } else if (!profile["sso_session"]) {
    throw new TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
  }
  const ssoSessionName = profile["sso_session"];
  const ssoSessions = await loadSsoSessionData(init);
  const ssoSession = ssoSessions[ssoSessionName];
  if (!ssoSession) {
    throw new TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
  }
  for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
    if (!ssoSession[ssoSessionRequiredKey]) {
      throw new TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
    }
  }
  const ssoStartUrl = ssoSession["sso_start_url"];
  const ssoRegion = ssoSession["sso_region"];
  let ssoToken;
  try {
    ssoToken = await getSSOTokenFromFile(ssoSessionName);
  } catch (e6) {
    throw new TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`, false);
  }
  validateTokenKey("accessToken", ssoToken.accessToken);
  validateTokenKey("expiresAt", ssoToken.expiresAt);
  const { accessToken, expiresAt } = ssoToken;
  const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
  if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
    return existingToken;
  }
  if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1e3) {
    validateTokenExpiry(existingToken);
    return existingToken;
  }
  validateTokenKey("clientId", ssoToken.clientId, true);
  validateTokenKey("clientSecret", ssoToken.clientSecret, true);
  validateTokenKey("refreshToken", ssoToken.refreshToken, true);
  try {
    lastRefreshAttemptTime.setTime(Date.now());
    const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion);
    validateTokenKey("accessToken", newSsoOidcToken.accessToken);
    validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
    const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1e3);
    try {
      await writeSSOTokenToFile(ssoSessionName, {
        ...ssoToken,
        accessToken: newSsoOidcToken.accessToken,
        expiresAt: newTokenExpiration.toISOString(),
        refreshToken: newSsoOidcToken.refreshToken
      });
    } catch (error) {
    }
    return {
      token: newSsoOidcToken.accessToken,
      expiration: newTokenExpiration
    };
  } catch (error) {
    validateTokenExpiry(existingToken);
    return existingToken;
  }
}, "fromSso");

// node_modules/@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js
var EXPIRE_WINDOW_MS2 = 15 * 60 * 1e3;
var SHOULD_FAIL_CREDENTIAL_CHAIN = false;
var resolveSSOCredentials = /* @__PURE__ */ __name(async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, profile }) => {
  let token;
  const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
  if (ssoSession) {
    try {
      const _token = await fromSso({ profile })();
      token = {
        accessToken: _token.token,
        expiresAt: new Date(_token.expiration).toISOString()
      };
    } catch (e6) {
      throw new CredentialsProviderError(e6.message, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
  } else {
    try {
      token = await getSSOTokenFromFile(ssoStartUrl);
    } catch (e6) {
      throw new CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
  }
  if (new Date(token.expiresAt).getTime() - Date.now() <= EXPIRE_WINDOW_MS2) {
    throw new CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
  }
  const { accessToken } = token;
  const sso = ssoClient || new SSOClient({ region: ssoRegion });
  let ssoResp;
  try {
    ssoResp = await sso.send(new GetRoleCredentialsCommand({
      accountId: ssoAccountId,
      roleName: ssoRoleName,
      accessToken
    }));
  } catch (e6) {
    throw CredentialsProviderError.from(e6, SHOULD_FAIL_CREDENTIAL_CHAIN);
  }
  const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration } = {} } = ssoResp;
  if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
    throw new CredentialsProviderError("SSO returns an invalid temporary credential.", SHOULD_FAIL_CREDENTIAL_CHAIN);
  }
  return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration) };
}, "resolveSSOCredentials");

// node_modules/@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js
var validateSsoProfile = /* @__PURE__ */ __name((profile) => {
  const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
  if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
    throw new CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, false);
  }
  return profile;
}, "validateSsoProfile");

// node_modules/@aws-sdk/credential-provider-sso/dist-es/fromSSO.js
var fromSSO = /* @__PURE__ */ __name((init = {}) => async () => {
  const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, ssoSession } = init;
  const profileName = getProfileName(init);
  if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
    const profiles = await parseKnownFiles(init);
    const profile = profiles[profileName];
    if (!profile) {
      throw new CredentialsProviderError(`Profile ${profileName} was not found.`);
    }
    if (!isSsoProfile(profile)) {
      throw new CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`);
    }
    if (profile?.sso_session) {
      const ssoSessions = await loadSsoSessionData(init);
      const session = ssoSessions[profile.sso_session];
      const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
      if (ssoRegion && ssoRegion !== session.sso_region) {
        throw new CredentialsProviderError(`Conflicting SSO region` + conflictMsg, false);
      }
      if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
        throw new CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, false);
      }
      profile.sso_region = session.sso_region;
      profile.sso_start_url = session.sso_start_url;
    }
    const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile);
    return resolveSSOCredentials({
      ssoStartUrl: sso_start_url,
      ssoSession: sso_session,
      ssoAccountId: sso_account_id,
      ssoRegion: sso_region,
      ssoRoleName: sso_role_name,
      ssoClient,
      profile: profileName
    });
  } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
    throw new CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"');
  } else {
    return resolveSSOCredentials({
      ssoStartUrl,
      ssoSession,
      ssoAccountId,
      ssoRegion,
      ssoRoleName,
      ssoClient,
      profile: profileName
    });
  }
}, "fromSSO");

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js
var resolveSsoCredentials = /* @__PURE__ */ __name((data) => {
  const { sso_start_url, sso_account_id, sso_session, sso_region, sso_role_name } = validateSsoProfile(data);
  return fromSSO({
    ssoStartUrl: sso_start_url,
    ssoAccountId: sso_account_id,
    ssoSession: sso_session,
    ssoRegion: sso_region,
    ssoRoleName: sso_role_name
  })();
}, "resolveSsoCredentials");

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js
var isStaticCredsProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.aws_access_key_id === "string" && typeof arg.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1, "isStaticCredsProfile");
var resolveStaticCredentials = /* @__PURE__ */ __name((profile) => Promise.resolve({
  accessKeyId: profile.aws_access_key_id,
  secretAccessKey: profile.aws_secret_access_key,
  sessionToken: profile.aws_session_token
}), "resolveStaticCredentials");

// node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js
import { readFileSync } from "fs";

// node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js
var fromWebToken = /* @__PURE__ */ __name((init) => () => {
  const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds, roleAssumerWithWebIdentity } = init;
  if (!roleAssumerWithWebIdentity) {
    throw new CredentialsProviderError(`Role Arn '${roleArn}' needs to be assumed with web identity, but no role assumption callback was provided.`, false);
  }
  return roleAssumerWithWebIdentity({
    RoleArn: roleArn,
    RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
    WebIdentityToken: webIdentityToken,
    ProviderId: providerId,
    PolicyArns: policyArns,
    Policy: policy,
    DurationSeconds: durationSeconds
  });
}, "fromWebToken");

// node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js
var ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
var ENV_ROLE_ARN = "AWS_ROLE_ARN";
var ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
var fromTokenFile = /* @__PURE__ */ __name((init = {}) => async () => {
  const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
  const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
  const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
  if (!webIdentityTokenFile || !roleArn) {
    throw new CredentialsProviderError("Web identity configuration not specified");
  }
  return fromWebToken({
    ...init,
    webIdentityToken: readFileSync(webIdentityTokenFile, { encoding: "ascii" }),
    roleArn,
    roleSessionName
  })();
}, "fromTokenFile");

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js
var isWebIdentityProfile = /* @__PURE__ */ __name((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.web_identity_token_file === "string" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1, "isWebIdentityProfile");
var resolveWebIdentityCredentials = /* @__PURE__ */ __name(async (profile, options) => fromTokenFile({
  webIdentityTokenFile: profile.web_identity_token_file,
  roleArn: profile.role_arn,
  roleSessionName: profile.role_session_name,
  roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity
})(), "resolveWebIdentityCredentials");

// node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js
var resolveProfileData = /* @__PURE__ */ __name(async (profileName, profiles, options, visitedProfiles = {}) => {
  const data = profiles[profileName];
  if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
    return resolveStaticCredentials(data);
  }
  if (isAssumeRoleProfile(data)) {
    return resolveAssumeRoleCredentials(profileName, profiles, options, visitedProfiles);
  }
  if (isStaticCredsProfile(data)) {
    return resolveStaticCredentials(data);
  }
  if (isWebIdentityProfile(data)) {
    return resolveWebIdentityCredentials(data, options);
  }
  if (isProcessProfile(data)) {
    return resolveProcessCredentials2(options, profileName);
  }
  if (isSsoProfile(data)) {
    return resolveSsoCredentials(data);
  }
  throw new CredentialsProviderError(`Profile ${profileName} could not be found or parsed in shared credentials file.`);
}, "resolveProfileData");

// node_modules/@aws-sdk/credential-provider-ini/dist-es/fromIni.js
var fromIni = /* @__PURE__ */ __name((init = {}) => async () => {
  const profiles = await parseKnownFiles(init);
  return resolveProfileData(getProfileName(init), profiles, init);
}, "fromIni");

// node_modules/@aws-sdk/credential-provider-node/dist-es/remoteProvider.js
var ENV_IMDS_DISABLED2 = "AWS_EC2_METADATA_DISABLED";
var remoteProvider = /* @__PURE__ */ __name((init) => {
  if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
    return fromContainerMetadata(init);
  }
  if (process.env[ENV_IMDS_DISABLED2]) {
    return async () => {
      throw new CredentialsProviderError("EC2 Instance Metadata Service access disabled");
    };
  }
  return fromInstanceMetadata(init);
}, "remoteProvider");

// node_modules/@aws-sdk/credential-provider-node/dist-es/defaultProvider.js
var defaultProvider = /* @__PURE__ */ __name((init = {}) => memoize(chain(...init.profile || process.env[ENV_PROFILE] ? [] : [fromEnv()], fromSSO(init), fromIni(init), fromProcess(init), fromTokenFile(init), remoteProvider(init), async () => {
  throw new CredentialsProviderError("Could not load credentials from any providers", false);
}), (credentials) => credentials.expiration !== void 0 && credentials.expiration.getTime() - Date.now() < 3e5, (credentials) => credentials.expiration !== void 0), "defaultProvider");

// node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.shared.js
init_dist_es8();

// node_modules/@aws-sdk/client-sts/dist-es/endpoint/ruleset.js
var F = "required";
var G = "type";
var H = "fn";
var I = "argv";
var J = "ref";
var a3 = false;
var b3 = true;
var c3 = "booleanEquals";
var d3 = "tree";
var e3 = "stringEquals";
var f3 = "sigv4";
var g3 = "sts";
var h3 = "us-east-1";
var i3 = "endpoint";
var j3 = "https://sts.{Region}.{PartitionResult#dnsSuffix}";
var k3 = "error";
var l3 = "getAttr";
var m3 = { [F]: false, [G]: "String" };
var n3 = { [F]: true, "default": false, [G]: "Boolean" };
var o3 = { [J]: "Endpoint" };
var p3 = { [H]: "isSet", [I]: [{ [J]: "Region" }] };
var q3 = { [J]: "Region" };
var r3 = { [H]: "aws.partition", [I]: [q3], "assign": "PartitionResult" };
var s3 = { [J]: "UseFIPS" };
var t = { [J]: "UseDualStack" };
var u = { "url": "https://sts.amazonaws.com", "properties": { "authSchemes": [{ "name": f3, "signingName": g3, "signingRegion": h3 }] }, "headers": {} };
var v = {};
var w = { "conditions": [{ [H]: e3, [I]: [q3, "aws-global"] }], [i3]: u, [G]: i3 };
var x = { [H]: c3, [I]: [s3, true] };
var y = { [H]: c3, [I]: [t, true] };
var z = { [H]: c3, [I]: [true, { [H]: l3, [I]: [{ [J]: "PartitionResult" }, "supportsFIPS"] }] };
var A = { [J]: "PartitionResult" };
var B = { [H]: c3, [I]: [true, { [H]: l3, [I]: [A, "supportsDualStack"] }] };
var C = [{ [H]: "isSet", [I]: [o3] }];
var D = [x];
var E = [y];
var _data3 = { version: "1.0", parameters: { Region: m3, UseDualStack: n3, UseFIPS: n3, Endpoint: m3, UseGlobalEndpoint: n3 }, rules: [{ conditions: [{ [H]: c3, [I]: [{ [J]: "UseGlobalEndpoint" }, b3] }, { [H]: "not", [I]: C }, p3, r3, { [H]: c3, [I]: [s3, a3] }, { [H]: c3, [I]: [t, a3] }], [G]: d3, rules: [{ conditions: [{ [H]: e3, [I]: [q3, "ap-northeast-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "ap-south-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "ap-southeast-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "ap-southeast-2"] }], endpoint: u, [G]: i3 }, w, { conditions: [{ [H]: e3, [I]: [q3, "ca-central-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "eu-central-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "eu-north-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "eu-west-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "eu-west-2"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "eu-west-3"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "sa-east-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, h3] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "us-east-2"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "us-west-1"] }], endpoint: u, [G]: i3 }, { conditions: [{ [H]: e3, [I]: [q3, "us-west-2"] }], endpoint: u, [G]: i3 }, { endpoint: { url: j3, properties: { authSchemes: [{ name: f3, signingName: g3, signingRegion: "{Region}" }] }, headers: v }, [G]: i3 }] }, { conditions: C, [G]: d3, rules: [{ conditions: D, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [G]: k3 }, { [G]: d3, rules: [{ conditions: E, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [G]: k3 }, { endpoint: { url: o3, properties: v, headers: v }, [G]: i3 }] }] }, { [G]: d3, rules: [{ conditions: [p3], [G]: d3, rules: [{ conditions: [r3], [G]: d3, rules: [{ conditions: [x, y], [G]: d3, rules: [{ conditions: [z, B], [G]: d3, rules: [{ [G]: d3, rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v, headers: v }, [G]: i3 }] }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [G]: k3 }] }, { conditions: D, [G]: d3, rules: [{ conditions: [z], [G]: d3, rules: [{ [G]: d3, rules: [{ conditions: [{ [H]: e3, [I]: ["aws-us-gov", { [H]: l3, [I]: [A, "name"] }] }], endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: v, headers: v }, [G]: i3 }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", properties: v, headers: v }, [G]: i3 }] }] }, { error: "FIPS is enabled but this partition does not support FIPS", [G]: k3 }] }, { conditions: E, [G]: d3, rules: [{ conditions: [B], [G]: d3, rules: [{ [G]: d3, rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v, headers: v }, [G]: i3 }] }] }, { error: "DualStack is enabled but this partition does not support DualStack", [G]: k3 }] }, { [G]: d3, rules: [w, { endpoint: { url: j3, properties: v, headers: v }, [G]: i3 }] }] }] }, { error: "Invalid Configuration: Missing Region", [G]: k3 }] }] };
var ruleSet3 = _data3;

// node_modules/@aws-sdk/client-sts/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver3 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
  return resolveEndpoint(ruleSet3, {
    endpointParams,
    logger: context.logger
  });
}, "defaultEndpointResolver");

// node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.shared.js
var getRuntimeConfig5 = /* @__PURE__ */ __name((config) => ({
  apiVersion: "2011-06-15",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver3,
  logger: config?.logger ?? new NoOpLogger(),
  serviceId: config?.serviceId ?? "STS",
  urlParser: config?.urlParser ?? parseUrl,
  utf8Decoder: config?.utf8Decoder ?? fromUtf84,
  utf8Encoder: config?.utf8Encoder ?? toUtf84
}), "getRuntimeConfig");

// node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.js
var getRuntimeConfig6 = /* @__PURE__ */ __name((config) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
  const clientSharedValues = getRuntimeConfig5(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? decorateDefaultCredentialProvider(defaultProvider),
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default2.version }),
    maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
    retryMode: config?.retryMode ?? loadConfig({
      ...NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
    }),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
    useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-sts/dist-es/STSClient.js
var STSClient = class extends Client {
  constructor(configuration) {
    const _config_0 = getRuntimeConfig6(configuration);
    const _config_1 = resolveClientEndpointParameters2(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveStsAuthConfig(_config_5, { stsClientCtor: STSClient });
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};
__name(STSClient, "STSClient");

// node_modules/@aws-sdk/client-sts/dist-es/defaultRoleAssumers.js
var getCustomizableStsClientCtor = /* @__PURE__ */ __name((baseCtor, customizations) => {
  if (!customizations)
    return baseCtor;
  else
    return /* @__PURE__ */ __name(class CustomizableSTSClient extends baseCtor {
      constructor(config) {
        super(config);
        for (const customization of customizations) {
          this.middlewareStack.use(customization);
        }
      }
    }, "CustomizableSTSClient");
}, "getCustomizableStsClientCtor");
var getDefaultRoleAssumer2 = /* @__PURE__ */ __name((stsOptions = {}, stsPlugins) => getDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins)), "getDefaultRoleAssumer");
var getDefaultRoleAssumerWithWebIdentity2 = /* @__PURE__ */ __name((stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins)), "getDefaultRoleAssumerWithWebIdentity");
var decorateDefaultCredentialProvider2 = /* @__PURE__ */ __name((provider) => (input) => provider({
  roleAssumer: getDefaultRoleAssumer2(input),
  roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity2(input),
  ...input
}), "decorateDefaultCredentialProvider");

// node_modules/@aws-sdk/client-ssm/dist-es/runtimeConfig.shared.js
init_dist_es8();

// node_modules/@aws-sdk/client-ssm/dist-es/endpoint/ruleset.js
var s4 = "required";
var t2 = "fn";
var u2 = "argv";
var v2 = "ref";
var a4 = "isSet";
var b4 = "tree";
var c4 = "error";
var d4 = "endpoint";
var e4 = "PartitionResult";
var f4 = "getAttr";
var g4 = { [s4]: false, "type": "String" };
var h4 = { [s4]: true, "default": false, "type": "Boolean" };
var i4 = { [v2]: "Endpoint" };
var j4 = { [t2]: "booleanEquals", [u2]: [{ [v2]: "UseFIPS" }, true] };
var k4 = { [t2]: "booleanEquals", [u2]: [{ [v2]: "UseDualStack" }, true] };
var l4 = {};
var m4 = { [t2]: "booleanEquals", [u2]: [true, { [t2]: f4, [u2]: [{ [v2]: e4 }, "supportsFIPS"] }] };
var n4 = { [v2]: e4 };
var o4 = { [t2]: "booleanEquals", [u2]: [true, { [t2]: f4, [u2]: [n4, "supportsDualStack"] }] };
var p4 = [j4];
var q4 = [k4];
var r4 = [{ [v2]: "Region" }];
var _data4 = { version: "1.0", parameters: { Region: g4, UseDualStack: h4, UseFIPS: h4, Endpoint: g4 }, rules: [{ conditions: [{ [t2]: a4, [u2]: [i4] }], type: b4, rules: [{ conditions: p4, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: c4 }, { type: b4, rules: [{ conditions: q4, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: c4 }, { endpoint: { url: i4, properties: l4, headers: l4 }, type: d4 }] }] }, { type: b4, rules: [{ conditions: [{ [t2]: a4, [u2]: r4 }], type: b4, rules: [{ conditions: [{ [t2]: "aws.partition", [u2]: r4, assign: e4 }], type: b4, rules: [{ conditions: [j4, k4], type: b4, rules: [{ conditions: [m4, o4], type: b4, rules: [{ type: b4, rules: [{ endpoint: { url: "https://ssm-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: l4, headers: l4 }, type: d4 }] }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: c4 }] }, { conditions: p4, type: b4, rules: [{ conditions: [m4], type: b4, rules: [{ type: b4, rules: [{ conditions: [{ [t2]: "stringEquals", [u2]: ["aws-us-gov", { [t2]: f4, [u2]: [n4, "name"] }] }], endpoint: { url: "https://ssm.{Region}.amazonaws.com", properties: l4, headers: l4 }, type: d4 }, { endpoint: { url: "https://ssm-fips.{Region}.{PartitionResult#dnsSuffix}", properties: l4, headers: l4 }, type: d4 }] }] }, { error: "FIPS is enabled but this partition does not support FIPS", type: c4 }] }, { conditions: q4, type: b4, rules: [{ conditions: [o4], type: b4, rules: [{ type: b4, rules: [{ endpoint: { url: "https://ssm.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: l4, headers: l4 }, type: d4 }] }] }, { error: "DualStack is enabled but this partition does not support DualStack", type: c4 }] }, { type: b4, rules: [{ endpoint: { url: "https://ssm.{Region}.{PartitionResult#dnsSuffix}", properties: l4, headers: l4 }, type: d4 }] }] }] }, { error: "Invalid Configuration: Missing Region", type: c4 }] }] };
var ruleSet4 = _data4;

// node_modules/@aws-sdk/client-ssm/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver4 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
  return resolveEndpoint(ruleSet4, {
    endpointParams,
    logger: context.logger
  });
}, "defaultEndpointResolver");

// node_modules/@aws-sdk/client-ssm/dist-es/runtimeConfig.shared.js
var getRuntimeConfig7 = /* @__PURE__ */ __name((config) => ({
  apiVersion: "2014-11-06",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver4,
  logger: config?.logger ?? new NoOpLogger(),
  serviceId: config?.serviceId ?? "SSM",
  urlParser: config?.urlParser ?? parseUrl,
  utf8Decoder: config?.utf8Decoder ?? fromUtf84,
  utf8Encoder: config?.utf8Encoder ?? toUtf84
}), "getRuntimeConfig");

// node_modules/@aws-sdk/client-ssm/dist-es/runtimeConfig.js
var getRuntimeConfig8 = /* @__PURE__ */ __name((config) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
  const clientSharedValues = getRuntimeConfig7(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? decorateDefaultCredentialProvider2(defaultProvider),
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
    maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
    retryMode: config?.retryMode ?? loadConfig({
      ...NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
    }),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
    useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-ssm/dist-es/SSMClient.js
var SSMClient = class extends Client {
  constructor(configuration) {
    const _config_0 = getRuntimeConfig8(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};
__name(SSMClient, "SSMClient");

// node_modules/@aws-sdk/client-ssm/dist-es/models/SSMServiceException.js
var SSMServiceException = class extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, SSMServiceException.prototype);
  }
};
__name(SSMServiceException, "SSMServiceException");

// node_modules/@aws-sdk/client-ssm/dist-es/models/models_0.js
var InternalServerError = class extends SSMServiceException {
  constructor(opts) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts
    });
    this.name = "InternalServerError";
    this.$fault = "server";
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.Message = opts.Message;
  }
};
__name(InternalServerError, "InternalServerError");

// node_modules/@aws-sdk/client-ssm/dist-es/models/models_1.js
var InvalidKeyId = class extends SSMServiceException {
  constructor(opts) {
    super({
      name: "InvalidKeyId",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidKeyId";
    this.$fault = "client";
    Object.setPrototypeOf(this, InvalidKeyId.prototype);
  }
};
__name(InvalidKeyId, "InvalidKeyId");
var ParameterFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.Value && { Value: SENSITIVE_STRING }
}), "ParameterFilterSensitiveLog");
var GetParametersResultFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.Parameters && { Parameters: obj.Parameters.map((item) => ParameterFilterSensitiveLog(item)) }
}), "GetParametersResultFilterSensitiveLog");

// node_modules/@aws-sdk/client-ssm/dist-es/protocols/Aws_json1_1.js
var se_GetParametersCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = sharedHeaders("GetParameters");
  let body;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest2(context, headers, "/", void 0, body);
}, "se_GetParametersCommand");
var de_GetParametersCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_GetParametersCommandError(output, context);
  }
  const data = await parseBody4(output.body, context);
  let contents = {};
  contents = de_GetParametersResult(data, context);
  const response = {
    $metadata: deserializeMetadata5(output),
    ...contents
  };
  return response;
}, "de_GetParametersCommand");
var de_GetParametersCommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody4(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode3(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.ssm#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidKeyId":
    case "com.amazonaws.ssm#InvalidKeyId":
      throw await de_InvalidKeyIdRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError5({
        output,
        parsedBody,
        errorCode
      });
  }
}, "de_GetParametersCommandError");
var de_InternalServerErrorRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata5(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InternalServerErrorRes");
var de_InvalidKeyIdRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InvalidKeyId({
    $metadata: deserializeMetadata5(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InvalidKeyIdRes");
var de_GetParametersResult = /* @__PURE__ */ __name((output, context) => {
  return take(output, {
    InvalidParameters: _json,
    Parameters: (_) => de_ParameterList(_, context)
  });
}, "de_GetParametersResult");
var de_Parameter = /* @__PURE__ */ __name((output, context) => {
  return take(output, {
    ARN: expectString,
    DataType: expectString,
    LastModifiedDate: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
    Name: expectString,
    Selector: expectString,
    SourceResult: expectString,
    Type: expectString,
    Value: expectString,
    Version: expectLong
  });
}, "de_Parameter");
var de_ParameterList = /* @__PURE__ */ __name((output, context) => {
  const retVal = (output || []).filter((e6) => e6 != null).map((entry) => {
    return de_Parameter(entry, context);
  });
  return retVal;
}, "de_ParameterList");
var deserializeMetadata5 = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var collectBody4 = /* @__PURE__ */ __name((streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
}, "collectBody");
var collectBodyString4 = /* @__PURE__ */ __name((streamBody, context) => collectBody4(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
var throwDefaultError5 = withBaseException(SSMServiceException);
var buildHttpRpcRequest2 = /* @__PURE__ */ __name(async (context, headers, path, resolvedHostname, body) => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers
  };
  if (resolvedHostname !== void 0) {
    contents.hostname = resolvedHostname;
  }
  if (body !== void 0) {
    contents.body = body;
  }
  return new HttpRequest2(contents);
}, "buildHttpRpcRequest");
function sharedHeaders(operation) {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AmazonSSM.${operation}`
  };
}
__name(sharedHeaders, "sharedHeaders");
var parseBody4 = /* @__PURE__ */ __name((streamBody, context) => collectBodyString4(streamBody, context).then((encoded) => {
  if (encoded.length) {
    return JSON.parse(encoded);
  }
  return {};
}), "parseBody");
var parseErrorBody4 = /* @__PURE__ */ __name(async (errorBody, context) => {
  const value = await parseBody4(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
}, "parseErrorBody");
var loadRestJsonErrorCode3 = /* @__PURE__ */ __name((output, data) => {
  const findKey = /* @__PURE__ */ __name((object, key) => Object.keys(object).find((k6) => k6.toLowerCase() === key.toLowerCase()), "findKey");
  const sanitizeErrorCode = /* @__PURE__ */ __name((rawValue) => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  }, "sanitizeErrorCode");
  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== void 0) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }
  if (data.code !== void 0) {
    return sanitizeErrorCode(data.code);
  }
  if (data["__type"] !== void 0) {
    return sanitizeErrorCode(data["__type"]);
  }
}, "loadRestJsonErrorCode");

// node_modules/@aws-sdk/client-ssm/dist-es/commands/GetParametersCommand.js
var GetParametersCommand = class extends Command {
  static getEndpointParameterInstructions() {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
  constructor(input) {
    super();
    this.input = input;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetParametersCommand.getEndpointParameterInstructions()));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetParametersCommand";
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_) => _,
      outputFilterSensitiveLog: GetParametersResultFilterSensitiveLog
    };
    const { requestHandler } = configuration;
    return stack.resolve((request2) => requestHandler.handle(request2.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return se_GetParametersCommand(input, context);
  }
  deserialize(output, context) {
    return de_GetParametersCommand(output, context);
  }
};
__name(GetParametersCommand, "GetParametersCommand");

// node_modules/sst/node/util/index.js
var ssm = new SSMClient({ region: process.env.SST_REGION });
var allVariables = {};
var _placeholder = await parseEnvironment();
function createProxy(constructName) {
  const result = new Proxy({}, {
    get(target, prop) {
      if (typeof prop === "string") {
        if (!process.env.SST_APP) {
          throw new Error(buildMissingBuiltInEnvError());
        }
        const normProp = normalizeId(prop);
        if (!(normProp in target)) {
          throw new Error(`Cannot use ${constructName}.${String(prop)}. Please make sure it is bound to this function.`);
        }
        return Reflect.get(target, normProp);
      }
      return Reflect.get(target, prop);
    }
  });
  Object.assign(result, getVariables2(constructName));
  return result;
}
__name(createProxy, "createProxy");
function getVariables2(constructName) {
  return allVariables[constructName] || {};
}
__name(getVariables2, "getVariables2");
async function parseEnvironment() {
  const variablesFromSsm = [];
  const variablesFromSecret = [];
  Object.keys(process.env).filter((name) => name.startsWith("SST_")).forEach((name) => {
    const variable = parseEnvName(name);
    if (!variable.constructName || !variable.constructId || !variable.propName) {
      return;
    }
    const value = process.env[name];
    if (value === "__FETCH_FROM_SSM__") {
      variablesFromSsm.push(variable);
    } else if (value.startsWith("__FETCH_FROM_SECRET__:")) {
      variablesFromSecret.push([variable, value.split(":")[1]]);
    } else {
      storeVariable(variable, value);
    }
  });
  await fetchValuesFromSSM(variablesFromSsm);
  variablesFromSecret.forEach(([variable, secretName]) => {
    const value = allVariables["Secret"]?.[secretName]?.value;
    if (value) {
      storeVariable(variable, value);
    }
  });
  return allVariables;
}
__name(parseEnvironment, "parseEnvironment");
async function fetchValuesFromSSM(variablesFromSsm) {
  const ssmPaths = variablesFromSsm.map((variable) => buildSsmPath(variable));
  if (ssmPaths.length === 0)
    return;
  const results = await loadSecrets(ssmPaths);
  results.validParams.forEach((item) => {
    const variable = parseSsmPath(item.Name);
    storeVariable(variable, item.Value);
  });
  const ssmFallbackPaths = results.invalidParams.map((name) => parseSsmPath(name)).filter((variable) => variable.constructName === "Secret").map((variable) => buildSsmFallbackPath(variable));
  if (ssmFallbackPaths.length === 0)
    return;
  const fallbackResults = await loadSecrets(ssmFallbackPaths);
  fallbackResults.validParams.forEach((item) => {
    const variable = parseSsmFallbackPath(item.Name);
    storeVariable(variable, item.Value);
  });
  const missingSecrets = fallbackResults.invalidParams.map((name) => parseSsmFallbackPath(name)).filter((variable) => variable.constructName === "Secret").map((variable) => variable.constructId);
  if (missingSecrets.length > 0) {
    throw new Error(`The following secret values are not set in the "${process.env.SST_STAGE} stage": ${missingSecrets.join(", ")}`);
  }
}
__name(fetchValuesFromSSM, "fetchValuesFromSSM");
async function loadSecrets(paths) {
  const chunks = [];
  for (let i6 = 0; i6 < paths.length; i6 += 10) {
    chunks.push(paths.slice(i6, i6 + 10));
  }
  const validParams = [];
  const invalidParams = [];
  await Promise.all(chunks.map(async (chunk) => {
    const command = new GetParametersCommand({
      Names: chunk,
      WithDecryption: true
    });
    const result = await ssm.send(command);
    validParams.push(...result.Parameters || []);
    invalidParams.push(...result.InvalidParameters || []);
  }));
  return { validParams, invalidParams };
}
__name(loadSecrets, "loadSecrets");
function parseEnvName(env2) {
  const [_SST, constructName, propName, ...idParts] = env2.split("_");
  return {
    constructName,
    constructId: idParts.join("_"),
    propName
  };
}
__name(parseEnvName, "parseEnvName");
function parseSsmPath(path) {
  const prefix = ssmPrefix();
  const parts = path.substring(prefix.length).split("/");
  return {
    constructName: parts[0],
    constructId: parts[1],
    propName: parts[2]
  };
}
__name(parseSsmPath, "parseSsmPath");
function parseSsmFallbackPath(path) {
  const parts = path.split("/");
  return {
    constructName: parts[4],
    constructId: parts[5],
    propName: parts[6]
  };
}
__name(parseSsmFallbackPath, "parseSsmFallbackPath");
function buildSsmPath(data) {
  return `${ssmPrefix()}${data.constructName}/${data.constructId}/${data.propName}`;
}
__name(buildSsmPath, "buildSsmPath");
function buildSsmFallbackPath(data) {
  return `/sst/${process.env.SST_APP}/.fallback/${data.constructName}/${data.constructId}/${data.propName}`;
}
__name(buildSsmFallbackPath, "buildSsmFallbackPath");
function normalizeId(name) {
  return name.replace(/-/g, "_");
}
__name(normalizeId, "normalizeId");
function ssmPrefix() {
  return process.env.SST_SSM_PREFIX || "";
}
__name(ssmPrefix, "ssmPrefix");
function storeVariable(variable, value) {
  const { constructId: id, constructName: c6, propName: prop } = variable;
  allVariables[c6] = allVariables[c6] || {};
  allVariables[c6][id] = allVariables[c6][id] || {};
  allVariables[c6][id][prop] = value;
}
__name(storeVariable, "storeVariable");
function buildMissingBuiltInEnvError() {
  if (process.env.SST) {
    return [
      "",
      `Cannot access bound resources. This usually happens if the "sst/node" package is used at build time. For example:`,
      "",
      `  - The "sst/node" package is used inside the "getStaticProps()" function of a Next.js app.`,
      `  - The "sst/node" package is used at the top level outside of the "load()" function of a SvelteKit app.`,
      "",
      `Please wrap your build script with "sst bind". For example, "sst bind next build".`,
      ""
    ].join("\n");
  }
  if (process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.CODEBUILD_BUILD_ARN) {
    return `Cannot access bound resources. This usually happens if you are using an older version of SST. Please update SST to the latest version.`;
  }
  return `Cannot access bound resources. This usually happens if the "sst/node" package is used on the client-side. Ensure that it's only called in your server functions.`;
}
__name(buildMissingBuiltInEnvError, "buildMissingBuiltInEnvError");

// node_modules/sst/context/context.js
var Context = {
  create,
  reset,
  memo
};
var state = {
  requestID: "",
  contexts: /* @__PURE__ */ new Map(),
  tracking: []
};
function create(cb, name) {
  const id = typeof cb === "string" ? cb : name || Symbol(cb?.toString());
  return {
    use() {
      let result = state.contexts.get(id);
      if (!result) {
        if (!cb || typeof cb === "string")
          throw new Error(`"${String(id)}" context was not provided.`);
        state.tracking.push(id);
        const value = cb();
        state.tracking.pop();
        result = {
          value,
          dependants: /* @__PURE__ */ new Set()
        };
        state.contexts.set(id, result);
      }
      const last = state.tracking[state.tracking.length - 1];
      if (last)
        result.dependants.add(last);
      return result.value;
    },
    reset() {
      resetDependencies(id);
      state.contexts.delete(id);
    },
    provide(value) {
      const requestID = global[Symbol.for("aws.lambda.runtime.requestId")];
      if (state.requestID !== requestID) {
        state.requestID = requestID;
        reset();
      }
      resetDependencies(id);
      state.contexts.set(id, {
        value,
        dependants: /* @__PURE__ */ new Set()
      });
    }
  };
}
__name(create, "create");
function reset() {
  state.contexts.clear();
}
__name(reset, "reset");
function resetDependencies(id) {
  const info = state.contexts.get(id);
  if (!info)
    return;
  for (const dependantID of info.dependants) {
    resetDependencies(dependantID);
    state.contexts.delete(dependantID);
  }
}
__name(resetDependencies, "resetDependencies");
function memo(cb, name) {
  const ctx = create(cb, name);
  return ctx.use;
}
__name(memo, "memo");

// node_modules/sst/context/handler.js
var RequestContext = Context.create("RequestContext");
function Handler(type, cb) {
  return /* @__PURE__ */ __name(function handler(event2, context) {
    RequestContext.provide({ type, event: event2, context });
    return cb(event2, context);
  }, "handler");
}
__name(Handler, "Handler");

// node_modules/sst/node/api/index.js
function ApiHandler(cb) {
  return Handler("api", async (evt, ctx) => {
    const result = await cb(evt, ctx);
    const serialized = useResponse().serialize(result || {});
    return serialized;
  });
}
__name(ApiHandler, "ApiHandler");
var useResponse = /* @__PURE__ */ Context.memo(() => {
  const response = {
    headers: {},
    cookies: []
  };
  const result = {
    cookies(values, options) {
      for (const [key, value] of Object.entries(values)) {
        result.cookie({
          key,
          value,
          ...options
        });
      }
      return result;
    },
    cookie(input) {
      input = {
        secure: true,
        sameSite: "None",
        httpOnly: true,
        ...input
      };
      const value = encodeURIComponent(input.value);
      const parts = [input.key + "=" + value];
      if (input.domain)
        parts.push("Domain=" + input.domain);
      if (input.path)
        parts.push("Path=" + input.path);
      if (input.expires)
        parts.push("Expires=" + input.expires.toUTCString());
      if (input.maxAge)
        parts.push("Max-Age=" + input.maxAge);
      if (input.httpOnly)
        parts.push("HttpOnly");
      if (input.secure)
        parts.push("Secure");
      if (input.sameSite)
        parts.push("SameSite=" + input.sameSite);
      response.cookies.push(parts.join("; "));
      return result;
    },
    status(code) {
      response.statusCode = code;
      return result;
    },
    header(key, value) {
      response.headers[key] = value;
      return result;
    },
    serialize(input) {
      return {
        ...response,
        ...input,
        cookies: [...input.cookies || [], ...response.cookies],
        headers: {
          ...response.headers,
          ...input.headers
        }
      };
    }
  };
  return result;
});

// packages/core/src/todo.ts
var todo_exports = {};
__export(todo_exports, {
  Events: () => Events,
  Todo: () => todo_exports,
  create: () => create2,
  list: () => list
});

// node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val2) => val2;
  function assertIs(_arg) {
  }
  __name(assertIs, "assertIs");
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  __name(assertNever, "assertNever");
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k6) => typeof obj[obj[k6]] !== "number");
    const filtered = {};
    for (const k6 of validKeys) {
      filtered[k6] = obj[k6];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e6) {
      return obj[e6];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val2) => Number.isInteger(val2) : (val2) => typeof val2 === "number" && isFinite(val2) && Math.floor(val2) === val2;
  function joinValues(array, separator = " | ") {
    return array.map((val2) => typeof val2 === "string" ? `'${val2}'` : val2).join(separator);
  }
  __name(joinValues, "joinValues");
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = /* @__PURE__ */ __name((data) => {
  const t4 = typeof data;
  switch (t4) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
}, "getParsedType");
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = /* @__PURE__ */ __name((obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
}, "quotelessJson");
var ZodError = class extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = /* @__PURE__ */ __name((error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i6 = 0;
          while (i6 < issue.path.length) {
            const el = issue.path[i6];
            const terminal = i6 === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i6++;
          }
        }
      }
    }, "processError");
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
__name(ZodError, "ZodError");
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = /* @__PURE__ */ __name((issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
}, "errorMap");
var overrideErrorMap = errorMap;
function setErrorMap(map2) {
  overrideErrorMap = map2;
}
__name(setErrorMap, "setErrorMap");
function getErrorMap() {
  return overrideErrorMap;
}
__name(getErrorMap, "getErrorMap");
var makeIssue = /* @__PURE__ */ __name((params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m6) => !!m6).slice().reverse();
  for (const map2 of maps) {
    errorMessage = map2(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
}, "makeIssue");
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
    ].filter((x3) => !!x3)
  });
  ctx.common.issues.push(issue);
}
__name(addIssueToContext, "addIssueToContext");
var ParseStatus = class {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s6 of results) {
      if (s6.status === "aborted")
        return INVALID;
      if (s6.status === "dirty")
        status.dirty();
      arrayValue.push(s6.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (typeof value.value !== "undefined" || pair.alwaysSet) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
__name(ParseStatus, "ParseStatus");
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = /* @__PURE__ */ __name((value) => ({ status: "dirty", value }), "DIRTY");
var OK = /* @__PURE__ */ __name((value) => ({ status: "valid", value }), "OK");
var isAborted = /* @__PURE__ */ __name((x3) => x3.status === "aborted", "isAborted");
var isDirty = /* @__PURE__ */ __name((x3) => x3.status === "dirty", "isDirty");
var isValid = /* @__PURE__ */ __name((x3) => x3.status === "valid", "isValid");
var isAsync = /* @__PURE__ */ __name((x3) => typeof Promise !== "undefined" && x3 instanceof Promise, "isAsync");
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
__name(ParseInputLazyPath, "ParseInputLazyPath");
var handleResult = /* @__PURE__ */ __name((ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
}, "handleResult");
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = /* @__PURE__ */ __name((iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
    }
    return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
  }, "customMap");
  return { errorMap: customMap, description };
}
__name(processCreateParams, "processCreateParams");
var ZodType = class {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = /* @__PURE__ */ __name((val2) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val2);
      } else {
        return message;
      }
    }, "getIssueProperties");
    return this._refinement((val2, ctx) => {
      const result = check(val2);
      const setError = /* @__PURE__ */ __name(() => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val2)
      }), "setError");
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val2, ctx) => {
      if (!check(val2)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val2, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
__name(ZodType, "ZodType");
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[a-z][a-z0-9]*$/;
var ulidRegex = /[0-9A-HJKMNP-TV-Z]{26}/;
var uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
var emojiRegex = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u;
var ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var datetimeRegex = /* @__PURE__ */ __name((args) => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
    }
  }
}, "datetimeRegex");
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
__name(isValidIP, "isValidIP");
var ZodString = class extends ZodType {
  constructor() {
    super(...arguments);
    this._regex = (regex, validation, message) => this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
    this.nonempty = (message) => this.min(1, errorUtil.errToObj(message));
    this.trim = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
    this.toLowerCase = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
    this.toUpperCase = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(
        ctx2,
        {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        }
      );
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
__name(ZodString, "ZodString");
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val2, step) {
  const valDecCount = (val2.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val2.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
__name(floatSafeRemainder, "floatSafeRemainder");
var ZodNumber = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
__name(ZodNumber, "ZodNumber");
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
__name(ZodBigInt, "ZodBigInt");
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
__name(ZodBoolean, "ZodBoolean");
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
__name(ZodDate, "ZodDate");
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
__name(ZodSymbol, "ZodSymbol");
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
__name(ZodUndefined, "ZodUndefined");
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
__name(ZodNull, "ZodNull");
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
__name(ZodAny, "ZodAny");
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
__name(ZodUnknown, "ZodUnknown");
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
__name(ZodNever, "ZodNever");
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
__name(ZodVoid, "ZodVoid");
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i6) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i6));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i6) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i6));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
__name(ZodArray, "ZodArray");
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
__name(deepPartialify, "deepPartialify");
var ZodObject = class extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
__name(ZodObject, "ZodObject");
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    __name(handleResults, "handleResults");
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
__name(ZodUnion, "ZodUnion");
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = /* @__PURE__ */ __name((type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return Object.keys(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
}, "getDiscriminator");
var ZodDiscriminatedUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
__name(ZodDiscriminatedUnion, "ZodDiscriminatedUnion");
function mergeValues(a6, b6) {
  const aType = getParsedType(a6);
  const bType = getParsedType(b6);
  if (a6 === b6) {
    return { valid: true, data: a6 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b6);
    const sharedKeys = util.objectKeys(a6).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a6, ...b6 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a6[key], b6[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a6.length !== b6.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a6.length; index++) {
      const itemA = a6[index];
      const itemB = b6[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a6 === +b6) {
    return { valid: true, data: a6 };
  } else {
    return { valid: false };
  }
}
__name(mergeValues, "mergeValues");
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = /* @__PURE__ */ __name((parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    }, "handleParsed");
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
__name(ZodIntersection, "ZodIntersection");
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x3) => !!x3);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
};
__name(ZodTuple, "ZodTuple");
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
__name(ZodRecord, "ZodRecord");
var ZodMap = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
__name(ZodMap, "ZodMap");
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    __name(finalizeSet, "finalizeSet");
    const elements = [...ctx.data.values()].map((item, i6) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i6)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
__name(ZodSet, "ZodSet");
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x3) => !!x3),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    __name(makeArgsIssue, "makeArgsIssue");
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x3) => !!x3),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    __name(makeReturnsIssue, "makeReturnsIssue");
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      return OK(async (...args) => {
        const error = new ZodError([]);
        const parsedArgs = await this._def.args.parseAsync(args, params).catch((e6) => {
          error.addIssue(makeArgsIssue(args, e6));
          throw error;
        });
        const result = await fn(...parsedArgs);
        const parsedReturns = await this._def.returns._def.type.parseAsync(result, params).catch((e6) => {
          error.addIssue(makeReturnsIssue(result, e6));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      return OK((...args) => {
        const parsedArgs = this._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = fn(...parsedArgs.data);
        const parsedReturns = this._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
__name(ZodFunction, "ZodFunction");
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
__name(ZodLazy, "ZodLazy");
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
__name(ZodLiteral, "ZodLiteral");
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
__name(createZodEnum, "createZodEnum");
var ZodEnum = class extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val2 of this._def.values) {
      enumValues[val2] = val2;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val2 of this._def.values) {
      enumValues[val2] = val2;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val2 of this._def.values) {
      enumValues[val2] = val2;
    }
    return enumValues;
  }
  extract(values) {
    return ZodEnum.create(values);
  }
  exclude(values) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
  }
};
__name(ZodEnum, "ZodEnum");
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
__name(ZodNativeEnum, "ZodNativeEnum");
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
__name(ZodPromise, "ZodPromise");
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data);
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "refinement") {
      const executeRefinement = /* @__PURE__ */ __name((acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      }, "executeRefinement");
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
};
__name(ZodEffects, "ZodEffects");
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
__name(ZodOptional, "ZodOptional");
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
__name(ZodNullable, "ZodNullable");
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
__name(ZodDefault, "ZodDefault");
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
__name(ZodCatch, "ZodCatch");
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
__name(ZodNaN, "ZodNaN");
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
__name(ZodBranded, "ZodBranded");
var ZodPipeline = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = /* @__PURE__ */ __name(async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      }, "handleAsync");
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a6, b6) {
    return new ZodPipeline({
      in: a6,
      out: b6,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
__name(ZodPipeline, "ZodPipeline");
var custom = /* @__PURE__ */ __name((check, params = {}, fatal) => {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      if (!check(data)) {
        const p6 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b = (_a = p6.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
        const p22 = typeof p6 === "string" ? { message: p6 } : p6;
        ctx.addIssue({ code: "custom", ...p22, fatal: _fatal });
      }
    });
  return ZodAny.create();
}, "custom");
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = /* @__PURE__ */ __name((cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params), "instanceOfType");
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = /* @__PURE__ */ __name(() => stringType().optional(), "ostring");
var onumber = /* @__PURE__ */ __name(() => numberType().optional(), "onumber");
var oboolean = /* @__PURE__ */ __name(() => booleanType().optional(), "oboolean");
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// packages/core/src/todo.ts
import crypto2 from "crypto";

// node_modules/@aws-sdk/client-eventbridge/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters5 = /* @__PURE__ */ __name((options) => {
  return {
    ...options,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "events"
  };
}, "resolveClientEndpointParameters");

// node_modules/@aws-sdk/client-eventbridge/package.json
var package_default5 = {
  name: "@aws-sdk/client-eventbridge",
  description: "AWS SDK for JavaScript Eventbridge Client for Node.js, Browser and React Native",
  version: "3.354.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "tsc -p tsconfig.cjs.json",
    "build:docs": "typedoc",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo eventbridge",
    test: "yarn test:unit",
    "test:unit": "ts-mocha test/**/*.spec.ts"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha256-browser": "3.0.0",
    "@aws-crypto/sha256-js": "3.0.0",
    "@aws-sdk/client-sts": "3.354.0",
    "@aws-sdk/config-resolver": "3.354.0",
    "@aws-sdk/credential-provider-node": "3.354.0",
    "@aws-sdk/fetch-http-handler": "3.353.0",
    "@aws-sdk/hash-node": "3.347.0",
    "@aws-sdk/invalid-dependency": "3.347.0",
    "@aws-sdk/middleware-content-length": "3.347.0",
    "@aws-sdk/middleware-endpoint": "3.347.0",
    "@aws-sdk/middleware-host-header": "3.347.0",
    "@aws-sdk/middleware-logger": "3.347.0",
    "@aws-sdk/middleware-recursion-detection": "3.347.0",
    "@aws-sdk/middleware-retry": "3.354.0",
    "@aws-sdk/middleware-serde": "3.347.0",
    "@aws-sdk/middleware-signing": "3.354.0",
    "@aws-sdk/middleware-stack": "3.347.0",
    "@aws-sdk/middleware-user-agent": "3.352.0",
    "@aws-sdk/node-config-provider": "3.354.0",
    "@aws-sdk/node-http-handler": "3.350.0",
    "@aws-sdk/signature-v4-multi-region": "3.354.0",
    "@aws-sdk/smithy-client": "3.347.0",
    "@aws-sdk/types": "3.347.0",
    "@aws-sdk/url-parser": "3.347.0",
    "@aws-sdk/util-base64": "3.310.0",
    "@aws-sdk/util-body-length-browser": "3.310.0",
    "@aws-sdk/util-body-length-node": "3.310.0",
    "@aws-sdk/util-defaults-mode-browser": "3.353.0",
    "@aws-sdk/util-defaults-mode-node": "3.354.0",
    "@aws-sdk/util-endpoints": "3.352.0",
    "@aws-sdk/util-retry": "3.347.0",
    "@aws-sdk/util-user-agent-browser": "3.347.0",
    "@aws-sdk/util-user-agent-node": "3.354.0",
    "@aws-sdk/util-utf8": "3.310.0",
    "@smithy/protocol-http": "^1.0.1",
    "@smithy/types": "^1.0.0",
    tslib: "^2.5.0"
  },
  devDependencies: {
    "@aws-sdk/service-client-documentation-generator": "3.310.0",
    "@tsconfig/node14": "1.0.3",
    "@types/node": "^14.14.31",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typedoc: "0.23.23",
    typescript: "~4.9.5"
  },
  engines: {
    node: ">=14.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-eventbridge",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-eventbridge"
  }
};

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js
init_dist_es10();
var SignatureV4MultiRegion = class {
  constructor(options) {
    this.sigv4Signer = new SignatureV4(options);
    this.signerOptions = options;
  }
  async sign(requestToSign, options = {}) {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.getSigv4aSigner().sign(requestToSign, options);
    }
    return this.sigv4Signer.sign(requestToSign, options);
  }
  async presign(originalRequest, options = {}) {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.getSigv4aSigner().presign(originalRequest, options);
    }
    return this.sigv4Signer.presign(originalRequest, options);
  }
  getSigv4aSigner() {
    if (!this.sigv4aSigner) {
      let CrtSignerV42;
      try {
        CrtSignerV42 = typeof __require === "function" && (init_dist_es11(), __toCommonJS(dist_es_exports2)).CrtSignerV4;
        if (typeof CrtSignerV42 !== "function")
          throw new Error();
      } catch (e6) {
        e6.message = `${e6.message}
Please check if you have installed "@aws-sdk/signature-v4-crt" package explicitly. 
For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`;
        throw e6;
      }
      this.sigv4aSigner = new CrtSignerV42({
        ...this.signerOptions,
        signingAlgorithm: 1
      });
    }
    return this.sigv4aSigner;
  }
};
__name(SignatureV4MultiRegion, "SignatureV4MultiRegion");

// node_modules/@aws-sdk/client-eventbridge/dist-es/runtimeConfig.shared.js
init_dist_es8();

// node_modules/@aws-sdk/client-eventbridge/dist-es/endpoint/ruleset.js
var B2 = "required";
var C2 = "type";
var D2 = "fn";
var E2 = "argv";
var F2 = "ref";
var a5 = false;
var b5 = true;
var c5 = "isSet";
var d5 = "tree";
var e5 = "booleanEquals";
var f5 = "endpoint";
var g5 = "error";
var h5 = "stringEquals";
var i5 = { [B2]: false, [C2]: "String" };
var j5 = { [B2]: true, "default": false, [C2]: "Boolean" };
var k5 = { [F2]: "EndpointId" };
var l5 = { [D2]: c5, [E2]: [{ [F2]: "Region" }] };
var m5 = { [F2]: "Region" };
var n5 = { [D2]: "aws.partition", [E2]: [m5], "assign": "PartitionResult" };
var o5 = { [F2]: "UseFIPS" };
var p5 = { [F2]: "Endpoint" };
var q5 = { "authSchemes": [{ "name": "sigv4a", "signingName": "events", "signingRegionSet": ["*"] }] };
var r5 = {};
var s5 = { [D2]: e5, [E2]: [{ [F2]: "UseDualStack" }, true] };
var t3 = { [D2]: e5, [E2]: [true, { [D2]: "getAttr", [E2]: [{ [F2]: "PartitionResult" }, "supportsDualStack"] }] };
var u3 = { [g5]: "DualStack is enabled but this partition does not support DualStack", [C2]: g5 };
var v3 = { [D2]: e5, [E2]: [o5, true] };
var w2 = { [D2]: e5, [E2]: [true, { [D2]: "getAttr", [E2]: [{ [F2]: "PartitionResult" }, "supportsFIPS"] }] };
var x2 = [{ [D2]: c5, [E2]: [p5] }];
var y2 = [s5];
var z3 = [t3];
var A2 = [v3];
var _data5 = { version: "1.0", parameters: { Region: i5, UseDualStack: j5, UseFIPS: j5, Endpoint: i5, EndpointId: i5 }, rules: [{ conditions: [{ [D2]: c5, [E2]: [k5] }, l5, n5], [C2]: d5, rules: [{ conditions: [{ [D2]: "isValidHostLabel", [E2]: [k5, b5] }], [C2]: d5, rules: [{ [C2]: d5, rules: [{ conditions: [{ [D2]: e5, [E2]: [o5, a5] }], [C2]: d5, rules: [{ [C2]: d5, rules: [{ conditions: x2, endpoint: { url: p5, properties: q5, headers: r5 }, [C2]: f5 }, { conditions: y2, [C2]: d5, rules: [{ conditions: z3, [C2]: d5, rules: [{ endpoint: { url: "https://{EndpointId}.endpoint.events.{PartitionResult#dualStackDnsSuffix}", properties: q5, headers: r5 }, [C2]: f5 }] }, u3] }, { endpoint: { url: "https://{EndpointId}.endpoint.events.{PartitionResult#dnsSuffix}", properties: q5, headers: r5 }, [C2]: f5 }] }] }, { error: "Invalid Configuration: FIPS is not supported with EventBridge multi-region endpoints.", [C2]: g5 }] }] }, { error: "EndpointId must be a valid host label.", [C2]: g5 }] }, { conditions: x2, [C2]: d5, rules: [{ conditions: A2, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [C2]: g5 }, { [C2]: d5, rules: [{ conditions: y2, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [C2]: g5 }, { endpoint: { url: p5, properties: r5, headers: r5 }, [C2]: f5 }] }] }, { [C2]: d5, rules: [{ conditions: [l5], [C2]: d5, rules: [{ conditions: [n5], [C2]: d5, rules: [{ conditions: [v3, s5], [C2]: d5, rules: [{ conditions: [w2, t3], [C2]: d5, rules: [{ [C2]: d5, rules: [{ endpoint: { url: "https://events-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: r5, headers: r5 }, [C2]: f5 }] }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [C2]: g5 }] }, { conditions: A2, [C2]: d5, rules: [{ conditions: [w2], [C2]: d5, rules: [{ [C2]: d5, rules: [{ conditions: [{ [D2]: h5, [E2]: [m5, "us-gov-east-1"] }], endpoint: { url: "https://events.us-gov-east-1.amazonaws.com", properties: r5, headers: r5 }, [C2]: f5 }, { conditions: [{ [D2]: h5, [E2]: [m5, "us-gov-west-1"] }], endpoint: { url: "https://events.us-gov-west-1.amazonaws.com", properties: r5, headers: r5 }, [C2]: f5 }, { endpoint: { url: "https://events-fips.{Region}.{PartitionResult#dnsSuffix}", properties: r5, headers: r5 }, [C2]: f5 }] }] }, { error: "FIPS is enabled but this partition does not support FIPS", [C2]: g5 }] }, { conditions: y2, [C2]: d5, rules: [{ conditions: z3, [C2]: d5, rules: [{ [C2]: d5, rules: [{ endpoint: { url: "https://events.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: r5, headers: r5 }, [C2]: f5 }] }] }, u3] }, { [C2]: d5, rules: [{ endpoint: { url: "https://events.{Region}.{PartitionResult#dnsSuffix}", properties: r5, headers: r5 }, [C2]: f5 }] }] }] }, { error: "Invalid Configuration: Missing Region", [C2]: g5 }] }] };
var ruleSet5 = _data5;

// node_modules/@aws-sdk/client-eventbridge/dist-es/endpoint/endpointResolver.js
var defaultEndpointResolver5 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
  return resolveEndpoint(ruleSet5, {
    endpointParams,
    logger: context.logger
  });
}, "defaultEndpointResolver");

// node_modules/@aws-sdk/client-eventbridge/dist-es/runtimeConfig.shared.js
var getRuntimeConfig9 = /* @__PURE__ */ __name((config) => ({
  apiVersion: "2015-10-07",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver5,
  logger: config?.logger ?? new NoOpLogger(),
  serviceId: config?.serviceId ?? "EventBridge",
  signerConstructor: config?.signerConstructor ?? SignatureV4MultiRegion,
  urlParser: config?.urlParser ?? parseUrl,
  utf8Decoder: config?.utf8Decoder ?? fromUtf84,
  utf8Encoder: config?.utf8Encoder ?? toUtf84
}), "getRuntimeConfig");

// node_modules/@aws-sdk/client-eventbridge/dist-es/runtimeConfig.js
var getRuntimeConfig10 = /* @__PURE__ */ __name((config) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
  const clientSharedValues = getRuntimeConfig9(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? decorateDefaultCredentialProvider2(defaultProvider),
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default5.version }),
    maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
    retryMode: config?.retryMode ?? loadConfig({
      ...NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE
    }),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
    useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-eventbridge/dist-es/EventBridgeClient.js
var EventBridgeClient = class extends Client {
  constructor(configuration) {
    const _config_0 = getRuntimeConfig10(configuration);
    const _config_1 = resolveClientEndpointParameters5(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};
__name(EventBridgeClient, "EventBridgeClient");

// node_modules/@aws-sdk/client-eventbridge/dist-es/models/EventBridgeServiceException.js
var EventBridgeServiceException = class extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, EventBridgeServiceException.prototype);
  }
};
__name(EventBridgeServiceException, "EventBridgeServiceException");

// node_modules/@aws-sdk/client-eventbridge/dist-es/models/models_0.js
var InternalException = class extends EventBridgeServiceException {
  constructor(opts) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts
    });
    this.name = "InternalException";
    this.$fault = "server";
    Object.setPrototypeOf(this, InternalException.prototype);
  }
};
__name(InternalException, "InternalException");

// node_modules/@aws-sdk/client-eventbridge/dist-es/protocols/Aws_json1_1.js
var se_PutEventsCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = sharedHeaders2("PutEvents");
  let body;
  body = JSON.stringify(se_PutEventsRequest(input, context));
  return buildHttpRpcRequest3(context, headers, "/", void 0, body);
}, "se_PutEventsCommand");
var de_PutEventsCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_PutEventsCommandError(output, context);
  }
  const data = await parseBody5(output.body, context);
  let contents = {};
  contents = _json(data);
  const response = {
    $metadata: deserializeMetadata6(output),
    ...contents
  };
  return response;
}, "de_PutEventsCommand");
var de_PutEventsCommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody5(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode4(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError6({
        output,
        parsedBody,
        errorCode
      });
  }
}, "de_PutEventsCommandError");
var de_InternalExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InternalException({
    $metadata: deserializeMetadata6(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InternalExceptionRes");
var se_PutEventsRequest = /* @__PURE__ */ __name((input, context) => {
  return take(input, {
    EndpointId: [],
    Entries: (_) => se_PutEventsRequestEntryList(_, context)
  });
}, "se_PutEventsRequest");
var se_PutEventsRequestEntry = /* @__PURE__ */ __name((input, context) => {
  return take(input, {
    Detail: [],
    DetailType: [],
    EventBusName: [],
    Resources: _json,
    Source: [],
    Time: (_) => Math.round(_.getTime() / 1e3),
    TraceHeader: []
  });
}, "se_PutEventsRequestEntry");
var se_PutEventsRequestEntryList = /* @__PURE__ */ __name((input, context) => {
  return input.filter((e6) => e6 != null).map((entry) => {
    return se_PutEventsRequestEntry(entry, context);
  });
}, "se_PutEventsRequestEntryList");
var deserializeMetadata6 = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var collectBody5 = /* @__PURE__ */ __name((streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
}, "collectBody");
var collectBodyString5 = /* @__PURE__ */ __name((streamBody, context) => collectBody5(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
var throwDefaultError6 = withBaseException(EventBridgeServiceException);
var buildHttpRpcRequest3 = /* @__PURE__ */ __name(async (context, headers, path, resolvedHostname, body) => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers
  };
  if (resolvedHostname !== void 0) {
    contents.hostname = resolvedHostname;
  }
  if (body !== void 0) {
    contents.body = body;
  }
  return new HttpRequest2(contents);
}, "buildHttpRpcRequest");
function sharedHeaders2(operation) {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSEvents.${operation}`
  };
}
__name(sharedHeaders2, "sharedHeaders");
var parseBody5 = /* @__PURE__ */ __name((streamBody, context) => collectBodyString5(streamBody, context).then((encoded) => {
  if (encoded.length) {
    return JSON.parse(encoded);
  }
  return {};
}), "parseBody");
var parseErrorBody5 = /* @__PURE__ */ __name(async (errorBody, context) => {
  const value = await parseBody5(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
}, "parseErrorBody");
var loadRestJsonErrorCode4 = /* @__PURE__ */ __name((output, data) => {
  const findKey = /* @__PURE__ */ __name((object, key) => Object.keys(object).find((k6) => k6.toLowerCase() === key.toLowerCase()), "findKey");
  const sanitizeErrorCode = /* @__PURE__ */ __name((rawValue) => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  }, "sanitizeErrorCode");
  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== void 0) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }
  if (data.code !== void 0) {
    return sanitizeErrorCode(data.code);
  }
  if (data["__type"] !== void 0) {
    return sanitizeErrorCode(data["__type"]);
  }
}, "loadRestJsonErrorCode");

// node_modules/@aws-sdk/client-eventbridge/dist-es/commands/PutEventsCommand.js
var PutEventsCommand = class extends Command {
  static getEndpointParameterInstructions() {
    return {
      EndpointId: { type: "contextParams", name: "EndpointId" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
  constructor(input) {
    super();
    this.input = input;
  }
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutEventsCommand.getEndpointParameterInstructions()));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "PutEventsCommand";
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_) => _,
      outputFilterSensitiveLog: (_) => _
    };
    const { requestHandler } = configuration;
    return stack.resolve((request2) => requestHandler.handle(request2.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return se_PutEventsCommand(input, context);
  }
  deserialize(output, context) {
    return de_PutEventsCommand(output, context);
  }
};
__name(PutEventsCommand, "PutEventsCommand");

// node_modules/sst/node/event-bus/index.js
var EventBus = /* @__PURE__ */ createProxy("EventBus");
var client = new EventBridgeClient({});
function createEventBuilder(props) {
  return /* @__PURE__ */ __name(function createEvent(type, properties) {
    const propertiesSchema = z2.object(properties);
    const metadataSchema = props.metadata ? z2.object(props.metadata) : void 0;
    const publish = /* @__PURE__ */ __name(async (properties2, metadata) => {
      console.log("publishing", type, properties2);
      await client.send(new PutEventsCommand({
        Entries: [
          {
            EventBusName: EventBus[props.bus].eventBusName,
            Source: "console",
            Detail: JSON.stringify({
              properties: propertiesSchema.parse(properties2),
              metadata: (() => {
                if (metadataSchema) {
                  return metadataSchema.parse(metadata);
                }
                if (props.metadataFn) {
                  return props.metadataFn();
                }
              })()
            }),
            DetailType: type
          }
        ]
      }));
    }, "publish");
    return {
      publish,
      type,
      shape: {
        metadata: {},
        properties: {},
        metadataFn: {}
      }
    };
  }, "createEvent");
}
__name(createEventBuilder, "createEventBuilder");

// packages/core/src/event.ts
var event = createEventBuilder({
  bus: "bus"
});

// packages/core/src/todo.ts
var Events = {
  Created: event("todo.created", {
    id: z2.string()
  })
};
async function create2() {
  const id = crypto2.randomUUID();
  await Events.Created.publish({
    id
  });
}
__name(create2, "create");
function list() {
  return Array(50).fill(0).map((_, index) => ({
    id: crypto2.randomUUID(),
    title: "Todo #" + index
  }));
}
__name(list, "list");

// packages/functions/src/todo.ts
var create3 = ApiHandler(async (_evt) => {
  await todo_exports.create();
  return {
    statusCode: 200,
    body: "Todo created"
  };
});
var list2 = ApiHandler(async (_evt) => {
  return {
    statusCode: 200,
    body: JSON.stringify(todo_exports.list())
  };
});
export {
  create3 as create,
  list2 as list
};
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
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
  ***************************************************************************** *)
*/
//# sourceMappingURL=todo.mjs.map
