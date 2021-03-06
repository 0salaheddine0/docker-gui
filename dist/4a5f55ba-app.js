(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Router = require('./Router');

var _Router2 = _interopRequireDefault(_Router);

var _AppStore = require('./stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');

_reactDom2.default.render(_react2.default.createElement(_Router2.default, { store: new _AppStore2.default() }), document.getElementById('app'));
});
___scope___.file("Router.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mobxReact = require("mobx-react");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _AppStore = require("~/stores/AppStore");

var _AppStore2 = _interopRequireDefault(_AppStore);

var _Login = require("./components/Login/Login");

var _Login2 = _interopRequireDefault(_Login);

var _App = require("./components/App");

var _App2 = _interopRequireDefault(_App);

var _Images = require("./components/Images/Images");

var _Images2 = _interopRequireDefault(_Images);

var _Containers = require("./components/Containers/Containers");

var _Containers2 = _interopRequireDefault(_Containers);

var _Volumes = require("./components/Volumes/Volumes");

var _Volumes2 = _interopRequireDefault(_Volumes);

var _Networks = require("./components/Networks/Networks");

var _Networks2 = _interopRequireDefault(_Networks);

var _Logs = require("./components/Logs/Logs");

var _Logs2 = _interopRequireDefault(_Logs);

var _ContainerStats = require("./components/ContainerStats/ContainerStats");

var _ContainerStats2 = _interopRequireDefault(_ContainerStats);

var _ContainerRLTStats = require("./components/ContainerStats/ContainerRLTStats");

var _ContainerRLTStats2 = _interopRequireDefault(_ContainerRLTStats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    _classCallCheck(this, Router);

    return _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).apply(this, arguments));
  }

  _createClass(Router, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _mobxReact.Provider,
        { store: this.props.store },
        _react2.default.createElement(
          _reactRouter.Router,
          { history: _reactRouter.browserHistory },
          _react2.default.createElement(
            _reactRouter.Route,
            { path: "/", component: _App2.default },
            _react2.default.createElement(_reactRouter.IndexRedirect, { to: "images" }),
            _react2.default.createElement(_reactRouter.Route, { path: "login", component: _Login2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "images", component: _Images2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "containers", component: _Containers2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "container-stats", component: _ContainerStats2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "container-stats/:id", component: _ContainerRLTStats2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "volumes", component: _Volumes2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "networks", component: _Networks2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "Logs", component: _Logs2.default })
          )
        )
      );
    }
  }]);

  return Router;
}(_react2.default.Component);

exports.default = Router;
});
___scope___.file("stores/AppStore.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Login = require('./Login/Login');

var _Login2 = _interopRequireDefault(_Login);

var _Containers = require('./Containers/Containers');

var _Containers2 = _interopRequireDefault(_Containers);

var _Images = require('./Images/Images');

var _Images2 = _interopRequireDefault(_Images);

var _Volumes = require('./Volumes/Volumes');

var _Volumes2 = _interopRequireDefault(_Volumes);

var _Networks = require('./Networks/Networks');

var _Networks2 = _interopRequireDefault(_Networks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppStore = function AppStore() {
  _classCallCheck(this, AppStore);

  this.login = new _Login2.default(this);
  this.containers = new _Containers2.default(this);
  this.images = new _Images2.default(this);
  this.volumes = new _Volumes2.default(this);
  this.networks = new _Networks2.default(this);
};

exports.default = AppStore;
});
___scope___.file("stores/Login/Login.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _desc, _value, _class, _descriptor, _descriptor2;

var _axios = require("~/lib/axios");

var _axios2 = _interopRequireDefault(_axios);

var _mobx = require("mobx");

var _reactRouter = require("react-router");

var _BaseStore2 = require("~/stores/BaseStore");

var _BaseStore3 = _interopRequireDefault(_BaseStore2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Login = (_class = function (_BaseStore) {
  _inherits(Login, _BaseStore);

  function Login(appStore) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _initDefineProp(_this, "login", _descriptor, _this);

    _initDefineProp(_this, "logout", _descriptor2, _this);

    _this.appStore = appStore;
    return _this;
  }

  return Login;
}(_BaseStore3.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "login", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(credentials) {
        var redirect;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.setError();

                _context.prev = 1;
                _context.next = 4;
                return _axios2.default.post('auth', credentials);

              case 4:
                redirect = _reactRouter.browserHistory.getCurrentLocation().query.redirect;

                window.location = redirect || '/';
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);

                _this2.setError(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[1, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "logout", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this3.setError();

              _context2.prev = 1;
              _context2.next = 4;
              return _axios2.default.delete('auth');

            case 4:
              window.location = '/login';
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](1);

              _this3.setError(_context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this3, [[1, 7]]);
    }));
  }
})), _class);
exports.default = Login;
});
___scope___.file("lib/axios.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var http = _axios2.default.create({
  baseURL: '/api/v1/'
});

// Intercept http to redirect to login on unauthorized response
http.interceptors.response.use(function (res) {
  return res;
}, function (err) {
  var location = _reactRouter.browserHistory.getCurrentLocation();
  if (err.response && err.response.status === 403) {
    return _reactRouter.browserHistory.push('/login?redirect=' + encodeURIComponent(location.pathname + location.search + location.hash));
  }

  return Promise.reject(err);
});

