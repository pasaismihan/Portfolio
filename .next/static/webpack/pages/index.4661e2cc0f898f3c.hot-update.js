"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/sections/Experience.tsx":
/*!*************************************!*\
  !*** ./src/sections/Experience.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Experience() {\n    _s();\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const transformSelected = ()=>{\n            const underline = document.querySelector(\".underline\");\n            underline.style.top = \"\".concat(selected * 2.5, \"rem\");\n        };\n        transformSelected();\n    }, [\n        selected\n    ]);\n    const expereinces = [\n        {\n            name: \"WORKINTECH\",\n            role: \"Full Stack Developer\",\n            start: \"January 2023\",\n            end: \"Present\",\n            shortDescription: [\n                \" I finished among the top 10 students at Workintech educational institution, outperforming 1200 candidates, by successfully completing 20 challenge projects. Throughout my software journey, I diligently determined, built, and tested project requirements, adhering to the Agile development model. I effectively resolved issues encountered during project development and actively contributed to group management and collaboration. Looking ahead, my ambition is to leverage my project development skills and the team training I have received to make a meaningful impact in a professional setting. By doing so, I aim to continuously enhance my own abilities while driving growth for the company.\"\n            ]\n        },\n        {\n            name: \"MCA Eng.\",\n            role: \"Civil Static Design Engineer\",\n            start: \"November 2018\",\n            end: \"November 2022\",\n            shortDescription: [\n                \"Supervised construction sites and managed the construction of villa-type structures in Kas/Antalya.\",\n                \"Static loading and calculations of hangar type steel construction projects with sap2000 program\",\n                \"Creation and follow-up of reinforced concrete projects for 6 silo warehouses constructed in Nigeria\"\n            ]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"experience\",\n        id: \"experience\",\n        initial: \"hidden\",\n        whileInView: \"visible\",\n        viewport: {\n            once: true\n        },\n        transition: {\n            duration: 0.6\n        },\n        variants: {\n            visible: {\n                opacity: 1,\n                y: -50\n            },\n            hidden: {\n                opacity: 0,\n                y: 0\n            }\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Where I've Worked\"\n                }, void 0, false, {\n                    fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"exp-slider\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"underline\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            expereinces.map((expereince, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"exp-slider-item \".concat(index === selected && \"exp-slider-item-selected\"),\n                                    onClick: ()=>setSelected(index),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: expereince.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, this)\n                                }, expereince.name, false, {\n                                    fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"exp-details\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"exp-details-position\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: expereinces[selected].role\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"exp-details-position-company\",\n                                            children: \"\\xa0@\\xa0\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"exp-details-range\",\n                                    children: [\n                                        expereinces[selected].start,\n                                        \" - \",\n                                        expereinces[selected].end\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"exp-details-list\",\n                                    children: expereinces[selected].shortDescription.map((description, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"glass\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"exp-details-list-item\",\n                                                children: description\n                                            }, index, false, {\n                                                fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pasa/Portfolio/src/sections/Experience.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Experience, \"ELOVq1E7jhuVDLQ7mQA6E3oJLt4=\");\n_c = Experience;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Experience);\nvar _c;\n$RefreshReg$(_c, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvRXhwZXJpZW5jZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUQ7QUFDWjtBQUN2QyxTQUFTSSxhQUFhOztJQUNwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7SUFFekNELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNTSxvQkFBb0IsSUFBTTtZQUM5QixNQUFNQyxZQUFZQyxTQUFTQyxhQUFhLENBQWM7WUFDdERGLFVBQVdHLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEdBQWtCLE9BQWZQLFdBQVcsS0FBSTtRQUMzQztRQUNBRTtJQUNGLEdBQUc7UUFBQ0Y7S0FBUztJQUViLE1BQU1RLGNBQWM7UUFDbEI7WUFDRUMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsS0FBSztZQUNMQyxrQkFBa0I7Z0JBQ2hCO2FBQ0Q7UUFDSDtRQUVBO1lBQ0VKLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLEtBQUs7WUFDTEMsa0JBQWtCO2dCQUNoQjtnQkFDQTtnQkFDQTthQUNEO1FBQ0g7S0FDRDtJQUNELHFCQUNFLDhEQUFDZixxREFBVTtRQUNUaUIsV0FBVTtRQUNWQyxJQUFHO1FBQ0hDLFNBQVE7UUFDUkMsYUFBWTtRQUNaQyxVQUFVO1lBQUVDLE1BQU0sSUFBSTtRQUFDO1FBQ3ZCQyxZQUFZO1lBQUVDLFVBQVU7UUFBSTtRQUM1QkMsVUFBVTtZQUNSQyxTQUFTO2dCQUFFQyxTQUFTO2dCQUFHQyxHQUFHLENBQUM7WUFBRztZQUM5QkMsUUFBUTtnQkFBRUYsU0FBUztnQkFBR0MsR0FBRztZQUFFO1FBQzdCOzswQkFFQSw4REFBQ1o7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNhOzhCQUFHOzs7Ozs7Ozs7OzswQkFFTiw4REFBQ2Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDYzt3QkFBR2QsV0FBVTs7MENBQ1osOERBQUNEO2dDQUFJQyxXQUFVOzs7Ozs7NEJBQ2RQLFlBQVlzQixHQUFHLENBQUMsQ0FBQ0MsWUFBWUMsUUFBVTtnQ0FDdEMscUJBQ0UsOERBQUNDO29DQUNDbEIsV0FBVyxtQkFFVixPQURDaUIsVUFBVWhDLFlBQVk7b0NBRXhCa0MsU0FBUyxJQUFNakMsWUFBWStCOzhDQUczQiw0RUFBQ0c7a0RBQU1KLFdBQVd0QixJQUFJOzs7Ozs7bUNBRmpCc0IsV0FBV3RCLElBQUk7Ozs7OzRCQUsxQjs7Ozs7OztrQ0FFRiw4REFBQ0s7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ3FCOztzREFDQyw4REFBQ0Q7c0RBQU0zQixXQUFXLENBQUNSLFNBQVMsQ0FBQ1UsSUFBSTs7Ozs7O3NEQUNqQyw4REFBQ3lCOzRDQUFLcEIsV0FBVTtzREFBK0I7Ozs7Ozs7Ozs7Ozs4Q0FJakQsOERBQUNzQjtvQ0FBRXRCLFdBQVU7O3dDQUNWUCxXQUFXLENBQUNSLFNBQVMsQ0FBQ1csS0FBSzt3Q0FBQzt3Q0FBSUgsV0FBVyxDQUFDUixTQUFTLENBQUNZLEdBQUc7Ozs7Ozs7OENBRTVELDhEQUFDaUI7b0NBQUdkLFdBQVU7OENBQ1hQLFdBQVcsQ0FBQ1IsU0FBUyxDQUFDYSxnQkFBZ0IsQ0FBQ2lCLEdBQUcsQ0FDekMsQ0FBQ1EsYUFBYU4sc0JBQ1osOERBQUNsQjs0Q0FBSUMsV0FBVTtzREFDYiw0RUFBQ2tCO2dEQUFlbEIsV0FBVTswREFDdkJ1QjsrQ0FETU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTdCO0dBOUZTakM7S0FBQUE7QUFnR1QsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL0V4cGVyaWVuY2UudHN4PzkxMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5mdW5jdGlvbiBFeHBlcmllbmNlKCkge1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB1bmRlcmxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIi51bmRlcmxpbmVcIik7XG4gICAgICB1bmRlcmxpbmUhLnN0eWxlLnRvcCA9IGAke3NlbGVjdGVkICogMi41fXJlbWA7XG4gICAgfTtcbiAgICB0cmFuc2Zvcm1TZWxlY3RlZCgpO1xuICB9LCBbc2VsZWN0ZWRdKTtcblxuICBjb25zdCBleHBlcmVpbmNlcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIldPUktJTlRFQ0hcIixcbiAgICAgIHJvbGU6IFwiRnVsbCBTdGFjayBEZXZlbG9wZXJcIixcbiAgICAgIHN0YXJ0OiBcIkphbnVhcnkgMjAyM1wiLFxuICAgICAgZW5kOiBcIlByZXNlbnRcIixcbiAgICAgIHNob3J0RGVzY3JpcHRpb246IFtcbiAgICAgICAgXCIgSSBmaW5pc2hlZCBhbW9uZyB0aGUgdG9wIDEwIHN0dWRlbnRzIGF0IFdvcmtpbnRlY2ggZWR1Y2F0aW9uYWwgaW5zdGl0dXRpb24sIG91dHBlcmZvcm1pbmcgMTIwMCBjYW5kaWRhdGVzLCBieSBzdWNjZXNzZnVsbHkgY29tcGxldGluZyAyMCBjaGFsbGVuZ2UgcHJvamVjdHMuIFRocm91Z2hvdXQgbXkgc29mdHdhcmUgam91cm5leSwgSSBkaWxpZ2VudGx5IGRldGVybWluZWQsIGJ1aWx0LCBhbmQgdGVzdGVkIHByb2plY3QgcmVxdWlyZW1lbnRzLCBhZGhlcmluZyB0byB0aGUgQWdpbGUgZGV2ZWxvcG1lbnQgbW9kZWwuIEkgZWZmZWN0aXZlbHkgcmVzb2x2ZWQgaXNzdWVzIGVuY291bnRlcmVkIGR1cmluZyBwcm9qZWN0IGRldmVsb3BtZW50IGFuZCBhY3RpdmVseSBjb250cmlidXRlZCB0byBncm91cCBtYW5hZ2VtZW50IGFuZCBjb2xsYWJvcmF0aW9uLiBMb29raW5nIGFoZWFkLCBteSBhbWJpdGlvbiBpcyB0byBsZXZlcmFnZSBteSBwcm9qZWN0IGRldmVsb3BtZW50IHNraWxscyBhbmQgdGhlIHRlYW0gdHJhaW5pbmcgSSBoYXZlIHJlY2VpdmVkIHRvIG1ha2UgYSBtZWFuaW5nZnVsIGltcGFjdCBpbiBhIHByb2Zlc3Npb25hbCBzZXR0aW5nLiBCeSBkb2luZyBzbywgSSBhaW0gdG8gY29udGludW91c2x5IGVuaGFuY2UgbXkgb3duIGFiaWxpdGllcyB3aGlsZSBkcml2aW5nIGdyb3d0aCBmb3IgdGhlIGNvbXBhbnkuXCIsXG4gICAgICBdLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBuYW1lOiBcIk1DQSBFbmcuXCIsXG4gICAgICByb2xlOiBcIkNpdmlsIFN0YXRpYyBEZXNpZ24gRW5naW5lZXJcIixcbiAgICAgIHN0YXJ0OiBcIk5vdmVtYmVyIDIwMThcIixcbiAgICAgIGVuZDogXCJOb3ZlbWJlciAyMDIyXCIsXG4gICAgICBzaG9ydERlc2NyaXB0aW9uOiBbXG4gICAgICAgIFwiU3VwZXJ2aXNlZCBjb25zdHJ1Y3Rpb24gc2l0ZXMgYW5kIG1hbmFnZWQgdGhlIGNvbnN0cnVjdGlvbiBvZiB2aWxsYS10eXBlIHN0cnVjdHVyZXMgaW4gS2FzL0FudGFseWEuXCIsXG4gICAgICAgIFwiU3RhdGljIGxvYWRpbmcgYW5kIGNhbGN1bGF0aW9ucyBvZiBoYW5nYXIgdHlwZSBzdGVlbCBjb25zdHJ1Y3Rpb24gcHJvamVjdHMgd2l0aCBzYXAyMDAwIHByb2dyYW1cIixcbiAgICAgICAgXCJDcmVhdGlvbiBhbmQgZm9sbG93LXVwIG9mIHJlaW5mb3JjZWQgY29uY3JldGUgcHJvamVjdHMgZm9yIDYgc2lsbyB3YXJlaG91c2VzIGNvbnN0cnVjdGVkIGluIE5pZ2VyaWFcIixcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZVwiXG4gICAgICBpZD1cImV4cGVyaWVuY2VcIlxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxuICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42IH19XG4gICAgICB2YXJpYW50cz17e1xuICAgICAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHk6IC01MCB9LFxuICAgICAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogMCB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgIDxoMj5XaGVyZSBJJmFwb3M7dmUgV29ya2VkPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImV4cC1zbGlkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZVwiPjwvZGl2PlxuICAgICAgICAgIHtleHBlcmVpbmNlcy5tYXAoKGV4cGVyZWluY2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BleHAtc2xpZGVyLWl0ZW0gJHtcbiAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBzZWxlY3RlZCAmJiBcImV4cC1zbGlkZXItaXRlbS1zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWQoaW5kZXgpfVxuICAgICAgICAgICAgICAgIGtleT17ZXhwZXJlaW5jZS5uYW1lfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2V4cGVyZWluY2UubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cC1kZXRhaWxzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHAtZGV0YWlscy1wb3NpdGlvblwiPlxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICA8c3Bhbj57ZXhwZXJlaW5jZXNbc2VsZWN0ZWRdLnJvbGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJleHAtZGV0YWlscy1wb3NpdGlvbi1jb21wYW55XCI+XG4gICAgICAgICAgICAgICAgJm5ic3A7QCZuYnNwO1xuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXhwLWRldGFpbHMtcmFuZ2VcIj5cbiAgICAgICAgICAgICAge2V4cGVyZWluY2VzW3NlbGVjdGVkXS5zdGFydH0gLSB7ZXhwZXJlaW5jZXNbc2VsZWN0ZWRdLmVuZH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJleHAtZGV0YWlscy1saXN0XCI+XG4gICAgICAgICAgICAgIHtleHBlcmVpbmNlc1tzZWxlY3RlZF0uc2hvcnREZXNjcmlwdGlvbi5tYXAoXG4gICAgICAgICAgICAgICAgKGRlc2NyaXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGFzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZXhwLWRldGFpbHMtbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkV4cGVyaWVuY2UiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidHJhbnNmb3JtU2VsZWN0ZWQiLCJ1bmRlcmxpbmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsInRvcCIsImV4cGVyZWluY2VzIiwibmFtZSIsInJvbGUiLCJzdGFydCIsImVuZCIsInNob3J0RGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInZhcmlhbnRzIiwidmlzaWJsZSIsIm9wYWNpdHkiLCJ5IiwiaGlkZGVuIiwiaDIiLCJ1bCIsIm1hcCIsImV4cGVyZWluY2UiLCJpbmRleCIsImxpIiwib25DbGljayIsInNwYW4iLCJoMyIsInAiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sections/Experience.tsx\n"));

/***/ })

});