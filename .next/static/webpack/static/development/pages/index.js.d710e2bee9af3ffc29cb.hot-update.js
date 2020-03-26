webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: getStores, StoreProvider, useMobxStores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStores", function() { return getStores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreProvider", function() { return StoreProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMobxStores", function() { return useMobxStores; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _courseStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courseStore */ "./store/courseStore.js");
var _jsxFileName = "C:\\Users\\hp\\Desktop\\workspace\\React\\philonist-admin\\store\\store.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var isServer = false; // useStaticRendering(isServer);

var store;
function getStores() {
  var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    courseStore: {}
  };

  if (isServer) {
    return {
      courseStore: new _courseStore__WEBPACK_IMPORTED_MODULE_2__["default"](initialData.courseStore)
    };
  }

  if (!store) {
    store = {
      courseStore: new _courseStore__WEBPACK_IMPORTED_MODULE_2__["default"](initialData.courseStore)
    };
  }

  return store;
}
var StoreContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
function StoreProvider(props) {
  return __jsx(StoreContext.Provider, {
    value: props.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 12
    }
  }, props.children);
}
function useMobxStores() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StoreContext);
}

/***/ })

})
//# sourceMappingURL=index.js.d710e2bee9af3ffc29cb.hot-update.js.map