exports.default = http;
});
___scope___.file("stores/BaseStore.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var _mobx = require('mobx');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var BaseStore = (_class = function BaseStore() {
  _classCallCheck(this, BaseStore);

  _initDefineProp(this, 'error', _descriptor, this);

  _initDefineProp(this, 'inspect', _descriptor2, this);

  _initDefineProp(this, 'setError', _descriptor3, this);

  _initDefineProp(this, 'closeInspector', _descriptor4, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'error', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'inspect', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'setError', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this = this;

    return function () {
      var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _this.error = (((err || {}).response || {}).data || {}).message || (err || {}).message || err;
    };
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'closeInspector', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      _this2.inspect = null;
    };
  }
})), _class);
exports.default = BaseStore;
});
___scope___.file("stores/Containers/Containers.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.STATE = undefined;

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;

var _axios = require("~/lib/axios");

var _axios2 = _interopRequireDefault(_axios);

var _lodash = require("lodash");

var _mobx = require("mobx");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _BaseStore2 = require("~/stores/BaseStore");

var _BaseStore3 = _interopRequireDefault(_BaseStore2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ellipsify = function ellipsify(string) {
  return string.length > 40 ? string.substr(0, 37) + "..." : string;
};

var STATE = exports.STATE = {
  CREATED: 'created',
  RUNNING: 'running',
  PAUSED: 'paused',
  RESTARTING: 'restarting',
  REMOVING: 'removing',
  EXITED: 'exited',
  DEAD: 'dead'
};

var Containers = (_class = function (_BaseStore) {
  _inherits(Containers, _BaseStore);

  function Containers(appStore) {
    _classCallCheck(this, Containers);

    var _this = _possibleConstructorReturn(this, (Containers.__proto__ || Object.getPrototypeOf(Containers)).call(this));

    _initDefineProp(_this, "containers", _descriptor, _this);

    _initDefineProp(_this, "destroyContainer", _descriptor2, _this);

    _initDefineProp(_this, "inspectContainer", _descriptor3, _this);

    _initDefineProp(_this, "loadContainersLogs", _descriptor4, _this);

    _initDefineProp(_this, "loadContainers", _descriptor5, _this);

    _initDefineProp(_this, "pruneContainers", _descriptor6, _this);

    _initDefineProp(_this, "renameContainer", _descriptor7, _this);

    _initDefineProp(_this, "restartContainer", _descriptor8, _this);

    _initDefineProp(_this, "startContainer", _descriptor9, _this);

    _initDefineProp(_this, "stopContainer", _descriptor10, _this);

    _initDefineProp(_this, "killContainer", _descriptor11, _this);

    _initDefineProp(_this, "pauseContainer", _descriptor12, _this);

    _initDefineProp(_this, "unpauseContainer", _descriptor13, _this);

    _this.appStore = appStore;
    return _this;
  }

  return Containers;
}(_BaseStore3.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "containers", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "destroyContainer", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.setError();

                _context.prev = 1;
                _context.next = 4;
                return _axios2.default.delete("containers/" + id);

              case 4:
                _this2.loadContainers();
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);

                _this2.setError(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[1, 7]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "inspectContainer", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.setError();

                _context2.prev = 1;
                _context2.next = 4;
                return _axios2.default.get("containers/" + id);

              case 4:
                res = _context2.sent;

                _this3.inspect = res.data;
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);

                _this3.setError(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[1, 8]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "loadContainersLogs", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
        var res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.setError();

                _context3.prev = 1;
                _context3.next = 4;
                return _axios2.default.get("containers/" + id + "/logs");

              case 4:
                res = _context3.sent;

                _this4.inspect = res.data;
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);

                _this4.setError(_context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this4, [[1, 8]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "loadContainers", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this5.setError();

              _context4.prev = 1;
              _context4.next = 4;
              return _axios2.default.get('containers');

            case 4:
              res = _context4.sent;

              _this5.containers = (0, _lodash.sortBy)(res.data, function (container) {
                return -container.Created;
              }).map(function (container) {
                var ports = (0, _lodash.sortBy)(container.Ports, function (p) {
                  return p.PrivatePort + "/" + p.Type;
                }).map(function (p) {
                  return "" + ((p.IP || '') && (p.IP || '') + ":" + (p.PublicPort || '') + "->") + p.PrivatePort + "/" + p.Type;
                }).join(', ');
                var names = (0, _lodash.sortBy)(container.Names, function (n) {
                  return n.toLowerCase();
                }).map(function (n) {
                  return n.slice(1);
                }).join(', ');

                return {
                  id: container.Id.substr(0, 12),
                  id_full: container.Id,
                  image: container.Image,
                  command: ellipsify(container.Command),
                  command_full: container.Command,
                  created: _moment2.default.unix(container.Created).fromNow(),
                  status: container.Status,
                  ports: ellipsify(ports),
                  ports_full: ports,
                  names: ellipsify(names),
                  names_full: names,
                  state: container.State
                };
              });
              _context4.next = 11;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](1);

              _this5.setError(_context4.t0);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, _this5, [[1, 8]]);
    }));
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "pruneContainers", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this6.setError();

              _context5.prev = 1;
              _context5.next = 4;
              return _axios2.default.post('containers/prune');

            case 4:
              _this6.loadContainers();
              _context5.next = 10;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](1);

              _this6.setError(_context5.t0);

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, _this6, [[1, 7]]);
    }));
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "renameContainer", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this7 = this;

    return function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id, name) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this7.setError();

                _context6.prev = 1;
                _context6.next = 4;
                return _axios2.default.put("containers/" + id + "/rename", { name: name });

              case 4:
                _this7.loadContainers();
                _context6.next = 10;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](1);

                _this7.setError(_context6.t0);

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, _this7, [[1, 7]]);
      }));

      return function (_x4, _x5) {
        return _ref6.apply(this, arguments);
      };
    }();
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "restartContainer", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this8 = this;

    return function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(id) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this8.setError();

                _context7.prev = 1;
                _context7.next = 4;
                return _axios2.default.put("containers/" + id + "/restart");

              case 4:
                _this8.loadContainers();
                _context7.next = 10;
                break;

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](1);

                _this8.setError(_context7.t0);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, _this8, [[1, 7]]);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }();
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "startContainer", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this9 = this;

    return function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(id) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this9.setError();

                _context8.prev = 1;
                _context8.next = 4;
                return _axios2.default.put("containers/" + id + "/start");

              case 4:
                _this9.loadContainers();
                _context8.next = 10;
                break;

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](1);

                _this9.setError(_context8.t0);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, _this9, [[1, 7]]);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }();
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "stopContainer", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this10 = this;

    return function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(id) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this10.setError();

                _context9.prev = 1;
                _context9.next = 4;
                return _axios2.default.put("containers/" + id + "/stop");

              case 4:
                _this10.loadContainers();
                _context9.next = 10;
                break;

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9["catch"](1);

                _this10.setError(_context9.t0);

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, _this10, [[1, 7]]);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }();
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "killContainer", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this11 = this;

    return function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(id) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _this11.setError();

                _context10.prev = 1;
                _context10.next = 4;
                return _axios2.default.put("containers/" + id + "/kill");

              case 4:
                _this11.loadContainers();
                _context10.next = 10;
                break;

              case 7:
                _context10.prev = 7;
                _context10.t0 = _context10["catch"](1);

                _this11.setError(_context10.t0);

              case 10:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, _this11, [[1, 7]]);
      }));

      return function (_x9) {
        return _ref10.apply(this, arguments);
      };
    }();
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "pauseContainer", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this12 = this;

    return function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(id) {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _this12.setError();

                _context11.prev = 1;
                _context11.next = 4;
                return _axios2.default.put("containers/" + id + "/pause");

              case 4:
                _this12.loadContainers();
                _context11.next = 10;
                break;

              case 7:
                _context11.prev = 7;
                _context11.t0 = _context11["catch"](1);

                _this12.setError(_context11.t0);

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, _this12, [[1, 7]]);
      }));

      return function (_x10) {
        return _ref11.apply(this, arguments);
      };
    }();
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "unpauseContainer", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this13 = this;

    return function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(id) {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _this13.setError();

                _context12.prev = 1;
                _context12.next = 4;
                return _axios2.default.put("containers/" + id + "/unpause");

              case 4:
                _this13.loadContainers();
                _context12.next = 10;
                break;

              case 7:
                _context12.prev = 7;
                _context12.t0 = _context12["catch"](1);

                _this13.setError(_context12.t0);

              case 10:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, _this13, [[1, 7]]);
      }));

      return function (_x11) {
        return _ref12.apply(this, arguments);
      };
    }();
  }
})), _class);
exports.default = Containers;
});
___scope___.file("stores/Images/Images.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

var _axios = require("~/lib/axios");

var _axios2 = _interopRequireDefault(_axios);

var _lodash = require("lodash");

var _mobx = require("mobx");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _BaseStore2 = require("~/stores/BaseStore");

var _BaseStore3 = _interopRequireDefault(_BaseStore2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var sizeOf = function sizeOf(bytes) {
  if (Number(bytes) === 0) {
    return '0.00 B';
  }
  var e = Math.floor(Math.log(bytes) / Math.log(1024));
  return (bytes / Math.pow(1024, e)).toFixed(2) + ' ' + ' KMGTP'.charAt(e) + 'B';
};

var Images = (_class = function (_BaseStore) {
  _inherits(Images, _BaseStore);

  function Images(appStore) {
    _classCallCheck(this, Images);

    var _this = _possibleConstructorReturn(this, (Images.__proto__ || Object.getPrototypeOf(Images)).call(this));

    _initDefineProp(_this, "images", _descriptor, _this);

    _initDefineProp(_this, "destroyImage", _descriptor2, _this);

    _initDefineProp(_this, "inspectImage", _descriptor3, _this);

    _initDefineProp(_this, "loadImages", _descriptor4, _this);

    _initDefineProp(_this, "pruneImages", _descriptor5, _this);

    _this.appStore = appStore;
    return _this;
  }

  return Images;
}(_BaseStore3.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "images", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "destroyImage", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.setError();

                _context.prev = 1;
                _context.next = 4;
                return _axios2.default.delete("images/" + id);

              case 4:
                _this2.loadImages();
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);

                _this2.setError(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[1, 7]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "inspectImage", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.setError();

                _context2.prev = 1;
                _context2.next = 4;
                return _axios2.default.get("images/" + id);

              case 4:
                res = _context2.sent;

                _this3.inspect = res.data;
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);

                _this3.setError(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[1, 8]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "loadImages", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this4.setError();

              _context3.prev = 1;
              _context3.next = 4;
              return _axios2.default.get('images');

            case 4:
              res = _context3.sent;

              _this4.images = (0, _lodash.sortBy)(res.data, function (image) {
                return -image.Created;
              }).reduce(function (a, image) {
                var id_full = image.Id.split(':')[1];
                var id = id_full.substr(0, 12);
                var created = _moment2.default.unix(image.Created).fromNow();
                var size = sizeOf(image.Size);

                if (image.RepoTags && image.RepoTags.length) {
                  image.RepoTags.forEach(function (repo) {
                    var name = repo.split(':')[0] || '<none>';
                    var tag = repo.split(':')[1] || '<none>';

                    a.push({
                      repository: name,
                      tag: tag,
                      image: id,
                      image_full: id_full,
                      created: created,
                      size: size
                    });
                  });
                } else if (image.RepoDigests && image.RepoDigests.length) {
                  image.RepoDigests.forEach(function (repo) {
                    var name = repo.split('@')[0] || '<none>';

                    a.push({
                      repository: name,
                      tag: '<none>',
                      image: id,
                      image_full: id_full,
                      created: created,
                      size: size
                    });
                  });
                } else {
                  a.push({
                    repository: '<none>',
                    tag: '<none>',
                    image: id,
                    image_full: id_full,
                    created: created,
                    size: size
                  });
                }
                return a;
              }, []);
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);

              _this4.setError(_context3.t0);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this4, [[1, 8]]);
    }));
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "pruneImages", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this5.setError();

              try {
                _axios2.default.post('images/prune');
                _this5.loadImages();
              } catch (e) {
                _this5.setError(e);
              }

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, _this5);
    }));
  }
})), _class);
exports.default = Images;
});
___scope___.file("stores/Volumes/Volumes.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

var _axios = require("~/lib/axios");

var _axios2 = _interopRequireDefault(_axios);

var _lodash = require("lodash");

var _mobx = require("mobx");

var _BaseStore2 = require("~/stores/BaseStore");

var _BaseStore3 = _interopRequireDefault(_BaseStore2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Volumes = (_class = function (_BaseStore) {
  _inherits(Volumes, _BaseStore);

  function Volumes(appStore) {
    _classCallCheck(this, Volumes);

    var _this = _possibleConstructorReturn(this, (Volumes.__proto__ || Object.getPrototypeOf(Volumes)).call(this));

    _initDefineProp(_this, "volumes", _descriptor, _this);

    _initDefineProp(_this, "createVolume", _descriptor2, _this);

    _initDefineProp(_this, "destroyVolume", _descriptor3, _this);

    _initDefineProp(_this, "inspectVolume", _descriptor4, _this);

    _initDefineProp(_this, "loadVolumes", _descriptor5, _this);

    _initDefineProp(_this, "pruneVolumes", _descriptor6, _this);

    _this.appStore = appStore;
    return _this;
  }

  return Volumes;
}(_BaseStore3.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "volumes", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "createVolume", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(volume) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.setError();

                _context.prev = 1;
                _context.next = 4;
                return _axios2.default.post('volumes', volume);

              case 4:
                _this2.loadVolumes();
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);

                _this2.setError(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[1, 7]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "destroyVolume", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.setError();

                _context2.prev = 1;
                _context2.next = 4;
                return _axios2.default.delete("volumes/" + id);

              case 4:
                _this3.loadVolumes();
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);

                _this3.setError(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[1, 7]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "inspectVolume", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
        var res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.setError();

                _context3.prev = 1;
                _context3.next = 4;
                return _axios2.default.get("volumes/" + id);

              case 4:
                res = _context3.sent;

                _this4.inspect = res.data;
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);

                _this4.setError(_context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this4, [[1, 8]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "loadVolumes", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this5.setError();

              _context4.prev = 1;
              _context4.next = 4;
              return _axios2.default.get('volumes');

            case 4:
              res = _context4.sent;

              _this5.volumes = (0, _lodash.sortBy)(res.data, function (volume) {
                return volume.Name.toLowerCase();
              }).map(function (volume) {
                return {
                  driver: volume.Driver,
                  name: volume.Name
                };
              });
              _context4.next = 11;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](1);

              _this5.setError(_context4.t0);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, _this5, [[1, 8]]);
    }));
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "pruneVolumes", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this6.setError();

              _context5.prev = 1;
              _context5.next = 4;
              return _axios2.default.post('volumes/prune');

            case 4:
              _this6.loadVolumes();
              _context5.next = 10;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](1);

              _this6.setError(_context5.t0);

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, _this6, [[1, 7]]);
    }));
  }
})), _class);
exports.default = Volumes;
});
___scope___.file("stores/Networks/Networks.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

var _axios = require("~/lib/axios");

var _axios2 = _interopRequireDefault(_axios);

var _lodash = require("lodash");

var _mobx = require("mobx");

var _BaseStore2 = require("~/stores/BaseStore");

var _BaseStore3 = _interopRequireDefault(_BaseStore2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Networks = (_class = function (_BaseStore) {
  _inherits(Networks, _BaseStore);

  function Networks(appStore) {
    _classCallCheck(this, Networks);

    var _this = _possibleConstructorReturn(this, (Networks.__proto__ || Object.getPrototypeOf(Networks)).call(this));

    _initDefineProp(_this, "networks", _descriptor, _this);

    _initDefineProp(_this, "createNetwork", _descriptor2, _this);

    _initDefineProp(_this, "destroyNetwork", _descriptor3, _this);

    _initDefineProp(_this, "inspectNetwork", _descriptor4, _this);

    _initDefineProp(_this, "loadNetworks", _descriptor5, _this);

    _initDefineProp(_this, "pruneNetworks", _descriptor6, _this);

    _this.appStore = appStore;
    return _this;
  }

  return Networks;
}(_BaseStore3.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "networks", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "createNetwork", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(network) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.setError();

                _context.prev = 1;
                _context.next = 4;
                return _axios2.default.post('networks', network);

              case 4:
                _this2.loadNetworks();
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);

                _this2.setError(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[1, 7]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "destroyNetwork", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.setError();

                _context2.prev = 1;
                _context2.next = 4;
                return _axios2.default.delete("networks/" + id);

              case 4:
                _this3.loadNetworks();
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);

                _this3.setError(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[1, 7]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "inspectNetwork", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
        var res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.setError();

                _context3.prev = 1;
                _context3.next = 4;
                return _axios2.default.get("networks/" + id);

              case 4:
                res = _context3.sent;

                _this4.inspect = res.data;
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);

                _this4.setError(_context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this4, [[1, 8]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "loadNetworks", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this5.setError();

              _context4.prev = 1;
              _context4.next = 4;
              return _axios2.default.get('networks');

            case 4:
              res = _context4.sent;

              _this5.networks = (0, _lodash.sortBy)(res.data, function (network) {
                return network.Name.toLowerCase();
              }).map(function (network) {
                return {
                  id: network.Id.substr(0, 12),
                  id_full: network.Id,
                  name: network.Name,
                  driver: network.Driver,
                  scope: network.Scope
                };
              });
              _context4.next = 11;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](1);

              _this5.setError(_context4.t0);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, _this5, [[1, 8]]);
    }));
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "pruneNetworks", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this6.setError();

              _context5.prev = 1;
              _context5.next = 4;
              return _axios2.default.post('networks/prune');

            case 4:
              _this6.loadNetworks();
              _context5.next = 10;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](1);

              _this6.setError(_context5.t0);

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, _this6, [[1, 7]]);
    }));
  }
})), _class);
exports.default = Networks;
});
___scope___.file("components/Login/Login.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _mobxReact = require("mobx-react");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AppStore = require("~/stores/AppStore");

var _AppStore2 = _interopRequireDefault(_AppStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.login = function (e) {
      e.preventDefault();

      _this.loginStore.login(_this.state.credentials);
    };

    _this.onChange = function (e) {
      var name = e.currentTarget.name;
      var value = e.currentTarget.value;
      _this.setState({
        credentials: Object.assign({}, _this.state.credentials, _defineProperty({}, name, value))
      });
    };

    _this.state = {
      credentials: {
        user: '',
        pass: ''
      }
    };

    _this.appStore = props.store;
    _this.loginStore = _this.appStore.login;
    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      var error = this.loginStore.error;
      var _state$credentials = this.state.credentials,
          pass = _state$credentials.pass,
          user = _state$credentials.user;


      return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "h1",
          null,
          "Log in"
        ),
        error && _react2.default.createElement(
          "div",
          { className: "alert alert-danger", role: "alert" },
          error
        ),
        _react2.default.createElement(
          "form",
          { onSubmit: this.login },
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              { htmlFor: "user" },
              "Username"
            ),
            _react2.default.createElement("input", { id: "user", type: "text", className: "form-control", name: "user", value: user, onChange: this.onChange })
          ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              { htmlFor: "pass" },
              "Password"
            ),
            _react2.default.createElement("input", { id: "pass", type: "password", className: "form-control", name: "pass", value: pass, onChange: this.onChange })
          ),
          _react2.default.createElement(
            "button",
            { type: "submit", className: "btn btn-primary btn-block" },
            "Login"
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component)) || _class) || _class);
exports.default = Login;
});
___scope___.file("components/App.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _mobxReact = require("mobx-react");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _AppStore = require("~/stores/AppStore");

var _AppStore2 = _interopRequireDefault(_AppStore);

require("./App.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.logout = function () {
      if (confirm('Are you sure you want to log out?')) {
        _this.loginStore.logout();
      }
    };

    _this.pruneContainers = function () {
      if (confirm('Are you sure you want to delete stopped containers?')) {
        _this.containersStore.pruneContainers();
      }
    };

    _this.pruneImages = function () {
      if (confirm('Are you sure you want to delete unused images?')) {
        _this.imagesStore.pruneImages();
      }
    };

    _this.pruneVolumes = function () {
      if (confirm('Are you sure you want to delete unused volumes?')) {
        _this.volumesStore.pruneVolumes();
      }
    };

    _this.pruneNetworks = function () {
      if (confirm('Are you sure you want to delete unused networks?')) {
        _this.networksStore.pruneNetworks();
      }
    };

    _this.appStore = props.store;
    _this.loginStore = _this.appStore.login;
    _this.containersStore = _this.appStore.containers;
    _this.imagesStore = _this.appStore.images;
    _this.volumesStore = _this.appStore.volumes;
    _this.networksStore = _this.appStore.networks;
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var route = this.props.routes[this.props.routes.length - 1].path;

      var button = null,
          images = '',
          containerStats = '',
          containers = '',
          volumes = '',
          networks = '';

      switch (route) {
        case 'images':
          button = _react2.default.createElement(
            "button",
            { type: "button", className: "btn btn-danger btn-sm", onClick: this.pruneImages },
            "Delete all unused images"
          );
          images = 'active';
          break;
        case 'container-stats':
          containerStats = 'active';
          break;
        case 'containers':
          button = _react2.default.createElement(
            "button",
            { type: "button", className: "btn btn-danger btn-sm", onClick: this.pruneContainers },
            "Delete all stopped containers"
          );
          containers = 'active';
          break;
        case 'volumes':
          button = _react2.default.createElement(
            "button",
            { type: "button", className: "btn btn-danger btn-sm", onClick: this.pruneVolumes },
            "Delete all unused volumes"
          );
          volumes = 'active';
          break;
        case 'networks':
          button = _react2.default.createElement(
            "button",
            { type: "button", className: "btn btn-danger btn-sm", onClick: this.pruneNetworks },
            "Delete all unused networks"
          );
          networks = 'active';
          break;
      }

      return _react2.default.createElement(
        "div",
        { className: "App" },
        _react2.default.createElement(
          "nav",
          { className: "navbar navbar-default" },
          _react2.default.createElement(
            "div",
            { className: "container-fluid" },
            _react2.default.createElement(
              "div",
              { className: "navbar-header" },
              _react2.default.createElement(
                "button",
                { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false" },
                _react2.default.createElement("span", { className: "icon-bar" }),
                _react2.default.createElement("span", { className: "icon-bar" }),
                _react2.default.createElement("span", { className: "icon-bar" })
              ),
              _react2.default.createElement(
                "span",
                { className: "navbar-brand" },
                "Docker UI"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
              _react2.default.createElement(
                "ul",
                { className: "nav navbar-nav" },
                _react2.default.createElement(
                  "li",
                  { className: containerStats },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/container-stats" },
                    "Stats"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  { className: images },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/images" },
                    "Images"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  { className: containers },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/containers" },
                    "Containers"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  { className: volumes },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/volumes" },
                    "Volumes"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  { className: networks },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/networks" },
                    "Networks"
                  )
                )
              ),
              _react2.default.createElement(
                "form",
                { className: "navbar-form navbar-left" },
                button
              ),
              _react2.default.createElement(
                "ul",
                { className: "nav navbar-nav navbar-right" },
                _react2.default.createElement(
                  "li",
                  { className: "dropdown" },
                  _react2.default.createElement(
                    "a",
                    { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false" },
                    _react2.default.createElement("span", { className: "glyphicon glyphicon-user" })
                  ),
                  _react2.default.createElement(
                    "ul",
                    { className: "dropdown-menu" },
                    _react2.default.createElement(
                      "li",
                      null,
                      _react2.default.createElement(
                        "a",
                        { href: "#", onClick: this.logout },
                        "Logout"
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        this.props.children
      );
    }
  }]);

  return App;
}(_react2.default.Component)) || _class);
exports.default = App;
});
___scope___.file("components/App.scss", function(exports, require, module, __filename, __dirname){


require("~/app.css")
});
___scope___.file("components/Images/Images.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _mobxReact = require("mobx-react");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AppStore = require("~/stores/AppStore");

var _AppStore2 = _interopRequireDefault(_AppStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Images = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(Images, _React$Component);

  function Images(props) {
    _classCallCheck(this, Images);

    var _this = _possibleConstructorReturn(this, (Images.__proto__ || Object.getPrototypeOf(Images)).call(this, props));

    _this.closeInspector = function () {
      _this.imagesStore.closeInspector();
    };

    _this.destroyImage = function (id) {
      if (confirm("Are you sure you want to delete image " + id)) {
        _this.imagesStore.destroyImage(id);
      }
    };

    _this.inspectImage = function (e, id) {
      e.preventDefault();

      _this.imagesStore.inspectImage(id);
    };

    _this.loadImages = function () {
      _this.imagesStore.loadImages();
    };

    _this.appStore = props.store;
    _this.imagesStore = _this.appStore.images;
    return _this;
  }

  _createClass(Images, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadImages();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _imagesStore = this.imagesStore,
          error = _imagesStore.error,
          images = _imagesStore.images,
          inspect = _imagesStore.inspect;


      return _react2.default.createElement(
        "div",
        { className: "Images" },
        error && _react2.default.createElement(
          "div",
          { className: "alert alert-danger", role: "alert" },
          error
        ),
        _react2.default.createElement(
          "div",
          { className: "table-responsive" },
          _react2.default.createElement(
            "table",
            { className: "table" },
            _react2.default.createElement(
              "thead",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "th",
                  null,
                  "Repository"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Tag"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Image ID"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Created"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Size"
                ),
                _react2.default.createElement("th", null)
              )
            ),
            _react2.default.createElement(
              "tbody",
              null,
              images.map(function (image, i) {
                return _react2.default.createElement(
                  "tr",
                  { key: i },
                  _react2.default.createElement(
                    "td",
                    { title: image.repository },
                    image.repository
                  ),
                  _react2.default.createElement(
                    "td",
                    { title: image.tag },
                    image.tag
                  ),
                  _react2.default.createElement(
                    "td",
                    { title: image.image_full },
                    _react2.default.createElement(
                      "a",
                      { href: "#", onClick: function onClick(e) {
                          return _this2.inspectImage(e, image.image);
                        } },
                      image.image
                    )
                  ),
                  _react2.default.createElement(
                    "td",
                    { title: image.created },
                    image.created
                  ),
                  _react2.default.createElement(
                    "td",
                    { title: image.size },
                    image.size
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(
                      "div",
                      { className: "dropdown pull-right" },
                      _react2.default.createElement(
                        "button",
                        { className: "btn btn-default dropdown-toggle", type: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "true" },
                        _react2.default.createElement("span", { className: "glyphicon glyphicon-cog" })
                      ),
                      _react2.default.createElement(
                        "ul",
                        { className: "dropdown-menu dropdown-menu-right" },
                        _react2.default.createElement(
                          "li",
                          null,
                          _react2.default.createElement(
                            "a",
                            { href: "#", onClick: function onClick() {
                                return _this2.destroyImage(image.image);
                              } },
                            "Delete"
                          )
                        )
                      )
                    )
                  )
                );
              })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "modal fade in", id: "myModal", tabIndex: "-1", role: "dialog", "aria-labelledby": "myModalLabel", style: { display: inspect ? 'block' : 'none' } },
          _react2.default.createElement(
            "div",
            { className: "modal-dialog", role: "document" },
            _react2.default.createElement(
              "div",
              { className: "modal-content" },
              _react2.default.createElement(
                "div",
                { className: "modal-header" },
                _react2.default.createElement(
                  "button",
                  { type: "button", className: "close", "aria-label": "Close", onClick: this.closeInspector },
                  _react2.default.createElement(
                    "span",
                    { "aria-hidden": "true" },
                    "\xD7"
                  )
                ),
                _react2.default.createElement(
                  "h4",
                  { className: "modal-title", id: "myModalLabel" },
                  "Inspect Image"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "modal-body" },
                _react2.default.createElement(
                  "pre",
                  null,
                  _react2.default.createElement(
                    "code",
                    null,
                    JSON.stringify(inspect, undefined, 2)
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "modal-footer" },
                _react2.default.createElement(
                  "button",
                  { type: "button", className: "btn btn-default", onClick: this.closeInspector },
                  "Close"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Images;
}(_react2.default.Component)) || _class) || _class);
exports.default = Images;
});
___scope___.file("components/Containers/Containers.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _mobxReact = require("mobx-react");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AppStore = require("~/stores/AppStore");

var _AppStore2 = _interopRequireDefault(_AppStore);

var _Containers = require("~/stores/Containers/Containers");

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Containers = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(Containers, _React$Component);

  function Containers(props) {
    _classCallCheck(this, Containers);

    var _this = _possibleConstructorReturn(this, (Containers.__proto__ || Object.getPrototypeOf(Containers)).call(this, props));

    _this.closeInspector = function () {
      _this.containersStore.closeInspector();
    };

    _this.destroyContainer = function (id) {
      if (confirm("Are you sure you want to delete container " + id)) {
        _this.containersStore.destroyContainer(id);
      }
    };

    _this.inspectContainer = function (e, id) {
      e.preventDefault();

      _this.containersStore.inspectContainer(id);
    };

    _this.loadContainers = function () {
      _this.containersStore.loadContainers();
    };

    _this.loadContainersLogs = function () {
      _this.containersStore.loadContainersLogs();
    };

    _this.pauseContainer = function (id) {
      if (confirm("Are you sure you want to pause container " + id + "?")) {
        _this.containersStore.pauseContainer(id);
      }
    };

    _this.unpauseContainer = function (id) {
      if (confirm("Are you sure you want to unpause container " + id + "?")) {
        _this.containersStore.unpauseContainer(id);
      }
    };

    _this.renameContainer = function (container) {
      var name = prompt('What would you like the new name to be?', container.names);

      if (name) {
        _this.containersStore.renameContainer(container.id, name);
      }
    };

    _this.restartContainer = function (id) {
      if (confirm("Are you sure you want to restart container " + id + "?")) {
        _this.containersStore.restartContainer(id);
      }
    };

    _this.startContainer = function (id) {
      if (confirm("Are you sure you want to start container " + id + "?")) {
        _this.containersStore.startContainer(id);
      }
    };

    _this.stopContainer = function (id) {
      if (confirm("Are you sure you want to stop container " + id + "?")) {
        _this.containersStore.stopContainer(id);
      }
    };

    _this.killContainer = function (id) {
      if (confirm("Are you sure you want to kill container " + id + "?")) {
        _this.containersStore.killContainer(id);
      }
    };

    _this.appStore = props.store;
    _this.containersStore = _this.appStore.containers;
    return _this;
  }

  _createClass(Containers, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadContainers();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _containersStore = this.containersStore,
          containers = _containersStore.containers,
          error = _containersStore.error,
          inspect = _containersStore.inspect;


      return _react2.default.createElement(
        "div",
        { className: "Containers" },
        error && _react2.default.createElement(
          "div",
          { className: "alert alert-danger", role: "alert" },
          error
        ),
        _react2.default.createElement(
          "div",
          { className: "table-responsive" },
          _react2.default.createElement(
            "table",
            { className: "table" },
            _react2.default.createElement(
              "thead",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "th",
                  null,
                  "Container ID"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Image"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Command"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Created"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Status"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Ports"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Names"
                ),
                _react2.default.createElement("th", null)
              )
            ),
            _react2.default.createElement(
              "tbody",
              null,
              containers.map(function (container, i) {
                return _react2.default.createElement(
                  "tr",
                  { key: i },
                  _react2.default.createElement(
                    "td",
                    { title: container.id_full },
                    _react2.default.createElement(
                      "a",
                      { href: "#", onClick: function onClick(e) {
                          return _this2.inspectContainer(e, container.id);
                        } },
                      container.id
                    )
                  ),
                  _react2.default.createElement(
                    "td",
                    { title: container.image },
                    container.image
                  ),
                  _react2.default.createElement(
                    "td",
                    { title: container.command_full },
                    container.command
                  ),
                  _react2.default.createElement(
                    "td",
                    { title: container.created },
                    container.created
                  ),
                  _react2.default.createElement(
                    "td",
                    { title: container.status },
                    container.state === _Containers.STATE.CREATED && _react2.default.createElement(
                      "span",
                      { className: "label label-info" },
                      "created"
                    ),
                    container.state === _Containers.STATE.RUNNING && _react2.default.createElement(
                      "span",
                      { className: "label label-success" },
                      "running"
                    ),
                    container.state === _Containers.STATE.PAUSED && _react2.default.createElement(
                      "span",
                      { className: "label label-warning" },
                      "paused"
                    ),
                    container.state === _Containers.STATE.RESTARTING && _react2.default.createElement(
                      "span",
                      { className: "label label-warning" },
                      "restarting"
                    ),
                    container.state === _Containers.STATE.REMOVING && _react2.default.createElement(
                      "span",
                      { className: "label label-danger" },
                      "removing"
                    ),
                    container.state === _Containers.STATE.EXITED && _react2.default.createElement(
                      "span",
                      { className: "label label-danger" },
                      "exited"
                    ),
                    container.state === _Containers.STATE.DEAD && _react2.default.createElement(
                      "span",
                      { className: "label label-danger" },
                      "dead"
                    ),
                    "\xA0",
                    container.status
                  ),
                  _react2.default.createElement(
                    "td",
                    { title: container.ports_full },
                    container.ports
                  ),
                  _react2.default.createElement(
                    "td",
                    { title: container.names_full },
                    container.names
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(
                      "div",
                      { className: "dropdown pull-right" },
                      _react2.default.createElement(
                        "button",
                        { className: "btn btn-default dropdown-toggle", type: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "true" },
                        _react2.default.createElement("span", { className: "glyphicon glyphicon-cog" })
                      ),
                      _react2.default.createElement(
                        "ul",
                        { className: "dropdown-menu dropdown-menu-right" },
                        (container.state === _Containers.STATE.EXITED || container.state === _Containers.STATE.DEAD) && _react2.default.createElement(
                          "li",
                          null,
                          _react2.default.createElement(
                            "a",
                            { href: "#", onClick: function onClick() {
                                return _this2.startContainer(container.id);
                              } },
                            "Start"
                          )
                        ),
                        (container.state === _Containers.STATE.EXITED || container.state === _Containers.STATE.DEAD) && _react2.default.createElement(
                          "li",
                          null,
                          _react2.default.createElement(
                            "a",
                            { href: "#", onClick: function onClick() {
                                return _this2.destroyContainer(container.id);
                              } },
                            "Delete"
                          )
                        ),
                        container.state === _Containers.STATE.RUNNING && _react2.default.createElement(
                          "li",
                          null,
                          _react2.default.createElement(
                            "a",
                            { href: "#", onClick: function onClick() {
                                return _this2.restartContainer(container.id);
                              } },
                            "Restart"
                          )
                        ),
                        container.state === _Containers.STATE.RUNNING && _react2.default.createElement(
                          "li",
                          null,
                          _react2.default.createElement(
                            "a",
                            { href: "#", onClick: function onClick() {
                                return _this2.stopContainer(container.id);
                              } },
                            "Stop"
                          )
                        ),
                        container.state === _Containers.STATE.RUNNING && _react2.default.createElement(
                          "li",
                          null,
                          _react2.default.createElement(
                            "a",
                            { href: "#", onClick: function onClick() {
                                return _this2.killContainer(container.id);
                              } },
                            "Kill"
                          )
                        ),
                        container.state === _Containers.STATE.RUNNING && _react2.default.createElement(
                          "li",
                          null,
                          _react2.default.createElement(
                            "a",
                            { href: "#", onClick: function onClick() {
                                return _this2.pauseContainer(container.id);
                              } },
                            "Pause"
                          )
                        ),
                        container.state === _Containers.STATE.PAUSED && _react2.default.createElement(
                          "li",
                          null,
                          _react2.default.createElement(
                            "a",
                            { href: "#", onClick: function onClick() {
                                return _this2.unpauseContainer(container.id);
                              } },
                            "Unpause"
                          )
                        ),
                        _react2.default.createElement(
                          "li",
                          null,
                          _react2.default.createElement(
                            "a",
                            { href: "#", onClick: function onClick() {
                                return _this2.renameContainer(container);
                              } },
                            "Rename"
                          )
                        ),
                        _react2.default.createElement(
                          "li",
                          null,
                          _react2.default.createElement(
                            _reactRouter.Link,
                            { to: "/Logs?containerId=" + container.id },
                            "Logs"
                          )
                        )
                      )
                    )
                  )
                );
              })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "modal fade in", id: "myModal", tabIndex: "-1", role: "dialog", "aria-labelledby": "myModalLabel", style: { display: inspect ? 'block' : 'none' } },
          _react2.default.createElement(
            "div",
            { className: "modal-dialog", role: "document" },
            _react2.default.createElement(
              "div",
              { className: "modal-content" },
              _react2.default.createElement(
                "div",
                { className: "modal-header" },
                _react2.default.createElement(
                  "button",
                  { type: "button", className: "close", "aria-label": "Close", onClick: this.closeInspector },
                  _react2.default.createElement(
                    "span",
                    { "aria-hidden": "true" },
                    "\xD7"
                  )
                ),
                _react2.default.createElement(
                  "h4",
                  { className: "modal-title", id: "myModalLabel" },
                  "Inspect Container"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "modal-body" },
                _react2.default.createElement(
                  "pre",
                  null,
                  _react2.default.createElement(
                    "code",
                    null,
                    JSON.stringify(inspect, undefined, 2)
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "modal-footer" },
                _react2.default.createElement(
                  "button",
                  { type: "button", className: "btn btn-default", onClick: this.closeInspector },
                  "Close"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Containers;
}(_react2.default.Component)) || _class) || _class);
exports.default = Containers;
});
___scope___.file("components/Volumes/Volumes.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _mobxReact = require("mobx-react");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AppStore = require("~/stores/AppStore");

var _AppStore2 = _interopRequireDefault(_AppStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Volumes = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(Volumes, _React$Component);

  function Volumes(props) {
    _classCallCheck(this, Volumes);

    var _this = _possibleConstructorReturn(this, (Volumes.__proto__ || Object.getPrototypeOf(Volumes)).call(this, props));

    _this.closeInspector = function () {
      _this.volumesStore.closeInspector();
    };

    _this.createVolume = function (e) {
      e.preventDefault();

      _this.volumesStore.createVolume(_this.state.volume);
    };

    _this.destroyVolume = function (id) {
      if (confirm("Are you sure you want to delete volume " + id + "?")) {
        _this.volumesStore.destroyVolume(id);
      }
    };

    _this.inspectVolume = function (e, id) {
      e.preventDefault();

      _this.volumesStore.inspectVolume(id);
    };

    _this.loadVolumes = function () {
      _this.volumesStore.loadVolumes();
    };

    _this.onChange = function (e) {
      var name = e.currentTarget.name;
      var value = e.currentTarget.value;
      _this.setState({
        volume: Object.assign({}, _this.state.volume, _defineProperty({}, name, value))
      });
    };

    _this.state = {
      volume: {
        name: ''
      }
    };

    _this.appStore = props.store;
    _this.volumesStore = _this.appStore.volumes;
    return _this;
  }

  _createClass(Volumes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadVolumes();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _volumesStore = this.volumesStore,
          error = _volumesStore.error,
          inspect = _volumesStore.inspect,
          volumes = _volumesStore.volumes;


      return _react2.default.createElement(
        "div",
        { className: "Volumes" },
        error && _react2.default.createElement(
          "div",
          { className: "alert alert-danger", role: "alert" },
          error
        ),
        _react2.default.createElement(
          "form",
          { className: "form-inline", onSubmit: this.createVolume },
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement("input", { className: "form-control", type: "text", name: "name", value: this.state.volume.name, onChange: this.onChange })
          ),
          _react2.default.createElement(
            "button",
            { type: "submit", className: "btn btn-default" },
            "Create"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "table-responsive" },
          _react2.default.createElement(
            "table",
            { className: "table" },
            _react2.default.createElement(
              "thead",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "th",
                  null,
                  "Driver"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Name"
                ),
                _react2.default.createElement("th", null)
              )
            ),
            _react2.default.createElement(
              "tbody",
              null,
              volumes.map(function (volume, i) {
                return _react2.default.createElement(
                  "tr",
                  { key: i },
                  _react2.default.createElement(
                    "td",
                    { title: volume.driver },
                    volume.driver
                  ),
                  _react2.default.createElement(
                    "td",
                    { title: volume.name },
                    _react2.default.createElement(
                      "a",
                      { href: "#", onClick: function onClick(e) {
                          return _this2.inspectVolume(e, volume.name);
                        } },
                      volume.name
                    )
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(
                      "div",
                      { className: "dropdown pull-right" },
                      _react2.default.createElement(
                        "button",
                        { className: "btn btn-default dropdown-toggle", type: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "true" },
                        _react2.default.createElement("span", { className: "glyphicon glyphicon-cog" })
                      ),
                      _react2.default.createElement(
                        "ul",
                        { className: "dropdown-menu dropdown-menu-right" },
                        _react2.default.createElement(
                          "li",
                          null,
                          _react2.default.createElement(
                            "a",
                            { href: "#", onClick: function onClick() {
                                return _this2.destroyVolume(volume.name);
                              } },
                            "Delete"
                          )
                        )
                      )
                    )
                  )
                );
              })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "modal fade in", id: "myModal", tabIndex: "-1", role: "dialog", "aria-labelledby": "myModalLabel", style: { display: inspect ? 'block' : 'none' } },
          _react2.default.createElement(
            "div",
            { className: "modal-dialog", role: "document" },
            _react2.default.createElement(
              "div",
              { className: "modal-content" },
              _react2.default.createElement(
                "div",
                { className: "modal-header" },
                _react2.default.createElement(
                  "button",
                  { type: "button", className: "close", "aria-label": "Close", onClick: this.closeInspector },
                  _react2.default.createElement(
                    "span",
                    { "aria-hidden": "true" },
                    "\xD7"
                  )
                ),
                _react2.default.createElement(
                  "h4",
                  { className: "modal-title", id: "myModalLabel" },
                  "Inspect Volume"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "modal-body" },
                _react2.default.createElement(
                  "pre",
                  null,
                  _react2.default.createElement(
                    "code",
                    null,
                    JSON.stringify(inspect, undefined, 2)
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "modal-footer" },
                _react2.default.createElement(
                  "button",
                  { type: "button", className: "btn btn-default", onClick: this.closeInspector },
                  "Close"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Volumes;
}(_react2.default.Component)) || _class) || _class);
exports.default = Volumes;
});
___scope___.file("components/Networks/Networks.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _mobxReact = require("mobx-react");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AppStore = require("~/stores/AppStore");

var _AppStore2 = _interopRequireDefault(_AppStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Networks = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(Networks, _React$Component);

  function Networks(props) {
    _classCallCheck(this, Networks);

    var _this = _possibleConstructorReturn(this, (Networks.__proto__ || Object.getPrototypeOf(Networks)).call(this, props));

    _this.closeInspector = function () {
      _this.networksStore.closeInspector();
    };

    _this.createNetwork = function (e) {
      e.preventDefault();

      _this.networksStore.createNetwork(_this.state.network);
    };

    _this.destroyNetwork = function (id) {
      if (confirm("Are you sure you want to delete network " + id + "?")) {
        _this.networksStore.destroyNetwork(id);
      }
    };

    _this.inspectNetwork = function (e, id) {
      e.preventDefault();

      _this.networksStore.inspectNetwork(id);
    };

    _this.loadNetworks = function () {
      _this.networksStore.loadNetworks();
    };

    _this.onChange = function (e) {
      var name = e.currentTarget.name;
      var value = e.currentTarget.value;
      _this.setState({
        network: Object.assign({}, _this.state.network, _defineProperty({}, name, value))
      });
    };

    _this.state = {
      network: {
        name: ''
      }
    };

    _this.appStore = props.store;
    _this.networksStore = _this.appStore.networks;
    return _this;
  }

  _createClass(Networks, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadNetworks();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _networksStore = this.networksStore,
          error = _networksStore.error,
          inspect = _networksStore.inspect,
          networks = _networksStore.networks;


      return _react2.default.createElement(
        "div",
        { className: "Networks" },
        error && _react2.default.createElement(
          "div",
          { className: "alert alert-danger", role: "alert" },
          error
        ),
        _react2.default.createElement(
          "form",
          { className: "form-inline", onSubmit: this.createNetwork },
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement("input", { className: "form-control", type: "text", name: "name", value: this.state.network.name, onChange: this.onChange })
          ),
          _react2.default.createElement(
            "button",
            { type: "submit", className: "btn btn-default" },
            "Create"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "table-responsive" },
          _react2.default.createElement(
            "table",
            { className: "table" },
            _react2.default.createElement(
              "thead",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "th",
                  null,
                  "Network ID"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Name"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Driver"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Scope"
                ),
                _react2.default.createElement("th", null)
              )
            ),
            _react2.default.createElement(
              "tbody",
              null,
              networks.map(function (network, i) {
                return _react2.default.createElement(
                  "tr",
                  { key: i },
                  _react2.default.createElement(
                    "td",
                    { title: network.id_full },
                    network.id
                  ),
                  _react2.default.createElement(
                    "td",
                    { title: network.name },
                    _react2.default.createElement(
                      "a",
                      { href: "#", onClick: function onClick(e) {
                          return _this2.inspectNetwork(e, network.id);
                        } },
                      network.name
                    )
                  ),
                  _react2.default.createElement(
                    "td",
                    { title: network.driver },
                    network.driver
                  ),
                  _react2.default.createElement(
                    "td",
                    { title: network.scope },
                    network.scope
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(
                      "div",
                      { className: "dropdown pull-right" },
                      _react2.default.createElement(
                        "button",
                        { className: "btn btn-default dropdown-toggle", type: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "true" },
                        _react2.default.createElement("span", { className: "glyphicon glyphicon-cog" })
                      ),
                      _react2.default.createElement(
                        "ul",
                        { className: "dropdown-menu dropdown-menu-right" },
                        _react2.default.createElement(
                          "li",
                          null,
                          _react2.default.createElement(
                            "a",
                            { href: "#", onClick: function onClick() {
                                return _this2.destroyNetwork(network.id);
                              } },
                            "Delete"
                          )
                        )
                      )
                    )
                  )
                );
              })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "modal fade in", id: "myModal", tabIndex: "-1", role: "dialog", "aria-labelledby": "myModalLabel", style: { display: inspect ? 'block' : 'none' } },
          _react2.default.createElement(
            "div",
            { className: "modal-dialog", role: "document" },
            _react2.default.createElement(
              "div",
              { className: "modal-content" },
              _react2.default.createElement(
                "div",
                { className: "modal-header" },
                _react2.default.createElement(
                  "button",
                  { type: "button", className: "close", "aria-label": "Close", onClick: this.closeInspector },
                  _react2.default.createElement(
                    "span",
                    { "aria-hidden": "true" },
                    "\xD7"
                  )
                ),
                _react2.default.createElement(
                  "h4",
                  { className: "modal-title", id: "myModalLabel" },
                  "Inspect Network"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "modal-body" },
                _react2.default.createElement(
                  "pre",
                  null,
                  _react2.default.createElement(
                    "code",
                    null,
                    JSON.stringify(inspect, undefined, 2)
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "modal-footer" },
                _react2.default.createElement(
                  "button",
                  { type: "button", className: "btn btn-default", onClick: this.closeInspector },
                  "Close"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Networks;
}(_react2.default.Component)) || _class) || _class);
exports.default = Networks;
});
___scope___.file("components/Logs/Logs.js", function(exports, require, module, __filename, __dirname){

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _mobxReact = require("mobx-react");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AppStore = require("~/stores/AppStore");

var _AppStore2 = _interopRequireDefault(_AppStore);

var _ansiToReact = require("ansi-to-react");

var _ansiToReact2 = _interopRequireDefault(_ansiToReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logs = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(Logs, _React$Component);

  function Logs(props) {
    _classCallCheck(this, Logs);

    var _this = _possibleConstructorReturn(this, (Logs.__proto__ || Object.getPrototypeOf(Logs)).call(this, props));

    _this.appStore = props.store;
    _this.containersStore = _this.appStore.containers;
    return _this;
  }

  _createClass(Logs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.containerId = new URLSearchParams(window.location.search).get('containerId');
      this.containersStore.loadContainersLogs(this.containerId);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.containersStore.inspect = null;
    }
  }, {
    key: "render",
    value: function render() {
      var inspect = this.containersStore.inspect;

      var lines = inspect ? inspect.message.split('\n') : null;
      return _react2.default.createElement(
        "div",
        { className: "Logs" },
        _react2.default.createElement(
          "h1",
          null,
          "Container ",
          this.containerId,
          " Logs"
        ),
        lines ? lines.map(function (line, idx) {
          return _react2.default.createElement(
            "div",
            { key: idx },
            _react2.default.createElement(
              _ansiToReact2.default,
              null,
              line
            ),
            _react2.default.createElement("br", null)
          );
        }) : null
      );
    }
  }]);

  return Logs;
}(_react2.default.Component)) || _class) || _class);
exports.default = Logs;
});
___scope___.file("components/ContainerStats/ContainerStats.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ContainerStats = require('./ContainerStats.style');

var _container = require('../../assets/png/container.png');

var _container2 = _interopRequireDefault(_container);

var _cpu = require('../../assets/png/cpu.png');

var _cpu2 = _interopRequireDefault(_cpu);

var _memory = require('../../assets/png/memory.png');

var _memory2 = _interopRequireDefault(_memory);

var _MetricCard = require('./MetricCard');

var _MetricCard2 = _interopRequireDefault(_MetricCard);

var _ContainerMetricChartView = require('./ContainerMetricChartView');

var _ContainerMetricChartView2 = _interopRequireDefault(_ContainerMetricChartView);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainerStat = function (_React$Component) {
  _inherits(ContainerStat, _React$Component);

  function ContainerStat() {
    _classCallCheck(this, ContainerStat);

    var _this = _possibleConstructorReturn(this, (ContainerStat.__proto__ || Object.getPrototypeOf(ContainerStat)).call(this));

    _this.state = {
      isTableBtnActive: true,
      totalCpuUsage: 0,
      totalMemoryUsage: 0,
      containers: []
    };
    return _this;
  }

  _createClass(ContainerStat, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get('http://localhost:3000/container-stats').then(function (res) {
        return _this2.setState({
          totalCpuUsage: res.data.total_cpu_usage.toFixed(2),
          totalMemoryUsage: res.data.total_memory_usage.toFixed(2),
          containers: res.data.containers_states
        });
      });
    }
  }, {
    key: 'toggleContainerListView',
    value: function toggleContainerListView(targetBtn) {
      if (this.state.isTableBtnActive && targetBtn !== 'list' || !this.state.isTableBtnActive && targetBtn !== 'stats') {
        this.setState(function (state) {
          return {
            isTableBtnActive: !state.isTableBtnActive
          };
        });
      }
    }
  }, {
    key: 'getBtnGroupClassName',
    value: function getBtnGroupClassName(isActive) {
      return isActive ? 'btn-primary' : 'btn-default';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'containers-stats', style: { padding: '64px' } },
        _react2.default.createElement(
          'div',
          { style: _ContainerStats.styles.flex_wrapper },
          _react2.default.createElement(_MetricCard2.default, {
            icon: _container2.default,
            title: 'Number of containers',
            value: this.state.containers.length
          }),
          _react2.default.createElement(_MetricCard2.default, {
            icon: _cpu2.default,
            title: 'Total CPU usage',
            value: this.state.totalCpuUsage + ' %'
          }),
          _react2.default.createElement(_MetricCard2.default, {
            icon: _memory2.default,
            title: 'Total Memory usage',
            value: this.state.totalMemoryUsage + ' %'
          })
        ),
        _react2.default.createElement(
          'div',
          { style: _ContainerStats.styles.table_actions },
          _react2.default.createElement(
            'div',
            {
              style: _ContainerStats.styles.table_toggle_view, className: 'btn-group',
              role: 'group',
              'aria-label': '...'
            },
            _react2.default.createElement(
              'button',
              {
                id: 'list',
                type: 'button',
                className: 'btn ' + this.getBtnGroupClassName(this.state.isTableBtnActive),
                onClick: this.toggleContainerListView.bind(this, 'list')
              },
              _react2.default.createElement('span', {
                className: 'glyphicon glyphicon-th-list',
                'aria-hidden': 'true'
              })
            ),
            _react2.default.createElement(
              'button',
              {
                id: 'stats',
                type: 'button',
                className: 'btn ' + this.getBtnGroupClassName(!this.state.isTableBtnActive),
                onClick: this.toggleContainerListView.bind(this, 'stats')
              },
              _react2.default.createElement('span', {
                className: 'glyphicon glyphicon-stats',
                'aria-hidden': 'true'
              })
            )
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-primary' },
            'Refresh'
          )
        ),
        this.state.isTableBtnActive ? _react2.default.createElement(
          'div',
          { className: 'table-responsive' },
          _react2.default.createElement(
            'table',
            { className: 'table' },
            _react2.default.createElement(
              'thead',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  null,
                  'Container ID'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'Metrics'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'Stats'
                ),
                _react2.default.createElement('th', null)
              )
            ),
            _react2.default.createElement(
              'tbody',
              null,
              this.state.containers.map(function (container) {
                return _react2.default.createElement(
                  'tr',
                  { key: container.container_id },
                  _react2.default.createElement(
                    'td',
                    null,
                    container.container_id.substring(0, 8)
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'span',
                      { className: 'label label-default', style: _ContainerStats.styles.label },
                      'CPU : ',
                      container.cpu_usage.toFixed(2),
                      ' %'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'label label-default', style: _ContainerStats.styles.label },
                      'MEM : ',
                      container.memory_usage.toFixed(2),
                      ' %'
                    )
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: '/container-stats/' + container.container_id },
                      'Detailed statistics'
                    )
                  )
                );
              })
            )
          )
        ) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_ContainerMetricChartView2.default, {
            containers: this.state.containers,
            totalCpuUsage: this.state.totalCpuUsage,
            totalMemoryUsage: this.state.totalMemoryUsage
          })
        )
      );
    }
  }]);

  return ContainerStat;
}(_react2.default.Component);

