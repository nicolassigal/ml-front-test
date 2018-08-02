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

var _cors = __webpack_require__(17);

var _cors2 = _interopRequireDefault(_cors);

var _axios = __webpack_require__(18);

var _axios2 = _interopRequireDefault(_axios);

var _utils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_ENDPOINT = 'http://localhost:3200/api';
var port = process.env.port || 5000;
var app = (0, _express2.default)();
var router = _express2.default.Router();
app.use(_express2.default.static('public'));

router.get('/', function (req, res) {
    var html = (0, _renderer2.default)(req, { searchQuery: '' }, 'Mercado Libre Argentina');
    res.send(html);
});

router.get('/items', function (req, res) {
    var query = req.query.q || '';
    _axios2.default.get(API_ENDPOINT + '/items?q=' + query).then(function (response) {
        response.data.searchQuery = query;
        var category = response.data.categories ? response.data.categories[0] : '';
        var categoryTitle = category ? '- ' + category + ' ' : '';
        var title = query + ' ' + categoryTitle + 'en Mercado Libre Argentina';
        var html = (0, _renderer2.default)(req, response.data, title);
        res.send(html);
    }).catch(function (err) {
        return console.log(err);
    });
});

router.get('/items/:id', function (req, res) {
    var id = req.params.id || '';
    _axios2.default.get(API_ENDPOINT + '/items/' + id).then(function (response) {
        response.data.searchQuery = '';
        var productTitle = response.data.item.title;
        var productPrice = response.data.item.price.amount;
        var currency = (0, _utils.getCurrencySymbol)(response.data.item.price.currency);
        var title = productTitle + ' - ' + currency + ' ' + productPrice + ' en Mercado Libre Argentina';
        var html = (0, _renderer2.default)(req, response.data, title);
        res.send(html);
    }).catch(function (err) {
        return console.log(err);
    });
});

router.get('*', function (req, res) {
    var data = { searchQuery: '' };
    var html = (0, _renderer2.default)(req, data, 'Mercado Libre Argentina - Dónde comprar y vender de todo');
    res.send(html);
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

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _server = __webpack_require__(5);

var _serializeJavascript = __webpack_require__(6);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _App = __webpack_require__(7);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, data, title) {
    var context = { data: data };
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.url, context: {} },
        _react2.default.createElement(_App2.default, data)
    ));
    return '\n    <html lang="es">\n        <head>\n            <title>' + title + '</title>\n            <link rel="stylesheet" type="text/css" href="/styles.css" />\n            <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />\n            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n        </head>\n        <body>\n            <div id="root">' + content + '</div>\n            <script>window.__INITIAL_DATA__ = ' + (0, _serializeJavascript2.default)(data) + '</script>\n            <script src="/bundle.js"></script>\n        </body>\n    </html>\n    ';
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _SearchBox = __webpack_require__(8);

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _routes = __webpack_require__(9);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SearchBox2.default, { searchQuery: props.searchQuery }),
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _routes2.default.map(function (_ref, i) {
                var path = _ref.path,
                    Comp = _ref.component,
                    exact = _ref.exact;

                if (Comp) {
                    return _react2.default.createElement(_reactRouterDom.Route, { key: i, path: path, exact: exact, render: function render() {
                            return _react2.default.createElement(Comp, props);
                        } });
                }
            })
        )
    );
};

exports.default = App;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchBox = function SearchBox(props) {
    return _react2.default.createElement(
        "div",
        { className: "search-box" },
        _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
                "div",
                { className: "row" },
                _react2.default.createElement(
                    "div",
                    { className: "ml-logo" },
                    _react2.default.createElement(
                        "a",
                        { href: "/" },
                        _react2.default.createElement("img", { src: "./../../assets/Logo_ML.png",
                            srcSet: "./../../assets/Logo_ML.png 1x, ./../../assets/Logo_ML@2x.png.png 2x",
                            alt: "mercado libre logo" })
                    )
                ),
                _react2.default.createElement(
                    "form",
                    { method: "GET", action: "/items", id: "searchBox", autoComplete: "off" },
                    _react2.default.createElement("input", { type: "text", placeholder: "Nunca dejes de buscar", name: "q", id: "q", defaultValue: props.searchQuery || '' }),
                    _react2.default.createElement(
                        "button",
                        { type: "submit" },
                        _react2.default.createElement("img", { src: "./../../assets/ic_Search.png",
                            srcSet: "./../../assets/ic_Search.png 1x, ./../../assets/ic_Search@2x.png.png 2x",
                            alt: "mercado libre logo" })
                    )
                )
            )
        )
    );
};

