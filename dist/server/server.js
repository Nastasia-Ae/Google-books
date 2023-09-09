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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store.ts\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar BooksList_1 = __webpack_require__(/*! ./shared/BooksList */ \"./src/shared/BooksList/index.ts\");\nvar Book_1 = __webpack_require__(/*! ./shared/BooksList/Book */ \"./src/shared/BooksList/Book/index.ts\");\nvar store = (0, redux_1.legacy_createStore)(store_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)()));\nfunction AppComponent() {\n    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];\n    (0, react_1.useEffect)(function () {\n        setMounted(true);\n    }, []);\n    var NoMatch = function () {\n        return react_1.default.createElement(\"p\", { style: { textAlign: 'center', marginBottom: '20px' } }, \"\\u00AB404 \\u2014 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\\u00BB \");\n    };\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\n        react_1.default.createElement(Layout_1.Layout, null,\n            react_1.default.createElement(Header_1.Header, null),\n            react_1.default.createElement(Content_1.Content, null,\n                react_1.default.createElement(BooksList_1.BooksList, null)),\n            react_1.default.createElement(react_router_dom_1.Routes, null,\n                react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(Layout_1.Layout, null) },\n                    react_1.default.createElement(react_router_dom_1.Route, { path: 'books/:id', element: react_1.default.createElement(Book_1.Book, null) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"books\", element: react_1.default.createElement(BooksList_1.BooksList, null) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"*\", element: react_1.default.createElement(NoMatch, null) }))))))));\n}\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useBooksData.tsx":
/*!************************************!*\
  !*** ./src/hooks/useBooksData.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useBooksData = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar store_1 = __webpack_require__(/*! ../store */ \"./src/store.ts\");\nfunction useBooksData() {\n    var dataBooksList = (0, react_redux_1.useSelector)(function (state) { return state.dataBooks; });\n    var indexBook = (0, react_redux_1.useSelector)(function (state) { return state.indexBook; });\n    var maxResult = (0, react_redux_1.useSelector)(function (state) { return state.maxResultStepBook; });\n    var search = (0, react_redux_1.useSelector)(function (state) { return state.search; });\n    var valueSorting = (0, react_redux_1.useSelector)(function (state) { return state.valueSorting; });\n    var clicked = (0, react_redux_1.useSelector)(function (state) { return state.clickedSearch; });\n    var valueCategories = (0, react_redux_1.useSelector)(function (state) { return state.valueCategories; });\n    var dispatch = (0, react_redux_1.useDispatch)();\n    (0, react_1.useEffect)(function () {\n        function load() {\n            return __awaiter(this, void 0, void 0, function () {\n                var data, result, error_1;\n                return __generator(this, function (_a) {\n                    switch (_a.label) {\n                        case 0:\n                            dispatch((0, store_1.stateLoading)(true));\n                            dispatch((0, store_1.errorLoading)(''));\n                            _a.label = 1;\n                        case 1:\n                            _a.trys.push([1, 3, , 4]);\n                            return [4 /*yield*/, axios_1.default.get(\"https://www.googleapis.com/books/v1/volumes?q=\".concat(search, \"+subject:\").concat(valueCategories, \"&orderBy=\").concat(valueSorting, \"&maxResults=\").concat(maxResult, \"&startIndex=\").concat(indexBook, \"&key=AIzaSyA5U8NzExxy_oJQL8G6gZlyUiJR2dlHJiw\"), {})];\n                        case 2:\n                            data = _a.sent();\n                            result = dataBooksList.concat(data.data.items);\n                            dispatch((0, store_1.dataBooks)(result));\n                            dispatch((0, store_1.totalItems)(data.data.totalItems));\n                            dispatch((0, store_1.updateBookListShow)(true));\n                            return [3 /*break*/, 4];\n                        case 3:\n                            error_1 = _a.sent();\n                            dispatch((0, store_1.errorLoading)(String(error_1)));\n                            return [3 /*break*/, 4];\n                        case 4:\n                            dispatch((0, store_1.stateLoading)(false));\n                            dispatch((0, store_1.clickedSearch)(false));\n                            return [2 /*return*/];\n                    }\n                });\n            });\n        }\n        load();\n    }, [clicked, indexBook, valueSorting, valueCategories]);\n    return [dataBooksList];\n}\nexports.useBooksData = useBooksData;\n\n\n//# sourceURL=webpack:///./src/hooks/useBooksData.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {};\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nvar indexTemplate = function () { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Google Books</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\".concat(App_1.App, \"</div>\\n  <div id=\\\"modal_root\\\"> </div>\\n</body>\\n\\n</html>\\n\"); };\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar app = (0, express_1.default)();\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\napp.get(\"*\", function (req, res) {\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\n});\napp.listen(3000, function () {\n    console.log(\"server started on port http://localhost:3000\");\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/BooksList/Book/Book.tsx":
/*!********************************************!*\
  !*** ./src/shared/BooksList/Book/Book.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Book = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar react_router_dom_2 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar icons_1 = __webpack_require__(/*! ../../icons */ \"./src/shared/icons/index.ts\");\nvar book_css_1 = __importDefault(__webpack_require__(/*! ./book.css */ \"./src/shared/BooksList/Book/book.css\"));\nfunction Book(_a) {\n    var item = _a.item;\n    var _b = (0, react_1.useState)(false), showDetail = _b[0], setshowDetail = _b[1];\n    var navigate = (0, react_router_dom_2.useNavigate)();\n    var node = document.querySelector('#modal_root');\n    if (!node)\n        return null;\n    var idDetail = \"_detail\";\n    var categoriesAll = item.volumeInfo.categories || '';\n    var image = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail || '';\n    var categories = item.volumeInfo.categories || '';\n    var title = item.volumeInfo.title || '';\n    var authors = item.volumeInfo.authors || '';\n    var description = item.volumeInfo.description;\n    if (categories.length > 1) {\n        categories = categoriesAll[0];\n    }\n    ;\n    (0, react_1.useEffect)(function () {\n        if (showDetail === true) {\n            navigate(\"/books/\".concat(item.id));\n        }\n    }, [showDetail]);\n    return (react_1.default.createElement(\"li\", { className: book_css_1.default.book },\n        react_1.default.createElement(\"div\", { id: item.id, onClick: function () { setshowDetail(true); } },\n            react_1.default.createElement(\"img\", { src: image, alt: \"\", className: book_css_1.default.img }),\n            react_1.default.createElement(\"div\", { className: book_css_1.default.categories }, categories),\n            react_1.default.createElement(\"h3\", { className: book_css_1.default.title },\n                title,\n                \" \"),\n            react_1.default.createElement(\"p\", { className: book_css_1.default.authors },\n                authors,\n                \" \")),\n        react_dom_1.default.createPortal(showDetail && (react_1.default.createElement(react_router_dom_1.Link, { to: \"/books/\".concat(item.id), className: book_css_1.default.detail, id: item.id + idDetail },\n            react_1.default.createElement(\"button\", { className: book_css_1.default.close, onClick: function () {\n                    setshowDetail(false);\n                    navigate(-1);\n                } },\n                react_1.default.createElement(icons_1.CloseIcon, null)),\n            react_1.default.createElement(\"div\", { className: book_css_1.default.detail_group },\n                react_1.default.createElement(\"img\", { src: image, alt: \"\", className: book_css_1.default.img_detail }),\n                react_1.default.createElement(\"div\", { className: book_css_1.default.categories },\n                    categoriesAll,\n                    \" \"),\n                react_1.default.createElement(\"h3\", { className: book_css_1.default.title },\n                    title,\n                    \" \"),\n                react_1.default.createElement(\"p\", { className: book_css_1.default.authors },\n                    authors,\n                    \" \")),\n            react_1.default.createElement(\"p\", { className: book_css_1.default.description },\n                description,\n                \" \"))), node)));\n}\nexports.Book = Book;\n\n\n//# sourceURL=webpack:///./src/shared/BooksList/Book/Book.tsx?");

