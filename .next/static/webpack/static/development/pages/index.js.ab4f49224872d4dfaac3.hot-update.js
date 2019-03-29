webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! enquire-js */ "./node_modules/enquire-js/main.js");
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(enquire_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Home_Nav0__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Home/Nav0 */ "./pages/Home/Nav0.js");
/* harmony import */ var _Home_Banner0__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Home/Banner0 */ "./pages/Home/Banner0.js");
/* harmony import */ var _Home_Content4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Home/Content4 */ "./pages/Home/Content4.js");
/* harmony import */ var _Home_Content5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Home/Content5 */ "./pages/Home/Content5.js");
/* harmony import */ var _Home_Content0__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Home/Content0 */ "./pages/Home/Content0.js");
/* harmony import */ var _Home_Content7__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Home/Content7 */ "./pages/Home/Content7.js");
/* harmony import */ var _Home_Content6__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Home/Content6 */ "./pages/Home/Content6.js");
/* harmony import */ var _Home_Footer1__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Home/Footer1 */ "./pages/Home/Footer1.js");
/* harmony import */ var _Home_data_source__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Home/data.source */ "./pages/Home/data.source.js");
/* harmony import */ var _Home_less_antMotionStyle_less__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Home/less/antMotionStyle.less */ "./pages/Home/less/antMotionStyle.less");
/* harmony import */ var _Home_less_antMotionStyle_less__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Home_less_antMotionStyle_less__WEBPACK_IMPORTED_MODULE_16__);





var _jsxFileName = "/home/phat/tp/innos-homepage/pages/index.js";

/* eslint no-undef: 0 */

/* eslint arrow-parens: 0 */












var isMobile;
Object(enquire_js__WEBPACK_IMPORTED_MODULE_6__["enquireScreen"])(function (b) {
  isMobile = b;
}); // const { location } = window;

var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _React$Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).call(this, props));
    _this.state = {
      isMobile: isMobile // show: !location.port, // 如果不是 dva 2.0 请删除

    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // 适配手机屏幕;
      Object(enquire_js__WEBPACK_IMPORTED_MODULE_6__["enquireScreen"])(function (b) {
        _this2.setState({
          isMobile: !!b
        });
      }); // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；

      /* 如果不是 dva 2.0 请删除 start */
      // if (location.port) {
      // 样式 build 时间在 200-300ms 之间;

      setTimeout(function () {
        _this2.setState({
          show: true
        });
      }, 500); // }

      /* 如果不是 dva 2.0 请删除 end */
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = [react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Home_Nav0__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "Nav0_0",
        key: "Nav0_0",
        dataSource: _Home_data_source__WEBPACK_IMPORTED_MODULE_15__["Nav00DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Home_Banner0__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "Banner0_0",
        key: "Banner0_0",
        dataSource: _Home_data_source__WEBPACK_IMPORTED_MODULE_15__["Banner00DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Home_Content4__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "Content4_0",
        key: "Content4_0",
        dataSource: _Home_data_source__WEBPACK_IMPORTED_MODULE_15__["Content40DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Home_Content5__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "Content5_0",
        key: "Content5_0",
        dataSource: _Home_data_source__WEBPACK_IMPORTED_MODULE_15__["Content50DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Home_Content0__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: "Content0_0",
        key: "Content0_0",
        dataSource: _Home_data_source__WEBPACK_IMPORTED_MODULE_15__["Content00DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Home_Content7__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: "Content7_0",
        key: "Content7_0",
        dataSource: _Home_data_source__WEBPACK_IMPORTED_MODULE_15__["Content70DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Home_Content5__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "Content5_1",
        key: "Content5_1",
        dataSource: _Home_data_source__WEBPACK_IMPORTED_MODULE_15__["Content51DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Home_Content6__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "Content6_0",
        key: "Content6_0",
        dataSource: _Home_data_source__WEBPACK_IMPORTED_MODULE_15__["Content60DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Home_Footer1__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: "Footer1_0",
        key: "Footer1_0",
        dataSource: _Home_data_source__WEBPACK_IMPORTED_MODULE_15__["Footer10DataSource"],
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })];
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "templates-wrapper",
        ref: function ref(d) {
          _this3.dom = d;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: styleSheet
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), this.state.show && children);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.ab4f49224872d4dfaac3.hot-update.js.map