exports.default = SearchBox;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProductDetailPage = __webpack_require__(10);

var _ProductDetailPage2 = _interopRequireDefault(_ProductDetailPage);

var _ProductsListPage = __webpack_require__(13);

var _ProductsListPage2 = _interopRequireDefault(_ProductsListPage);

var _NotFoundPage = __webpack_require__(15);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _HomePage = __webpack_require__(16);

var _HomePage2 = _interopRequireDefault(_HomePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = [{
  path: '/',
  exact: true,
  component: _HomePage2.default
}, {
  path: '/items',
  component: _ProductsListPage2.default,
  exact: true
}, {
  path: '/items/:id',
  component: _ProductDetailPage2.default
}, {
  path: '*',
  exact: true,
  component: _NotFoundPage2.default
}];

exports.default = Routes;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _BreadCrumb = __webpack_require__(11);

var _BreadCrumb2 = _interopRequireDefault(_BreadCrumb);

var _utils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductsListPage = function ProductsListPage(props) {
    var view = null;

    var getSoldItems = function getSoldItems(sold_quantity, condition) {
        var condition_es = (0, _utils.getCondition)(condition);
        var sold_label = null;
        var condition_label = null;

        if (condition_es) {
            condition_label = _react2.default.createElement(
                'span',
                null,
                condition_es
            );
        }

        if (sold_quantity) {
            if (sold_quantity > 1) {
                sold_label = _react2.default.createElement(
                    'span',
                    null,
                    sold_quantity,
                    ' vendidos'
                );
            } else {
                sold_label = _react2.default.createElement(
                    'span',
                    null,
                    sold_quantity,
                    ' vendido'
                );
            }
        }
        return _react2.default.createElement(
            'div',
            { className: 'caption-info' },
            condition_label,
            sold_label
        );
    };
    var getAmount = function getAmount(price) {
        var currency = price.currency,
            amount = price.amount,
            decimals = price.decimals;

        var currency_symbol = (0, _utils.getCurrencySymbol)(currency);
        return _react2.default.createElement(
            'div',
            { className: 'caption-amount' },
            _react2.default.createElement(
                'span',
                null,
                currency_symbol,
                ' ',
                amount
            ),
            decimals ? _react2.default.createElement(
                'sup',
                null,
                decimals
            ) : null
        );
    };

    if (props) {
        var item = props.item,
            categories = props.categories;

        view = _react2.default.createElement(
            'div',
            { className: 'product-detail' },
            _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(_BreadCrumb2.default, { categories: categories })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'product-workspace product-detail__workspace' },
                        _react2.default.createElement(
                            'section',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'product-detail__image' },
                                _react2.default.createElement('img', { src: item.picture, alt: 'item picture' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'product-detail__caption' },
                                getSoldItems(item.sold_quantity, item.condition),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'caption-title' },
                                    item.title
                                ),
                                getAmount(item.price),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'caption-purchase' },
                                    _react2.default.createElement(
                                        'button',
                                        null,
                                        'Comprar'
                                    )
                                )
                            )
                        ),
                        item.description ? _react2.default.createElement(
                            'section',
                            { className: 'row' },
                            _react2.default.createElement(
                                'article',
                                { className: 'product-detail__description' },
                                _react2.default.createElement(
                                    'header',
                                    { className: 'description-title' },
                                    _react2.default.createElement(
                                        'h2',
                                        null,
                                        'Descripci\xF3n del producto'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'description-body' },
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        item.description.split('\n').map(function (line, key) {
                                            return _react2.default.createElement(
                                                'span',
                                                { key: key },
                                                line,
                                                _react2.default.createElement('br', null)
                                            );
                                        })
                                    )
                                )
                            )
                        ) : null
                    )
                )
            )
        );
    }

    return view;
};