/***/ }),

/***/ "./src/shared/BooksList/Book/book.css":
/*!********************************************!*\
  !*** ./src/shared/BooksList/Book/book.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"book\": \"book__book--16mrG\",\n\t\"img\": \"book__img--1UGdF\",\n\t\"title\": \"book__title--1buKH\",\n\t\"categories\": \"book__categories--1BrxX\",\n\t\"authors\": \"book__authors--2KSZ6\",\n\t\"detail\": \"book__detail--3PxBi\",\n\t\"close\": \"book__close--22oTG\",\n\t\"detail_group\": \"book__detail_group--1cnVE\",\n\t\"img_detail\": \"book__img_detail--5H8vv\",\n\t\"detail_info\": \"book__detail_info--2t0gO\",\n\t\"description\": \"book__description--ZP0Z8\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/BooksList/Book/book.css?");

/***/ }),

/***/ "./src/shared/BooksList/Book/index.ts":
/*!********************************************!*\
  !*** ./src/shared/BooksList/Book/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Book */ \"./src/shared/BooksList/Book/Book.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/BooksList/Book/index.ts?");

/***/ }),

/***/ "./src/shared/BooksList/BooksList.tsx":
/*!********************************************!*\
  !*** ./src/shared/BooksList/BooksList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BooksList = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar store_1 = __webpack_require__(/*! ../../store */ \"./src/store.ts\");\nvar Book_1 = __webpack_require__(/*! ./Book/Book */ \"./src/shared/BooksList/Book/Book.tsx\");\nvar bookslist_css_1 = __importDefault(__webpack_require__(/*! ./bookslist.css */ \"./src/shared/BooksList/bookslist.css\"));\nfunction BooksList() {\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.loading; });\n    var indexBook = (0, react_redux_1.useSelector)(function (state) { return state.indexBook; });\n    var maxResult = (0, react_redux_1.useSelector)(function (state) { return state.maxResultStepBook; });\n    var bookСounter = (0, react_redux_1.useSelector)(function (state) { return state.totalItems; });\n    var errorloading = (0, react_redux_1.useSelector)(function (state) { return state.errorloading; });\n    var bookListShow = (0, react_redux_1.useSelector)(function (state) { return state.bookListShow; });\n    var dispatch = (0, react_redux_1.useDispatch)();\n    var navigate = (0, react_router_dom_1.useNavigate)();\n    var dataBook = (0, react_redux_1.useSelector)(function (state) { return state.dataBooks; });\n    (0, react_1.useEffect)(function () {\n        if (bookListShow === true) {\n            navigate('/books');\n        }\n    }, [bookListShow]);\n    function onClick() {\n        dispatch((0, store_1.clickedButtonLoading)(true));\n        dispatch((0, store_1.updateIndexBook)(indexBook + maxResult));\n    }\n    ;\n    return (react_1.default.createElement(\"div\", { className: bookslist_css_1.default.bookList_block },\n        bookListShow && (react_1.default.createElement(react_router_dom_1.Link, { to: '/books' },\n            react_1.default.createElement(\"div\", { className: bookslist_css_1.default.bookСounter },\n                \"\\u041D\\u0430\\u0439\\u0434\\u0435\\u043D\\u043E \",\n                bookСounter,\n                \" \"),\n            react_1.default.createElement(\"ul\", { className: bookslist_css_1.default.list }, dataBook.map(function (item) {\n                return react_1.default.createElement(Book_1.Book, { key: item.id, item: item });\n            })),\n            react_1.default.createElement(\"button\", { className: bookslist_css_1.default.button, onClick: onClick }, \"Load more\"))),\n        loading && (react_1.default.createElement(\"div\", { className: bookslist_css_1.default.loader }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")),\n        errorloading && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, errorloading))));\n}\nexports.BooksList = BooksList;\n\n\n//# sourceURL=webpack:///./src/shared/BooksList/BooksList.tsx?");

