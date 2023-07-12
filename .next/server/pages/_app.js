(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5605:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Fira_Code_30ef13', '__Fira_Code_Fallback_30ef13'","fontStyle":"normal"},
	"className": "__className_30ef13"
};


/***/ }),

/***/ 3290:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Raleway_e42c30', '__Raleway_Fallback_e42c30'","fontStyle":"normal"},
	"className": "__className_e42c30"
};


/***/ }),

/***/ 2434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/pages/_app.tsx","import":"Raleway","arguments":[{"subsets":["latin"]}],"variableName":"raleway"}
var _app_tsx_import_Raleway_arguments_subsets_latin_variableName_raleway_ = __webpack_require__(3290);
var _app_tsx_import_Raleway_arguments_subsets_latin_variableName_raleway_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_Raleway_arguments_subsets_latin_variableName_raleway_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/pages/_app.tsx","import":"Fira_Code","arguments":[{"weight":["300","400","500","600","700"],"subsets":["latin"]}],"variableName":"firaCode"}
var _app_tsx_import_Fira_Code_arguments_weight_300_400_500_600_700_subsets_latin_variableName_firaCode_ = __webpack_require__(5605);
var _app_tsx_import_Fira_Code_arguments_weight_300_400_500_600_700_subsets_latin_variableName_firaCode_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_Fira_Code_arguments_weight_300_400_500_600_700_subsets_latin_variableName_firaCode_);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: ./src/scss/globals.css
var globals = __webpack_require__(7534);
// EXTERNAL MODULE: ./src/scss/index.scss
var scss = __webpack_require__(3014);
;// CONCATENATED MODULE: ./src/pages/_app.tsx






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx((style_default()), {
                id: "2f594d4e3811c18f",
                dynamic: [
                    (_app_tsx_import_Raleway_arguments_subsets_latin_variableName_raleway_default()).style.fontFamily,
                    (_app_tsx_import_Fira_Code_arguments_weight_300_400_500_600_700_subsets_latin_variableName_firaCode_default()).style.fontFamily
                ],
                children: `:root{--raleway:${(_app_tsx_import_Raleway_arguments_subsets_latin_variableName_raleway_default()).style.fontFamily};--fira-code:${(_app_tsx_import_Fira_Code_arguments_weight_300_400_500_600_700_subsets_latin_variableName_firaCode_default()).style.fontFamily}}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps,
                className: style_default().dynamic([
                    [
                        "2f594d4e3811c18f",
                        [
                            (_app_tsx_import_Raleway_arguments_subsets_latin_variableName_raleway_default()).style.fontFamily,
                            (_app_tsx_import_Fira_Code_arguments_weight_300_400_500_600_700_subsets_latin_variableName_firaCode_default()).style.fontFamily
                        ]
                    ]
                ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
            }),
            ";"
        ]
    });
}


/***/ }),

/***/ 7534:
/***/ (() => {



/***/ }),

/***/ 3014:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2434));
module.exports = __webpack_exports__;

})();