exports.default = ProductsListPage;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreadCrumb = function BreadCrumb(props) {

    var getItems = function getItems() {
        var categories = props.categories;

        return categories.map(function (category, i) {
            if (i + 1 < categories.length) {
                return _react2.default.createElement(
                    "li",
                    { key: i },
                    _react2.default.createElement(
                        "span",
                        null,
                        category
                    ),
                    _react2.default.createElement(
                        "svg",
                        { width: "15", height: "15", viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg", className: "ui-icon ui-icon--chevron-right" },
                        _react2.default.createElement(
                            "g",
                            { fill: "#99999", fillRule: "evenodd" },
                            _react2.default.createElement("path", { d: "M6.646 5.354l4 4 .354.353.707-.707-.353-.354-4-4L7 4.293 6.293 5z" }),
                            _react2.default.createElement("path", { d: "M7.354 13.354l4-4L11.707 9 11 8.293l-.354.353-4 4-.353.354.707.707z" })
                        )
                    )
                );
            } else {
                return _react2.default.createElement(
                    "li",
                    { key: i },
                    _react2.default.createElement(
                        "span",
                        null,
                        category
                    )
                );
            }
        });
    };
    return _react2.default.createElement(
        "div",
        { className: "breadcrumb" },
        _react2.default.createElement(
            "ul",
            null,
            getItems()
        )
    );
};

exports.default = BreadCrumb;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCurrencySymbol = getCurrencySymbol;
exports.getCondition = getCondition;
function getCurrencySymbol(currency) {
    switch (currency) {
        case 'ARS':
            return '$';
        default:
            return '$';
    }
}

function getCondition(condition) {
    switch (condition) {
        case 'new':
            return 'Nuevo';
        case 'used':
            return 'Usado';
        default:
            return '';
    }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _BreadCrumb = __webpack_require__(11);

var _BreadCrumb2 = _interopRequireDefault(_BreadCrumb);

var _ProductRow = __webpack_require__(14);

var _ProductRow2 = _interopRequireDefault(_ProductRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductsListPage = function ProductsListPage(props) {
    var view = null;

    if (props) {
        var categories = props.categories,
            items = props.items;

        view = _react2.default.createElement(
            'div',
            { className: 'products-list' },
            _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(_BreadCrumb2.default, { categories: categories })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'product-workspace' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'products-list__items' },
                            items ? items.map(function (item) {
                                return _react2.default.createElement(_ProductRow2.default, { key: item.id, item: item });
                            }) : null
                        )
                    )
                )
            )
        );
    }

    return view;
};

exports.default = ProductsListPage;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductRow = function ProductRow(props) {
    var item = props.item;


    var checkShipping = function checkShipping() {
        if (item.free_shipping) {
            return _react2.default.createElement('img', { src: './../../assets/ic_shipping.png',
                srcSet: './../../assets/ic_shipping.png 1x, ./../../assets/ic_shipping@2x.png.png 2x',
                alt: 'shipping_logo' });
        } else {
            return null;
        }
    };

    var getDecimals = function getDecimals(price) {
        if (price.decimals) {
            return _react2.default.createElement(
                'sup',
                { className: 'price-decimal' },
                price.decimals
            );
        }
    };

    return _react2.default.createElement(
        'li',
        { className: 'product-row row' },
        _react2.default.createElement(
            'a',
            { className: 'product-thumbnail', href: '/items/' + item.id },
            _react2.default.createElement('img', { src: item.picture, alt: item.title })
        ),
        _react2.default.createElement(
            'div',
            { className: 'product-info' },
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'product-info__title' },
                    _react2.default.createElement(
                        'span',
                        null,
                        ' ',
                        (0, _utils.getCurrencySymbol)(item.price.currency),
                        ' ',
                        item.price.amount
                    ),
                    getDecimals(item.price),
                    checkShipping()
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'product-info__state' },
                    _react2.default.createElement(
                        'span',
                        null,
                        item.state
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'product-info__description' },
                    _react2.default.createElement(
                        'a',
                        { href: '/items/' + item.id },
                        item.title
                    )
                )
            )
        )
    );
};

exports.default = ProductRow;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage() {
    return _react2.default.createElement(
        "div",
        { className: "not-found" },
        _react2.default.createElement(
            "h2",
            null,
            " Parece que esta p\xE1gina no existe"
        ),
        _react2.default.createElement(
            "a",
            { href: "/" },
            " Ir a la p\xE1gina principal "
        )
    );
};

exports.default = NotFoundPage;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage(props) {
    return _react2.default.createElement('div', null);
};

exports.default = HomePage;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map