exports.default = ContainerStat;
});
___scope___.file("components/ContainerStats/ContainerStats.style.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = exports.styles = {
  flex_wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  label: {
    marginRight: '8px',
    borderRadius: '8px'
  },
  table_toggle_view: {
    marginRight: '8px',
    right: '0'
  },
  table_actions: {
    marginTop: '8px',
    marginBottom: '8px',
    display: 'flex',
    justifyContent: 'end'
  }
};
});
___scope___.file("components/ContainerStats/MetricCard.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MetricCard = require('./MetricCard.style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetricCard = function (_React$Component) {
  _inherits(MetricCard, _React$Component);

  function MetricCard() {
    _classCallCheck(this, MetricCard);

    return _possibleConstructorReturn(this, (MetricCard.__proto__ || Object.getPrototypeOf(MetricCard)).apply(this, arguments));
  }

  _createClass(MetricCard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: _MetricCard.styles.flex_card },
        _react2.default.createElement(
          'span',
          { style: _MetricCard.styles.grid_item_title },
          this.props.title
        ),
        _react2.default.createElement(
          'span',
          { style: _MetricCard.styles.grid_item_value },
          this.props.value
        )
      );
    }
  }]);

  return MetricCard;
}(_react2.default.Component);

exports.default = MetricCard;
});
___scope___.file("components/ContainerStats/MetricCard.style.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = exports.styles = {
  flex_card: {
    boxSizing: 'border-box',
    color: 'white',
    backgroundColor: '#2c3e50',
    minWidth: '30%',
    height: '150px',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'grid',
    transition: 'transform ease-in-out .3s',
    '&:hover': {
      transform: 'scale(1.05, 1.05)'
    }
  },
  grid_item_icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridColumn: 1,
    gridRow: '1 / span 2'
  },

  grid_item_title: {
    marginTop: '16px',
    textAlign: 'center',
    wordWrap: 'break-word',
    fontSize: '1.8em',
    gridColumn: 1,
    gridRow: 1
  },

  grid_item_value: {
    fontSize: '3.5em',
    fontWeight: 'bolder',
    textAlign: 'center',
    gridColumn: 1,
    gridRow: 2
  }
};
});
___scope___.file("components/ContainerStats/ContainerMetricChartView.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

var _ContainerMetricChartView = require('./ContainerMetricChartView.style');

var _utils = require('./utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cpuData = {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: [],
    borderWidth: 1
  }]
};

