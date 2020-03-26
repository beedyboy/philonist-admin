webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js":
false,

/***/ "./store/courseStore.js":
/*!******************************!*\
  !*** ./store/courseStore.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");





var CourseStore = /*#__PURE__*/function () {
  function CourseStore() {
    var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CourseStore);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "modules", null);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "courses", null);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "likesCount", 32);

    this.courses = initialData.courses;
    this.modules = initialData.modules; // this.likesCount = initialData.likesCount;

    console.log('likes', this.likesCount);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CourseStore, [{
    key: "setCount",
    value: function setCount() {
      this.likesCount += 1;
      console.log('new', this.likesCount);
    }
  }, {
    key: "__data",
    value: function __data() {
      console.log('data', this.likesCount);
      return {
        courses: this.courses,
        modules: this.modules,
        likesCount: this.likesCount
      };
    }
  }]);

  return CourseStore;
}();

Object(mobx__WEBPACK_IMPORTED_MODULE_3__["decorate"])(CourseStore, {
  modules: mobx__WEBPACK_IMPORTED_MODULE_3__["observable"],
  courses: mobx__WEBPACK_IMPORTED_MODULE_3__["observable"],
  setCount: mobx__WEBPACK_IMPORTED_MODULE_3__["action"]
}); // const courseStore = new CourseStore()

/* harmony default export */ __webpack_exports__["default"] = (CourseStore);

/***/ })

})
//# sourceMappingURL=index.js.9db7d45739390c66b8ce.hot-update.js.map