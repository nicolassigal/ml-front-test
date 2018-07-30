/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _renderer = __webpack_require__(3);

var _renderer2 = _interopRequireDefault(_renderer);

var _path = __webpack_require__(15);

var _path2 = _interopRequireDefault(_path);

var _cors = __webpack_require__(16);

var _cors2 = _interopRequireDefault(_cors);

var _axios = __webpack_require__(12);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_ENDPOINT = 'http://localhost:3200/api';
var port = process.env.port || 3000;
var app = (0, _express2.default)();
var router = _express2.default.Router();
app.use(_express2.default.static('public'));

router.get('/', function (req, res) {
    console.log('URL', req.url);
    var html = (0, _renderer2.default)(req, {});
    res.send(html);
});

router.get('/items', function (req, res) {
    console.log('URL', req.url);
    var query = req.query.q || '';
    _axios2.default.get(API_ENDPOINT + '/items?q=' + query).then(function (response) {
        var html = (0, _renderer2.default)(req, response.data);
        res.send(html);
    }).catch(function (err) {
        return console.log(err);
    });
});

router.get('/items/:id', function (req, res) {
    console.log('URL', req.url);
    var id = req.params.id || '';
    _axios2.default.get(API_ENDPOINT + '/items/' + id).then(function (response) {
        var html = (0, _renderer2.default)(req, response.data);
        res.send(html);
    }).catch(function (err) {
        return console.log(err);
    });
});

app.use((0, _cors2.default)());
app.use('/', router);
app.listen(port, function () {
    return console.log('RENDER server is listening on port: ' + port);
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _serializeJavascript = __webpack_require__(4);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _server = __webpack_require__(6);

var _reactRouterConfig = __webpack_require__(7);

var _routes = __webpack_require__(8);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, data) {
    var context = { data: data };
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { path: req.url, context: context },
        _react2.default.createElement(
            'div',
            null,
            (0, _reactRouterConfig.renderRoutes)(_routes2.default)
        )
    ));
    return '\n    <html>\n        <head></head>\n        <body>\n            <div id="root">' + content + '</div>\n            <script>window.__INITIAL_DATA__ = ' + (0, _serializeJavascript2.default)(data) + '</script>\n            <script src="/bundle.js"></script>\n        </body>\n    </html>\n    ';
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _HomePage = __webpack_require__(9);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _ProductDetailPage = __webpack_require__(10);

var _ProductDetailPage2 = _interopRequireDefault(_ProductDetailPage);

var _ProductsListPage = __webpack_require__(11);

var _ProductsListPage2 = _interopRequireDefault(_ProductsListPage);

var _axios = __webpack_require__(12);

var _axios2 = _interopRequireDefault(_axios);

var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
    routes: [{
        path: '/',
        component: _HomePage2.default,
        exact: true
    }, {
        path: '/items',
        component: _ProductsListPage2.default,
        exact: true
    }, {
        path: '/items/:id',
        component: _ProductDetailPage2.default
    }]
})];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
    _inherits(HomePage, _Component);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
    }

    _createClass(HomePage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    'Home Page'
                )
            );
        }
    }]);

    return HomePage;
}(_react.Component);

exports.default = HomePage;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductDetailPage = function (_Component) {
    _inherits(ProductDetailPage, _Component);

    function ProductDetailPage(props) {
        _classCallCheck(this, ProductDetailPage);

        return _possibleConstructorReturn(this, (ProductDetailPage.__proto__ || Object.getPrototypeOf(ProductDetailPage)).call(this, props));
    }

    _createClass(ProductDetailPage, [{
        key: 'componentDidMount',
        value: function componentDidMount(props) {
            if (window && window.__INITIAL_DATA__) {
                this.setState(window.__INITIAL_DATA__);
            } else {
                this.setState.apply(this, _toConsumableArray(props.staticContext.data));
            }
            console.log(this.state);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    'Products Detail Page'
                )
            );
        }
    }]);

    return ProductDetailPage;
}(_react.Component);

exports.default = ProductDetailPage;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductsListPage = function (_Component) {
    _inherits(ProductsListPage, _Component);

    function ProductsListPage(props) {
        _classCallCheck(this, ProductsListPage);

        var _this = _possibleConstructorReturn(this, (ProductsListPage.__proto__ || Object.getPrototypeOf(ProductsListPage)).call(this, props));

        var data = void 0;
        if (window && window.__INITIAL_DATA__) {
            data = window.__INITIAL_DATA__;
            delete window.__INITIAL_DATA__;
        } else {
            data = props.staticContext.data;
        }

        _this.state = {
            data: data
        };

        _this.getProductList = _this.getProductList.bind(_this);
        return _this;
    }

    _createClass(ProductsListPage, [{
        key: 'getProductList',
        value: function getProductList() {
            //const { items } = this.state;
            //return items.map(item => <li key={item.id}><a href={`/items/${item.id}`}>{item.title}</a></li>);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    'Products List Page'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    this.getProductList()
                )
            );
        }
    }]);

    return ProductsListPage;
}(_react.Component);

exports.default = ProductsListPage;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _SearchBox = __webpack_require__(14);

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _reactRouterConfig = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    console.log('route', route.routes);
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SearchBox2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

exports.default = {
    component: App
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(5);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBox = function (_Component) {
    _inherits(SearchBox, _Component);

    function SearchBox(props) {
        _classCallCheck(this, SearchBox);

        var _this = _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call(this, props));

        _this.state = { searchQuery: '' };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(SearchBox, [{
        key: 'handleSubmit',
        value: function handleSubmit(evt) {
            evt.preventDefault();
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/items?q=' + this.state.searchQuery });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(evt) {
            this.setState({ searchQuery: evt.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    _react2.default.createElement('input', { type: 'text', value: this.state.searchQuery, onChange: this.handleChange }),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit' },
                        'Search'
                    )
                )
            );
        }
    }]);

    return SearchBox;
}(_react.Component);

exports.default = SearchBox;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ })
/******/ ]);