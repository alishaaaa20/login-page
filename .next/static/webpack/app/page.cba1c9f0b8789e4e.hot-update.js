"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/login/loginPage.tsx":
/*!********************************************!*\
  !*** ./src/components/login/loginPage.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./src/components/ui/label.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction LoginPage() {\n    _s();\n    const [focusedInput, setFocusedInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-lg p-6 border rounded-lg shadow-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                            htmlFor: \"phone\",\n                            className: focusedInput === \"phone\" ? \"text-blue-500\" : \"\",\n                            children: \"Phone Number\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alishakhatri/Desktop/login-page/src/components/login/loginPage.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                            type: \"tel\",\n                            id: \"phone\",\n                            placeholder: \"Enter your phone number\",\n                            required: true,\n                            className: \"w-full mt-1\",\n                            onFocus: ()=>setFocusedInput(\"phone\"),\n                            onBlur: ()=>setFocusedInput(\"\")\n                        }, void 0, false, {\n                            fileName: \"/Users/alishakhatri/Desktop/login-page/src/components/login/loginPage.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alishakhatri/Desktop/login-page/src/components/login/loginPage.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                            htmlFor: \"password\",\n                            className: focusedInput === \"password\" ? \"text-blue-500\" : \"\",\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alishakhatri/Desktop/login-page/src/components/login/loginPage.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                            type: \"password\",\n                            id: \"password\",\n                            placeholder: \"Enter your password\",\n                            required: true,\n                            className: \"w-full mt-1\",\n                            onFocus: ()=>setFocusedInput(\"password\"),\n                            onBlur: ()=>setFocusedInput(\"\")\n                        }, void 0, false, {\n                            fileName: \"/Users/alishakhatri/Desktop/login-page/src/components/login/loginPage.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alishakhatri/Desktop/login-page/src/components/login/loginPage.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    type: \"submit\",\n                    className: \"w-full bg-blue-500 hover:bg-blue-600\",\n                    children: \"Log In\"\n                }, void 0, false, {\n                    fileName: \"/Users/alishakhatri/Desktop/login-page/src/components/login/loginPage.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alishakhatri/Desktop/login-page/src/components/login/loginPage.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alishakhatri/Desktop/login-page/src/components/login/loginPage.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginPage, \"Niv88HMXRTXf6lozBq/MnVOcKAE=\");\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xvZ2luL2xvZ2luUGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRThDO0FBQ0E7QUFDRTtBQUNmO0FBRWxCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSCwrQ0FBUUEsQ0FBQztJQUVqRCxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ1AsdURBQUtBOzRCQUNKUSxTQUFROzRCQUNSRCxXQUFXSCxpQkFBaUIsVUFBVSxrQkFBa0I7c0NBQ3pEOzs7Ozs7c0NBR0QsOERBQUNMLHVEQUFLQTs0QkFDSlUsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSEMsYUFBWTs0QkFDWkMsUUFBUTs0QkFDUkwsV0FBVTs0QkFDVk0sU0FBUyxJQUFNUixnQkFBZ0I7NEJBQy9CUyxRQUFRLElBQU1ULGdCQUFnQjs7Ozs7Ozs7Ozs7OzhCQUlsQyw4REFBQ0M7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDUCx1REFBS0E7NEJBQ0pRLFNBQVE7NEJBQ1JELFdBQVdILGlCQUFpQixhQUFhLGtCQUFrQjtzQ0FDNUQ7Ozs7OztzQ0FHRCw4REFBQ0wsdURBQUtBOzRCQUNKVSxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxhQUFZOzRCQUNaQyxRQUFROzRCQUNSTCxXQUFVOzRCQUNWTSxTQUFTLElBQU1SLGdCQUFnQjs0QkFDL0JTLFFBQVEsSUFBTVQsZ0JBQWdCOzs7Ozs7Ozs7Ozs7OEJBSWxDLDhEQUFDSix5REFBTUE7b0JBQUNRLE1BQUs7b0JBQVNGLFdBQVU7OEJBQXVDOzs7Ozs7Ozs7Ozs7Ozs7OztBQU0vRTtHQWhEd0JKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xvZ2luL2xvZ2luUGFnZS50c3g/MjdhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblBhZ2UoKSB7XG4gIGNvbnN0IFtmb2N1c2VkSW5wdXQsIHNldEZvY3VzZWRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWluLWgtc2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1sZyBwLTYgYm9yZGVyIHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj1cInBob25lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Zm9jdXNlZElucHV0ID09PSBcInBob25lXCIgPyBcInRleHQtYmx1ZS01MDBcIiA6IFwiXCJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUGhvbmUgTnVtYmVyXG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxuICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGhvbmUgbnVtYmVyXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMVwiXG4gICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1c2VkSW5wdXQoXCJwaG9uZVwiKX1cbiAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gc2V0Rm9jdXNlZElucHV0KFwiXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Zm9jdXNlZElucHV0ID09PSBcInBhc3N3b3JkXCIgPyBcInRleHQtYmx1ZS01MDBcIiA6IFwiXCJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMVwiXG4gICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1c2VkSW5wdXQoXCJwYXNzd29yZFwiKX1cbiAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gc2V0Rm9jdXNlZElucHV0KFwiXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMFwiPlxuICAgICAgICAgIExvZyBJblxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIklucHV0IiwiTGFiZWwiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsIkxvZ2luUGFnZSIsImZvY3VzZWRJbnB1dCIsInNldEZvY3VzZWRJbnB1dCIsImRpdiIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwib25Gb2N1cyIsIm9uQmx1ciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/login/loginPage.tsx\n"));

/***/ })

});