/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("var institute;\nvar registerButton = document.getElementById('registerButton');\nvar instituteInput = document.getElementById('instituteInput');\nvar instituteEmail = document.getElementById('instituteEmail');\nvar instituteAdminName = document.getElementById('displayName');\nvar institutePassword = document.getElementById('institutePassword');\nvar instituteAdmin;\nvar signUpForm = document.getElementById('signUpForm').addEventListener('submit', function (e) {\n  e.preventDefault();\n});\nregisterButton.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log('hey');\n  institute = {\n    insName: instituteInput.value,\n    insAdminName: instituteAdminName.value,\n    insAdminEmail: instituteEmail.value,\n    insAdminPass: institutePassword.value,\n    teachers: new Array(),\n    students: new Array()\n  };\n  console.log(institute);\n  location.replace(\"trial.html\");\n});\n\n//# sourceURL=webpack://api-project/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;