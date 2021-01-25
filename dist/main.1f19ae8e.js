// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var player = {
  cssString: "\n    /* \n    \u8BA9\u6211\u4EEC\u4E00\u8D77\u770B\u770B\u84DD\u80D6\u5B50\u7684\u8BDE\u751F\u5427\uFF01\n    \u9996\u5148\u7ED9\u84DD\u80D6\u5B50\u4E00\u4E2A\u5BB6\u3002\n    */\n    .main {\n      height: 50vh;\n      background-color: #93b8ca;\n      border-top: 1px solid #ccc;\n    }\n    /* \n    \u770B\uFF0C\u770B\u89C1\u5934\u5566\uFF01\n    */\n    .head {\n      position: relative;\n      width: 420px;\n      height: 400px;\n      border: 2px solid #06090c;\n      margin: 10px auto;\n      border-radius: 50% 50% 45% 45%;\n      background-color: #1e90ff;\n    }\n    /* \n    \u54C7\uFF0C\u8138\u4E5F\u5FEB\u51FA\u6765\u4E86\uFF01\n    */\n    .head .face {\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      width: 360px;\n      height: 300px;\n      border: 2px solid #06090c;\n      border-radius: 50% 50% 45% 45%;\n      background-color: #ffffff;\n      transform: translateX(-50%);\n    }\n    /* \n    \u54BF\uFF0C\u600E\u4E48\u770B\u89C1\u7684\u662F\u56F4\u5DFE\u554A\uFF01\n    */\n    .head .collar {\n      position: absolute;\n      bottom: -10px;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 320px;\n      height: 50px;\n      border: 2px solid #06090c;\n      border-radius: 25px;\n      background-color: #ff0000;\n    }\n    /* \n    \u554A\uFF0C\u539F\u6765\u662F\u94C3\u94DB\u554A\uFF01\n    */\n    .head .collar .bells {\n      position: absolute;\n      top: 40%;\n      left: 50%;\n      width: 60px;\n      height: 60px;\n      border: 2px solid #06090c;\n      animation: moving 2.2s infinite linear;\n      border-radius: 50%;\n      transform: translateX(-50%);\n      background-color: #ffff00;\n      overflow: hidden;\n    }\n    .head .collar .bells::before {\n      content: '';\n      display: block;\n      width: 70px;\n      height: 8px;\n      border: 2px solid #06090c;\n      position: absolute;\n      top: 25%;\n      left: -5px;\n    }\n    .head .collar .bells::after {\n      content: '';\n      display: block;\n      width: 15px;\n      height: 10px;\n      background-color: #000000;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translateX(-50%);\n      border-radius: 50% 45% 50% 45%;\n    }\n    .head .collar .bells .crack {\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 2px;\n      height: 20px;\n      background-color: #000000;\n    }\n    /* \u3001\n    \u54C7\uFF0C\u7EC8\u4E8E\u770B\u89C1\u773C\u775B\u4E86\uFF01\n    */\n    .eye {\n      position: absolute;\n      left: 50%;\n      top: -45px;\n      transform: translateX(-50%);\n      width: 180px;\n      height: 110px;\n      display: flex;\n    }\n    .eye::before,\n    .eye::after {\n      content: '';\n      display: block;\n      width: 50%;\n      border-radius: 45% 45% 50% 50%;\n      background-color: #fff;\n      border: 2px solid #000;\n    }\n    .eye .eyeball::before,\n    .eye .eyeball::after {\n      content: '';\n      display: block;\n      width: 20px;\n      height: 20px;\n      background-color: #000000;\n      border-radius: 50%;\n      position: absolute;\n      top: 50%;\n    }\n    .eye .eyeball::before {\n      left: 60px;\n    }\n    .eye .eyeball::after {\n      right: 60px;\n    }\n    /* \n    \u54C8\uFF0C\u8FD9\u662F\u9F3B\u5B50\u554A\uFF01\n    */\n    .face .nose {\n      position: absolute;\n      top: 15%;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 50px;\n      height: 50px;\n      border: 2px solid #000;\n      border-radius: 50%;\n      background-color: #ff0000;\n    }\n    .face .nose::before {\n      content: '';\n      display: block;\n      width: 15px;\n      height: 15px;\n      background-color: #fff;\n      position: absolute;\n      top: 20%;\n      right: 5px;\n      border-radius: 50%;\n    }\n    /* \n    \u54DF\uFF0C\u8FD9\u662F\u80E1\u987B\u5417\uFF01\n    */\n    .whisker_style {\n      width: 100px;\n      border-top: 2px solid #000;\n    }\n    .whisker_style::before,\n    .whisker_style::after {\n      display: block;\n      content: '';\n      width: 100px;\n      border-top: 2px solid #000;\n    }\n    .whisker_style {\n      position: absolute;\n      top: 40%;\n      left: 10%;\n    }\n    .whisker_style::before {\n      transform: rotate(15deg);\n      position: absolute;\n      top: -30px;\n      left: 5px;\n    }\n    .whisker_style::after {\n      transform: rotate(-15deg);\n      position: absolute;\n      top: 30px;\n      left: 5px;\n    }\n    .whisker_right {\n      transform: rotateY(180deg);\n      position: absolute;\n      left: 60%;\n    }\n    /* \n    \u5662\uFF0C\u5634\u5DF4\u4E5F\u6709\u4E86\n    */\n    .mouth {\n      width: 240px;\n      height: 200px;\n      border-bottom: 2px solid #000;\n      position: absolute;\n      bottom: 24%;\n      left: 50%;\n      transform: translateX(-50%);\n      border-radius: 0 0 45% 45%;\n    }\n    .mouth::before {\n      content: '';\n      display: block;\n      width: 2px;\n      height: 130px;\n      background-color: #000;\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      transform: translateX(-50%);\n    }\n    /* \n    \u6700\u540E\uFF0C\u8BA9\u6211\u7684\u94C3\u94DB\u52A8\u8D77\u6765\u5427\uFF01\n    */\n    @keyframes moving {\n      0% {\n        transform: translateX(-50%) rotate(0deg);\n      }\n      100% {\n        transform: translateX(-50%) rotate(360deg);\n      }\n    }\n    /* \n    \u4F60\u597D\u554A\uFF01\u6211\u662F\u84DD\u80D6\u5B50\uFF01\n    */\n  ",
  n: 1,
  time: 50,
  styleString: '',
  timer: undefined,
  init: function init() {
    player.bindEvents();
    player.play();
  },
  domUI: {
    style: document.querySelector('.style'),
    test: document.querySelector('.test')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        document.querySelector(key).onclick = player[player.events[key]];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n == player.cssString.length) {
      player.pause();
      return;
    }

    if (player.cssString[player.n] === '\n') {
      player.styleString += '<br>';
    } else if (player.cssString[player.n] === ' ') {
      player.styleString += '&nbsp;';
    } else {
      player.styleString += player.cssString[player.n];
    }

    player.domUI.test.innerHTML = player.styleString;
    player.domUI.style.innerHTML = player.cssString.substring(0, player.n);
    player.domUI.test.scrollTop = player.domUI.test.scrollHeight;
  },
  play: function play() {
    player.pause();
    player.timer = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.timer);
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59680" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map