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

/***/ "./src/sections/Projects.tsx":
/*!***********************************!*\
  !*** ./src/sections/Projects.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n\n\n\nfunction Projects() {\n    const projectsData = [\n        {\n            image: \"/carauction.png\",\n            projectName: \"Car Auction Microservice App\",\n            projectDescription: \"this full stack website is an application that is made using microservice architecture, with SignalR, it is an application with features such as filtering and sorting, selling cars with auction via chat instantly, and identity system.\",\n            projectTech: [\n                \"Next.js\",\n                \".NET\",\n                \"Microservice Architecture\",\n                \"RabbitMQ\",\n                \"SignalR\",\n                \"Duende\",\n                \"PostgreSQL\",\n                \"Mongo DB\",\n                \"Docker\"\n            ],\n            projectExternalLinks: {\n                github: \"https://github.com/pasaismihan/CarStoreApp_Microservices\",\n                externalLink: \"\"\n            }\n        },\n        {\n            image: \"/resumemanagement.png\",\n            projectName: \"Resume Management Website\",\n            projectDescription: \"The aim of this website is to create a resume from scratch and download and use it as a pdf. The frontend of this full stack project with its convenient frontend and day/night option was made with typscript and react.js, and the backend was made with ASP.NET core. \",\n            projectTech: [\n                \"React\",\n                \"Sockets\",\n                \"Node.js\",\n                \"Express\",\n                \"MongoDB\",\n                \"Styled Components\"\n            ],\n            projectExternalLinks: {\n                github: \"https://github.com/pasaismihan/ResumeManagement\",\n                externalLink: \"\"\n            }\n        },\n        {\n            image: \"/project3.png\",\n            projectName: \"Netflix App\",\n            projectLink: \"https://netlify.com\",\n            projectDescription: \"I made a Netflix copy with TMBD Api. It has infinite scrolling and lets you watch movies by genre. You can also add movies to your favorites list.\",\n            projectTech: [\n                \"React\",\n                \"Node.js\",\n                \"Firebase\",\n                \"MongoDB\",\n                \"Express\",\n                \"Redux Toolkit\"\n            ],\n            projectExternalLinks: {\n                github: \"\",\n                externalLink: \"\"\n            }\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"projects\",\n        id: \"work\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                className: \"title\",\n                initial: \"hidden\",\n                whileInView: \"visible\",\n                viewport: {\n                    once: true\n                },\n                transition: {\n                    duration: 0.6\n                },\n                variants: {\n                    visible: {\n                        opacity: 1,\n                        y: -50\n                    },\n                    hidden: {\n                        opacity: 0,\n                        y: 0\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Some Things I’ve Built\"\n                }, void 0, false, {\n                    fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"projects-container\",\n                children: projectsData.map((param)=>{\n                    let { image , projectDescription , projectLink , projectExternalLinks , projectName , projectTech  } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"project\",\n                        initial: \"hidden\",\n                        whileInView: \"visible\",\n                        viewport: {\n                            once: true\n                        },\n                        transition: {\n                            duration: 0.6\n                        },\n                        variants: {\n                            visible: {\n                                opacity: 1,\n                                y: -50\n                            },\n                            hidden: {\n                                opacity: 0,\n                                y: 0\n                            }\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"project-image\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"overlay-border\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"project-image-overlay\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"project-image-container\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: image,\n                                            fill: true,\n                                            alt: projectName,\n                                            quality: 100\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"project-info\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"project-info-overline\",\n                                        children: \"Featured Project\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"project-info-title\",\n                                        children: projectName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"project-info-description\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: projectDescription\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"project-info-tech-list\",\n                                        children: projectTech.map((tech)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"project-info-tech-list-item\",\n                                                children: tech\n                                            }, tech, false, {\n                                                fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                                lineNumber: 122,\n                                                columnNumber: 23\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"project-info-links\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"project-info-links-item\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    href: projectExternalLinks.github,\n                                                    className: \"project-info-links-item-link\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiGithub, {}, void 0, false, {\n                                                        fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                                        lineNumber: 133,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                                    lineNumber: 129,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                                lineNumber: 128,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"project-info-links-item\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    href: projectExternalLinks.externalLink,\n                                                    className: \"project-info-links-item-link\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiExternalLink, {}, void 0, false, {\n                                                        fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                                        lineNumber: 141,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                                    lineNumber: 137,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                                lineNumber: 136,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, projectName, true, {\n                        fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pasa/Portfolio/src/sections/Projects.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVTswREFDWiw0RUFBQ2hCLGtEQUFJQTtvREFDSHdDLE1BQU03QixxQkFBcUJDLE1BQU07b0RBQ2pDSSxXQUFVOzhEQUVWLDRFQUFDZCxvREFBUUE7Ozs7Ozs7Ozs7Ozs7OzswREFHYiw4REFBQ3FDO2dEQUFHdkIsV0FBVTswREFDWiw0RUFBQ2hCLGtEQUFJQTtvREFDSHdDLE1BQU03QixxQkFBcUJFLFlBQVk7b0RBQ3ZDRyxXQUFVOzhEQUVWLDRFQUFDYiwwREFBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBNUNsQks7Ozs7O2dCQW1EWDs7Ozs7Ozs7Ozs7O0FBS1Y7S0FsSlNIO0FBb0pULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy9Qcm9qZWN0cy50c3g/NDg1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpR2l0aHViLCBGaUV4dGVybmFsTGluayB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZnVuY3Rpb24gUHJvamVjdHMoKSB7XG4gIGNvbnN0IHByb2plY3RzRGF0YSA9IFtcbiAgICB7XG4gICAgICBpbWFnZTogXCIvY2FyYXVjdGlvbi5wbmdcIixcbiAgICAgIHByb2plY3ROYW1lOiBcIkNhciBBdWN0aW9uIE1pY3Jvc2VydmljZSBBcHBcIixcblxuICAgICAgcHJvamVjdERlc2NyaXB0aW9uOlxuICAgICAgICBcInRoaXMgZnVsbCBzdGFjayB3ZWJzaXRlIGlzIGFuIGFwcGxpY2F0aW9uIHRoYXQgaXMgbWFkZSB1c2luZyBtaWNyb3NlcnZpY2UgYXJjaGl0ZWN0dXJlLCB3aXRoIFNpZ25hbFIsIGl0IGlzIGFuIGFwcGxpY2F0aW9uIHdpdGggZmVhdHVyZXMgc3VjaCBhcyBmaWx0ZXJpbmcgYW5kIHNvcnRpbmcsIHNlbGxpbmcgY2FycyB3aXRoIGF1Y3Rpb24gdmlhIGNoYXQgaW5zdGFudGx5LCBhbmQgaWRlbnRpdHkgc3lzdGVtLlwiLFxuICAgICAgcHJvamVjdFRlY2g6IFtcbiAgICAgICAgXCJOZXh0LmpzXCIsXG4gICAgICAgIFwiLk5FVFwiLFxuICAgICAgICBcIk1pY3Jvc2VydmljZSBBcmNoaXRlY3R1cmVcIixcbiAgICAgICAgXCJSYWJiaXRNUVwiLFxuICAgICAgICBcIlNpZ25hbFJcIixcbiAgICAgICAgXCJEdWVuZGVcIixcbiAgICAgICAgXCJQb3N0Z3JlU1FMXCIsXG4gICAgICAgIFwiTW9uZ28gREJcIixcbiAgICAgICAgXCJEb2NrZXJcIixcbiAgICAgIF0sXG4gICAgICBwcm9qZWN0RXh0ZXJuYWxMaW5rczoge1xuICAgICAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Bhc2Fpc21paGFuL0NhclN0b3JlQXBwX01pY3Jvc2VydmljZXNcIixcbiAgICAgICAgZXh0ZXJuYWxMaW5rOiBcIlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiBcIi9yZXN1bWVtYW5hZ2VtZW50LnBuZ1wiLFxuICAgICAgcHJvamVjdE5hbWU6IFwiUmVzdW1lIE1hbmFnZW1lbnQgV2Vic2l0ZVwiLFxuICAgICAgcHJvamVjdERlc2NyaXB0aW9uOlxuICAgICAgICBcIlRoZSBhaW0gb2YgdGhpcyB3ZWJzaXRlIGlzIHRvIGNyZWF0ZSBhIHJlc3VtZSBmcm9tIHNjcmF0Y2ggYW5kIGRvd25sb2FkIGFuZCB1c2UgaXQgYXMgYSBwZGYuIFRoZSBmcm9udGVuZCBvZiB0aGlzIGZ1bGwgc3RhY2sgcHJvamVjdCB3aXRoIGl0cyBjb252ZW5pZW50IGZyb250ZW5kIGFuZCBkYXkvbmlnaHQgb3B0aW9uIHdhcyBtYWRlIHdpdGggdHlwc2NyaXB0IGFuZCByZWFjdC5qcywgYW5kIHRoZSBiYWNrZW5kIHdhcyBtYWRlIHdpdGggQVNQLk5FVCBjb3JlLiBcIixcbiAgICAgIHByb2plY3RUZWNoOiBbXG4gICAgICAgIFwiUmVhY3RcIixcbiAgICAgICAgXCJTb2NrZXRzXCIsXG4gICAgICAgIFwiTm9kZS5qc1wiLFxuICAgICAgICBcIkV4cHJlc3NcIixcbiAgICAgICAgXCJNb25nb0RCXCIsXG4gICAgICAgIFwiU3R5bGVkIENvbXBvbmVudHNcIixcbiAgICAgIF0sXG4gICAgICBwcm9qZWN0RXh0ZXJuYWxMaW5rczoge1xuICAgICAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Bhc2Fpc21paGFuL1Jlc3VtZU1hbmFnZW1lbnRcIixcbiAgICAgICAgZXh0ZXJuYWxMaW5rOiBcIlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiBcIi9wcm9qZWN0My5wbmdcIixcbiAgICAgIHByb2plY3ROYW1lOiBcIk5ldGZsaXggQXBwXCIsXG4gICAgICBwcm9qZWN0TGluazogXCJodHRwczovL25ldGxpZnkuY29tXCIsXG4gICAgICBwcm9qZWN0RGVzY3JpcHRpb246XG4gICAgICAgIFwiSSBtYWRlIGEgTmV0ZmxpeCBjb3B5IHdpdGggVE1CRCBBcGkuIEl0IGhhcyBpbmZpbml0ZSBzY3JvbGxpbmcgYW5kIGxldHMgeW91IHdhdGNoIG1vdmllcyBieSBnZW5yZS4gWW91IGNhbiBhbHNvIGFkZCBtb3ZpZXMgdG8geW91ciBmYXZvcml0ZXMgbGlzdC5cIixcbiAgICAgIHByb2plY3RUZWNoOiBbXG4gICAgICAgIFwiUmVhY3RcIixcbiAgICAgICAgXCJOb2RlLmpzXCIsXG4gICAgICAgIFwiRmlyZWJhc2VcIixcbiAgICAgICAgXCJNb25nb0RCXCIsXG4gICAgICAgIFwiRXhwcmVzc1wiLFxuICAgICAgICBcIlJlZHV4IFRvb2xraXRcIixcbiAgICAgIF0sXG4gICAgICBwcm9qZWN0RXh0ZXJuYWxMaW5rczoge1xuICAgICAgICBnaXRodWI6IFwiXCIsXG4gICAgICAgIGV4dGVybmFsTGluazogXCJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzXCIgaWQ9XCJ3b3JrXCI+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZVwiXG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxuICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiB9fVxuICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogLTUwIH0sXG4gICAgICAgICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGgyPlNvbWUgVGhpbmdzIEnigJl2ZSBCdWlsdDwvaDI+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWNvbnRhaW5lclwiPlxuICAgICAgICB7cHJvamVjdHNEYXRhLm1hcChcbiAgICAgICAgICAoe1xuICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcm9qZWN0TGluayxcbiAgICAgICAgICAgIHByb2plY3RFeHRlcm5hbExpbmtzLFxuICAgICAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgICAgICBwcm9qZWN0VGVjaCxcbiAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3RcIlxuICAgICAgICAgICAgICAgIGtleT17cHJvamVjdE5hbWV9XG4gICAgICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCJcbiAgICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42IH19XG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogLTUwIH0sXG4gICAgICAgICAgICAgICAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogMCB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheS1ib3JkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1pbWFnZS1vdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBmaWxsIGFsdD17cHJvamVjdE5hbWV9IHF1YWxpdHk9ezEwMH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9qZWN0LWluZm8tb3ZlcmxpbmVcIj5GZWF0dXJlZCBQcm9qZWN0PC9wPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2plY3QtaW5mby10aXRsZVwiPntwcm9qZWN0TmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWluZm8tZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3Byb2plY3REZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9qZWN0LWluZm8tdGVjaC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0VGVjaC5tYXAoKHRlY2gpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvamVjdC1pbmZvLXRlY2gtbGlzdC1pdGVtXCIga2V5PXt0ZWNofT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0ZWNofVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9qZWN0LWluZm8tbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2plY3QtaW5mby1saW5rcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3RFeHRlcm5hbExpbmtzLmdpdGh1Yn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3QtaW5mby1saW5rcy1pdGVtLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaUdpdGh1YiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2plY3QtaW5mby1saW5rcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3RFeHRlcm5hbExpbmtzLmV4dGVybmFsTGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3QtaW5mby1saW5rcy1pdGVtLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaUV4dGVybmFsTGluayAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIlJlYWN0IiwiRmlHaXRodWIiLCJGaUV4dGVybmFsTGluayIsIm1vdGlvbiIsIlByb2plY3RzIiwicHJvamVjdHNEYXRhIiwiaW1hZ2UiLCJwcm9qZWN0TmFtZSIsInByb2plY3REZXNjcmlwdGlvbiIsInByb2plY3RUZWNoIiwicHJvamVjdEV4dGVybmFsTGlua3MiLCJnaXRodWIiLCJleHRlcm5hbExpbmsiLCJwcm9qZWN0TGluayIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidmFyaWFudHMiLCJ2aXNpYmxlIiwib3BhY2l0eSIsInkiLCJoaWRkZW4iLCJoMiIsIm1hcCIsInNyYyIsImZpbGwiLCJhbHQiLCJxdWFsaXR5IiwicCIsImgzIiwidWwiLCJ0ZWNoIiwibGkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/Projects.tsx\n"));

/***/ })

});