var cpuOption = {
  responsive: true,
  plugins: {
    legend: {
      position: 'left'
    },
    title: {
      display: true,
      text: 'CPU usage distribution'
    }
  }
};
var memoryData = {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: [],
    borderWidth: 1
  }]
};

var memoryOption = {
  responsive: true,
  plugins: {
    legend: {
      position: 'left'
    },
    title: {
      display: true,
      text: 'Memory usage distribution'
    }
  }
};

var ContainerMetricChartView = function (_React$Component) {
  _inherits(ContainerMetricChartView, _React$Component);

  function ContainerMetricChartView(props) {
    _classCallCheck(this, ContainerMetricChartView);

    var _this = _possibleConstructorReturn(this, (ContainerMetricChartView.__proto__ || Object.getPrototypeOf(ContainerMetricChartView)).call(this, props));

    _this.state = _extends({}, props);
    return _this;
  }

  _createClass(ContainerMetricChartView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var backgroundColors = (0, _utils.hexColorGenerator)(this.state.containers.length);
      cpuData.labels = this.state.containers.map(function (container) {
        return container.container_name;
      });
      cpuData.datasets[0].data = this.state.containers.map(function (container) {
        return container.cpu_usage;
      });
      cpuData.datasets[0].backgroundColor = backgroundColors;

      memoryData.labels = cpuData.labels;
      memoryData.datasets[0].data = this.state.containers.map(function (container) {
        return container.memory_usage;
      });
      memoryData.datasets[0].backgroundColor = backgroundColors;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: _ContainerMetricChartView.styles.flex_wrapper },
        _react2.default.createElement(
          'div',
          null,
          ' ',
          _react2.default.createElement(_reactChartjs.Pie, { options: cpuOption, data: cpuData })
        ),
        _react2.default.createElement(
          'div',
          null,
          ' ',
          _react2.default.createElement(_reactChartjs.Pie, { options: memoryOption, data: memoryData })
        )
      );
    }
  }]);

  return ContainerMetricChartView;
}(_react2.default.Component);