/***/ }),

/***/ "./src/shared/BooksList/bookslist.css":
/*!********************************************!*\
  !*** ./src/shared/BooksList/bookslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"bookList_block\": \"bookslist__bookList_block--28Ycv\",\n\t\"list\": \"bookslist__list--3SAxo\",\n\t\"button\": \"bookslist__button--2xVro\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/BooksList/bookslist.css?");

/***/ }),

/***/ "./src/shared/BooksList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/BooksList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./BooksList */ \"./src/shared/BooksList/BooksList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/BooksList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\nfunction Content(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children));\n}\nexports.Content = Content;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar store_1 = __webpack_require__(/*! ../../store */ \"./src/store.ts\");\nvar preventDefault_1 = __webpack_require__(/*! ../../utils/preventDefault */ \"./src/utils/preventDefault.tsx\");\nvar icons_1 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\nfunction Header() {\n    var search = (0, react_redux_1.useSelector)(function (state) { return state.search; });\n    var dispatch = (0, react_redux_1.useDispatch)();\n    function handleChange(ev) {\n        dispatch((0, store_1.searchBooks)(ev.target.value));\n    }\n    ;\n    function handleSubmit(ev) {\n        if (ev.key === \"Enter\") {\n            ev.preventDefault();\n            dispatch((0, store_1.dataBooks)([]));\n            dispatch((0, store_1.updateIndexBook)(0));\n            dispatch((0, store_1.clickedSearch)(true));\n        }\n    }\n    ;\n    function onClick() {\n        dispatch((0, store_1.dataBooks)([]));\n        dispatch((0, store_1.updateIndexBook)(0));\n        dispatch((0, store_1.clickedSearch)(true));\n    }\n    ;\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\n        react_1.default.createElement(\"h1\", { className: header_css_1.default.header_search }, \"Search for books\"),\n        react_1.default.createElement(\"div\", null,\n            react_1.default.createElement(\"input\", { type: \"text\", className: header_css_1.default.input, placeholder: '\\u041D\\u0430\\u0447\\u043D\\u0438\\u0442\\u0435 \\u043F\\u043E\\u0438\\u0441\\u043A', value: search, onChange: handleChange, onKeyUp: (handleSubmit) }),\n            react_1.default.createElement(\"button\", { className: header_css_1.default.button, onClick: (0, preventDefault_1.preventDefault)(onClick) },\n                react_1.default.createElement(icons_1.SearchIcon, null))),\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SortBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar store_1 = __webpack_require__(/*! ../../../store */ \"./src/store.ts\");\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\nfunction SortBlock() {\n    var valueSorting = (0, react_redux_1.useSelector)(function (state) { return state.valueSorting; });\n    var valueCategories = (0, react_redux_1.useSelector)(function (state) { return state.valueCategories; });\n    var dispatch = (0, react_redux_1.useDispatch)();\n    function changeSelectCategories(ev) {\n        dispatch((0, store_1.updateBookListShow)(false));\n        dispatch((0, store_1.dataBooks)([]));\n        dispatch((0, store_1.updateIndexBook)(0));\n        dispatch((0, store_1.valueCategoriesUpdate)(ev.target.value));\n    }\n    function changeSelectSorting(ev) {\n        dispatch((0, store_1.updateBookListShow)(false));\n        dispatch((0, store_1.dataBooks)([]));\n        dispatch((0, store_1.updateIndexBook)(0));\n        dispatch((0, store_1.valueSortingUpdate)(ev.target.value));\n    }\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default.selectList },\n        react_1.default.createElement(\"select\", { className: sortblock_css_1.default.select, value: valueCategories, required: true, name: \"\", id: \"\", onChange: changeSelectCategories },\n            react_1.default.createElement(\"optgroup\", { label: \"Categories\" }),\n            react_1.default.createElement(\"option\", { value: \"\" }, \"All\"),\n            react_1.default.createElement(\"option\", { value: \"art\" }, \"art\"),\n            react_1.default.createElement(\"option\", { value: \"biography\\u0442\" }, \"biography\"),\n            react_1.default.createElement(\"option\", { value: \"computers\" }, \"computers\"),\n            react_1.default.createElement(\"option\", { value: \"history\" }, \"history\"),\n            react_1.default.createElement(\"option\", { value: \"medical\" }, \"medical\"),\n            react_1.default.createElement(\"option\", { value: \"poetry\" }, \"poetry\")),\n        react_1.default.createElement(\"select\", { className: sortblock_css_1.default.select, value: valueSorting, required: true, name: \"\", id: \"\", onChange: changeSelectSorting },\n            react_1.default.createElement(\"optgroup\", { label: \"Sorting by\" }),\n            react_1.default.createElement(\"option\", { value: \"relevance\" }, \"relevance\"),\n            react_1.default.createElement(\"option\", { value: \"newest\" }, \"newest\"))));\n}\nexports.SortBlock = SortBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"select\": \"sortblock__select--23fnO\",\n\t\"sortBlock\": \"sortblock__sortBlock--141aZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\",\n\t\"header_search\": \"header__header_search--3Cz48\",\n\t\"input\": \"header__input--CDnna\",\n\t\"button\": \"header__button--5AAmb\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar useBooksData_1 = __webpack_require__(/*! ../../hooks/useBooksData */ \"./src/hooks/useBooksData.tsx\");\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\nfunction Layout(_a) {\n    var children = _a.children;\n    var databook = (0, useBooksData_1.useBooksData)();\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\n}\nexports.Layout = Layout;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/icons/CloseIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/CloseIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CloseIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction CloseIcon() {\n    return (react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", viewBox: \"0 0 50 50\", width: \"30px\", height: \"30px\" },\n        react_1.default.createElement(\"path\", { d: \"M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z\" })));\n}\nexports.CloseIcon = CloseIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/CloseIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/SearchIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/icons/SearchIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SearchIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction SearchIcon() {\n    return (react_1.default.createElement(\"svg\", { version: \"1.1\", id: \"Capa_1\", xmlns: \"http://www.w3.org/2000/svg\", x: \"0px\", y: \"0px\", width: \"16px\", height: \"16px\", viewBox: \"0 0 485.213 485.213\", enableBackground: \"new 0 0 485.213 485.213;\" },\n        react_1.default.createElement(\"g\", null,\n            react_1.default.createElement(\"g\", null,\n                react_1.default.createElement(\"path\", { d: \"M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324\\n\\t\\t\\tc17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z\" }),\n                react_1.default.createElement(\"path\", { d: \"M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951\\n\\t\\t\\tC282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46\\n\\t\\t\\tc0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465\\n\\t\\t\\tC318.424,257.208,257.206,318.416,181.956,318.416z\" }),\n                react_1.default.createElement(\"path\", { d: \"M75.817,181.955h30.322c0-41.803,34.014-75.814,75.816-75.814V75.816C123.438,75.816,75.817,123.437,75.817,181.955z\" }))),\n        react_1.default.createElement(\"g\", null),\n        react_1.default.createElement(\"g\", null),\n        react_1.default.createElement(\"g\", null),\n        react_1.default.createElement(\"g\", null),\n        react_1.default.createElement(\"g\", null),\n        react_1.default.createElement(\"g\", null),\n        react_1.default.createElement(\"g\", null),\n        react_1.default.createElement(\"g\", null),\n        react_1.default.createElement(\"g\", null),\n        react_1.default.createElement(\"g\", null),\n        react_1.default.createElement(\"g\", null),\n        react_1.default.createElement(\"g\", null),\n        react_1.default.createElement(\"g\", null),\n        react_1.default.createElement(\"g\", null),\n        react_1.default.createElement(\"g\", null)));\n}\nexports.SearchIcon = SearchIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/SearchIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SearchIcon */ \"./src/shared/icons/SearchIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./CloseIcon */ \"./src/shared/icons/CloseIcon.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/icons/index.ts?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.rootReducer = exports.updateBookDetailShow = exports.updateBookListShow = exports.updateStepBook = exports.updateIndexBook = exports.valueSortingUpdate = exports.valueCategoriesUpdate = exports.clickedSearch = exports.totalItems = exports.dataBooks = exports.searchBooks = exports.clickedButtonLoading = exports.buttonLoading = exports.errorLoading = exports.stateLoading = void 0;\nvar initialState = {\n    loading: false,\n    errorloading: '',\n    buttonLoading: false,\n    clicked: false,\n    search: \"\",\n    dataBooks: [],\n    totalItems: 0,\n    clickedSearch: false,\n    valueCategories: '',\n    valueSorting: \"relevance\",\n    maxResultStepBook: 30,\n    indexBook: 0,\n    bookListShow: false,\n    showDetail: false\n};\nvar STATE_LOADING = 'STATE_LOADING';\nvar stateLoading = function (loading) { return ({\n    type: STATE_LOADING,\n    loading: loading\n}); };\nexports.stateLoading = stateLoading;\nvar ERROR_LOADING = 'ERROR_LOADING';\nvar errorLoading = function (errorloading) { return ({\n    type: ERROR_LOADING,\n    errorloading: errorloading\n}); };\nexports.errorLoading = errorLoading;\nvar BUTTON_LOADING = 'BUTTON_LOADING';\nvar buttonLoading = function (buttonLoading) { return ({\n    type: BUTTON_LOADING,\n    buttonLoading: buttonLoading\n}); };\nexports.buttonLoading = buttonLoading;\nvar CLICKED_BUTTON_LOADING = 'CLICKED_BUTTON_LOADING';\nvar clickedButtonLoading = function (clicked) { return ({\n    type: CLICKED_BUTTON_LOADING,\n    clicked: clicked\n}); };\nexports.clickedButtonLoading = clickedButtonLoading;\nvar SEARCH_BOOK = 'SEARCH_BOOK';\nvar searchBooks = function (search) { return ({\n    type: SEARCH_BOOK,\n    search: search\n}); };\nexports.searchBooks = searchBooks;\nvar DATA_BOOKS = 'DATA_BOOKS';\nvar dataBooks = function (dataBooks) { return ({\n    type: DATA_BOOKS,\n    dataBooks: dataBooks\n}); };\nexports.dataBooks = dataBooks;\nvar TOTAL_ITEMS = 'TOTAL_ITEMS';\nvar totalItems = function (totalItems) { return ({\n    type: TOTAL_ITEMS,\n    totalItems: totalItems\n}); };\nexports.totalItems = totalItems;\nvar CLICKED_SEARCH = 'CLICKED_SEARCH';\nvar clickedSearch = function (clickedSearch) { return ({\n    type: CLICKED_SEARCH,\n    clickedSearch: clickedSearch\n}); };\nexports.clickedSearch = clickedSearch;\nvar VALUE_CATEGORIES = 'VALUE_CATEGORIES';\nvar valueCategoriesUpdate = function (valueCategories) { return ({\n    type: VALUE_CATEGORIES,\n    valueCategories: valueCategories\n}); };\nexports.valueCategoriesUpdate = valueCategoriesUpdate;\nvar VALUE_SORTING = 'VALUE_SORTING';\nvar valueSortingUpdate = function (valueSorting) { return ({\n    type: VALUE_SORTING,\n    valueSorting: valueSorting\n}); };\nexports.valueSortingUpdate = valueSortingUpdate;\nvar INDEX_BOOK = 'INDEX_BOOK';\nvar updateIndexBook = function (indexBook) { return ({\n    type: INDEX_BOOK,\n    indexBook: indexBook\n}); };\nexports.updateIndexBook = updateIndexBook;\nvar MAX_STEP_RESULT_BOOK = 'MAX_STEP_RESULT_BOOK';\nvar updateStepBook = function (maxResultStepBook) { return ({\n    type: MAX_STEP_RESULT_BOOK,\n    maxResultStepBook: maxResultStepBook\n}); };\nexports.updateStepBook = updateStepBook;\nvar BOOK_LIST_SHOW = 'BOOK_LIST_SHOW';\nvar updateBookListShow = function (bookListShow) { return ({\n    type: BOOK_LIST_SHOW,\n    bookListShow: bookListShow\n}); };\nexports.updateBookListShow = updateBookListShow;\nvar BOOK_SHOW_DETAIL = 'BOOK_SHOW_DETAIL';\nvar updateBookDetailShow = function (showDetail) { return ({\n    type: BOOK_SHOW_DETAIL,\n    showDetail: showDetail\n}); };\nexports.updateBookDetailShow = updateBookDetailShow;\nvar rootReducer = function (state, action) {\n    if (state === void 0) { state = initialState; }\n    switch (action.type) {\n        case STATE_LOADING:\n            return __assign(__assign({}, state), { loading: action.loading });\n        case ERROR_LOADING:\n            return __assign(__assign({}, state), { errorloading: action.errorloading });\n        case BUTTON_LOADING:\n            return __assign(__assign({}, state), { buttonLoading: action.buttonLoading });\n        case CLICKED_BUTTON_LOADING:\n            return __assign(__assign({}, state), { clicked: action.clicked });\n        case SEARCH_BOOK:\n            return __assign(__assign({}, state), { search: action.search });\n        case DATA_BOOKS:\n            return __assign(__assign({}, state), { dataBooks: action.dataBooks });\n        case TOTAL_ITEMS:\n            return __assign(__assign({}, state), { totalItems: action.totalItems });\n        case CLICKED_SEARCH:\n            return __assign(__assign({}, state), { clickedSearch: action.clickedSearch });\n        case VALUE_CATEGORIES:\n            return __assign(__assign({}, state), { valueCategories: action.valueCategories });\n        case VALUE_SORTING:\n            return __assign(__assign({}, state), { valueSorting: action.valueSorting });\n        case INDEX_BOOK:\n            return __assign(__assign({}, state), { indexBook: action.indexBook });\n        case MAX_STEP_RESULT_BOOK:\n            return __assign(__assign({}, state), { maxResultStepBook: action.maxResultStepBook });\n        case BOOK_LIST_SHOW:\n            return __assign(__assign({}, state), { bookListShow: action.bookListShow });\n        case BOOK_SHOW_DETAIL:\n            return __assign(__assign({}, state), { showDetail: action.showDetail });\n        default:\n            return state;\n    }\n};\nexports.rootReducer = rootReducer;\n\n\n//# sourceURL=webpack:///./src/store.ts?");

/***/ }),

/***/ "./src/utils/preventDefault.tsx":
/*!**************************************!*\
  !*** ./src/utils/preventDefault.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.preventDefault = void 0;\nfunction preventDefault(fn) {\n    return function (e) {\n        e.preventDefault();\n        fn(e);\n    };\n}\nexports.preventDefault = preventDefault;\n\n\n//# sourceURL=webpack:///./src/utils/preventDefault.tsx?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ })

/******/ });