exports.default = ContainerMetricChartView;
});
___scope___.file("components/ContainerStats/ContainerMetricChartView.style.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = exports.styles = {
  flex_wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '100%'
  },

  pie_wrapper: {
    width: '85px',
    height: '85px'
  }
};
});
___scope___.file("components/ContainerStats/utils.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hexColorGenerator = exports.hexColorGenerator = function hexColorGenerator(length) {
  var hexColors = [];

  var i = 0;
  while (i++ <= length) {
    var generatedHex = Math.floor(Math.random() * 0xfffff * 1000000).toString(16);
    hexColors.push('#' + generatedHex.slice(0, 6));
  }

  return hexColors;
};
});
___scope___.file("components/ContainerStats/ContainerRLTStats.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainerRLTStat = function (_React$Component) {
  _inherits(ContainerRLTStat, _React$Component);

  function ContainerRLTStat(props) {
    _classCallCheck(this, ContainerRLTStat);

    var _this = _possibleConstructorReturn(this, (ContainerRLTStat.__proto__ || Object.getPrototypeOf(ContainerRLTStat)).call(this, props));

    _this.state = { selectedRefreshRate: 5 };
    var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    _this.data = {
      labels: labels,
      datasets: [{
        label: 'dataset 1',
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        borderColor: '#e84118',
        backgroundColor: '#c23616'
      }, {
        label: 'dataset 2',
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900].reverse(),
        borderColor: '#273c75',
        backgroundColor: '#192a56'
      }]
    };
    return _this;
  }

  _createClass(ContainerRLTStat, [{
    key: 'updateSelectedRefreshRate',
    value: function updateSelectedRefreshRate(e) {
      var newRefreshRate = parseInt(e.target.id);
      this.setState({ selectedRefreshRate: newRefreshRate });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container-RLT-stats' },
        _react2.default.createElement(
          'div',
          { className: 'panel panel-default' },
          _react2.default.createElement(
            'div',
            { className: 'panel-heading' },
            _react2.default.createElement(
              'h3',
              { className: 'panel-title' },
              'Parameters'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(
              'div',
              { className: 'btn-group' },
              _react2.default.createElement(
                'button',
                {
                  type: 'button',
                  className: 'btn btn-default dropdown-toggle',
                  'data-toggle': 'dropdown',
                  'aria-haspopup': 'true',
                  'aria-expanded': 'false'
                },
                'Refresh rate ',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  { onClick: this.updateSelectedRefreshRate.bind(this) },
                  _react2.default.createElement(
                    'a',
                    { id: '1', href: true },
                    '1s'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { onClick: this.updateSelectedRefreshRate.bind(this) },
                  _react2.default.createElement(
                    'a',
                    { id: '3', href: true },
                    '3s'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { onClick: this.updateSelectedRefreshRate.bind(this) },
                  _react2.default.createElement(
                    'a',
                    { id: '5', href: true },
                    '5s'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { onClick: this.updateSelectedRefreshRate.bind(this) },
                  _react2.default.createElement(
                    'a',
                    { id: '10', href: true },
                    '10s'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { onClick: this.updateSelectedRefreshRate.bind(this) },
                  _react2.default.createElement(
                    'a',
                    { id: '30', href: true },
                    '30s'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { onClick: this.updateSelectedRefreshRate.bind(this) },
                  _react2.default.createElement(
                    'a',
                    { id: '60', href: true },
                    '60s'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'span',
              { style: { marginLeft: '8px' } },
              this.state.selectedRefreshRate,
              ' s'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel panel-default' },
          _react2.default.createElement(
            'div',
            { className: 'panel-heading' },
            _react2.default.createElement(
              'h3',
              { className: 'panel-title' },
              'CPU usage'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(_reactChartjs.Line, { width: 5, height: 2, data: this.data })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel panel-default' },
          _react2.default.createElement(
            'div',
            { className: 'panel-heading' },
            _react2.default.createElement(
              'h3',
              { className: 'panel-title' },
              'Memory usage'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(_reactChartjs.Line, { width: 5, height: 2, data: this.data })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel panel-default' },
          _react2.default.createElement(
            'div',
            { className: 'panel-heading' },
            _react2.default.createElement(
              'h3',
              { className: 'panel-title' },
              'Network usage'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(_reactChartjs.Line, { width: 5, height: 2, data: this.data })
          )
        )
      );
    }
  }]);

  return ContainerRLTStat;
}(_react2.default.Component);

exports.default = ContainerRLTStat;
});
___scope___.file("app.css", function(exports, require, module, __filename, __dirname){

require("fuse-box-css")("app.css");
});
});

FuseBox.import("default/index.js");
FuseBox.main("default/index.js");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((d||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(d){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!d&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=h[a];if(!s){if(d&&"electron"!==g.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),v=i(c),p=s.f[v];return!p&&v.indexOf("*")>-1&&(l=v),p||l||(v=t(c,"/","index.js"),p=s.f[v],p||(v=c+".js",p=s.f[v]),p||(p=s.f[c+".jsx"]),p||(v=c+"/index.jsx",p=s.f[v])),{file:p,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:v}}function s(e,r,n){if(void 0===n&&(n={}),!d)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);g.dynamic(a,o),r(g.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=m[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=h[t.pkgName];if(u){var p={};for(var m in u.f)a.test(m)&&(p[m]=c(t.pkgName+"/"+m));return p}}if(!i){var g="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return g?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var w=i.locals={},y=n(t.validPath);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return c(e,{pkg:_,path:y,v:t.versions})},w.require.main={filename:d?"./":v.require.main.filename,paths:d?[]:v.require.main.paths};var j=[w.module.exports,w.require,w.module,t.validPath,y,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),w.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof window&&window.navigator,v=d?window:global;d&&(v.global=window),e=d&&"undefined"==typeof __fbx__dnm__?e:module.exports;var p=d?window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};d||(v.require=require);var h=p.p=p.p||{},m=p.e=p.e||{},g=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){m[e]=m[e]||[],m[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=h[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=h.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(h[e])return n(h[e].s);var t=h[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r}();return g.packages=h,g.isBrowser=d,g.isServer=!d,g.plugins=[],d||(v.FuseBox=g),e.FuseBox=g}(this))